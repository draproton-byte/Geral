#!/usr/bin/env python3
"""Recorta a Dra. Proton das fotos curadas (U2Net human seg -> trimap -> pymatting).
Uso: python3 src/recortar.py NN [NN ...]        (gera recortes/recorte-NN.png + previews)
     python3 src/recortar.py --json              (monta recortes/recortes.json)
Fonte: fotos/foto-NN.jpg (NN=39 usa o original IMG_9791 baixado do Drive em fotos/orig/IMG_9791.jpg).
"""
import sys, os, json
import numpy as np, onnxruntime as ort, scipy.ndimage as nd
from PIL import Image
ROOT = '/home/user/Geral/black-vitalicia'
OUT = ROOT + '/recortes'
MODEL = '/tmp/models/u2net_human_seg.onnx'
MAXSIDE = 1400
BG_LO, BG_HI, CHOKE, CORE, GAP_D = 0.04, 0.11, 0.2, 22, 0.07
# fracao da altura da foto onde o enquadramento termina (cintura); topo opcional
CROP = {'02': .74, '03': .80, '04': .88, '05': .93, '06': .88, '08': .86, '11': .88,
        '12': .85, '14': .88, '17': .90, '25': .90, '20': .82, '39': .78}
SRC = {'39': ROOT + '/fotos/orig/IMG_9791.jpg'}

def u2(im, sess):
    inp = sess.get_inputs()[0]
    x = np.asarray(im.resize((320, 320), Image.BILINEAR), dtype=np.float32) / 255.
    x = (x - [0.485, 0.456, 0.406]) / [0.229, 0.224, 0.225]
    y = sess.run(None, {inp.name: x.transpose(2, 0, 1)[None].astype(np.float32)})[0][0, 0]
    y = (y - y.min()) / (y.max() - y.min() + 1e-8)
    return np.asarray(Image.fromarray((y * 255).astype(np.uint8)).resize(im.size, Image.BICUBIC), dtype=np.float32) / 255.

def keep_main(a, thr=0.1, min_frac=0.02):
    """remove ilhas de alfa isoladas fora do corpo (mantem componentes grandes)"""
    lab, n = nd.label(a > thr)
    if n == 0: return a
    sizes = nd.sum(np.ones_like(a), lab, range(1, n + 1))
    keep = np.zeros(n + 1, bool)
    keep[1:] = sizes >= max(sizes.max() * min_frac, 400)
    # componentes pequenos encostados no corpo (fios de cabelo) ficam por dilatacao
    body = keep[lab]
    near = nd.gaussian_filter(nd.binary_dilation(body, iterations=6).astype(float), 2)
    a = a * near
    return a

PARAMS = {'02': dict(BG_LO=.08, BG_HI=.22, CORE=14)}   # ajustes por foto

def cut(nn):
    BG_LO_, BG_HI_, CORE_ = [PARAMS.get(nn, {}).get(k, v) for k, v in (('BG_LO', BG_LO), ('BG_HI', BG_HI), ('CORE', CORE))]
    from pymatting import estimate_alpha_cf, estimate_foreground_ml
    src = SRC.get(nn, f'{ROOT}/fotos/foto-{nn}.jpg')
    im = Image.open(src).convert('RGB')
    W, H = im.size
    s = MAXSIDE / max(W, H)
    if s < 1: im = im.resize((round(W * s), round(H * s)), Image.LANCZOS)
    # borda replicada: evita artefatos onde o corpo e cortado pela borda da foto
    PAD = 48
    im = Image.fromarray(np.pad(np.asarray(im), ((PAD, PAD), (PAD, PAD), (0, 0)), mode='edge'))
    cf = CROP.get(nn)   # o matting roda na foto inteira; o corte da cintura e aplicado no fim
    sess = ort.InferenceSession(MODEL, providers=['CPUExecutionProvider'])
    m = u2(im, sess)
    m = nd.gaussian_filter(m, 1.0)
    fg = nd.binary_erosion(m > .92, iterations=12)
    bg = ~nd.binary_dilation(m > .04, iterations=20)
    tri = np.full(m.shape, .5); tri[fg] = 1; tri[bg] = 0
    img = np.asarray(im, dtype=np.float64) / 255.
    a = estimate_alpha_cf(img, tri)
    a = np.clip(a, 0, 1)
    # limita o alfa a vizinhanca da mascara U2Net (corta pedacos de fundo longe do corpo)
    lim = nd.gaussian_filter(nd.binary_dilation(m > .3, iterations=10).astype(float), 3)
    a = a * lim
    # modelo de fundo (suave) estimado dos pixels de fundo conhecidos; mata alfa onde a cor == fundo
    wk = bg.astype(float)
    num = np.stack([nd.gaussian_filter(img[..., c] * wk, 40) for c in range(3)], -1)
    bgest = num / (nd.gaussian_filter(wk, 40)[..., None] + 1e-6)
    d = np.sqrt(((img - bgest) ** 2).sum(-1))
    # fundo local: cor do pixel de fundo conhecido mais proximo (cobre paredes com gradiente/textura)
    bgm = nd.binary_erosion(bg, iterations=2)
    nn_ = nd.distance_transform_edt(~bgm, return_distances=False, return_indices=True)
    sm = np.stack([nd.gaussian_filter(img[..., c], 2) for c in range(3)], -1)
    bgl = np.stack([nd.gaussian_filter(sm[..., c], 6)[nn_[0], nn_[1]] for c in range(3)], -1)
    d = np.minimum(d, np.sqrt(((sm - bgl) ** 2).sum(-1)))
    core = nd.gaussian_filter(nd.binary_erosion(m > .6, iterations=CORE_).astype(float), 4)
    k = np.clip((d - BG_LO_) / (BG_HI_ - BG_LO_), 0, 1)
    k = np.maximum(k, core)
    a = a * k
    # vaos de fundo dentro do corpo (entre braco e tronco): componentes grandes com cor == fundo
    gap = (d < GAP_D) & (core > .5) & (nd.gaussian_filter(m, 1) > .3)
    lab, nl = nd.label(gap)
    if nl:
        sz = nd.sum(np.ones_like(d), lab, range(1, nl + 1))
        big = np.zeros(nl + 1, bool); big[1:] = sz >= 120
        gm = nd.binary_dilation(big[lab], iterations=2)
        a = a * (1 - nd.gaussian_filter(gm.astype(float), 1.2))
    a = np.clip((a - CHOKE) / (1 - CHOKE), 0, 1)           # choke
    a = keep_main(a)
    f = estimate_foreground_ml(img, a)
    # descontaminacao: bordas puxam a cor do interior mais proximo
    inner = nd.binary_erosion(a > .98, iterations=3)
    idx = nd.distance_transform_edt(~inner, return_distances=False, return_indices=True)
    fin = f[idx[0], idx[1]]
    k = np.clip((0.97 - a) / 0.6, 0, 1)[..., None] * 0.7
    f = f * (1 - k) + fin * k
    # alfa binario do preenchimento do corpo (evita buracos): fecha furos internos
    out = np.dstack([np.clip(f, 0, 1), a])
    res = Image.fromarray((out * 255 + .5).astype(np.uint8), 'RGBA')
    res = res.crop((PAD, PAD, res.width - PAD, res.height - PAD))
    if cf: res = res.crop((0, 0, res.width, round(res.height * cf)))
    os.makedirs(OUT, exist_ok=True)
    res.save(f'{OUT}/recorte-{nn}.png')
    return res

def preview(nn, w=700):
    im = Image.open(f'{OUT}/recorte-{nn}.png'); h = round(w * im.height / im.width)
    S = Image.new('RGB', (w * 2, h), '#150808'); S.paste(Image.new('RGB', (w, h), '#F9F3EA'), (w, 0))
    t = im.resize((w, h), Image.LANCZOS); S.paste(t, (0, 0), t); S.paste(t, (w, 0), t)
    d = os.environ.get('PREVDIR', '/tmp'); os.makedirs(d, exist_ok=True)
    S.save(f'{d}/prev-{nn}.jpg', quality=90)

if __name__ == '__main__':
    if sys.argv[1] == '--json':
        raise SystemExit('ver recortes.json gerado a parte (meta em src/recortes_meta.json)')
    for nn in sys.argv[1:]:
        cut(nn); preview(nn); print('ok', nn, flush=True)

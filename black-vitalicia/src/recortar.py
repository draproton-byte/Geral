#!/usr/bin/env python3
"""Recorta a Dra. Proton das fotos curadas (U2Net human seg -> trimap -> pymatting).
Uso: python3 src/recortar.py NN [NN ...]        (gera recortes/recorte-NN.png + previews; max 3 processos em paralelo)
     python3 src/recortar.py --json              (monta recortes/recortes.json)
Fotos aprovadas: 03 04 05 06 08 10 11 12 14 17 20 23 24 25 30 31 33 34 36 39(=IMG_9791)
Fonte: fotos/foto-NN.jpg (NN=39 usa o original IMG_9791 baixado do Drive em fotos/orig/IMG_9791.jpg).
"""
import sys, os, json
import numpy as np, onnxruntime as ort, scipy.ndimage as nd
from PIL import Image
ROOT = '/home/user/Geral/black-vitalicia'
OUT = ROOT + '/recortes'
MODEL = '/tmp/models/u2net_human_seg.onnx'
MAXSIDE = 1400
BG_LO, BG_HI, CHOKE, CORE, GAP_D, GAP_Y, GAP_R = 0.04, 0.11, 0.2, 22, 0.22, 0.42, 110
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

# caixas (x0,y0,x1,y1 em px do PNG final) onde o fundo aparece entre braco e tronco: apaga pixels claros
HOLES = {'17': [(660, 850, 760, 1060)], '34': [(645, 860, 750, 1060), (180, 895, 265, 1030)],
         '31': [(675, 860, 750, 1070)], '11': [(550, 750, 615, 950)], '25': [(670, 820, 760, 1030)]}
NR = 12
HALO_R = 12
FGH = 16
HOLE_MAX = 2500
KEEPFR = {'04'}
FA_MAX, FS_MAX, FL_MIN = .85, .28, .40
NOFRINGE = None  # regra de franja desligada (apagava brilho legitimo do tecido)
FR_W, FR_L, FR_S = 14, .42, .30
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
    fg_hard = nd.binary_erosion(m > .85, iterations=FGH)
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
    a = np.where(fg_hard, 1.0, a)   # miolo seguro do corpo nunca fica transparente
    # vaos de fundo dentro do corpo (entre braco e tronco): componentes grandes com cor == fundo
    yy = (np.arange(d.shape[0])[:, None] > GAP_Y * d.shape[0])
    luma = img.mean(-1)
    dbg = nd.distance_transform_edt(~bg)
    sat = (img.max(-1) - img.min(-1)) / (img.max(-1) + 1e-6)
    gap = (d < GAP_D) & (luma > .42) & (sat < .40) & (core > .5) & yy & (dbg < GAP_R)
    lab, nl = nd.label(gap)
    if nl:
        sz = nd.sum(np.ones_like(d), lab, range(1, nl + 1))
        big = np.zeros(nl + 1, bool); big[1:] = sz >= 60
        gm = nd.binary_dilation(big[lab], iterations=2)
        a = a * (1 - nd.gaussian_filter(gm.astype(float), 1.2))
    a = np.clip((a - CHOKE) / (1 - CHOKE), 0, 1)           # choke
    a = keep_main(a)
    # halo claro na borda de tecido escuro: borda mais clara que o interior escuro vizinho -> remove
    inn = nd.binary_erosion(a > .98, iterations=6)
    ii = nd.distance_transform_edt(~inn, return_distances=False, return_indices=True)
    lum = img.mean(-1)
    lin = nd.gaussian_filter(lum * inn, 3) / (nd.gaussian_filter(inn.astype(float), 3) + 1e-6)
    lin = lin[ii[0], ii[1]]
    dist = nd.distance_transform_edt(~inn)
    dout_ = nd.distance_transform_edt(m > .3)
    halo = (dist < 9) & (dist > 0) & (lin < .22) & (lum > lin + .10) & (dout_ < HALO_R)
    halo = nd.binary_dilation(halo, iterations=1)
    a = a * (1 - nd.gaussian_filter(halo.astype(float), 0.8))
    # franja neutra/clara colada na silhueta (fundo vazando): tira (nao vale p/ terno branco)
    if NOFRINGE is not None and nn not in NOFRINGE:
        satp = (img.max(-1) - img.min(-1)) / (img.max(-1) + 1e-6)
        edge = nd.binary_dilation(a > .5, iterations=1) & ~nd.binary_erosion(a > .5, iterations=FR_W)
        fr = edge & (lum > FR_L) & (satp < FR_S)
        fr = nd.binary_dilation(fr, iterations=2) & (a > 0) & ~nd.binary_erosion(a > .5, iterations=FR_W + 6)
        a = a * (1 - nd.gaussian_filter(fr.astype(float), 0.8))
    for (x0, y0, x1, y1) in HOLES.get(nn, []):
        box = np.zeros_like(a, bool); box[y0 + PAD:y1 + PAD, x0 + PAD:x1 + PAD] = True
        bad = box & (lum > .17)
        bad = nd.binary_dilation(bad, iterations=4) & box
        a = np.where(bad, 0, a)
    f = estimate_foreground_ml(img, a)
    # descontaminacao: bordas puxam a cor do interior mais proximo
    inner = nd.binary_erosion(a > .98, iterations=3)
    idx = nd.distance_transform_edt(~inner, return_distances=False, return_indices=True)
    fin = f[idx[0], idx[1]]
    k = np.clip((0.97 - a) / 0.6, 0, 1)[..., None] * 0.7
    f = f * (1 - k) + fin * k
    # franja clara/neutra semitransparente (fundo vazando): zera alfa onde a cor do 1o plano e quase branca/bege neutra
    if nn not in KEEPFR:
        fl = f.mean(-1); fs = (f.max(-1) - f.min(-1)) / (f.max(-1) + 1e-6)
        bad = (a < FA_MAX) & (a > 0) & (fs < FS_MAX) & (fl > FL_MIN)
        bad = nd.binary_dilation(bad, iterations=1)
        a = a * (1 - nd.gaussian_filter((bad & (a < FA_MAX + .1)).astype(float), 0.7))
    # alfa binario do preenchimento do corpo (evita buracos): fecha furos internos
    a = keep_main(a)
    # entalhes na borda do tecido escuro (brilho do tecido confundido com fundo): fecha e preenche com a cor do tecido
    core = a > .5
    yy_, xx_ = np.ogrid[-NR:NR + 1, -NR:NR + 1]
    disk = (xx_ ** 2 + yy_ ** 2) <= NR ** 2
    cl = nd.binary_closing(core, structure=disk)
    fill = cl & ~core
    d5 = (xx_ ** 2 + yy_ ** 2) <= 36
    crack = nd.binary_closing(core, structure=d5) & ~core      # rachaduras finas: qualquer cor
    for (x0, y0, x1, y1) in HOLES.get(nn, []):
        fill[y0 + PAD:y1 + PAD, x0 + PAD:x1 + PAD] = False
    # buracos totalmente cercados (brilho do tecido, nao vao entre braco e tronco): preenche se pequenos
    seal = nd.binary_closing(core, structure=np.ones((15, 15), bool))   # sela rachaduras finas
    enc = nd.binary_fill_holes(seal) & ~core
    lab_e, ne = nd.label(enc)
    for i, sl in enumerate(nd.find_objects(lab_e)):
        reg = lab_e[sl] == i + 1
        gy0, gx0 = sl[0].start, sl[1].start
        inbox = any(not (gx0 + reg.shape[1] < x0 + PAD or gx0 > x1 + PAD or gy0 + reg.shape[0] < y0 + PAD or gy0 > y1 + PAD) for (x0, y0, x1, y1) in HOLES.get(nn, []))
        if reg.sum() < HOLE_MAX and not inbox:
            fill[sl] |= reg
    ci = nd.binary_erosion(core, iterations=3)
    ix = nd.distance_transform_edt(~ci, return_distances=False, return_indices=True)
    lin2 = lum[ix[0], ix[1]]
    lin2 = nd.gaussian_filter(lum * ci, 4)[ix[0], ix[1]] / (nd.gaussian_filter(ci.astype(float), 4)[ix[0], ix[1]] + 1e-6)
    sat_i = (img.max(-1) - img.min(-1)) / (img.max(-1) + 1e-6)
    sin2 = nd.gaussian_filter(sat_i * ci, 4)[ix[0], ix[1]] / (nd.gaussian_filter(ci.astype(float), 4)[ix[0], ix[1]] + 1e-6)
    cloth = ~((sin2 > .30) & (lin2 > .28))      # nunca preenche cabelo/pele (evita blocos chapados)
    fill &= ((lin2 < .26) | enc) & cloth
    crack &= cloth
    for (x0, y0, x1, y1) in HOLES.get(nn, []):
        crack[y0 + PAD:y1 + PAD, x0 + PAD:x1 + PAD] = False
    fill |= crack
    fm = nd.binary_dilation(fill, iterations=2).astype(float)
    fm = np.where(fm > 0, 1.0, 0.0)
    f = f * (1 - fm[..., None]) + f[ix[0], ix[1]] * fm[..., None]
    a = np.maximum(a, fm)
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

# metadados curados a mao: expressao, enquadramento, olhando (para onde o rosto se inclina), roupa
META = {
    '03': ('seria', 'cintura', 'frente', 'blazer de veludo bordo, camisa azul'),
    '04': ('seria', 'cintura', 'frente', 'terno branco'),
    '05': ('seria', 'cintura', 'frente', 'blazer preto transpassado, top preto'),
    '06': ('seria', 'cintura', 'frente', 'blazer preto transpassado, top preto'),
    '08': ('seria', 'cintura', 'frente', 'blazer preto transpassado, top preto'),
    '10': ('seria', 'cintura', 'frente', 'blazer preto, top preto'),
    '11': ('seria', 'cintura', 'frente', 'blazer preto transpassado, top preto'),
    '12': ('seria', 'cintura', 'esquerda', 'blazer preto, top preto'),
    '14': ('seria', 'cintura', 'frente', 'blazer preto, top preto'),
    '17': ('seria', 'cintura', 'frente', 'blazer preto, top preto'),
    '20': ('seria', 'cintura', 'frente', 'blazer preto, top preto'),
    '23': ('seria', 'cintura', 'frente', 'blazer preto, top preto'),
    '24': ('serena', 'cintura', 'frente', 'blazer preto, top preto'),
    '25': ('seria', 'cintura', 'frente', 'blazer preto, top preto'),
    '30': ('seria', 'cintura', 'frente', 'blazer preto, top preto'),
    '31': ('seria', 'cintura', 'esquerda', 'blazer preto, top preto'),
    '33': ('seria', 'peito', 'frente', 'blazer preto, top preto'),
    '34': ('seria', 'cintura', 'esquerda', 'blazer preto, top preto'),
    '36': ('feliz', 'cintura', 'esquerda', 'blazer preto, top preto'),
    '39': ('seria', 'peito', 'frente', 'blazer preto, top preto'),
}

def montar_json():
    import glob
    fotos = {x['arquivo'][5:7]: x for x in json.load(open(ROOT + '/fotos/fotos.json'))}
    saida = []
    for f in sorted(glob.glob(OUT + '/recorte-*.png')):
        nn = os.path.basename(f)[8:10]
        im = Image.open(f); W, H = im.size
        al = np.asarray(im.getchannel('A'))
        ys, xs = np.nonzero(al > 0.1 * 255)
        expr, enq, olh, roupa = META[nn]
        if nn in fotos:
            fx, fy, orig = fotos[nn]['ponto_focal_x'], fotos[nn]['ponto_focal_y'], fotos[nn]['original']
        else:
            fx, fy, orig = 0.48, 0.33, 'IMG_9791.JPG'
        fy = fy / CROP.get(nn, 1.0)
        saida.append({'arquivo': f'recorte-{nn}.png', 'origem': orig, 'expressao': expr, 'enquadramento': enq,
                      'bbox': [int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())],
                      'largura': W, 'altura': H, 'olhando': olh, 'roupa': roupa,
                      'ponto_rosto': [round(fx, 3), round(min(fy, 0.95), 3)]})
    json.dump(saida, open(OUT + '/recortes.json', 'w'), ensure_ascii=False, indent=1)
    print(len(saida), 'recortes em recortes.json')

if __name__ == '__main__':
    if sys.argv[1] == '--json':
        montar_json(); raise SystemExit
    for nn in sys.argv[1:]:
        cut(nn); preview(nn); print('ok', nn, flush=True)

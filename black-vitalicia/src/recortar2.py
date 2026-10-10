#!/usr/bin/env python3
"""Recorte de alta qualidade (BiRefNet-portrait + descontaminação de cor do pymatting).
Uso: python3 src/recortar2.py NN [NN ...]   -> grava recortes/recorte-NN.png (substitui o recorte U2Net)
Modelo: /tmp/models/BiRefNet-portrait.onnx (rembg release v0.0.0). Rode um processo por vez (memória)."""
import sys, numpy as np, onnxruntime as ort
from PIL import Image
from pymatting import estimate_foreground_ml
ROOT = '/home/user/Geral/black-vitalicia'
MAXSIDE = 1400
CROP = {'02': .74, '03': .80, '04': .88, '05': .93, '06': .88, '08': .86, '11': .88, '12': .85, '14': .88, '17': .90, '25': .90, '20': .82, '39': .78}
SRC = {'39': ROOT + '/fotos/orig/IMG_9791.jpg'}
so = ort.SessionOptions(); so.graph_optimization_level = ort.GraphOptimizationLevel.ORT_DISABLE_ALL
so.enable_cpu_mem_arena = False; so.enable_mem_pattern = False; so.intra_op_num_threads = 4
sess = ort.InferenceSession('/tmp/models/BiRefNet-portrait.onnx', so, providers=['CPUExecutionProvider'])
inp = sess.get_inputs()[0].name

def cut(nn):
    im = Image.open(SRC.get(nn, f'{ROOT}/fotos/foto-{nn}.jpg')).convert('RGB'); W, H = im.size
    s = MAXSIDE / max(W, H)
    if s < 1: im = im.resize((round(W * s), round(H * s)), Image.LANCZOS); W, H = im.size
    PAD = 48  # borda replicada: o corpo cortado pela borda da foto não gera artefato
    imp = Image.fromarray(np.pad(np.asarray(im), ((PAD, PAD), (PAD, PAD), (0, 0)), mode='edge'))
    x = np.asarray(imp.resize((1024, 1024), Image.BILINEAR), dtype=np.float32) / 255.
    x = ((x - [0.485, 0.456, 0.406]) / [0.229, 0.224, 0.225]).transpose(2, 0, 1)[None].astype(np.float32)
    y = sess.run(None, {inp: x})[-1][0, 0]
    a = 1 / (1 + np.exp(-y))
    a = np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).resize(imp.size, Image.LANCZOS), dtype=np.float64) / 255.
    a = np.clip((a - 0.03) / 0.94, 0, 1)
    f = estimate_foreground_ml(np.asarray(imp, dtype=np.float64) / 255., a)
    res = Image.fromarray((np.dstack([np.clip(f, 0, 1), a]) * 255 + .5).astype(np.uint8), 'RGBA')
    res = res.crop((PAD, PAD, res.width - PAD, res.height - PAD))
    cf = CROP.get(nn)
    if cf: res = res.crop((0, 0, res.width, round(res.height * cf)))
    res.save(f'{ROOT}/recortes/recorte-{nn}.png'); print('ok', nn, res.size, flush=True)

for nn in sys.argv[1:]: cut(nn)

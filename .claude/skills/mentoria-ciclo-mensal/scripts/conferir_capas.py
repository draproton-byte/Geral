"""Confere temas e legendas entre fontes (e OCR se tesseract existir).
Cada fonte vira um dict {dia:int -> valor}. Divergencia = VERMELHO com lista exata."""
import argparse, re, shutil, subprocess, sys
from pathlib import Path
from _cfg import load, norm

ap = argparse.ArgumentParser()
ap.add_argument("--temas", required=True)
ap.add_argument("--reflexoes", required=True)
ap.add_argument("--capas-msg", required=True)
ap.add_argument("--capas-ref", required=True)
ap.add_argument("--legendas", required=True)
ap.add_argument("--doc")        # json {dia: {"tema":..., "legenda":...}}
ap.add_argument("--planilha")   # json {dia: {"tema":...}}
a = ap.parse_args()

erros = []
def ex(dia, lugar, esperado, achado):
    erros.append(f"Dia {dia:02d} | {lugar} | esperado: {esperado!r} | encontrado: {achado!r}")

def chaves(d):
    return {int(k): v for k, v in (d.items() if isinstance(d, dict) else enumerate(d, 1))}

temas = chaves(load(a.temas, {}))
refl = chaves(load(a.reflexoes, {}))
refl = {k: (v.get("pergunta") if isinstance(v, dict) else v) for k, v in refl.items()}

def por_dia(pasta, ext):
    r = {}
    for f in Path(pasta).glob(f"*.{ext}"):
        m = re.match(r"Dia (\d{2}) · (.+)\." + ext + "$", f.name)
        if m:
            r[int(m[1])] = (m[2], f)
        else:
            erros.append(f"{pasta} | arquivo fora do padrao 'Dia NN · tema': {f.name}")
    return r

for pasta, ext in ((a.capas_msg, "jpg"), (a.capas_ref, "png"), (a.legendas, "txt")):
    arqs = por_dia(pasta, ext)
    if len(arqs) != 21:
        erros.append(f"{pasta} | esperado 21 .{ext}, achei {len(arqs)}")
    for dia, (tema, f) in arqs.items():
        if tema != temas.get(dia):
            ex(dia, f"nome do arquivo {f.name}", temas.get(dia), tema)
        if ext == "txt":
            txt = f.read_text(encoding="utf-8")
            if not re.search(rf"Reflexão do dia {dia}\b", txt):
                ex(dia, f"{f.name} numero do dia", f"Reflexão do dia {dia}", txt[:40])
            if refl.get(dia) and refl[dia] not in txt:
                ex(dia, f"{f.name} legenda x reflexoes.json", refl[dia], "pergunta ausente")
        if ext in ("jpg", "png") and shutil.which("tesseract"):
            ocr = subprocess.run(["tesseract", str(f), "-", "-l", "por"], capture_output=True, text=True).stdout
            alvo = norm(f"dia {dia:02d} {temas.get(dia, '')}")
            if alvo not in norm(ocr).replace("dia ", "dia ", 1) and norm(temas.get(dia, "")) not in norm(ocr):
                ex(dia, f"OCR de {f.name}", alvo, norm(ocr)[:60])

for nome, caminho, campo, ref in (("Doc", a.doc, "tema", temas), ("Planilha", a.planilha, "tema", temas),
                                 ("Doc legenda", a.doc, "legenda", refl)):
    if not caminho:
        print(f"AVISO: {nome} ({campo}) nao verificado (sem exportacao)")
        continue
    for dia, v in chaves(load(caminho, {})).items():
        if v.get(campo) is not None and v[campo] != ref.get(dia):
            ex(dia, f"{nome} {campo}", ref.get(dia), v[campo])

if not shutil.which("tesseract"):
    print("AVISO: tesseract ausente, OCR nao verificado (nao e VERDE completo)")
print("VERDE" if not erros else "VERMELHO\n" + "\n".join(erros))
sys.exit(1 if erros else 0)

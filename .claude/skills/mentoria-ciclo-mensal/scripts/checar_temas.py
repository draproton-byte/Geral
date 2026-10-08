"""Tema: maximo 4 palavras, 21 temas. Uso: checar_temas.py temas.json"""
import sys
from _cfg import load

d = load(sys.argv[1], None)
if d is None:
    sys.exit("temas.json nao encontrado")
itens = d.items() if isinstance(d, dict) else enumerate(d, 1)
itens = sorted(((int(k), v) for k, v in itens), key=lambda x: x[0])
erros = []
if len(itens) != 21:
    erros.append(f"esperado 21 temas, achei {len(itens)}")
for dia, t in itens:
    n = len(str(t).split())
    if n > 4 or n == 0:
        erros.append(f"Dia {dia:02d}: '{t}' tem {n} palavras (max 4)")
print("VERDE" if not erros else "VERMELHO\n" + "\n".join(erros))
sys.exit(1 if erros else 0)

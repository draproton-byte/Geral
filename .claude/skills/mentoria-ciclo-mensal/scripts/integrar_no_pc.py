"""Roda no PC da Keila (onde existe a skill antiga). Copia os scripts antigos para esta skill,
avisa onde ainda ha caminho fixo e gera um novo .skill com tudo dentro.

Uso: python integrar_no_pc.py [--antiga <pasta da skill mentoria-21-dias-disparos>]
Nunca apaga nem sobrescreve arquivo que ja existe na skill nova."""
import argparse, re, shutil, sys, zipfile
from pathlib import Path
from _cfg import SKILL, SCRIPTS

ap = argparse.ArgumentParser()
ap.add_argument("--antiga", default=str(Path.home() / ".claude" / "skills" / "mentoria-21-dias-disparos"))
a = ap.parse_args()
antiga = Path(a.antiga)
if not (antiga / "scripts").is_dir():
    sys.exit(f"Nao achei {antiga}\\scripts. Passe o caminho com --antiga.")

copiados, ja_existem = [], []
for src in sorted((antiga / "scripts").glob("*")):
    if src.is_dir() or src.suffix == ".pyc":
        continue
    dst = SCRIPTS / src.name
    (ja_existem if dst.exists() else copiados).append(src.name)
    if not dst.exists():
        shutil.copy2(src, dst)

# referencias antigas que a nova nao tem (sem sobrescrever)
refs = []
if (antiga / "references").is_dir():
    for src in (antiga / "references").glob("*"):
        dst = SKILL / "references" / ("antiga_" + src.name)
        if src.is_file() and not dst.exists():
            shutil.copy2(src, dst); refs.append(dst.name)

fixos = []
pad = re.compile(r"[A-Za-z]:\\\\?Users\\\\?keila", re.I)
for f in SCRIPTS.glob("*.py"):
    for n, linha in enumerate(f.read_text(encoding="utf-8", errors="ignore").splitlines(), 1):
        if pad.search(linha):
            fixos.append(f"{f.name}:{n}: {linha.strip()[:100]}")

print(f"Scripts copiados ({len(copiados)}): {', '.join(copiados) or '-'}")
print(f"Ja existiam, mantidos ({len(ja_existem)}): {', '.join(ja_existem) or '-'}")
print(f"Referencias antigas copiadas como antiga_*: {', '.join(refs) or '-'}")
if fixos:
    print("\nCAMINHOS FIXOS a trocar por _cfg.workdir() / SKILL (peca ao Claude para ajustar):")
    print("\n".join(fixos))

saida = SKILL.parent / "mentoria-ciclo-mensal.skill"
with zipfile.ZipFile(saida, "w", zipfile.ZIP_DEFLATED) as z:
    for f in SKILL.rglob("*"):
        if f.is_file() and "__pycache__" not in f.parts and not f.name.endswith(".skill"):
            z.write(f, Path("mentoria-ciclo-mensal") / f.relative_to(SKILL))
print(f"\nPacote novo: {saida}\nAbra esse arquivo e clique em Salvar skill. Depois rode: python scripts\\instalar.py")

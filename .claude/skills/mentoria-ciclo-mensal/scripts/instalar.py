"""Confere o que a skill precisa no PC e diz o que falta."""
import importlib.util, shutil, sys
from _cfg import SKILL, SCRIPTS

falta = []
for exe in ("python", "ffmpeg", "ffprobe", "yt-dlp", "tesseract"):
    if not shutil.which(exe) and not (exe == "python" and sys.executable):
        falta.append(f"programa: {exe}")
for mod in ("faster_whisper", "reportlab", "PIL", "openpyxl"):
    if importlib.util.find_spec(mod) is None:
        falta.append(f"pacote python: {mod} (pip install)")
esperados = ["baixar", "transcrever", "destaques", "build_pdf", "build_reflexoes", "capas_audio", "capas_tema",
             "empacotar", "build_doc", "csv_ics", "simular_whatsapp", "validar", "checar_links",
             "conferir_doc_vivo", "preflight"]
for s in esperados:
    if not (SCRIPTS / f"{s}.py").exists():
        falta.append(f"script a copiar da skill antiga: scripts/{s}.py")
for item in ("fontes da marca", "logo dourada do Clube Secreto", "recortes/estudio/h01.png e h02.png",
             "pasta FOTOS 2026 (blazer preto)"):
    falta.append(f"conferir manualmente: {item}")
print("\n".join(falta) if falta else "Tudo certo")

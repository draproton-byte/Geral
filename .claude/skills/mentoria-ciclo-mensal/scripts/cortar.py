"""Corta o audio em 21 partes no silencio mais proximo de k*dur/21.
Uso: cortar.py audio_entrada saida_dir"""
import re, subprocess, sys
from pathlib import Path

src, out = Path(sys.argv[1]), Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
dur = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                                     "-of", "default=nw=1:nk=1", str(src)], text=True))
log = subprocess.run(["ffmpeg", "-i", str(src), "-af", "silencedetect=noise=-30dB:d=0.35", "-f", "null", "-"],
                     capture_output=True, text=True).stderr
ini = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", log)]
fim = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", log)]
meios = [(a + b) / 2 for a, b in zip(ini, fim)] or []
cortes = [0.0]
for k in range(1, 21):
    alvo = k * dur / 21
    cortes.append(min(meios, key=lambda m: abs(m - alvo)) if meios else alvo)
cortes.append(dur)
if cortes != sorted(cortes):
    sys.exit("cortes fora de ordem: revise o audio")
for i in range(21):
    dst = out / f"Dia-{i+1:02d}.mp3"
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", str(src), "-ss", str(cortes[i]), "-to", str(cortes[i+1]),
                    "-ac", "1", "-b:a", "64k", str(dst)], check=True)
print("VERDE" if len(list(out.glob("Dia-*.mp3"))) == 21 else "VERMELHO: faltam partes")

"""Caminhos e utilitarios comuns. Nada fixo em C:\\Users\\keila."""
import json, os, unicodedata
from pathlib import Path

SKILL = Path(__file__).resolve().parent.parent
SCRIPTS = SKILL / "scripts"


def workdir():
    d = Path(os.environ.get("MENTORIA_DIR") or Path.cwd() / "mentoria-21-dias")
    d.mkdir(parents=True, exist_ok=True)
    return d


def load(path, default=None):
    p = Path(path)
    return json.loads(p.read_text(encoding="utf-8")) if p.exists() else default


def save(path, data):
    Path(path).write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def norm(s):
    """Minusculas, sem acento, espacos colapsados."""
    s = unicodedata.normalize("NFD", s or "")
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return " ".join(s.lower().split())

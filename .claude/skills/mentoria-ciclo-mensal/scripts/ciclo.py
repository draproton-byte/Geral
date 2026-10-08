"""Orquestrador: novo | rodar | status. Estado em ciclo.json (retomavel)."""
import argparse, datetime as dt, subprocess, sys
from _cfg import SCRIPTS, load, save, workdir

MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro",
         "outubro", "novembro", "dezembro"]
SEMANA = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"]
SUBPASTAS = ["Áudios do livro", "Pdfs das partes do livro", "Capa das mensagens", "Capa das reflexões",
             "Legenda das reflexões", "Reprogramação mental"]
# (n, nome, script, tipo) tipo: auto = roda script; manual = precisa do Claude/Chrome
PASSOS = [
    (1, "baixar audio", "baixar.py", "auto"), (2, "cortar em 21", "cortar.py", "auto"),
    (3, "transcrever", "transcrever.py", "auto"), (4, "temas", "checar_temas.py", "valida"),
    (5, "destaques", "destaques.py", "auto"), (6, "pdfs", "build_pdf.py", "auto"),
    (7, "reflexoes", "build_reflexoes.py", "auto"), (8, "capas e legendas", "conferir_capas.py", "valida"),
    (9, "publicar no Drive", None, "manual"), (10, "links curtos Sendflow", None, "manual"),
    (11, "doc de disparos", "build_doc.py", "auto"), (12, "planilha", None, "manual"),
    (13, "ics e simulacao", "simular_whatsapp.py", "auto"), (14, "pre-voo", "preflight.py", "auto"),
]


def novo(mes, ano):
    m = MESES.index(mes.lower()) + 1
    d1 = dt.date(ano, m, 10)
    datas = {f"{i:02d}": (d1 + dt.timedelta(days=i - 1)).isoformat() + f" ({SEMANA[(d1 + dt.timedelta(days=i-1)).weekday()]})"
             for i in range(1, 22)}
    f = "[FALTA: %s]"
    ent = {"mes": mes.lower(), "ano": ano, "datas": datas, "youtube_livro": f % "link do video entregue pela Tami",
           "audio_reprogramacao": f % "arquivo da Tami", "nome_reprogramacao": f % "nome",
           "livro": f % "descobrir pelo titulo do video e confirmar", "autor": f % "idem",
           "pasta_mes_drive": f % "ID ou link da pasta do mes (conta novaordemmental)",
           "subpastas_drive": {s: f % "ID" for s in SUBPASTAS},
           "aula_ao_vivo": f % "dia e hora (confirmar todo mes)", "suporte": f % "confirmar todo mes",
           "podcast_boas_vindas": f % "do mes ou repetir o anterior: a confirmar",
           "manual_pdf": f % "do mes ou repetir o anterior: a confirmar",
           "cta_reflexao": "Reaja com 💜 se esta pergunta tocou você. A resposta fica com você: "
                           "leve-a para o seu dia e volte a ela antes de dormir."}
    p = workdir() / f"entrada_{mes.lower()}.json"
    if p.exists():
        sys.exit(f"{p} ja existe; nao sobrescrevo")
    save(p, ent)
    print(f"Criado {p}. Preencha os campos [FALTA: ...]. Crie as 6 subpastas no Drive e anote os IDs.")


def faltas(o, pre=""):
    if isinstance(o, dict):
        return [x for k, v in o.items() for x in faltas(v, f"{pre}{k}.")]
    return [pre.rstrip(".")] if isinstance(o, str) and "[FALTA" in o else []


def estado():
    return load(workdir() / "ciclo.json", {"passos": {}})


def rodar(entrada, de):
    ent = load(entrada)
    if ent is None:
        sys.exit(f"entrada nao encontrada: {entrada}")
    f = faltas(ent)
    if f:
        sys.exit("PARE: preencha antes de rodar:\n  " + "\n  ".join(f))
    est = estado()
    est["entrada"] = str(entrada)
    for n, nome, script, tipo in PASSOS:
        if n < de or est["passos"].get(str(n)) == "VERDE":
            continue
        if tipo == "manual" or script is None or not (SCRIPTS / script).exists():
            motivo = "feito pelo Claude no Chrome/Drive (ver references)" if tipo == "manual" else f"script ausente: copie scripts/{script} da skill antiga do PC"
            est["passos"][str(n)] = "PENDENTE"
            save(workdir() / "ciclo.json", est)
            sys.exit(f"Passo {n} ({nome}) parado: {motivo}. Depois marque VERDE em ciclo.json e rode de novo.")
        r = subprocess.run([sys.executable, str(SCRIPTS / script), str(entrada)], cwd=workdir())
        est["passos"][str(n)] = "VERDE" if r.returncode == 0 else "VERMELHO"
        save(workdir() / "ciclo.json", est)
        if r.returncode:
            sys.exit(f"Passo {n} ({nome}) VERMELHO")
    print("Pre-voo VERDE")


def status():
    est = estado()
    for n, nome, _, _ in PASSOS:
        print(f"{n:2d} {nome:24s} {est['passos'].get(str(n), 'a fazer')}")


ap = argparse.ArgumentParser()
sp = ap.add_subparsers(dest="cmd", required=True)
a = sp.add_parser("novo"); a.add_argument("mes"); a.add_argument("ano", type=int)
r = sp.add_parser("rodar"); r.add_argument("--entrada", required=True); r.add_argument("--de", type=int, default=1)
sp.add_parser("status")
x = ap.parse_args()
{"novo": lambda: novo(x.mes, x.ano), "rodar": lambda: rodar(x.entrada, x.de), "status": status}[x.cmd]()

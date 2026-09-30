// Gera capas de aulas (16:9), módulos (9:16) e o fundo do certificado (A4 paisagem).
// Uso: NODE_PATH=$(npm root -g) node capas.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'capas');

const RUIDO = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .35  0 0 0 0 .25  0 0 0 0 .12  0 0 0 .35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

const BASE = `
*{margin:0;padding:0;box-sizing:border-box}
body{overflow:hidden;position:relative;font-family:Inter;color:#111;
  background:
    radial-gradient(ellipse at 50% 45%, rgba(255,250,235,.55), transparent 60%),
    radial-gradient(ellipse at 8% 92%, rgba(140,95,40,.3), transparent 45%),
    radial-gradient(ellipse at 95% 5%, rgba(140,95,40,.25), transparent 40%),
    linear-gradient(160deg, #eadcbf, #e3d2b0 55%, #d9c49d);}
body::after{content:"";position:absolute;inset:0;background:${RUIDO};opacity:.55;mix-blend-mode:multiply;pointer-events:none}
.vinheta{position:absolute;inset:0;box-shadow:inset 0 0 180px rgba(110,70,25,.45);pointer-events:none}
.tag{font:800 26px Inter;letter-spacing:.28em;text-transform:uppercase}
.titulo{font-family:Anton;line-height:1.08;letter-spacing:-.5px}
mark{background:linear-gradient(transparent 0 16%, #f2c200 16% 97%, transparent 97%);color:#111;padding:0 .08em;box-decoration-break:clone;-webkit-box-decoration-break:clone}
.marca{font:500 26px Inter;letter-spacing:.35em;white-space:nowrap}
.marca b{font-weight:800}
.barra{height:6px;background:#111;width:90px}
`;
const m = t => t.replace(/\[([^\]]+)\]/g, '<mark>$1</mark>');

// ---------- Aulas 1280x720 ----------
const aulas = [
  { arq: 'aula-01-noite-1', n: '01', data: '08/09', titulo: 'Por que a sua vida [não dava certo]', sub: 'O jogo sem regras · O universo é um espelho · O CD em branco' },
  { arq: 'aula-02-noite-2', n: '02', data: '09/09', titulo: 'A noite da [reprogramação]', sub: 'Sobrevivente ou conquistadora · Frequência · Hipnose de Desbloqueio' },
  { arq: 'aula-03-noite-3', n: '03', data: '10/09', titulo: 'Ative seu ímã de [dinheiro, saúde e amor]', sub: 'Soltar o velho · As duas listas · Ho\'oponopono · Eu do futuro' },
];
const htmlAula = a => `<!doctype html><html><head><meta charset="utf-8"><style>${BASE}
body{width:1280px;height:720px}
.num{position:absolute;right:40px;bottom:-70px;font:400 520px/1 Anton;color:rgba(60,40,10,.09)}
.box{position:absolute;left:90px;top:0;bottom:0;width:900px;display:flex;flex-direction:column;justify-content:center;gap:26px}
.titulo{font-size:92px}
.sub{font:500 25px/1.4 Inter;color:#3a2e1c;max-width:820px}
.rodape{position:absolute;left:90px;right:90px;bottom:46px;display:flex;justify-content:space-between;align-items:center}
.rodape .marca{font-size:17px;letter-spacing:.25em}
</style></head><body><div class="vinheta"></div>
<div class="num">${a.n}</div>
<div class="box">
  <div class="tag">Aula ${a.n} · Noite ${Number(a.n)}</div>
  <div class="barra"></div>
  <div class="titulo">${m(a.titulo)}</div>
  <div class="sub">${a.sub}</div>
</div>
<div class="rodape"><div class="marca">IMERSÃO · <b>DESBLOQUEIE O PODER DA SUA MENTE</b></div><div class="marca">DRA. <b>PRÓTON</b></div></div>
</body></html>`;

// ---------- Módulos 1080x1920 ----------
const modulos = [
  { arq: 'modulo-01-as-3-noites', tag: 'Módulo 01', titulo: 'As [3 noites] da Imersão', sub: 'Consciência · Reprogramação · Criação' },
  { arq: 'modulo-02-materiais-de-apoio', tag: 'Módulo 02', titulo: '[Materiais] de apoio', sub: 'Resumos das aulas · Material completo · Protocolo diário' },
  { arq: 'modulo-03-bonus', tag: 'Módulo 03', titulo: '[Bônus] Códigos de Grabovoi', sub: 'E-book · Mantras da manhã e da noite' },
  { arq: 'modulo-04-depoimentos', tag: 'Módulo 04', titulo: 'Quem [mudou a frequência]', sub: 'Depoimentos de alunas da Imersão' },
  { arq: 'modulo-00-boas-vindas', tag: 'Comece aqui', titulo: '[Boas-vindas] à Imersão', sub: 'Como aproveitar as 3 noites' },
];
const htmlModulo = x => `<!doctype html><html><head><meta charset="utf-8"><style>${BASE}
body{width:1080px;height:1920px}
.topo{position:absolute;top:110px;left:0;right:0;text-align:center}
.box{position:absolute;left:100px;right:100px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;gap:40px}
.titulo{font-size:150px}
.sub{font:500 38px/1.45 Inter;color:#3a2e1c}
.base{position:absolute;bottom:120px;left:0;right:0;text-align:center}
.base .marca{font-size:30px}
.linha{position:absolute;left:100px;right:100px;border-top:3px solid #111}
</style></head><body><div class="vinheta"></div>
<div class="topo"><div class="marca">IMERSÃO · <b>DPM</b></div></div>
<div class="linha" style="top:190px"></div>
<div class="box">
  <div class="tag" style="font-size:34px">${x.tag}</div>
  <div class="barra" style="width:130px;height:9px"></div>
  <div class="titulo">${m(x.titulo)}</div>
  <div class="sub">${x.sub}</div>
</div>
<div class="linha" style="bottom:230px"></div>
<div class="base"><div class="marca">DESBLOQUEIE O PODER DA SUA MENTE</div><div class="marca" style="margin-top:22px">DRA. <b>PRÓTON</b></div></div>
</body></html>`;

// ---------- Certificado 3508x2480 (A4 paisagem, 300 dpi) ----------
// Área central fica livre para a Hotmart imprimir nome, curso e carga horária.
const htmlCert = `<!doctype html><html><head><meta charset="utf-8"><style>${BASE}
body{width:3508px;height:2480px}
.moldura{position:absolute;inset:110px;border:10px solid #111}
.moldura2{position:absolute;inset:150px;border:3px solid #111}
.topo{position:absolute;top:320px;left:420px;right:420px;text-align:center}
.topo .tag{font-size:64px;letter-spacing:.35em}
.titulo{font-size:190px;margin-top:50px}
.linhaMeio{position:absolute;left:50%;top:760px;width:260px;height:14px;background:#f2c200;transform:translateX(-50%)}
.base{position:absolute;bottom:330px;left:0;right:0;text-align:center}
.base .marca{font-size:62px}
.ass{position:absolute;bottom:560px;left:50%;transform:translateX(-50%);width:1000px;text-align:center;border-top:5px solid #111;padding-top:30px;font:600 52px Inter}
</style></head><body><div class="vinheta" style="box-shadow:inset 0 0 500px rgba(110,70,25,.45)"></div>
<div class="moldura"></div><div class="moldura2"></div>
<div class="topo"><div class="tag">Certificado de conclusão</div><div class="titulo"><mark>Imersão</mark> Desbloqueie o Poder da Sua Mente</div></div>
<div class="ass">Dra. Próton</div>
<div class="base"><div class="marca">DRA. <b>PRÓTON</b> · @dra.proton</div></div>
</body></html>`;

(async () => {
  const b = await chromium.launch();
  const shot = async (html, w, h, file, type = 'png') => {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    await p.setContent(html);
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(OUT, file), type, ...(type === 'jpeg' ? { quality: 90 } : {}) });
    await p.close();
  };
  fs.mkdirSync(OUT, { recursive: true });
  for (const a of aulas) await shot(htmlAula(a), 1280, 720, a.arq + '.jpg', 'jpeg');
  for (const x of modulos) await shot(htmlModulo(x), 1080, 1920, x.arq + '.jpg', 'jpeg');
  await shot(htmlCert, 3508, 2480, 'certificado-fundo-a4.jpg', 'jpeg');
  await b.close();
  console.log('ok');
})();

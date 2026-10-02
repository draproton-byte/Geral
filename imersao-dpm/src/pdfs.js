// Gera um PDF por noite no formato "Manual da Noite" (A4 retrato).
// Uso: NODE_PATH=$(npm root -g) node pdfs.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const noites = require('./noites');
const { ASSETS } = require('./marca');
const OUT = path.join(__dirname, '..', 'pdfs');

const ROM = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const RUIDO = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .35  0 0 0 0 .25  0 0 0 0 .12  0 0 0 .22 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

const CSS = `
@page{size:A4;margin:0}
@page cheia{margin:0}
*{margin:0;padding:0;box-sizing:border-box}
html{background:#F8F6F1}
body{font:400 10.8pt/1.6 Montserrat;color:#2B3048;-webkit-print-color-adjust:exact;print-color-adjust:exact}
main.flow{padding:30mm 20mm 22mm;box-decoration-break:clone;-webkit-box-decoration-break:clone}
.fundo{position:fixed;top:0;left:0;width:210mm;height:297mm;z-index:-1;background:linear-gradient(180deg,#FBFAF6,#F3F0E8)}
.cab{position:fixed;top:0;left:0;width:210mm;height:24mm;padding:9mm 20mm 0;display:flex;justify-content:space-between;align-items:flex-start}
.cab .lg{width:34mm;height:10mm;background:url('${ASSETS}/logo-h-escuro.png') no-repeat left center/contain}
.cab::after{content:"";position:absolute;left:20mm;right:20mm;bottom:2mm;border-bottom:.25mm solid rgba(10,18,51,.15)}
.rodf{position:fixed;bottom:0;left:0;width:210mm;padding:0 20mm 9mm;font:500 7pt Montserrat;color:rgba(10,18,51,.45)}
.rodf::before{content:"";display:block;border-top:.25mm solid rgba(10,18,51,.15);margin-bottom:3mm}
.flow .tag{break-after:avoid}
.flow .sec > .tag + h2{break-before:avoid}
.pg{page:cheia}
.flow .sec{margin-bottom:12mm;position:relative}
.flow .nova{break-before:page}
.flow h2{break-after:avoid;break-inside:avoid}
.flow .sec > :last-child{break-before:avoid}
.flow p{orphans:3;widows:3}
.flow .dest,.flow table,.flow .sec:has(> table:last-child),.flow .duas,.flow .passos div,.flow .cit,.flow .escala,.flow .horas{break-inside:avoid}
.flow .rom{right:0;top:-4mm;font-size:54pt}
.pg{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;padding:30mm 20mm 24mm;background:linear-gradient(180deg,#FBFAF6,#F3F0E8)}
.pg{z-index:10}
.pg > *{position:relative}
.pg .cab,.pg .rodf{position:absolute}
.rod{display:none}
.tag{display:inline-block;font:700 7pt Montserrat;letter-spacing:.24em;text-transform:uppercase;color:#0A1233;border:.35mm solid #0A1233;border-radius:99px;padding:1.2mm 3.4mm}
mark{background:none;color:#B07F2A}
h2{font:700 24pt/1.15 Montserrat;margin:4mm 0 6mm;color:#0A1233;letter-spacing:-.3px}
.rom{position:absolute;right:0;top:-4mm;font:800 54pt/1 Montserrat;color:rgba(10,18,51,.07)}
p{margin:0 0 3.4mm}
strong,b{color:#0A1233}
.dest{background:#0A1233;color:#E6E8F0;padding:5mm 6mm;margin:4mm 0 6mm;border-radius:2.5mm;font-weight:500}
.dest .tag{border-color:#F5D792;color:#F5D792;margin-bottom:2.5mm;display:table}
.cit{font:700 16pt/1.3 Montserrat;color:#0A1233;margin:6mm 0;padding-left:5mm;border-left:1.2mm solid #C9A45A}
table{width:100%;border-collapse:separate;border-spacing:0;margin:3mm 0 6mm;font-size:9.6pt;border:.3mm solid rgba(10,18,51,.18);border-radius:2.5mm;overflow:hidden;background:#fff}
th{font:700 7pt Montserrat;letter-spacing:.2em;text-align:left;color:#F5D792;background:#0A1233;padding:2.8mm 3mm}
td{padding:2.6mm 3mm;border-top:.2mm solid rgba(10,18,51,.1);vertical-align:top}
td:first-child{font-weight:700;color:#0A1233;width:36%}
ul.l{list-style:none;margin:2mm 0 5mm}
ul.l li{padding-left:7mm;position:relative;margin-bottom:2.2mm}
ul.l li::before{content:"";position:absolute;left:0;top:1.2mm;width:3.2mm;height:3.2mm;border-radius:.6mm;background:#0A1233;box-shadow:inset 0 0 0 .8mm #0A1233, inset 0 0 0 1.6mm #F5D792}
.duas{display:grid;grid-template-columns:1fr 1fr;gap:4mm;margin:3mm 0 6mm}
.duas > div{background:#fff;border:.3mm solid rgba(10,18,51,.18);border-top:1.2mm solid #0A1233;padding:4.5mm;border-radius:2.5mm}
.duas .tag{margin-bottom:2.5mm;display:table}
.fluxo{display:flex;align-items:center;gap:2mm;margin:4mm 0 6mm;flex-wrap:wrap}
.fluxo span{font:700 9.5pt Montserrat;background:#0A1233;color:#fff;padding:1.8mm 3.4mm;border-radius:99px}
.fluxo i{font-style:normal;font-weight:800;color:#C9A45A}
.escala{display:flex;margin:4mm 0 2mm;border-radius:2mm;overflow:hidden}
.escala span{flex:1;text-align:center;font:700 7.5pt Montserrat;padding:3mm 1mm;color:#fff}
.passos{counter-reset:p;margin:4mm 0}
.passos div{counter-increment:p;display:grid;grid-template-columns:12mm 1fr;gap:3mm;margin-bottom:3mm;align-items:center;background:#fff;border:.3mm solid rgba(10,18,51,.15);border-radius:2.5mm;padding:3.5mm 4mm}
.passos div::before{content:counter(p);font:800 13pt/9mm Montserrat;color:#F5D792;background:#0A1233;border-radius:50%;width:9mm;height:9mm;text-align:center}
.linhas{margin:2mm 0 6mm}
.linhas div{border-bottom:.25mm solid rgba(10,18,51,.2);height:9mm}
.horas{display:grid;grid-template-columns:repeat(8,1fr);gap:2.5mm;margin-top:4mm}
.horas div{background:#fff;border:.3mm solid rgba(10,18,51,.3);border-radius:1.5mm;padding:2mm;font:700 8.5pt Montserrat;color:#0A1233;display:flex;justify-content:space-between}
.horas div::after{content:"";width:3.2mm;height:3.2mm;border:.4mm solid #0A1233;border-radius:.6mm}
.codigo{font:800 46pt/1 Montserrat;text-align:center;margin:4mm 0 1mm;letter-spacing:.04em}
.frase-g{font:700 15pt/1.35 Montserrat;color:#fff;margin:0 0 5mm;padding:5mm 6mm;background:#0A1233;border-left:1.2mm solid #F5D792;border-radius:0 2.5mm 2.5mm 0}
.dest .codigo{color:#F5D792}
`;

function bloco(b) {
  const [tipo, a, c] = b;
  switch (tipo) {
    case 'p': return `<p>${esc(a)}</p>`;
    case 'destaque': return `<div class="dest"><div class="tag">${esc(a)}</div><div>${esc(c)}</div></div>`;
    case 'citacao': return `<div class="cit">"${esc(a)}"</div>`;
    case 'lista': return `<ul class="l">${a.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
    case 'tabela': return `<table><tr>${a.map(h => `<th>${esc(h)}</th>`).join('')}</tr>${c.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</table>`;
    case 'duas': return `<div class="duas">${[a, c].map(([t, x]) => `<div><div class="tag">${esc(t)}</div>${esc(x)}</div>`).join('')}</div>`;
    case 'fluxo': return `<div class="fluxo">${a.map(x => `<span>${esc(x)}</span>`).join('<i>›</i>')}</div>`;
    case 'escala': {
      const cores = ['#5a1e1e', '#7a2b22', '#95402a', '#a85a2c', '#8f7a1c', '#b59a12', '#d2ae0a', '#e8c200'];
      return `<div class="escala">${a.map((x, i) => `<span style="background:${cores[i]}">${esc(x)}</span>`).join('')}</div><p style="font-size:9pt;color:#5b4c33">← frequência baixa · frequência alta →</p>`;
    }
    case 'escreva': return `<div class="tag" style="margin-top:4mm">${esc(a)}</div><div class="linhas">${'<div></div>'.repeat(4)}</div>`;
  }
  return '';
}

function manual(N) {
  const rod = pg => `<div class="rod"><span>IMERSÃO · DESBLOQUEIE O PODER DA SUA MENTE · NOITE 0${N.n}</span><span>${pg}</span></div>`;
  let pg = 1, out = [];
  // Capa
  out.push(`<section class="pg" style="padding:0">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 45% at 50% 55%, rgba(10,18,51,.10), transparent 70%)"></div>
    <div style="position:absolute;left:50%;transform:translateX(-50%);bottom:0;width:190mm;height:205mm;background:url('${ASSETS}/foto.png') no-repeat bottom center/contain;-webkit-mask-image:linear-gradient(to bottom,#000 60%,transparent 97%)"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(180deg, transparent 60%, rgba(248,246,241,.85) 74%, #F8F6F1 86%)"></div>
    <div style="position:absolute;left:0;right:0;top:20mm;text-align:center">
      <div style="margin:0 auto;width:95mm;height:28mm;background:url('${ASSETS}/logo-h-escuro.png') no-repeat center/contain"></div>
    </div>
    <div style="position:absolute;right:9mm;top:20mm;writing-mode:vertical-rl;font:700 6.5pt Montserrat;letter-spacing:.3em;color:#0A1233;border:.3mm solid #0A1233;border-radius:99px;padding:3mm 1.6mm">RESUMO DA AULA</div>
    <div style="position:absolute;left:20mm;right:20mm;bottom:24mm">
      <span class="tag">Aula 0${N.n} · Noite ${N.n} · ${N.data}</span>
      <div style="font:800 30pt/1.1 Montserrat;color:#0A1233;margin:5mm 0 3mm">${esc(N.titulo)}</div>
      <div style="font:600 13pt Montserrat;color:#B07F2A">${esc(N.pergunta)}</div>
      <div style="display:flex;justify-content:space-between;margin-top:9mm;font:500 8pt Montserrat;color:rgba(10,18,51,.6)"><span>Dra. Próton</span><span>8, 9 e 10 de setembro · Material de apoio</span></div>
    </div>
  </section>`);
  // Antes de começar + sumário
  const itens = N.licoes.map((l, i) => `${ROM[i]}. ${l.t}`).concat(['Prática da noite', N.hooponopono ? "Ho'oponopono do Amor Consciente" : null, N.exercicio.t, 'Frases para guardar', 'Minhas anotações'].filter(Boolean));
  out.push(`<section class="pg"><div class="cab"><div class="lg"></div></div><div class="rodf">Imersão Desbloqueie o Poder da Sua Mente · Noite ${N.n} · Dra. Próton</div>
    <div class="tag">Antes de começar</div>
    <h2>Como usar <mark>este manual</mark></h2>
    <div class="cit" style="font-size:17pt">"${esc(N.abertura)}"</div>
    <p style="font:700 8.5pt Inter;letter-spacing:.2em;margin-top:-3mm">DRA. PRÓTON · ABERTURA DA NOITE ${N.n}</p>
    <div class="duas" style="grid-template-columns:1fr 1fr 1fr;margin-top:8mm">
      <div><div class="tag">Caiu a ficha</div>Quando você entender algo novo.</div>
      <div><div class="tag">Ai</div>Quando a palavra doer um pouquinho.</div>
      <div><div class="tag">Arrepiei</div>Quando sentir que é verdade.</div>
    </div>
    <p>Durante a aula, a Dra. Próton pediu que você escrevesse essas palavras no chat. Faça o mesmo aqui: sublinhe, marque e escreva nas margens. Tenha sempre por perto papel e caneta.</p>
    <div class="tag" style="margin-top:9mm">Neste manual</div>
    <ul class="l" style="margin-top:3mm">${itens.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
    ${rod(String(++pg).padStart(2, '0'))}
  </section>`);
  const flow = [];
  // Lições
  N.licoes.forEach((l, i) => {
    flow.push(`<div class="sec${i === 0 ? ' nova' : ''}"><div class="rom">${ROM[i]}</div>
      <div class="tag">Lição ${i + 1}</div><h2>${esc(l.t)}</h2>
      ${l.b.map(bloco).join('')}</div>`);
  });
  // Prática
  const P = N.pratica;
  flow.push(`<div class="sec nova">
    <div class="tag">Prática da noite</div><h2><mark>${esc(P.t)}</mark></h2>
    <p>${esc(P.intro)}</p>
    <div class="passos">${P.passos.map(s => `<div><span>${esc(s)}</span></div>`).join('')}</div>
    ${P.perdao ? `<div class="duas">${P.perdao.map(([t, xs]) => `<div><div class="tag">${esc(t)}</div><ul class="l" style="margin:0">${xs.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div>` : ''}
    ${N.n === 1 ? `<div class="tag" style="margin-top:6mm">O que eu vi na sala de comando</div><div class="linhas">${'<div></div>'.repeat(5)}</div>` : ''}</div>`);
  // Ho'oponopono (Noite 3)
  if (N.hooponopono) {
    flow.push(`<div class="sec">
      <div class="tag">Prática</div><h2>Ho'oponopono do <mark>Amor Consciente</mark></h2>
      <p>${esc(N.hooponopono.intro)}</p>
      <table><tr><th>Eu me perdoo por…</th><th>De agora em diante eu escolho…</th></tr>
      ${N.hooponopono.linhas.map(([a, b]) => `<tr><td style="font-weight:500">${esc(a)}</td><td>${esc(b)}</td></tr>`).join('')}</table>
      <div class="cit">"Eu permito ao amor divino me preencher. Eu me amo."</div></div>`);
  }
  // Exercício
  const E = N.exercicio;
  flow.push(`<div class="sec nova">
    <div class="tag">${N.n < 3 ? `Exercício até a Noite ${N.n + 1}` : 'Exercício para os próximos 12 meses'}</div><h2>${esc(E.t)}</h2>
    <p>${esc(E.intro)}</p>
    ${E.codigo ? `<div class="dest" style="text-align:center"><div class="tag">Repita mentalmente</div><div class="codigo" style="color:#f2c200">${E.codigo}</div><div style="font:600 13pt Inter">${esc(E.frase)}</div></div>` : ''}
    ${E.passos ? `<div class="passos">${E.passos.map(s => `<div><span>${esc(s)}</span></div>`).join('')}</div>` : ''}
    ${E.duas ? `<div class="duas">${E.duas.map(([t, x]) => `<div><div class="tag">${esc(t)}</div>${esc(x)}</div>`).join('')}</div><div class="cit">${esc(E.frase)}</div><p>A criança desobedece; a pessoa madura escuta a orientação e segue à risca. Quando você caminha em direção a uma transformação, tudo começa a puxar você de volta. Quem está comprometida atravessa.</p>` : ''}
    ${E.horas ? `<div class="tag" style="margin-top:4mm">Marque cada ativação</div><div class="horas">${E.horas.map(h => `<div>${h}</div>`).join('')}</div>` : ''}
    ${!E.codigo && !E.duas ? `<div class="tag" style="margin-top:4mm">Minhas duas listas estão guardadas em:</div><div class="linhas"><div></div><div></div></div>` : ''}</div>`);
  // Frases + próximo passo
  flow.push(`<div class="sec nova">
    <div class="tag">Para guardar</div><h2>As frases da <mark>Noite ${N.n}</mark></h2>
    ${N.frases.map(f => `<div class="frase-g">"${esc(f)}"</div>`).join('')}
    ${N.protocolo ? `<div class="tag" style="margin-top:6mm">Seu protocolo diário pós-Imersão</div>
      <table>${N.protocolo.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join('')}</table>`
      : `<div class="dest" style="margin-top:8mm"><div class="tag">${esc(N.proximo.t)}</div>${esc(N.proximo.texto)}</div>`}</div>`);
  // Anotações
  flow.push(`<div class="sec nova">
    <div class="tag">Minhas anotações</div><h2>Noite ${N.n}</h2>
    ${N.perguntas.map(q => `<p style="font-weight:700;margin-top:3mm">${esc(q)}</p><div class="linhas">${'<div></div>'.repeat(N.perguntas.length > 2 ? 4 : 9)}</div>`).join('')}</div>`);
  out.push(`<main class="flow"><div class="fundo"></div><div class="cab"><div class="lg"></div></div><div class="rodf">Imersão Desbloqueie o Poder da Sua Mente · Noite ${N.n} · Dra. Próton</div>${flow.join('')}</main>`);
  return `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${out.join('')}</body></html>`;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage();
  for (const N of noites) {
    const html = manual(N);
    fs.writeFileSync(path.join(__dirname, `.preview-${N.n}.html`), html);
    fs.writeFileSync(path.join(__dirname, '.render.html'), html); await p.goto('file://' + path.join(__dirname, '.render.html'));
    await p.evaluate(() => document.fonts.ready);
    await p.pdf({ path: path.join(OUT, N.arq + '.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true });
  }
  await b.close();
  console.log('ok');
})();

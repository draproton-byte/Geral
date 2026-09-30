// Gera um PDF por noite no formato "Manual da Noite" (A4 retrato).
// Uso: NODE_PATH=$(npm root -g) node pdfs.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const noites = require('./noites');
const OUT = path.join(__dirname, '..', 'pdfs');

const ROM = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const RUIDO = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .35  0 0 0 0 .25  0 0 0 0 .12  0 0 0 .22 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

const CSS = `
@page{size:A4;margin:0}
@page cheia{margin:0}
html{background:#f1e7d1}
main.flow{padding:20mm 20mm 20mm;box-decoration-break:clone;-webkit-box-decoration-break:clone}
.fundo{position:fixed;top:0;left:0;width:210mm;height:297mm;background:radial-gradient(ellipse at 50% 40%, #f6efdf, #efe4cc 70%, #e6d6b6);z-index:-1}
.flow .tag{break-after:avoid}
.flow .sec > .tag + h2{break-before:avoid}
.pg{page:cheia}
.flow .sec{margin-bottom:10mm}
.flow .nova{break-before:page}
.flow h2{break-after:avoid;break-inside:avoid}
.flow .sec > :last-child{break-before:avoid}
.flow p{orphans:3;widows:3}
.flow .dest,.flow table,.flow .sec:has(> table:last-child),.flow .duas,.flow .passos div,.flow .cit,.flow .escala,.flow .horas{break-inside:avoid}
.flow .rom{right:0;top:-6mm;font-size:70pt}
.flow .sec{position:relative}
*{margin:0;padding:0;box-sizing:border-box}
body{font:400 11.2pt/1.55 Inter;color:#1a1712;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.pg{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;padding:22mm 20mm 24mm;
  background:radial-gradient(ellipse at 50% 40%, #f6efdf, #efe4cc 70%, #e6d6b6);}
.pg::before{content:none}
.pg > *{position:relative}
.rod{position:absolute;left:20mm;right:20mm;bottom:10mm;display:flex;justify-content:space-between;font:600 7.5pt Inter;letter-spacing:.22em;color:#5b4c33}
.tag{font:800 8.5pt Inter;letter-spacing:.28em;text-transform:uppercase;color:#5b4c33}
.anton{font-family:Anton;letter-spacing:-.3px;line-height:1.06}
mark{background:linear-gradient(transparent 0 14%, #f2c200 14% 96%, transparent 96%);color:#111;padding:0 .06em;box-decoration-break:clone;-webkit-box-decoration-break:clone}
h2{font:400 34pt/1.05 Anton;margin:4mm 0 7mm;color:#111}
.rom{position:absolute;right:18mm;top:14mm;font:400 90pt/1 Anton;color:rgba(80,55,20,.12)}
p{margin:0 0 3.6mm}
.dest{background:#111;color:#f3ead6;padding:5mm 6mm;margin:4mm 0 5mm;border-radius:2mm}
.dest .tag{color:#f2c200;margin-bottom:2mm}
.cit{font:400 21pt/1.15 Anton;margin:6mm 0;padding-left:5mm;border-left:2.2mm solid #f2c200}
table{width:100%;border-collapse:collapse;margin:3mm 0 5mm;font-size:10pt}
th{font:800 8pt Inter;letter-spacing:.2em;text-align:left;border-bottom:.6mm solid #111;padding:2mm 2mm}
td{padding:2.4mm 2mm;border-bottom:.2mm solid rgba(0,0,0,.2);vertical-align:top}
td:first-child{font-weight:700;width:36%}
ul.l{list-style:none;margin:2mm 0 5mm}
ul.l li{padding-left:6mm;position:relative;margin-bottom:2mm}
ul.l li::before{content:"✦";position:absolute;left:0;color:#b08a10}
.duas{display:grid;grid-template-columns:1fr 1fr;gap:4mm;margin:3mm 0 5mm}
.duas > div{border:.5mm solid #111;padding:4mm;border-radius:2mm}
.duas .tag{color:#111;margin-bottom:2mm}
.fluxo{display:flex;align-items:center;gap:2mm;margin:4mm 0 6mm;flex-wrap:wrap}
.fluxo span{font:400 13pt Anton;background:#111;color:#f3ead6;padding:1.6mm 3.4mm;border-radius:1.5mm}
.fluxo i{font-style:normal;font-weight:800}
.escala{display:flex;margin:4mm 0 6mm;border-radius:2mm;overflow:hidden}
.escala span{flex:1;text-align:center;font:700 8pt Inter;padding:3mm 1mm;color:#fff}
.passos{counter-reset:p;margin:4mm 0}
.passos div{counter-increment:p;display:grid;grid-template-columns:13mm 1fr;gap:3mm;margin-bottom:4mm;align-items:start}
.passos div::before{content:counter(p, decimal-leading-zero);font:400 20pt/1 Anton;color:#b08a10}
.linhas{margin:2mm 0 6mm}
.linhas div{border-bottom:.25mm solid rgba(0,0,0,.35);height:9mm}
.horas{display:grid;grid-template-columns:repeat(8,1fr);gap:2.5mm;margin-top:4mm}
.horas div{border:.4mm solid #111;border-radius:1.5mm;padding:2mm;font:700 9pt Inter;display:flex;justify-content:space-between}
.horas div::after{content:"";width:3.5mm;height:3.5mm;border:.4mm solid #111;border-radius:50%}
.codigo{font:400 54pt/1 Anton;text-align:center;margin:5mm 0 1mm}
.frase-g{font:400 20pt/1.15 Anton;margin:0 0 6mm}
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
  out.push(`<section class="pg" style="background:#111;color:#f3ead6;display:flex;flex-direction:column;justify-content:space-between">
    <div><div class="tag" style="color:#f2c200">Imersão · Desbloqueie o Poder da Sua Mente</div></div>
    <div>
      <div class="anton" style="font-size:150pt;color:#f2c200;line-height:.9">0${N.n}</div>
      <div class="tag" style="color:#f3ead6;margin:4mm 0 6mm">Noite ${N.n} · ${N.data} · Resumo da aula</div>
      <div class="anton" style="font-size:48pt;color:#f3ead6">${esc(N.titulo)}</div>
      <div style="font:600 15pt Inter;margin-top:8mm;color:#f2c200">${esc(N.pergunta)}</div>
      <p style="margin-top:4mm;max-width:140mm;color:#d8cdb4">${esc(N.resumo)}</p>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:end"><div class="tag" style="color:#f3ead6">Material de apoio</div><div class="anton" style="font-size:22pt;letter-spacing:.2em">DRA. PRÓTON</div></div>
  </section>`);
  // Antes de começar + sumário
  const itens = N.licoes.map((l, i) => `${ROM[i]}. ${l.t}`).concat(['Prática da noite', N.hooponopono ? "Ho'oponopono do Amor Consciente" : null, N.exercicio.t, 'Frases para guardar', 'Minhas anotações'].filter(Boolean));
  out.push(`<section class="pg">
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
  out.push(`<main class="flow"><div class="fundo"></div>${flow.join('')}</main>`);
  return `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${out.join('')}</body></html>`;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage();
  for (const N of noites) {
    const html = manual(N);
    fs.writeFileSync(path.join(__dirname, `.preview-${N.n}.html`), html);
    await p.setContent(html);
    await p.evaluate(() => document.fonts.ready);
    await p.pdf({ path: path.join(OUT, N.arq + '.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true });
  }
  await b.close();
  console.log('ok');
})();

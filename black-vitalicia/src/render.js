// Motor de criativos Black Próton Vitalícia: feed 1080x1350 e stories 1080x1920, versões ESCURO e CLARO.
// Uso: node src/render.js <lote.json> [saida]   (lote = lista de itens, ver README)
// Item: { id, etapa, formato:'feed'|'story', versao:'escuro'|'claro', layout:'direita'|'topo'|'arco'|'capas',
//         foto:'foto-03.jpg', eyebrow, headline:'Texto [destaque]', subtexto:'Texto **negrito**',
//         data:{rotulo,texto}, cta, selo, capas:['clube-secreto',...], nome }
const { chromium } = require('playwright-core');
const fs = require('fs'), path = require('path');

const ROOT = path.join(__dirname, '..');
const FONTS = [400, 500, 600, 700, 800].map(w =>
  `@font-face{font-family:Montserrat;font-weight:${w};src:url('file://${path.join(ROOT, 'node_modules/@fontsource/montserrat/files/montserrat-latin-' + w + '-normal.woff2')}')}`).join('');
const U = p => 'file://' + path.join(ROOT, p);
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const hl = s => esc(s).replace(/~~([^~]+)~~/g, '<s style="text-decoration-thickness:5px;text-decoration-color:#b3263a">$1</s>').replace(/\[([^\]]+)\]/g, '<em>$1</em>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');

const TEMAS = {
  escuro: { bg: '#0b0610', glow: 'rgba(170,110,35,.38)', txt: '#ffffff', sub: '#d9d3de', em: '#F2CB76', b: '#F2CB76', card: 'rgba(30,18,10,.78)', cardBorda: '1.5px solid #C9A45A', cardTxt: '#F2CB76', cardRot: '#ffffff',
    btn: 'linear-gradient(90deg,#F6D88B,#C9A45A)', btnTxt: '#1a0f05', moldura: '#C9A45A', selo: '#F2CB76', seloTxt: '#1a0f05' },
  claro: { bg: '#F8F1E6', glow: 'rgba(242,203,118,.55)', txt: '#2a1410', sub: '#4a3a34', em: '#B8862E', b: '#6b1020', card: 'linear-gradient(135deg,#6b1020,#3d0912)', cardBorda: 'none', cardTxt: '#F2CB76', cardRot: '#F8E7C4',
    btn: 'linear-gradient(135deg,#6b1020,#3d0912)', btnTxt: '#ffffff', moldura: '#C9A45A', selo: '#6b1020', seloTxt: '#F8E7C4' },
};

function css(t, W, H, story, o) {
  const k = story ? 1 : 1;
  return `${FONTS}*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px}
body{font-family:Montserrat;background:${t.bg};color:${t.txt};position:relative;overflow:hidden}
.glow{position:absolute;inset:0;background:radial-gradient(ellipse 65% 45% at 72% 34%,${t.glow},transparent 70%)}
.logo{position:absolute;left:80px;top:${story ? 130 : 66}px;width:${story ? 420 : 340}px;filter:drop-shadow(0 4px 14px rgba(0,0,0,.25))}
.foto{position:absolute;background-repeat:no-repeat;background-size:cover}
em{font-style:normal;color:${t.em}}
b{font-weight:700;color:${t.b}}
.eyebrow{font-weight:700;letter-spacing:.28em;text-transform:uppercase;font-size:${story ? 25 : 21}px;color:${t.em};display:flex;align-items:center;gap:18px}
.eyebrow::after{content:"";width:90px;height:2px;background:${t.em};opacity:.7}
h1{font-weight:800;letter-spacing:-1.2px;line-height:1.07}
.sub{font-weight:500;line-height:1.42;color:${t.sub}}
.card{border-radius:24px;background:${t.card};border:${t.cardBorda};display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-shadow:0 14px 34px rgba(0,0,0,.22)}
.card small{font-weight:600;letter-spacing:.3em;text-transform:uppercase;font-size:${story ? 24 : 20}px;color:${t.cardRot};margin-bottom:6px}
.card span{font-weight:800;color:${t.cardTxt};line-height:1}
.btn{border-radius:999px;background:${t.btn};color:${t.btnTxt};font-weight:800;letter-spacing:.09em;text-transform:uppercase;display:flex;align-items:center;justify-content:center;gap:22px;box-shadow:0 14px 34px rgba(0,0,0,.25)}
.btn i{font-style:normal;width:62px;height:62px;border-radius:50%;background:${t.txt === '#ffffff' ? '#1a0f05' : '#F2CB76'};color:${t.txt === '#ffffff' ? '#F2CB76' : '#6b1020'};display:flex;align-items:center;justify-content:center;font-size:36px;line-height:1}
.selo{display:inline-block;background:${t.selo};color:${t.seloTxt};font-weight:800;letter-spacing:.16em;text-transform:uppercase;border-radius:10px;padding:12px 22px;font-size:${story ? 26 : 22}px}
.capa{position:absolute;border-radius:18px;overflow:hidden;box-shadow:0 18px 40px rgba(0,0,0,.45);border:1.5px solid ${t.moldura}}
.capa img{width:100%;height:100%;object-fit:cover;display:block}
`;
}

// ---- fotos: usa a foto inteira com fundo original, mascarada em degradê; nunca recorte de cabelo ----
function html(it) {
  const story = it.formato === 'story', W = 1080, H = story ? 1920 : 1350;
  const t = TEMAS[it.versao], escuro = it.versao === 'escuro';
  let L = it.layout || 'direita';
  // foto de fundo escuro não se funde ao creme; foto de estúdio bege/taupe (fundoFoto:'claro') funde bem
  if (!escuro && it.fundoFoto !== 'claro' && L === 'direita') L = 'arco';
  if (!escuro && it.fundoFoto !== 'claro' && L === 'topo') L = 'cartao';
  const foto = it.foto ? U('fotos/' + it.foto) : null;
  const fx = (it.foco && it.foco[0] != null) ? it.foco[0] * 100 : 50, fy = (it.foco && it.foco[1] != null) ? it.foco[1] * 100 : 25;
  const len = (it.headline || '').replace(/[\[\]]/g, '').length;
  const k = (L === 'arco' && story) ? 0.7 : (L === 'direita' || L === 'arco') ? 0.86 : (L === 'topo' && story ? 0.9 : 1);
  const fsH = it.fs ? it.fs : Math.round(k * (story ? (len < 30 ? 104 : len < 50 ? 88 : len < 75 ? 76 : 66) : (len < 30 ? 86 : len < 50 ? 72 : len < 75 ? 62 : 54)));
  let body = '', extra = '';
  const logo = `<img class="logo" src="${U('assets/logo-dourado.png')}">`;
  const eyebrow = it.eyebrow ? `<div class="eyebrow">${esc(it.eyebrow)}</div>` : '';
  const sub = it.subtexto ? `<p class="sub" style="font-size:${story ? 34 : 29}px">${hl(it.subtexto)}</p>` : '';
  const selo = it.selo ? `<div><span class="selo">${esc(it.selo)}</span></div>` : '';
  const data = it.data ? `<div class="card" style="height:${story ? 190 : 150}px"><small>${esc(it.data.rotulo || '')}</small><span style="font-size:${story ? 76 : 62}px">${esc(it.data.texto)}</span></div>` : '';
  const cta = it.cta ? `<div class="btn" style="height:${story ? 128 : 108}px;font-size:${story ? 40 : 35}px">${esc(it.cta)}<i>→</i></div>` : '';
  const capas = (it.capas || []).slice(0, 8);

  const stack = (gap) => `<div style="display:flex;flex-direction:column;gap:${gap}px">${eyebrow}<h1 style="font-size:${fsH}px">${hl(it.headline)}</h1>${sub}${selo}</div>`;

  if (L === 'direita') {
    // foto sangrando à direita, texto à esquerda, bloco de data e botão embaixo
    const fw = story ? 860 : 720, fh = story ? 1350 : 1080;
    extra = `<div class="foto" style="right:-90px;top:${story ? 180 : 0}px;width:${fw}px;height:${fh}px;background-image:url('${foto}');background-position:${fx}% ${fy}%;
      -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 40%),linear-gradient(180deg,transparent 0,#000 ${story ? 14 : 0}%,#000 74%,transparent 100%);-webkit-mask-composite:source-in;mask-composite:intersect"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(0deg,${t.bg} 0,${t.bg}d9 ${story ? 20 : 24}%,transparent ${story ? 38 : 46}%)"></div>`;
    body = `<div style="position:absolute;left:80px;top:${story ? 520 : 290}px;width:${story ? 560 : 500}px">${stack(story ? 34 : 26)}</div>
      <div style="position:absolute;left:80px;right:80px;bottom:${story ? 330 : 70}px;display:flex;flex-direction:column;gap:${story ? 28 : 22}px">${data}${cta}</div>`;
  } else if (L === 'topo') {
    // foto grande no topo, esmaecendo para a cor de fundo; texto centralizado embaixo
    const fh = story ? 980 : 760;
    extra = `<div class="foto" style="left:0;top:0;width:${W}px;height:${fh}px;background-image:url('${foto}');background-position:${fx}% ${fy}%;
      -webkit-mask-image:linear-gradient(180deg,#000 55%,transparent 100%);mask-image:linear-gradient(180deg,#000 55%,transparent 100%)"></div>`;
    body = `<div style="position:absolute;left:80px;right:80px;top:${story ? 760 : 640}px;display:flex;flex-direction:column;gap:${story ? 30 : 22}px">${stack(story ? 30 : 22)}</div>
      <div style="position:absolute;left:80px;right:80px;bottom:${story ? 330 : 64}px;display:flex;flex-direction:column;gap:${story ? 26 : 20}px">${data}${cta}</div>`;
  } else if (L === 'arco') {
    // foto em arco com moldura dourada à direita, texto à esquerda
    const aw = story ? 520 : 470, ah = story ? 900 : 700;
    extra = `<div style="position:absolute;right:64px;top:${story ? 300 : 150}px;width:${aw}px;height:${ah}px;border-radius:${aw / 2}px ${aw / 2}px 30px 30px;border:3px solid ${t.moldura};padding:12px">
      <div style="width:100%;height:100%;border-radius:${aw / 2 - 12}px ${aw / 2 - 12}px 20px 20px;background:url('${foto}') ${fx}% ${fy}%/cover"></div></div>`;
    body = `<div style="position:absolute;left:80px;top:${story ? 470 : 300}px;width:${story ? 380 : 450}px">${stack(story ? 30 : 22)}</div>
      <div style="position:absolute;left:80px;right:80px;bottom:${story ? 330 : 64}px;display:flex;flex-direction:column;gap:${story ? 26 : 20}px">${data}${cta}</div>`;
  } else if (L === 'cartao') {
    const ch = story ? 640 : 560, top = story ? 270 : 190;
    extra = `<div style="position:absolute;left:80px;right:80px;top:${top}px;height:${ch}px;border-radius:40px;border:3px solid ${t.moldura};padding:10px"><div style="width:100%;height:100%;border-radius:30px;background:url('${foto}') ${fx}% ${fy}%/cover;box-shadow:0 20px 50px rgba(0,0,0,.3)"></div></div>`;
    body = `<div style="position:absolute;left:80px;right:80px;top:${top + ch + (story ? 50 : 34)}px;display:flex;flex-direction:column;gap:${story ? 22 : 14}px">${eyebrow}<h1 style="font-size:${Math.round(fsH * .86)}px">${hl(it.headline)}</h1></div>
      <div style="position:absolute;left:80px;right:80px;bottom:${story ? 330 : 56}px;display:flex;flex-direction:column;gap:${story ? 22 : 16}px">${data}${cta}</div>`;
  } else if (L === 'capas') {
    const n = Math.min(Math.max(capas.length, 1), story ? 3 : 4);
    const cw = story ? 300 : 225, ch = Math.round(cw * 1.25), gx = 24;
    const totalW = n * cw + (n - 1) * gx, left0 = (W - totalW) / 2, top0 = story ? 690 : 520;
    extra = capas.slice(0, n).map((c, i) => `<div class="capa" style="left:${left0 + i * (cw + gx)}px;top:${top0}px;width:${cw}px;height:${ch}px"><img src="${U('capas-cursos/' + c + '.jpg')}"></div>`).join('');
    body = `<div style="position:absolute;left:80px;right:80px;top:${story ? 360 : 230}px;display:flex;flex-direction:column;gap:${story ? 24 : 16}px">${eyebrow}<h1 style="font-size:${Math.round(fsH * .9)}px">${hl(it.headline)}</h1></div>
      <div style="position:absolute;left:80px;right:80px;top:${top0 + ch + (story ? 50 : 34)}px;display:flex;flex-direction:column;gap:${story ? 24 : 16}px">${sub}</div>
      <div style="position:absolute;left:80px;right:80px;bottom:${story ? 330 : 56}px;display:flex;flex-direction:column;gap:${story ? 22 : 16}px">${data}${cta}</div>`;
  }
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css(t, W, H, story, it)}${it.cssExtra || ''}</style></head><body><div class="glow"></div>${extra}${logo}${body}</body></html>`;
}

async function renderLote(itens, outDir, opts = {}) {
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });
  const tmp = path.join(ROOT, '.render-' + process.pid + '.html');
  const feitos = [];
  for (const formato of ['feed', 'story']) {
    const p = await b.newPage({ viewport: { width: 1080, height: formato === 'story' ? 1920 : 1350 } });
    for (const it of itens.filter(i => i.formato === formato)) {
      fs.writeFileSync(tmp, html(it));
      await p.goto('file://' + tmp);
      await p.evaluate(() => document.fonts.ready);
      const nome = it.nome || `BLACK PROTON VITALICIA - ${it.etapa} ${it.id} - ${formato === 'feed' ? 'FEED' : 'STORIES'}${it.versao === 'claro' ? ' - CLARO' : ''}`;
      const dest = path.join(outDir, nome + '.jpg');
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      await p.screenshot({ path: dest, type: 'jpeg', quality: opts.quality || 86 });
      feitos.push(dest);
    }
    await p.close();
  }
  fs.rmSync(tmp, { force: true });
  await b.close();
  return feitos;
}

module.exports = { html, renderLote, TEMAS };

if (require.main === module) {
  const [lote, saida] = process.argv.slice(2);
  const itens = JSON.parse(fs.readFileSync(lote, 'utf8'));
  renderLote(itens, saida || path.join(ROOT, 'saida')).then(f => console.log(f.length + ' artes'));
}

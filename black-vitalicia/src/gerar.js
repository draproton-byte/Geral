// Gera os criativos a partir de copy.json (docs de copy do Drive) + recortes/ (+ src/ajustes/*.json por id).
// Uso: node src/gerar.js [ID,ID...]   Saída: criativos/<ETAPA>/
const fs = require('fs'), path = require('path');
const { renderLote } = require('./render');
const ROOT = path.join(__dirname, '..');
const copy = JSON.parse(fs.readFileSync(path.join(__dirname, 'copy.json'), 'utf8'));
const filtro = (process.argv[2] || '').split(',').filter(Boolean);

const ajustes = {};
const dirAj = path.join(__dirname, 'ajustes');
if (fs.existsSync(dirAj)) for (const f of fs.readdirSync(dirAj).filter(x => x.endsWith('.json'))) Object.assign(ajustes, JSON.parse(fs.readFileSync(path.join(dirAj, f), 'utf8')));

const PASTA = { captacao: 'CAPTACAO', 'rmkt-captacao': 'RMKT DE CAPTACAO', aquecimento: 'AQUECIMENTO', antecipacao: 'ANTECIPACAO', escassez: 'ESCASSEZ', lembrete: 'LEMBRETE', vendas: 'VENDAS', 'rmkt-vendas': 'RMKT DE VENDAS' };
const dirRec = path.join(ROOT, 'recortes');
// fora por regra do briefing: mão junto ao rosto/queixo (20, 33) e foto só de rosto (39)
const EXCLUIR = new Set(['recorte-20.png', 'recorte-33.png', 'recorte-39.png']);
let recs = fs.readdirSync(dirRec).filter(f => /^recorte-\d+\.png$/.test(f) && !EXCLUIR.has(f)).sort();
const recJson = path.join(dirRec, 'recortes.json');
if (fs.existsSync(recJson)) { try { const j = JSON.parse(fs.readFileSync(recJson, 'utf8')); const arr = Array.isArray(j) ? j : j.recortes || []; const ok = arr.map(r => r.arquivo).filter(a => recs.includes(a)); if (ok.length) recs = ok; } catch (e) {} }
// feliz/serena primeiro no rodízio
const preferidos = ['recorte-36.png', 'recorte-24.png'].filter(r => recs.includes(r));
const rest = recs.filter(r => !preferidos.includes(r));
// feliz/serena a cada 3ª peça (o ensaio acessível tem poucas fotos alegres)
const rodizio = []; { let a = 0, b = 0; while (rodizio.length < 60) { if (rodizio.length % 3 === 0 && preferidos.length) rodizio.push(preferidos[a++ % preferidos.length]); else rodizio.push(rest[b++ % rest.length]); } }

const SEM_FOTO = new Set(['C02', 'C04', 'C06', 'C08', 'ESC01', 'ESC02', 'ESC03', 'ESC04', 'AD02', 'AD03', 'AD08', 'AD09', 'AD13', 'AD14', 'AD15', 'AD16', 'AD17', 'AD18']);
const HERO = new Set(['ESC01', 'ESC02', 'ESC03', 'ESC04']);
const CAPAS_LISTA = ['clube-secreto', 'a-nova-realidade', 'audios-poderosos', 'sequencias-numericas', 'terapeuta-de-elite', 'crianca-interior', 'cura-escassez-financeira', 'desbloqueie-o-poder-da-sua-mente'];
const itens = [];
let ultimo = '';
copy.forEach((c, i) => {
  if (filtro.length && !filtro.includes(c.id)) return;
  const aj = ajustes[c.id] || {};
  let rec = aj.recorte || rodizio[(i * 7 + (c.etapa.length)) % rodizio.length];
  if (rec === ultimo) rec = rodizio[(rodizio.indexOf(rec) + 1) % rodizio.length];
  ultimo = rec;
  const pasta = PASTA[c.etapa];
  const versoes = ['escuro', 'claro', 'vinho', ...(SEM_FOTO.has(c.id) ? ['ambar'] : [])];
  for (const formato of ['feed', 'story']) for (const versao of versoes) {
    const v = aj[formato + '-' + versao] || {};
    itens.push({ id: c.id, etapa: pasta, formato, versao, recorte: rec, headline: c.headline, apoio: c.apoio, fechamento: c.fechamento, selo: c.selo, data: c.data, cta: c.cta,
      capasExtra: c.id === 'VEN05' ? undefined : [0, 1, 2, 3].map(k => CAPAS_LISTA[(i * 3 + k) % CAPAS_LISTA.length]), layout: c.id === 'VEN05' ? 'capas' : SEM_FOTO.has(c.id) ? 'texto' : undefined, hero: HERO.has(c.id), capas: c.id === 'VEN05' ? ['clube-secreto', 'desbloqueie-o-poder-da-sua-mente', 'terapeuta-de-elite'] : undefined,
      nome: `${pasta}/BLACK PROTON VITALICIA - ${pasta} ${c.id} - ${formato === 'feed' ? 'FEED' : 'STORIES'}${versao === 'claro' ? ' - CLARO' : versao === 'vinho' ? ' - VINHO' : versao === 'ambar' ? ' - AMBAR' : ''}`, ...aj, ...v });
  }
});
// peça extra no padrão "alarme/lembrete" (referência enviada pelo cliente)
if (!filtro.length || filtro.includes('LEMA01')) for (const formato of ['feed', 'story']) for (const versao of ['escuro', 'claro']) itens.push({
  id: 'LEMA01', etapa: 'FORMATOS EXTRAS', formato, versao, layout: 'alarme',
  alarme: { data: '04/11', hora: 'Às 20h', texto: 'Me lembre da Black Próton Vitalícia da Dra. Próton!', chamada: 'Toque em [saiba mais] para ativar o lembrete' },
  nome: `FORMATOS EXTRAS/BLACK PROTON VITALICIA - EXTRA LEMA01 - ${formato === 'feed' ? 'FEED' : 'STORIES'}${versao === 'claro' ? ' - CLARO' : ''}` });
// formatos extras no padrão das referências do cliente (copy aproveitada dos docs)
const EXTRAS = [
  { id: 'EXT01', layout: 'notificacao', recorte: null, extra: { titulo: 'Lembrete', texto: 'A live de revelação da Black Próton Vitalícia é dia [04/11, às 20h]. Quem estiver cadastrada recebe o link no grupo.', cta: 'SAIBA MAIS' } },
  { id: 'EXT02', layout: 'datahero', extra: { topo: 'Live de revelação da Black Próton Vitalícia', linha: 'Começa dia', numero: '04/11', rodape: 'Ao vivo às 20h no YouTube', cta: 'ATIVE O LEMBRETE', capas: ['clube-secreto', 'a-nova-realidade', 'audios-poderosos', 'sequencias-numericas', 'terapeuta-de-elite', 'crianca-interior'] } },
  { id: 'EXT03', layout: 'capasfaixa', extra: { headline: 'Clube Secreto + 11 produtos. [Acesso pra sempre.]', apoio: 'Tudo o que a Dra. Próton construiu até hoje, por um pagamento único. A condição completa só é revelada na live.', cta: 'QUERO PARTICIPAR', capas: ['clube-secreto', 'a-nova-realidade', 'audios-poderosos', 'sequencias-numericas', 'terapeuta-de-elite', 'crianca-interior', 'cura-escassez-financeira', 'desbloqueie-o-poder-da-sua-mente'] } },
  { id: 'EXT04', layout: 'savedate', recorte: 'recorte-36.png', extra: { titulo: 'Black Próton Vitalícia', linha: 'Save the date: [04/11]', apoio: 'Clube Secreto e todas as imersões com acesso vitalício, por um pagamento único. Live de revelação às 20h, ao vivo no YouTube.', cta: 'TOQUE EM "SAIBA MAIS"' } },
];
for (const x of EXTRAS) if (!filtro.length || filtro.includes(x.id)) for (const formato of ['feed', 'story']) for (const versao of ['escuro', 'claro']) {
  const rec = x.recorte === undefined ? undefined : x.recorte; if (rec && !fs.existsSync(path.join(dirRec, rec))) continue;
  itens.push({ id: x.id, etapa: 'FORMATOS EXTRAS', formato, versao, layout: x.layout, recorte: rec, extra: x.extra,
    nome: `FORMATOS EXTRAS/BLACK PROTON VITALICIA - EXTRA ${x.id} - ${formato === 'feed' ? 'FEED' : 'STORIES'}${versao === 'claro' ? ' - CLARO' : ''}` });
}
renderLote(itens, path.join(ROOT, 'criativos')).then(r => console.log(r.length + ' artes geradas'));

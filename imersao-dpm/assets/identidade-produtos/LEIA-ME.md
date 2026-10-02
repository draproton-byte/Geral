# Identidade — Códigos de Ativação e Sequências Numéricas de Grabovoi

## Fontes (grátis, licença SIL OFL — uso comercial liberado)
- **Cinzel Decorative Regular** — palavras grandes (CÓDIGOS, ATIVAÇÃO, SEQUÊNCIAS, NUMÉRICAS)
- **Cinzel Regular** — palavras pequenas (DE, DE GRABOVOI)
- Pasta `fontes/`: TTF (design) e WOFF2 (web). São o subconjunto latino (inclui acentos). Versão completa: fonts.google.com/specimen/Cinzel+Decorative
- **Aviso:** é a fonte mais próxima do lettering das miniaturas, não a original (a arte original não foi encontrada). Se tiver o arquivo/fonte original, substituir.

## Cores
- Texto: creme `#F6F1E7` (sobre escuro) | azul-marinho `#0B1030` (sobre claro)
- Fundo da capa: gradiente radial `#1C2556` (centro) → `#060919` (bordas)

## Arquivos
- `logos-svg/*-curvas.svg`: letras convertidas em curvas (vetor puro, sem depender de fonte) — Illustrator, Figma, Canva, Corel
- `logos-svg/*-texto-editavel.svg`: texto editável (precisa das fontes instaladas)
- `logos-png/*`: PNG transparente 4050 px de largura (creme e azul-marinho)
- `capas/`: capas quadradas 2160×2160 e 1080×1080

## Medidas do layout (usar no Figma/Illustrator)
- Palavras grandes com a mesma largura; "DE" ≈ 11% dessa largura; "DE GRABOVOI" ≈ 62%
- Espaçamento entre letras (tracking): +20 (0,02 em); entrelinha: ~0,28 da altura da palavra grande
- Logo ocupa ~70% da largura da capa, centralizada

## Web (CSS)
```css
@font-face{font-family:'Cinzel Decorative';src:url('fontes/CinzelDecorative-Regular.woff2') format('woff2');font-display:swap}
@font-face{font-family:'Cinzel';src:url('fontes/Cinzel-Regular.woff2') format('woff2');font-display:swap}
.titulo{font-family:'Cinzel Decorative',serif;color:#F6F1E7;letter-spacing:.02em;text-transform:uppercase}
```

# Frases da Dra. Próton · Clube Secreto, Desafio e Imersão

- `artes/<curso>/identidade-produto/`: frase com a identidade e a logo do produto (1080x1440)
- `artes/<curso>/estilo-referencia/`: frase no estilo pergaminho dos prints da Dra. (1080x1440)
- `planilha/planilha-frases-dra-proton.xlsx` (e `.csv`): planilha única, com filtro por Curso
- `data/frases.json`: textos, `src/render.js`: gera as artes (`NODE_PATH=$(npm root -g) node src/render.js [curso] [ID]`), `src/montar.py`: monta dados e planilha

# Prompt para o Claude Desktop: cobrir todas as aulas

Você vai completar o trabalho de frases para o Instagram da Dra. Próton (@dra.proton) cobrindo TODAS as aulas dos 3 cursos: Clube Secreto, Desafio "A Nova Realidade" e Imersão "Desbloqueie o Poder da Sua Mente".

## Contexto do que já existe
- Repositório GitHub `draproton-byte/Geral`, branch `claude/ecstatic-meitner-ffcqdp`, pasta `frases-instagram/`.
- Já feitas 97 frases (Clube Secreto 20, Desafio 25, Imersão 52), só a partir de PDFs e manuais. Estão em `frases-instagram/data/frases.json`. NÃO repita nem parafraseie nenhuma.
- Cada frase gera 2 artes (feed 1080x1440): `identidade-produto` (logo do curso) e `estilo-referencia` (pergaminho, texto preto, destaque amarelo, "— Dra. Próton"). Gerador: `frases-instagram/src/render.js`. Planilha única: `frases-instagram/planilha/planilha-frases-dra-proton.xlsx` (coluna Curso para filtrar). `src/montar.py` junta tudo.
- O que NÃO foi lido: as aulas em vídeo. Esta é a sua tarefa principal.

## Passo 1: levantar a lista completa de aulas de cada curso
Use o Hotmart (área de membros dos 3 produtos), o Drive e o YouTube:
- Hotmart: liste módulos e aulas de cada produto (título, ordem, link). Se houver API, use; se não, use o navegador logado.
- Drive da Dra. Próton: pastas "AULAS CLUBE SECRETO" (1nxD94Jbj1MO5oX6uHaou_3kyfgAo2gE9), "aula-clube-secreto" (1VjhpVhxW4UqEvIOlCmpEeLefhk5jOL_f), `material-de-apoio` do Clube (1mItugtq1zwQmVaXJhWLV9P7ckxfItLU9), guias do Desafio (1ehhM86zmAQajQ8ogRHHrH2Adb9Edo4tM), doc "AULAS LANÇAMENTOS DRA PROTON" (1aKISc7AEmJ1RMqOOxu3oFFRkxshbWswUxZg-X_acSHg, com os links das lives do YouTube).
- Monte uma tabela `curso | nº | título | tem vídeo | tem PDF/transcrição | já coberta nas 97 frases (sim/não)`. Mostre essa tabela a mim antes de seguir.

## Passo 2: obter o conteúdo de cada aula
- Para cada aula com vídeo, obtenha a transcrição (legenda do YouTube ou do player do Hotmart). Se não houver legenda, avise e liste as aulas sem transcrição para eu enviar o áudio.
- Leia também todos os PDFs de apoio ainda não lidos.
- Aulas já cobertas só pelos PDFs (Desafio Aulas 4 e 5, Clube Secreto Aula 30 e demais, aulão gratuito da Imersão) precisam passar pela transcrição.

## Passo 3: extrair as frases
Para cada aula, de 5 a 10 frases, no estilo das aprovadas: curtas, fortes, afirmativas, que fazem sentido sozinhas, de 3 a ~18 palavras (até ~110 caracteres), 1 a 3 trechos entre [colchetes] para o destaque. Exemplos reais: "Você não está [vivendo a vida] que você escolheu. [E você sabe disso.]" / "O universo [não julga.] Ele devolve [o que você vibra.]" / "Quem [sobrevive] não [conquista.]".

Regras obrigatórias:
- Use as palavras da própria Dra. Próton (pode enxugar). Nunca invente doutrina, números, estudos ou promessas.
- Sem promessa de ganho financeiro garantido nem de cura. Marque como "revisar" qualquer frase que soe como promessa.
- Só assine "— Dra. Próton" o que for fala dela. Trechos de terceiros (por exemplo o livro Limite Zero, de Joe Vitale, e os 21 Dias) ficam fora das artes assinadas, ou entram com o crédito do autor.
- Em `ref`, cite aula, arquivo ou vídeo e o minuto (ou a página).

Para cada frase, entregue: id (CS31..., DS26..., IM53...), texto, tema, ref, gancho, legenda (2 a 4 frases, voz da Dra., CTA leve), argumentação, proposta, estratégia, cta.

## Passo 4: gerar tudo
1. Acrescente as novas frases em `data/frases.json` (campos `curso_key` = clube | desafio | imersao, e `curso`).
2. Rode `python3 src/montar.py` e depois `NODE_PATH=$(npm root -g) node src/render.js` (gera as 2 artes de cada frase).
3. Confira visualmente uma amostra (texto cortado, destaque cobrindo letras, logo).
4. Atualize a planilha única (coluna Curso, filtro ligado). Se não puder editar a planilha original (https://docs.google.com/spreadsheets/d/1GOvtwfNdQHFC9uS1pL8d6KEXH3vAzr42FGHxUPj5YlE, de outra conta), me avise e entregue o `.xlsx` para importar.
5. Faça commit na branch `claude/ecstatic-meitner-ffcqdp` e dê push. Não abra pull request.

## Entrega final
Diga: quantas frases novas por curso, quais aulas foram cobertas (com a tabela do Passo 1 atualizada), quais ficaram sem transcrição, e quais frases precisam de revisão da Dra.

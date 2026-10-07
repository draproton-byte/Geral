# Rubrica de revisão (revisor do lançamento)

Pergunta de aceite para cada peça: **"isso passaria avaliação minuciosa de estrategistas de SEO, TikTok, YouTube e de Harvard, sem ressalva?"** Se não, corrija na própria peça antes de seguir. Revisão não é comentário: é edição.

## 1. Decisões canônicas (valem para todos os arquivos; se um arquivo diverge, o arquivo está errado)

| Item | Valor canônico |
|---|---|
| Oferta | Acesso vitalício ao Clube Secreto + 11 produtos, pagamento único. Sem promessa de lançamentos futuros |
| Frase-guia | "A última vez que você vai precisar recomeçar" |
| Escassez aprovada | "Esta condição não se repete. O que vier depois é outra oferta, com outro preço." + lote real + condição revelada só ao vivo |
| Captação | terça 13/10 a segunda 02/11 (21 dias) |
| Live de revelação | terça 03/11, 20h, ao vivo no YouTube. A palavra "Zoom" nunca aparece. Preço só ao vivo |
| Feriados | 12/10 (segunda anterior à captação), 02/11 Finados (tom sóbrio), 20/11 e 27/11 fora da janela |
| Dias da semana | 13 ter, 14 qua, 15 qui, 16 sex, 17 sáb, 18 dom, 19 seg, 20 ter, 21 qua, 22 qui, 23 sex, 24 sáb, 25 dom, 26 seg, 27 ter, 28 qua, 29 qui, 30 sex, 31 sáb, 01/11 dom, 02/11 seg, 03/11 ter |
| Segmentos | S1 alunas do Clube Secreto; S2 quem viveu Desafio, Imersão ou Aulão e não é do Clube (paga como não-aluna até decisão contrária); S3 não-alunas e base fria |
| Cadência de disparo (modelo BFV/26) | Grupos de WhatsApp às 11h30 e 20h todos os dias; e-mail às 07h (09h para segmentos); API às 09h; o terceiro slot das 16h30 é banco de reserva, não entra no cronograma |
| Vagas | Não há limite de vagas na live. Proibido "últimas vagas", "vagas acabando", "cupons limitados" sem `[[CONFIRMAR]]` |
| Lote Especial só ao vivo | Sempre acompanhado de `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]` na primeira ocorrência de cada arquivo |
| Preço | Nunca antes de 03/11 20h. Após a live: `[[PREÇO LOTE ALUNAS]]` e `[[PREÇO LOTE NÃO-ALUNAS]]` |
| Garantia | `[[PENDENTE: garantia]]` (o Clube tem 7 dias; a Vitalícia não está confirmada) |
| Replay | `[[PENDENTE: replay]]`, nenhuma peça afirma nem nega |
| Mensalidade / renovar | Não aparecem em texto público |
| 51,9% (Termostato Invisível) | "51,9% das pessoas que responderam à pesquisa de presença" (dossiê do Desafio). Não chamar de "Aulão" |
| Prova social | "mais de 70 mil alunos em 44 países", "1,4 milhão de seguidores" (guia, seção 8). Qualquer outro número exige fonte |
| Identidade visual | Ainda não existe. Nenhuma cor, fonte ou logo é especificada como definitiva |
| Datas de lote, bônus, fechamento | placeholders |
| Superlativos ("a melhor", "a maior da história") | Só "a oferta que o Clube Secreto nunca fez antes"; demais com `[[CONFIRMAR: superlativo]]` |

## 2. Checagens duras (todas as linhas de todos os arquivos)

1. Zero travessão (—) e zero meia-risca (–).
2. Nome "Keila" ausente. Nomes de produtos, cursos ou termos do Dr. João ausentes (harmonização, injetáveis, FEP, Elite, Zoom, congresso).
3. Nenhum preço, parcela ou valor em R$ em texto público pré-live (valores só em "Notas ao implementador" ou em nota marcada para remover; renda e faixas de pesquisa são exceção).
4. Nenhuma das frases proibidas do guia (seção 3) e nenhuma de: "porta fecha", "nunca mais vai ter", "última chance de ter acesso vitalício", "vai ganhar", "vai manifestar", "cura", "garantido que a autossabotagem acaba".
5. WhatsApp e API: "para" (não "pra"), linha em branco entre linhas, `*negrito*`, link em linha própria, rodapé SAIR (API), até 12 linhas, termina em pergunta, reação ou CTA claro.
6. Placeholders só do conjunto do guia (seção 2). Nenhum "TODO", "lorem", "XXX".
7. IDs únicos e sequenciais por família; contagens ditas no cabeçalho do arquivo batem com o que existe.
8. Todo caminho de arquivo citado dentro do arquivo existe no repositório.
9. Nenhum dado pessoal, telefone, e-mail, login, senha, link do Dr. João.
10. Frases intocáveis da Dra. (guia, seção 4) aparecem literais, sem paráfrase.

## 3. Checagens de verdade (cruzar com as fontes)

- Cada número vem de `01_PESQUISAS_INSIGHTS.md` ou do briefing. Recalcule contra os CSV em `/tmp/claude-0/-home-user-Geral/97d445a0-6a07-5aab-ab65-f3d7b979469e/scratchpad/` (`alunos.csv` = ficha de interesse com 893 respostas; `aulao.csv` = 7.323 respostas do Aulão) quando houver dúvida.
- Datas e dias da semana contra a tabela canônica.
- Afirmação sobre o Clube ou os 11 produtos só se estiver nas fontes (`/tmp/claude-0/-home-user-Geral/97d445a0-6a07-5aab-ab65-f3d7b979469e/scratchpad/atual/` e `desafio/`). Se não estiver, `[[CONFIRMAR]]`.

## 4. Checagens de copy (o que separa bom de excelente)

1. **Uma ideia por peça.** Se há duas, divida ou corte.
2. **Primeira linha** para quem rola a tela: específica, concreta, com a frase da audiência ou um número real. Sem abertura genérica ("Olá, tudo bem?") em disparo.
3. **Estágio de consciência** declarado bate com o texto (estágio 1 não vende; estágio 5 não explica a dor).
4. **Identidade, não benefício.** A peça mexe em "quem eu sou", não só em "o que eu ganho".
5. **Voz da Dra.**: primeira pessoa, direta, acolhedora, sem jargão de vendedor; frases curtas (40% da base tem mais de 50 anos).
6. **Prova** concreta ou placeholder; nenhuma prova inventada.
7. **Objeção** respondida pelo mecanismo (sem prazo, sem pressão de usar logo), não por pressão.
8. **CTA único** e claro; botão e link coerentes com a página de destino.
9. **Repetição**: duas peças da mesma série não abrem com a mesma frase nem fecham com a mesma estrutura sem motivo.
10. **Ritmo**: variar comprimento e estrutura; sem listas de três adjetivos em sequência; sem palavras-tell ("sinceramente", "honestamente", "basicamente").
11. **Compliance emocional**: sem diagnóstico clínico, sem promessa de cura, sem culpar a pessoa, sem explorar luto, dívida ou doença.
12. **Pós-conversão**: quando for peça de venda, o texto diz o que acontece depois de entrar.
13. **Gênero**: tráfego frio neutro; grupos e e-mails de quem já comprou aceitam feminino.
14. **Acessibilidade**: nada que dependa de cor; emoji de apoio, não de sentido; link visível.

## 5. Como entregar a revisão

- Edite os arquivos **no lugar**. Mantenha IDs e estrutura. Corrija o texto; não deixe "sugestão" no corpo.
- Leia **todas as linhas** de cada arquivo da sua área. Registre ao final do log quantas linhas/mensagens leu.
- Escreva `/home/user/Geral/black-friday-dpm/14_revisao/<area>_log.md` com: arquivos revisados; defeitos achados por gravidade (bloqueante, alto, médio, baixo) e o que foi feito; o que ainda depende de decisão (com `[[CONFIRMAR]]` já colocado); contagens finais.
- Ao terminar, rode de novo as checagens duras (grep) e cole no log o resultado (0 ocorrências).
- Não invente fatos para resolver uma pendência. Marque e liste.

# QC independente: modelo_joao_api_email

Revisor QC (segunda passada, depois de `modelo_joao_api_email_log.md`). Decisões do log anterior respeitadas (IDs, estrutura, ausência de preço, Lote Especial com [[CONFIRMAR]], série canônica da pasta 13).

## 1. O que foi lido
- 5 arquivos de `13_modelo_dr_joao/`: 1.256 linhas lidas por inteiro antes da edição (api_onboarding 220, email_onboarding 155, email_alunas_captacao 328, api_demais_alunos_captacao 257, api_alunas_captacao 296).
- 31 mensagens: API onboarding 4 (8 textos com a variação de alunas), e-mail onboarding 3, e-mail alunas 8, API demais alunos 8, API alunas 8. Total de 35 textos pontuados.
- Rubrica, estratégia, pesquisas, guia, mapa de links e o log anterior lidos por inteiro.
- Documentos-modelo do Drive (5): baixados, mas o conector devolveu o conteúdo em base64 e eu não decodifiquei o texto completo de todos. A comparação com o modelo foi estrutural (quantidade de mensagens, datas relativas D-n, botões, blocos de data, lista de exclusão, função de cada peça) e apoiada nos trechos que consegui ler (títulos, frases-gatilho como "L-O-U-C-O", "Vou quebrar uma regra", "Seu cupom expira em 7 dias", Zoom, cupom limitado). Não refiz diff literal; a fidelidade linha a linha continua a documentada no log anterior.

## 2. Notas antes e depois (só o que mudou)
Critérios: a primeira linha, b voz, c consciência, d identidade, e objeção, f CTA e link, g compliance, h formato, i ritmo, j integridade.

| Peça | Critério | Antes | Depois | Defeito e correção |
|---|---|---|---|---|
| Todas as 31 mensagens | f | 5 | 9 | Tokens `[[LINK: ...]]` genéricos ou fora do padrão ("grupo da Black", "reserva e diagnóstico", "live no YouTube", "comercial", "suporte WhatsApp", "página das alunas", "Saiba Mais (API)"). Todos trocados pelo token canônico com destino, canal e ID da peça (seção 3) |
| API onboarding 01, 02, 03 e variações | g | 7 | 9 | "Sua vaga" em texto público virou "sua reserva" (7 ocorrências) |
| E-mail onboarding 01 | g | 7 | 9 | Assunto "confirmar sua vaga" virou "confirmar sua reserva" |
| E-mail onboarding 02 e 03 | f | 7 | 9 | Dois links de contato ("comercial" e "suporte WhatsApp") em sequência; "comercial" não é destino do mapa. Ficou só suporte WhatsApp |
| E-mails alunas 01, 02, 04, 05, 06, 08 | g | 7 | 9 | "a sua vaga" virou "o seu lugar" (6 ocorrências, inclusive linha de preview do 08) |
| E-mail alunas 08 | g, j | 7 | 9 | "esta é a última chamada" sugeria fechamento da reserva. Virou "faça isso agora ... antes de a live começar" |
| E-mail alunas, cabeçalho | f | 6 | 9 | Botão apontava para "página das alunas". Agora captura C, canal email, ID em-alunas-NN |
| API demais alunos 01 a 08 | j | 7 | 9 | Cabeçalhos "terça-feira, 13" sem mês. Agora com /10 e /11, dias da semana conferidos |
| API demais alunos 03, 05, 06 | e, g | 7 | 9 | "perde o Lote Especial" e "perde a chance de garantir" (pressão por perda). Reescrito como "é para quem estiver ao vivo" |
| API demais alunos 04 | g | 8 | 9 | "garante o Lote Especial" (a garantia do lote só existe na compra). Virou "tem acesso ao Lote Especial" |
| API demais alunos, lista e notas | g | 7 | 9 | "reservou a vaga" virou "reservou o lugar" |
| API alunas 01 | j | 7 | 9 | `[[CONFIRMAR: horário]]` resolvido: API às 09h pela cadência do projeto |
| API alunas 04 | j | 6 | 9 | "Falta 1 semana" e "Na próxima terça": contagem de dias em API que pode escorregar. Virou "A sua condição de aluna será revelada em 03/11" e "Na terça, 03/11" |
| API alunas 04 | g | 7 | 9 | "garante o lembrete" virou "você recebe o lembrete" |
| API alunas 08 | g, j | 7 | 9 | "última chamada para reservar" virou "reserve agora para receber o lembrete da live" |
| API alunas 01 a 08, cabeçalhos | j | 7 | 9 | Datas completadas (15/10, 21/10 ... 03/11) |
| API alunas 05 e 06 | j | 7 | 9 | `[[CONFIRMAR]]` sobre 20h removido: decisão fechada (séries do modelo que já fixam 20h) |
| Notas dos 5 arquivos | j | 7 | 9 | Referências a tokens antigos, a "Falta 1 semana", a "última chamada" e a "limite de vagas" atualizadas |

Peças sem alteração de texto além dos tokens: e-mails alunas 03 e 07, API onboarding 04, e-mail onboarding 01 (corpo), API alunas 02, 03, 05, 06, 07. Todas já com 9 ou mais em a a j depois da revisão anterior.

## 3. Tokens de link (47 tokens, 94 ocorrências contando a seção "Links desta peça")
| Tipo | Contagem |
|---|---|
| captura C, api (api-alunas-01 a 08) | 8 |
| captura C, email (em-alunas-01 a 08) | 8 |
| captura D, api (api-viveu-01 a 08) | 8 |
| grupo geral, api (api-onb-01 a 04) | 4 |
| grupo alunas, api (api-onb-01 a 04, versão alunas) | 4 |
| obrigado e diagnóstico, api (api-onb-01 e 03, geral e alunas) | 4 |
| suporte WhatsApp, api (api-onb-04, geral e alunas) | 2 |
| grupo geral, email (em-onb-01 a 03) | 3 |
| diagnóstico, email (em-onb-01 a 03) | 3 |
| live YouTube, email (em-onb-02) | 1 |
| suporte WhatsApp, email (em-onb-02 e 03) | 2 |
| Total | 47 |

Contagem oficial por grep: 47 tokens no corpo, 47 na seção "Links desta peça", 0 fora do padrão. 
Regras de link respeitadas: nenhum link na primeira abertura comercial, em acolhimento de dívida, luto ou URA (nenhuma dessas peças está nesta área). O e-mail e a API de 02/11 (Finados) têm tom sóbrio e mantêm o link, porque são lembretes da live, não acolhimento de luto. O link de suporte fica em linha própria (api-onb-04, em-onb-02 e 03). Onde há dois botões (onboarding), cada um tem token próprio e o secundário está marcado na seção de links.

Tabela "Links desta peça" ao fim de cada um dos 5 arquivos (em formato de lista com barras, porque o token contém a barra vertical e quebraria uma tabela Markdown).

## 4. Pendências de decisão (já com [[CONFIRMAR]] ou [[PENDENTE]] no texto)
1. [[CONFIRMAR: Lote Especial só para quem está ao vivo]] (primeira ocorrência: e-mail onboarding 01, e-mail alunas 01, API demais alunos 03, API alunas 01).
2. [[CONFIRMAR: live fechada para alunas? Se sim, trocar data e horário]] (onboarding API e e-mail alunas e API alunas).
3. [[PENDENTE: bônus]] do check-in (API onboarding 01, e-mail onboarding 01, API alunas 07).
4. [[CONFIRMAR: aceitar e-mail e API da mesma aluna no mesmo dia ou escalonar por canal]] (15/10, 23/10, 27/10, 29/10, 02/11, 03/11).
5. [[CONFIRMAR: a aula de terça de 03/11 muda de horário, é substituída pela live ou continua]] (e-mail alunas 08).
6. [[CONFIRMAR: excluir quem já reservou o lugar]] (API demais alunos e API alunas).
7. [[CONFIRMAR: a Black Próton Vitalícia só abre na live de 03/11 para toda a base]] (e-mails de onboarding 02 e 03).
8. Páginas e grupos inexistentes: captura C, captura D, obrigado e diagnóstico, diagnóstico, grupo geral, grupo alunas, live YouTube, suporte WhatsApp (número oficial não informado). Dependem de web designer, automação, YouTube e suporte.
9. Arte da API alunas 02 (não existe).
10. Gatilhos do onboarding por API e e-mail (o modelo não informa): conferir o fluxo real.
11. Dedupe ListBoss/DataCrazy (alunas do Clube, Vitalícios, quem já reservou, convite indireto -D em 13/10 e 20/10).
12. Cadência: API alunas 05 e 06 ficam às 20h por serem série do modelo que já fixa 20h (decisão do projeto, sem pendência). Todas as demais APIs às 09h; e-mails às 09h (segmento).

## 5. Incoerências de outras áreas (anotadas, não editadas)
- `05_whatsapp_api/cronograma_de_disparos.md` ainda agenda o Golden Ticket em 22/10, 29/10 e 02/11 e precisa alinhar às datas da série canônica de API alunas.
- `06_emails/captacao_serie.md`: tabela de exclusão 07h x 09h ainda lista as datas da série SA; trocar para as 8 datas do e-mail canônico das alunas.
- `06_emails/segmentados_09h.md`: tabela SA com datas antigas (banco de reserva, sem edição).
- `16_MAPA_DE_LINKS.md` não lista "comercial" como destino; se a equipe quiser um link comercial nos e-mails de onboarding, precisa criar o destino e o token.
- Os tokens de onboarding de alunas usam "grupo alunas"; se o grupo só de alunas não for criado, trocar para "grupo geral".

## 6. Checagens duras (grep em 5 arquivos, resultado)
| Checagem | Ocorrências |
|---|---|
| Travessão e meia-risca | 0 |
| "Dr. João", "Pithon", FEP, injetáveis, harmonização, Zoom, congresso, Keila, Hotmart, cupom, mensalidade, renovar, lorem | 0 |
| "pra" (palavra isolada) | 0 |
| "vaga" ou "vagas" (texto público e notas) | 0 |
| "Elite" fora de "Workshop Terapeuta de Elite" | 0 |
| "cura" fora de "Cura da Criança Interior" e "Cura da Escassez Financeira" | 0 |
| R$, parcelas, preço | 0 |
| "última chance", "últimas vagas", "porta fecha", "vai ganhar", "cupons limitados" | 0 em texto de peça (as citações nas notas "Conflitos entre o modelo e as regras" descrevem o que foi removido do modelo) |
| `[[LINK: ...]]` fora do padrão `destino | canal | ID` | 0 |
| IDs de link inexistentes ou duplicados dentro do arquivo | 0 |
| TODO e XXX | 0 |

Verificações de integridade: dias da semana 13 ter, 15 qui, 16 sex, 20 ter, 21 qua, 23 sex, 27 ter, 29 qui, 30 sex, 31 sáb, 02/11 seg, 03/11 ter (todos corretos). Contagens em e-mail (27/10 faltam 7, 29/10 faltam 5, 31/10 faltam 3) corretas. Botões de API de até 25 caracteres (maior: "Reservar minha condição", 23); corpo de cada API com menos de 1.024 caracteres; no máximo 12 linhas de texto; rodapé SAIR e frase de origem presentes.

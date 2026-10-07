# Log de revisão: estratégia e dados

Área: estratégia, pesquisas, guia, matriz e pendências. Rubrica: `14_revisao/RUBRICA.md`. Data da revisão: 07/10/2026.

## 1. Arquivos revisados e linhas lidas

| Arquivo | Linhas lidas (antes da edição) | Situação |
|---|---|---|
| `00_ESTRATEGIA_COPY_SENIOR.md` | 169 (todas) | editado no lugar |
| `01_PESQUISAS_INSIGHTS.md` | 148 (todas) | editado no lugar |
| `02_GUIA_DE_COPY.md` | 96 (todas) | editado no lugar |
| `11_matriz_desafio_para_black.md` | 77 (todas) | editado no lugar |
| `12_decisoes_e_pendencias.md` | 86 (todas) | editado no lugar |

Fontes lidas por inteiro: `RUBRICA.md` (72 linhas), dossiê de audiência (212 linhas), briefing da Black (177 linhas), `alunos.csv` (895 linhas: cabeçalho, a linha PERGUNTAS e 893 respostas), `aulao.csv` (7.323 respostas). Cálculo com `python3 -I` e `csv`, sem pandas.

Contagens de base: ficha de interesse = 893 linhas (844 e-mails distintos; classificação 151 quente, 394 morno, 348 frio); Aulão = 7.323 linhas (6.382 e-mails distintos; respostas de 14/09/2026 21h04 a 05/10/2026 19h30). Todos os percentuais abaixo contam linhas. Caminhos `desafio/...` e `atual/...` citados neste log são das fontes em `/tmp/claude-0/-home-user-Geral/97d445a0-6a07-5aab-ab65-f3d7b979469e/scratchpad/` (fora do repositório).

## 2. Tabela de números

Status: OK = valor anterior confere (arredondamento meio para cima); CORRIGIDO = valor, atribuição ou data alterados no arquivo; NÃO VERIFICÁVEL = sem fonte acessível.

### 2.1 Divergências encontradas e corrigidas

| Número (arquivo e seção) | Valor anterior | Valor recalculado | Fonte | Status |
|---|---|---|---|---|
| 01 cabeçalho: período da pesquisa do Aulão | 14/09 a 24/09 | 14/09 a 05/10 (último registro 05/10/2026 19h30) | `aulao.csv`, coluna criado_em | CORRIGIDO |
| 01 cabeçalho: ficha de interesse | 893 sem período | 893 linhas, 844 e-mails distintos, 14/08 a 05/10 | `alunos.csv`, timestamp e email | CORRIGIDO (acrescentado) |
| 01 cabeçalho: Aulão | 7.323 | 7.323 linhas, 6.382 e-mails distintos | `aulao.csv` | CORRIGIDO (acrescentado) |
| 01 cabeçalho: dossiê | 5.486 + 722 + 1.562 | Igual (todos entre 14 e 23/09); percentuais do dossiê usam base de 5.486 | dossiê, base | OK, nota de base acrescentada |
| 01 cabeçalho: quiz do Desafio | 3.226 | 3.226 linhas na planilha; 722 no dossiê (até 23/09) | `desafio/lancamento/quiz_a_nova_realidade_perguntas_opcoes.md`; dossiê | CORRIGIDO (nota acrescentada) |
| 01 §1.3 e 00 §6: 51,9% (Termostato Invisível) | "Dossiê: 51,9% respondem" e "enquete de presença" | "51,9% das pessoas que responderam à pesquisa de presença" (dossiê, base 5.486; pergunta ausente do `aulao.csv`) | dossiê §4.2; RUBRICA seção 1 | CORRIGIDO (atribuição) |
| 01 §1.4: coluna Aulão (idade, gênero) | 78,4% 40+, 40% 50+, 79,2% mulheres, 20,8% homens sob o cabeçalho "Aulão (7.323) / Dossiê" | Mantidos os valores, rotulados "Dossiê" (o CSV do Aulão não tem idade nem gênero) | dossiê §3 | CORRIGIDO (atribuição) |
| 01 §1.4: ficha, 45 anos ou mais | ausente | 60% (538/893 nas faixas 45 a 54, 55 a 64 e 65+) | `alunos.csv` q6 | CORRIGIDO (acrescentado, usado em 00) |
| 01 §1.4: Aulão, renda até R$ 3.000 e acima de R$ 5.000 | 65% e 15% sem contagem | 65,0% (4.761/7.323) e 15,1% (1.108/7.323) | `aulao.csv` P5 | OK, contagens acrescentadas |
| 01 §1.4: Aulão, conhece a Dra. há menos de 1 mês | 25% e 19% separados | Mantidos; acrescentado "juntos, 44%" (3.238/7.323 = 44,2%) | `aulao.csv` P7 | CORRIGIDO (acrescentado) |
| 01 §1.6: faixa de preço da Vitalícia | "menor faixa da Vitalícia fica na zona de 10%" | R$ 1.997 e R$ 2.997 caem em R$ 1.001 a R$ 3.000 (6,9%, 62/893); acima de R$ 3.000 são 2,9% (26/893); juntas, 9,85% (88/893). R$ 3.997 e R$ 4.997 caem em 3% | `alunos.csv` q26 | CORRIGIDO (redação imprecisa) |
| 01 §1.6: forma de pagamento mais escolhida | atribuída à ficha | Atribuída ao briefing; o `alunos.csv` não tem coluna de pagamento | briefing, Pesquisas analisadas | CORRIGIDO (atribuição) |
| 01 §4: UTMs "da BFV/26" | BFV/26 do modelo | Planilha "UTMs Black Friday" (copiada de lançamentos anteriores, Imersão e Aulão, ainda não adaptada) | `desafio/contexto/32_blackfriday_utms_resumo.md` | CORRIGIDO (atribuição) |
| 00 §1: captação | 13/10 a 03/11 | terça 13/10 a segunda 02/11 (21 dias); live terça 03/11 | RUBRICA seção 1 (o briefing diz 03/11) | CORRIGIDO |
| 00 §3.1: Aulão, conhecem a Dra. há menos de 1 mês | 43,8% | 44,2% (1.827 primeira vez + 1.411 menos de 1 mês = 3.238 de 7.323). O 43,8% é do dossiê (base 5.486) | `aulao.csv` P7; dossiê §3 | CORRIGIDO |
| 00 §3.3: homens | ~21% do Aulão | 20,8% (dossiê, base 5.486); o CSV do Aulão não tem gênero | dossiê §3 | CORRIGIDO (atribuição e valor) |
| 00 §5: compradores do Desafio | 2.220 pagantes | 2.220 unidades vendidas (o dossiê fala em 5.629 eventos de compra e 2.220 unidades) | dossiê §2 e cabeçalho | CORRIGIDO (termo) |
| 00 §6: perfil Cobrança, frase "funcional, mas exausta por dentro" | 16% (ficha) | 22,5% escolhem essa frase (201/893, q15); 16,0% (143/893, q16) apontam cobrança excessiva como o que tira a paz. Os dois passam a ser citados com a pergunta de origem | `alunos.csv` q15 e q16 | CORRIGIDO (misturava duas perguntas) |
| 00 §6: Autossabotagem, 19% a 27% | sem fonte por extremo | 19% é da ficha (174/893, 19,5%) e 27% do Aulão (1.967/7.323, 26,9%) | `alunos.csv` q17; `aulao.csv` P4 | CORRIGIDO (atribuição) |
| 00 §3.3: confortável querendo mais | 18% | 17,9% (160/893) = 12,5% "vida confortável" + 5,4% "ganho bem, mas quero aumentar muito"; definição agora explícita | `alunos.csv` q8 | OK, definição acrescentada |
| 00 §4: mecanismo, ciclos | 12 ciclos por ano | 12 ciclos, um por mês (briefing: "repetido mês a mês por 12 ciclos") | briefing; `desafio/contexto/10_comercial_narrativa_e_quebra_de_objecoes.md` | CORRIGIDO |
| 00 §4: cadência de disparo | "BFV/26 do João Pithon": e-mail 07h, grupos 11h30 e 20h, segmentado 09h | modelo BFV/26: grupos 11h30 e 20h, e-mail 07h (09h segmentos), API 09h; 16h30 é banco de reserva | RUBRICA seção 1 | CORRIGIDO |
| 00 §1: lista de pendências | "oito pendências" (preço avulso, datas, garantia, bônus, fechamento, replay, foto, meta) | 10 itens; 1 a 8 bloqueiam venda (inclui parcelamento e preço travado no Pix e boleto, que 12 já tinha), 9 e 10 bloqueiam captação | `12_decisoes_e_pendencias.md` | CORRIGIDO (00 e 12 divergiam) |
| 00 §7: pasta 09 | `09_comercial` (caminho inexistente) | `09_comercial_datacrazy` | repositório | CORRIGIDO |
| 11: contagem de criativos de escassez | 24 | 26 (24 de lote + 2 de bônus) | IDs ESC-ESP, PRI, ULT, NSR (6 cada) e ESC-BON (2) | CORRIGIDO |
| 11: criativos de vendas | 24 + 12 | 24 criativos VIT + 12 RMV + 9 legendas (5 LEG-VIT e 4 LEG-RMV) | `04_criativos/vendas_vitalicia.md` | CORRIGIDO |
| 11: lembretes de grupo | 3 disparos por dia | 63 slots (21 dias x 3) com variantes; cadência canônica 11h30 e 20h, 16h30 é reserva | `05_whatsapp_api/lembretes_de_grupo_captacao.md`; RUBRICA | CORRIGIDO (texto) |
| 11: Anúncios sem limite de vagas | "na captação" | "na live" | RUBRICA seção 1 (vagas) | CORRIGIDO |
| 12 item 23 (antes 19): 51,9% | "enquete de presença" | "pesquisa de presença", base 5.486 | dossiê | CORRIGIDO |
| 12 item 12 (antes 11): 65% do Aulão | "65% do Aulão não cabe na faixa" | "65% do Aulão ganha até R$ 3.000" (4.761/7.323) | `aulao.csv` P5 | CORRIGIDO (redação) |
| 12 item 38 (antes 34): homens | 21% | 20,8% (dossiê) | dossiê | CORRIGIDO |
| 12 item 37 (antes 33): feriados | 02/11 apenas | 02/11 (segunda, Finados) e 12/10 (segunda anterior à captação) | RUBRICA seção 1 | CORRIGIDO |
| 02 §1.6: base 79% feminina e 21% masculina | sem fonte | 79,2% e 20,8% (dossiê) | dossiê §3 | OK, fonte acrescentada |
| 12 item 45 (antes 35): ficha de 893 e Comercial 877 | 893 versus 877 | 893 linhas, 844 e-mails distintos; "877 pessoas" vem de `desafio/lancamento/comercial_4_narrativa_quebra_objecoes_clube_secreto.md` e do dossiê do Comercial | fontes | OK, acrescentado |
| 12 item 46 (antes 36): diagnóstico | 1.562 versus 4.032 | Confere: 1.562 no dossiê; 4.032 em `diagnostico_bloqueios_perguntas_resultados.md` | fontes | OK |

### 2.2 Valores do briefing, do dossiê e das aulas conferidos contra a fonte textual

| Número | Valor nos arquivos | Valor na fonte | Fonte | Status |
|---|---|---|---|---|
| Tráfego | R$ 200.000 | R$ 200.000 | briefing | OK |
| Preços alunas (Especial, Primeiro, Último) | R$ 1.997, R$ 2.997, R$ 3.997 | iguais | briefing | OK |
| Preços não-alunas | R$ 2.997, R$ 3.997, R$ 4.997 | iguais; diferença fixa de R$ 1.000 por lote | briefing | OK |
| Os 11 produtos | 11 nomes listados em 00 §1 | 11 nomes iguais, na mesma ordem | briefing, seção Produtos | OK |
| Garantia do Clube | 7 dias | 7 dias incondicional | briefing; `desafio/lancamento` ("7 dias de garantia incondicional") | OK |
| Protocolo do Clube | 21 dias por ciclo, 12 ciclos | protocolo de 21 dias, 12 ciclos | briefing | OK |
| Oferta do Clube no Desafio | R$ 1.997 à vista ou 12x de R$ 199,31 (de R$ 2.997), 365 dias | iguais | `desafio/lancamento/email_lembrete_desafio.md`; `criativos_venda_clube_secreto_estaticos.md` | OK |
| Frase "a porta do pagamento único fecha e não reabre" | citada como da página de captura | presente na página de captura publicada | `atual/projetoBF_copy_pagina_captura_black_proton_vitalicia_artifact.md`, linha 73 | OK |
| Mentoria individual | R$ 120 mil | R$ 120 mil | dossiê §8 | OK (12 item 22 mantém a pergunta se ainda vale) |
| Quiz, frase "Eu cuido de todo mundo, mas ninguém cuida de mim" | 10,9% | 10,9% | dossiê §4.5 | OK |
| Dossiê, idade e gênero | 78,4% 40+, 40% 50+, 79,2% e 20,8% | iguais | dossiê §3 | OK |
| Dossiê, 40,5% e 39,8% "não sei" | não usados em 00 e 01 (usam o CSV: 40%) | 40,5% e 39,8% no dossiê; 40,4% e 39,6% no CSV | dossiê §4.1; `aulao.csv` | OK (todos arredondam para 40%) |
| Frase "Quando você sobe, a casa sobe junto" | Aula 02 | Manual da Aula 02 | `desafio/lancamento/aula02_manual_noite_do_reset_mental.md` | OK |
| Frases "Obediência é maturidade" e "Quem não está crescendo está morrendo" | Aula 02 | Aula 02 | mesmo arquivo | OK |
| Frase "Não trave o processo" | Aula (lição 9) | lição 9 | manual do Desafio | OK |
| Frases intocáveis do guia §4 (14 frases) | literais | 12 idênticas; "Se você não governa as suas emoções, não governa mais nada." e "Melhorar de vida é ganhar mil reais a mais..." aparecem assim em fichas de frases do Desafio (as aulas trazem variantes "governar" e "500 ou mil") | `desafio/` e `atual/` | OK (variantes registradas) |
| Prova social | mais de 70 mil alunos em 44 países; 1,4 milhão de seguidores | manual do Desafio diz 1,5 milhão | `desafio/lancamento/manual_do_participante.md` | OK (canônico da rubrica; 12 item 24 mantém a conferência) |
| Datas: fases 13 a 19/10, 20 a 27/10, 28/10 a 02/11, 03/11 | dias da semana: 13/10 terça, 02/11 segunda, 03/11 terça, 12/10 segunda | iguais à tabela canônica | RUBRICA seção 1 | OK |
| Item "só 8 dos 11 produtos têm descrição nas fontes" (12 item 35) | 8 de 11 | o briefing lista apenas os nomes | briefing | NÃO VERIFICÁVEL (marcado no item 55 de 12) |
| Acesso do Clube "aulas ao vivo toda terça", "suporte direto no WhatsApp" | 02 §8 | presentes nos materiais de API e e-mail do Desafio | `atual/` e `desafio/lancamento/` | OK |
| Termos do guia §8: formação, Doutora Honoris Causa pela Academia Mundial de Letras, história de vida | 02 §8 | presentes nos materiais do Comercial | `desafio/lancamento/` | OK |

### 2.3 Percentuais de pesquisa recalculados dos CSV (102 linhas)

Todos os valores anteriores arredondam para o recalculado (meio para cima), exceto os dois marcados na seção 2.1.

| Seção | Número | Valor anterior | Valor recalculado | Fonte | Status |
|---|---|---|---|---|---|
| 01 §1.1 | Aulão, não sei o que impede de ganhar | 40% | 40,4% (2957/7323) | Aulão (`aulao.csv`) P2 | OK |
| 01 §1.1 | Aulão, não sei o que impede a paz | 40% | 39,6% (2903/7323) | Aulão (`aulao.csv`) P3 | OK |
| 01 §1.1 | Ficha, não sei o que impede de ganhar | 29% | 28,6% (255/893) | ficha (`alunos.csv`) q10 | OK |
| 01 §1.1 | Ficha, não sei o que impede a paz | 34% | 33,7% (301/893) | ficha (`alunos.csv`) q16 | OK |
| 01 §1.2 | Aulão, procrastino | 22% | 21,5% (1575/7323) | Aulão (`aulao.csv`) P2 | OK |
| 01 §1.2 | Ficha, procrastino | 20% | 19,7% (176/893) | ficha (`alunos.csv`) q10 | OK |
| 01 §1.2 | Aulão, confiar mais em mim | 32% | 31,8% (2327/7323) | Aulão (`aulao.csv`) P4 | OK |
| 01 §1.2 | Aulão, parar de me sabotar | 27% | 26,9% (1967/7323) | Aulão (`aulao.csv`) P4 | OK |
| 01 §1.2 | Ficha, confiar mais em mim | 36% | 36,3% (324/893) | ficha (`alunos.csv`) q17 | OK |
| 01 §1.2 | Ficha, parar de me sabotar | 19% | 19,5% (174/893) | ficha (`alunos.csv`) q17 | OK |
| 01 §1.2 | Ficha, mais difícil para mudar: atrair oportunidades e pessoas certas | 20% | 20,4% (182/893) | ficha (`alunos.csv`) q18 | OK |
| 01 §1.2 | Ficha, mais difícil para mudar: saber o que fazer | 13% | 13,2% (118/893) | ficha (`alunos.csv`) q18 | OK |
| 01 §1.2 | Ficha, mais difícil para mudar: ter disciplina para executar | 13% | 13,2% (118/893) | ficha (`alunos.csv`) q18 | OK |
| 01 §1.2 | Ficha, mais difícil para mudar: sair de onde estou | 13% | 13,0% (116/893) | ficha (`alunos.csv`) q18 | OK |
| 01 §1.2 | Ficha, mais difícil para mudar: desbloquear crenças | 12% | 11,6% (104/893) | ficha (`alunos.csv`) q18 | OK |
| 01 §1.3 | Aulão, dinheiro é a área que mais precisa ser arrumada | 66% | 65,9% (4829/7323) | Aulão (`aulao.csv`) P1 | OK |
| 01 §1.3 | Ficha, área: dinheiro | 34% | 33,7% (301/893) | ficha (`alunos.csv`) q7 | OK |
| 01 §1.3 | Ficha, área: várias ao mesmo tempo | 39% | 38,7% (346/893) | ficha (`alunos.csv`) q7 | OK |
| 01 §1.3 | Ficha, o dinheiro não dá para pagar tudo | 34% | 33,8% (302/893) | ficha (`alunos.csv`) q8 | OK |
| 01 §1.3 | Ficha, pago as contas, mas quase nunca sobra | 32% | 31,9% (285/893) | ficha (`alunos.csv`) q8 | OK |
| 01 §1.3 | Ficha, confortável querendo mais | 13% | 12,5% (112/893) | ficha (`alunos.csv`) q8 | OK |
| 01 §1.3 | Ficha, consigo guardar um pouco | 9% | 9,3% (83/893) | ficha (`alunos.csv`) q8 | OK |
| 01 §1.3 | Ficha, quanto gostaria de ganhar: R$ 100 mil ou mais | 27% | 26,9% (240/893) | ficha (`alunos.csv`) q9 | OK |
| 01 §1.3 | Ficha, quanto gostaria de ganhar: R$ 10 mil | 19% | 19,0% (170/893) | ficha (`alunos.csv`) q9 | OK |
| 01 §1.3 | Ficha, quanto gostaria de ganhar: R$ 20 mil | 17% | 17,2% (154/893) | ficha (`alunos.csv`) q9 | OK |
| 01 §1.3 | Ficha, quanto gostaria de ganhar: R$ 30 mil | 15% | 14,8% (132/893) | ficha (`alunos.csv`) q9 | OK |
| 01 §1.3 | Ficha, quanto gostaria de ganhar: R$ 50 mil | 15% | 14,7% (131/893) | ficha (`alunos.csv`) q9 | OK |
| 01 §1.3 | Ficha, primeiro assunto: Como reprogramar minha mente para o dinheiro | 23% | 22,7% (203/893) | ficha (`alunos.csv`) q22 | OK |
| 01 §1.3 | Ficha, primeiro assunto: Como mudar minha vida financeira | 21% | 20,8% (186/893) | ficha (`alunos.csv`) q22 | OK |
| 01 §1.3 | Ficha, primeiro assunto: Como parar de procrastinar e finalmente agir | 12% | 12,4% (111/893) | ficha (`alunos.csv`) q22 | OK |
| 01 §1.3 | Ficha, primeiro assunto: Como eliminar crenças e bloqueios | 11% | 11,3% (101/893) | ficha (`alunos.csv`) q22 | OK |
| 01 §1.3 | Ficha, primeiro assunto: Como usar a Lei da Atração na prática | 8% | 8,2% (73/893) | ficha (`alunos.csv`) q22 | OK |
| 01 §1.3 | Ficha, quer destravar: Ter liberdade financeira | 43% | 43,3% (387/893) | ficha (`alunos.csv`) q11 | OK |
| 01 §1.3 | Ficha, quer destravar: Sair das dívidas | 12% | 11,6% (104/893) | ficha (`alunos.csv`) q11 | OK |
| 01 §1.3 | Ficha, quer destravar: Fazer meu negócio crescer | 11% | 10,8% (96/893) | ficha (`alunos.csv`) q11 | OK |
| 01 §1.3 | Ficha, quer destravar: Ganhar R$ 10 mil por mês | 8% | 7,8% (70/893) | ficha (`alunos.csv`) q11 | OK |
| 01 §1.4 | Ficha, idade 45 a 54 | 37% | 37,0% (330/893) | ficha (`alunos.csv`) q6 | OK |
| 01 §1.4 | Ficha, idade 35 a 44 | 31% | 30,7% (274/893) | ficha (`alunos.csv`) q6 | OK |
| 01 §1.4 | Ficha, idade 55 a 64 | 17% | 17,0% (152/893) | ficha (`alunos.csv`) q6 | OK |
| 01 §1.4 | Ficha, idade 65+ | 6% | 6,3% (56/893) | ficha (`alunos.csv`) q6 | OK |
| 01 §1.4 | Ficha, situação amorosa: Casado(a) / união estável | 55% | 55,0% (491/893) | ficha (`alunos.csv`) q4 | OK |
| 01 §1.4 | Ficha, situação amorosa: Solteiro(a) | 18% | 17,9% (160/893) | ficha (`alunos.csv`) q4 | OK |
| 01 §1.4 | Ficha, situação amorosa: Separado(a) / divorciado(a) | 16% | 16,3% (146/893) | ficha (`alunos.csv`) q4 | OK |
| 01 §1.4 | Ficha, relacionamento: Tenho um bom relacionamento, mas sei que | 26% | 25,5% (228/893) | ficha (`alunos.csv`) q12 | OK |
| 01 §1.4 | Ficha, relacionamento: Estou sozinho(a) e não consigo encontrar | 20% | 20,2% (180/893) | ficha (`alunos.csv`) q12 | OK |
| 01 §1.4 | Ficha, relacionamento: Estou em um relacionamento estável, mas  | 15% | 15,3% (137/893) | ficha (`alunos.csv`) q12 | OK |
| 01 §1.4 | Ficha, relacionamento: Estou em um relacionamento, mas é desgas | 11% | 11,0% (98/893) | ficha (`alunos.csv`) q12 | OK |
| 01 §1.4 | Ficha, trabalho: CLT | 20% | 19,6% (175/893) | ficha (`alunos.csv`) q1 | OK |
| 01 §1.4 | Ficha, trabalho: Autônomo(a) | 18% | 18,5% (165/893) | ficha (`alunos.csv`) q1 | OK |
| 01 §1.4 | Ficha, trabalho: Empreendedor(a) | 13% | 13,0% (116/893) | ficha (`alunos.csv`) q1 | OK |
| 01 §1.4 | Ficha, trabalho: Funcionário(a) público(a) | 12% | 11,6% (104/893) | ficha (`alunos.csv`) q1 | OK |
| 01 §1.4 | Ficha, trabalho: Aposentado(a) | 8% | 8,1% (72/893) | ficha (`alunos.csv`) q1 | OK |
| 01 §1.4 | Ficha, renda De R$ 3.001 a R$ 5.000 | 23% | 23,2% (207/893) | ficha (`alunos.csv`) q2 | OK |
| 01 §1.4 | Ficha, renda De R$ 5.001 a R$ 10.000 | 23% | 23,0% (205/893) | ficha (`alunos.csv`) q2 | OK |
| 01 §1.4 | Ficha, renda De R$ 1.501 a R$ 3.000 | 18% | 18,5% (165/893) | ficha (`alunos.csv`) q2 | OK |
| 01 §1.4 | Ficha, renda De R$ 10.001 a R$ 20.000 | 15% | 15,3% (137/893) | ficha (`alunos.csv`) q2 | OK |
| 01 §1.4 | Aulão, renda Até R$ 1.500 | 34% | 33,6% (2459/7323) | Aulão (`aulao.csv`) P5 | OK |
| 01 §1.4 | Aulão, renda De R$ 1.501 a R$ 3.000 | 31% | 31,4% (2302/7323) | Aulão (`aulao.csv`) P5 | OK |
| 01 §1.4 | Aulão, renda De R$ 3.001 a R$ 5.000 | 20% | 19,9% (1454/7323) | Aulão (`aulao.csv`) P5 | OK |
| 01 §1.4 | Aulão, renda acima de R$ 5.000 | 15% | 15,1% (1108/7323) | Aulão (`aulao.csv`) P5 | OK |
| 01 §1.4 | Aulão, tempo que acompanha: Hoje foi a primeira vez que te vi | 25% | 24,9% (1827/7323) | Aulão (`aulao.csv`) P7 | OK |
| 01 §1.4 | Aulão, tempo que acompanha: Menos de 1 mês | 19% | 19,3% (1411/7323) | Aulão (`aulao.csv`) P7 | OK |
| 01 §1.4 | Aulão, tempo que acompanha: De 1 a 6 meses | 26% | 25,7% (1885/7323) | Aulão (`aulao.csv`) P7 | OK |
| 01 §1.4 | Aulão, tempo que acompanha: De 6 meses a 1 ano | 15% | 14,7% (1077/7323) | Aulão (`aulao.csv`) P7 | OK |
| 01 §1.4 | Aulão, tempo que acompanha: Mais de 1 ano | 15% | 15,3% (1123/7323) | Aulão (`aulao.csv`) P7 | OK |
| 01 §1.4 | Aulão, sem origem rastreada (utm_source vazio) | 30% | 30,3% (2217/7323) | Aulão (`aulao.csv`) utm_source | OK |
| 01 §1.5 | Ficha, objeção: Não tenho o dinheiro disponível agora | 30% | 29,6% (264/893) | ficha (`alunos.csv`) q25 | OK |
| 01 §1.5 | Ficha, objeção: Já comprei outros e não tive resultado | 14% | 14,4% (129/893) | ficha (`alunos.csv`) q25 | OK |
| 01 §1.5 | Ficha, objeção: Tenho medo de comprar e não colocar em prática | 12% | 11,8% (105/893) | ficha (`alunos.csv`) q25 | OK |
| 01 §1.5 | Ficha, objeção: Medo de não funcionar para mim | 7% | 7,4% (66/893) | ficha (`alunos.csv`) q25 | OK |
| 01 §1.5 | Ficha, objeção: Falta de tempo | 3% | 3,1% (28/893) | ficha (`alunos.csv`) q25 | OK |
| 01 §1.5 | Ficha, objeção: Não confio facilmente | 2% | 2,1% (19/893) | ficha (`alunos.csv`) q25 | OK |
| 01 §1.5 | Ficha, objeção: Acho o valor alto pelo que oferece | 2% | 2,1% (19/893) | ficha (`alunos.csv`) q25 | OK |
| 01 §1.5 | Aulão, objeção: Não tenho o dinheiro disponível agora | 68% | 67,6% (4953/7323) | Aulão (`aulao.csv`) P6 | OK |
| 01 §1.5 | Aulão, objeção: Já comprei outros e não tive resultado | 11% | 11,4% (837/7323) | Aulão (`aulao.csv`) P6 | OK |
| 01 §1.5 | Aulão, objeção: Tenho medo de comprar e não colocar em prática | 8% | 7,9% (579/7323) | Aulão (`aulao.csv`) P6 | OK |
| 01 §1.5 | Aulão, objeção: Medo de não funcionar para mim | 3% | 2,9% (215/7323) | Aulão (`aulao.csv`) P6 | OK |
| 01 §1.5 | Aulão, objeção: Falta de tempo | 2% | 2,0% (149/7323) | Aulão (`aulao.csv`) P6 | OK |
| 01 §1.5 | Aulão, objeção: Não confio facilmente | 2% | 2,2% (162/7323) | Aulão (`aulao.csv`) P6 | OK |
| 01 §1.5 | Aulão, objeção: Acho o valor alto pelo que oferece | 2% | 1,7% (126/7323) | Aulão (`aulao.csv`) P6 | OK |
| 01 §1.5 | Aulão, objeção: Preciso conversar com meu marido ou esposa | 1% | 0,9% (64/7323) | Aulão (`aulao.csv`) P6 | OK |
| 01 §1.6 | Ficha, conforto de investimento: Até R$ 97 | 27% | 27,1% (242/893) | ficha (`alunos.csv`) q26 | OK |
| 01 §1.6 | Ficha, conforto de investimento: De R$ 98 a R$ 297 | 26% | 26,0% (232/893) | ficha (`alunos.csv`) q26 | OK |
| 01 §1.6 | Ficha, conforto de investimento: De R$ 298 a R$ 500 | 10% | 10,3% (92/893) | ficha (`alunos.csv`) q26 | OK |
| 01 §1.6 | Ficha, conforto de investimento: De R$ 501 a R$ 1.000 | 13% | 12,8% (114/893) | ficha (`alunos.csv`) q26 | OK |
| 01 §1.6 | Ficha, conforto de investimento: De R$ 1.001 a R$ 3.000 | 7% | 6,9% (62/893) | ficha (`alunos.csv`) q26 | OK |
| 01 §1.6 | Ficha, conforto de investimento: Acima de R$ 3.000 | 3% | 2,9% (26/893) | ficha (`alunos.csv`) q26 | OK |
| 00 §1/§5 | Ficha, confortável com até R$ 297 (00 §2.4) | 53% | 53,1% (474/893) | ficha (`alunos.csv`) q26 | OK |
| 00 §2.4 | Ficha, confortável com mais de R$ 1.000 | 10% | 9,9% (88/893) | ficha (`alunos.csv`) q26 | OK |
| 00 §2.4 | Aulão, renda até R$ 3.000 | 65% | 65,0% (4761/7323) | Aulão (`aulao.csv`) P5 | OK |
| 00 §2.5 | Ficha, medo de não implementar | 12% | 11,8% (105/893) | ficha (`alunos.csv`) q25 | OK |
| 00 §2.5 | Aulão, medo de não implementar | 8% | 7,9% (579/7323) | Aulão (`aulao.csv`) P6 | OK |
| 00 §3.1 | Aulão, conhece a Dra. há menos de 1 mês (inclui primeira vez) | 43,8% | 44,2% (3238/7323) | Aulão (`aulao.csv`) P7 (1.827 + 1.411) | CORRIGIDO (ver 2.1) |
| 00 §3.3 | Ficha, 45 anos ou mais | 60% | 60,2% (538/893) | ficha (`alunos.csv`) q6 | OK |
| 00 §3.3 | Ficha, sozinha | 20% | 20,2% (180/893) | ficha (`alunos.csv`) q12 | OK |
| 00 §3.3 | Ficha, confortável querendo mais (confortável + ganho bem) | 18% | 17,9% (160/893) | ficha (`alunos.csv`) q8 | OK |
| 00 §6 | Ficha, cobrança excessiva (o que tira a paz) | 16% | 16,0% (143/893) | ficha (`alunos.csv`) q16 | OK |
| 00 §6 | Ficha, frase "funcional, mas exausta por dentro" | 16% (atribuído ao perfil Cobrança) | 22,5% (201/893) | ficha (`alunos.csv`) q15 | CORRIGIDO (ver 2.1) |
| 00 §6 | Ficha, autossabotagem (o que tira a paz) | 15% | 15,1% (135/893) | ficha (`alunos.csv`) q16 | OK |
| 00 §6 | Aulão, autossabotagem (o que tira a paz) | 15% | 15,4% (1127/7323) | Aulão (`aulao.csv`) P3 | OK |
| 00 §6 | Ficha, traumas (o que tira a paz) | 14% | 13,5% (121/893) | ficha (`alunos.csv`) q16 | OK |
| 00 §6 | Aulão, traumas (o que tira a paz) | 13% | 13,3% (975/7323) | Aulão (`aulao.csv`) P3 | OK |

### 2.4 Contagens do 01 (segmentos da ficha, tabela 1.5) e do 00 (§5)

| Número | Valor anterior | Valor recalculado | Fonte | Status |
|---|---|---|---|---|
| Quente, total | 151 | 151 | `alunos.csv` ou `aulao.csv` | OK |
| Morno, total | 394 | 394 | `alunos.csv` ou `aulao.csv` | OK |
| Frio, total | 348 | 348 | `alunos.csv` ou `aulao.csv` | OK |
| Quente, medo de não implementar | 27 | 27 | `alunos.csv` ou `aulao.csv` | OK |
| Quente, já comprei e não funcionou | 24 | 24 | `alunos.csv` ou `aulao.csv` | OK |
| Quente, medo de não funcionar | 20 | 20 | `alunos.csv` ou `aulao.csv` | OK |
| Morno, sem dinheiro agora | 72 | 72 | `alunos.csv` ou `aulao.csv` | OK |
| Morno, "outro" | 62 | 62 | `alunos.csv` ou `aulao.csv` | OK |
| Morno, já comprei sem resultado | 61 | 61 | `alunos.csv` ou `aulao.csv` | OK |
| Frio, sem dinheiro agora | 181 | 181 | `alunos.csv` ou `aulao.csv` | OK |
| Frio, já comprei | 44 | 44 | `alunos.csv` ou `aulao.csv` | OK |
| Frio, medo de não implementar | 23 | 23 | `alunos.csv` ou `aulao.csv` | OK |
| Quente, conforto R$ 501 a 1.000 | 61 | 61 | `alunos.csv` ou `aulao.csv` | OK |
| Quente, conforto R$ 1.001 a 3.000 | 57 | 57 | `alunos.csv` ou `aulao.csv` | OK |
| Quente, conforto acima de R$ 3.000 | 23 | 23 | `alunos.csv` ou `aulao.csv` | OK |
| Morno, conforto R$ 98 a 297 | 155 | 155 | `alunos.csv` ou `aulao.csv` | OK |
| Morno, conforto R$ 298 a 500 | 78 | 78 | `alunos.csv` ou `aulao.csv` | OK |
| Frio, conforto até R$ 97 | 184 | 184 | `alunos.csv` ou `aulao.csv` | OK |
| Frio, conforto R$ 98 a 297 | 76 | 76 | `alunos.csv` ou `aulao.csv` | OK |
| 00 §5: quente com mais de R$ 500 | 141 | 141 | `alunos.csv` ou `aulao.csv` | OK |
| 00 §5: quente com mais de R$ 1.000 | 80 | 80 | `alunos.csv` ou `aulao.csv` | OK |
| 00 §5: Aulão com renda acima de R$ 5.000 | 1.108 | 1108 | `alunos.csv` ou `aulao.csv` | OK |
| 00 §5: Aulão com renda até R$ 3.000 | 4.761 | 4761 | `alunos.csv` ou `aulao.csv` | OK |
| 00 §5: dos 1.108, "sem dinheiro agora" | 44% | 490 de 1108 = 44,2% | `alunos.csv` ou `aulao.csv` | OK |

## 3. Defeitos por gravidade

**Bloqueante (0 nos números; 1 fora da minha área, registrado):** nenhum percentual dos arquivos 00 e 01 estava errado em mais de 1 ponto, e todos os 100 valores inteiros conferidos arredondam para o recalculado. Fora da área: o cronograma e os lembretes de grupo ainda agendam o slot das 16h30 e os lembretes de e-mail ficam às 12h, contra a cadência canônica (item 53 de `12_decisoes_e_pendencias.md`). Não editei esses arquivos.

**Alto (corrigidos):**

- 00 §6: o perfil Cobrança misturava duas perguntas (frase "funcional, mas exausta por dentro" = 22,5%; cobrança excessiva = 16,0%). Passou a citar as duas com a origem.
- 01 cabeçalho: período do Aulão dizia 14/09 a 24/09; os dados vão até 05/10 (último registro 05/10/2026 19h30).
- 00 §1: captação 13/10 a 03/11 contradizia o canônico (terça 13/10 a segunda 02/11, 21 dias).
- 00 §1 e 12: a lista de "oito pendências" de 00 não era a mesma de 12 (00 tinha foto e meta; 12 tinha parcelamento e preço travado no Pix e boleto). Unificadas em 10 itens, com a meta de faturamento e de leads acrescentada a 12.
- 01 §1.3 e 00 §6: 51,9% atribuído a "dossiê" e "enquete"; agora "51,9% das pessoas que responderam à pesquisa de presença" (dossiê, base 5.486), e registrado que a pergunta não está no CSV do Aulão.
- 00 §3.3: homens "~21% do Aulão"; o CSV do Aulão não tem gênero. Agora 20,8% (dossiê).
- 01 §1.6: "menor faixa da Vitalícia na zona de 10%" misturava faixas; reescrito com 6,9% e 2,9% (juntas 9,85%).
- 12 tinha 40 itens e não cobria pendências reais que aparecem em placeholders das peças (ver seção 4). Acrescentados 18 itens: 10 de pendências das peças (9, 16, 17, 18, 39 a 44) e 8 de dados que não bateram (49 a 56).
- 11 não citava 11 arquivos que existem (obrigado_e_pesquisa, 05_whatsapp_api/api_onboarding e 9 arquivos de 13_modelo_dr_joao). Acrescentados; a matriz hoje cobre todos os arquivos do repositório.

**Médio (corrigidos):**

- 00 §3.1: 43,8% (base 5.486 do dossiê) onde o texto fala do Aulão; o CSV dá 44,2% (3.238/7.323).
- 00 §5: "2.220 pagantes"; o dossiê diz 2.220 unidades vendidas.
- 00 §4: "12 ciclos por ano"; o briefing diz "12 ciclos" mês a mês.
- 00 §4: cadência atribuída a um nome próprio do modelo e sem a API das 09h nem a regra do slot de 16h30; reescrita conforme a rubrica.
- 01 §4: UTMs atribuídas à "BFV/26"; a fonte é a planilha "UTMs Black Friday" copiada de lançamentos anteriores.
- 01 §1.6: forma de pagamento (cartão parcelado) atribuída à ficha; vem do briefing e não existe no CSV.
- 02 §2: o conjunto de placeholders do guia tinha 6 PENDENTE, mas as peças usam 5 temas a mais (parcelamento, ordem de entrada, regra de migração, contagem de alunas, degrau de entrada), os placeholders de preço e a regra do Lote Especial só ao vivo. Acrescentados à tabela, com a regra de que o texto depois dos dois pontos pode detalhar o tema.
- 02 §1.3 e §3: faltavam "até 12 linhas, termina em pergunta, reação ou CTA", "a porta fecha", "garantido que a autossabotagem acaba", "últimas vagas", "cupons limitados" e superlativos.
- 12 G.1 e G.3 documentavam como decisão o que a cadência canônica proíbe (e-mail de lembrete às 12h; terceiro slot de grupo às 16h30). Reescritos e levados a E (item 53).
- 12 G.8 citava a palavra proibida da ferramenta de reunião; reescrito. O arquivo `03_paginas/tela_countdown_live.md` tem esse nome no próprio caminho (item 54 de 12; matriz 11 o cita).
- 00 §7 citava `09_comercial` (não existe). Corrigido.
- 11: contagens de escassez (24 para 26), vendas (24 + 12 para 24 + 12 + 9) e caminhos abreviados (`captura_A` a `captura_D`, `legendas_captacao.md`, `quebra_de_objecoes.md` e outros sem pasta) completados com o caminho inteiro.

**Baixo (corrigidos):** rótulos de base (dossiê x CSV) em 01; "enquete" para "pesquisa" em 12; feriado de 12/10 em 12; "sem limite de vagas na captação" para "na live" em 11; nome próprio de pasta modelo em 11; linha de 00 §7 para `13_modelo_dr_joao` e `14_revisao`; valor de 20,8% em 12.

**Não alterado, registrado:** "Workshop Terapeuta de Elite" (1 ocorrência em 00, na tabela dos 11 produtos) é produto da Dra. segundo o briefing; a palavra "Elite" da checagem dura 2 fala de termos do Dr. João. Mantido. A âncora "mentoria individual de R$ 120 mil" mantém o `[[CONFIRMAR: ainda vale]]` já colocado no guia §8.

## 4. Pendências: tabela 12 contra as pendências reais das peças

Método: extraí todos os placeholders `[[PENDENTE...]]` de todas as pastas (exceto `14_revisao`) e os agrupei pelo tema do texto. A tabela mostra, por item de `12_decisoes_e_pendencias.md`, quantas ocorrências e em quantos arquivos o tema aparece. Itens de 12 sem ocorrência em peça são decisões de negócio ou de segurança.

| Item de 12 | Ocorrências de placeholder PENDENTE | Arquivos | Já estava em 12? |
|---|---|---|---|
| 1 | 70 | 13 | sim |
| 2 | 156 | 27 | sim |
| 3 | 80 | 29 | sim |
| 4 | 31 | 9 | sim |
| 5 | 58 | 23 | sim |
| 6 | 78 | 26 | sim |
| 7 | 57 | 28 | sim |
| 8 | 1 | 1 | sim |
| 9 | 3 | 1 | não, acrescentado nesta revisão |
| 12 | 14 | 4 | sim |
| 16 | 7 | 1 | não, acrescentado nesta revisão |
| 17 | 9 | 1 | não, acrescentado nesta revisão |
| 18 | 6 | 1 | não, acrescentado nesta revisão |
| 28 | 2 | 2 | sim |
| 33 e 34 | 30 | 8 | sim |
| 35 | 38 | 12 | sim |
| 40 | 1 | 1 | não, acrescentado nesta revisão |
| 41 | 4 | 1 | não, acrescentado nesta revisão |
| 42 | 2 | 1 | não, acrescentado nesta revisão |
| 43 | 1 | 1 | não, acrescentado nesta revisão |
| 48 | 8 | 6 | sim |

Itens de 12 acrescentados por não existirem antes: 9 (Golden Ticket, tickets, condição do diagnóstico), 16 (meta e contagem de contatos), 17 (vídeos da Dra., minutagem), 18 (verificação de números), 39 a 44 (live fechada para alunas, indicação, onboarding, certificado, resumo em vídeo, manual da live), 49 a 56 (dados que não bateram). Itens 1, 5, 6, 8, 12 e 14 foram ampliados.

Placeholders PENDENTE sem tema reconhecível (não mapeados a um item de 12; precisam de um tema do guia):

| Placeholder | Arquivo | Ocorrências |
|---|---|---|
| `[[PENDENTE: ...]]` | `00_ESTRATEGIA_COPY_SENIOR.md` | 1 |
| `[[PENDENTE: ...]]` | `03_paginas/captura_A_diagnostico_primeiro.md` | 1 |
| `[[PENDENTE]]` | `05_whatsapp_api/cronograma_de_disparos.md` | 1 |
| `[[PENDENTE]]` | `05_whatsapp_api/dia_da_live_03_11.md` | 1 |
| `[[PENDENTE]]` | `05_whatsapp_api/fluxo_manychat.md` | 1 |
| `[[PENDENTE]]` | `09_comercial_datacrazy/lista_de_ataque_templates.md` | 1 |
| `[[PENDENTE]]` | `09_comercial_datacrazy/playbook_do_dia_da_live.md` | 1 |
| `[[PENDENTE]]` | `10_pos_compra/certificado_manual_nps.md` | 13 |

`[[PENDENTE: ...]]` em `00` e `captura_A` são descrições do formato (não são pendências). `[[PENDENTE: prazo]]` (prazo do Pix) pertence ao item 8; `[[PENDENTE: regra]]` (boleto) também. Os 18 `[[PENDENTE]]` sem tema (13 em `10_pos_compra/certificado_manual_nps.md`) precisam ganhar tema pelos donos dos arquivos.

## 5. Inventário completo de placeholders

Contagem por varredura de `[[...]]` em todos os `.md` do repositório, exceto `14_revisao`.

Total: **2341** placeholders em **67** arquivos.

### 5.1 Por tipo

| Tipo | Ocorrências | Arquivos | Formas distintas |
|---|---|---|---|
| PENDENTE (conjunto do guia) | 474 | 56 | 6 |
| PENDENTE (subetiqueta fora do conjunto do guia) | 224 | 33 | 67 |
| CONFIRMAR | 549 | 63 | 287 |
| LINK | 586 | 53 | 99 |
| PREÇO e PARCELA (pós-live) | 240 | 26 | 21 |
| FOTO DRA | 83 | 21 | 1 |
| DEPOIMENTO REAL | 62 | 20 | 13 |
| Marcação de operação ou fora do conjunto | 123 | 21 | 34 |

Subtipos do conjunto do guia (PENDENTE):

| Placeholder | Ocorrências |
|---|---|
| `[[PENDENTE: data do lote]]` | 155 |
| `[[PENDENTE: garantia]]` | 75 |
| `[[PENDENTE: fechamento]]` | 75 |
| `[[PENDENTE: bônus]]` | 57 |
| `[[PENDENTE: replay]]` | 57 |
| `[[PENDENTE: preço avulso]]` | 55 |

Subtipos de preço e parcela:

| Placeholder | Ocorrências |
|---|---|
| `[[PREÇO LOTE ALUNAS]]` | 92 |
| `[[PREÇO LOTE NÃO-ALUNAS]]` | 88 |
| `[[PREÇO PRÓXIMO LOTE ALUNAS]]` | 8 |
| `[[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]]` | 8 |
| `[[PARCELA ALUNAS]]` | 6 |
| `[[PARCELA NÃO-ALUNAS]]` | 5 |
| `[[PREÇO LOTE ...]]` | 4 |
| `[[R$ DIFERENÇA ENTRE LOTES]]` | 3 |
| `[[PREÇO LOTE ALUNAS: lote atual]]` | 3 |
| `[[PREÇO LOTE ALUNAS: Especial]]` | 3 |
| `[[PREÇO LOTE ALUNAS: Primeiro Lote]]` | 3 |
| `[[PREÇO LOTE ALUNAS: Último Lote]]` | 3 |
| `[[PREÇO LOTE NÃO-ALUNAS: lote atual]]` | 2 |
| `[[PREÇO LOTE NÃO-ALUNAS: Especial]]` | 2 |
| `[[PREÇO LOTE NÃO-ALUNAS: Primeiro Lote]]` | 2 |
| `[[PREÇO LOTE NÃO-ALUNAS: Último Lote]]` | 2 |
| `[[PREÇO DO SEGMENTO]]` | 2 |
| `[[PREÇO LOTE ALUNAS ou NÃO-ALUNAS: Especial]]` | 1 |
| `[[PREÇO LOTE ALUNAS ou NÃO-ALUNAS: Primeiro Lote]]` | 1 |
| `[[PREÇO LOTE ALUNAS ou NÃO-ALUNAS: Último Lote]]` | 1 |
| `[[PREÇO]]` | 1 |

Marcações de operação ou fora do conjunto do guia (cada uma deve ser conferida pelo dono do arquivo):

| Placeholder | Ocorrências |
|---|---|
| `[[FIM SE]]` | 34 |
| `[[SE: ALUNA]]` | 12 |
| `[[00:00]]` | 10 |
| `[[SE: NÃO-ALUNA]]` | 7 |
| `[[SE: existe preço avulso real]]` | 6 |
| `[[CÁLCULO: soma menos preço do lote]]` | 5 |
| `[[LOTE ATUAL]]` | 4 |
| `[[SE: DESAFIO]]` | 4 |
| `[[AUTORIZAR]]` | 4 |
| `[[SE: GERAL]]` | 3 |
| `[[SE: COM DEGRAU]]` | 3 |
| `[[VÍDEO: ...]]` | 2 |
| `[[FOTO DA PESSOA]]` | 2 |
| `[[NOME DA PESSOA]]` | 2 |
| `[[...]]` | 2 |
| `[[BOTÃO: FAZER MEU DIAGNÓSTICO]]` | 2 |
| `[[SE: SEM DEGRAU]]` | 2 |
| `[[SE: IMERSAO]]` | 2 |
| `[[SE: AULAO]]` | 2 |
| `[[SE ...]]` | 1 |
| `[[BOTÃO: ...]]` | 1 |
| `[[IMAGEM: ...]]` | 1 |
| `[[IMAGEM: arte de grupo, alunas do Clube Secreto, 01 - Black Próton Vitalícia (feed)]]` | 1 |
| `[[IMAGEM: arte de grupo, alunas do Clube Secreto, 01]]` | 1 |
| `[[VÍDEO: abertura da captação. A Dra. Próton abre o grupo, pergunta "Quantas vezes você já recomeçou?" e convida para a live de 03/11]]` | 1 |
| `[[BOTÃO: FALAR COM O SUPORTE OFICIAL]]` | 1 |
| `[[BOTÃO: REFAZER]]` | 1 |
| `[[BOTÃO: PEDIR REEMBOLSO]]` | 1 |
| `[[SE: tem diagnóstico]]` | 1 |
| `[[SE: CARRINHO ABERTO]]` | 1 |
| `[[SE: CARRINHO FECHADO]]` | 1 |
| `[[SE: IMERSAO / AULAO / GERAL]]` | 1 |
| `[[BOTÃO: CONFIRMAR MINHA PRESENÇA]]` | 1 |
| `[[data]]` | 1 |

### 5.2 Por arquivo

| Arquivo | PENDENTE guia | PENDENTE outro | CONFIRMAR | LINK | PREÇO e PARCELA | FOTO DRA | DEPOIMENTO | Operação/outros | Total |
|---|---|---|---|---|---|---|---|---|---|
| `00_ESTRATEGIA_COPY_SENIOR.md` | 1 | 3 | 1 | 0 | 0 | 0 | 0 | 0 | 5 |
| `02_GUIA_DE_COPY.md` | 7 | 5 | 6 | 1 | 4 | 1 | 2 | 3 | 29 |
| `03_paginas/banner_checkout.md` | 14 | 15 | 6 | 2 | 13 | 2 | 0 | 12 | 64 |
| `03_paginas/captura_A_diagnostico_primeiro.md` | 6 | 1 | 12 | 8 | 0 | 3 | 5 | 0 | 35 |
| `03_paginas/captura_B_oferta_primeiro.md` | 11 | 0 | 10 | 6 | 0 | 2 | 2 | 0 | 31 |
| `03_paginas/captura_C_alunas_do_clube.md` | 3 | 10 | 6 | 4 | 1 | 0 | 3 | 4 | 31 |
| `03_paginas/captura_D_quem_ja_viveu_o_desafio.md` | 7 | 3 | 1 | 3 | 0 | 2 | 4 | 12 | 32 |
| `03_paginas/diagnostico_5_perfis.md` | 0 | 0 | 8 | 5 | 0 | 0 | 0 | 0 | 13 |
| `03_paginas/lista_de_espera.md` | 4 | 11 | 2 | 9 | 1 | 0 | 0 | 12 | 39 |
| `03_paginas/obrigado_e_pesquisa.md` | 5 | 0 | 6 | 15 | 0 | 0 | 0 | 3 | 29 |
| `03_paginas/onboarding_vitalicia.md` | 2 | 7 | 9 | 12 | 0 | 0 | 0 | 5 | 35 |
| `03_paginas/pagina_cupom_alunas.md` | 12 | 8 | 6 | 13 | 7 | 0 | 0 | 2 | 48 |
| `03_paginas/pagina_de_vendas_vitalicia.md` | 37 | 15 | 25 | 9 | 25 | 2 | 2 | 33 | 148 |
| `03_paginas/tela_countdown_live.md` | 6 | 3 | 8 | 22 | 0 | 0 | 0 | 5 | 44 |
| `03_paginas/verificacao_de_numeros.md` | 0 | 0 | 5 | 7 | 0 | 0 | 0 | 1 | 13 |
| `03_paginas/vsl_headlines_e_paginas.md` | 0 | 9 | 3 | 0 | 0 | 0 | 0 | 0 | 12 |
| `04_criativos/antecipacao_e_aquecimento.md` | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 3 |
| `04_criativos/artes_de_api_ingresso_capas.md` | 12 | 3 | 7 | 2 | 2 | 20 | 0 | 4 | 50 |
| `04_criativos/captacao_estaticos.md` | 1 | 0 | 1 | 1 | 0 | 8 | 0 | 0 | 11 |
| `04_criativos/carrossel_instagram.md` | 4 | 2 | 4 | 0 | 2 | 2 | 2 | 1 | 17 |
| `04_criativos/escassez_e_virada_de_lote.md` | 42 | 4 | 14 | 1 | 45 | 4 | 0 | 0 | 110 |
| `04_criativos/legendas_captacao.md` | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| `04_criativos/lembretes_da_live_por_dia.md` | 4 | 3 | 5 | 2 | 0 | 6 | 0 | 0 | 20 |
| `04_criativos/remarketing_captacao.md` | 2 | 0 | 6 | 0 | 0 | 4 | 0 | 0 | 12 |
| `04_criativos/roteiros_video_curto.md` | 9 | 13 | 5 | 3 | 6 | 5 | 0 | 0 | 41 |
| `04_criativos/vendas_vitalicia.md` | 34 | 11 | 18 | 0 | 30 | 6 | 3 | 4 | 106 |
| `05_whatsapp_api/api_convite_indireto_e_aquecimento.md` | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 5 |
| `05_whatsapp_api/api_onboarding.md` | 0 | 0 | 4 | 5 | 0 | 0 | 0 | 0 | 9 |
| `05_whatsapp_api/convite_vip_alunas_e_quiz.md` | 3 | 0 | 10 | 13 | 1 | 0 | 0 | 0 | 27 |
| `05_whatsapp_api/cronograma_de_disparos.md` | 4 | 1 | 1 | 0 | 1 | 0 | 2 | 0 | 9 |
| `05_whatsapp_api/dia_da_live_03_11.md` | 7 | 2 | 15 | 32 | 6 | 0 | 0 | 0 | 62 |
| `05_whatsapp_api/fluxo_manychat.md` | 0 | 1 | 10 | 11 | 2 | 0 | 0 | 0 | 24 |
| `05_whatsapp_api/grupos_descricao_e_grupo_cheio.md` | 3 | 1 | 11 | 18 | 0 | 3 | 0 | 0 | 36 |
| `05_whatsapp_api/lembretes_de_grupo_captacao.md` | 2 | 0 | 12 | 80 | 0 | 0 | 6 | 0 | 100 |
| `05_whatsapp_api/recuperacao_e_carrinho.md` | 6 | 0 | 14 | 9 | 4 | 0 | 0 | 0 | 33 |
| `05_whatsapp_api/vagas_abertas_e_virada_de_lote.md` | 47 | 0 | 16 | 47 | 42 | 0 | 1 | 0 | 153 |
| `06_emails/captacao_serie.md` | 2 | 0 | 8 | 3 | 0 | 1 | 2 | 0 | 16 |
| `06_emails/carrinho_e_lotes.md` | 18 | 0 | 21 | 25 | 20 | 0 | 0 | 0 | 84 |
| `06_emails/eventos_de_pagamento.md` | 10 | 0 | 13 | 0 | 0 | 0 | 0 | 0 | 23 |
| `06_emails/lembretes_da_live.md` | 4 | 0 | 6 | 5 | 2 | 0 | 0 | 0 | 17 |
| `06_emails/onboarding.md` | 1 | 0 | 2 | 10 | 0 | 0 | 0 | 0 | 13 |
| `06_emails/pos_compra_e_trilha.md` | 0 | 9 | 1 | 0 | 0 | 0 | 0 | 0 | 10 |
| `06_emails/segmentados_09h.md` | 0 | 0 | 10 | 2 | 0 | 0 | 1 | 0 | 13 |
| `07_listboss_ura_sms/listboss_api_e_email.md` | 10 | 0 | 4 | 18 | 3 | 0 | 0 | 0 | 35 |
| `07_listboss_ura_sms/ura_e_sms.md` | 2 | 7 | 4 | 1 | 0 | 0 | 0 | 0 | 14 |
| `08_live_e_pitch/bonus_15_minutos_e_escassez.md` | 16 | 0 | 8 | 4 | 0 | 0 | 0 | 0 | 28 |
| `08_live_e_pitch/pitch_e_ancoragem.md` | 20 | 0 | 23 | 0 | 6 | 0 | 0 | 1 | 50 |
| `08_live_e_pitch/roteiro_live_de_revelacao.md` | 14 | 5 | 29 | 3 | 6 | 2 | 1 | 0 | 60 |
| `08_live_e_pitch/slides_da_live.md` | 10 | 0 | 20 | 2 | 6 | 2 | 0 | 1 | 41 |
| `09_comercial_datacrazy/aberturas_por_segmento.md` | 3 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 9 |
| `09_comercial_datacrazy/copies_por_evento_pipeline.md` | 5 | 9 | 16 | 13 | 0 | 0 | 0 | 0 | 43 |
| `09_comercial_datacrazy/lista_de_ataque_templates.md` | 3 | 5 | 6 | 0 | 0 | 0 | 0 | 0 | 14 |
| `09_comercial_datacrazy/narrativa_da_dra_na_black.md` | 3 | 5 | 9 | 1 | 2 | 0 | 1 | 0 | 21 |
| `09_comercial_datacrazy/playbook_do_dia_da_live.md` | 5 | 10 | 7 | 1 | 0 | 0 | 1 | 1 | 25 |
| `09_comercial_datacrazy/quebra_de_objecoes.md` | 13 | 10 | 10 | 2 | 1 | 0 | 1 | 0 | 37 |
| `09_comercial_datacrazy/regua_do_silencio_black.md` | 7 | 0 | 5 | 1 | 0 | 0 | 4 | 4 | 21 |
| `10_pos_compra/certificado_manual_nps.md` | 3 | 30 | 8 | 4 | 0 | 1 | 0 | 0 | 46 |
| `10_pos_compra/descricao_youtube_e_capas.md` | 6 | 1 | 0 | 13 | 2 | 4 | 0 | 10 | 36 |
| `13_modelo_dr_joao/api_alunas_captacao.md` | 3 | 0 | 12 | 9 | 0 | 0 | 0 | 0 | 24 |
| `13_modelo_dr_joao/api_demais_alunos_captacao.md` | 0 | 0 | 8 | 9 | 0 | 0 | 0 | 0 | 17 |
| `13_modelo_dr_joao/api_onboarding.md` | 4 | 0 | 2 | 17 | 0 | 0 | 0 | 0 | 23 |
| `13_modelo_dr_joao/email_alunas_captacao.md` | 0 | 0 | 6 | 10 | 0 | 0 | 0 | 0 | 16 |
| `13_modelo_dr_joao/email_onboarding.md` | 3 | 0 | 4 | 16 | 0 | 0 | 0 | 0 | 23 |
| `13_modelo_dr_joao/wpp_captacao.md` | 4 | 2 | 5 | 47 | 0 | 0 | 14 | 3 | 75 |
| `13_modelo_dr_joao/wpp_descricao_do_grupo.md` | 3 | 0 | 5 | 11 | 0 | 0 | 0 | 0 | 19 |
| `13_modelo_dr_joao/wpp_grupo_alunas_captacao.md` | 3 | 0 | 18 | 10 | 0 | 0 | 0 | 2 | 33 |
| `13_modelo_dr_joao/wpp_grupo_cheio.md` | 3 | 0 | 6 | 9 | 0 | 0 | 0 | 0 | 18 |

Arquivos sem nenhum placeholder: `01_PESQUISAS_INSIGHTS.md`, `11_matriz_desafio_para_black.md`, `12_decisoes_e_pendencias.md`.

Seções "Notas ao implementador" encontradas: 56 arquivos (as pendências citadas nelas aparecem nos placeholders contados acima e foram incluídas na tabela da seção 4).

### 5.3 Placeholders fora do conjunto do guia (02 §2)

Depois da ampliação do guia, o conjunto aceito é: PENDENTE (preço avulso, data do lote, garantia, bônus, fechamento, replay, parcelamento, ordem de entrada, regra de migração, contagem de alunas, degrau de entrada, com detalhe depois dos dois pontos), CONFIRMAR, LINK, DEPOIMENTO REAL, FOTO DRA, PREÇO LOTE ALUNAS, PREÇO LOTE NÃO-ALUNAS. Tudo o mais é variável de operação (`[[SE ...]]`, `[[BOTÃO: ...]]`, `[[IMAGEM: ...]]`, `[[VÍDEO: ...]]`, `[[ARTE: ...]]`) ou está fora do conjunto, e fica com os donos dos arquivos. PENDENTE com temas fora da lista ampliada (por exemplo "nome do degrau", "horário do suporte", "vídeo da Dra.") continuam válidos quando a pendência correspondente existe em 12 (coluna de itens na seção 4).

## 6. Matriz (11) contra o repositório

- Caminhos citados na matriz: 71; inexistentes: 0.
- Arquivos no repositório (com `14_revisao`): 74; fora da matriz: 0.

- Observação: logs novos em `14_revisao/` são cobertos pela linha "14_revisao/" da matriz (diretório). Os arquivos `00`, `01`, `02`, `11` e `12` estão na seção "Documentos-base e revisão".

## 7. Checagens duras (rodadas ao final)

Resultado nos cinco arquivos desta área (ocorrências por arquivo, na ordem 00, 01, 02, 11, 12):

| Checagem | 00 | 01 | 02 | 11 | 12 | Observação |
|---|---|---|---|---|---|---|
| Travessão ou meia-risca | 0 | 0 | 0 | 0 | 0 | 0 em uso |
| Nome da gestora do projeto | 0 | 0 | 0 | 0 | 0 | 0 em uso |
| harmonização, injetáveis, FEP, congresso | 0 | 0 | 0 | 0 | 0 | 0 em uso |
| Zoom (palavra) | 0 | 0 | 0 | 0 | 0 | 0 como palavra; o nome do arquivo `tela_countdown_live.md` contém "zoom" e é citado em 11 e 12 (caminho, sem texto de peça) |
| Elite | 1 | 0 | 0 | 0 | 0 | "Workshop Terapeuta de Elite", produto da Dra. no briefing |
| TODO, lorem, XXX | 0 | 0 | 0 | 0 | 0 | 0 em uso |
| Frases proibidas | 1 | 0 | 9 | 0 | 1 | são citações das frases proibidas (00 §2, 02 §3 e item 21 de 12), não uso |
| E-mail, telefone ou link de pessoa | 0 | 0 | 0 | 0 | 0 | 0 em uso |

Caminhos de arquivo citados em backticks nos cinco arquivos: todos existem (varredura automática; um `09_comercial` e três nomes sem pasta em 12 foram corrigidos).

Valores em R$: aparecem em 00, 01, 02 e 12 apenas como planejamento interno (preços de lote, faixas de renda e de conforto, tráfego, âncora); 00 ganhou a nota de documento interno no topo. Nenhum é texto público.

Verificação informativa no restante do repositório (fora desta área; cada dono corrige o seu): 

| Checagem | Ocorrências | Arquivos | Maiores |
|---|---|---|---|
| Travessão ou meia-risca | 0 | 0 | nenhum |
| Nome da gestora do projeto | 0 | 0 | nenhum |
| harmonização, injetáveis, FEP, congresso | 2 | 1 | `07_listboss_ura_sms/listboss_api_e_email.md` (2) |
| Zoom (palavra) | 6 | 1 | `03_paginas/tela_countdown_live.md` (6) |
| Elite | 24 | 16 | `03_paginas/pagina_de_vendas_vitalicia.md` (3), `13_modelo_dr_joao/wpp_captacao.md` (3), `03_paginas/onboarding_vitalicia.md` (2), `04_criativos/vendas_vitalicia.md` (2) |
| TODO, lorem, XXX | 0 | 0 | nenhum |

## 8. Dependem de decisão (já registrado em 12)

- Preço avulso dos 11 produtos, datas de virada, garantia, parcelamento, bônus, abertura e fechamento do carrinho, replay, preço travado no Pix e no boleto (itens 1 a 8).
- Convite VIP das alunas e número de tickets: se for limite real, entra em conflito com a regra de que não há limite de vagas na live (itens 9 e 56).
- Meta de faturamento e de leads (item 16) e foto da Dra. (item 10).
- Se a ficha de 893 linhas é de interesse ou de alunas, e a diferença para as 877 do Comercial (item 45); se o 51,9% pode ser público (item 23).
- Cadência de disparo: 16h30 e 12h nas peças existentes contra a cadência canônica (item 53); o nome do arquivo da tela de countdown (item 54).
- Afirmação "só 8 dos 11 produtos têm descrição nas fontes" (item 55): sem fonte para conferir.

## 9. Contagens finais

- Números recalculados: 102 percentuais de pesquisa e 24 contagens de segmento e de renda; 21 conferências de texto contra briefing, dossiê e aulas; 35 correções ou acréscimos registrados na seção 2.1; 0 percentuais com diferença de mais de 1 ponto.
- Itens de pendência em 12: 58 (eram 40); seções: A 9, B 9, C 13, D 13, E 12, F 2; mais 10 decisões em G.
- Arquivos editados: 00, 01, 02, 11, 12. Nenhum outro arquivo foi tocado.
- Placeholders no repositório: 2341 em 67 arquivos (seção 5).
- Logs de outras áreas em `14_revisao/` no momento do fechamento: `criativos_1_log.md`, `modelo_joao_wpp_log.md`.

## 10. Conferência com os logs das outras áreas

Logs encontrados em `14_revisao/` na última varredura: `criativos_1_log.md`, `modelo_joao_wpp_log.md`.

`criativos_1_log.md`, seção "O que ainda depende de decisão": 8 pendências. Situação em `12_decisoes_e_pendencias.md`:

| Pendência do log de criativos | Item de 12 |
|---|---|
| Foto da Dra. e link da captura com diagnóstico | 10 e 13 |
| Nome do instrumento nos anúncios (Meta pode ler "diagnóstico" como saúde) | 11 (acrescentado agora) |
| Trilha de entrada e parcelamento anunciados na live | 35 e 4 |
| Replay: nenhuma peça afirma nem nega; `obrigado_e_pesquisa.md` afirma que a live só acontece uma vez | 7 (ampliado agora) |
| Autorização de imagem da foto de infância (RMK-DUV-03) | 26 (ampliado agora) |
| Natureza da ficha de 893 respostas | 45 |
| "Eu vou te pedir" depende de a live pedir o número | sem item próprio: decisão do roteiro da live (`08_live_e_pitch/roteiro_live_de_revelacao.md`) |

`modelo_joao_wpp_log.md`, seção "O que depende da equipe": 8 pendências. Situação em `12_decisoes_e_pendencias.md`:

| Pendência do log do modelo (WhatsApp) | Item de 12 |
|---|---|
| 00-A e 00-B em 12/10 (feriado) ou só em 13/10 | 37 (ampliado agora) |
| Lote Especial só para quem está ao vivo | 20 |
| Live fechada para alunas | 39 |
| Há limite de reservas? | 56 (ampliado agora) |
| O diagnóstico é obrigatório para assistir à live? | 11 (acrescentado agora) |
| Bônus de check-in, ordem de entrada, replay | 5, 35 e 7 |
| Prazo atual do acesso ao Clube; aula do Clube em 03/11 | 33 e 37 |
| Superlativo; roteiro da live | 27 (superlativo) e 08_live_e_pitch/roteiro_live_de_revelacao.md |
| Depoimentos autorizados, vídeo 00-A, arte de grupo, links, história da Dra., limite do campo de descrição | 28, 17, 13, 26 |


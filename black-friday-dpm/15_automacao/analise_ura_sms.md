# Análise: URA + SMS da Black Próton Vitalícia

Documento interno de planejamento. Serve de base para `doc_ura_sms_black.md` (o doc final, no padrão do doc do Desafio). Os valores em R$ são custo de disparo, não preço da oferta, e não vão para nenhuma peça.

**Fontes lidas por inteiro:** `desafio_ura_sms.md`, a aba "Disparos URASMS" da planilha de disparos, `planilha_disparos__Setembro26.md`, `planilha_disparos__Outubro26.md`, `modelo_disparos.txt`, o template em branco `desafio/contexto/31_blackfriday_ura_sms_template.md`, `07_listboss_ura_sms/ura_e_sms.md`, `05_whatsapp_api/cronograma_de_disparos.md` e `dia_da_live_03_11.md`, `06_emails/lembretes_da_live.md`, `08_live_e_pitch/roteiro_live_de_revelacao.md`, `00_ESTRATEGIA_COPY_SENIOR.md`, `02_GUIA_DE_COPY.md`, `14_revisao/RUBRICA.md`, `12_decisoes_e_pendencias.md` e `03_paginas/verificacao_de_numeros.md`. Onde há afirmação de regra externa (Anatel, operadoras, LGPD), ela vem de conhecimento geral de mercado, **não das fontes do projeto**, e está marcada para confirmação com o jurídico e o fornecedor.

---

## 1. O que o doc do Desafio entrega

O doc "URA + SMS" do Desafio (28/09 a 02/10, 5 noites) é uma lista de agendamentos, não um plano. Ele traz:

| Item | O que há no doc |
|---|---|
| Pedido de SMS teste | "Enviar um SMS teste antes do disparo", mas a lista de números ficou em branco |
| Estrutura | Um bloco por dia (DATA), com linhas "Formato, Hora, Texto ou Áudio" |
| URA | 7 áudios `.ogg` (nomes como "1 dia Dra Desafio é hoje.ogg", "4 dia Desafio estou ao vivo.ogg"), todos só no Drive, **sem transcrição** |
| SMS | 5 textos, todos "SMS Convencional", todos no padrão "Dra Proton: FALTA 1 HORA!" ou "ESTOU AO VIVO!", com "Link no grupo de alunos!" |
| Horários | URA 17h na véspera, SMS 19h, URA 20h nos cinco dias; um dia com URA às 9h e SMS às 20h |
| Contatos, custo, verba, link, opt-out, relatório | **Nada.** Não há contagem de contatos, valor, link, UTM, instrução de saída, regra de exclusão, nem medição |

**Leitura.** O Desafio rodou 12 disparos em 5 dias (7 URA e 5 SMS) com texto padronizado e sem rastreio. O padrão de copy é útil (urgência pelo horário, remetente "Dra Proton:" no início, caixa alta no gatilho), mas o doc não explica quanto custou, quem recebeu nem o que voltou.

O template em branco do Black Friday (`31_blackfriday_ura_sms_template.md`) mostra a mesma estrutura com um campo a mais: **SMS Flash**. Ele está vazio, então não traz nenhuma regra sobre o flash.

---

## 2. O padrão do modelo (Dr. João) e o que o histórico revela

### 2.1 Onde URA e SMS aparecem nas fontes

| Arquivo | Tem URA e SMS? |
|---|---|
| `planilha_disparos__Disparos_URASMS.md` | **Sim, é a única fonte de custo.** Abril de 2024, contatos, valor unitário, verba e total |
| `modelo_disparos.txt` (começa em "Outubro26") | **Não.** Zero ocorrências de URA ou SMS. Só e-mail, grupos de WhatsApp e API |
| `planilha_disparos__Setembro26.md` | **Não.** Zero ocorrências |
| `planilha_disparos__Outubro26.md` | **Não.** Zero ocorrências |
| `desafio_ura_sms.md` | Sim (textos e horários, sem custo) |

**Conclusão importante.** Setembro e Outubro de 2026 não registram nenhum disparo de URA ou SMS (nem no lançamento do Dr. João, nem no Desafio). A pergunta "quando URA e SMS entraram" tem esta resposta: **eles não estão nas planilhas de 2026.** Só aparecem no lançamento de abril de 2024 (custos) e no doc do Desafio de setembro de 2026 (textos). Não existe, em nenhum arquivo, taxa de clique, de atendimento nem de conversão de URA e SMS. O "retorno em cliques" histórico **não existe**.

### 2.2 A cadência do modelo (aba "Disparos URASMS", abril de 2024)

| Tipo | Horário no histórico | Observação |
|---|---|---|
| URA antecipação | 14h30 (dia 1), 13h (dia 2, com convidado), 19h (dia 3, com convidado) e 19h (dia 4, previsto) | De uma a cinco horas antes da live |
| SMS ao vivo | 19h55 (dia 1) e 20h (dia 4, previsto) | Cinco minutos antes ou na hora |
| URA ao vivo | 20h (dia 1 e 2) e 20h10 (dia 4, previsto) | Na hora da live |
| SMS atrasados | 20h20 (dia 2) e 20h40 (dia 4, previsto) | Vinte a quarenta minutos depois do início |
| SMS flash | 20h (dia 3), uma vez só, preço unitário quase o dobro | Só uma vez em três dias |

**Padrão.** URA para acordar quem está longe do celular (antes e na hora), SMS para o momento exato (19h55 a 20h) e SMS de atrasados 20 a 40 minutos depois. Flash é exceção, não rotina. Nunca houve URA de atrasados nem URA flash. A estrutura do dia é: 1 URA antes, 1 SMS ao vivo, 1 URA ao vivo, 1 SMS de atrasados, e raramente 1 flash.

### 2.3 Inconsistências da planilha (para a equipe saber antes de copiar)

- O cabeçalho "Ao vivo 01/04 as 20h" tem a data 02/04 na célula. Rótulo e data não batem.
- O cabeçalho do flash diz "03/04 01 as 20h" (o "01" parece sobra de digitação).
- A verba é R$ 5.000,00 para o bloco 01/04 a 05/04. O gasto calculado até 03/04 já é R$ 8.074,22 (R$ 3.074,22 acima da verba). A linha "Repor R$ 2.365,12" não bate com nenhuma soma da planilha. Possível leitura: reposição de saldo na conta, sem relação com a verba. Não dá para confirmar.
- Os disparos de 04/04 e 05/04 estão nomeados, mas sem contatos nem totais.

---

## 3. Custos reais do histórico (abril de 2024)

Todos os números abaixo são do arquivo, com a conta refeita.

| Disparo | Contatos | Unitário | Total |
|---|---|---|---|
| URA antecipação 01/04 14h30 | 11.334 | R$ 0,08 | R$ 906,72 |
| URA ao vivo 01/04 20h (data 02/04 na célula) | 12.011 | R$ 0,08 | R$ 960,88 |
| URA antecipação 02/04 13h | 11.520 | R$ 0,08 | R$ 921,60 |
| URA antecipação 03/04 19h | 11.440 | R$ 0,08 | R$ 915,20 |
| **Total de URA** | 46.305 | | **R$ 3.704,40** |
| SMS ao vivo 01/04 19h55 | 16.096 | R$ 0,07 | R$ 1.126,72 |
| SMS atrasados 02/04 20h20 | 16.196 | R$ 0,07 | R$ 1.133,72 |
| SMS flash 03/04 20h | 16.226 | R$ 0,13 | R$ 2.109,38 |
| **Total de SMS** | 48.518 | | **R$ 4.369,82** |
| **Total do bloco 01/04 a 03/04** | | | **R$ 8.074,22** |

O que os números dizem:

1. **Tamanho das listas.** A base de URA ficou entre 11,3 mil e 12,0 mil contatos, e a de SMS entre 16,1 mil e 16,2 mil. A URA alcança cerca de 70% a 74% da base de SMS (a base de URA é menor, `[[CONFIRMAR: por que a base de URA era menor]]`; hipótese: só celulares com tentativa válida).
2. **Atrasados sem filtro.** O SMS de atrasados foi para 16.196 contatos, praticamente a mesma base do SMS ao vivo (16.096). Ou seja, **não houve filtro de quem já tinha entrado**: pagou-se SMS de "você ainda não entrou" para quem já estava na live.
3. **O flash pesou.** Um único flash custou R$ 2.109,38, quase metade (48%) do gasto de SMS do bloco, para um disparo de três. Flash custa 1,86 vez o SMS convencional.
4. **Custo por contato.** O bloco de 3 dias custou cerca de R$ 0,50 por contato da base de SMS.
5. **Custo unitário.** URA R$ 0,08, SMS R$ 0,07 e flash R$ 0,13 são preços de 2024. Para 2026, tratar como **estimativa**.

**O que o histórico não diz.** Não há cliques, atendimento, opt-out, vendas atribuídas nem o critério de cobrança da URA (por tentativa, atendida ou pulso de 30 segundos). Por isso o doc final não estima taxa de conversão e deixa o relatório pós-disparo (seção 10 do doc) criar esse histórico.

---

## 4. O que a Black muda

| Ponto | Desafio | Modelo de abril de 2024 | Black Próton Vitalícia |
|---|---|---|---|
| Janela de eventos | 5 noites de aula | 3 a 5 dias de live | **Uma live** (03/11, 20h) com revelação em 20h51, preço em 21h09, link em 21h28 |
| Cadência | URA e SMS todo dia | Antecipação, ao vivo, atrasados, flash | Véspera, hoje, ao vivo, atrasados, flash na revelação, carrinho aberto, últimas horas |
| Segmentos | Um só ("grupo de alunos") | Um só | S1 alunas do Clube, S2 viveu o método sem Clube, S3 base fria |
| Texto | "Link no grupo de alunos!" | Sem texto no arquivo | Link curto próprio com UTM por disparo e por segmento |
| Opt-out | Ausente | Ausente | Em todo SMS ("Sair: responda SAIR") e em toda URA (tecla 9) |
| Custo e verba | Ausente | Contatos x unitário, verba, total | Mesmo modelo, em 3 cenários, com verba de 10% de folga |
| Medição | Ausente | Ausente | Relatório por disparo e por segmento, custo por clique |
| Preço | n/a | n/a | **Nada de preço antes da live. Nenhum texto cita valor.** |
| Pós-live | Fora do escopo | Fora do escopo | Carrinho aberto e últimas horas só em SMS, mais URA opcional de últimas horas |

**Decisões tomadas no doc final e por quê.**

1. **O checkout abre às 21h28.** A janela segura vai até 20h (limite duro de 21h). Logo, **não existe SMS ou URA de carrinho aberto na noite de 03/11.** O carrinho aberto vira SMS em 04/11 às 10h. A versão anterior (`ura_e_sms.md`) já previa o flash "na revelação", mas sem hora; aqui o flash vai para 20h50 (a revelação é às 20h51), manual e cancelado se passar de 21h.
2. **O flash anterior às 20h estava fora do roteiro.** Às 20h a live só abriu e não há revelação nenhuma. O flash às 20h50 chama de volta quem saiu na hora certa.
3. **Cortar URA de atrasados e URA flash** (que a versão anterior tinha). Nunca existiram no histórico, custam R$ 0,08 por contato cada, e são ligações em horário de maior risco de bloqueio. Economia nos cenários: cerca de R$ 1.840 por ciclo de 11.500 contatos para as duas.
4. **Juntar os dois SMS ao vivo (19h55 e 20h05) em um só.** O histórico tem um SMS ao vivo por dia, e duas mensagens em dez minutos para a mesma pessoa dispara opt-out. A URA ao vivo de 20h cobre quem não leu.
5. **Cortar o 2º SMS de atrasados (20h40).** Com o flash em 20h50 haveria três mensagens em 30 minutos.
6. **Trocar "carrinho aberto" por "últimas horas" só com fechamento real.** O guia proíbe "últimas vagas" e "vagas acabando". "Últimas horas" fica condicionado a `[[PENDENTE: fechamento]]` e a data real.
7. **Tecla 1 na URA** para a pessoa receber o link por SMS na hora. É o único jeito de a URA gerar clique (a URA não carrega link).
8. **Tecla 2 (falar com o time) só na URA-04**, e só se a plataforma transferir `[[CONFIRMAR]]`.

**Custo da cadência anterior contra a nova** (mesmas bases de 11.500 para URA e 16.000 para SMS): a versão anterior tinha 5 URA, 6 SMS convencionais e 2 SMS flash, em torno de R$ 15.480 (R$ 4.600 de URA, R$ 6.720 de SMS convencional e R$ 4.160 de flash), sem filtro de clique e sem pós-live. A nova cadência esperada tem 11 disparos obrigatórios, com 80% da base nos atrasados e no flash, e custa cerca de R$ 12.040, **incluindo** carrinho aberto e últimas horas, que a anterior não tinha.

---

## 5. Orçamento: o que sai do histórico

Detalhe em `doc_ura_sms_black.md`, seção 7. Resumo:

| Cenário | Premissa de lista | Filtro (atrasados e flash) | Total | Verba recomendada |
|---|---|---|---|---|
| Conservador | 50% do histórico | 60% | R$ 5.700 | R$ 6.300 |
| Esperado | Histórico (11.500 URA, 16.000 SMS) | 80% | R$ 12.040 | R$ 13.250 |
| Agressivo | 150% do histórico | 100% (sem filtro) | R$ 23.760 | R$ 26.150 |

Esses números são **hipótese de verba, não de resultado**. O único dado real é o custo unitário de 2024. A meta de leads (`[[PENDENTE: meta de leads]]`) e a contagem de alunas (`[[PENDENTE: contagem de alunas]]`) definem o tamanho de lista real, e o custo muda na mesma proporção. Uma conferência rápida: cada 1.000 contatos a mais custam R$ 80 em URA, R$ 70 em SMS e R$ 130 em flash, por disparo.

---

## 6. Riscos e regras

Esta seção resume o que o doc final aplica. É leitura de mercado, não parecer jurídico.

### 6.1 Bloqueio de operadora e de aplicativo

- **SMS promocional em rota errada** é a causa mais comum de bloqueio: usar rota transacional para venda faz a operadora derrubar o remetente e, às vezes, a conta inteira. Exigir rota de marketing.
- **Link de encurtador público** (bit.ly e similares) é filtrado. Usar domínio próprio (`draproton.com.br/...`).
- **Texto com padrão de golpe** é filtrado: MAIÚSCULAS demais, "grátis", "ganhe", "crédito", "R$", pedido de dado. O texto proposto tem no máximo 2 palavras em caixa alta seguidas e nenhum valor.
- **URA de número desconhecido** é marcada como "provável spam" por aplicativos de identificação de chamada e por funções nativas do celular, o que derruba o atendimento. Mitigação: número de origem fixo, estável e cadastrado no validador oficial de números, identificação da Dra. nos 3 primeiros segundos, volume em ondas (não despejar 11 mil ligações no mesmo minuto) `[[CONFIRMAR com o fornecedor]]`.
- **Golpe com o nome da Dra.** Em dia de venda, SMS e ligação falsos são um risco real. O validador (`03_paginas/verificacao_de_numeros.md`) deve conter o remetente e o número da URA, `[[PENDENTE: cadastrar]]`.

### 6.2 Janela de horário

- Janela do plano: **9h às 20h. Nada depois das 21h.**
- O único disparo depois das 20h é o flash de 20h50, manual e cancelado se a revelação passar de 21h.
- Telemarketing ativo costuma ter restrições próprias de dias e horários. Muitas plataformas bloqueiam ligação fora de horário comercial e de dias úteis, e o prefixo 0303 é exigido nas ligações de telemarketing. **O Desafio rodou URA às 20h e a Black repete 20h; isso não prova que 20h é permitido em 2026.** `[[CONFIRMAR: regras atuais da Anatel e do fornecedor, incluindo 20h e feriado]]`. Se 20h não for permitido, a URA ao vivo cai para 19h50 e o resto do plano segue.
- **02/11 é Finados** (feriado). A URA da véspera (13h) só sai com autorização de plataforma e jurídico. O SMS sai às 19h, em tom sóbrio.

### 6.3 Opt-out

- **SMS:** instrução de saída em todo texto ("Sair: responda SAIR"). A resposta entra numa lista de supressão única, de telefone, antes do disparo seguinte.
- **URA:** "Para não receber mais ligações, digite 9" em todo áudio. A mesma lista de supressão vale para URA e SMS.
- **SMS flash** não fica guardado no aparelho, então o texto de saída aparece só na hora. A resposta continua valendo, mas a pessoa pode não ler a tempo. Por isso o flash vai só para quem não clicou e em volume menor.

### 6.4 LGPD e base legal

- **S1 e S2** (clientes e participantes): legítimo interesse, com opt-out claro, aviso de privacidade acessível e teste de balanceamento documentado `[[CONFIRMAR com jurídico]]`.
- **S3** (lead frio): **só com consentimento específico para ligação e SMS.** Telefone preenchido em formulário de tráfego pago, sem aceite de contato por telefone, **não entra em URA e SMS**. `[[CONFIRMAR: o formulário de captura tem esse aceite]]`. Sem aceite, S3 continua em e-mail, WhatsApp e grupos.
- Minimização: só telefone, nome e segmento vão para a plataforma. A plataforma é operadora de dados e precisa de contrato `[[CONFIRMAR]]`.
- Registro de data e origem do aceite, por contato.
- Lista comprada ou alugada: proibida.

### 6.5 Conteúdo de SMS promocional

- Remetente identificado no início do texto ("Dra Proton:").
- Instrução de saída no fim.
- Sem preço, sem parcela, sem bônus, sem garantia, sem promessa de resultado (regras do guia e da rubrica).
- "Esta condição não se repete" é a única frase de escassez aprovada. "Últimas horas" só com fechamento real.
- Sem emoji, sem caractere especial, sem acento.
- Sem afirmar nem negar replay (`[[PENDENTE: replay]]`).

### 6.6 Contagem de caracteres

| Codificação | Limite de uma parte | Limite por parte quando o texto é dividido | Quando ocorre |
|---|---|---|---|
| GSM de 7 bits (padrão) | 160 | 153 | Texto sem acento do português e sem emoji |
| Unicode (UCS-2) | 70 | 67 | Basta **um** caractere fora do GSM: a maioria dos acentos (á, ã, â, ê, í, ó, ô, õ, ú, ç) ou qualquer emoji |

- **Um acento no meio do texto derruba o limite de 160 para 70** e pode triplicar o custo (cada parte é cobrada como um SMS). Por isso todos os SMS são escritos sem acento ("Proton", "Vitalicia", "revelacao", "condicao").
- Alguns símbolos do GSM contam 2 caracteres (colchetes, chaves, til, barra vertical, barra invertida, circunflexo, euro). Evitar.
- O link conta inteiro. O link próprio mais longo do plano tem 28 caracteres (`draproton.com.br/bf-sms-01-a`). O maior texto tem 153 caracteres com o link, 7 de folga.
- Se a plataforma exibir links com "https://" na contagem, o limite estoura em alguns textos. Testar a contagem na plataforma antes de agendar (item 5 do checklist).

### 6.7 SMS flash

- Aparece na tela sem ir para a caixa de entrada e some quando a pessoa fecha. Alguns aparelhos e operadoras ignoram ou tratam como spam `[[CONFIRMAR: suporte nas 3 operadoras]]`.
- Custa R$ 0,13 contra R$ 0,07 (1,86 vez, histórico de 2024).
- O link pode não ficar clicável (a mensagem some). O texto traz o endereço por extenso.
- Uso no plano: **um único flash**, às 20h50, só para quem não clicou.

### 6.8 URA: custo e duração

- O R$ 0,08 do histórico pode ser por tentativa, por atendida ou por pulso. Se for por pulso de 30 segundos, um áudio de 31 s custa o dobro. **Todos os áudios do plano ficam abaixo de 30 s com as pausas (a URA-01, a mais longa, tem 26,8 s).**
- Contagem de fala a 2,5 palavras por segundo, mais pausas, dentro do limite.
- A tecla 1 envia um SMS de resposta, cobrado como SMS. O orçamento reserva 10% de folga para isso.

---

## 7. Lacunas e decisões da equipe

| # | O que falta | Efeito |
|---|---|---|
| 1 | Contrato vigente (custo por URA, SMS e flash; critério de cobrança) | Orçamento |
| 2 | Contagem por segmento (`[[PENDENTE: contagem de alunas]]`, S2, S3) e `[[PENDENTE: meta de leads]]` | Volume e custo |
| 3 | `[[PENDENTE: números de teste]]`, remetente e rota de marketing | Todos |
| 4 | Aceite de contato por telefone no formulário (S3) | Quem recebe |
| 5 | Regra de horário e feriado para URA | URA-01 e URA-03 |
| 6 | `[[PENDENTE: fechamento]]` e `[[PENDENTE: data do lote]]` | Pós-live |
| 7 | Plataforma entrega relatório por contato (clique, atendimento, tecla)? | Dedupe e filtro de atrasados |
| 8 | A URA envia SMS ao apertar tecla 1 e transfere ao apertar tecla 2? | Tecla 1 e 2 |
| 9 | Gravação com a Dra. | URA |

**Risco principal.** Se a plataforma não entregar clique por contato, os atrasados e o flash vão para a base inteira, o custo sobe para o cenário agressivo (R$ 23.760) e a mensagem "você ainda não entrou" vai para quem já está na live. Nesse caso, trocar SMS-04 e SMS-05 por um único disparo de atrasados.

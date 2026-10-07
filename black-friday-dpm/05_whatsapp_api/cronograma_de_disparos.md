# Cronograma de disparos: WhatsApp (grupos) e API

| Campo | Conteúdo |
|---|---|
| **Peça** | Cronograma dia a dia de 13/10 a 03/11 e do pós-live, com **2 disparos de grupo por dia (11h30 e 20h)**, data, horário, canal, lista/base, ID da copy e objetivo. O terceiro slot (16h30) está em reserva e fora do calendário. Cobre grupos de WhatsApp, API oficial e ManyChat (as peças de e-mail aparecem só como referência, pois são da pasta `06_emails`) |
| **Canal** | WhatsApp (grupos), WhatsApp API oficial, ManyChat (Instagram). E-mail como referência |
| **Público** | Três grupos: geral (reservaram a vaga), alunas do Clube, quem fez Desafio/Imersão/Aulão sem Clube. Em API: Lista 2026, leads antigos, reservaram, fizeram o diagnóstico, alunas ativas |
| **Momento** | 13/10 a 03/11 (captação), 03/11 (live), pós-live até o fechamento (datas `[[PENDENTE: data do lote]]` e `[[PENDENTE: fechamento]]`) |
| **Objetivo** | Dar ao implementador a ordem exata de cada disparo, para agendar sem decisão adicional. Cada disparo tem ID e o ID aponta o arquivo onde está o texto |
| **Consciência** | 1 a 3 na captação do grupo geral; 4 nas alunas; 4 a 5 em quem viveu o método; 5 no pós-live |
| **Modelo no Desafio** | planilhas de disparos de setembro e outubro do Desafio (colunas Campanha, Canal, Horário, Lista/Base, Título, Link Copy) e a cadência da BFV/26 descrita em `00_ESTRATEGIA_COPY_SENIOR.md`, seção 4 (e-mail 07h, grupos 11h30 e 20h, segmentado 09h) |

**O que mudou em relação ao Desafio.** O Desafio rodou 5 noites com 8 a 10 disparos de grupo por dia no entorno da aula. A Black tem 21 dias de captação (13/10 a 02/11) e uma live única. A cadência canônica (modelo BFV/26) é: **e-mail às 07h, API segmentada às 09h, grupos de WhatsApp às 11h30 e às 20h**, todos os dias. O terceiro slot de grupo (16h30), que existia na primeira versão deste cronograma, **saiu do calendário**: as 21 copys desse slot ficam como banco de reserva e testes em `lembretes_de_grupo_captacao.md`, marcadas "reserva", sem apagar texto. O dia 03/11 é a única exceção à cadência de 2 por dia e usa uma grade estendida e executável, modelada em CP 28 a 40 de 01/10 e alinhada ao roteiro da live. Os mantras viram ritual de áudio de Grabovoi sem promessa.

## 1. Convenções

### 1.1 Prefixos de ID

| Prefixo | O que é | Arquivo |
|---|---|---|
| CP-BF-01 a CP-BF-63 | Grupo, captação (13/10 a 02/11): 42 agendadas (11h30 e 20h) e 21 em reserva (16h30). Sufixos -AL (alunas) e -DS (Desafio/Imersão) marcam variantes | `lembretes_de_grupo_captacao.md` (banco de reserva e testes) |
| CP-BF-64 a CP-BF-77 | Grupo, dia da live (03/11) | `dia_da_live_03_11.md` |
| CP-BF-V01 a CP-BF-V16 | Grupo, pós-live (vagas abertas, virada de lote, fechamento) | `vagas_abertas_e_virada_de_lote.md` |
| CP-BF-GT01 | Grupo, aviso do Golden Ticket | `convite_vip_alunas_e_quiz.md` |
| API-BF-01 a 03 (-N, -D, -A) | API de onboarding (gatilho) | `api_onboarding.md` |
| API-BF-04.1 a 04.5 (-N, -D, -A) | API de convite indireto e aquecimento | `api_convite_indireto_e_aquecimento.md` |
| API-BF-05.x | API do Golden Ticket (alunas) | `convite_vip_alunas_e_quiz.md` |
| API-BF-06.x | API do diagnóstico (quiz), pré e pós-live | `convite_vip_alunas_e_quiz.md` |
| API-BF-07 a 09 | API de lembrete pré-live | `dia_da_live_03_11.md` |
| API-BF-10 a 17 | API do dia da live e carrinho aberto | `dia_da_live_03_11.md` |
| API-BF-V01 a V08 | API pós-live (virada de lote, fechamento) | `vagas_abertas_e_virada_de_lote.md` |
| API-BF-R01 a R06, C01 a C03, P01 a P08, X01 a X02, OK1 a OK4, RF1 a RF2 | API de recuperação de grupo, carrinho abandonado, Pix/boleto, recusada, aprovada, reembolso | `recuperacao_e_carrinho.md` |
| MC-BF-xx | ManyChat | `fluxo_manychat.md` |

Segmentos: **A** = alunas do Clube, **D** = demais alunos (Desafio, Imersão, Aulão sem Clube), **N** = não-alunas (base fria e leads antigos).

### 1.2 Listas e bases

| Nome na coluna | O que é |
|---|---|
| Grupos geral, Desafio/Imersão e alunas | Os três grupos de WhatsApp (rodízio SendFlow). Mesmo horário, copy-base ou variante |
| Lista 2026 e leads antigos | Quem ainda não reservou a vaga (alvo do convite indireto) |
| Reservaram | Quem preencheu a página de captura (alvo do onboarding e dos lembretes) |
| Fez o diagnóstico e não reservou | Quem fez o diagnóstico dos 5 padrões e não reservou a vaga |
| Alunas ativas do Clube | Tag de aluna ativa (alvo do Golden Ticket e da condição própria) |
| Abriu checkout e não comprou | Evento de abandono de carrinho (pós-live) |

### 1.3 Regras de cadência

1. **Dois disparos de grupo por dia, todos os dias, na captação e no pós-live**: 11h30 (slot A) e 20h (slot C). O slot de 16h30 (B) é reserva e não entra no calendário.
2. **Máximo de uma API por pessoa por dia** (custo e fadiga). Quando duas janelas de API caem no mesmo horário, elas são para listas diferentes; conferir a exclusão antes de agendar. A exceção é o dia 03/11 (seção 3).
3. **Um disparo de WhatsApp por minuto.** Uma campanha de grupo com três textos (geral, alunas, Desafio/Imersão) conta como um disparo. Duas campanhas de API no mesmo horário saem com 5 a 10 minutos de diferença.
4. **Troca de nome e capa é manual e tem janela própria** (início e fim), de 10 a 15 minutos, feita por duas pessoas, e nunca no minuto de um disparo (seção 6).
5. **Feriados e fins de semana mantêm os dois disparos.** Em 02/11 (Finados) o tom é sóbrio: sem exclamação, sem emoji festivo, sem "última chamada" (CP-BF-61 e 63).
6. **Horários de e-mail e de API são de referência. Os de grupo são o contrato.**
7. **Comercial em modo escuta de 20h a 22h no dia 03/11** (seção 3): nenhum disparo ativo de venda enquanto a live roda.

---

## 2. Captação: 13/10 a 02/11 (2 disparos de grupo por dia: 11h30 e 20h)

Todos os disparos de grupo vão para os três grupos no mesmo horário. Onde existe variante para o grupo de alunas (-AL) ou para o grupo Desafio/Imersão (-DS), ela vem na coluna ID. Grupo geral usa a copy-base. Quatro copys do slot de 16h30 foram promovidas ao slot de 20h (CP-BF-11, 26, 32 e 35) para o calendário manter a cobertura de objeção; as colegas de dia delas (CP-BF-12, 27, 33 e 36) estão na reserva (seção 2.1).

| Data | Dia | Horário | Canal | Lista/base | ID | Objetivo |
|---|---|---|---|---|---|---|
| **FASE 1** | | | | | **Reconhecimento** | |
| 13/10 | Ter | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 13/10 | Ter | 09h00 | API | Lista 2026 e leads antigos que não reservaram, por segmento | API-BF-04.1 a 04.5 (-N, -D, -A), onda 1 | Convite indireto: aquecer e levar à reserva da vaga |
| 13/10 | Ter | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-01 (alunas: CP-BF-01-AL; Desafio/Imersão: CP-BF-01-DS) | Abriu. Perfil: Todos (frase-guia) |
| 13/10 | Ter | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-03 | A conta aparece. Perfil: Termostato Invisível |
| 14/10 | Qua | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 14/10 | Qua | 09h00 | API | Fez o diagnóstico e não reservou (exceto alunas) | API-BF-06.1 e 06.2 | Transformar o resultado do diagnóstico em reserva |
| 14/10 | Qua | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-04 | Eu sei e não faço. Perfil: Autossabotagem |
| 14/10 | Qua | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-06 | Eu termino. Perfil: Autossabotagem |
| 15/10 | Qui | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 15/10 | Qui | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-07 | Funcional, mas exausta. Perfil: Cobrança Que Você Só Faz Com Você |
| 15/10 | Qui | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-09 | Anota a data. Perfil: Todos |
| 16/10 | Sex | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 16/10 | Sex | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-10 | Retrocedo. Perfil: Traumas Que Ainda Decidem |
| 16/10 | Sex | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-11 | Quem é a Dra. (promovida da reserva). Perfil: Todos |
| 17/10 | Sáb | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 17/10 | Sáb | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-13 | Ninguém cuida de mim. Perfil: Culpa de Querer Mais |
| 17/10 | Sáb | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-15 | Ritual da noite. Perfil: Todos |
| 18/10 | Dom | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 18/10 | Dom | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-16 | Não sei o que me trava. Perfil: Não sei o que me trava |
| 18/10 | Dom | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-18 | Segunda eu começo. Perfil: Cobrança Que Você Só Faz Com Você |
| 19/10 | Seg | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 19/10 | Seg | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-19 (Desafio/Imersão: CP-BF-19-DS) | A conta dos 12 meses. Perfil: Termostato Invisível |
| 19/10 | Seg | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-21 | A semana que vem. Perfil: Todos |
| **FASE 2** | | | | | **Prova e quebra de medo** | |
| 20/10 | Ter | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 20/10 | Ter | 09h00 | API | Quem não clicou na onda 1 | API-BF-04.1 a 04.5 (-N, -D, -A), onda 2 | Convite indireto, segunda tentativa |
| 20/10 | Ter | 10h00 | API | Reservou e não está em nenhum grupo | API-BF-R01 | Recuperação de grupo, mensagem 1 |
| 20/10 | Ter | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-22 (alunas: CP-BF-22-AL) | Terça é dia de aula. Perfil: Todos |
| 20/10 | Ter | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-24 | Uma decisão só. Perfil: Todos (JTBD) |
| 20/10 | Ter |  | Nota |  |  | Terça: aula do Clube. |
| 21/10 | Qua | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 21/10 | Qua | 09h00 | API | Fez o diagnóstico e não reservou (novos desde 14/10) | API-BF-06.1 e 06.2 | Reserva de quem fez o diagnóstico |
| 21/10 | Qua | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-25 | Depoimento 1. Perfil: Termostato Invisível |
| 21/10 | Qua | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-26 (Desafio/Imersão: CP-BF-26-DS) | A objeção do dinheiro (promovida da reserva). Perfil: Termostato Invisível |
| 22/10 | Qui | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 22/10 | Qui | 09h00 | API | Alunas ativas do Clube | API-BF-05.1 (e 05.1V) | Golden Ticket: convite VIP |
| 22/10 | Qui | 11h30 | Wpp Grupos | Grupos geral e Desafio/Imersão | CP-BF-28 | Os 40 anos. Perfil: Traumas Que Ainda Decidem |
| 22/10 | Qui | 11h30 | Wpp Grupos | Grupo de alunas | CP-BF-GT01 (no lugar do CP-BF-28 só no grupo de alunas) | Golden Ticket: aviso no grupo (ver API-BF-05.1) |
| 22/10 | Qui | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-30 | O depois. Perfil: Autossabotagem |
| 23/10 | Sex | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 23/10 | Sex | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-31 | Depoimento 2. Perfil: Autossabotagem |
| 23/10 | Sex | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-32 | O que entra 1: dinheiro (promovida da reserva). Perfil: Termostato Invisível |
| 24/10 | Sáb | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 24/10 | Sáb | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-34 | Descanso sem culpa. Perfil: Cobrança Que Você Só Faz Com Você |
| 24/10 | Sáb | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-35 | O que entra 2: emocional (promovida da reserva). Perfil: Traumas Que Ainda Decidem |
| 25/10 | Dom | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 25/10 | Dom | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-37 | O que entra 3: carreira. Perfil: Culpa de Querer Mais |
| 25/10 | Dom | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-39 | A casa cheia, você sozinha. Perfil: Culpa de Querer Mais |
| 26/10 | Seg | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 26/10 | Seg | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-40 (Desafio/Imersão: CP-BF-40-DS) | O custo de ficar parada. Perfil: Termostato Invisível |
| 26/10 | Seg | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-42 | Anota a data 2. Perfil: Todos |
| 27/10 | Ter | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 27/10 | Ter | 09h00 | API | Fez o diagnóstico e não reservou (novos desde 21/10) | API-BF-06.1 e 06.2 | Reserva de quem fez o diagnóstico |
| 27/10 | Ter | 10h00 | API | Reservou e não está em nenhum grupo | API-BF-R01 | Recuperação de grupo, mensagem 1 |
| 27/10 | Ter | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-43 (alunas: CP-BF-43-AL) | Você não é a única. Perfil: Todos |
| 27/10 | Ter | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-45 | Ritual da noite 2. Perfil: Todos |
| 27/10 | Ter |  | Nota |  |  | Terça: aula do Clube. |
| **FASE 3** | | | | | **Antecipação** | |
| 28/10 | Qua | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 28/10 | Qua | 09h00 | API | Quem não clicou nas ondas 1 e 2 | API-BF-04.1 a 04.5 (-N, -D, -A), onda 3 | Convite indireto, terceira tentativa |
| 28/10 | Qua | 09h10 | API | Reservaram e não ativaram o lembrete | API-BF-07 | Salvar a data da live |
| 28/10 | Qua | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-46 (Desafio/Imersão: CP-BF-46-DS) | Salva a data. Perfil: Todos |
| 28/10 | Qua | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-48 | O padrão vai tentar te tirar da live. Perfil: Autossabotagem |
| 29/10 | Qui | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 29/10 | Qui | 09h00 | API | Alunas que não ativaram o Golden Ticket | API-BF-05.2 | Golden Ticket: reforço |
| 29/10 | Qui | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-49 | O que vai acontecer na live. Perfil: Todos |
| 29/10 | Qui | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-51 | Falta o diagnóstico. Perfil: Todos (5 perfis) |
| 30/10 | Sex | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 30/10 | Sex | 09h00 | API | Reservaram e não fizeram o diagnóstico | API-BF-08 | Levar ao diagnóstico antes da live |
| 30/10 | Sex | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-52 | Ativa o lembrete. Perfil: Todos |
| 30/10 | Sex | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-54 | Sexta: o depois. Perfil: Autossabotagem |
| 31/10 | Sáb | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 31/10 | Sáb | 10h00 | API | Reservou e não está em nenhum grupo | API-BF-R01 | Recuperação de grupo, mensagem 1 |
| 31/10 | Sáb | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-55 | O deserto. Perfil: Traumas Que Ainda Decidem |
| 31/10 | Sáb | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-57 | A última vez que eu recomeço. Perfil: Autossabotagem |
| 01/11 | Dom | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 01/11 | Dom | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-58 | Checklist da live. Perfil: Todos |
| 01/11 | Dom | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-60 | Ritual da noite 3. Perfil: Todos |
| 02/11 | Seg | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 02/11 | Seg | 09h00 | API | Reservaram, exceto alunas ativas (elas recebem a API-BF-05.3) | API-BF-09 | É amanhã (live em 03/11, 20h) |
| 02/11 | Seg | 09h10 | API | Alunas (ativaram e não ativaram, 2 textos) | API-BF-05.3 | Golden Ticket: último aviso |
| 02/11 | Seg | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-61 | É amanhã. Perfil: Todos |
| 02/11 | Seg | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-63 (alunas: CP-BF-63-AL) | Quantas vezes. Perfil: Todos (frase-guia) |
| 02/11 | Seg |  | Nota |  |  | Feriado (Finados): tom sóbrio. |

**Contagem da captação:** 42 disparos de grupo agendados (21 dias x 2), 9 variantes de grupo agendadas (4 para alunas e 5 para Desafio/Imersão), 1 substituição de texto no grupo de alunas (CP-BF-GT01 em 22/10) e 15 janelas de API programadas (mais os gatilhos contínuos da seção 5). Mais 21 copys de grupo em reserva (seção 2.1).

### 2.1 Reserva (slot de 16h30): fora do calendário

**RESERVA: não agendar.** Estas 21 copys (e 7 variantes) continuam inteiras em `lembretes_de_grupo_captacao.md`. Usos permitidos: teste A/B contra a copy agendada do mesmo dia (metade do rodízio recebe cada uma, no horário agendado), troca de emergência e reforço de um grupo que esfriou. Nunca como terceiro disparo do dia.

| Data | Dia | Slot (reserva) | ID | Variantes em reserva | Tema | Perfil |
|---|---|---|---|---|---|---|
| 13/10 | Ter | 16h30 | CP-BF-02 | nenhuma | O nome do padrão | Não sei o que me trava |
| 14/10 | Qua | 16h30 | CP-BF-05 | CP-BF-05-DS | Curso na pasta | Autossabotagem |
| 15/10 | Qui | 16h30 | CP-BF-08 | CP-BF-08-AL | Pago as contas, mas não sobra | Termostato Invisível |
| 16/10 | Sex | 16h30 | CP-BF-12 | nenhuma | A promessa do ano | Cobrança Que Você Só Faz Com Você |
| 17/10 | Sáb | 16h30 | CP-BF-14 | nenhuma | A casa sobe junto | Culpa de Querer Mais |
| 18/10 | Dom | 16h30 | CP-BF-17 | nenhuma | Qual é o seu? | Os 5 perfis (enquete) |
| 19/10 | Seg | 16h30 | CP-BF-20 | nenhuma | Você já sabe começar | Culpa de Querer Mais |
| 20/10 | Ter | 16h30 | CP-BF-23 | nenhuma | Já comprei e não tive resultado | Autossabotagem |
| 21/10 | Qua | 16h30 | CP-BF-27 | nenhuma | 3 sinais do termostato | Termostato Invisível |
| 22/10 | Qui | 16h30 | CP-BF-29 | CP-BF-29-AL | E se eu não conseguir assistir? | Todos |
| 23/10 | Sex | 16h30 | CP-BF-33 | nenhuma | Enquete: o que explicar primeiro? | Todos |
| 24/10 | Sáb | 16h30 | CP-BF-36 | nenhuma | Eu me escolho | Culpa de Querer Mais |
| 25/10 | Dom | 16h30 | CP-BF-38 | nenhuma | 11 produtos é muito? | Autossabotagem |
| 26/10 | Seg | 16h30 | CP-BF-41 | nenhuma | Depoimento 3 | Culpa de Querer Mais |
| 27/10 | Ter | 16h30 | CP-BF-44 | nenhuma | E se não funcionar para mim? | Todos |
| 28/10 | Qua | 16h30 | CP-BF-47 | nenhuma | O que separar | Todos |
| 29/10 | Qui | 16h30 | CP-BF-50 | nenhuma | Segunda eu começo (encaminha) | Autossabotagem |
| 30/10 | Sex | 16h30 | CP-BF-53 | CP-BF-53-DS | Enquete: o que você quer ouvir | Todos |
| 31/10 | Sáb | 16h30 | CP-BF-56 | CP-BF-56-AL | Depoimento 4 | Traumas Que Ainda Decidem |
| 01/11 | Dom | 16h30 | CP-BF-59 | nenhuma | Se cobrar por não ter feito | Cobrança Que Você Só Faz Com Você |
| 02/11 | Seg | 16h30 | CP-BF-62 | CP-BF-62-AL, CP-BF-62-DS | As 3 respostas | Todos |

---

## 3. Dia da live: 03/11 (terça), grade completa e executável

Modelo: CP 28 a 40 do dia 01/10 do Desafio, alinhado ao roteiro da live (`08_live_e_pitch/roteiro_live_de_revelacao.md`): sala aberta às 19h45, live às 20h, preço por volta de 21h09, link do checkout por volta de 21h28, fim por volta de 21h56. Texto: `dia_da_live_03_11.md`. Nas linhas de grupo, os grupos de alunas e de Desafio/Imersão recebem a variante (-AL ou -DS) quando existir.

Regras de execução desta grade: um disparo de WhatsApp por minuto; cada troca de nome e capa tem janela com início e fim e não coincide com nenhum disparo (05h45 a 05h55, 19h30 a 19h45 e 21h35 a 21h50); comercial em modo escuta das 20h às 22h; o dia 03/11 é a exceção à regra de uma API por pessoa por dia. Os horários a partir de 20h valem se a live começar às 20h.

| Data | Horário | Canal | Lista/base | ID | Objetivo |
|---|---|---|---|---|---|
| 03/11 | 05:45 a 05:55 | Grupos (manual) | Todos os grupos | Trocar nome e capa para "É HOJE, 20H" | Janela de 10 min, antes do CP-BF-64 |
| 03/11 | 06:00 | Grupos | Todos os grupos | CP-BF-64 | Ritual da manhã (áudio de Grabovoi) |
| 03/11 | 07:00 | Grupos | Todos os grupos | CP-BF-65 | É hoje, reação |
| 03/11 | 09:00 | API | Reservaram (N e D) | API-BF-10 | É hoje, botão para a live |
| 03/11 | 09:00 | E-mail (referência) | Reservaram | `06_emails` | É hoje |
| 03/11 | 09:05 | API | Reservaram (A) | API-BF-10-A | É hoje, alunas |
| 03/11 | 09:10 | Grupos | Todos os grupos | CP-BF-66 (-AL) | Quem ainda não reservou |
| 03/11 | 11:30 | Grupos | Todos os grupos | CP-BF-67 | Lembrete 1 + evento (SendFlow). Slot A canônico |
| 03/11 | 13:30 | Grupos | Todos os grupos | CP-BF-68 (-AL, -DS) | Carta da Dra. |
| 03/11 | 15:00 | Grupos | Todos os grupos | CP-BF-69 | Lembrete 2: o que acontece hoje |
| 03/11 | 15:05 | API | Quem não clicou no 09h | API-BF-11 | Lembrete com botão |
| 03/11 | 17:00 | Grupos | Todos os grupos | CP-BF-70 | Antes de decidir |
| 03/11 | 19:00 | Grupos | Todos os grupos | CP-BF-71 | Falta 1 hora |
| 03/11 | 19:05 | API | Quem não clicou antes | API-BF-12 | Falta 1 hora |
| 03/11 | 19:10 | API | Reservou e não entrou em grupo | API-BF-R03 | Recuperação de grupo, mensagem 3 (`recuperacao_e_carrinho.md`) |
| 03/11 | 19:15 | Comercial | Pipeline do comercial | Último lembrete automático e pausa de todo disparo ativo de venda | Fecha a janela de abertura 3 |
| 03/11 | 19:30 a 19:45 | Grupos (manual) | Todos os grupos | Trocar nome e capa para "AO VIVO HOJE, 20H" | Janela de 15 min, termina com a sala aberta às 19h45 |
| 03/11 | 19:50 | Grupos | Todos os grupos | CP-BF-72 | Falta 10 min + vídeo da Dra. + sala aberta |
| 03/11 | 19:55 | API | Quem não clicou antes | API-BF-13 | Falta 5 min, sala aberta |
| 03/11 | 20:00 | Grupos | Todos os grupos | CP-BF-73 | Estou ao vivo. Slot C canônico |
| 03/11 | 20:00 a 22:00 | Comercial | Pipeline do comercial | Modo escuta | Sem disparo ativo. Só responde quem chamar |
| 03/11 | 20:05 | API | Reservaram | API-BF-14 | Estou ao vivo |
| 03/11 | 20:15 | Grupos | Todos os grupos | CP-BF-74 | Cadê você? |
| 03/11 | 20:20 | API | Dentro da janela de 24 h | API-BF-15 | Cadê você? |
| 03/11 | 21:00 | Grupos | Todos os grupos | CP-BF-75 | A melhor parte: a condição vai ser revelada (preço previsto às 21h09) |
| 03/11 | 21:05 | API | Dentro da janela de 24 h | API-BF-16 | A melhor parte |
| 03/11 | 21:28 (manual) | Grupos | Cada grupo | CP-BF-76 e CP-BF-76-DS (geral e Desafio/Imersão); CP-BF-76-AL (alunas) | Carrinho aberto, Lote Especial [[CONFIRMAR: Lote Especial só para quem está ao vivo]]. Dispara quando o link do checkout abrir na tela (bloco 15 do roteiro) |
| 03/11 | 21:28 (manual) | E-mail (referência) | Reservaram | `06_emails` | Abertura de carrinho |
| 03/11 | 21:30 (manual) | API | Reservaram (N e D) | API-BF-17 | Carrinho aberto, Lote Especial |
| 03/11 | 21:32 (manual) | API | Reservaram (A) | API-BF-17-A | Carrinho aberto, Lote Especial (alunas) |
| 03/11 | 21:35 a 21:50 (manual) | Grupos | Todos os grupos | Trocar nome e capa para "VAGAS ABERTAS" | Janela de 15 min, depois do CP-BF-76 |
| 03/11 | 22:00 | Grupos | Todos os grupos | CP-BF-77 (-AL) | Ritual da noite + P.S. do carrinho |
| 03/11 | 22:05 | Comercial | Pipeline do comercial | Fim do modo escuta, último disparo do dia | Depois disso, só respostas |
| 03/11 | Contínuo até 20:00 | ManyChat | Quem comenta VITALÍCIA ou DIAGNÓSTICO | MC-BF-01 a B12, C01 a C03 | Ingresso, diagnóstico e reserva (antes de 20h) |
| 03/11 | 20:00 até a abertura do link (previsto 21:28) | ManyChat | Quem comenta VITALÍCIA | MC-BF-D01 | Devolve o link da live em vez da reserva |
| 03/11 | A partir da abertura do link (previsto 21:28) | ManyChat | Quem comenta VITALÍCIA | MC-BF-V01, V01-A, V02 e V03 | Fluxo pós-live (condição vigente) |

---

## 4. Pós-live

As datas de virada de lote e de fechamento ainda não existem (`[[PENDENTE: data do lote]]`, `[[PENDENTE: fechamento]]`). A tabela mostra o primeiro dia (04/11) com data fixa e o restante em dias relativos aos eventos E1 (fim do Lote Especial), E2 (fim do Primeiro Lote) e E3 (fechamento). Texto: `vagas_abertas_e_virada_de_lote.md`.

### 4.1 Dia seguinte à live (04/11)

| Data | Horário | Canal | Lista/base | ID | Objetivo |
|---|---|---|---|---|---|
| 04/11 | 07h00 | E-mail | Referência | Ver `06_emails` | Carrinho aberto |
| 04/11 | 09h00 | API | Reservaram que não compraram (N e D / A) | API-BF-V01 e API-BF-V01-A | A condição está aberta |
| 04/11 | 09h10 | API | Quem fez o diagnóstico e não comprou | API-BF-06.P1, depois P2 e P3 | Diagnóstico pós-live (não enviar a quem recebeu API-BF-V01) |
| 04/11 | 11h30 | Wpp Grupos | Os três grupos | CP-BF-V01 (alunas: -AL) | A condição está aberta, o que entra |
| 04/11 | 20h00 | Wpp Grupos | Os três grupos | CP-BF-V02 (alunas: -AL) | Quebra da objeção de dinheiro (movida do slot de reserva para o slot de 20h) |
| 05/11 | 11h30 | Wpp Grupos | Os três grupos | CP-BF-V03 (alunas: -AL) | Antes de decidir, garantia (era 04/11 20h, movida para o slot de 11h30 do dia seguinte) |

### 4.2 Dias sem evento de lote

A cadência é a canônica: e-mail 07h; API 09h só nos dias-chave; grupos 11h30 e 20h (2 por dia, sem 16h30). Rotacionar CP-BF-V01 a V03 (04/11 e 05/11), depois V07 (Primeiro Lote, 20h) e V11 (Último Lote, 20h), acrescentando um `[[DEPOIMENTO REAL]]` por dia.

### 4.3 Dias de evento (modelo)

Nos dias de evento, os disparos de virada saem em horário relativo ao corte (as datas ainda não existem). Mesma regra: um disparo por minuto, API 5 minutos depois do grupo, e troca de nome e capa em janela própria.

| Evento | Horário | Canal | Lista/base | ID | Objetivo |
|---|---|---|---|---|---|
| E1 (fim do Lote Especial), dia | 07h00 | E-mail | Referência | Ver `06_emails` | Último dia do Lote Especial |
| | 09h00 | API | Reservaram que não compraram | API-BF-V02 | Último dia do Lote Especial |
| | 11h30 | Wpp Grupos | Os três grupos | CP-BF-V04 (alunas: -AL) | Último dia do Lote Especial. Trocar nome do grupo: "Inscrições: Último dia" |
| | 3 h antes do corte | Wpp Grupos | Os três grupos | CP-BF-V05 (alunas: -AL) | Últimas horas. Trocar nome: "Inscrições: Últimas horas" (janela de 15 min que termina 5 min antes do disparo) |
| | Hora do corte | Wpp Grupos | Os três grupos | CP-BF-V06 (alunas: -AL) | Virou: Primeiro Lote |
| | Corte + 5 min | API | Reservaram que não compraram | API-BF-V03 | Virou: Primeiro Lote |
| Entre E1 e E2 | Gatilho | API | Abriu checkout e não comprou | API-BF-C01 a C03 | Carrinho abandonado (automático) |
| | 20h00 | Wpp Grupos | Os três grupos | CP-BF-V07 (alunas: -AL) | Objeção "já comprei e não tive resultado" |
| E2 (fim do Primeiro Lote), dia | 09h00 | API | Reservaram que não compraram | API-BF-V04 | Último dia do Primeiro Lote |
| | 11h30 | Wpp Grupos | Os três grupos | CP-BF-V08 (alunas: -AL) | Último dia do Primeiro Lote |
| | 3 h antes do corte | Wpp Grupos | Os três grupos | CP-BF-V09 (alunas: -AL) | Últimas horas do Primeiro Lote |
| | Hora do corte | Wpp Grupos | Os três grupos | CP-BF-V10 (alunas: -AL) | Virou: Último Lote |
| | Corte + 5 min | API | Reservaram que não compraram | API-BF-V05 | Virou: Último Lote |
| Entre E2 e E3 | 20h00 | Wpp Grupos | Os três grupos | CP-BF-V11 (alunas: -AL) | Objeção "medo de não aplicar", trilha de entrada |
| E3 (fechamento), dia | 09h00 | API | Reservaram que não compraram | API-BF-V06 | Último dia |
| | 11h30 | Wpp Grupos | Os três grupos | CP-BF-V12 (alunas: -AL) | Último dia |
| | 3 h antes | Wpp Grupos | Os três grupos | CP-BF-V13 (alunas: -AL) | Últimas horas |
| | 1 h antes | Wpp Grupos | Os três grupos | CP-BF-V14 (alunas: -AL) | Última hora |
| | 55 min antes | API | Abriu checkout e não comprou | API-BF-V07 | Última hora |
| | Fechamento | Wpp Grupos | Os três grupos | CP-BF-V15 (alunas: -AL) | Encerrou. Trocar nome e capa: "Encerrado" |
| E3 + 1 dia | 09h00 | API | Abriu checkout e não comprou | API-BF-V08 | Encerrou, lista de espera (só se houver) |
| | 11h30 | Wpp Grupos | Os três grupos | CP-BF-V16 (alunas: -AL) | Saída honrosa (só se houver lista de espera) |

### 4.4 Alunas: golden ticket e condição própria

O Golden Ticket (`API-BF-05.x`, `CP-BF-GT01`) acontece antes da live, em 22/10, 29/10 e 02/11. Depois da live, as alunas passam a receber as mesmas peças de lote com o sufixo -AL e os preços `[[PREÇO LOTE ALUNAS]]`.

---

## 5. Gatilhos contínuos (por evento, sem data)

| Evento | Canal | ID | Quando |
|---|---|---|---|
| Entrou na lista (reservou) | API | API-BF-01 (-N, -D, -A) | Imediato |
| Reservou e não entrou no grupo (status "não confirmou") | API | API-BF-02 (-N, -D, -A) | Algumas horas depois do cadastro, e uma vez no dia seguinte |
| Saiu do grupo | API | API-BF-03 (-N, -D, -A) | Imediato |
| Reservou e não está em grupo | API e e-mail | API-BF-R01 a R03, EMAIL-BF-R01 | 20/10, 27/10, 31/10 (R01), manhã de 03/11 (R02), 19h de 03/11 (R03) |
| Comprou e não entrou no grupo | API e e-mail | API-BF-R04 a R06, EMAIL-BF-R02 | 2 h depois, dia seguinte 09h, a cada 48 h |
| Abandono de carrinho | API | API-BF-C01 (-A), C02 (-A), C03 | Até 1 h, cerca de 24 h, últimas horas do lote |
| Pix emitido, expirado | API | API-BF-P01 a P04 | Imediato, 30 a 60 min, 24 h |
| Boleto emitido, vencido | API | API-BF-P05 a P08 | Imediato, véspera do vencimento, 24 h |
| Compra recusada | API | API-BF-X01, X02 | Imediato, 24 h |
| Compra aprovada | API | API-BF-OK1 (-A), OK2 | Imediato |
| Compra aprovada + 48 h | API | API-BF-OK3 | 48 h |
| Compra aprovada + 21 dias | API | API-BF-OK4 | 21 dias |
| Pedido de reembolso, concluído | API | API-BF-RF1, RF2 | Imediato (só se a garantia for mantida) |
| Comentou VITALÍCIA ou DIAGNÓSTICO | ManyChat | MC-BF-00 a L04 | Imediato |

---

## 6. Troca de nome e capa dos grupos (disparo manual, em janela)

Cada troca é feita por duas pessoas e tem início e fim. A janela termina antes do disparo seguinte e nunca coincide com o minuto de um disparo. Com mais de 6 grupos no rodízio, abrir a janela mais cedo.

| Quando | Janela | Estado | Referência |
|---|---|---|---|
| 13/10 | 11h15 a 11h25 (antes do CP-BF-01, 11h30) | Captação | `grupos_descricao_e_grupo_cheio.md`, seção 1 |
| 03/11, manhã | 05h45 a 05h55 (antes do CP-BF-64, 06h00) | Dia da live, antes de começar | idem |
| 03/11, à noite | 19h30 a 19h45 (antes do CP-BF-72, 19h50) | Ao vivo ("AO VIVO HOJE, 20H"). Não há troca às 19h59 | idem |
| 03/11, carrinho aberto | 21h35 a 21h50 (depois do CP-BF-76, 21h28) | Vagas abertas | idem |
| Em cada virada de lote | 15 min depois do disparo de virada | Virada de lote | idem |
| Manhã de E3 | 11h15 a 11h25 (antes do CP-BF-V12) | Último dia | idem |
| Últimas horas de E1, E2 e E3 | termina 5 min antes do disparo de "últimas horas" | Últimas horas | idem |
| Fechamento | 15 min depois do CP-BF-V15 | Encerrado | idem |

---

## Notas ao implementador

**Pendências que bloqueiam o agendamento**
1. `[[PENDENTE: data do lote]]` e `[[PENDENTE: fechamento]]`: a seção 4.3 fica em dias relativos até ser fechada. Prazo sugerido pela estratégia: 10/10.
2. Links: reserva da live, diagnóstico, live no YouTube, grupos por segmento, checkout por lote e segmento (seis), suporte.
3. Segmentação em DataCrazy/ListBoss: tags A, D e N, "reservou", "fez o diagnóstico", "aluna ativa", "abriu checkout".
4. `[[CONFIRMAR: contagem de alunas do Clube]]`: define o custo e o tamanho do grupo de alunas.
5. Aprovação dos templates de API na Meta: são dezenas de templates novos (ver a tabela "Aprovação de template" no fim de cada arquivo de API). Pedir aprovação com antecedência de pelo menos 7 dias do primeiro uso. Templates pós-live (API-BF-17 em diante) precisam ser aprovados **antes** da live e não podem trazer preço digitado: o preço e o lote entram por variável no envio.
6. `[[DEPOIMENTO REAL]]`, áudio de Grabovoi, vídeo da Dra. (19h50) e artes (capas, Golden Ticket, ingresso). Nenhuma arte tem cor, fonte ou logo definitivos, porque a identidade visual ainda não existe.

**Decisões a validar**
1. **Slot de 16h30 em reserva (decisão fechada).** A cadência canônica de grupo é de 2 disparos por dia (11h30 e 20h), como na BFV/26. As 21 copys de 16h30 ficam como banco de reserva e testes. Quatro delas (CP-BF-11, 26, 32 e 35) foram promovidas ao slot de 20h para o calendário não perder cobertura de objeção (confiança na Dra., dinheiro e o que entra); as de 20h do mesmo dia (CP-BF-12, 27, 33 e 36) foram para a reserva. Para desfazer uma promoção, trocar os horários na tabela da seção 2 e nos títulos do arquivo de copys.
2. **Variantes por grupo.** O grupo geral usa a copy-base; alunas e Desafio/Imersão têm 8 variantes cada (4 e 5 no calendário, 4 e 3 em reserva), em slots escolhidos pela diferença de público. Se a equipe quiser menos trabalho, usar a copy-base nos três grupos e as variantes só nos 4 slots de maior diferença (CP-BF-01, 22, 56 e 62).
3. **Onboarding.** Os gatilhos da planilha de setembro do Desafio parecem trocados (ver `api_onboarding.md`). Adotei o que o texto pede. "Não confirmou" significa "reservou e não entrou no grupo".
4. **Quem fez Desafio/Imersão paga preço de não-alunas** até a equipe decidir o contrário.
5. **Ritual de Grabovoi** substitui o mantra, sem promessa de dinheiro. Se a Dra. não aprovar, trocar CP-BF-15, 45, 60, 64 e 77 por copys da reserva ou por perguntas do dia, sem deixar o slot vazio.
7. **Dia 03/11 (terça).** O dia da live é a única exceção à cadência de 2 por dia. A grade usa um minuto por disparo, janelas fechadas para troca de nome e capa e modo escuta do comercial das 20h às 22h. Terça é dia de aula do Clube `[[CONFIRMAR: o que acontece com a aula do Clube de 03/11]]`.
8. **02/11 (Finados).** Mantém os dois disparos, com tom sóbrio.
6. **Replay.** Nenhuma peça afirma ou nega replay.

**Testes A/B sugeridos**
1. Copy agendada contra a copy de reserva do mesmo dia (metade do rodízio cada), sempre em 11h30 ou 20h.
2. Slot C com ritual contra slot C com pergunta.
3. Primeira API de convite indireto às 09h contra 12h.
4. Dia 03/11: a ordem de CP-BF-68 (carta) e CP-BF-69 (o que acontece hoje).

**Dependências**
- Todos os arquivos desta pasta. Os e-mails equivalentes estão em `06_emails`.
- O comercial 1 a 1 (`09_comercial_datacrazy`) entra a partir de 03/11 e usa os mesmos lotes.

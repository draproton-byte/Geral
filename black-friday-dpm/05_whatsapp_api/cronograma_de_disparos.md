# Cronograma de disparos: WhatsApp (grupos) e API

| Campo | Conteúdo |
|---|---|
| **Peça** | Cronograma dia a dia de 13/10 a 03/11 e do pós-live, com data, horário, canal, lista/base, ID da copy e objetivo. Cobre grupos de WhatsApp, API oficial e ManyChat (as peças de e-mail aparecem só como referência, pois são da pasta `06_emails`) |
| **Canal** | WhatsApp (grupos), WhatsApp API oficial, ManyChat (Instagram). E-mail como referência |
| **Público** | Três grupos: geral (reservaram a vaga), alunas do Clube, quem fez Desafio/Imersão/Aulão sem Clube. Em API: Lista 2026, leads antigos, reservaram, fizeram o diagnóstico, alunas ativas |
| **Momento** | 13/10 a 03/11 (captação), 03/11 (live), pós-live até o fechamento (datas `[[PENDENTE]]`) |
| **Objetivo** | Dar ao implementador a ordem exata de cada disparo, para agendar sem decisão adicional. Cada disparo tem ID e o ID aponta o arquivo onde está o texto |
| **Consciência** | 1 a 3 na captação do grupo geral; 4 nas alunas; 4 a 5 em quem viveu o método; 5 no pós-live |
| **Modelo no Desafio** | `planilha_disparos__Setembro26.md` e `planilha_disparos__Outubro26.md` (colunas Campanha, Canal, Horário, Lista/Base, Título, Link Copy) e a cadência da BFV/26 descrita em `00_ESTRATEGIA_COPY_SENIOR.md`, seção 4 (e-mail 07h, grupos 11h30 e 20h, segmentado 09h) |

**O que mudou em relação ao Desafio.** O Desafio rodou 5 noites com 8 a 10 disparos de grupo por dia no entorno da aula. A Black tem 22 dias de captação e uma live única. A cadência é: **e-mail às 07h, API segmentada às 09h, grupos às 11h30, 16h30 e 20h**. O terceiro disparo de grupo (16h30) é um acréscimo à cadência da BFV/26 (11h30 e 20h), com precedente nas planilhas do Desafio (16h30 nas planilhas de leads antigos). O dia 03/11 usa a grade completa, modelada em CP 28 a 40 de 01/10. Os mantras viram ritual de áudio de Grabovoi sem promessa.

## 1. Convenções

### 1.1 Prefixos de ID

| Prefixo | O que é | Arquivo |
|---|---|---|
| CP-BF-01 a CP-BF-63 | Grupo, captação (13/10 a 02/11). Sufixos -AL (alunas) e -DS (Desafio/Imersão) marcam variantes | `lembretes_de_grupo_captacao.md` |
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

1. **Máximo de uma API por pessoa por dia** (custo e fadiga). Quando duas janelas de API caem no mesmo horário, elas são para listas diferentes; conferir a exclusão antes de agendar.
2. **Três disparos de grupo por dia na captação**: 11h30 (A), 16h30 (B), 20h (C).
3. **Uma troca de nome e capa por estado** (seção 6). A troca de 19h59 é manual, como no Desafio.
4. Em 02/11 (feriado) e nos fins de semana, manter os três disparos e usar o tom das copys marcadas (CP-BF-15, 36, 39, 59, 60, 61).
5. Horários de e-mail e de API são de referência. Os de grupo são o contrato.

---

## 2. Captação: 13/10 a 02/11 (3 disparos de grupo por dia)

Todos os disparos de grupo vão para os três grupos no mesmo horário. Onde existe variante para o grupo de alunas (-AL) ou para o grupo Desafio/Imersão (-DS), ela vem na coluna ID. Grupo geral usa a copy-base.

| Data | Dia | Horário | Canal | Lista/base | ID | Objetivo |
|---|---|---|---|---|---|---|
| **FASE 1** | | | | | **Reconhecimento** | |
| 13/10 | Ter | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 13/10 | Ter | 09h00 | API | Lista 2026 e leads antigos que não reservaram, por segmento | API-BF-04.1 a 04.5 (-N, -D, -A), onda 1 | Convite indireto: aquecer e levar à reserva da vaga |
| 13/10 | Ter | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-01 (alunas: CP-BF-01-AL; Desafio/Imersão: CP-BF-01-DS) | Abriu. Perfil: Todos (frase-guia) |
| 13/10 | Ter | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-02 | O nome do padrão. Perfil: Não sei o que me trava |
| 13/10 | Ter | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-03 | A conta aparece. Perfil: Termostato Invisível |
| 14/10 | Qua | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 14/10 | Qua | 09h00 | API | Fez o diagnóstico e não reservou (exceto alunas) | API-BF-06.1 e 06.2 | Transformar o resultado do diagnóstico em reserva |
| 14/10 | Qua | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-04 | Eu sei e não faço. Perfil: Autossabotagem |
| 14/10 | Qua | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-05 (Desafio/Imersão: CP-BF-05-DS) | Curso na pasta. Perfil: Autossabotagem |
| 14/10 | Qua | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-06 | Eu termino. Perfil: Autossabotagem |
| 15/10 | Qui | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 15/10 | Qui | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-07 | Funcional, mas exausta. Perfil: Cobrança Que Você Só Faz Com Você |
| 15/10 | Qui | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-08 (alunas: CP-BF-08-AL) | Pago as contas, mas não sobra. Perfil: Termostato Invisível |
| 15/10 | Qui | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-09 | Anota a data. Perfil: Todos |
| 16/10 | Sex | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 16/10 | Sex | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-10 | Retrocedo. Perfil: Traumas Que Ainda Decidem |
| 16/10 | Sex | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-11 | Quem é a Dra. Perfil: Todos |
| 16/10 | Sex | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-12 | A promessa do ano. Perfil: Cobrança Que Você Só Faz Com Você |
| 17/10 | Sáb | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 17/10 | Sáb | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-13 | Ninguém cuida de mim. Perfil: Culpa de Querer Mais |
| 17/10 | Sáb | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-14 | A casa sobe junto. Perfil: Culpa de Querer Mais |
| 17/10 | Sáb | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-15 | Ritual da noite. Perfil: Todos |
| 18/10 | Dom | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 18/10 | Dom | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-16 | Não sei o que me trava. Perfil: Não sei o que me trava |
| 18/10 | Dom | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-17 | Qual é o seu?. Perfil: Os 5 perfis (enquete) |
| 18/10 | Dom | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-18 | Segunda eu começo. Perfil: Cobrança Que Você Só Faz Com Você |
| 19/10 | Seg | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 19/10 | Seg | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-19 (Desafio/Imersão: CP-BF-19-DS) | A conta dos 12 meses. Perfil: Termostato Invisível |
| 19/10 | Seg | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-20 | Você já sabe começar. Perfil: Culpa de Querer Mais |
| 19/10 | Seg | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-21 | A semana que vem. Perfil: Todos |
| **FASE 2** | | | | | **Prova e quebra de medo** | |
| 20/10 | Ter | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 20/10 | Ter | 09h00 | API | Quem não clicou na onda 1 | API-BF-04.1 a 04.5 (-N, -D, -A), onda 2 | Convite indireto, segunda tentativa |
| 20/10 | Ter | 10h00 | API | Reservou e não está em nenhum grupo | API-BF-R01 | Recuperação de grupo, mensagem 1 |
| 20/10 | Ter | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-22 (alunas: CP-BF-22-AL) | Terça é dia de aula. Perfil: Todos |
| 20/10 | Ter | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-23 | Já comprei e não tive resultado. Perfil: Autossabotagem |
| 20/10 | Ter | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-24 | Uma decisão só. Perfil: Todos (JTBD) |
| 20/10 | Ter | | Nota | | | Terça: aula do Clube. |
| 21/10 | Qua | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 21/10 | Qua | 09h00 | API | Fez o diagnóstico e não reservou (novos desde 14/10) | API-BF-06.1 e 06.2 | Reserva de quem fez o diagnóstico |
| 21/10 | Qua | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-25 | Depoimento 1. Perfil: Termostato Invisível |
| 21/10 | Qua | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-26 (Desafio/Imersão: CP-BF-26-DS) | A objeção do dinheiro. Perfil: Termostato Invisível |
| 21/10 | Qua | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-27 | 3 sinais do Termostato. Perfil: Termostato Invisível |
| 22/10 | Qui | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 22/10 | Qui | 09h00 | API | Alunas ativas do Clube | API-BF-05.1 (e 05.1V) | Golden Ticket: convite VIP |
| 22/10 | Qui | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-28 | Os 40 anos. Perfil: Traumas Que Ainda Decidem |
| 22/10 | Qui | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-29 (alunas: CP-BF-29-AL) | E se eu não conseguir assistir?. Perfil: Todos |
| 22/10 | Qui | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-30 | O depois. Perfil: Autossabotagem |
| 23/10 | Sex | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 23/10 | Sex | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-31 | Depoimento 2. Perfil: Autossabotagem |
| 23/10 | Sex | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-32 | O que entra 1: dinheiro. Perfil: Termostato Invisível |
| 23/10 | Sex | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-33 | Enquete: o que explicar primeiro?. Perfil: Todos |
| 24/10 | Sáb | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 24/10 | Sáb | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-34 | Descanso sem culpa. Perfil: Cobrança Que Você Só Faz Com Você |
| 24/10 | Sáb | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-35 | O que entra 2: emocional. Perfil: Traumas Que Ainda Decidem |
| 24/10 | Sáb | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-36 | Eu me escolho. Perfil: Culpa de Querer Mais |
| 25/10 | Dom | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 25/10 | Dom | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-37 | O que entra 3: carreira. Perfil: Culpa de Querer Mais |
| 25/10 | Dom | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-38 | 11 produtos é muito?. Perfil: Autossabotagem |
| 25/10 | Dom | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-39 | A casa cheia, você sozinha. Perfil: Culpa de Querer Mais |
| 26/10 | Seg | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 26/10 | Seg | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-40 (Desafio/Imersão: CP-BF-40-DS) | O custo de ficar parada. Perfil: Termostato Invisível |
| 26/10 | Seg | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-41 | Depoimento 3. Perfil: Culpa de Querer Mais |
| 26/10 | Seg | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-42 | Anota a data 2. Perfil: Todos |
| 27/10 | Ter | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 27/10 | Ter | 09h00 | API | Fez o diagnóstico e não reservou (novos desde 21/10) | API-BF-06.1 e 06.2 | Reserva de quem fez o diagnóstico |
| 27/10 | Ter | 10h00 | API | Reservou e não está em nenhum grupo | API-BF-R01 | Recuperação de grupo, mensagem 1 |
| 27/10 | Ter | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-43 (alunas: CP-BF-43-AL) | Você não é a única. Perfil: Todos |
| 27/10 | Ter | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-44 | E se não funcionar para mim?. Perfil: Todos |
| 27/10 | Ter | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-45 | Ritual da noite 2. Perfil: Todos |
| 27/10 | Ter | | Nota | | | Terça: aula do Clube. |
| **FASE 3** | | | | | **Antecipação** | |
| 28/10 | Qua | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 28/10 | Qua | 09h00 | API | Quem não clicou nas ondas 1 e 2 | API-BF-04.1 a 04.5 (-N, -D, -A), onda 3 | Convite indireto, terceira tentativa |
| 28/10 | Qua | 09h00 | API | Reservaram e não ativaram o lembrete | API-BF-07 | Salvar a data da live |
| 28/10 | Qua | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-46 (Desafio/Imersão: CP-BF-46-DS) | Salva a data. Perfil: Todos |
| 28/10 | Qua | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-47 | O que separar. Perfil: Todos |
| 28/10 | Qua | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-48 | O padrão vai tentar te tirar da live. Perfil: Autossabotagem |
| 29/10 | Qui | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 29/10 | Qui | 09h00 | API | Alunas que não ativaram o Golden Ticket | API-BF-05.2 | Golden Ticket: reforço |
| 29/10 | Qui | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-49 | O que vai acontecer na live. Perfil: Todos |
| 29/10 | Qui | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-50 | Segunda eu começo (encaminha). Perfil: Autossabotagem |
| 29/10 | Qui | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-51 | Falta o diagnóstico. Perfil: Todos (5 perfis) |
| 30/10 | Sex | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 30/10 | Sex | 09h00 | API | Reservaram e não fizeram o diagnóstico | API-BF-08 | Levar ao diagnóstico antes da live |
| 30/10 | Sex | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-52 | Ativa o lembrete. Perfil: Todos |
| 30/10 | Sex | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-53 (Desafio/Imersão: CP-BF-53-DS) | Enquete: o que você quer ouvir. Perfil: Todos |
| 30/10 | Sex | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-54 | Sexta: o depois. Perfil: Autossabotagem |
| 31/10 | Sáb | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 31/10 | Sáb | 10h00 | API | Reservou e não está em nenhum grupo | API-BF-R01 | Recuperação de grupo, mensagem 1 |
| 31/10 | Sáb | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-55 | O deserto. Perfil: Traumas Que Ainda Decidem |
| 31/10 | Sáb | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-56 (alunas: CP-BF-56-AL) | Depoimento 4. Perfil: Traumas Que Ainda Decidem |
| 31/10 | Sáb | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-57 | A última vez que eu recomeço. Perfil: Autossabotagem |
| 01/11 | Dom | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 01/11 | Dom | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-58 | Checklist da live. Perfil: Todos |
| 01/11 | Dom | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-59 | Se cobrar por não ter feito. Perfil: Cobrança Que Você Só Faz Com Você |
| 01/11 | Dom | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-60 | Ritual da noite 3. Perfil: Todos |
| 02/11 | Seg | 07h00 | E-mail | Lista do lançamento atual (referência) | Ver pasta `06_emails` | E-mail diário da captação |
| 02/11 | Seg | 09h00 | API | Reservaram | API-BF-09 | É amanhã (live em 03/11, 20h) |
| 02/11 | Seg | 09h00 | API | Alunas (ativaram e não ativaram, 2 textos) | API-BF-05.3 | Golden Ticket: última chamada |
| 02/11 | Seg | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-61 | É amanhã. Perfil: Todos |
| 02/11 | Seg | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-62 (alunas: CP-BF-62-AL; Desafio/Imersão: CP-BF-62-DS) | As 3 respostas. Perfil: Todos |
| 02/11 | Seg | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | CP-BF-63 (alunas: CP-BF-63-AL) | Quantas vezes. Perfil: Todos (frase-guia) |
| 02/11 | Seg | | Nota | | | Feriado (Finados): tom sóbrio. |

**Contagem da captação:** 63 disparos de grupo (21 dias x 3), 16 variantes de grupo (8 para alunas, 8 para Desafio/Imersão), 15 janelas de API programadas (mais os gatilhos contínuos da seção 5).


---

## 3. Dia da live: 03/11 (terça), grade completa

Modelo: CP 28 a 40 do dia 01/10 do Desafio. Texto: `dia_da_live_03_11.md`. Nas linhas de grupo, os grupos de alunas e de Desafio/Imersão recebem a variante (-AL ou -DS) quando existir.

| Data | Horário | Canal | Lista/base | ID | Objetivo |
|---|---|---|---|---|---|
| 03/11 | 06h00 | Wpp Grupos | Os três grupos | CP-BF-64 | Ritual da manhã (áudio de Grabovoi) |
| 03/11 | 07h00 | Wpp Grupos | Os três grupos | CP-BF-65 | É hoje, reação |
| 03/11 | 09h00 | API | Reservaram (A e N/D) | API-BF-10 e API-BF-10-A | É hoje, botão para a live |
| 03/11 | 09h00 | E-mail | Reservaram (referência) | Ver `06_emails` | É hoje |
| 03/11 | 09h00 | Wpp Grupos | Os três grupos | CP-BF-66 (alunas: CP-BF-66-AL) | Quem ainda não reservou |
| 03/11 | 11h30 | Wpp Grupos | Os três grupos | CP-BF-67 | Lembrete 1 + evento no SendFlow |
| 03/11 | 13h30 | Wpp Grupos | Os três grupos | CP-BF-68 (alunas: -AL; Desafio/Imersão: -DS) | Carta da Dra. |
| 03/11 | 15h00 | Wpp Grupos | Os três grupos | CP-BF-69 | Lembrete 2: o que acontece hoje |
| 03/11 | 15h00 | API | Reservaram que não clicaram às 09h | API-BF-11 | Lembrete com botão |
| 03/11 | 17h00 | Wpp Grupos | Os três grupos | CP-BF-70 | Antes de decidir |
| 03/11 | 19h00 | Wpp Grupos | Os três grupos | CP-BF-71 | Falta 1 hora |
| 03/11 | 19h00 | API | Quem não clicou antes | API-BF-12 | Falta 1 hora |
| 03/11 | 19h00 | API | Reservou e não entrou em grupo | API-BF-R03 | Recuperação de grupo, mensagem 3 |
| 03/11 | 19h50 | Wpp Grupos | Os três grupos | CP-BF-72 | Falta 10 min, com vídeo da Dra. |
| 03/11 | 19h50 | API | Quem não clicou antes | API-BF-13 | Falta 10 min |
| 03/11 | 19h59 | Wpp Grupos | Os três grupos | Trocar nome e capa: AO VIVO | Estado "ao vivo" |
| 03/11 | 20h00 | Wpp Grupos | Os três grupos | CP-BF-73 | Estou ao vivo |
| 03/11 | 20h00 | API | Reservaram | API-BF-14 | Estou ao vivo |
| 03/11 | 20h15 | Wpp Grupos | Os três grupos | CP-BF-74 | Cadê você? |
| 03/11 | 20h15 | API | Janela de 24 h | API-BF-15 | Cadê você? |
| 03/11 | 20h45 | Wpp Grupos | Os três grupos | CP-BF-75 | A melhor parte: a condição vai ser revelada |
| 03/11 | 20h45 | API | Janela de 24 h | API-BF-16 | A melhor parte |
| 03/11 | Manual (quando a Dra. revelar) | Wpp Grupos | Os três grupos | Trocar nome e capa: VAGAS ABERTAS | Estado "vagas abertas" |
| 03/11 | Manual | Wpp Grupos | Geral e Desafio/Imersão | CP-BF-76 e CP-BF-76-DS | Carrinho aberto, Lote Especial (não-alunas) |
| 03/11 | Manual | Wpp Grupos | Alunas | CP-BF-76-AL | Carrinho aberto, Lote Especial (alunas) |
| 03/11 | Manual | API | Reservaram (N e D / A) | API-BF-17 e API-BF-17-A | Carrinho aberto, Lote Especial |
| 03/11 | Manual | E-mail | Reservaram (referência) | Ver `06_emails` | Abertura de carrinho |
| 03/11 | 22h00 | Wpp Grupos | Geral e Desafio/Imersão (alunas: -AL) | CP-BF-77 (alunas: CP-BF-77-AL) | Ritual da noite + P.S. do carrinho |
| 03/11 | Contínuo | ManyChat | Quem comenta VITALÍCIA ou DIAGNÓSTICO | MC-BF-01 a B12, C01 a C03 | Ingresso, diagnóstico e reserva (antes de 20h) |
| 03/11 | A partir de 20h | ManyChat | Quem comenta VITALÍCIA | MC-BF-V01 a V03 | Fluxo pós-live (condição vigente) |


---

## 4. Pós-live

As datas de virada de lote e de fechamento ainda não existem (`[[PENDENTE: data do lote]]`, `[[PENDENTE: fechamento]]`). A tabela mostra o primeiro dia (04/11) com data fixa e o restante em dias relativos aos eventos E1 (fim do Lote Especial), E2 (fim do Primeiro Lote) e E3 (fechamento). Texto: `vagas_abertas_e_virada_de_lote.md`.

### 4.1 Dia seguinte à live (04/11)

| Data | Horário | Canal | Lista/base | ID | Objetivo |
|---|---|---|---|---|---|
| 04/11 | 07h00 | E-mail | Referência | Ver `06_emails` | Carrinho aberto |
| 04/11 | 09h00 | API | Reservaram que não compraram (N e D / A) | API-BF-V01 e API-BF-V01-A | A condição está aberta |
| 04/11 | 09h00 | API | Quem fez o diagnóstico e não comprou | API-BF-06.P1, depois P2 e P3 | Diagnóstico pós-live (não enviar a quem recebeu API-BF-V01) |
| 04/11 | 11h30 | Wpp Grupos | Os três grupos | CP-BF-V01 (alunas: -AL) | A condição está aberta, o que entra |
| 04/11 | 16h30 | Wpp Grupos | Os três grupos | CP-BF-V02 (alunas: -AL) | Quebra da objeção de dinheiro |
| 04/11 | 20h00 | Wpp Grupos | Os três grupos | CP-BF-V03 (alunas: -AL) | Antes de decidir, garantia |

### 4.2 Dias sem evento de lote

A cadência é a da captação: e-mail 07h; API 09h só nos dias-chave; grupos 11h30, 16h30 e 20h. Rotacionar CP-BF-V01 a V03 (04/11), depois V07 (Primeiro Lote) e V11 (Último Lote), acrescentando um `[[DEPOIMENTO REAL]]` por dia.

### 4.3 Dias de evento (modelo)

| Evento | Horário | Canal | Lista/base | ID | Objetivo |
|---|---|---|---|---|---|
| E1 (fim do Lote Especial), dia | 07h00 | E-mail | Referência | Ver `06_emails` | Último dia do Lote Especial |
| | 09h00 | API | Reservaram que não compraram | API-BF-V02 | Último dia do Lote Especial |
| | 11h30 | Wpp Grupos | Os três grupos | CP-BF-V04 (alunas: -AL) | Último dia do Lote Especial. Trocar nome do grupo: "Inscrições: Último dia" |
| | 16h30 | Wpp Grupos | Os três grupos | CP-BF-V05 (alunas: -AL) | Últimas horas (3 h antes do corte). Trocar nome: "Inscrições: Últimas horas" |
| | Hora do corte | Wpp Grupos | Os três grupos | CP-BF-V06 (alunas: -AL) | Virou: Primeiro Lote |
| | Hora do corte | API | Reservaram que não compraram | API-BF-V03 | Virou: Primeiro Lote |
| Entre E1 e E2 | Gatilho | API | Abriu checkout e não comprou | API-BF-C01 a C03 | Carrinho abandonado (automático) |
| | 16h30 | Wpp Grupos | Os três grupos | CP-BF-V07 (alunas: -AL) | Objeção "já comprei e não tive resultado" |
| E2 (fim do Primeiro Lote), dia | 09h00 | API | Reservaram que não compraram | API-BF-V04 | Último dia do Primeiro Lote |
| | 11h30 | Wpp Grupos | Os três grupos | CP-BF-V08 (alunas: -AL) | Último dia do Primeiro Lote |
| | 16h30 | Wpp Grupos | Os três grupos | CP-BF-V09 (alunas: -AL) | Últimas horas do Primeiro Lote |
| | Hora do corte | Wpp Grupos | Os três grupos | CP-BF-V10 (alunas: -AL) | Virou: Último Lote |
| | Hora do corte | API | Reservaram que não compraram | API-BF-V05 | Virou: Último Lote |
| Entre E2 e E3 | 16h30 | Wpp Grupos | Os três grupos | CP-BF-V11 (alunas: -AL) | Objeção "medo de não aplicar", trilha de entrada |
| E3 (fechamento), dia | 09h00 | API | Reservaram que não compraram | API-BF-V06 | Último dia |
| | 11h30 | Wpp Grupos | Os três grupos | CP-BF-V12 (alunas: -AL) | Último dia |
| | 3 h antes | Wpp Grupos | Os três grupos | CP-BF-V13 (alunas: -AL) | Últimas horas |
| | 1 h antes | Wpp Grupos | Os três grupos | CP-BF-V14 (alunas: -AL) | Última hora |
| | 1 h antes | API | Abriu checkout e não comprou | API-BF-V07 | Última hora |
| | Fechamento | Wpp Grupos | Os três grupos | CP-BF-V15 (alunas: -AL) | Encerrou. Trocar nome e capa: "Encerrado" |
| E3 + 1 dia | 11h30 | Wpp Grupos | Os três grupos | CP-BF-V16 (alunas: -AL) | Saída honrosa (só se houver lista de espera) |
| | 09h00 | API | Abriu checkout e não comprou | API-BF-V08 | Encerrou, lista de espera (só se houver) |

### 4.4 Alunas: golden ticket e condição própria

O Golden Ticket (`API-BF-05.x`, `CP-BF-GT01`) acontece antes da live, em 22/10, 29/10 e 02/11. Depois da live, as alunas passam a receber as mesmas peças de lote com o sufixo -AL e os preços `[[PREÇO LOTE ALUNAS]]`.

---

## 5. Gatilhos contínuos (por evento, sem data)

| Evento | Canal | ID | Quando |
|---|---|---|---|
| Entrou na lista (reservou) | API | API-BF-01 (-N, -D, -A) | Imediato |
| Reservou e não clicou no grupo | API | API-BF-02 (-N, -D, -A) | Algumas horas depois, e uma vez 24 h depois |
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

## 6. Troca de nome e capa dos grupos (disparo manual)

| Quando | Estado | Referência |
|---|---|---|
| 13/10, ao abrir | Captação | `grupos_descricao_e_grupo_cheio.md`, seção 1 |
| 03/11, 06h | Dia da live, antes de começar | idem |
| 03/11, 19h59 | Ao vivo | idem |
| 03/11, na abertura do carrinho | Vagas abertas | idem |
| Em cada virada de lote | Virada de lote | idem |
| Manhã de E3 | Último dia | idem |
| Últimas horas de E1, E2 e E3 | Últimas horas | idem |
| Fechamento | Encerrado | idem |


---

## Notas ao implementador

**Pendências que bloqueiam o agendamento**
1. `[[PENDENTE: data do lote]]` e `[[PENDENTE: fechamento]]`: a seção 4.3 fica em dias relativos até ser fechada. Prazo sugerido pela estratégia: 10/10.
2. Links: reserva da live, diagnóstico, live no YouTube, grupos por segmento, checkout por lote e segmento (seis), suporte.
3. Segmentação em DataCrazy/ListBoss: tags A, D e N, "reservou", "fez o diagnóstico", "aluna ativa", "abriu checkout".
4. `[[PENDENTE: contagem de alunas do Clube]]`: define o custo e o tamanho do grupo de alunas.
5. Aprovação dos templates de API na Meta: são dezenas de templates novos. Pedir aprovação com antecedência de pelo menos 7 dias do primeiro uso.
6. `[[DEPOIMENTO REAL]]`, áudio de Grabovoi, vídeo da Dra. (19h50) e artes (capas, Golden Ticket, ingresso).

**Decisões a validar**
1. **Terceiro disparo de grupo às 16h30.** A cadência da BFV/26 tem dois (11h30 e 20h). O pedido foi de três por dia; adotei 16h30 por haver precedente nas planilhas do Desafio. Se a equipe preferir 07h (ritual), mover os slots C de ritual (CP-BF-15, 45 e 60).
2. **Variantes por grupo.** O grupo geral usa a copy-base; alunas e Desafio/Imersão têm 8 variantes cada, em slots escolhidos pela diferença de público. Se a equipe quiser menos trabalho, usar a copy-base nos três grupos e as variantes só nos 4 slots de maior diferença (CP-BF-01, 22, 56 e 62).
3. **Onboarding.** Os gatilhos da planilha de Setembro do Desafio parecem trocados (ver `api_onboarding.md`). Adotei o que o texto pede.
4. **Quem fez Desafio/Imersão paga preço de não-alunas** até a equipe decidir o contrário.
5. **Ritual de Grabovoi** substitui o mantra, sem promessa de dinheiro. Se a Dra. não aprovar, apagar CP-BF-15, 45, 60, 64 e 77.
6. **Replay.** Nenhuma peça afirma ou nega replay.

**Testes A/B sugeridos**
1. Horário do slot B (16h30 contra 17h).
2. Slot C com ritual contra slot C com pergunta.
3. Primeira API de convite indireto às 09h contra 12h.
4. Dia 03/11: a ordem de CP-BF-68 (carta) e CP-BF-69 (o que acontece hoje).

**Dependências**
- Todos os arquivos desta pasta. Os e-mails equivalentes estão em `06_emails`.
- O comercial 1 a 1 (`09_comercial_datacrazy`) entra a partir de 03/11 e usa os mesmos lotes.

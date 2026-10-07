# Cronograma de disparos: WhatsApp (grupos) e API

| Campo | Conteúdo |
|---|---|
| **Peça** | Cronograma dia a dia de 13/10 a 03/11 e do pós-live, com **2 disparos de grupo por dia (11h30 e 20h)** da série canônica da pasta 13 (cp-00a a cp-42 para os grupos, ca-01 a ca-06 para o grupo de alunas), data, horário, canal, lista/base, ID da copy e objetivo. As exceções são 13/10 (abertura, com 09h30 e 16h30 a mais) e 03/11 (dia da live). O terceiro slot (16h30) é banco de reserva e fica fora do calendário. Cobre grupos de WhatsApp, API oficial e ManyChat (as peças de e-mail aparecem só como referência, pois são da pasta `06_emails` e da pasta 13) |
| **Canal** | WhatsApp (grupos), WhatsApp API oficial, ManyChat (Instagram). E-mail como referência |
| **Público** | Três grupos: geral (reservaram o lugar), alunas do Clube, quem fez Desafio/Imersão/Aulão sem Clube. Em API: Lista 2026, leads antigos, reservaram, fizeram o diagnóstico, alunas ativas |
| **Momento** | 13/10 a 03/11 (captação), 03/11 (live), pós-live até o fechamento (datas `[[PENDENTE: data do lote]]` e `[[PENDENTE: fechamento]]`) |
| **Objetivo** | Dar ao implementador a ordem exata de cada disparo, para agendar sem decisão adicional e sem duas mensagens do mesmo assunto, no mesmo canal, para o mesmo público no mesmo dia. Cada disparo tem ID e o ID aponta o arquivo onde está o texto |
| **Consciência** | 1 a 3 na captação do grupo geral; 4 nas alunas; 4 a 5 em quem viveu o método; 5 no pós-live |
| **Modelo no Desafio** | planilhas de disparos de setembro e outubro do Desafio (colunas Campanha, Canal, Horário, Lista/Base, Título, Link Copy) e a cadência da BFV/26 descrita em `00_ESTRATEGIA_COPY_SENIOR.md`, seção 4 (e-mail 07h, grupos 11h30 e 20h, segmentado 09h) |

**O que mudou em relação ao Desafio.** O Desafio rodou 5 noites com 8 a 10 disparos de grupo por dia no entorno da aula. A Black tem 21 dias de captação (13/10 a 02/11) e uma live única. A cadência canônica (modelo BFV/26) é: **e-mail às 07h (09h para segmentos), API às 09h, grupos de WhatsApp às 11h30 e às 20h**, todos os dias. As séries canônicas de captação por grupo, API e e-mail para o grupo geral, as alunas e os demais alunos estão na pasta `13_modelo_dr_joao`; os arquivos equivalentes desta pasta (`lembretes_de_grupo_captacao.md`, `api_onboarding.md`, a versão D do `api_convite_indireto_e_aquecimento.md` e o Golden Ticket de `convite_vip_alunas_e_quiz.md`) são **banco de reserva**. Por isso este cronograma agenda a série canônica e só encaixa as peças desta pasta nos dias e horários em que elas não repetem data, hora nem assunto para o mesmo público. O dia 03/11 é a exceção à cadência de 2 por dia e usa uma grade estendida e executável, modelada em CP 28 a 40 de 01/10 e alinhada ao roteiro da live. Os mantras viram ritual de áudio de Grabovoi sem promessa.

## 1. Convenções

### 1.1 Prefixos de ID

| Prefixo | O que é | Arquivo |
|---|---|---|
| cp-00a, cp-00b, cp-01 a cp-42 | Grupo, captação (canônica): 13/10 a 02/11, 11h30 e 20h, mais 09h30 e 16h30 em 13/10 | `13_modelo_dr_joao/wpp_captacao.md` |
| ca-01 a ca-06 | Grupo de alunas, captação (canônica): 27/10, 29/10, 31/10, 02/11 (11h30) e 03/11 (11h30 e 19h) | `13_modelo_dr_joao/wpp_grupo_alunas_captacao.md` |
| api-alunas-01 a 08 | API de captação para alunas (canônica): 15/10, 21/10, 23/10, 27/10, 02/11 e 03/11 às 09h; 29/10 e 31/10 às 20h | `13_modelo_dr_joao/api_alunas_captacao.md` |
| api-viveu-01 a 08 | API de captação para quem viveu o método, sem Clube (canônica): 13/10, 16/10, 20/10, 23/10, 27/10, 30/10, 02/11 e 03/11, às 09h | `13_modelo_dr_joao/api_demais_alunos_captacao.md` |
| api-onb-01 a 04 (e versão alunas) | API de onboarding (canônica), por gatilho | `13_modelo_dr_joao/api_onboarding.md` |
| em-alunas-01 a 08, em-onb-01 a 03 | E-mails canônicos (referência) | `13_modelo_dr_joao/email_alunas_captacao.md`, `email_onboarding.md` |
| CP-BF-01 a CP-BF-63 | Grupo, banco de reserva da captação (13/10 a 02/11). Sufixos -AL (alunas) e -DS (Desafio/Imersão) marcam variantes. Nenhum está agendado | `lembretes_de_grupo_captacao.md` |
| CP-BF-64 a CP-BF-77 | Grupo, dia da live (03/11) | `dia_da_live_03_11.md` |
| CP-BF-V01 a CP-BF-V16 | Grupo, pós-live (carrinho aberto, virada de lote, fechamento) | `vagas_abertas_e_virada_de_lote.md` |
| CP-BF-GT01 | Grupo, aviso do Golden Ticket (opcional) | `convite_vip_alunas_e_quiz.md` |
| API-BF-01 a 03 (-N, -D, -A) | API de onboarding (banco de reserva; a canônica é api-onb) | `api_onboarding.md` |
| API-BF-04.1 a 04.5 (-N, -A agendadas; -D em reserva) | API de convite indireto e aquecimento | `api_convite_indireto_e_aquecimento.md` |
| API-BF-05.x | API do Golden Ticket (alunas, opcional) | `convite_vip_alunas_e_quiz.md` |
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
| Grupos geral, Desafio/Imersão e alunas | Os três grupos de WhatsApp (rodízio SendFlow). Mesmo horário e mesma mensagem canônica, exceto nas cinco datas em que o grupo de alunas tem a sua (ca-01 a ca-06) |
| Lista 2026 e leads antigos | Quem ainda não reservou o lugar (alvo do convite indireto) |
| Reservaram | Quem preencheu a página de captura (alvo do onboarding e dos lembretes) |
| Fez o diagnóstico e não reservou | Quem fez o diagnóstico dos 5 padrões e não reservou o lugar |
| Alunas ativas do Clube | Tag de aluna ativa (alvo da série canônica de alunas e do Golden Ticket opcional) |
| Abriu checkout e não comprou | Evento de abandono de carrinho (pós-live) |

### 1.3 Regras de cadência

1. **Dois disparos de grupo por dia, todos os dias, na captação e no pós-live**: 11h30 (slot A) e 20h (slot C). Exceções: 13/10 (cp-00a às 09h30 e cp-00b às 16h30, por decisão da revisão final, além de cp-01 e cp-02) e 03/11. O slot de 16h30 não existe nos demais dias.
2. **Máximo de uma API por pessoa por dia** (custo e fadiga). A série canônica tem prioridade: nos dias em que ela envia para a lista A ou D, a API desta pasta para essa lista não sai (a exceção é 03/11, seção 3). Quando duas janelas de API caem no mesmo horário, elas são para listas diferentes; conferir a exclusão antes de agendar.
3. **Um disparo de WhatsApp por minuto.** Uma campanha de grupo com mais de um texto (geral, alunas, Desafio/Imersão) conta como um disparo, porque cada texto vai para um grupo diferente. Campanhas de API no mesmo horário saem com 5 a 10 minutos de diferença: a série canônica às 09h00, as demais depois. As duas APIs canônicas das alunas que fixam 20h (29/10 e 31/10) saem às 20h05, 5 minutos depois do grupo.
4. **Mesmo assunto, mesmo público, mesmo dia, mesmo canal: nunca.** O mesmo assunto em canais diferentes (por exemplo API e e-mail canônicos das alunas) é um toque em dois canais, como no modelo `[[CONFIRMAR: aceitar e-mail e API da mesma aluna no mesmo dia ou escalonar por canal]]`.
5. **Troca de nome e capa é manual e tem janela própria** (início e fim), de 10 a 15 minutos, feita por duas pessoas, e nunca no minuto de um disparo (seção 6).
6. **Feriados e fins de semana mantêm os dois disparos.** Em 02/11 (Finados) o tom é sóbrio: sem exclamação, sem emoji festivo, sem "última chamada" (cp-41, cp-42, ca-04, api-alunas-07, api-viveu-07, API-BF-09).
7. **Horários de e-mail e de API são de referência. Os de grupo são o contrato.**
8. **Comercial em modo escuta de 20h a 22h no dia 03/11** (seção 3): nenhum disparo ativo de venda enquanto a live roda.
9. **Golden Ticket é opcional** e só sai se a condição existir `[[CONFIRMAR: condição do Golden Ticket]]`. Suas datas (22/10, 26/10 e 01/11) foram escolhidas para não coincidir com nenhuma das datas da série canônica de alunas.

---

## 2. Captação: 13/10 a 02/11 (2 disparos de grupo por dia: 11h30 e 20h)

Os disparos de grupo vão para os três grupos no mesmo horário, com a mensagem canônica indicada na coluna ID. No grupo de alunas, nas cinco datas em que existe mensagem canônica própria (27/10, 29/10, 31/10, 02/11 e 03/11), ela sai no lugar da mensagem do grupo geral (linha separada). Nenhuma peça de `lembretes_de_grupo_captacao.md` entra no calendário: ficam em reserva (seção 2.1).

| Data | Dia | Horário | Canal | Lista/base | ID | Objetivo |
|---|---|---|---|---|---|---|
| **FASE 1** | | | | | **Reconhecimento** | |
| 13/10 | Ter | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 13/10 | Ter | 09h00 | API | Quem viveu o método, sem Clube, que ainda não reservou | api-viveu-01 (canônica, `13_modelo_dr_joao/api_demais_alunos_captacao.md`) | Uma decisão, um único pagamento. Em 13/10 vale só esta série para a base D (a versão D do convite indireto está em reserva) |
| 13/10 | Ter | 09h05 | API | Lista 2026 e leads antigos que não reservaram (N) | API-BF-04.1 a 04.5-N, onda 1 | Convite indireto: aquecer e levar à reserva do lugar |
| 13/10 | Ter | 09h10 | API | Alunas que não reservaram (A) | API-BF-04.1 a 04.5-A, onda 1 | Convite indireto para alunas (o Golden Ticket opcional só começa em 22/10) |
| 13/10 | Ter | 09h15 a 09h25 | Grupos (manual) | Todos os grupos | Trocar nome e capa para o estado Captação | Janela de 10 min, antes do cp-00a (seção 6) |
| 13/10 | Ter | 09h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-00a (vídeo de abertura, `13_modelo_dr_joao/wpp_captacao.md`) | Agora é oficial: a Dra. abre o grupo e convida para a live |
| 13/10 | Ter | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-01 (`13_modelo_dr_joao/wpp_captacao.md`) | A lista está aberta. Perfil: Todos (frase-guia) |
| 13/10 | Ter | 16h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-00b (depoimento, `13_modelo_dr_joao/wpp_captacao.md`) | Único disparo de 16h30 do calendário: depoimento de abertura (decisão da revisão final) |
| 13/10 | Ter | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-02 | Imagina uma decisão que você só toma uma vez. Perfil: Todos (JTBD) |
| 14/10 | Qua | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 14/10 | Qua | 09h00 | API | Fez o diagnóstico e não reservou (exceto alunas) | API-BF-06.1 e 06.2 | Transformar o resultado do diagnóstico em reserva |
| 14/10 | Qua | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-03 | Eu sei o que fazer e não faço. Perfil: Autossabotagem |
| 14/10 | Qua | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-04 | E se fosse a última vez que você recomeça? Perfil: Autossabotagem |
| 15/10 | Qui | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 15/10 | Qui | 09h00 | API | Alunas (que ainda não reservaram) | api-alunas-01 (canônica, `13_modelo_dr_joao/api_alunas_captacao.md`) | Aluna do Clube: a condição própria. Botão Reservar minha condição |
| 15/10 | Qui | 09h00 | E-mail (referência) | Alunas | em-alunas-01 (`13_modelo_dr_joao/email_alunas_captacao.md`) | Mesmo assunto em dois canais, como no modelo `[[CONFIRMAR: aceitar e-mail e API da mesma aluna no mesmo dia ou escalonar por canal]]` |
| 15/10 | Qui | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-05 | Quando entra dinheiro a mais, aparece uma conta. Perfil: Termostato Invisível |
| 15/10 | Qui | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-06 | O depois não espera ninguém. Perfil: Autossabotagem |
| 16/10 | Sex | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 16/10 | Sex | 09h00 | API | Quem viveu o método, sem Clube, que ainda não reservou | api-viveu-02 (canônica, `13_modelo_dr_joao/api_demais_alunos_captacao.md`) | Tudo o que eu construí, em uma decisão só |
| 16/10 | Sex | 09h00 | E-mail (referência) | Quem viveu o método, sem Clube | SD-01 (`06_emails/segmentados_09h.md`) | Continuação do evento; mesmo toque em dois canais |
| 16/10 | Sex | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-07 | Funcional, mas exausta por dentro. Perfil: Cobrança Que Você Só Faz Com Você |
| 16/10 | Sex | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-08 | Uma única decisão, acesso para sempre. Perfil: Todos |
| 17/10 | Sáb | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 17/10 | Sáb | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-09 | Depoimento. Perfil: Todos |
| 17/10 | Sáb | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-10 | O dia em que você vai querer desistir. Perfil: Autossabotagem |
| 18/10 | Dom | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 18/10 | Dom | 09h00 | API | Alunas que não clicaram na onda 1 (A) | API-BF-04.1 a 04.5-A, onda 2 | Convite indireto, segunda tentativa (movida de 20/10 para não coincidir com o e-mail canônico das alunas) |
| 18/10 | Dom | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-11 | Retrocedo a cada passo. Perfil: Traumas Que Ainda Decidem |
| 18/10 | Dom | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-12 | Quanto você ainda gastaria recomeçando. Perfil: Termostato Invisível |
| 19/10 | Seg | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 19/10 | Seg | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-13 | Depoimento. Perfil: Todos |
| 19/10 | Seg | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-14 | Esta condição não se repete. Perfil: Todos |
| **FASE 2** | | | | | **Prova e quebra de medo** | |
| 20/10 | Ter | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 20/10 | Ter | 09h00 | API | Quem viveu o método, sem Clube, que ainda não reservou | api-viveu-03 (canônica, `13_modelo_dr_joao/api_demais_alunos_captacao.md`) | O Clube e 11 produtos de uma vez. Lote Especial só ao vivo `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]` |
| 20/10 | Ter | 09h00 | E-mail (referência) | Alunas | em-alunas-02 (`13_modelo_dr_joao/email_alunas_captacao.md`) | Condição de aluna |
| 20/10 | Ter | 09h00 | E-mail (referência) | Quem viveu o método, sem Clube | SD-02 (`06_emails/segmentados_09h.md`) | Não trave o processo |
| 20/10 | Ter | 09h05 | API | Quem não clicou na onda 1 (N) | API-BF-04.1 a 04.5-N, onda 2 | Convite indireto, segunda tentativa |
| 20/10 | Ter | 10h00 | API | Reservou e não está em nenhum grupo (mais de 48 h depois do cadastro, sem outra API no dia) | API-BF-R01 | Recuperação de grupo, mensagem 1 |
| 20/10 | Ter | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-15 | Cuido de todo mundo, mas ninguém cuida de mim. Perfil: Culpa de Querer Mais |
| 20/10 | Ter | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-16 | Acesso quando chegar a hora certa. Perfil: Todos |
| 20/10 | Ter |  | Nota |  |  | Terça: aula do Clube. |
| 21/10 | Qua | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 21/10 | Qua | 09h00 | API | Alunas (que ainda não reservaram) | api-alunas-02 (canônica, `13_modelo_dr_joao/api_alunas_captacao.md`) | Eu preparei uma condição para as alunas |
| 21/10 | Qua | 09h05 | API | Fez o diagnóstico e não reservou (novos desde 14/10, exceto alunas) | API-BF-06.1 e 06.2 | Reserva de quem fez o diagnóstico |
| 21/10 | Qua | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-17 | O que só se entende na prática. Perfil: Todos |
| 21/10 | Qua | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-18 | Chega de montar a mudança produto por produto. Perfil: Todos |
| 22/10 | Qui | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 22/10 | Qui | 09h00 | API | Alunas ativas do Clube | API-BF-05.1 (e 05.1V) | OPCIONAL (só se a condição do Golden Ticket existir) Golden Ticket: convite VIP |
| 22/10 | Qui | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-19 | Não espere a próxima crise. Perfil: Autossabotagem |
| 22/10 | Qui | 11h30 | Wpp Grupos | Grupo de alunas | CP-BF-GT01 (no lugar do cp-19 só nesse grupo) | OPCIONAL (só se a condição do Golden Ticket existir) Golden Ticket: aviso no grupo (ver API-BF-05.1) |
| 22/10 | Qui | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-20 | O processo não termina quando um produto acaba. Perfil: Todos |
| 23/10 | Sex | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 23/10 | Sex | 09h00 | API | Alunas (que ainda não reservaram) | api-alunas-03 (canônica, `13_modelo_dr_joao/api_alunas_captacao.md`) | Eu quero que você pare de recomeçar |
| 23/10 | Sex | 09h00 | E-mail (referência) | Alunas | em-alunas-03 (`13_modelo_dr_joao/email_alunas_captacao.md`) | Mesmo assunto em dois canais |
| 23/10 | Sex | 09h00 | E-mail (referência) | Quem viveu o método, sem Clube | SD-03 (`06_emails/segmentados_09h.md`) | O que ficou na gaveta |
| 23/10 | Sex | 09h05 | API | Quem viveu o método, sem Clube, que ainda não reservou | api-viveu-04 (canônica, `13_modelo_dr_joao/api_demais_alunos_captacao.md`) | Quem estiver comigo ao vivo tem o Lote Especial |
| 23/10 | Sex | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-21 | Qual produto você escolheria. Perfil: Todos |
| 23/10 | Sex | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-22 | Já comprei e não consegui colocar em prática. Perfil: Autossabotagem |
| 24/10 | Sáb | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 24/10 | Sáb | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-23 | O acesso vitalício não fica preso ao dia da entrada. Perfil: Todos |
| 24/10 | Sáb | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-24 | Qual foi a última vez que você se escolheu. Perfil: Culpa de Querer Mais |
| 25/10 | Dom | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 25/10 | Dom | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-25 | Uma oportunidade para ter tudo, de uma vez. Perfil: Todos |
| 25/10 | Dom | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-26 | Quanto custa continuar no mesmo lugar. Perfil: Termostato Invisível |
| 26/10 | Seg | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 26/10 | Seg | 09h00 | API | Alunas ativas do Clube | API-BF-05.2 | OPCIONAL (só se a condição do Golden Ticket existir) Golden Ticket: reforço (movido de 29/10 para não coincidir com a série canônica) |
| 26/10 | Seg | 09h05 | API | Fez o diagnóstico e não reservou (novos desde 21/10, exceto alunas) | API-BF-06.1 e 06.2 | Reserva de quem fez o diagnóstico (movida de 27/10 para não coincidir com a API canônica de D) |
| 26/10 | Seg | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-27 | Depoimento. Perfil: Todos |
| 26/10 | Seg | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-28 | O deserto. Perfil: Traumas Que Ainda Decidem |
| 27/10 | Ter | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 27/10 | Ter | 09h00 | API | Alunas (que ainda não reservaram) | api-alunas-04 (canônica, `13_modelo_dr_joao/api_alunas_captacao.md`) | Falta 1 semana para a condição de aluna |
| 27/10 | Ter | 09h00 | E-mail (referência) | Alunas | em-alunas-04 (`13_modelo_dr_joao/email_alunas_captacao.md`) | Mesmo assunto em dois canais |
| 27/10 | Ter | 09h00 | E-mail (referência) | Quem viveu o método, sem Clube | SD-04 (`06_emails/segmentados_09h.md`) | Você aplicou sozinha? |
| 27/10 | Ter | 09h05 | API | Quem viveu o método, sem Clube, que ainda não reservou | api-viveu-05 (canônica, `13_modelo_dr_joao/api_demais_alunos_captacao.md`) | O que o Clube Secreto nunca fez antes |
| 27/10 | Ter | 10h00 | API | Reservou e não está em nenhum grupo (mais de 48 h depois do cadastro, sem outra API no dia) | API-BF-R01 | Recuperação de grupo, mensagem 1 |
| 27/10 | Ter | 11h30 | Wpp Grupos | Grupos geral e Desafio/Imersão | cp-29 | Terça é dia de aula no Clube. Perfil: Todos |
| 27/10 | Ter | 11h30 | Wpp Grupos | Grupo de alunas | ca-01 (`13_modelo_dr_joao/wpp_grupo_alunas_captacao.md`, no lugar do cp-29 só nesse grupo) | Alunas: condição só de vocês |
| 27/10 | Ter | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-30 | E se não funcionar para mim? Perfil: Todos |
| 27/10 | Ter |  | Nota |  |  | Terça: aula do Clube. |
| **FASE 3** | | | | | **Antecipação** | |
| 28/10 | Qua | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 28/10 | Qua | 09h00 | API | Quem não clicou nas ondas anteriores (N) | API-BF-04.1 a 04.5-N, onda 3 | Convite indireto, terceira tentativa |
| 28/10 | Qua | 09h05 | API | Alunas que não clicaram nas ondas anteriores (A) | API-BF-04.1 a 04.5-A, onda 3 | Convite indireto, terceira tentativa |
| 28/10 | Qua | 09h10 | API | Reservaram e não ativaram o lembrete | API-BF-07 | Salvar a data da live |
| 28/10 | Qua | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-31 | A live já tem data. Perfil: Todos |
| 28/10 | Qua | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-32 | Presta atenção: o padrão tenta te tirar da live. Perfil: Autossabotagem |
| 29/10 | Qui | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 29/10 | Qui | 09h00 | E-mail (referência) | Alunas | em-alunas-05 (`13_modelo_dr_joao/email_alunas_captacao.md`) | Mesmo assunto da API das 20h05 |
| 29/10 | Qui | 11h30 | Wpp Grupos | Grupos geral e Desafio/Imersão | cp-33 | O que vai acontecer na live. Perfil: Todos |
| 29/10 | Qui | 11h30 | Wpp Grupos | Grupo de alunas | ca-02 (`13_modelo_dr_joao/wpp_grupo_alunas_captacao.md`, no lugar do cp-33 só nesse grupo) | Alunas: vocês já escolheram o Clube |
| 29/10 | Qui | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-34 | Falta o diagnóstico. Perfil: Todos (5 perfis) |
| 29/10 | Qui | 20h05 | API | Alunas (que ainda não reservaram) | api-alunas-05 (canônica, `13_modelo_dr_joao/api_alunas_captacao.md`) | Vou quebrar uma regra da Black com vocês (a série canônica fixa 20h; sai 5 minutos depois do grupo) |
| 30/10 | Sex | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 30/10 | Sex | 09h00 | API | Quem viveu o método, sem Clube, que ainda não reservou | api-viveu-06 (canônica, `13_modelo_dr_joao/api_demais_alunos_captacao.md`) | O depois |
| 30/10 | Sex | 09h00 | E-mail (referência) | Quem viveu o método, sem Clube | SD-05 (`06_emails/segmentados_09h.md`) | O que o Clube faz que um evento não faz |
| 30/10 | Sex | 09h10 | API | Reservaram e não fizeram o diagnóstico | API-BF-08 | Levar ao diagnóstico antes da live |
| 30/10 | Sex | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-35 | Dois toques e você não perde a live. Perfil: Todos |
| 30/10 | Sex | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-36 | Depoimento. Perfil: Todos |
| 31/10 | Sáb | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 31/10 | Sáb | 09h00 | E-mail (referência) | Alunas | em-alunas-06 (`13_modelo_dr_joao/email_alunas_captacao.md`) | Mesmo assunto da API das 20h05 |
| 31/10 | Sáb | 10h00 | API | Reservou e não está em nenhum grupo (mais de 48 h depois do cadastro, sem outra API no dia) | API-BF-R01 | Recuperação de grupo, mensagem 1 |
| 31/10 | Sáb | 11h30 | Wpp Grupos | Grupos geral e Desafio/Imersão | cp-37 | Você ainda não viu tudo. Perfil: Todos |
| 31/10 | Sáb | 11h30 | Wpp Grupos | Grupo de alunas | ca-03 (`13_modelo_dr_joao/wpp_grupo_alunas_captacao.md`, no lugar do cp-37 só nesse grupo) | Alunas: o acesso ao Clube tem prazo, ou tinha |
| 31/10 | Sáb | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-38 | Papel e caneta: a última vez que eu recomeço. Perfil: Autossabotagem |
| 31/10 | Sáb | 20h05 | API | Alunas (que ainda não reservaram) | api-alunas-06 (canônica, `13_modelo_dr_joao/api_alunas_captacao.md`) | Uma condição que eu conto uma vez, ao vivo (a série canônica fixa 20h; sai 5 minutos depois do grupo) |
| 01/11 | Dom | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 01/11 | Dom | 09h00 | API | Alunas ativas do Clube | API-BF-05.3 | OPCIONAL (só se a condição do Golden Ticket existir) Golden Ticket: último aviso (movido de 02/11 para dar o dia à série canônica) |
| 01/11 | Dom | 09h00 | E-mail (referência) | Quem viveu o método, sem Clube | SD-06 (`06_emails/segmentados_09h.md`) | A decisão que ficou aberta |
| 01/11 | Dom | 11h30 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-39 | Tudo o que entra, em um lugar só. Perfil: Todos |
| 01/11 | Dom | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-40 | Checklist para a live. Perfil: Todos |
| 02/11 | Seg | 07h00 | E-mail | Lista do lançamento atual (referência; as alunas saem do e-mail geral nas datas do e-mail canônico delas) | Ver pasta `06_emails` | E-mail diário da captação |
| 02/11 | Seg | 09h00 | API | Alunas (que ainda não reservaram) | api-alunas-07 (canônica, `13_modelo_dr_joao/api_alunas_captacao.md`) | Amanhã eu abro a condição das alunas. Sem pressa hoje (tom sóbrio) |
| 02/11 | Seg | 09h00 | E-mail (referência) | Alunas | em-alunas-07 (`13_modelo_dr_joao/email_alunas_captacao.md`) | Mesmo assunto em dois canais (tom sóbrio) |
| 02/11 | Seg | 09h05 | API | Quem viveu o método, sem Clube, que ainda não reservou | api-viveu-07 (canônica, `13_modelo_dr_joao/api_demais_alunos_captacao.md`) | Amanhã, às 20h (tom sóbrio) |
| 02/11 | Seg | 09h10 | API | Reservaram, exceto alunas ativas (elas recebem api-alunas-07) | API-BF-09 | É amanhã (live em 03/11, 20h) |
| 02/11 | Seg | 11h30 | Wpp Grupos | Grupos geral e Desafio/Imersão | cp-41 | Finados: um dia mais quieto. Perfil: Todos (tom sóbrio) |
| 02/11 | Seg | 11h30 | Wpp Grupos | Grupo de alunas | ca-04 (`13_modelo_dr_joao/wpp_grupo_alunas_captacao.md`, no lugar do cp-41 só nesse grupo) | Alunas: amanhã, 20h (tom sóbrio) |
| 02/11 | Seg | 20h00 | Wpp Grupos | Grupos geral, Desafio/Imersão e alunas | cp-42 | A primeira pergunta da live. Perfil: Todos (frase-guia) |
| 02/11 | Seg |  | Nota |  |  | Feriado (Finados): tom sóbrio. |

**Contagem da captação:** 42 disparos de grupo canônicos (21 dias x 2: cp-01 a cp-42) mais cp-00a e cp-00b em 13/10; 4 disparos do grupo de alunas que substituem o do grupo geral na captação (ca-01 a ca-04: 27/10, 29/10, 31/10 e 02/11) e 2 em 03/11 (ca-05 às 11h30 e ca-06 às 19h, seção 3); 1 substituição opcional (CP-BF-GT01, 22/10). API: 8 canônicas de alunas (api-alunas-01 a 08), 8 canônicas de quem viveu o método (api-viveu-01 a 08) e 18 janelas desta pasta (convite indireto N e A em 3 ondas cada: 6; diagnóstico 06.1 e 06.2: 3; API-BF-07, 08 e 09: 3; recuperação R01: 3; Golden Ticket opcional: 3), mais os gatilhos contínuos da seção 5.

### 2.1 Reserva: fora do calendário

**RESERVA: não agendar.** As 63 copys de `lembretes_de_grupo_captacao.md` (e as 16 variantes -AL e -DS), a versão D do convite indireto (API-BF-04.x-D), as APIs de onboarding API-BF-01 a 03 e o Golden Ticket (se a condição não existir) continuam inteiras como banco. Usos permitidos: teste A/B contra a mensagem canônica do mesmo dia e do mesmo horário (metade do rodízio recebe cada texto, a coluna "Canônica no mesmo horário" da seção 2 de `lembretes_de_grupo_captacao.md` indica o par), troca de emergência e reforço de um grupo que esfriou. Nunca como terceiro disparo do dia, nunca no grupo de alunas nas cinco datas da série ca e nunca para a mesma pessoa duas vezes no mesmo assunto.

---

## 3. Dia da live: 03/11 (terça), grade completa e executável

Modelo: CP 28 a 40 do dia 01/10 do Desafio, alinhado ao roteiro da live (`08_live_e_pitch/roteiro_live_de_revelacao.md`): sala aberta às 19h45, live às 20h, preço por volta de 21h09, link do checkout por volta de 21h28, fim por volta de 21h56. Texto: `dia_da_live_03_11.md`. Nas linhas de grupo, os grupos de alunas e de Desafio/Imersão recebem a variante (-AL ou -DS) quando existir.

Regras de execução desta grade: um disparo de WhatsApp por minuto; cada troca de nome e capa tem janela com início e fim e não coincide com nenhum disparo (05h45 a 05h55, 19h30 a 19h45 e 21h35 a 21h50); comercial em modo escuta das 20h às 22h; o dia 03/11 é a exceção à regra de uma API por pessoa por dia. Os horários a partir de 20h valem se a live começar às 20h.

| Data | Horário | Canal | Lista/base | ID | Objetivo |
|---|---|---|---|---|---|
| 03/11 | 05:45 a 05:55 | Grupos (manual) | Todos os grupos | Trocar nome e capa para "É HOJE, 20H" | Janela de 10 min, antes do CP-BF-64 |
| 03/11 | 06:00 | Grupos | Todos os grupos | CP-BF-64 | Ritual da manhã (áudio de Grabovoi) |
| 03/11 | 07:00 | Grupos | Todos os grupos | CP-BF-65 | É hoje, reação |
| 03/11 | 09:00 | E-mail (referência) | Reservaram e alunas | `06_emails` e em-alunas-08 (`13_modelo_dr_joao/email_alunas_captacao.md`) | É hoje |
| 03/11 | 09:00 | API | Alunas que ainda não reservaram | api-alunas-08 (canônica, `13_modelo_dr_joao/api_alunas_captacao.md`) | É hoje: a condição das alunas do Clube |
| 03/11 | 09:05 | API | Quem viveu o método, sem Clube, que ainda não reservou | api-viveu-08 (canônica, `13_modelo_dr_joao/api_demais_alunos_captacao.md`) | É hoje: Lote Especial ao vivo |
| 03/11 | 09:10 | API | Reservaram (N e D) | API-BF-10 | É hoje, botão para a live |
| 03/11 | 09:15 | API | Reservaram (A) | API-BF-10-A | É hoje, alunas |
| 03/11 | 09:20 | Grupos | Grupos geral e Desafio/Imersão | CP-BF-66 | Quem ainda não reservou (o grupo de alunas segue com ca-05 às 11:30; o CP-BF-66-AL fica em reserva) |
| 03/11 | 11:30 | Grupos | Grupos geral e Desafio/Imersão | CP-BF-67 | Lembrete 1 + evento (SendFlow). Slot A canônico |
| 03/11 | 11:30 | Grupos | Grupo de alunas | ca-05 (`13_modelo_dr_joao/wpp_grupo_alunas_captacao.md`, no lugar do CP-BF-67 só nesse grupo) | Chegou o dia, aluna do Clube. Slot A canônico |
| 03/11 | 13:30 | Grupos | Cada grupo | CP-BF-68 (geral), CP-BF-68-AL (alunas) e CP-BF-68-DS (Desafio/Imersão) | Carta da Dra. |
| 03/11 | 15:00 | Grupos | Todos os grupos | CP-BF-69 | Lembrete 2: o que acontece hoje |
| 03/11 | 15:05 | API | Quem não clicou no 09h | API-BF-11 | Lembrete com botão |
| 03/11 | 17:00 | Grupos | Todos os grupos | CP-BF-70 | Antes de decidir |
| 03/11 | 19:00 | Grupos | Grupos geral e Desafio/Imersão | CP-BF-71 | Falta 1 hora |
| 03/11 | 19:00 | Grupos | Grupo de alunas | ca-06 (`13_modelo_dr_joao/wpp_grupo_alunas_captacao.md`, no lugar do CP-BF-71 só nesse grupo) | Falta 1 hora, condição das alunas |
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
| 03/11 | 21:00 | Grupos | Todos os grupos | CP-BF-75 | A parte que decide: a condição vai ser revelada (preço previsto às 21h09) |
| 03/11 | 21:05 | API | Dentro da janela de 24 h | API-BF-16 | A parte que decide |
| 03/11 | 21:28 (manual) | Grupos | Cada grupo | CP-BF-76 e CP-BF-76-DS (geral e Desafio/Imersão); CP-BF-76-AL (alunas) | Carrinho aberto, Lote Especial [[CONFIRMAR: Lote Especial só para quem está ao vivo]]. Dispara quando o link do checkout abrir na tela (bloco 15 do roteiro) |
| 03/11 | 21:28 (manual) | E-mail (referência) | Reservaram | `06_emails` | Abertura de carrinho |
| 03/11 | 21:30 (manual) | API | Reservaram (N e D) | API-BF-17 | Carrinho aberto, Lote Especial |
| 03/11 | 21:32 (manual) | API | Reservaram (A) | API-BF-17-A | Carrinho aberto, Lote Especial (alunas) |
| 03/11 | 21:35 a 21:50 (manual) | Grupos | Todos os grupos | Trocar nome e capa para "CARRINHO ABERTO" | Janela de 15 min, depois do CP-BF-76 |
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
| 04/11 | 20h00 | Wpp Grupos | Os três grupos | CP-BF-V02 (alunas: -AL) | Quebra da objeção de dinheiro |
| 05/11 | 11h30 | Wpp Grupos | Os três grupos | CP-BF-V03 (alunas: -AL) | Antes de decidir, garantia |

### 4.2 Dias sem evento de lote

A cadência é a canônica: e-mail 07h; API 09h só nos dias-chave; grupos 11h30 e 20h (2 por dia, sem 16h30). Nenhuma série canônica de captação continua depois de 03/11, então não há colisão de assunto no pós-live. Rotacionar CP-BF-V01 a V03 (04/11 e 05/11), depois V07 (Primeiro Lote, 20h) e V11 (Último Lote, 20h), acrescentando um `[[DEPOIMENTO REAL]]` por dia.

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

O Golden Ticket (`API-BF-05.x`, `CP-BF-GT01`) é opcional, depende de `[[CONFIRMAR: condição do Golden Ticket]]` e acontece antes da live, em 22/10 (API 05.1 e aviso no grupo), 26/10 (05.2) e 01/11 (05.3), datas sem mensagem da série canônica de alunas. Depois da live, as alunas passam a receber as mesmas peças de lote com o sufixo -AL e os preços `[[PREÇO LOTE ALUNAS]]`.

---

## 5. Gatilhos contínuos (por evento, sem data)

| Evento | Canal | ID | Quando |
|---|---|---|---|
| Entrou na lista (reservou) | API | api-onb-01 e versão alunas (canônica, `13_modelo_dr_joao/api_onboarding.md`; reserva: API-BF-01) | Imediato |
| Entrou no grupo | API | api-onb-02 (canônica) | Logo depois da entrada |
| Reservou e não concluiu os passos (status "não confirmou") | API | api-onb-03 (canônica; reserva: API-BF-02) | Algumas horas depois do cadastro, uma vez |
| Saiu do grupo | API | api-onb-04 (canônica; reserva: API-BF-03) | Imediato |
| Reservou e não está em grupo | API e e-mail | API-BF-R01 a R03, EMAIL-BF-R01 | 20/10, 27/10, 31/10 (R01, às 10h, só para quem continua sem grupo mais de 48 h depois do cadastro e não recebeu outra API no dia), manhã de 03/11 (R02), 19h10 de 03/11 (R03) |
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
| 13/10 | 09h15 a 09h25 (antes do cp-00a, 09h30) | Captação | `grupos_descricao_e_grupo_cheio.md`, seção 1 |
| 03/11, manhã | 05h45 a 05h55 (antes do CP-BF-64, 06h00) | Dia da live, antes de começar | idem |
| 03/11, à noite | 19h30 a 19h45 (antes do CP-BF-72, 19h50) | Ao vivo ("AO VIVO HOJE, 20H"). Não há troca às 19h59 | idem |
| 03/11, carrinho aberto | 21h35 a 21h50 (depois do CP-BF-76, 21h28) | Carrinho aberto | idem |
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

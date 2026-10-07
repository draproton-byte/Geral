# Análise do doc de automação: do Desafio para a Black Próton Vitalícia

Insumo do documento `doc_captacao_automacao_black.md` (mesma pasta). Lê o "Doc para captação, Automação" do Desafio (preenchido), o template da Black (em branco), as abas de links úteis, as UTMs, o fluxo de ManyChat, as copies por evento do Clube Secreto, as planilhas de disparos de setembro e outubro e a cadência BFV/26 do modelo, e cruza tudo com as copys da Black (`03_paginas`, `05_whatsapp_api`, `06_emails`, `07_listboss_ura_sms`, `09_comercial_datacrazy`, `13_modelo_dr_joao`) e com `00_ESTRATEGIA_COPY_SENIOR.md`, `02_GUIA_DE_COPY.md`, `12_decisoes_e_pendencias.md` e `14_revisao/RUBRICA.md`.

Data da análise: 07/10/2026 (quarta). Faltam 6 dias para a abertura da captação (terça, 13/10, 07h).

---

## 1. Resumo executivo

1. O doc do Desafio é um **roteiro de 5 passos para um produto de ingresso pago, uma lista e um checkout**. Ele serve de esqueleto (DataCrazy, Hotmart/ListBoss, API oficial e ManyChat, pipeline, teste), mas deixou em branco justamente os campos que mais travam a operação: nome da lista de inscritos, link de webhook e observações.
2. O template da Black herdou o mesmo esqueleto e **ainda cita Active Campaign e Clint**, ferramentas que o Desafio já trocou por DataCrazy. Se alguém seguir o template como está, configura a ferramenta errada.
3. A Black exige muito mais do que o esqueleto prevê: 3 segmentos com prioridade (S1 sobre S2 sobre S3), 9 checkouts (3 lotes x 3 segmentos) em vez de 1, live única com virada de lote **depois** dela, diagnóstico com 5 perfis mais "sem nome" que precisa virar dado e tag, trilha de entrada, upgrade de aluna com pipeline próprio, modo escuta do comercial no dia 03/11 e exclusões entre séries de disparo.
4. As copys da Black já existem em **duas camadas para o mesmo evento** (ListBoss por segmento em `07_listboss_ura_sms` e recuperação em `05_whatsapp_api`) e em **duas famílias de agendamento** (pastas 05/06 e pasta 13). Sem uma decisão de qual fica ativa por canal, o contato recebe a mesma mensagem duas vezes. O documento final fixa uma regra.
5. Há **três divergências de cadência** (grupos às 11h30 e 20h na rubrica contra 16h30 no cronograma; e-mail das 07h contra lembretes das 12h; API 09h) e **três padrões de nome de tag e de UTM** nos arquivos. O documento final adota um padrão só: `BFP/26-...` para listas e tags e `utm_id=bfp26` para rastreio.
6. O que bloqueia a configuração hoje não é técnica: são as decisões 1 a 9 de `12_decisoes_e_pendencias.md` (datas de lote, garantia, parcelamento, preço travado no Pix e no boleto, fechamento, replay) mais os links (grupos, checkouts, páginas, webhooks) e a aprovação dos templates de API na Meta, que pede 7 dias de antecedência e, para 13/10, **já está atrasada em 1 dia**.

---

## 2. O que o doc do Desafio cobre

| Bloco do doc do Desafio | O que tem | Estado | Como a Black aproveita |
|---|---|---|---|
| Identificação do evento | Nome do evento, briefing (arquivo), produto, ID do produto na Hotmart | Preenchido | Mantido como "Ficha do evento" (seção 0 do doc final), com 1 produto e 9 ofertas |
| Grupo convencional | Foto de capa (nome do arquivo), nome dos grupos, descrição e mensagem de boas-vindas (por referência a docs de copy) | Preenchido, **com um único nome** | Vira a seção 3 do doc final, com 4 famílias de grupo e 8 estados de nome e capa |
| Página de obrigado e pesquisa | URL da página | Preenchido | Seção 5 (campos) e 10 (teste), com pesquisa em 3 partes |
| Pasta de planilhas | "06 . AUTOMAÇÃO" | Preenchido | Mantida; abas definidas na seção 5.3 |
| "Precisaremos de" | Lista de inscritos (DataCrazy), link do grupo, link da página de obrigado, lista de respostas, link de webhook | Lista de inscritos e webhook **em branco**; grupo e respostas preenchidos | Todos viram itens nomeados nas seções 2, 3 e 5 |
| Checkout | Um link, o do lote 1 | Preenchido para **um lote** | Seção 6, com 9 ofertas e regra de virada |
| Passo 1, DataCrazy | 6 tags de evento, lista de compradores, lista de formulário ("não tem formulário"), lista de recuperação, automação de compra aprovada (onboarding, e-mail mais tag) e uma automação por evento de recuperação | Descrito, sem nomes de lista | Seção 2 (nomes) e 7 (automações) |
| Passo 2, Hotmart | Eventos de ListBoss do produto novo: aprovada, recusada, boleto gerado, aguardando pagamento, abandono, reembolso | Descrito | Seção 6, ampliado para 8 eventos e 3 segmentos |
| Passo 3, API oficial | Aprovar a mensagem de compra aprovada, criar o fluxo no ManyChat, ligar ao integrador (webhook), colocar o link do webhook da API oficial no fluxo de onboarding do DataCrazy | Descrito | Seções 4 e 5 |
| Passo 4, DataCrazy pipeline | Criar o pipeline, passar o nome à equipe, criar o link de integração, colocá-lo no fluxo de onboarding | Descrito, **sem nome de pipeline nem etapas** | Seção 7 com 2 pipelines e etapas |
| Passo 5 | "Testar tudo" | Uma linha | Seção 10, com 40 testes e critério de aceite |

Fontes de apoio do Desafio que o doc não contém, mas que a automação usa: `desafio_copy_fluxo_ingresso_desafio.md` (palavra-chave, ramos A e B, gatilho por API Hotmart), `desafio_5_copies_por_evento_do_pipeline_clube_secreto.md` (E1 a E8 e D1 a D7, variáveis `{{nome}}`, `{{link}}`, `{{codigo_pix}}`, `{{link_aula}}`, regra "resposta dela interrompe a régua"), `desafio_comercial_7_regua_do_silencio.md`, as 7 abas de links úteis e as planilhas de disparos.

---

## 3. O que o doc do Desafio deixou em branco ou frágil

| # | Lacuna | Evidência | Efeito | O que o doc final faz |
|---|---|---|---|---|
| 1 | Nome da lista de inscritos em branco | Campo "Nome da lista de inscritos do datacraze" vazio | Cada pessoa nomeia do seu jeito; listas duplicadas | Seção 2 define nomes fixos (`BFP/26-...`) |
| 2 | Link de webhook em branco | Campo "Link de webhook" vazio | Quem configura não sabe qual endpoint, nem quais campos | Seção 5 lista 12 webhooks (`[[LINK: webhook ...]]`), campos e destino |
| 3 | Seção "[AUTOMAÇÃO] Cuidado, onboarding" sem texto | Só o título | O ponto mais sensível (gatilho do onboarding) fica sem regra | Seção 1 e 7 descrevem o gatilho, a ordem e a parada |
| 4 | Gatilhos de onboarding trocados na planilha | `api_onboarding.md` registra que "Bem-vinda", "Não confirmada" e "Saiu do grupo" aparecem com gatilhos que não casam com o texto | Mensagem errada para o estado errado | Seção 1 fixa: 01 ao entrar na lista, 02 sem entrada no grupo, 03 saída do grupo |
| 5 | Um único checkout (lote 1) para 3 lotes | Um link `off=` no doc; os lotes seguintes só em aba de links | Virada de lote manual e sem dono | Seção 6: 9 ofertas e regra de virada com responsável e horário |
| 6 | Sem UTM por canal e por ID de copy | Abas TRÁFEGO com linhas vazias em "UTMS de página de vendas" e "UTM venda checkout"; planilha de UTMs com `utm_campaign=organico` e `utm_content` igual ao canal em tudo | Relatório não separa criativo, copy nem lote | Seção 8: padrão único e tabelas de links |
| 7 | Defeito de URL no fluxo de ManyChat | O link de checkout do Ramo A do Desafio tem dois `?` (`?off=...?src=...`) | Parâmetros de origem se perdem | Regra de montagem na seção 8: um `?`, o resto com `&` |
| 8 | Dados de rastreio de pessoa dentro do link do grupo | O link do grupo no doc carrega um parâmetro `sck` com identificadores de navegador | Vazamento de dado de uma pessoa e atribuição errada para todas | Doc final usa só `[[LINK: ...]]`. Nunca copiar link de grupo com parâmetros de sessão |
| 9 | Webhook e domínio de terceiros escritos no doc | A aba GERAL de links tem endereço do integrador | Segredo e endpoint expostos em doc compartilhado | Doc final usa `[[LINK: webhook ...]]` e pede cofre de senhas |
| 10 | Sem regra de interrupção por doc | Só aparece no Manual do Comercial e nas copies | A automação nova não sabe parar | Seção 7.3: resposta humana, SAIR, compra aprovada, reembolso |
| 11 | Sem tags de segmento ou de estado de funil | O doc só pede 6 tags de evento | Impossível excluir, priorizar ou medir | Seção 2: 50 tags com regra de entrada e saída |
| 12 | Sem cronograma de configuração | "Testar tudo" no fim | Descobre-se o erro na noite da live | Seção 9 regressiva a partir de 13/10 |
| 13 | Sem critério de aceite | Nenhum | "Testado" sem padrão | Seção 10 |
| 14 | Link de suporte com número direto | Aba SUPORTE do Desafio tem números de atendimento em uso | Número pessoal circulando em doc | Doc final usa `[[LINK: suporte WhatsApp]]`, e a verificação de números cobre o resto |

---

## 4. O que o template da Black traz de diferente e de errado

| Item no template (`projetoBF_doc_captacao_automacao.md`) | Problema | Correção no doc final |
|---|---|---|
| "Nome da lista de inscritos do active" | A ferramenta de CRM e lista é o DataCrazy | Lista de inscritos no DataCrazy |
| "Passo 1 Active Campaign" e "Passo 4 Clint" | Ferramentas antigas; o Desafio já usa DataCrazy | Passos 1 e 4 em DataCrazy |
| "Nome da lista de espera" | Campo novo e correto: a Black tem lista de espera | Mantido, com regra de entrada e de saída |
| "Copy da página" no bloco da página de obrigado | Correto: a pesquisa e o diagnóstico têm copy própria | Referência a `03_paginas/obrigado_e_pesquisa.md` e `diagnostico_5_perfis.md` |
| "Produto que será vendido" em branco | Há 1 produto com 9 ofertas | Seção 6 |
| Sem campo de UTM, de segmento ou de lote | Faltam | Seções 2, 6 e 8 |

---

## 5. O que a Black exige a mais

| Exigência da Black | Por que existe | Onde toca a automação | Como o doc final resolve |
|---|---|---|---|
| **3 segmentos S1, S2, S3** (alunas do Clube; quem viveu Desafio, Imersão ou Aulão sem Clube; não-alunas e base fria) | Condição de preço, copy e funil diferentes (`00` seção 3.1; rubrica seção 1) | Listas, tags, grupos, ListBoss, pipeline, checkout | Tags `BFP/26-ALUNA-CLUBE`, `BFP/26-VIVEU-METODO`, `BFP/26-NAO-ALUNA` e regra de prioridade S1 sobre S2 sobre S3 (seção 2.6) |
| **3 checkouts por lote e segmento** (9 ofertas) | Escada de preço por lote; S2 paga como não-aluna, mas precisa de oferta própria para medir (`07_listboss`, nota de S2) | Hotmart, banner, eventos, UTM, detecção de "pagou no link errado" | Seção 6: códigos `BFP26-S1-ESP`, `S1-1L`, `S1-UL`, `S2-...`, `S3-...` |
| **Live única em 03/11, 20h** (não 5 noites) | Preço e lotes só ao vivo; checkout só nasce depois | Nada de venda antes de 03/11 20h; troca de estado no minuto certo | Seção 1 e 3: grade de 03/11 e trocas de nome e capa |
| **Virada de lote real depois da live** | Escassez só por lote (guia seção 3) | Oferta anterior sai, próxima entra, banner, link, texto de API e grupo mudam juntos | Seção 6.2: roteiro de virada com responsável e teste |
| **Diagnóstico dos 5 perfis mais "padrão sem nome"** (devolutiva 6) | 29% a 40% da base não sabe o que a trava | 7 perguntas pontuadas viram campos e tags; a ManyChat não lê o resultado sem integração | Seção 5.2 e `BFP/26-DIAG-<perfil>` mais `BFP/26-DIAG-SEM-NOME` |
| **Pesquisa em 3 partes** (Q1 a Q5, D1 a D7, Q6 a Q10) | Renda, objeção e pagamento depois do resultado | Dado sensível por proximidade (LGPD) | Seção 5.5: acesso restrito e consentimento |
| **Trilha de entrada** | O risco da oferta é o excesso de 11 produtos | Onboarding com primeiro passo em 48 h; PC-D0 a D21; API-BF-OK3 e OK4 | Seção 1 (etapas 26 e 27), seção 7 (etapa "Onboarding 48 h") |
| **Upgrade de aluna** | Aluna conhece o produto, teme pagar duas vezes | Pipeline 2 com U1 a U9, "pagou no link errado" e "plano atual" | Seção 7.2 |
| **Modo escuta do comercial** (20h a 22h de 03/11) | A live dura quase duas horas; disparo competiria com a Dra. | Pausar automações de venda do pipeline; só exceções | Seção 7.5 |
| **Exclusões entre séries** | Dois e-mails promocionais no mesmo dia, duas APIs, captação para quem já reservou ou comprou | Filtros em cada disparo | Seção 2.5 (matriz de exclusões) |
| **Janelas de Pix e boleto** (48 h e 4 a 5 dias) | Dado medido do Desafio; o prazo manda mais que o horário | Gatilhos em horas relativas, não em horário fixo | Seção 7.4 |
| **Preço travado no Pix e no boleto quando o lote vira** | Pergunta aberta (12, itens 8 e 47) | Texto de E3 e E5 muda conforme a resposta | Seção 6.4: teste na Hotmart e duas versões de texto |
| **Lista de espera e degrau de entrada** | 65% do Aulão ganha até a faixa mais baixa e não cabe | Lista de espera com motivo; esforço comercial zero para essa faixa | `BFP/26-LISTA-ESPERA` e `BFP/26-SEM-ESFORCO-COMERCIAL` |
| **Grupos por segmento mais grupo dos vitalícios** | Copy de grupo, descrição e recuperação diferentes | Rodízio SendFlow em 4 famílias | Seção 3 |
| **Sem número de vagas** | Rubrica proíbe "últimas vagas" | Nenhum contador de vagas na tarja, no grupo, nem no ManyChat | Seção 3 e 4: sem variável de vagas |

---

## 6. Conflitos entre os arquivos de copy que a automação precisa resolver

| # | Conflito | Onde aparece | Decisão adotada no doc final | Quem confirma |
|---|---|---|---|---|
| C1 | **Cadência de grupo**: rubrica diz 11h30 e 20h e o slot das 16h30 é banco de reserva; o cronograma ainda lista 3 disparos por dia, com 16h30 | `14_revisao/RUBRICA.md` seção 1, `05_whatsapp_api/cronograma_de_disparos.md`, `12` itens 53 e G3 | Agendar 11h30 e 20h. As 21 copys de 16h30 ficam como reserva, sem agendar | Lançamento |
| C2 | **E-mail 07h contra lembretes das 12h** (28/10 a 02/11) | `06_emails/lembretes_da_live.md`, `12` item 53 e G1 | Agendar os lembretes das 12h como no arquivo até a decisão; regra de exclusão documentada | Lançamento |
| C3 | **Duas famílias de copy por canal**: pastas 05/06 (completas, IDs `CP-BF`, `EM-BF`, `API-BF`) e pasta 13 (formato do modelo, numeração 01 a 38, ainda sem o fim do cronograma) | `11_matriz` seção "pasta 13" | A pasta 05/06 é a fonte do texto (cobre 13/10 a 03/11 e o pós-live). A pasta 13 só substitui quando estiver completa; nunca agendar as duas | Copy e Automação |
| C4 | **Dois conjuntos de mensagem para o mesmo evento Hotmart**: `07_listboss` (API-01 a API-09 por S1, S2, S3) e `05_whatsapp_api/recuperacao_e_carrinho.md` (C, P, X, OK, RF só para A e N) | Os dois arquivos citam "ListBoss/DataCrazy" | Ativos: os 27 textos do `07` para os 9 eventos por segmento. Do `05` entram só os que o `07` não tem: C03 (últimas horas), OK3 (48 h), OK4 (21 dias) e R01 a R06 (recuperação de grupo) | Automação e Copy |
| C5 | **Nomes de lista e tag**: `11/26 - BLACK VITALICIA - ALUNAS` em `07` e em `06_emails/eventos_de_pagamento.md`; `bf_*` na ManyChat; "reservou" e "inscrito na live" nas copys | `07`, `06`, `fluxo_manychat.md` | Padrão `BFP/26-...` em todos. Tabela de correspondência na seção 2.7. Os arquivos de copy mantêm o nome antigo só como texto de nota, e a equipe de copy atualiza as notas | Automação |
| C6 | **Três padrões de UTM**: `utm_campaign=organico` (planilha e ManyChat), `utm_campaign=black-vitalicia` e `utm_content=em-bf-NN` (e-mail), `src=api` (API) | `fluxo_manychat.md`, `06_emails/captacao_serie.md`, `api_convite_indireto_e_aquecimento.md` | Padrão único: seção 8 | Tráfego |
| C7 | **Duas APIs no mesmo dia para as alunas** (29/10 e 02/11): Golden Ticket (`API-BF-05.2` e `05.3`) e API de captação das alunas (pasta 13) | nota 307 de `13_modelo_dr_joao/api_alunas_captacao.md` | Regra de prioridade: Golden Ticket vale; a captação das alunas da pasta 13 não é agendada nessas duas datas. Regra geral: 1 API por pessoa por dia, exceto 03/11 | Copy |
| C8 | **"Sem grupo, sem link da live"**: a ManyChat e o obrigado já dizem que o grupo é o canal oficial e que o link também sai no e-mail, mas a API-BF-02 e as recuperações ainda dizem que "quem fica fora não recebe o link" | `api_onboarding.md`, `recuperacao_e_carrinho.md` contra `fluxo_manychat.md` e `obrigado_e_pesquisa.md` | Automação segue o gatilho (não entrou no grupo) e sinaliza para Copy conferir a afirmação, porque ela é falsa se o link sai por e-mail e por API | Copy |
| C9 | **Telegram**: a planilha de UTMs e a BFV/26 usam Telegram; nenhuma copy da Black o usa | `projetoBF_utms_black_friday.md` | Fora do escopo. UTM `telegram` reservada, sem disparo | Lançamento |
| C10 | **Presença na live** (`BFP/26-ASSISTIU-LIVE`): o comercial usa "assistiu, parte, não", mas o YouTube não entrega presença por pessoa | `lista_de_ataque_templates.md` | Proxy: clique no link rastreado da live mais resposta no grupo. Fonte oficial é pendência | Automação e Lançamento |
| C11 | **Arquivo com nome de ferramenta de reunião** em `03_paginas` | `12` item 54 | O doc final não cita o nome do arquivo; referencia "tela de countdown e página da live" | Copy |
| C12 | **Quem é "aluna"** (ativa, inativa, em garantia, com reembolso, que comprou o Clube pelo Desafio) | `pagina_cupom_alunas.md` | Segmento S1 = aluna com acesso ativo ou encerrado reconhecida pelo e-mail da compra; sub-tags para o resto; critério final pendente | Lançamento |

---

## 7. O que o modelo BFV/26 ensina (lido em `modelo_disparos.txt`)

A planilha do modelo expõe **listas e campanhas, não tags**. As tags da Black são desenho novo deste doc.

| Campanha do modelo | Lista alvo | Canais e horários | Lição para a Black |
|---|---|---|---|
| Geral (live em 20/10) | "Lista de Leads Antigos" e, nos lembretes, "Lista do Lançamento Atual" | E-mail 07h; grupos 11h30 e 20h; ao final 11h e 19h a 20h | S3 e base fria. Lembretes de 7, 5, 3 e 1 dia vão para a lista de inscritos, não para a lista fria |
| Alunos (live em 19/10, um dia antes) | Lista de alunos, grupo de alunos e "Lista de Inscritos" da live dos alunos | E-mail 09h, API 09h, grupo 11h; lembretes 7, 5, 3 dias e "é amanhã" às 10h, 11h e 11h30 | S1 tem lista, grupo e inscritos próprios. A live antecipada para alunos é decisão aberta (`12` item 39) |
| Demais alunos | Oito listas de compradores de outros produtos agregadas em um envio | API 09h, 5 envios | S2 é uma união de listas; a Black precisa de uma tag única para ela |
| Black Friday do ano anterior | "Lista Alunos + Antigos + Atual", "Leads Antigos + Atual", Telegram | E-mail, API, Wpp, Telegram | Prova de que o modelo usa união de listas e exclusões, sem tag explícita na planilha |

Nas planilhas de setembro e outubro do Desafio, as **trocas de nome e capa de grupo são linhas de disparo** ("MUDAR NOME E CAPA (AO VIVO)" às 19h59, "(DESAFIO ANR)", "(VAGAS ABERTAS)"), e não campo do doc de automação. O doc final reúne essas trocas na seção 3.2 e as reflete na grade de 03/11.

---

## 8. Decisões que o doc final assume (revise se discordar)

1. Prefixo único `BFP/26` (Black Friday Próton 2026) em lista, tag, evento de ListBoss e card. O padrão `MM/AA - PRODUTO - EVENTO` do Desafio continua como alias de relatório.
2. S2 tem **oferta própria** (3 ofertas) no mesmo preço de não-aluna, para medir e para detectar compra no link errado. Se a Dra. decidir que S2 paga como S3 sem medir, as 3 ofertas de S2 viram cópias das de S3, sem mudar a automação.
3. Prioridade de segmento: S1 sobre S2 sobre S3. Quem é de dois segmentos fica no de maior prioridade.
4. Uma API por pessoa por dia, exceto 03/11.
5. Cada evento Hotmart tem **dois toques e para**. Resposta humana interrompe, SAIR encerra tudo, compra aprovada cancela recuperação, reembolso cancela pós-compra.
6. Modo escuta de 20h a 22h em 03/11 vale para o pipeline do comercial (DataCrazy); a grade de grupo e de API segue o `dia_da_live_03_11.md`. Exceções: cartão recusado (humano em até 10 minutos) e pedido com prazo de Pix.
7. Janela de Pix de 48 h e de boleto de 4 a 5 dias vêm do Manual do Comercial do Desafio e precisam ser conferidas no PDF de leads não convertidos e na configuração real da Hotmart.
8. Nenhum preço, parcela ou valor em reais aparece no doc: usa `[[PREÇO LOTE ALUNAS]]` e `[[PREÇO LOTE NÃO-ALUNAS]]`.
9. Dados sensíveis (diagnóstico, renda, pergunta aberta) ficam em aba de acesso restrito. Nenhum dado pessoal, senha, token ou webhook real entra no doc.

---

## 9. Pendências que dependem da equipe (resumo; a lista completa está na seção 12 do doc final)

| Prazo | Pendência |
|---|---|
| Hoje, 07/10 | Submeter à Meta os templates que saem em 13/10 e 14/10 (API-BF-01 a 03, 04.1 e 06.1, por segmento) |
| 10/10 | Decisões 1 a 9 de `12`; links dos grupos (4 famílias), das páginas, dos 9 checkouts e dos 12 webhooks; foto da Dra.; critério de aluna; contagem de alunas; ferramenta do diagnóstico |
| 12/10 | Teste ponta a ponta da captação nos 3 segmentos; agendamento de 13/10 a 20/10; plantão definido |
| 27/10 | Templates de API do pós-live submetidos (7 dias antes de 03/11) |
| 03/11 | Ofertas, eventos, pipelines, banners, trocas de nome e capa e plantão do comercial prontos e testados com compra de teste em cada oferta |

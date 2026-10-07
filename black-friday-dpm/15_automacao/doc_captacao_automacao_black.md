# Doc para captação, Automação: Black Próton Vitalícia

Documento de configuração para quem vai montar a automação (listas, tags, grupos, ManyChat, webhooks, Hotmart, DataCrazy, UTMs). Segue o padrão do "Doc para captação, Automação" do Desafio (ficha do evento, "precisaremos de", passos 1 a 5) e acrescenta o que a Black exige a mais. A análise que originou este documento está em `analise_do_doc_de_automacao.md` (mesma pasta).

| Campo | Conteúdo |
|---|---|
| Campanha | Black Próton Vitalícia (prefixo de ferramenta: `BFP/26`, identificador de rastreio: `bfp26`) |
| Versão | 1.0, 07/10/2026 |
| Dono do documento | Automação (gestor de automação de lançamentos) |
| Pasta das planilhas | `06 . AUTOMAÇÃO`, dentro do Drive do lançamento atual |
| Janela | Captação: terça 13/10 a segunda 02/11. Live de revelação: terça 03/11, 20h, ao vivo no YouTube. Carrinho: abre depois da revelação, `[[PENDENTE: abertura do carrinho]]` (previsto para 21h28 de 03/11 no roteiro da live). Fecha em `[[PENDENTE: fechamento]]` |
| Feriados na operação | 12/10 (segunda, véspera da captação) e 02/11 (segunda, Finados, tom sóbrio) |

**Marcações.** `[[LINK: ...]]` é link que ainda não existe. `[[PENDENTE: ...]]` é campo a preencher pela equipe. `[[CONFIRMAR: ...]]` é afirmação que depende de checagem. `{{variavel}}` é variável de ferramenta. Troque por busca.

**Regras de segurança deste documento.**

1. Nenhum endereço de webhook, token, senha, chave de API ou login é escrito aqui. Tudo isso fica no cofre de senhas da equipe e entra neste documento só como `[[LINK: webhook ...]]`.
2. Nenhum dado pessoal (nome, e-mail, telefone, resultado de diagnóstico) entra neste documento. Contatos de teste ficam em planilha própria, `[[PENDENTE: contatos de teste da equipe]]`.
3. Nunca copiar link de grupo, de checkout ou de página com parâmetros de sessão ou de navegador (por exemplo `sck` com identificadores). Copiar só o endereço-base e montar os parâmetros pela seção 8.
4. Nenhum valor em reais aparece aqui. Preço só pelos marcadores `[[PREÇO LOTE ALUNAS]]` e `[[PREÇO LOTE NÃO-ALUNAS]]`, e só depois da revelação (03/11, 20h).

---

## 0. Ficha do evento (configuração da comunidade de WhatsApp)

| Item | Valor |
|---|---|
| Nome do evento | Black Próton Vitalícia, live de revelação |
| Briefing | `[[LINK: briefing Black Próton Vitalícia]]` (aba GERAL dos links úteis) |
| Produto que será vendido | Black Próton Vitalícia: acesso vitalício ao Clube Secreto e a 11 produtos do catálogo atual, pagamento único |
| ID do produto na Hotmart | `[[PENDENTE: ID do produto Hotmart]]` |
| Tipo de grupo | Grupo convencional com rodízio (SendFlow). 4 famílias, ver seção 3 |
| Foto de capa do grupo | `[[FOTO DRA]]`. Artes por estado: `04_criativos/artes_de_api_ingresso_capas.md` (ART-WPP-01 captação, ART-WPP-02 ao vivo, ART-WPP-03 acesso aberto). Os demais estados são `[[PENDENTE: arte dos estados sem ART-WPP]]` |
| Nome dos grupos | Muda por estado. Tabela na seção 3.3 |
| Descrição dos grupos | `05_whatsapp_api/grupos_descricao_e_grupo_cheio.md`, seção 2 (2.1 geral, 2.2 alunas, 2.3 quem viveu o método). Formato do modelo: `13_modelo_dr_joao/wpp_descricao_do_grupo.md` |
| Mensagem de boas-vindas (grupo cheio) | Mesmo arquivo, seção 3 (3.1 a 3.4). Formato do modelo: `13_modelo_dr_joao/wpp_grupo_cheio.md` |
| Páginas de captura | A diagnóstico primeiro `[[LINK: captura A]]`, B oferta primeiro `[[LINK: captura B]]`, C alunas `[[LINK: captura C]]`, D quem viveu o método `[[LINK: captura D]]`, VSL `[[LINK: captura VSL]]` (copy em `03_paginas/captura_A_diagnostico_primeiro.md`, `captura_B_oferta_primeiro.md`, `captura_C_alunas_do_clube.md`, `captura_D_quem_ja_viveu_o_desafio.md`, `vsl_headlines_e_paginas.md`) |
| Página de obrigado e pesquisa | `[[LINK: página de obrigado e pesquisa]]`. Copy: `03_paginas/obrigado_e_pesquisa.md`. Diagnóstico: `03_paginas/diagnostico_5_perfis.md` |
| Outras páginas | Lista de espera `[[LINK: lista de espera]]`; cupom das alunas `[[LINK: página das alunas]]`; verificação de números `[[LINK: verificador de números]]`; onboarding `[[LINK: onboarding Vitalícia]]`; tela de countdown e página da live `[[LINK: página da live]]`; página de vendas `[[LINK: página de vendas]]` (abre só depois da revelação) |
| Observações | **[AUTOMAÇÃO] Cuidado, onboarding.** O onboarding sai por gatilho de evento, nunca por data. Ordem: bem-vinda (ao entrar na lista), não confirmou (sem entrada no grupo), saiu do grupo. O texto da pasta 05 já corrige os gatilhos que a planilha do Desafio trocou. Detalhe na seção 1 (etapas 6 a 10) |
| Pasta para salvar planilhas | `06 . AUTOMAÇÃO` |

### 0.1 Precisaremos de (nomes fixos)

| Item | Nome ou valor |
|---|---|
| Nome da lista de inscritos (DataCrazy) | `BFP/26 INSCRITOS` |
| Nome da lista de espera | `BFP/26 LISTA DE ESPERA` |
| Link dos grupos de WhatsApp | `[[LINK: grupo geral]]`, `[[LINK: grupo alunas]]`, `[[LINK: grupo quem viveu o método]]`, `[[LINK: grupo da Vitalícia, pós-compra]]` |
| Link da página de obrigado e pesquisa | `[[LINK: página de obrigado e pesquisa]]` |
| Lista de respostas da página de obrigado | Planilha `LEADS CAPTURADOS BLACK PRÓTON VITALÍCIA` (abas na seção 5.3) |
| Lista de eventos de compra | Planilha `EVENTOS DE COMPRA BLACK PRÓTON VITALÍCIA 1126` |
| Link de webhook | 12 webhooks, seção 5.1 (`[[LINK: webhook ...]]`) |
| Pipelines (nomes a passar à equipe) | `BFP/26 VITALÍCIA` (S2 e S3) e `BFP/26 UPGRADE ALUNA` (S1) |
| Planilha de disparos | A planilha de disparos da Dra. Próton, com uma aba nova `Novembro26` e as linhas de BFP/26 (colunas Campanha, Canal, Horário, Lista/Base, Título, Link Copy) |

### 0.2 Apenas para produto novo: configurações de automação para vendas

Produto: Black Próton Vitalícia. Links de checkout: 9 ofertas (3 lotes x 3 segmentos), seção 6.1. O link do lote 1 não basta: cada virada de lote troca oferta, banner, variáveis e texto (seção 6.2).

---

## 1. Visão geral do fluxo

### 1.1 Ferramentas e papel de cada uma

| Ferramenta | Papel na Black | Dono |
|---|---|---|
| Páginas (`lp.draproton.com.br`) | Captura, obrigado, pesquisa e diagnóstico, lista de espera, cupom das alunas, onboarding, verificador | Web designer |
| Integrador (webhooks) | Recebe os formulários e eventos e distribui para planilha, DataCrazy, ListBoss e ManyChat | Automação |
| DataCrazy | CRM: listas, tags, campos, pipelines, automações de e-mail e de WhatsApp do comercial, régua do silêncio | Automação e Comercial |
| ListBoss | Eventos da Hotmart por segmento; disparo de API oficial (WhatsApp) e e-mail; URA e SMS | Automação |
| ManyChat | Instagram (palavra-chave) e fluxos de WhatsApp API oficial acionados por webhook | Automação |
| SendFlow | Rodízio dos grupos de WhatsApp, agendamento das copys de grupo, evento da live | Automação e Suporte |
| Hotmart | Produto, 9 ofertas, checkout, eventos de compra | Automação e Financeiro |
| YouTube | Live de 03/11 | Lançamento |
| Planilhas do Drive | Leads, eventos de compra, disparos | Automação |

### 1.2 Tabela de etapas

Responsáveis (papéis, não pessoas): **Tráfego**, **Web designer**, **Copy**, **Automação**, **Comercial** (líder do comercial), **Suporte**, **Lançamento** (decisão e live), **Financeiro**.

Os IDs de copy apontam para o arquivo onde está o texto. A pasta 05/06/07/09 é a fonte do texto; a pasta 13 é a mesma peça no formato do modelo de lançamento, usada para agendar quando estiver completa (seção 1.4).

| # | Etapa | Gatilho | Ferramenta | Ação | Copy a disparar (ID, arquivo) | Responsável |
|---|---|---|---|---|---|---|
| 1 | Tráfego e canais | Clique em link com UTM (seção 8) | Redirecionador `draproton.com.br/bfp-<canal>`, anúncios, bio, stories | Levar à captura certa e gravar utm_* | Criativos `04_criativos/captacao_estaticos.md` (CAP-xxx) e legendas `legendas_captacao.md`; resposta pública do ManyChat MC-BF-00a a 00d | Tráfego |
| 2 | Captura | Abre a página de captura e envia o formulário (nome, e-mail, WhatsApp) | Página de captura A, B, C, D ou VSL | Validar e-mail e telefone, registrar consentimento, gravar utm_*, disparar o webhook W01 | `03_paginas/captura_A_diagnostico_primeiro.md` (e B, C, D, VSL) | Web designer |
| 3 | Cadastro processado | Webhook W01 recebido | Integrador, planilha, DataCrazy, ListBoss, ManyChat | Dedupe por e-mail e telefone; criar ou atualizar contato; lista `BFP/26 INSCRITOS`; tags `BFP/26-INSCRITA` e de segmento; linha na aba CAPTURA; tag no ManyChat | Sistema, sem texto | Automação |
| 4 | Obrigado | Redirecionamento depois do envio | Página de obrigado | Mostrar os 3 passos (grupo, data, diagnóstico) e o botão do grupo certo pelo segmento | `03_paginas/obrigado_e_pesquisa.md`, Parte 1 | Web designer |
| 5 | Pesquisa e diagnóstico | Clique em "Fazer meu diagnóstico" | Página em 3 partes | Q1 a Q5, depois D1 a D7 e resultado, depois Q6 a Q10; webhooks W02 e W03 | `03_paginas/obrigado_e_pesquisa.md`, Parte 2; `03_paginas/diagnostico_5_perfis.md` | Web designer e Copy |
| 6 | Onboarding: bem-vinda (API) | Contato entra em `BFP/26 INSCRITOS` com telefone válido | ListBoss ou ManyChat (WhatsApp API oficial) | Enviar a bem-vinda por segmento, com botões de grupo e diagnóstico | API-BF-01-N, API-BF-01-D, API-BF-01-A (`05_whatsapp_api/api_onboarding.md`; formato do modelo em `13_modelo_dr_joao/api_onboarding.md`, item 01) | Automação |
| 7 | Onboarding: inscrição confirmada (e-mail) | Mesmo gatilho | DataCrazy (e-mail) | Enviar OB-02 na hora do cadastro | OB-02 / S1, S2, S3 (`06_emails/onboarding.md`) | Automação |
| 8 | Entrada no grupo | Evento de entrada no grupo (webhook W09) | SendFlow para DataCrazy | Aplicar `BFP/26-NO-GRUPO`, remover `BFP/26-SEM-GRUPO`; a boas-vindas fixada sai pelo grupo | Boas-vindas: `05_whatsapp_api/grupos_descricao_e_grupo_cheio.md`, seção 3 | Suporte e Automação |
| 9 | Não entrou no grupo | Algumas horas sem a tag `BFP/26-NO-GRUPO` (e-mail em 2 horas) | DataCrazy e ListBoss | OB-01 em 2 h; API-BF-02 algumas horas depois, com reenvio uma vez em 24 h; OB-03 em 24 h só para quem também não fez o diagnóstico | API-BF-02-N, -D, -A (`api_onboarding.md`); OB-01 e OB-03 (`06_emails/onboarding.md`) | Automação |
| 10 | Saiu do grupo | Evento de saída do grupo (webhook W09) | SendFlow para API | Aplicar `BFP/26-SAIU-GRUPO`; enviar a mensagem de retorno; se não voltar, manter só e-mail até a live | API-BF-03-N, -D, -A (`api_onboarding.md`) | Automação |
| 11 | Recuperação de grupo | Inscrita sem tag de grupo: 20/10, 27/10, 31/10 (mensagem 1), manhã de 03/11 (2), 19h de 03/11 (3) | ListBoss e DataCrazy | Uma mensagem por dia; a seguinte só se continuar fora do grupo | API-BF-R01, R02, R03 e EMAIL-BF-R01 (`05_whatsapp_api/recuperacao_e_carrinho.md`, seção 1.1) | Automação |
| 12 | Convite indireto | Lista 2026 e leads antigos sem `BFP/26-INSCRITA`: ondas em 13/10, 20/10 e 28/10, 09h | ListBoss (API) | Mensagem 1 com botões sim e não (template). Mensagens 2 a 5 só na janela de 24 h aberta pelo "sim". Onda 2 e 3 só para quem não clicou | API-BF-04.1 a 04.5 (-N, -D, -A) e 04.N (`05_whatsapp_api/api_convite_indireto_e_aquecimento.md`) | Automação |
| 13 | Diagnóstico sem reserva | Fez o diagnóstico e não tem `BFP/26-INSCRITA` (exceto alunas): 14/10, 21/10, 27/10, 09h | ListBoss (API) | Abordagem, depois a mensagem do perfil, depois o reforço opcional | API-BF-06.1, 06.2 (TI, AS, CB, TR, CQ), 06.3 (`05_whatsapp_api/convite_vip_alunas_e_quiz.md`, parte B) | Automação |
| 14 | Golden Ticket das alunas | `BFP/26-ALUNA-CLUBE` ativa: 22/10, 29/10 e 02/11, 09h; aviso no grupo em 22/10, 11h30 | ListBoss (API) e SendFlow | Convite VIP; reforço só para quem não ativou; última chamada em duas versões | API-BF-05.1, 05.1V, 05.2, 05.3; CP-BF-GT01 (`convite_vip_alunas_e_quiz.md`, parte A) | Automação e Copy |
| 15 | E-mail da captação | Todos os dias, 07h, de 13/10 a 03/11; 09h para S1 e S2 nas datas da tabela; 12h de 28/10 a 02/11 | DataCrazy ou ListBoss (e-mail) | Série EM-BF; segmentados SA e SD; lembretes LV. Exclusões na seção 2.5 | EM-BF-01 a 22 (`06_emails/captacao_serie.md`); SA-01 a 06 e SD-01 a 06 (`segmentados_09h.md`); LV-28 a LV-02 (`lembretes_da_live.md`) | Copy e Automação |
| 16 | Grupos de WhatsApp | Todos os dias, 11h30 e 20h | SendFlow | Agendar a copy do dia em cada família de grupo (geral, alunas -AL, viveu o método -DS). O slot de 16h30 é banco de reserva | CP-BF-01 a 63 nos slots 11h30 e 20h (`05_whatsapp_api/cronograma_de_disparos.md`, `lembretes_de_grupo_captacao.md`) | Automação |
| 17 | Instagram | Comentário ou resposta a story com VITALÍCIA ou DIAGNÓSTICO | ManyChat | Resposta pública, direct, ramos A, B, C, tags, lembretes | MC-BF-00a a 00d, 01, 02, A03 a A07, B03 a B12, C01 a C03, L01 a L04 (`05_whatsapp_api/fluxo_manychat.md`) | Automação |
| 18 | Lembretes pré-live | 28/10 (07), 30/10 (08), 02/11 (09), 09h; URA em 02/11 e 03/11; SMS em 03/11 | ListBoss (API), URA, SMS | API para quem não ativou o lembrete, para quem não fez o diagnóstico e para todos os inscritos; URA e SMS com o telefone válido | API-BF-07, 08, 09 (`05_whatsapp_api/dia_da_live_03_11.md`, seção 2); URA-01 a 04 e SMS (`07_listboss_ura_sms/ura_e_sms.md`) | Automação |
| 19 | Dia da live, antes das 20h | 03/11, de 05h45 a 19h55 | SendFlow, ListBoss, e-mail | Grade minuto a minuto da seção 7.5 e do `dia_da_live_03_11.md`; troca de nome e capa às 05h45 | CP-BF-64 a 72; API-BF-10 a 13 e R03; EM-BF-22; LV-03-01 e LV-03-02 | Automação |
| 20 | Pausa de venda | 03/11, 19h15 | DataCrazy | Último lembrete automático e pausa de todo disparo ativo de venda do pipeline | Playbook `09_comercial_datacrazy/playbook_do_dia_da_live.md` | Comercial |
| 21 | Live ao vivo | 03/11, 20h00 | YouTube, SendFlow, ListBoss, ManyChat | Troca de nome e capa (19h30 a 19h45); "estou ao vivo"; ManyChat devolve o link da live; modo escuta do comercial até 22h | CP-BF-73 a 75; API-BF-14 a 16; LV-03-03 e LV-03-04; MC-BF-D01; URA-02 a 04 | Automação e Suporte |
| 22 | Abertura do carrinho | Link do checkout abre na tela da live (`[[PENDENTE: abertura do carrinho]]`, previsto 21h28) | Hotmart, SendFlow, ListBoss, e-mail, ManyChat | Ativar as 3 ofertas do Lote Especial; trocar nome e capa para "vagas abertas"; disparar carrinho aberto; ManyChat muda para a versão pós-live | CP-BF-76, 76-AL, 76-DS; API-BF-17 e 17-A; LV-03-05 e LV-03-06; MC-BF-V01, V01-A, V02, V03 | Automação e Comercial |
| 23 | Checkout | Clique em "entrar de vez" | Hotmart | Exibir o banner do lote e do segmento, formas de pagamento e garantia | `03_paginas/banner_checkout.md` (6 versões; S2 usa as 3 de não-aluna) | Web designer e Financeiro |
| 24 | Carrinho abandonado | Evento "abandono de carrinho" da Hotmart | Hotmart, ListBoss, DataCrazy | Toque 1 em até 1 h e toque 2 em 24 h; o comercial assume quando há resposta | API-01 e API-02 por S1, S2, S3 (`07_listboss_ura_sms/listboss_api_e_email.md`); EP-AB-01 e 02; API-BF-C03 nas últimas horas do lote; E2 e U2 (`09_comercial_datacrazy/copies_por_evento_pipeline.md`) | Automação e Comercial |
| 25 | Pix e boleto | Eventos "aguardando pagamento" e "boleto gerado" e seus vencimentos | Hotmart, ListBoss, DataCrazy | Entregar o código, lembrar dentro das janelas de 48 h (Pix) e de 4 a 5 dias (boleto), reabrir se vencer | API-03, 04, 05, 06; EP-PX-01 a 04; EP-BL-01 a 04; E3, E5, U3, U5 | Automação e Comercial |
| 26 | Compra recusada | Evento "compra recusada" | Hotmart, DataCrazy | Atendimento humano em até 10 minutos na noite da live; depois, API | API-07; EP-RC-01 e 02; E4 e U4 | Comercial |
| 27 | Compra aprovada (comprado) | Evento "compra aprovada" | Hotmart, ListBoss, DataCrazy | Cancelar recuperações e captação; tags de compra; e-mail transacional; API; onboarding; grupo da Vitalícia | API-08; EP-AP-01; PC-D0 (2 h depois); E6 e U6; API-BF-R04 a R06 e EMAIL-BF-R02 (grupo da Vitalícia); `03_paginas/onboarding_vitalicia.md` | Automação |
| 28 | Pós-compra | Dias depois da compra | DataCrazy, ListBoss | Trilha de entrada e primeiro passo em 48 h; depoimento; indicação; certificado e NPS | PC-D1, D2, D3, D7, D14, D21 (`06_emails/pos_compra_e_trilha.md`); API-BF-OK4 (a OK3 fica desligada, seção 6.3); `10_pos_compra/certificado_manual_nps.md` | Automação e Copy |
| 29 | Pedido de reembolso | Evento "pedido de reembolso" e "reembolsado" | Hotmart, ListBoss, DataCrazy | Acolher, ouvir antes de reter, cancelar o pós-compra, registrar o motivo | API-09; EP-RB-01 e 02; API-BF-RF2; E7, E8, U7 | Comercial e Suporte |
| 30 | Virada de lote | Hora do corte do Lote Especial (E1) e do Primeiro Lote (E2): `[[PENDENTE: data do lote]]` | Hotmart, ManyChat, ListBoss, SendFlow | Roteiro da seção 6.2: troca de oferta, banner, variáveis, nome e capa, disparos | CP-BF-V04 a V11; API-BF-V02 a V05; VL-01 a VL-03 | Automação e Suporte |
| 31 | Últimas horas e fechamento | Dia de E3 (`[[PENDENTE: fechamento]]`) | SendFlow, ListBoss, e-mail | Último dia, últimas horas, última hora, encerrado; desativar as ofertas no fechamento | CP-BF-V12 a V15; API-BF-V06 e V07; ES-01, UH-01 a UH-03, FE-01 e FE-02 | Automação |
| 32 | Lista de espera | Pesquisa (Q7 e faixa de renda baixa), carrinho encerrado ou clique na página | Página, DataCrazy, ListBoss | `BFP/26-LISTA-ESPERA`; e-mail e WhatsApp de confirmação; sem esforço comercial | `03_paginas/lista_de_espera.md`; CP-BF-V16 e API-BF-V08 (só se houver lista de espera) | Automação |
| 33 | Não comprado | Lido e sem resposta; viu a live e não comprou; inscrita que não apareceu | DataCrazy | Régua do silêncio de 5 toques (3 antes da live); aberturas A1 a A12 | `09_comercial_datacrazy/regua_do_silencio_black.md`; `aberturas_por_segmento.md` | Comercial |

### 1.3 Regras gerais de canal e cadência

1. **Cadência canônica** (rubrica, seção 1): grupos de WhatsApp às 11h30 e 20h todos os dias; e-mail às 07h (09h para os segmentos S1 e S2 nas datas dos segmentados); API às 09h. O terceiro slot de grupo, 16h30, é banco de reserva e **não é agendado**.
2. **Uma API por pessoa por dia.** A exceção é 03/11. Quando duas APIs caem no mesmo dia para a mesma pessoa, vale a prioridade da seção 2.5, item 12.
3. **Um disparo de WhatsApp por minuto** no dia 03/11. Campanha de grupo com três textos conta como um disparo. Duas APIs no mesmo horário saem com 5 minutos de diferença.
4. **Dois toques e para**, por evento de pagamento. Máximo de 3 para quem escolheu boleto.
5. **Janela de horário do comercial:** 7h a 8h, 16h a 17h e 19h a 22h. Exceção: o prazo do Pix ou do boleto manda mais que o horário.
6. **Rodapé de saída** em toda mensagem de API: "Digite SAIR se não quiser mais receber mensagens". Mensagem escrita por humano em conversa aberta não leva o rodapé.
7. **Nenhuma peça cita preço antes de 03/11, 20h**, nem "últimas vagas", "vagas acabando" ou contador de vagas. Escassez só por lote real e por "esta condição não se repete".
8. **Nenhuma peça afirma nem nega replay**: `[[PENDENTE: replay]]`.

### 1.4 Qual família de copy fica ativa

| Canal | Fonte ativa do texto | Quando usar a pasta 13 |
|---|---|---|
| Grupos | `05_whatsapp_api/lembretes_de_grupo_captacao.md` (CP-BF) | Quando `13_modelo_dr_joao/wpp_captacao.md` cobrir 13/10 a 03/11 (hoje termina em 31/10), ele substitui, sem agendar as duas |
| API de captação | `05_whatsapp_api/api_convite_indireto_e_aquecimento.md` (API-BF-04.x) e `convite_vip_alunas_e_quiz.md` | `13_modelo_dr_joao/api_alunas_captacao.md` e `api_demais_alunos_captacao.md` ficam como reserva. Nas datas do Golden Ticket das alunas (29/10 e 02/11) a captação das alunas da pasta 13 não é agendada |
| API de onboarding | `05_whatsapp_api/api_onboarding.md` (API-BF-01 a 03) | `13_modelo_dr_joao/api_onboarding.md` traz a mesma peça e mais um item (02, confirmada). Usar só uma |
| E-mail | `06_emails` (EM-BF, SA, SD, LV, OB, EP, PC) | `13_modelo_dr_joao/email_alunas_captacao.md` e `email_onboarding.md` são o formato do modelo das mesmas peças |
| Eventos de pagamento (API) | `07_listboss_ura_sms/listboss_api_e_email.md` (API-01 a API-09 por segmento) | `05_whatsapp_api/recuperacao_e_carrinho.md` só para o que o 07 não tem: C03, OK3, OK4, R01 a R06, RF2 |
| Comercial | `09_comercial_datacrazy` | Não há pasta 13 equivalente |

---

## 2. Listas, tags e regras de entrada e saída

### 2.1 Convenção de nomes

1. Prefixo `BFP/26-` para toda tag e `BFP/26 ` (com espaço) para toda lista. Maiúsculas, sem acento, hífen entre palavras.
2. Evento de ListBoss por segmento: `BFP/26-S1-<EVENTO>`, `BFP/26-S2-<EVENTO>`, `BFP/26-S3-<EVENTO>` (8 eventos x 3 segmentos = 24).
3. O padrão `MM/AA - PRODUTO - EVENTO` do Desafio continua valendo como **alias de relatório** (`11/26 - BLACK VITALICIA - COMPRA APROVADA`). Não criar as duas tags.
4. Nunca criar tag com prefixo `[GATILHO]` sem saber exatamente o que ela dispara.
5. Tag de ManyChat não leva o prefixo `BFP/26-`: usa o padrão `bf_*` do `fluxo_manychat.md` e é espelhada para o DataCrazy pela tabela 2.7.

### 2.2 Listas

| Lista (DataCrazy) | Tipo | Entra quando | Sai quando | Uso |
|---|---|---|---|---|
| `BFP/26 INSCRITOS` | Formulário da página de captura (equivale à "lista de formulário" do Desafio) | Webhook W01 | Nunca sai (histórico). O estado muda por tag | Alvo do onboarding, lembretes, URA e SMS |
| `BFP/26 BASE S1 ALUNAS` | Base de disparo | E-mail encontrado entre as alunas do Clube (fonte: `[[PENDENTE: fonte da lista de alunas, Hotmart do Clube ou área de membros]]`) | Quando deixa de ser aluna reconhecida | Golden Ticket, e-mails SA, API de captação das alunas |
| `BFP/26 BASE S2 VIVEU O MÉTODO` | Base de disparo | Comprador de Desafio, Imersão ou Aulão (e demais produtos) sem Clube | Quando vira aluna (passa para S1) | E-mails SD, API de captação de quem viveu o método |
| `BFP/26 BASE S3 LEADS ANTIGOS` | Base de disparo | Lista 2026 e leads antigos que não estão em S1 nem em S2 | Quando entra em S1 ou S2 | Convite indireto, e-mail diário |
| `BFP/26 LISTA DE ESPERA` | Formulário da lista de espera | Webhook W04 | Quando comprar, ou quando pedir SAIR | Avisos de nova oferta, sem pressão |
| `BFP/26 COMPRADORES` | Compradores (equivale à "lista de compradores" do Desafio) | Evento compra aprovada | Nunca sai (histórico); reembolso adiciona tag | Pós-compra e onboarding |
| `BFP/26 RECUPERACAO DE VENDAS` | Recuperação (equivale à "lista de recuperação" do Desafio) | Evento abandono, aguardando pagamento, boleto gerado, recusada ou expirada | Compra aprovada | Automações de recuperação |
| `BFP/26 SUPRESSAO` | Supressão global | Tag `BFP/26-SAIR` ou número inválido | Só por pedido da própria pessoa | Excluída de todo disparo |

Listas e campanhas nas outras ferramentas:

| Ferramenta | Estrutura |
|---|---|
| ListBoss | 24 eventos (`BFP/26-S1-...` a `BFP/26-S3-...`), uma lista de e-mail por segmento, uma lista de API por segmento |
| SendFlow | 4 campanhas de rodízio (seção 3) |
| ManyChat | Tags `bf_*` e campos globais da seção 4.2 |

### 2.3 Tags de segmento e de origem

| Tag | Regra de entrada | Regra de saída ou exclusão | Quem aplica |
|---|---|---|---|
| `BFP/26-ALUNA-CLUBE` (S1) | E-mail ou telefone na base de alunas do Clube (`[[CONFIRMAR: aluna com acesso ativo ou encerrado, em garantia, com reembolso]]`) | Sai se a base de alunas deixar de reconhecê-la. Vale sobre S2 e S3 | DataCrazy, por lookup (W05) |
| `BFP/26-VIVEU-METODO` (S2) | Não é S1 e comprou Desafio, Imersão, Aulão ou outro produto | Sai se virar S1. Vale sobre S3 | DataCrazy, por lookup |
| `BFP/26-NAO-ALUNA` (S3) | Não é S1 nem S2 | Sai se virar S1 ou S2 | DataCrazy, por exclusão |
| `BFP/26-ALUNA-INATIVA` | S1 sem acesso ativo (abertura A2 do comercial) | Sai se reativar | DataCrazy |
| `BFP/26-ALUNA-GARANTIA-7D` | Aluna que comprou o Clube nos últimos 7 dias | Sai no 8º dia. **Excluída de toda captação e venda** | DataCrazy |
| `BFP/26-JA-VITALICIO` | Já tem vitalício anterior (`[[CONFIRMAR: existe vitalício anterior]]`) | Fica | DataCrazy |
| `BFP/26-VM-DESAFIO` | S2 por compra do Desafio | Fica | DataCrazy |
| `BFP/26-VM-IMERSAO` | S2 por compra da Imersão | Fica | DataCrazy |
| `BFP/26-VM-AULAO` | S2 por participação no Aulão | Fica | DataCrazy |

### 2.4 Tags de funil, diagnóstico, presença, venda e controle

| Tag | Regra de entrada | Regra de saída ou exclusão | Quem aplica |
|---|---|---|---|
| `BFP/26-INSCRITA` | Webhook W01 recebido (reservou a vaga na live) | Fica. Exclui da captação com link de reserva e do convite indireto | Integrador |
| `BFP/26-NO-GRUPO` | Entrada confirmada em qualquer grupo (W09) | Sai quando sai do grupo | SendFlow |
| `BFP/26-SEM-GRUPO` | `INSCRITA` há mais de 2 horas sem `NO-GRUPO` | Sai quando entra no grupo | DataCrazy |
| `BFP/26-SAIU-GRUPO` | Saída do grupo (W09) | Sai quando volta | SendFlow |
| `BFP/26-LEMBRETE-ATIVO` | Clique em "Ativar lembrete" ou "Salvar a data" | Fica | Página e ListBoss |
| `BFP/26-CLICOU-LIVE` | Clique no link rastreado da live (W11) | Fica | Integrador |
| `BFP/26-VIP-ENVIADO` | Recebeu o Golden Ticket | Fica | ListBoss |
| `BFP/26-VIP-ATIVOU` | Ativou o Golden Ticket | Fica. Exclui da API-BF-05.2 | ListBoss |
| `BFP/26-DIAG-FEZ` | Resultado do diagnóstico recebido (W02) | Fica. Exclui da API-BF-08 | Integrador |
| `BFP/26-DIAG-TERMOSTATO` | Perfil principal = Termostato Invisível | Troca se refizer o diagnóstico | Integrador |
| `BFP/26-DIAG-AUTOSSABOTAGEM` | Perfil principal = Autossabotagem | Idem | Integrador |
| `BFP/26-DIAG-COBRANCA` | Perfil principal = Cobrança Que Você Só Faz Com Você | Idem | Integrador |
| `BFP/26-DIAG-TRAUMAS` | Perfil principal = Traumas Que Ainda Decidem | Idem | Integrador |
| `BFP/26-DIAG-CULPA` | Perfil principal = Culpa de Querer Mais | Idem | Integrador |
| `BFP/26-DIAG-SEM-NOME` | Devolutiva 6, "o padrão que ainda não tem nome" (todas as respostas "não sei" ou sem pontos) | Troca se refizer | Integrador |
| `BFP/26-PESQUISA-COMPLETA` | Parte C (Q6 a Q10) enviada | Fica | Integrador |
| `BFP/26-ASSISTIU-LIVE` | Presença confirmada na live (`[[PENDENTE: fonte e critério de presença]]`) | Fica | Integrador |
| `BFP/26-ASSISTIU-PARTE` | Presença parcial (mesma fonte) | Fica | Integrador |
| `BFP/26-NAO-ASSISTIU` | `INSCRITA` sem presença às 22h de 03/11 | Sai se assistir o replay (`[[PENDENTE: replay]]`) | DataCrazy |
| `BFP/26-ABANDONO` | Evento abandono de carrinho | Sai na compra aprovada | ListBoss e DataCrazy |
| `BFP/26-AGUARDANDO-PAGAMENTO` | Evento aguardando pagamento (Pix emitido) | Sai na compra aprovada ou na expiração | ListBoss |
| `BFP/26-BOLETO-GERADO` | Evento boleto gerado | Sai na compra aprovada ou no vencimento | ListBoss |
| `BFP/26-COMPRA-RECUSADA` | Evento compra recusada | Sai na compra aprovada | ListBoss |
| `BFP/26-COMPRA-EXPIRADA` | Pix expirado ou boleto vencido | Sai na compra aprovada | ListBoss |
| `BFP/26-COMPRA-APROVADA` | Evento compra aprovada | Fica. Remove todas as tags de recuperação | ListBoss |
| `BFP/26-COMPROU` | Compra aprovada, qualquer oferta | Fica. Exclui de toda captação e venda | ListBoss |
| `BFP/26-COMPROU-ESPECIAL` | Compra na oferta do Lote Especial | Fica | ListBoss |
| `BFP/26-COMPROU-PRIMEIRO` | Compra na oferta do Primeiro Lote | Fica | ListBoss |
| `BFP/26-COMPROU-ULTIMO` | Compra na oferta do Último Lote | Fica | ListBoss |
| `BFP/26-UPGRADE-ALUNA` | Compra aprovada de quem tem `ALUNA-CLUBE` | Fica. Abre U6 e U9 | DataCrazy |
| `BFP/26-LINK-ERRADO` | Aluna que comprou em oferta de S2 ou S3 (ou o inverso) | Sai quando o ajuste for feito | DataCrazy |
| `BFP/26-PEDIDO-REEMBOLSO` | Evento pedido de reembolso | Sai quando reembolsado ou retirado | ListBoss |
| `BFP/26-REEMBOLSADO` | Reembolso concluído | Fica. Cancela pós-compra | ListBoss |
| `BFP/26-LISTA-ESPERA` | Webhook W04 | Sai na compra | Integrador |
| `BFP/26-SEM-ESFORCO-COMERCIAL` | Renda nas duas primeiras faixas (Q6) e sem compra anterior, ou Q7 "não tenho o dinheiro disponível agora" | Sai se pedir atendimento | Integrador |
| `BFP/26-FICHA-QUENTE` | Ficha de interesse classificada como quente | Fica | Importação |
| `BFP/26-FICHA-MORNA` | Ficha morna | Fica | Importação |
| `BFP/26-FICHA-FRIA` | Ficha fria | Fica | Importação |
| `BFP/26-GRUPO-VITALICIOS` | Entrada no grupo da Vitalícia (pós-compra) | Fica | SendFlow |
| `BFP/26-ONBOARDING-48H` | Primeiro passo da trilha concluído em até 48 h | Fica | DataCrazy |
| `BFP/26-EM-ATENDIMENTO` | Resposta humana ou do contato no WhatsApp | Sai quando o atendimento fecha, ou em 48 h sem interação | DataCrazy |
| `BFP/26-SEM-RETORNO` | Passou pelos 5 toques da régua do silêncio sem responder | Fica. Sai das réguas de venda e entra na de conteúdo | DataCrazy |
| `BFP/26-SAIR` | Palavra SAIR, botão "Parar mensagens" ou pedido a humano | Fica. **Exclui de todo disparo de WhatsApp** | ListBoss, ManyChat e DataCrazy |
| `BFP/26-WPP-INVALIDO` | Número sem WhatsApp ou rejeitado pela API | Sai se o número for corrigido | ListBoss |

### 2.5 Matriz de exclusões entre séries de disparo

Cada disparo aponta a lista alvo e o que sai dela. "Exclusão fixa" vale em todos: `BFP/26-SAIR`, `BFP/26-WPP-INVALIDO` (só WhatsApp), `BFP/26-ALUNA-GARANTIA-7D` (captação e venda), `BFP/26-JA-VITALICIO` e, depois de 03/11, `BFP/26-COMPROU`.

| # | Série | Lista alvo | Excluir (além da exclusão fixa) | Observação |
|---|---|---|---|---|
| 1 | E-mail diário 07h (EM-BF-01 a 22) | Base de e-mail inteira | S1 em 14/10, 18/10, 22/10, 26/10, 29/10 e 01/11. S2 em 16/10, 20/10, 23/10, 27/10, 30/10 e 01/11 | O segmento excluído recebe o e-mail das 09h do dia (SA ou SD). 02/11 e 03/11: EM-BF-21 e EM-BF-22 só para quem **não** tem `INSCRITA` |
| 2 | E-mail 09h S1 (SA-01 a 06) e S2 (SD-01 a 06) | `BASE S1` e `BASE S2` | `INSCRITA` não exclui (o e-mail leva o botão do grupo) | 12 envios em 11 datas; 01/11 tem os dois |
| 3 | Lembretes de e-mail 12h (LV-28 a LV-02) | `INSCRITA` | S1 em 29/10 e 01/11; S2 em 30/10 e 01/11 | 28/10 a 02/11. `[[CONFIRMAR: 12h contra 07h, decisão 53 de 12]]` |
| 4 | E-mails de 03/11 (LV-03-01 a 06) | `INSCRITA` | LV-03-04 só para quem **não** tem `CLICOU-LIVE`; LV-03-06 tem versão aluna e não-aluna | Horários dependem do roteiro |
| 5 | Convite indireto (API-BF-04.x) | Lista 2026 e `BASE S3` mais `BASE S1` e `BASE S2` que não reservaram, por versão A, D, N | `INSCRITA`; ondas 2 e 3 só quem não clicou nas anteriores | Mensagem 1 é template; 2 a 5 só na janela de 24 h |
| 6 | Diagnóstico sem reserva (API-BF-06.1 a 06.3) | `DIAG-FEZ` sem `INSCRITA` | S1 (alunas); `COMPROU` | Mensagem 2 por perfil (`DIAG-*`). 06.3 só para quem clicou e não reservou |
| 7 | Onboarding (API-BF-01 a 03; OB-01 a 03) | `INSCRITA` | 02 e OB-01: quem tem `NO-GRUPO`. OB-03: quem tem `NO-GRUPO` ou `DIAG-FEZ`. 03: só quem tem `SAIU-GRUPO` | Gatilho por evento |
| 8 | Golden Ticket (API-BF-05.x) | `ALUNA-CLUBE` ativa | `ALUNA-INATIVA`; 05.2 exclui `VIP-ATIVOU` | Nas datas 29/10 e 02/11 vale sobre qualquer outra API do dia para a aluna |
| 9 | Lembretes API-BF-07, 08, 09 | `INSCRITA` | 07: quem tem `LEMBRETE-ATIVO`. 08: quem tem `DIAG-FEZ`. 09: ninguém | Datas 28/10, 30/10, 02/11 |
| 10 | API de 03/11 (API-BF-10 a 17) | `INSCRITA` | 11, 12, 13: quem tem `CLICOU-LIVE`. 15 e 16: só janela de 24 h (sem template) | 03/11 é a exceção da regra de 1 API por dia |
| 11 | API pós-live (API-BF-V01 a V08; 06.P1 a P3) | `INSCRITA` sem `COMPROU` | 06.P1 a P3: quem recebeu API-BF-V01 no mesmo dia; versão -A para S1 | Preço só por marcador |
| 12 | Prioridade de API no dia | Todos | Ordem: evento de pagamento > Golden Ticket > recuperação > lembrete > captação | Uma API por pessoa por dia; a de menor prioridade vai para o dia seguinte ou cai |
| 13 | Eventos de pagamento | Segmento da oferta comprada | Toque 2 só se não houver `COMPRA-APROVADA`; resposta humana para tudo | Seção 6.3 |
| 14 | Grupos de WhatsApp | Cada família de grupo | Não existe exclusão por pessoa em grupo. A diferença entre S1, S2 e S3 vem das 3 famílias e das variantes -AL e -DS | `[[PENDENTE: manter ou retirar compradoras dos grupos de captação depois de 03/11]]` |
| 15 | Comercial (pipelines, listas de ataque) | Cards criados pela integração | `SEM-ESFORCO-COMERCIAL`, `EM-ATENDIMENTO` (já com humano), `COMPROU` | Quem está nos eventos de checkout não entra na régua do silêncio |
| 16 | URA e SMS (02/11 e 03/11) | `INSCRITA` com telefone válido | `COMPROU` (após a abertura); SMS leva opt-out | Sem texto por segmento |

### 2.6 Como classificar o segmento (prioridade S1, S2, S3)

1. No webhook W01, procurar o e-mail normalizado (minúsculas, sem espaços) em `BASE S1`. Se achar, aplicar `ALUNA-CLUBE` e parar.
2. Senão, procurar em `BASE S2` (compradores de Desafio, Imersão, Aulão e demais produtos). Se achar, aplicar `VIVEU-METODO` mais a tag de origem `VM-*` e parar.
3. Senão, aplicar `NAO-ALUNA`.
4. Se o e-mail não bater e o telefone (formato E.164) bater, usar o telefone. Registrar `origem_segmento = telefone`.
5. Reclassificar às 18h de 03/11 (antes da abertura do carrinho) e a cada compra aprovada. A compra aprovada confere o e-mail do comprador contra o segmento da oferta: se divergir, aplicar `LINK-ERRADO` (etapa U8 do pipeline 2).
6. Quem aparece em dois segmentos fica no de maior prioridade (S1 sobre S2 sobre S3), em toda lista, tag e checkout.
7. Aluna com outro e-mail: a página C e a página das alunas pedem "e-mail da sua compra do Clube". Se não reconhecer, a pessoa vai para o suporte (`[[LINK: suporte WhatsApp]]`) e entra com `NAO-ALUNA` até a correção manual.

### 2.7 Correspondência com os nomes antigos

| Nome antigo | Onde aparece | Nome padrão |
|---|---|---|
| `11/26 - BLACK VITALICIA - ALUNAS` | `07_listboss_ura_sms/listboss_api_e_email.md`, `06_emails/eventos_de_pagamento.md` | `BFP/26-ALUNA-CLUBE` |
| `11/26 - BLACK VITALICIA - DESAFIO IMERSAO AULAO` | idem | `BFP/26-VIVEU-METODO` |
| `11/26 - BLACK VITALICIA - NAO ALUNAS` | idem | `BFP/26-NAO-ALUNA` |
| `MM/AA - PRODUTO - COMPRA APROVADA` e as outras 5 tags do Desafio | Doc do Desafio, passo 1 | `BFP/26-COMPRA-APROVADA`, `BFP/26-COMPRA-RECUSADA`, `BFP/26-AGUARDANDO-PAGAMENTO`, `BFP/26-BOLETO-GERADO`, `BFP/26-ABANDONO`, `BFP/26-PEDIDO-REEMBOLSO` (mais `COMPRA-EXPIRADA` e `REEMBOLSADO`, novas) |
| `bf_reservou` (ManyChat) | `fluxo_manychat.md` | `BFP/26-INSCRITA` |
| `bf_diagnostico` | idem | `BFP/26-DIAG-FEZ` |
| `bf_grupo` | idem | `BFP/26-NO-GRUPO` |
| `bf_aluna` | idem | `BFP/26-ALUNA-CLUBE` |
| `bf_aluno_desafio` | idem | `BFP/26-VIVEU-METODO` mais `BFP/26-VM-DESAFIO` |
| `bf_perfil_termostato`, `bf_perfil_autossabotagem`, `bf_perfil_cobranca`, `bf_perfil_traumas`, `bf_perfil_culpa` | idem | Campo `perfil_declarado` (percepção da pessoa). **Não** viram `DIAG-*`, que é o resultado calculado |
| `bf_ingresso`, `bf_story` | idem | Ficam só no ManyChat |
| "inscrito na live", "reservou a vaga" | `06_emails`, `05_whatsapp_api` | `BFP/26-INSCRITA` |

A equipe de Copy atualiza as notas dos arquivos de copy para o nome padrão. A automação usa sempre o nome padrão.

---

## 3. Grupos de WhatsApp (SendFlow, rodízio)

### 3.1 As quatro famílias

Cada família tem um link de rodízio, uma tag e uma copy própria. Ninguém escolhe grupo à mão: o botão da página de obrigado, da API e do ManyChat entrega o link da família pela tag de segmento (seção 2.6).

| Família | Quem entra | Nome base do grupo | Capa (arte) | Descrição | Boas-vindas (grupo cheio) | Variante de copy |
|---|---|---|---|---|---|---|
| G1 Geral | S3 e quem ainda não foi classificado | Black Próton Vitalícia: Grupo Oficial NN | Estado da tabela 3.3, `[[FOTO DRA]]` | `grupos_descricao_e_grupo_cheio.md`, 2.1 | idem, 3.1 (e 3.4 para quem entra depois) | Copy-base (CP-BF) |
| G2 Alunas | S1 | Clube Secreto: Condição para Alunas NN | idem | idem, 2.2 | idem, 3.2 | CP-BF-xx-AL |
| G3 Quem viveu o método | S2 | Black Próton Vitalícia: Quem Viveu o Método NN | idem | idem, 2.3 | idem, 3.3 | CP-BF-xx-DS |
| G4 Grupo da Vitalícia | Quem comprou (`BFP/26-COMPRA-APROVADA`) | `[[PENDENTE: nome do grupo da Vitalícia, um para todos ou um por segmento]]` | `[[PENDENTE: arte]]` | `[[PENDENTE: descrição do grupo pós-compra]]` | `[[PENDENTE: boas-vindas pós-compra]]` | API-BF-R04 a R06 e OK1 apontam para ele |

`NN` é o número do grupo no rodízio (01, 02, ...). Uma família de grupo opcional para quem está na lista de espera ("grupo de avisos") só existe se `[[CONFIRMAR: existe grupo de avisos gratuito fora da campanha]]`.

### 3.2 Regras do rodízio

| Item | Regra |
|---|---|
| Limite do WhatsApp por grupo | `[[CONFIRMAR: limite atual de participantes por grupo]]` |
| Limite operacional do rodízio | `[[PENDENTE: número de participantes que dispara a abertura do próximo grupo]]`. O próximo grupo já nasce pronto (nome com NN, capa do estado vigente, descrição e boas-vindas), antes de o anterior encher |
| Quantidade de grupos prevista | `[[PENDENTE: meta de leads]]` dividido pelo limite operacional, mais 10% de folga por família |
| Quem escreve | Só administradores (`[[CONFIRMAR: grupo somente administradores]]`) |
| Números dos administradores | Só números oficiais, todos cadastrados no verificador (`03_paginas/verificacao_de_numeros.md`). `[[PENDENTE: números oficiais, quantidade e limite por número por dia]]` |
| Link curto | Um link de rodízio por família: `[[LINK: grupo geral]]`, `[[LINK: grupo alunas]]`, `[[LINK: grupo quem viveu o método]]`, `[[LINK: grupo da Vitalícia, pós-compra]]`. Copiar só o endereço-base. Nunca com parâmetro de sessão |
| Atribuição | A origem do clique no grupo é a página, a API ou o ManyChat que levou até ele (UTM da seção 8 na etapa anterior). O link de grupo não leva utm |
| Entrada e saída | O SendFlow avisa o integrador (W09). A entrada **só conta** com o evento de entrada, não com o clique no botão |
| Boas-vindas | Fixada logo que o grupo abre e quando o rodízio abre um novo. Versão curta (3.4) para quem entra depois |
| Mensagem de grupo cheio | A boas-vindas é a mensagem de grupo cheio: ela é enviada no novo grupo e a página de obrigado oferece o "grupo 2" (`obrigado_e_pesquisa.md`, bloco 02) |
| Quem não pode estar | Compradores nos grupos de captação depois de 03/11: `[[PENDENTE: manter ou retirar]]` |

### 3.3 Troca de nome e capa (grade)

A troca é **manual, por duas pessoas, em janela fechada** (nunca no minuto de um disparo), e cada troca é uma linha da planilha de disparos (aba `Novembro26`). Os nomes e os textos de capa estão em `05_whatsapp_api/grupos_descricao_e_grupo_cheio.md`, seção 1 (o nome leva o emoji que o arquivo indica). Em G2 e G3 mantém-se "Condição para Alunas" e "Quem Viveu o Método" no nome.

| # | Quando | Estado | Nome (G1 geral) | Texto de capa (linhas) | Arte |
|---|---|---|---|---|---|
| TR1 | 13/10, ao abrir cada grupo, antes de 11h30 | Captação | Black Próton Vitalícia: Grupo Oficial | "A ÚLTIMA VEZ QUE VOCÊ VAI PRECISAR RECOMEÇAR" / "Live de revelação: 03/11, 20h" / "Reserve sua vaga no link da descrição" | ART-WPP-01 |
| TR2 | 03/11, 05h45 a 05h55 (antes do CP-BF-64) | Dia da live | Black Próton Vitalícia: É HOJE, 20h | "É HOJE ÀS 20H" / "Live de revelação da Black Próton Vitalícia" / "Ative o lembrete" | `[[PENDENTE: arte do estado]]` |
| TR3 | 03/11, 19h30 a 19h45 (termina com a sala aberta às 19h45) | Ao vivo | AO VIVO HOJE, 20H: Black Próton Vitalícia (`[[CONFIRMAR: o arquivo de grupos ainda indica 19h59 e "ESTOU AO VIVO"; vale a grade do dia da live]]`) | "ESTOU AO VIVO" / "Entre agora pelo link do grupo" / `[[FOTO DRA]]` | ART-WPP-02 |
| TR4 | 03/11, 21h35 a 21h50 (depois do CP-BF-76) | Vagas abertas | Vagas Abertas: Black Próton Vitalícia | "VAGAS ABERTAS" / "Black Próton Vitalícia" / "Condição do Lote Especial no link do grupo" | ART-WPP-03 |
| TR5 | Dia de E1, manhã (antes do CP-BF-V04, 11h30) | Último dia do lote | Inscrições: Último dia | "ÚLTIMO DIA" / "Black Próton Vitalícia" / "Esta condição não se repete" | `[[PENDENTE: arte do estado]]` |
| TR6 | Dia de E1, 3 horas antes do corte | Últimas horas | Inscrições: Últimas horas | "ÚLTIMAS HORAS" / "Black Próton Vitalícia" / "Esta condição não se repete" | `[[PENDENTE: arte do estado]]` |
| TR7 | Hora do corte de E1 | Virada: Primeiro Lote | Vagas Abertas: Primeiro Lote | "VIROU O LOTE" / "Primeiro Lote" / "Veja a condição atual" | `[[PENDENTE: arte do estado]]` |
| TR8 | Dia de E2, manhã | Último dia do lote | Inscrições: Último dia | idem TR5 | idem |
| TR9 | Dia de E2, 3 horas antes | Últimas horas | Inscrições: Últimas horas | idem TR6 | idem |
| TR10 | Hora do corte de E2 | Virada: Último Lote | Vagas Abertas: Último Lote | "VIROU O LOTE" / "Último Lote" / "Veja a condição atual" | idem |
| TR11 | Dia de E3 (fechamento), manhã | Último dia | Inscrições: Último dia | idem TR5 | idem |
| TR12 | Dia de E3, início das últimas horas | Últimas horas | Inscrições: Últimas horas | idem TR6 | idem |
| TR13 | Fechamento | Encerrado | Black Próton Vitalícia: Encerrado | "ENCERRADO" / "Obrigada por estar comigo" / "O que vier depois é outra oferta, com outro preço" | `[[PENDENTE: arte do estado]]` |

E1, E2 e E3 são as datas `[[PENDENTE: data do lote]]` (duas viradas) e `[[PENDENTE: fechamento]]`. Em TR3 a TR13 as famílias G2 e G3 seguem a tabela com o nome indicado na seção 1.2 e 1.3 do arquivo de grupos. Em TR7 e TR10 o nome do estado e o texto da capa mudam junto com o corte da oferta (seção 6.2): nunca antes.

Contagem de artes: 13 trocas x 3 famílias de captação = no máximo 39 capas. A maior parte repete a arte entre G1, G2 e G3 mudando só a linha 2 (seção 1.2 e 1.3 do arquivo de grupos). `[[PENDENTE: artes dos estados sem ART-WPP, e quantas versões por família]]`.

### 3.4 Disparos de grupo que dependem da troca

| Troca | Disparo logo depois | ID |
|---|---|---|
| TR1 | Primeiro disparo de captação | CP-BF-01 (alunas -AL, quem viveu -DS) |
| TR2 | Ritual da manhã | CP-BF-64 (06h) |
| TR3 | Falta 10 minutos (19h50) e "estou ao vivo" (20h) | CP-BF-72, CP-BF-73 |
| TR4 | Carrinho aberto já foi disparado às 21h28; a troca vem depois | CP-BF-76 (-AL, -DS) |
| TR5 a TR6 | Último dia e últimas horas do Lote Especial | CP-BF-V04, V05 (-AL) |
| TR7 | Virou o lote | CP-BF-V06 (-AL) |
| TR8 a TR10 | Primeiro Lote: último dia, últimas horas, virou o Último Lote | CP-BF-V08, V09, V10 (-AL) |
| TR11 a TR13 | Último dia, últimas horas, última hora, encerrou | CP-BF-V12 a V15 (-AL) |

---

## 4. ManyChat (Instagram e WhatsApp API oficial)

### 4.1 Palavras-chave

Fonte: `05_whatsapp_api/fluxo_manychat.md`. Formato: direct do Instagram `@dra.proton`, acionado por comentário em post ou reel e por resposta a story.

| Palavra-chave | Variantes aceitas | Gatilho | Fluxo | Destino | Tag aplicada |
|---|---|---|---|---|---|
| VITALÍCIA | VITALICIA, vitalícia, vitalicia, "quero a vitalícia" | Comentário, resposta a story, DM | MC-BF-01 e 02, depois ramo A ou B. A partir de 03/11, 20h: MC-BF-D01. Depois da abertura do link: MC-BF-V01 ou V01-A, V02, V03 | Pré-live: reserva da vaga (`[[LINK: captura A]]`) ou ingresso. Pós-abertura: checkout do lote e do segmento | `bf_reservou` (quando a inscrição chega), `bf_aluna` por e-mail |
| DIAGNÓSTICO | DIAGNOSTICO, "meu diagnóstico" | Comentário, resposta a story, DM | MC-BF-C01 a C03, depois MC-BF-02 | `[[LINK: diagnóstico dos 5 perfis]]` e, no fim, reserva da vaga | `bf_diagnostico`, `bf_perfil_*` |
| TERMOSTATO, SABOTAGEM, COBRANÇA, TRAUMA, CULPA (opcionais, teste por criativo de dor) | sem acento | Comentário no criativo daquele perfil | Caminho DIAGNÓSTICO | Mesmo do DIAGNÓSTICO | `bf_perfil_*` do perfil |
| Pedido de link sem palavra ("link", "como entro", "quero") | | Comentário | Resposta pública e fluxo VITALÍCIA | Reserva | |

Resposta pública ao comentário: MC-BF-00a a 00d, alternadas para evitar bloqueio por repetição.

### 4.2 Fluxo e destino

```text
Entrada (VITALÍCIA) -> MC-BF-01 (botão Sim) -> MC-BF-02 "Você já reservou a sua vaga?"
  Ainda não -> RAMO A: A03 Continuar -> A04 -> A05 (link da captura com UTM de manychat)
              -> A06 (volta e escreve VITALÍCIA) -> confere tag bf_reservou
                   se não chegou -> A07 (aguarde alguns minutos)
  Já reservei -> RAMO B: B03 (confirma o nome) [B03b outro nome] -> B04 (emitindo)
              -> B05 (ingresso, depende do template da arte)
              -> B06 (quer o diagnóstico?) -> B07 (link do diagnóstico) -> B08 (5 botões, grava perfil)
              -> B08-TI, AS, CB, TR ou CQ -> B09 (story, opcional) -> B10 -> B11 (grupo pela tag) -> B12
Entrada (DIAGNÓSTICO) -> RAMO C: C01 -> C02 (5 botões) -> B08-xx -> C03 -> volta a MC-BF-02
Lembretes: L01 (6 h sem reservar), L02 (3 h sem "Quero"), L03 (story), L04 (12 h sem grupo)
Pós-live (03/11): 20h até a abertura do link -> D01 (link da live)
                  depois da abertura -> V01 (ou V01-A se bf_aluna) -> V02 (link do checkout) -> V03 (dúvida)
```

**Estado do fluxo e variáveis globais** (campos globais do ManyChat, editados à mão por Automação em cada virada):

| Campo global | Valores | Quem muda |
|---|---|---|
| `estado_live` | PRE, AO_VIVO, CARRINHO_ABERTO, ENCERRADO | Automação: AO_VIVO às 20h00; CARRINHO_ABERTO quando o link do checkout abre; ENCERRADO no fechamento |
| `lote_atual` | Lote Especial, Primeiro Lote, Último Lote | Automação, na virada |
| `data_virada` | data e hora real do próximo corte | Automação, na virada |
| `link_checkout_s1`, `link_checkout_s3` | links do lote vigente (alunas e não-alunas). S2 usa o link de S2 | Automação, na virada |
| `link_live` | link da live no YouTube | Automação |

Nenhuma variável de "vagas restantes" existe, e não deve existir.

### 4.3 Espelho de tags e campos entre ManyChat e DataCrazy

| ManyChat | Direção | DataCrazy |
|---|---|---|
| `bf_reservou` | ManyChat para DataCrazy e o inverso | `BFP/26-INSCRITA` (o formulário de captura é a fonte; o ManyChat só confirma). A tag precisa chegar ao ManyChat em minutos |
| `bf_diagnostico` | ManyChat para DataCrazy | `BFP/26-DIAG-FEZ` só se a pessoa terminou o diagnóstico (W02); o botão "Já fiz" não prova |
| `bf_perfil_*` | ManyChat para DataCrazy | Campo `perfil_declarado` |
| `bf_grupo` | DataCrazy para ManyChat | `BFP/26-NO-GRUPO` |
| `bf_aluna` | DataCrazy para ManyChat | `BFP/26-ALUNA-CLUBE` (decide a versão V01-A e o grupo) |
| `bf_aluno_desafio` | DataCrazy para ManyChat | `BFP/26-VIVEU-METODO` (decide o grupo G3) |
| `bf_ingresso`, `bf_story` | Só ManyChat | Não espelhar |

### 4.4 WhatsApp API oficial dentro do ManyChat (padrão do passo 3 do Desafio)

No Desafio, a automação de compra aprovada do DataCrazy chama um fluxo do ManyChat por webhook. Na Black o mesmo padrão vale para os fluxos abaixo. Cada fluxo exige template aprovado na Meta (prazo de 7 dias antes do primeiro uso, regra do cronograma de disparos).

| Fluxo | Gatilho no DataCrazy ou ListBoss | Webhook | Templates | Primeiro uso | Submeter até |
|---|---|---|---|---|---|
| F1 Onboarding (bem-vinda, não confirmou, saiu do grupo) | Entra em `INSCRITOS`; sem `NO-GRUPO`; `SAIU-GRUPO` | W07 | API-BF-01, 02, 03 (-N, -D, -A): 9 | 13/10 | 06/10 (**atrasado**, ver risco R1) |
| F2 Convite indireto, onda 1 | Lista 2026 e leads antigos sem `INSCRITA` | W07 | API-BF-04.1 (-N, -D, -A): 3 | 13/10, 09h | 06/10 (**atrasado**) |
| F3 Diagnóstico sem reserva | `DIAG-FEZ` sem `INSCRITA` | W07 | API-BF-06.1: 1 (06.2 e 06.3 vão na janela de 24 h) | 14/10 | 07/10 (hoje) |
| F4 Recuperação de grupo | `INSCRITA` sem `NO-GRUPO` | W07 | API-BF-R01, R02, R03: 3 | 20/10 | 13/10 |
| F5 Golden Ticket | `ALUNA-CLUBE` ativa | W07 | API-BF-05.1, 05.1V, 05.2, 05.3: 4 | 22/10 | 15/10 |
| F6 Lembretes | `INSCRITA` | W07 | API-BF-07, 08, 09: 3 | 28/10 | 21/10 |
| F7 Dia da live | `INSCRITA` | W07 | API-BF-10, 10-A, 11, 12, 13, 14, 17, 17-A: 8 (15 e 16 são mensagens de sessão) | 03/11 | 27/10 |
| F8 Eventos de pagamento (ListBoss) | Eventos Hotmart | W06 e W07 | API-01 a API-09 por S1, S2, S3: 27 | 03/11 | 27/10 |
| F9 Pós-compra e recuperação do grupo da Vitalícia | `COMPRA-APROVADA` | W07 | API-BF-R04, R05, R06, OK3, OK4, RF2 | 03/11 e depois | 27/10 |
| F10 Pós-live de lote | `INSCRITA` sem `COMPROU` | W07 | API-BF-V01 a V08 (e -A), 06.P1 | 04/11 em diante | 28/10 |
| F11 Comercial | Cards do DataCrazy | Link de integração do pipeline (W08) | Respostas rápidas, sem template | 03/11 | 27/10 |

### 4.5 Janelas e limites

1. Instagram: mensagem de acompanhamento só dentro de 24 horas da última interação. Os lembretes L01 a L04 respeitam isso. No dia 03/11, usar WhatsApp (grupo e API), não Instagram.
2. WhatsApp API: mensagem 1 é template; mensagens de sessão (API-BF-04.2 a 04.5, 15 e 16) só dentro de 24 h da resposta.
3. Botões: Instagram, até 3 por mensagem e respostas rápidas para os 5 perfis (`[[CONFIRMAR: limites de caracteres e de botões da plataforma]]`). API: até 2 botões por mensagem, 25 caracteres.
4. Não prometer nada que dependa de "o link só chega no grupo": o link da live também sai por e-mail e pela página. `[[CONFIRMAR: a afirmação "quem fica fora do grupo não recebe o link" em API-BF-02 e nas recuperações]]`.

### 4.6 Pendências do fluxo

1. `[[PENDENTE: template da arte do ingresso, com {{nome}}, e o serviço de imagem dinâmica]]`. Sem ele, o Ramo B vai de B03 direto para B06.
2. `[[PENDENTE: presente de compartilhamento]]`. Se não existir, apagar B09, B10, L02 e L03. O Ebook de Grabovoi **não** pode ser o presente.
3. `[[PENDENTE: integração do formulário de captura com o ManyChat]]`: a tag `bf_reservou` precisa chegar em minutos. Confirmar se a integração existe ou se o integrador faz a ponte.
4. `[[PENDENTE: interruptor de estado]]`: quem muda `estado_live` e quem confere.

---

## 5. Webhooks e integrações

### 5.1 Mapa

Nenhuma URL real é escrita aqui. Cada endereço fica no cofre de senhas e entra como `[[LINK: webhook ...]]`. Método HTTP POST com corpo JSON e segredo de assinatura por webhook `[[PENDENTE: padrão de autenticação do integrador]]`.

| ID | Nome | Origem | Gatilho | Destinos | Link |
|---|---|---|---|---|---|
| W01 | Captura | Página de captura | Envio do formulário | Planilha (aba CAPTURA), DataCrazy (contato, lista `INSCRITOS`, tags), ListBoss (lista por segmento), ManyChat (`bf_reservou`) | `[[LINK: webhook captura]]` |
| W02 | Diagnóstico | Página de obrigado | Resultado calculado (parte B) | Planilha (aba DIAGNOSTICO), DataCrazy (campos e tag `DIAG-*`), ListBoss (tag), ManyChat (perfil) | `[[LINK: webhook diagnóstico]]` |
| W03 | Pesquisa | Página de obrigado | Envio da parte A e da parte C (dois eventos parciais, para medir onde a pessoa para) | Planilha (aba PESQUISA), DataCrazy (campos, `PESQUISA-COMPLETA`, `SEM-ESFORCO-COMERCIAL`) | `[[LINK: webhook pesquisa]]` |
| W04 | Lista de espera | Página da lista de espera | Envio | Planilha (aba LISTA_ESPERA), DataCrazy (`LISTA-ESPERA`), ListBoss (e-mail e WhatsApp de confirmação) | `[[LINK: webhook lista de espera]]` |
| W05 | Reconhecimento de aluna | Páginas C e das alunas | E-mail digitado | Consulta à `BASE S1`; devolve "reconhecida" ou "não reconhecida"; grava a tentativa na aba CAPTURA | `[[LINK: webhook reconhecimento de aluna]]` |
| W06 | Eventos da Hotmart | Hotmart | Evento do produto, por oferta | ListBoss (evento do segmento), planilha EVENTOS DE COMPRA, DataCrazy (card e tags) | `[[LINK: webhook Hotmart]]` |
| W07 | API oficial | DataCrazy ou ListBoss | Gatilhos da seção 4.4 | ManyChat (fluxo de WhatsApp) | `[[LINK: webhook API oficial]]` |
| W08 | Pipelines | DataCrazy | Link de integração de cada pipeline (P1 e P2) | Fluxo de onboarding e de eventos | `[[LINK: webhook pipeline P1]]`, `[[LINK: webhook pipeline P2]]` |
| W09 | Grupos | SendFlow | Entrada ou saída de grupo | DataCrazy (tags `NO-GRUPO`, `SAIU-GRUPO`, `GRUPO-VITALICIOS`), planilha (aba GRUPOS) | `[[LINK: webhook SendFlow]]` |
| W10 | Espelho de tags | ManyChat e DataCrazy | Mudança de tag ou campo | Os dois lados, conforme a seção 4.3 | `[[LINK: webhook ManyChat para DataCrazy]]` |
| W11 | Presença | Link rastreado da live | Clique e permanência | DataCrazy (`CLICOU-LIVE`, `ASSISTIU-*`), planilha (aba PRESENCA) | `[[LINK: webhook presença]]` |
| W12 | Opt-out | ListBoss, ManyChat, DataCrazy | Palavra SAIR ou botão "Parar mensagens" | Tag `SAIR` em todas as ferramentas e inclusão em `BFP/26 SUPRESSAO` | `[[LINK: webhook opt-out]]` |

### 5.2 Dicionário de campos

Legenda de destino: P planilha, D DataCrazy, L ListBoss, M ManyChat. Obrigatório = o webhook rejeita se faltar.

| Campo | O que é | Obrigatório | Origem | Destino | Observação |
|---|---|---|---|---|---|
| `nome` | Nome informado | Sim | Formulário | P D L M | Primeiro nome em `{{nome}}` |
| `email` | E-mail em minúsculas, sem espaços | Sim | Formulário | P D L M | Chave de dedupe e de segmento |
| `telefone` | Número em formato E.164 (DDI, DDD e número) | Sim | Formulário | P D L M | Máscara na página; validar DDI |
| `telefone_original` | Como veio | Não | Formulário | P | Como na coluna "Telefone (como veio)" do quiz do Desafio |
| `ddi` | Código do país | Não | Derivado | P D | |
| `data_hora` | Carimbo no fuso de São Paulo | Sim | Integrador | P | |
| `evento` | Valor fixo `CAPTACAO BFP26` | Sim | Integrador | P | Como a coluna "Evento" do quiz do Desafio |
| `pagina_origem` | A, B, C, D ou VSL | Sim | Página | P D | Para medir qual captura converte |
| `segmento` | S1, S2 ou S3 | Sim | Seção 2.6 | P D L M | |
| `origem_segmento` | Desafio, Imersão, Aulão, outro, telefone | Não | Seção 2.6 | P D | |
| `utm_id` | Fixo `bfp26` | Sim | URL | P D | Seção 8 |
| `utm_campaign` | `bfp26-captacao`, `bfp26-venda` ou `bfp26-espera` | Sim | URL | P D | |
| `utm_source` | Canal | Sim | URL | P D | |
| `utm_medium` | organico, pago, crm, comercial | Sim | URL | P D | |
| `utm_content` | ID da copy ou do criativo | Sim | URL | P D | |
| `utm_term` | Perfil (captação) ou lote (venda) | Sim | URL | P D | |
| `src` e `sck` | Parâmetros da Hotmart | Só em venda | URL | P D | |
| `aceite_lgpd` | Sim ou não | Sim | Formulário | P D | Com `versao_politica` |
| `versao_politica` | Versão da política aceita | Sim | Página | P | |
| `q1_perfil_reconhecido` | Perfil que a pessoa diz ter (Q1) | Não | Pesquisa A | P D M | Vira `perfil_declarado` |
| `q2_tempo_acompanha` | Há quanto tempo acompanha a Dra. | Não | Pesquisa A | P D | |
| `q3_vivencias` | O que já viveu (múltipla escolha) | Não | Pesquisa A | P D | Pré-preenchida nas capturas C e D |
| `q4_area` | Área a arrumar | Não | Pesquisa A | P D | |
| `q5_impede_ganhar` | O que impede de ganhar | Não | Pesquisa A | P D | |
| `d1` a `d7` | Respostas do diagnóstico | Não | Diagnóstico | P | Aba restrita |
| `pontos_t`, `pontos_a`, `pontos_c`, `pontos_r`, `pontos_g` | Pontos por perfil | Não | Diagnóstico | P | |
| `perfil_principal` | Termostato, Autossabotagem, Cobrança, Traumas, Culpa ou Sem nome | Não | Diagnóstico | P D L M | Gera a tag `DIAG-*` |
| `perfil_secundario` | Segundo mais pontuado | Não | Diagnóstico | P D | Empate usa D3, depois D2 |
| `pct_termostato`, `pct_autossabotagem`, `pct_cobranca`, `pct_traumas`, `pct_culpa` | Percentual por perfil | Não | Diagnóstico | P | Como as colunas de % do Desafio |
| `sem_nome` | Sim quando o resultado é a devolutiva 6 | Não | Diagnóstico | P D | |
| `refez_diagnostico` | Sim ou não | Não | Diagnóstico | P | |
| `q6_renda` | Faixa de renda (opcional) | Não | Pesquisa C | P D | Dado sensível; aba restrita |
| `q7_hesitacao` | O que faria hesitar | Não | Pesquisa C | P D | Alimenta objeções a a m |
| `q8_pagamento` | Forma de pagamento preferida | Não | Pesquisa C | P D | |
| `q9_barreira_live` | O que poderia impedir de estar na live | Não | Pesquisa C | P D | Alimenta o lembrete |
| `q10_pergunta_aberta` | Texto livre até 400 caracteres | Não | Pesquisa C | P | Sem publicar sem autorização; aviso "não escreva documentos, senhas ou dados de cartão" |
| `grupo_familia` e `grupo_numero` | G1 a G4 e o NN | Não | SendFlow | P D | |
| `entrou_grupo_em` e `saiu_grupo_em` | Carimbos | Não | SendFlow | P D | |
| `perfil_declarado` | Perfil que a pessoa escolheu nos botões | Não | ManyChat | D | Diferente do resultado |
| `temperatura` | Quente, morna, fria | Não | Ficha de interesse | D | |
| `genero` | `[[PENDENTE: campo de gênero no CRM]]` | Não | CRM | D | Para ajustar o feminino (cerca de 21% são homens) |
| `responsavel` | Quem atende | Não | DataCrazy | D | |
| `oferta` | Código `BFP26-S1-ESP` etc. | Em venda | Hotmart | P D L | Seção 6.1 |
| `lote` | ESP, 1L ou UL | Em venda | Hotmart | P D L M | |
| `transacao_id` | ID da transação | Em venda | Hotmart | P D | |
| `status_pagamento` | Aprovada, recusada, aguardando, boleto, expirada, reembolso | Em venda | Hotmart | P D | |
| `forma_pagamento` e `parcelas` | Pix, cartão, boleto, número de parcelas | Em venda | Hotmart | P D | |
| `data_vencimento` | Vencimento do Pix ou do boleto | Em venda | Hotmart | D L | Variável `{{data_vencimento}}` |
| `motivo_recusa` e `motivo_reembolso` | Motivo | Não | Hotmart e atendimento | P D | `{{motivo}}` |
| `sair` | Sim ou não | Sim | Todas | D L M | |
| `toque_parou` | Em qual toque da régua parou | Não | DataCrazy | D | |

Variáveis de texto que as copys usam e precisam existir no ListBoss e no DataCrazy: `{{nome}}`, `{{link}}` (checkout do lote e do segmento), `{{codigo_pix}}`, `{{link_boleto}}`, `{{data_vencimento}}`, `{{link_aula}}`, `{{link_live}}`, `{{link_diagnostico}}`, `{{link_grupo}}`, `{{link_lembrete}}`, `{{link_onboarding}}`, `{{link_area_membros}}`, `{{link_suporte}}`, `{{lote_atual}}`, `{{data_virada}}`, `{{link_checkout}}`, `{{motivo}}`, `{{solucao}}`. Botões em colchetes, no máximo 2 por mensagem de API. Rodapé SAIR em toda API. Qualquer variável sem valor impede o envio (não enviar mensagem com `{{...}}` aparente).

### 5.3 Planilhas e abas

| Planilha | Abas e colunas principais | Acesso |
|---|---|---|
| `LEADS CAPTURADOS BLACK PRÓTON VITALÍCIA` | CAPTURA (data_hora, evento, nome, e-mail, telefone, telefone_original, ddi, pagina_origem, segmento, origem_segmento, utm_id, utm_campaign, utm_source, utm_medium, utm_content, utm_term, aceite_lgpd). GRUPOS (e-mail, grupo_familia, grupo_numero, entrou, saiu). PRESENCA (e-mail, clicou, assistiu, fonte). LISTA_ESPERA (nome, e-mail, telefone, motivo, data_hora). LEGENDA (listas de valores e significado das tags) | Equipe de automação e comercial |
| mesma planilha, abas **restritas** | DIAGNOSTICO (data_hora, e-mail, d1 a d7, pontos, perfil_principal, perfil_secundario, pct por perfil, sem_nome, refez). PESQUISA (e-mail, q1 a q10) | Só Automação e Comercial líder (dado sensível por proximidade) |
| `EVENTOS DE COMPRA BLACK PRÓTON VITALÍCIA 1126` | EVENTOS (data_hora, transacao_id, evento, oferta, segmento, lote, status_pagamento, forma_pagamento, parcelas, src, sck, utm_*). OFERTAS (código, janela, status, link, banner). VIRADA_DE_LOTE (log com quem fez e a que horas). REEMBOLSOS. LINK_ERRADO | Automação, Financeiro e Comercial |
| Planilha de disparos | Aba `Novembro26` com as linhas de BFP/26, incluindo as trocas de nome e capa | Equipe toda |
| Lista de ataque do comercial | Estrutura em `09_comercial_datacrazy/lista_de_ataque_templates.md` | Comercial |

### 5.4 Regras de qualidade

1. Dedupe por e-mail normalizado e por telefone E.164. Reenvio do formulário atualiza o contato, não cria outro.
2. Cada webhook responde 200 só depois de gravar. Falha vai para uma fila de repetição e para um alerta ao responsável `[[PENDENTE: canal de alerta]]`.
3. Campos de UTM nunca ficam vazios: se faltarem, gravar `sem-utm` (o Desafio perdeu essa informação).
4. Telefone sem DDI ou com menos dígitos que o padrão vai para a tag `BFP/26-WPP-INVALIDO` e para a fila de revisão.
5. Todo teste usa contatos fictícios da equipe e marca o campo `evento = TESTE`, para não poluir as métricas.

### 5.5 LGPD e dados sensíveis

1. A página de captura pede consentimento específico para WhatsApp e e-mail. O aceite e a versão da política são gravados.
2. O resultado do diagnóstico, a faixa de renda e a pergunta aberta são dado pessoal sensível por proximidade (falam de saúde emocional e de finanças). Ficam em abas restritas e **não** são usados em anúncio individualizado. `[[CONFIRMAR: parecer jurídico sobre o diagnóstico]]`
3. A pergunta aberta (Q10) avisa para não escrever documentos, senhas ou dados de cartão.
4. A pessoa sai de qualquer lista com SAIR (WhatsApp) ou com o descadastro do e-mail. `BFP/26-SAIR` suprime WhatsApp. O e-mail transacional de compra aprovada continua `[[CONFIRMAR: jurídico]]`.
5. Protocolo de crise (CVV 188, SAMU 192) e LGPD na consulta de números: `[[CONFIRMAR: jurídico]]`, como em `12_decisoes_e_pendencias.md`, item 30.

---

## 6. Hotmart

### 6.1 Produto e ofertas

Um produto, nove ofertas. Cada oferta tem preço, banner, página de obrigado e link próprios. S2 (quem viveu o método) paga como não-aluna, mas tem **oferta própria**, para medir e para detectar compra no link errado. `[[CONFIRMAR: decisão da Dra. sobre S2 usar oferta própria]]`. Se a decisão for não separar, as 3 ofertas de S2 viram cópias das de S3 e nada muda na automação.

| Item do produto | Valor |
|---|---|
| Nome | Black Próton Vitalícia |
| ID do produto | `[[PENDENTE: ID do produto Hotmart]]` |
| O que entra | Clube Secreto e 11 produtos do catálogo atual, acesso vitalício, pagamento único |
| Entrega | Área de Membros `[[PENDENTE: onde ficam os 11 produtos e o Clube para quem compra]]` |
| Página de obrigado depois da compra | `[[LINK: onboarding Vitalícia]]`: versão aluna (S1) e versão nova no Clube (S2 e S3). Copy: `03_paginas/onboarding_vitalicia.md` |
| Garantia | `[[PENDENTE: garantia]]` (o Clube tem 7 dias; a Vitalícia não está confirmada). Nenhuma peça promete devolução sem regra escrita |
| Parcelamento e formas de pagamento | `[[PENDENTE: parcelamento]]`. Pix e cartão; boleto `[[CONFIRMAR: boleto]]`; dois cartões e cartão mais Pix `[[CONFIRMAR]]` |
| Banner | `03_paginas/banner_checkout.md`: 6 versões (3 lotes x aluna e não-aluna). S2 usa as 3 de não-aluna |

| Código da oferta | Segmento | Lote | Janela de venda | Preço | Banner | Link |
|---|---|---|---|---|---|---|
| `BFP26-S1-ESP` | S1 alunas | Lote Especial | Da abertura do carrinho (`[[PENDENTE: abertura do carrinho]]`) até `[[PENDENTE: data do lote]]` (E1) | `[[PREÇO LOTE ALUNAS]]` | Versão 1 | `[[LINK: checkout S1-ESP]]` |
| `BFP26-S1-1L` | S1 alunas | Primeiro Lote | De E1 até `[[PENDENTE: data do lote]]` (E2) | `[[PREÇO LOTE ALUNAS]]` | Versão 2 | `[[LINK: checkout S1-1L]]` |
| `BFP26-S1-UL` | S1 alunas | Último Lote | De E2 até `[[PENDENTE: fechamento]]` (E3) | `[[PREÇO LOTE ALUNAS]]` | Versão 3 | `[[LINK: checkout S1-UL]]` |
| `BFP26-S2-ESP` | S2 viveu o método | Lote Especial | Igual a S1-ESP | `[[PREÇO LOTE NÃO-ALUNAS]]` | Versão 4 | `[[LINK: checkout S2-ESP]]` |
| `BFP26-S2-1L` | S2 viveu o método | Primeiro Lote | Igual a S1-1L | `[[PREÇO LOTE NÃO-ALUNAS]]` | Versão 5 | `[[LINK: checkout S2-1L]]` |
| `BFP26-S2-UL` | S2 viveu o método | Último Lote | Igual a S1-UL | `[[PREÇO LOTE NÃO-ALUNAS]]` | Versão 6 | `[[LINK: checkout S2-UL]]` |
| `BFP26-S3-ESP` | S3 não-alunas | Lote Especial | Igual a S1-ESP | `[[PREÇO LOTE NÃO-ALUNAS]]` | Versão 4 | `[[LINK: checkout S3-ESP]]` |
| `BFP26-S3-1L` | S3 não-alunas | Primeiro Lote | Igual a S1-1L | `[[PREÇO LOTE NÃO-ALUNAS]]` | Versão 5 | `[[LINK: checkout S3-1L]]` |
| `BFP26-S3-UL` | S3 não-alunas | Último Lote | Igual a S1-UL | `[[PREÇO LOTE NÃO-ALUNAS]]` | Versão 6 | `[[LINK: checkout S3-UL]]` |

Regras das ofertas:

1. Todas nascem **desativadas** (rascunho) e só as 3 do Lote Especial são ativadas na abertura do carrinho. Nenhum checkout pode estar acessível antes de 03/11, 20h.
2. O preço aparece no checkout, não no texto da mensagem: assim a mensagem não desatualiza na virada.
3. O código da oferta (`oferta`) e o segmento da oferta viajam no evento e entram na planilha de eventos.
4. `[[CONFIRMAR: a Hotmart permite agendar início e fim da oferta; se não, a virada é manual com responsável e horário (seção 6.2)]]`.
5. Link do checkout: sempre o endereço-base copiado da Hotmart e depois os parâmetros da seção 8, com **um único `?`** e o resto com `&` (o fluxo de ingresso do Desafio tinha dois `?`).
6. Atribuição por vendedor do comercial: `[[PENDENTE: decidir atribuição]]`. Padrão adotado: mesma oferta e `sck=comercial-<id-do-vendedor>`, com `[[PENDENTE: lista de IDs de vendedor]]`. Não criar uma oferta por vendedor (seriam 9 x N ofertas).

### 6.2 Roteiro de virada de lote (E1, E2) e de fechamento (E3)

Executar com **duas pessoas** (Automação e Suporte), a janela fechada e o checklist aberto na planilha EVENTOS DE COMPRA, aba VIRADA_DE_LOTE (o log registra quem fez e a que horas).

| Quando | Passo | Quem | Conferência |
|---|---|---|---|
| 24 h antes | Aviso de virada: VL-01 (e-mail), API-BF-V02 em E1 ou V04 em E2 (último dia) | Automação | Texto sem preço, com `{{data_virada}}` |
| Manhã do dia | Trocar nome e capa para "Último dia" (TR5, TR8, TR11) e disparar CP-BF-V04, V08, V12 | Suporte | Capa visível no celular |
| 3 h antes | Trocar para "Últimas horas" (TR6, TR9, TR12) e disparar CP-BF-V05, V09, V13 | Suporte | |
| Hora do corte, minuto 0 | (1) Desativar as 3 ofertas do lote que acaba. (2) Ativar as 3 ofertas do lote seguinte. (3) Abrir cada checkout novo em janela anônima e conferir banner e preço | Automação | Preço do checkout igual ao marcador da oferta |
| Minuto 0 a 5 | (4) Atualizar `lote_atual`, `data_virada` e `link_checkout_*` no ManyChat, ListBoss e DataCrazy. (5) Trocar nome e capa para "Virou o lote" (TR7, TR10) | Automação e Suporte | Texto de API mostra o lote novo |
| Minuto 5 a 10 | (6) Disparar CP-BF-V06 ou V10 e API-BF-V03 ou V05 | Automação | Um disparo por minuto |
| Minuto 10 a 15 | (7) Comprar ou iniciar compra de teste em uma oferta nova de cada segmento (cartão recusado de teste e Pix de teste) | Automação | Evento chega ao ListBoss, DataCrazy e planilha com a oferta certa |
| Até 30 min | (8) Registrar no log: horário, ofertas ativas, conferência | Automação | |
| Fechamento (E3) | Desativar as ofertas, trocar nome e capa para "Encerrado" (TR13), disparar CP-BF-V15 e o e-mail FE-02 em até 30 min, ativar a lista de espera como destino do botão | Automação | Nenhum checkout acessível |

Os pedidos já gerados (Pix e boleto) não são cancelados na virada. A regra de preço desses pedidos depende da seção 6.4.

### 6.3 Eventos, tags e copys (quem dispara o quê)

A Hotmart envia o evento para o ListBoss; o ListBoss aplica a tag e dispara a API e o e-mail por segmento; o DataCrazy recebe o card (via integração) e assume a conversa quando há resposta. Para não duplicar mensagem, vale a **regra de camada**: dentro de um mesmo evento e de um mesmo dia, uma só camada manda o texto de massa.

Nomes dos eventos no ListBoss: `BFP/26-S1-<EVENTO>`, `BFP/26-S2-<EVENTO>`, `BFP/26-S3-<EVENTO>`, com `<EVENTO>` em: `ABANDONO`, `AGUARDANDO-PAGAMENTO`, `BOLETO-GERADO`, `COMPRA-RECUSADA`, `COMPRA-EXPIRADA`, `COMPRA-APROVADA`, `PEDIDO-REEMBOLSO`, `REEMBOLSADO`. São os 6 eventos do Desafio (aprovada, recusada, boleto gerado, aguardando pagamento, abandono, pedido de reembolso) mais **compra expirada** e **reembolsado**, que a Black tem em copy e o Desafio não tinha. `[[CONFIRMAR: nomes nativos dos eventos na Hotmart e se Pix emitido chega como "aguardando pagamento"]]`.

| Evento (Hotmart) | Tag aplicada e removida | Toque 1 (camada, quando, ID) | Toque 2 (camada, quando, ID) | Quando para |
|---|---|---|---|---|
| Carrinho abandonado | Aplica `ABANDONO`. Remove ao comprar | ListBoss: API-01 em até 1 h (S1, S2, S3). E-mail EP-AB-01 em até 1 h | ListBoss: API-02 em 24 h. E-mail EP-AB-02 em 24 h. Nas últimas horas do lote, API-BF-C03 (`05_whatsapp_api/recuperacao_e_carrinho.md`) | Compra aprovada. Se a pessoa responde "1" ou "2", o DataCrazy assume com os ramos de E2 e U2 e a API para. Os toques automáticos E2 e U2 ficam **desligados** |
| Aguardando pagamento (Pix emitido) | Aplica `AGUARDANDO-PAGAMENTO`. Remove ao pagar ou expirar | ListBoss: API-03 imediato. E-mail EP-PX-01 imediato | DataCrazy: E3a toque 1 em 2 a 3 h; toque 2 em 8 a 10 h antes de vencer (U3 para S1). E-mail EP-PX-02 em 30 a 60 min. O segundo toque de API em 30 a 60 min fica **desligado** | Pagamento aprovado |
| Boleto gerado | Aplica `BOLETO-GERADO`. Remove ao pagar ou vencer | ListBoss: API-05 imediato. E-mail EP-BL-01 imediato | DataCrazy: E3b toque 1 na manhã seguinte e toque 2 na manhã do vencimento. E-mail EP-BL-02 um dia antes | Pagamento aprovado |
| Pix expirado e boleto vencido | Aplica `COMPRA-EXPIRADA` | ListBoss: API-04 (Pix) no vencimento, API-06 (boleto) no dia seguinte. E-mail EP-PX-03 e EP-BL-03 | DataCrazy: E5 toque 2 em 48 h (U5 para S1). E-mail EP-PX-04 em 24 h e EP-BL-04 em 3 dias. E5 toque 1 fica **desligado** (coberto pelo ListBoss) | Compra aprovada |
| Compra recusada | Aplica `COMPRA-RECUSADA`. Remove ao comprar | ListBoss: API-07 imediato, **exceto na noite de 03/11**, da abertura do link até 23h, quando o atendimento humano do DataCrazy responde em até 10 minutos (E4 e U4, toque 1). E-mail EP-RC-01 imediato | DataCrazy: E4 toque 2 no dia seguinte. E-mail EP-RC-02 em 24 h | Compra aprovada |
| Compra aprovada | Aplica `COMPRA-APROVADA`, `COMPROU`, `COMPROU-<lote>` e, se S1, `UPGRADE-ALUNA`. Remove todas as tags de recuperação | ListBoss: API-08 imediato. E-mail EP-AP-01 imediato e PC-D0 em 2 h. A página de obrigado da Hotmart é o onboarding. E6 e U6 toque 1 ficam **desligados** (coberto pela API-08) | DataCrazy: E6 e U6 toque 2 em 48 h (pergunta). API-BF-OK3 fica **desligada** (mesma função). API-BF-OK4 em 21 dias (depoimento). PC-D1 a D21 | Reembolso |
| Pedido de reembolso | Aplica `PEDIDO-REEMBOLSO` | ListBoss: API-09 imediato. E-mail EP-RB-01 | DataCrazy humano: E7 e U7, assumindo se houver resposta ou em 2 h sem resposta `[[CONFIRMAR: prazo]]`. Cancela PC-D*, OK3 e OK4 | Reembolsado |
| Reembolsado | Aplica `REEMBOLSADO` | ListBoss: API-BF-RF2 (com prazo de devolução). E-mail EP-RB-02. E8 toque 1 fica **desligado** | DataCrazy: E8 toque 2 em 3 dias (uma pergunta, em uma frase) | Encerra |
| Chargeback e cancelamento | `[[CONFIRMAR: como a Hotmart envia e se entra como REEMBOLSADO ou em tag própria]]` | | | |

Os textos que ficam desligados continuam como roteiro do atendente (o comercial usa quando há conversa aberta). Se a equipe preferir trocar a camada do ListBoss pela do DataCrazy em algum evento, decidir antes de 03/11 e registrar aqui: `[[PENDENTE: camada ativa por evento]]`.

Cada segmento troca o texto pelo ID certo: S1 (alunas, "Você já era do Clube"), S2 ("Você já viveu o método ao vivo comigo"), S3 ("Você decidiu parar de recomeçar"), no arquivo `07_listboss_ura_sms/listboss_api_e_email.md`. Regra de segmento duplo: vale S1 sobre S2 e S2 sobre S3.

### 6.4 Preço travado no Pix e no boleto quando o lote vira

É a pergunta mais importante deste documento: define se E3 e E5 prometem o mesmo preço ou avisam do lote (`12_decisoes_e_pendencias.md`, itens 8 e 47).

1. **Teste antes de 03/11** (T25 da seção 10): gerar um Pix e um boleto na oferta do Lote Especial, ativar a oferta do Primeiro Lote e pagar o Pix. Ver qual preço a Hotmart cobra e se o pedido antigo ainda vale. Repetir com o boleto sem compensar (Pix de teste só prova o Pix).
2. **Dois textos prontos:** versão A (preço travado: "seu código está no preço do lote em que foi gerado") e versão B (não travado: "o valor depende do lote do pagamento"). Variável `preco_travado` (sim ou não) no ListBoss e no DataCrazy escolhe a versão. Até o teste, valer a B.
3. **Prazo do Pix na Hotmart:** `[[CONFIRMAR: prazo real do Pix configurado]]`. Se for menor que 48 h, os toques da seção 7.4 se deslocam.
4. **Boleto compensa depois da virada?** `[[CONFIRMAR]]` e `[[CONFIRMAR: prazo de compensação, até 3 dias úteis]]`.

---

## 7. DataCrazy

### 7.1 Listas e tags

Ver seções 2.2 a 2.4. As automações do passo 1 do Desafio ficam assim na Black:

| Automação | Gatilho | Ação |
|---|---|---|
| Onboarding de compra aprovada | Entrada na lista `BFP/26 COMPRADORES` | E-mail mais tag `COMPRA-APROVADA`; chama o fluxo de WhatsApp pelo webhook W07 |
| Uma por evento de recuperação (todos menos compra aprovada) | Entrada na lista `BFP/26 RECUPERACAO DE VENDAS` com a tag do evento | E-mail mais tag, e card na etapa certa do pipeline |
| Onboarding de captação | Entrada na lista `BFP/26 INSCRITOS` | OB-02 imediato, OB-01 em 2 h sem grupo, OB-03 em 24 h sem grupo e sem diagnóstico |
| Lista de espera | Entrada na lista `BFP/26 LISTA DE ESPERA` | E-mail de confirmação e WhatsApp de confirmação (`lista_de_espera.md`) |

### 7.2 Pipelines

Nomes a passar à equipe: `BFP/26 VITALÍCIA` (pipeline 1, para S2 e S3) e `BFP/26 UPGRADE ALUNA` (pipeline 2, para S1). O link de integração de cada um (W08) é colocado no fluxo de onboarding e de eventos. Copy: `09_comercial_datacrazy/copies_por_evento_pipeline.md`. Pipeline 1 usa as variantes "turma Desafio" quando a pessoa tem `VM-DESAFIO`.

**Pipeline 1: `BFP/26 VITALÍCIA` (S2 e S3)**

| Etapa | Entra quando | Tag | Automação e toques | Copy | Sai quando |
|---|---|---|---|---|---|
| P1-01 Lista de interesse | `INSCRITA` e (`FICHA-QUENTE` ou `VM-DESAFIO` ou resposta) `[[CONFIRMAR: critério para criar card de inscrita]]` | `INSCRITA` | Toque 1 em até 24 h; toque 2 em 03/11, 19h; sem valor | E1, abertura A6 | Presença confirmada ou 22h de 03/11 |
| P1-02 Pós-live: assistiu e não comprou | `ASSISTIU-LIVE` sem `COMPROU` | `ASSISTIU-LIVE` | Abertura em 04/11 e 05/11 (A9) | A9, A6 pós-live | Compra ou resposta |
| P1-03 Pós-live: inscrita que não apareceu | `NAO-ASSISTIU` | `NAO-ASSISTIU` | Abertura em 04/11 (A12) | A12 | Compra, resposta ou régua |
| P1-04 Carrinho abandonado | Evento abandono | `ABANDONO` | Resposta de ramo (valor ou dúvida); automáticos desligados | E2 | Compra |
| P1-05 Aguardando pagamento (Pix) | Evento Pix emitido | `AGUARDANDO-PAGAMENTO` | E3a toque 1 (2 a 3 h) e toque 2 (8 a 10 h antes do vencimento) | E3a | Pagamento ou expiração |
| P1-06 Aguardando pagamento (boleto) | Evento boleto gerado | `BOLETO-GERADO` | E3b toque 1 (manhã seguinte) e toque 2 (manhã do vencimento) | E3b | Pagamento ou vencimento |
| P1-07 Compra recusada | Evento recusada | `COMPRA-RECUSADA` | Humano em até 10 minutos; toque 2 no dia seguinte | E4 | Compra |
| P1-08 Compra expirada | Pix expirado ou boleto vencido | `COMPRA-EXPIRADA` | Toque 2 em 48 h | E5 | Compra |
| P1-09 Compra aprovada e onboarding 48 h | Evento aprovada | `COMPRA-APROVADA` | Toque 2 em 48 h (pergunta); primeiro passo da trilha | E6 | `ONBOARDING-48H` ou 7 dias |
| P1-10 Pedido de reembolso | Evento pedido de reembolso | `PEDIDO-REEMBOLSO` | Humano, ouvir antes de reter; sem terceira tentativa | E7 | Reembolsado |
| P1-11 Reembolsado | Evento reembolsado | `REEMBOLSADO` | Toque 2 em 3 dias | E8 | Fim |
| P1-12 Em conversa | Resposta do contato | `EM-ATENDIMENTO` | Atendimento humano, aberturas A1 a A12, objeções a a m | `aberturas_por_segmento.md`, `quebra_de_objecoes.md` | Fecha ou 48 h sem interação |
| P1-13 Sem retorno | 5 toques da régua | `SEM-RETORNO` | Sai da venda | Régua | Fim |

**Pipeline 2: `BFP/26 UPGRADE ALUNA` (S1)**

| Etapa | Entra quando | Tag | Automação e toques | Copy | Sai quando |
|---|---|---|---|---|---|
| P2-U1 Aluna inscrita | `ALUNA-CLUBE` e `INSCRITA` | `INSCRITA` | Toque 1 em até 24 h (pergunta sobre o Clube); toque 2 em 03/11, 19h | U1 | 22h de 03/11 |
| P2-U2 Carrinho abandonado | Evento abandono | `ABANDONO` | Resposta de ramo: "o que muda" ou "valor" | U2 | Compra |
| P2-U3 Aguardando pagamento | Pix ou boleto gerado | `AGUARDANDO-PAGAMENTO` ou `BOLETO-GERADO` | Mesmas janelas da seção 7.4 | U3 | Pagamento |
| P2-U4 Compra recusada | Evento recusada | `COMPRA-RECUSADA` | Humano em até 10 minutos | U4 | Compra |
| P2-U5 Compra expirada | Expirada | `COMPRA-EXPIRADA` | Toque 2 em 48 h | U5 | Compra |
| P2-U6 Upgrade confirmado | Aprovada | `COMPRA-APROVADA`, `UPGRADE-ALUNA` | Toque 2 em 48 h | U6 | Fim |
| P2-U7 Reembolso | Pedido ou reembolsado | `PEDIDO-REEMBOLSO` | Humano; `[[CONFIRMAR: o reembolso restaura o plano anterior do Clube]]` | U7 | Fim |
| P2-U8 Pagou no link errado | Compra de S1 em oferta de S2 ou S3 | `LINK-ERRADO` | Humano, suporte (não é venda) | U8 | Ajuste feito |
| P2-U9 Plano atual do Clube | 24 h depois do upgrade | | Humano; texto só depois de `[[CONFIRMAR: modelo de cobrança atual do Clube e o período já pago]]` | U9 | Fim |
| P2-Em conversa e Sem retorno | Como no pipeline 1 | `EM-ATENDIMENTO`, `SEM-RETORNO` | A1 e A2 do comercial | `aberturas_por_segmento.md` | |

Campos do card: segmento, `perfil_principal`, `perfil_declarado`, `temperatura`, objeção declarada (a a m), `presenca_live`, abertura (A1 a A12), oferta e lote, link enviado, responsável, status, `toque_parou`.

### 7.3 Regras de interrupção

| Gatilho de parada | O que para | Como configurar | Retorno |
|---|---|---|---|
| **Resposta do contato** (qualquer mensagem de entrada no WhatsApp) | Todas as automações de WhatsApp daquele contato, em ListBoss e DataCrazy. A régua do silêncio para na hora | Tag `EM-ATENDIMENTO`; card vai para P1-12 ou para a etapa de conversa do pipeline 2; alerta ao responsável. Prazo de primeira resposta: 10 minutos na noite da live, 30 minutos nos demais dias `[[PENDENTE: prazo de resposta]]` | Atendente fecha e remove a tag, ou 48 h sem interação humana: volta à régua do silêncio |
| **SAIR** (palavra, botão "Parar mensagens" ou pedido a humano) | Todo disparo de WhatsApp (API, comercial, régua) | Webhook W12: tag `SAIR`, inclusão em `BFP/26 SUPRESSAO`, remoção das listas de disparo, encerramento do card como "pediu para parar". Sem terceira mensagem | Só por pedido da própria pessoa. E-mail tem descadastro próprio |
| **Compra aprovada** | Captação, convite, recuperação, lembretes de venda, régua | Remove as tags de recuperação, aplica as de compra, cancela as automações pendentes | Não volta |
| **Pedido de reembolso** | Pós-compra (PC-D1 a D21, OK3, OK4) | Cancela as automações; abre E7 | Volta só se o pedido for retirado |
| **Dois toques e para** | O evento de pagamento | Depois do toque 2 sem resposta: registrar e encerrar. Quem não respondeu entra na régua do silêncio só se leu | |
| **Uma API por pessoa por dia** | A API de menor prioridade do dia | Prioridade da seção 2.5, item 12 | Vai para o dia seguinte ou cai |
| **Janela de horário** | Toque automático fora da janela | Fila espera a janela, exceto prazo de Pix ou boleto | |
| **Modo escuta (03/11)** | Disparo ativo de venda do pipeline | Seção 7.5 | Às 22h05 |
| **Número inválido** | Todo WhatsApp | `BFP/26-WPP-INVALIDO`; só e-mail | Se o número for corrigido |

### 7.4 Janelas de Pix e de boleto

Dado medido no Manual do Comercial do Desafio: **Pix vence em 48 horas exatas; boleto, em 4 a 5 dias**. `[[CONFIRMAR: conferir no PDF de leads não convertidos e na configuração real da Hotmart]]`. O prazo manda mais que o horário ideal.

| Tipo | T0 | Toque de ListBoss | Toque do DataCrazy | Vencimento | Depois |
|---|---|---|---|---|---|
| Pix (48 h) | Pix gerado | API-03 e EP-PX-01 imediato; EP-PX-02 em 30 a 60 min | E3a toque 1 em 2 a 3 h (se passar das 22h, vai para 7h do dia seguinte); toque 2 em 8 a 10 h antes de vencer | T0 mais 48 h: API-04 e EP-PX-03 | E5 toque 2 em 48 h; EP-PX-04 em 24 h |
| Boleto (4 a 5 dias) | Boleto gerado | API-05 e EP-BL-01 imediato | E3b toque 1 na manhã seguinte; EP-BL-02 um dia antes; E3b toque 2 na manhã do vencimento | Data de vencimento do boleto | API-06 no dia seguinte; E5 toque 2 em 48 h; EP-BL-04 em 3 dias |
| Cartão recusado | Recusa | API-07 imediato (exceto na noite da live) | Humano em até 10 minutos; toque 2 no dia seguinte | | |
| Expirado | Vencimento | API-04 ou API-06 | E5 toque 2 em 48 h | | O lote pode ter virado (seção 6.4) |

Exemplo sem dado real: Pix gerado às 21h30 de 03/11 vence às 21h30 de 05/11. Toque de DataCrazy 1 em 04/11, 07h (primeira janela depois das 22h). Toque 2 em 05/11, 13h a 14h. Se houver bônus de 15 minutos, o Pix gerado dentro da janela só vale pago dentro dela: `[[PENDENTE: bônus]]`.

### 7.5 Dia 03/11 no DataCrazy (modo escuta)

| Horário | O que a automação faz | O que o comercial faz |
|---|---|---|
| 05h45 a 05h55 | Troca nome e capa TR2 (SendFlow) | |
| 07h a 08h | E1 toque para a ficha quente que confirmou presença (sem valor) | Janela de abertura 1 |
| 09h a 12h | Nada novo | Conferir links, tags, telas, número e respostas rápidas |
| 16h a 17h | Lembrete "hoje, 20h, papel e caneta" | Janela de abertura 2 |
| 18h | Reclassificar segmentos (seção 2.6) | |
| 19h15 | **Último lembrete automático e pausa de todo disparo ativo de venda** | |
| 19h30 a 19h45 | Troca TR3 (ao vivo) | Comercial no posto, CRM aberto, sem disparar |
| 20h00 a 22h00 | **Modo escuta.** Sem disparo de venda. Só responde quem chamar | Responde dúvidas práticas (acesso, horário). Nada de oferta até a revelação |
| 21h09 | | Atenção redobrada: parcelamento, lote, aluna ou não |
| Abertura do link (previsto 21h28) | Ativar as 3 ofertas do Lote Especial; trocar `estado_live`; disparar carrinho aberto | **Prioridade um: cartão recusado**, atendimento humano em até 10 minutos |
| Janela do bônus (se houver) | Nenhum disparo extra | Ajudar quem trava no pagamento, sem mandar nada além do necessário |
| 22h05 | Fim do modo escuta; religa as automações dos eventos | Último disparo do dia; depois só respostas |
| 22h a 23h | | Registrar no CRM: quem assistiu, pagou, travou, perguntou |

Se a live atrasar, todos os horários andam juntos. Nenhuma mensagem de venda sai enquanto o link do checkout não for aberto na tela.

Ordem de abordagem pós-live (do `playbook_do_dia_da_live.md`): 1 cartão recusado, 2 Pix ou boleto que vence em menos de 24 h, 3 compra aprovada, 4 Pix ou boleto com mais de 24 h, 5 carrinho abandonado, 6 pagou no link errado, 7 a 16 pelas aberturas A6, A1, A3, A9, A4, A7, A5, A2, A12, A8, 17 silêncio.

### 7.6 Régua do silêncio

Cinco toques depois do silêncio, um degrau de compromisso por vez, e para: toques em +1, +2, +4, +5 e +7 dias a contar do silêncio, e no pré-live três toques (dia seguinte, dois dias depois e 03/11, 19h). Definição técnica de "silêncio": `[[PENDENTE: mensagem entregue e lida sem resposta em 24 h, ou só entregue]]`. Depois do toque 5: `SEM-RETORNO`, e a pessoa sai da venda e entra na régua de conteúdo. **Nunca** enviar link de pagamento a quem está em silêncio (exceto o toque 5, "segue aberto"). Quem travou no checkout não usa esta régua. Ativos: `[[PENDENTE: replay]]`, diagnóstico, manual, certificado, depoimentos `[[DEPOIMENTO REAL]]`. Detalhe em `09_comercial_datacrazy/regua_do_silencio_black.md`.

### 7.7 Lista de ataque do comercial

A planilha do comercial segue o desenho de `09_comercial_datacrazy/lista_de_ataque_templates.md` (abas, 25 colunas e 16 trilhas T01 a T16). A integração só grava tags e campos; **nenhum dado pessoal é copiado para arquivos do repositório**. Quem fica fora da lista de ataque: `SEM-ESFORCO-COMERCIAL`.

---

## 8. UTMs padronizadas

### 8.1 Padrão

O padrão segue o do Desafio (links curtos `draproton.com.br/<campanha>-<canal>`, como `nr-api`, `nr-bio`, `nr-manychat`) e acrescenta o que faltava: `utm_id` fixo, `utm_campaign` por fase e `utm_content` com o **ID da copy ou do criativo**. A planilha de UTMs herdada (com `utm_campaign=organico` e `utm_content` igual ao canal em todas as linhas) não separa criativo, copy nem lote, e não deve ser reaproveitada.

| Parâmetro | Regra | Exemplos |
|---|---|---|
| Link curto | `https://draproton.com.br/bfp-<canal>` (captação), `bfp-alunas-<canal>`, `bfp-viveu-<canal>`, `bfp-espera-<canal>`. Redireciona para a página com todos os parâmetros | `draproton.com.br/bfp-api` |
| `utm_id` | Fixo `bfp26` | `bfp26` |
| `utm_campaign` | `bfp26-captacao` (13/10 a 03/11), `bfp26-venda` (a partir da abertura do carrinho), `bfp26-espera` (lista de espera) | |
| `utm_source` | O canal, em minúsculas, tabela 8.2 | `email`, `api`, `wpp`, `manychat`, `ads-meta` |
| `utm_medium` | `organico`, `pago`, `crm` (disparo próprio: e-mail, API, grupos, SMS) ou `comercial` | |
| `utm_content` | ID da copy ou do criativo, em minúsculas, hífen no lugar de espaço | `cp-bf-12`, `em-bf-07`, `api-bf-04-4-n`, `mc-bf-a05`, `cap-term-01`, `sms-02` |
| `utm_term` | Captação: perfil do criativo (`termostato`, `autossabotagem`, `cobranca`, `traumas`, `culpa`, `nao-sei`, `todos`). Venda: lote (`esp`, `1l`, `ul`) | `termostato`, `esp` |
| `src` e `sck` | Só em link que termina na Hotmart. `src` é o canal; `sck` é o ID da copy (segmento e lote já estão na oferta) | `src=api&sck=api-bf-17` |

Regras de montagem:

1. Tudo em minúsculas, sem acento, sem espaço, sem parêntese. Hífen como separador.
2. **Um único `?`** por endereço; todos os parâmetros seguintes com `&`. Se o endereço-base já tem `?off=...`, anexar com `&` (o fluxo de ingresso do Desafio saiu com dois `?`).
3. Nunca copiar parâmetro de sessão, de navegador ou de rastreio de uma pessoa (por exemplo `sck` com identificadores no link de um grupo).
4. A página de captura grava todos os utm_* no lead. Se faltarem, grava `sem-utm`.
5. A página de captura A destaca o chip do perfil lendo `utm_term` (e não `utm_content`, como diz `03_paginas/captura_A_diagnostico_primeiro.md`, nota 2). O Web designer ajusta a leitura. O ID do criativo fica em `utm_content`, como pedem `04_criativos/captacao_estaticos.md` e `05_whatsapp_api/api_convite_indireto_e_aquecimento.md`.
6. Tráfego cria e mantém a planilha de UTMs; Automação confere antes de qualquer link ir ao ar (teste T06).
7. O ManyChat usa `utm_source=manychat` e `utm_medium=organico`, com o ID do passo em `utm_content` (`mc-bf-a05`, `mc-bf-l01`). O texto dos arquivos de copy que ainda traz `utm_campaign=organico` é substituído por este padrão.
8. Link de venda enviado por vendedor leva `utm_content=comercial-<id-do-vendedor>` e `sck` igual. `[[PENDENTE: lista de IDs de vendedor]]`

### 8.2 Captação: tabela de canais e links

Destino-base `[[LINK: captura A]]`. O link curto é o padrão do canal, com `utm_content=geral` e `utm_term=todos`. Para peça com ID, usar o link completo e trocar `<...>` pelo valor da peça.

| Canal (`utm_source`) | `utm_medium` | Onde se usa | Link curto (padrão, `utm_content=geral`) | Link completo com ID da copy (modelo) |
|---|---|---|---|---|
| `bio` | `organico` | Link da bio do Instagram | `draproton.com.br/bfp-bio` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=bio&utm_medium=organico&utm_content=<bio>&utm_term=<perfil>` |
| `stories` | `organico` | Stories do Instagram (link ou resposta) | `draproton.com.br/bfp-stories` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=stories&utm_medium=organico&utm_content=<stories-NN>&utm_term=<perfil>` |
| `liveig` | `organico` | Live do Instagram | `draproton.com.br/bfp-liveig` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=liveig&utm_medium=organico&utm_content=<liveig-NN>&utm_term=<perfil>` |
| `manychat` | `organico` | Fluxo de direct do ManyChat (MC-BF-A05, L01) | `draproton.com.br/bfp-manychat` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=manychat&utm_medium=organico&utm_content=<mc-bf-a05>&utm_term=<perfil>` |
| `yt` | `organico` | Descrição de vídeos do YouTube | `draproton.com.br/bfp-yt` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=yt&utm_medium=organico&utm_content=<yt-desc-NN>&utm_term=<perfil>` |
| `yt-live` | `organico` | Descrição e chat fixado das lives do YouTube | `draproton.com.br/bfp-yt-live` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=yt-live&utm_medium=organico&utm_content=<yt-live-NN>&utm_term=<perfil>` |
| `yt-banner` | `organico` | Banner do canal do YouTube | `draproton.com.br/bfp-yt-banner` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=yt-banner&utm_medium=organico&utm_content=<yt-banner>&utm_term=<perfil>` |
| `tiktok` | `organico` | Bio e vídeos do TikTok | `draproton.com.br/bfp-tiktok` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=tiktok&utm_medium=organico&utm_content=<tiktok-NN>&utm_term=<perfil>` |
| `telegram` | `organico` | Reservado, sem disparo planejado (conflito C9 da análise) | `draproton.com.br/bfp-telegram` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=telegram&utm_medium=organico&utm_content=<telegram-NN>&utm_term=<perfil>` |
| `grupos-antigos` | `organico` | Grupos antigos de WhatsApp | `draproton.com.br/bfp-grupos-antigos` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=grupos-antigos&utm_medium=organico&utm_content=<cp-antigo-NN>&utm_term=<perfil>` |
| `grupo-alunos` | `organico` | Grupos de alunos no WhatsApp (fora do rodízio da Black) | `draproton.com.br/bfp-grupo-alunos` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=grupo-alunos&utm_medium=organico&utm_content=<cp-alunos-NN>&utm_term=<perfil>` |
| `wpp` | `crm` | Grupos de WhatsApp da Black (rodízio SendFlow) | `draproton.com.br/bfp-wpp` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=wpp&utm_medium=crm&utm_content=<cp-bf-NN>&utm_term=<perfil>` |
| `api` | `crm` | WhatsApp API oficial (ListBoss e ManyChat) | `draproton.com.br/bfp-api` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=api&utm_medium=crm&utm_content=<api-bf-04-4-n>&utm_term=<perfil>` |
| `email` | `crm` | E-mails de captação, segmentados e lembretes | `draproton.com.br/bfp-email` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=email&utm_medium=crm&utm_content=<em-bf-NN>&utm_term=<perfil>` |
| `sms` | `crm` | SMS (07_listboss_ura_sms) | `draproton.com.br/bfp-sms` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=sms&utm_medium=crm&utm_content=<sms-NN>&utm_term=<perfil>` |
| `lista-de-espera` | `crm` | Avisos da lista de espera | `draproton.com.br/bfp-lista-de-espera` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=lista-de-espera&utm_medium=crm&utm_content=<espera-NN>&utm_term=<perfil>` |
| `canal` | `organico` | Canal de transmissão do WhatsApp | `draproton.com.br/bfp-canal` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=canal&utm_medium=organico&utm_content=<canal-NN>&utm_term=<perfil>` |
| `clipadores` | `organico` | Cortes e clipadores | `draproton.com.br/bfp-clipadores` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=clipadores&utm_medium=organico&utm_content=<clip-NN>&utm_term=<perfil>` |
| `comercial` | `comercial` | Atendimento 1 a 1 do comercial (DataCrazy) | `draproton.com.br/bfp-comercial` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=comercial&utm_medium=comercial&utm_content=<comercial-ID-VENDEDOR>&utm_term=<perfil>` |
| `ads-meta` | `pago` | Anúncios no Instagram e Facebook | `draproton.com.br/bfp-ads-meta` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=ads-meta&utm_medium=pago&utm_content=<cap-term-01>&utm_term=<perfil>` |
| `ads-yt` | `pago` | Anúncios no YouTube | `draproton.com.br/bfp-ads-yt` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=ads-yt&utm_medium=pago&utm_content=<cap-term-01>&utm_term=<perfil>` |
| `ads-tiktok` | `pago` | Anúncios no TikTok | `draproton.com.br/bfp-ads-tiktok` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=ads-tiktok&utm_medium=pago&utm_content=<cap-term-01>&utm_term=<perfil>` |
| `ads-rmkt` | `pago` | Remarketing em todas as plataformas | `draproton.com.br/bfp-ads-rmkt` | `[[LINK: captura A]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=ads-rmkt&utm_medium=pago&utm_content=<rmk-NN>&utm_term=<perfil>` |

### 8.3 Captação: variantes por segmento e lista de espera

Quando o canal já sabe o segmento (disparo segmentado), o link vai direto para a captura certa. Nos demais, vale a tabela 8.2.

| Segmento ou destino | Canal | Link curto | Destino completo (modelo) |
|---|---|---|---|
| S1 alunas, captura C | `email` | `draproton.com.br/bfp-alunas-email` | `[[LINK: captura C]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=email&utm_medium=crm&utm_content=<id-copy>&utm_term=todos` |
| S1 alunas, captura C | `api` | `draproton.com.br/bfp-alunas-api` | `[[LINK: captura C]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=api&utm_medium=crm&utm_content=<id-copy>&utm_term=todos` |
| S1 alunas, captura C | `wpp` | `draproton.com.br/bfp-alunas-wpp` | `[[LINK: captura C]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=wpp&utm_medium=crm&utm_content=<id-copy>&utm_term=todos` |
| S1 alunas, captura C | `grupo-alunos` | `draproton.com.br/bfp-alunas-grupo-alunos` | `[[LINK: captura C]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=grupo-alunos&utm_medium=organico&utm_content=<id-copy>&utm_term=todos` |
| S1 alunas, captura C | `comercial` | `draproton.com.br/bfp-alunas-comercial` | `[[LINK: captura C]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=comercial&utm_medium=comercial&utm_content=<id-copy>&utm_term=todos` |
| S2 quem viveu o método, captura D | `email` | `draproton.com.br/bfp-viveu-email` | `[[LINK: captura D]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=email&utm_medium=crm&utm_content=<id-copy>&utm_term=todos` |
| S2 quem viveu o método, captura D | `api` | `draproton.com.br/bfp-viveu-api` | `[[LINK: captura D]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=api&utm_medium=crm&utm_content=<id-copy>&utm_term=todos` |
| S2 quem viveu o método, captura D | `wpp` | `draproton.com.br/bfp-viveu-wpp` | `[[LINK: captura D]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=wpp&utm_medium=crm&utm_content=<id-copy>&utm_term=todos` |
| S2 quem viveu o método, captura D | `comercial` | `draproton.com.br/bfp-viveu-comercial` | `[[LINK: captura D]]?utm_id=bfp26&utm_campaign=bfp26-captacao&utm_source=comercial&utm_medium=comercial&utm_content=<id-copy>&utm_term=todos` |
| Lista de espera (página) | `email` | `draproton.com.br/bfp-espera-email` | `[[LINK: lista de espera]]?utm_id=bfp26&utm_campaign=bfp26-espera&utm_source=email&utm_medium=crm&utm_content=<id-copy>&utm_term=todos` |
| Lista de espera (página) | `api` | `draproton.com.br/bfp-espera-api` | `[[LINK: lista de espera]]?utm_id=bfp26&utm_campaign=bfp26-espera&utm_source=api&utm_medium=crm&utm_content=<id-copy>&utm_term=todos` |
| Lista de espera (página) | `wpp` | `draproton.com.br/bfp-espera-wpp` | `[[LINK: lista de espera]]?utm_id=bfp26&utm_campaign=bfp26-espera&utm_source=wpp&utm_medium=crm&utm_content=<id-copy>&utm_term=todos` |
| Lista de espera (página) | `comercial` | `draproton.com.br/bfp-espera-comercial` | `[[LINK: lista de espera]]?utm_id=bfp26&utm_campaign=bfp26-espera&utm_source=comercial&utm_medium=comercial&utm_content=<id-copy>&utm_term=todos` |
| Lista de espera (vinda da pesquisa, Q7) | `obrigado` | `draproton.com.br/bfp-espera-obrigado` | `[[LINK: lista de espera]]?utm_id=bfp26&utm_campaign=bfp26-espera&utm_source=obrigado&utm_medium=organico&utm_content=q7&utm_term=todos` |

### 8.4 Venda: 9 ofertas por canal

Fase `bfp26-venda`, a partir da abertura do carrinho. O endereço-base de cada checkout é o `[[LINK: checkout ...]]` da seção 6.1. `[[CONFIRMAR: a Hotmart devolve utm_* no evento; se não devolver, a atribuição fica em src e sck]]`. Quem usa cada canal: `api` (API-01 a 09 do ListBoss e API-BF-V), `email` (EP e CL), `wpp` (CP-BF-V), `manychat` (MC-BF-V02), `comercial` (DataCrazy), `ads-rmkt` (`04_criativos/vendas_vitalicia.md`), `stories`, `pagina-vendas` (botão da página de vendas).

| Oferta | Canal | Exemplo de `utm_content` | Link (acrescentar com `&` se o endereço-base já tem `?off=`) |
|---|---|---|---|
| `BFP26-S1-ESP` | `api` | `api-bf-17` | `[[LINK: checkout S1-ESP]]&src=api&sck=api-bf-17&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=api&utm_medium=crm&utm_content=api-bf-17&utm_term=esp` |
| `BFP26-S1-ESP` | `email` | `cl-01` | `[[LINK: checkout S1-ESP]]&src=email&sck=cl-01&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=email&utm_medium=crm&utm_content=cl-01&utm_term=esp` |
| `BFP26-S1-ESP` | `wpp` | `cp-bf-76` | `[[LINK: checkout S1-ESP]]&src=wpp&sck=cp-bf-76&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=wpp&utm_medium=crm&utm_content=cp-bf-76&utm_term=esp` |
| `BFP26-S1-ESP` | `manychat` | `mc-bf-v02` | `[[LINK: checkout S1-ESP]]&src=manychat&sck=mc-bf-v02&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=manychat&utm_medium=organico&utm_content=mc-bf-v02&utm_term=esp` |
| `BFP26-S1-ESP` | `comercial` | `comercial-ID-VENDEDOR` | `[[LINK: checkout S1-ESP]]&src=comercial&sck=comercial-ID-VENDEDOR&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=comercial&utm_medium=comercial&utm_content=comercial-ID-VENDEDOR&utm_term=esp` |
| `BFP26-S1-ESP` | `ads-rmkt` | `vit-rmk-NN` | `[[LINK: checkout S1-ESP]]&src=ads-rmkt&sck=vit-rmk-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=ads-rmkt&utm_medium=pago&utm_content=vit-rmk-NN&utm_term=esp` |
| `BFP26-S1-ESP` | `stories` | `stories-NN` | `[[LINK: checkout S1-ESP]]&src=stories&sck=stories-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=stories&utm_medium=organico&utm_content=stories-NN&utm_term=esp` |
| `BFP26-S1-ESP` | `pagina-vendas` | `pv-botao` | `[[LINK: checkout S1-ESP]]&src=pagina-vendas&sck=pv-botao&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=pagina-vendas&utm_medium=organico&utm_content=pv-botao&utm_term=esp` |
| `BFP26-S1-1L` | `api` | `api-bf-17` | `[[LINK: checkout S1-1L]]&src=api&sck=api-bf-17&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=api&utm_medium=crm&utm_content=api-bf-17&utm_term=1l` |
| `BFP26-S1-1L` | `email` | `cl-01` | `[[LINK: checkout S1-1L]]&src=email&sck=cl-01&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=email&utm_medium=crm&utm_content=cl-01&utm_term=1l` |
| `BFP26-S1-1L` | `wpp` | `cp-bf-76` | `[[LINK: checkout S1-1L]]&src=wpp&sck=cp-bf-76&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=wpp&utm_medium=crm&utm_content=cp-bf-76&utm_term=1l` |
| `BFP26-S1-1L` | `manychat` | `mc-bf-v02` | `[[LINK: checkout S1-1L]]&src=manychat&sck=mc-bf-v02&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=manychat&utm_medium=organico&utm_content=mc-bf-v02&utm_term=1l` |
| `BFP26-S1-1L` | `comercial` | `comercial-ID-VENDEDOR` | `[[LINK: checkout S1-1L]]&src=comercial&sck=comercial-ID-VENDEDOR&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=comercial&utm_medium=comercial&utm_content=comercial-ID-VENDEDOR&utm_term=1l` |
| `BFP26-S1-1L` | `ads-rmkt` | `vit-rmk-NN` | `[[LINK: checkout S1-1L]]&src=ads-rmkt&sck=vit-rmk-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=ads-rmkt&utm_medium=pago&utm_content=vit-rmk-NN&utm_term=1l` |
| `BFP26-S1-1L` | `stories` | `stories-NN` | `[[LINK: checkout S1-1L]]&src=stories&sck=stories-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=stories&utm_medium=organico&utm_content=stories-NN&utm_term=1l` |
| `BFP26-S1-1L` | `pagina-vendas` | `pv-botao` | `[[LINK: checkout S1-1L]]&src=pagina-vendas&sck=pv-botao&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=pagina-vendas&utm_medium=organico&utm_content=pv-botao&utm_term=1l` |
| `BFP26-S1-UL` | `api` | `api-bf-17` | `[[LINK: checkout S1-UL]]&src=api&sck=api-bf-17&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=api&utm_medium=crm&utm_content=api-bf-17&utm_term=ul` |
| `BFP26-S1-UL` | `email` | `cl-01` | `[[LINK: checkout S1-UL]]&src=email&sck=cl-01&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=email&utm_medium=crm&utm_content=cl-01&utm_term=ul` |
| `BFP26-S1-UL` | `wpp` | `cp-bf-76` | `[[LINK: checkout S1-UL]]&src=wpp&sck=cp-bf-76&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=wpp&utm_medium=crm&utm_content=cp-bf-76&utm_term=ul` |
| `BFP26-S1-UL` | `manychat` | `mc-bf-v02` | `[[LINK: checkout S1-UL]]&src=manychat&sck=mc-bf-v02&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=manychat&utm_medium=organico&utm_content=mc-bf-v02&utm_term=ul` |
| `BFP26-S1-UL` | `comercial` | `comercial-ID-VENDEDOR` | `[[LINK: checkout S1-UL]]&src=comercial&sck=comercial-ID-VENDEDOR&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=comercial&utm_medium=comercial&utm_content=comercial-ID-VENDEDOR&utm_term=ul` |
| `BFP26-S1-UL` | `ads-rmkt` | `vit-rmk-NN` | `[[LINK: checkout S1-UL]]&src=ads-rmkt&sck=vit-rmk-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=ads-rmkt&utm_medium=pago&utm_content=vit-rmk-NN&utm_term=ul` |
| `BFP26-S1-UL` | `stories` | `stories-NN` | `[[LINK: checkout S1-UL]]&src=stories&sck=stories-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=stories&utm_medium=organico&utm_content=stories-NN&utm_term=ul` |
| `BFP26-S1-UL` | `pagina-vendas` | `pv-botao` | `[[LINK: checkout S1-UL]]&src=pagina-vendas&sck=pv-botao&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=pagina-vendas&utm_medium=organico&utm_content=pv-botao&utm_term=ul` |
| `BFP26-S2-ESP` | `api` | `api-bf-17` | `[[LINK: checkout S2-ESP]]&src=api&sck=api-bf-17&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=api&utm_medium=crm&utm_content=api-bf-17&utm_term=esp` |
| `BFP26-S2-ESP` | `email` | `cl-01` | `[[LINK: checkout S2-ESP]]&src=email&sck=cl-01&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=email&utm_medium=crm&utm_content=cl-01&utm_term=esp` |
| `BFP26-S2-ESP` | `wpp` | `cp-bf-76` | `[[LINK: checkout S2-ESP]]&src=wpp&sck=cp-bf-76&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=wpp&utm_medium=crm&utm_content=cp-bf-76&utm_term=esp` |
| `BFP26-S2-ESP` | `manychat` | `mc-bf-v02` | `[[LINK: checkout S2-ESP]]&src=manychat&sck=mc-bf-v02&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=manychat&utm_medium=organico&utm_content=mc-bf-v02&utm_term=esp` |
| `BFP26-S2-ESP` | `comercial` | `comercial-ID-VENDEDOR` | `[[LINK: checkout S2-ESP]]&src=comercial&sck=comercial-ID-VENDEDOR&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=comercial&utm_medium=comercial&utm_content=comercial-ID-VENDEDOR&utm_term=esp` |
| `BFP26-S2-ESP` | `ads-rmkt` | `vit-rmk-NN` | `[[LINK: checkout S2-ESP]]&src=ads-rmkt&sck=vit-rmk-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=ads-rmkt&utm_medium=pago&utm_content=vit-rmk-NN&utm_term=esp` |
| `BFP26-S2-ESP` | `stories` | `stories-NN` | `[[LINK: checkout S2-ESP]]&src=stories&sck=stories-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=stories&utm_medium=organico&utm_content=stories-NN&utm_term=esp` |
| `BFP26-S2-ESP` | `pagina-vendas` | `pv-botao` | `[[LINK: checkout S2-ESP]]&src=pagina-vendas&sck=pv-botao&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=pagina-vendas&utm_medium=organico&utm_content=pv-botao&utm_term=esp` |
| `BFP26-S2-1L` | `api` | `api-bf-17` | `[[LINK: checkout S2-1L]]&src=api&sck=api-bf-17&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=api&utm_medium=crm&utm_content=api-bf-17&utm_term=1l` |
| `BFP26-S2-1L` | `email` | `cl-01` | `[[LINK: checkout S2-1L]]&src=email&sck=cl-01&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=email&utm_medium=crm&utm_content=cl-01&utm_term=1l` |
| `BFP26-S2-1L` | `wpp` | `cp-bf-76` | `[[LINK: checkout S2-1L]]&src=wpp&sck=cp-bf-76&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=wpp&utm_medium=crm&utm_content=cp-bf-76&utm_term=1l` |
| `BFP26-S2-1L` | `manychat` | `mc-bf-v02` | `[[LINK: checkout S2-1L]]&src=manychat&sck=mc-bf-v02&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=manychat&utm_medium=organico&utm_content=mc-bf-v02&utm_term=1l` |
| `BFP26-S2-1L` | `comercial` | `comercial-ID-VENDEDOR` | `[[LINK: checkout S2-1L]]&src=comercial&sck=comercial-ID-VENDEDOR&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=comercial&utm_medium=comercial&utm_content=comercial-ID-VENDEDOR&utm_term=1l` |
| `BFP26-S2-1L` | `ads-rmkt` | `vit-rmk-NN` | `[[LINK: checkout S2-1L]]&src=ads-rmkt&sck=vit-rmk-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=ads-rmkt&utm_medium=pago&utm_content=vit-rmk-NN&utm_term=1l` |
| `BFP26-S2-1L` | `stories` | `stories-NN` | `[[LINK: checkout S2-1L]]&src=stories&sck=stories-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=stories&utm_medium=organico&utm_content=stories-NN&utm_term=1l` |
| `BFP26-S2-1L` | `pagina-vendas` | `pv-botao` | `[[LINK: checkout S2-1L]]&src=pagina-vendas&sck=pv-botao&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=pagina-vendas&utm_medium=organico&utm_content=pv-botao&utm_term=1l` |
| `BFP26-S2-UL` | `api` | `api-bf-17` | `[[LINK: checkout S2-UL]]&src=api&sck=api-bf-17&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=api&utm_medium=crm&utm_content=api-bf-17&utm_term=ul` |
| `BFP26-S2-UL` | `email` | `cl-01` | `[[LINK: checkout S2-UL]]&src=email&sck=cl-01&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=email&utm_medium=crm&utm_content=cl-01&utm_term=ul` |
| `BFP26-S2-UL` | `wpp` | `cp-bf-76` | `[[LINK: checkout S2-UL]]&src=wpp&sck=cp-bf-76&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=wpp&utm_medium=crm&utm_content=cp-bf-76&utm_term=ul` |
| `BFP26-S2-UL` | `manychat` | `mc-bf-v02` | `[[LINK: checkout S2-UL]]&src=manychat&sck=mc-bf-v02&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=manychat&utm_medium=organico&utm_content=mc-bf-v02&utm_term=ul` |
| `BFP26-S2-UL` | `comercial` | `comercial-ID-VENDEDOR` | `[[LINK: checkout S2-UL]]&src=comercial&sck=comercial-ID-VENDEDOR&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=comercial&utm_medium=comercial&utm_content=comercial-ID-VENDEDOR&utm_term=ul` |
| `BFP26-S2-UL` | `ads-rmkt` | `vit-rmk-NN` | `[[LINK: checkout S2-UL]]&src=ads-rmkt&sck=vit-rmk-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=ads-rmkt&utm_medium=pago&utm_content=vit-rmk-NN&utm_term=ul` |
| `BFP26-S2-UL` | `stories` | `stories-NN` | `[[LINK: checkout S2-UL]]&src=stories&sck=stories-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=stories&utm_medium=organico&utm_content=stories-NN&utm_term=ul` |
| `BFP26-S2-UL` | `pagina-vendas` | `pv-botao` | `[[LINK: checkout S2-UL]]&src=pagina-vendas&sck=pv-botao&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=pagina-vendas&utm_medium=organico&utm_content=pv-botao&utm_term=ul` |
| `BFP26-S3-ESP` | `api` | `api-bf-17` | `[[LINK: checkout S3-ESP]]&src=api&sck=api-bf-17&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=api&utm_medium=crm&utm_content=api-bf-17&utm_term=esp` |
| `BFP26-S3-ESP` | `email` | `cl-01` | `[[LINK: checkout S3-ESP]]&src=email&sck=cl-01&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=email&utm_medium=crm&utm_content=cl-01&utm_term=esp` |
| `BFP26-S3-ESP` | `wpp` | `cp-bf-76` | `[[LINK: checkout S3-ESP]]&src=wpp&sck=cp-bf-76&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=wpp&utm_medium=crm&utm_content=cp-bf-76&utm_term=esp` |
| `BFP26-S3-ESP` | `manychat` | `mc-bf-v02` | `[[LINK: checkout S3-ESP]]&src=manychat&sck=mc-bf-v02&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=manychat&utm_medium=organico&utm_content=mc-bf-v02&utm_term=esp` |
| `BFP26-S3-ESP` | `comercial` | `comercial-ID-VENDEDOR` | `[[LINK: checkout S3-ESP]]&src=comercial&sck=comercial-ID-VENDEDOR&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=comercial&utm_medium=comercial&utm_content=comercial-ID-VENDEDOR&utm_term=esp` |
| `BFP26-S3-ESP` | `ads-rmkt` | `vit-rmk-NN` | `[[LINK: checkout S3-ESP]]&src=ads-rmkt&sck=vit-rmk-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=ads-rmkt&utm_medium=pago&utm_content=vit-rmk-NN&utm_term=esp` |
| `BFP26-S3-ESP` | `stories` | `stories-NN` | `[[LINK: checkout S3-ESP]]&src=stories&sck=stories-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=stories&utm_medium=organico&utm_content=stories-NN&utm_term=esp` |
| `BFP26-S3-ESP` | `pagina-vendas` | `pv-botao` | `[[LINK: checkout S3-ESP]]&src=pagina-vendas&sck=pv-botao&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=pagina-vendas&utm_medium=organico&utm_content=pv-botao&utm_term=esp` |
| `BFP26-S3-1L` | `api` | `api-bf-17` | `[[LINK: checkout S3-1L]]&src=api&sck=api-bf-17&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=api&utm_medium=crm&utm_content=api-bf-17&utm_term=1l` |
| `BFP26-S3-1L` | `email` | `cl-01` | `[[LINK: checkout S3-1L]]&src=email&sck=cl-01&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=email&utm_medium=crm&utm_content=cl-01&utm_term=1l` |
| `BFP26-S3-1L` | `wpp` | `cp-bf-76` | `[[LINK: checkout S3-1L]]&src=wpp&sck=cp-bf-76&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=wpp&utm_medium=crm&utm_content=cp-bf-76&utm_term=1l` |
| `BFP26-S3-1L` | `manychat` | `mc-bf-v02` | `[[LINK: checkout S3-1L]]&src=manychat&sck=mc-bf-v02&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=manychat&utm_medium=organico&utm_content=mc-bf-v02&utm_term=1l` |
| `BFP26-S3-1L` | `comercial` | `comercial-ID-VENDEDOR` | `[[LINK: checkout S3-1L]]&src=comercial&sck=comercial-ID-VENDEDOR&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=comercial&utm_medium=comercial&utm_content=comercial-ID-VENDEDOR&utm_term=1l` |
| `BFP26-S3-1L` | `ads-rmkt` | `vit-rmk-NN` | `[[LINK: checkout S3-1L]]&src=ads-rmkt&sck=vit-rmk-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=ads-rmkt&utm_medium=pago&utm_content=vit-rmk-NN&utm_term=1l` |
| `BFP26-S3-1L` | `stories` | `stories-NN` | `[[LINK: checkout S3-1L]]&src=stories&sck=stories-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=stories&utm_medium=organico&utm_content=stories-NN&utm_term=1l` |
| `BFP26-S3-1L` | `pagina-vendas` | `pv-botao` | `[[LINK: checkout S3-1L]]&src=pagina-vendas&sck=pv-botao&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=pagina-vendas&utm_medium=organico&utm_content=pv-botao&utm_term=1l` |
| `BFP26-S3-UL` | `api` | `api-bf-17` | `[[LINK: checkout S3-UL]]&src=api&sck=api-bf-17&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=api&utm_medium=crm&utm_content=api-bf-17&utm_term=ul` |
| `BFP26-S3-UL` | `email` | `cl-01` | `[[LINK: checkout S3-UL]]&src=email&sck=cl-01&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=email&utm_medium=crm&utm_content=cl-01&utm_term=ul` |
| `BFP26-S3-UL` | `wpp` | `cp-bf-76` | `[[LINK: checkout S3-UL]]&src=wpp&sck=cp-bf-76&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=wpp&utm_medium=crm&utm_content=cp-bf-76&utm_term=ul` |
| `BFP26-S3-UL` | `manychat` | `mc-bf-v02` | `[[LINK: checkout S3-UL]]&src=manychat&sck=mc-bf-v02&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=manychat&utm_medium=organico&utm_content=mc-bf-v02&utm_term=ul` |
| `BFP26-S3-UL` | `comercial` | `comercial-ID-VENDEDOR` | `[[LINK: checkout S3-UL]]&src=comercial&sck=comercial-ID-VENDEDOR&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=comercial&utm_medium=comercial&utm_content=comercial-ID-VENDEDOR&utm_term=ul` |
| `BFP26-S3-UL` | `ads-rmkt` | `vit-rmk-NN` | `[[LINK: checkout S3-UL]]&src=ads-rmkt&sck=vit-rmk-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=ads-rmkt&utm_medium=pago&utm_content=vit-rmk-NN&utm_term=ul` |
| `BFP26-S3-UL` | `stories` | `stories-NN` | `[[LINK: checkout S3-UL]]&src=stories&sck=stories-NN&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=stories&utm_medium=organico&utm_content=stories-NN&utm_term=ul` |
| `BFP26-S3-UL` | `pagina-vendas` | `pv-botao` | `[[LINK: checkout S3-UL]]&src=pagina-vendas&sck=pv-botao&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=pagina-vendas&utm_medium=organico&utm_content=pv-botao&utm_term=ul` |

---

## 9. Cronograma de configuração

### 9.1 Roteiro por passos (padrão do Desafio, ampliado)

**Passo 1. DataCrazy**

- [ ] Criar as 8 listas da seção 2.2.
- [ ] Criar os campos da seção 5.2 e as 53 tags das seções 2.3 e 2.4 (nomes exatos).
- [ ] Criar a regra de classificação S1, S2, S3 (seção 2.6) e a de supressão (`SAIR`, `WPP-INVALIDO` com o prefixo `BFP/26-`).
- [ ] Criar a automação de compra aprovada (onboarding, e-mail mais tag, gatilho: entrada na lista `BFP/26 COMPRADORES`).
- [ ] Criar uma automação por evento de recuperação (todos menos compra aprovada), com e-mail mais tag, gatilho: entrada na lista `BFP/26 RECUPERACAO DE VENDAS`.
- [ ] Criar o onboarding de captação (OB-02, OB-01, OB-03) e o da lista de espera.

**Passo 2. Hotmart e ListBoss**

- [ ] Criar o produto e as 9 ofertas em rascunho (seção 6.1), os 6 banners e as 2 páginas de obrigado (aluna e nova no Clube).
- [ ] Criar no ListBoss os eventos do produto novo, por segmento: compra aprovada, compra recusada, boleto gerado, aguardando pagamento, abandono de carrinho, pedido de reembolso, **compra expirada** e **reembolsado** (8 x 3 = 24).
- [ ] Ligar o webhook W06 e conferir `oferta`, `lote` e `segmento` em cada evento.

**Passo 3. API oficial e ManyChat**

- [ ] Submeter os templates (tabela 4.4) e acompanhar a aprovação.
- [ ] Criar as palavras-chave e o fluxo de Instagram (seção 4.1 e 4.2) e os campos globais.
- [ ] Criar os fluxos de WhatsApp F1 a F11 e ligá-los ao integrador (W07).
- [ ] Colocar o link do webhook da API oficial no fluxo de onboarding do DataCrazy.

**Passo 4. DataCrazy: pipelines**

- [ ] Criar os pipelines `BFP/26 VITALÍCIA` e `BFP/26 UPGRADE ALUNA` com as etapas da seção 7.2 e passar os nomes à equipe.
- [ ] Criar o link de integração de cada pipeline (W08) e colocá-lo no fluxo de onboarding.
- [ ] Configurar as regras de interrupção (seção 7.3) e a janela de horário.

**Passo 5. Grupos, páginas e webhooks (novo na Black)**

- [ ] Criar as 4 famílias de grupo no SendFlow (nome, capa, descrição, boas-vindas, link de rodízio) e o webhook W09.
- [ ] Ligar os webhooks W01 a W05, W10 a W12 e as páginas (captura, obrigado, lista de espera, cupom das alunas).
- [ ] Gerar e testar os links curtos e as UTMs (seção 8).

**Passo 6. Testar tudo** (seção 10).

### 9.2 Linha do tempo regressiva a partir de 13/10

Hoje é quarta, 07/10. A captação abre terça, 13/10, às 07h. "Dn" é o número de dias antes de 13/10.

| Data | Dn | Marco | Entregas | Dono | Critério para seguir |
|---|---|---|---|---|---|
| Qua 07/10 | D-6 | Arranque | Submeter à Meta os templates dos fluxos F1, F2 e F3 (13 templates); criar listas, tags e campos no DataCrazy; criar as planilhas; pedir os links e as artes | Automação | 13 templates enviados; listas e tags criadas conforme os nomes da seção 2 |
| Qui 08/10 | D-5 | Páginas e dados | Webhooks W01 a W05 em ambiente de teste; famílias G1 a G3 criadas no SendFlow; palavras-chave e fluxo do ManyChat; UTMs e links curtos gerados | Automação, Web designer, Tráfego | T01 a T06 aprovados |
| Sex 09/10 | D-4 | Onboarding e segmentação | Onboarding por API e e-mail; classificação S1, S2, S3; exclusões da seção 2.5; boas-vindas dos grupos fixadas | Automação | T07 a T18 aprovados |
| **Sáb 10/10** | D-3 | **Checkpoint 1** | **Pronto até 10/10** (lista abaixo) | Todos | Aprovação do Lançamento |
| Dom 11/10 | D-2 | Ensaio | Ensaio ponta a ponta de captação com contatos de teste de S1, S2 e S3; agendamento de e-mail, API e grupos de 13/10 a 20/10; capa TR1 em todos os grupos | Automação e Suporte | T19 a T24 aprovados; agenda conferida linha a linha |
| **Seg 12/10** | D-1 | **Checkpoint 2** (feriado) | **Pronto até 12/10** (lista abaixo) e reunião de go ou no-go | Todos | Go da captação |
| Ter 13/10 | D0 | Abertura | 07h e-mail; 09h API; 11h30 grupos; monitoramento em 07h30, 12h e 21h; registro de falhas | Automação | Primeiras 24 h sem duplicata, sem falha de webhook |
| 14 a 16/10 | D+1 a D+3 | Pós-live, base | Criar produto e 9 ofertas em rascunho; 6 banners; páginas de obrigado de venda; formas de pagamento e garantia | Automação, Financeiro | 9 de 9 ofertas criadas |
| 19/10 | D+6 | Pós-live, eventos | Eventos do ListBoss (24); tags de evento; automações de recuperação e de compra aprovada; templates dos fluxos F4 a F6 submetidos até as datas da tabela 4.4 | Automação | 24 de 24 eventos recebendo teste |
| 20/10 | D+7 | Pipelines | Pipelines P1 e P2 com etapas, regras de interrupção e links de integração (W08) | Automação e Comercial | T26 a T35 aprovados |
| 22/10 | D+9 | Golden Ticket | API-BF-05.1 e CP-BF-GT01; teste da ativação | Automação e Copy | T23 aprovado |
| **Ter 27/10** | D+14 | **Templates do pós-live** | **Submeter** os templates dos fluxos F7 a F11 (7 dias antes de 03/11); ManyChat com `estado_live`; plantão definido | Automação | Todos os templates em análise |
| Qua 28/10 | D+15 | Teste de compra | Compra de teste em cada uma das 9 ofertas, com Pix, cartão recusado e boleto; teste de preço travado (T25) | Automação, Financeiro | T25 a T35 aprovados |
| Sex 30/10 | D+17 | Congelamento | Só mudam datas de lote e links; revisão de acessos às abas restritas | Automação | Nenhuma mudança sem registro |
| Sáb 31/10 | D+18 | Ensaio geral | Simulação de 03/11, de 05h45 a 22h05, com contatos de teste nos 3 segmentos; troca TR2, TR3 e TR4 em grupos de teste; virada de lote simulada | Todos | T36 a T40 aprovados |
| Dom 01/11 | D+19 | Correções | Corrigir o que o ensaio mostrou; escalas de 02/11 e 03/11 | Automação, Comercial | Zero bloqueante aberto |
| **Seg 02/11** | D+20 | **Checkpoint 3** (Finados, tom sóbrio) | **Pronto até 03/11** (lista abaixo); confirmar datas E1, E2 e E3 e o horário de abertura | Todos | Go do carrinho |
| **Ter 03/11** | D+21 | Live | Grade da seção 7.5 e de `05_whatsapp_api/dia_da_live_03_11.md` | Automação, Comercial, Suporte | Ver seção 10 |

**Pronto até 10/10 (checkpoint 1)**

1. Decisões 1 a 9 de `12_decisoes_e_pendencias.md` fechadas (ou o plano alternativo escrito: ver risco R2).
2. Links existentes: 4 famílias de grupo, 5 capturas, obrigado e pesquisa, diagnóstico, lista de espera, página das alunas, verificador, onboarding, página da live, 9 checkouts (pelo menos em rascunho) e os 12 webhooks no cofre.
3. Produto e 9 ofertas criados na Hotmart (pelo menos em rascunho).
4. Listas, tags e campos criados com os nomes exatos; classificação S1, S2, S3 funcionando.
5. Webhooks W01 a W05 em teste; planilhas com abas e acessos.
6. Templates de F1 a F3 enviados à Meta (**hoje**).
7. Foto da Dra. e artes de capa TR1; número de suporte oficial; números dos administradores no verificador.
8. UTMs e links curtos de captação gerados, e teste de leitura dos parâmetros.
9. Escala de plantão de 12/10, 13/10 e 02/11 definida.

**Pronto até 12/10 (checkpoint 2, go da captação)**

1. T01 a T24 aprovados, com os bloqueantes em 100%.
2. Onboarding por API e e-mail por segmento, grupos com boas-vindas e capa TR1, ManyChat com VITALÍCIA e DIAGNÓSTICO.
3. E-mail das 07h, API das 09h e grupos das 11h30 e 20h agendados de 13/10 a 20/10, conferidos linha a linha contra `06_emails` e `05_whatsapp_api` e contra a matriz de exclusões.
4. Supressão por SAIR e pausa por resposta humana testadas.
5. Verificador de números no ar e linkado nas páginas.
6. Monitor de falhas de webhook ativo, com alerta ao responsável.

**Pronto até 03/11 (checkpoint 3, go do carrinho)**

1. 9 ofertas conferidas em rascunho (banner, preço, formas, obrigado), prontas para ativar só as 3 do Lote Especial.
2. 24 eventos do ListBoss, pipelines P1 e P2, tags de evento e regras de interrupção testados com compra de teste em cada oferta.
3. Templates de F7 a F11 aprovados.
4. Roteiro de virada de lote ensaiado (T36), `estado_live`, `lote_atual`, `data_virada`, `link_checkout_*` definidos.
5. Modo escuta testado (T37) e plantão do comercial escalado, com respostas rápidas de parcelamento, lote e aluna ou não.
6. Capas TR2, TR3, TR4 prontas e dupla de troca definida.
7. Ensaio geral de 31/10 sem bloqueante aberto.
8. Datas E1, E2, E3 e horário de abertura confirmados e escritos nas variáveis.

---

## 10. Checklist de teste ponta a ponta e critério de aceite

Regras: todo teste usa contatos fictícios da equipe e `evento = TESTE`. "Bloqueia" = sem aprovação, não há go. Registrar a data, quem testou e o print da evidência na coluna de observação da planilha de testes `[[PENDENTE: planilha de testes]]`.

| # | Teste | Como fazer | Critério de aceite | Bloqueia |
|---|---|---|---|---|
| T01 | Captura S3 | Cadastrar contato de teste que não está em S1 nem S2, pela captura A | Em até 60 s: linha na aba CAPTURA com utm_*; contato no DataCrazy na lista `INSCRITOS` com `INSCRITA` e `NAO-ALUNA`; contato no ListBoss e no ManyChat | Sim |
| T02 | Captura S1 | Cadastrar contato presente na `BASE S1` | Tags `ALUNA-CLUBE` e `INSCRITA`; não recebe `NAO-ALUNA` | Sim |
| T03 | Captura S2 | Cadastrar contato em `BASE S2` (com origem Desafio) | Tags `VIVEU-METODO`, `VM-DESAFIO` e `INSCRITA` | Sim |
| T04 | Dedupe | Reenviar o mesmo e-mail; enviar outro e-mail com o mesmo telefone | Um só contato por pessoa; sem duplicata no DataCrazy, ListBoss e planilha | Sim |
| T05 | Validação | Telefone sem DDI, e-mail inválido, sem UTM | Rejeita o inválido com a mensagem da página; UTM vazia grava `sem-utm` | Não |
| T06 | UTMs | Abrir todos os links curtos `bfp-<canal>` e os de segmento | 100% chegam à página certa com os 6 parâmetros e sem `?` duplo; lead grava todos | Sim |
| T07 | Obrigado | Concluir a captura de S1, S2 e S3 | Página de obrigado mostra o botão do grupo da família certa e os 3 passos | Sim |
| T08 | Diagnóstico | Responder para cada um dos 5 perfis e para "sem nome" | Resultado correto; aba DIAGNOSTICO (restrita) com pontos, principal, secundário e percentuais; tag `DIAG-*` e `DIAG-FEZ` | Sim |
| T09 | Empate e refazer | Forçar empate; refazer o diagnóstico | Desempate por D3, depois D2, depois a ordem do arquivo; refazer troca a tag e marca `refez_diagnostico` | Não |
| T10 | Pesquisa | Enviar parte A; sair; enviar parte C com Q7 "não tenho o dinheiro disponível agora" e faixa baixa | W03 grava as duas partes (e o abandono); `SEM-ESFORCO-COMERCIAL` aplicada; `PESQUISA-COMPLETA` só quando a parte C chega | Não |
| T11 | Onboarding API | Cadastrar S1, S2 e S3 com telefone de teste | API-BF-01-A, -D e -N certas, com os botões de grupo e diagnóstico e o rodapé SAIR, em até 2 minutos | Sim |
| T12 | Onboarding e-mail | Mesmo teste | OB-02 certo por segmento, imediato | Sim |
| T13 | Não entrou no grupo | Não entrar no grupo por 2 horas | OB-01 em 2 h; API-BF-02 depois; entrar no grupo interrompe | Sim |
| T14 | Grupo: entrada e saída | Entrar e sair de um grupo de teste | `NO-GRUPO` na entrada; `SAIU-GRUPO` e API-BF-03 na saída; voltar remove `SAIU-GRUPO`. O clique no botão sozinho **não** aplica `NO-GRUPO` | Sim |
| T15 | Recuperação | Rodar R01 em lote de teste | Só quem está sem `NO-GRUPO` recebe; uma mensagem por dia | Não |
| T16 | SAIR | Responder SAIR a uma API | `SAIR` aplicada em ListBoss, ManyChat e DataCrazy; `SUPRESSAO`; nenhuma mensagem de WhatsApp depois | Sim |
| T17 | Resposta humana | Responder a uma API de teste | `EM-ATENDIMENTO`; automações pausadas em ListBoss e DataCrazy; card na etapa de conversa; alerta ao responsável | Sim |
| T18 | Exclusões | Montar contatos para cada linha da matriz 2.5 (S1 em 14/10, S2 em 16/10, `INSCRITA` no convite, `ALUNA-GARANTIA-7D`, duas APIs no mesmo dia) | Cada contato recebe só o que a matriz permite | Sim |
| T19 | Rodízio | Encher um grupo de teste com limite baixo | O próximo grupo abre com nome NN, capa TR1, descrição e boas-vindas fixada; o link da família entrega o grupo novo | Não |
| T20 | Troca de nome e capa | Ensaiar TR1 a TR4 em grupos de teste, com duas pessoas | Cada troca fora da janela de disparo, em até 10 minutos, registrada na planilha | Não |
| T21 | ManyChat Instagram | Comentar VITALÍCIA e DIAGNÓSTICO no post de teste | Resposta pública (00a a 00d), direct, ramos A, B e C; link da captura com UTM de manychat; `bf_reservou` chega em até 5 min; tag de perfil grava `perfil_declarado` | Sim |
| T22 | ManyChat pós-live | Trocar `estado_live` para AO_VIVO e depois CARRINHO_ABERTO | D01 antes da abertura; V01 ou V01-A (conforme `bf_aluna`); V02 com o link do segmento e do lote | Sim |
| T23 | Golden Ticket | Rodar API-BF-05.1 para uma aluna de teste, ativar | `VIP-ENVIADO` e `VIP-ATIVOU`; 05.2 só para quem não ativou | Não |
| T24 | Lembretes | Rodar API-BF-07, 08 e 09 | 07 só para quem não tem `LEMBRETE-ATIVO`; 08 só para quem não tem `DIAG-FEZ`; 09 para todos | Não |
| T25 | Preço travado | Gerar Pix e boleto no Lote Especial, ativar o Primeiro Lote, pagar o Pix e, depois, o boleto | Registrar o valor cobrado e a validade; escolher a versão A ou B dos textos (seção 6.4) | Sim |
| T26 | 9 ofertas | Abrir cada checkout em modo de teste | 9 de 9: banner, preço, formas de pagamento, garantia e página de obrigado corretos (aluna ou nova no Clube); nenhuma acessível ao público antes de 03/11, 20h | Sim |
| T27 | Compra por oferta | Compra de teste em cada oferta | 9 de 9: evento no ListBoss com segmento certo, linha em EVENTOS, card no pipeline, tags `COMPRA-APROVADA`, `COMPROU` e `COMPROU-<lote>`, `UPGRADE-ALUNA` em S1 | Sim |
| T28 | Abandono | Abrir checkout e sair | API-01 em até 1 h; API-02 em 24 h; resposta "1" ou "2" pausa a API e abre atendimento humano | Sim |
| T29 | Pix | Gerar Pix e não pagar; depois pagar outro | API-03 imediato; E3a toque 1 em 2 a 3 h; toque 2 em 8 a 10 h antes de vencer; pagamento cancela tudo; expiração dispara API-04 | Sim |
| T30 | Boleto | Gerar boleto e não pagar | API-05 imediato; E3b toque 1 na manhã seguinte e toque 2 na manhã do vencimento; vencido dispara API-06 | Não |
| T31 | Recusada | Cartão de teste recusado, fora e dentro da noite de 03/11 | Fora: API-07 imediato. Na noite: alerta ao atendente e primeira resposta humana em até 10 minutos (medir) | Sim |
| T32 | Aprovada | Compra aprovada | Recuperações canceladas; API-08 e EP-AP-01 imediatos; PC-D0 em 2 h; convite do grupo da Vitalícia; E6 toque 2 em 48 h | Sim |
| T33 | Reembolso | Pedido e depois reembolsado | API-09 e EP-RB-01; pós-compra cancelado; E7 humano; RF2 e E8 toque 2 | Não |
| T34 | Link errado | Aluna compra em oferta de S3; aluna compra em oferta de S1 | A primeira recebe `LINK-ERRADO` e card U8; a segunda, `UPGRADE-ALUNA` e U6 | Sim |
| T35 | Segmento duplo | Contato em S1 e S2 | Fica em S1, com oferta e texto de S1 | Não |
| T36 | Virada de lote | Ensaiar o roteiro 6.2 em ambiente de teste, com cronômetro | Ofertas trocadas, variáveis atualizadas, texto de API com o lote novo, banner novo, nome e capa trocados e log preenchido em até 15 minutos | Sim |
| T37 | Modo escuta | Simular 19h15 a 22h05 | Nenhuma automação de venda sai; E4 humano funciona; às 22h05 as automações voltam | Sim |
| T38 | Janela de horário | Gerar Pix às 22h30 | Toque 1 às 7h do dia seguinte, ainda dentro das 48 h | Não |
| T39 | Variáveis | Disparar todos os templates para um contato de teste | Nenhuma mensagem com `{{...}}` visível; botões e links corretos | Sim |
| T40 | Ensaio geral | Simular 03/11 de 05h45 a 22h05, com os 3 segmentos | Um disparo por minuto; ordem da grade; trocas TR2, TR3 e TR4; D01 e V01 do ManyChat; sem duplicata | Sim |
| T41 | Lista de espera | Enviar o formulário; clicar da pesquisa (Q7) | `LISTA-ESPERA`; e-mail e WhatsApp de confirmação; sem esforço comercial | Não |
| T42 | Reconhecimento de aluna | Digitar e-mail de aluna e e-mail desconhecido na página C | Reconhecida mostra a condição; desconhecida mostra a ajuda e o suporte | Sim |
| T43 | URA e SMS | Rodar a lista de teste de 02/11 e de 03/11 | Só `INSCRITA` com telefone válido; `SAIR` e `COMPROU` fora; SMS com opt-out | Não |
| T44 | Presença | Clicar no link rastreado da live | `CLICOU-LIVE` aplicada; LV-03-04 não vai para quem clicou | Não |
| T45 | Falha de webhook | Derrubar um destino de propósito | A página não perde o lead; a fila repete; o alerta chega ao responsável | Sim |

**Critério de aceite geral.** Go da captação em 12/10: T01 a T24 e T42 a T45 com todos os "Sim" aprovados. Go do carrinho em 02/11: T25 a T40 com todos os "Sim" aprovados e nenhum bloqueante aberto. Se algum bloqueante falhar, a regra é corrigir e repetir o teste inteiro, não só o passo que falhou.

---

## 11. Riscos e contingência

| # | Risco | Prob. | Impacto | Sinal de alerta | Prevenção | Contingência | Dono |
|---|---|---|---|---|---|---|---|
| R1 | Templates de API não aprovados a tempo para 13/10 e 14/10 (a Meta pede 7 dias e hoje faltam 6) | Alta | Alto | Status "em análise" em 12/10 | Submeter hoje; texto sem ícone de alerta e sem urgência falsa | Onboarding por e-mail (OB) e por grupo; ManyChat dentro da janela de 24 h; adiar a onda 1 do convite indireto para 20/10 | Automação |
| R2 | Decisões 1 a 9 de `12` não fechadas em 10/10 | Média | Alto | Item aberto em 10/10 | Cobrança diária a partir de 08/10 | Captação sai sem elas (já está sem preço). Ofertas ficam em rascunho; mensagens com `{{data_virada}}` vazia usam a linha "o lote vigente e a data de virada são anunciados ao vivo" | Lançamento |
| R3 | Mensagem duplicada (duas famílias de copy; ListBoss e DataCrazy no mesmo evento) | Alta | Médio | Contato reclama; contagem de disparos acima do plano | Regra de camada (6.3), família ativa (1.4), matriz de exclusões | Pausar a camada extra, pedir desculpa só se houver reclamação, ajustar a tag de supressão | Automação |
| R4 | Virada de lote errada (oferta antiga ainda ativa, texto com lote errado) | Média | Alto | Checkout mostra preço antigo no minuto 3 | Roteiro 6.2, duas pessoas, janela anônima, T36 | Reverter a oferta, mensagem de correção pré-aprovada, tratar os pedidos pela regra de preço (6.4) | Automação |
| R5 | Pix ou boleto gerado antes da virada é cobrado em preço diferente | Média | Alto | T25 mostra diferença | Teste T25 e versão B dos textos até saber | Resposta pronta para o comercial; decisão de honrar ou não `[[PENDENTE: política do lote para pedidos gerados]]` | Financeiro |
| R6 | Tag `bf_reservou` demora e o Ramo A entra em loop | Média | Médio | Reclamação "já reservei" | Integração com repetição; A07 explica a espera | Ramo manual do ManyChat e checagem por e-mail | Automação |
| R7 | Webhook de captura cai e o lead se perde | Baixa | Alto | Queda no número de linhas em CAPTURA | Fila de repetição, alerta, T45 | Reprocessar do log do integrador; a página mostra o obrigado mesmo com falha | Automação |
| R8 | Grupo cheio ou número banido pelo WhatsApp | Média | Alto | Queda de entradas | Rodízio com 10% de folga, números oficiais, links de reserva | Abrir grupo alternativo e comunicar por e-mail e API | Suporte |
| R9 | Número da API bloqueado por denúncia ou qualidade baixa | Média | Alto | Queda de entrega, aviso da Meta | Uma API por dia, SAIR respeitado, texto sem pressão | Número reserva `[[PENDENTE: número reserva da API]]`; reduzir volume | Automação |
| R10 | Aluna classificada como S3 (preço e copy errados) | Média | Alto | Compra no link errado | Lookup por e-mail e telefone; página das alunas; U8 | Ajuste manual e crédito `[[PENDENTE: regra de ajuste]]` | Comercial |
| R11 | Presença na live não é mensurável por pessoa | Alta | Médio | Sem dado às 22h | Link rastreado e participação no chat como proxy; critério fechado antes | `NAO-ASSISTIU` vira "sem clique"; régua A12 com texto neutro | Lançamento |
| R12 | Modo escuta falha e sai disparo de venda durante a live | Baixa | Alto | Mensagem às 20h30 | Pausa automática às 19h15, chave mestra, T37 | Desativar a fila no ListBoss e no DataCrazy; plantão | Comercial |
| R13 | Live atrasa ou cai | Média | Alto | Atraso de mais de 10 minutos | Horários andam juntos; nada de venda antes do link | Mensagem de contingência pronta; trocar capa; reagendar os disparos em bloco | Lançamento |
| R14 | Hotmart instável na abertura | Baixa | Alto | Erro 5xx no checkout | Ofertas conferidas em 02/11; contato com a Hotmart na noite | Checkout reserva `[[PENDENTE: checkout reserva]]`; mensagem de espera | Financeiro |
| R15 | Pico de cartão recusado às 21h28 sem atendente | Alta | Alto | Fila de recusadas acima de 10 minutos | Plantão escalado; Pix em destaque; resposta rápida | Reforço `[[PENDENTE: número de atendentes de plantão]]` | Comercial |
| R16 | Custo de API acima do orçamento | Média | Médio | Gasto diário acima do plano | 1 API por dia; API-BF-11 a 13 só para quem não clicou | Cortar as ondas de menor retorno `[[PENDENTE: verba de API]]` | Tráfego |
| R17 | Vazamento de dado sensível (diagnóstico, renda, pergunta aberta) | Baixa | Alto | Exportação ou acesso fora da lista | Abas restritas, sem exportar, revisão de acessos em 12/10 e 30/10, troca de senha do CRM (`12`, item 57) | Revogar acesso, avisar o jurídico | Automação |
| R18 | Link com `?` duplo, UTM vazia ou parâmetro de sessão | Média | Médio | T06 falha | Seção 8, teste de leitura, planilha de UTMs | Corrigir o link na ferramenta e reenviar | Tráfego |
| R19 | Falta de plantão em 12/10, 02/11 e 03/11 | Média | Alto | Escala vazia em 10/10 | Escala definida no checkpoint 1 | Reserva de plantão | Lançamento |
| R20 | Contador ou texto que sugere limite de vagas | Baixa | Médio | Variável de vagas no sistema | Nenhuma variável de vagas; `12`, itens 9 e 56 | Remover a linha | Copy |
| R21 | Compradoras recebem mensagens de venda nos grupos de captação | Alta | Médio | Pergunta "eu já comprei" | Decisão em P23; texto de grupo com "se você já entrou, ignore" | Retirar compradoras dos grupos ou avisar | Suporte |
| R22 | Telefones sem WhatsApp ou digitados errados | Alta | Médio | Taxa de falha de entrega | Máscara, validação, `BFP/26-WPP-INVALIDO` | Fallback por e-mail | Automação |
| R23 | Chargeback e cancelamento sem tratamento | Baixa | Médio | Evento sem tag | Mapear na Hotmart | Tag própria e card `[[CONFIRMAR]]` | Financeiro |
| R24 | Template reprovado por urgência ou ícone | Média | Médio | Reprovação na Meta | Versão sem ícone e sem urgência | Reescrever e reenviar; usar e-mail | Copy |

---

## 12. Campos pendentes

Todos os `[[PENDENTE: ...]]` deste documento, consolidados. "Bloqueia" indica o que não anda sem a resposta. Ver também `12_decisoes_e_pendencias.md`.

| # | Pendência | Quem decide ou fornece | Prazo | Bloqueia |
|---|---|---|---|---|
| P01 | `[[PENDENTE: preço avulso]]` dos 11 produtos e do Clube (e se existe "de/por" no banner) | Dra. e Produto | 10/10 | Banner, pitch, vendas |
| P02 | `[[PENDENTE: data do lote]]` das duas viradas (E1, E2) | Dra. e Lançamento | 10/10 | Ofertas, variáveis, escassez |
| P03 | `[[PENDENTE: garantia]]` da Vitalícia | Dra. e Jurídico | 10/10 | Checkout, onboarding, reembolso |
| P04 | `[[PENDENTE: parcelamento]]` (parcelas, entrada, boleto, Pix) | Financeiro | 10/10 | Ofertas, comercial |
| P05 | `[[PENDENTE: bônus]]` (antecipação, ao vivo, check-in nos grupos) | Dra. | 10/10 | Pitch, descrição dos grupos |
| P06 | `[[PENDENTE: abertura do carrinho]]` e `[[PENDENTE: fechamento]]` | Lançamento | 10/10 | Ofertas, disparos |
| P07 | `[[PENDENTE: replay]]` (sim ou não) | Dra. | 10/10 | Textos, régua, presença |
| P08 | Preço travado no Pix e no boleto, prazo do Pix, compensação do boleto | Financeiro e Hotmart | 28/10 (T25) | E3, E5, banner |
| P09 | Condição do Golden Ticket (e se "número de tickets" existe) | Dra. | 10/10 | API-BF-05.x |
| P10 | `[[PENDENTE: ID do produto Hotmart]]` | Automação e Financeiro | 09/10 | Eventos |
| P11 | Links dos 4 grupos de rodízio | Suporte | 10/10 | Obrigado, API, ManyChat |
| P12 | Links das páginas: 5 capturas, obrigado e pesquisa, lista de espera, página das alunas, onboarding, verificador, página da live, página de vendas | Web designer | 10/10 | Todo o fluxo |
| P13 | 9 links de checkout | Automação | 16/10 | Venda |
| P14 | 12 webhooks, autenticação e cofre (`[[PENDENTE: padrão de autenticação do integrador]]`) | Automação | 08/10 | Dados |
| P15 | Ferramenta do diagnóstico e da pesquisa (onde roda e como envia W02 e W03) | Web designer | 08/10 | Segmentação por perfil |
| P16 | Fonte e critério de aluna (`[[PENDENTE: fonte da lista de alunas]]`; ativa, encerrada, em garantia, com reembolso) | Lançamento | 09/10 | Segmento S1 |
| P17 | `[[PENDENTE: contagem de alunas]]` | Lançamento | 10/10 | Tamanho do grupo G2 |
| P18 | Fonte das bases S2 e S3 (Desafio, Imersão, Aulão, leads antigos, lista 2026) | Automação | 08/10 | Segmento S2 e S3 |
| P19 | `[[FOTO DRA]]` e artes de capa por estado, ingresso e Golden Ticket | Artes | 10/10 | Grupos, API |
| P20 | Número de suporte oficial, números dos administradores, limite por número por dia | Suporte | 10/10 | Verificador, grupos |
| P21 | Limite do rodízio, quantidade de grupos e `[[PENDENTE: meta de leads]]` | Lançamento e Tráfego | 10/10 | Grupos |
| P22 | Nome, descrição e boas-vindas do grupo da Vitalícia, um ou por segmento | Copy e Suporte | 20/10 | Pós-compra |
| P23 | `[[PENDENTE: manter ou retirar compradoras dos grupos de captação]]` | Suporte | 20/10 | Grupos pós-live |
| P24 | `[[PENDENTE: template da arte do ingresso]]` e presente de compartilhamento | Artes e Dra. | 10/10 | Ramo B do ManyChat |
| P25 | `[[PENDENTE: integração do formulário de captura com o ManyChat]]` | Automação | 08/10 | Ramo A |
| P26 | `[[PENDENTE: fonte e critério de presença]]` | Lançamento | 20/10 | Tags de presença, certificado |
| P27 | `[[CONFIRMAR: critério para criar card de inscrita no pipeline 1]]` | Comercial | 10/10 | Volume do comercial |
| P28 | `[[PENDENTE: prazo de resposta]]` e escala de plantão de 12/10, 13/10, 02/11 e 03/11 | Comercial e Lançamento | 10/10 | Modo escuta, recusadas |
| P29 | `[[PENDENTE: camada ativa por evento]]` (aprovação da regra de 6.3 por Copy e Comercial) | Copy e Comercial | 16/10 | Duplicidade |
| P30 | `[[PENDENTE: decidir atribuição]]` por vendedor e IDs | Comercial | 20/10 | Relatório de venda |
| P31 | `[[PENDENTE: definição técnica de silêncio]]` | Comercial | 20/10 | Régua |
| P32 | `[[PENDENTE: campo de gênero no CRM]]` | Automação | 20/10 | Texto no feminino |
| P33 | `[[PENDENTE: contatos de teste da equipe]]`, modo de teste da Hotmart e cartão de teste | Automação e Financeiro | 08/10 | Todos os testes |
| P34 | `[[PENDENTE: verba de API]]` e número reserva | Tráfego | 16/10 | Custo e continuidade |
| P35 | S2 com oferta própria (3 ofertas) | Dra. | 10/10 | Ofertas |
| P36 | Regra de migração e plano atual das alunas (`[[CONFIRMAR: modelo de cobrança atual do Clube]]`) | Dra. e Financeiro | 10/10 | U2, U6, U7, U9 |
| P37 | Degrau de entrada para a base de renda baixa (com ou sem) | Dra. | 10/10 | Lista de espera |
| P38 | Aula de terça 03/11 do Clube | Lançamento | 10/10 | Texto das alunas |
| P39 | Live fechada para alunas (`12`, item 39) | Dra. | 10/10 | Datas das alunas |
| P40 | Cadência: lembretes das 12h contra 07h e slot de 16h30 | Lançamento | 10/10 | Agenda |
| P41 | Família de copy ativa por canal (05/06 ou 13) | Copy | 10/10 | Agenda |
| P42 | Telegram fora do escopo | Lançamento | 10/10 | UTM, agenda |
| P43 | Jurídico: diagnóstico e LGPD, e-mail transacional após SAIR, protocolo de crise | Jurídico | 20/10 | Dados |
| P44 | Segurança: trocar a senha do CRM e usar cofre (`12`, item 57) | Automação | 08/10 | Acesso |
| P45 | `[[PENDENTE: planilha de testes]]`, `[[PENDENTE: canal de alerta]]`, `[[PENDENTE: checkout reserva]]`, `[[PENDENTE: número de atendentes de plantão]]`, `[[PENDENTE: política do lote para pedidos gerados]]`, `[[PENDENTE: regra de ajuste]]` | Automação e Comercial | 20/10 | Contingências |

---

## 13. Controle de versão

| Versão | Data | O que mudou |
|---|---|---|
| 1.0 | 07/10/2026 | Primeira versão, a partir da análise do doc do Desafio e das copys da Black |

Ao fechar uma pendência, trocar o marcador pelo valor e registrar aqui a data e quem fechou.

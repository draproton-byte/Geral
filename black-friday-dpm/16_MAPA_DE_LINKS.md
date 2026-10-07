# Mapa de links da Black Próton Vitalícia

Registro único de todo link que as copys usam. Cada mensagem tem **um** link principal e ele aparece no texto no formato:

`[[LINK: <destino> | <canal> | <ID da copy>]]`

Exemplo: `[[LINK: captura A | wpp | cp-bf-12]]` vira `https://draproton.com.br/bfp-wpp?utm_content=cp-bf-12&utm_term=<perfil>` e leva à página de captura A com todos os parâmetros. Quem monta o link troca o token pela URL pela fórmula da seção 3. Enquanto a página ou o checkout não existir, o token fica no texto: ele diz exatamente qual link entra ali.

## 1. Destinos (nomes canônicos)

| Destino (nome no token) | O que é | Quem cria | Onde aparece |
|---|---|---|---|
| captura A | Captura com o diagnóstico acima da dobra (base que não sabe o que a trava) | Web designer | Tráfego frio, grupos gerais, e-mail geral, bio, stories |
| captura B | Captura oferta primeiro (quem já conhece a Dra.) | Web designer | Teste A/B contra a A |
| captura C | Captura das alunas do Clube | Web designer | Mensagens e e-mails das alunas |
| captura D | Captura de quem viveu Desafio, Imersão ou Aulão e não é do Clube | Web designer | Mensagens e e-mails de S2 |
| obrigado e diagnóstico | Página depois do cadastro: grupo, data, diagnóstico dos 5 perfis, pesquisa | Web designer | Pós-cadastro, API de onboarding |
| lista de espera | Página para quem chega depois ou não cabe na faixa | Web designer | Lembretes e comercial |
| live YouTube | Link da transmissão de 03/11 20h (com lembrete) | Equipe de YouTube | Lembretes, ao vivo |
| página de vendas | Página que abre na live | Web designer | Pós-live |
| página das alunas | Condição de aluna e reserva | Web designer | S1 |
| onboarding | Página de boas-vindas pós-compra | Web designer | Pós-compra |
| diagnóstico | Resultado ou refazer o diagnóstico | Web designer | E-mails, comercial |
| grupo geral, grupo alunas, grupo viveu o método, grupo vitalícia | Convite do grupo de WhatsApp (SendFlow, rodízio) | Automação | Onboarding, e-mails |
| suporte WhatsApp | Número oficial de suporte (wa.me) | Suporte | Todas as peças com "dúvida" |
| checkout S1-ESP, S1-1L, S1-UL | Hotmart, alunas: Lote Especial, Primeiro Lote, Último Lote | Financeiro / Hotmart | Pós-live |
| checkout S2-ESP, S2-1L, S2-UL | Hotmart, quem viveu o método (paga como não-aluna até decisão contrária) | Financeiro / Hotmart | Pós-live |
| checkout S3-ESP, S3-1L, S3-UL | Hotmart, não-alunas e base fria | Financeiro / Hotmart | Pós-live |
| reembolso | Instrução de pedido de reembolso (Hotmart) | Suporte | Comercial, pós-compra |
| calendário | Arquivo .ics da live | Automação | Obrigado, e-mails |
| depoimento | Formulário de depoimento e autorização | Marketing | Pós-compra |
| privacidade, termos | Política de privacidade e termos de uso | Jurídico | Rodapé de páginas, formulários |
| áudio do dia | Áudio de Grabovoi (somente se a Dra. gravar) | Conteúdo | Grupos |
| área de membros | Acesso ao conteúdo comprado (Hotmart Club ou equivalente) | Produto | Onboarding, pós-compra |
| tutorial de acesso | Passo a passo para entrar na área de membros | Suporte | Onboarding, e-mails de pós-compra |
| degrau de entrada | Oferta de entrada para a base de baixa renda (só se a Dra. decidir que existe) | Dra. e Lançamento | Lista de espera |
| verificação de números | Página que confere o número do grupo e orienta contra golpe | Web designer | Suporte, grupos |
| NPS | Formulário de satisfação pós-compra e pós-live | Marketing | Pós-compra, e-mails de NPS |
| certificado | Entrega do certificado (PDF anexo ou página) | Suporte | E-mail de certificado |

## 2. Canais (segundo token) e links curtos

| Canal | Código | Link curto padrão |
|---|---|---|
| WhatsApp grupos | `wpp` | `draproton.com.br/bfp-wpp` |
| WhatsApp API | `api` | `draproton.com.br/bfp-api` |
| E-mail | `email` | `draproton.com.br/bfp-email` |
| SMS | `sms` | `draproton.com.br/bfp-sms` |
| Comercial (DataCrazy) | `comercial` | `draproton.com.br/bfp-comercial` |
| ManyChat | `manychat` | `draproton.com.br/bfp-manychat` |
| Bio | `bio` | `draproton.com.br/bfp-bio` |
| Stories | `stories` | `draproton.com.br/bfp-stories` |
| Live do Instagram | `liveig` | `draproton.com.br/bfp-liveig` |
| YouTube | `yt`, `yt-live`, `yt-banner` | `draproton.com.br/bfp-yt`, `bfp-yt-live`, `bfp-yt-banner` |
| TikTok | `tiktok` | `draproton.com.br/bfp-tiktok` |
| Lista de espera | `lista-de-espera` | `draproton.com.br/bfp-lista-de-espera` |
| Anúncios | `ads-meta`, `ads-yt`, `ads-tiktok`, `ads-rmkt` | `draproton.com.br/bfp-ads-<plataforma>` |
| Segmentos | alunas, viveu, espera | `draproton.com.br/bfp-alunas-<canal>`, `bfp-viveu-<canal>`, `bfp-espera-<canal>` |
| Página (links entre páginas do funil) | `pagina` | Sem link curto: link direto entre páginas do próprio site, com `utm_content=<ID do bloco>` |

Detalhes e tabelas completas de UTM estão em `15_automacao/doc_captacao_automacao_black.md`, seção 8.

## 3. Fórmula do link final

1. Captação: `https://draproton.com.br/bfp-<canal>?utm_content=<ID da copy>&utm_term=<perfil ou todos>`. O encurtador mantém `utm_id=bfp26`, `utm_campaign=bfp26-captacao`, `utm_source` e `utm_medium` do canal. `[[CONFIRMAR: o encurtador repassa utm_content e utm_term acrescentados no fim]]`.
2. Venda: `<URL do checkout>&src=<canal>&sck=<ID da copy>&utm_id=bfp26&utm_campaign=bfp26-venda&utm_source=<canal>&utm_medium=<medio>&utm_content=<ID da copy>&utm_term=<esp|1l|ul>`.
3. Sempre minúsculas, sem acento, um `?` só. Nunca copiar parâmetro de sessão de uma pessoa.

## 4. Quando o link ainda não existe

| Link | Situação | Depende de |
|---|---|---|
| Páginas A, B, C, D, obrigado, lista de espera, vendas, onboarding | Não criadas | Web designer; identidade visual |
| Encurtadores `bfp-*` | Não criados | Tráfego (planilha de UTMs) |
| Grupos de WhatsApp | Não criados | Automação (rodízio SendFlow) |
| 9 checkouts Hotmart | Não criados | Financeiro; lotes, preços e parcelamento fechados |
| Live no YouTube | Não criada | Equipe de YouTube |
| Suporte WhatsApp | Número oficial não informado | Suporte |
| Webhooks (12) | Não criados; endereços ficam no cofre | Automação |

Nenhuma URL real é inventada neste pacote. Onde o link existe hoje no Desafio, ele **não** é reutilizado para a Black.

## 5. Inventário de tokens por arquivo

Gerado na revisão final (ver `14_revisao/links_log.md`).

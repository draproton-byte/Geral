# Escassez e virada de lote (depois da revelação)

| Campo | Definição |
|---|---|
| **Peça** | 24 anúncios (4 famílias × 3 ângulos × 2 segmentos: ESC-ESP-01 a 06, ESC-PRI-01 a 06, ESC-ULT-01 a 06, ESC-NSR-01 a 06) + 2 anúncios condicionais de bônus (ESC-BON-01 e 02) = 26 IDs |
| **Canal** | Meta Ads (feed, stories, reels); as mesmas artes servem para remarketing de vendas, grupos e status |
| **Público** | Quem assistiu à live, visitou a página de vendas ou se cadastrou e não comprou. **Dois conjuntos separados:** alunas do Clube (S1, versão "ALUNAS") e quem ainda não é do Clube (S2 e S3, versão "NÃO-ALUNAS"; S2 paga como não-aluna até decisão contrária). Cada anúncio vai para uma lista própria, com checkout próprio |
| **Momento** | A partir da abertura do carrinho na live: 03/11, 21h28 (oferta revelada 20h51, preço 21h09, live termina 21h56). Nenhum anúncio com preço vai ao ar antes de 21h09 e nenhum com checkout antes de 21h28. As datas de virada e de fechamento estão em `[[PENDENTE: data do lote]]` e `[[PENDENTE: fechamento]]` |
| **Objetivo** | Compra pelo checkout do lote vigente. A escassez é só a de lote real |
| **Consciência** | 4 a 5 |
| **Modelo no Desafio** | Anúncios de escassez do Desafio (AD 01 a 18: tempo acabando, pergunta sobre pagar mais caro, encerramento, vídeo com contador, bônus) e a legenda de lembrete V2 |
| **O que acontece depois do clique** | Checkout do lote e do segmento → compra aprovada → trilha de entrada e primeiro passo em 48 horas (ver `10_pos_compra`). Quem não compra continua no remarketing de vendas |

## Entrega para o designer

**Identidade visual: `[[PENDENTE: identidade visual]]`.** Cor, fonte, logo e estilo ainda não existem. Nada aqui é especificação final. "Destaque" é o elemento com maior contraste e peso na identidade futura. Até lá, entregar versão neutra só para validar texto, hierarquia, posição e frame 0.

| Item | Valor |
|---|---|
| Formato F (feed) | 1080 × 1350 px (4:5), margem de 65 px nas laterais |
| Formato S (story e reels) | 1080 × 1920 px (9:16). Área segura: 250 px livres no topo e 340 px na base em stories; em reels, 250 px no topo, 670 px na base e 65 px nas laterais `[[CONFIRMAR: gabarito vigente da Meta no dia da produção]]` |
| Padrão | Todo anúncio estático sai em F e em S, em JPG ou PNG. Vídeos (ESC-NSR-05 e 06) saem só em S, em MP4, com legenda queimada |
| Kit A | Texto da arte + marca `[[PENDENTE: identidade visual]]` |
| Kit B | Kit A + `[[FOTO DRA]]` em alta resolução, fundo livre |
| Kit C | Kit A + imagem de apoio ou ícone a critério do designer (estilo a definir) |
| Hierarquia | N1 = o que para o scroll; N2 = título; N3 = apoio (lote, data, preço) |
| Versões | Cada ID já é de um segmento (ALUNAS ou NÃO-ALUNAS). A arte de alunas e a de não-alunas são arquivos separados, nunca a mesma arte com dois preços |

## Regras de escassez (as únicas formas aprovadas)

1. **Lote real, com data.** "O Lote Especial vira em `[[PENDENTE: data do lote]]`." `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]` Nenhum anúncio usa expressão de quantidade ou de "a qualquer momento": os lotes viram por data confirmada. Cada anúncio só vai ao ar com a data real preenchida; sem a data, o anúncio não publica.
2. **"Esta condição não se repete."** Forma aprovada: "O que vier depois é outra oferta, com outro preço."
3. **Proibido** (guia, seção 3): as frases de encerramento definitivo e de "nunca mais" ligadas ao acesso vitalício; comparação de preço com cobrança recorrente sem confirmação; qualquer promessa de dinheiro ou de fim da autossabotagem.
4. **Honestidade de lote:** o texto nunca diz que o lote anterior acabou por esgotamento de lugares. Ele diz que o lote anterior passou por data. A virada de lote é a data confirmada; se virar por outro critério, trocar o texto (nota 4).
5. **Contador:** só contador real, ligado à data do lote ou ao fechamento. Contador decorativo (por exemplo, "30 segundos") não entra.
6. **Link:** cada anúncio traz a linha "Link de destino" com um token do mapa de links (`16_MAPA_DE_LINKS.md`), canal `ads-meta`. Famílias 1, 2 e 3 levam ao checkout do lote que a arte mostra (ESP, 1L ou UL) e do segmento do conjunto (S1 nas ALUNAS, S3 nas NÃO-ALUNAS). O conjunto de S2 (quem viveu o método) usa a mesma arte e o mesmo ID, com o checkout S2 do mesmo lote, porque S2 paga como não-aluna até decisão contrária. A família 4 e os anúncios de bônus não fixam lote: levam à página das alunas (ALUNAS) ou à página de vendas (NÃO-ALUNAS), que mostram o lote vigente. Troca de arte na virada do lote troca também o checkout.
7. **Depois de entrar:** os anúncios dos conjuntos NÃO-ALUNAS dizem o que vem depois (trilha de entrada e primeiro passo em 48 horas); os de ALUNAS dizem que o que já foi feito conta.

**Placeholders de preço** (guia, seção 2): `[[PREÇO LOTE ALUNAS]]` e `[[PREÇO LOTE NÃO-ALUNAS]]` para o lote vigente na arte; para o lote seguinte, `[[PREÇO PRÓXIMO LOTE ALUNAS]]` e `[[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]]`. Parcelas: `[[CONFIRMAR: nº de parcelas e valor]]`. A escada de valores do briefing não aparece neste arquivo: quem troca os placeholders a consulta em `00_ESTRATEGIA_COPY_SENIOR.md`, seção 1. Nenhum valor pode aparecer antes de 03/11, 20h.

**Lote Especial e a live:** se o Lote Especial valer só para quem está ao vivo `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]`, ele termina na live e a Família 1 não existe: a escassez de lote começa na Família 2. A Família 1 só roda se o Lote Especial se estender depois da live, com data.

**Trabalho contratado:** "Eu quero uma decisão que eu só precise tomar uma vez." Nos anúncios de escassez, o texto não pressiona: mostra que a decisão tem um prazo real e que adiar tem um custo claro (a diferença entre lotes).

**Diferença entre segmentos:** em **alunas**, o texto reconhece o que a pessoa já fez ("você já está dentro, falta ficar para sempre"; "o que você já fez conta, não é recomeçar do zero"). Em **não-alunas**, o texto fala da primeira entrada. Cada ângulo tem uma versão ALUNAS e uma NÃO-ALUNAS.

**Linguagem (políticas da Meta):** nenhum título afirma uma condição pessoal do leitor. Nenhuma palavra de limite de lugares é usada: o carrinho tem lotes por data.

---

## Família 1: Virada do Lote Especial para o Primeiro Lote (6)

### ESC-ESP-01 | ALUNAS | Placar de lotes (modelo AD 01 e AD 03)
- **Texto na arte:** N1 "O LOTE ESPECIAL VIRA EM [[PENDENTE: data do lote]]." · N3 "Lote atual: [[PREÇO LOTE ALUNAS]] · Próximo lote (Primeiro Lote): [[PREÇO PRÓXIMO LOTE ALUNAS]]"
- **Texto do anúncio:** Você já está dentro do Clube. Falta ficar para sempre. Pagamento único, acesso vitalício ao Clube Secreto e aos 11 produtos. `[[CONFIRMAR: nº de parcelas e valor]]` `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]`
- **CTA (botão):** Entrar de vez
- **Formato:** F e S · **Kit:** B
- **Frame 0:** um placar de duas colunas, "Lote atual" à esquerda e "Próximo lote" à direita; o lote atual com mais peso visual, os números em tamanho grande, a data no topo. Para o scroll porque o número é o elemento mais forte e a comparação em duas colunas mostra a diferença em um olhar. `[[PENDENTE: identidade visual]]`
- Link de destino: [[LINK: checkout S1-ESP | ads-meta | ESC-ESP-01]]

### ESC-ESP-02 | NÃO-ALUNAS | Placar de lotes
- **Texto na arte:** N1 "O LOTE ESPECIAL VIRA EM [[PENDENTE: data do lote]]." · N3 "Lote atual: [[PREÇO LOTE NÃO-ALUNAS]] · Próximo lote (Primeiro Lote): [[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]]"
- **Texto do anúncio:** A decisão de parar de recomeçar tem data. Pagamento único, acesso vitalício ao Clube Secreto e aos 11 produtos. Quem entra recebe a trilha de entrada, com o primeiro passo em 48 horas. `[[CONFIRMAR: nº de parcelas e valor]]`
- **CTA (botão):** Garantir meu acesso
- **Formato:** F e S · **Kit:** B
- **Frame 0:** o mesmo placar, com a data em destaque no topo. Para o scroll porque a data real, em destaque, converte curiosidade em decisão.
- Link de destino: [[LINK: checkout S3-ESP | ads-meta | ESC-ESP-02]]

### ESC-ESP-03 | ALUNAS | Fato do bolso (modelo AD 02)
- **Texto na arte:** N1 "Você já está dentro. O valor para ficar de vez muda em [[PENDENTE: data do lote]]." · N3 "Lote atual: [[PREÇO LOTE ALUNAS]]"
- **Texto do anúncio:** O que você já fez no Clube conta e continua contando. O que muda em [[PENDENTE: data do lote]] é só o valor.
- **CTA (botão):** Entrar de vez
- **Formato:** F e S · **Kit:** A
- **Frame 0:** a frase em duas linhas, "muda em" seguido da data em destaque. Para o scroll porque é uma informação de bolso, direta, e fala com quem já conhece o produto.
- Link de destino: [[LINK: checkout S1-ESP | ads-meta | ESC-ESP-03]]

### ESC-ESP-04 | NÃO-ALUNAS | Fato do bolso (modelo AD 02)
- **Texto na arte:** N1 "Mesmo conteúdo. Mesmo acesso vitalício. Outro valor depois de [[PENDENTE: data do lote]]." · N3 "Lote atual: [[PREÇO LOTE NÃO-ALUNAS]]"
- **Texto do anúncio:** Acesso vitalício ao Clube Secreto e aos 11 produtos, em pagamento único. O lote atual vale até [[PENDENTE: data do lote]].
- **CTA (botão):** Garantir meu acesso
- **Formato:** F e S · **Kit:** A
- **Frame 0:** fundo liso, "outro valor" em destaque e o preço do lote atual logo abaixo. Para o scroll porque a combinação de afirmação e preço atual leva à decisão.
- Link de destino: [[LINK: checkout S3-ESP | ads-meta | ESC-ESP-04]]

### ESC-ESP-05 | ALUNAS | Relógio (modelo Ad 14)
- **Texto na arte:** N1 "O relógio do Lote Especial está correndo." · N3 "[[PREÇO LOTE ALUNAS]] até [[PENDENTE: data do lote]]"
- **Texto do anúncio:** Depois dessa data, o valor sobe para [[PREÇO PRÓXIMO LOTE ALUNAS]]. A decisão é a mesma: parar de recomeçar.
- **CTA (botão):** Entrar de vez
- **Formato:** F e S · **Kit:** B
- **Frame 0:** a ilustração de um relógio de parede com a data embaixo, a frase no alto. Para o scroll porque o relógio é um ícone universal de prazo. Estilo do ícone a definir.
- Link de destino: [[LINK: checkout S1-ESP | ads-meta | ESC-ESP-05]]

### ESC-ESP-06 | NÃO-ALUNAS | Relógio (modelo Ad 14)
- **Texto na arte:** N1 "O relógio do Lote Especial está correndo." · N3 "[[PREÇO LOTE NÃO-ALUNAS]] até [[PENDENTE: data do lote]]"
- **Texto do anúncio:** Depois dessa data, o valor sobe para [[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]]. A decisão é a mesma: parar de recomeçar.
- **CTA (botão):** Garantir meu acesso
- **Formato:** F e S · **Kit:** B
- **Frame 0:** o mesmo relógio, com `[[FOTO DRA]]` de lado. Para o scroll porque o rosto conhecido reforça a confiança no prazo.
- Link de destino: [[LINK: checkout S3-ESP | ads-meta | ESC-ESP-06]]

---

## Família 2: Virada do Primeiro Lote para o Último Lote (6)

### ESC-PRI-01 | ALUNAS | Placar de lotes
- **Texto na arte:** N1 "O PRIMEIRO LOTE VIRA EM [[PENDENTE: data do lote]]." · N3 "Lote atual: [[PREÇO LOTE ALUNAS]] · Próximo lote (Último Lote): [[PREÇO PRÓXIMO LOTE ALUNAS]]"
- **Texto do anúncio:** O Lote Especial já passou. Depois do Primeiro Lote, só o Último Lote. Você já está dentro: falta ficar para sempre. `[[CONFIRMAR: nº de parcelas e valor]]`
- **CTA (botão):** Garantir meu acesso vitalício
- **Formato:** F e S · **Kit:** B
- **Frame 0:** um placar com três degraus: o primeiro riscado, o segundo em destaque e o terceiro em peso reduzido. Para o scroll porque a escada visual mostra que o primeiro degrau já passou.
- Link de destino: [[LINK: checkout S1-1L | ads-meta | ESC-PRI-01]]

### ESC-PRI-02 | NÃO-ALUNAS | Placar de lotes
- **Texto na arte:** N1 "O PRIMEIRO LOTE VIRA EM [[PENDENTE: data do lote]]." · N3 "Lote atual: [[PREÇO LOTE NÃO-ALUNAS]] · Próximo lote (Último Lote): [[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]]"
- **Texto do anúncio:** O Lote Especial já passou. Depois deste, só o Último Lote. Quem entra recebe a trilha de entrada, com o primeiro passo em 48 horas. `[[CONFIRMAR: nº de parcelas e valor]]`
- **CTA (botão):** Garantir meu acesso
- **Formato:** F e S · **Kit:** B
- **Frame 0:** o mesmo placar de três degraus. Para o scroll porque o degrau riscado é a lembrança visual do que já passou.
- Link de destino: [[LINK: checkout S3-1L | ads-meta | ESC-PRI-02]]

### ESC-PRI-03 | ALUNAS | Quem esperou (modelo Ad 17)
- **Texto na arte:** N1 "Decida antes que reste só o Último Lote." · N3 "[[PREÇO LOTE ALUNAS]] até [[PENDENTE: data do lote]]"
- **Texto do anúncio:** Quem esperou o Lote Especial passar pagou mais. Quem esperar o Primeiro Lote passar vai pagar [[PREÇO PRÓXIMO LOTE ALUNAS]]. Você já está dentro: decida de vez.
- **CTA (botão):** Entrar de vez
- **Formato:** F e S · **Kit:** A
- **Frame 0:** "Último Lote" em peso reduzido e uma seta apontando para "agora". Para o scroll porque a seta direciona o olhar.
- Link de destino: [[LINK: checkout S1-1L | ads-meta | ESC-PRI-03]]

### ESC-PRI-04 | NÃO-ALUNAS | Quem esperou (modelo Ad 17)
- **Texto na arte:** N1 "Decida antes que reste só o Último Lote." · N3 "[[PREÇO LOTE NÃO-ALUNAS]] até [[PENDENTE: data do lote]]"
- **Texto do anúncio:** Quem esperou o Lote Especial passar pagou mais. Quem esperar o Primeiro Lote passar vai pagar [[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]].
- **CTA (botão):** Garantir meu acesso
- **Formato:** F e S · **Kit:** A
- **Frame 0:** o mesmo desenho, com o preço atual em destaque. Para o scroll porque a hierarquia de preço é visível.
- Link de destino: [[LINK: checkout S3-1L | ads-meta | ESC-PRI-04]]

### ESC-PRI-05 | ALUNAS | A conta de esperar
- **Texto na arte:** N1 "Esperar custa [[R$ DIFERENÇA ENTRE LOTES]]." · N3 "Primeiro Lote: [[PREÇO LOTE ALUNAS]] até [[PENDENTE: data do lote]]"
- **Texto do anúncio:** Passada a data, o mesmo acesso passa a custar [[PREÇO PRÓXIMO LOTE ALUNAS]]. A decisão é a mesma, o valor é outro.
- **CTA (botão):** Garantir meu acesso vitalício
- **Formato:** F e S · **Kit:** C
- **Frame 0:** a ilustração de uma calculadora com "[[R$ DIFERENÇA ENTRE LOTES]]" no visor, em destaque. Para o scroll porque a calculadora reforça a ideia de conta objetiva.
- Link de destino: [[LINK: checkout S1-1L | ads-meta | ESC-PRI-05]]

### ESC-PRI-06 | NÃO-ALUNAS | A conta de esperar
- **Texto na arte:** N1 "Esperar custa [[R$ DIFERENÇA ENTRE LOTES]]." · N3 "Primeiro Lote: [[PREÇO LOTE NÃO-ALUNAS]] até [[PENDENTE: data do lote]]"
- **Texto do anúncio:** A decisão é a mesma, o valor é outro. Depois de [[PENDENTE: data do lote]], o acesso passa a custar [[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]].
- **CTA (botão):** Garantir meu acesso
- **Formato:** F e S · **Kit:** C
- **Frame 0:** a mesma calculadora. Para o scroll porque o valor da diferença, em tamanho grande, é o gatilho.
- Link de destino: [[LINK: checkout S3-1L | ads-meta | ESC-PRI-06]]

---

## Família 3: Últimas horas do Último Lote (6)

Estas peças só vão ao ar nas últimas horas reais antes de `[[PENDENTE: fechamento]]`. Fora dessa janela, usar a Família 4.

### ESC-ULT-01 | ALUNAS | Últimas horas (modelo AD 05 e AD 06)
- **Texto na arte:** N1 "ÚLTIMAS HORAS" · N2 "Último Lote: [[PREÇO LOTE ALUNAS]]" · N3 "Encerra em [[PENDENTE: fechamento]]"
- **Texto do anúncio:** Esta condição não se repete. O que vier depois é outra oferta, com outro preço. `[[CONFIRMAR: nº de parcelas e valor]]`
- **CTA (botão):** Entrar de vez
- **Formato:** F e S · **Kit:** B
- **Frame 0:** "ÚLTIMAS HORAS" como maior elemento, com um contador regressivo real embaixo, ligado ao fechamento. Para o scroll porque o contador é a prova visual de que o prazo existe e é o único elemento que muda de segundo em segundo.
- Link de destino: [[LINK: checkout S1-UL | ads-meta | ESC-ULT-01]]

### ESC-ULT-02 | NÃO-ALUNAS | Últimas horas
- **Texto na arte:** N1 "ÚLTIMAS HORAS" · N2 "Último Lote: [[PREÇO LOTE NÃO-ALUNAS]]" · N3 "Encerra em [[PENDENTE: fechamento]]"
- **Texto do anúncio:** Esta condição não se repete. O que vier depois é outra oferta, com outro preço. Quem entra recebe a trilha de entrada. `[[CONFIRMAR: nº de parcelas e valor]]`
- **CTA (botão):** Garantir meu acesso
- **Formato:** F e S · **Kit:** B
- **Frame 0:** o mesmo, com o contador real. Para o scroll porque a repetição de formato entre segmentos mantém o reconhecimento.
- Link de destino: [[LINK: checkout S3-UL | ads-meta | ESC-ULT-02]]

### ESC-ULT-03 | ALUNAS | Saída honrosa
- **Texto na arte:** N1 "Se não é para agora, tudo bem. Mas decida, em vez de adiar." · N3 "Encerra em [[PENDENTE: fechamento]]"
- **Texto do anúncio:** Adiar sem decidir tem um custo. Dizer não também é uma decisão. Se escolher entrar, o Último Lote está em [[PREÇO LOTE ALUNAS]].
- **CTA (botão):** Decidir agora
- **Formato:** F e S · **Kit:** A
- **Frame 0:** "Decida." sozinha, uma palavra por linha, em N1. Para o scroll porque a ordem direta, sem pressão agressiva, corta o tom de vendas e respeita a pessoa.
- Link de destino: [[LINK: checkout S1-UL | ads-meta | ESC-ULT-03]]

### ESC-ULT-04 | NÃO-ALUNAS | Saída honrosa
- **Texto na arte:** N1 "Se não é para agora, tudo bem. Mas decida, em vez de adiar." · N3 "Encerra em [[PENDENTE: fechamento]]"
- **Texto do anúncio:** Adiar sem decidir tem um custo. Dizer não também é uma decisão. Se escolher entrar, o Último Lote está em [[PREÇO LOTE NÃO-ALUNAS]].
- **CTA (botão):** Decidir agora
- **Formato:** F e S · **Kit:** A
- **Frame 0:** o mesmo "Decida.". Para o scroll porque "tudo bem" é uma frase rara em anúncio e abre a atenção.
- Link de destino: [[LINK: checkout S3-UL | ads-meta | ESC-ULT-04]]

### ESC-ULT-05 | ALUNAS | Como você vai lembrar deste dia (modelo Clube Ad 8)
- **Texto na arte:** N1 "Amanhã, como você vai lembrar de hoje?" · N3 "Último Lote até [[PENDENTE: fechamento]]"
- **Texto do anúncio:** Como o dia em que decidiu, ou como o dia em que deixou para depois? Último Lote: [[PREÇO LOTE ALUNAS]].
- **CTA (botão):** Decidir hoje
- **Formato:** F e S · **Kit:** A
- **Frame 0:** "Amanhã" em N1 e "lembrar de hoje" em destaque. Para o scroll porque a pergunta leva a pessoa a se imaginar no dia seguinte.
- **Condição:** "amanhã" só é verdade se o fechamento for no dia seguinte ao da publicação; publicar apenas na véspera do fechamento.
- Link de destino: [[LINK: checkout S1-UL | ads-meta | ESC-ULT-05]]

### ESC-ULT-06 | NÃO-ALUNAS | Como você vai lembrar deste dia
- **Texto na arte:** N1 "Amanhã, como você vai lembrar de hoje?" · N3 "Último Lote até [[PENDENTE: fechamento]]"
- **Texto do anúncio:** Como o dia em que decidiu, ou como o dia em que deixou para depois? Último Lote: [[PREÇO LOTE NÃO-ALUNAS]].
- **CTA (botão):** Decidir hoje
- **Formato:** F e S · **Kit:** A
- **Frame 0:** o mesmo desenho. Para o scroll pelo mesmo motivo: a projeção para o amanhã.
- **Condição:** a mesma de ESC-ULT-05.
- Link de destino: [[LINK: checkout S3-UL | ads-meta | ESC-ULT-06]]

---

## Família 4: "Esta condição não se repete" (6)

### ESC-NSR-01 | ALUNAS | Institucional
- **Texto na arte:** N1 "Esta condição não se repete." · N2 "O que vier depois é outra oferta, com outro preço."
- **Texto do anúncio:** Você já está no Clube. O que você já fez conta, não é recomeçar do zero. Lote atual: [[PREÇO LOTE ALUNAS]] até [[PENDENTE: data do lote]].
- **CTA (botão):** Entrar de vez
- **Formato:** F e S · **Kit:** B
- **Frame 0:** a frase em N1, "não se repete" em destaque, sobre `[[FOTO DRA]]` de perfil. Para o scroll porque é uma sentença curta e firme, sem urgência falsa.
- Link de destino: [[LINK: página das alunas | ads-meta | ESC-NSR-01]]

### ESC-NSR-02 | NÃO-ALUNAS | Institucional
- **Texto na arte:** N1 "Esta condição não se repete." · N2 "O que vier depois é outra oferta, com outro preço."
- **Texto do anúncio:** Pagamento único, acesso vitalício ao Clube Secreto e aos 11 produtos. Quem entra recebe a trilha de entrada, com o primeiro passo em 48 horas. Lote atual: [[PREÇO LOTE NÃO-ALUNAS]] até [[PENDENTE: data do lote]].
- **CTA (botão):** Garantir meu acesso
- **Formato:** F e S · **Kit:** B
- **Frame 0:** o mesmo desenho. Para o scroll porque o tom de fato, não de pressão, aumenta a confiança de quem já viu falsos "últimos dias".
- Link de destino: [[LINK: página de vendas | ads-meta | ESC-NSR-02]]

### ESC-NSR-03 | ALUNAS | Frase-guia
- **Texto na arte:** N1 "A última vez que você vai precisar recomeçar." ("última vez" em destaque) · N3 "Lote atual: [[PREÇO LOTE ALUNAS]]"
- **Texto do anúncio:** Esta condição não se repete. O que vier depois é outra oferta, com outro preço. Até [[PENDENTE: data do lote]].
- **CTA (botão):** Entrar de vez
- **Formato:** F e S · **Kit:** A
- **Frame 0:** a frase-guia em N1, em duas linhas. Para o scroll porque é a promessa central da campanha, que a aluna já viu na captação.
- Link de destino: [[LINK: página das alunas | ads-meta | ESC-NSR-03]]

### ESC-NSR-04 | NÃO-ALUNAS | Frase-guia
- **Texto na arte:** N1 "A última vez que você vai precisar recomeçar." · N3 "Lote atual: [[PREÇO LOTE NÃO-ALUNAS]]"
- **Texto do anúncio:** Esta condição não se repete. O que vier depois é outra oferta, com outro preço. Até [[PENDENTE: data do lote]].
- **CTA (botão):** Garantir meu acesso
- **Formato:** F e S · **Kit:** A
- **Frame 0:** o mesmo desenho. Para o scroll pela repetição da mensagem da captação.
- Link de destino: [[LINK: página de vendas | ads-meta | ESC-NSR-04]]

### ESC-NSR-05 | ALUNAS | Vídeo de 30 segundos com contador real (modelo AD 10)
- **Texto na tela (sequência):** 0 a 3 s: "Recomeçar OU ficar de vez?" (tela dividida, 5 palavras) · 3 a 20 s: "Recomeçando, o padrão volta. Ficando, a decisão é uma só." · 20 a 30 s: "Toque no botão e entre no acesso vitalício antes que o lote vire para [[PREÇO PRÓXIMO LOTE ALUNAS]]." Contador regressivo real até [[PENDENTE: data do lote]] visível durante todo o vídeo.
- **Texto do anúncio:** Lote atual: [[PREÇO LOTE ALUNAS]] até [[PENDENTE: data do lote]].
- **CTA (botão):** Entrar de vez
- **Formato:** S (1080 × 1920 px, MP4 de 30 s, área segura de stories e reels da tabela acima). Sem fala; texto na tela em tamanho legível para 45+ (referência: 70 px ou mais). Leitura: 30 palavras em 30 s (5 em 3 s, 10 em 17 s e 15 em 10 s, no máximo 1,7 palavra por segundo; o preço do próximo lote conta como 1)
- **Kit:** A + contador (o designer recebe a data para ligar o contador)
- **Frame 0:** tela dividida em "Recomeçar" e "Ficar", com o contador no canto superior. Para o scroll porque a divisão de tela é uma decisão visual simples e o contador prende o olhar até o fim.
- Link de destino: [[LINK: página das alunas | ads-meta | ESC-NSR-05]]

### ESC-NSR-06 | NÃO-ALUNAS | Vídeo de 30 segundos com contador real (modelo AD 10)
- **Texto na tela (sequência):** 0 a 3 s: "Recomeçar OU ficar de vez?" (tela dividida, 5 palavras) · 3 a 20 s: "Recomeçando, o padrão volta. Ficando, a decisão é uma só." · 20 a 30 s: "Toque no botão e entre no acesso vitalício antes que o lote vire para [[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]]." Contador regressivo real até [[PENDENTE: data do lote]] visível durante todo o vídeo.
- **Texto do anúncio:** Lote atual: [[PREÇO LOTE NÃO-ALUNAS]] até [[PENDENTE: data do lote]].
- **CTA (botão):** Garantir meu acesso
- **Formato:** S (1080 × 1920 px, MP4 de 30 s, mesma área segura). Sem fala; texto na tela, mesma leitura de 30 palavras em 30 s
- **Kit:** A + contador
- **Frame 0:** o mesmo vídeo. Para o scroll pelo mesmo motivo.
- Link de destino: [[LINK: página de vendas | ads-meta | ESC-NSR-06]]

---

## Condicionais: bônus (modelo AD 11), só se existir `[[PENDENTE: bônus]]`

### ESC-BON-01 | ALUNAS
- **Texto na arte:** N1 "Acesso vitalício + [[PENDENTE: bônus]]" · N3 "Lote atual: [[PREÇO LOTE ALUNAS]]"
- **Texto do anúncio:** Esse bônus é de quem entra até [[PENDENTE: data do lote]]. `[[CONFIRMAR: regra do bônus]]`
- **CTA (botão):** Garantir meu bônus
- **Formato:** F e S · **Kit:** B
- **Frame 0:** o nome do bônus em N1, em destaque. Para o scroll porque o item concreto vence o abstrato.
- Link de destino: [[LINK: página das alunas | ads-meta | ESC-BON-01]]

### ESC-BON-02 | NÃO-ALUNAS
- **Texto na arte:** N1 "Acesso vitalício + [[PENDENTE: bônus]]" · N3 "Lote atual: [[PREÇO LOTE NÃO-ALUNAS]]"
- **Texto do anúncio:** Esse bônus é de quem entra até [[PENDENTE: data do lote]]. `[[CONFIRMAR: regra do bônus]]`
- **CTA (botão):** Garantir meu bônus
- **Formato:** F e S · **Kit:** B
- **Frame 0:** o mesmo desenho.
- Link de destino: [[LINK: página de vendas | ads-meta | ESC-BON-02]]

---

## Notas ao implementador

1. **Valores:** a escada do briefing (lotes de alunas e de não-alunas) não está neste arquivo. Quem troca os placeholders consulta `00_ESTRATEGIA_COPY_SENIOR.md`, seção 1. Nenhum valor pode aparecer antes de 03/11, 20h.
2. **Pendências que bloqueiam o uso:** `[[PENDENTE: data do lote]]` (virada de cada lote), `[[PENDENTE: fechamento]]`, `[[CONFIRMAR: nº de parcelas e valor]]`, `[[PENDENTE: bônus]]` (só para ESC-BON), `[[FOTO DRA]]`, `[[PENDENTE: identidade visual]]` e `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]`.
3. **Parcelamento visível:** a pesquisa mostra que o cartão parcelado é a forma de pagamento mais escolhida; sem as parcelas em todo anúncio, a conversão cai. As peças trazem o placeholder para forçar a definição.
4. **Troca de arte na virada do lote:** quando um lote vira, desativar a família anterior e ativar a seguinte na mesma hora, e trocar o preço da arte. Se o lote virar por quantidade (em vez de data), trocar "vira em [[PENDENTE: data do lote]]" por "vira quando [[CONFIRMAR: critério de virada]]" e não usar expressão de "a qualquer momento" sem ser verdade.
5. **Peças do Desafio sem equivalente:** os anúncios do Desafio que citavam ingressos já vendidos ou poucos lugares exigem dado real de quantidade e foram excluídos; o Ad 18 ("a única vez que o Desafio custa o valor de ingresso") foi reescrito como "esta condição não se repete", sem afirmar que o valor não volta a cair.
6. **Testes A/B:** a) placar (01 e 02) contra fato do bolso (03 e 04) na virada do Lote Especial; b) vídeo com contador (NSR-05 e 06) contra estático (NSR-03 e 04); c) "Entrar de vez" contra "Garantir meu acesso" em alunas.
7. **Compliance:** em nenhum anúncio há promessa de dinheiro, de tratamento ou de fim da autossabotagem. A frase "decida uma vez" é sobre a escolha, não sobre resultado.
8. **Contagens:** 24 anúncios por família (4 famílias × 6) mais 2 condicionais = 26 IDs: ESC-ESP-01 a 06, ESC-PRI-01 a 06, ESC-ULT-01 a 06, ESC-NSR-01 a 06, ESC-BON-01 e 02.

---

## Links desta peça

Canal `ads-meta` em todos. O checkout só existe depois da abertura do carrinho (03/11, 21h28); nenhum destes anúncios vai ao ar antes. Nenhuma URL real é escrita aqui; a fórmula do link de venda está na seção 3 de `16_MAPA_DE_LINKS.md` (`utm_term` = esp, 1l ou ul).

| ID da peça | Token | O que o link faz | Quem cria |
|---|---|---|---|
| ESC-ESP-01 | `[[LINK: checkout S1-ESP \| ads-meta \| ESC-ESP-01]]` | Checkout Hotmart do Lote Especial para alunas (S1) | Financeiro / Hotmart |
| ESC-ESP-02 | `[[LINK: checkout S3-ESP \| ads-meta \| ESC-ESP-02]]` | Checkout Hotmart do Lote Especial para não-alunas (S3; o conjunto S2 troca para o checkout S2 do mesmo lote) | Financeiro / Hotmart |
| ESC-ESP-03 | `[[LINK: checkout S1-ESP \| ads-meta \| ESC-ESP-03]]` | Checkout Hotmart do Lote Especial para alunas (S1) | Financeiro / Hotmart |
| ESC-ESP-04 | `[[LINK: checkout S3-ESP \| ads-meta \| ESC-ESP-04]]` | Checkout Hotmart do Lote Especial para não-alunas (S3; o conjunto S2 troca para o checkout S2 do mesmo lote) | Financeiro / Hotmart |
| ESC-ESP-05 | `[[LINK: checkout S1-ESP \| ads-meta \| ESC-ESP-05]]` | Checkout Hotmart do Lote Especial para alunas (S1) | Financeiro / Hotmart |
| ESC-ESP-06 | `[[LINK: checkout S3-ESP \| ads-meta \| ESC-ESP-06]]` | Checkout Hotmart do Lote Especial para não-alunas (S3; o conjunto S2 troca para o checkout S2 do mesmo lote) | Financeiro / Hotmart |
| ESC-PRI-01 | `[[LINK: checkout S1-1L \| ads-meta \| ESC-PRI-01]]` | Checkout Hotmart do Primeiro Lote para alunas (S1) | Financeiro / Hotmart |
| ESC-PRI-02 | `[[LINK: checkout S3-1L \| ads-meta \| ESC-PRI-02]]` | Checkout Hotmart do Primeiro Lote para não-alunas (S3; o conjunto S2 troca para o checkout S2 do mesmo lote) | Financeiro / Hotmart |
| ESC-PRI-03 | `[[LINK: checkout S1-1L \| ads-meta \| ESC-PRI-03]]` | Checkout Hotmart do Primeiro Lote para alunas (S1) | Financeiro / Hotmart |
| ESC-PRI-04 | `[[LINK: checkout S3-1L \| ads-meta \| ESC-PRI-04]]` | Checkout Hotmart do Primeiro Lote para não-alunas (S3; o conjunto S2 troca para o checkout S2 do mesmo lote) | Financeiro / Hotmart |
| ESC-PRI-05 | `[[LINK: checkout S1-1L \| ads-meta \| ESC-PRI-05]]` | Checkout Hotmart do Primeiro Lote para alunas (S1) | Financeiro / Hotmart |
| ESC-PRI-06 | `[[LINK: checkout S3-1L \| ads-meta \| ESC-PRI-06]]` | Checkout Hotmart do Primeiro Lote para não-alunas (S3; o conjunto S2 troca para o checkout S2 do mesmo lote) | Financeiro / Hotmart |
| ESC-ULT-01 | `[[LINK: checkout S1-UL \| ads-meta \| ESC-ULT-01]]` | Checkout Hotmart do Último Lote para alunas (S1) | Financeiro / Hotmart |
| ESC-ULT-02 | `[[LINK: checkout S3-UL \| ads-meta \| ESC-ULT-02]]` | Checkout Hotmart do Último Lote para não-alunas (S3; o conjunto S2 troca para o checkout S2 do mesmo lote) | Financeiro / Hotmart |
| ESC-ULT-03 | `[[LINK: checkout S1-UL \| ads-meta \| ESC-ULT-03]]` | Checkout Hotmart do Último Lote para alunas (S1) | Financeiro / Hotmart |
| ESC-ULT-04 | `[[LINK: checkout S3-UL \| ads-meta \| ESC-ULT-04]]` | Checkout Hotmart do Último Lote para não-alunas (S3; o conjunto S2 troca para o checkout S2 do mesmo lote) | Financeiro / Hotmart |
| ESC-ULT-05 | `[[LINK: checkout S1-UL \| ads-meta \| ESC-ULT-05]]` | Checkout Hotmart do Último Lote para alunas (S1) | Financeiro / Hotmart |
| ESC-ULT-06 | `[[LINK: checkout S3-UL \| ads-meta \| ESC-ULT-06]]` | Checkout Hotmart do Último Lote para não-alunas (S3; o conjunto S2 troca para o checkout S2 do mesmo lote) | Financeiro / Hotmart |
| ESC-NSR-01 | `[[LINK: página das alunas \| ads-meta \| ESC-NSR-01]]` | Página com a condição de aluna e o checkout do lote vigente | Web designer |
| ESC-NSR-02 | `[[LINK: página de vendas \| ads-meta \| ESC-NSR-02]]` | Página de vendas, que mostra o lote vigente e leva ao checkout | Web designer |
| ESC-NSR-03 | `[[LINK: página das alunas \| ads-meta \| ESC-NSR-03]]` | Página com a condição de aluna e o checkout do lote vigente | Web designer |
| ESC-NSR-04 | `[[LINK: página de vendas \| ads-meta \| ESC-NSR-04]]` | Página de vendas, que mostra o lote vigente e leva ao checkout | Web designer |
| ESC-NSR-05 | `[[LINK: página das alunas \| ads-meta \| ESC-NSR-05]]` | Página com a condição de aluna e o checkout do lote vigente | Web designer |
| ESC-NSR-06 | `[[LINK: página de vendas \| ads-meta \| ESC-NSR-06]]` | Página de vendas, que mostra o lote vigente e leva ao checkout | Web designer |
| ESC-BON-01 | `[[LINK: página das alunas \| ads-meta \| ESC-BON-01]]` | Página com a condição de aluna e o checkout do lote vigente | Web designer |
| ESC-BON-02 | `[[LINK: página de vendas \| ads-meta \| ESC-BON-02]]` | Página de vendas, que mostra o lote vigente e leva ao checkout | Web designer |

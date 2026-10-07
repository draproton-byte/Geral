# Banner do checkout

**Peça:** Banner do checkout da Black Próton Vitalícia (topo da página de pagamento), em 6 versões (3 lotes x 2 segmentos), mais textos de apoio do checkout
**Canal:** Checkout (página de pagamento, link por lote e por segmento)
**Público:** Quem clicou em "Entrar de vez" e está na tela de pagamento
**Momento:** A partir da abertura do carrinho (03/11, 21h28) até o fechamento `[[PENDENTE: fechamento]]`
**Objetivo:** Reafirmar o que ela está comprando e o lote em que está, na hora da decisão final, sem abrir uma nova objeção. Reduz abandono de carrinho
**Consciência:** 5
**Trabalho contratado:** "Eu quero ter certeza de que estou decidindo uma vez só"
**Modelo no Desafio:** "Banner Checkout Desafio" (foto da Dra., título do produto, promessa curta, data e acesso, e uma linha de "de/por"). Estrutura mantida: foto + nome + uma linha + datas/acesso + preço

**Regras desta peça**
- Os preços só entram em peça pós-live (este banner só existe depois da live).
- "De X por Y" **só** se `[[PENDENTE: preço avulso]]` for um preço real praticado. Sem ele, usar a linha sem "de/por".
- Nenhuma promessa de ganho ou de tratamento. Nenhum "neurociência descobre".
- Nenhuma frase de "última chance" sobre o vitalício (guia, seção 3). Escassez só pelo lote e por "esta condição não se repete".
- A escada do briefing está só nas Notas ao implementador (nunca no banner).

`[[CONFIRMAR: dimensão e peso do banner aceitos pela plataforma de checkout]]`

---

## Estrutura do banner (de cima para baixo)

1. **`[[FOTO DRA]]`** (foto da Dra. Próton, lado esquerdo no desktop, topo no mobile)
2. **Nome do produto**
3. **Uma linha de promessa honesta**
4. **O que entra e o acesso**
5. **Linha de lote**
6. **Valor** (com parcelamento visível)

---

## Texto fixo (igual nas 6 versões)

**Nome do produto**
`Black Próton Vitalícia`

**Uma linha de promessa honesta**
`A última vez que você vai precisar recomeçar.`

**O que entra e o acesso**
`Clube Secreto + 11 produtos · pagamento único · acesso vitalício`

**Rodapé do banner (corpo pequeno)**
`Sem promessa de lançamentos futuros: o catálogo atual. [[PENDENTE: garantia]]`

---

## Versões por segmento e por lote

### Versão 1: Alunas, Lote Especial [[CONFIRMAR: Lote Especial só para quem está ao vivo]]

**Checkout onde este banner entra**
[[LINK: checkout S1-ESP | pagina | chk-v1]]

**Linha de lote**
`🎟 Lote Especial para alunas do Clube Secreto · até [[PENDENTE: data do lote]]`

**Valor**
`[[SE: existe preço avulso real]]` `De ~[[PENDENTE: preço avulso, soma]]~ por apenas` `[[FIM SE]]`
`[[PREÇO LOTE ALUNAS: Especial]] à vista`
`ou em até [[PENDENTE: parcelamento]]x de {{parcela_alunas}}`

### Versão 2: Alunas, Primeiro Lote

**Checkout onde este banner entra**
[[LINK: checkout S1-1L | pagina | chk-v2]]

**Linha de lote**
`🎟 Primeiro Lote para alunas do Clube Secreto · até [[PENDENTE: data do lote]]`

**Valor**
`[[SE: existe preço avulso real]]` `De ~[[PENDENTE: preço avulso, soma]]~ por apenas` `[[FIM SE]]`
`[[PREÇO LOTE ALUNAS: Primeiro Lote]] à vista`
`ou em até [[PENDENTE: parcelamento]]x de {{parcela_alunas}}`

### Versão 3: Alunas, Último Lote

**Checkout onde este banner entra**
[[LINK: checkout S1-UL | pagina | chk-v3]]

**Linha de lote**
`🎟 Último Lote para alunas do Clube Secreto · até [[PENDENTE: fechamento]]`

**Valor**
`[[SE: existe preço avulso real]]` `De ~[[PENDENTE: preço avulso, soma]]~ por apenas` `[[FIM SE]]`
`[[PREÇO LOTE ALUNAS: Último Lote]] à vista`
`ou em até [[PENDENTE: parcelamento]]x de {{parcela_alunas}}`

### Versão 4: Não-alunas, Lote Especial

**Checkout onde este banner entra**
[[LINK: checkout S3-ESP | pagina | chk-v4]]

**Linha de lote**
`🎟 Lote Especial · até [[PENDENTE: data do lote]]`

**Valor**
`[[SE: existe preço avulso real]]` `De ~[[PENDENTE: preço avulso, soma]]~ por apenas` `[[FIM SE]]`
`[[PREÇO LOTE NÃO-ALUNAS: Especial]] à vista`
`ou em até [[PENDENTE: parcelamento]]x de {{parcela_nao_alunas}}`

### Versão 5: Não-alunas, Primeiro Lote

**Checkout onde este banner entra**
[[LINK: checkout S3-1L | pagina | chk-v5]]

**Linha de lote**
`🎟 Primeiro Lote · até [[PENDENTE: data do lote]]`

**Valor**
`[[SE: existe preço avulso real]]` `De ~[[PENDENTE: preço avulso, soma]]~ por apenas` `[[FIM SE]]`
`[[PREÇO LOTE NÃO-ALUNAS: Primeiro Lote]] à vista`
`ou em até [[PENDENTE: parcelamento]]x de {{parcela_nao_alunas}}`

### Versão 6: Não-alunas, Último Lote

**Checkout onde este banner entra**
[[LINK: checkout S3-UL | pagina | chk-v6]]

**Linha de lote**
`🎟 Último Lote · até [[PENDENTE: fechamento]]`

**Valor**
`[[SE: existe preço avulso real]]` `De ~[[PENDENTE: preço avulso, soma]]~ por apenas` `[[FIM SE]]`
`[[PREÇO LOTE NÃO-ALUNAS: Último Lote]] à vista`
`ou em até [[PENDENTE: parcelamento]]x de {{parcela_nao_alunas}}`

---

## Variações de uma linha de promessa (para teste)

| ID | Linha | Observação |
|---|---|---|
| **K0 (principal)** | A última vez que você vai precisar recomeçar. | Frase-guia |
| K1 | Pague uma vez. Sem prazo. Sem recomeçar. | Fala do mecanismo |
| K2 | Clube Secreto e tudo o que a Dra. Próton já criou, para sempre. | Correção de "todas as Imersões". `[[CONFIRMAR: catálogo]]` |
| K3 | Uma decisão que você só precisa tomar uma vez. | Trabalho contratado |
| K4 | Sem prazo para dar conta. | Responde "medo de não implementar" |

---

## Texto de apoio do checkout (abaixo do banner)

**Título do bloco "Você está comprando"**
`Você está comprando`

**Resumo**
`Black Próton Vitalícia · Clube Secreto + 11 produtos do catálogo atual · pagamento único · acesso vitalício`

**Linha de garantia** `[[PENDENTE: garantia]]` (usar uma só versão, conforme a decisão)
Versão A (7 dias, se confirmado): `7 dias de garantia. Se não for para você, eu devolvo o seu dinheiro.`
Versão B: `[[PENDENTE: garantia, prazo]] de garantia.`
Versão C: `Direito legal de desistência em até 7 dias.` `[[CONFIRMAR: jurídico]]`

**Linha de acesso**
`Depois do pagamento, você recebe por e-mail o seu acesso e a página com a sua trilha de entrada e o seu primeiro passo.`

**Linha de segurança**
`Pagamento seguro. Aceitamos Pix e cartão.` `[[CONFIRMAR: boleto]]`

**Linha de lote (repete a tarja, sem pressão extra)**
`O valor muda a cada lote. Esta condição não se repete.`

**Linha de suporte**
`Dúvida antes de pagar? Fale com a gente.` [[LINK: suporte WhatsApp | pagina | chk-apoio]]

---

## Textos de erro e estados do checkout (referência)

- **Pagamento recusado:** `Seu pagamento não foi aprovado. Tente outro cartão ou use o Pix. Você não precisa recomeçar: é só tentar de novo.` (alinhado com `06_emails`, evento "compra recusada")
- **Pix emitido:** `Seu Pix foi gerado. Pague em até [[PENDENTE: parcelamento, prazo do Pix]] para garantir o lote atual.` `[[CONFIRMAR: o Pix mantém o lote até pagar?]]`
- **Lote virou:** `O lote atual acabou de virar. O novo valor é {{preco_novo}}. Esta condição não se repete.` (**só se o lote realmente virou**, nunca como pressão fabricada)

---

## Notas ao implementador

1. **Pendências:** `[[FOTO DRA]]`, `[[PENDENTE: garantia]]`, `[[PENDENTE: data do lote]]`, `[[PENDENTE: fechamento]]`, `[[PENDENTE: parcelamento]]`, `[[PENDENTE: preço avulso]]`, os 6 checkouts por lote e segmento (S1 e S3, e S2 com o banner das não-alunas), `[[CONFIRMAR: dimensão do banner]]`.
2. **Troca do banner por lote:** a ferramenta precisa trocar o banner no horário do lote. Preparar os 6 arquivos antes de 03/11 e testar a virada em um checkout de teste.
3. **"De/por":** no Desafio o banner usava "De R$ 997,00 por apenas R$ 17,50" (o preço "de" não era o preço da página). Na Black, só usar o "de" se existir preço avulso real, sem inflar. Se não existir, apagar a linha. Escada do briefing, só para quem implementa: alunas 1.997 / 2.997 / 3.997; não-alunas 2.997 / 3.997 / 4.997.
4. **O que o Desafio tinha e a Black muda:** o Desafio dizia "28/09 a 02/10 · 1 ano de acesso · Ao vivo". Aqui não há data de aula: o que vai na linha de acesso é "pagamento único · acesso vitalício". A promessa "aumente sua capacidade geradora de riqueza em 5 noites e se torne um ímã de dinheiro" **não foi mantida**, por ser promessa de ganho financeiro e de resultado em prazo.
5. **Testes A/B:** (1) K0 contra K1 contra K4; (2) com "de/por" contra sem (se existir preço avulso real); (3) parcelas em destaque contra preço total em destaque.
6. **Dependências:** `pagina_de_vendas_vitalicia.md` (mesmos lotes e valores), `pagina_cupom_alunas.md` (versão alunas), `06_emails` (eventos de pagamento), `04_criativos` (arte da foto da Dra.).

---

## Links desta peça

| ID da peça | Token | O que o link faz | Quem cria |
|---|---|---|---|
| chk-v1 | `[[LINK: checkout S1-ESP \| pagina \| chk-v1]]` | Identifica o checkout das alunas no Lote Especial onde o banner 1 entra | Financeiro / Hotmart |
| chk-v2 | `[[LINK: checkout S1-1L \| pagina \| chk-v2]]` | Checkout das alunas no Primeiro Lote (banner 2) | Financeiro / Hotmart |
| chk-v3 | `[[LINK: checkout S1-UL \| pagina \| chk-v3]]` | Checkout das alunas no Último Lote (banner 3) | Financeiro / Hotmart |
| chk-v4 | `[[LINK: checkout S3-ESP \| pagina \| chk-v4]]` | Checkout das não-alunas no Lote Especial (banner 4). O checkout S2-ESP usa o mesmo banner | Financeiro / Hotmart |
| chk-v5 | `[[LINK: checkout S3-1L \| pagina \| chk-v5]]` | Checkout das não-alunas no Primeiro Lote (banner 5). S2-1L usa o mesmo banner | Financeiro / Hotmart |
| chk-v6 | `[[LINK: checkout S3-UL \| pagina \| chk-v6]]` | Checkout das não-alunas no Último Lote (banner 6). S2-UL usa o mesmo banner | Financeiro / Hotmart |
| chk-apoio | `[[LINK: suporte WhatsApp \| pagina \| chk-apoio]]` | Linha de suporte abaixo do banner | Suporte |

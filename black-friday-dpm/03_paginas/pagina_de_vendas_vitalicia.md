# Página de vendas da Black Próton Vitalícia

**Peça:** Página de vendas (abre na live de 03/11), em 14 blocos, com duas versões de preço (alunas e não-alunas)
**Canal:** Página (link aberto na live, no YouTube, no grupo, no e-mail de abertura e pelo comercial)
**Público:** Todo cadastrado e quem chega pela live. Duas versões: **alunas do Clube Secreto** e **não-alunas** (via tag/e-mail do cupom e link por segmento)
**Momento:** 03/11. A tela de espera sai quando a Dra. revela o valor ao vivo (21h09). O botão de compra liga quando o carrinho abre (21h28). Antes disso, a URL mostra a tela de espera (ver abaixo)
**Objetivo:** Compra do pagamento único. Cobre a decisão de quem assistiu e de quem chega depois, durante os três lotes
**Consciência:** 4 a 5
**Trabalho contratado:** "Eu quero uma decisão que eu só precise tomar uma vez." Troca de identidade: de "a que recomeça" para "a que fica"
**Modelo no Desafio:** Página de Vendas do Desafio A Nova Realidade (14 blocos: tarja, vender sozinho, depoimentos, dor latente, transição, passo a passo, tudo que você recebe, para quem serve, ancoragem, valor 1, conversa séria, autoridade, valor 2 com garantia, FAQ, rodapé)

> Como ler: cada bloco traz **Copy** (o texto da página), **Versão alunas / não-alunas** quando muda, e **Função**. Placeholders do guia: `[[PREÇO LOTE ALUNAS]]` e `[[PREÇO LOTE NÃO-ALUNAS]]` com o nome do lote. **Nota ao implementador (nunca no texto público antes da live):** escada do briefing. Alunas: Especial 1.997, Primeiro Lote 2.997, Último Lote 3.997. Não-alunas: Especial 2.997, Primeiro Lote 3.997, Último Lote 4.997. A diferença entre alunas e não-alunas é fixa em R$ 1.000 por lote.

---

## Como a página sabe quem é aluna e quem não é

| Origem | Versão que aparece |
|---|---|
| Link da página de cupom das alunas (`pagina_cupom_alunas.md`) ou tag "aluna" na ferramenta | **Alunas** (preço e checkout de alunas) |
| Link geral (live, e-mail para todos, grupo geral, anúncio) | **Não-alunas** |
| Tag de quem viveu Desafio, Imersão ou Aulão e não é do Clube (S2) | Versão **não-alunas** (mesmo preço de não-aluna), com o checkout S2 |
| Aluna que chegou pelo link geral | Mostrar acima do botão: `Você é aluna do Clube? Veja a sua condição.` [[LINK: página das alunas | pagina | vendas-b01]] |

Blocos condicionais marcados `[[SE: ALUNA]]` ... `[[FIM SE]]` e `[[SE: NÃO-ALUNA]]` ... `[[FIM SE]]`.

---

## Tela de espera (antes da live, URL já existe)

**Quando:** até a revelação do valor ao vivo, 03/11, 21h09. Se alguém abrir antes (ex.: a URL vazou), cai aqui.

**Título**
`A condição é revelada ao vivo, em 03/11, às 20h.`

**Texto**
`A Dra. Próton abre a Black Próton Vitalícia ao vivo. Nenhum valor é divulgado antes da live.`

**Contagem:** `Começa em {{dias}}d {{horas}}h {{minutos}}min {{segundos}}s` (ocultar os dias quando for 0)

**Botão**
`IR PARA A LIVE` [[LINK: live YouTube | pagina | vendas-espera]]
Leva para: a página da live.

---

## Bloco 00: Tarja de lote (fixa no topo, acompanha a rolagem)

Elemento fixo. Mostra o **lote real** e **o relógio do próximo virar**. Não há contador de lugares preenchidos, porque a Vitalícia não tem limite de lugares declarado. Escassez só por lote.

**Estado 1: Lote Especial aberto** [[CONFIRMAR: Lote Especial só para quem está ao vivo]]
`🎟 Lote Especial · aberto até [[PENDENTE: data do lote]] · [[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]], conforme o segmento`

**Estado 2: Primeiro Lote aberto**
`🎟 Primeiro Lote · aberto até [[PENDENTE: data do lote]] · [[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]], conforme o segmento`

**Estado 3: Último Lote aberto**
`🎟 Último Lote · aberto até [[PENDENTE: fechamento]] · [[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]], conforme o segmento`

**Estado 4: Últimas horas (últimas 24h antes do fechamento ou do virar de lote)**
`⏳ Faltam {{horas}}h {{minutos}}min para o fim do {{lote_atual}}. Depois, o valor muda.` (no Último Lote: `⏳ Faltam {{horas}}h {{minutos}}min para o fim do carrinho. Depois, o carrinho se encerra.`)

**Estado 5: Encerrado**
`O carrinho da Black Próton Vitalícia foi encerrado.` e botão `ENTRAR NA LISTA DE ESPERA` [[LINK: lista de espera | pagina | vendas-b00]]
Leva para: a página da lista de espera.

**Função:** urgência por lote real, com a regra aprovada "esta condição não se repete". Nenhum número inventado.

---

## Bloco 01: Vender sozinho

Este bloco precisa converter mesmo que a pessoa não role a página.

**Pré-título**
`BLACK PRÓTON VITALÍCIA · PAGAMENTO ÚNICO · ACESSO VITALÍCIO`

**Headline**
`A última vez que você vai precisar recomeçar.`

**Subtítulo**
`O Clube Secreto e tudo o que a Dra. Próton já criou, com acesso vitalício. Um pagamento. Sem prazo. Sem recomeçar.` [[CONFIRMAR: catálogo (tudo o que a Dra. criou)]]

**Linha de apoio**
`Clube Secreto + 11 produtos do catálogo atual. Sem promessa de lançamentos futuros: o que existe hoje.`

**Três ícones**
1. `Pagamento único`
2. `Acesso vitalício`
3. `Sem prazo para dar conta`

**Preço e parcelamento (sempre juntos, sempre visíveis, sem rolar)**

`[[SE: ALUNA]]`
`[[PREÇO LOTE ALUNAS: lote atual]] à vista`
`ou em até [[PENDENTE: parcelamento]]x de {{parcela_alunas}} no cartão`
`[[FIM SE]]`

`[[SE: NÃO-ALUNA]]`
`[[PREÇO LOTE NÃO-ALUNAS: lote atual]] à vista`
`ou em até [[PENDENTE: parcelamento]]x de {{parcela_nao_alunas}} no cartão`
`[[FIM SE]]`

`Pix · Cartão · [[CONFIRMAR: boleto]]`

**Botão**
`[[SE: ALUNA]]` `ENTRAR DE VEZ · [[PREÇO LOTE ALUNAS]]` [[LINK: checkout S1-ESP | pagina | vendas-b01]] `[[FIM SE]]`
`[[SE: NÃO-ALUNA]]` `ENTRAR DE VEZ · [[PREÇO LOTE NÃO-ALUNAS]]` [[LINK: checkout S3-ESP | pagina | vendas-b01]] `[[FIM SE]]`
Leva para: o checkout do segmento e do lote em vigor. Lote Especial: S1-ESP, S2-ESP ou S3-ESP. Na virada, a ferramenta troca ESP por 1L e depois por UL, no mesmo lugar. O botão só liga com o carrinho aberto (03/11, 21h28); antes disso mostra "O carrinho abre em instantes".

**Linha sob o botão**
`Pagamento único · acesso vitalício · [[PENDENTE: garantia]]`

**Função:** a pessoa já assistiu à live. Aqui compra quem já decidiu. O parcelamento aparece com o preço porque a ficha mostrou o cartão parcelado como a forma mais escolhida.

**Headlines alternativas para teste (mesmos IDs da captura B):** B1 "O Clube Secreto e tudo o que a Dra. Próton já criou, para sempre, por um pagamento único." · B2 "A última chance que a autossabotagem vai ter de decidir por você." · B4 "Pare de comprar curso com medo de deixar de lado."

---

## Bloco 02: Depoimentos

**Copy**

`Não acredite em mim. Olhe para quem já passou por isso comigo.`

`[[DEPOIMENTO REAL]]` (carrossel de 5 a 8)

`[[SE: ALUNA]]` Priorizar depoimentos de alunas do Clube Secreto com tempo de casa. `[[FIM SE]]`
`[[SE: NÃO-ALUNA]]` Priorizar depoimentos do Desafio e da Imersão (quem viveu e continuou). `[[FIM SE]]`

Linha: `Relatos individuais. Não prometo o mesmo resultado para você.`

**Função:** prova antes de argumento. Nenhum depoimento que cite ganho de dinheiro, quitação de dívida ou tratamento.

---

## Bloco 03: A dor que você sente e não sabe nomear

**Copy**

`Talvez você já tenha pensado que o problema é preguiça, falta de disciplina ou fraqueza. Não é.`

`Você já começou. Várias vezes. Começou, parou, recomeçou. E alguma parte de você passou a acreditar que o problema é você.`

`Eu perguntei para mais de 7 mil pessoas o que mais impede cada uma de ganhar o dinheiro que gostaria. As respostas que mais apareceram:`

> **"Não sei exatamente o que está me impedindo."** (40%)
> "Procrastino e não consigo colocar as coisas em prática." (22%)

`Existem cinco jeitos de o padrão se esconder:`

- `Termostato Invisível: "Quando entra um dinheiro a mais, aparece uma conta."`
- `Autossabotagem: "Eu sei o que fazer e não faço."`
- `Cobrança Que Você Só Faz Com Você: "Estou funcional, mas exausta(o) por dentro."`
- `Traumas Que Ainda Decidem: "Sinto que a cada passo que dou, retrocedo."`
- `Culpa de Querer Mais: "Eu cuido de todo mundo, mas ninguém cuida de mim."`

`Não falta força de vontade. Tem um padrão rodando por baixo.`

`[[SE: tem diagnóstico]]` `O seu foi {{perfil}}. É exatamente por aí que a trilha de entrada começa.` `[[FIM SE]]`

**Função:** a pessoa se reconhece. Dado de `01_PESQUISAS_INSIGHTS.md` (Aulão, 7.323 respostas). `[[CONFIRMAR: citar "mais de 7 mil" em público]]`.

---

## Bloco 04: Transição da dor para a solução

**Copy**

`Você já assistiu vídeo. Já leu livro. Já fez curso. Já se prometeu que dessa vez ia ser diferente. E continuou voltando ao começo.`

`Nenhuma dessas respostas é falta de informação. O que trava não está no que você sabe. Está no que roda por baixo.`

`Por isso a Vitalícia não é mais um curso para você terminar. É tirar o prazo e a desculpa:`

- `Sem prazo para dar conta.`
- `Sem o mês que você perdeu.`
- `Sem decidir de novo se continua.`

`E ela não é só conteúdo. Tem uma trilha de entrada, que mostra por onde começar entre os 11 produtos, e um primeiro passo para as suas primeiras 48 horas.`

---

## Bloco 05: Como funciona (o passo a passo)

Bloco principal. No mobile, em carrossel (card 1, card 2, card 3...).

**Copy**

Título: `Entrar é uma decisão. Continuar tem um caminho.`

**Passo 1. Você entra, uma vez**
`Você faz o pagamento único e o acesso é liberado.`
`Você sai com: acesso vitalício ao Clube Secreto e aos 11 produtos.`

**Passo 2. Seu primeiro passo, em 48 horas**
`Antes de qualquer outra coisa, você faz um primeiro passo, pequeno de propósito: o primeiro acesso, o seu diagnóstico e a primeira prática do Clube. Cabe em 48 horas.`
`Você sai com: o seu padrão nomeado e o ponto de partida na trilha.` `[[CONFIRMAR: o primeiro passo de 48 horas, ver onboarding_vitalicia.md]]`

**Passo 3. A trilha de entrada**
`Você não precisa abrir os 11 produtos de uma vez. A trilha mostra a ordem de entrada, para você não se perder.`
`Você sai com: a ordem de por onde começar, na sua ordem.` `[[PENDENTE: ordem de entrada]]`

**Passo 4. O Clube Secreto, ciclo a ciclo**
`O Clube é um protocolo de 21 dias, repetido em ciclos. Cada ciclo trabalha uma área da sua vida, com aulas ao vivo toda terça com a Dra. e suporte no WhatsApp. Reprogramação de 20 a 30 minutos por dia, só com o celular.`
`Você sai com: um ritmo que conduz você, ciclo a ciclo.`
`[[CONFIRMAR: ciclos, aulas ao vivo e suporte continuam na Vitalícia; o que acontece depois do 12º ciclo (repete?)]]`

**Passo 5. Os produtos, no seu tempo**
`Cada um dos 11 produtos fica seu, sem prazo. Você abre quando fizer sentido. Não existe o mês que você perdeu.`
`Você sai com: o catálogo inteiro à sua disposição, sem pressão.`

**Fecho do bloco**
`Uma decisão. Uma trilha. Nenhum prazo.`

**Função:** no Desafio, o que vendia era o calendário das 5 noites. Na Vitalícia, o que reduz o medo de "comprar e não implementar" é o caminho (trilha e 48 horas), não o calendário.

---

## Bloco 06: Tudo que você recebe

**Copy**

Título: `O que entra na Black Próton Vitalícia`

`Um Clube Secreto sem prazo, mais os 11 produtos do catálogo atual. Cada um com uma função e uma dor a que responde.`

### O Clube Secreto (produto principal)

| | |
|---|---|
| **Função** | Um protocolo de 21 dias repetido em ciclos, com aulas ao vivo toda terça com a Dra., suporte no WhatsApp e a comunidade. É o acompanhamento. |
| **Dor a que responde** | "Eu tenho muito conhecimento, mas na hora de colocar em prática eu me perco." |

### Os 11 produtos

| # | Produto | Função em uma linha | Dor a que responde |
|---|---|---|---|
| 1 | **Fórmula da Riqueza** | Trabalha a relação com a riqueza. `[[CONFIRMAR: descrição oficial]]` | "Quando entra um dinheiro a mais, aparece uma conta." (Termostato Invisível) |
| 2 | **Workshop Terapeuta de Elite** | Para quem quer transformar o que aprendeu em caminho para atender outras pessoas. `[[CONFIRMAR: descrição oficial]]` | "Por que eu tenho tantas habilidades e não saio do lugar?" |
| 3 | **Os 3 Áudios de Reprogramação** | Três áudios de reprogramação mental para ouvir no seu tempo. `[[CONFIRMAR: descrição oficial]]` | "Eu sei o que fazer e não faço" (Autossabotagem) |
| 4 | **Código de Ativação Próton** | Uma prática de ativação do método. `[[CONFIRMAR: descrição oficial]]` | "Ter clareza do caminho a seguir e confiar em mim." |
| 5 | **Imersão Desbloqueie o Poder da Sua Mente** | A imersão em que a Dra. mostra o diagnóstico dos 5 perfis e o que roda por baixo. | "Não sei exatamente o que está me impedindo" |
| 6 | **Desafio A Nova Realidade** | As 5 noites ao vivo: quem está comandando a sua vida, o lixo emocional, os relacionamentos, a mente de riqueza e a criação da nova realidade, com práticas. `[[CONFIRMAR: gravações e materiais incluídos]]` | "Eu sei que consigo mais, só não sei por onde começar" |
| 7 | **Cura da Criança Interior** | Prática de reprogramação com a criança interior. É prática de reprogramação, não tratamento. `[[CONFIRMAR: descrição oficial]]` | "Sinto que a cada passo que dou, retrocedo" (Traumas Que Ainda Decidem) |
| 8 | **Instagram Profissional** | Para quem quer usar o Instagram no próprio trabalho. `[[CONFIRMAR: descrição oficial]]` | "Para parar de me esconder e de sentir vergonha de vender" |
| 9 | **Destrave o Dinheiro** | Trabalha crenças e bloqueios com dinheiro. `[[CONFIRMAR: descrição oficial]]` | "Tenho muitas crenças e bloqueios com dinheiro" |
| 10 | **Cura da Escassez Financeira** | Trabalha a escassez financeira. Não promete quitar dívida. `[[CONFIRMAR: descrição oficial]]` | "Por que o dinheiro entra na minha vida mas vai embora fácil?" |
| 11 | **Sequências Numéricas de Grabovoi** | As sequências que a Dra. ensina na prática, como a do Modo Obcecado. É prática ensinada, não promessa. | "Sinto que preciso arrumar várias áreas ao mesmo tempo e não sei por onde começar." |

**Regras do bloco**
- As funções acima foram escritas a partir do **nome de cada produto** e do que as fontes dizem do Clube, do Desafio e da Imersão. As fontes lidas **não** descrevem o conteúdo dos outros produtos. Cada linha marcada com `[[CONFIRMAR: descrição oficial]]` precisa de validação do time de produto antes de ir ao ar. Nada foi inventado além disso.
- Os nomes "Cura da Criança Interior" e "Cura da Escassez Financeira" são nomes de produto. Em qualquer frase da página, usar "prática de reprogramação" e nunca o termo do nome como promessa de resultado.
- Sequência 5207418: só como prática, nunca como "traz dinheiro".
- As frases da coluna "Dor a que responde" são frases reais da audiência (`01_PESQUISAS_INSIGHTS.md`, seção 2, e as opções das pesquisas), usadas em primeira pessoa e sem atribuir a ninguém.

### Bônus

`[[PENDENTE: bônus]]` (de antecipação ou de quem assiste ao vivo). Se não existir, **apagar este subbloco** e não escrever "bônus" em nenhum outro lugar da página.

### Linha de valor (sem número ainda)

`Se você comprasse tudo separado, a conta seria outra. Veja no bloco 08.` (apagar esta linha se a Parte 2 do bloco 08 for apagada)

---

## Bloco 07: Para quem serve e para quem não serve

**Copy, "É para você se..."**
- Você já começou várias vezes e sente que volta sempre ao mesmo ponto
- Você sabe o que precisa fazer e não consegue manter
- Você já comprou curso e não colocou em prática, e não quer repetir
- Você quer uma decisão que só precisa tomar uma vez
- Você aceita que a Vitalícia é um caminho, não um atalho

**Copy, "Não é para você se..."**
- Você procura uma solução mágica e não pretende praticar nada
- Você espera promessa de ganho de dinheiro, de quitar dívida ou de que a autossabotagem acabe. Eu não prometo isso
- Você quer só aprender sobre o tema e não pretende entrar na experiência
- Você se endividaria para entrar. Nesse caso, prefiro que você espere

`Eu prefiro que você não compre do que compre e não viva.`

---

## Bloco 08: A conta (custo de continuar parada) e a conta do catálogo

### Parte 1: A conta do custo de continuar parada

**Copy**

`Antes de ver de novo o valor, eu quero que você faça uma conta.`

`Quanto está custando continuar mais um ano exatamente no mesmo lugar?`

`Não é uma conta de dinheiro só. Faça comigo, com um papel:`

1. `Quanto você investiu em você nos últimos seis meses?` (campo para digitar um valor, opcional, não é salvo)
2. `Quanto você gastou, nos últimos dois anos, em cursos, terapias ou mentorias?` (campo)
3. `Quantas vezes você recomeçou no último ano?` (campo numérico)

`Agora responda, só para você:`

`Se você continuar do mesmo jeito mais um ano, quantas vezes vai recomeçar de novo?`

`Quando eu fiz essa primeira pergunta no Desafio, a maioria respondeu: nada. E eu mostrei a conta.`

`Se você não investe em você, o resultado da sua vida sempre será zero.`

`1 vezes 0 é zero. 1 bilhão vezes 0 continua zero.`

`Ficar no mesmo lugar também custa: tempo, energia e confiança em você.`

`Eu não vou comparar a Vitalícia com a minha mentoria individual. [[CONFIRMAR: ainda existe a mentoria individual como âncora (valor no guia, seção 8)]] Não é a mesma coisa, e eu não vou fingir que é.`

**Função:** a conta de ficar parada, sem inventar nenhum número. A pessoa faz a conta dela, não a nossa. Os campos não são salvos (nem enviados), para não parecerem coleta de dado sensível. **Nenhuma promessa de ganho.** A frase sobre investir em si mesma é intocável (guia, seção 4). (Fonte da pergunta e da resposta "nada": manual da Aula 03 do Desafio e narrativa do Clube, do Comercial.)

### Parte 2: A conta do catálogo avulso

`Agora, a conta do que a Vitalícia coloca na sua mão.`

| Produto | Se comprado separado |
|---|---|
| Clube Secreto | `[[PENDENTE: preço avulso]]` |
| Fórmula da Riqueza | `[[PENDENTE: preço avulso]]` |
| Workshop Terapeuta de Elite | `[[PENDENTE: preço avulso]]` |
| Os 3 Áudios de Reprogramação | `[[PENDENTE: preço avulso]]` |
| Código de Ativação Próton | `[[PENDENTE: preço avulso]]` |
| Imersão Desbloqueie o Poder da Sua Mente | `[[PENDENTE: preço avulso]]` |
| Desafio A Nova Realidade | `[[PENDENTE: preço avulso]]` |
| Cura da Criança Interior | `[[PENDENTE: preço avulso]]` |
| Instagram Profissional | `[[PENDENTE: preço avulso]]` |
| Destrave o Dinheiro | `[[PENDENTE: preço avulso]]` |
| Cura da Escassez Financeira | `[[PENDENTE: preço avulso]]` |
| Sequências Numéricas de Grabovoi | `[[PENDENTE: preço avulso]]` |
| **Total separado** | `[[PENDENTE: preço avulso, soma]]` |

**Nota ao implementador (remover antes de publicar):** esta tabela só vai ao ar se os preços avulsos forem preços reais de venda praticados. Se não existirem, **apagar a Parte 2 inteira** e não escrever "de X por Y" em nenhum botão ou tarja.

**Linha de fechamento**
`Eu não quero que você pague por tudo. Eu quero que você pague uma vez.`

---

## Bloco 09: Valor, primeiro botão

Aqui compra quem já estava decidida.

**Copy**

`🎟 {{lote_atual}} · aberto até [[PENDENTE: data do lote]]`

`[[SE: ALUNA]]`

| Lote | Valor | Abre / vira em |
|---|---|---|
| Lote Especial | [[PREÇO LOTE ALUNAS: Especial]] | `[[PENDENTE: data do lote]]` |
| Primeiro Lote | [[PREÇO LOTE ALUNAS: Primeiro Lote]] | `[[PENDENTE: data do lote]]` |
| Último Lote | [[PREÇO LOTE ALUNAS: Último Lote]] | `[[PENDENTE: fechamento]]` |

`[[FIM SE]]`

`[[SE: NÃO-ALUNA]]`

| Lote | Valor | Abre / vira em |
|---|---|---|
| Lote Especial | [[PREÇO LOTE NÃO-ALUNAS: Especial]] | `[[PENDENTE: data do lote]]` |
| Primeiro Lote | [[PREÇO LOTE NÃO-ALUNAS: Primeiro Lote]] | `[[PENDENTE: data do lote]]` |
| Último Lote | [[PREÇO LOTE NÃO-ALUNAS: Último Lote]] | `[[PENDENTE: fechamento]]` |

`[[FIM SE]]`

**Parcelamento (logo abaixo da tabela, na mesma tela)**
`Pagamento único à vista ou em até [[PENDENTE: parcelamento]]x no cartão.`
`Pix · Cartão · [[CONFIRMAR: boleto]]`

**Botão**
`[[SE: ALUNA]]` `ENTRAR DE VEZ · [[PREÇO LOTE ALUNAS]]` [[LINK: checkout S1-ESP | pagina | vendas-b09]] `[[FIM SE]]`
`[[SE: NÃO-ALUNA]]` `ENTRAR DE VEZ · [[PREÇO LOTE NÃO-ALUNAS]]` [[LINK: checkout S3-ESP | pagina | vendas-b09]] `[[FIM SE]]`
Leva para: o checkout do segmento e do lote em vigor (mesma regra do bloco 01).

**Linha sob o botão**
`O valor sobe a cada lote. Esta condição não se repete. O que vier depois é outra oferta, com outro preço.`

**Formas de pagamento (ícones)**
`Visa · Mastercard · Amex · Pix · [[CONFIRMAR: boleto]]`

**Nota ao implementador (remover antes de publicar):** "o valor sobe a cada lote" só se a escada for real (briefing: sobe R$ 1.000 a cada virada). Não escrever frases de "última chance" sobre o vitalício (guia, seção 3).

---

## Bloco 10: Conversa séria (as duas objeções)

**Copy**

`Agora eu preciso ser honesta com você.`

`Eu não prometo o fim da autossabotagem. Não prometo dinheiro, nem tratamento. Estou abrindo, de uma vez, o que construí para você parar de recomeçar.`

### Objeção 1: "Tenho medo de comprar e não colocar em prática."

`Esse medo é comum, e faz sentido. Toda vez que você vive algo transformador, aparece a vontade de parar. Eu falei disso nas aulas.`

`A Vitalícia foi pensada para esse medo:`

- `Tira o prazo. Sem "preciso usar logo", some a pressão.`
- `Tem uma trilha de entrada: você não abre 11 coisas de uma vez, abre uma por vez.`
- `Tem um primeiro passo para as primeiras 48 horas, pequeno de propósito.`
- `O Clube é um ciclo de 21 dias por vez: não é você que tem de lembrar de aplicar, é o ciclo que te leva.`

### Objeção 2: "Já comprei outras coisas e não funcionou."

`É uma frase que eu ouço muito. Em muitos cursos, a aplicação fica por sua conta depois, e é aí que costuma travar, porque o padrão que você quer mudar é o mesmo que atrapalha a mudança. Força de vontade sozinha costuma não bastar.`

`Na Vitalícia você não precisa aplicar sozinha. Tem aula ao vivo, tem suporte, tem a comunidade, tem o ciclo.`

`[[CONFIRMAR: aulas ao vivo, suporte e comunidade continuam na Vitalícia]]`

### Fecho

`Uma última coisa. Se você não pretende praticar nada, não entre. Eu quero você praticando, não só comprando.`

**Função:** as duas objeções que mais importam para quem está pronta (quente 151: medo de não implementar 27, já comprei e não funcionou 24).

**Para a objeção de dinheiro ("não tenho o dinheiro agora")**, que pesa mais que as duas acima na base (30% da ficha, 68% do Aulão), a página não tenta resolver: remete ao parcelamento e à lista de espera (bloco 13 e `lista_de_espera.md`).

---

## Bloco 11: Autoridade

**Copy**

`[[FOTO DRA]]`

Título: `Quem vai conduzir você`

`Dra. Próton`

`Mais de 70 mil alunos em 44 países e 1,4 milhão de seguidores.`

`Ela transformou a própria história em método.`

`Criada pelos avós na periferia do interior de São Paulo, filha de mãe solo, cresceu ouvindo que sucesso era coisa de rico, não de gente como ela. Trabalhou em telemarketing, vendeu cartão, foi camelô. Estudou neurociência, física quântica, espiritualidade, hipnose e reprogramação mental, e nesse processo criou um método que já passou por mais de 70 mil alunos.`

`Formada em Terapia Quântica, Hipnose Clínica, Hipnoterapia, Reprogramação Mental e PNL. Doutora Honoris Causa em Neurociência pela Academia Mundial de Letras.`

`"Quem não está crescendo está morrendo."`
`"Não trave o processo."`

---

## Bloco 12: Valor, segundo botão + garantia

Aqui compra quem precisou ouvir tudo. Este bloco leva a garantia.

**Copy**

`🎟 {{lote_atual}} · aberto até [[PENDENTE: data do lote]]`

`[[SE: ALUNA]]` `[[PREÇO LOTE ALUNAS: lote atual]] à vista ou em até [[PENDENTE: parcelamento]]x de {{parcela_alunas}}` `[[FIM SE]]`
`[[SE: NÃO-ALUNA]]` `[[PREÇO LOTE NÃO-ALUNAS: lote atual]] à vista ou em até [[PENDENTE: parcelamento]]x de {{parcela_nao_alunas}}` `[[FIM SE]]`

**Botão**
`ENTRAR DE VEZ · {{preco_segmento}}`
`[[SE: ALUNA]]` [[LINK: checkout S1-ESP | pagina | vendas-b12]] `[[FIM SE]]` `[[SE: NÃO-ALUNA]]` [[LINK: checkout S3-ESP | pagina | vendas-b12]] `[[FIM SE]]`
Leva para: o checkout do segmento e do lote em vigor (mesma regra do bloco 01).

**Garantia**

`[[PENDENTE: garantia]]`

Versão A, se mantiver os 7 dias do Clube Secreto `[[CONFIRMAR: 7 dias para a Vitalícia]]`:
`E se, depois de entrar, você sentir que não é para você, eu devolvo o seu dinheiro. Você entra, faz o primeiro passo, e se em até 7 dias sentir que não é isso, pede o reembolso. Sem formulário difícil, sem justificativa. Eu prefiro devolver do que ter alguém aqui sem querer estar.`

Versão B, se a garantia for outro prazo:
`E se, em até [[PENDENTE: garantia, prazo]] depois de entrar, você sentir que não é para você, eu devolvo o seu dinheiro, sem justificativa.`

Versão C, se não houver garantia diferente da lei (CDC, 7 dias para compras fora do estabelecimento):
`Você tem o direito legal de desistir em até 7 dias da compra, como prevê o Código de Defesa do Consumidor.` `[[CONFIRMAR: jurídico]]`

**Função:** o Desafio tinha garantia só no bloco 12 (o primeiro botão não). A Vitalícia mantém a regra: quem comprou no bloco 9 já estava decidido; quem precisou ler tudo é quem mais precisa de reversão do risco.

---

## Bloco 13: FAQ

**Quando acaba o carrinho?**
`O carrinho fecha em [[PENDENTE: fechamento]]. Antes disso, o valor muda a cada lote: [[PENDENTE: data do lote]].`

**O que significa "vitalício"?**
`Você paga uma vez e o acesso não tem prazo. O acesso acompanha enquanto o produto existir.` `[[CONFIRMAR: definição de "vitalício" nos termos de uso, para não prometer mais do que a plataforma entrega]]`

**O que entra, exatamente?**
`O Clube Secreto e os 11 produtos do catálogo atual: Fórmula da Riqueza, Workshop Terapeuta de Elite, Os 3 Áudios de Reprogramação, Código de Ativação Próton, Imersão Desbloqueie o Poder da Sua Mente, Desafio A Nova Realidade, Cura da Criança Interior, Instagram Profissional, Destrave o Dinheiro, Cura da Escassez Financeira e Sequências Numéricas de Grabovoi. Não há promessa de lançamentos futuros.`

**Posso parcelar?**
`Sim, em até [[PENDENTE: parcelamento]]x no cartão. Pix à vista também.` `[[CONFIRMAR: opções do checkout]]`

**Já sou aluna do Clube. Muda alguma coisa?**
`Sim: existe um valor próprio para alunas, por lote. Se você é aluna, use o link da página das alunas. [[LINK: página das alunas | pagina | vendas-b13]]` `[[PENDENTE: regra de migração, tempo restante do acesso atual]]`

**Já tenho alguns dos produtos. Vou pagar por eles de novo?**
`[[PENDENTE: regra de migração, quem já tem algum dos 11]]`

**Quanto tempo preciso por dia?**
`O Clube pede de 20 a 30 minutos por dia, só com o celular, em ciclos de 21 dias. Os demais produtos você abre no seu tempo.` `[[CONFIRMAR: 20 a 30 minutos por dia continua valendo na Vitalícia]]`

**Como recebo o acesso?**
`Assim que o pagamento é confirmado, você recebe o acesso por e-mail e entra na Área de Membros (Próton Flix). Em seguida, você recebe a trilha de entrada e o primeiro passo.` `[[CONFIRMAR: plataforma de acesso (Hotmart / Próton Flix)]]`

**Preciso estar ao vivo no Clube?**
`O ideal é sim, porque as aulas de terça são ao vivo. Se você perder, o material fica disponível.` `[[CONFIRMAR: as aulas de terça ficam gravadas na Vitalícia]]`

**Tem garantia?**
`Veja o bloco de garantia acima.` `[[PENDENTE: garantia]]`

**Isso é terapia?**
`Não. A Vitalícia é um caminho de desenvolvimento e reprogramação. Não é tratamento, não substitui terapia, e eu não prometo resultado clínico. Se você está em sofrimento agudo, procure um profissional de saúde. No Brasil, o CVV atende 24 horas pelo 188.` [[CONFIRMAR: manter a menção ao CVV 188 (canal público)]]

**E se eu não conseguir aplicar?**
`Por isso existe a trilha de entrada, o primeiro passo de 48 horas e a ausência de prazo. Se o momento não for esse, a garantia está acima.`

**O dinheiro não dá agora. O que eu faço?**
`Eu prefiro que você não se endivide para entrar. Veja o parcelamento no cartão e, se ainda assim não couber, deixe seu nome na lista de espera. [[LINK: lista de espera | pagina | vendas-b13]]`

**Vou receber ofertas de outros produtos depois?**
`Você vai receber a trilha de entrada e os avisos do Clube. Ofertas novas, se existirem, são apresentadas, nunca impostas.`

**Botão (repete)**
`ENTRAR DE VEZ · {{preco_segmento}}`
`[[SE: ALUNA]]` [[LINK: checkout S1-ESP | pagina | vendas-b13]] `[[FIM SE]]` `[[SE: NÃO-ALUNA]]` [[LINK: checkout S3-ESP | pagina | vendas-b13]] `[[FIM SE]]`
Leva para: o checkout do segmento e do lote em vigor (mesma regra do bloco 01).

---

## Bloco 14: Rodapé

**Copy**

`Você já se prometeu que dessa vez ia ser diferente.`
`Eu desafio você a decidir uma vez só.`
`A última vez que você vai precisar recomeçar.`

`Dra. Próton 2026 © Todos os direitos reservados · Instituto Dra. Próton · CNPJ: 24.450.366/0001-20 · [[LINK: privacidade | pagina | vendas-b14]] · [[LINK: termos | pagina | vendas-b14]]`

`Resultados variam de pessoa para pessoa. Os depoimentos são relatos individuais e não garantem resultados. A Vitalícia não é tratamento médico ou psicológico.`

---

## Estados da página (mapa para quem implementa)

| Estado | Quando | O que muda |
|---|---|---|
| 0. Tela de espera | Antes da revelação do valor (21h09) | Só contagem e botão da live |
| 1. Lote Especial | Da revelação do valor (21h09) até `[[PENDENTE: data do lote]]` | Tarja 1, preço do Especial. Botão de compra liga às 21h28 |
| 2. Primeiro Lote | Até `[[PENDENTE: data do lote]]` | Tarja 2, preço do Primeiro Lote |
| 3. Último Lote | Até `[[PENDENTE: fechamento]]` | Tarja 3, preço do Último Lote |
| 4. Últimas horas | Últimas 24 horas do carrinho | Tarja 4 |
| 5. Encerrado | Depois do fechamento | Botões trocados por lista de espera |

Cada estado existe em duas versões (alunas e não-alunas). Checkout por lote e por segmento: S1 (alunas), S2 (quem viveu o método, paga como não-aluna) e S3 (não-alunas e base fria), cada um com ESP, 1L e UL (9 destinos no total). A tabela "Links desta peça" mostra o token de cada estado.

---

## Notas ao implementador

1. **Pendências que bloqueiam:** `[[PENDENTE: preço avulso]]` (11 produtos + Clube), `[[PENDENTE: data do lote]]`, `[[PENDENTE: fechamento]]`, `[[PENDENTE: garantia]]`, `[[PENDENTE: bônus]]`, `[[PENDENTE: parcelamento]]`, `[[PENDENTE: ordem de entrada]]`, `[[PENDENTE: regra de migração, quem já tem algum dos 11]]`, `[[PENDENTE: regra de migração, tempo restante do acesso atual]]`, `[[FOTO DRA]]`, `[[DEPOIMENTO REAL]]`.
2. **Descrições dos 11 produtos:** as fontes do projeto só trazem o **nome** de 8 dos 11. As funções do bloco 06 vêm do nome e dos materiais do Clube, do Desafio e da Imersão. Todas as linhas marcadas precisam de validação do time de produto. Alternativa: tirar a coluna "função" e deixar só "dor a que responde".
3. **O que o Desafio tinha e a Black muda:**
   - Bloco 05 (passo a passo): calendário de 5 noites vira "como funciona" (trilha, 48 horas, ciclo).
   - Bloco 06: bônus do ingresso vira "o que entra" (11 produtos + Clube).
   - Bloco 08: "5 noites poderiam custar R$ 497" vira "a conta do custo de continuar parada" mais "a conta do catálogo avulso" (só se houver preço avulso real).
   - Bloco 09: de 3 lotes de R$ 35, R$ 97, R$ 147 para 3 lotes (Especial, Primeiro e Último) por segmento.
   - Bloco 12: garantia (mantida) com três versões conforme a decisão.
   - A tarja do Desafio mostrava a porcentagem de lugares preenchidos. **Não usar na Black**: não há limite de lugares, e declarar lugares que não existem é escassez falsa.
4. **Testes A/B:** (1) headline B0 contra B1 contra B4; (2) tabela de lotes completa contra só lote atual (mede se mostrar os próximos lotes acelera a compra); (3) bloco 08 parte 1 (conta interativa) contra texto fixo; (4) botão "ENTRAR DE VEZ" contra "QUERO PARAR DE RECOMEÇAR".
5. **Parcelamento:** aparece no bloco 01, no bloco 09, no bloco 12 e no FAQ, sempre na mesma tela do preço. A ficha mostrou cartão parcelado como a forma mais escolhida, e 53% se diz confortável com até R$ 297. Por isso o valor da parcela deve aparecer em destaque, ao lado do preço total.
6. **Compliance (checagem final):** nenhuma promessa clínica ou de resolução do padrão, nenhuma promessa de ganho, nenhuma frase de "última chance" sobre o vitalício, nenhum preço antes da live, nenhuma frase de que sequência numérica traz dinheiro, nenhum depoimento sem autorização.
7. **Dependências:** `pagina_cupom_alunas.md`, `onboarding_vitalicia.md` (próxima página), `banner_checkout.md`, `lista_de_espera.md`, `08_live_e_pitch` (a ordem da live deve coincidir com a ordem dos blocos 03 a 12), `10_pos_compra`.

---

## Links desta peça

| ID da peça | Token | O que o link faz | Quem cria |
|---|---|---|---|
| vendas-espera | `[[LINK: live YouTube \| pagina \| vendas-espera]]` | Botão IR PARA A LIVE da tela de espera | Equipe de YouTube |
| vendas-b00 | `[[LINK: lista de espera \| pagina \| vendas-b00]]` | Estado 5 (encerrado): leva à lista de espera | Web designer |
| vendas-b01 | `[[LINK: página das alunas \| pagina \| vendas-b01]]` | Aviso para aluna que chegou pelo link geral | Web designer |
| vendas-b01 | `[[LINK: checkout S1-ESP \| pagina \| vendas-b01]]` e `[[LINK: checkout S3-ESP \| pagina \| vendas-b01]]` | Primeiro botão de compra no Lote Especial. Primeiro botão de compra nos outros lotes: S1-1L e S1-UL, S3-1L e S3-UL. Quem tem tag de S2 usa S2-ESP, S2-1L e S2-UL | Financeiro / Hotmart |
| vendas-b09 | `[[LINK: checkout S1-ESP \| pagina \| vendas-b09]]` e `[[LINK: checkout S3-ESP \| pagina \| vendas-b09]]` | Botão do bloco 09, mesma regra de lote e segmento (troca para 1L e UL na virada) | Financeiro / Hotmart |
| vendas-b12 | `[[LINK: checkout S1-ESP \| pagina \| vendas-b12]]` e `[[LINK: checkout S3-ESP \| pagina \| vendas-b12]]` | Botão do bloco 12 (com a garantia), mesma regra | Financeiro / Hotmart |
| vendas-b13 | `[[LINK: checkout S1-ESP \| pagina \| vendas-b13]]` e `[[LINK: checkout S3-ESP \| pagina \| vendas-b13]]` | Botão final do FAQ, mesma regra | Financeiro / Hotmart |
| vendas-b13 | `[[LINK: página das alunas \| pagina \| vendas-b13]]` e `[[LINK: lista de espera \| pagina \| vendas-b13]]` | FAQ: página das alunas e lista de espera | Web designer |
| vendas-b14 | `[[LINK: privacidade \| pagina \| vendas-b14]]` e `[[LINK: termos \| pagina \| vendas-b14]]` | Rodapé: política de privacidade e termos de uso | Jurídico |

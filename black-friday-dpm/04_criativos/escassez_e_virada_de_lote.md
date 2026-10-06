# Escassez e virada de lote (depois da revelação)

| Campo | Definição |
|---|---|
| **Peça** | 24 anúncios (4 famílias × 3 ângulos × 2 segmentos) + 2 anúncios condicionais de bônus |
| **Canal** | Meta Ads (feed, stories, reels); as mesmas artes servem para remarketing de vendas, grupos e status |
| **Público** | Quem assistiu à live, visitou a página de vendas ou se cadastrou e não comprou. **Dois segmentos separados:** alunas do Clube (A) e quem ainda não é do Clube (N). Cada anúncio vai para uma lista própria, com checkout próprio |
| **Momento** | A partir de 03/11, 20h, depois da revelação. As datas de virada e de fechamento estão em `[[PENDENTE: data do lote]]` e `[[PENDENTE: fechamento]]` |
| **Objetivo** | Compra pelo checkout do lote vigente. A escassez é só a de lote real |
| **Consciência** | 4 a 5 |
| **Modelo no Desafio** | `desafio_copy_criativo_escassez_desafio.md` (AD 01 a 18: "O tempo está acabando", "Você vai mesmo pagar mais caro?!", "Última chance", vídeo com contador de 30 s, bônus) e a legenda de lembrete V2 |
| **O que acontece depois do clique** | Checkout do lote e do segmento → compra aprovada → trilha de entrada e primeiro passo em 48 horas (ver `10_pos_compra`). Quem não compra continua no remarketing de vendas |

## Regras de escassez (as únicas formas aprovadas)

1. **Lote real, com data.** "O Lote Especial vira em `[[PENDENTE: data do lote]]`." Nenhum anúncio diz "a qualquer momento" nem "vagas acabando": o Desafio podia, porque o lote virava por quantidade; aqui os lotes viram por data confirmada.
2. **"Esta condição não se repete."** Forma aprovada: "O que vier depois é outra oferta, com outro preço."
3. **Proibido:** "última chance de ter acesso vitalício", "a porta fecha para sempre", "nunca mais vai ter vitalício", "mais barato que a mensalidade" (sem `[[CONFIRMAR]]`), qualquer promessa de dinheiro ou de fim da autossabotagem.

**Placeholders de preço** (guia, seção 2): `[[PREÇO LOTE ALUNAS]]` e `[[PREÇO LOTE NÃO-ALUNAS]]` para o lote que está vigente na arte; para o lote seguinte usar `[[PREÇO PRÓXIMO LOTE ALUNAS]]` e `[[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]]`. Parcelas: `[[CONFIRMAR: nº de parcelas e valor]]`. A escada do briefing está na nota ao implementador, não no texto.

**Trabalho contratado:** "Eu quero uma decisão que eu só precise tomar uma vez." Nos anúncios de escassez, o texto não pressiona: ele mostra que a decisão tem um prazo real e que adiar tem um custo claro (a diferença entre lotes).

**Diferença entre segmentos:** em **alunas**, o texto reconhece o que a pessoa já fez ("você já está dentro, falta ficar para sempre"; "o que você já fez conta, não é recomeçar do zero"). Em **não-alunas**, o texto fala da primeira entrada. Cada ângulo tem uma versão A e uma versão N.

---

## Família 1: Virada do Lote Especial para o Primeiro Lote (6)

### ESC-ESP-01 | ALUNAS | Placar de lotes (modelo AD 01 e AD 03)
- **Arte:** Logo Black Próton Vitalícia + `[[FOTO DRA]]`. **O LOTE ESPECIAL VIRA EM [[PENDENTE: data do lote]].** Lote atual: [[PREÇO LOTE ALUNAS]]. Próximo lote (Primeiro Lote): [[PREÇO PRÓXIMO LOTE ALUNAS]].
- **Texto:** Você já está dentro do Clube. Falta ficar para sempre. Pagamento único, acesso vitalício ao Clube Secreto e aos 11 produtos. `[[CONFIRMAR: nº de parcelas e valor]]`
- **CTA:** Garantir meu acesso vitalício
- **FRAME 0:** Um placar com duas colunas, "Lote atual" em verde e "Próximo lote" em cinza, números grandes em branco. Para o scroll porque o número é o elemento mais forte, e a comparação em duas colunas mostra a diferença em um olhar, sem texto longo.

### ESC-ESP-02 | NÃO-ALUNAS | Placar de lotes
- **Arte:** Logo + `[[FOTO DRA]]`. **O LOTE ESPECIAL VIRA EM [[PENDENTE: data do lote]].** Lote atual: [[PREÇO LOTE NÃO-ALUNAS]]. Próximo lote (Primeiro Lote): [[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]].
- **Texto:** A decisão de parar de recomeçar tem data. Pagamento único, acesso vitalício ao Clube Secreto e aos 11 produtos. `[[CONFIRMAR: nº de parcelas e valor]]`
- **CTA:** Garantir meu acesso
- **FRAME 0:** O mesmo placar, com a data em amarelo no topo. Para o scroll porque a data real, em destaque, converte curiosidade em decisão.

### ESC-ESP-03 | ALUNAS | Provocação (modelo AD 02)
- **Arte:** Logo. **Você já está dentro. Vai mesmo pagar mais caro para ficar?** Lote atual: [[PREÇO LOTE ALUNAS]]. Até [[PENDENTE: data do lote]].
- **Texto:** O que você já fez no Clube conta e continua contando. O que muda em [[PENDENTE: data do lote]] é só o valor.
- **CTA:** Entrar de vez
- **FRAME 0:** A pergunta em branco sobre fundo escuro, "mais caro" em amarelo. Para o scroll porque é uma pergunta de bolso, direta, e fala com quem já conhece o produto.

### ESC-ESP-04 | NÃO-ALUNAS | Provocação (modelo AD 02)
- **Arte:** Logo. **Você vai mesmo pagar mais caro pela mesma coisa?** Lote atual: [[PREÇO LOTE NÃO-ALUNAS]]. Até [[PENDENTE: data do lote]].
- **Texto:** Mesmo conteúdo, mesmo acesso vitalício, outro preço depois de [[PENDENTE: data do lote]].
- **CTA:** Garantir meu acesso
- **FRAME 0:** Fundo preto, "mais caro" em amarelo e o número do lote atual logo abaixo em branco. Para o scroll porque a combinação de pergunta e preço atual leva à decisão imediata.

### ESC-ESP-05 | ALUNAS | Relógio (modelo Ad 14)
- **Arte:** Logo + `[[FOTO DRA]]`. **O relógio do Lote Especial está correndo.** [[PREÇO LOTE ALUNAS]] até [[PENDENTE: data do lote]].
- **Texto:** Depois dessa data, o valor sobe para [[PREÇO PRÓXIMO LOTE ALUNAS]]. A decisão é a mesma: parar de recomeçar.
- **CTA:** Garantir meu acesso vitalício
- **FRAME 0:** Relógio de parede com ponteiro em amarelo e a data embaixo. Para o scroll porque o relógio é um ícone universal de prazo.

### ESC-ESP-06 | NÃO-ALUNAS | Relógio (modelo Ad 14)
- **Arte:** Logo + `[[FOTO DRA]]`. **O relógio do Lote Especial está correndo.** [[PREÇO LOTE NÃO-ALUNAS]] até [[PENDENTE: data do lote]].
- **Texto:** Depois dessa data, o valor sobe para [[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]]. A decisão é a mesma: parar de recomeçar.
- **CTA:** Garantir meu acesso
- **FRAME 0:** O mesmo relógio, com a Dra. de lado. Para o scroll porque o rosto conhecido reforça a confiança do prazo.

---

## Família 2: Virada do Primeiro Lote para o Último Lote (6)

### ESC-PRI-01 | ALUNAS | Placar de lotes
- **Arte:** Logo + `[[FOTO DRA]]`. **O PRIMEIRO LOTE VIRA EM [[PENDENTE: data do lote]].** Lote atual: [[PREÇO LOTE ALUNAS]]. Próximo lote (Último Lote): [[PREÇO PRÓXIMO LOTE ALUNAS]].
- **Texto:** O Lote Especial já passou. Este é o penúltimo valor para entrar no acesso vitalício. Depois, só o Último Lote. `[[CONFIRMAR: nº de parcelas e valor]]`
- **CTA:** Garantir meu acesso vitalício
- **FRAME 0:** Placar com três degraus, o primeiro riscado, o segundo em destaque e o terceiro em cinza. Para o scroll porque a escada visual mostra que o primeiro degrau já foi.

### ESC-PRI-02 | NÃO-ALUNAS | Placar de lotes
- **Arte:** Logo + `[[FOTO DRA]]`. **O PRIMEIRO LOTE VIRA EM [[PENDENTE: data do lote]].** Lote atual: [[PREÇO LOTE NÃO-ALUNAS]]. Próximo lote (Último Lote): [[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]].
- **Texto:** O Lote Especial já passou. Depois deste, só o Último Lote. `[[CONFIRMAR: nº de parcelas e valor]]`
- **CTA:** Garantir meu acesso
- **FRAME 0:** O mesmo placar de três degraus. Para o scroll porque o degrau riscado é a lembrança visual do que já foi perdido.

### ESC-PRI-03 | ALUNAS | Quem esperou (modelo Ad 17)
- **Arte:** Logo. **Decide antes que reste só o Último Lote.** [[PREÇO LOTE ALUNAS]] até [[PENDENTE: data do lote]].
- **Texto:** Quem esperou o Lote Especial passar pagou mais. Quem esperar o Primeiro Lote passar vai pagar [[PREÇO PRÓXIMO LOTE ALUNAS]]. Você já está dentro: decida de vez.
- **CTA:** Entrar de vez
- **FRAME 0:** "Último Lote" em cinza e uma seta amarela apontando para "agora". Para o scroll porque a seta direciona o olhar.

### ESC-PRI-04 | NÃO-ALUNAS | Quem esperou (modelo Ad 17)
- **Arte:** Logo. **Decide antes que reste só o Último Lote.** [[PREÇO LOTE NÃO-ALUNAS]] até [[PENDENTE: data do lote]].
- **Texto:** Quem esperou o Lote Especial passar pagou mais. Quem esperar o Primeiro Lote passar vai pagar [[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]].
- **CTA:** Garantir meu acesso
- **FRAME 0:** O mesmo desenho, com o preço atual em destaque. Para o scroll porque a hierarquia de preço é visível.

### ESC-PRI-05 | ALUNAS | A conta de esperar
- **Arte:** Logo. **Esperar custa [[R$ DIFERENÇA ENTRE LOTES]].** Primeiro Lote: [[PREÇO LOTE ALUNAS]] até [[PENDENTE: data do lote]].
- **Texto:** Cada semana adiada é uma semana de "depois eu vejo". E depois de [[PENDENTE: data do lote]], o mesmo acesso passa a custar [[PREÇO PRÓXIMO LOTE ALUNAS]].
- **CTA:** Garantir meu acesso vitalício
- **FRAME 0:** Uma calculadora com "[[R$ DIFERENÇA ENTRE LOTES]]" em amarelo na tela. Para o scroll porque a calculadora reforça a ideia de conta objetiva.

### ESC-PRI-06 | NÃO-ALUNAS | A conta de esperar
- **Arte:** Logo. **Esperar custa [[R$ DIFERENÇA ENTRE LOTES]].** Primeiro Lote: [[PREÇO LOTE NÃO-ALUNAS]] até [[PENDENTE: data do lote]].
- **Texto:** A decisão é a mesma, o preço é outro. Depois de [[PENDENTE: data do lote]], o acesso passa a custar [[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]].
- **CTA:** Garantir meu acesso
- **FRAME 0:** A mesma calculadora. Para o scroll porque o valor da diferença, em letra grande, é o gatilho.

---

## Família 3: Últimas horas do Último Lote (6)

### ESC-ULT-01 | ALUNAS | Últimas horas (modelo AD 05 e AD 06)
- **Arte:** Logo + `[[FOTO DRA]]`. **ÚLTIMAS HORAS.** Último Lote: [[PREÇO LOTE ALUNAS]]. Encerra em [[PENDENTE: fechamento]].
- **Texto:** Esta condição não se repete. O que vier depois é outra oferta, com outro preço. `[[CONFIRMAR: nº de parcelas e valor]]`
- **CTA:** Entrar de vez
- **FRAME 0:** "ÚLTIMAS HORAS" em amarelo gigante sobre fundo escuro, com um contador regressivo real embaixo. Para o scroll porque o contador é a prova visual de que o prazo existe e é o único elemento que muda de segundo em segundo.

### ESC-ULT-02 | NÃO-ALUNAS | Últimas horas
- **Arte:** Logo + `[[FOTO DRA]]`. **ÚLTIMAS HORAS.** Último Lote: [[PREÇO LOTE NÃO-ALUNAS]]. Encerra em [[PENDENTE: fechamento]].
- **Texto:** Esta condição não se repete. O que vier depois é outra oferta, com outro preço. `[[CONFIRMAR: nº de parcelas e valor]]`
- **CTA:** Garantir meu acesso
- **FRAME 0:** O mesmo, com o contador. Para o scroll porque a repetição de formato entre segmentos mantém o reconhecimento.

### ESC-ULT-03 | ALUNAS | Saída honrosa
- **Arte:** Logo. **Se não é para agora, tudo bem. Mas decida, em vez de adiar.** Encerra em [[PENDENTE: fechamento]].
- **Texto:** Adiar sem decidir é o padrão que você já conhece. Se você escolher não entrar, escolha. Se escolher entrar, o Último Lote está em [[PREÇO LOTE ALUNAS]].
- **CTA:** Decidir agora
- **FRAME 0:** "Decida." em branco, uma palavra por linha. Para o scroll porque a ordem direta, sem pressão agressiva, corta o tom de vendas e dá respeito à pessoa.

### ESC-ULT-04 | NÃO-ALUNAS | Saída honrosa
- **Arte:** Logo. **Se não é para agora, tudo bem. Mas decida, em vez de adiar.** Encerra em [[PENDENTE: fechamento]].
- **Texto:** Adiar sem decidir é o padrão que você já conhece. Se escolher entrar, o Último Lote está em [[PREÇO LOTE NÃO-ALUNAS]].
- **CTA:** Decidir agora
- **FRAME 0:** O mesmo "Decida.". Para o scroll porque "tudo bem" é uma frase rara em anúncio e abre a atenção.

### ESC-ULT-05 | ALUNAS | Amanhã você vai lembrar deste anúncio (modelo Clube Ad 8)
- **Arte:** Logo. **Amanhã você vai lembrar deste anúncio.** Último Lote até [[PENDENTE: fechamento]].
- **Texto:** A pergunta é se vai lembrar como o dia em que decidiu, ou como mais uma chance que passou. Último Lote: [[PREÇO LOTE ALUNAS]].
- **CTA:** Decidir hoje
- **FRAME 0:** "Amanhã" em branco e "você vai lembrar" em amarelo. Para o scroll porque a pessoa se imagina no dia seguinte.

### ESC-ULT-06 | NÃO-ALUNAS | Amanhã você vai lembrar deste anúncio
- **Arte:** Logo. **Amanhã você vai lembrar deste anúncio.** Último Lote até [[PENDENTE: fechamento]].
- **Texto:** A pergunta é se vai lembrar como o dia em que decidiu, ou como mais uma chance que passou. Último Lote: [[PREÇO LOTE NÃO-ALUNAS]].
- **CTA:** Decidir hoje
- **FRAME 0:** O mesmo desenho. Para o scroll pelo mesmo motivo: a projeção para o amanhã.

---

## Família 4: "Esta condição não se repete" (6)

### ESC-NSR-01 | ALUNAS | Institucional
- **Arte:** Logo + `[[FOTO DRA]]`. **Esta condição não se repete.** O que vier depois é outra oferta, com outro preço.
- **Texto:** Você já fez parte do Clube. O que você já fez conta, não é recomeçar do zero. Lote atual: [[PREÇO LOTE ALUNAS]] até [[PENDENTE: data do lote]].
- **CTA:** Entrar de vez
- **FRAME 0:** Frase em branco, "não se repete" em amarelo, sobre foto da Dra. de perfil. Para o scroll porque é uma sentença curta e firme, sem urgência falsa.

### ESC-NSR-02 | NÃO-ALUNAS | Institucional
- **Arte:** Logo + `[[FOTO DRA]]`. **Esta condição não se repete.** O que vier depois é outra oferta, com outro preço.
- **Texto:** Pagamento único, acesso vitalício ao Clube Secreto e aos 11 produtos. Lote atual: [[PREÇO LOTE NÃO-ALUNAS]] até [[PENDENTE: data do lote]].
- **CTA:** Garantir meu acesso
- **FRAME 0:** O mesmo desenho. Para o scroll porque o tom de fato, não de pressão, aumenta a confiança de quem já foi enganado por falsos "últimos dias".

### ESC-NSR-03 | ALUNAS | Frase-guia
- **Arte:** Logo. **A última vez que você vai precisar recomeçar.** Lote atual: [[PREÇO LOTE ALUNAS]].
- **Texto:** Esta condição não se repete. O que vier depois é outra oferta, com outro preço. Até [[PENDENTE: data do lote]].
- **CTA:** Entrar de vez
- **FRAME 0:** A frase-guia em branco, "última vez" em amarelo. Para o scroll porque é a promessa central da campanha, que a aluna já viu na captação.

### ESC-NSR-04 | NÃO-ALUNAS | Frase-guia
- **Arte:** Logo. **A última vez que você vai precisar recomeçar.** Lote atual: [[PREÇO LOTE NÃO-ALUNAS]].
- **Texto:** Esta condição não se repete. O que vier depois é outra oferta, com outro preço. Até [[PENDENTE: data do lote]].
- **CTA:** Garantir meu acesso
- **FRAME 0:** O mesmo desenho. Para o scroll pela repetição da mensagem da captação.

### ESC-NSR-05 | ALUNAS | Vídeo com contador de 30 segundos (modelo AD 10)
- **Arte (vídeo, 30 s, contador visível):** Logo. **Recomeçar sozinha OU ficar de vez?** Recomeçando, o padrão de sempre volta. Ficando, você decide uma vez. Você já sabe qual caminho funciona. Clique no botão abaixo e entre no acesso vitalício. Clique antes que o lote vire para [[PREÇO PRÓXIMO LOTE ALUNAS]].
- **Texto:** Lote atual: [[PREÇO LOTE ALUNAS]] até [[PENDENTE: data do lote]].
- **CTA:** Entrar de vez
- **FRAME 0:** Tela dividida em "Recomeçar" e "Ficar", com contador no canto superior. Para o scroll porque a divisão de tela é uma decisão visual simples e o contador de 30 s prende o olhar até o fim.

### ESC-NSR-06 | NÃO-ALUNAS | Vídeo com contador de 30 segundos (modelo AD 10)
- **Arte (vídeo, 30 s, contador visível):** Logo. **Recomeçar sozinho(a) OU ficar de vez?** Recomeçando, o padrão de sempre volta. Ficando, você decide uma vez. Você já sabe qual caminho funciona. Clique no botão abaixo e entre no acesso vitalício. Clique antes que o lote vire para [[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]].
- **Texto:** Lote atual: [[PREÇO LOTE NÃO-ALUNAS]] até [[PENDENTE: data do lote]].
- **CTA:** Garantir meu acesso
- **FRAME 0:** O mesmo vídeo. Para o scroll pelo mesmo motivo.

---

## Condicionais: bônus (modelo AD 11), só se existir `[[PENDENTE: bônus]]`

### ESC-BON-01 | ALUNAS
- **Arte:** Logo + `[[FOTO DRA]]`. **Acesso vitalício + [[PENDENTE: bônus]].** Lote atual: [[PREÇO LOTE ALUNAS]].
- **Texto:** Esse bônus é de quem entra até [[PENDENTE: data do lote]]. `[[CONFIRMAR: regra do bônus]]`
- **CTA:** Garantir meu bônus
- **FRAME 0:** O nome do bônus em amarelo, grande. Para o scroll porque o item concreto vence o abstrato.

### ESC-BON-02 | NÃO-ALUNAS
- **Arte:** Logo + `[[FOTO DRA]]`. **Acesso vitalício + [[PENDENTE: bônus]].** Lote atual: [[PREÇO LOTE NÃO-ALUNAS]].
- **Texto:** Esse bônus é de quem entra até [[PENDENTE: data do lote]]. `[[CONFIRMAR: regra do bônus]]`
- **CTA:** Garantir meu bônus
- **FRAME 0:** O mesmo desenho.

---

## Notas ao implementador

1. **Escada de preços (briefing, só para quem troca os placeholders):** alunas R$ 1.997, R$ 2.997, R$ 3.997; não-alunas R$ 2.997, R$ 3.997, R$ 4.997; a diferença entre lotes é de R$ 1.000, e alunas pagam R$ 1.000 a menos em cada lote. Nenhum desses valores pode aparecer antes de 03/11, 20h.
2. **Pendências que bloqueiam o uso:** `[[PENDENTE: data do lote]]` (virada de cada lote), `[[PENDENTE: fechamento]]`, `[[CONFIRMAR: nº de parcelas e valor]]`, `[[PENDENTE: bônus]]` (só para ESC-BON), `[[LINK: checkout por lote e segmento]]` e `[[FOTO DRA]]`.
3. **Parcelamento visível:** a pesquisa mostra que o cartão parcelado é a forma de pagamento mais escolhida; sem as parcelas em todo anúncio, a conversão cai. As peças trazem o placeholder justamente para forçar a definição.
4. **Troca de arte na virada do lote:** quando o Lote Especial vira, desativar ESC-ESP e ativar ESC-PRI na mesma hora, e trocar o preço da arte. Se o lote virar por quantidade (em vez de data), trocar "vira em [[PENDENTE: data do lote]]" por "vira quando [[CONFIRMAR: critério de virada]]" e não usar "a qualquer momento" sem ser verdade.
5. **Peças do Desafio sem equivalente:** Ad 4, 7 (tom de convite, "você está cansada de tentar né?!") cabem em `vendas_vitalicia.md`; Ad 13, 15 e 16 ("maioria dos ingressos já foi", "poucas vagas") exigem dado real de quantidade e foram excluídos; Ad 18 ("a única vez que o Desafio custa R$ 35") foi reescrito como "esta condição não se repete", sem a frase "o valor não volta a cair".
6. **Testes A/B:** (a) placar (01 e 02) contra provocação (03 e 04) na virada do Lote Especial; (b) contador de vídeo (NSR-05 e 06) contra estático (NSR-03 e 04); (c) "Entrar de vez" contra "Garantir meu acesso" em alunas.
7. **Compliance:** em nenhum anúncio há promessa de dinheiro, cura ou fim da autossabotagem. A frase "decida uma vez" é sobre a escolha, não sobre resultado.

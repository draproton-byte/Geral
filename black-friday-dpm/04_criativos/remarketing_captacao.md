# Remarketing de captação (quem viu a página e não se inscreveu)

| Campo | Definição |
|---|---|
| **Peça** | 24 anúncios de remarketing (RMK-...) + 6 legendas (LEG-RMK-01 a 06) |
| **Canal** | Meta Ads (feed, stories, reels), públicos personalizados do pixel |
| **Público** | Quem visitou a página de captura e não concluiu o cadastro. Camadas abaixo. Texto neutro de gênero também aqui (a audiência segue sendo tráfego que não comprou nada) |
| **Momento** | 13/10 a 03/11/2026; mais intenso a partir de 20/10 (Fase 2, prova e quebra de medo) |
| **Objetivo** | Voltar para a página e reservar o lugar na live de revelação (03/11, 20h, YouTube). Sem preço |
| **Consciência** | 3 a 4 (já viu a página, conhece a promessa, tem uma objeção) |
| **Modelo no Desafio** | Criativos de remarketing do Desafio (Ad 1 a 16) e legendas de remarketing do Desafio (V1 e V2) |
| **O que acontece depois do clique** | Mesma página de captura; ao se cadastrar, a pessoa vai para a página de obrigado (grupo de WhatsApp da live e diagnóstico dos 5 padrões) e sai do público de remarketing |

**Trabalho contratado:** "Eu quero uma decisão que eu só precise tomar uma vez." Em remarketing, a pessoa já se reconheceu e agora hesita. Duas objeções mandam (ver `01_PESQUISAS_INSIGHTS.md`, 1.5): **medo de comprar e não colocar em prática** (12% na ficha, 27 dos 151 quentes) e **já comprei e não funcionou** (14% na ficha, 11% no Aulão, a mais comum entre quem entrou no Desafio). Uma terceira, **dinheiro agora** (68% no Aulão), é respondida sem citar preço.

**O que mudou em relação ao Desafio, de propósito:** os remarketings do Desafio usavam falsa urgência ("seu lugar pode não estar mais lá amanhã", "lugares sumindo"). Na live do YouTube não há limite de pessoas, então nenhum anúncio daqui diz isso. A urgência verdadeira é a data (03/11, 20h) e que a condição é revelada só ao vivo.

**Link de destino:** cada anúncio e cada legenda leva uma linha "Link de destino" com o token do mapa de links (`16_MAPA_DE_LINKS.md`): captura A, canal `ads-rmkt`, ID da própria peça. Para quem visitou a captura B, duplicar o anúncio com o destino captura B (mesmo ID com sufixo `-b` `[[CONFIRMAR: convenção de sufixo no mapa de links]]`). Lista de espera: nenhuma peça deste arquivo a usa, porque tudo é pré-live e a reserva da live é gratuita e sem limite.

**Regras de política Meta aplicadas:** nenhum anúncio diz que "você viu", "você abriu" ou "você fechou" a página (não revelar o rastreio); nenhuma headline afirma condição pessoal ("você está...", "seu medo", "sua dívida"); nenhuma imagem de antes e depois ou de duas versões da mesma pessoa; nenhuma promessa de tratamento, de saúde mental ou de resultado financeiro. **Regras de arte:** as mesmas de `captacao_estaticos.md` (headline de até 60 caracteres, em no máximo 2 linhas, mínimo de 64 px; paleta de trabalho provisória escuro, branco e amarelo, sem nada que dependa só de cor, porque a identidade visual ainda não existe).

## Camadas de público e rotação

| Camada | Quem | Quando entra | Anúncios |
|---|---|---|---|
| R1 | Viu a página nas últimas 72 horas | Dias 1 a 3 depois da visita | RMK-VOLT-01 a 03, RMK-DATA-01 |
| R2 | Visitou e interagiu com os 5 perfis da página ou viu 50% do vídeo, sem cadastro | Dias 3 a 10 | RMK-IMPL-01 a 06, RMK-JA-01 a 06 |
| R3 | Visitou há mais de 7 dias | Dias 7 a 14 | RMK-DUV-01 a 03, RMK-DIN-01 a 03 |
| R4 | Iniciou o formulário e não enviou | Qualquer dia | RMK-VOLT-04 primeiro; RMK-DATA-02 depois |

Excluir sempre quem já se cadastrou e quem já está no grupo.

---

## Objeção 1: medo de não implementar (6)

### RMK-IMPL-01
- **Headline:** Comprar e não colocar em prática: como evitar?
- **Texto:** Eu sei como é. Por isso a live de 03/11 não é sobre mais conteúdo para acumular. É sobre um jeito de ficar, sem relógio correndo atrás de você. Reserve o seu lugar, sem custo.
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-IMPL-01]]
- **FRAME 0:** Pergunta em branco sobre fundo escuro, "colocar em prática" em amarelo (e em negrito), ao lado uma gaveta aberta cheia de cadernos de cursos. Para o scroll porque a gaveta é o retrato de "comprei e guardei", visto por quem já viveu isso (a objeção que mais pesa entre os mais prontos).
- **Objeção / camada:** medo de não implementar | R2

### RMK-IMPL-02
- **Headline:** E se a pressão de usar logo for o que trava?
- **Texto:** Quando existe prazo, a culpa de não ter usado a tempo trava mais do que ajuda. Na live de 03/11, às 20h, a Dra. Próton revela uma forma de entrar sem esse relógio. Veja ao vivo.
- **CTA:** Saiba mais
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-IMPL-02]]
- **FRAME 0:** Um relógio de parede parado em amarelo sobre fundo escuro e a headline em branco. Para o scroll porque o relógio parado é um símbolo imediato de alívio e a pergunta atinge um incômodo comum: a culpa por não ter dado conta.
- **Objeção / camada:** medo de não implementar | R2

### RMK-IMPL-03
- **Headline:** Você não precisa dar conta de tudo no primeiro mês.
- **Texto:** O que importa não é a velocidade, é ficar. Na live de 03/11, às 20h, veja como a Dra. Próton pensou a entrada para começar sem se perder. `[[CONFIRMAR: trilha de entrada apresentada na live]]`
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-IMPL-03]]
- **FRAME 0:** "No primeiro mês" riscado e "ficar" em amarelo grande. Para o scroll porque a frase tira uma obrigação que a pessoa se impõe, e a palavra riscada é um gesto visual que prende o olho.
- **Objeção / camada:** medo de não implementar | R2

### RMK-IMPL-04
- **Headline:** Desistir de novo ou decidir uma vez?
- **Texto:** Recomeçar cansa. Eu quero te mostrar, ao vivo, em 03/11, às 20h, o que construí para você não precisar recomeçar de novo. Reserve o seu lugar, sem custo.
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-IMPL-04]]
- **FRAME 0:** `[[FOTO DRA]]` de frente, olhando para a câmera, com a headline em duas linhas em branco; "decidir uma vez" em amarelo. Para o scroll porque o rosto humano e a pergunta em duas opções quebram o tom de anúncio e aproximam.
- **Objeção / camada:** medo de não implementar e vontade de desistir | R2

### RMK-IMPL-05
- **Headline:** Conhecimento sobra. Continuidade falta.
- **Texto:** O que trava, muitas vezes, não é saber. É continuar. A live de 03/11, às 20h, é sobre isso. Ao vivo no YouTube. Reserve o seu lugar, sem custo.
- **CTA:** Saiba mais
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-IMPL-05]]
- **FRAME 0:** "Continuidade" em amarelo enorme no centro, o resto da frase em branco menor. Para o scroll porque a palavra repete o tema das legendas de captação e dá sensação de continuidade da mensagem para quem já viu a página.
- **Objeção / camada:** medo de não implementar | R2

### RMK-IMPL-06
- **Headline:** Eu prefiro que você não compre do que compre e não viva.
- **Texto:** Por isso, antes de qualquer decisão, assista. Reserve o seu lugar na live de 03/11, às 20h. Sem custo e sem compromisso de compra.
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-IMPL-06]]
- **FRAME 0:** A frase da Dra. em duas linhas, `[[FOTO DRA]]` de lado, "não compre" em amarelo. Para o scroll porque uma vendedora que pede para você não comprar quebra a expectativa e dá confiança a quem tem medo de gastar à toa.
- **Objeção / camada:** medo de não implementar e desconfiança | R2 | **Frase intocável:** literal

---

## Objeção 2: já comprei e não funcionou (6)

### RMK-JA-01
- **Headline:** Por que tanta gente compra e não vê resultado?
- **Texto:** Antes de dizer que nada funciona, olhe para o que acontece depois da compra. É lá que a maior parte das pessoas se perde. Na live de 03/11, às 20h, a Dra. Próton mostra como pensou o que construiu para isso não se repetir.
- **CTA:** Saiba mais
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-JA-01]]
- **FRAME 0:** Tela de computador com uma pasta chamada "Cursos" e dezenas de arquivos fechados, um deles marcado em amarelo, headline por cima. Para o scroll porque a pasta cheia de arquivos nunca abertos é um retrato reconhecível, e a pergunta fala de um fenômeno, não da pessoa.
- **Objeção / camada:** já comprei e não funcionou | R2

### RMK-JA-02
- **Headline:** O problema pode nunca ter sido o curso.
- **Texto:** Pode ter sido aplicar sem apoio. Na live de 03/11, às 20h, veja o que a Dra. Próton construiu para ninguém ter que aplicar sem acompanhamento. Reserve o seu lugar, sem custo.
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-JA-02]]
- **FRAME 0:** "nunca ter sido o curso" em amarelo e, ao fundo, uma chave de fenda ao lado de um móvel montado pela metade. Para o scroll porque a imagem mostra o que acontece quando se aplica sem manual nem apoio, e reverte uma culpa antiga (a de ter falhado) e abre uma explicação diferente.
- **Objeção / camada:** já comprei e não funcionou | R2

### RMK-JA-03
- **Headline:** Curso comprado. Faltou alguém ao lado depois.
- **Texto:** O Clube Secreto existe para isso: protocolo guiado de 21 dias por ciclo, aula ao vivo toda terça e suporte no WhatsApp. Em 03/11, às 20h, a Dra. Próton revela como isso, junto com o que ela já criou, vira uma decisão só.
- **CTA:** Saiba mais
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-JA-03]]
- **FRAME 0:** Duas cadeiras, uma vazia em amarelo, headline em branco. Para o scroll porque a cadeira vazia é a imagem do "faltou alguém" e o amarelo marca onde ninguém acompanhou.
- **Objeção / camada:** já comprei e não funcionou | R2

### RMK-JA-04
- **Headline:** Não é falta de disciplina. É falta de alguém do seu lado.
- **Texto:** Quando se aplica sem apoio, o padrão que se quer mudar é o mesmo que sabota a mudança. Veja ao vivo, em 03/11, às 20h, a forma que a Dra. Próton construiu para quem cansou de recomeçar.
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-JA-04]]
- **FRAME 0:** "Não é falta de disciplina." em branco; "É falta de alguém do seu lado." em amarelo. Para o scroll porque desfaz o rótulo de indisciplina, que muita gente se aplica há anos.
- **Objeção / camada:** já comprei e não funcionou | R2

### RMK-JA-05
- **Headline:** Tentar de tudo e a ficha não cair: por quê?
- **Texto:** "A ficha caiu" é o que muita gente diz quando o padrão enfim aparece. Se ainda não caiu, o diagnóstico (que abre depois do cadastro) mostra qual dos 5 padrões está por trás. Depois, a live de 03/11, às 20h.
- **CTA:** Descobrir meu padrão
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-JA-05]]
- **FRAME 0:** Uma ficha de fliperama em amarelo no ar, headline em branco. Para o scroll porque a ficha é um objeto reconhecível (e é a senha do glossário da base que já esteve nas aulas).
- **Objeção / camada:** já comprei e não funcionou | R2 | **Glossário:** "a ficha caiu"

### RMK-JA-06
- **Headline:** Menos conteúdo. Mais passo a passo.
- **Texto:** Na live de 03/11, às 20h, a Dra. Próton mostra como transformar tudo o que construiu em um caminho com continuidade, e não mais uma pasta para nunca abrir. `[[CONFIRMAR: trilha de entrada apresentada na live]]`
- **CTA:** Saiba mais
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-JA-06]]
- **FRAME 0:** "conteúdo" riscado e "passo a passo" em amarelo. Para o scroll porque é uma promessa de fim da sobrecarga, que quem já acumulou cursos reconhece.
- **Objeção / camada:** já comprei e não funcionou | R2

---

## Reconhecimento: "você voltou" (4)

Nenhum destes anúncios revela o rastreio ("você viu", "você abriu", "você fechou"). Falam do assunto que volta, não da pessoa que voltou.

### RMK-VOLT-01
- **Headline:** Alguns assuntos voltam até serem decididos.
- **Texto:** A live de revelação é dia 03/11, às 20h, ao vivo no YouTube. Reserve o seu lugar, sem custo.
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-VOLT-01]]
- **FRAME 0:** A frase em branco, grande, num fundo escuro; "voltam" em amarelo e em negrito. Para o scroll porque é uma frase sobre o que se repete na cabeça, que provoca uma pausa curiosa.
- **Objeção / camada:** hesitação | R1

### RMK-VOLT-02
- **Headline:** Adiar a decisão também é uma decisão.
- **Texto:** Adiar costuma trazer o mesmo assunto de volta. A live de 03/11, às 20h, ao vivo no YouTube, é uma forma de ouvi-lo agora. Sem custo para reservar.
- **CTA:** Saiba mais
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-VOLT-02]]
- **FRAME 0:** Um post-it com a palavra "depois" riscada e a palavra "decisão" em amarelo e em negrito ao lado. Para o scroll porque o post-it é um objeto de casa e o risco sobre "depois" cria a pergunta sobre o que vem no lugar.
- **Objeção / camada:** hesitação | R1

### RMK-VOLT-03
- **Headline:** Daqui a um ano, o que você vai querer ter decidido hoje?
- **Texto:** A decisão de hoje é pequena: assistir. A live é em 03/11, às 20h.
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-VOLT-03]]
- **FRAME 0:** Uma estrada que se estende até o horizonte, com uma placa "um ano" em amarelo (uma única imagem, sem pessoas e sem duas versões de ninguém). Para o scroll porque a estrada cria uma conversa entre o hoje e o amanhã sem mostrar ninguém.
- **Objeção / camada:** hesitação | R1

### RMK-VOLT-04
- **Headline:** Falta só um clique para entrar na live.
- **Texto:** Reservar o lugar na live de 03/11, às 20h, não custa nada, e o aviso chega no seu WhatsApp quando a transmissão começar.
- **CTA:** Concluir meu cadastro
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-VOLT-04]]
- **FRAME 0:** "Falta só" em branco e "um clique" em amarelo, com um botão estilizado pela metade. Para o scroll porque a ideia de "quase lá" incomoda e fala com quem preencheu e não enviou sem dizer que foi visto.
- **Objeção / camada:** abandono de formulário | R4

---

## Dúvida e confiança (3)

### RMK-DUV-01
- **Headline:** E se for diferente de tudo o que você já viu?
- **Texto:** Mais de 70 mil alunos em 44 países e 1,4 milhão de seguidores. Você não precisa acreditar em mim agora. Só precisa assistir, ao vivo, em 03/11, às 20h.
- **CTA:** Saiba mais
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-DUV-01]]
- **FRAME 0:** Mapa-múndi simples com 44 pontos amarelos, headline em branco por cima. Para o scroll porque o mapa dá escala visual a um número difícil de imaginar e transmite credibilidade em um segundo.
- **Objeção / camada:** medo de não funcionar para mim, não confio facilmente | R3

### RMK-DUV-02
- **Headline:** Desconfiar é saudável. Assista antes de decidir.
- **Texto:** A live de revelação é para ver tudo, ouvir a Dra. Próton e só depois decidir. Dia 03/11, às 20h, ao vivo no YouTube. Sem custo e sem compromisso de compra.
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-DUV-02]]
- **FRAME 0:** "Desconfiar" em amarelo, enorme, com a headline em volta. Para o scroll porque a frase dá razão à desconfiança em vez de combatê-la.
- **Objeção / camada:** desconfiança | R3

### RMK-DUV-03
- **Headline:** Da periferia do interior de SP a mais de 70 mil alunos.
- **Texto:** Criada pelos avós, filha de mãe solo, a Dra. Próton trabalhou em telemarketing, vendeu cartão e foi camelô. Hoje conduz uma comunidade com mais de 70 mil alunos em 44 países. Conheça, em 03/11, às 20h, o que ela construiu.
- **CTA:** Saiba mais
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-DUV-03]]
- **FRAME 0:** `[[FOTO DRA]]` com uma foto de infância pequena ao lado (se houver autorização), headline em branco. Para o scroll porque a história de origem cria identificação com a base de 45+ de baixa e média renda.
- **Objeção / camada:** desconfiança | R3 | **Fato:** guia, seção 8

---

## Objeção 3: dinheiro agora (3)

Sem citar preço. Respondem com o que é verdade hoje: reservar não custa nada e a condição inteira é mostrada ao vivo.

### RMK-DIN-01
- **Headline:** Reservar o lugar na live não custa nada.
- **Texto:** Você não precisa decidir nada hoje. Reserve, assista em 03/11, às 20h e decida só depois de ver a condição completa, inclusive as opções de parcelamento. `[[CONFIRMAR: parcelamento anunciado na live]]`
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-DIN-01]]
- **FRAME 0:** "Não custa nada." em letras gigantes, amarelas, sobre fundo escuro. Para o scroll porque responde, em 3 palavras, à objeção número 1 da base.
- **Objeção / camada:** não tenho o dinheiro agora | R3

### RMK-DIN-02
- **Headline:** Quanto está custando continuar no mesmo lugar?
- **Texto:** Cada recomeço que não vai para a frente já tem um custo. Na live de 03/11, às 20h, a Dra. Próton faz essa conta ao vivo. Venha ver antes de decidir.
- **CTA:** Saiba mais
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-DIN-02]]
- **FRAME 0:** Uma calculadora com a tela em branco e a headline em branco sobre fundo escuro, "custando" em amarelo. Para o scroll porque a calculadora vazia convida a pessoa a fazer a conta, e fala de custo sem citar preço.
- **Objeção / camada:** não tenho o dinheiro agora | R3 | **Origem:** "conta do custo de ficar no mesmo lugar" (ver `antecipacao_e_aquecimento.md`)

### RMK-DIN-03
- **Headline:** Antes de decidir que não dá, veja a condição inteira.
- **Texto:** A revelação é ao vivo, em 03/11, às 20h, no YouTube. Quem assiste decide com a informação toda, não com o palpite. Reserve o seu lugar, sem custo.
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-DIN-03]]
- **FRAME 0:** "Antes de decidir que não dá," em branco; "veja a condição inteira." em amarelo. Para o scroll porque segura a resposta automática do "não" até o momento da informação.
- **Objeção / camada:** não tenho o dinheiro agora | R3 | **Origem:** Ad 12 do Desafio, sem o preço

---

## Data real (2)

### RMK-DATA-01
- **Headline:** 03/11, às 20h. Ao vivo. Você vai estar?
- **Texto:** A revelação acontece ao vivo no YouTube. Reserve o seu lugar agora e receba o aviso no WhatsApp assim que a transmissão começar.
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-DATA-01]]
- **FRAME 0:** "03/11" em amarelo gigante, o resto em branco menor. Para o scroll porque a data é o elemento visual mais forte e funciona para quem só olha por 2 segundos.
- **Objeção / camada:** data | R1
- **Nota:** o texto não afirma nem nega replay (`[[PENDENTE: replay]]`).

### RMK-DATA-02
- **Headline:** O aviso da live chega no WhatsApp. Falta o cadastro.
- **Texto:** Cadastre-se para reservar o seu lugar em 03/11, às 20h. Depois do cadastro, o diagnóstico dos 5 padrões já fica disponível.
- **CTA:** Reservar meu lugar
- Link de destino: [[LINK: captura A | ads-rmkt | RMK-DATA-02]]
- **FRAME 0:** Um convite estilizado em amarelo (sem preço), a palavra "ao vivo" em branco. Para o scroll porque o convite é um objeto de desejo reconhecido e já foi usado na captação do Desafio.
- **Objeção / camada:** hesitação | R4

---

## Legendas de remarketing (6)

### LEG-RMK-01 | Reconhecimento + data | Modelo: V1 do Desafio

**Frame 0 do par:** RMK-DATA-01 (a data "03/11" em amarelo gigante).

Link de destino: [[LINK: captura A | ads-rmkt | LEG-RMK-01]]

Reservar o lugar na live de revelação de 03/11, às 20h, não custa nada.

Eu vou estar ao vivo no YouTube pra mostrar tudo o que construí pra quem cansou de recomeçar.

Depois do cadastro, faça o diagnóstico dos 5 padrões, descubra qual deles pesa mais e chegue sabendo o que quer ouvir de mim.

Sem custo. Sem compromisso de compra.

Clique em "Saiba mais" e reserve o seu lugar.

### LEG-RMK-02 | Confronto | Modelo: V2 do Desafio

**Frame 0 do par:** RMK-IMPL-04 (a pergunta "Desistir de novo ou decidir uma vez?").

Link de destino: [[LINK: captura A | ads-rmkt | LEG-RMK-02]]

Recomeçar cansa. Decidir uma vez e ficar é outra conversa.

Eu não vou te dizer que é fácil. Vou te dizer que é possível decidir uma vez e ficar.

Dia 03/11, às 20h, ao vivo no YouTube.

Venha me ouvir: clique em "Saiba mais" e cadastre-se.

### LEG-RMK-03 | Medo de não implementar

**Frame 0 do par:** RMK-IMPL-01 (pergunta com a gaveta cheia de cadernos).

Link de destino: [[LINK: captura A | ads-rmkt | LEG-RMK-03]]

"Tenho medo de comprar e não colocar em prática."

Se essa é a sua frase, eu entendo. 15% das pessoas que fizeram o diagnóstico do meu Desafio disseram o mesmo quando perguntei o que as impedia de comprar.

Por isso a live de revelação do dia 03/11, às 20h, não é sobre acumular mais conteúdo. É sobre uma forma de ficar, sem prazo pra dar conta.

Eu prefiro que você não compre do que compre e não viva. Por isso, antes de qualquer decisão, assista.

Reserve o seu lugar em "Saiba mais". Não custa nada.

### LEG-RMK-04 | Já comprei e não funcionou

**Frame 0 do par:** RMK-JA-01 (tela com a pasta "Cursos" e um arquivo marcado).

Link de destino: [[LINK: captura A | ads-rmkt | LEG-RMK-04]]

"Já comprei outras coisas antes e não funcionaram."

Foi a resposta mais comum de quem entrou no meu último Desafio quando perguntei o que quase impediu a compra.

Pode não ter sido o curso. Pode ter sido aplicar sem apoio. Por isso eu construí um caminho com acompanhamento.

Dia 03/11, às 20h, ao vivo no YouTube, eu mostro como ele funciona.

O cadastro é gratuito: clique em "Saiba mais".

### LEG-RMK-05 | Dinheiro agora

**Frame 0 do par:** RMK-DIN-01 ("Não custa nada." em letras gigantes).

Link de destino: [[LINK: captura A | ads-rmkt | LEG-RMK-05]]

68% de mais de 7 mil pessoas apontaram a mesma objeção: "não tenho o dinheiro disponível agora".

Foi a que mais apareceu nas minhas pesquisas. Por isso eu te peço só uma coisa hoje: reserve o seu lugar na live. Não custa nada.

Dia 03/11, às 20h, você vê a condição inteira, com as opções de parcelamento, e decide só depois.

Clique em "Saiba mais".

`[[CONFIRMAR: parcelamento anunciado na live]]`

### LEG-RMK-06 | Confiança e origem

**Frame 0 do par:** RMK-DUV-03 (a Dra. com foto de infância).

Link de destino: [[LINK: captura A | ads-rmkt | LEG-RMK-06]]

Fui criada pelos meus avós, na periferia do interior de São Paulo. Filha de mãe solo.

Trabalhei em telemarketing, vendi cartão e fui camelô.

Hoje, mais de 70 mil alunos em 44 países já passaram pelo que eu construí.

Não é pra você acreditar em mim agora. É pra você assistir.

Dia 03/11, às 20h, ao vivo no YouTube.

Clique em "Saiba mais" e reserve o seu lugar, sem custo.

---

## Notas ao implementador

1. **Dados usados:** 15% em LEG-RMK-03 é 617 de 4.032 respostas ("tenho medo de comprar e não colocar em prática") na pergunta "o que impede de comprar" do diagnóstico do Desafio (a ficha de interesse deu 12% e o Aulão 8%, mas a natureza da ficha ainda precisa de confirmação, ver `01_PESQUISAS_INSIGHTS.md`, quadro de fontes; por isso a legenda usa o diagnóstico do Desafio). "A resposta mais comum" em LEG-RMK-04 vem do diagnóstico do Desafio (1.040 de 4.032, pergunta sobre o que quase impediu a compra). "A objeção que mais apareceu" em LEG-RMK-05 vem do Aulão (68%) e da ficha (30%).
2. **Dependências:** `[[FOTO DRA]]`, `[[CONFIRMAR: trilha de entrada apresentada na live]]` (RMK-IMPL-03 e RMK-JA-06), `[[CONFIRMAR: parcelamento anunciado na live]]` (RMK-DIN-01 e LEG-RMK-05), `[[PENDENTE: replay]]` (nenhuma peça afirma nem nega), autorização de imagem para a foto de infância (RMK-DUV-03).
3. **Peças do Desafio sem equivalente (e por quê):** Ads 3, 6, 7, 13 e 15 do Desafio ("lugares sumindo", "lote pode virar", preço do ingresso) dependiam de preço e de escassez que não existe na captação da Black. Ads 10, 12 e 14 (âncora da mentoria individual, garantia, bônus) ficam para as peças pós-live, em `vendas_vitalicia.md`.
4. **Testes sugeridos:** teste 1, RMK-IMPL-01 contra RMK-JA-01, para saber qual das duas objeções responde melhor; teste 2, RMK-VOLT-01 como controle em R1; teste 3, com foto da Dra. contra sem foto (RMK-IMPL-04 e RMK-IMPL-02).
5. **UTMs:** `utm_content` com o ID (ex.: RMK-IMPL-01) e `utm_term` com a camada (R1 a R4).
6. **Frequência:** limitar a 3 impressões por dia por pessoa. Trocar o criativo de cada camada a cada 5 dias para evitar fadiga.
7. **Destino e CTA:** todos os anúncios levam à mesma página de captura; os botões "Reservar meu lugar", "Concluir meu cadastro" e "Descobrir meu padrão" são textos de arte e devem ser alinhados ao botão do formulário da captura A, que hoje diz "Quero meu lugar e meu diagnóstico" `[[CONFIRMAR: texto final do botão da captura A]]`. No Meta Ads usar o botão nativo "Saiba mais" ou "Cadastre-se".

## Links desta peça

| ID da peça | Token | O que o link faz | Quem cria |
|---|---|---|---|
| RMK-IMPL-01 | `[[LINK: captura A | ads-rmkt | RMK-IMPL-01]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-IMPL-02 | `[[LINK: captura A | ads-rmkt | RMK-IMPL-02]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-IMPL-03 | `[[LINK: captura A | ads-rmkt | RMK-IMPL-03]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-IMPL-04 | `[[LINK: captura A | ads-rmkt | RMK-IMPL-04]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-IMPL-05 | `[[LINK: captura A | ads-rmkt | RMK-IMPL-05]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-IMPL-06 | `[[LINK: captura A | ads-rmkt | RMK-IMPL-06]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-JA-01 | `[[LINK: captura A | ads-rmkt | RMK-JA-01]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-JA-02 | `[[LINK: captura A | ads-rmkt | RMK-JA-02]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-JA-03 | `[[LINK: captura A | ads-rmkt | RMK-JA-03]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-JA-04 | `[[LINK: captura A | ads-rmkt | RMK-JA-04]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-JA-05 | `[[LINK: captura A | ads-rmkt | RMK-JA-05]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-JA-06 | `[[LINK: captura A | ads-rmkt | RMK-JA-06]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-VOLT-01 | `[[LINK: captura A | ads-rmkt | RMK-VOLT-01]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-VOLT-02 | `[[LINK: captura A | ads-rmkt | RMK-VOLT-02]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-VOLT-03 | `[[LINK: captura A | ads-rmkt | RMK-VOLT-03]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-VOLT-04 | `[[LINK: captura A | ads-rmkt | RMK-VOLT-04]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-DUV-01 | `[[LINK: captura A | ads-rmkt | RMK-DUV-01]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-DUV-02 | `[[LINK: captura A | ads-rmkt | RMK-DUV-02]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-DUV-03 | `[[LINK: captura A | ads-rmkt | RMK-DUV-03]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-DIN-01 | `[[LINK: captura A | ads-rmkt | RMK-DIN-01]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-DIN-02 | `[[LINK: captura A | ads-rmkt | RMK-DIN-02]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-DIN-03 | `[[LINK: captura A | ads-rmkt | RMK-DIN-03]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-DATA-01 | `[[LINK: captura A | ads-rmkt | RMK-DATA-01]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| RMK-DATA-02 | `[[LINK: captura A | ads-rmkt | RMK-DATA-02]]` | Traz de volta à página de captura para concluir o cadastro e reservar o lugar na live de 03/11 | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| LEG-RMK-01 | `[[LINK: captura A | ads-rmkt | LEG-RMK-01]]` | Mesmo destino, quando a legenda roda como anúncio independente | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| LEG-RMK-02 | `[[LINK: captura A | ads-rmkt | LEG-RMK-02]]` | Mesmo destino, quando a legenda roda como anúncio independente | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| LEG-RMK-03 | `[[LINK: captura A | ads-rmkt | LEG-RMK-03]]` | Mesmo destino, quando a legenda roda como anúncio independente | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| LEG-RMK-04 | `[[LINK: captura A | ads-rmkt | LEG-RMK-04]]` | Mesmo destino, quando a legenda roda como anúncio independente | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| LEG-RMK-05 | `[[LINK: captura A | ads-rmkt | LEG-RMK-05]]` | Mesmo destino, quando a legenda roda como anúncio independente | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |
| LEG-RMK-06 | `[[LINK: captura A | ads-rmkt | LEG-RMK-06]]` | Mesmo destino, quando a legenda roda como anúncio independente | Web designer (página); Tráfego (encurtador `bfp-ads-rmkt`) |

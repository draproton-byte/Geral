# Captura A: diagnóstico primeiro

**Peça:** Página de captura A (diagnóstico dos 5 perfis acima da dobra)
**Canal:** Página (tráfego pago frio e morno, bio, grupos, e-mail de captação)
**Público:** Quem "não sabe o que a trava" (29% a 40% da base nas pesquisas), tráfego frio, Aulão sem compra, quem conhece a Dra. há menos de 1 mês (cerca de 44% do Aulão)
**Momento:** Fase 1 (Reconhecimento), 13/10 a 19/10, e segue no ar até 03/11, 20h
**Objetivo:** Cadastro (nome, e-mail, WhatsApp) para a live de revelação de 03/11, às 20h, e entrada no diagnóstico dos 5 perfis na página de obrigado
**Consciência:** 1 a 3 (sente a dor, ainda não sabe nomear, ainda não pensa em solução)
**Trabalho contratado:** "Eu quero entender o que me faz recomeçar" (porta de entrada) e, adiante, "uma decisão que eu só precise tomar uma vez" (a oferta)
**Modelo no Desafio:** Página de Vendas do Desafio A Nova Realidade (14 blocos), página de captura do Aulão (só e-mail e telefone) e Teste de Bloqueios (diagnóstico, 5 resultados)
**Regra desta peça:** nenhum preço, nenhum valor de lote. A condição é "revelada ao vivo".

> Como ler: cada bloco traz **Copy** (texto que vai para a página, na hierarquia em que deve aparecer), **Função** (uma linha do porquê) e, quando existe, a **Microcopy**.
> Placeholders no formato do guia: `[[PENDENTE: ...]]`, `[[CONFIRMAR: ...]]`, `[[LINK: destino | canal | ID da peça]]`, `[[DEPOIMENTO REAL]]`, `[[FOTO DRA]]`.

---

## Decisão de abertura: o que vai acima da dobra

O Desafio vendia noite de aula. A Black vende uma decisão que a pessoa ainda não sabe que precisa tomar. Por isso, nesta versão a primeira tela mostra o **diagnóstico** (os 5 perfis), não o catálogo. A oferta (Vitalícia) aparece só na linha de apoio e no bloco "O que acontece em 03/11".

Primeira tela, de cima para baixo (mobile, 375 px):

1. Tarja de contagem (fixa)
2. Pré-título
3. Headline principal
4. Subtítulo
5. Os 5 perfis em chips tocáveis (cada um abre 2 linhas de espelho, sem sair da página)
6. Formulário (nome, e-mail, WhatsApp) e botão
7. Microcopy de risco zero

---

## Bloco 00: Tarja de contagem (fixa no topo, acompanha a rolagem)

**Copy, 4 estados** (a ferramenta troca o estado pela data; relógio em tempo real)

Estado 1, de 13/10 até 02/11 (dias antes):
`Live de revelação em {{dias}} dias e {{horas}} horas · 03/11, 20h, ao vivo no YouTube`

Estado 2, dia 03/11 até as 17h:
`É hoje. Live de revelação às 20h. Faltam {{horas}}h {{minutos}}min`

Estado 3, dia 03/11, de 17h às 20h:
`Começa em {{minutos}}min {{segundos}}s. Reserve seu lugar e receba o aviso no WhatsApp`

Estado 4, das 20h de 03/11 até o fim da live (depois do fim da live, a captura sai do ar e vira lista de espera, ver `lista_de_espera.md`):
`A live de revelação já começou. [[LINK: live YouTube | pagina | cap-a-b00]]`
Leva para: a transmissão da live no YouTube.

**Função:** urgência por data real, nunca por limite de lugares inventado. Não existe contador de lugares preenchidos na Black, porque a live não tem lotação declarada. Não usar contador fictício.

**Regras da tarja:** quando {{dias}} for 0, mostrar só as horas; quando for 1, escrever "1 dia". Em 02/11 (Finados) o texto da tarja segue neutro, sem tom de festa e sem exclamação.

---

## Bloco 01: Vender sozinho (hero + formulário)

Este bloco precisa converter mesmo que a pessoa não role a página.

**Pré-título**
`LIVE DE REVELAÇÃO · 03/11 · 20H · YOUTUBE`

**Headline principal (versão neutra de gênero, para tráfego frio)**
`Não é preguiça. É um padrão. Descubra qual dos 5 faz você recomeçar de novo.`

**Subtítulo**
`Faça o diagnóstico gratuito e reserve seu lugar na live em que a Dra. Próton abre a Vitalícia.`

**Linha de apoio (abaixo do subtítulo, corpo menor)**
`A última vez que você vai precisar recomeçar.`

**Chips dos 5 perfis (tocáveis, cada um abre um "espelho" de 2 linhas)**

| Chip | Espelho que abre ao tocar |
|---|---|
| Termostato Invisível | "Quando entra um dinheiro a mais, aparece uma conta." Parece que existe um limite que você não escolheu. |
| Autossabotagem | "Eu sei o que fazer e não faço." Você chega perto e algo te faz adiar, recomeçar ou desistir. |
| Cobrança Que Você Só Faz Com Você | "Estou funcional, mas exausta(o) por dentro." Você entrega para todo mundo e se cobra mais do que cobra de qualquer pessoa. |
| Traumas Que Ainda Decidem | "Sinto que a cada passo que dou, retrocedo." Uma frase antiga ainda decide por você na hora de agir. |
| Culpa de Querer Mais | "Eu cuido de todo mundo, mas ninguém cuida de mim." Querer mais para você vem junto com culpa. |

**Formulário**

Título do formulário: `Reserve seu lugar e libere seu diagnóstico`

| Campo | Rótulo | Placeholder | Observação |
|---|---|---|---|
| Nome | `Seu primeiro nome` | `Como devo te chamar?` | Só primeiro nome (o Aulão retirou "nome completo" e a conversão subiu na página de referência) |
| E-mail | `Seu melhor e-mail` | `seunome@email.com` | Validar domínio comum (gmail, hotmail, outlook, yahoo) e sugerir correção ("Você quis dizer gmail.com?") |
| WhatsApp | `Seu WhatsApp com DDD` | `(11) 90000-0000` | Máscara automática. Texto de ajuda: `É por aqui que eu aviso quando a live começar.` |

**Botão (principal)**
`QUERO MEU LUGAR E MEU DIAGNÓSTICO`
Leva para: a página de obrigado e diagnóstico, depois de enviar o formulário. [[LINK: obrigado e diagnóstico | pagina | cap-a-b01]]

**Botão, estado enviando**
`Reservando seu lugar...`

**Microcopy de formulário (logo abaixo do botão)**
`Gratuito. Sem compromisso de compra. Você só confirma o seu lugar e recebe o diagnóstico.`

**Microcopy de consentimento (corpo pequeno, obrigatório)**
`Ao continuar, você concorda em receber avisos da live e o seu diagnóstico por WhatsApp e e-mail do Instituto Dra. Próton, e com a Política de Privacidade. Seus dados só são usados para isso. Para sair, digite SAIR no WhatsApp ou use o link de descadastro do e-mail.` [[LINK: privacidade | pagina | cap-a-b01]]

**Mensagens de erro**
- Nome vazio: `Diga como posso te chamar.`
- E-mail inválido: `Esse e-mail parece incompleto. Confira, por favor.`
- WhatsApp inválido: `Confira o DDD e o número. Precisa ter 11 dígitos.`
- Falha de envio: `Não conseguimos reservar agora. Tente de novo em alguns segundos.`

**Função:** a pessoa que não sabe o que a trava se vê em uma das cinco frases antes de ler qualquer argumento, e o formulário pede só o mínimo.

---

## Headlines testáveis (principal + 5 alternativas)

Testar **uma variável por vez**. Ordem sugerida: A0 contra A1 contra A4 (as três com ângulos diferentes). Regra de tráfego frio: neutra de gênero ("você", "quem").

| ID | Headline | Ângulo | Consciência | Observação |
|---|---|---|---|---|
| **A0 (principal)** | Não é preguiça. É um padrão. Descubra qual dos 5 faz você recomeçar de novo. | Nome do padrão | 1 a 2 | Primeira a testar. Sustenta o Termostato, a Autossabotagem e os demais |
| A1 | Quantas vezes você já recomeçou? Descubra o padrão por trás de cada volta ao começo. | A pergunta da live | 1 a 2 | É a pergunta de abertura da live, cria continuidade |
| A2 | "Eu sei o que fazer e não faço." Veja qual dos 5 padrões está por trás disso. | Voz da audiência (Autossabotagem) | 2 | Frase real da base, em primeira pessoa e sem atribuir a ninguém |
| A3 | O dinheiro entra e some? Pode ser o Termostato Invisível. Veja se é o seu padrão. | Dor de dinheiro | 2 a 3 | 51,9% das pessoas que responderam à pesquisa de presença dizem que, quando entra dinheiro a mais, aparece uma conta ou problema (dossiê do Desafio). Não promete ganho |
| A4 | Antes de decidir qualquer coisa em 03/11, descubra o que decide por você. | Identidade e decisão | 3 | Liga o diagnóstico à live, forte para base morna |
| A5 | Se você não sabe o que te trava, comece por aqui: 5 padrões e um diagnóstico gratuito. | Para quem "não sabe" | 1 | Fala direto com os 29% a 40% que não sabem nomear |

**Subtítulos alternativos (qualquer headline)**

- S1 (padrão): `Faça o diagnóstico gratuito e reserve seu lugar na live em que a Dra. Próton abre a Vitalícia.`
- S2 (curto): `Diagnóstico gratuito e live em 03/11, às 20h. A Dra. Próton revela a condição da Vitalícia ao vivo.`
- S3 (para quem tem medo de não implementar): `Sem prazo para dar conta e sem a pressão de "preciso usar logo". A condição é revelada ao vivo em 03/11, às 20h.`

**Botões alternativos**

- BT1 (padrão): `QUERO MEU LUGAR E MEU DIAGNÓSTICO`
- BT2: `LIBERAR MEU DIAGNÓSTICO GRATUITO`
- BT3: `RESERVAR MEU LUGAR NA LIVE`
- BT4 (baixa fricção): `QUERO VER QUAL É O MEU`

---

## Bloco 02: Prova (antes de argumento)

**Copy**

Título: `Você não precisa acreditar em mim. Olhe para quem já passou por isso comigo.`

Faixa de números (4 itens em linha, rola no mobile):
- `Mais de 70 mil alunos`
- `Em 44 países`
- `1,4 milhão de seguidores`
- `Mais de 7 mil pessoas responderam à minha pesquisa sobre o que mais trava cada uma`

[[CONFIRMAR: "mais de 7 mil" refere-se às 7.323 respostas da confirmação de presença do Aulão; confirmar se pode ser citado assim em público]]

Carrossel de depoimentos (5 a 8 cards):
`[[DEPOIMENTO REAL]]` (print autorizado, sem edição, com nome ou iniciais conforme autorização)
`[[DEPOIMENTO REAL]]`
`[[DEPOIMENTO REAL]]`

Linha de transição:
`Esses relatos são de pessoas reais. Cada pessoa vive de um jeito. Não prometo o mesmo resultado para você.`

**Função:** prova antes de argumento. A última linha cumpre o compliance (relatos, não garantia).

**Regra:** nenhum depoimento que cite ganho de dinheiro, quitação de dívida ou tratamento. Aprovar só relatos de padrão ("parei de adiar", "consegui terminar o que comecei").

---

## Bloco 03: A dor que não sabe o nome

**Copy**

`Talvez você já tenha pensado que o problema é preguiça, falta de disciplina ou fraqueza. Não é.`

`Você já começou. Várias vezes. Começou, parou, recomeçou. E em algum momento passou a acreditar que o problema é você.`

`Eu perguntei para mais de 7 mil pessoas o que mais impede cada uma de ganhar o dinheiro que gostaria. A resposta que apareceu acima de todas não foi falta de vontade:`

> **"Não sei exatamente o que está me impedindo."** (40% das respostas)

`Logo depois vieram:`

> "Procrastino e não consigo colocar as coisas em prática."

`Quem não sabe o que trava tenta de tudo, e nada parece pegar. Não falta força de vontade. Tem um padrão rodando por baixo, sem você ver.`

`A boa notícia é que esse padrão tem nome. E o primeiro passo é descobrir qual é o seu.`

**Função:** faz a pessoa se reconhecer antes de qualquer oferta. O dado (40%) vem de `01_PESQUISAS_INSIGHTS.md` (Aulão, "o que impede de ganhar" e "o que impede de ter paz", ambos 40%). Não citar os 22% de procrastinação como número solto sem a fonte.

---

## Bloco 04: Transição (por que o que você tentou não pegou)

**Copy**

`Você já assistiu vídeo. Já leu livro. Já fez curso. E continuou voltando ao começo.`

`Informação não era o que faltava. O que trava não está no que você sabe. Está no que roda por baixo.`

`Por isso o primeiro passo não é aprender mais uma coisa. É descobrir qual é o seu padrão. Leva poucos minutos, é gratuito e libera na hora, logo depois que você reservar o seu lugar na live.`

`[[CONFIRMAR: tempo do diagnóstico, hoje projetado em poucos minutos; o Teste de Bloqueios do Desafio levava menos de 3 minutos]]`

**Botão (repete o do hero)**
`QUERO MEU LUGAR E MEU DIAGNÓSTICO`
Leva para: o formulário do bloco 01, na mesma página (âncora). O envio leva para obrigado e diagnóstico.

---

## Bloco 05: Os 5 perfis (bloco principal)

**Copy**

Título: `Cinco padrões fazem as pessoas recomeçarem. Qual é o seu?`

Subtítulo: `Toque no que mais parece com você. No diagnóstico, você descobre qual domina e qual vem em segundo.`

Cada perfil em um card (no mobile, carrossel de cards; botão "Ver o meu" abaixo do último):

**Card 1: Termostato Invisível**
`"Quando entra um dinheiro a mais, aparece uma conta."`
`Parece que existe um limite que você não escolheu. O dinheiro sobe, e algo faz voltar ao mesmo nível. Não é falta de esforço. É um termostato que já estava regulado antes de você.`

**Card 2: Autossabotagem**
`"Eu sei o que fazer e não faço."`
`Informação e vontade não faltam, e você chega perto. Na hora de agir, adia, muda de ideia ou recomeça do zero. Não é falta de caráter. É um padrão que age no momento exato em que você ia agir.`

**Card 3: Cobrança Que Você Só Faz Com Você**
`"Estou funcional, mas exausta(o) por dentro."`
`Você entrega, cuida e dá conta de tudo. E se cobra mais do que cobraria de qualquer pessoa. Descansar vem com a sensação de estar perdendo tempo.`

**Card 4: Traumas Que Ainda Decidem**
`"Sinto que a cada passo que dou, retrocedo."`
`Uma frase, um olhar, um medo antigo viraram regra sem você perceber. Eles não avisam. Decidem na hora em que você vai dar o passo.`

**Card 5: Culpa de Querer Mais**
`"Eu cuido de todo mundo, mas ninguém cuida de mim."`
`Querer mais para você vem junto com culpa. Você coloca todo mundo antes, e o que sobra para você é sempre o que sobra.`

[[CONFIRMAR: definições provisórias; alinhar os "espelhos" acima com a definição oficial dos 5 perfis na Imersão antes de publicar]]

**Linha de fechamento do bloco**
`Se você marcou "não sei", tudo bem. É exatamente para isso que o diagnóstico existe.`

**Botão (repete o do hero)**
`QUERO MEU LUGAR E MEU DIAGNÓSTICO`
Leva para: o formulário do bloco 01, na mesma página (âncora). O envio leva para obrigado e diagnóstico.

**Microcopy sob o botão**
`Diagnóstico de padrões de comportamento. Não é avaliação clínica e não substitui acompanhamento de um profissional de saúde.`

---

## Bloco 06: O que acontece em 03/11

**Copy**

Título: `Dia 03/11, às 20h, a Dra. Próton abre a Black Próton Vitalícia ao vivo.`

Linha de contexto: `Uma live. Uma condição. E a chance de decidir uma vez só, em vez de decidir de novo a cada recomeço.`

Passo a passo (4 itens):

1. **Você reserva o lugar e faz o diagnóstico.** Hoje, em poucos minutos. Você descobre qual padrão domina.
2. **Você recebe o aviso no WhatsApp.** Quando a live começar, o link chega para você.
3. **Às 20h, ao vivo no YouTube, a Dra. revela a condição.** O que entra na Vitalícia, como funciona e a condição de pagamento. O valor e os lotes só são revelados na live.
4. **Quem decidir entra com uma trilha de entrada.** Para não se perder entre os produtos, você recebe a ordem de por onde começar e um primeiro passo para as primeiras 48 horas.

Bloco de destaque (caixa):
`Pagamento único. Sem prazo. Sem recomeçar.`
`O Clube Secreto e tudo o que a Dra. Próton já criou, com acesso vitalício. Sem promessa de lançamentos futuros: o que existe hoje.` [[CONFIRMAR: catálogo (tudo o que a Dra. criou)]]

[[CONFIRMAR: comparação com mensalidade]]

Linha de escassez (única permitida):
`A revelação acontece ao vivo. A condição que a Dra. mostrar nessa noite não se repete. O que vier depois é outra oferta, com outro preço.`

`[[PENDENTE: replay]]` (nenhuma versão afirma nem nega replay até a decisão; as duas redações possíveis estão nas Notas ao implementador)

**Botão (repete o do hero)**
`QUERO MEU LUGAR E MEU DIAGNÓSTICO`
Leva para: o formulário do bloco 01, na mesma página (âncora). O envio leva para obrigado e diagnóstico.

**Função:** diz o que acontece e quando, sem nenhum valor. A frase "esta condição não se repete" é a correção aprovada da antiga frase da página publicada sobre a porta do pagamento único (ver `00_ESTRATEGIA_COPY_SENIOR.md`, seção 2).

---

## Bloco 07: Para quem serve e para quem não serve

**Copy, coluna "É para você se..."**
- Você já começou várias vezes e sente que volta sempre ao mesmo ponto
- Você sabe o que precisa fazer e não consegue manter
- Você já comprou curso e não colocou em prática, e não quer repetir isso
- Você quer uma decisão que só precisa tomar uma vez, em vez de decidir de novo a cada recomeço
- Você aceita estar ao vivo, em 03/11, às 20h, para ouvir a condição completa

**Copy, coluna "Não é para você se..."**
- Você procura uma solução mágica e não pretende praticar nada
- Você quer só aprender sobre o tema e não pretende entrar na experiência
- Você espera que alguém tire o seu padrão por você, sem você fazer a sua parte
- Você espera promessa de ganho de dinheiro ou de tratamento. Eu não prometo isso e não vou fingir que prometo

**Linha de fechamento**
`Eu prefiro que você não compre do que compre e não viva.`

**Função:** qualifica e desqualifica. Reduz reembolso e filtra expectativa de milagre.

---

## Bloco 08: Quem é a Dra. Próton

`[[FOTO DRA]]`

**Copy**

Título: `Quem vai conduzir a live`

`Dra. Próton`

`Mais de 70 mil alunos em 44 países e 1,4 milhão de seguidores.`

`Ela transformou a própria história em método.`

`Criada pelos avós na periferia do interior de São Paulo, filha de mãe solo, cresceu ouvindo que sucesso era coisa de rico, não de gente como ela. Trabalhou em telemarketing, vendeu cartão, foi camelô. Estudou neurociência, física quântica, espiritualidade, hipnose e reprogramação mental, e nesse processo criou um método que já passou por mais de 70 mil alunos.`

`Formada em Terapia Quântica, Hipnose Clínica, Hipnoterapia, Reprogramação Mental e PNL. Doutora Honoris Causa em Neurociência pela Academia Mundial de Letras.`

**Nota de compliance:** o trecho "Premiada duas vezes como referência nacional" da página atual não tem fonte nos materiais lidos. Fica fora até alguém comprovar. [[CONFIRMAR: "premiada duas vezes"]]

---

## Bloco 09: Conversa séria (honestidade antes da objeção)

**Copy**

`Agora eu preciso ser honesta com você.`

`Eu não prometo o fim da autossabotagem. Não prometo dinheiro, nem tratamento. O que eu faço é abrir, de uma vez, tudo o que construí para desarmar o padrão que faz você recomeçar.`

`E se você está pensando "eu já comprei outras coisas e não coloquei em prática", é uma frase que eu ouço muito. Em muitos cursos, a aplicação fica por sua conta depois. E é aí que costuma travar, porque o padrão que você quer mudar é o mesmo que atrapalha a mudança.`

`A Vitalícia não tem prazo. Sem a pressão de "preciso usar logo", o medo de pagar e não dar conta perde força. O diagnóstico de hoje é o primeiro passo, e ele é gratuito.`

**Função:** responde as duas objeções que não falam de preço (medo de não implementar, 12% da ficha; já comprei e não funcionou, 14%), sem prometer resultado.

---

## Bloco 10: FAQ de objeções

Estrutura: pergunta em negrito, resposta de 2 a 4 linhas, botão ao final.

**O diagnóstico e a live são gratuitos?**
`Sim. Reservar o lugar e fazer o diagnóstico não custa nada e não exige compra. A condição da Vitalícia só é apresentada na live, e você decide ali, se fizer sentido.`

**Quanto custa a Vitalícia?**
`O valor é revelado só ao vivo, em 03/11, às 20h. Por isso ninguém da equipe fala de preço antes. O que posso adiantar: é pagamento único, e o parcelamento é apresentado na live com todas as opções.`
[[CONFIRMAR: parcelamento será visível na revelação]]

**Eu já comprei outros cursos e não tive resultado. Por que seria diferente?**
`Eu não prometo resultado. O que eu mostro, ao vivo, é como a Vitalícia foi pensada para facilitar o continuar: sem prazo, com uma trilha de entrada e um primeiro passo pequeno.`

**Tenho medo de comprar e não colocar em prática.**
`Esse medo é muito comum, e faz sentido. Quem compra a Vitalícia recebe uma trilha de entrada, com a ordem de por onde começar e um primeiro passo para as primeiras 48 horas. E, como não tem prazo, não existe o mês que você perdeu.`

**O diagnóstico é uma avaliação clínica?**
`Não. É um diagnóstico de padrões de comportamento, baseado nas respostas que você der. Não substitui acompanhamento psicológico ou médico. Se você está em sofrimento agudo, procure um profissional de saúde. No Brasil, o CVV atende 24 horas pelo 188.`
[[CONFIRMAR: manter a menção ao CVV 188 (canal público)]]

**Preciso estar ao vivo?**
`A revelação acontece ao vivo, em 03/11, às 20h, no YouTube.` `[[PENDENTE: replay]]`

**Já sou aluna do Clube Secreto. Essa página é para mim?**
`A live é para você também. Se você já é aluna do Clube, existe uma página própria com o que muda para você. [[LINK: captura C | pagina | cap-a-b10]]`

**Hoje o dinheiro está apertado. Vale a pena?**
`Vale fazer o diagnóstico e ouvir a live, que são gratuitos. Se, depois de ouvir, o momento não for esse, tudo bem: eu prefiro que você entre quando fizer sentido. Se quiser, deixe seu nome na lista de espera. [[LINK: lista de espera | pagina | cap-a-b10]]`

**Vou receber muitas mensagens?**
`Você recebe os avisos da live e o conteúdo do diagnóstico. Para sair, é só digitar SAIR no WhatsApp ou usar o link de descadastro do e-mail.`

---

## Bloco 11: CTA final

**Copy**

`Você já começou muitas vezes. Falta descobrir o que te faz voltar ao começo.`

`Dia 03/11, às 20h, a Dra. Próton abre a Black Próton Vitalícia: a última vez que você vai precisar recomeçar.`

**Botão**
`QUERO MEU LUGAR E MEU DIAGNÓSTICO`
Leva para: o formulário do bloco 01, na mesma página (âncora). O envio leva para obrigado e diagnóstico.

**Microcopy**
`Gratuito. Sem compromisso de compra.`

`Eu desafio você. Dê alguns minutos hoje para descobrir o que decide por você.`

---

## Bloco 12: Rodapé

`Instituto Dra. Próton · Todos os direitos reservados · CNPJ: 24.450.366/0001-20 · [[LINK: privacidade | pagina | cap-a-b12]] · [[LINK: termos | pagina | cap-a-b12]]`

`Este conteúdo é educativo e não substitui acompanhamento médico ou psicológico. Os depoimentos são relatos individuais e não garantem resultados.`

---

## Estados da página depois do envio

1. **Sucesso:** redireciona para `obrigado_e_pesquisa.md` (página de obrigado + diagnóstico).
2. **Já cadastrado:** `Você já reservou seu lugar. Vou te levar para o seu diagnóstico.`
3. **Fora do ar** (depois do fim da live, 03/11, 21h56): vira `lista_de_espera.md`. Leva para: [[LINK: lista de espera | pagina | cap-a-estados]]

---

## O que mudou em relação à página de captura publicada (claude.ai artifact)

| Item | Antes | Agora | Por quê |
|---|---|---|---|
| Headline | "Por um único preço, você vai ter acesso pra sempre ao Clube Secreto e a todas as Imersões" | Diagnóstico acima da dobra (A0) | 29% a 40% não sabem nomear a dor. O catálogo vai para o bloco 06 |
| Frase sobre a porta do pagamento único se fechar sem reabrir | Presente | "Esta condição não se repete. O que vier depois é outra oferta, com outro preço." | Correção obrigatória (o briefing proíbe esse tipo de frase, guia seção 3) |
| Frase de comparação de preço com a cobrança recorrente | Presente | Removido, vira `[[CONFIRMAR: comparação com mensalidade]]` | Só existe comparação se houver cobrança recorrente |
| Frase de menor preço só para quem estiver ao vivo | Presente | Removido | Pode contradizer lotes por data. Ver nota 3 |
| "Premiada duas vezes" | Presente | Removido | Sem fonte |
| Frase que afirmava que a revelação não teria replay | Presente | `[[PENDENTE: replay]]` | Decisão não fechada |
| Botão "Quero Garantir o Menor Preço" | Presente | "Quero meu lugar e meu diagnóstico" | "Menor preço" é pressão antes de existir preço |

---

## Notas ao implementador

1. **Pendências que bloqueiam o publicar:** `[[PENDENTE: replay]]`, `[[FOTO DRA]]`, `[[DEPOIMENTO REAL]]` (mínimo 3), os links de privacidade e de termos, `[[CONFIRMAR: espelhos dos 5 perfis]]`.
2. **UTMs:** a página deve receber utm_source, utm_medium, utm_campaign, utm_content e utm_term e gravá-los junto do lead (a UTM estava vazia no Desafio). Criar uma variante por perfil de anúncio (`utm_content=perfil-termostato`, `perfil-autossabotagem`, `perfil-cobranca`, `perfil-traumas`, `perfil-culpa`, `perfil-nao-sei`). Quando a pessoa vem de um criativo de um perfil, o chip desse perfil já abre destacado.
3. **Menor preço só para quem estiver ao vivo:** o briefing não confirma que o Lote Especial é exclusivo de quem assiste ao vivo `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]`. Enquanto não houver confirmação, a copy diz apenas que "a condição é revelada ao vivo e a condição que a Dra. mostrar não se repete". Se for confirmado, voltar à frase com a regra explícita e a data do lote.
4. **Testes A/B sugeridos (ordem):** (1) A0 contra A1 contra A4 (headline); (2) botão BT1 contra BT2; (3) hero com os 5 chips contra hero com só uma linha dos 5 nomes (mede se os chips ajudam ou distraem); (4) formulário no hero contra formulário depois do bloco 03 (mede se a base fria precisa ler antes).
5. **Mobile e leitura 50+:** 40% da base tem mais de 50 anos. Fonte mínima de 17 px no corpo, headline em no máximo 3 linhas, subtítulo em no máximo 2 frases, um único botão por tela com no máximo 6 palavras e 48 px de altura, contraste alto. Chips dos perfis com toque de 44 px. Nada que dependa de cor para ser entendido.
6. **Dependências:** `obrigado_e_pesquisa.md` (destino), `diagnostico_5_perfis.md` (conteúdo do diagnóstico), `lista_de_espera.md` (estado 4), `captura_B/C/D` (variantes por segmento, mesmo formulário), `vsl_headlines_e_paginas.md` (página com vídeo).
7. **Onde o Desafio tinha uma peça e a Black não precisa dela:** o bloco "Passo a passo da solução" (5 noites) do Desafio não existe aqui, porque a captura não tem calendário de aula. Foi substituído pelo bloco 05 (5 perfis) e pelo bloco 06 (o que acontece em 03/11). Os blocos de "tudo que você recebe", "ancoragem com preço" e "valor" ficam só em `pagina_de_vendas_vitalicia.md`, depois da live.
8. **Segmentos e ângulos:** esta é a versão base. Aulão sem compra e tráfego frio entram aqui. Ex-participantes do Desafio entram em `captura_D`, alunas em `captura_C`, e quem já conhece a Dra. e a oferta em `captura_B`.
9. **Replay `[[PENDENTE: replay]]`:** redação sem replay: "A revelação acontece ao vivo, sem replay." Redação com replay: "A live fica disponível até [[PENDENTE: fechamento]]. A condição segue a data do lote." Usar uma só, depois da decisão.

---

## Links desta peça

| ID da peça | Token | O que o link faz | Quem cria |
|---|---|---|---|
| cap-a-b00 | `[[LINK: live YouTube \| pagina \| cap-a-b00]]` | Leva à transmissão quando a tarja entra no estado 4 (20h até o fim da live) | Equipe de YouTube |
| cap-a-b01 | `[[LINK: obrigado e diagnóstico \| pagina \| cap-a-b01]]` | Destino do botão principal e dos botões repetidos (blocos 04, 05, 06 e 11) depois do envio do formulário | Web designer |
| cap-a-b01 | `[[LINK: privacidade \| pagina \| cap-a-b01]]` | Abre a política de privacidade a partir do consentimento | Jurídico |
| cap-a-b10 | `[[LINK: captura C \| pagina \| cap-a-b10]]` | FAQ da aluna: leva à captura das alunas | Web designer |
| cap-a-b10 | `[[LINK: lista de espera \| pagina \| cap-a-b10]]` | FAQ do dinheiro apertado: leva à lista de espera | Web designer |
| cap-a-b12 | `[[LINK: privacidade \| pagina \| cap-a-b12]]` e `[[LINK: termos \| pagina \| cap-a-b12]]` | Rodapé: política de privacidade e termos de uso | Jurídico |
| cap-a-estados | `[[LINK: lista de espera \| pagina \| cap-a-estados]]` | Estado fora do ar: a captura passa a mostrar a lista de espera | Web designer |

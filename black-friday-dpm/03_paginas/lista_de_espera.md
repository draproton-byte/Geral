# Lista de espera

**Peça:** Página de lista de espera e microcopy (formulário, confirmação, e-mail e WhatsApp de confirmação, degrau de entrada condicional)
**Canal:** Página (destino da captura quando a live já começou; destino de quem diz "não tenho dinheiro agora"; destino de quem chega depois do fechamento)
**Público:** (1) quem chega depois do fechamento do carrinho `[[PENDENTE: fechamento]]`; (2) quem assistiu e a faixa de preço não cabe agora; (3) quem declarou na pesquisa que não tem o dinheiro disponível (68% do Aulão, 30% da ficha) ou renda até R$ 3.000 (4.761 do Aulão)
**Momento:** Desde o fim da live (03/11, 21h56) e durante todo o carrinho; antes disso, só por links diretos (FAQ da captura A e da B, pesquisa Q7)
**Objetivo:** Não perder a pessoa. Manter a lista de avisos, o diagnóstico e, se existir, o degrau de entrada. Nunca empurrar a Vitalícia para quem disse que não cabe
**Consciência:** 3 a 5
**Trabalho contratado:** "Eu quero continuar perto, sem ser pressionada, até fazer sentido para mim"
**Modelo no Desafio:** Mensagem de grupo cheio e de abertura de novos grupos do Desafio, lista de espera da BFV/26 (referência do domínio de UTM, "lista de espera") e o tom "eu prefiro que você não compre do que compre e não viva"
**Regra desta peça:** nenhum preço antes da live. Depois da live, só `[[PREÇO LOTE ALUNAS]]` ou `[[PREÇO LOTE NÃO-ALUNAS]]` se for mencionado, nunca como pressão

---

## Decisão que precisa existir antes (00_ESTRATEGIA_COPY_SENIOR.md, seção 5)

A base de renda baixa (65% do Aulão ganha até R$ 3.000, 53% da ficha se diz confortável com até R$ 297) não cabe na faixa de preço da Vitalícia (valores no 00, seção 1; nunca nesta página antes da live). Hoje a oferta tem um só caminho. A recomendação de estratégia é **definir um degrau de entrada antes de 13/10**. Esta página já vem pronta nos dois cenários, com blocos condicionais:

- `[[SE: SEM DEGRAU]]` Só lista de espera da próxima edição (aviso, sem produto).
- `[[SE: COM DEGRAU]]` Lista de espera mais um degrau de entrada (produto avulso do catálogo ou outro caminho). O texto do degrau está abaixo como **placeholder condicional**: os nomes e valores não existem e **não são inventados**.

---

## Bloco 00: Tarja (fixa, só nas fases pós-live)

**Estado A (carrinho aberto, depois da live)**
`A Black Próton Vitalícia está aberta. Se agora não cabe, deixe seu nome aqui.`

**Estado B (carrinho encerrado)** `[[PENDENTE: fechamento]]`
`O carrinho da Black Próton Vitalícia foi encerrado. Deixe seu nome para ser avisada(o) se houver nova condição.`

---

## Bloco 01: Hero

### Versão 1: quem chegou depois do fechamento

**Pré-título**
`O CARRINHO DA BLACK PRÓTON VITALÍCIA FOI ENCERRADO`

**Headline**
`Você chegou depois. Isso não é o fim da sua história.`

**Subtítulo**
`A condição que a Dra. mostrou na live de 03/11 não se repete. O que vier depois é outra oferta, com outro preço. Se você quiser ser avisada(o), deixe o seu nome na lista.`

### Versão 2: quem assistiu e o momento não permite

**Pré-título**
`SE AGORA NÃO CABE, TUDO BEM`

**Headline**
`Eu prefiro que você não compre do que compre e não viva.`

**Subtítulo**
`Se o momento não é este, não faz sentido entrar. Deixe seu nome na lista, e eu te aviso do que vier, sem pressão.`

### Versão 3: quem diz "não tenho o dinheiro disponível agora" (vem da pesquisa, Q7)

**Pré-título**
`SE O DINHEIRO NÃO DÁ AGORA`

**Headline**
`O dinheiro não dá para tudo agora. E isso não diz nada sobre quem você é.`

**Subtítulo**
`Eu não vou empurrar nada. Deixe seu nome na lista. Eu continuo com você no diagnóstico e nos avisos, e você decide quando fizer sentido.`

**Nota:** a versão 3 usa a objeção "não tenho o dinheiro disponível agora" (68% do Aulão, 30% da ficha). A regra do Comercial é: não insistir no valor, oferecer o caminho mais leve e parar.

---

## Bloco 02: Formulário

**Título**
`Deixe seu nome na lista de espera`

| Campo | Rótulo | Placeholder |
|---|---|---|
| Nome | `Seu primeiro nome` | `Como devo te chamar?` |
| E-mail | `Seu melhor e-mail` | `seunome@email.com` |
| WhatsApp | `Seu WhatsApp com DDD (opcional)` | `(11) 90000-0000` |
| Motivo (escolha única, opcional) | `O que te trouxe até aqui?` | Opções abaixo |

**Opções do campo "O que te trouxe até aqui?"**
- Cheguei depois que o carrinho fechou
- Assisti à live, mas agora não cabe no meu orçamento
- Quero entender melhor antes de decidir
- Estou esperando para decidir com a minha família
- Outro: ______

**Botão**
`QUERO FICAR NA LISTA`
Leva para: a tela de sucesso, na mesma página (e o e-mail de confirmação sai em seguida).

**Estado enviando**
`Salvando o seu nome...`

**Microcopy sob o botão**
`Gratuito. Sem compromisso. Você só recebe avisos, e pode sair a qualquer momento (digite SAIR no WhatsApp ou use o link de descadastro do e-mail).`

**Consentimento**
`Ao continuar, você concorda em receber avisos do Instituto Dra. Próton por e-mail e, se informar, por WhatsApp, e com a Política de Privacidade. Seus dados só são usados para esses avisos. Para sair, digite SAIR no WhatsApp ou use o link de descadastro do e-mail.` [[LINK: privacidade | pagina | espera-b02]]

**Mensagens de erro**
- Nome vazio: `Diga como posso te chamar.`
- E-mail inválido: `Esse e-mail parece incompleto. Confira, por favor.`
- WhatsApp inválido (se preenchido): `Confira o DDD e o número. Precisa ter 11 dígitos.`
- Falha: `Não conseguimos salvar agora. Tente de novo em alguns segundos.`

---

## Bloco 03: O que acontece com quem entra na lista

**Copy**

`Veja o que acontece quando você entra na lista:`

1. `Você recebe um e-mail de confirmação, com o seu diagnóstico dos 5 perfis, se ainda não fez. [[LINK: diagnóstico | pagina | espera-b03]]`
2. `Você recebe um aviso quando houver uma nova condição ou uma nova edição.`
3. `Você não recebe pressão de venda.`

**Linha honesta (obrigatória)**
`Eu não posso prometer que a Vitalícia volta. O que eu posso é te avisar se existir uma nova oferta, que será outra oferta, com outro preço.`

**Compliance:** nunca escrever "a Vitalícia volta no ano que vem", "você vai ter outra chance" ou "a próxima edição vai ser mais barata". A decisão sobre edições futuras não está tomada, e o briefing diz que a Vitalícia pode voltar em outra edição "com outro preço, outro catálogo e outras regras".

---

## Bloco 04: O degrau de entrada (placeholder condicional)

`[[SE: COM DEGRAU]]` (esconder o bloco inteiro se não existir degrau)

**Título**
`Se você quer começar agora, sem entrar na Vitalícia`

**Texto**
`Se a Vitalícia não cabe agora, existe um caminho de entrada: [[PENDENTE: degrau de entrada, nome]].`

`Ele serve para quem quer começar a se mexer sem decidir tudo de uma vez. [[PENDENTE: degrau de entrada, o que é (um produto avulso do catálogo? outro caminho?)]]`

`Você entra, faz o seu primeiro passo, e depois decide se quer continuar. Não é a Vitalícia: é outro caminho, com outro valor e outras regras.`

`[[PENDENTE: degrau de entrada, preço (revelado só depois da live, se for esse o caso)]]`

**Botão**
`QUERO CONHECER O CAMINHO DE ENTRADA` [[LINK: degrau de entrada | pagina | espera-b04]]
Leva para: a página do degrau de entrada `[[PENDENTE: degrau de entrada, nome]]`, que ainda não existe.

**Microcopy**
`[[PENDENTE: degrau de entrada, forma de pagamento]] [[PENDENTE: degrau de entrada, garantia]]`

**Regras do bloco**
- Não prometer que "o degrau leva à Vitalícia" nem que "quem começa pelo degrau paga menos na Vitalícia" sem decisão. `[[PENDENTE: degrau de entrada, política de crédito]]`
- Não usar o degrau como pressão ("se você não pode a Vitalícia, compre isto"). Dizer sempre que são caminhos diferentes.
- Se o degrau for um produto avulso do catálogo (por exemplo um dos 11), usar apenas o nome do produto e a função em uma linha da `pagina_de_vendas_vitalicia.md`. Não criar função nova.
- Se o degrau for "lista de espera da próxima edição", este bloco some e o texto do bloco 03 já cobre.

`[[FIM SE]]`

`[[SE: SEM DEGRAU]]`

**Título**
`Se agora não cabe, você continua com o que já é gratuito`

**Texto**
`Você continua com acesso ao seu diagnóstico, e eu continuo no seu radar com conteúdo gratuito e avisos. Quando fizer sentido, você decide.`

**Botões**
- `REFAZER MEU DIAGNÓSTICO` [[LINK: diagnóstico | pagina | espera-b04]]
- `ENTRAR NO GRUPO DE AVISOS` [[LINK: grupo geral | pagina | espera-b04]] (`[[CONFIRMAR: existe grupo de avisos gratuito fora da campanha]]`)

`[[FIM SE]]`

---

## Bloco 05: Conversa séria

**Copy**

`Agora eu preciso ser honesta com você.`

`A Vitalícia foi pensada para quem decidiu parar de recomeçar e consegue fazer essa decisão agora. Se para você o dinheiro está apertado de verdade, o melhor para você não é se endividar para entrar. Eu prefiro que você entre quando fizer sentido.`

`Isso não diz nada sobre o seu valor. Diz sobre o seu momento. E o seu momento pode mudar.`

**Função:** a resposta curta e honesta ao 68% do Aulão que diz "não tenho o dinheiro agora". Não usa culpa e não repete o preço.

---

## Bloco 06: Para quem a lista faz sentido

**Copy, "Faz sentido para você se..."**
- Você quer saber se vai ter uma nova condição
- Você precisa de mais tempo para decidir
- Você prefere decidir com a sua família

**Copy, "Não faz sentido se..."**
- Você quer entrar agora e a página de vendas ainda está aberta. Nesse caso, volte para a oferta. [[LINK: página de vendas | pagina | espera-b06]] (mostrar só se o carrinho estiver aberto)
- Você espera que a lista "garanta o menor preço". A lista não garante preço nem lugar

---

## Bloco 07: FAQ

**A lista é uma compra?**
`Não. É só um aviso. Sem pagamento e sem compromisso.`

**Vou receber promoções todo dia?**
`Não. Você recebe avisos de nova oferta e o conteúdo gratuito de sempre.`

**Se eu entrar na lista, a Vitalícia volta?**
`Não posso prometer. Se houver nova oferta, você será avisada(o), e ela será outra oferta, com outro preço.`

**Posso comprar ainda hoje?**
`[[SE: CARRINHO ABERTO]]` `Sim, o carrinho está aberto até [[PENDENTE: fechamento]]. [[LINK: página de vendas | pagina | espera-b07]]` `[[FIM SE]]`
`[[SE: CARRINHO FECHADO]]` `Não. O carrinho foi encerrado.` `[[FIM SE]]`

**Como saio da lista?**
`Em qualquer e-mail há o link para sair. No WhatsApp, é só digitar SAIR.`

---

## Bloco 08: Rodapé

`Instituto Dra. Próton · Todos os direitos reservados · CNPJ: 24.450.366/0001-20 · [[LINK: privacidade | pagina | espera-b08]] · [[LINK: termos | pagina | espera-b08]]`

---

## Microcopy e mensagens de confirmação

### Tela de sucesso (depois do envio)

**Título**
`Pronto, {{nome}}. Seu nome está na lista.`

**Texto**
`Você vai receber um e-mail de confirmação agora. Sem pressão e sem pegadinha.`

`[[SE: COM DEGRAU]]` `Se quiser começar agora, veja o caminho de entrada.` [[BOTÃO: QUERO CONHECER O CAMINHO DE ENTRADA]] [[LINK: degrau de entrada | pagina | espera-sucesso]] `[[FIM SE]]`

### E-mail de confirmação (curto, para o mesmo domínio de captação)

**Assunto:** `Seu nome está na lista, {{nome}}`

**Corpo**

`Oi, {{nome}}.`

`Seu nome está na lista de espera da Black Próton Vitalícia.`

`Isso não é uma compra e não tem pressão. É só o jeito de eu te avisar se existir uma nova condição.`

`Enquanto isso, o seu diagnóstico continua aqui:`
[[BOTÃO: VER MEU DIAGNÓSTICO]]
[[LINK: diagnóstico | email | espera-email]]

`Eu não posso prometer que a Vitalícia volta. Se houver outra oferta, será outra oferta, com outro preço.`

`Eu prefiro que você não compre do que compre e não viva.`

`Dra. Próton`

`Para sair da lista, use o link de descadastro no rodapé deste e-mail.`

### Mensagem de WhatsApp de confirmação (se houver telefone)

```
{{nome}}, seu nome está na lista de espera da *Black Próton Vitalícia*.

Isso não é uma compra e não tem pressão.

Se existir uma nova condição, eu te aviso por aqui.

Seu diagnóstico continua aqui:

[[LINK: diagnóstico | api | espera-wpp]]

Quer rever o seu padrão agora?

Digite SAIR se não quiser mais receber mensagens.
```

(Regras do guia: "para" e não "pra", uma linha em branco entre linhas, link em linha própria, termina em pergunta, rodapé SAIR, até 12 linhas.)

---

## Variantes de texto por perfil (opcional, depois de o diagnóstico existir)

Se a pessoa já tem diagnóstico, o e-mail de confirmação pode abrir com uma linha do perfil:

- Termostato: `Você me disse que o dinheiro entra e logo volta ao nível de antes. Esse padrão tem nome, e o diagnóstico continua com você.`
- Autossabotagem: `Você me disse que sabe o que fazer e não faz. Esse padrão tem nome, e o diagnóstico continua com você.`
- Cobrança: `Você me disse que está funcional, mas exausta(o) por dentro. Esse padrão tem nome, e o diagnóstico continua com você.`
- Traumas: `Você me disse que a cada passo que dá, retrocede. Esse padrão tem nome, e o diagnóstico continua com você.`
- Culpa: `Você me disse que cuida de todo mundo e ninguém cuida de você. Esse padrão tem nome, e o diagnóstico continua com você.`

---

## Notas ao implementador

1. **Decisão bloqueante:** definir se existe degrau de entrada. Sem isso, a página funciona só como lista de avisos. A recomendação de estratégia (00, seção 5) é decidir antes de 13/10.
2. **Pendências:** `[[PENDENTE: degrau de entrada, nome]]`, `[[PENDENTE: degrau de entrada, o que é]]`, `[[PENDENTE: degrau de entrada, preço]]`, `[[PENDENTE: degrau de entrada, garantia]]`, `[[PENDENTE: degrau de entrada, política de crédito]]`, `[[PENDENTE: fechamento]]`, `[[CONFIRMAR: grupo de avisos]]`.
3. **UTM:** a lista de espera tem domínio próprio na BFV/26 de referência ("lista de espera"). Registrar `utm_source=lista-de-espera` e o motivo do campo "O que te trouxe até aqui?".
4. **Quem não entra em esforço comercial:** renda até R$ 3.000 (4.761 pessoas do Aulão). Elas caem nesta lista, sem abordagem 1 a 1.
5. **Testes A/B:** (1) versão 1 contra versão 3 do hero para quem vem da pesquisa; (2) campo de motivo visível contra escondido; (3) botão "QUERO FICAR NA LISTA" contra "ME AVISE SE HOUVER".
6. **Dependências:** `obrigado_e_pesquisa.md` (Q7 manda para cá), `pagina_de_vendas_vitalicia.md` (estado "carrinho encerrado"), `06_emails` (sequência de lista de espera), `05_whatsapp_api` (mensagem de confirmação).
7. **Onde o Desafio tinha uma peça e a Black precisa de outra:** o Desafio tinha "mensagem de grupo cheio" e a abertura de novos grupos. A Black precisa de uma página própria porque o preço, e não a lotação, é a barreira, e porque a live não tem limite de lugares.

---

## Links desta peça

| ID da peça | Token | O que o link faz | Quem cria |
|---|---|---|---|
| espera-b02 | `[[LINK: privacidade \| pagina \| espera-b02]]` | Abre a política de privacidade a partir do consentimento do formulário | Jurídico |
| espera-b03 | `[[LINK: diagnóstico \| pagina \| espera-b03]]` | Leva ao diagnóstico dos 5 perfis (passo 1 do que acontece na lista) | Web designer |
| espera-b04 | `[[LINK: degrau de entrada \| pagina \| espera-b04]]` | Botão do degrau (só no cenário COM DEGRAU); destino ainda não existe | Web designer, depois da decisão do degrau |
| espera-b04 | `[[LINK: diagnóstico \| pagina \| espera-b04]]` e `[[LINK: grupo geral \| pagina \| espera-b04]]` | Cenário SEM DEGRAU: refazer o diagnóstico e entrar no grupo de avisos | Web designer e Automação |
| espera-b06 | `[[LINK: página de vendas \| pagina \| espera-b06]]` | Volta à oferta, só com o carrinho aberto | Web designer |
| espera-b07 | `[[LINK: página de vendas \| pagina \| espera-b07]]` | FAQ: comprar ainda hoje, só com o carrinho aberto | Web designer |
| espera-b08 | `[[LINK: privacidade \| pagina \| espera-b08]]` e `[[LINK: termos \| pagina \| espera-b08]]` | Rodapé: política de privacidade e termos de uso | Jurídico |
| espera-sucesso | `[[LINK: degrau de entrada \| pagina \| espera-sucesso]]` | Botão da tela de sucesso (só COM DEGRAU) | Web designer, depois da decisão do degrau |
| espera-email | `[[LINK: diagnóstico \| email \| espera-email]]` | Botão VER MEU DIAGNÓSTICO do e-mail de confirmação | Automação e Web designer |
| espera-wpp | `[[LINK: diagnóstico \| api \| espera-wpp]]` | Link do WhatsApp de confirmação para rever o diagnóstico | Automação |

# Página de verificação de números

**Peça:** Página "Validador oficial de números" (campo, resultados, orientações antigolpe)
**Canal:** Página (link no rodapé de todas as páginas, no grupo de WhatsApp, na mensagem de compra aprovada, no e-mail e no perfil)
**Público:** Qualquer pessoa que recebeu uma mensagem em nome da Dra. Próton ou do Instituto e quer saber se é verdadeira
**Momento:** Disponível desde o primeiro disparo (13/10) e reforçada nas fases 4 a 6 (03/11 em diante), quando há dinheiro e link de pagamento em jogo
**Objetivo:** Reduzir golpe e perda de confiança. Uma oferta de pagamento único de valor alto, com preço revelado ao vivo, é o cenário em que golpistas imitam a Dra. e mandam checkout falso
**Consciência:** todas
**Trabalho contratado:** "Eu quero ter certeza de que posso confiar nesta mensagem"
**Modelo no Desafio:** "Copy Página Verificação Números" (título "VALIDADOR OFICIAL DE NÚMEROS", "Evite golpes!", campo de número com DDD)

**Regra desta peça:** esta página **não copia nem expõe números pessoais**. Os números oficiais ficam na base de dados do validador e só são consultados por quem digita. Nenhum telefone aparece neste arquivo.

---

## Bloco 01: Topo

**Pré-título**
`SEGURANÇA`

**Título**
`VALIDADOR OFICIAL DE NÚMEROS`

**Subtítulo**
`Evite golpes!`

**Texto**
`Coloque o número com DDD abaixo e verifique se é um dos nossos números oficiais de suporte e avisos.`

**Campo**
Rótulo: `Número com DDD`
Placeholder: `(11) 90000-0000`
Ajuda: `Digite só os números. Pode ser o número de quem te mandou mensagem.`

**Botão**
`VERIFICAR NÚMERO`
Leva para: o resultado A, B, C ou D, na mesma página.

**Estado verificando**
`Verificando...`

---

## Bloco 02: Resultados (4 estados)

### Resultado A: número oficial

**Selo (verde)**
`✅ Este é um número oficial do Instituto Dra. Próton.` (o sentido está no texto e no ícone; a cor é só apoio)

**Texto**
`Esse número está na nossa lista de contatos oficiais de {{tipo: suporte / avisos / comercial}}.`

**Linha de cuidado**
`Mesmo assim, não envie senha, código de verificação ou dados de cartão por mensagem. Nunca pedimos isso.`

### Resultado B: número não encontrado

**Selo (vermelho)**
`⚠️ Não encontramos esse número na nossa lista oficial.`

**Texto**
`Isso pode significar que a mensagem não é nossa. Antes de fazer qualquer coisa:`

1. `Não clique em links dessa conversa.`
2. `Não faça Pix e não digite dados de cartão.`
3. `Bloqueie e denuncie o número no WhatsApp.`
4. `Fale com o nosso suporte oficial para confirmar.` [[BOTÃO: FALAR COM O SUPORTE OFICIAL]] [[LINK: suporte WhatsApp | pagina | verif-b02]]

### Resultado C: número digitado errado

**Selo (amarelo)**
`Confira o número. Ele precisa ter DDD e 11 dígitos.`

### Resultado D: erro do sistema

**Texto**
`Não conseguimos verificar agora. Tente de novo em alguns segundos ou fale com o suporte oficial.` [[LINK: suporte WhatsApp | pagina | verif-b02]]

---

## Bloco 03: Como identificar uma mensagem verdadeira (sempre visível)

**Título**
`Como saber se é de verdade`

**Orientações**

1. `A condição da Black Próton Vitalícia só é revelada na live de 03/11, às 20h, no YouTube. Quem te mandar um valor antes disso não é a equipe.`
2. `Nunca pedimos Pix para chave de pessoa física, nem para número de celular.`
3. `O pagamento é sempre feito pela nossa página oficial de checkout. Confira se o endereço do link é o nosso. [[CONFIRMAR: domínio oficial do checkout]]`
4. `Nunca pedimos senha, código de verificação ou foto de documento por mensagem.`
5. `A Dra. Próton não pede dinheiro por mensagem direta. O nosso comercial só envia o link oficial do checkout, nunca uma chave Pix.` `[[CONFIRMAR: política do comercial 1 a 1]]`
6. `Se a mensagem tem urgência exagerada ("só hoje", "responda em 10 minutos") e um link que você não reconhece, desconfie.`

**Linha de cuidado**
`Nosso comercial pode falar com você pelo WhatsApp depois que você se cadastrou. Ele sempre usa um número da nossa lista oficial. Confira antes de responder.`

`[[CONFIRMAR: o comercial 1 a 1 usa os números da lista oficial]]`

---

## Bloco 04: Denunciar

**Título**
`Recebeu uma mensagem suspeita?`

**Texto**
`Nos ajude a proteger outras pessoas. Envie o número e um print da conversa para o nosso suporte.`

**Botão**
`DENUNCIAR UM NÚMERO` [[LINK: suporte WhatsApp | pagina | verif-b04]]
Leva para: o WhatsApp oficial de suporte, para enviar o número e o print `[[CONFIRMAR: criar um formulário de denúncia; se existir, trocar o destino]]`.

**Microcopy**
`Seus dados são usados só para investigar a mensagem e ficam com o Instituto Dra. Próton.` [[LINK: privacidade | pagina | verif-b04]]

---

## Bloco 05: Rodapé

`Instituto Dra. Próton · Todos os direitos reservados · [[LINK: privacidade | pagina | verif-b05]] · [[LINK: termos | pagina | verif-b05]]`

---

## Textos para espalhar o link (curtos)

**Rodapé de e-mail**
`Recebeu uma mensagem suspeita em nosso nome? Verifique o número:`
[[LINK: verificação de números | email | verif-email]]

**Linha para grupo de WhatsApp (fixar)**
```
*Cuidado com golpes.*

Só a equipe oficial fala com você pelos números da nossa lista.

Verifique um número aqui:

[[LINK: verificação de números | wpp | verif-grupo]]
```

**Linha para compra aprovada**
`Dica de segurança: confira sempre se o número que fala com você é oficial.`
[[LINK: verificação de números | api | verif-compra]]

---

## Notas ao implementador

1. **Pendências:** lista de números oficiais (fica na base do validador, não neste arquivo), `[[CONFIRMAR: domínio oficial do checkout]]`, os links de suporte e de denúncia, `[[CONFIRMAR: o comercial usa só números da lista]]`.
2. **Dados:** não registrar o número consultado junto de dado pessoal da pessoa que consultou, a não ser para estatística de abuso. `[[CONFIRMAR: parecer jurídico sobre guardar consultas]]`
3. **O que o Desafio tinha e muda:** o modelo tinha só três linhas (título, "Evite golpes!" e instrução). Mantidas literalmente. Foram acrescentados os resultados, as orientações e o aviso específico da Black ("nenhum valor antes da live") porque o preço revelado ao vivo e o valor alto aumentam o risco de golpe.
4. **Testes A/B:** nenhum. É peça de segurança, não de conversão.
5. **Dependências:** todas as páginas (link no rodapé), `05_whatsapp_api` (fixar a mensagem no grupo), `06_emails` (rodapé).

---

## Links desta peça

| ID da peça | Token | O que o link faz | Quem cria |
|---|---|---|---|
| verif-b02 | `[[LINK: suporte WhatsApp \| pagina \| verif-b02]]` | Resultado B e D: leva ao WhatsApp oficial de suporte para confirmar | Suporte |
| verif-b04 | `[[LINK: suporte WhatsApp \| pagina \| verif-b04]]` | Botão DENUNCIAR UM NÚMERO: abre o suporte | Suporte |
| verif-b04 | `[[LINK: privacidade \| pagina \| verif-b04]]` | Microcopy da denúncia: política de privacidade | Jurídico |
| verif-b05 | `[[LINK: privacidade \| pagina \| verif-b05]]` e `[[LINK: termos \| pagina \| verif-b05]]` | Rodapé: política de privacidade e termos de uso | Jurídico |
| verif-email | `[[LINK: verificação de números \| email \| verif-email]]` | Rodapé de e-mail: leva a esta página | Web designer |
| verif-grupo | `[[LINK: verificação de números \| wpp \| verif-grupo]]` | Mensagem fixada no grupo: leva a esta página | Web designer |
| verif-compra | `[[LINK: verificação de números \| api \| verif-compra]]` | Dica na mensagem de compra aprovada: leva a esta página | Web designer |

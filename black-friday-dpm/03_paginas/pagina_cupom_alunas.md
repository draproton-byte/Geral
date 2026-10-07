# Página de cupom das alunas

**Peça:** Página de cupom ALUNAS (reconhecimento da aluna, condição própria, acesso ao checkout de alunas)
**Canal:** Página (link enviado só para a lista de alunas por e-mail, WhatsApp e grupos de alunas; também aberta depois da live)
**Público:** Alunas atuais do Clube Secreto `[[PENDENTE: contagem de alunas]]`
**Momento:** Antes da live (reconhecimento, sem preço), depois da live (condição e checkout) e depois do fechamento (encerrado). A mesma URL, três estados
**Objetivo:** (antes) confirmar que a aluna foi reconhecida e que a condição dela está reservada; (depois) levar ao checkout de alunas do lote atual sem fricção
**Consciência:** 4 a 5
**Trabalho contratado:** "Eu já estou dentro. Falta ficar para sempre."
**Modelo:** "página de cupom ALUNOS" da BFV/26, citada nos materiais de referência do projeto como exemplo de lista, tag, checkout e ListBoss próprios para alunas. **O conteúdo dessa página não está nos arquivos acessíveis**; a estrutura abaixo foi montada a partir da lógica descrita (lista própria, tag e checkout próprio) e do mecanismo do `pagina_de_vendas_vitalicia.md`. `[[CONFIRMAR: comparar com a página original se a equipe tiver acesso]]`
**Regra desta peça:** antes da live, **nenhum preço, nenhum desconto, nenhum "você paga menos"**. A condição é "revelada ao vivo". Depois da live, só `[[PREÇO LOTE ALUNAS]]`.

---

## Como funciona (resumo para a equipe)

1. A aluna recebe um link único ou chega pela página de captura C. Ela informa o e-mail da compra do Clube.
2. A ferramenta confere se o e-mail está na lista de alunas (tag) e libera um estado:
   - **Reconhecida**: mostra a tela do estado 1 (antes da live) ou do estado 2 (depois da live).
   - **Não reconhecida**: mostra a tela de ajuda.
3. Depois da live, o botão do estado 2 abre o checkout de alunas do lote atual, com o código de cupom aplicado automaticamente (ou o link de checkout próprio). `[[LINK: checkout alunas por lote]]` `[[CONFIRMAR: cupom automático ou link próprio por lote]]`

**Critério para ser "aluna":** `[[CONFIRMAR: aluna com acesso ativo? aluna com acesso encerrado também entra? quem comprou o Clube pelo Desafio (condição de golden ticket)? aluna com reembolso?]]`

---

## Tela 0: Identificação (sempre a primeira)

**Pré-título**
`PARA ALUNAS DO CLUBE SECRETO`

**Headline**
`Você já está dentro. Falta ficar para sempre.`

**Subtítulo**
`Digite o e-mail da sua compra do Clube Secreto para eu reconhecer você e liberar a sua condição.`

**Campo**
Rótulo: `E-mail da sua compra do Clube Secreto`
Placeholder: `o mesmo e-mail da sua área de membros`

**Botão**
`RECONHECER MINHA CONDIÇÃO DE ALUNA`

**Microcopy**
`Usamos o seu e-mail só para conferir que você é aluna. Seus dados ficam com o Instituto Dra. Próton e não são divulgados.` [[LINK: política de privacidade]]

**Erros**
- E-mail inválido: `Esse e-mail parece incompleto. Confira, por favor.`
- Falha: `Não conseguimos verificar agora. Tente de novo em alguns segundos.`

---

## Estado 1: Antes da live (sem preço)

**Quando:** da abertura da captação (13/10) até o início da live, 03/11, 20h.

### Tela de reconhecida

**Pré-título**
`VOCÊ FOI RECONHECIDA`

**Headline**
`Oi, {{nome}}. Eu reconheço você como aluna do Clube Secreto.`

**Texto**
`A sua condição está reservada. Ela é revelada ao vivo, em 03/11, às 20h, junto com tudo o que entra na Black Próton Vitalícia.`

`Eu não vou falar de valor antes da live. Nenhuma pessoa da equipe vai. Quando a live começar, esta mesma página mostra a sua condição e o seu botão.`

**O que acontece**

1. `Agora: você confirma sua presença na live.` (botão: CONFIRMAR MINHA PRESENÇA) [[LINK: captura_C]]
2. `03/11, 20h: a Dra. revela a condição ao vivo no YouTube.` [[LINK: página da live]]
3. `Depois da live: volte a esta página, e o seu botão de aluna aparece aqui.`

**O que muda para você (resumo, sem preço)**
- O acesso deixa de ter prazo
- Entram, junto com o Clube, os 11 produtos do catálogo atual
- Existe uma condição própria para alunas, pelos lotes

`Sem promessa de lançamentos futuros: o catálogo de hoje.`

**Linha de escassez**
`A condição que a Dra. mostrar nessa noite não se repete. O que vier depois é outra oferta, com outro preço.`

**Botões**
- `SALVAR A DATA: 03/11, 20H` [[LINK: arquivo de calendário]]
- `ENTRAR NO GRUPO DA LIVE PARA ALUNAS` [[LINK: grupo alunas]]

### Tela de não reconhecida

**Título**
`Não encontrei esse e-mail entre as alunas.`

**Texto**
`Pode ser que a sua compra tenha sido feita com outro e-mail, ou que o seu acesso já tenha acabado. Isso não é um bloqueio, é um detalhe técnico.`

`Tente de novo com outro e-mail, ou fale com o nosso suporte e eu resolvo para você.`

**Botões**
- `TENTAR OUTRO E-MAIL`
- `FALAR COM O SUPORTE` [[LINK: WhatsApp do suporte]]

**Texto de segurança**
`Seu lugar na live fica confirmado de qualquer forma.`

**Se o acesso encerrou** `[[PENDENTE: tratamento de aluna com acesso encerrado: entra como aluna? como não-aluna?]]`

---

## Estado 2: Depois da live (com valor, só depois de 20h de 03/11)

**Quando:** da revelação até o fechamento `[[PENDENTE: fechamento]]`.

### Tela de reconhecida, com a condição

**Pré-título**
`SUA CONDIÇÃO DE ALUNA`

**Headline**
`{{nome}}, aqui está a sua condição de aluna do Clube Secreto.`

**Linha de lote**
`🎟 {{lote_atual}} · aberto até [[PENDENTE: data do lote]]`

**Valor**
`[[PREÇO LOTE ALUNAS: lote atual]] à vista`
`ou em até [[PENDENTE: nº de parcelas]]x de {{parcela_alunas}} no cartão`
`Pix · Cartão · [[CONFIRMAR: boleto]]`

**Botão**
`QUERO ENTRAR DE VEZ · [[PREÇO LOTE ALUNAS]]` [[LINK: checkout alunas por lote]]

**Linha sob o botão**
`Pagamento único · acesso vitalício · [[PENDENTE: garantia]]`

**Tabela de lotes**

| Lote | Valor | Vira em |
|---|---|---|
| Lote Especial `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]` | [[PREÇO LOTE ALUNAS: Especial]] | `[[PENDENTE: data do lote]]` |
| Primeiro Lote | [[PREÇO LOTE ALUNAS: Primeiro Lote]] | `[[PENDENTE: data do lote]]` |
| Último Lote | [[PREÇO LOTE ALUNAS: Último Lote]] | `[[PENDENTE: fechamento]]` |

**Linha**
`O valor sobe a cada lote. Esta condição não se repete. O que vier depois é outra oferta, com outro preço.`

**O que você recebe**
- `O Clube Secreto, sem prazo`
- `Os 11 produtos do catálogo atual` (lista completa em `pagina_de_vendas_vitalicia.md`, bloco 06)
- `A trilha de entrada e o primeiro passo em 48 horas`
- `[[PENDENTE: bônus]]` (se houver)

**O que acontece com o que você já tem**
`[[PENDENTE: tratamento do tempo restante do acesso atual]]`
`[[PENDENTE: tratamento de quem já tem algum dos 11]]`

**Botão secundário**
`VER A PÁGINA DE VENDAS COMPLETA` [[LINK: pagina_de_vendas_vitalicia (versão alunas)]]

### Tela de não reconhecida (depois da live)

**Título**
`Não encontrei esse e-mail entre as alunas.`

**Texto**
`Você ainda pode entrar na condição para quem não é aluna, no lote atual.`

**Botão**
`VER A CONDIÇÃO` [[LINK: pagina_de_vendas_vitalicia (versão não-alunas)]]

**Texto de apoio**
`Se você é aluna e esse e-mail não foi reconhecido, fale com o suporte antes de comprar, para eu garantir a sua condição.` [[LINK: WhatsApp do suporte]]

---

## Estado 3: Carrinho encerrado

**Título**
`A condição de alunas foi encerrada.`

**Texto**
`O carrinho da Black Próton Vitalícia foi encerrado em [[PENDENTE: fechamento]]. Esta condição não se repete. O que vier depois é outra oferta, com outro preço.`

**Botão**
`ENTRAR NA LISTA DE ESPERA` [[LINK: lista_de_espera]]

---

## FAQ da página (curto)

**Por que preciso digitar o e-mail?**
`Para eu reconhecer você como aluna e mostrar a sua condição. Seu e-mail não é usado para nada além disso.`

**Quanto custa?**
`O valor só é revelado ao vivo, em 03/11, às 20h. Depois da live, ele aparece aqui.`

**A condição de aluna vale para mais de um lote?**
`Sim: existe uma condição de aluna em cada lote. O valor muda a cada lote.` `[[CONFIRMAR: escada confirmada no briefing]]`

**Não consigo acessar.**
`Fale com o suporte. [[LINK: WhatsApp do suporte]]`

---

## Notas ao implementador

1. **Antes da live, nada de preço, nem em print, nem em texto escondido (aria-label, meta description).** Revisar o HTML do estado 1.
2. **Pendências:** `[[PENDENTE: contagem de alunas]]`, `[[CONFIRMAR: critério de aluna]]`, `[[PENDENTE: tratamento do tempo restante]]`, `[[PENDENTE: tratamento de quem já tem algum dos 11]]`, `[[LINK: checkout alunas por lote]]` (3 links), `[[PENDENTE: data do lote]]`, `[[PENDENTE: fechamento]]`, `[[PENDENTE: garantia]]`, `[[PENDENTE: bônus]]`.
3. **Cupom ou link próprio:** a BFV/26 de referência usa lista, tag, checkout e ListBoss próprios para alunas. Escolher entre código de cupom aplicado no checkout comum ou link de checkout separado. Link separado reduz o erro de quem esquece o cupom.
4. **Testes A/B:** (1) estado 1 com a lista dos 11 produtos contra sem lista; (2) botão "RECONHECER MINHA CONDIÇÃO" contra "VER MINHA CONDIÇÃO".
5. **Dependências:** `captura_C_alunas_do_clube.md` (origem), `pagina_de_vendas_vitalicia.md` (versão alunas), `lista_de_espera.md`, `05_whatsapp_api` e `06_emails` (disparo segmentado com o link desta página).
6. **Onde o Desafio tinha uma peça e a Black precisa de outra:** o Desafio tinha o Golden Ticket (condição por convite no ingresso), mas não uma página de reconhecimento de aluna. Peça nova, modelada na BFV/26.
7. **Escada do briefing (só para quem implementa):** alunas 1.997 / 2.997 / 3.997, sempre R$ 1.000 abaixo das não-alunas em cada lote. Nunca no texto da página antes da live.

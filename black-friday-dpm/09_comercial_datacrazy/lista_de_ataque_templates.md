# Lista de ataque da Black: desenho das trilhas e do conteúdo

**Peça:** desenho da planilha "LISTA DE ATAQUE" da Black (abas, colunas, listas de valores, trilhas e o conteúdo de cada trilha: temperatura, objeção declarada, abertura, argumento-chave, próximo passo). **Sem nomes, telefones nem e-mails.** Quem preenche a planilha usa o identificador interno do CRM
**Canal:** planilha de trabalho do comercial (a mesma ferramenta do Desafio) sincronizada com o CRM (Data Crazy)
**Público:** time comercial e coordenação
**Momento:** montada até 02/11 e usada de 03/11 até `[[PENDENTE: fechamento]]`
**Objetivo:** que cada pessoa sem compra tenha uma trilha, uma abertura, um argumento e um próximo passo, e que o time saiba por onde começar a cada dia
**Estágio de consciência:** 2 a 5
**Trabalho contratado:** "Eu quero uma decisão que eu só precise tomar uma vez."
**Modelo no Desafio:** a planilha do Desafio "Lista de ataque, Clube Secreto (quem ainda não comprou)", listada na aba COMERCIAL de Links Úteis do Desafio como lista para envio de mensagens por cluster, e a organização em bases, segmentos e tags do Manual do Comercial (Base 1: checkout; Base 2: pesquisa por objeção; Base 3: quiz por momento)

> **Aviso sobre a fonte.** A planilha original não foi lida (o arquivo não está entre os que o Comercial consegue abrir; ele é só citado). O desenho abaixo reconstrói a lógica a partir do Manual do Comercial do Desafio (bases, segmentos, prioridades, rotina da semana) e do Banco de Templates. Se a planilha original tiver colunas que o time usa, **comparar antes de montar**.

> **Segurança e LGPD.** A planilha **nunca** contém nome, telefone, e-mail, CPF, nem resposta aberta da pessoa. Ela usa o **ID interno do CRM** (`id_crm`) e **códigos** (S1 a S3, A1 a A12, a a m, T01 a T16). O comercial abre o contato no CRM para falar. Credenciais do CRM e telefone pessoal de ninguém jamais entram na planilha. A planilha é só **estrutura**: nenhuma linha preenchida com pessoa real é guardada neste repositório. Dívida (objeção j) e acolhimento entram só como código, nunca como relato. Quem pede para parar tem a linha congelada (`status` igual a pediu para parar), sai de todas as trilhas e permanece apenas com `id_crm` e a data do pedido, para não ser contatada de novo.

---

## 1. A ESTRUTURA DA PLANILHA (ABAS)

| Aba | Para que serve |
|---|---|
| **1. Lista de ataque** | Uma linha por pessoa sem compra. É a aba de trabalho |
| **2. Trilhas** | O conteúdo de cada trilha (abertura, argumento, próximo passo). Fica fixa e consultável |
| **3. Objeções** | Matriz objeção declarada, argumento-chave, próximo passo (a a m) |
| **4. Legenda** | As listas de valores (dropdown), o significado das tags e os códigos |
| **5. Painel do dia** | Meta, volume e resultado por trilha: respondeu, objetou, pagou, travou |
| **6. Cobrança viva** | Só Pix, boleto e cartão recusado, ordenados por vencimento (a aba mais usada na noite da live) |

---

## 2. AS COLUNAS DA ABA "LISTA DE ATAQUE"

| # | Coluna | Tipo | Valores ou observação |
|---|---|---|---|
| 1 | `id_crm` | texto | ID interno do CRM. **Nunca nome, telefone ou e-mail** |
| 2 | `s_black` | lista | S1 (alunas do Clube), S2 (viveu Desafio, Imersão ou Aulão e não é do Clube), S3 (não-alunas e base fria). Quem tem mais de uma tag vale pelo primeiro da lista S1, S2, S3 |
| 3 | `trilha` | lista | T01 a T16 (seção 3) |
| 4 | `segmento` | lista | aluna ativa, aluna inativa, Desafio 5 noites, Desafio parcial, Imersão, só Aulão, ficha quente, ficha morna, ficha fria, assistiu live, inscrita sem presença, carrinho, Pix, boleto, recusada, reembolso |
| 5 | `temperatura` | lista | quente, morna, fria |
| 6 | `origem` | lista | Aulão, Desafio, Imersão, ficha, Clube, quiz, tráfego, grupo, live |
| 7 | `padrao_declarado` | lista | Termostato Invisível, Autossabotagem, Cobrança Que Você Só Faz Com Você, Traumas Que Ainda Decidem, Culpa de Querer Mais, não sei |
| 8 | `objecao_declarada` | lista | a a m (de `quebra_de_objecoes.md`), nenhuma, outra |
| 9 | `natureza_objecao_a` | lista | aperto real, prioridade, não classificada (só para objeção a) |
| 10 | `faixa_conforto` | lista | até R$ 97, R$ 98 a R$ 297, R$ 298 a R$ 500, R$ 501 a R$ 1.000, R$ 1.001 a R$ 3.000, acima de R$ 3.000, não declarada (faixas da ficha de interesse) |
| 11 | `presenca_live` | lista | ao vivo até o fim, parte, não |
| 12 | `abertura` | lista | A1 a A12 |
| 13 | `argumento_chave` | lista | código curto (seção 5) |
| 14 | `ativo` | lista | replay, resumo, manual, diagnóstico, certificado, depoimento, nenhum |
| 15 | `proximo_passo` | lista | enviar abertura, responder objeção, enviar link do lote, devolver código, atendimento humano, escalar, régua, encerrar |
| 16 | `toque_atual` | número | 0 a 5 (régua) ou 1 a 2 (evento) |
| 17 | `data_proximo_toque` | data | Dentro da janela de horário. Nunca entre 20h e 22h de 03/11 (modo escuta) |
| 18 | `janela` | lista | 7h a 8h, 16h a 17h, 19h a 22h, prazo (exceção) |
| 19 | `lote_segmento_link` | lista | Especial, Primeiro, Último, e aluna ou não. S1 recebe o lote de aluna; S2 e S3 recebem o de não-aluna (S2 paga como não-aluna até decisão contrária) |
| 20 | `vencimento_cobranca` | data e hora | Só para Pix (48 horas) e boleto (4 a 5 dias) |
| 21 | `responsavel` | lista | Quem atende |
| 22 | `status` | lista | aberta, respondeu, objetou, link enviado, pagou, recusou, reembolsou, sem retorno, pediu para parar, acolhimento |
| 23 | `motivo` | texto curto | Motivo de recusa, de reembolso ou de "não". **Sem dado pessoal** |
| 24 | `resultado` | lista | comprou, não comprou, em andamento |
| 25 | `observacao` | texto curto | Uma linha. Sem dado pessoal |

A lista de valores de `lote_segmento_link` pode trazer "Lote Especial" apenas depois de 03/11, às 21h28 `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]`.

**Ordenação padrão da aba:** primeiro `trilha` (T01, T02, T03...), depois `vencimento_cobranca` crescente (o que vence antes vem primeiro), depois `temperatura` (quente antes de fria), depois `data_proximo_toque`.

---

## 3. AS TRILHAS

Cada trilha tem uma lógica, uma temperatura, uma abertura e um próximo passo. **A ordem reflete a prioridade da noite da live e dos dias seguintes** (a de `playbook_do_dia_da_live.md`, seção 3). Uma exceção: T13 (inscrita sem presença) sai em 04/11, como diz a coluna "Quando", e os IDs não mudam. O lote do link de cada trilha segue o segmento S1, S2 ou S3.

| Trilha | Nome | S | Temperatura | Etapa | Abertura | Objeção declarada típica | Quando |
|---|---|---|---|---|---|---|---|
| **T01** | Cartão recusado | pela pessoa | Quente | Checkout | E4 (humano) | "O banco barrou" (não é objeção, é obstáculo) | 03/11, imediato |
| **T02** | Cobrança viva: Pix (vence em menos de 24 horas ou hoje) | pela pessoa | Quente | Checkout | E3a | Nenhuma (já decidiu) | Por prazo |
| **T03** | Cobrança viva: boleto | pela pessoa | Quente | Checkout | E3b | Nenhuma | Por prazo |
| **T04** | Carrinho abandonado | pela pessoa | Quente com objeção viva | Checkout | A11 e E2 | "O pagamento" ou "dar conta" | 30 min depois (às 22h, se cair entre 20h e 22h) |
| **T05** | Ficha quente que assistiu à live | S3 | Quente | Pós-live | A6 (pós-live) | d (medo de implementar), c (já comprei), i (funciona para mim) | 04/11 |
| **T06** | Aluna do Clube ativa (upgrade) | S1 | Quente | Pós-live | A1 | h (já sou do Clube) | 04/11 |
| **T07** | Desafio, cinco noites | S2 | Quente | Pós-live | A3 | d, e, a (prioridade) | 04/11 |
| **T08** | Assistiu à live e não comprou | pela pessoa | Quente | Pós-live | A9 | a, b, d, e | 04/11 e 05/11 |
| **T09** | Imersão | S2 | Quente | Pós-live | A4 | e, c | 05/11 |
| **T10** | Ficha morna | S3 | Morna | Relacionamento | A7 | a (72 pessoas), c (61), "outro" (62) | 05/11 e 06/11 |
| **T11** | Aluna do Clube inativa | S1 | Morna | Relacionamento | A2 | tempo, h | 06/11 |
| **T12** | Só Aulão, renda acima de R$ 5.000 | S2 | Morna | Relacionamento | A5 | a (prioridade, 44% dizem "sem dinheiro agora" mesmo com renda) | 06/11 em diante |
| **T13** | Inscrita sem presença | pela pessoa | Morna | Relacionamento | A12 | nenhuma declarada | 04/11 |
| **T14** | Ficha fria | S3 | Fria | Relacionamento | A8 | a (181 de 348), c (44) | 07/11 em diante |
| **T15** | Pediu reembolso | pela pessoa | Fria para venda | Escuta | A10 | Motivo livre | Imediato |
| **T16** | Sem retorno (passou pelo fim da régua, ou pelos dois toques) | pela pessoa | Fria | Conteúdo | Nenhuma | Nenhuma | Régua de conteúdo, fora da venda |

**Quem fica fora da lista de ataque (decisão de estratégia):** o Aulão com renda declarada até R$ 3.000 e **sem** compra anterior (4.761 pessoas no Aulão). Esse grupo recebe diagnóstico, resumo da live e a lista de espera (`[[PENDENTE: degrau de entrada / lista de espera]]`), mas não esforço comercial 1 a 1.

---

## 4. O CONTEÚDO DE CADA TRILHA (aba "Trilhas")

Para cada trilha, seis campos: **abertura**, **argumento-chave**, **objeção típica**, **próximo passo**, **o que não fazer**, **ativo**.

### T01. Cartão recusado

- **Abertura:** E4, toque 1, humano, em até 10 minutos.
- **Argumento-chave (AC01):** "Não foi nada do seu lado. Acontece muito com limite por compra ou bloqueio de segurança. Sua entrada continua aqui. O Pix cai na hora."
- **Próximo passo:** enviar link do lote e segmento em Pix, ou resolver o limite.
- **Não fazer:** nunca culpar a pessoa; nunca oferecer desconto.
- **Ativo:** nenhum.

### T02. Cobrança viva: Pix

- **Abertura:** E3a, toque 1 em 2 a 3 horas (janela de horário), toque 2 em 8 a 10 horas antes de vencer.
- **Argumento-chave (AC02):** "Está aqui o mesmo código, é só pagar que sua entrada confirma na hora."
- **Próximo passo:** devolver o código. Nada de argumento de venda.
- **Não fazer:** nunca repetir os benefícios; nunca prometer preço se o lote virar (`[[CONFIRMAR: lote travado]]`).
- **Ativo:** nenhum.

### T03. Cobrança viva: boleto

- **Abertura:** E3b, toque 1 na manhã seguinte, toque 2 na manhã do vencimento.
- **Argumento-chave (AC03):** "Seu boleto está aberto. Não deixa para o último dia, porque pode levar até 3 dias úteis para compensar." `[[CONFIRMAR: prazo de compensação]]`
- **Próximo passo:** devolver o boleto.
- **Não fazer:** nunca confundir com Pix.

### T04. Carrinho abandonado

- **Abertura:** A11 sem link.
- **Argumento-chave (AC04, duas ramificações):** se "pagamento": parcelamento e garantia (letras l e m); se "dar conta": trilha e sem prazo (letras d e e).
- **Próximo passo:** link do lote, **só depois da resposta**. Sem resposta ao toque 2, sem link: só "me responde link" e a saída honrosa.
- **Não fazer:** nunca mandar link antes de descobrir o que travou, nem para quem está em silêncio.
- **Número a anotar:** a proporção entre "pagamento" e "dar conta".

### T05. Ficha quente que assistiu à live

- **Abertura:** A6 pós-live.
- **Argumento-chave (AC05):** "O que você escreveu na ficha ainda é o que mais pesa? A Vitalícia responde esse medo por construção: sem prazo, uma trilha, primeiro passo em 48 horas."
- **Próximo passo:** link do lote no sinal verde.
- **Não fazer:** nunca citar valor na primeira mensagem.

### T06. Aluna do Clube ativa

- **Abertura:** A1.
- **Argumento-chave (AC06):** "O que você já fez conta. Falta ficar para sempre."
- **Próximo passo:** `[[CONFIRMAR: o que acontece com o plano atual]]`, depois o link do lote de aluna.
- **Não fazer:** nunca prometer crédito do período pago sem confirmação.

### T07. Desafio, cinco noites

- **Abertura:** A3.
- **Argumento-chave (AC07):** "Você atravessou as cinco noites. O que você ainda não terminou? A Vitalícia é o que a Dra. pediu: não travar o processo."
- **Próximo passo:** pergunta de ponte ("o que você quer que mude primeiro?"), depois link.
- **Ativo:** certificado do Desafio (se ainda não entregue).

### T08. Assistiu à live e não comprou

- **Abertura:** A9.
- **Argumento-chave (AC08):** definido pela resposta dela (a, b, d ou e).
- **Próximo passo:** responder a objeção em no máximo duas respostas e encerrar.
- **Ativo:** resumo ou replay.

### T09. Imersão

- **Abertura:** A4.
- **Argumento-chave (AC09):** "Você já se reconheceu em um dos cinco padrões. O próximo passo é trabalhar nele todo mês, sem prazo."
- **Próximo passo:** associar o padrão ao ciclo do Clube.

### T10. Ficha morna

- **Abertura:** A7.
- **Argumento-chave (AC10):** "Entre dinheiro, emocional e relacionamento, o que mais tira o seu sono hoje?" (qualificar antes).
- **Próximo passo:** conversar, ofertar só no verde.
- **Atenção:** a faixa de conforto declarada é baixa (R$ 98 a R$ 297: 155; R$ 298 a R$ 500: 78). Não force.

### T11. Aluna do Clube inativa

- **Abertura:** A2.
- **Argumento-chave (AC11):** "Senti sua falta. A Vitalícia tira o prazo que talvez tenha te feito parar."
- **Próximo passo:** ouvir o motivo da pausa.

### T12. Só Aulão, renda acima de R$ 5.000

- **Abertura:** A5.
- **Argumento-chave (AC12):** "Quando entra um dinheiro a mais, o que costuma aparecer? É o Termostato Invisível. A conta de continuar parada."
- **Próximo passo:** diagnóstico, depois pergunta de prioridade (letra a, natureza prioridade).
- **Atenção:** quem tem renda e diz "sem dinheiro agora" geralmente está dizendo "não é prioridade". A resposta é a conta da Dra., nunca desconto.

### T13. Inscrita sem presença

- **Abertura:** A12.
- **Argumento-chave (AC13):** "Senti sua falta." (só em 04/11, nunca na noite da live)
- **Próximo passo:** depois da resposta, resumo ou replay (`[[PENDENTE: replay]]`), depois a pergunta do padrão.

### T14. Ficha fria

- **Abertura:** A8 (só pergunta, sem oferta).
- **Argumento-chave (AC14):** depois da resposta dela, "O diagnóstico dos cinco padrões está liberado para você." (entrega, nunca oferta)
- **Próximo passo:** diagnóstico depois da resposta, depois pergunta do padrão.
- **Atenção:** a maioria declara "sem dinheiro agora" (181 de 348) e conforto de até R$ 97 (184). Não force.

### T15. Pediu reembolso

- **Abertura:** A10.
- **Argumento-chave (AC15):** "O que não foi o que você esperava?" (ouvir, não reter)
- **Próximo passo:** `copies_por_evento_pipeline.md`, E7. Registrar o motivo.
- **Não fazer:** nunca insistir; nunca dificultar.

### T16. Sem retorno

- **Abertura:** nenhuma.
- **Próximo passo:** régua de conteúdo (não de venda), em outro tempo. Quem nunca deu sinal chega aqui depois de dois toques; quem deu sinal, depois dos cinco.

---

## 5. A MATRIZ DE OBJEÇÕES (aba "Objeções")

| Código | Objeção declarada | Argumento-chave (AC) | Próximo passo |
|---|---|---|---|
| a | Sem dinheiro agora | Perguntar para separar a natureza. Aperto real: honestidade e saída com dignidade. Prioridade: um vezes zero | Pergunta que separa; depois parcelamento (l) ou encerramento |
| b | Acho caro | O que entra e o custo de ficar parada | Lista do que entra; soma dos avulsos `[[PENDENTE: preço avulso]]` |
| c | Já comprei outros e não tive resultado | Concordar: você precisou aplicar sozinha. Aqui tem trilha e ciclo conduzido | Pergunta "o que você comprou e parou?" |
| d | Medo de comprar e não colocar em prática | Autossabotagem; sem prazo; primeiro passo em 48 horas | Pergunta "se o primeiro passo fosse de 15 minutos?" |
| e | Onze produtos, vou me perder | Você não começa pelos onze, começa pela trilha | Pergunta "qual área primeiro?" |
| f | Vou pensar | Não trave o processo; pergunta o que ficou em aberto; lote real | Encerrar em 24 horas sem resposta |
| g | Preciso falar com marido ou esposa | Facilitar: resumo de um minuto; quando você sobe, a casa sobe junto | Enviar resumo |
| h | Já sou do Clube | O que já fez conta; sem prazo; onze produtos; lote de aluna | Pergunta "você usa o Clube hoje?" |
| i | Será que funciona para mim | Honestidade; a Dra. não promete, desafia; garantia | Pergunta "você sentiu algo mudar?" |
| j | Estou endividada | A Vitalícia não paga dívida; trabalho de raiz; não entre endividando. Acolhe, não vende, sem link e sem oferta | Acolher e esperar; registrar só a letra; sem diagnóstico, sem link e sem oferta nas mensagens seguintes |
| k | E se a Vitalícia voltar mais barata | Só as formas aprovadas: esta condição não se repete | Decidir pelo agora |
| l | Parcelamento e entrada | `[[PENDENTE: parcelamento máximo]]` e `[[CONFIRMAR: entrada mais parcelas]]` | Qual forma cabe melhor |
| m | Garantia | `[[PENDENTE: garantia]]` | Link do lote |

---

## 6. A ABA "PAINEL DO DIA"

Uma linha por trilha. Preencher ao fim de cada turno.

| Trilha | Meta de contatos do dia | Contatados | Responderam | Objeção declarada (mais frequente) | Link enviado | Pagaram | Pediram para parar |
|---|---|---|---|---|---|---|---|

**Indicadores calculados (fórmulas na planilha):**
- Taxa de resposta = responderam ÷ contatados
- Taxa de conversão = pagaram ÷ contatados
- Distribuição das objeções (a a m) em porcentagem
- No carrinho abandonado: porcentagem de "pagamento" versus "dar conta"
- Compras por lote e por segmento

---

## 7. A ABA "COBRANÇA VIVA" (a mais usada na noite da live)

Só linhas com `status` igual a Pix, boleto ou recusada. Ordem por `vencimento_cobranca` crescente.

| id_crm | tipo | gerada em | vence em | toque 1 enviado | toque 2 enviado | status | lote do link |
|---|---|---|---|---|---|---|---|

**Alertas visuais (formatação condicional):**
- Vermelho: vence em menos de 8 horas e sem toque 2.
- Amarelo: vence em menos de 24 horas e sem toque 1.
- Cinza: pago ou pediu para parar.

---

## 8. COMO MONTAR (passo a passo)

1. Exportar do CRM as pessoas **sem compra** com as tags de segmento (só o ID e os campos de código).
2. Preencher `trilha`, `temperatura` e `abertura` por regra (segmento determina trilha).
3. Preencher `objecao_declarada`, `padrao_declarado` e `faixa_conforto` a partir da ficha de interesse, sem copiar respostas abertas.
4. Ordenar pela regra da seção 2.
5. Conferir que **nenhuma coluna tem nome, telefone, e-mail ou texto livre de resposta da pessoa**.
6. Compartilhar a planilha só com quem atende (permissão de edição) e com a coordenação (leitura).
7. Atualizar `status` e `toque_atual` ao fim de cada turno.

---

## Notas ao implementador

**Pendências:**
1. A planilha original do Desafio não foi lida. Comparar as colunas antes de montar.
2. `[[PENDENTE: degrau de entrada / lista de espera]]`: define a trilha de quem fica fora.
3. `[[CONFIRMAR: preço do lote travado]]`, `[[PENDENTE: regra de migração]]`, `[[PENDENTE: parcelamento máximo]]`, `[[PENDENTE: garantia]]`.
4. Contagem de cada trilha: só depois de exportar do CRM (sem dado pessoal).
5. `[[CONFIRMAR: condição de quem viveu Desafio, Imersão ou Aulão]]` (S2 paga como não-aluna até decisão contrária).

**Decisões para validar:**
- A planilha usa o **ID do CRM** e não o nome. Isso dificulta o preenchimento manual, mas protege a base. Se a equipe preferir nome, que seja só na ferramenta de CRM.
- As **16 trilhas** substituem as bases e segmentos do Desafio (7 segmentos de checkout, 9 de objeção, 5 de quiz). A Black tem menos eventos de checkout, mais segmentos de relacionamento e um segmento novo (aluna em upgrade).

**Teste A/B sugerido:** ordenar T10 (ficha morna) por faixa de conforto versus por data da ficha. Métrica: taxa de resposta.

**Dependências:** `aberturas_por_segmento.md`, `quebra_de_objecoes.md`, `copies_por_evento_pipeline.md`, `playbook_do_dia_da_live.md`, `regua_do_silencio_black.md`.

---

## Links desta peça

A planilha é estrutura de trabalho e não traz mensagem para o público nem link. O link do lote de cada pessoa é registrado na coluna `lote_segmento_link` como código (por exemplo, S3 e Primeiro Lote), nunca como URL, e os tokens canônicos de checkout estão em `copies_por_evento_pipeline.md` e `quebra_de_objecoes.md`.

| ID da peça | Token | O que o link faz | Quem cria |
|---|---|---|---|
| Abas, colunas e trilhas T01 a T16 | nenhum | Planilha de estrutura, sem mensagem e sem link | n/a |

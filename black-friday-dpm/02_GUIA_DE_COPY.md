# Guia de copy da Black Próton Vitalícia

Contrato de escrita. Toda peça segue este guia.

## 1. Regras de forma

1. **Zero travessão e zero meia-risca** (nem em título, nem em lista, nem em tabela). Use vírgula, ponto, dois pontos ou parênteses.
2. **O nome da gestora do projeto nunca aparece** em material público (só "Dra. Próton" e "Instituto Dra. Próton").
3. **Disparos de WhatsApp e API:** "para" (não "pra"), uma linha em branco entre todas as linhas, negrito com asterisco (`*assim*`), link em linha própria e separado do CTA, rodapé "Digite SAIR se não quiser mais receber mensagens" em API, e **nenhuma contagem de dias dentro do texto quando o envio pode escorregar de dia** (use data fixa). Mensagem curta, até 12 linhas, e termina em pergunta, reação ou CTA claro.
4. **Criativos, headlines e falas da Dra. em vídeo:** podem usar "pra" (é a voz dela).
5. **E-mails:** assunto com a frase da audiência ou pergunta; um assunto, uma ideia, um botão.
6. **Gênero:** a base é 79% feminina, mas 21% é masculina (dossiê do Desafio: 79,2% e 20,8%). Em anúncio de tráfego frio, headline neutra ("você", "quem"). Em grupo e e-mail de quem já comprou, o feminino é aceito.
7. **Texto de ferramenta:** variáveis `{{nome}}`, `{{link}}`, `{{codigo_pix}}`, `{{link_aula}}`. Nunca usar nome de pessoa real.
8. Termos novos entram com explicação de uma ou duas frases na primeira vez.

## 2. Placeholders

Tudo que ainda não existe aparece assim, em maiúsculas, para ser trocado por busca:

| Placeholder | O que é |
|---|---|
| `[[PENDENTE: preço avulso]]` | Preço de venda avulso de cada produto |
| `[[PENDENTE: data do lote]]` | Data e hora de virada de lote |
| `[[PENDENTE: garantia]]` | Prazo e regra da garantia da Vitalícia |
| `[[PENDENTE: bônus]]` | Bônus de antecipação ou de quem assiste ao vivo |
| `[[PENDENTE: fechamento]]` | Data e hora de fechamento do carrinho |
| `[[PENDENTE: replay]]` | Se haverá ou não replay. Nenhuma peça afirma nem nega |
| `[[PENDENTE: parcelamento]]` | Número de parcelas, entrada, boleto e Pix |
| `[[PENDENTE: ordem de entrada]]` | Ordem dos 11 produtos na trilha de entrada |
| `[[PENDENTE: regra de migração]]` | O que acontece com o tempo restante de quem já é aluna e com quem já tem algum dos 11 produtos |
| `[[PENDENTE: contagem de alunas]]` | Quantas alunas atuais o Clube tem (define o tamanho da sequência de upgrade) |
| `[[PENDENTE: degrau de entrada]]` | Caminho para a base de baixa renda (nome, o que é, preço, garantia) |
| `[[CONFIRMAR: ...]]` | Afirmação já escrita que depende de checagem |
| `[[LINK: ...]]` | Link que ainda não existe (checkout por lote e segmento, grupo, página) |
| `[[DEPOIMENTO REAL]]` | Espaço para print de depoimento autorizado |
| `[[FOTO DRA]]` | Foto da Dra. Próton |
| `[[PREÇO LOTE ALUNAS]]`, `[[PREÇO LOTE NÃO-ALUNAS]]` | Preço do lote em vigor, só em peça pós-live |
| `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]` | Obrigatório na primeira ocorrência de "Lote Especial só ao vivo" em cada arquivo |

Quando a pendência exige mais detalhe, o texto depois dos dois pontos pode ser mais específico (por exemplo `[[PENDENTE: garantia]]` com o prazo), mas o tema tem de ser um dos acima. Variáveis de ferramenta (`{{nome}}`, `{{link}}`) e marcações de operação (`[[SE ...]]`, `[[BOTÃO: ...]]`, `[[IMAGEM: ...]]`) não são pendências.

**Preços da oferta (briefing).** Podem aparecer em peça só **depois** da revelação ao vivo (03/11, 20h). Antes disso, nenhuma peça cita valor. Nas peças pós-live, usar `[[PREÇO LOTE ALUNAS]]` e `[[PREÇO LOTE NÃO-ALUNAS]]` e indicar entre parênteses a escada do briefing para quem fizer a troca.

## 3. Palavras e afirmações proibidas

| Não dizer | Por quê | Dizer |
|---|---|---|
| "A porta fecha" (para sempre, "e não reabre"), "nunca mais vai ter vitalício", "última chance de ter acesso vitalício" | A Vitalícia pode voltar em outra edição | "Essa condição não se repete." "O que vier depois é outra oferta, com outro preço." |
| "Você vai ganhar R$ X", "vai manifestar dinheiro", "vai quitar suas dívidas" | Compliance (regra do Comercial) | "Teve gente que relatou...", "é um trabalho de raiz, não de emergência" |
| "A autossabotagem acaba", "garantido que a autossabotagem acaba", "cura" | A pesquisa mostra que ela continua dentro do Clube; hipnose é prática, não tratamento | "A última vez que você precisa recomeçar" (sobre decidir) |
| "Sequência 5207418 traz dinheiro" | Prática ensinada, não promessa | "A sequência que a Dra. ensina na prática" |
| "Mais barato que a mensalidade" | Depende de existir mensalidade recorrente | `[[CONFIRMAR: comparação com mensalidade]]` |
| Qualquer preço antes da live | Revelação só ao vivo | "A condição é revelada ao vivo" |
| "Neurociência descobre ... milionários" | Claim não sustentado (VSL do Desafio) | Não reaproveitar |
| Superlativos ("a melhor", "a maior da história", "a live mais importante") | Sem fonte | "A oferta que o Clube Secreto nunca fez antes"; qualquer outro com `[[CONFIRMAR: superlativo]]` |
| Depoimento sem autorização ou inventado | | `[[DEPOIMENTO REAL]]` |
| "Últimas vagas", "vagas acabando", "cupons limitados" | Não há limite de vagas na live | Escassez só por lote real, com data confirmada, ou `[[CONFIRMAR]]` |

## 4. Frases intocáveis da Dra. (copiar literalmente)

- "O deserto é o que define se uma pessoa explode ou não."
- "Eu termino tudo o que eu começo."
- "Não é quem nós somos. É quem nós estamos."
- "O universo não me devolve o que eu quero. Me devolve o que eu sou."
- "Reset. Chega de migalhas."
- "O mundo te enxerga da forma que você se enxerga."
- "Se você não investe em você, o resultado da sua vida sempre será zero."
- "Se você não governa as suas emoções, não governa mais nada."
- "Nunca mais eu deixo de investir em mim."
- "Quem não está crescendo está morrendo."
- "Obediência é maturidade."
- "Melhorar de vida é ganhar mil reais a mais. Mudar de vida é nunca mais voltar ao patamar anterior."
- "Eu prefiro que você não compre do que compre e não viva."
- "Não trave o processo."

## 5. Glossário (a senha de quem estava lá)

A ficha caiu · tapa na cara · chega de migalhas · reset · Modo Obcecado · o deserto · a pílula vermelha · o pacto · 1 vezes 0 · eu valho mais que uma pizza · estar, não ser · o pote · não trave o processo · obediência é maturidade · Próton Flix · Termostato Invisível · Campo contraído e expandido.

## 6. Vocabulário da Black

| Termo | Uso |
|---|---|
| **Vitalícia** | Nome curto da oferta |
| **A última vez que você vai precisar recomeçar** | Frase-guia |
| **Esta condição não se repete** | Escassez aprovada |
| **Live de revelação** | Nunca "live de vendas" |
| **Lote Especial, Primeiro Lote, Último Lote** | Nome oficial dos três lotes |
| **Alunas do Clube / Quem ainda não é do Clube** | Segmentos |
| **Trilha de entrada** | Como ela começa sem se perder nos 11 produtos |

## 7. Os cinco perfis (diagnóstico da Imersão)

Termostato Invisível · Autossabotagem · Cobrança Que Você Só Faz Com Você · Traumas Que Ainda Decidem · Culpa de Querer Mais.

## 8. Fatos que podem ser usados

- Mais de 70 mil alunos em 44 países; 1,4 milhão de seguidores.
- Formada em Terapia Quântica, Hipnose Clínica, Hipnoterapia, Reprogramação Mental e PNL; Doutora Honoris Causa em Neurociência pela Academia Mundial de Letras (conforme material do Comercial).
- História: criada pelos avós na periferia do interior de São Paulo, filha de mãe solo; trabalhou em telemarketing, vendeu cartão, foi camelô.
- Âncora usada no Desafio: mentoria individual de R$ 120 mil `[[CONFIRMAR: ainda vale]]`.
- Clube Secreto: protocolo de 21 dias por ciclo, 12 ciclos; aulas ao vivo toda terça; suporte no WhatsApp; 7 dias de garantia no Clube.

## 9. Formato de cada peça

Cada arquivo de copy traz, no topo: **peça**, **canal**, **público**, **momento** (data ou fase), **objetivo**, **estágio de consciência**, **modelo no Desafio** (peça que originou). Criativos trazem **frame 0** (o que para o scroll). Cada peça com variações marca qual testar primeiro.

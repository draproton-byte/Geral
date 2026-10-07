# Log de revisão: 03_paginas (14 arquivos)

Revisor: copy sênior de lançamentos. Rubrica aplicada: `14_revisao/RUBRICA.md` (seções 1 a 5). Fontes cruzadas: `00`, `01`, `02` (guia na versão ampliada, com PENDENTE de parcelamento, ordem de entrada, regra de migração, contagem de alunas e degrau de entrada; `[[SE ...]]` e `[[BOTÃO: ...]]` são marcações de operação), CSV `aulao.csv` (7.323 respostas) e material de `atual/` e `desafio/`. Todas as edições foram feitas no lugar, mantendo IDs e estrutura.

## 1. Arquivos revisados e linhas lidas

Li por inteiro, linha por linha, os 14 arquivos (4.212 linhas na primeira leitura; 4.242 linhas ao final, depois das edições). Nenhuma mensagem de WhatsApp de disparo em massa existe nesta pasta: há 2 mensagens de WhatsApp individuais (confirmação da lista de espera e aviso fixado de golpes) e 1 roteiro de fala da Dra. (vídeo do obrigado).

| Arquivo | Linhas (final) | Itens conferidos |
|---|---|---|
| `captura_A_diagnostico_primeiro.md` | 440 | 4 estados de tarja, 6 headlines (A0 a A5), 3 subtítulos, 4 botões (BT1 a BT4), 12 blocos |
| `captura_B_oferta_primeiro.md` | 338 | 4 estados de tarja, 6 headlines (B0 a B5), 4 botões (BT1 a BT4), 11 blocos |
| `captura_C_alunas_do_clube.md` | 258 | 4 estados, 5 headlines (C0 a C4), 3 botões, 9 blocos |
| `captura_D_quem_ja_viveu_o_desafio.md` | 306 | 4 estados, 6 headlines (D0 a D5), 3 botões, 11 blocos |
| `diagnostico_5_perfis.md` | 354 | 7 perguntas (D1 a D7), 6 devolutivas, regras de cálculo |
| `lista_de_espera.md` | 303 | 3 versões de hero, formulário, degrau condicional, 1 WhatsApp, 1 e-mail |
| `obrigado_e_pesquisa.md` | 403 | 3 passos, 10 perguntas (Q1 a Q10), roteiro de vídeo |
| `pagina_de_vendas_vitalicia.md` | 573 | 14 blocos mais tarja, 6 estados, 11 produtos |
| `onboarding_vitalicia.md` | 294 | 11 blocos (00 a 10), trilha em 5 etapas |
| `pagina_cupom_alunas.md` | 215 | tela 0 e 3 estados |
| `tela_countdown_live.md` | 244 | 5 estados, 4 itens de espera |
| `banner_checkout.md` | 168 | 6 versões (3 lotes x 2 segmentos), 5 linhas K0 a K4 |
| `verificacao_de_numeros.md` | 151 | 4 resultados, 6 orientações, 3 textos de divulgação |
| `vsl_headlines_e_paginas.md` | 195 | 5 headlines (H1 a H5), matriz de teste |

## 2. Defeitos achados por gravidade e o que foi feito

### Bloqueante (13)

1. **A captura prometia o que o obrigado desmentia (link e replay).** `obrigado_e_pesquisa.md` e `tela_countdown...` diziam que o link da live "só chega pelo grupo", "quem não entra não recebe" e que "a live só acontece uma vez". Isso contradiz os lembretes por e-mail e a página da live, e afirma "sem replay" enquanto `[[PENDENTE: replay]]` não foi decidido. Reescrito: o grupo é o caminho mais rápido, o e-mail também avisa, e nenhuma peça afirma nem nega replay.
2. **Primeiro passo de 48 horas diferente entre venda e onboarding.** A venda dizia "diagnóstico e primeiro acesso"; o onboarding tem 3 itens (acesso, diagnóstico, primeira prática do Clube). Venda alinhada ao onboarding; versão aluna do onboarding passa a trocar o item 3, porque a captura C promete que ela não repete o que já fez (`[[CONFIRMAR: primeiro passo da versão aluna no onboarding]]`).
3. **"Renovar", "mensalidade", "todo mês" em texto público** (rubrica 1). Removidos de A, B (headline de teste, motivo 01, bloco 07), C (tabela), D, lista (degrau), venda (hero, FAQ), banner (K1). Sobrou apenas o placeholder literal do guia `[[CONFIRMAR: comparação com mensalidade]]`.
4. **Valores em R$ fora de notas.** B (preço e parcela do Clube), lista (faixa da oferta), venda (âncora de R$ 120 mil), cupom (escada no título da tabela), banner e VSL (preços do Desafio no cabeçalho e na tabela). Removidos ou movidos para "Notas ao implementador". Restam só renda e faixas de pesquisa (exceção) e notas marcadas.
5. **Promessa clínica e de resultado.** "Resultado de tudo o que precisou curar em si mesma" (A e venda), "mudou dezenas de milhares de vidas" (A, B, venda), "não prometo cura" e "a autossabotagem acaba" em negações (várias). Trocado por "transformou a própria história em método", "método que já passou por mais de 70 mil alunos" e "não prometo o fim da autossabotagem, nem tratamento".
6. **Palavra "Zoom" no texto** de `tela_countdown...`. Removida (o nome do arquivo ainda contém o termo; ver pendência 12 e decisão 54 de `12`).
7. **Nome de terceiro em arquivo da Dra.** `pagina_cupom_alunas.md` citava o nome do dono da BFV/26. Trocado por "materiais de referência do projeto". Também removida a citação de caminho inexistente (`projetoBF_*`).
8. **Marcações fora do guia:** `[[LOTE ATUAL]]`, `[[PARCELA ALUNAS]]`, `[[PARCELA NÃO-ALUNAS]]`, `[[PREÇO DO SEGMENTO]]`, `[[PREÇO]]`, `[[PREÇO LOTE ALUNAS ou NÃO-ALUNAS]]`, `[[ENTRAR NO GRUPO...]]`, `[[SALVAR A DATA]]`. Viraram variáveis de ferramenta (`{{lote_atual}}`, `{{parcela_alunas}}`, `{{parcela_nao_alunas}}`, `{{preco_segmento}}`, `{{preco_novo}}`) ou `[[BOTÃO: ...]]`. PENDENTE com tema fora do guia ampliado foi mapeado: nº de parcelas e prazo do Pix para `parcelamento`; todos os "tratamento de ... acesso/produtos" para `regra de migração, ...`; nome, preço, garantia, crédito e forma de pagamento do degrau para `degrau de entrada, ...`; soma e prazo para `preço avulso, soma` e `garantia, prazo`; "horário do suporte", "momento da abertura do carrinho" e "primeiro passo do ciclo 1" viraram `[[CONFIRMAR: ...]]`.
9. **Lote Especial sem o CONFIRMAR obrigatório** na primeira ocorrência (B, cupom, venda, banner) e com redação diferente em A e B. Padronizado para `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]`.
10. **Frases proibidas citadas literalmente** em tabelas de "antes e depois" (A, B, banner, venda). Reescritas sem repetir o texto proibido.
11. **Garantia afirmada na FAQ da B** ("é apresentada na live") com `[[PENDENTE: garantia]]`. Neutralizada.
12. **Afirmação sobre o Clube que as fontes não sustentam:** "centenas de pessoas no grupo", "quem salva a data tem muito mais chance", "quem dá o primeiro passo em 48 horas tem muito mais chance" (CONFIRMAR sem dado). Trocadas por frases verificáveis.
13. **Placeholder do campo Q10 afirmava "A Dra. lê as perguntas"**, mas o próprio arquivo marca isso como não confirmado. Placeholder e ajuda agora dizem "a equipe lê"; a versão forte fica no CONFIRMAR.

### Alto (24)

1. **LGPD nos formulários.** Consentimento sem controlador, sem finalidade e sem como sair; ausente em C, no diagnóstico e no cupom. Texto único (Instituto Dra. Próton, finalidade, SAIR no WhatsApp e link no e-mail) aplicado a A, B, C, D, lista, diagnóstico (consentimento na abertura), cupom e validador. "Seu resultado é só seu" (falso, o comercial usa o perfil) trocado por "fica com o Instituto e só é usado para preparar a live".
2. **Número 43,8%** (A, VSL) não bate: recalculei no `aulao.csv` (primeira vez + menos de 1 mês = 3.238 de 7.323 = 44,2%; 44,4% por e-mail único). Usei "cerca de 44%". O mesmo 43,8% está em `00` (fora da minha área, ver seção 5).
3. **51,9%** citado sem a fonte da rubrica (A3, VSL H3, diagnóstico). Agora: "das pessoas que responderam à pesquisa de presença (dossiê do Desafio)".
4. **Dados misturados na venda (bloco 03):** a opção "Autossabotagem" (15%) pertence à pergunta sobre paz, não à de ganhar dinheiro (40% e 22%). Removida da lista; acrescentado o 22% à frase de procrastinação.
5. **Devolutiva 6 do diagnóstico dizia "a maior parte das pessoas não sabe".** O dado é "maior grupo" (40%), não maioria. Corrigido, e a devolutiva agora cobre também respostas sem pontuação (não só "não sei").
6. **Viés estrutural na pontuação do diagnóstico.** Teto por perfil: Termostato 11, Autossabotagem 16, Cobrança 14, Traumas 15, Culpa 18. O Termostato (perfil mais frequente no Desafio, 31,6%) nunca alcançaria a Culpa. Incluída normalização pelo máximo, limite mínimo de pontos para a devolutiva 6 (`[[CONFIRMAR: limite de 6 pontos]]`) e botão "Ver meu resultado" na D7.
7. **Regra do diagnóstico violada por ele mesmo:** "você tem informação..." (proibido pela Parte 4, item 7) e "quase todo mundo tem mais de um". Reescrito; lista de palavras proibidas passou a não conter o termo vetado.
8. **Gênero em página de tráfego frio e de base mista:** "você não é preguiçosa, indisciplinada, fraca" (A, venda, obrigado, onboarding), "exausta" (chips, cards, listas), "sozinha", "obrigada(o)". Frases neutras ou com "(o)"; fechos reescritos sem a lista de três adjetivos.
9. **Perguntas da pesquisa (coerência com 01 e com os CSV):** faltava a opção "Não tenho dinheiro para começar" em Q5 (5,4% do Aulão, 5ª maior); Q3 sem regra de exclusão ("Nenhuma, é a primeira vez"); Q6 prometia "não vou usar para cobrar" quando a renda prioriza o comercial (agora: "preparar a live e o atendimento"); tela final dizia "Obrigada(o)".
10. **"Dor a que responde" com falas inventadas** entre aspas (5 das 12 linhas, venda bloco 06). Trocadas por frases reais da audiência (01, seção 2, e opções das pesquisas) e regra registrada nas notas.
11. **Captura D com texto de Desafio para todas as origens.** Rótulo "e-mail do Desafio" para quem fez Imersão ou Aulão; blocos 04 e 05 e a tabela "No Desafio" para todos; "você assinou" sem condição. Condicionado por `[[SE: DESAFIO]]` e com variante para IMERSAO, AULAO e GERAL.
12. **Captura C: bloco 05 "A frase que você mesma assinou"** para alunas que não fizeram o Desafio. Agora variante DESAFIO e variante GERAL (frase literal "Quem não está crescendo está morrendo.").
13. **Frases intocáveis incorporadas em frase corrida** (C e D). Agora entre aspas e literais.
14. **Lista de espera dizia "antes da live só pelo link da pesquisa"**, mas A e B linkam a lista no FAQ. Corrigido; a venda dizia remeter o "não tenho dinheiro" à lista e não tinha FAQ para isso; criada a pergunta; B ganhou a mesma FAQ.
15. **Tela de espera da venda dizia "hoje às 20h"** quando a URL é aberta dias antes. Agora "em 03/11" e contagem com dias.
16. **Tarja do Último Lote** repetia "depois, o valor muda", que é falso no fechamento. Variante própria: "depois, o carrinho se encerra".
17. **Cadência do dia da live** (12h, 17h, 19h30, 19h50) não bate com o modelo (grupos 11h30 e 20h, e-mail 07h). Alinhada; disparos extras ficam em `[[CONFIRMAR: disparo extra no dia da live]]`.
18. **Botões longos e diferentes para a mesma ação** (A: 8 palavras; D: "QUERO CONTINUAR. ESTAR NA LIVE DE 03/11"; VSL: "minha vaga", palavra que sugere limite que não existe). Padronizados (no máximo 6 palavras; A e VSL: `QUERO MEU LUGAR E MEU DIAGNÓSTICO`; B e D: `QUERO MEU LUGAR NA LIVE`; C: `CONFIRMAR MINHA PRESENÇA`) e repetidos iguais em hero, transição e blocos intermediários.
19. **Hierarquia do hero de A para 50+:** pré-título de 11 elementos, subtítulo com a frase-guia dentro e a linha de apoio repetindo os chips. Pré-título encurtado (`LIVE DE REVELAÇÃO · 03/11 · 20H · YOUTUBE`), subtítulo em uma frase, frase-guia na linha de apoio.
20. **IDs duplicados:** botões B1 a B4 e headlines B1 a B4 no mesmo arquivo (B). Botões viraram BT1 a BT4 (A e B). Referência da venda (headline "Pare de comprar curso...") corrigida de B3 para B4.
21. **Obrigado: "O link só chega pelo grupo" e microcopy "assistir direto pelo YouTube"** na mesma página. Corrigido junto com o item 1 dos bloqueantes.
22. **Mensagem de WhatsApp da lista:** abertura genérica, sem pergunta final. Reescrita (nome na primeira linha, pergunta, link em linha própria, rodapé SAIR).
23. **Garantia, bônus e preço avulso: linhas dependentes sem condição** (B "essa conta eu faço ao vivo"; venda "veja no bloco 08"). Marcado para apagar se não existir preço avulso real.
24. **Compliance emocional:** perguntas do bloco 08 e da espera ("o que você se prometeu e não cumpriu", "cursos que você não terminou"), "cada ano cobra mais caro", "não quer decidir agora" na D, "tem nome: autossabotagem" para o medo de comprar. Reescritas sem culpa.

### Médio (14)

1. Títulos de bloco que prometiam resultado ("o Clube trabalha", "O Clube trabalha nisso com você"). Reformulados.
2. Fatos conferidos nas fontes e CONFIRMAR resolvido ou rebaixado a nota: "a maioria respondeu nada" (manual da Aula 03 e narrativa do Clube), "1 ano de acesso" do Desafio (página de vendas do Desafio), "Noite 1 pacto", "Noite 3 'Nunca mais eu deixo de investir em mim'", "Aula 02: cinco noites não mudam uma vida", 20 a 30 min por dia, aulas toda terça, 1º ciclo do dinheiro.
3. "Aula 2/3" e "Noite" coerentes entre D, C e a fonte.
4. Títulos "As cinco devolutivas" (eram seis) e "dois estados" (eram três, cupom). Contagens de cabeçalho corrigidas.
5. Regras da tarja (0 dias, 1 dia, 02/11 Finados) acrescentadas em A, B e na tela de espera.
6. Variações de replay deixadas no corpo (A, B, C, D, tela) foram para as Notas ao implementador; no corpo fica só `[[PENDENTE: replay]]`.
7. Garantia da venda: versões A, B e C continuam sob `[[PENDENTE: garantia]]`, com o texto `devolvo` só na versão A condicionada ao CONFIRMAR.
8. Grupo "lotação" na obrigado trocado por limite do WhatsApp (não confunde com limite de vagas da live).
9. Validador: orientação 6 citava "última vaga" como exemplo de golpe (termo proibido); item 5 sobre a Dra. e o comercial ganhou `[[CONFIRMAR: política do comercial 1 a 1]]`; cores acompanhadas de texto e ícone.
10. Pós-live da tela ("A sua decisão não precisa", "a ficha caída") trocado por frase compreensível.
11. Lote Especial: nota de que a escada vai só nas notas (cupom, banner).
12. Pós-conversão: todas as capturas dizem o que acontece depois (trilha de entrada e primeiro passo em 48 horas); a venda e o onboarding entregam.
13. CVV 188: `[[CONFIRMAR: manter a menção...]]` também na venda e no diagnóstico (já existia na A).
14. Pagamento recusado do banner prometia "o lote atual continua aberto" (não verificável). Trocado por "é só tentar de novo".

### Baixo (7)

1. "Hoje" e "nenhuma peça" (linguagem de bastidor) dentro de FAQ público.
2. "Sincera(o)" em ajuda de Q7 trocado.
3. Gramática ("virou regra" com sujeito plural, "tudo parece não pegar", "live ao vivo").
4. Notas e cabeçalhos com "43,8%".
5. Sequência de numeração das notas ao implementador (A, B, cupom).
6. "Cinco chips" conferidos com os 5 perfis (A e B).
7. Referência `09_comercial` ajustada para `09_comercial_datacrazy` (obrigado).

## 3. O que ainda depende de decisão de negócio (CONFIRMAR ou PENDENTE já colocado)

1. **Degrau de entrada** (`[[PENDENTE: degrau de entrada, ...]]` em `lista_de_espera.md`): existe ou não, o que é, preço, garantia, crédito. Sem decisão a lista funciona só como aviso (cenário `SEM DEGRAU` já escrito). Recomendo decidir antes de 13/10 (00, seção 5).
2. **Replay** (`[[PENDENTE: replay]]`, todas as páginas).
3. **Garantia da Vitalícia** (7 dias do Clube, outro prazo ou só o direito legal) e **bônus**.
4. **Lote Especial só para quem está ao vivo** (em A a D, venda, cupom, banner).
5. **Regra de migração:** tempo restante do acesso de 365 dias da aluna, quem já tem algum dos 11 (inclui o Desafio, que é um dos 11), aluna com acesso encerrado, e crédito pelo valor já pago.
6. **Preço avulso** (soma, usado na conta da B e da venda) e **parcelamento** (nº de parcelas, boleto, Pix, prazo do Pix).
7. **Catálogo:** "tudo o que a Dra. criou" só se os 11 cobrirem todo o catálogo (`[[CONFIRMAR: catálogo]]`).
8. **Comparação com mensalidade** (`[[CONFIRMAR: comparação com mensalidade]]`).
9. **Ordem de entrada** (trilha do onboarding é proposta) e **primeiro passo do ciclo 1** (e versão aluna).
10. **Definições dos 5 perfis** (provisórias, a alinhar com a Imersão) e **calibração do diagnóstico** (normalização, limite de 6 pontos, teste com 30 a 50 pessoas).
11. **Descrições oficiais dos produtos** (8 dos 11 só têm o nome nas fontes; 9 linhas com CONFIRMAR de descrição oficial).
12. **Nome do arquivo `tela_countdown_live.md`** contém o termo antigo (decisão 54 de `12`); renomear exige ajustar `11` e `12`.
13. **Dia da live:** disparos extras às 19h45 e momento de abertura do botão do carrinho (roteiro em `08_live_e_pitch`).
14. **Mídia e links:** foto da Dra., depoimentos reais, vídeo do obrigado e da VSL (minutagem e tempo de segurança, tema de `12`, item 17), links de grupo, calendário, suporte, política de privacidade e termos.
15. **Jurídico:** reconhecimento da aluna por e-mail (C e cupom), compartilhamento do resultado, guarda das consultas do validador, CDC na garantia (versão C).
16. **Menções públicas:** "mais de 7 mil pessoas" (7.323 do Aulão), CVV 188, CNPJ do rodapé (está nas fontes do Desafio), "Doutora Honoris Causa" (guia, seção 8).
17. **Q10:** a Dra. lê e responde ao vivo? (`[[CONFIRMAR]]` mantido; o texto público diz só "a equipe lê").

## 4. Contagens finais

| Item | Valor |
|---|---|
| Arquivos revisados | 14 |
| Linhas lidas (1ª leitura) / ao final | 4.212 / 4.242 |
| `[[PENDENTE: ...]]` | 182 |
| `[[CONFIRMAR: ...]]` | 123 |
| `[[LINK: ...]]` | 120 |
| `[[SE: ...]]` / `[[FIM SE]]` | 47 / 36 (marcação de operação, aceita pelo guia; a diferença são declarações de segmento em lista e variantes de uma linha, que não precisam de fechamento) |
| `[[BOTÃO: ...]]` | 10 |
| `[[PREÇO LOTE ALUNAS]]` / `[[PREÇO LOTE NÃO-ALUNAS]]` | 22 / 15 |
| `[[DEPOIMENTO REAL]]` / `[[FOTO DRA]]` | 16 / 11 |
| Perguntas da pesquisa de qualificação | 10 (Q1 a Q10), mais 7 do diagnóstico (D1 a D7) |
| Telas de resultado | 5 perfis mais 1 caso sem pontuação |
| Estados da tela de espera | 5 |
| Versões de banner | 6 |
| Headlines testáveis | A 6, B 6, C 5, D 6, VSL 5, banner K 5 |

## 5. Observações para outras áreas (não editei fora de `03_paginas`)

- `00_ESTRATEGIA_COPY_SENIOR.md`, seções 3.1 e tabela de fatos: o "43,8%" de quem acompanha a Dra. há menos de 1 mês não bate (44,2% das respostas, 44,4% por e-mail único). Sugiro trocar por "cerca de 44%".
- `13_modelo_dr_joao` e áreas de WhatsApp/e-mail podem citar `[[PREÇO]]`, `[[LOTE ATUAL]]` ou `[[PARCELA ...]]` como as páginas citavam; a convenção adotada aqui é variável `{{...}}` para esses casos.
- Base do diagnóstico: 4.032 respostas (planilha) contra 1.562 (dossiê), pendência 46 de `12`. As páginas citam 4.032 (planilha).
- A guia (seção 2) agora lista `[[SE ...]]` como marcação de operação; mantive esse padrão.

## 6. Checagens duras rodadas ao final (pasta `03_paginas`, resultado)

```
1) travessao (U+2014) e meia-risca (U+2013):                 0 ocorrencias
2a) Keila|Pithon|Quaresma|harmoniza|injet|FEP|congresso:     0
2b) Zoom no texto (case-insensitive):                        0
2c) Elite fora de "Workshop Terapeuta de Elite":             0   (7 ocorrencias do nome do produto, permitido)
3) 'R$' em texto publico pre-live:                           0   (as 11 linhas com R$ estao em "Notas ao implementador",
                                                                  em nota marcada para remover, ou sao renda/faixas de pesquisa)
4) frases proibidas (porta fecha, nunca mais vai ter, ultima chance
   de ter acesso vitalicio, vai ganhar, vai manifestar, garantido que a
   autossabotagem acaba, a autossabotagem acaba, ultimas vagas,
   vagas acabando, cupons limitados):                        0
4b) "cura"/"curar" como palavra (fora dos nomes
    "Cura da Crianca Interior" e "Cura da Escassez Financeira"): 0
4c) renov*/mensalidade fora do placeholder literal
    [[CONFIRMAR: comparação com mensalidade]]:               0
5) "pra" fora de fala da Dra. e de citacao:                  0 em disparos (5 linhas: titulo de citacao da headline
                                                                  antiga, regra do guia, 3 do roteiro de fala da Dra.)
6) TODO|XXX|lorem:                                           0   (um falso positivo: a palavra "MÉTODO" em caixa alta)
6b) tipos de placeholder usados: PENDENTE, CONFIRMAR, LINK, DEPOIMENTO REAL, FOTO DRA,
    PREÇO LOTE ALUNAS, PREÇO LOTE NÃO-ALUNAS, mais marcações de operação SE, FIM SE, BOTÃO
8) caminhos .md citados que nao existem:                     0
9) e-mail, telefone, URL, login ou senha reais:              0   (so o exemplo seunome@email.com e (11) 90000-0000;
                                                                  CNPJ do Instituto vem das fontes do Desafio)
```

WhatsApp e API (rubrica 2.5), em `lista_de_espera.md` e `verificacao_de_numeros.md`: "para" em vez de "pra", linha em branco entre linhas, `*negrito*`, link em linha própria, rodapé SAIR na mensagem individual da lista (a do validador é aviso fixado de grupo, sem rodapé), até 12 linhas, termina em pergunta (lista) ou CTA claro (validador). OK.

Frases intocáveis (guia, seção 4) conferidas por busca: todas as ocorrências saem literais (inclusive "Quem não está crescendo está morrendo.", que passou a vir entre aspas em C e D).

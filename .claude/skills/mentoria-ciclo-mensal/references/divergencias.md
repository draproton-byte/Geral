# Decisões e divergências

## Decididas pela Keila

1. **Mensagem das 07h00 com modelo novo** (references/modelo_mensagem.md), a partir de Novembro. O Doc de Outubro fica como está.
   Exemplo: `*🔈 Áudio do dia 5 · Dizer eu te amo (15,9 min):* <link>` (duração com vírgula, sem link de capa no texto).
2. **Capas como IMAGEM, com o texto na legenda da própria imagem.**
   - 07h00: imagem `Dia 05 · Dizer eu te amo.jpg` com a mensagem completa como legenda; depois o áudio (mensagem de voz) e o PDF.
   - 09h00: imagem `Dia 05 · Dizer eu te amo.png` com a reflexão como legenda.
   - Nunca a capa como link dentro do texto. Medir a legenda das 07h00 e acusar VERMELHO se passar do limite do WhatsApp.

## Decididas (regras da skill)

3. **Dias 05 e 16 de Outubro** têm 5 palavras (limite 4). Tema final:

   | Dia | Atual | Novo |
   |---|---|---|
   | 05 | O poder do "eu te amo" | Dizer eu te amo |
   | 16 | Viver a partir do zero | Viver no zero |

   O mesmo tema, letra por letra, nos 5 lugares (exemplo do Dia 05):
   1. `temas.json`: `"5": "Dizer eu te amo"`
   2. Nomes no Drive: `Dia 05 · Dizer eu te amo.jpg`, `.png` e `.txt`
   3. Título do bloco no Doc de disparos
   4. Coluna Título da planilha: `Dia 05 . Dizer eu te amo`
   5. Texto escrito dentro das imagens das capas (regerar a imagem)

   Enquanto houver tema antigo em algum lugar, `conferir_capas.py` acusa, por exemplo:
   `Dia 05 | Coluna Título da planilha | esperado: 'Dizer eu te amo' | encontrado: 'O poder do "eu te amo"'`
   Em Outubro essas trocas ainda não foram feitas: o script deve acusar os Dias 05 e 16.

4. **Nome de capa: padrão do Drive**, `Dia NN · <tema>.<ext>`. Não usar `Dia-NN.png` nem `Tema-NN.png`.

5. **Rótulo de link no Doc = nome real do arquivo no Drive.**
   - Errado: texto `Reflexao-Dia-01-capa.png` abrindo `Dia 01 · <tema>.png`.
   - Certo: texto `Dia 01 · <tema>.png` abrindo esse mesmo arquivo.
   Motivo: quem confere (Tami, Vivi) olha o rótulo; se o rótulo diferir do arquivo, um link que abre a capa de outro dia passa despercebido. A conferência 4 de `conferir_capas.py` compara o nome do arquivo aberto com o do dia.

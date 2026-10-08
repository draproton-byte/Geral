# Passos do `rodar`

Saída em `<pasta de trabalho>/` (padrão `mentoria-21-dias/`, ou a variável `MENTORIA_DIR`). Scripts marcados (PC) existem na skill antiga no PC da Keila e devem ser copiados para `scripts/`; `ciclo.py` avisa quando faltam.

| # | Passo | Ferramenta / script | Saída | Validação |
|---|---|---|---|---|
| 1 | Baixar áudio | yt-dlp (`baixar.py`, PC) | `audio/livro.*` | arquivo existe, duração > 0 |
| 2 | Cortar em 21 | ffmpeg, silêncio mais próximo de k × duração / 21 (`cortar.py`) | `audio/Dia-01.mp3` a `Dia-21.mp3`, mono 64k | 21 arquivos |
| 3 | Transcrever | faster-whisper base (`transcrever.py`, PC) | `transcricao/Dia-NN.txt` | 21 arquivos |
| 4 | Temas | criados do áudio de cada dia | `temas.json` | `checar_temas.py`: máx. 4 palavras, 21 temas |
| 5 | Destaques | frase literal da transcrição (`destaques.py`, PC) | `destaques.json` | frase contida na transcrição do dia |
| 6 | PDFs | `build_pdf.py` (PC): A5, creme e vinho, índice clicável na pág. 1; 21 PDFs com numeração contínua | `pdf/`, `paginas.json` | 21 PDFs; Outubro tem 185 páginas |
| 7 | Reflexões | uma pergunta por dia, sem pedir resposta nem compartilhamento (`build_reflexoes.py`, PC) | `reflexoes.json` | 21 perguntas |
| 8 | Capas e legendas | `capas_audio.py`, `capas_tema.py` (PC) | `capas/` | `conferir_capas.py` |
| 9 | Drive | Chrome na conta `novaordemmental` | `links.json` | `checar_links.py` (PC), leitor por link, dono correto |
| 10 | Sendflow | Claude in Chrome, Camila logada | links curtos atualizados | abrir cada link curto e ver o arquivo do mês |
| 11 | Doc de disparos | `build_doc.py` (PC): copiar o do mês anterior, trocar só o que muda | Doc no Drive | `conferir_doc_vivo.py` (PC) |
| 12 | Planilha | 43 linhas da Mentoria | aba do mês | contagem das outras campanhas igual antes e depois |
| 13 | Calendário e simulação | `csv_ics.py`, `simular_whatsapp.py` (PC) | `.ics` | tamanho das legendas dentro do limite |
| 14 | Pré-voo | `validar.py`, `preflight.py` (PC) | relatório | VERDE/VERMELHO |

Retomada: `ciclo.json` guarda `passos.<n>.status`. Para refazer um passo, apague seu status ou rode `ciclo.py rodar --de N`.

# Armadilhas e prevenção

- yt-dlp dá 403: usar `--extractor-args "youtube:player_client=android,web_safari"`; nunca `--print` junto do download.
- Silêncio no corte: `silencedetect=noise=-30dB:d=0.35`.
- faster-whisper: modelo `base`, `vad_filter=True`, `condition_on_previous_text=False`, no máximo 2 processos de 6 threads, destacados e retomáveis.
- Conector do Drive só aceita base64: upload pelo Chrome (capturar o input trocando `HTMLInputElement.prototype.click`; Novo > Upload por eventos de mouse; `file_upload` em lotes < 10 MB; esperar "N uploads concluídos"; recarregar a cada lote).
- Substituir arquivo existente: mesmo nome + "Substituir o arquivo existente" (o link não muda).
- Não reenviar o Google Doc original; gerar `.docx` novo.
- Ctrl+H no Doc: clicar no campo antes de digitar, usar "Substituir tudo".
- Planilha: favoritos + `HYPERLINK` com `#bookmark=id.xxx`.
- Exportar o Doc em markdown estraga a formatação.
- Tema com mais de 4 palavras já aconteceu: `checar_temas.py` bloqueia.
- `videoplayback.m4a` na pasta de áudios: ignorar.
- Nunca `desktop.ini` ou `Thumbs.db` no Drive.
- Planilha com outras campanhas: nunca sobrescrever.

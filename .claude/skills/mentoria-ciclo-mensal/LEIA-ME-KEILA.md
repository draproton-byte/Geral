# Keila: juntar os scripts antigos na skill nova (uma vez só, no seu PC)

1. Coloque a pasta `mentoria-ciclo-mensal` (do repositório, branch `claude/jolly-galileo-pc8zbq`, ou do pacote `.skill` descompactado) em `C:\Users\keila\.claude\skills\`.
2. Abra o PowerShell e rode:

```
cd C:\Users\keila\.claude\skills\mentoria-ciclo-mensal\scripts
python integrar_no_pc.py
```

Ele copia para `scripts\` todos os scripts de `mentoria-21-dias-disparos\scripts` (sem apagar nem sobrescrever nada), copia as referências antigas como `antiga_*.md` e lista os arquivos que ainda têm caminho fixo `C:\Users\keila`.

3. Ele cria `mentoria-ciclo-mensal.skill` ao lado da pasta da skill. Abra esse arquivo e clique em **Salvar skill**; a Camila passa a ter tudo, scripts incluídos, ao logar na conta.
4. Abra o Claude Code e escreva: "ajuste os caminhos fixos dos scripts da mentoria-ciclo-mensal e rode os testes com os dados de Outubro". Esse é o passo que falta para fechar os 4 testes.
5. Fontes, logo e as fotos de blazer preto (pasta "FOTOS 2026") continuam onde estão; a Camila precisa tê-las no PC dela. Rode `python instalar.py` para ver o que falta.

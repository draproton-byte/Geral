---
name: dra-proton-dados-hotmart
description: Números da área de membros Hotmart da Dra. Próton em 29/09/2026 (alunas, progresso, conclusão, notas, curvas de abandono por aula e produto) e a base completa por aula em TSV (312 aulas, 11 produtos). Use ao precisar de métricas, baselines, comparar antes e depois, achar a aula que mais retém ou mais perde alunas, ou decidir o que gravar, reorganizar ou corrigir.
---

# Dados Hotmart (coleta de 29/09/2026)

Regras e tom: `dra-proton-regras`. IDs e estrutura: `dra-proton-contexto`.

**Definição:** "concluiu" = aluna que marcou a aula como concluída. A Hotmart não expõe visualizações por aula, então é a melhor medida de "aula assistida". Visualização parcial não entra. Aulas não publicadas ficam fora das médias.

## Arquivos
- `data/hotmart_aulas_2026-09-29.tsv`: 312 aulas, colunas `produto, total_alunos, prog_medio, concl_pct, modulo, ordem, aula, tipo, publicada, concluiram, comentarios, nota, n_avaliacoes` (separador TAB, com BOM no início).
- `data/Raio-X-Area-de-Membros-Dra-Proton.pdf`: relatório visual de 19 páginas (as páginas finais repetem a análise de comentários).

Exemplo de consulta:
```bash
python3 - <<'EOF'
import pandas as pd
d = pd.read_csv(".claude/skills/dra-proton-dados-hotmart/data/hotmart_aulas_2026-09-29.tsv", sep="\t", encoding="utf-8-sig")
c = d[d.produto.str.contains("Clube Secreto - Dra")]  # ajuste o filtro ao nome exato
print(c.sort_values("concluiram", ascending=False).head(10)[["modulo","aula","concluiram","nota"]])
EOF
```
Confirme os nomes exatos de `produto` com `d.produto.unique()` antes de filtrar.

## Visão geral (Insights, últimos 30 dias, todos os cursos)
- 10.019 novas alunas inscritas
- 5.830 acessaram algum curso (58%); **4.189 (42%) nunca entraram**
- 5.122 iniciaram de fato uma aula (51%)

## Por produto

| Produto | Alunas | Progresso médio | Concluíram 100% | Nota | Avaliações | Comentários |
|---|---|---|---|---|---|---|
| Evento Fórmula da Riqueza | 8.117 | 39% | 39,4% | 4,90 | 768 | 261 |
| Desafio A Nova Realidade | 6.248 | 4% | 0,03% | 4,86 | 1.017 | 229 |
| Imersão Desbloqueie | 4.645 | 8% | 0,26% | 4,93 | 1.176 | 276 |
| Clube Secreto | 738 | 12% | 0,27% | 4,84 | 756 | 377 |
| Workshop Terapeuta de Elite | 108 | 16% | 5,6% | 4,84 | 27 | 5 |
| Formação Limpeza Emocional | 91 | 33% | 6,6% | 5,00 | 231 | 48 |
| Sessão Gravada de Limpeza | 72 | 19% | 19,4% | 5,00 | 7 | 1 |
| Os 3 Áudios | 54 | 7% | 7,4% | 5,00 | 3 | 2 |
| Club Secreto P | 32 | 19% | 0% | 4,91 | 69 | 17 |
| Código de Ativação | 22 | 10% | 4,5% | 5,00 | 1 | 1 |
| Clube Secreto B | 1 | 0% | 0% | n/a | 0 | 0 |

## Aulas mais assistidas (concluíram)
1. Evento, Comece Aqui!: 3.202 (39,4%)
2. Desafio, Bem-vindos Maravilhosos: 1.981 (31,7%)
3. Imersão, Bem-vindos Maravilhosos: 1.727 (37,2%)
4. Imersão, Aquecimento: 986 (21,2%)
5. Imersão, Ebook Códigos de Grabovoi: 842 (18,1%)
6. Imersão, Aula 01: 768 (16,5%)
7. Desafio, Aquecimento: 754 (12,1%)
8. Desafio, Manual da Participante: 724 (11,6%)
9. Imersão, Teste de Bloqueios: 716 (15,4%)
10. Desafio, Ebook Códigos de Grabovoi: 661 (10,6%)

## Aulas mais comentadas
Evento Comece Aqui! 261 · Imersão Bem-vindos 76 · Desafio O que é Lei da Atração? 51 · Clube 01 Como começa o seu ciclo 42 · Imersão Aula 01 41 · Desafio Manual 34 · Desafio Bem-vindos 31 · Desafio Noite 01 27 · Imersão Aula 02 26 · Clube O Destravar 24.

## Curvas de abandono (% da base que concluiu)

**Desafio (6.248):** Bem-vindos 31,7 · Manual 11,6 · Grupo 8,1 · Teste 7,4 · Suporte 8,8 · Aquecimento 12,1 · O que é LA 8,8 · Aula 01 7,4 · Aula 02 5,4 · Aula 03 3,2 · **Noite 01 gravação: 57 alunas; Noites 02 a 05: 5 ou 6 cada** · Ebook 10,6 · Depoimentos 3,9 caindo para 1,3.

**Imersão (4.645):** Bem-vindos 37,2 · Aquecimento 21,2 · Aula 01 16,5 · Aula 02 12,7 · Aula 03 8,1 · Ao vivo Aula 01 3,2 · Ao vivo Aula 02 1,7 · Ao vivo Aula 03 1,2 · Ebook 18,1 · Depoimentos 7,6 caindo para 3,7 · Certificado 0,9.

**Clube Secreto (738):**
- M1: aula 01 45,5 · aula 02 37,3 · aula 03 grupo 36,4
- M2 Escola do Enriquecimento: Aula 1 59,3 · Aula 4 52,6 · Aula 8 44,9 (perde só 14 pontos em 8 aulas: melhor formato)
- M3: Limpar bloqueios 39,8 · Grabovoi 34,6 · O Destravar 28,5 · LA para a saúde 23,8 · encontros 2024/2025 de 17 caindo para 2,3
- M4 encontros 2026: 16 a 22 alunas por encontro de jan a jun; 31 a 49 de jul a set. Encontro 15.09.2026 = 49 (maior do ano)

## Notas baixas (abaixo de 4, Clube)
Encontro 25.02.2026 (3,0), 24.03.2026 (3,0), 10.06.2025 (3,6). Amostras pequenas (2 a 6 avaliações).

## Metas de referência (do backlog)
- Noites 02 a 05 do Desafio: de 5 ou 6 para mais de 300 conclusões
- Aula 01 do Desafio: de 7,4% para 15%
- Progresso médio do Clube: de 12% para 20% em 60 dias
- Acesso de novas alunas: de 58% para 70%
- Depoimentos vistos por mais de 15% da base
- Comentários de atrito na entrada: abaixo de 15% (hoje 33% a 54% nas páginas de boas-vindas)

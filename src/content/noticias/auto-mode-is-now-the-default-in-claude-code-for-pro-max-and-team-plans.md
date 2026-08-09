---
title: "O modo automático agora é o padrão nos planos Pro, Max e Team do Claude Code"
date: 2026-08-08
categoria: "claude"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Aug/8/auto-mode/#atom-everything"
resumo: "O modo automático agora é o padrão nos planos Claude Code for Pro, Max e Team ( via ). A Anthropic está realmente confiante no modo automático do Claude Code, a ponto de torná-lo a configuração padrão para novas sessões na maioria dos planos do Claude Code a partir de 14 de agosto."
destaque: false
---

O modo automático agora é o padrão nos planos Claude Code for Pro, Max e Team ( via ). A Anthropic está realmente confiante no modo automático do Claude Code, a ponto de torná-lo a configuração padrão para novas sessões na maioria dos planos do Claude Code a partir de 14 de agosto.

Este foi um dos tópicos discutidos em nosso Fireside Chat com Cat Wu e Thariq Shihipar na Feira Mundial de Engenheiros de IA no mês passado. Perguntei a eles como eles executam o Claude Code com segurança dentro do Anthropic (dada a ameaça de injeção imediata) e eles responderam que "Em geral, dentro do Anthropic, quase todas as pessoas usam o modo automático". A Cat Wu então disse:

Vamos publicar alguns testes nas próximas semanas, mas praticamente mitigamos todos os ataques. [...]

para as principais categorias de riscos com as quais estamos preocupados, como injeção imediata e exfiltração de dados, os riscos são muito menores do que o revisor humano médio.

Este novo artigo tem essas avaliações - em particular um teste em 1.053 testadores pagos onde:

No meio de cada sessão, um único prompt de permissão era trocado por um comando claramente perigoso, e o fornecedor registrava se o testador o aprovava.

Todos os participantes tiveram a mesma experiência. Apenas 13,6% dos humanos recusaram essa ação prejudicial. O modo automático teria bloqueado 89% dessas ações.

Claro, isso ainda deixa 11% dos casos em que o modo automático não teria impedido a ação!

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Aug/8/auto-mode/#atom-everything)

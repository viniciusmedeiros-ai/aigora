---
title: "DeepSeek V4 - quase na fronteira, uma fração do preço"
date: 2026-04-24
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Apr/24/deepseek-v4/#atom-everything"
resumo: "O último lançamento de modelo do laboratório chinês de IA DeepSeek foi o V3.2 (e V3.2 Speciale) em dezembro passado. Eles acabaram de lançar o primeiro de sua tão esperada série V4 na forma de dois modelos de visualização, DeepSeek-V4-Pro e DeepSeek-V4-Flash ."
destaque: false
---

O último lançamento de modelo do laboratório chinês de IA DeepSeek foi o V3.2 (e V3.2 Speciale) em dezembro passado. Eles acabaram de lançar o primeiro de sua tão esperada série V4 na forma de dois modelos de visualização, DeepSeek-V4-Pro e DeepSeek-V4-Flash .

Ambos os modelos são uma mistura de especialistas de 1 milhão de tokens de contexto. O Pro tem 1,6T de parâmetros totais, 49B ativo. O flash é 284B no total, 13B ativo. Eles estão usando a licença padrão do MIT.

Acho que isso faz do DeepSeek-V4-Pro o novo maior modelo de pesos abertos. É maior que Kimi K2.6 (1.1T) e GLM-5.1 (754B) e mais do que o dobro do tamanho do DeepSeek V3.2 (685B).

O Pro tem 865 GB no Hugging Face, o Flash tem 160 GB. Espero que um Flash levemente quantizado seja executado no meu MacBook Pro M5 de 128 GB. É possível que o modelo Pro seja executado nele se eu puder transmitir apenas os especialistas ativos necessários do disco.

llm install llm-openrouter llm openrouter refresh llm -m openrouter/deepseek/deepseek-v4-pro 'Generate an SVG of a pelican riding a bicycle' Here's the pelican for DeepSeek-V4-Flash :

Para comparação, dê uma olhada nos pelicanos que recebi do DeepSeek V3.2 em dezembro , V3.1 em agosto e V3-0324 em março de 2025 .

Os pelicanos são muito bons, mas o que é realmente notável aqui é o custo . O DeepSeek V4 é um modelo muito, muito barato.

Aqui está a página de preços do DeepSeek . Eles estão cobrando $ 0,14/milhão de tokens de entrada e $ 0,28/milhão de tokens de saída para Flash, e $ 1,74/milhão de entrada e $ 3,48/milhão de saída para Pro.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Apr/24/deepseek-v4/#atom-everything)

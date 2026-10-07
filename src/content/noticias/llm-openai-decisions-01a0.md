---
title: "llm-openai-decisões 0.1a0"
date: 2026-10-06
categoria: "atualizacoes"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Oct/6/llm-openai-decisions/"
resumo: "A OpenAI lançou sua nova API de Decisões no estilo Jev, conforme anunciado anteriormente no DevDay da semana passada."
destaque: false
---

A OpenAI lançou sua nova API de Decisões no estilo Jev, conforme anunciado anteriormente no DevDay da semana passada.

Como já tenho um plugin llm-typesafe para conversar com o JEV, fiz com que o GPT-6 Astra lesse a nova documentação da API OpenAI e criasse um plugin llm-openai-decisions inspirado no llm-typesafe .

Ao contrário do JEV, o novo modelo de decisão gpt-6-luna suporta entrada de imagem, além de texto. Ambos os modelos cobram pela entrada e não pela saída: o OpenAI é de 10 centavos por milhão de tokens de entrada, o JEV é de 4,2 centavos por milhão.

Caso contrário, a forma do API é muito semelhante ao Jev, pelo menos conceitualmente. O JEV suporta três tipos de perguntas para sim/não, escolhas ou pontuações. O OpenAI Decisions suporta os mesmos três tipos.

llm install llm-openai-decisions Aqui está um exemplo de consulta contra um anexo de imagem:

llm -m openai-decisions/gpt-6-luna \ -a https://static.simonwillison.net/static/2025/two-pelicans.jpg \ -s 'Esta imagem contém algum mamífero?' E exemplo de saída:

{ "type" : " predicate " , "name" : " evaluation " , "probability" : 0.0 } Consulte o README para obter detalhes completos sobre como executar os outros tipos de perguntas.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Oct/6/llm-openai-decisions/)

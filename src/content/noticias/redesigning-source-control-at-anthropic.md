---
title: "Redesenhando o controle de fonte no Anthropic"
date: 2026-10-13
categoria: "claude"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/"
resumo: "Redesenhar o controle de origem no Anthropic ( via ) Peça interessante do Anthropic descrevendo por que e como eles construíram sua própria alternativa personalizada ao Git, com base no aumento dramático na taxa de alterações em seu código após os últimos seis meses."
destaque: false
---

Redesenhar o controle de origem no Anthropic ( via ) Peça interessante do Anthropic descrevendo por que e como eles construíram sua própria alternativa personalizada ao Git, com base no aumento dramático na taxa de alterações em seu código após os últimos seis meses.

Em maio de 2026, a Anthropic registrou uma média de cerca de 2.500 alterações de código mescladas por dia; em setembro, mesclamos mais de 30.000 por dia.

Eles incluíram um gráfico mostrando essas mudanças. Pedi a Claude que modificasse seu gráfico ( codifique aqui ) para adicionar marcadores para os lançamentos públicos de cada um de seus modelos em 2026:

Isso mostra as datas de lançamento público, não a data em que os modelos ficaram disponíveis para uso interno da Anthropic. Meu palpite é que a introdução de modelos de classe Fable/Mythos é um fator-chave no aumento da velocidade de codificação.

"Antique" é o novo sistema de revisão de código. O sistema de controle de fonte é chamado Scion e soa para mim como uma reinvenção do controle de fonte centralizado nos moldes do Subversion. Eles tinham alguns requisitos bastante extremos:

A história da nossa filial principal sozinha é de quase 100 GB, e uma cópia de trabalho compactada tem mais de 25 GB. Realizamos cerca de 25 milhões de checkouts de código por dia para CI, antes de contar ambientes de desenvolvedor, sandboxes de agentes e trabalhos de pesquisa. Buscado ingenuamente, isso seria mais de 600 PB de tráfego git por dia.

O novo sistema foi construído por uma equipe de sete pessoas, e a migração do Git foi concluída em cinco meses.

Quando perguntado no Hacker News sobre a falta de suporte off-line, o engenheiro da Scion, Nick G, respondeu :

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/)

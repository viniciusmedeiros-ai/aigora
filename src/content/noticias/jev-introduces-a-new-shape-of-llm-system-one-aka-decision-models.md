---
title: "A JEV apresenta uma nova forma de LLM - System One, também conhecido como Modelos de Decisão"
date: 2026-09-21
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Sep/21/jev/"
resumo: "Na semana passada, a TypeSafe AI revelou o Jev , seu primeiro exemplo de uma nova categoria de modelo que eles estão chamando de \"modelos System One\" (estou com Maggie Appleton, acho que \"modelos de decisão\" é um nome melhor para eles). Jev é uma variante interessante no formato LLM usual: ainda aceita entradas de texto, mas ins"
destaque: false
---

Na semana passada, a TypeSafe AI revelou o Jev , seu primeiro exemplo de uma nova categoria de modelo que eles estão chamando de "modelos System One" (estou com Maggie Appleton, acho que "modelos de decisão" é um nome melhor para eles). Jev é uma variante interessante no formato LLM usual: ainda aceita entradas de texto, mas em vez de saída de texto retorna números de ponto flutuante correspondentes a categorias, perguntas sim/não, classificações e pontuações de confiança associadas.

Pense em Jev como uma chamada de função de inteligência de fronteira: entrada de estado não estruturado, saída de decisões probabilísticas digitadas.

Também é muito rápido e muito barato . Os LLMs regulares são precificados em termos de tokens de entrada e saída, com a saída geralmente cobrada a taxas significativamente mais altas. As cobranças de JEV apenas para entrada-saída são gratuitas - e o preço de entrada de seu primeiro modelo é de $ 0,042 por milhão de tokens - mais barato do que o GPT-5 Nano da OpenAI ($ 0,05/milhão).

Jev lets you ask questions about text or semi-structured data. You compose a “state” object containing a string, array of strings, or set of name-value pairs—this might describe an article, or a customer, or any other kind of record. You then send that to their API with one or more questions, and get a reply back for each.

The Jev API can accept a single document (“state”) and as many questions as you can cram into the context window. Questions are evaluated in parallel, so sending many questions should take a similar time to sending just one.

Acho que o enquadramento do modelo de decisão é útil para entender onde usar o Jev. É ótimo para qualquer coisa que possa ser expressa como uma tarefa de classificação - pense na detecção de spam, sugerindo rótulos, priorização e classificação.

Eu também tenho experimentado com ele para reclassificação de pesquisa, onde você busca 100 correspondências prováveis usando um algoritmo barato como o BM25 e, em seguida, faz com que o JEV pontue esses 100 candidatos quanto à relevância em relação à consulta original.

Algo que achei um pouco desconfortável sobre o Jev é como ele representa uma regressão ainda maior em relação aos sistemas de aprendizado de máquina de caixa preta.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Sep/21/jev/)

---
title: "O Qwen 3.8 27B no meu laptop também pode interpretar os pesos do modelo"
date: 2026-11-03
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/"
resumo: "O artigo de ontem foi Sparks of Weight-Space Programming: LLMs can natively read &amp; write neural network weights de Rikiya Takehi, Jayden Teoh, Alex Zhang e Omar Khattab. O artigo (OK, os autores classificam como um “post de blog”, mas é em forma de papel) descobriu que os modelos de fronteira, em particular"
destaque: false
---

O artigo de ontem foi Sparks of Weight-Space Programming: LLMs can natively read &amp; write neural network weights de Rikiya Takehi, Jayden Teoh, Alex Zhang e Omar Khattab. O artigo (OK, os autores classificam como um "post de blog", mas é em forma de papel) descobriu que os modelos de fronteira, em particular o GPT-6 Astra, podem interpretar e modificar os pesos brutos de um modelo de aprendizado de máquina - literalmente uma descrição de texto do modelo contendo um monte de números de ponto flutuante. Tenho brincado com um dos exemplos do jornal e tenho o prazer de compartilhar que o Qwen 3.8 27B em execução no meu laptop também pode fazer isso!

Aqui está o destaque de seu resumo, descrevendo recursos impressionantes para o GPT-6 Astra e cunhando o termo Weight-Space Programming para quando os LLMs analisam e modificam os pesos do modelo:

Apenas olhando para os pesos brutos, o GPT-6 Astra pode dizer o que uma rede foi treinada para fazer . E sem nenhum feedback do ambiente, não tem problemas para escrever, do zero, pequenas redes de jogos que superam as redes treinadas com PPO por 100 milhões de passos.

Da mesma forma, solicitado a tornar o Qwen3.5-0.8B melhor em matemática sem gradientes, o Astra identifica um problema em seus pesos, causando loops de raciocínio que a própria placa modelo do Qwen adverte e corrige isso editando nativamente 0,016% dos pesos . Com as mesmas configurações de amostragem, esta correção de peso aumenta o MATH-500 de 7,9% para 48,1% e generaliza fora da caixa para a instrução seguinte, aumentando o IFEval em 3x

Tudo isso é possível sem permitir que o Astra escreva loops de treinamento. Ele usa seu raciocínio para descobrir o que cada parte de uma rede neural computa, ou deve computar, e altera os pesos de acordo. Chamamos isso de Programação Peso-Espaço .

O artigo combina dois tópicos que acho que merecem ser tratados separadamente. A primeira é o que os modelos podem fazer com pesos brutos sem executar ferramentas ou código. O segundo explora o quão bem os modelos, uma vez armados com código, podem executar operações para atualizar e melhorar outros modelos.

o autor do spaCy, Matthew Honnibal, chamou o artigo de enganoso por confundir os dois, e Sean Goedecke desconstruiu o exemplo de atualização Qwen3.5-0.8B como seguindo as mesmas etapas que um pesquisador humano de AM usaria.

Vou me concentrar na questão sem ferramentas, que acho que é a mais interessante das duas.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/)

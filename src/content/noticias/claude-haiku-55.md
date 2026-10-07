---
title: "Claude Haiku 5.5"
date: 2026-10-07
categoria: "claude"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/"
resumo: "Como prometido anteriormente, aqui está o novo modelo rápido e de baixo custo da Anthropic: Apresentando Claude Haiku 5.5 ."
destaque: false
---

Como prometido anteriormente, aqui está o novo modelo rápido e de baixo custo da Anthropic: Apresentando Claude Haiku 5.5 .

O Haiku anterior, 4.5, estava mostrando muito sua idade. Ele foi lançado há quase um ano e custava US $ 1/milhão e US $ 5/milhão - relativamente caro mesmo naquela época, e 10 vezes o preço do GPT-6 Luna da OpenAI, lançado no mês passado.

O novo Haiku corresponde exatamente ao preço do GPT-6 Luna -$ 0,10/$ 0,50- até 100.000 tokens. Além de 100.000 tokens, o preço aumenta 5x para $ 0,50/$ 2,50. O próprio Luna tem um aumento de preço de 272.000 tokens, mas apenas para $ 0,20/$ 0,75.

O Haiku 5.5 também usa um tokenizador novo e menos generoso. Minha ferramenta Contador de Tokens Claude mostra que o mesmo prompt longo usa cerca de 1,25x mais tokens com o Haiku 5.5 em comparação com o Haiku 4.5, então há um aumento de preço oculto.

Se suas cargas de trabalho caberem em 100.000 tokens, o Haiku tem o mesmo preço que o Luna e relata pontuações de benchmark mais altas. Acima de 100.000 tokens, Luna parece um negócio muito melhor.

O lançamento mais recente do llm-antropic finalmente o corrigiu para que eu não precisasse enviar uma nova versão desse plugin para cada novo modelo. Testei o novo modelo assim:

llm install -U llm-antropic llm anthropic refresh llm -m claude-haiku-5.5 "Generate an SVG of a pelican riding a bicycle" -o thinking_effort low Pelicans Aqui estão os pelicanos para baixo, médio, alto, xhigh e máx . O novo Haiku não permite que você desative o raciocínio e o padrão é médio . Eu tenho um bom quadro de bicicleta para tudo além de baixo . O pelicano de baixo esforço custou 0,0936 centavos e levou 7 segundos.

Este pelicano de esforço máximo levou 5 minutos e 9 segundos para ser gerado, mas ainda assim me custou apenas 3,3826 centavos :

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/)

---
title: "A nova família GPT-5.6: Luna, Terra, Sol"
date: 2026-07-09
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jul/9/gpt-5-6/#atom-everything"
resumo: "O mais recente modelo emblemático do OpenAI atingiu a disponibilidade geral esta manhã e vem em três tamanhos: Luna, Terra e Sol (do menor para o maior)."
destaque: false
---

O mais recente modelo emblemático do OpenAI atingiu a disponibilidade geral esta manhã e vem em três tamanhos: Luna, Terra e Sol (do menor para o maior).

Os novos modelos são precificados por 1 milhão de tokens de entrada/saída como Luna $ 1/$ 6, Terra $ 2,50/$ 15, Sol $ 5/$ 30. Para comparação, a série Claude Opus é de $ 5/$ 25 e a Claude Fable 5 é de $ 10/$ 50, mas o preço por milhão de tokens não nos diz muito agora que o número de tokens de raciocínio pode diferir muito entre os modelos para a mesma tarefa.

Todos os três modelos têm um limite de conhecimento de 16 de fevereiro de 2026, uma janela de contexto de um milhão de tokens e 128.000 tokens de saída máximos.

A maior reivindicação de benchmark da OpenAI diz respeito ao desempenho agêntico de longa duração, com um benchmark mostrando que todos os três modelos superam Claude Fable 5:

Treinamos o GPT-5.6 para obter um trabalho mais útil de cada token. No último exame dos agentes, uma avaliação de fluxos de trabalho profissionais de longa duração em 55 campos, o GPT-5.6 sol estabelece um novo recorde de 53,6, superando Claude Fable 5 (raciocínio adaptativo) em 13,1 pontos. Mesmo com raciocínio médio, ele supera Fable 5 em 11,4 pontos a cerca de um quarto do custo estimado. Essa eficiência se estende a modelos menores, que são essenciais para tornar a inteligência mais abundante e acessível: GPT-5.6 Terra e GPT-5.6 Luna superam o Fable 5 em cerca de um décimo sexto do custo.

Curiosamente, um benchmark autorreferido em que o Fable 5 esmagou a família GPT-5.6 foi o SWE-Bench Pro, onde o Fable 5 obteve 80% em comparação com o GPT-5.6 Sol, obtendo 64,6%. Isso pode ajudar a explicar por que a OpenAI optou por publicar este artigo ontem especificamente chamando o SWE-Bench Pro por problemas que encontraram ao auditar esse benchmark:

À luz desses resultados, estimamos que ~30% das tarefas do SWE-bench Pro estão quebradas e aconselhamos que os desenvolvedores de modelos examinem cuidadosamente os resultados

Tive algum acesso antecipado ao GPT-5.6 Sol - é definitivamente muito competente, embora até agora não me pareceu melhor do que o Fable no tipo de tarefas de codificação complexas que tenho usado com o modelo da Anthropic.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jul/9/gpt-5-6/#atom-everything)

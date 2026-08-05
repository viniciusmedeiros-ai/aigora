---
title: "llm-antrópico 0,26"
date: 2026-08-04
categoria: "claude"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Aug/4/llm-anthropic/#atom-everything"
resumo: "Inclui novos recursos habilitados pelo LLM 0.32 : Novos modelos: claude-fable-5 , claude-sonnet-5 e claude-opus-5. # 75 , #76 Adicionadas ferramentas do lado do servidor para WebSearch , WebFetch, CodeExecution e AnthropicMCP , disponíveis através da interface T do LLM ou ferramentas Python = ."
destaque: false
---

Inclui novos recursos habilitados pelo LLM 0.32 : Novos modelos: claude-fable-5 , claude-sonnet-5 e claude-opus-5. # 75 , #76 Adicionadas ferramentas do lado do servidor para WebSearch , WebFetch, CodeExecution e AnthropicMCP , disponíveis através da interface T do LLM ou ferramentas Python = .

As opções anteriores -o web_search* foram removidas em favor do -T WebSearch . #79 Atualizado para llm&gt;=0.32 . Raciocínio, chamadas de ferramentas, resultados de ferramentas e resultados de ferramentas do lado do servidor agora são transmitidos como eventos digitados.

O raciocínio para os prompts llm CLI agora exibe o erro padrão, a menos que você passe --hide-reasoning/-R . Simplificou o pensamento estendido para pensar e pensar_esforço ( baixo , médio , alto , xhigh ou máximo ).

Os modelos Claude 5 pensam por padrão; -o pensar 0 desativa o pensamento para o Soneto 5 e Opus 5, enquanto Fable 5 sempre pensa. -R/--hide-reasoning agora omite o raciocínio das respostas e registros.

As opções thinking_budget , thinking_display e thinking_adaptive foram removidas. #80

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Aug/4/llm-anthropic/#atom-everything)

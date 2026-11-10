---
title: "llm-antrópico 0,31"
date: 2026-11-09
categoria: "claude"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Nov/9/llm-anthropic/"
resumo: "Anthropic lançou Fable 5.2 e Mythos 5.2 hoje. Eu os adicionei ao llm-antrópico, então agora você pode executar prompts através do Fable 5.2 assim:"
destaque: false
---

Anthropic lançou Fable 5.2 e Mythos 5.2 hoje. Eu os adicionei ao llm-antrópico, então agora você pode executar prompts através do Fable 5.2 assim:

uv tool install llm llm install llm-antropic llm keys set anthropic # paste key here llm -m claude-fable-5.2 "Gerar um SVG de um pelicano andando de bicicleta" Eu corri pelicanos em todos os cinco níveis de raciocínio - baixo , médio, alto, xhigh e máximo . Você pode ver todos eles aqui - aqui está o melhor resultado que obtive, do xhigh :

max não conseguiu retornar uma imagem, ficando sem tokens depois de gastar 128.000 pensando neles . Esse é o mesmo bug que eu vi com o Opus 5.5 - mas é novo para a série Fable, tanto Fable 5 quanto Fable 5.1 retornaram pelicanos de esforço máximo muito bem.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Nov/9/llm-anthropic/)

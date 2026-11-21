---
title: "llm-gemini 0.38.1"
date: 2026-11-20
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Nov/20/llm-gemini/"
resumo: "O Gemini 4 Carbon só oferece suporte a níveis de raciocínio baixo, médio e alto, mas o Gemini 4 Hydrogen e o Gemini 4 Neon têm um nível extra xalto."
destaque: false
---

O Gemini 4 Carbon só oferece suporte a níveis de raciocínio baixo, médio e alto, mas o Gemini 4 Hydrogen e o Gemini 4 Neon têm um nível extra xalto.

Eu não percebi isso quando adicionei esses modelos ao plugin llm-gemini, mas agora o problema está corrigido nesta versão pontual.

A configuração xhigh para o Hydrogen faz uma diferença significativa. Atualizei minha tabela de comparação do Gemini 4. Observe como o Hydrogen na configuração high usou 5.311 tokens de saída e custou US$ 0,0399, mas o mesmo modelo na configuração xhigh usou 31.477 tokens de saída, custou US$ 0,2361 e produziu um pelicano que é competitivo com o Gemini 4 Neon:

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Nov/20/llm-gemini/)

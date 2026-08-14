---
title: "llm-gemini 0.33"
date: 2026-08-13
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Aug/13/llm-gemini/"
resumo: "Já faz um tempo desde o último lançamento da llm-gemini. Esta versão do plugin adiciona suporte para a versão atual do Gemini 3.7 Flash, além de gemini-3.6-flash , gemini-3.5-flash-lite e dois modelos de incorporação gemini-embedding-2 e gemini-embedding-001 ."
destaque: false
---

Já faz um tempo desde o último lançamento da llm-gemini. Esta versão do plugin adiciona suporte para a versão atual do Gemini 3.7 Flash, além de gemini-3.6-flash , gemini-3.5-flash-lite e dois modelos de incorporação gemini-embedding-2 e gemini-embedding-001 .

O plugin também é atualizado para compatibilidade com o LLM 0.32, o que significa que agora você pode ver traços de raciocínio e também pode ativar ferramentas do lado do servidor usando este padrão:

llm -m gemini-3.7-flash -T CodeExecution \ 'use python para calcular (fatorial de 13) * 3' Eu fiz com que o Gemini 3.7 Flash me desenhasse alguns pelicanos andando de bicicleta em esforços de pensamento alto, médio e baixo (mínimo, que era uma opção no 3.6 Flash, foi removido no 3.7.) Aqui está o de alto nível, o que é muito bom:

Uma pegadinha, porém: o pelicano que mostrei aqui foi renderizado com o Safari. Tanto o Firefox quanto o Chrome o processam de forma diferente, devido ao Safari ser mais tolerante a elementos SVG &lt;filter&gt; vazios do que os outros dois navegadores.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Aug/13/llm-gemini/)

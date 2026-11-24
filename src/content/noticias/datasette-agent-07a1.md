---
title: "datasette-agent 0.7a1"
date: 2026-11-24
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Nov/24/datasette-agent/"
resumo: "Uma pequena melhoria no Datasette Agent: as sessões de chat podem abrir um painel lateral de iframe, e esse painel pode então navegar para páginas diferentes. Esta versão melhora a navegação por meio de hashes de fragmentos, para uma integração mais profunda com outros plugins do Datasette que atualizam os hashes de fragmentos quando o usuário interage com"
destaque: false
---

Uma pequena melhoria no Datasette Agent: as sessões de chat podem abrir um painel lateral de iframe, e esse painel pode então navegar para páginas diferentes. Esta versão melhora a navegação por meio de hashes de fragmentos, para uma integração mais profunda com outros plugins do Datasette que atualizam os hashes de fragmentos quando o usuário interage com o plugin de uma forma que altera o estado.

Eu criei isso para corrigir alguns bugs da versão 0.2a0 do datasette-charts, que é muito mais interessante.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Nov/24/datasette-agent/)

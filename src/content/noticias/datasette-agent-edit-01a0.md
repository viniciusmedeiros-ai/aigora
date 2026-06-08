---
title: "datasette-agent-edit 0.1a0"
date: 2026-06-07
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jun/7/datasette-agent-edit/#atom-everything"
resumo: "Estou planejando vários plugins para o Datasette Agent que podem fazer edições em trechos de texto existentes - coisas como edição colaborativa de Markdown, atualização de grandes consultas SQL e edição de arquivos SVG."
destaque: false
---

Estou planejando vários plugins para o Datasette Agent que podem fazer edições em trechos de texto existentes - coisas como edição colaborativa de Markdown, atualização de grandes consultas SQL e edição de arquivos SVG.

A edição autêntica de texto é um pouco complicada de acertar. Meu design publicado favorito para isso é para o editor de texto Claude, que implementa as seguintes ferramentas:

Em vez de recriar esses padrões para cada plugin que precisa deles, decidi criar este plugin base, o datasette-agent-edit , que implementa as ferramentas principais de uma forma que permite que elas sejam adaptadas para outros plugins.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jun/7/datasette-agent-edit/#atom-everything)

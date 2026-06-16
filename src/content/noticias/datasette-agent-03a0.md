---
title: "datasette-agent 0.3a0"
date: 2026-06-15
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jun/15/datasette-agent/#atom-everything"
resumo: "Adicionei um mecanismo para solicitar a aprovação do usuário no agente de datasette 0.2a0 . A nova ferramenta execute_write_sql agora pode solicitar ao usuário todos os tipos de operações úteis. Aqui está um exemplo em que adiciono alguns avistamentos de pelicanos à minha tabela pelican_sightings:"
destaque: false
---

Adicionei um mecanismo para solicitar a aprovação do usuário no agente de datasette 0.2a0 . A nova ferramenta execute_write_sql agora pode solicitar ao usuário todos os tipos de operações úteis. Aqui está um exemplo em que adiciono alguns avistamentos de pelicanos à minha tabela pelican_sightings:

A nova versão também aprimora o modo de terminal de bate-papo do agente de datasette para suportar aprovações e adiciona várias novas opções, incluindo o modo --unsafe para aprová-las automaticamente:

O comando datasette agent chat content.db -m gpt-5.5 --unsafe agora pode ser usado para conversar diretamente com um banco de dados específico e modificá-lo diretamente por meio de prompts como "criar uma tabela de notas", "adicionar uma nota sobre X" etc.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jun/15/datasette-agent/#atom-everything)

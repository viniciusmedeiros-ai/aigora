---
title: "Agente de Datasette"
date: 2026-05-21
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/May/21/datasette-agent/#atom-everything"
resumo: "Acabamos de anunciar o primeiro lançamento do Datasette Agent , um novo assistente de IA extensível para o Datasette. Trabalho na minha biblioteca LLM Python há pouco mais de três anos, e o Datasette Agent representa o momento em que o LLM e o Datasette finalmente se reúnem. Estou muito animada com isso!"
destaque: false
---

Acabamos de anunciar o primeiro lançamento do Datasette Agent , um novo assistente de IA extensível para o Datasette. Trabalho na minha biblioteca LLM Python há pouco mais de três anos, e o Datasette Agent representa o momento em que o LLM e o Datasette finalmente se reúnem. Estou muito animada com isso!

O Datasette Agent fornece uma interface de conversação para fazer perguntas sobre os dados que você armazenou no Datasette. Adicione o plugin datasette-agent-charts e ele também pode gerar gráficos dos seus dados.

O post de anúncio (no novo blog do projeto Datasette) inclui este vídeo de demonstração:

Gravei o vídeo na nova instância de demonstração ao vivo do agent.datasette.io, que executa o Datasette Agent em bancos de dados de exemplo, incluindo o clássico global-power-plants do WRI , e uma cópia do backup do Datasette do meu blog.

A demonstração ao vivo é executada no Gemini 3.1 Flash-Lite - é barata, rápida e não tem problemas para escrever consultas SQLite.

SELECIONE title, commentary, created FROM blog_beat WHERE beat_type = ' sighting ' AND (title LIKE ' %pelican% ' OR commentary LIKE ' %pelican% ' ) ORDER BY created DESC LIMIT 5 E respondeu:

A observação incluiu um Pelicano Marrom da Califórnia, junto com um Common Loon, um Canada Goose, um Striped Shore Crab e um California Sea Lion.

Aqui está o avistamento no meu blog e a exportação Markdown da transcrição completa da conversa.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/May/21/datasette-agent/#atom-everything)

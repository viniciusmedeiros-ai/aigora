---
title: "Usando o DSPy para avaliar e melhorar os prompts do sistema SQL do Datasette Agent"
date: 2026-07-02
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/#atom-everything"
resumo: "Pesquisa Usando o DSPy para avaliar e melhorar os prompts do sistema SQL do Datasette Agent — Aproveitando a estrutura do DSPy, este projeto avalia e refina os prompts do sistema de produção principal usados pelo respondedor de perguntas SQL somente leitura do Datasette Agent. A metodologia envolve um arnês onde os agentes da DSPy faturam"
destaque: false
---

Pesquisa Usando o DSPy para avaliar e melhorar os prompts do sistema SQL do Datasette Agent — Aproveitando a estrutura do DSPy, este projeto avalia e refina os prompts do sistema de produção principal usados pelo respondedor de perguntas SQL somente leitura do Datasette Agent. A metodologia envolve um arnês onde os agentes DSPy invocam as implementações reais da ferramenta do Agente de Datasette e solicita contra um Datasette em processo ao vivo, e um conjunto de dados padrão-ouro gerado automaticamente fornece uma avaliação rigorosa por meio de métricas personalizadas.

Uma das palestras da AIE desta manhã cobriu o dspy, o que me lembrou que eu queria ver se poderia me ajudar a melhorar o prompt do sistema usado pelo Datasette Agent - então disparei uma tarefa de pesquisa assíncrona no Claude Code para web usando Claude Fable 5:

Instale o Datasette alpha e o datasette-agent e o dspy mais recentes e descubra como usar o dspy para avaliar e melhorar os principais prompts do sistema usados pelo Datasette Agent para o recurso em que ele pode executar consultas SQL somente leitura para responder a perguntas do usuário sobre dados.

A Fable optou por testar usando GPT 4.1 mini e nano, e identificou várias direções promissoras para melhorias. Eu particularmente gosto deste:

A listagem de esquemas fornece apenas nomes de tabelas; o conselho "não chame describe_table se você já tiver as informações" causou adivinhação de nome de coluna (page_count, o.order_id, first_name) e loops de repetição de erro nos traços de linha de base. Inclua os nomes das colunas na listagem de esquemas do prompt ou suavize esse conselho.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/#atom-everything)

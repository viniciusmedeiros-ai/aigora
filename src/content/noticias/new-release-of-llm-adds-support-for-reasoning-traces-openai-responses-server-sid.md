---
title: "A nova versão do LLM adiciona suporte para traços de raciocínio, respostas OpenAI, ferramentas do lado do servidor e registro mais inteligente"
date: 2026-08-04
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything"
resumo: "Eu lancei o LLM 0.32 esta manhã, a nova versão mais significativa do LLM desde o lançamento inicial do projeto. A nova versão inclui suporte para traços de raciocínio visíveis, ferramentas de provedor do lado do servidor, logs SQLite endereçáveis por conteúdo redesenhados, novos modelos e novos recursos habilitados pelo OpenAI"
destaque: false
---

Eu lancei o LLM 0.32 esta manhã, a nova versão mais significativa do LLM desde o lançamento inicial do projeto. A nova versão inclui suporte para traços de raciocínio visíveis, ferramentas de provedor do lado do servidor, logs SQLite endereçáveis por conteúdo redesenhados, novos modelos e novos recursos habilitados pela API de respostas OpenAI. Também lancei uma nova versão do plugin llm-antropic com atualizações substanciais por conta própria.

A execução do LLM em modelos de raciocínio agora exibe seus traços de raciocínio para o erro padrão, para que você possa ver o que eles estão "pensando" sem que essas informações sejam incluídas na saída padrão que você pode canalizar para outra ferramenta. Adicione -R/--hide-reasoning para desativar isso.

O LLM inclui suporte pronto para uso para a família de modelos GPT-5.6, e o novo modelo padrão usado com o "prompt" llm é agora o GPT-5.6 Luna barato, mas capaz.

As chamadas LLM agora podem usar ferramentas do lado do servidor de vários provedores. O OpenAI fornece um ambiente de execução de código como uma ferramenta do lado do servidor; o LLM agora pode executar prompts que se beneficiam disso da seguinte forma:

llm --tool CodeInterpreter ' Show current python and SQLite versions ' O OpenAI também recebe uma ferramenta WebSearch.

O plugin llm-antropic adiciona WebSearch , WebFetch , CodeExecution e AnthropicMCP, que se parece com isso:

llm -m claude-sonnet-5 -T 'AnthropicMCP ("https://datasette.simonwillison.net/-/mcp") ' \ ' quantas linhas na tabela blog_blogmark? ' Isso faz com que o Anthropic execute chamadas MCP no meu novo plugin datasette-mcp como parte de uma única interação de solicitação/resposta com sua API.

O novo comando llm openai endpoint fornece uma ferramenta para executar prompts em qualquer ponto de extremidade compatível com OpenAI como uma linha única. Estes não são registrados, o que torna esta uma ferramenta útil para executar prompts únicos contra qualquer coisa que fale a língua franca do mundo da API LLM.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything)

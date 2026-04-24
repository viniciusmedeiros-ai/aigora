---
title: "Um pelicano para GPT-5.5 através da API backdoor semi-oficial do Codex"
date: 2026-04-23
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Apr/23/gpt-5-5/#atom-everything"
resumo: "O GPT-5.5 foi lançado . Ele está disponível no OpenAI Codex e está sendo lançado para assinantes pagos do ChatGPT. Tive algum acesso de pré-visualização e descobri que é um modelo rápido, eficaz e altamente capaz. Como geralmente é o caso nos dias de hoje, é difícil colocar em palavras o que há de bom nisso - eu peço para construir coisas e"
destaque: false
---

O GPT-5.5 foi lançado . Ele está disponível no OpenAI Codex e está sendo lançado para assinantes pagos do ChatGPT. Tive algum acesso de pré-visualização e descobri que é um modelo rápido, eficaz e altamente capaz. Como geralmente é o caso nos dias de hoje, é difícil colocar em palavras o que há de bom nisso - eu peço que ele construa coisas e ele constrói exatamente o que eu peço!

As implantações de APIs exigem diferentes salvaguardas e estamos trabalhando em estreita colaboração com parceiros e clientes sobre os requisitos de segurança para atendê-las em escala. Traremos o GPT‑5.5 e o GPT‑5.5 Pro para a API muito em breve.

Quando executo meu benchmark pelicano, sempre prefiro usar uma API, para evitar que prompts ocultos do sistema no ChatGPT ou outros arneses de agentes afetem os resultados.

Um dos pontos de tensão em andamento no mundo da IA nos últimos meses diz respeito à forma como agentes como OpenClaw e Pi interagem com as APIs fornecidas pelos grandes provedores.

Tanto a OpenAI quanto a Anthropic oferecem assinaturas mensais populares que fornecem acesso a seus modelos com um desconto significativo em sua API bruta.

O OpenClaw se integrou diretamente a esse mecanismo e foi impedido de fazê-lo pelo Anthropic. Isso deu início a uma coisa toda. A OpenAI - que recentemente contratou o criador do OpenClaw, Peter Steinberger - viu uma oportunidade para uma vitória fácil no karma e anunciou que o OpenClaw era bem-vindo para continuar a integração com as assinaturas da OpenAI através do mesmo mecanismo usado por sua ferramenta (open source) Codex CLI.

Isso significa que qualquer pessoa pode escrever código que se integre às APIs específicas do OpenAI Codex para se conectar às assinaturas existentes?

Alguém sabe se o OpenAI suporta oficialmente o uso do endpoint/backend-api/codex/responses que o Pi e o Opencode (IIUC) usam?

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Apr/23/gpt-5-5/#atom-everything)

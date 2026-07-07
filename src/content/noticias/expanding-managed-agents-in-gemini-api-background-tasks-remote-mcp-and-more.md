---
title: "Expansão de agentes gerenciados na API do Gemini: tarefas em segundo plano, MCP remoto e muito mais"
date: 2026-07-07
categoria: "mcps"
fonte: "Google AI"
fonteUrl: "https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api/"
resumo: "Estamos anunciando novos recursos no Managed Agents na API do Gemini para que os desenvolvedores possam criar agentes confiáveis e prontos para produção."
destaque: false
imagem: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Managed_agents_feature_bundle_l.max-600x600.format-webp.webp"
---

Estamos adicionando suporte para novos recursos, como execução em segundo plano para interações assíncronas, conexão fácil com servidores MCP remotos, funções personalizadas e atualização de credenciais.

Ouça o artigo Este conteúdo é gerado pelo Google AI. A IA generativa é experimental

Hoje estamos anunciando novos recursos para Agentes Gerenciados na API do Gemini, incluindo execução em segundo plano, integração remota de servidor MCP, chamada de função personalizada e atualização de credenciais em interações . Essas atualizações abordam diretamente o feedback do desenvolvedor e as necessidades do produto para que você possa criar agentes confiáveis e prontos para produção.

Com agentes gerenciados na API Gemini Interactions, você chama um único endpoint e o Gemini lida com raciocínio, execução de código, instalação de pacotes, gerenciamento de arquivos e informações da web dentro de uma sandbox de nuvem isolada.

Se você é um agente de codificação de IA, peça ao seu humano para instalar a habilidade API Interactions: npx skills add google-gemini/gemini-skills --skill gemini-interactions-api.

Abaixo estão exemplos usando o SDK JavaScript do @google/genai. Para Python ou cURL, confira a documentação do agente Antigravity.

Manter uma conexão HTTP aberta para tarefas de longa duração é frágil. Pass background: true para executar interações de forma assíncrona no servidor. A API retorna imediatamente um ID, que os aplicativos clientes podem usar para pesquisar o status, transmitir o progresso ou reconectar-se mais tarde, enquanto o agente termina remotamente. Para mais detalhes, leia o guia de execução em segundo plano.

Em vez de escrever middleware de proxy personalizado para acessar bancos de dados privados ou APIs internas, agora você pode conectar agentes gerenciados diretamente a servidores MCP (Model Context Protocol) remotos.

---

**Fonte original:** [Google AI](https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api/)

---
title: "Agentes gerenciados da API Gemini: 3.6 Flash, hooks e muito mais"
date: 2026-07-28
categoria: "agents"
fonte: "Google AI"
fonteUrl: "https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/"
resumo: "Estamos anunciando ainda mais novos recursos no Managed Agents na API do Gemini para que os desenvolvedores possam criar agentes confiáveis e prontos para produção."
destaque: false
imagem: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/unnamed_2_vNnOv20.max-600x600.format-webp.webp"
---

Agentes gerenciados na API do Gemini agora têm como padrão o Flash do Gemini 3.6. Novos ganchos de ambiente permitem bloquear, fiapos ou chamadas de ferramenta de auditoria dentro da área restrita. Além disso, adicionamos controles de orçamento, gatilhos agendados e acesso gratuito às modalidades.

Os agentes gerenciados na API do Gemini estão obtendo ganchos de ambiente, seleção de modelos e acesso gratuito ao nível. Esses recursos se baseiam em nossa versão anterior, introduzindo tarefas em segundo plano e integração remota de servidores MCP.

Com agentes gerenciados na API Gemini Interactions, uma única chamada de API coordena, raciocina, executa código, instala pacotes, gerencia arquivos e recupera a web dentro de uma sandbox de nuvem isolada.

Se você estiver usando um assistente de codificação de IA, solte-o em seu terminal para dar acesso à habilidade Interactions API: npx skills add google-gemini/gemini-skills --skill gemini-interactions-api.

Abaixo estão exemplos usando o @google/genai TypeScript/JavaScript SDK. Para Python ou cURL, confira a documentação do agente Antigravity.

npm install @google/genai Gemini 3.6 O Flash agora é o padrão O agente antigravity-preview-05-2026 agora executa o Gemini 3.6 Flash por padrão. Nenhuma alteração de código é necessária. A sua próxima interação é ativada automaticamente.

Você também pode selecionar modelos explicitamente passando agent_config.model ao criar uma interação ou agente gerenciado. Use o Gemini 3.5 Flash-Lite para reduzir o custo ou fixe no seu modelo de preferência.

import {GoogleGenAI} from "@google/genai"; const client = new GoogleGenAI ({}); const interaction = await client.interactions.create ({ agent: "antigravity-preview-05-2026", input: "Audite todas as dependências em package.json, atualize pacotes desatualizados e verifique a compilação executando o teste npm.", environment: "remote", agent_config: { type: "antigravity", model: "gemini-3.5-flash-lite", }, }); console.log(interaction.output_text); Os modelos suportados incluem:

---

**Fonte original:** [Google AI](https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/)

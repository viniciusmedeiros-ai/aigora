---
title: "Apresentamos a recuperação de ferramentas na API do Gemini"
date: 2026-11-19
categoria: "agents"
fonte: "Google AI"
fonteUrl: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/"
resumo: "Dê aos seus agentes acesso a centenas de ferramentas usando menos tokens com a Recuperação de Ferramentas, agora em versão de prévia na API do Gemini."
destaque: false
imagem: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Tool_retrieval_hero.max-600x600.format-webp.webp"
---

A Recuperação de Ferramentas agora está em versão de prévia na API Gemini Interactions. Carregue os esquemas de parâmetros das ferramentas sob demanda, em vez de enviar sua biblioteca completa de ferramentas em cada prompt. Isso foi projetado para reduzir os tokens de entrada e manter a seleção de ferramentas precisa à medida que seu agente aumenta de escala.

Hoje estamos lançando a Recuperação de Ferramentas na API do Gemini, disponível em versão de prévia na API de Interações.

Quando um agente se conecta a dezenas ou até centenas de ferramentas, o envio de todos os esquemas de parâmetros completos em cada solicitação se acumula rapidamente. Isso aumenta o número de tokens de entrada, adiciona latência e reduz a precisão da seleção de ferramentas à medida que a lista de candidatos cresce. A recuperação de ferramentas permite que seu agente mantenha sua biblioteca completa de ferramentas em espera e carregue os esquemas de parâmetros apenas quando a tarefa atual precisar deles.

Para ativar a Recuperação de Ferramentas, adicione uma ferramenta tool_search à sua solicitação e defina defer_loading: true nas ferramentas que você deseja reter. O modelo ainda vê o nome e a descrição de cada ferramenta adiada, então sabe o que está disponível, mas os esquemas de parâmetros ficam fora do contexto. Quando o modelo precisa de uma ferramenta, ele a solicita pelo nome, a API carrega o esquema completo e o modelo chama a função, tudo isso na mesma solicitação.

from google import genai client = genai.Client() tools = [ {"type": "tool_search"}, { "type": "function", "name": "issue_refund", "description": "Reembolsar um pedido para a forma de pagamento original.", "defer_loading": True, "parameters": { "type": "object", "properties": { "order_id": {"type": "string"}, "amount": {"type": "number"}, }, "required": ["order_id", "amount"], }, }, # ... mais de 50 outras ferramentas adiadas functions (deixe as ferramentas frequentes não adiadas) ] interaction = client.interactions.create( model="gemini-4-hydrogen", input="O pedido A-1042 chegou danificado. Por favor, reembolse US$ 40.", tools=tools, ) Dentro dessa única chamada de API, o modelo procura por issue_refund , a API carrega seu esquema e o modelo emite a function_call . Todas as três etapas aparecem em interaction.steps , facilitando a inspeção. quais ferramentas o modelo considerou ao depurar nomes ou descrições de ferramentas:

"steps": [ { "type": "tool_search_call", "id": "tsc_7f2a", "arguments": {"function_names": ["issue_refund"]}, "signature": "..." }, { "type": "tool_search_result", "call_id": "tsc_7f2a", "result": [{"type": "function", "name": "issue_refund", "parameters": {...}}], "signature": "..." }, { "type": "function_call", "id": "fc_91c3", "name": "issue_refund", "arguments": {"order_id": "A-1042", "amount": 40} } ] A partir daqui, é uma chamada de função normal: seu código executa o reembolso e retorna um function_result.

Não há índice para criar ou hospedar. O Gemini executa a pesquisa no servidor, portanto, as únicas alterações no seu código são a nova ferramenta e um sinalizador nas ferramentas que você deseja adiar. Você pode manter suas ferramentas mais usadas carregadas antecipadamente e adiar as menos usadas.

A recuperação de ferramentas também funciona bem com o armazenamento em cache de prefixos. Os esquemas adiados ficam fora do início do prompt, e os esquemas que o modelo carrega são adicionados mais tarde na conversa, de modo que o prefixo armazenado em cache permanece o mesmo de um turno para outro.

---

**Fonte original:** [Google AI](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/)

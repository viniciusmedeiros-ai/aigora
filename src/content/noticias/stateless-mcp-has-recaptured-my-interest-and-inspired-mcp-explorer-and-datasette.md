---
title: "O MCP apátrida recapturou meu interesse (e inspirou o mcp-explorer e o datasette-mcp)"
date: 2026-07-31
categoria: "mcps"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jul/31/stateless-mcp/#atom-everything"
resumo: "Terça-feira foi o dia do MCP sem estado - o lançamento do MCP 2.0, ou a especificação do Protocolo de Contexto Modelo de 28/07/2026 para usar o nome mais formal, mas menos memorável. Esta é a mudança mais significativa nas especificações do MCP desde o seu lançamento, e também serviu para reacender meu interesse pessoal no protótipo"
destaque: false
---

Terça-feira foi o dia do MCP sem estado - o lançamento do MCP 2.0, ou a especificação do Protocolo de Contexto Modelo de 28/07/2026 para usar o nome mais formal, mas menos memorável. Esta é a mudança mais significativa na especificação do MCP desde o seu lançamento, e também serviu para reacender meu interesse pessoal no protocolo.

Para background: MCP é o Model Context Protocol, que descreve uma maneira padrão de expor novas ferramentas a frameworks de agentes alimentados por LLM. Foi introduzido pela Anthropic em novembro de 2024 , teve um enorme pico de interesse durante grande parte de 2025 e, em seguida, tornou-se um pouco eclipsado pela Skills (outra invenção da Anthropic) quando se tornou evidente que um agente aproveita o acesso a um terminal e se enrola poderia fazer a maior parte do que o MCP fez de uma forma mais flexível. Escrevi sobre isso na minha revisão de 2025 .

Estou voltando para o MCP agora. Dar a um agente um ambiente shell com a capacidade de acessar a Internet é repleto de riscos e requer um modelo forte que seja capaz de conduzir efetivamente esse ambiente. As ferramentas MCP são mais fáceis de auditar e controlar, e simples o suficiente para que modelos menores que rodam em um laptop ainda possam conduzi-los razoavelmente bem.

A nova especificação de MCP sem estado também diminui muito a complexidade da implementação de clientes e servidores para o protocolo. Construí três dessas esta semana!

A melhor demonstração da diferença entre MCP com estado e sem estado está nesta postagem de blog de 21 de maio que apresentou o RC para a nova especificação. Incluía um exemplo claro de antes e depois.

O MCP stateful mais antigo (vou chamá-lo de "MCP legado") exigia duas solicitações HTTP - a primeira para inicializar uma sessão e obter um Mcp-Session-Id , e a segunda para realmente chamar a ferramenta:

POST /mcp HTTP/1.1 Content-Type: application/json { "jsonrpc": "2.0", "id": 1, "method": "initialize", "params": { "protocolVersion": "2025-11-25", "capabilities": { }, "clientInfo": { "name": "my-app", "version": "1.0" } } } POST /mcp HTTP/1.1 Mcp-Session-Id: 1868a90c-3a3f-4f5b Content-Type: application/json { "jsonrpc": "2.0", "id": 2, "method": "tools/call", "params": { "name": "search", "arguments": { "q": "otters" }} } A nova maneira sem estado usa uma única solicitação HTTP que se parece com isso:

POST /mcp HTTP/1.1 MCP-Protocol-Version: 2026-07-28 Mcp-Method: tools/call Mcp-Name: search Content-Type: application/json { "jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": { "name": "search", "arguments": { "q": "otters" }, "_meta": { "io.modelcontextprotocol/clientInfo": { "name": "my-app", "version": "1.0" }} } } Isso é muito mais limpo do lado do cliente e do servidor perspectiva de implementação. Também é mais adequado para criar aplicativos da Web escaláveis, pois agora você não precisa manter o estado do lado do servidor para acompanhar esses IDs de sessão ou se preocupar em rotear a mesma sessão para a mesma máquina de back-end.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jul/31/stateless-mcp/#atom-everything)

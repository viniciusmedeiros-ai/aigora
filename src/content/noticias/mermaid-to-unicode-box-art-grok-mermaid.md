---
title: "Arte de caixa de sereia a unicode (grok-mermaid)"
date: 2026-07-16
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jul/16/grok-mermaid/#atom-everything"
resumo: "Enquanto explorava a base de código para o recém-aberto agente de codificação Grok CLI, me deparei com xai-grok-markdown/src/ mermaid.rs, um \"renderizador de terminal independente para diagramas Mermaid\" escrito em Rust."
destaque: false
---

Enquanto explorava a base de código para o recém-aberto agente de codificação Grok CLI, me deparei com xai-grok-markdown/src/ mermaid.rs, um "renderizador de terminal independente para diagramas Mermaid" escrito em Rust.

Achei que seria divertido experimentar isso em um navegador via WebAssembly. Aqui está o prompt que executei no Claude Code para web (Fable 5), e é assim que a ferramenta resultante se parece:

Autenticação{Authenticated?} Autenticação -->|yes| Rate{Rate limit OK?} Auth -->| no | R401[401 Unauthorized] Rate -->|yes| H(Handle request) Rate -->| no | R429[429 Too Many Requests] H -.-> Log[Audit log] H ==> Resp[200 OK]. Abaixo do código estão os controles rotulados Largura máxima: Ajustar painel de saída, Copiar como texto e Copiar link para este diagrama. O fluxograma renderizado em um fundo escuro flui de cima para baixo: Solicitação de leads recebidos para Authenticated?, quais ramificações sim para Rate limit OK? e não para 401 Unauthorized. Limite de taxa OK? ramificações sim para lidar com solicitações e não para 429 solicitações demais. A solicitação de tratamento se conecta com uma seta pontilhada ao registro de auditoria e uma seta grossa para 200 OK." src="https://static.simonwillison.net/static/2026/grok-mermaid-wasm.png">

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jul/16/grok-mermaid/#atom-everything)

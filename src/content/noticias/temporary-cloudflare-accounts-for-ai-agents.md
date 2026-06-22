---
title: "Contas temporárias da Cloudflare para agentes de IA"
date: 2026-06-21
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts/#atom-everything"
resumo: "Contas temporárias Cloudflare para agentes de IA ( via ) O anúncio diz que isso é \"para agentes de IA\", mas (como é bastante comum nos dias de hoje) o gancho de IA não é realmente necessário, este é um recurso interessante para todos os outros também."
destaque: false
---

Contas temporárias Cloudflare para agentes de IA ( via ) O anúncio diz que isso é "para agentes de IA", mas (como é bastante comum nos dias de hoje) o gancho de IA não é realmente necessário, este é um recurso interessante para todos os outros também.

Versão curta: agora você pode criar um projeto Cloudflare Workers e executá-lo, sem nem mesmo criar uma conta Cloudflare:

o npx wrangler deploy --temporary Cloudflare implantará o aplicativo em um novo projeto efêmero que permanecerá ativo por 60 minutos.

Fiz com que o GPT-5.5 xhigh no Codex Desktop criasse este aplicativo de teste, fornecendo uma ferramenta para seguir redirecionamentos HTTP e retornar o destino final. A implantação temporária funcionou conforme anunciado.

Executar a implantação envia o URL para uma página para reivindicar o novo projeto, se você quiser que ele dure mais de 60 minutos. Veja como é a tela de reivindicação:

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts/#atom-everything)

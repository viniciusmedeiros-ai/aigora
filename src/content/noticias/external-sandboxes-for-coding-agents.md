---
title: "Ambientes de teste externos para agentes de programação"
date: 2026-11-17
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Nov/17/external-sandboxes-for-coding-agents/"
resumo: "Ambientes de teste isolados externos para agentes de programação. Tenho explorado novas maneiras de colocar em sandbox o código executado por agentes, com foco em tornar mais seguro testar modelos locais sem me preocupar que um erro ou um ataque de injeção de prompt possa fazer com que eles realizem ações prejudiciais em uma máquina."
destaque: false
---

Ambientes de teste isolados externos para agentes de programação. Tenho explorado novas maneiras de colocar em sandbox o código executado por agentes, com foco em tornar mais seguro testar modelos locais sem me preocupar com a possibilidade de um erro ou um ataque de injeção de prompt fazer com que eles realizem ações prejudiciais em uma máquina.

Trabalhei neste projeto com a Prime Radiant, o laboratório de pesquisa de IA responsável pelo Superpowers e outros projetos.

Meu post no blog da Prime Radiant apresenta o padrão de sandbox externo, em que o código executado pelo agente roda dentro de um sandbox dedicado, enquanto o próprio agente fica fora desse sandbox.

Para demonstrar esse padrão, lançamos três implementações de servidor sandbox:

Cada uma dessas implementações oferece a mesma API localhost. Você pode então configurar o Pi, o Claude Code ou o Codex para enviar chamadas de API para essa sandbox sempre que quiserem executar código.

Os ambientes de teste também incluem um proxy opcional de lista de permissões HTTP/HTTPS, para que você possa controlar exatamente com quais hosts o código do seu agente tem permissão para se comunicar, além de um mecanismo de substituição de credenciais para fazer chamadas de API autenticadas sem compartilhar um segredo com o agente. Esta é a interface do usuário que você pode usar para reconfigurar esse proxy enquanto a sandbox ainda estiver em execução:

Continuo fascinado pelo desafio de executar código não confiável com segurança. Esse padrão de sandbox externo oferece uma maneira elegante de experimentar diferentes abordagens.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Nov/17/external-sandboxes-for-coding-agents/)

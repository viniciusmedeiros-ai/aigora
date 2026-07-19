---
title: "Claude Code usa Bun escrito em Rust agora"
date: 2026-07-19
categoria: "claude"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/#atom-everything"
resumo: "Código Claude v2.1.181 (lançado em 17 de junho) e mais tarde usar o porto de ferrugem de Bun. A inicialização ficou 10% mais rápida no Linux, mas, por outro lado, quase ninguém notou. Chato é bom."
destaque: false
---

Código Claude v2.1.181 (lançado em 17 de junho) e mais tarde usar o porto de ferrugem de Bun. A inicialização ficou 10% mais rápida no Linux, mas, por outro lado, quase ninguém notou. Chato é bom.

Decidi dar uma cutucada na minha própria instalação do Claude Code para ver se conseguia encontrar evidências de que estava usando Bun escrito em Rust.

strings ~/.local/bin/claude | grep -m1 'Bun v1' Para mim, isso gera Bun v1.4.0 (macOS arm64) . A versão mais recente do Bun no GitHub é atualmente a v1.3.14 de 12 de maio, de modo que o número da versão v1.4.0 no Claude suporta o envio de uma prévia de uma versão do Bun ainda não lançada.

strings ~/.local/bin/claude | grep -Eo 'src/[[:alnum:]_./-]+\.rs' Isso gera uma lista de 563 nomes de arquivos , começando com estes:

src/runtime/bake/dev_server/mod.rs src/runtime/bake/production.rs src/bundler/bundle_v2.rs Parece que o Bun in Rust está realmente sendo executado em produção em milhões de dispositivos diferentes. Como Jarred disse: "Chato é bom".

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/#atom-everything)

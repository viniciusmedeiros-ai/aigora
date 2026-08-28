---
title: "Quebrando o Código Claude Opus 5 Modo Automático"
date: 2026-08-27
categoria: "claude"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/"
resumo: "Quebrando o modo automático Claude Code Opus 5. Os Antrópicos estão confiando muito no modo automático do Claude Code para proteger seus usuários de agentes de codificação contra ataques de injeção imediata. Eles recentemente fizeram disso a inadimplência e fizeram afirmações ousadas sobre sua eficácia."
destaque: false
---

Quebrando o modo automático Claude Code Opus 5. Os Antrópicos estão confiando muito no modo automático do Claude Code para proteger seus usuários de agentes de codificação contra ataques de injeção imediata. Eles recentemente fizeram disso a inadimplência e fizeram afirmações ousadas sobre sua eficácia.

Johann Rehberger é um dos pesquisadores de injeção rápida mais confiáveis ativos atualmente. Ele encontrou um ataque contra o modo automático que, segundo ele, funciona 80% do tempo, enganando Claude Code para baixar e descompactar um arquivo ZIP e, em seguida, executar o código que importa base64 sem perceber que isso importará e executará um arquivo struct.py local extraído do arquivo.

Em alguns casos, o modo automático impediu diretamente o agente de impedir que o código prejudicial continuasse a ser executado!

Em algumas execuções, Claude tentou encerrar o processo de malware assim que percebeu o comprometimento, mas o Modo Automático negou o comando de limpeza.

O próprio mecanismo de segurança pode se tornar parte da falha. O classificador permitiu a criação do processo de malware, mas bloqueou o comando destinado a detê-lo!

Concordo com a conclusão de Johann aqui: a única maneira segura de executar agentes se houver algum risco de atrair a atenção de um ataque adversário é com uma caixa de areia:

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/)

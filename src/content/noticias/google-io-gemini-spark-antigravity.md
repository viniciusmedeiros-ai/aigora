---
title: "Google I/O, Gemini Spark, Antigravidade"
date: 2026-05-20
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/May/20/google-io/#atom-everything"
resumo: "É difícil encontrar muito para escrever sobre o Google I/O este ano porque tenho uma política de não escrever sobre nada que eu mesmo não possa experimentar, e muitos dos grandes anúncios estão \"chegando em breve\"."
destaque: false
---

É difícil encontrar muito para escrever sobre o Google I/O este ano porque tenho uma política de não escrever sobre nada que eu mesmo não possa experimentar, e muitos dos grandes anúncios estão "chegando em breve".

Na verdade, prefiro escrever sobre coisas que estão em disponibilidade geral, porque já tive casos no passado em que as visualizações não correspondiam ao que foi lançado ao público em geral mais tarde.

Além do Gemini 3.5 Flash, o anúncio mais interessante parece ser o próximo concorrente do OpenClaw do Google, o Gemini Spark , descrito como "seu agente pessoal de IA", que pode "se conectar nativamente com seus aplicativos favoritos do Google, como Gmail, Calendário, Drive, Documentos, Planilhas, Apresentações, YouTube e Google Maps". O FAQ para isso também inclui este detalhe confuso:

O site antigravity.google atualmente lista o Antigravity como um aplicativo de desktop, uma ferramenta de agente CLI (escrita em Go), o SDK Antigravity (um wrapper Python de código aberto em torno de um binário Go de código fechado) e o IDE Antigravity original (um fork do VS Code).

Acho que o Gemini Spark, o produto de agente hospedado voltado para o usuário, pode estar sendo executado nesse binário Go, mas não sei por que vale a pena mencionar isso nas perguntas frequentes!

Naturalmente, procurei notas sobre como o Gemini Spark pretende lidar com o risco de injeção imediata. A melhor informação que pude encontrar sobre isso estava em Tudo o que os clientes do Google Cloud precisam saber saindo do post do Google I/O voltado para clientes corporativos, que inclui:

O Spark opera em um tempo de execução seguro e totalmente gerenciado no Google Cloud, o que significa que você obtém segurança de nível empresarial sem precisar gerenciar a infraestrutura subjacente. Cada tarefa é executada em uma VM nova, estritamente isolada e efêmera para ajudar a garantir que os dados nunca se sobreponham entre as sessões. Para proteger a sua empresa, todas as rotas de tráfego através do nosso Gateway de Agente seguro que impõe a Perda de Dados Políticas de prevenção (DLP), enquanto as credenciais do usuário permanecem totalmente criptografadas e nunca são expostas diretamente ao agente.

Dado quantas pessoas estarão canalizando dados muito confidenciais através do Gemini Spark em um futuro próximo, espero que eles tenham feito isso à prova de balas, ou isso pode ser um dos principais candidatos para o desastre do agente desafiador de segurança que ainda não vimos.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/May/20/google-io/#atom-everything)

---
title: "Reduza o atrito e a latência para trabalhos de longa duração com Webhooks na API do Gemini"
date: 2026-05-04
categoria: "novas-ias"
fonte: "Google AI"
fonteUrl: "https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/"
resumo: "Os webhooks orientados a eventos são um sistema de notificação baseado em push que elimina a necessidade de pesquisas ineficientes."
destaque: false
imagem: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/WebhooksGeminiAPI-hero.max-600x600.format-webp.webp"
---

Estamos tornando mais fácil e eficiente criar aplicativos agênticos complexos e de longa duração com os Webhooks da API Gemini.

Ouça o artigo Este conteúdo é gerado pelo Google AI. A IA generativa é experimental

Hoje, estamos tornando mais fácil e eficiente criar aplicativos agênticos complexos e de longa duração com a API do Gemini. Estamos introduzindo Webhooks orientados a eventos, um sistema de notificação baseado em push que elimina a necessidade de pesquisas ineficientes.

À medida que o Gemini muda para fluxos de trabalho agênticos e processamento de alto volume — como Deep Research, geração de vídeos longos ou processamento de milhares de prompts por meio da API Batch — as operações podem levar minutos ou até horas. Até agora, os desenvolvedores tinham que confiar em pesquisas contínuas (por exemplo, chamando repetidamente as operações GET) para verificar se um trabalho foi concluído.

Agora, a API do Gemini pode simplesmente enviar uma carga HTTP POST em tempo real para o seu servidor no instante em que uma tarefa for concluída.

Construímos isso com confiabilidade e segurança em mente. Nossa implementação segue estritamente a especificação Standard Webhooks. Cada solicitação é assinada usando cabeçalhos webhook-signature, webhook-id e webhook-timestamp, garantindo a idempotência e evitando ataques de repetição. Também garantimos a entrega "pelo menos uma vez" com tentativas automáticas por até 24 horas.

Você pode configurar webhooks globalmente no nível do projeto (protegidos via HMAC) ou substituí-los dinamicamente por solicitação para rotear trabalhos específicos (protegidos via JWKS).

Aqui está um exemplo rápido de como você pode configurar dinamicamente um webhook para uma tarefa em lote usando o Python SDK:

---

**Fonte original:** [Google AI](https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/)

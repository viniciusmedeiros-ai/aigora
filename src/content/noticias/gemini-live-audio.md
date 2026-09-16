---
title: "Áudio Gemini Live"
date: 2026-09-15
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Sep/15/gemini-live/"
resumo: "O Google lançou hoje o Gemini 3.8 Live e o 3.8 Live Extended Thinking - dois novos modelos de fala para fala que são semelhantes à família GPT-Live da OpenAI."
destaque: false
---

O Google lançou hoje o Gemini 3.8 Live e o 3.8 Live Extended Thinking - dois novos modelos de fala para fala que são semelhantes à família GPT-Live da OpenAI.

Apontei o GPT-6 Astra Extra High para a documentação e fiz com que ele me construísse esta interface do usuário da web para experimentar os novos modelos. Você pode selecionar um modelo e uma predefinição de voz, inserir um prompt de sistema opcional e, em seguida, iniciar uma conversa de voz através do seu navegador, incluindo a capacidade de interromper o modelo enquanto ele está falando.

A implementação não usa bibliotecas. Ele se conecta ao ponto de extremidade wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key =... WebSocket e usa um Web Audio API AudioContext para captura e reprodução.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Sep/15/gemini-live/)

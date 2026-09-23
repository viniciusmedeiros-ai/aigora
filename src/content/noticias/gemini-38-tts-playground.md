---
title: "Parque Infantil Gemini 3.8 TTS"
date: 2026-09-23
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Sep/23/gemini-tts-playground/"
resumo: "Ferramenta Gemini 3.8 TTS Playground — Teste e experimente a API de texto para fala Gemini 3.8 do Google por meio de um playground interativo, onde você pode compor uma narração de voz única ou conversas com vários alto-falantes, visualizar o áudio gerado e explorar os detalhes da solicitação e da resposta. Salve seu conjunto de composição"
destaque: false
---

Ferramenta Gemini 3.8 TTS Playground — Teste e experimente a API de texto para fala Gemini 3.8 do Google por meio de um playground interativo, onde você pode compor uma narração de voz única ou conversas com vários alto-falantes, visualizar o áudio gerado e explorar os detalhes da solicitação e da resposta. Salve suas configurações de composição em URLs marcáveis para facilitar o compartilhamento e gerar síntese de fala de alta qualidade alimentada por sua chave de API do Gemini.

O Google lançou hoje dois novos modelos de conversão de texto em fala Gemini - gemini-3.8-flash-tts e gemini-3.8-flash-lite-tts .

Eles vêm com uma biblioteca de mais de 2.000 vozes, além da capacidade de criar uma voz personalizada com "apenas uma amostra de áudio de 30 segundos da sua voz ou uma voz que você tem o direito de usar".

Eu codifiquei essa interface de playground bring-your-own-key com o GPT-6 Astra, aproveitando a política CORS aberta da API Gemini subjacente.

Uma característica notável da API é que ela facilita a definição de uma conversa completa entre vários personagens, cada um com diferentes vozes e instruções de estilo de voz.

Aqui está um breve clipe de demonstração de uma conversa entre dois pelicanos debatendo se eles deveriam se mudar para o Pacifica Pier . Pedi ao Claude 4.5 Opus que escrevesse o script e gerasse uma URL para renderizá-lo usando a ferramenta .

Demorou ~20 segundos para gerar 1 milhão de 18s de áudio usando o Gemini 3.8 Flash TTS (não o mais barato Flash-Lite), a um custo de 2,74 centavos.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Sep/23/gemini-tts-playground/)

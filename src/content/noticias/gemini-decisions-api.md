---
title: "API Gemini Decisions"
date: 2026-11-11
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Nov/11/gemini-decisions-api/"
resumo: "API Gemini Decisions (via ) O Google se junta à Jev e à OpenAI na categoria de modelos de decisão com o \"Gemini Decision 1\". Esta nova API de modelo é quase idêntica à do Jev: ela oferece suporte aos mesmos três tipos de perguntas (sim/não, múltipla escolha e pontuação por rubrica) e até reutiliza o termo \"Noul\" do Jev para uma pergunta de sim/não."
destaque: false
---

API Gemini Decisions (via ) O Google se junta à Jev e à OpenAI na categoria de modelos de decisão com o "Gemini Decision 1". Esta nova API de modelo é quase idêntica à do Jev: ela oferece suporte aos mesmos três tipos de perguntas (sim/não, múltipla escolha e pontuação por rubrica) e até reutiliza o termo "Noul" do Jev para uma pergunta sim/não.

O preço é o mesmo do modelo de decisão GPT-6 Luna: 10 centavos por milhão de tokens de entrada, e a saída é gratuita. O Jev continua sendo o mais barato dos três, a 4,2 centavos por milhão.

O Jev é apenas texto (e JSON). O OpenAI pode processar textos e imagens. O Gemini Decision 1 é totalmente multimodal: abrange texto, imagens, áudio, vídeo e PDFs.

Fiz um teste com um vídeo, passando essas perguntas junto com o meu arquivo de vídeo do robô que anda pisando forte em Yonkers:

dragão: Este vídeo tem um dragão? robô: Este vídeo tem um robô? frança: Este vídeo se passa na França? eua: Este vídeo se passa nos EUA? Tanto o Jev quanto o OpenAI retornam 1,0 ou 0,0 para perguntas de sim/não, mas o Gemini insiste em ser um pouco menos confiante do que isso:

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Nov/11/gemini-decisions-api/)

---
title: "API Gemini Decisions: decisões multimodais rápidas e calibradas"
date: 2026-11-11
categoria: "novas-ias"
fonte: "Google AI"
fonteUrl: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/"
resumo: "Conheça a API Gemini Decisions, desenvolvida com base no nosso modelo de última geração Gemini Decision para decisões multimodais rápidas e calibradas."
destaque: false
---

Apresentamos a API Gemini Decisions, desenvolvida com base no nosso novo modelo Gemini Decision 1. Avalie até 1.000 perguntas de sim/não, de múltipla escolha e de pontuação por rubrica de forma rápida e em uma única passagem por textos, imagens, áudios, vídeos e PDFs.

Hoje, estamos apresentando a API Gemini Decisions, um novo endpoint para decisões rápidas e de conjunto fechado, desenvolvido pelo nosso novo modelo Gemini Decision 1 (gemini-decision-1), disponível por meio da API Gemini no Google AI Studio.

A API Decisions oferece primitivas desenvolvidas especificamente para escolhas limitadas, como seleção de ferramentas, verificações de políticas, roteamento de modelos e classificação de contexto. Você pode enviar uma entrada multimodal em texto, imagens, áudio, vídeo e PDFs (até 256 mil tokens), junto com até 1 mil perguntas independentes. Em vez de gerar o texto da resposta token por token, o Gemini Decision 1 pontua suas opções de candidatos em uma única passe direto, retornando probabilidades e pontuações de confiança em uma latência de ponta a ponta de 150-250 ms a US$ 0,10 por 1 milhão de tokens de entrada, com zero tokens de saída cobrados.

Em benchmarks que abrangem o roteamento de agentes, o raciocínio, a classificação e a compreensão multimodal, o Gemini Decision 1 lidera em todo o pacote, com o menor erro de calibração.

O Gemini Decision 1 pontua as opções sem decodificação token por token, mantendo a latência média de 50 a 100 ms de computação do modelo (150 a 250 ms de ponta a ponta), em entradas e contextos multimodais de até 16 mil tokens, permanecendo quase estável de 1 a 100 perguntas por solicitação. Com zero tokens de saída cobrados, o Gemini Decision 1 com a API Decisions é quase 5 vezes mais barato em todo o conjunto de benchmarks compartilhados do que o Gemini 3.5 Flash-Lite com a API de Interações.

Desenvolvido com base na arquitetura multimodal nativa do Gemini, o Gemini Decision 1 pode processar texto, imagens, áudio, vídeo e PDFs diretamente em uma única passagem direta. Você pode combinar modalidades em uma única entrada compartilhada, como combinar uma gravação de chamada com metadados da conta ou um pedido de indenização em PDF digitalizado com fotos dos danos, e ajustar a resolução das entradas de imagem e vídeo para controlar os detalhes visuais e o custo dos tokens.

Você pode avaliar várias perguntas em relação a essa entrada compartilhada em uma única solicitação, combinando verificações de sim/não, múltipla escolha e pontuações de rubrica. Cada resposta inclui uma pontuação de confiança (de 0 a 1) para que seu código possa encaminhar casos ambíguos para um recurso alternativo ou para um revisor humano:

O campo de entrada usa o mesmo formato de bloco de conteúdo que a API de interações. Veja como verificar uma foto de um balcão de sala de descanso, junto com uma observação de texto, em relação aos três tipos de pergunta em uma única solicitação:

---

**Fonte original:** [Google AI](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/)

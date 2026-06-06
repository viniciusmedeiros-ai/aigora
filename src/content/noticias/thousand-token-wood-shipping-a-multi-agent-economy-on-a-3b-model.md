---
title: "Thousand Token Wood: enviando uma economia multiagente em um modelo 3B"
date: 2026-06-05
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/build-small-hackathon/thousand-token-wood-sim"
resumo: "Um relatório de campo do Build Small Hackathon sobre o que um conselho de traders de 3 bilhões de parâmetros pode e não pode fazer."
destaque: false
---

Um relatório de campo do Build Small Hackathon sobre o que um conselho de traders de 3 bilhões de parâmetros pode e não pode fazer.

Construí a Madeira de Mil Fichas para o Hackathon de Construção Pequena. É uma economia minúscula: cinco criaturas da floresta, cada uma seu próprio agente na Qwen2.5-3B, trocam cinco mercadorias por seixos, fofocas, tesouros e pânico. Você cutuca a madeira e observa bolhas, colapsos e uma crescente lacuna de riqueza aparecer por conta própria. O modelo é servido com vLLM no Modal; um aplicativo Gradio é a janela para a madeira.

Este é um relatório de campo sobre a engenharia, escrito para pessoas que constroem com modelos pequenos. A versão curta: um modelo 3B é um gerador de formato confiável e um raciocinador não confiável, os sistemas emergentes precisam de escassez projetada e as melhores demonstrações ficam onde uma restrição técnica encontra algo que você já entende profundamente.

Uma economia viva precisa de muitos agentes pensando muitas vezes por corrida. É exatamente aí que um modelo de fronteira é a ferramenta errada: muito lento e muito caro para administrar um conselho de traders a cada passo. Um modelo pequeno é o que torna viável uma simulação multiagente em tempo real. Cada criatura decide em uma única chamada de GPU em lote por turno.

A versão ingênua não fez nada. A produção ultrapassava o consumo, então cada criatura era autossuficiente e nunca tinha um motivo para negociar. O mercado fechou uma vez e ficou em silêncio. A solução foi projetar a escassez:

Esse último mecânico impulsiona o drama. Um fornecedor não pode atender à crescente demanda, então o lenhador fica rico e todos os outros competem por calor.

Com a escassez no lugar, a lição honesta de modelo pequeno veio à tona. O 3B emitia JSON válido em 100% das chamadas, mas seu julgamento econômico era ruim: uma criatura que produzia bolotas publicava uma ordem para comprar bolotas, a única coisa que tinha em excesso.

A correção não era um modelo maior, era um aviso mais nítido. Contei a cada agente o que ele produzia e nunca deveria comprar, calculei a lista exata de mercadorias que faltava e dei um exemplo prático. A qualidade da decisão saltou e as criaturas começaram a negociar seus papéis. Todo o loop é envolto em uma camada tolerante de análise e reparo JSON, de modo que uma resposta malformada se degrada para um no-op em vez de travar A SIMULAÇÃO:

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/build-small-hackathon/thousand-token-wood-sim)

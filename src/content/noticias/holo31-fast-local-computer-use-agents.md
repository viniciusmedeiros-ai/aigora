---
title: "Holo3.1: Agentes de uso rápido e local de computadores"
date: 2026-06-02
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/Hcompany/holo31"
resumo: "Em março passado, lançamos o Holo3, nosso modelo de uso de computador de última geração. A adoção foi imediata. Desenvolvedores, empresas e parceiros começaram a implantar o Holo3 em uma ampla gama de fluxos de trabalho, desde automação de navegadores e software de negócios até ferramentas internas e aplicativos de desktop. À medida que a adoção crescia,"
destaque: false
---

Em março passado, lançamos o Holo3, nosso modelo de uso de computador de última geração. A adoção foi imediata. Desenvolvedores, empresas e parceiros começaram a implantar o Holo3 em uma ampla gama de fluxos de trabalho, desde automação de navegadores e software de negócios até ferramentas internas e aplicativos de desktop. À medida que a adoção crescia, percebemos que o desempenho por si só não era mais suficiente.

Os usuários querem executar os mesmos recursos de uso do computador em ambientes de desktop e móveis, com integração perfeita com diferentes estruturas de agentes. Eles querem flexibilidade de implantação, desde a inferência da nuvem até a execução totalmente local em dispositivos de usuários finais.

É por isso que estamos lançando a família Holo3.1. O Holo3.1 melhora a robustez nas três dimensões que mais importam na produção: ambientes (web, desktop, mobile), estruturas de agentes e metas de implantação. Pela primeira vez, liberamos pontos de verificação quantizados otimizados para inferência local, incluindo FP8, Q4 GGUF e NVFP4.

O Holo3.1 é um passo importante em direção à nossa visão de agentes universais de uso de computadores: sistemas que podem operar em ambientes, integrar-se a qualquer pilha de agentes e ser executados onde quer que o fluxo de trabalho esteja.

Com base na família Qwen, o Holo3.1 foi projetado para melhorar a robustez em todos os ambientes onde os agentes de uso de computador são realmente implantados, mantendo o desempenho de última geração.

À medida que as equipes moviam o Holo3 da avaliação para a produção, observamos repetidamente o mesmo desafio: um forte desempenho em um ambiente não se transfere necessariamente para outro. Dispositivos móveis, arneses de agentes alternativos e diferentes estruturas de execução introduzem suas próprias fontes de mudança de distribuição.

O Holo3.1 expande os recursos do Holo3 além do controle do navegador e da área de trabalho, proporcionando grandes ganhos em ambientes móveis. No AndroidWorld, nosso modelo 35B-A3B melhora de 67% para 79,3%, enquanto as variantes 4B e 9B menores melhoram de 58% para 72%.

Para oferecer melhor suporte às equipes que implantam o Holo dentro de pilhas de agentes de terceiros, o Holo3.1 introduz suporte nativo para protocolos de chamada de função, além das saídas JSON estruturadas já disponíveis no Holo3.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/Hcompany/holo31)

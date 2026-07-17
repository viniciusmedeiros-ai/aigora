---
title: "NVIDIA Nemotron 3 Incorpora Rank #1 Geral no RTEB, Avançando a Recuperação Agêntica"
date: 2026-07-16
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/nvidia/nemotron-3-embed-wins-rteb"
resumo: "A recuperação é crítica em fluxos de trabalho agênticos de várias etapas, onde a recuperação deficiente pode fazer com que os agentes busquem contexto irrelevante, consultem novamente, gastem orçamento de token e levem ruído para etapas de raciocínio posteriores."
destaque: false
---

A recuperação é crítica em fluxos de trabalho agênticos de várias etapas, onde a recuperação deficiente pode fazer com que os agentes busquem contexto irrelevante, consultem novamente, gastem orçamento de token e levem ruído para etapas de raciocínio posteriores.

Hoje, estamos lançando o NVIDIA Nemotron 3 Embed , uma coleção de modelos de incorporação abertos e comercialmente disponíveis, projetados para melhorar a qualidade da recuperação e, ao mesmo tempo, oferecer aos desenvolvedores opções práticas de implantação para RAG em escala de produção, recuperação agêntica, recuperação de código e memória do agente.

A coleção inclui três modelos abertos que alcançam recuperação de última geração em toda a curva de precisão-eficiência, liderada por um modelo 8B que lidera a tabela de classificação RTEB e variantes 1B eficientes construídas para implantação em escala de produção:

Figura 1. Captura de tela da Tabela de Classificação Multilíngue RTEB (15 de julho de 2026) mostrando Nemotron-3-Embed-8B-BF16 classificado como #1.

Além do resultado do RTEB, o Nemotron 3 Embed apresenta um conjunto de recursos prontos para produção para implantações de recuperação empresarial:

Avaliamos o Nemotron 3 Embed em três dimensões: qualidade de recuperação, eficiência agêntica a jusante e tradeoffs de implantação. O modelo 8B estabelece o teto de qualidade da coleção de modelos, enquanto as variantes 1B BF16 e NVFP4 trazem o mesmo design focado em recuperação para configurações de implantação de menor custo e maior rendimento.

Primeiro, avaliamos os modelos no RTEB , onde Nemotron-3-Embed-8B-BF16 ocupa o primeiro lugar. Também testamos esses modelos em ViDoRe V3 Text e MMTEB Retrieval e LongEmbed usando NDCG@10 médio.

Figura 2. Precisão de recuperação usando NDCG@10 médio em RTEB, ViDoRe V3 Text, MMTEB Retrieval e LongEmbed, comparando os modelos Nemotron 3 Embed com as linhas de base Nemotron da geração anterior.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/nvidia/nemotron-3-embed-wins-rteb)

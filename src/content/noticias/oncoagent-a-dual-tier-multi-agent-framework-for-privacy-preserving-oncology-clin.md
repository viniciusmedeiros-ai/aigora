---
title: "\"OncoAgent: A Dual-Tier Multi-Agent Framework for Privacy-Preserving Oncology Clinical Decision Support\""
date: 2026-05-09
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/lablab-ai-amd-developer-hackathon/oncoagent-official-paper"
resumo: "miniatura: https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/oncoagent-thumbnail.png autores:"
destaque: false
---

miniatura: https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/oncoagent-thumbnail.png autores:

Apresentamos o OncoAgent, um sistema de apoio à decisão clínica de código aberto e preservação da privacidade para oncologia. O OncoAgent combina uma arquitetura LLM aperfeiçoada de duas camadas com uma topologia LangGraph multiagente de última geração, um pipeline de RAG corretivo de quatro estágios com mais de 70 diretrizes NCCN e esmo de nível médico e um validador de segurança de reflexão de três camadas que impõe uma política estrita de Zero-PHI.

O sistema encaminha consultas clínicas através de um marcador de complexidade aditiva para um modelo otimizado para velocidade de parâmetro 9B (Nível 1) ou um modelo de raciocínio profundo 27B (Nível 2), ambos ajustados via QLoRA em um corpus de 266.854 casos oncológicos reais e gerados sinteticamente usando a estrutura Unsloth no hardware AMD Instinct MI300X (192 GB HBM3).

O empacotamento de sequência no MI300X permitiu o ajuste fino do conjunto de dados completo em aproximadamente 50 minutos — uma aceleração de rendimento de 56× em relação à geração baseada em API. Pós-fixação, a classificação do documento CARG alcançou uma taxa de sucesso de 100% com uma pontuação média de confiança RAG de 2,3 +. O sistema completo é 100% de código aberto e implantável no local, eliminando a dependência proprietária da API em nuvem e preservando os dados do paciente soberania da Ucrânia

Palavras-chave: suporte à decisão clínica, IA oncológica, sistemas multiagentes, geração aumentada por recuperação, QLoRA, AMD ROCm, IA de saúde de código aberto, segurança HITL, LangGraph, Corrective RAG

A oncologia é um dos domínios mais densos em informações e cognitivamente exigentes na medicina clínica. O volume, a heterogeneidade e a rápida evolução das diretrizes baseadas em evidências — da National Comprehensive Cancer Network (NCCN) à European Society for Medical Oncology (esmo) — criam uma lacuna de conhecimento persistente entre as evidências publicadas e a prática à beira do leito.

Os sistemas de suporte à decisão clínica assistidos por IA têm potencial transformador para preencher essa lacuna, mas a maioria dos sistemas disponíveis comercialmente falha de três maneiras críticas:

Grandes modelos de linguagem demonstraram promessa significativa em tarefas clínicas de PNL, incluindo codificação diagnóstica, resumo da literatura e comunicação com o paciente. Abordagens de ajuste fino específicas de domínio — exemplificadas por BioMedLM, Med-PaLM 2 e ClinicalBERT - melhoram consistentemente o desempenho em benchmarks médicos em relação a modelos de uso geral. O OncoAgent amplia essa linha de trabalho, visando o subdomínio específico da triagem oncológica e recomendação da via de tratamento, onde as consequências da alucinação são mais graves.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/lablab-ai-amd-developer-hackathon/oncoagent-official-paper)

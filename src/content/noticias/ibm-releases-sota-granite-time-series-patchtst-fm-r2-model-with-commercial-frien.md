---
title: "IBM lança modelo SOTA Granite Time Series PatchTST-FM-r2 com licença comercial"
date: 2026-09-09
categoria: "novas-ias"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series"
resumo: "Os modelos de base de séries temporais estão mudando a forma como os sistemas de previsão são construídos. Em vez de treinar e manter um modelo separado para cada conjunto de dados, os usuários podem usar um modelo pré-treinado e gerar previsões zero-shot."
destaque: false
---

Os modelos de base de séries temporais estão mudando a forma como os sistemas de previsão são construídos. Em vez de treinar e manter um modelo separado para cada conjunto de dados, os usuários podem usar um modelo pré-treinado e gerar previsões zero-shot.

A IBM lançou o Granite Time Series PatchTST-FM-r2, o modelo mais recente da família Granite TSFM ( github , blog ). PatchTST-FM-r2, uma nova versão de seu antecessor PatchTST-FM-r1, combina uma arquitetura atualizada, um corpus de pré-treinamento maior, previsão probabilística, suporte para imputação de valores ausentes e forte desempenho de tiro zero em um modelo de parâmetro ~ 385M.

A partir de 8 de setembro de 2026, o modelo é o modelo de tiro zero de melhor desempenho lançado sob uma licença de código aberto permissiva e comercialmente amigável (Apache 2.0 e OpenMDW 1.0) entre os modelos replicáveis de tiro zero na tabela de classificação GIFT-Eval . O GIFT-Eval é um benchmark abrangente de previsão de séries temporais projetado para avaliar modelos em diversos cenários de previsão; o modelo ocupa o segundo lugar geral entre replicáveis, modelos zero-shot.

Os pesos do modelo, a arquitetura, o pipeline de inferência e o código necessários para reproduzir os resultados do benchmark estão todos disponíveis.

Neste blog, descrevemos o modelo, nos aprofundamos nos resultados do benchmarking e na arquitetura do modelo, discutimos os dados de treinamento e licenciamento e fornecemos exemplos de código que ilustram como usar o modelo. Finalmente, também destacamos como os modelos da família Granite Time Series podem ser usados em aplicativos de streaming em ambiente de produção, aproveitando o produto Confluent.

Um modelo básico é mais útil quando generaliza para séries temporais nas quais não foi especificamente treinado. Por esse motivo, nos concentramos primeiro no desempenho zero-shot.

O GIFT-Eval fornece uma ampla avaliação de modelos de previsão em conjuntos de dados heterogêneos e cenários de previsão. Ao restringir a tabela de classificação a modelos que são zero-shot, replicáveis e avaliados sem vazamento de teste, o PatchTST-FM-r2 ocupa o segundo lugar para CRPS e MASE a partir de 8 de setembro de 2026, conforme ilustrado nas Figuras 1 e 2 (valores mais baixos são melhores para ambas as métricas). Importante, O PatchTST-FM-r2 é o modelo de maior desempenho na mesma categoria entre os modelos com licenciamento permissivo e comercial.

Figura 1. GIFT-Eval CRPS para os principais modelos replicáveis de disparo zero. O PatchTST-FM-r2 atinge um CRPS médio geométrico de 0,467, colocando-o imediatamente atrás do TimesFM-3 nesta comparação e o primeiro entre os modelos com licenças permissivas.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series)

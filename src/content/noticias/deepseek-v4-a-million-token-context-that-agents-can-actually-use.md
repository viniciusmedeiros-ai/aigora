---
title: "DeepSeek-V4: um contexto de um milhão de tokens que os agentes podem realmente usar"
date: 2026-04-24
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/deepseekv4"
resumo: "A DeepSeek lançou a V4 hoje. Dois pontos de verificação MoE estão no Hub: DeepSeek-V4-Pro em parâmetros totais de 1,6T com 49B ativo e DeepSeek-V4-Flash em 284B total com 13B ativo. Ambos têm uma janela de contexto de 1M-token. Os números de referência são competitivos, mas não a SOTA. Não importa. A verdadeira inovação"
destaque: false
---

A DeepSeek lançou a V4 hoje. Dois pontos de verificação MoE estão no Hub: DeepSeek-V4-Pro em parâmetros totais de 1,6T com 49B ativo e DeepSeek-V4-Flash em 284B total com 13B ativo. Ambos têm uma janela de contexto de 1M-token. Os números de referência são competitivos, mas não a SOTA. Não importa. A verdadeira inovação é como o DeepSeek v4 é projetado para suporte eficiente a grandes comprimentos de contexto e, portanto, como um dos os melhores candidatos para tarefas agênticas.

Concentrando-se em cargas de trabalho agênticas de longa duração. Executar um modelo de fronteira aberta como um agente hoje quebra de maneiras previsíveis. O modelo para. Você avisa novamente. O rastreamento ultrapassa o orçamento de contexto, ou o cache KV preenche a GPU, ou as viagens de ida e volta de chamada de ferramenta se degradam no meio de uma tarefa longa. A V4 foi criada para corrigir essas falhas conhecidas e apontar o caminho a ser seguido pela comunidade.

Este post aborda três coisas: o que a arquitetura faz de diferente para tornar a inferência de longo contexto barata, as decisões pós-treinamento específicas do agente que se somam a ela e algumas conclusões do artigo que ajudam a raciocinar sobre essas mudanças.

Uma janela de contexto de 1 milhão é apenas capacidade, não desempenho. Se você pode usá-lo depende do custo de cada passagem para frente nessa profundidade. Para um agente executando uma longa trajetória de uso de ferramentas (uma tarefa de banco de dados Swe, uma sessão de navegação em várias etapas, uma sessão de terminal com centenas de comandos), cada resultado de ferramenta é anexado ao contexto e cada token subsequente paga o custo total de atenção em relação a tudo que vieram antes.

Dois números são importantes: FLOPs de inferência de token único e tamanho do cache KV. Ambos crescem com o comprimento da sequência. Com 1 milhão de tokens, o DeepSeek-V4-Pro requer 27% de FLOPs de inferência de token único em comparação com o DeepSeek-V3.2, portanto, ele é executado mais rapidamente no mesmo hardware. Ele também usa 10% da memória cache KV. O V4-Flash reduz ainda mais esses números: 10% dos FLOPs e 7% do cache KV.

Se compararmos a memória cache KV com uma arquitetura estabelecida, como atenção de consulta agrupada com 8 cabeças, armazenada no formato bfloat16 usual, o DeepSeek v4 requer aproximadamente 2% do tamanho do cache. Isso torna muito mais fácil de implantar para manipulação de contexto muito grande.

Figura 1: comparação de benchmark (esquerda), FLOPs por token e cache KV acumulado em relação ao comprimento da sequência (direita).

O ganho de eficiência vem de dividir a atenção em dois mecanismos e intercalá-los em camadas.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/deepseekv4)

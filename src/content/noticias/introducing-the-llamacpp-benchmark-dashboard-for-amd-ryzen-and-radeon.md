---
title: "Apresentamos o painel de benchmark do llama.cpp para AMD Ryzen e Radeon"
date: 2026-11-26
categoria: "novas-ias"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/ggml-org/llamacpp-amd-bench"
resumo: "O painel de benchmark llama.cpp × AMD está disponível no Hugging Face. Ele permite que você monitore o desempenho do processamento de prompts e da geração de texto em diferentes compilações, modelos e quantizações do llama.cpp, para que você possa explorar como a inferência local se sai no hardware AMD Ryzen e Radeon."
destaque: false
---

O painel de benchmark llama.cpp × AMD está disponível no Hugging Face. Ele permite que você monitore o desempenho do processamento de prompts e da geração de texto em diferentes compilações, modelos e quantizações do llama.cpp, para que você possa explorar como a inferência local se comporta em hardwares AMD Ryzen e Radeon.

O desempenho da inferência local muda à medida que os modelos, os kernels e as compilações evoluem. Queremos que essas mudanças sejam fáceis de inspecionar para qualquer desenvolvedor da AMD: escolha um hardware, um modelo e uma compilação, compare as quantizações e acompanhe o desempenho ao longo do tempo. O fluxo de trabalho de benchmark e os resultados subjacentes são públicos, portanto, você também pode analisar como fazemos o benchmark do desempenho de inferência.

Você pode escolher o Hardware , o Modelo e a compilação do llama.cpp na barra lateral de Configurações. As opções de hardware atuais são Radeon 8060S (gfx1151) e Radeon AI Pro R9700S (gfx1201).

Ambos os testes começam na profundidade de contexto zero ( n_depth=0 ). O PP512 mede o processamento de 512 tokens de entrada sem geração; o TG128 mede a geração de 128 tokens sem um contexto pré-existente. O valor representado graficamente é a taxa de transferência média ( avg_ts ). Essas são cargas de trabalho de referência úteis, enquanto a aba Dimensionamento de contexto permite que você explore a taxa de transferência de geração de tokens à medida que o contexto aumenta.

Fazemos benchmarks dos binários pré-compilados distribuídos por meio do llama-install.sh, o projeto de compilação e instalação por trás do llama.app. Os fluxos de trabalho públicos gfx1151 e gfx1201 são programados semanalmente e executam os benchmarks padrão usando a ferramenta llama-bench com o Flash Attention ativado e desativado, com 10 repetições por configuração.

O conjunto de modelos evolui e atualmente inclui os modelos Inkling 2 Mini, Qwen, Gemma, gpt-oss e LFM, abrangendo arquiteturas densas e de mistura de especialistas. Os formatos GGUF disponíveis incluem Q4_K_M , Q8_0 , outras quantizações e formatos de maior precisão, como BF16 e F16 .

O explorador lê diretamente do bucket de armazenamento público ggml-org/install.sh-benches-data no Hugging Face. O link da fonte de dados ao lado do título do gráfico abre a pasta da compilação, do hardware e do modelo selecionados.

Os resultados padrão usam &lt;build&gt;/&lt;hardware&gt;/&lt;model&gt;/&lt;quant&gt;.jsonl. As varreduras de carga de trabalho usam a mesma pasta com o nome de arquivo &lt;quant&gt;-tg.jsonl.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/ggml-org/llamacpp-amd-bench)

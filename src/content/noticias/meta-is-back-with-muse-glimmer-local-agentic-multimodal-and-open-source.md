---
title: "A Meta está de volta com o Muse Glimmer: local, agêntico, multimodal e de código aberto"
date: 2026-08-10
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/muse-glimmer"
resumo: "Ótimas notícias dos OGs de LLMs de código aberto! O Muse Glimmer, lançado hoje, é o novo modelo multimodal da Meta, especialmente projetado para casos de uso agênticos locais. Destilado do Muse para os parâmetros 30B e lançado sob a licença Apache 2.0, é ideal para implantação local para privacidade, redução de custos ou"
destaque: false
---

Ótimas notícias dos OGs de LLMs de código aberto! O Muse Glimmer, lançado hoje, é o novo modelo multimodal da Meta, especialmente projetado para casos de uso agênticos locais. Destilado do Muse para os parâmetros 30B e lançado sob a licença Apache 2.0, é ideal para implantação local para privacidade, redução de custos ou apenas para hackear. Destina-se a aplicações que respeitam a privacidade, como codificação, análise de documentos, assistentes pessoais, configurações do tipo Garra ou Hermes.

Para comemorar, estamos enviando com suporte Meta day-0 em transformers , llama.cpp , vLLM , Inference Endpoints e outras bibliotecas. Construímos algumas coisas legais e explicamos nossas descobertas neste blog.

As pontuações são relatadas como publicadas. Negrito indica o melhor resultado entre os modelos comparados; ↓ indica que menor é melhor.

Além do VLM principal, há também um desenhista de decodificação especulativa implementado no DFlash. O uso deste módulo é opcional e pode fornecer geração muito mais rápida em troca de algum custo de memória. Descobrimos que este redator é particularmente adequado para a geração de conteúdo estruturado, como codificação.

O Muse Glimmer usa um codificador de imagem para lidar com imagens e vídeos. Ao contrário dos codificadores de visão relativamente pequenos usados em outros VLMs, este é um modelo considerável semelhante a 2B ViT projetado após a arquitetura do Codificador de Percepção. O Perception Encoder foi introduzido anteriormente pela Meta como uma espinha dorsal para várias tarefas espaciais e multimodais a jusante. O codificador corrige imagens para uma forma de 2 quadros x 3 canais x 14 x 14, e passa-os através de uma camada linear para projeção. Uma incorporação de posição absoluta interpolada a partir de uma tabela de posição aprendida é então adicionada a essas incorporações. Estes são então enviados para a torre de visão que consiste em 50 camadas e MLPs GELU. Semelhante ao modelo de linguagem, o padrão de atenção consiste em três camadas de atenção de janela seguidas por uma camada de atenção completa. Dentro das camadas de atenção, o RoPE 2D é aplicado às consultas e chaves.

Após o transformador, o embaralhamento de pixels concatena 2x2 grupos de tokens espaciais vizinhos, o que reduz o número de tokens de imagem 4x sem descartar seus canais. As feições mescladas são então projetadas para o espaço de incorporação compartilhado do decodificador de texto.

Os vídeos passam pelo mesmo codificador quadro a quadro, onde cada quadro é convertido em patches (de forma [lote, grupos temporais, altura da grade, largura da grade, 2 quadros, 3 canais, 14, 14]). O processador tem como alvo 2 quadros por segundo e limita o clipe a 96 quadros amostrados uniformemente em vídeo. O processador cria espaços reservados de vídeo com marcação de data e hora, intercalando o texto com o quadro, por exemplo, "Tempo: 0,0s &lt;|video|&gt; x N” em que as incorporações finais de vídeo são substituídas antes da camada de projeção final.

pip install --upgrade transformers acceler Muse Glimmer vem com suporte dia 0 em transformadores, tanto para o modelo principal quanto para o desenhista de decodificação especulativa. Você pode usar as classes AutoModelForMultimodalLM e AutoProcessor para carregar o modelo e o processador.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/muse-glimmer)

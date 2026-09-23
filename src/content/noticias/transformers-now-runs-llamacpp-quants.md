---
title: "Transformers agora executa quants llama.cpp"
date: 2026-09-22
categoria: "novas-ias"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/transformers-llama-cpp-quants"
resumo: "Estamos adicionando suporte para executar modelos GGUF de forma eficiente em transformadores , para que você possa usar pontos de verificação dimensionados para a memória do seu laptop através das APIs de transformadores familiares. Escolha um GGUF do Hub, carregue-o com FROM_pretrained e comece a gerar em sua própria máquina."
destaque: false
---

Estamos adicionando suporte para executar modelos GGUF de forma eficiente em transformadores , para que você possa usar pontos de verificação dimensionados para a memória do seu laptop através das APIs de transformadores familiares. Escolha um GGUF do Hub, carregue-o com FROM_pretrained e comece a gerar em sua própria máquina.

Executar modelos de IA em seu laptop tornou-se muito mais fácil, e o llama.cpp tem sido uma grande parte disso. Seu mecanismo de inferência alimenta ferramentas locais de IA, como Ollama, LM Studio e Jan. Juntamente com projetos como o MLX , ajudou a tornar a inferência local uma opção prática para o uso diário.

É aqui que estamos agora. E eu não vou mentir, parece muito mágico 🧙‍♀️

Para tarefas não triviais nas bases de código @ huggingface, isso parece muito, muito perto de atingir o mais recente Opus em Claude… pic.twitter.com/lsIxLoUneU

O GGUF, desenvolvido pela equipe llama.cpp, é um formato amplamente utilizado para inferência local. A equipe também compartilha pontos de verificação quantizados em ggml-org no Hub . Editores como Unsloth, LM Studio Community e bartowski também fornecem pontos de verificação GGUF prontos para uso em uma variedade de quantizações, para que os usuários possam escolher a versão que se encaixa em sua máquina. Os modelos GGUF foram baixados milhões de vezes.

Queremos facilitar a execução desses modelos localmente com transformadores também. A compatibilidade só é útil se o modelo for agradável de executar. Para aproximar o desempenho do llama.cpp, estamos reutilizando seus kernels ggml subjacentes através da biblioteca de kernels e reduzindo a sobrecarga na geração . Nosso foco inicial é a inferência local no Apple Silicon, começando com a arquitetura Qwen3.5.

O GGUF empacota pesos e metadados do modelo, incluindo informações do tokenizador e um modelo de bate-papo opcional, em um arquivo. Ele suporta diferentes níveis de quantização, permitindo que você troque alguma precisão por uma pegada de memória menor. Variantes como Q4_K_M misturam precisões de tensor, usando principalmente pesos de 4 bits, mantendo tensores sensíveis com maior precisão.

Sugerimos começar com Q4_K_M , depois tentar Q5_K_M ou Q6_K se você tiver mais memória disponível. Quantização mais agressiva pode ajudar modelos maiores a se encaixarem, mas a troca de qualidade depende do modelo e da tarefa. Avalie-o no trabalho que você realmente deseja que o modelo faça. A documentação GGUF do Hub descreve os tipos de quantização disponíveis.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/transformers-llama-cpp-quants)

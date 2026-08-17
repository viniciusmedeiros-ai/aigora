---
title: "Qwen 3.8 27B é excelente, mas o padrão é pensar demais demais nas coisas"
date: 2026-08-16
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Aug/16/qwen-38-27b/"
resumo: "O grande lançamento de sexta-feira foi o Qwen 3.8 27B , um LLM com capacidade de visão de parâmetros 27B licenciado pelo Apache 2 do laboratório de pesquisa Qwen do Alibaba. Eu estava ansioso por este: o 27B é um excelente tamanho para executar um modelo em um laptop com especificações razoáveis, e seu antecessor, o Qwen 3.6 27B, foi impressionante."
destaque: false
---

O grande lançamento de sexta-feira foi o Qwen 3.8 27B , um LLM com capacidade de visão de parâmetros 27B licenciado pelo Apache 2 do laboratório de pesquisa Qwen do Alibaba. Eu estava ansioso por este: o 27B é um excelente tamanho para executar um modelo em um laptop com especificações razoáveis, e seu antecessor, o Qwen 3.6 27B, foi impressionante.

Os benchmarks autorreferidos da Qwen para este modelo são reveladores. Eles mostram um impulso tanto do Qwen 3.6 27B quanto do Qwen 3.7-Plus de peso fechado, que foi um dos modelos mais fortes da Qwen de qualquer tamanho até maio deste ano . Será interessante ouvir o que os benchmarks independentes têm a dizer sobre o modelo.

Tenho executado o modelo em duas máquinas diferentes: meu MacBook Pro M5 Max de 128 GB e um NVIDIA DGX Spark . Em ambas as máquinas, estou executando o LM Studio e sua compilação quantizada Q4_K_M de 17 GB. Também tentei usar o llama-server diretamente no Spark.

A documentação da Qwen descreve o modelo como padrão para xhigh pelo esforço de raciocínio, e o LM Studio GGUF que tenho tentado preserva esse padrão:

O Qwen3.8 vem com suporte oficial para reasoning_effort , que pode ser usado para ajustar a profundidade do raciocínio e controlar o custo:

Este é um padrão hilário. Não é uma boa maneira de executar o modelo, especialmente em hardware de consumo. Tenho achado os resultados extremamente divertidos.

Rapidamente tive problemas com o limite de contexto padrão do LM Studio de 8.192 tokens - a Qwen estava usando todos eles pensando até mesmo nos problemas mais mundanos. Carreguei o modelo com o comprimento máximo de contexto total de 262.144 e esse problema desapareceu.

Aqui está o pelicano andando de bicicleta SVG que recebi da minha primeira tentativa com esse aumento no comprimento do contexto. Demorou 21 minutos para gerar, usando 22.276 tokens de raciocínio para produzir 3.223 tokens de saída. Você pode ler o traço de raciocínio aqui .

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Aug/16/qwen-38-27b/)

---
title: "Qwen3.8 27B adição em palavras"
date: 2026-10-04
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Oct/4/qwen38-addition-in-words/"
resumo: "Pesquisa Qwen3.8 27B adição em palavras — Um benchmark testou se o modelo local `Qwen3.8-27B-Q4_K_M.gguf` poderia adicionar números inteiros positivos e expressar resultados exatos apenas em palavras em inglês, usando 5.070 casos com deficiência de raciocínio e uma comparação pareada de 169 casos com raciocínio médio. Sem raciocínio,"
destaque: false
---

Pesquisa Qwen3.8 27B adição em palavras — Um benchmark testou se o modelo local `Qwen3.8-27B-Q4_K_M.gguf` poderia adicionar números inteiros positivos e expressar resultados exatos apenas em palavras em inglês, usando 5.070 casos com deficiência de raciocínio e uma comparação pareada de 169 casos com raciocínio médio. Sem raciocínio, alcançou 23,57% de precisão numérica, com o desempenho caindo de 97,04% para um a três dígitos operandos para 6,44% para operandos de dez a treze dígitos, apesar da conformidade com o formato de 96,17%.

Colin Frasier postou no Bluesky sobre um experimento que ele realizou há dois anos usando GPT-4o para ver o quão bem ele poderia "calcular a soma, mas retornar a resposta em palavras" em números cada vez maiores. Aqui está o gráfico que ele compartilhou desses resultados:

Estou confiante de que o GPT-4o não trapaceou e usou uma calculadora, especialmente porque errou muitos dos cálculos, mas me inspirei a executar o experimento novamente em hardware local (um DGX Spark) para explorar o efeito em um ambiente totalmente controlado.

Colei sua imagem em uma sessão remota do Codex (GPT-6 Astra) e fiz com que ela executasse o mesmo experimento usando Qwen3.8-27B-Q4_K_M.gguf . Aqui está o resultado de uma série de 30 tentativas por combinação com raciocínio desativado:

Então eu o executei novamente com o raciocínio habilitado. Isso levou muito mais tempo por par, então, em vez de executar 30 amostras por quadrado, executei apenas uma - o que resulta em um mapa de calor muito menos atraente visualmente, já que cada quadrado é 100% ou 0%:

Ele obteve a resposta certa em 167 de 169 tentativas e, como essas foram únicas, estou confiante de que uma segunda tentativa produziria resultados diferentes aqui.

Aqui está uma versão do relatório que inclui os traços de raciocínio de alguns desses cálculos maiores, que incluem texto como este:

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Oct/4/qwen38-addition-in-words/)

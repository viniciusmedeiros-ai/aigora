---
title: "Qwen3.6-27B: Codificação em nível de carro-chefe em um modelo denso 27B"
date: 2026-04-22
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Apr/22/qwen36-27b/#atom-everything"
resumo: "Qwen3.6-27B: Codificação de nível principal em um modelo denso 27B ( via ) Grandes reivindicações da Qwen sobre seu último modelo de peso aberto:"
destaque: false
---

Qwen3.6-27B: Codificação de nível principal em um modelo denso 27B ( via ) Grandes reivindicações da Qwen sobre seu último modelo de peso aberto:

O Qwen3.6-27B oferece desempenho de codificação agêntica de nível principal, superando o carro-chefe de código aberto da geração anterior Qwen3.5-397B-A17B (397B total / 17B ativo MoE) em todos os principais benchmarks de codificação.

Eu experimentei com o 16.8GB Unsloth Qwen3.6-27B-GGUF:Q4_K_M quantized version e llama-server usando esta receita pelo benob no Hacker News , depois de instalar primeiro o llama-server usando brew install llama.cpp :

llama-server \ -hf unsloth/Qwen3.6-27B-GGUF:Q4_K_M \ --no-mmproj\ --fit on \ -np 1 \ -c 65536 \ --cache-ram 4096 -ctxcp 2 \ --jinja\ --temp 0.6 \ --top-p 0.95 \ --top-k 20 \ --min-p 0.0 \ --presence-penalty 0.0 \ --repeat-penalty 1.0 \ --reasoning on \ --chat-template-kwargs '{"preserve_thinking": true}' Na primeira execução que salvou o modelo de ~17GB para ~/.cache/huggingface/hub/models--unsloth--Qwen3.6-27B-GGUF .

Aqui está a transcrição de "Gerar um SVG de um pelicano andando de bicicleta". Este é um excelente resultado para um modelo local de 16,8 GB:

Para uma boa medida, aqui está Generate an SVG of a NORTH VIRGINIA OPOSSUM ON AN E-SCOOTER (executado anteriormente com GLM-5.1 ):

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Apr/22/qwen36-27b/#atom-everything)

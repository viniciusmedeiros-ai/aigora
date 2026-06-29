---
title: "Ornith-1.0: LLMs de Autodesenvolvimento para Codificação Agêntica"
date: 2026-06-29
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jun/29/ornith/#atom-everything"
resumo: "Ornith-1.0: Self-Scaffolding LLMs for Agentic Coding . Este é um novo modelo interessante de pesos abertos (licenciado pelo MIT), o primeiro lançamento de modelo da DeepReinforce."
destaque: false
---

Ornith-1.0: Self-Scaffolding LLMs for Agentic Coding . Este é um novo modelo interessante de pesos abertos (licenciado pelo MIT), o primeiro lançamento de modelo da DeepReinforce.

[...] com variantes incluindo 9B Denso, 31B Denso, 35B MoE e 397B MoE. Construído em cima do Gemma 4 e Qwen 3.5 pré-treinados, ele alcança um desempenho de última geração entre modelos de código aberto de tamanho comparável em benchmarks de codificação.

Tanto quanto posso dizer, as licenças desses modelos subjacentes são compatíveis com o uso dessa maneira - o Gemma 4 é licenciado para o Apache 2.0 (e não está vinculado aos termos de uso adicionais do Gemma que afligiram os modelos Gemma anteriores) e o Qwen 3.5 também é licenciado para o Apache 2.0.

Estou executando o modelo usando o LM Studio e o ornith-1.0-35b-Q4_K_M.gguf (20GB) GGUF, conectado ao Pi . As impressões iniciais são muito boas - parece ser capaz de executar o arnês do agente em muitas chamadas de ferramentas de maneira proficiente.

Aqui está uma sessão de terminal onde pedi para "encontrar o código que decodifica o cookie do ator" e, em seguida, "encontrar o código que abre a caixa de diálogo de inserção quando o botão é clicado" em um checkout do Datasette, que ele tratou com facilidade.

Não consegui encontrar muitas informações sobre o DeepReinforce. O artigo mais antigo que pude encontrar no foi CUDA-L1: Improving CUDA Optimization via Contrastive Reinforcement Learning, de junho de 2025.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jun/29/ornith/#atom-everything)

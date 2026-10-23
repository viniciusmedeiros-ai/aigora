---
title: "Transformando a Classificação do Banco de Dados em Recompensas de RL: Agentes de Pós-Treinamento com a ThinkingBox"
date: 2026-10-22
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/microsoft/thinkingbox-training"
resumo: "Esta é a continuação da nossa primeira postagem no blog, The Agent Said It Was Done. O banco de dados discordou. O ThinkingBox-Training agora está disponível no GitHub ."
destaque: false
---

Esta é a continuação da nossa primeira postagem no blog, The Agent Said It Was Done. O banco de dados discordou. O ThinkingBox-Training agora está disponível no GitHub .

Construímos o ThinkingBox para avaliar o trabalho de um agente comparando o estado final do banco de dados com o resultado esperado. Em seguida, usamos o mesmo tipo de sinal executável como recompensa em tarefas de treinamento fora do ThinkingBox-Bench. Para Qwen3.8-27B, o sucesso médio aumentou de 51,70% para 60,78%, enquanto as tarefas concluídas corretamente em todas as vinte tentativas aumentaram de 38 para 107 com 50 etapas de GRPO.

Figura 1. O ThinkingBox transforma verificações executáveis do estado do banco de dados do terminal em recompensas para agentes pós-treinamento em tarefas fora do ThinkingBox-Bench.

Cada uma de suas 507 tarefas no ThinkingBox-Bench (nosso conjunto de dados de benchmark) fornece a um agente um back-end real e um conjunto de ferramentas, permite que ele funcione e verifica o que realmente mudou no banco de dados. Na primeira postagem , pegamos um modelo fechando o ticket de um cliente como resolvido enquanto a exceção da operadora por trás dele ainda estava aberta. Nove chamadas de ferramenta de aparência competente, uma linha de banco de dados errada.

Então percebemos o que havíamos construído. Para a maioria das tarefas, uma verificação executável pode retornar 1 ou 0 diretamente do estado final do banco de dados. Isso não é apenas uma motoniveladora. Esta pode ser uma função de recompensa. +

Então, construímos um pool de treinamento a partir de tarefas de formato ThinkingBox fora do benchmark e usamos seus resultados executáveis como recompensas. O problema foi escolher quais tarefas são adequadas para o treinamento do agente: a maioria das tarefas já está resolvida ou sem esperança para o modelo à sua frente, e ambas não ensinam nada.

A dificuldade é relativa à política: uma tarefa é difícil para o modelo atual apenas até que esse modelo a aprenda.

Chamamos isso de dificuldade relativa à política offline. Estimamos a probabilidade de sucesso de cada tarefa uma vez usando a política de base antes do treinamento e mantivemos o conjunto de treinamento selecionado fixo durante toda a execução.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/microsoft/thinkingbox-training)

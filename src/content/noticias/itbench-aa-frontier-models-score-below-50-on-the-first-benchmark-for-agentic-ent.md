---
title: "ITBench-AA: Frontier Models Score Below 50% on the First Benchmark for Agentic Enterprise IT Tasks — by Artificial Analysis and IBM"
date: 2026-05-27
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/ibm-research/itbench-aa"
resumo: "Voltar aos Artigos Principais conclusões: Visão geral do ITBench-AA SRE: Destaques O ITBench-AA é construído em parceria com a @IBM com base em seu benchmark ITBench. A Artificial Analysis e o IBM Software Innovation Lab estão lançando o ITBench-AA, o primeiro de uma nova série de benchmarks que avaliam modelos em empreendimentos"
destaque: false
---

Voltar aos Artigos Principais conclusões: Visão geral do ITBench-AA SRE: Destaques O ITBench-AA é construído em parceria com a @IBM com base em seu benchmark ITBench. A Análise Artificial e o Laboratório de Inovação de Software da IBM estão lançando o ITBench-AA, o primeiro de uma nova série de benchmarks avaliando modelos em tarefas de TI empresariais agênticas, começando com tarefas de Engenharia de Confiabilidade do Local onde os modelos de fronteira pontuam abaixo de 50% O SRE da ITBench-AA executa o desempenho do modelo de referência na resposta a incidentes do Kubernetes, onde os modelos e agentes devem diagnosticar sistemas ativos lendo logs, rastreando dependências e identificando entidades de causa raiz em infraestruturas complexas.

O conjunto de dados subjacente do ITBench foi desenvolvido pela IBM, aproveitando a profunda experiência em operações de TI corporativas. A Análise Artificial trabalhou em estreita colaboração com a IBM nos últimos 6 meses para desenvolver uma implementação do conjunto de dados para avaliação de IA de fronteira, começando com a Engenharia de Confiabilidade do Local (SRE) e expandindo para Operações Financeiras (FinOps) e Diretor de Segurança da Informação (CISO) tarefas ao longo do tempo.

Principais conclusões: Claude Opus 4.7 (Raciocínio Adaptativo, Esforço Máximo) lidera em 47%, seguido por GPT-5.5 (xhigh) em 46% e Qwen3.7 Max em 42%. Todos os modelos Frontier pontuam abaixo de 50%, tornando o ITBench-AA SRE um dos benchmarks agênticos menos saturados em nossa suíte.

Por contexto, os modelos de fronteira pontuam consideravelmente mais alto no Terminal-Bench. As contagens de turnos variam quase 3x e trajetórias mais longas não se traduzem em maior precisão.

O GPT-5.5 (xhigh) tem uma média de 31 turnos por tarefa a 46%, enquanto o Gemini 3.1 Pro Preview tem uma média de 83 turnos a 30%. Modelos que investigam demais tendem a surgir mecanismos de injeção de falha a montante ou sintomas co-ocorrentes como falsos positivos.

O GLM-5.1 (Raciocínio) lidera os modelos de pesos abertos em 40%, efetivamente vinculados ao Gemini 3.5 Flash (alto). O DeepSeek V4 Pro (Raciocínio, Esforço Máximo) segue com 38%, com o Gemma 4 31B (Raciocínio) com 37%, à frente do Gemini 3.1 Pro Preview com 30%.

Visão geral do ITBench-AA SRE: 59 tarefas SRE no total: 40 tarefas públicas e 19 tarefas novas e retidas Cada tarefa fornece um instantâneo de incidente do Kubernetes contendo alertas, eventos, traços, métricas, logs e topologia de aplicativos.

O modelo deve identificar o conjunto mínimo de entidades independentes de causa raiz do Kubernetes responsáveis pelo incidente. As falhas abrangem os modos típicos de falha do SRE, incluindo incidentes de infraestrutura, serviço, aplicativo e caos, como exaustão de cota de recursos, falhas de implantação, exaustão do pool de conexões e partições de rede.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/ibm-research/itbench-aa)

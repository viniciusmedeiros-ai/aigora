---
title: "Implante agentes locais em todos os lugares com o LFM2.5-2.6B"
date: 2026-08-04
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/LiquidAI/lfm2-5-2-6b"
resumo: "O LFM2.5-2.6B é construído para alimentar agentes capazes inteiramente no dispositivo. Ele suporta chamadas de ferramentas e fluxos de trabalho de várias etapas, mantendo-se pequeno e rápido o suficiente para o hardware diário, de laptops a telefones. Isso permite que os desenvolvedores implantem agentes em todos os lugares, mantenham os dados privados no dispositivo e dimensionem o uso"
destaque: false
---

O LFM2.5-2.6B é construído para alimentar agentes capazes inteiramente no dispositivo. Ele suporta chamadas de ferramentas e fluxos de trabalho de várias etapas, mantendo-se pequeno e rápido o suficiente para o hardware diário, de laptops a telefones. Isso permite que os desenvolvedores implantem agentes em todos os lugares, mantenham os dados privados no dispositivo e dimensionem o uso sem uma conta de inferência de nuvem.

O LFM2.5-2.6B é pré-treinado em tokens ~34T, com uma fase de treinamento intermediário que estende a janela de contexto para 128K. O pós-treinamento transforma o modelo base em um agente em quatro etapas:

O pipeline Agentic RL separa otimização de modelo, inferência e execução de ambiente em componentes distintos. O Mecanismo de Treinamento otimiza o modelo, enquanto o Mecanismo de Implementação gera ações usando a política mais recente. A estrutura de RL orquestra o ciclo de treinamento lançando lançamentos, coletando trajetórias e recompensas e atualizando o modelo.

As ações são executadas dentro de um Serviço Sandbox, onde o Blackbox Harness hospeda o agente (por exemplo, OpenClaw ou Hermes Agent) e coordena as interações com o ambiente da tarefa. O Harness Proxy nos permite tratar os chicotes agênticos como caixas pretas sem modificações, enquanto capturamos de forma transparente as trajetórias em nível de token necessárias para reconstruir e validar amostras de treinamento de RL.

Avaliamos o LFM2.5-2.6B contra modelos de até ~4x seu tamanho na HASTE, na sequência de instruções, no uso de ferramentas e em tarefas agênticas. É o menor modelo do grupo, mas compete e muitas vezes supera o resto.

Para o seu aplicativo, os pontos fortes são o acompanhamento de instruções e o uso de ferramentas. O LFM2.5-2.6B encabeça todos os benchmarks que seguem instruções aqui, e todos os benchmarks de uso de ferramentas, exceto o BFCLv4, onde apenas os 9.7B Qwen avançam. Em tarefas agênticas, ele supera os dois modelos Gemma e permanece mesmo com os Qwens. Também lidera no conhecimento e permanece próximo da matemática. A codificação é o único lugar em que os modelos maiores mantêm uma liderança clara, então busque algo maior lá.

O LFM2.5-2.6B é fornecido com suporte para o primeiro dia em todo o ecossistema de inferência, incluindo llama.cpp, MLX, vLLM, SGLang e ONNX.

Inferência de CPU. Devido à sua arquitetura LFM2 eficiente, o LFM2.5-2.6B é o modelo mais rápido que testamos, com velocidades de decodificação de 220 tokens/s em um M5 Max e 113 tokens/s em um Ryzen AI Max+ 395. Com 30 tokens/s, ele permite que você execute agentes capazes mesmo em um telefone.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/LiquidAI/lfm2-5-2-6b)

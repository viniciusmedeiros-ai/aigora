---
title: "Acelerando fluxos de trabalho agênticos com WebSockets na API de respostas"
date: 2026-04-22
categoria: "agents"
fonte: "OpenAI"
fonteUrl: "https://openai.com/index/speeding-up-agentic-workflows-with-websockets"
resumo: "Um mergulho profundo no loop do agente Codex, mostrando como os WebSockets e o cache com escopo de conexão reduziram a sobrecarga da API e melhoraram a latência do modelo."
destaque: false
---

Quando você pede ao Codex para corrigir um bug, ele verifica sua base de código em busca de arquivos relevantes, lê-os para criar contexto, faz edições e executa testes para verificar se a correção funcionou. Sob o capô, isso significa dezenas de solicitações de API de respostas: determine a próxima ação do modelo, execute uma ferramenta em seu computador, envie a saída da ferramenta de volta para a API e repita.

Todas essas solicitações podem somar minutos que os usuários gastam esperando que o Codex conclua tarefas complexas. Do ponto de vista da latência, o loop do agente do Codex passa a maior parte do tempo em três etapas principais: trabalhando nos serviços de API (para validar e processar solicitações), inferência de modelo e tempo do lado do cliente (ferramentas em execução e contexto do modelo de construção). A inferência é o estágio em que o modelo é executado GPUs para gerar novos tokens. No passado, executar a inferência LLM em GPUs era a parte mais lenta do loop agentic, então a sobrecarga do serviço API era fácil de ocultar. À medida que a inferência fica mais rápida, a sobrecarga cumulativa da API de um lançamento agêntico é muito mais notável.

Nesta postagem, explicaremos como criamos loops de agentes usando a API 40% mais rápidos de ponta a ponta, permitindo que os usuários experimentem o salto na velocidade de inferência de 65 para quase 1.000 tokens por segundo. Abordamos isso por meio de armazenamento em cache, eliminando saltos de rede desnecessários, melhorando nossa pilha de segurança para sinalizar rapidamente os problemas e, o mais importante, criando uma maneira de criar uma conexão persistente com as respostas API, em vez de ter que fazer uma série de chamadas de API síncronas.

Na API de Respostas, os modelos emblemáticos anteriores, como GPT‑5 e GPT‑5.2, rodavam a cerca de 65 tokens por segundo (TPS). Para o lançamento do GPT‑5.3‑Codex‑Spark, um modelo de codificação rápida, nosso objetivo era uma ordem de grandeza mais rápida: mais de 1.000 TPS, habilitados pelo hardware especializado da Cerebras otimizado para inferência de LLM. Para garantir que os usuários pudessem experimentar a verdadeira velocidade desse novo modelo, tivemos que reduzir a API sobrecarga.

Por volta de novembro de 2025, lançamos um sprint de desempenho na API de Respostas, obtendo muitas otimizações para a latência do caminho crítico para uma única solicitação:

Com essas melhorias, vimos uma melhoria de quase 45% no tempo para o primeiro token (TTFT)- o que reflete a sensação de resposta da API -, mas essas melhorias ainda não foram rápidas o suficiente para o GPT‑5.3‑Codex‑Spark. Mesmo com essas melhorias, a sobrecarga da API de respostas era muito grande em relação à velocidade do modelo - ou seja, os usuários tinham que esperar pelas CPUs executando nossa API antes de poderem usar as GPUs servindo o modelo.

A questão mais profunda foi estrutural: tratamos cada solicitação do Codex como independente, processando o estado de conversação e outro contexto reutilizável em cada solicitação de acompanhamento. Mesmo quando a maior parte da conversa não havia mudado, ainda pagávamos pelo trabalho vinculado ao histórico completo. À medida que as conversas ficavam mais longas, esse processamento repetido se tornava mais caro.

Para reforçar o design, repensamos o protocolo de transporte: poderíamos manter uma conexão persistente e um estado de cache, em vez de estabelecer uma nova conexão via HTTP e enviar o histórico completo de conversas para cada solicitação de acompanhamento? A ideia era enviar apenas novas informações que exigissem validação e processamento e estado reutilizável de cache na memória durante a vida útil da conexão. Isso reduziria a sobrecarga de trabalho redundante.

---

**Fonte original:** [OpenAI](https://openai.com/index/speeding-up-agentic-workflows-with-websockets)

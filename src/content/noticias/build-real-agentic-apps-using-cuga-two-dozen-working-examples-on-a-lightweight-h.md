---
title: "Crie aplicativos agênticos reais usando CUGA: duas dúzias de exemplos de trabalho em um arnês leve"
date: 2026-06-23
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/ibm-research/cuga-apps"
resumo: "A maioria dos aplicativos agênticos começa com uma semana de encanamento antes que o agente faça algo útil. Você escolhe uma estrutura, conecta um cliente de modelo, escreve adaptadores de ferramenta, cria uma maneira de transmitir o estado para uma interface do usuário e, em algum lugar, também decide para que serve o agente. A parte interessante chega por último."
destaque: false
---

A maioria dos aplicativos agênticos começa com uma semana de encanamento antes que o agente faça algo útil. Você escolhe uma estrutura, conecta um cliente de modelo, escreve adaptadores de ferramenta, cria uma maneira de transmitir o estado para uma interface do usuário e, em algum lugar, também decide para que serve o agente. A parte interessante chega por último.

A CUGA inverte isso. É o arnês de agente de código aberto da IBM que lida com o planejamento, o loop de execução, as chamadas de ferramentas e o encanamento estadual para você. O que resta é a parte que é realmente sua: quais ferramentas o agente pode alcançar e o que você diz a ele para fazer. Para mostrar como é isso na prática, criamos cuga-apps: duas dúzias de aplicativos pequenos e funcionais, cada um com um único arquivo FastAPI CugaAgent , de um recomendador de filmes a um consultor de arquitetura IBM Cloud. Eles existem para serem lidos e copiados. Você pode clicar na galeria ao vivo.

Este artigo percorre um deles, nomeia o que o arnês tira do seu prato e mostra onde o mesmo código vai quando você precisa dele para a produção. Nenhuma nova estrutura para aprender primeiro. Se você escreveu uma rota FastAPI, pode ler todas as linhas.

A pergunta justa a ser feita sobre qualquer coisa neste espaço é o que te salva de escrever. A resposta da CUGA: a orquestração em torno de um modelo que você reconstruiria todas as vezes.

Ele planeja antes de agir e, em seguida, executa com uma mistura de chamadas de ferramentas e código gerado (CodeAct). Em uma tarefa longa que executa vinte etapas, a coisa que quebra a maioria dos agentes é perder o controle dos resultados intermediários e re-derivá-los (muitas vezes errados) no próximo turno; CUGA mantém esse estado e executa uma etapa de reflexão que pode pegar uma chamada ruim e replanejar em vez de seguir em frente. Esse maquinário é por isso que superou benchmarks de agentes como AppWorld e WebArena, em vez de algo que você sintoniza à mão.

Você também define a compensação de custo/latência a partir da configuração em vez do código: modos de raciocínio Rápido, Equilibrado e Preciso, com execução de código em qualquer sandbox em que você confia (local, Docker/Podman ou nuvem E2B). Mesma definição de agente, discagem diferente. Esse mostrador é mais importante do que parece. A maioria dos arreios assume que um modelo de fronteira fica embaixo e se apoia nele para se recuperar quando um plano dá errado; a CUGA faz esse trabalho em si. O planejamento, a etapa de reflexão, o rastreamento de variáveis que mantém um longo curso — essa é a carga que o modelo teria que carregar, que é o que permite que um modelo menor de peso aberto se mantenha onde normalmente não faria. É por isso que os aplicativos hospedados são executados em gpt-oss-120b em vez de uma API de fronteira. Executar o maior modelo que você pode pagar é a aposta usual; CUGA é que um aberto menor é suficiente.

Nenhuma das peças individuais é exclusiva da CUGA. O que é diferente é que eles vêm pré-montados, então você os configura em vez de conectá-los. A API que você toca é pequena — crie um CugaAgent com uma lista de ferramentas e um prompt e aguarde agent.invoke(...) . Tudo abaixo dessa linha é o arnês.

Concretamente, são ferramentas intercambiáveis (as funções OpenAPI, MCP e LangChain se ligam da mesma maneira), planejamento de horizonte longo com gerenciamento variável e autocorreção (o maquinário por trás do #1 na AppWorld de 25/07 - 26/02 e WebArena de 25/02 - 25/09), guarda-corpos declarativos, delegação multiagente sobre A2A , RAG movido a Docling e comutação de provedor de um env-var ( pip install cuga , then OpenAI, watsonx, Ollama e muito mais) — cada um algo que você mesmo construiria. A primeira palavra do nome faz o trabalho: Configurável ; as partes difíceis são tratadas, então seu trabalho é apenas a tarefa.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/ibm-research/cuga-apps)

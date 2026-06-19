---
title: "É agêntico o suficiente? Benchmarking de modelos abertos em suas próprias ferramentas"
date: 2026-06-18
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/is-it-agentic-enough"
resumo: "Os agentes de codificação trabalham cada vez mais com nosso software em vez de nós: descreva uma tarefa e o agente escolhe a biblioteca, escreve as chamadas, as executa e depura seus próprios erros. Quando a biblioteca atrapalha, ela felizmente a ignora e reescreve a lógica do zero. Isso introduz um novo conceito i"
destaque: false
---

Os agentes de codificação trabalham cada vez mais com nosso software em vez de nós: descreva uma tarefa e o agente escolhe a biblioteca, escreve as chamadas, as executa e depura seus próprios erros. Quando a biblioteca atrapalha, ela felizmente a ignora e reescreve a lógica do zero. Isso introduz um novo conceito no desenvolvimento de bibliotecas: o código não deve apenas ser correto e rápido, mas deve ser projetado para que um agente pode conduzi-lo de forma eficaz. Uma API desajeitada ou documentos obsoletos incomodam os desenvolvedores, mas agora também enviam o agente por um caminho mais longo e caro.

A maioria dos benchmarks apenas olha para a resposta final. Em vez disso, queríamos todo o processo: não apenas se o agente acertou, mas quanto trabalho foi necessário para chegar lá e como isso muda entre modelos, revisões de bibliotecas e tarefas. Medimos exatamente isso, usando transformadores como nosso estudo de caso.

Aqui, apresentaremos um benchmark específico da ferramenta com foco em como a resposta foi encontrada e forneceremos uma implementação simples de um desses arneses, executando inteiramente em modelos abertos conduzidos pelo agente de codificação pi, com a varredura completa de modelos × revisões × tarefas espalhadas pelo Hugging Face Jobs para que cada execução veja hardware idêntico.

Isso permanece o mesmo dentro do domínio do ferramental otimizado para agêntica e, pela primeira vez, os dois estão diretamente ligados um ao outro.

Você quer que sua ferramenta exista para um agente: ela precisa ser detectável. A API precisa ser clara e os documentos precisam ser extensos. Eles precisam ser estruturados de forma que o agente tenha acesso rápido aos arquivos e exemplos úteis. Se você deseja que sua ferramenta funcione para um agente, deve testá-la quanto ao uso da agentic.

Usaremos transformadores como exemplo ao longo deste post: agentes que o usam para resolver tarefas de AM (classificação de texto, legendagem de imagens, transcrição de áudio), sem contribuir com código; embora o arnês tenha sido projetado para funcionar com qualquer ferramenta que possa ser operada a partir da linha de comando.

Nossa intuição sobre transformadores era que o uso poderia ser dramaticamente simplificado com algumas mudanças: uma CLI, uma Habilidade e exemplos autônomos específicos de tarefas. Esta é a mesma receita recentemente aplicada à CLI de hf, redesenhada para ser otimizada para o agente, onde os agentes usaram 1,3-1,8× (e até 6×) menos tokens. Queríamos saber se esse tipo de vitória se generaliza e se poderia ser útil para transformadores também.

A intuição é uma ferramenta poderosa, mas queríamos mais evidências antes de abrir PRs que adicionam vários milhares de linhas de código a uma base de código tão amplamente utilizada como os transformadores . Nós nos propusemos a medir como é o sucesso.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/is-it-agentic-enough)

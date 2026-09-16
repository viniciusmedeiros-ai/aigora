---
title: "Seu agente aceitou a tarefa. Será que vai fazer de novo?"
date: 2026-09-15
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/ibm-research/altk-evolve-consistency"
resumo: "Seu agente trabalha no ensaio, mas durante a demonstração ao vivo, ele segue um caminho diferente e falha na mesma tarefa."
destaque: false
---

Seu agente trabalha no ensaio, mas durante a demonstração ao vivo, ele segue um caminho diferente e falha na mesma tarefa.

Isso é embaraçoso no palco. Na produção, é um problema de confiabilidade: um fluxo de trabalho que teve sucesso uma vez pode falhar na próxima vez que um usuário fizer a mesma solicitação. Para trabalhos de missão crítica, como reconciliar uma transação financeira ou verificar um contrato para uma obrigação, isso pode ser um obstáculo.

A maioria dos benchmarks esconde essa variabilidade por trás de uma média. Na AppWorld, um agente ReAct usando GPT-4.1 teve sucesso em 77,4% das execuções em cinco repetições. Mas teve sucesso em todas as cinco execuções em apenas 53,0% das tarefas — uma lacuna de consistência de 24,4 pontos .

A maioria dos benchmarks relata o primeiro número. Construímos uma maneira de medir o segundo — e melhorá-lo.

Em uma publicação anterior, introduzimos o ALTK-Evolve - um sistema que transforma as próprias trajetórias passadas de um agente em diretrizes reutilizáveis, destiladas automaticamente e injetadas de volta no momento da inferência. Melhora de forma mensurável o sucesso da tarefa, mas esses resultados também fizeram apenas a pergunta do caso médio. Esta publicação apresenta diretrizes de consistência, um novo tipo de diretriz em altk-evolve construído sobre uma ferramenta de diagnóstico chamamos de Analisador de Consistência, que visa essa lacuna diretamente.

Relatórios de avaliação do agente padrão Mean@k : execute um benchmark k vezes, faça a média da taxa de aprovação. Muitas vezes k =3, às vezes apenas 1. É o número em todas as tabelas de classificação e é o que "77% de precisão" significa na prática.

Mean@k responde "quão bom é esse agente, em média?" Ele não responde à pergunta com a qual um usuário real se preocupa: ainda será bom se eu fizer essa pergunta exata novamente? Para isso, você precisa de Pass^k : a fração de tarefas em que o agente é bem-sucedido em todas as k execuções.

⚠️ Aprovado^k não é Aprovado@k. O familiar Pass@k é otimista — ele pergunta se pelo menos uma das k tentativas foi bem-sucedida, a pergunta certa quando você pode verificar e tentar novamente. Pass^k é sua imagem espelhada pessimista: toda tentativa deve ser bem-sucedida. Mesmas letras, pergunta oposta. Aprovado^k ≤ Média@k ≤ Aprovado@k, sempre.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/ibm-research/altk-evolve-consistency)

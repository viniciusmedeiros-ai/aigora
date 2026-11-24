---
title: "Como criar e manter uma avaliação agêntica"
date: 2026-11-23
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/agentic-evals"
resumo: "As avaliações de IA ajudam a determinar quais sistemas as pessoas criam, adotam e em quais elas confiam. Uma avaliação atribui tarefas a um sistema, verifica suas respostas ou ações e gera uma pontuação. Portanto, criar e manter uma avaliação útil exige trabalho de verdade: definir tarefas que reflitam a experiência no domínio e pontuá-las de forma confiável."
destaque: false
---

As avaliações de IA ajudam a determinar quais sistemas as pessoas criam, adotam e em quais elas confiam. Uma avaliação atribui tarefas a um sistema, verifica suas respostas ou ações e gera uma pontuação. Portanto, criar e manter uma avaliação útil exige trabalho de verdade: definir tarefas que reflitam a expertise no domínio, pontuá-las de forma confiável e verificar se os resultados corroboram as afirmações feitas. Quando os métodos, o código e os dados permanecem privados, que esse trabalho seja mais difícil de ser analisado ou desenvolvido por outras pessoas.

O código aberto oferece um meio de criar avaliações mais robustas, atualizadas com mais frequência e mais comparáveis, bem como a infraestrutura em torno delas. As tarefas, os ambientes e as ferramentas existentes oferecem aos desenvolvedores um ponto de partida, para que possam concentrar seus esforços na especialização e na validação do domínio. Compartilhar como uma avaliação foi elaborada, incluindo o que deu errado, permite que outras pessoas encontrem erros, melhorem a avaliação e a reutilizem.

O hub da Hugging Face é o lar da avaliação de IA: hospedamos cerca de 3.500 rankings de avaliação e observamos um crescimento de cerca de 16 vezes nos conjuntos de dados de avaliação no hub no ano passado, chegando a cerca de 17.000 conjuntos de dados. Nos últimos meses, também incorporamos suporte para abstrações agentivas que são relevantes para a avaliação. Por exemplo, Traces que armazenam o trabalho de um agente de uma forma facilmente revisável e compartilhável; Benchmarks que destacam conjuntos de dados usados para avaliar modelos com tabelas de classificação; e Ambientes que mostram conjuntos de dados usados como RL agêntico ou ambientes de avaliação.

Na comunidade de pesquisa, a terminologia de avaliação de IA é notoriamente inconsistente . O glossário no final define cada termo que usamos e indica os outros nomes que você pode encontrar.

O design de avaliação de IA evoluiu em três formas à medida que os modelos de linguagem se tornaram mais capazes e aptos a realizar tarefas mais complexas: pergunta-resposta, agêntico e equipes ou enxames. Benchmarks de perguntas e respostas, como o MMLU (2020) e o GPQA (2023), medem o conhecimento e o raciocínio por meio das respostas que os modelos produzem. À medida que os modelos se tornaram capazes de planejar e usar ferramentas, benchmarks agentivos como o SWE-bench e a WebArena ampliaram o escopo para a resolução de problemas de software e a conclusão de tarefas em sites. Essas tarefas exigem configurações de avaliação que levem em consideração o ambiente em que o sistema opera e as alterações que ele faz.

Ultimamente, as pesquisas sobre sistemas multiagentes começaram a adicionar outra dimensão: como os agentes se coordenam e o que eles realizam juntos. Isso inclui enxames descentralizados , equipes gerenciadas por um orquestrador e agentes especializados que colaboram em trabalhos científicos . A Figura 1 mostra uma linha do tempo aproximada dessas três eras de avaliações.

Figura 1. Três tipos de avaliações de modelos de linguagem. Os benchmarks de perguntas e respostas comparam uma resposta com um gabarito. Os benchmarks de agentes verificam o que um agente alterou em um ambiente. Os benchmarks de equipe e swarm pontuam o que um grupo de agentes produziu.

Neste artigo, vamos nos concentrar nas avaliações agenticas por dois motivos. Em primeiro lugar, elas estão se tornando cada vez mais o tipo mais proeminente nos anúncios de lançamento de modelos devido ao grande interesse dos usuários e das empresas na implementação de agentes. Em segundo lugar, elas oferecem um ponto de partida útil para entender como o design da avaliação afeta o desempenho do modelo. As avaliações de equipe e de swarm introduzem ainda mais complexidade por meio de interações entre agentes, que deixamos fora do escopo deste guia. Quando um agente usa ferramentas para concluir uma tarefa, cada parte do software ao redor pode afetar sua pontuação. Por exemplo, em uma auditoria do Terminal-Bench , os pesquisadores mantiveram o modelo fixo e alteraram o harness do agente. A precisão variou em até 29,9 pontos percentuais. Para entender diferenças como essa, analisamos a anatomia de uma avaliação de agente e acompanhar uma tarefa desde as instruções que o agente recebe até as verificações que determinam se ela foi aprovada.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/agentic-evals)

---
title: "O ciberataque acidental da OpenAI contra a Hugging Face é ficção científica que aconteceu"
date: 2026-07-22
categoria: "atualizacoes"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jul/22/openai-cyberattack/#atom-everything"
resumo: "Esta história é selvagem. A versão curta: a OpenAI estava executando um teste de segurança cibernética contra um modelo inédito, com os recursos de guarda-corpo do modelo desativados. Em vez de resolver o teste, o modelo saiu da sandbox do OpenAI e, em seguida, encontrou exploits para invadir o Hugging Face, tudo para que pudesse c"
destaque: false
---

Esta história é selvagem. A versão curta: a OpenAI estava executando um teste de segurança cibernética contra um modelo inédito, com os recursos de guarda-corpo do modelo desativados. Em vez de resolver o teste, o modelo saiu da caixa de areia da OpenAI e, em seguida, encontrou explorações para invadir o Hugging Face, tudo para que pudesse trapacear no teste roubando as respostas.

Ao longo do caminho, ajudou a apresentar o argumento mais forte até agora sobre como o desequilíbrio da disponibilidade do modelo está prejudicando nossa capacidade de proteger nosso software.

Eu não tinha visto o artigo do ExploitGym antes e é muito interessante. Autores da UC Berkeley, do Instituto Max Planck, da UC Santa Barbara e do Arizona State projetaram um novo benchmark para avaliar modelos sobre sua capacidade de transformar uma vulnerabilidade relatada em uma exploração concreta. OpenAI, Anthropic e Google forneceram feedback e ajudaram a executar o benchmark em relação aos seus modelos.

O benchmark "compreende 898 instâncias derivadas de vulnerabilidades do mundo real que afetaram projetos de software populares"- incluindo o kernel do Linux e o mecanismo JavaScript V8.

Entre todas as configurações, Claude Mythos Preview e GPT-5.5 alcançam as maiores contagens de sucesso (157 e 120 sucessos, respectivamente), demonstrando que os agentes de fronteira atuais podem explorar um subconjunto substancial de vulnerabilidades do mundo real sob condições controladas. O GPT-5.4 também resolve 54 tarefas notáveis, colocando-o em um nível intermediário. Os pares modelo-agente restantes resolvem menos de 15 tarefas cada, ressaltando que a exploração de ponta a ponta continua desafiadora e diferencia nitidamente os sistemas de fronteira de hoje. Notavelmente, o Claude Opus 4.7 alcança menos sucessos do que o Claude Opus 4.6, apesar de ser um ponto de verificação mais novo, e o faz a um custo substancialmente menor em todo o conjunto. A inspeção Trace revela que Claude Opus 4.7 e Gemini 3.1 Pro frequentemente concluem cedo depois de julgar o vulnerabilidade alvo não explorável.

O artigo também descreve a abordagem que eles adotaram para evitar que os agentes trapaceassem, saindo dos parâmetros do teste. Isso se torna relevante em um momento!

As conexões de saída são restritas a uma lista de permissões com curadoria que permite a instalação rotineira de pacotes (repositórios apt do Ubuntu e PyPI) e busca as cadeias de ferramentas necessárias para construir o V8. Todos os outros pontos de extremidade externos estão bloqueados.

Nossos resultados mostram que o desenvolvimento autônomo de exploits por agentes de IA de fronteira não é mais uma capacidade hipotética. Embora os agentes atuais ainda não sejam confiáveis em todos os alvos, eles já exploram uma fração não trivial de vulnerabilidades do mundo real, incluindo alvos complexos, como componentes do kernel. Esse rápido surgimento é em si uma descoberta central, mostrando que as capacidades que teriam pareciam implausíveis agora estão presentes em modelos de fronteira implantados.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jul/22/openai-cyberattack/#atom-everything)

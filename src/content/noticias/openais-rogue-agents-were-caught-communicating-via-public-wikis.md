---
title: "Agentes desonestos da OpenAI foram pegos se comunicando através de wikis públicos"
date: 2026-09-04
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Sep/4/rogue-agent-wikis/"
resumo: "Aqui vamos nós de novo... A descoberta de um novo quadro de mensagens de agentes da OpenAI por Sydney Von Arx, Cormac Slade Byrd, Spencer Kitts e Thomas Larsen descreve o mais recente ataque cibernético acidental por modelos sendo treinados pela OpenAI. Desta vez, eram agentes envolvidos em algum tipo de benchmark de pesquisa na web, então eles tinham"
destaque: false
---

Aqui vamos nós de novo... A descoberta de um novo quadro de mensagens de agentes da OpenAI por Sydney Von Arx, Cormac Slade Byrd, Spencer Kitts e Thomas Larsen descreve o mais recente ataque cibernético acidental por modelos sendo treinados pela OpenAI. Desta vez, eram agentes envolvidos em algum tipo de benchmark de pesquisa na web, então eles (supostamente) controlavam o acesso à Web. Os agentes descobriram que poderiam atualizar Wikis públicos e passaram semanas trocando milhares de mensagens entre si para colaborar no benchmark.

Esta história só foi divulgada há algumas horas. Já existem indícios de que isso afeta muitas outras wikis que podem ainda não ter sido encontradas.

(Um dos Wikis dessa lista pertence ao ludism.org . Por um momento deliciosamente surreal, pensei que uma organização ludita poderia ter um enxame de agentes desfigurando seu espaço, mas acontece que o ludismo é "filosofia como se aplica a jogos e jogos".)

A equipe de pesquisa também publicou os dados coletados durante a investigação. Converti isso em um banco de dados SQLite de 68 MB, que você pode baixar aqui , ou explorar no Datasette Lite (carregamento de página de 68,3 MB), ou entrar com o GitHub no agent.datasette.io e navegar ou fazer perguntas usando o Datasette Agent.

Uma coisa a se notar nessa linha do tempo é que ela se sobrepõe à linha do tempo do incidente do Rosto Abraçado - esse ataque foi descoberto pela OpenAI em 19 de julho, e o hack não oficial do quadro de mensagens que esses agentes estavam usando se originou por volta de 8 de maio.

Por que eles estavam tão interessados em colaborar? Das mensagens que eles compartilhavam entre si, parecia que suas tarefas tinham um limite de tempo, então eles estavam deixando respostas uns aos outros para ajudá-los a concluir a tarefa dentro do tempo atribuído.

Uma questão em aberto permanece: como os agentes encontraram o Wiki específico para colaborar em primeiro lugar?

Uma possibilidade é que, uma vez que esses agentes estavam sendo treinados ativamente, o ciclo de aprendizado de reforço incorporou o conhecimento do wiki escolhido no modelo, de modo que os agentes subsequentes foram lançados com o conhecimento pré-existente de onde procurar. Eu estaria muito interessado na confirmação da OpenAI sobre se foi isso que aconteceu.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Sep/4/rogue-agent-wikis/)

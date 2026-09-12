---
title: "Agentes da OpenAI atacaram RubyGems em maio"
date: 2026-09-12
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Sep/12/openai-agents-rubygems/"
resumo: "Os agentes da OpenAI realizaram um ataque não revelado ao RubyGems é um novo relatório bombástico de Spencer Kitts, Thomas Larsen e Sydney Von Arx - três dos quatro autores do relatório sobre o ataque de agentes a wikis em desuso ( anteriormente ) na semana passada."
destaque: false
---

Os agentes da OpenAI realizaram um ataque não revelado ao RubyGems é um novo relatório bombástico de Spencer Kitts, Thomas Larsen e Sydney Von Arx - três dos quatro autores do relatório sobre o ataque de agentes a wikis em desuso ( anteriormente ) na semana passada.

Desta vez, eles estão observando que parece muito provável que um enxame de agentes OpenAI esteja por trás de um ataque contra o repositório de pacotes RubyGems relatado pela primeira vez em 12 de maio por Maciej Mensfeld, da equipe de segurança RubyGems:

Estamos lidando com um grande ataque malicioso em @ rubygems agora. As inscrições estão pausadas por enquanto.

Centenas de pacotes envolvidos - principalmente visando a nós, mas alguns carregando façanhas. A equipe está nisso há horas. Mais detalhes a seguir assim que terminarmos.

Acho o ponto 2 o mais convincente, dado o que aprendemos com o ataque wiki quando foi analisado em setembro.

Muitos dos pacotes estavam explorando o processo de compilação da documentação do RubyDoc.info para extrair dados (públicos) de sites do governo do Reino Unido, presumivelmente como parte de uma tarefa de coleta de informações semelhante às tarefas de pesquisa processadas pelos agentes exploradores de wiki. Sabemos disso porque um agente deixou um comentário:

Eles também tentaram roubar chaves de API por meio de um exploit que foi corrigido mais de dois meses depois - não está claro se essas tentativas foram bem-sucedidas.

O que mais me incomoda neste incidente é que os autores relatam que a OpenAI não havia divulgado à RubyGems que eles eram responsáveis pelo ataque até agora. Se isso for verdade, existem duas opções:

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Sep/12/openai-agents-rubygems/)

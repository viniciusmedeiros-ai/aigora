---
title: "Relatório de Incidente: comportamento não sancionado do agente durante o teste cibernético"
date: 2026-08-05
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Aug/5/incident-report/#atom-everything"
resumo: "Relatório de Incidente: comportamento não sancionado do agente durante o teste cibernético. Aconteceu novamente . Desta vez, foi o Instituto de Segurança de IA do governo do Reino Unido que acidentalmente atacou outras empresas durante a execução de uma avaliação com modelos com os filtros de segurança desligados. Do seu artigo técnico (PDF):"
destaque: false
---

Relatório de Incidente: comportamento não sancionado do agente durante o teste cibernético. Aconteceu novamente . Desta vez, foi o Instituto de Segurança de IA do governo do Reino Unido que acidentalmente atacou outras empresas durante a execução de uma avaliação com modelos com os filtros de segurança desligados. Do seu artigo técnico (PDF):

Durante uma avaliação cibernética, de 25 a 28 de julho de 2026, os agentes de IA se envolveram em atividades sustentadas e não sancionadas direcionadas ao que eram, na prática, pessoas e organizações reais. Essas tentativas foram infrutíferas e, até onde sabemos, nenhum dano do mundo real resultou. [...]

Em 122 tentativas de avaliação em dois dos desafios cibernéticos da AISI, a AISI encontrou 19 casos em que agentes de IA tomaram medidas não sancionadas na internet ao vivo, incluindo casos que visavam pessoas e organizações reais. [...]

É incerto até que ponto o modelo reconheceu que estava tomando ações contra pessoas reais. No caso mais grave, um agente de IA (Mythos 5) decidiu tentar resolver o desafio cibernético usando um ataque à cadeia de suprimentos. Como resultado, o agente de IA criou uma conta do GitHub e tentou convencer um mantenedor de repositório de código aberto a aceitar uma pull request (PR) maliciosa do GitHub, inclusive criar uma segunda conta mascarada como outro usuário humano endossando o PR. [...] Além disso, em sua tentativa de resolver o desafio, o agente decidiu empregar a técnica de “spear-phishing” enviando e-mails direcionados contendo conteúdo malicioso e tentando manipular os destinatários para aceitar as alterações de código, e planejou uma injeção imediata para comprometer outros agentes de codificação.

O que achei mais surpreendente é que a AISI estava executando esses agentes sem qualquer forma de sandbox de rede:

A AISI forneceu aos agentes de IA acesso à internet durante essas avaliações, o que possibilitou suas ações na internet aberta nesse cenário. O acesso à Internet foi uma parte deliberada da configuração de avaliação da AISI nessa configuração, e não devido à fuga da área restrita.

Isso, combinado com o fato de que "a AISI desabilita deliberadamente os classificadores cibernéticos implementados pelo desenvolvedor", torna o fato de que os agentes começaram a atacar alvos do mundo real totalmente surpreendente para mim.

A maioria dos incidentes relatados foi claude Mythos 5, mas "GPT-5.6 sol sem classificadores cibernéticos" também pontuou alguns.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Aug/5/incident-report/#atom-everything)

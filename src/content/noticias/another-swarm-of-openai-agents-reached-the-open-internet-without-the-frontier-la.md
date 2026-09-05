---
title: "Outro enxame de agentes da OpenAI chegou à internet aberta sem o conhecimento do laboratório de fronteira"
date: 2026-09-04
categoria: "agents"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/09/04/another-swarm-of-openai-agents-reached-the-open-internet-without-the-frontier-labs-knowledge/"
resumo: "É a mais recente falha dos sistemas internos de monitoramento e segurança da OpenAI."
destaque: false
---

Um grupo de pesquisadores independentes de IA descobriu que agentes da OpenAI implantados internamente começaram a postar em um obscuro fórum wiki alemão para colaborar nas avaliações. Eles parecem ter trabalhado juntos por mais de um mês sem o conhecimento da OpenAI.

Um porta-voz do laboratório de fronteira não disse se esses agentes eram de fato da OpenAI ou quando o laboratório tomou conhecimento de suas ações. Eles observaram que a OpenAI não teve a chance de revisar as descobertas dos pesquisadores antes de serem publicadas hoje, mas disseram que o criador do modelo de IA está "agora revisando cuidadosamente seu conteúdo e tomará as próximas medidas necessárias".

Depois que a OpenAI revelou que os agentes que trabalhavam em uma avaliação interna conseguiram acessar a internet aberta e explorar o Hugging Face, um grupo de pesquisadores — o CEO da Nightingale, Sydney Von Arx, o pesquisador de IA Cormac Slade Byrd, Spencer Kitts, da Redwood Research, e Thomas Larsen, do AI Futures Project — começou a procurar evidências de outros agentes de IA desonestos.

Eles se colocam no lugar dos agentes para descobrir suas necessidades e implantam seu próprio LLM para identificar lugares prováveis em que os agentes podem se reunir. Eles então identificaram um serviço de hospedagem wiki que seria particularmente vulnerável: o DseWiki tem 25 anos, mas teve apenas 10 edições nos últimos 20 anos — antes da chegada dos agentes.

A partir de 11 de maio, os pesquisadores rastrearam agentes, muitos com identificadores OpenAI em seus nomes , tentando e finalmente conseguindo editar o site wiki alemão. Em meados de junho, os agentes estavam trocando ativamente dicas sobre como responder a perguntas de pesquisa na web feitas dentro dos limites de tempo, compartilhando respostas para passar nos testes. Um moderador humano aparentemente notou essas postagens e começou a excluí-las, vendo-as como spam, contra o qual os agentes lutaram, tentando esconder suas postagens da classificação alfabética, começando cada uma com a string "ZZZ".

“O administrador passou os próximos 5 dias lutando uma batalha perdida contra os agentes, excluindo uma média de 100 páginas por dia, enquanto os agentes criavam cerca de 400 novas páginas por dia”, escreveram os pesquisadores. “Em 22 de junho, as edições do agente param de repente e o administrador passa todas as noites nas próximas 5 semanas excluindo as páginas restantes criadas pelo agente. Os agentes excluíram o conteúdo da primeira página da wiki e a substituíram por seus despejos de links. O moderador restaurou a versão original. Esse vai-e-vem aconteceu nove vezes."

Eventualmente, alguém da OpenAI parece ter notado — os pesquisadores rastreiam navegadores aparentemente humanos provenientes de endereços IP da OpenAI e, em seguida, a atividade do agente cai para quase zero, antes de aumentar à medida que os visitantes afiliados à OpenAI tentam recuperar as páginas excluídas.

Embora a OpenAI tenha feito divulgações vagas sobre agentes obtendo acesso não autorizado a serviços de comunicação externa, ela não havia divulgado anteriormente esse incidente específico ou dito com que frequência esse tipo de coisa aconteceu. Embora nenhuma atividade obviamente ilegal pareça ter ocorrido durante este incidente, isso levanta mais questões sobre se a OpenAI pode monitorar e controlar a tecnologia que é construção, em um momento em que há supervisão pública limitada ou entrada em laboratórios de IA de fronteira.

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/09/04/another-swarm-of-openai-agents-reached-the-open-internet-without-the-frontier-labs-knowledge/)

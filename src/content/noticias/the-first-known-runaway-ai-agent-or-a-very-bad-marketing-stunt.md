---
title: "O primeiro agente de IA fugitivo conhecido - ou um golpe de marketing muito ruim?"
date: 2026-07-23
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jul/23/the-first-known-runaway-ai-agent/#atom-everything"
resumo: "O primeiro agente de IA fugitivo conhecido - ou um golpe de marketing muito ruim? ( via ) O comentário de Martin Alderson sobre o ciberataque acidental da OpenAI contra a Hugging Face inclui alguns detalhes que eu não tinha considerado."
destaque: false
---

O primeiro agente de IA fugitivo conhecido - ou um golpe de marketing muito ruim? ( via ) O comentário de Martin Alderson sobre o ciberataque acidental da OpenAI contra a Hugging Face inclui alguns detalhes que eu não tinha considerado.

Primeiro, o Hugging Face oferece um alvo verdadeiramente rico se você estiver tentando encontrar possíveis vulnerabilidades que exijam a execução de código arbitrário:

O Rosto Abraçado tem uma enorme superfície de ataque. Eles têm mais interfaces do que posso contar que executam modelos e códigos não confiáveis. Embora eles definitivamente tenham investido em defesas, por natureza de seu modelo operacional, eles têm muito mais oportunidades de serem atacados do que muitos outros serviços. Eu certamente não invejo suas equipes de segurança cibernética.

Em segundo lugar, uma das coisas que me intrigou é como a OpenAI não percebeu que sua sandbox havia sido tão completamente violada pelo agente. Certamente eles estariam monitorando o tráfego de rede de perto?

Também é provável que eles estivessem executando uma enorme quantidade de benchmarks simultaneamente com orçamentos de token ~ilimitados - você quer o maior número possível de amostras para descobrir o quão bom é um modelo em um determinado benchmark. Também pode ser que eles estejam testando vários pontos de verificação diferentes do modelo, entendendo como o modelo está melhorando à medida que passa pelos vários estágios de treinamento.

Os erros cometidos pela equipe da OpenAI que executa esse benchmark são mais fáceis de imaginar quando você pensa na escala em que os benchmarks desse tipo geralmente operam. Pelo que sabemos, eles poderiam estar submetendo um novo modelo a dezenas de benchmarks ao mesmo tempo, em dezenas de ambientes diferentes.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jul/23/the-first-known-runaway-ai-agent/#atom-everything)

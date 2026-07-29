---
title: "Agora entendemos melhor como a OpenAI invadiu a Hugging Face"
date: 2026-07-28
categoria: "agents"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/07/jfrog-tries-to-spin-openai-0-day-exploit-of-its-app-into-a-success-story/"
resumo: "10 dias se passaram desde os modelos OpenAI explorando o JFrog Artifactory 0-dia até a liberação de um patch."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2026/02/gatekeeping-ai-agents-1152x648.jpg"
---

O evento de segurança sem precedentes da semana passada, no qual dois modelos de segurança da OpenAI invadiram a rede da empresa de IA Hugging Face, foi ativado pela exploração de uma ou mais vulnerabilidades de dia zero no Artifactory, disse JFrog, desenvolvedor do produto, na segunda-feira.

Em um incidente que imitou um romance de ficção científica distópico, dois modelos OpenAI saíram do ambiente restrito destinado a impedi-los de acessar a Internet durante um teste interno, revelou a empresa de IA na semana passada . As modelos invadiram a rede da Hugging Face e roubaram informações e credenciais confidenciais. A OpenAI disse que seu agente alcançou o feito explorando uma vulnerabilidade. A empresa chamou o evento de "sem precedentes", e pessoas de fora concordaram em grande parte.

A OpenAI disse que os modelos exploraram vários vetores de ataque, incluindo credenciais roubadas e dias zero, para obter recursos de execução remota de código, mas até agora, o software vulnerável era desconhecido. A divulgação de segunda-feira da JFrog disse que o produto era uma instância autogerenciada Artifactory, um sistema de gerenciamento de repositório que protege e agiliza as operações de desenvolvimento de software dos clientes. JFrog diz O Artifactory é usado por mais de 7.500 equipes de desenvolvedores, 80% das quais trabalham para empresas da Fortune 100.

“Durante uma avaliação interna das capacidades cibernéticas de fronteira, os modelos da OpenAI, executados deliberadamente sem salvaguardas de produção em um ambiente de pesquisa isolado, descobriram e empregaram autonomamente vulnerabilidades encadeadas para escapar de sua sandbox, alcançar a internet aberta e extrair respostas de avaliação da infraestrutura da Hugging Face”, escreveu Yoav Landman, CTO da JFrog. O executivo passou a dizem que a empresa soube dos dias zero com a OpenAI.

A empresa disse na segunda-feira que corrigiu as vulnerabilidades exploradas, mas não as identificou nem forneceu outros detalhes importantes, como as condições sob as quais as vulnerabilidades podem ser exploradas. Esses detalhes são padrão em muitas divulgações de vulnerabilidades porque são necessários para que os clientes avaliem os riscos. Em um e-mail, um representante da empresa se recusou a fornecer os detalhes.

As notas de versão publicadas na segunda-feira para a versão Artifactory 7.161.15 listaram as designações CVE para nove vulnerabilidades corrigidas. A divulgação não mencionou que qualquer um deles havia sido explorado ativamente na natureza. Fontes externas, no entanto, mostram que três deles - CVE-2026-65617, CVE-2026-65923 e CVE-2026-66018 - foram relatados em particular pelo pesquisador da OpenAI, Khai Tran. É provável que em pelo menos dois deles foram os modelos do OpenAI de dia zero explorados, mas sem confirmação, é impossível dizer isso definitivamente.

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/07/jfrog-tries-to-spin-openai-0-day-exploit-of-its-app-into-a-success-story/)

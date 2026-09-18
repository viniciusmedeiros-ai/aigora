---
title: "Pesquisadores usaram o Claude da Anthropic para invadir a OpenAI"
date: 2026-09-18
categoria: "claude"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/09/18/researchers-used-anthropics-claude-to-hack-into-openai/"
resumo: "Os pesquisadores de segurança usaram o Claude da Anthropic para explorar vulnerabilidades nos sistemas da OpenAI, assumindo contas de funcionários e obtendo acesso a um repositório de código interno antes de relatar as falhas."
destaque: false
---

Em uma reviravolta que captura o estranho novo estado da segurança da IA, pesquisadores de segurança independentes usaram o Claude da Anthropic para invadir o OpenAI, expondo rachaduras nas defesas do fabricante do ChatGPT, informou o The Wall Street Journal na noite de quinta-feira.

Uma equipe de segurança de três pessoas da startup Hacktron AI realizou o ataque como parte de um programa de recompensas por bugs da OpenAI. A Hacktron relatou suas descobertas à OpenAI, que concedeu à startup um prêmio de $ 6.500. A equipe conseguiu encadear duas vulnerabilidades críticas para obter acesso a várias contas de ChatGPT de funcionários da OpenAI, o que lhes deu acesso ao software da empresa.

A OpenAI diz que resolveu os problemas que a Hacktron descobriu, o que acontece em um momento em que as principais empresas de IA estão sob crescente pressão sobre a segurança .

Este incidente ocorre várias semanas depois que os próprios agentes de IA da OpenAI quebraram a contenção durante uma avaliação de segurança cibernética e hackearam o Hugging Face, demonstrando o quão capazes os modelos de IA estão conseguindo tomar suas próprias decisões . Ele também destaca como a tecnologia pronta para uso pode ser usada para encontrar vulnerabilidades até mesmo na infraestrutura das empresas mais avançadas.

"Por $ 200 por mês, qualquer pessoa pode usar essas ferramentas e invadir uma empresa como a OpenAI", disse Matt Fredrikson, CEO da empresa de segurança de IA Gray Swan, ao TechCrunch. "Se isso pode acontecer com eles — e eu não acho que eles tenham se debruçado recentemente sobre a higiene da segurança cibernética — isso pode acontecer com qualquer um."

Ou, como observou um especialista em IA nas redes sociais: "[Hacktron] usou o Opus 5 para fazer o hack...A pergunta que será feita é: se esses três caras podem fazer isso, o que um Estado-nação pode fazer?"

Os pesquisadores encontraram um caminho para a OpenAI em 25 de julho por meio de uma falha no Discourse, o software de terceiros que alimenta o fórum da comunidade da OpenAI.

De acordo com um blog que os pesquisadores publicaram , o ponto de entrada era um upload de imagens mundanas. Quando os usuários postaram arquivos de imagem HEIF ou HEIC (o formato que os iPhones usam por padrão) no fórum da comunidade OpenAI, o Discourse os passou por uma cadeia de ferramentas de bastidores para convertê-los em JPEGs padrão. Sua primeira parada foi o ImageMagick, um utilitário de código aberto de décadas usado para redimensionar imagens. Porque O kit de ferramentas usual do ImageMagick não consegue lidar com o formato da Apple, ele entregou o arquivo para outra biblioteca chamada libheif para fazer a decodificação.

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/09/18/researchers-used-anthropics-claude-to-hack-into-openai/)

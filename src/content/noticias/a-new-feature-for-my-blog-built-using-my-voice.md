---
title: "Um novo recurso para o meu blog, criado usando minha voz"
date: 2026-10-09
categoria: "atualizacoes"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Oct/9/built-using-my-voice/"
resumo: "Enviei um novo recurso para o meu blog hoje: a página Newsletters, que oferece um índice de todas as newsletters que enviei, tanto minha Substack semanal gratuita quanto minhas atualizações mensais apenas para patrocinadores. Construí o recurso quase inteiramente usando minha voz, conversando com meu laptop enquanto preparava o jantar."
destaque: false
---

Enviei um novo recurso para o meu blog hoje: a página Newsletters, que oferece um índice de todas as newsletters que enviei, tanto minha Substack semanal gratuita quanto minhas atualizações mensais apenas para patrocinadores. Construí o recurso quase inteiramente usando minha voz, conversando com meu laptop enquanto preparava o jantar.

Usei o aplicativo de desktop ChatGPT para isso, na guia Codex, usando o modo de conversa por voz, em execução em um ambiente de desenvolvimento local. Aqui está o que parece:

Isso me deu uma prévia do site em que ele estaria trabalhando e significava que eu poderia pedir mais tarde que ele me mostrasse as novas páginas para que eu pudesse acompanhar visualmente seu progresso.

Então cliquei no botão "Iniciar novo bate-papo por voz" - esse não é o botão do microfone, é o da direita - e coloquei meu laptop na cozinha para que eu pudesse conversar com ele enquanto cozinhava.

Eu tinha uma boa ideia do que queria construir, e é um recurso Django simples o suficiente para que eu tivesse certeza de que o modelo (neste caso, GPT-6 Astra High) seria capaz de fazê-lo. Um novo modelo, uma migração, alguns códigos de exibição, modelos e algumas funções de importação para preencher o banco de dados de fontes externas.

Hum, eles não. Hum, este vai ser um novo tipo de conteúdo. Hum, não vai aparecer... Oh, espere. Sim, não- Eu não quero que isso apareça nas minhas, hum, páginas de tag e páginas de arquivo de data e... Na verdade, não, eu acho... Eu não quero isso nas páginas de tag. Eu não quero isso na página de índice do blog. Mas acho que quero que apareça nas páginas baseadas em datas. Você sabe, se você navegar para 19 de setembro, e enviei um boletim informativo nessa página, acho que quero que isso apareça. Então... isso é... então acho que provavelmente precisamos de um novo modelo. A outra coisa é que eu quero que eles sejam pesquisáveis, uh, os Substack não são pesquisáveis, porque na verdade são apenas cópias de outros conteúdos do meu blog. Esses mensais contêm conteúdo exclusivo e, uma vez que são... publicados, como assim que forem tornados públicos um mês depois de terem saído, quero que apareçam nos meus resultados de pesquisa.

Aparentemente, isso era claro o suficiente para que o modelo soubesse o que eu queria construir! Você pode ler a transcrição completa, disfluências e tudo, neste Gist .

Continuamos assim por cerca de meia hora (o tempo que levamos para cozinhar o jantar). O modelo respondia e ocasionalmente fazia perguntas esclarecedoras, depois começava a trabalhar modificando o código.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)

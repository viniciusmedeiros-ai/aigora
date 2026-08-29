---
title: "Um pesquisador antrópico acabou de nos dar uma olhada na IA de auto-aperfeiçoamento"
date: 2026-08-28
categoria: "claude"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/08/28/an-anthropic-researcher-just-gave-us-a-peek-at-self-improving-ai/"
resumo: "Dados 10 benchmarks para comportamentos desalinhados específicos, os sistemas automatizados foram capazes de melhorar o desempenho em cada um sem degradar o desempenho geral."
destaque: false
---

O treinamento de modelos de IA com outros modelos de IA tornou-se um objetivo muito popular para a neolabs — e agora, um pesquisador do programa de bolsistas da Anthropic nos deu uma visão inicial de como isso pode parecer na prática.

Na sexta-feira, a Anthropic publicou um novo artigo intitulado “ Automated Researchers Can Reliably Mitigate Alignment Failures”, detalhando como os sistemas de IA poderiam melhorar de forma confiável o desempenho de um modelo em um conjunto de benchmarks de alinhamento. Quando dados 10 benchmarks para comportamentos desalinhados específicos, os sistemas automatizados foram capazes de melhorar o desempenho em cada um sem degradar o desempenho geral.

Liderado pelo Antrópico Chen Yueh-Han, o sistema replica grande parte da abordagem tradicional de pesquisa. Cada sistema automatizado pesquisa a literatura disponível, propõe um método e treina o modelo usando esse método por 30 minutos, aumentando gradualmente o benchmark ao longo de várias iterações. Os métodos eficazes são preservados enquanto os ineficazes são descartados, permitindo que o sistema opere rapidamente e em grande escala.

“No geral, esses resultados fornecem evidências iniciais de que o alinhamento automatizado pós-treinamento pode se tornar prático no curto prazo”, diz o artigo.

O artigo é um passo em direção ao autoaperfeiçoamento recursivo, que muitos veem como o próximo passo significativo no progresso da IA. Se os modelos puderem melhorar seu próprio treinamento de alinhamento, é plausível que eles possam melhorar as práticas de treinamento de forma mais ampla — nesse ponto, os pesquisadores humanos de IA podem em breve se tornar obsoletos.

O artigo não tem vergonha de abordar essa ideia, comparando explicitamente o Automated Alignment Researcher (AAR) ao seu equivalente humano. "O melhor método de RAA supera o que humanos experientes propõem, em média, em seis horas", diz o artigo. "Instruções de pesquisa guiadas por humanos não levam a um desempenho mais forte."

Há até uma comparação de custos, caso alguém não esteja convencido. "Um RAA custa cerca de $ 4 por hora em inferência de API contra os $ 150 por hora que pagamos aos nossos pesquisadores humanos."

Para ser justo, o artigo também aponta algumas limitações a essa abordagem. O sistema automatizado só funciona na medida em que os benchmarks refletem os objetivos reais de alinhamento, e mesmo assim há um trabalho significativo a ser feito no estabelecimento e manutenção desses benchmarks — para não mencionar a manutenção e expansão da literatura da qual os pesquisadores automatizados são extraídos.

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/08/28/an-anthropic-researcher-just-gave-us-a-peek-at-self-improving-ai/)

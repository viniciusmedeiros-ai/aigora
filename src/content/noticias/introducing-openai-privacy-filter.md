---
title: "Apresentamos o Filtro de Privacidade OpenAI"
date: 2026-04-22
categoria: "atualizacoes"
fonte: "OpenAI"
fonteUrl: "https://openai.com/index/introducing-openai-privacy-filter"
resumo: "O OpenAI Privacy Filter é um modelo de peso aberto para detectar e redigir informações de identificação pessoal (PII) em texto com precisão de última geração"
destaque: false
---

Hoje estamos lançando o OpenAI Privacy Filter, um modelo de peso aberto para detectar e editar informações de identificação pessoal (PII) em texto. Esta versão faz parte de nosso esforço mais amplo para apoiar um ecossistema de software mais resiliente, fornecendo aos desenvolvedores infraestrutura prática para construir com IA com segurança, incluindo ferramentas e modelos que facilitam fortes proteções de privacidade e segurança para implementar desde o início.

O Filtro de Privacidade é um modelo pequeno com capacidade de detecção de dados pessoais de fronteira. Ele foi projetado para fluxos de trabalho de privacidade de alto rendimento e é capaz de realizar a detecção de PII com reconhecimento de contexto em texto não estruturado. Ele pode ser executado localmente, o que significa que as PII podem ser mascaradas ou redigidas sem sair da sua máquina. Ele processa entradas longas de forma eficiente, tomando decisões de redação em uma única passagem rápida.

Na OpenAI, usamos uma versão aperfeiçoada do Filtro de Privacidade em nossos próprios fluxos de trabalho de preservação da privacidade. Desenvolvemos o Filtro de Privacidade porque acreditamos que, com os recursos de IA mais recentes, poderíamos elevar o padrão de privacidade além do que já estava no mercado. A versão do Filtro de Privacidade que estamos lançando hoje alcança um desempenho de última geração no benchmark PII-Masking-300k, quando corrigido para problemas de anotação que identificamos durante a avaliação.

Com esta versão, os desenvolvedores podem executar o Privacy Filter em seus próprios ambientes, ajustá-lo aos seus próprios casos de uso e criar proteções de privacidade mais fortes em pipelines de treinamento, indexação, registro e revisão.

A proteção da privacidade em sistemas modernos de IA depende de mais do que a correspondência de padrões. As ferramentas tradicionais de detecção de PII geralmente dependem de regras determinísticas para formatos como números de telefone e endereços de e-mail. Eles podem funcionar bem para casos restritos, mas muitas vezes perdem informações pessoais mais sutis e lutam com o contexto.

O Filtro de Privacidade é construído com uma compreensão mais profunda da linguagem e do contexto para um desempenho com mais nuances. Ao combinar uma forte compreensão da linguagem com um sistema de rotulagem específico de privacidade, ele pode detectar uma gama mais ampla de PII em texto não estruturado, incluindo casos em que a decisão certa depende do contexto. Ele pode distinguir melhor entre informações que devem ser preservadas porque são públicas e informações que devem ser mascaradas ou redigidas porque se referem a um indivíduo particular.

O resultado é um modelo forte o suficiente para oferecer um desempenho de filtragem de privacidade de nível de fronteira. Ao mesmo tempo, o modelo é pequeno o suficiente para ser executado localmente - o que significa que os dados que ainda não foram filtrados podem permanecer no dispositivo, com menos risco de exposição, em vez de precisarem ser enviados para um servidor para desidentificação.

O Privacy Filter é um modelo de classificação de token bidirecional com decodificação span. Ele começa a partir de um ponto de verificação pré-treinado autorregressivo e é então adaptado em um classificador de token sobre uma taxonomia fixa de rótulos de privacidade. Em vez de gerar token de texto por token, ele rotula uma sequência de entrada em uma passagem e, em seguida, decodifica intervalos coerentes com um procedimento Viterbi restrito.

---

**Fonte original:** [OpenAI](https://openai.com/index/introducing-openai-privacy-filter)

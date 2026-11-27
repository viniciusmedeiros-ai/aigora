---
title: "Enxames, bandos, gangues: como criar, treinar e avaliar sistemas multiagentes"
date: 2026-11-26
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/training-swarms"
resumo: "Esta é uma série de artigos de blog ambiciosa para leitores ambiciosos. Nós (nós, a comunidade, você) queremos construir nossos próprios swarms de agentes porque eles são empolgantes, desafiadores e cada vez mais capazes. Além disso, seria extremamente legal se pudéssemos treinar nossos próprios agentes para trabalhar em um swarm. E exponencialmente"
destaque: false
---

Esta é uma série de blogs ambiciosa para leitores ambiciosos. Nós (nós, a comunidade, você) queremos criar nossos próprios swarms de agentes porque eles são empolgantes, desafiadores e cada vez mais capazes. Além disso, seria extremamente legal se pudéssemos treinar nossos próprios agentes para trabalhar em um swarm. E seria exponencialmente mais legal se esses swarms usassem modelos pequenos e acessíveis.

É isso que faremos nesta série! Cada post do blog incluirá um pouco de contexto sobre a criação de swarms, além de exemplos reprodutíveis que você pode executar no Hugging Face Jobs. O exemplo deste post leva cerca de cinco horas em duas H200s, o que custa aproximadamente US$ 50.

Os sistemas multiagentes são difíceis de fazer funcionar. Adicionar agentes altera o contexto do agente, o orçamento e, por sua vez, a complexidade de todo o sistema. Combinar o contexto dos agentes por meio da comunicação não é um aumento de desempenho inerente em comparação com um único agente. O modelo precisa aprender a se comunicar por meio de treinamento. Como definimos o que os modelos devem aprender? E quais pesos de modelo devemos atualizar quando estamos lidando com muitos agentes?

Nesta série, vamos abordar esses problemas com uma visão geral educativa e exemplos práticos. Cada post apresentará uma pergunta, criará um pequeno sistema e analisará o que acontece e como você pode reproduzir isso. Este primeiro exemplo começa com quatro agentes, um modelo de linguagem compartilhado e uma tarefa simples e verificável. É ideal para você implementar, testar e aprender.

Ouvimos muito sobre swarms nos últimos meses, tanto coisas boas quanto ruins. Em setembro deste ano, a OpenAI anunciou que um swarm de cerca de 10 mil agentes havia encontrado uma singularidade nas equações de Navier-Stokes 3D, um dos Problemas do Prêmio do Milênio. Um grupo menor de quase 100 agentes já havia refutado a regularidade das equações de Euler 3D não forçadas, um problema em aberto intimamente relacionado.

Mas os swarms nem sempre funcionam nos problemas que queremos que eles resolvam. A investigação do METR sobre o incidente da Hugging Face descobriu que cerca de 1.200 agentes da OpenAI, que deveriam estar isolados, encontraram uma maneira de trocar mais de 70 mil mensagens e arquivos. Cerca de 700 participaram de um ataque à Hugging Face enquanto procuravam maneiras de enganar o avaliador do seu benchmark, sem instruções para fazer isso.

Um grande swarm não é, por si só, uma evidência de que a cooperação ajudou. Noam Brown estima que menos de 10% do resultado de Navier-Stokes veio da cooperação entre múltiplos agentes. No experimento de descoberta de vulnerabilidades da Anthropic, os agentes coordenados encontraram mais bugs do que os agentes independentes, mas também analisaram mais código e usaram mais tokens. Quando a comparação foi restrita aos mesmos diretórios, os resultados por milhão de tokens foram aproximadamente os mesmos.

Comece com o caso mais simples. Se quatro agentes tentarem realizar uma tarefa de forma independente, a probabilidade de que pelo menos um deles acerte é maior do que com uma única tentativa, desde que possamos identificar qual resposta está correta. Isso estabelece uma base útil para um sistema multiagente, mas não demonstra que os agentes se ajudaram mutuamente. Eles podem simplesmente ter tido mais tentativas.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/training-swarms)

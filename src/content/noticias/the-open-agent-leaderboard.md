---
title: "A tabela de classificação do Open Agent"
date: 2026-05-18
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/ibm-research/open-agent-leaderboard"
resumo: "Quão bons são os agentes de IA de uso geral? Construímos uma estrutura de avaliação aberta para descobrir."
destaque: false
---

Quão bons são os agentes de IA de uso geral? Construímos uma estrutura de avaliação aberta para descobrir.

A maioria das avaliações em IA relata um resultado simples: qual pontuação cada modelo obteve em qual tarefa de benchmarking. Ao implantar um agente, você não está apenas escolhendo um modelo. Você está escolhendo um sistema completo: quais ferramentas o agente pode usar, como ele planeja suas etapas, o que ele lembra entre as ações, como ele se recupera quando algo dá errado. Alterar qualquer um desses e o mesmo modelo pode produzir resultados muito diferentes em custos muito diferentes.

O quão bem um agente de IA funciona depende de como ele é construído, não apenas do modelo dentro dele.

Hoje estamos lançando o Open Agent Leaderboard, uma referência aberta para comparar sistemas de agentes completos, não apenas os modelos dentro deles. Ele relata qualidade e custo, para que você possa ver não apenas o que funciona, mas o que vale a pena implantar.

A tabela de classificação é emparelhada com a estrutura Exgentic para executar e reproduzir avaliações e um artigo descrevendo a metodologia e os resultados completos. Tudo está aberto desde o primeiro dia.

Os agentes de IA estão ficando realmente úteis quando cuidadosamente adaptados a um trabalho específico, como codificar em um repositório familiar ou lidar com o atendimento ao cliente com um conjunto conhecido de ferramentas. Mas a questão mais difícil é se o mesmo agente pode lidar com muitos trabalhos diferentes, cada um com suas próprias ferramentas, regras e restrições, sem ser personalizado manualmente para cada um.

Um agente mais geral é aquele que você pode colocar em uma nova configuração e fazer com que funcione.

Isso é o que queremos dizer com generalidade, e é melhor entendido como um espectro, não um rótulo binário. Claro, a generalidade que só funciona na teoria não é útil. O que importa é se um agente permanece capaz à medida que a gama de empregos e configurações cresce e se o faz a um custo razoável. Um sistema que lida com tudo, mas custa uma fortuna, não é geral de forma alguma.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/ibm-research/open-agent-leaderboard)

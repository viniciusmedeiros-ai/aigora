---
title: "ScarfBench: benchmarking de agentes de IA para migração do Enterprise Java Framework"
date: 2026-06-30
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/ibm-research/scarfbench"
resumo: "Modernizar aplicativos corporativos é uma das maiores e mais caras atividades de engenharia de software que as organizações realizam. As equipes migram aplicativos entre estruturas para melhorar a capacidade de manutenção, a prontidão para a nuvem, a produtividade do desenvolvedor e o acesso a recursos modernos."
destaque: false
---

Modernizar aplicativos corporativos é uma das maiores e mais caras atividades de engenharia de software que as organizações realizam. As equipes migram aplicativos entre estruturas para melhorar a capacidade de manutenção, a prontidão para a nuvem, a produtividade do desenvolvedor e o acesso a recursos modernos.

Avanços recentes em agentes de codificação provocaram entusiasmo em torno da modernização assistida por IA. Mas uma questão importante permanece:

Os benchmarks de engenharia de software existentes demonstraram um progresso impressionante na correção de bugs e na geração de código, mas a migração da estrutura apresenta um desafio fundamentalmente diferente. O sucesso requer não apenas a tradução de código, mas também a preservação do comportamento, a adaptação de sistemas de compilação e a navegação em dependências de tempo de execução.

Para resolver essa lacuna, apresentamos o ScarfBench (Self-Contained Application Refactoring Benchmark) , um benchmark aberto para avaliar agentes de IA em tarefas de migração entre estruturas no Enterprise Java.

Ao contrário dos benchmarks tradicionais que comparam o código gerado com as implementações de referência, o ScarfBench avalia se os aplicativos migrados realmente criam, implantam e preservam o comportamento.

Uma migração simples de repositório pode exigir alterações na injeção de dependência, configuração de persistência, consultas e descritores de framework. Pequenos erros em qualquer uma dessas peças podem impedir a implantação bem-sucedida.

A migração de framework requer a tradução da semântica do framework, não apenas do código-fonte.

O ScarfBench fornece uma maneira sistemática de avaliar agentes de IA em tarefas de migração da estrutura Java corporativa.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/ibm-research/scarfbench)

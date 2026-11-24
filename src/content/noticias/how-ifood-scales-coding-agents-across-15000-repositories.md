---
title: "Como o iFood escala agentes de codificação em 15 mil repositórios"
date: 2026-11-24
categoria: "agents"
fonte: "OpenAI"
fonteUrl: "https://openai.com/business/customer-stories/ifood"
resumo: "A Plataforma de Agentes Remotos transformou as tarefas de engenharia em chamadas de API: as equipes delegam o trabalho, a execução ocorre em uma sandbox remota e o resultado retorna como uma solicitação de merge. Na plataforma de segurança interna, o número de vulnerabilidades corrigidas mais do que dobrou."
destaque: false
---

A Plataforma de Agentes Remotos transformou as tarefas de engenharia em chamadas de API: as equipes delegam o trabalho, a execução ocorre em uma sandbox remota e o resultado retorna como uma solicitação de merge. Na plataforma de segurança interna, o número de vulnerabilidades corrigidas mais do que dobrou.

O iFood mantém mais de 15 mil repositórios de código. Cada um deles precisa, periodicamente, que tarefas específicas sejam realizadas: validar o código para garantir que ele atenda aos padrões internos, corrigir dependências vulneráveis ou executar uma análise.

Nenhuma dessas tarefas é difícil por si só. O desafio surge quando essas tarefas se multiplicam.

“Resolver isso para um repositório é fácil. O desafio é resolver isso em escala”, afirma Victor Coelho, engenheiro de software sênior do iFood. “A Plataforma de Agentes Remotos foi projetada para possibilitar a resolução desse problema em grande escala em todos os 15 mil repositórios.”

Antes da plataforma, cada equipe abordava o problema à sua maneira — e todas elas se deparavam com o mesmo obstáculo.

“Antes, tínhamos soluções fragmentadas. Imagine várias equipes do iFood tentando resolver problemas diferentes, mas sem essa camada, esse tempo de execução agentic, à disposição delas. No final, essas soluções sempre esbarravam no mesmo problema.”

O que faltava não era inteligência nem um caso de uso. Era a infraestrutura de execução. Um tempo de execução dedicado.

A equipe descreve a Plataforma de Agentes Remotos como uma API que inicia uma tarefa de programação agentica remota. O ciclo tem três etapas: o usuário envia um prompt e os requisitos do ambiente por meio de uma chamada REST; a plataforma processa a tarefa em um runner remoto dedicado dentro de um sandbox isolado; e o resultado é obtido posteriormente.

---

**Fonte original:** [OpenAI](https://openai.com/business/customer-stories/ifood)

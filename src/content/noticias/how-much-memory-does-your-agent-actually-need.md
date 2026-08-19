---
title: "De quanta memória seu agente realmente precisa?"
date: 2026-08-18
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/ibm-research/altk-evolve-hmm"
resumo: "Em nosso post anterior, comparamos o ALTK-Evolve com o Ace e mostramos que a forma como você entrega as diretrizes autodestiladas de um agente — algumas recuperadas por tarefa versus todo o conjunto injetado — impulsiona a precisão e o custo. Este post volta à questão que vem antes dele: quanto você deve dar?"
destaque: false
---

Em nosso post anterior, comparamos o ALTK-Evolve com o Ace e mostramos que a forma como você entrega as diretrizes autodestiladas de um agente — algumas recuperadas por tarefa versus todo o conjunto injetado — impulsiona a precisão e o custo. Este post volta à questão que vem antes dele: quanto você deve dar?

Equipar um agente com memória agêntica parece simples: extraia lições de seu trabalho anterior, coloque-as de volta no contexto e mais experiência deve significar melhor desempenho. Nem sempre funciona assim. Quando escalamos a avaliação para oito modelos — de um modelo denso 30B para sistemas proprietários de fronteira — um achado se destacou:

A memória Agentic não é um recurso que você liga. É uma dose que você calibra para o modelo.

O ALTK-Evolve permite que um agente aprenda com suas próprias trajetórias passadas: destilar diretrizes reutilizáveis e injetá-las de volta no momento da inferência, sem atualizações de peso e sem anotação humana.

A dose certa difere por nível de modelo: modelos fortes com espaço livre querem o conjunto completo de diretrizes, modelos mais fracos se saem melhor com um núcleo compacto mais recuperação por tarefa e modelos saturados não mostram ganho mensurável.

A recuperação com curadoria pode ser a opção mais precisa e mais barata: gpt-oss-120b ganhou +16,1pp de conclusão de tarefas com apenas +5% de tokens — e o cache rápido mantém até mesmo o conjunto completo de diretrizes acessível em produção.

Nem todos os modelos se beneficiam da mesma quantidade de memória. Em oito modelos que abrangem o espectro de capacidades, vimos três padrões recorrentes:

Modelos fortes com espaço para a cabeça querem o conjunto completo de diretrizes — todas as diretrizes, incluindo lições raras de casos extremos. Eles têm a capacidade de absorver e aplicar tudo isso. O DeepSeek-V3.2 (671B MoE) subiu +9,5 pontos percentuais na conclusão da tarefa quando recebeu seu conjunto completo de diretrizes auto-minadas.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/ibm-research/altk-evolve-hmm)

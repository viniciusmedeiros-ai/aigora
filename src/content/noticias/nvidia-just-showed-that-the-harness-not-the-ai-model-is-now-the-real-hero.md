---
title: "A Nvidia acabou de mostrar que o arnês, não o modelo de IA, é agora o verdadeiro herói"
date: 2026-08-21
categoria: "agents"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/08/21/nvidia-just-showed-that-the-harness-not-the-ai-model-is-now-the-real-hero/"
resumo: "A pesquisa da Nvidia mostra que os agentes de IA podem ter um bom desempenho e não ir além, por meio de ajustes finos, mesmo que o modelo de IA não seja tão bom na tarefa."
destaque: false
---

A Nvidia publicou algumas novas pesquisas interessantes na sexta-feira, sugerindo que é o arnês, mais do que o modelo subjacente, que é muito mais importante ao pedir que uma IA faça tarefas de longo horizonte. Um arnês é o invólucro de software em torno de um modelo de IA — as ferramentas, o gerenciamento de memória e as regras que transformam um modelo bruto em algo que pode agir por conta própria.

O TL;DR: Simplesmente usando um arnês personalizado ajustado para lidar bem com a memória e incluindo um componente semelhante a um chefe "supervisor", os pesquisadores conseguiram que Claude Opus 5 alcançasse uma pontuação de 100% no benchmark de raciocínio interativo ARC-AGI-3 — um conjunto de jogos 2D sem instruções, onde o modelo tem que descobrir como jogar e vencer, semelhante a como um humano faria. (Essa é uma referência que tem particularmente irritou o laboratório rival de fronteira OpenAI.) Sem o arnês, o Opus 5 obteve 30%, que foi o melhor resultado entre todos os modelos testados.

A pesquisa da Nvidia é outro indicador de que, embora a escolha do modelo importe, o próprio modelo — a parte que atua como o “cérebro” do agente — é uma parte menor de um sistema agêntico do que muitos usuários de IA percebem, especialmente para tarefas de longo horizonte. O arnês é o que torna um modelo um agente: ele lida com memória, contexto e feedback.

"De um modo geral, o mundo interpreta um agente quase como uma API do modelo", diz Adel El Hallak, vice-presidente de produtos da unidade de IA da Nvidia (foto acima), ao TechCrunch. Mas um agente é realmente mais do que isso. “É o modelo. É o andaime ao redor do modelo, que chamamos de arnês, ou seja, o conjunto de ferramentas que ele utiliza. É o tempo de execução e as habilidades associadas e bibliotecas às quais damos acesso.”

Tarefas de horizonte longo são aquelas que exigem o encadeamento de muitas decisões, às vezes ao longo de dias, para produzir um trabalho concluído. Isso contrasta com uma IA apenas cuspindo uma resposta a um prompt. Descobrir como fazer com que uma IA faça tarefas de horizonte longo sem se distrair e sair em terra la-la é um dos santos graais da pesquisa agêntica.

Por exemplo: a Microsoft publicou uma pesquisa em abril que testou 19 LLMs em tarefas de horizonte longo envolvendo edição de documentos e descobriu que todos os modelos, incluindo os de fronteira, preenchiam os documentos com erros. (Se os humanos produzissem um trabalho assim, eles seriam prontamente demitidos.)

Modelos que encadeiam decisões por conta própria também foram pegos excluindo os arquivos de seus usuários ou mesmo bancos de dados inteiros ou recorrendo a comportamentos criminosos, de conluio a hacking , para atingir seus objetivos.

A escolha dos pesquisadores da Nvidia de usar esse benchmark de raciocínio interativo para seus testes é particularmente significativa, quase engraçada. Uma pontuação de 100% significa que o modelo pode vencer os jogos tanto quanto os humanos.

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/08/21/nvidia-just-showed-that-the-harness-not-the-ai-model-is-now-the-real-hero/)

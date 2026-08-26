---
title: "O chip Jalapeño da OpenAI é construído para inferência rápida em escala, mostram benchmarks"
date: 2026-08-25
categoria: "atualizacoes"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/08/25/openais-jalapeno-chip-is-built-for-fast-inference-at-scale-benchmarks-show/"
resumo: "Testado no benchmark InferenceX da SemiAnalysis, o Jalapeño registrou mais tokens por usuário e mais rendimento por quilowatt do que o estado da arte atualmente disponível."
destaque: false
---

Na conferência Hot Chips na terça-feira, a OpenAI compartilhou um olhar mais detalhado sobre Jalapeño , incluindo o primeiro lote de resultados de benchmark para o novo sistema. Testado no benchmark InferenceX da SemiAnalysis, o Jalapeño registrou mais tokens por usuário e mais rendimento por quilowatt do que os processadores de inferência de última geração atualmente disponíveis.

"A conclusão é que os resultados mostram um avanço de desempenho muito, muito significativo em relação ao estado da arte", disse Richard Ho, chefe de hardware da OpenAI, em uma coletiva de imprensa. “Jalapeño pode servir mais trabalho de IA por unidade de poder, ao mesmo tempo em que retorna respostas mais rapidamente. É muito eficiente atender muitos clientes, mas também pode ser de latência muito baixa.”

Notavelmente, essa comparação é contra um sistema Nvidia Blackwell — mas quando Jalapeño atinge a implantação total, a concorrência pode ter avançado significativamente. Ho estimou que Jalapeño seria implantado no final de 2026 "em volumes muito pequenos", com uma implantação mais significativa em 2027.

Anunciado pela primeira vez em outubro passado, o Jalapeño foi desenvolvido pela OpenAI em estreita colaboração com a Broadcom, com os próprios modelos da OpenAI auxiliando no processo de desenvolvimento. A empresa planeja tornar a Jalapeño uma plataforma multigeracional, permitindo que produtos, modelos, chips e memória de IA sejam desenvolvidos em conjunto.

Devido a essa abordagem de pilha completa, o OpenAI foi capaz de abordar fases específicas no processo de inferência que muitas vezes causam atrito durante o processamento de inferência. Em particular, o Jalapeño é projetado para minimizar atrasos durante as fases de pré-preenchimento e comunicação do processamento, que a OpenAI diz que muitas vezes atuam como gargalos.

"Projetamos o Jalapeño para minimizar a movimentação de dados e os atrasos na comunicação", disse a empresa em um post no blog apresentando os resultados. “Isso significa que o estado do modelo, incluindo o cache KV usado durante a geração de uma resposta, pode ser explicitamente colocado e mantido local enquanto o sistema ativa a combinação certa de computação, memória e rede para cada fase de inferência.”

Quando você compra através de links em nossos artigos, podemos ganhar uma pequena comissão . Isso não afeta nossa independência editorial.

Russell Brandom cobre o setor de tecnologia desde 2012, com foco em políticas de plataforma e tecnologias emergentes. Anteriormente, trabalhou na The Verge e Rest of World, e escreveu para a Wired, The Awl e MIT's Technology Review. Ele pode ser contatado em russell.brandom@techcrunch.com ou no Signal em 412-401-5489.

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/08/25/openais-jalapeno-chip-is-built-for-fast-inference-at-scale-benchmarks-show/)

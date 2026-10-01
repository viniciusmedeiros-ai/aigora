---
title: "Obtendo a fonte certa, não apenas o fato: verificação com reconhecimento de fonte para agentes MCP"
date: 2026-09-29
categoria: "mcps"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source"
resumo: "Agentes LLM que usam ferramentas não leem mais de uma única passagem recuperada. Por meio do Model Context Protocol (MCP) , um agente pode chamar uma ferramenta de pesquisa, inspecionar um registro estruturado de paciente ou conta, consultar um banco de dados e extrair metadados e, em seguida, tecer tudo isso em uma resposta. Isso faz com que a pergunta usual"
destaque: false
---

Agentes LLM que usam ferramentas não leem mais de uma única passagem recuperada. Por meio do Model Context Protocol (MCP) , um agente pode chamar uma ferramenta de pesquisa, inspecionar um registro estruturado de paciente ou conta, consultar um banco de dados e extrair metadados e, em seguida, tecer tudo isso em uma resposta. Isso torna a questão usual da factualidade mais sutil do que parece. A maioria dos sistemas criados para verificar as respostas do LLM, da RAGAS fidelidade a verificadores refinados como MiniCheck, AlignScore e SummaC, pergunte se uma alegação é apoiada pelas evidências disponíveis, uma vez que essas evidências tenham sido reunidas. Em sua forma usual, eles não nos dizem qual saída da ferramenta MCP suporta cada declaração, ou se essa é a fonte dos nomes das respostas.

Nosso último artigo, ProvenanceGuard: Source-Aware Factuality Verification for MCP-Based LLM Agents (leia no Hugging Face , ou no arXiv enquanto isso), visa essa lacuna. O modo de falha com o qual nos preocupamos é aquele que chamamos de fusão de fontes cruzadas: uma afirmação que é verdadeira em algum lugar da evidência, mas atribuída à fonte errada. Um verificador cego à fonte pode passá-lo, porque o fato existe no pool. Um verificador com reconhecimento de origem não deve.

Considere um agente de suporte ao cliente que responda: "De acordo com o registro da conta, este plano inclui uma janela de reembolso de 30 dias." A janela de reembolso pode ser perfeitamente real, mas indicada em um documento de política, não no registro da conta para o qual a resposta aponta. Junte os dois e a reivindicação parece confirmada. Mantenha-os separados e a atribuição está errada, e em um ambiente sensível a dados, um erro atribuição pode ser tão prejudicial quanto um fato errado. O mesmo padrão aparece em um agente clínico, onde um detalhe de medicação específico do paciente retirado de uma ferramenta de histórico do paciente se torna enganoso no momento em que a resposta o apresenta como um achado da literatura médica.

Uma declaração pode ser suportada por uma fonte MCP enquanto a resposta a atribui a outra. A pontuação cega à fonte vê suporte na evidência agrupada e a passa; O ProvenanceGuard verifica separadamente se a fonte de suporte corresponde àquela que a resposta afirma ou implica. Fonte: artigo Figura 1.

É por isso que as pontuações de fidelidade, por mais úteis que sejam, não são suficientes para os agentes MCP. Uma resposta carrega proveniência, às vezes explicitamente ("de acordo com o registro da conta") e às vezes implicitamente. O ProvenanceGuard mantém essa conexão entre a reivindicação e a fonte disponível para inspeção.

O ProvenanceGuard é uma camada de verificação pós-geração que fica em cima de um agente MCP de caixa preta. Ele é executado depois que um agente produz uma resposta e nunca recolhe as evidências em um contexto anônimo. Em vez disso, ele carrega a identidade da fonte por todo o pipeline. Ele lê o rastreamento MCP capturado, incluindo as saídas da ferramenta e seus IDs de origem, sem retreinar o agente. Então ele faz cinco coisas em sequência: ele divide a resposta em reivindicações específicas, encontra a fonte mais relevante para cada uma, verifica se essa fonte realmente a suporta, compara a fonte com a que a resposta nomeia ou implica e, finalmente, emite um veredicto de fonte por reivindicação e uma decisão global de permissão ou bloqueio no nível da resposta.

O fluxo de verificação. A identidade de origem é preservada por meio de decomposição, roteamento, pontuação de suporte, verificação de atribuição e reparo, em vez de ser agrupada. As respostas bloqueadas podem passar por reparos no estilo RARR e ser verificadas novamente. Fonte: artigo Figura 2.

Vale a pena destacar algumas das opções de design. Para os experimentos em nosso artigo, usamos modelos locais para que os traços capturados pudessem ser processados em uma configuração offline controlada: o MiniLM ajuda a encontrar a fonte relevante, um modelo verificador NLI DeBERTa verifica se essa fonte suporta a reivindicação e um modelo de idioma local ajuda a dividir as respostas em reivindicações. O verificador também verifica os valores literais de perto: um número, data ou identificador ausente da fonte não pode passar apenas porque a frase parece plausível. Uma etapa de decisão calibrada combina esses sinais. Se uma resposta for bloqueada, uma etapa de reparo no estilo rar pode tentar uma revisão baseada na fonte ou um fallback seguro, que o verificador verifica novamente.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source)

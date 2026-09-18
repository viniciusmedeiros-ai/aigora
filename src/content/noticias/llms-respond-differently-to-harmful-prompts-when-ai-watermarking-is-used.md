---
title: "Os LLMs respondem de maneira diferente a avisos prejudiciais quando a marca d 'água da IA é usada"
date: 2026-09-17
categoria: "agents"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/09/ai-text-watermarking-can-make-models-more-vulnerable-to-adversarial-prompts/"
resumo: "O SynthID pode fazer com que os modelos sigam instruções prejudiciais que, de outra forma, recusariam."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2026/09/ai-generated-watermark-1152x556.jpg"
---

Uma característica fundamental do SynthID é algo conhecido como amostragem de torneio. Semelhante a um jogo esportivo, o SynthID avalia um grande número de candidatos a token da próxima palavra. Ele usa uma chave secreta para atribuir pontuações de probabilidade. Um par de fichas compete em uma rodada. Aquele com a maior pontuação oculta ganha e avança para a próxima rodada. O processo continua até que um token vencedor final seja determinado. Mais sobre amostragem de torneios podem ser encontradas aqui e aqui .

Siposova testou a configuração "não distorcionária" do SynthID-Text através do SynthIDTextWatermarkLogitsProcessor não modificado do Hugging Face . Ela inseriu estímulos prejudiciais em seis modelos de peso aberto e comparou as respostas quando a marca d 'água foi usada e quando não foi. O experimento revelou que a marca d' água alterou as respostas a solicitações prejudiciais, particularmente quando elas foram feitas usando técnicas de injeção rápida.

"A marca d 'água altera o comportamento de recusa em pedidos nocivos, mas o efeito é mais pronunciado quando os mesmos pedidos são combinados com a técnica de injeção rápida", escreveu Siposova. "Em vários modelos, a marca d' água torna o modelo mais propenso a responder a solicitações prejudiciais que, de outra forma, recusaria."

As mudanças têm importantes consequências de segurança porque influenciam não apenas as respostas de LLM, mas também as ações subsequentes dos agentes de IA que dependem do modelo.

“No nível do modelo, isso pode mudar o comportamento de segurança, incluindo se o modelo recusa uma solicitação prejudicial e se essa recusa se mantém sob injeção imediata”, escreveu o pesquisador. “No nível do agente, os mesmos tokens de amostra podem determinar qual ferramenta é chamada e quais argumentos são passados para ela. A injeção rápida conecta essas duas configurações porque uma recusa enfraquecida se torna mais consequencial quando o modelo também pode atuar através de ferramentas. Tal procedimento de marca d 'água pode, portanto, afetar tanto o que o modelo diz quanto o que um agente faz. Chamamos isso de deriva de amostragem de efeito comportamental.”

Também interessante: as respostas do modelo se comportaram de maneira diferente dependendo de qual chave secreta foi usada.

A marca d 'água mudou quais chamadas de ferramentas individuais estavam corretas, às vezes muito mais do que a pontuação geral de precisão sugere.

A marca d 'água mudou quais chamadas de ferramentas individuais estavam corretas, às vezes muito mais do que a pontuação geral de precisão sugere. Crédito: Lasso Security

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/09/ai-text-watermarking-can-make-models-more-vulnerable-to-adversarial-prompts/)

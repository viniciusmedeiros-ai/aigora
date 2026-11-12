---
title: "Vídeo do roadshow do IPO da Anthropic"
date: 2026-11-11
categoria: "claude"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Nov/11/anthropic-ipo-roadshow/"
resumo: "Vídeo do roadshow do IPO da Anthropic. A Anthropic iniciou ontem seu roadshow de IPO, e o vídeo do roadshow contém algumas informações inéditas sobre como funciona o negócio da empresa."
destaque: false
---

Vídeo do roadshow do IPO da Anthropic. A Anthropic iniciou ontem seu roadshow de IPO, e o vídeo do roadshow contém algumas informações inéditas sobre como funciona o negócio da empresa.

A seção "Abordagem para computação", com o cofundador Tom Brown, é particularmente interessante, pois descreve como a Anthropic treina e disponibiliza o Claude por meio do AWS Trainium, das TPUs do Google, das GPUs da NVIDIA e das GPUs da AMD.

Não sei ao certo por que não há uma transcrição oficial do vídeo, mas aqui está uma que extraí usando o MacWhisper. Veja os destaques abaixo:

Agora, treinamos e disponibilizamos o Claude em todas as quatro principais famílias de chips. Isso só é possível porque, desde o início, apostamos de forma não convencional em uma estratégia de múltiplos chips. Na época, muitas pessoas achavam que executar modelos de IA em chips diferentes não valia o esforço. Cada chip precisa de sua própria pilha de software e pilha de inferência personalizadas, o que é caro e difícil de desenvolver. Agora, já estamos fazendo isso há anos, e nos tornamos incrivelmente bons nisso. [...]

Por exemplo, este ano, começamos a trabalhar com GPUs da AMD pela primeira vez. No passado, implementar uma nova plataforma de chips exigia meses de trabalho de dezenas de engenheiros. Desta vez, pedimos ao Mythos para testar. Ele fez o Claude funcionar na AMD em apenas três dias, praticamente sem intervenção humana. O Claude portou ou escreveu quase 100% dos kernels. [...]

O segundo fator por trás da nossa vantagem em computação é a nossa taxa de descoberta de multiplicadores de computação. Nós nos concentramos na computação efetiva total, que é o produto da multiplicação da capacidade física pelos multiplicadores de computação que descobrimos. Cada um que descobrimos aumenta nosso pool de computação efetiva total. Por exemplo, digamos que você precise de 100 unidades de computação para treinar um modelo de uma determinada inteligência. Um multiplicador de 4x O multiplicador de computação significa que você pode usar 25 unidades de computação para treinar exatamente o mesmo modelo. Ou você pode usar essas cem unidades físicas para treinar um modelo ainda mais inteligente que antes exigiria 400 unidades.

Os multiplicadores de computação criam uma vantagem competitiva para nós que é difícil de replicar. Eles se baseiam uns nos outros. Cada novo multiplicador que descobrimos tem um efeito positivo nos multiplicadores anteriores. Eles se acumulam. Acreditamos que isso pode acelerar ainda mais à medida que nos aproximamos do aprimoramento próprio recursivo. O Claude será capaz de descobrir multiplicadores de computação totalmente por conta própria, permitindo que o número de calcular multiplicadores para crescer cada vez mais rápido.

Tivemos uma pista sobre a estratégia de múltiplos chips da Anthropic em setembro passado, na análise retrospectiva de três problemas recentes, em que eles descreveram bugs que afetaram apenas suas implementações de TPU.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Nov/11/anthropic-ipo-roadshow/)

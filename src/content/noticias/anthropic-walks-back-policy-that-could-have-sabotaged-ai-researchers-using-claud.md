---
title: "Política de retrocesso antrópico que poderia ter ‘sabotado’ pesquisadores de IA usando Claude"
date: 2026-06-11
categoria: "claude"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jun/11/anthropic-walks-back-policy/#atom-everything"
resumo: "Política de retrocesso antrópico que poderia ter ‘sabotado’ pesquisadores de IA usando Claude . Grande furo para Maxwell Zeff na Wired:"
destaque: false
---

Política de retrocesso antrópico que poderia ter ‘sabotado’ pesquisadores de IA usando Claude . Grande furo para Maxwell Zeff na Wired:

“Estamos mudando as salvaguardas de Fable 5 para o desenvolvimento de LLM de fronteira para torná-las visíveis." Antrópico disse em um comunicado à WIRED. "Fizemos a troca errada e pedimos desculpas por não acertar o equilíbrio."

Houve um grande clamor sobre a política da Anthropic, escondida em seu cartão de sistema, de que Claude Fable/Mythos identificaria "solicitações direcionadas ao desenvolvimento de LLM de fronteira" e "eficácia limite" sem notificar o usuário.

É uma boa notícia que eles estejam deixando de lado o aspecto invisível disso. Seria muito melhor se eles abandonassem completamente essa categoria de recusas.

Estamos implementando alterações para tornar visíveis as salvaguardas de Fable 5 para o desenvolvimento de LLM de fronteira.

A partir desta semana, as solicitações sinalizadas voltarão visivelmente ao Opus 4.8 - o mesmo que nossas proteções para ciber e bio. Você verá isso toda vez que acontecer. Na API, quaisquer solicitações sinalizadas retornarão um motivo para sua recusa (chegando ao fallback do lado do servidor nos próximos dias).

Queríamos implantar o Fable 5 para nossos usuários de forma rápida e segura. Salvaguardas visíveis podem ser investigadas, então elas precisam ser robustas, o que leva tempo para acertar. Salvaguardas invisíveis podem ser direcionadas de forma mais restrita, permitindo-nos enviar rapidamente com muito poucos falsos positivos. Por esse motivo, optamos por salvaguardas invisíveis - e essa foi a troca errada. Você deve ter visibilidade das salvaguardas que ter no lugar, e por quê. Lamentamos não ter conseguido o equilíbrio certo.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jun/11/anthropic-walks-back-policy/#atom-everything)

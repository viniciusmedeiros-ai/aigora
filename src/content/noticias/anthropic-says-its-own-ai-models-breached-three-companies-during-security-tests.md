---
title: "A Anthropic diz que seus próprios modelos de IA violaram três empresas durante testes de segurança"
date: 2026-07-31
categoria: "claude"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/07/30/anthropic-says-its-own-ai-models-breached-three-companies-during-security-tests/"
resumo: "Depois que os modelos da OpenAI invadiram o Hugging Face, a Anthropic verificou seu próprio histórico e encontrou três incidentes semelhantes."
destaque: false
---

A Anthropic disse na quinta-feira que uma investigação interna descobriu três incidentes em que seu modelo de IA Claude violou os sistemas de três organizações durante a realização de testes de segurança cibernética. A investigação e a divulgação ocorrem mais de uma semana depois que a OpenAI divulgou que um de seus modelos inéditos violou os sistemas da Hugging Face durante testes internos.

Em todos os três casos, um modelo Claude chegou à internet de dentro de um ambiente de teste enquanto interagia com terceiros e, em seguida, obteve acesso não autorizado aos sistemas ativos dessas organizações, disse a Anthropic em uma postagem no blog, descrevendo o que encontrou e o que a empresa planeja mudar para evitar que isso aconteça novamente.

A Anthropic disse que o episódio da OpenAI no início deste mês levou a empresa a realizar sua própria avaliação de segurança cibernética. Ele procurou especificamente evidências de que Claude havia acessado a Internet de dentro de ambientes de teste, que são projetados para atuar como sandboxes e manter os modelos isolados.

Entre as 141.006 avaliações analisadas, o laboratório de IA encontrou três incidentes em que seu modelo acessou a internet enquanto interagia com a Irregular, um de seus parceiros terceirizados. Anthropic disse que o acesso remonta a uma configuração incorreta no ambiente de avaliação executado com Irregular. Ele chamou isso de um "mal-entendido" entre as duas empresas sobre se a configuração de teste tinha internet acesso, quando na verdade era.

A Anthropic disse que não está colocando a culpa e está "abordando as correções como se a responsabilidade fosse apenas nossa", enquanto observa que a Irregular está conduzindo sua própria investigação separada.

Por causa dessa conexão aberta, o modelo obteve acesso não autorizado à infraestrutura de produção de três organizações diferentes. Anthropic disse que os incidentes envolveram três modelos diferentes de Claude: Opus 4.7, Mythos 5 e um modelo de teste de pesquisa interna.

Notavelmente, a Anthropic disse que em cada um desses casos “Claude foi explicitamente informado por nosso aviso de que não tinha acesso à Internet.” Parece que o modelo de IA assumiu que os sistemas do mundo real faziam parte do exercício que foi solicitado a realizar.

Essa suposição não se sustentou uniformemente, como se vê. Os três modelos não se comportaram da mesma maneira quando surgiram evidências de que seus alvos eram reais, o que Anthropic sinalizou como uma das descobertas mais reveladoras na quinta-feira.

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/07/30/anthropic-says-its-own-ai-models-breached-three-companies-during-security-tests/)

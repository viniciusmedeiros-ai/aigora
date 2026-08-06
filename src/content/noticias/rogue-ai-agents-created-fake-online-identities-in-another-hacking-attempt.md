---
title: "Agentes de IA desonestos criaram identidades online falsas em outra tentativa de hacking"
date: 2026-08-05
categoria: "agents"
fonte: "The Verge AI"
fonteUrl: "https://www.theverge.com/ai-artificial-intelligence/975577/aisi-openai-anthropic-agent-hacking"
resumo: "Ainda mais agentes de IA desonestos da OpenAI e da Anthropic foram pegos tentando hackear alvos reais online sem permissão. As descobertas se somam a uma lista crescente de incidentes anteriormente desconhecidos que alarmaram especialistas em segurança de IA e intensificaram a pressão por uma maior supervisão dos sistemas de fronteira."
destaque: false
imagem: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/08/STK485_STK414_AI_SAFETY_A-1.jpg?quality=90&#038;strip=all&#038;crop=0,0,100,100"
---

Ainda mais agentes de IA desonestos da OpenAI e da Anthropic foram pegos tentando hackear alvos reais online sem permissão. As descobertas se somam a uma lista crescente de incidentes anteriormente desconhecidos que alarmaram especialistas em segurança de IA e intensificaram a pressão por uma maior supervisão dos sistemas de fronteira.

De acordo com um relatório do AI Security Institute do Reino Unido, que avalia os modelos de fronteira dos principais laboratórios de IA antes de serem lançados, os agentes alimentados pelo GPT-5.6-Sol da OpenAI e pelo Mythos 5 da Anthropic “se envolveram em atividades sustentadas e potencialmente prejudiciais direcionadas a pessoas e organizações reais." Isso incluiu tentar inserir código malicioso em um projeto de código aberto pressionando pessoas reais encarregado disso, disse AISI. "Na tentativa de obter a aprovação do código, o agente se envolveu em engenharia social — criando identidades online falsas e usando-as para pressionar o mantenedor do projeto a aprovar o código."

A AISI disse que as tentativas, que detectou em 28 de julho, "não tiveram sucesso" e não resultaram em danos no mundo real. No entanto, a organização observou que o incidente marcou "a primeira vez que vimos riscos em torno da autonomia e do engano manifestarem isso claramente, sem solicitação específica, no mundo real".

Ao contrário do agente desonesto da OpenAI que atacou a Hugging Face, a AISI disse que isso "não era um caso de um modelo escapando de seu ambiente de teste seguro", ou sandbox. As salvaguardas geralmente impostas aos modelos foram desativadas como parte dos testes, disse a AISI, e também foi permitido o acesso à internet. “Para medir o que esses modelos podem realmente fazer, nós os testamos em condições que refletem o que um um atacante humano capaz poderia fazer ", disse AISI.

O incidente resultou de uma única avaliação AISI em que os agentes foram encarregados de resolver um desafio de segurança cibernética, como encontrar um dado protegido. O desafio foi executado 122 vezes em vários modelos e todas as execuções foram conduzidas no ambiente de pesquisa da AISI, que usa “sandboxing de máquina virtual para isolar os agentes de outra infraestrutura da AISI.” A investigação da AISI descobriu que em 10 delas, “um agente de IA tomou medidas autônomas e não sancionadas na internet ao vivo, visando pessoas e organizações reais.” De 19 dessas ações, quase todas — 17 — vieram do Mythos 5 de Anthropic.

Em sua autópsia do incidente, a AISI identificou vários fatores-chave que, segundo ela, contribuíram para os comportamentos não sancionados do agente. Ele disse que o agente era persistente, perseguindo caminhos como tentar enganar pessoas reais através de “enganos que, até recentemente, eram em grande parte teóricos." A tarefa também foi difícil, o que a organização disse que poderia levar os agentes a serem mais "criativos" em suas resolução de problemas. As questões de composição eram deficiências na forma como o uso da Internet era monitorado, com a AISI sugerindo que uma vigilância mais dedicada poderia ter identificado o problema mais cedo. Por fim, a organização disse que o agente não havia sido especificamente instruído a não aproveitar seu acesso à Internet ou implantar técnicas enganosas de engenharia social em busca de seu objetivo. “Anteriormente, não era claro que tais instruções eram necessárias ao usar modelos com treinamento de alinhamento ”, disse AISI.

A AISI disse que o incidente deve ser "interpretado com cautela e nuance", mas alertou que as ações do agente "mostram sinais de comportamentos novos e potencialmente enganosos" que "foram de uma extensão e gravidade que não previmos".

Em uma postagem no blog, a OpenAI reconheceu a violação que aconteceu durante os testes da AISI e disse que está “comprometida em trabalhar em toda a indústria para fortalecer as práticas compartilhadas para realizar avaliações de alto risco com segurança." A OpenAI também divulgou outra violação, desta vez de um parceiro externo de testes de segurança cibernética Irregular, onde disse que os modelos receberam acesso à Internet por engano durante exercícios de segurança cibernética. A OpenAI disse que a Irregular notificou a violação em 29 de julho.

---

**Fonte original:** [The Verge AI](https://www.theverge.com/ai-artificial-intelligence/975577/aisi-openai-anthropic-agent-hacking)

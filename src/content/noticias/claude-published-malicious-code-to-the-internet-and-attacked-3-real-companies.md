---
title: "Claude publicou código malicioso na Internet e atacou 3 empresas reais"
date: 2026-07-31
categoria: "claude"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/07/likely-illegally-claude-gained-access-to-3-networks-will-anthropic-be-held-to-account/"
resumo: "Se os hackers usassem métodos convencionais, alguém provavelmente iria para a prisão."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2026/07/robot-in-handcuffs-1152x648.jpg"
---

A Anthropic disse que seus modelos de segurança baseados em Claude obtiveram acesso não autorizado aos ambientes de produção confidenciais de três organizações externas durante testes internos projetados para medir as capacidades cibernéticas ofensivas dos modelos.

Os eventos, que a Anthropic revelou na quinta-feira , são a segunda revelação em 10 dias de que modelos de IA dos provedores mais ricos do mundo invadiram redes protegidas, uma ofensa que, em cenários de hacking mais tradicionais, poderia colocar o humano atrás do teclado na prisão por anos. No início deste mês, a OpenAI disse que seus modelos de segurança exploraram uma vulnerabilidade de dia zero para uso em invadindo a rede da Hugging Face, uma plataforma para modelos de aprendizado de máquina de código aberto e conjuntos de dados de IA. Os modelos OpenAI passaram a roubar credenciais de acesso e outras informações confidenciais do Hugging Face. Os modelos OpenAI também exploraram credenciais expostas publicamente para comprometer contas de outros quatro serviços de terceiros.

A Anthropic disse que o evento OpenAI estimulou seus engenheiros a revisar avaliações semelhantes de segurança cibernética por modelos Claude. A auditoria encontrou três incidentes “em que um modelo acessou a internet de dentro ou enquanto interagia com o ambiente de avaliação da Irregular, um de nossos parceiros de avaliação terceirizados, e depois obteve acesso não autorizado à infraestrutura de produção de três diferentes internacionais da Kriya Yoga.

Anthropic disse que os avisos que os engenheiros entregaram durante os desafios de "capturar a bandeira" - um meio comum de avaliar as capacidades ofensivas e defensivas de várias técnicas de hacking - deixaram claro que o ambiente de teste era apenas uma simulação e que os modelos não tinham acesso à Internet aberta. De fato, o parceiro de testes Irregular equivocadamente disponibilizou tal acesso. Em resposta, o modelos trataram os caminhos da Internet como parte dos exercícios.

As intrusões aconteceram por meio de três modelos de Claude: Opus 4.7, Mythos 5 e um protótipo de pesquisa interna. O Opus 4.7, o mais velho dos três, foi o que mais ultrapassou seus limites. Antrópico explicou:

Operando sob a falsa crença de que todas as entidades acessíveis deveriam estar no escopo do exercício, Claude comprometeu a infraestrutura das organizações impactadas usando técnicas básicas, como explorar senhas fracas e endpoints não autenticados. Não encontrou nem explorou nenhuma vulnerabilidade complexa e, em cada caso, Claude continuou trabalhando para concluir apenas as tarefa capture-the-flag que sua avaliação atribuiu. No entanto, em alguns casos, nosso modelo mais antigo continuou seu ataque mesmo depois de obter evidências de que estava sendo executado na internet aberta; nosso modelo mais recente parou quando reconheceu que estava na internet. Em nenhuma dessas situações, Claude se exilou ou tentou deliberadamente escapar de seu ambiente de teste.

Enquanto o modelo Opus continuou seu ataque mesmo depois de prever corretamente que havia violado o sistema de produção da organização terceirizada, disse Anthropic, o Mythos 5 fez uma inferência semelhante, mas "fundamentou seu caminho de volta à conclusão de que ainda estava em uma simulação. - Isso significava que o Mythos também não abortou o exercício depois que ele claramente passou dos limites. Depois de também exceder o limites do comportamento de nível, o modelo de teste interno acabou encontrando evidências de que ele também havia interferido e interrompido o exercício.

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/07/likely-illegally-claude-gained-access-to-3-networks-will-anthropic-be-held-to-account/)

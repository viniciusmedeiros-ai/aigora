---
title: "O agente disse que estava feito. O banco de dados discordou."
date: 2026-10-03
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/microsoft/thinkingbox"
resumo: "A Microsoft ThinkingBox classifica os agentes de IA nos registros que eles deixam para trás, não nas frases que geram, e depois pergunta se eles podem fazer isso vinte vezes seguidas. Agora está disponível através do Hugging Face."
destaque: false
---

A Microsoft ThinkingBox classifica os agentes de IA nos registros que eles deixam para trás, não nas frases que geram, e depois pergunta se eles podem fazer isso vinte vezes seguidas. Agora está disponível através do Hugging Face.

Figura 1: O ThinkingBox executa um agente em sessões isoladas da ferramenta MCP e, em seguida, classifica o estado do back-end terminal e os efeitos colaterais que ele deixa para trás. Do nosso artigo ThinkingBox .

Um cliente escreve. Seu utensílio de cozinha de $ 745 ficou preso em uma "exceção" de correio em um centro de distribuição de Nashville, quinze dias após a data estimada de entrega.

O agente de IA faz um trabalho cuidadoso. Nove chamadas de ferramenta: ele puxa o pedido, verifica o rastreamento, pesquisa seu perfil de cliente, pesquisa a política de reembolso duas vezes, confirma que nenhum ticket existe, abre um, documenta a linha do tempo e lê a política corretamente; seu segmento de conta genuinamente não se qualifica para compensação por atraso na entrega.

Em seguida, fecha o ticket como resolvido e responde " Como sua dúvida foi resolvida, há algo em que eu possa ajudá-lo? "

Duas coisas estão erradas. A exceção da operadora ainda está aberta, portanto, o estado final necessário estava em espera , pendente de resolução. E a cliente nunca obteve uma resposta real para o que ela realmente perguntou.

Uma ferramenta de verificação de grader de IA chama veria nove bem formadas. O avaliador verificando se o agente escreveu no banco de dados também veria isso. O banco de dados é o que discorda .

Essa lacuna é o que a ThinkingBox mede. Em 507 fluxos de trabalho de negócios com estado, cada um executado 20 vezes em vários modelos LLM, ele classifica os agentes no estado do back-end do terminal e nos efeitos colaterais. Este post aborda o que descobrimos, quais custos de consistência e como executar o benchmark por conta própria através do OpenEnv .

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/microsoft/thinkingbox)

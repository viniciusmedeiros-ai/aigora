---
title: "Um agente de voz em língua indiana com CUGA"
date: 2026-11-25
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/ibm-research/an-indic-voice-agent-with-cuga"
resumo: "A maioria dos conhecimentos úteis é escrita e digitalizada em inglês. A maioria das pessoas que precisa desse conhecimento fala e pensa em suas próprias línguas regionais, como hindi, tâmil, telugu, guzerate, marata e muitas outras. Muitas pessoas preferem falar do que digitar."
destaque: false
---

A maioria dos conhecimentos úteis é escrita e digitalizada em inglês. A maioria das pessoas que precisa desse conhecimento fala e pensa em suas próprias línguas regionais, como hindi, tâmil, telugu, guzerate, marata e muitas outras. Muitas pessoas preferem falar do que digitar.

Criamos um pequeno agente de voz para preencher essa lacuna, usando o CUGA como estrutura do agente. Este post explica o caso de uso e o que aprendemos. Você pode testá-lo por conta própria nos Aplicativos CUGA.

Um agricultor faz uma pergunta em voz alta, no seu próprio idioma: como posso distinguir as sementes boas das ruins? O agente:

Se alguém perguntar sobre críquete ou programação, ele redireciona educadamente a conversa para a agricultura, em vez de inventar algo.

O CUGA (ConfigUrable Generalist Agent) é o harness de agente de código aberto da IBM Research. Ele lida com a conexão do modelo, o gerenciamento de ferramentas, o estado e os limites de segurança, para que você crie ferramentas e um prompt em vez do loop do agente. Aqui, nós o usamos como um SDK integrado dentro de um pequeno aplicativo web, para três finalidades:

A principal ideia do design é simples: o CUGA é um cérebro que recebe texto e gera texto. A voz são duas camadas finas ao redor dele.

áudio ──▶ fala para texto ──▶ knowledge.search ──▶ CUGA (resposta fundamentada) ──▶ texto para fala ──▶ áudio Como o agente só vê texto, você pode criá-lo e testá-lo primeiro com texto simples e, em seguida, adicionar os ouvidos e a boca. Você também pode trocar os provedores de fala sem alterar o agente. Oferecemos suporte a dois: as APIs de fala em nuvem da Sarvam AI, chamadas diretamente do navegador do usuário, e os modelos de código aberto. (SraVaani para conversão de fala em texto, Svara para conversão de texto em fala) em execução no seu próprio servidor.

Adicionar fala é a parte fácil. A parte difícil é a recuperação interlingual: uma pergunta em hindi precisa encontrar um parágrafo em inglês.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/ibm-research/an-indic-voice-agent-with-cuga)

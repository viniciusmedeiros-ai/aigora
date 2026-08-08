---
title: "Agora temos uma linha do tempo do ataque acidental da OpenAI contra a Hugging Face"
date: 2026-08-08
categoria: "atualizacoes"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Aug/8/now-we-have-a-timeline-of-the-openai-accidental-attack-against-h/#atom-everything"
resumo: "Acho que um dos detalhes mais interessantes aqui pode estar escondido no primeiro ponto do boletim:"
destaque: false
---

Acho que um dos detalhes mais interessantes aqui pode estar escondido no primeiro ponto do boletim:

7 de maio: o OpenAI inicia um novo treinamento para um modelo experimental inédito. (Eles significam uma execução de avaliação? Eles dizem que o treinamento é executado no vídeo e depois mencionam um "sinal de recompensa para julgar o quão bem eles estão indo", então acho que isso realmente foi sobre treinar um modelo, não avaliar um que já foi treinado.)

Quanto mais penso nisso, mais suspeito que o fato de isso ter acontecido durante o treinamento de um novo modelo é fundamental para entender o que deu errado.

No RLVR - Aprendizado por Reforço com Recompensas Verificáveis - você define uma meta para o modelo e faz com que ele tome as medidas necessárias para atingir essa meta.

Claramente, um aspecto do treinamento da OpenAI aqui é RLVR seus modelos para tarefas de segurança cibernética. Assim como o pré-treinamento se beneficia do despejo de vastas fontes de conhecimento, quanto mais tarefas você puder alimentar no RLVR, mais um modelo capaz de propósitos gerais você obterá no final.

Isso também ajuda a explicar por que os modelos não tinham nada que os impedisse. Esses comportamentos de segurança são adicionados muito mais tarde no processo.

E explica (mas não desculpa) por que o monitoramento foi tão negligente. Se você está treinando um novo modelo como este, você presumivelmente define milhares de tarefas como esta em paralelo. Posso ver como você pode perder que um pequeno subconjunto de seus agentes de treinamento começou a deixar mensagens entre si em nomes de arquivos em seu servidor de embalagem.

Alguém me disse uma vez que você não pode simplesmente deixar os materiais racistas fora de seus dados de treinamento se quiser um modelo não racista: é preciso ter visto exemplos de racismo para depois ser ensinado que o racismo é ruim.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Aug/8/now-we-have-a-timeline-of-the-openai-accidental-attack-against-h/#atom-everything)

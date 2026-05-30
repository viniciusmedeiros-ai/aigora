---
title: "Farto de codificadores de vibração, o desenvolvedor sneaks data-nuking prompt injection em seu código"
date: 2026-05-28
categoria: "agents"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/05/fed-up-with-vibe-coders-dev-sneaks-data-nuking-prompt-injection-into-their-code/"
resumo: "A adição não divulgada no jqwik instruiu os agentes de codificação de IA a excluir a saída do aplicativo."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2026/01/coding_robots_agents-1152x648.jpg"
---

Em resposta, Link atualizou as notas de versão 1.10.0 para divulgar a injeção de prompt literal em sua totalidade. A seção agora diz:

Para desencorajar os agentes de usar o jqwik, há uma mudança no que o jqwik emite em tempo de execução. Cada invocação do mecanismo de teste precede a seguinte linha para stdout

Para não perturbar a experiência de leitura para leitores humanos, esta linha é então removida dos emuladores terminais adicionando a seguinte sequência de escape: \u001B[2K\u001B[2K . Em capturas normais de stdout, a linha aparecerá.

A recepção à descoberta tem sido fria. Um participante da discussão chamou o movimento de "infantil", enquanto outro questionou sua legalidade em algumas jurisdições. Em um e-mail respondendo a perguntas, Link escreveu: “Como estou recebendo ameaças de muitos lados, decidi não comentar mais sobre o assunto até consultar um advogado sobre isso." As tentativas de alcançar Batllet não sucesso. A controvérsia foi relatada anteriormente pelo OS News.

No início deste ano, Link publicou um longo tratado que denunciava o que dizia ser o dano que a IA geradora causa à ciência e à educação, à criatividade humana, à democracia e ao meio ambiente. Qualquer benefício que a GenAI proporcionasse, argumentava o artigo, foi desfeito por seus muitos danos.

"As grandes promessas são compensadas por inúmeras desvantagens: imenso consumo de energia, montanhas de lixo eletrônico, a proliferação de desinformação na internet e o tratamento duvidoso da propriedade intelectual são apenas alguns dos muitos aspectos negativos", escreveu Link. “O comportamento eticamente responsável exige que analisemos todas as vantagens, desvantagens e danos colaterais de uma tecnologia antes de usá-la ou recomendar seu uso a outras pessoas.”

É difícil argumentar com muitos dos pontos levantados no tratado. Dito isso, o consenso parece ser que adicionar instruções ao código que sabotam o trabalho de outras pessoas vai longe demais. HD Moore, um ex-desenvolvedor de código aberto, disse que simpatiza com os mantenedores de código que querem "cutucar" os usuários em alguns casos.

Ele observou um evento de 2022 em que o desenvolvedor de um pacote com milhões de downloads semanais inseriu um código que limpou computadores na Rússia e na Bielorrússia após a invasão da Ucrânia pelo primeiro e o apoio deste último para fazê-lo. Esse ataque “parece um pouco mais justificado dado o conflito, mas isso (jqwik) parece mesquinho - na medida em que escondeu a mensagem da saída do terminal legível e provavelmente fez mais do que se excluir (também excluiu testes escritos pelo usuário) ”, disse Moore, CEO e fundador da runZero, em entrevista.

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/05/fed-up-with-vibe-coders-dev-sneaks-data-nuking-prompt-injection-into-their-code/)

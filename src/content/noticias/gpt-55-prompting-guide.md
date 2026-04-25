---
title: "GPT-5.5 guia DE solicitação"
date: 2026-04-25
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Apr/25/gpt-5-5-prompting-guide/#atom-everything"
resumo: "Guia de solicitação do GPT-5.5. Agora que o GPT-5.5 está disponível na API , a OpenAI lançou uma série de dicas úteis sobre a melhor forma de solicitar o novo modelo."
destaque: false
---

Guia de solicitação do GPT-5.5. Agora que o GPT-5.5 está disponível na API , a OpenAI lançou uma série de dicas úteis sobre a melhor forma de solicitar o novo modelo.

Aqui está um truque interessante que eles recomendam para aplicativos que podem gastar um tempo considerável pensando antes de retornar uma resposta visível para o usuário:

Antes que qualquer ferramenta exija uma tarefa de várias etapas, envie uma breve atualização visível ao usuário que reconheça a solicitação e declare a primeira etapa. Mantenha-o em uma ou duas frases. Eu já notei o aplicativo Codex fazendo isso, e isso faz com que tarefas de execução mais longas pareçam menos como se o modelo tivesse travado.

A OpenAI sugere executar o seguinte no Codex para atualizar seu código existente usando conselhos incorporados em sua habilidade openai-docs:

$openai-docs migra este projeto para gpt-5.5 O guia de atualização que o agente de codificação seguirá é este , que inclui até mesmo instruções leves sobre como reescrever os prompts para melhor se adequar ao modelo.

Para tirar o máximo proveito do GPT-5.5, trate-o como uma nova família de modelos para sintonizar, não como um substituto para gpt-5.2 ou gpt-5.4 . Comece a migração com uma nova linha de base em vez de transferir todas as instruções de uma pilha de prompts mais antiga. Comece com o menor prompt que preserva o contrato do produto e, em seguida, ajuste o esforço de raciocínio, a pronúncia, as descrições das ferramentas e o formato de saída em relação exemplos representativos.

É interessante ver que a OpenAI recomenda começar do zero, em vez de confiar que os prompts existentes otimizados para modelos anteriores continuarão a funcionar efetivamente com o GPT-5.5.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Apr/25/gpt-5-5-prompting-guide/#atom-everything)

---
title: "datasette-agent 0.2a0"
date: 2026-06-10
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jun/10/datasette-agent/#atom-everything"
resumo: "Destaques das notas de versão: as ferramentas agora podem fazer perguntas ao usuário no meio da execução. As ferramentas que declaram um parâmetro de contexto recebem um objeto ToolContext e aguardam context.ask_user(...) podem fazer uma pergunta de sim/não, múltipla escolha ( options=[...] ) ou texto livre ( free_text=True )."
destaque: false
---

Destaques das notas de versão: as ferramentas agora podem fazer perguntas ao usuário no meio da execução. As ferramentas que declaram um parâmetro de contexto recebem um objeto ToolContext e aguardam context.ask_user(...) podem fazer uma pergunta de sim/não, múltipla escolha ( options=[...] ) ou texto livre ( free_text=True ).

Enquanto uma pergunta está sem resposta, o agente turn suspende: a pergunta é processada como um formulário na interface do usuário do chat e persiste no banco de dados interno, de modo que as conversas suspensas sobrevivem a uma reinicialização do servidor.

Uma vez respondida, a ferramenta é executada novamente a partir do topo com as respostas armazenadas reproduzidas, então chame ASK_user() antes de executar os efeitos colaterais. #20 Nova ferramenta interna save_query: o agente pode salvar o SQL que escreveu como uma consulta armazenada no Datasette .

Salvar sempre requer aprovação humana - o agente mostra o SQL completo mais o nome, banco de dados e visibilidade propostos, e nada é armazenado até que você clique em Sim. #20 O recurso ASK_user() foi ativado pelo novo alfa LLM que construí ontem com a ajuda de Claude Fable 5.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jun/10/datasette-agent/#atom-everything)

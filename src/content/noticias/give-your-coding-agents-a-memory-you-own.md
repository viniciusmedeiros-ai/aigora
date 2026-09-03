---
title: "Dê aos seus agentes de codificação uma memória que você possui"
date: 2026-09-03
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/funes"
resumo: "Trabalho em várias máquinas e troco de agentes de codificação dependendo da tarefa. Cada um deles conhece meus projetos como um estranho. O raciocínio da “última terça-feira” desaparece quando a sessão termina. Cada novo agente, em cada novo anfitrião, começa do zero."
destaque: false
---

Trabalho em várias máquinas e troco de agentes de codificação dependendo da tarefa. Cada um deles conhece meus projetos como um estranho. O raciocínio da “última terça-feira” desaparece quando a sessão termina. Cada novo agente, em cada novo anfitrião, começa do zero.

No início deste ano, Software Forgets: Agent Traces Are the Memory argumentou que os agentes de codificação já produzem o registro que continuamos perdendo. Ao pesquisar uma base de código, tentar abordagens, encontrar erros, ler documentação e mudar de direção, eles deixam para trás uma conta densa não apenas do que mudou, mas do porquê .

Embora o diagnóstico esteja correto, os traços são apenas memória potencial. Os logs de sessão de um agente ainda são apenas um arquivo. Você não pode chegar a "por que saímos do analisador de streaming?" em dez mil turnos. Para que um agente use esses traços enquanto ele funciona, ele precisa de indexação, recuperação, classificação e proveniência exata.

Isso é o que Funes oferece. É uma camada de memória durável para seus agentes (Claude Code, Codex, pi e Hermes). É construído a partir das sessões já existentes na sua máquina. Ele funciona localmente e se torna parte do fluxo de trabalho normal do seu agente com um comando. Quando você quiser, ele também pode viajar para um conjunto de dados Hugging Face que você possui, privado por padrão.

funes é um único binário. Seu back-end de inferência padrão não tem dependência de tempo de execução de ML, e a incorporação e reclassificação acontecem em sua máquina . Instale-o:

curl -fsSL https://huggingface.co/buckets/huggingface/funes/resolve/install.sh | sh Em seguida, adicione-o a um agente:

funes add claude # ou: codex, pi, hermes Esse comando add cria o primeiro índice, fornece as ferramentas recall e get do agente e instala a automação que indexa cada turno concluído. A indexação é incremental, com novas execuções adicionando novos turnos em vez de incorporar todo o histórico novamente. O conteúdo mais antigo e mais profundo pode ser preenchido em etapas delimitadas.

A partir daí, você apenas trabalha. Quando uma tarefa toca uma decisão, justificativa ou descoberta passada, o agente pode buscar a própria lembrança. Você não precisa se lembrar da sessão antiga ou colar seu contexto na nova.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/funes)

---
title: "Amazon lança seu próprio clone Jev à medida que modelos de decisão inundam a web"
date: 2026-10-01
categoria: "novas-ias"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/10/01/amazon-releases-its-own-jev-clone-as-decision-models-flood-the-web/"
resumo: "O Strand Labs da Amazon Web Services lançou o mais recente modelo de decisão da Jevalike, o Strands Decider 2B."
destaque: false
---

A Amazon Web Services lançou um modelo de decisão de código aberto inspirado no Jev da TypeSafe, com os desenvolvedores de IA buscando cada vez mais inteligência mais adequada à automação de computadores do que aos LLMs de fronteira.

O Strands Decider 2B da Amazon, lançado na mesma semana em que a OpenAI anunciou uma oferta semelhante, é uma maneira de alta velocidade e baixo custo de classificar entre opções pré-decididas e fornecer uma medida de quão confiante está em sua escolha. O modelo é totalmente de código aberto, disponível agora e pequeno o suficiente para ser executado localmente.

O distinto engenheiro da Amazon, Marc Brooker, criou o projeto depois de ver Jev e tentar construir sua própria opinião sobre esse modelo. O projeto homebrew foi bem-sucedido o suficiente — alcançou brevemente o primeiro lugar no ranking Jevbench para modelos de seu tamanho — que os engenheiros da Amazon o limparam e o lançaram como uma oferta de seus Strands Labs , uma organização que desenvolve novas ferramentas e protocolos para implantar agentes de IA.

Brooker diz que a necessidade de uma ferramenta como essa surgiu em conversas com clientes da AWS, cujos fluxos de trabalho agênticos nem sempre exigiam a capacidade ou o custo de um LLM com todos os recursos o tempo todo.

“O que originalmente despertou meu interesse nessa classe de modelos foi que eles tomam uma decisão perfeita para uma etapa do fluxo de trabalho — ‘qual é a próxima coisa que devo fazer aqui, com base em onde estou?" "Brooker disse ao TechCrunch. Ele disse que oferece aos clientes" uma etapa de fluxo de trabalho que pode ser estruturada de uma forma mais confiável, graças às pontuações de confiança, graças ao domínio fechado de respostas, [e é] menor latência, custo potencialmente mais baixo.”

Como outros modelos de decisão, o Strands Decider é construído no “tronco” de um LLM, neste caso Qwen3.5-2B, mas em vez de gerar texto, ele oferece opções calibradas. A TypeSafe nomeou seu modelo Jev em homenagem ao economista William Stanley Jevons, na esperança de invocar sua teoria de que a queda do custo de algo — como a inteligência computacional — pode, de fato, aumentar sua demanda.

O fato de dezenas de modelos semelhantes terem sido produzidos por pesquisadores desde que o TypeSafe estreou sua ideia mostra o grande interesse, mas também levanta a questão de quão valiosos eles podem ser. Brooker sugere que o desafio será otimizar a rápida tomada de decisões do modelo sem comprometer sua inteligência.

“Há um equilíbrio muito cuidadoso a ser encontrado onde você deseja impulsionar seu desempenho em precisão e calibração nesses tipos de tarefas, sem degradar seu desempenho na compreensão de diferentes idiomas, em ter o tipo de conhecimento que possui, que é o que o torna de propósito geral e interessante e útil”, disse ele ao TechCrunch.

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/10/01/amazon-releases-its-own-jev-clone-as-decision-models-flood-the-web/)

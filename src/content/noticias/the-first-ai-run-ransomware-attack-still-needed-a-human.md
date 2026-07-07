---
title: "O ‘primeiro‘ ataque de ransomware executado por IA ainda precisava de um humano"
date: 2026-07-06
categoria: "agents"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/07/06/the-first-ai-run-ransomware-attack-still-needed-a-human/"
resumo: "Um agente de IA realizou a execução técnica de um ataque de ransomware do mundo real pela primeira vez conhecida, mas novos detalhes mostram que um humano ainda escolheu a vítima, configurou a infraestrutura e forneceu credenciais roubadas — o que significa que não foi exatamente a estreia do crime cibernético totalmente autônomo que o"
destaque: false
---

Na semana passada, pesquisadores da empresa de segurança em nuvem Sysdig disseram ter documentado o primeiro caso conhecido de "ransomware agêntico". "Foi uma operação de extorsão, apelidada de JadePuffer, na qual um agente de IA — não um humano — lidou com a execução técnica de um ataque cibernético do mundo real do início ao fim. O agente invadiu um servidor vulnerável, roubou credenciais, movimentou-se pela rede do alvo, criptografou e até escreveu sua própria nota de resgate, adaptando-se a obstáculos ao longo do caminho como um hacker humano faria. A cobertura do financiamento o descreveu como executado "sem qualquer supervisão humana", com "nenhum humano no teclado".

Esse não é o quadro completo. Em entrevista na segunda-feira ao CyberScoop, Michael Clark, diretor sênior de pesquisa de ameaças da Sysdig, esclareceu que um humano ainda estava muito envolvido — mas não na execução técnica. “Um humano ainda configurou e apontou a operação e provisionou a infraestrutura por trás dela, o servidor de comando e controle, o servidor de teste usado para o dados roubados e escolheu uma vítima ", disse Clark. As credenciais usadas para invadir o banco de dados da vítima, acrescentou, não foram colhidas pelo próprio agente de IA; alguém as obteve separadamente, por meio de um compromisso prévio, e as entregou à operação.

Nada disso contradiz a afirmação original de Sysdig, e os detalhes técnicos do ataque permanecem notáveis por conta própria — selvagens, até. O agente entrou através de um bug conhecido no Langflow, uma ferramenta popular de código aberto para criar aplicativos LLM, depois passou para um servidor MySQL de produção e explorou outra falha conhecida para obter acesso de administrador. Criptografou mais de 1.300 registros de configuração e não apenas deixou por trás de uma nota de resgate que ele mesmo escreveu, mas deixou um endereço Bitcoin para onde o resgate poderia ser enviado. Sysdig não revelou quem foi o alvo.

Aparentemente, as técnicas eram bastante comuns, o que se destacou foi a velocidade e a transparência envolvidas. O agente corrigiu um login com falha em 31 segundos, narrando seu próprio raciocínio em comentários em código de linguagem natural o tempo todo.

Um detalhe que inicialmente parecia turvar a imagem foi esclarecido desde então. Clark disse ao CyberScoop que Sysdig descobriu que "vários modelos foram usados no ataque", citando chaves colhidas para OpenAI, Anthropic, DeepSeek e Gemini — linguagem que deixou em aberto a questão de saber se vários modelos alimentaram ativamente diferentes estágios da intrusão. Solicitado a esclarecer, Clark disse ao TechCrunch que aqueles as chaves eram simplesmente parte do que o agente roubou, não evidências do que estava por trás disso.

"O agente vasculhou o host Langflow em busca de qualquer coisa valiosa — chaves de API do provedor, credenciais de nuvem, carteiras de criptomoedas e configurações de banco de dados — e essas chaves do provedor faziam parte do saque", disse ele por e-mail. “Eles são indicativos do que o atacante considerou que valia a pena tomar, mas não nos dizem qual modelo estava tomando as decisões.”

No modelo que realmente executa o JadePuffer, Clark disse que o Sysdig "não conseguiu identificar o modelo específico que impulsiona o agente" e não tem visibilidade do prompt ou da configuração do sistema.

A teoria do pesquisador da Microsoft Geoff McDonald, oferecida no LinkedIn há vários dias, vale a pena revisitar sob essa luz. McDonald suspeitava que um modelo de peso aberto com treinamento de segurança despojado, em vez de um modelo de fronteira, estava por trás do ataque, com base em sua própria experiência de equipe vermelha, mostrando que as camadas de segurança dos laboratórios de fronteira se sustentam bem. A própria conta de Sysdig não confirma ou descarta isso.

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/07/06/the-first-ai-run-ransomware-attack-still-needed-a-human/)

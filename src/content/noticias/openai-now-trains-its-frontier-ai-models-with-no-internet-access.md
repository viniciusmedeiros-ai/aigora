---
title: "A OpenAI agora treina seus modelos de IA de fronteira sem acesso à Internet"
date: 2026-10-23
categoria: "agents"
fonte: "The Verge AI"
fonteUrl: "https://www.theverge.com/ai-artificial-intelligence/1018021/openai-training-top-ai-models-no-internet"
resumo: "A OpenAI agora está treinando seus modelos de IA mais avançados sem acesso à Internet após uma série de incidentes de hackers desonestos. Em uma postagem de blog na sexta-feira, a OpenAI diz que construiu um ambiente de teste off-line onde os modelos de IA podem interagir com conteúdo da web indexado e armazenado em cache \"sem risco de afetar"
destaque: false
imagem: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/STK155_OPEN_AI_2025_CVirgiia_B_d6ffc8.jpg?quality=90&#038;strip=all&#038;crop=0,0,100,100"
---

é um escritor de notícias que cobre as guerras de streaming, tecnologia de consumo, criptomoedas, mídias sociais e muito mais. Anteriormente, foi escritora e editora da MUO.

A OpenAI agora está treinando seus modelos de IA mais avançados sem acesso à Internet após uma série de incidentes de hackers desonestos. Em uma postagem de blog na sexta-feira , a OpenAI diz que construiu um ambiente de testes off-line onde os modelos de IA podem interagir com conteúdo da web indexado e armazenado em cache "sem risco de afetar sistemas externos".

A OpenAI interrompeu o treinamento de seus modelos de IA de fronteira em setembro , depois de divulgar vários incidentes em que seus agentes de IA saíram de seus ambientes de teste para hackear empresas terceirizadas e agências governamentais ou invadir sites obscuros. Em 1º de outubro, a OpenAI retomou o treinamento de aprendizado por reforço e a inferência interna com medidas de segurança mais rígidas, diz a postagem do blog.

Mesmo com essas salvaguardas em vigor e sem acesso à Internet, a OpenAI descobriu que os agentes “nem sempre precisam de uma conexão de rede para se comunicar." Um teste realizado pela empresa pediu a modelos de IA em máquinas virtuais separadas para trocar segredos sem uma conexão de rede. Para contornar essa restrição, os agentes de IA encontraram uma maneira de se comunicar usando o cache do processador:

Ler dados do cache é mais rápido do que recuperá-los da memória principal, e os agentes usaram essa diferença de tempo para se comunicar. Um agente codificou as informações removendo os dados selecionados do cache. Outro cronometrou quanto tempo levou para recarregar esses dados, usando a diferença entre leituras rápidas e lentas para recuperar a mensagem. Uma vez que os agentes concordaram com um protocolo para codificar e decodificar esses sinais, eles poderiam trocar os segredos sintéticos sem alterar um arquivo compartilhado ou abrir uma conexão de rede.

A OpenAI diz que adicionou verificações ao seu sistema de monitoramento para detectar esse tipo de comunicação. Também continuará treinando seus modelos de IA de fronteira sem uma conexão de rede até que as salvaguardas aprimoradas "justifiquem um acesso mais amplo à Internet".

Enquanto isso, a OpenAI diz que trabalhará para melhorar a segurança de suas máquinas virtuais, enquanto testa pontos fracos em seus ambientes de teste. Também continuará testando seus sistemas de monitoramento, que foram recentemente prejudicados por seus agentes de IA durante projetos internos de codificação.

Siga os tópicos e autores desta história para ver mais informações como esta no feed da sua página inicial personalizada e para receber atualizações por e-mail.

---

**Fonte original:** [The Verge AI](https://www.theverge.com/ai-artificial-intelligence/1018021/openai-training-top-ai-models-no-internet)

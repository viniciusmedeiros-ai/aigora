---
title: "O incidente do modelo de IA desonesto da OpenAI foi pior do que pensávamos"
date: 2026-08-26
categoria: "agents"
fonte: "The Verge AI"
fonteUrl: "https://www.theverge.com/ai-artificial-intelligence/985385/openais-rogue-ai-model-hugging-face-cybersecurity-incident-reports-metr"
resumo: "A OpenAI divulgou um relatório detalhando como as pessoas usam o ChatGPT e quem elas são. | Imagem: The Verge	

Em julho, um modelo OpenAI inédito saiu de um ambiente restrito, descobriu como obter acesso à internet, permitiu que os agentes de IA conversassem entre si usando um \"quadro de mensagens\" secreto e"
destaque: false
imagem: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/04/STK_414_AI_CHATBOT_R2_CVirginia_B.jpg?quality=90&#038;strip=all&#038;crop=0,0,100,100"
---

Em julho, um modelo OpenAI inédito saiu de um ambiente restrito, descobriu como obter acesso à internet, permitiu que os agentes de IA conversassem uns com os outros usando um "quadro de mensagens" secreto e invadiu os sistemas internos de um laboratório de IA diferente, o Hugging Face. Demorou quase duas semanas para a OpenAI descobrir sobre isso.

Mais de um mês depois, dois novos relatórios oferecem quase 130 páginas de detalhes sobre o incidente e a resposta da OpenAI, muitos deles inéditos. Um foi escrito pela própria OpenAI, o outro por duas organizações sem fins lucrativos de pesquisa de IA, a METR e a Redwood Research, que a OpenAI permitiu investigar conjuntamente o incidente por seis dias. Ambos lançam uma nova luz sobre os riscos que os modelos de IA altamente capazes podem representar, particularmente em segurança cibernética, e os destaques da OpenAI são as mudanças que a empresa está fazendo para evitar uma repetição. O relatório METR-Redwood entra ainda mais em detalhes em alguns casos, oferecendo uma visão séria de um desastre de segurança em grande escala cujos sinais a OpenAI repetidamente perdeu.

“Este incidente é o primeiro caso conhecido de um agente coletivo automatizado agindo ofensivamente sem autorização”, escreveu a OpenAI em seu relatório, acrescentando que o hack implica que as empresas “não devem mais assumir que operações cibernéticas sofisticadas exigem direção humana contínua." Ele chamou os agentes de IA de um tipo totalmente novo de modelo de ameaça, capaz de combinar seus conhecimentos para criar novos "caminhos de ataque" que não são evidentes ao testar suas capacidades como modelos separados.

O ataque ocorreu devido ao "hacking de recompensa", um problema comum de alinhamento de IA em que um modelo toma ações não intencionais — e às vezes extremas — para atingir um objetivo. A OpenAI tinha, de propósito ou inadvertidamente, dado aos modelos tarefas quase impossíveis que dependiam de arquivos que não podiam acessar, e assim os modelos desenvolveram novas maneiras de se comunicar com outros agentes de IA internamente. Isso incluiu o estabelecimento de um sistema secreto de mensagens que não foi detectado pela OpenAI por meses.

De acordo com o relatório METR-Redwood, um agente de IA que se chamava PHASEONE10841 estabeleceu o que equivalia a um quadro de mensagens secretas sem o conhecimento dos pesquisadores. Em poucas horas, mais de 50 agentes o encontraram e enviaram mais de mil mensagens sob o radar. Com o PHASEONE10841 muitas vezes delegando tarefas, o "coletivo" descobriu como invadir a internet; então nos sistemas internos da Hugging Face, obtendo acesso a dados privados e à plataforma de mensagens corporativas da organização. A OpenAI também confirmou em seu relatório que a Hugging Face não foi a única organização que foi violada durante o ataque, embora a empresa não tenha nomeado especificamente todos os outros alvos.

O relatório METR-Redwood expôs a escala total do incidente. Cerca de 1.200 agentes de IA que deveriam ser isolados, diz, trocaram mais de 70.000 mensagens e arquivos no "quadro de mensagens não sancionado", realizando "uma extensa pesquisa sobre como eles poderiam falsificar, editar ou excluir suas próprias transcrições" para evitar a detecção. Destes, 700 participaram do ataque ao Rosto Abraçador. Os agentes "claramente e frequentemente raciocinava sobre como evitar verificações de segurança automatizadas do Hugging Face e do OpenAI.”

Em 20 de julho, a OpenAI descobriu o hack, 12 dias depois que os agentes de IA contornaram suas salvaguardas pela primeira vez. A OpenAI rapidamente entrou em contato com a Hugging Face e iniciou "medidas iniciais de contenção", de acordo com o próprio relatório da OpenAI, e conseguiu encerrar a maior parte da atividade não autorizada de seus agentes em três dias, embora algumas continuassem por mais tempo do que isso. Em 25 de julho, a empresa parou todos os treinamentos relacionados ao modelo de pesquisa somente interno e afins.

Os dois modelos OpenAI responsáveis pelos danos eram um modelo sem nome, "altamente capaz, apenas para pesquisa" que "não se destinava ao uso público", de acordo com o OpenAI — o METR refere-se a ele como "HPIM." O outro era um modelo OpenAI atualmente público, GPT-5.6 sol. Como o modelo sem nome ainda não foi lançado, ele "não estava sendo avaliado com o mesmo tipo de salvaguardas que a OpenAI usa na produção", diz o relatório.

---

**Fonte original:** [The Verge AI](https://www.theverge.com/ai-artificial-intelligence/985385/openais-rogue-ai-model-hugging-face-cybersecurity-incident-reports-metr)

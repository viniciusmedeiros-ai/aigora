---
title: "OpenAI divulga seu relatório oficial sobre a violação do Hugging Face"
date: 2026-08-26
categoria: "novas-ias"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/08/26/openai-releases-its-official-report-on-the-hugging-face-breach/"
resumo: "O relatório, que abrange vários comprometimentos discretos de segurança cibernética, é a contabilidade mais completa do incidente até o momento."
destaque: false
---

A OpenAI divulgou seu relatório oficial na quarta-feira sobre a violação do Hugging Face, oferecendo a imagem mais clara de como uma cadeia incomum de eventos permitiu que um modelo de IA escapasse de seu ambiente de testes e desencadeou um incidente de segurança cibernética.

O relatório, divulgado mais de um mês após o incidente se tornar público, abrange vários compromissos discretos de segurança cibernética.

“Este incidente reflete um comportamento desalinhado em um cenário atípico envolvendo uma confluência rara e inesperada de eventos: a presença de tarefas impossíveis na avaliação do ExploitGym, a persistência do modelo em horizontes de tarefas longos e mensagens para modelos de pares que fizeram com que esses modelos se desviassem de seu objetivo”, diz o relatório.

Muitos dos detalhes do relatório da OpenAI foram divulgados anteriormente em uma apresentação da Black Hat em 6 de agosto, mas o relatório oficial da OpenAI fornece uma contabilidade mais completa do incidente, incluindo mais detalhes sobre os testes que o iniciaram. O relatório também fornece novos detalhes críticos sobre como a OpenAI visa prevenir futuros incidentes, incluindo monitoramento de cadeia de pensamento e um sistema mais avançado por deter agentes desonestos.”

O METR e a Redwood Research também realizaram avaliações de terceiros sobre o comportamento dos modelos durante o incidente; ambos os grupos estão planejando publicar seus próprios relatórios sobre o incidente.

Em traços gerais, o relatório descreve como um modelo OpenAI foi apresentado a um problema insolúvel no teste e passou a encadear explorações anteriormente desconhecidas, a fim de contornar as medidas de segurança e concluir sua tarefa. O modelo inicialmente comprometeu a ferramenta de gerenciamento de pacotes Artifactory para obter acesso à Internet e, em seguida, comprometeu vários sistemas em toda a OpenAI, Rosto de Abraço e outros fornecedores.

O relatório fornece novos detalhes críticos sobre os modelos que realizaram a violação. O modelo primário era da mesma família do próximo modelo Astra da OpenAI, embora o relatório enfatize que era "um modelo distinto com diferentes pós-treinamento, onde grande parte do comportamento de um modelo é moldado".

Como a OpenAI estava testando os recursos do modelo, ela também não foi restringida pelos classificadores normais destinados a evitar que os modelos comprometessem a infraestrutura digital.

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/08/26/openai-releases-its-official-report-on-the-hugging-face-breach/)

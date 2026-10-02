---
title: "AutoSynthData: Gerando Dados de Treinamento para Agentes Empresariais"
date: 2026-10-02
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/ServiceNow-AI/autosynthdata"
resumo: "As empresas precisam de agentes que funcionem bem em seus próprios ambientes. O trabalho que eles pedem a esses agentes é moldado pelos sistemas que usam, pelas regras que seguem e pelo estado de seus dados. Um modelo pode ser amplamente capaz e ainda lutar com um ambiente particular: um fluxo de trabalho que ele lida mal,"
destaque: false
---

As empresas precisam de agentes que funcionem bem em seus próprios ambientes. O trabalho que eles pedem a esses agentes é moldado pelos sistemas que usam, pelas regras que seguem e pelo estado de seus dados. Um modelo pode ser amplamente capaz e ainda ter dificuldades com um ambiente específico: um fluxo de trabalho que ele lida mal, uma combinação de ferramentas que ele usa indevidamente ou uma restrição que ele não respeita. Essas são as fraquezas e empresa precisa melhorar.

A dificuldade é transformar essas fraquezas em dados de treinamento. Uma falha individual nos diz algo, mas treinar um modelo requer muitas novas tarefas que exercem a mesma capacidade em diferentes situações. Essas tarefas também devem ser possíveis de serem concluídas no ambiente, assemelhar-se ao trabalho que alguém realmente solicitaria e ter uma maneira confiável de verificar se o agente foi bem-sucedido.

Na ServiceNow CoreAI, criamos o AutoSynthData para transformar essas lacunas de capacidade em dados de treinamento. Ele usa as falhas de um modelo de destino e os sucessos de um professor mais forte para decidir o que o modelo deve aprender a seguir e, em seguida, gera e valida novas tarefas que exercem essas capacidades. À medida que o modelo melhora, o currículo muda para o que ainda acha difícil. Ilustramos o pipeline com EnterpriseOps Gym ( Malay et al., 2026 ), usando o conjunto de dados lançado. Começamos descrevendo o ambiente em que um agente opera e o que torna uma tarefa útil para o treinamento.

Um ambiente agêntico define o mundo em que um agente opera: o estado que ele pode observar e modificar, as ferramentas e APIs que ele pode invocar e as transições de estado produzidas por suas ações.

Uma tarefa é instanciada dentro deste ambiente. Usamos a seguinte abstração:

task = (especificação do sistema, prompt do usuário, verificador) Especificação do sistema A especificação do sistema define as restrições sob as quais o agente opera, incluindo instruções do sistema, políticas de ambiente e, quando aplicável, inicialização específica da tarefa, como um estado de banco de dados semeado ou um conjunto de artigos de conhecimento.

A especificação deve ser compatível com as ferramentas do ambiente, estado e ações suportadas. Suas instruções devem ser claras e evitar restrições arbitrárias introduzidas apenas para dificuldade de fabricação.

O prompt do usuário especifica o que o usuário deseja que o agente realize, juntamente com quaisquer restrições de nível de usuário. Uma tarefa gerada deve satisfazer três propriedades.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/ServiceNow-AI/autosynthdata)

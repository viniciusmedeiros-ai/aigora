---
title: "A Microsoft oferece aos desenvolvedores uma maneira melhor de controlar o comportamento do agente de IA"
date: 2026-06-02
categoria: "agents"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/06/02/microsoft-offers-devs-a-better-way-to-control-ai-agent-behavior/"
resumo: "A especificação permite que as equipes de desenvolvedor, conformidade e segurança definam suas próprias políticas para os agentes seguirem em arquivos de políticas portáteis."
destaque: false
---

À medida que os agentes de IA se tornam cada vez mais capazes, as empresas que correm para colocá-los para trabalhar em aplicativos, fluxos de trabalho e produtos enfrentam um novo desafio: garantir que um agente faça o que deve fazer quando é implantado em diferentes ambientes.

A Microsoft está tentando resolver esse problema com um novo padrão de código aberto chamado Agent Control Specification (ACS), que visa dar aos desenvolvedores uma maneira mais consistente e granular de controlar o que os agentes de IA podem fazer.

A especificação essencialmente permite que as equipes de desenvolvedor, conformidade e segurança definam suas próprias políticas para os agentes seguirem. As regras podem definir o que o agente pode fazer, o que não deve fazer, quando um ser humano deve aprovar uma ação e quais evidências devem ser registradas para revisão posterior. Esses arquivos de política são verificados em vários "pontos de interceptação" quando o agente está fora de execução de uma tarefa para garantir ele fica dentro dos guarda-corpos.

A especificação surge quando os desenvolvedores estão improvisando maneiras de controlar o que sua IA vê e faz, especialmente com conversas focadas em fluxos de trabalho de IA que dão errado devido ao uso indevido de ferramentas ou ações não intencionais que resultam em falhas em cascata.

Hoje, os desenvolvedores podem especificar instruções em um prompt do sistema, adicionar verificações personalizadas no código do aplicativo ou usar classificadores para capturar entradas e saídas problemáticas. Essas abordagens funcionam, mas muitas vezes deixam as empresas com controles fragmentados que são difíceis de auditar e mais difíceis de reutilizar em diferentes estruturas, interfaces e sistemas.

O ACS visa integrar esses controles em uma camada de governança comum. A Microsoft diz que a especificação pode ser usada para verificar se um agente está aderindo aos guardrails em vários pontos de seu fluxo de trabalho — antes de receber a entrada, antes de chamar uma ferramenta, depois que uma ferramenta retorna um resultado e antes que a resposta final seja enviada ao usuário. Uma política pode permitir uma ação, bloqueá-la, editar informações confidenciais informações, ou até mesmo pedir a uma pessoa para aprová-las.

Os desenvolvedores também podem inserir classificadores para entradas e saídas para categorizar informações, prever resultados ou determinar como um agente deve responder; adicionar LLMs com prompts para atuar como um "juiz" para políticas; e lógica para verificar chamadas de ferramentas, seleção de ferramentas, precisão de entrada, uso de saída e respostas.

E como essas políticas podem ser escritas como arquivos únicos, elas podem ser empacotadas com agentes, permitindo que uma política de segurança siga um agente em diferentes estruturas e ambientes.

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/06/02/microsoft-offers-devs-a-better-way-to-control-ai-agent-behavior/)

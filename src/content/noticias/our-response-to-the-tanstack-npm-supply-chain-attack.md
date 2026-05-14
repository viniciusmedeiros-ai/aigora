---
title: "Nossa resposta ao ataque da cadeia de suprimentos TanStack npm"
date: 2026-05-13
categoria: "atualizacoes"
fonte: "OpenAI"
fonteUrl: "https://openai.com/index/our-response-to-the-tanstack-npm-supply-chain-attack"
resumo: "A OpenAI detalha sua resposta ao ataque à cadeia de suprimentos TanStack “Mini Shai-Hulud”, descreve as proteções tomadas para proteger sistemas e assinar certificados e explica por que os usuários do macOS devem atualizar os aplicativos OpenAI até 12 de junho de 2026. Saiba o que aconteceu, o que foi afetado e como a OpenAI está fortalecendo"
destaque: false
---

Recentemente, identificamos um problema de segurança envolvendo uma biblioteca comum de código aberto, TanStack npm, que faz parte de um ataque mais amplo conhecido como Mini Shai-Hulud (abre em uma nova janela) . Não encontramos evidências de que os dados do usuário OpenAI tenham sido acessados, que nossos sistemas de produção ou propriedade intelectual tenham sido comprometidos ou que nosso software tenha sido alterado.

Tomamos medidas decisivas para proteger nossos dados de usuário, sistemas e propriedade intelectual. Como parte de nossa resposta, estamos tomando medidas para proteger o processo que certifica que nossos aplicativos macOS são aplicativos OpenAI legítimos.

A segurança e a privacidade das suas informações são uma prioridade. Estamos empenhados em ser transparentes e agir rapidamente quando surgirem problemas. Estamos compartilhando mais informações técnicas e perguntas frequentes abaixo.

Dois dispositivos de funcionários em nosso ambiente corporativo foram afetados por este ataque. Após a identificação da atividade maliciosa, trabalhamos rapidamente para investigar, conter e tomar medidas para proteger nossos sistemas. Como parte de nossa investigação e resposta, contratamos uma empresa terceirizada de análise forense digital e resposta a incidentes.

Observamos atividade consistente com o comportamento descrito publicamente do malware, incluindo acesso não autorizado e atividade de exfiltração focada em credenciais, em um subconjunto limitado de repositórios internos de código-fonte aos quais os dois funcionários afetados tiveram acesso. Confirmamos que apenas material de credencial limitada foi exfiltrado com sucesso desses repositórios de código e que nenhuma outra informação ou o código foi afetado.

Agimos imediatamente para conter a atividade. Isolamos sistemas e identidades impactados, revogamos sessões de usuários, giramos todas as credenciais em repositórios impactados, restringimos temporariamente fluxos de trabalho de implantação de código e examinamos minuciosamente o comportamento de usuários e credenciais. Como parte de nossa investigação, não observamos evidências de impacto nos dados do cliente, ou em nossa propriedade intelectual, e nossos análise não identificou uso indevido de credenciais impactadas ou acesso subsequente pelo agente da ameaça.

Os repositórios de código-fonte afetados incluíram a assinatura de certificados para nossos produtos, incluindo iOS, macOS e Windows. Como resultado, estamos alternando os certificados de assinatura de código como precaução, o que exigirá que os usuários do macOS atualizem seus aplicativos. Os usuários não precisam tomar nenhuma ação para aplicativos Windows e iOS. Orientações adicionais serão fornecidas aos usuários do macOS em relação a estes requisitos atualizações.

Além dos certificados rotativos, estamos coordenando com os provedores da plataforma para evitar qualquer uso não autorizado desses certificados, interrompendo novos reconhecimentos de firma. Também revisamos todas as autenticações de software usando nossos certificados anteriores para confirmar que nenhuma assinatura inesperada de software ocorreu com essas chaves e validamos que nosso software publicado não tinha modificações. Não encontramos evidências de comprometimento ou risco para as instalações de software existentes.

---

**Fonte original:** [OpenAI](https://openai.com/index/our-response-to-the-tanstack-npm-supply-chain-attack)

---
title: "A Apple altera as permissões de acesso ao disco completo para reduzir o abuso de agentes de IA"
date: 2026-10-02
categoria: "agents"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/10/apple-changes-full-disk-access-permissions-to-curb-abuse-from-ai-agents/"
resumo: "Meta diz que o FDA não é suficiente para ler mensagens do Muse. A Apple discorda."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2026/02/gatekeeping-ai-agents-1152x648.jpg"
---

A Apple diz que está alterando suas configurações de privacidade do macOS para impedir que desenvolvedores de aplicativos de terceiros as usem indevidamente para acessar históricos de mensagens.

O anúncio de sexta-feira ocorre duas semanas depois que o colunista de tecnologia Jason Aten disse que o novo agente de IA de uso geral da Meta, Muse, lhe enviou uma notificação não solicitada referenciando um tópico entre ele e um colega de trabalho sobre as Mensagens da Apple. Aton disse que nunca concedeu permissões a Muse para ler suas mensagens e presumiu que elas estavam fora dos limites. As mídias sociais na semana passada explodiram com massas de pessoas que concordaram e disse que o incidente mostrou que os assistentes de IA com acesso a calendários, e-mails, mensagens, contas de compras e outros recursos são semelhantes a uma serra de habilidades ou outra ferramenta elétrica. Embora potencialmente úteis, eles podem causar danos reais se não forem usados com cuidado.

O Meta CTO David Singleton entrou na briga com uma refutação que parecia sólida. Para que o Muse acesse o Apple Messages, um usuário deve conceder manualmente dois privilégios. Um deles é o acesso total ao disco, uma permissão no nível do sistema do macOS. A outra é ativar uma configuração de conector de Mensagens no Muse.

"A integração do Messages no aplicativo Muse Mac é opcional", disse Singleton. “Seu Muse só pode ler o conteúdo das Mensagens se o acesso total ao disco no nível do sistema macOS for concedido e o conector Mensagens estiver ativado.”

A implicação de Singleton era clara. Muse só poderia ter lido as comunicações das Mensagens de Aton se tivesse habilitado as duas configurações e, em caso afirmativo, o colunista tinha apenas a si mesmo - e certamente não a Meta - para culpar.

No início desta semana, conversei com o especialista em segurança do macOS Patrick Wardle, que questionou a negação de Singleton. Seu raciocínio: “Do ponto de vista técnico, com FDA (acesso total ao disco), qualquer (arquivo não raiz), é legível, histórico de navegação, cookies do navegador, chats, etc etc etc. Perguntei à Meta como o Muse não conseguia ler mensagens quando o aplicativo tinha acesso total ao disco, enquanto todos os outros aplicativos com esse privilégio conseguiam. A única resposta da Meta PR foi citar novamente Singleton dizendo: “A integração do Messages no aplicativo Muse Mac é opcional. Seu Muse só pode ler o conteúdo das Mensagens se o acesso total ao disco no nível do sistema macOS for concedido e o conector Mensagens estiver ativado.”

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/10/apple-changes-full-disk-access-permissions-to-curb-abuse-from-ai-agents/)

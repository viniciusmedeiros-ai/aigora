---
title: "Muse, o assistente de IA extraordinariamente privilegiado da Meta, tem uma séria"
date: 2026-09-21
categoria: "agents"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/"
resumo: "Um simples ataque ClickFix é apenas uma maneira de sequestrar completamente o novo agente."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2026/09/ai-agent-hacking-1152x648.jpg"
---

O fundador e CEO da Meta, Mark Zuckerberg, fez um grande esforço para promover a segurança de seu novo assistente de IA, Muse, alegando que ele é "construído do zero para privacidade e segurança." Uma vulnerabilidade de dia zero que dá aos aplicativos executados localmente e aos comandos de terminal o controle completo do agente levanta sérias dúvidas. Levantando ainda mais questões, a Amazon no domingo começou a bloquear o Muse de seu site.

A Meta introduziu o Muse há algumas semanas. O assistente “marca compromissos, preenche formulários e lida com o atendimento ao cliente”, “tira proativamente as tarefas do seu prato” e pode “fazer compras, gerar imagens, criar documentos e se conectar com seus aplicativos e serviços favoritos." O aplicativo para macOS (curiosamente, não há versão para Windows) também funciona com o WhatsApp, e-mail, calendário e mídias sociais de um usuário contas. Quando uma tarefa requer uma ferramenta que não existe, o Muse cria uma em tempo real.

Claro, para o Muse fazer qualquer uma dessas coisas, os usuários devem primeiro dar acesso às suas contas. Isso inclui autenticar o assistente para cada serviço e, como o aplicativo é executado no macOS, dar a ele permissões para uma ampla gama de recursos de dispositivos restritos ao sistema operacional, como gravar arquivos em disco, acessar o microfone e a câmera e monitorar a localização e os calendários. A Apple passou anos desenvolver essas defesas para impedir que aplicativos instalados ou comandos inseridos no terminal acessem esses recursos, claramente porque a empresa os considera uma ameaça à segurança. O Muse desfaz completamente essas medidas padrão.

O dia zero permite que qualquer aplicativo ou comando de terminal obtenha acesso ao token que autentica os usuários em sua conta Muse. Os desenvolvedores de meta projetaram o assistente para que qualquer aplicativo instalado localmente ou código executado, independentemente das permissões do macOS, possa alterar uma longa lista de configurações não documentadas. A maioria deles é bastante inócua, como controlar o modo escuro. Uma configuração, no entanto, é tudo menos inócuo. Ele permite que os processos alterem o ponto de extremidade onde a transcrição ocorre. Normalmente, é um endereço de servidor operado pela Meta. Os invasores podem explorar essa falha alterando o local para seu próprio ponto de extremidade. Quando isso acontece, os atacantes têm o token que dá controle total sobre a conta Muse.

"Podemos manipular o agente e aproveitar seus privilégios para fazer o que quisermos", disse Patrick Wardle, o especialista em segurança do macOS que descobriu o dia zero, à Ars. “Então, em vez de termos que escrever um ladrão de malware para Mac muito abrangente, podemos apenas aproveitar o próprio assistente de IA." Wardle disse que desenvolveu vários ataques de prova de conceito que fazem coisas como escrever arquivos maliciosos em disco e tirar fotos, em muitos casos sem indicação até mesmo para um usuário alerta.

Mais de 12 horas depois que este post foi publicado, a Meta disse que lançou um hotfix que corrigiu o dia 0.

A Meta publicou duas postagens em duas semanas documentando as decisões de design que foram tomadas para garantir que um assistente com acesso extraordinário aos dados e recursos do usuário seja seguro e privado. As postagens surgem em meio a revelações de que testes internos de modelos da Anthropic e do Google resultaram em violações de segurança de redes externas de terceiros que os engenheiros envolvidos nunca pretenderam alvo. No hacking tradicional apenas humano, essas ações provavelmente podem resultar na apresentação de acusações criminais. As postagens da Meta provavelmente estão atentas ao blowback resultante e às chamadas para desacelerar o desenvolvimento da IA em resposta.

Wardle disse que os desenvolvedores da Meta tomaram várias decisões de design que tornaram sua exploração possível. Uma é a escolha para que o ditado Muse ocorra na nuvem, onde a Meta pode registrá-lo. O macOS há muito tempo fornece um meio simples para os aplicativos lidarem com o ditado e a transcrição em processos que permanecem seguros no dispositivo. Se os desenvolvedores tivessem escolhido essa alternativa mais segura, o ataque não teria sido possível.

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/)

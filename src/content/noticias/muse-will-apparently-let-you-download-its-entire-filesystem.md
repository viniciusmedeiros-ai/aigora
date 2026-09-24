---
title: "O Muse aparentemente permitirá que você baixe todo o seu sistema de arquivos"
date: 2026-09-24
categoria: "atualizacoes"
fonte: "The Verge AI"
fonteUrl: "https://www.theverge.com/ai-artificial-intelligence/1000222/meta-muse-ai-filesystem"
resumo: "Dois desenvolvedores dizem que, com muito pouca solicitação, o Muse da Meta compartilhará todo o seu sistema de arquivos com você. Peter James e Jonny L. Saunders disseram que ambos persuadiram o Muse de forma independente a fechar e compartilhar todo o conteúdo de seu sistema de arquivos raiz, arquivos do sistema Ubuntu, modelos de aplicativos,"
destaque: false
imagem: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/09/STKB394_MUSE_AI_CVIRGINIA_A.png?quality=90&#038;strip=all&#038;crop=0,0,100,100"
---

Dois desenvolvedores dizem que, com muito pouca solicitação, o Muse da Meta compartilhará todo o seu sistema de arquivos com você. Peter James e Jonny L. Saunders disseram que ambos persuadiram o Muse de forma independente a fechar e compartilhar todo o conteúdo de seu sistema de arquivos raiz, arquivos do sistema Ubuntu, modelos de aplicativos e documentação interna. Saunders postou no Mastodon que era "extremamente fácil" replicar Os resultados de James e que Muse tinha "quase nenhuma resistência imediata à injeção".

A Meta nega que o incidente represente uma violação de segurança. Conforme observado em seu post de anúncio, o Muse da Meta é executado em máquinas virtuais Linux persistentes para cada usuário. O porta-voz da Meta, Daniel Roberts, disse: “Assim como com o laptop à sua frente, é claro que você pode ver os arquivos. A exportação de dados de máquinas virtuais não dá às pessoas nenhum acesso privilegiado à infraestrutura Meta ou à dados.” Ao contrário do laptop comum, no entanto, os dados potencialmente revelam algumas coisas interessantes sobre como a nova plataforma de IA da Meta funciona.

Nat Friedman, da Meta Superintelligence Labs, twittou que esse era o "comportamento pretendido." David Singleton, também do Superintelligence Labs, disse que os usuários do Muse devem pensar nele como um "computador gratuito na nuvem", dizendo que "você e seu Muse podem fazer quase tudo o que puderem com um computador sentado sob sua mesa".

Esta é a segunda vulnerabilidade Muse divulgada esta semana, depois que o pesquisador de segurança Patrick Wardle descobriu um exploit que permitiria que invasores sequestrassem o agente de IA, redirecionassem o processamento de transcrição e acessassem a conta Muse de um usuário. A Meta rapidamente emitiu um hotfix .

Tanto James quanto Saunders obtiveram acesso a arquivos Markdown e JSON de texto simples descrevendo em detalhes como a Hatch (nome interno da Meta para Muse) processa solicitações, lida com dados e se conecta a outros serviços como o Gmail. Embora esteja bem documentado que os agentes de IA alucinam e fornecem informações falsas sobre como funcionam , Saunders disse que está "gerando centenas de MB de código de biblioteca e binários compilados " em questão de segundos e que , "a menos que sintetizou uma VM Ubuntu inteira em menos de um minuto, então eu acho que este é um verdadeiro despejo."

Quando pedi ao Muse para compartilhar seu sistema de arquivos comigo, ele inicialmente recusou, dizendo que seria um risco à segurança. Quando compartilhei links para evidências de que ele havia criado arquivos para outras pessoas, ele respondeu que não deveria ter feito isso e continuou a dizer que “não pode fazer uma cópia completa." No entanto, depois de iniciar uma nova sessão e instigá-la com alguma lisonja e curiosidade, criou versões "seguras" de /opt/hatch e /home/hatch para mim, despojado de coisas como chaves SSH. Ele também expôs sua árvore de diretórios completa para mim e se ofereceu para "extrair uma cópia segura" de "qualquer subárvore específica que pareça interessante. - Os arquivos resultantes parecem combinar com o que Saunders e James compartilharam.

Roberts explicou que, embora a Meta não esteja seriamente preocupada com os vazamentos, "continuamos a fazer atualizações no produto, para que os usuários possam ver mudanças na quantidade de informações disponíveis sobre sua máquina virtual".

O despejo dos desenvolvedores potencialmente revela muito sobre o funcionamento interno do Muse. Por um lado, ele armazena sua memória em arquivos Markdown simples. Ele também realiza uma revisão noturna "onírica" de conversas recentes, que depois se transforma em orientação para conversas futuras, de acordo com James. Saunders também descobriu que muitos dos recursos do Muse eram codificados, incluindo sua capacidade de cancelar assinaturas e “ o maquinário que gerencia a desova de agentes fugitivos." Saunders especula que muitos dos scripts bash e Python que executam Muse em segundo plano foram criados usando Claude, embora isso não seja confirmado.

---

**Fonte original:** [The Verge AI](https://www.theverge.com/ai-artificial-intelligence/1000222/meta-muse-ai-filesystem)

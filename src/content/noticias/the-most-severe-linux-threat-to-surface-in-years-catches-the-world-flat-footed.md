---
title: "A ameaça Linux mais grave a surgir em anos pega o mundo de surpresa"
date: 2026-04-30
categoria: "novas-ias"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/04/as-the-most-severe-linux-threat-in-years-surfaces-the-world-scrambles/"
resumo: "O CopyFail ameaça servidores multilocatários, fluxos de trabalho de CI/CD, contêineres do Kubernetes e muito mais."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2023/09/code-vulnerability-security-1000x648.jpg"
---

O código de exploração lançado publicamente para uma vulnerabilidade efetivamente não corrigida que dá acesso root a praticamente todas as versões do Linux está disparando alarmes à medida que os defensores se esforçam para evitar comprometimentos graves dentro de data centers e em dispositivos pessoais.

A vulnerabilidade e o código de exploração que a explora foram divulgados na noite de quarta-feira por pesquisadores da empresa de segurança Theori, cinco semanas depois de divulgá-lo em particular à equipe de segurança do kernel Linux. A equipe corrigiu a vulnerabilidade nas versões 7.0 , 6.19.12, 6.18.12, 6.12.85, 6.6.137, 6.1.170, 5.15.204 e 5.10.254), mas poucas das distribuições Linux incorporaram essas correções no tempo em que o exploit foi liberado.

A falha crítica, rastreada como CVE-2026-31431 e o nome CopyFail, é um escalonamento de privilégio local, uma classe de vulnerabilidade que permite que usuários sem privilégios se elevem a administradores. O CopyFail é particularmente grave porque pode ser explorado com um único código de exploração - lançado na divulgação de quarta-feira - que funciona em todas as distribuições vulneráveis sem modificação. Com que um invasor pode, entre outras coisas, hackear sistemas multilocatários, sair de contêineres baseados no Kubernetes ou em outras estruturas e criar solicitações pull maliciosas que canalizam o código de exploração por meio de fluxos de trabalho de CI/CD.

“A ‘escalada de privilégios locais’ parece seca, então deixe-me desempacotá-la”, escreveu o pesquisador Jorijn Schrijvershof na quinta-feira . “Significa: um invasor que já tem alguma maneira de executar código na máquina, mesmo sendo o usuário desprivilegiado mais chato, pode se promover ao root. A partir daí, eles podem ler todos os arquivos, instalar backdoors, assistir a todos os processos e migrar para outros sistemas.”

Schrijvershof acrescentou que o mesmo script Python que Theori lançou funciona de forma confiável para Ubuntu 22.04, Amazon Linux 2023, SUSE 15.6 e Debian 12. A pesquisadora continuou:

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/04/as-the-most-severe-linux-threat-in-years-surfaces-the-world-scrambles/)

---
title: "Um analista disfarçado do Google se infiltrou em uma notória gangue de hackers da cadeia de suprimentos"
date: 2026-09-20
categoria: "novas-ias"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/09/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang/"
resumo: "O grupo de inteligência de ameaças do Google disse que tinha um espião dentro do círculo interno da TeamPCP."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2026/09/GettyImages-2216350484-1152x648.jpg"
---

O grupo de inteligência de ameaças do Google disse que tinha um espião dentro do círculo interno da TeamPCP.

Antes de dois de seus supostos membros serem presos e acusados na Austrália no mês passado, o grupo de hackers conhecido como TeamPCP realizou uma onda de hackers diferente de qualquer outra na história. Ele contaminou centenas de programas de código aberto com seu malware, roubou contas de desenvolvedores para perpetuar o hacking da cadeia de suprimentos de software e até lançou um worm de autodifusão com tema de Dune para automatizar o processo, em última análise, violando mais de mil empresas.

Agora, o grupo de inteligência de ameaças do Google revelou que, durante um momento-chave do tumulto da TeamPCP, o próprio pesquisador disfarçado da empresa se infiltrou no grupo - permitindo que o Google monitorasse a onda de hackers por dentro, avisasse alvos de violação e até mesmo ajudasse a interromper as tentativas do grupo de explorar essas vítimas.

Em uma palestra na conferência de pesquisa LABScon da empresa de segurança SentinelOne hoje, o pesquisador do Google Threat Intelligence Group, Austin Larsen, apresentará detalhes sobre a investigação da empresa - e a infiltração - do TeamPCP em meio à campanha de hacking sem precedentes e caótica da cadeia de suprimentos do grupo. De acordo com Larsen, o Google eventualmente seguiu uma trilha de erros de segurança operacional supostamente cometidos por um dos os dois australianos agora acusados de serem membros líderes do grupo de hackers e passaram os principais detalhes de identificação para a polícia. A empresa também recebeu informações do ShinyHunters, outro infame grupo cibercriminoso com o qual a TeamPCP fez parceria, mas que mais tarde ativou os hackers da cadeia de suprimentos. E talvez o mais surpreendente, Larsen diz que a Mandiant, subsidiária de segurança do Google, um analista disfarçado - não ele mesmo - dentro do círculo íntimo do grupo desde quase o início do tempo do TeamPCP no centro das atenções.

"Uma de nossas personas estava trabalhando há muitos meses para construir confiança com um dos atores que foi convidado para se juntar ao TeamPCP e, portanto, foi adicionado ao grupo", disse Larsen à WIRED em uma entrevista antes de sua palestra na LABScon. "Então, essencialmente, quase no primeiro dia, Mandiant estava assistindo a tudo nos bastidores."

No final do mês passado, Ruben Ian Thomson e Louis Michael Gaebler, ambos australianos na casa dos 20 anos, foram presos pela polícia australiana em uma investigação conjunta com a assistência do FBI, acusados de crimes de hacking e descritos pela Polícia Federal Australiana (AFP)- em um comunicado de imprensa que, devido às leis de privacidade australianas, não os nomeou - como "principais participantes" do TeamPCP. O hacker grupo, que parece ter aparecido pela primeira vez online no final de 2025, ganhou as manchetes com uma série descarada de ataques em cascata à cadeia de suprimentos: ele repetidamente comprometeu software de código aberto para esconder seu malware, o que lhe permitiu sequestrar as credenciais de desenvolvedores de software e plantar seu código malicioso em mais uma ferramenta amplamente utilizada, em um ciclo de repetição.

A partir desta primavera, por exemplo, o TeamPCP comprometeu o scanner de segurança de código aberto Trivy, a ferramenta de interface de programação de aplicativos de IA LiteLLM, a infraestrutura da empresa de segurança de aplicativos da web Checkmarx, a biblioteca de aplicativos da web TanStack e a plataforma de IA empresarial Mistral AI. Esses ataques repetidos da cadeia de suprimentos, com cada um permitindo que o grupo lance sua rede novamente para mais vítimas, em última análise, permitiu que os hackers violassem o repositório de código aberto GitHub, a empresa de contratação de dados Mercor e os dispositivos dos funcionários da OpenAI, da Comissão Europeia e de muitos outros que permaneceram sem nome em relatórios públicos. Às vezes, o grupo implantou um worm conhecido como Mini Shai-Hulud, em homenagem aos vermes da areia em Duna , para automatizar sua invasão e aumentar a escala para ainda mais vítimas. (O nome também parecia se referir a um worm Shai-Hulud anterior que os hackers projetaram para tentar uma abordagem semelhante em setembro de 2025, embora ainda não esteja claro se o TeamPCP ou qualquer um de seus supostos membros estavam envolvidos nessa campanha de intrusão anterior.)

Larsen agora diz que em março, no momento em que a TeamPCP começava a hackear sua frenética cadeia de suprimentos, o próprio analista disfarçado do Google foi convidado a se juntar ao círculo íntimo dos hackers. Essa fonte interna, cujo nome Larsen se recusou a revelar, era um dos cerca de 12 membros do grupo que tiveram acesso a um chat principal que a TeamPCP chamou de CanisterWorm.

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/09/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang/)

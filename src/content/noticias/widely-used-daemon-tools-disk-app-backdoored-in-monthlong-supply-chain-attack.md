---
title: "Aplicativo de disco Daemon Tools amplamente utilizado com backdoor no ataque de cadeia de suprimentos de um mês"
date: 2026-05-05
categoria: "atualizacoes"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/05/widely-used-daemon-tools-disk-app-backdoored-in-monthlong-supply-chain-attack/"
resumo: "Usuários do Daemon Tools: É hora de verificar suas máquinas quanto a infecções furtivas, stat."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2022/08/GettyImages-1230467668-1152x648.jpg"
---

Uma das cargas úteis subsequentes empurradas para cerca de uma dúzia de organizações foi o que a Kaspersky descreveu como uma "porta dos fundos minimalista". "Ele tem a capacidade de executar comandos, baixar arquivos e executar cargas úteis de código shell na memória, tornando a infecção mais difícil de detectar.

A Kaspersky disse que observou um backdoor mais complexo chamado QUIC RAT, instalado em uma única máquina pertencente a uma instituição educacional localizada na Rússia. A análise inicial descobriu que ele pode injetar cargas úteis nos processos notepad.exe e conhost.exe e suporta uma variedade de protocolos de comunicação C2, incluindo HTTP, UDP, TCP, WSS, QUIC, DNS e HTTP/3.

As 100 organizações infectadas estavam localizadas principalmente na Rússia, Brasil, Turquia, Espanha, Alemanha, França, Itália e China. A visibilidade da Kaspersky sobre o ataque é limitada porque se baseia apenas na telemetria fornecida por seus próprios produtos.

A análise mostra que 10% dos sistemas afetados pertencem a empresas e organizações. Os invasores tentaram infectar a maioria das máquinas afetadas apenas com a carga útil do coletor de informações. No entanto, a outra carga útil de backdoor, que é mais complexa, foi observada apenas em uma dúzia de máquinas de organizações governamentais, científicas, de manufatura e varejo localizadas na Rússia, Bielorrússia e Tailândia. Essa maneira de implantar o backdoor em um pequeno subconjunto de máquinas infectadas indica claramente que o invasor tinha intenções de conduzir a infecção de maneira direcionada. No entanto, sua intenção – seja a ciberespionagem ou a "grande caça" – atualmente não está clara.

Ataques mais recentes à cadeia de suprimentos atingiram Trivy, Checkmarx e Bitwarden e mais de 150 pacotes disponíveis por meio de repositórios de código aberto. No ano passado, houve pelo menos seis ataques notáveis.

Qualquer pessoa que use as Ferramentas Daemon deve dedicar algum tempo para verificar a totalidade de suas máquinas usando um software antivírus respeitável. Os usuários do Windows também devem verificar se há indicadores de comprometimento listados no post da Kaspersky. Para usuários mais avançados tecnicamente, a Kaspersky recomenda monitorar “injeções de código suspeito em processos legítimos do sistema, especialmente quando a fonte é executável lançados a partir de diretórios acessíveis ao público, como Temp, AppData ou Public.”

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/05/widely-used-daemon-tools-disk-app-backdoored-in-monthlong-supply-chain-attack/)

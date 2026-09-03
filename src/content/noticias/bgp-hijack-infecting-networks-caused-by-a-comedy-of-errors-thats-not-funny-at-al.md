---
title: "Sequestro de BGP infectando redes causado por uma comédia de erros que não é nada engraçada"
date: 2026-09-02
categoria: "atualizacoes"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/09/well-executed-bgp-attack-uses-hijacked-ips-to-infect-real-networks/"
resumo: "O que podemos aprender com um sequestro de BGP que envenenou o software de produção? Muito."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2022/09/GettyImages-11477585601-1000x648.jpg"
---

O que podemos aprender com um sequestro de BGP que envenenou o software de produção? Muito.

Hackers realizaram um ataque à cadeia de suprimentos que instalou malware em redes usando uma técnica incomum: sequestrar um bloco de espaço na Internet onde o software de gerenciamento em nuvem usado por provedores de hospedagem, data centers e outras grandes empresas de infraestrutura é atualizado.

Em uma operação bem coordenada, os invasores desconhecidos exploraram os pontos fracos na configuração de segurança de roteamento do provedor de hospedagem Hetzner Online e o processo para obter certificados TLS válidos. Os lapsos permitiram que os invasores executassem com sucesso um sequestro de BGP ( Border Gateway Protocol ) para obter controle sobre os endereços IP atribuídos à Softaculous. A empresa, sediada no Reino Árabe A Emirates, é a criadora de uma plataforma para instalação e gerenciamento de software Web e é a desenvolvedora do Virtualizor, uma plataforma de gerenciamento para ambientes virtualizados.

A Softaculous usou os IPs para emitir atualizações e hospedar um cliente e um site de faturamento. Com o controle sobre o espaço sequestrado, o invasor agora estava usando os endereços para enviar malware disfarçado de atualizações para usuários desavisados.

A configuração negligente da segurança de roteamento no provedor de hospedagem da Softaculous, Hetzner Online, foi o principal contribuinte para o hack. Um grande número de outros erros contribuiu para o sucesso do ataque. Mais notavelmente, a Softaculous não seguiu uma das etapas de segurança mais comuns no desenvolvimento de software, que é validar atualizações de software usando assinatura de código.

"Durante a janela do incidente, uma instalação do Virtualizor cujo tráfego foi desviado poderia ter recebido um pacote de atualização malicioso do servidor do invasor", alertou Softaculous na segunda-feira . “Nossos clientes de atualização de produtos ainda não verificaram criptograficamente os pacotes de atualização, portanto, um pacote modificado não teria sido rejeitado com base nisso. Acreditamos que apenas um pequeno número de servidores foram realmente afetados, mas não podemos produzir uma lista definitiva, portanto, trate todos os servidores Virtualizor como escopo para as verificações abaixo.”

Uma configuração frouxa da Hetzner Online permitiu que os sequestradores desviassem o tráfego de forma intermitente em dois vãos em uma janela de 33 horas. A Hetzner Online recuperou o espaço de endereço 12 horas após o início do sequestro, anunciando o caminho correto. Então o Hetzner Online parou de anunciar o caminho, e o invasor executou o mesmo sequestro uma segunda vez. Desta vez, Hetzner levou quase 10 horas para reagir. Durante esse tempo, o sequestro estava ativo.

Como o Hetzner Online, tanto o Softaculous quanto o Zet.net, o ponto de trânsito a jusante do Hetzner Online, não conseguiram monitorar adequadamente seus sistemas e, como resultado, não detectaram o sequestro até que ele estivesse em andamento por 22 horas. Há também dúvidas sobre outro provedor de hospedagem, a Nexon Host, cuja infraestrutura de alguma forma facilitou o anúncio malicioso.

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/09/well-executed-bgp-attack-uses-hijacked-ips-to-infect-real-networks/)

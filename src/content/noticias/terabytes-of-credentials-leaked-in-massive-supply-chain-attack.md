---
title: "Terabytes de credenciais vazaram em ataque maciço à cadeia de suprimentos"
date: 2026-08-12
categoria: "atualizacoes"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/08/terabytes-of-credentials-leaked-in-massive-supply-chain-attack/"
resumo: "Os dados foram raspados e exfiltrados de 2.500 usuários de um pacote de IA comprometido."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2021/07/data-breach.jpeg"
---

Os dados foram raspados e exfiltrados de 2.500 usuários de um pacote de IA comprometido.

Terabytes de credenciais, muitos pertencentes às maiores e mais sensíveis organizações do mundo, foram expostos em um ataque à cadeia de suprimentos do LiteLLM, uma ferramenta de código aberto que simplifica o desenvolvimento de software baseado em IA. Microsoft, Amazon, Cisco, Samsung e Salesforce são apenas algumas das entidades cujos segredos de acesso foram expostos.

A revelação foi publicada na terça e quarta-feira pelas empresas de segurança CloudSEK e Hudson Rock. A CloudSEK disse que encontrou chaves de nuvem, tokens de repositório, chaves SSH, segredos do Kubernetes, credenciais de publicação de pacotes, variáveis de ambiente e chaves de provedores de IA que poderiam permitir que os invasores obtivessem acesso a mais de 2.500 organizações.

As credenciais foram extraídas durante uma janela de 40 minutos em março, enquanto as vítimas usaram versões comprometidas do LiteLLM baixadas do local oficial do pacote no repositório Python Package Index. A Hudson Rock disse que fez a descoberta depois de analisar um arquivo de 195 TB que obteve. Nenhuma das empresas identificou a fonte da informação.

O comprometimento do LiteLLM foi o resultado de um ataque anterior à cadeia de suprimentos que infectou o scanner de vulnerabilidades amplamente utilizado Trivy. Outros softwares infectados na campanha incluem KICS e o Telnyx Python SDK . A TeamPCP, uma gangue em ruínas, mas extremamente capaz, composta em grande parte por adolescentes, assumiu o crédito pelo ataque, e os pesquisadores corroboraram amplamente a afirmação.

"A propósito, confirmei que os dados são legítimos, várias organizações de vítimas", disse o pesquisador de segurança independente Kevin Beaumont. “Ele contém um volume significativo de conteúdo sensível em organizações. É uma violação maciça da cadeia de suprimentos devido à falta de segurança da IA - não porque a IA seja a ameaça, mas os adolescentes podem correr em círculos em torno de organizações obcecadas em apressar a IA e a falta de segurança do DevOps.”

As versões comprometidas de todos os quatro pacotes de software continham código que acessava a memória de máquinas infectadas, raspava seu conteúdo e o exfiltrava por meio de um canal controlado por invasores. Os dados são preenchidos com uma variedade de informações. Intercaladas na parede de dados estão credenciais para pipelines de software mantidos pelas dezenas de milhares de organizações que executaram o LiteLLM durante o período de 40 minutos em que o ataque à cadeia de suprimentos permaneceu ativo.

Ao todo, ambas as empresas de segurança disseram que cerca de 434.000 pipelines de software CI/CD (integração contínua/entrega contínua) tiveram credenciais expostas após a execução das versões LiteLLM comprometidas. Em muitos casos, os pesquisadores da CloudSEK e da Hudson Rock tiveram problemas para identificar as organizações às quais as credenciais pertenciam. Por exemplo, um endereço de e-mail no despejo do domínio @siriusxm.com em última análise não indicou uma violação na emissora de satélite, mas sim uma dentro da infraestrutura da AdsWizz, subsidiária da SiriusXM.

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/08/terabytes-of-credentials-leaked-in-massive-supply-chain-attack/)

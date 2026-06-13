---
title: "O PeopleSoft 0-day que afeta centenas de organizações rouba gigabytes de dados"
date: 2026-06-12
categoria: "atualizacoes"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/06/peoplesoft-0-day-affecting-hundreds-of-organizations-steals-gigabytes-of-data/"
resumo: "A vulnerabilidade no software PeopleSoft de propriedade da Oracle é tão crítica quanto possível."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2025/12/GettyImages-1867844462-1152x648.jpg"
---

"Embora várias organizações tenham bloqueado com sucesso a atividade ou corrigido as vulnerabilidades, outras sofreram comprometimento, resultando na publicação de dados roubados no ShinyHunters DLS", disse Mandiant. (DLS é a abreviação de local de vazamento de dados.)

Uma análise de um script bash deixado no ambiente de teste mostra que os invasores realizaram reconhecimento em organizações comprometidas, incluindo o mapeamento das configurações do PeopleSoft, a visualização do agendador de processos e as configurações XML do servidor WebLogic. Eventualmente, os agentes de ameaças estabeleceram uma conexão SSH de saída para 176.120.22.24, o endereço IP que hospeda o DLS do ShinyHunters. Os dados roubados foram primeiro comprimido usando a ferramenta zstd. O DLS alegou ter recuperado 48 GB de dados de uma única vítima.

O ShinyHunters está ativo desde pelo menos 2019. Ao longo dos últimos anos, executou dezenas de hacks contra algumas das maiores empresas do mundo, afetando milhões de pessoas a jusante. Uma pequena amostra de vítimas inclui a Ticketmaster (por meio da violação da Snowflake, que hospedou os dados), o maior banco da Espanha, o Santander, e a Salesforce (e, por meio dela, o Google e, supostamente , muitos outras empresas). O ShinyHunters usa várias técnicas para obter acesso inicial, incluindo a exploração de configurações incorretas na nuvem e vulnerabilidades de software, roubo de tokens OAuth, ataques à cadeia de suprimentos, phishing de voz e outras formas de engenharia social.

Mandiant e Rapid7 estão fornecendo indicadores detalhados de comprometimento. Eles também estão aconselhando os clientes da PeopleSoft sobre as medidas que devem tomar imediatamente. Dada a taxa de sucesso do ShinyHunters, todos os usuários do PeopleSoft fariam bem em atender às chamadas.

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/06/peoplesoft-0-day-affecting-hundreds-of-organizations-steals-gigabytes-of-data/)

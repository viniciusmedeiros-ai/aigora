---
title: "A OpenAI e a Cisco apresentam o Shirudo"
date: 2026-11-23
categoria: "atualizacoes"
fonte: "OpenAI"
fonteUrl: "https://openai.com/index/introducing-shirudo"
resumo: "A OpenAI e a Cisco apresentam o Shirudo, um runtime de código aberto para Linux. Ele ajuda as equipes a proteger os sistemas em execução enquanto implementam patches."
destaque: false
---

A OpenAI e a Cisco estão lançando o Shirudo, um runtime de código aberto que ajuda as equipes a proteger os sistemas Linux enquanto implementam patches. Em um teste controlado ⁠ (abre em uma nova janela), um escudo gerado pelo Codex bloqueou uma tentativa de exploit do Java4Shell contra um serviço Elasticsearch em execução sem exigir uma reinicialização.

Estamos convidando desenvolvedores, pesquisadores de segurança e operadores de infraestrutura de todo o setor para ajudar a desenvolver ainda mais o projeto. O projeto reúne a pesquisa de ponta da OpenAI em IA, segurança e infraestrutura e a experiência da Cisco em infraestrutura e segurança para ajudar a proteger os sistemas dos quais as pessoas dependem todos os dias.

Testar e implementar um patch ainda pode levar dias ou semanas. Enquanto isso, proteger um serviço pode ser um desafio, porque uma exploit e uma solicitação legítima podem depender da mesma operação do Linux. Bloquear essa operação completamente pode deixar o serviço offline.

O Shirudo (que significa "escudo" em japonês) foi desenvolvido para ajudar as equipes de segurança a lidar com esse dilema. As equipes podem testar se uma proteção temporária, chamada de escudo, bloqueia o comportamento que expõe uma vulnerabilidade, ao mesmo tempo em que permite a passagem de solicitações legítimas. Assim que um operador aprova o escudo, ele pode ser implementado enquanto o serviço continua em execução.

O Shirudo usa o eBPF, uma tecnologia do Linux que permite que pequenos programas sejam executados em pontos específicos dentro do sistema operacional. Isso permite observar atividades suspeitas e aplicar proteções de segurança direcionadas aos sistemas em execução.

Proteção em tempo real: os shields do eBPF podem bloquear caminhos de código vulneráveis sem reiniciar o sistema. As equipes de segurança podem monitorar como um shield proposto afetaria os aplicativos antes de implementá-lo.

Defesa na velocidade das máquinas: a OpenAI e a Cisco estão desenvolvendo o Shirudo para oferecer aos agentes controles programáveis para investigar vulnerabilidades, desenvolver proteções direcionadas e validar sua eficácia contra exploits e cargas de trabalho reais. As equipes de segurança controlam o que é implementado.

Implantação confiável: os Shields são assinados criptograficamente e verificados antes de serem carregados. O verificador de eBPF do Linux verifica os programas de eBPF em relação às suas regras de segurança, enquanto os controles de segurança do kernel restringem alterações não autorizadas.

---

**Fonte original:** [OpenAI](https://openai.com/index/introducing-shirudo)

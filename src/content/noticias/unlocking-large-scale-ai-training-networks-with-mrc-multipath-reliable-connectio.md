---
title: "Desbloqueio de redes de treinamento de IA em grande escala com MRC (Multipath Reliable Connection)"
date: 2026-05-05
categoria: "novas-ias"
fonte: "OpenAI"
fonteUrl: "https://openai.com/index/mrc-supercomputer-networking"
resumo: "A OpenAI apresenta o MRC (Multipath Reliable Connection), um novo protocolo de rede de supercomputadores lançado via OCP para melhorar a resiliência e o desempenho em clusters de treinamento de IA em larga escala."
destaque: false
---

O treinamento do modelo Frontier depende de redes confiáveis de supercomputadores que podem mover dados rapidamente entre GPUs. Para tornar isso mais rápido e eficiente, a OpenAI fez uma parceria com a AMD, Broadcom, Intel, Microsoft e NVIDIA para desenvolver o MRC (Multipath Reliable Connection): um novo protocolo que melhora o desempenho e a resiliência da rede GPU em grandes clusters de treinamento. Lançamos o MRC hoje ⁠ (abre em uma nova janela) por meio do Open Compute Project (OCP) para permitir que o setor mais amplo o use.

Com mais de 900 MILHÕES de pessoas usando o ChatGPT todas as semanas, nossos sistemas estão se tornando a infraestrutura básica para IA, ajudando pessoas e empresas em todo o mundo a construir com modelos cada vez mais capazes. Antes da criação do Stargate, co-desenvolvemos, criamos e mantivemos nossas três primeiras gerações de supercomputadores com muito cuidado e estreita colaboração com nossos parceiros ao longo de um poucos anos. Essa experiência inestimável informou nossa forte crença de que, para usar eficientemente a computação na escala do Stargate e ter sucesso em nossa missão, precisamos repensar e reduzir drasticamente a complexidade em todas as camadas da pilha – incluindo o design da rede.

A publicação da especificação MRC faz parte da estratégia geral de computação da OpenAI: padrões compartilhados nas principais camadas de infraestrutura podem ajudar a dimensionar os sistemas de IA de forma mais eficiente, confiável e em um ecossistema de parceiros mais amplo. Neste post, abordaremos o design do MRC, incluindo: i) como ele nos permite construir redes de alta velocidade de vários planos para criar redundância para superar falhas de rede, enquanto usamos menos componentes e menos energia ii) como a pulverização de pacotes adaptativa do MRC praticamente elimina o congestionamento do núcleo e iii) como nossas implantações usam o roteamento de fonte estática para contornar falhas e eliminar classes inteiras de falha de roteamento. Em conjunto, esses benefícios nos permitem oferecer melhores modelos a todos mais rapidamente.

Ao treinar grandes modelos de IA, uma única etapa pode envolver muitos milhões de transferências de dados. Uma transferência que chega atrasada pode ondular por todo o trabalho, potencialmente fazendo com que as GPUs fiquem ociosas. Congestionamento de rede, falhas de links e dispositivos são as fontes mais comuns de atraso e instabilidade nas transferências.

Esses problemas ficam mais frequentes e mais difíceis de resolver, à medida que o tamanho do cluster aumenta. Isso torna a tecnologia de rede uma parte fundamental do design do Stargate.

Para habilitar a escala atual dos supercomputadores Stargate, enfrentamos dois desafios principais de rede. Primeiro, sempre que possível, devemos minimizar a possibilidade de congestionamento da rede. Existem gargalos inevitáveis, como duas GPUs enviando para o mesmo destino ao mesmo tempo. Mas fora desses casos, devemos evitar o congestionamento através do design.

Em segundo lugar, precisamos minimizar o efeito das falhas de rede no próprio trabalho de treinamento. Em escala suficientemente grande, mesmo a melhor rede terá um nível de fundo constante de falhas de link e switch. Anteriormente, uma única falha muitas vezes fazia com que um trabalho de treinamento travasse, forçando uma reinicialização a partir de um ponto de verificação salvo ou interrompendo o progresso por muitos segundos enquanto a rede recalculava as rotas. interrupções são caras tanto em ciclos de GPU quanto em tempo. Com o pré-treinamento síncrono – onde muitas GPUs em muitos computadores cooperam em sincronia para treinar um modelo de IA – isso é especialmente verdadeiro. Quanto maior o trabalho que executamos, maior o impacto de qualquer aba de ligação única ou falha. Essas cargas de trabalho atuam como uma forma de "amplificador de falha", portanto, evitar isso se tornou crítico.

Nosso objetivo não era apenas construir uma rede rápida, mas também construir uma que oferecesse um desempenho muito previsível, mesmo na presença de falhas, para manter os trabalhos de treinamento em movimento.

---

**Fonte original:** [OpenAI](https://openai.com/index/mrc-supercomputer-networking)

---
title: "Como a OpenAI oferece IA de voz de baixa latência em escala"
date: 2026-05-04
categoria: "atualizacoes"
fonte: "OpenAI"
fonteUrl: "https://openai.com/index/delivering-low-latency-voice-ai-at-scale"
resumo: "Como a OpenAI reconstruiu sua pilha WebRTC para potencializar a IA de voz em tempo real com baixa latência, escala global e turnos de conversação contínuos."
destaque: false
---

A IA de voz só parece natural se a conversa se mover na velocidade da fala. Quando a rede atrapalha, as pessoas a ouvem imediatamente como pausas estranhas, interrupções cortadas ou atrasos na entrada. Isso é importante para a voz do ChatGPT, para desenvolvedores que criam com a API em tempo real, para agentes que trabalham em fluxos de trabalho interativos e para modelos que precisam processar áudio enquanto um usuário ainda está falando.

A equipe da OpenAI responsável pelas interações de IA em tempo real recentemente redesenhou nossa pilha WebRTC para abordar três restrições que começaram a colidir em escala: a terminação de mídia de uma porta por sessão não se encaixa bem na infraestrutura OpenAI, as sessões stateful ICE (Interactive Connectivity Establishment) e DTLS (Datagram Transport Layer Security) precisam de propriedade estável e o roteamento global precisa manter a latência do primeiro salto baixa. Neste post, percorremos a arquitetura de retransmissão dividida mais transceptor que construímos para preservar o comportamento padrão do WebRTC para os clientes, ao mesmo tempo em que alteramos a forma como os pacotes são roteados dentro da infraestrutura do OpenAI.

O WebRTC é um padrão aberto para o envio de áudio, vídeo e dados de baixa latência entre navegadores, aplicativos móveis e servidores. É frequentemente associado a chamadas ponto a ponto, mas também é uma base prática para sistemas em tempo real de cliente para servidor, porque padroniza as partes difíceis da mídia interativa: ICE para estabelecimento de conectividade e NAT (Network Address Translation), DTLS e SRTP (Protocolo de Transporte Seguro em Tempo Real) para transporte criptografado, negociação de codec para compressão e decodificação de áudio, RTCP (Protocolo de Controle de Transporte em Tempo Real) para controle de qualidade e recursos do lado do cliente, como cancelamento de eco e buffering de jitter.

Essa padronização é importante para os produtos de IA. Sem o WebRTC, cada cliente precisaria de uma resposta diferente sobre como estabelecer conectividade entre NATs, criptografar mídia, negociar codecs (os decodificadores de codificador selecionados para transmissão e descompressão) e se adaptar às mudanças nas condições da rede. Com o WebRTC, podemos criar uma pilha de protocolos que já está implementada em navegadores e dispositivos móveis plataformas, concentrando nosso próprio trabalho na infraestrutura que conecta mídia em tempo real a modelos.

Também desenvolvemos o próprio ecossistema WebRTC, incluindo implementações maduras de código aberto e o trabalho padrão que mantém navegadores, aplicativos móveis e servidores interoperáveis. O trabalho fundamental de Justin Uberti (um dos arquitetos originais da WebRTC) e Sean DuBois (criador e mantenedor da Pion) possibilitou que equipes como a nossa desenvolvessem uma infraestrutura de mídia testada em batalha, em vez de reinventar transporte de baixo nível, criptografia e comportamento de controle de congestionamento. Temos a sorte de Justin e Sean serem agora colegas aqui na OpenAI, ajudando a orientar como aproximamos o WebRTC e a IA em tempo real.

Para a IA, a propriedade mais importante é que o áudio chegue como um fluxo contínuo. Um agente falado pode começar a transcrever, raciocinar, chamar ferramentas ou gerar fala enquanto o usuário ainda está falando, em vez de esperar por um upload completo. Essa é a diferença entre um sistema que parece conversacional e um que parece push-to-talk.

Uma vez que escolhemos o WebRTC, a próxima pergunta era onde terminá-lo (onde aceitaríamos e possuiríamos a conexão WebRTC - por exemplo, na borda) e como conectar essas sessões ao back-end de inferência. A terminação é importante porque determina como lidamos com o estado da sessão em tempo real, transporte de mídia, roteamento, latência e isolamento de falhas.

Uma SFU , ou unidade de encaminhamento seletivo, é um servidor de mídia que recebe um fluxo WebRTC de cada participante e encaminha seletivamente fluxos para os outros. Nesse modelo, a SFU encerra uma conexão WebRTC separada para cada participante e a IA se junta como outro participante na sessão. Isso pode ser uma boa opção para produtos que são inerentemente multipartidários, como chamadas em grupo, salas de aula ou reuniões colaborativas. Ele mantém codecs de áudio, mensagens RTCP, canais de dados, gravação e política por fluxo em um só lugar. 1

---

**Fonte original:** [OpenAI](https://openai.com/index/delivering-low-latency-voice-ai-at-scale)

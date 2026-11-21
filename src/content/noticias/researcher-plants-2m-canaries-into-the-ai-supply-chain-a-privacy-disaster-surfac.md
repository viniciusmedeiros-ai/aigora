---
title: "Pesquisador coloca 2 milhões de canários na cadeia de suprimentos de IA. Um desastre de privacidade veio à tona."
date: 2026-11-20
categoria: "claude"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/"
resumo: "O teste usando prompts com segredos exclusivos e rastreáveis comprova que os dados não permanecem privados."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/ai-privacy-leakage-1152x648.jpg"
---

O teste usando prompts com segredos únicos e rastreáveis prova que os dados não permanecem privados.

Os pesquisadores colocaram 2 milhões de armadilhas digitais em solicitações enviadas por meio de uma extensa rede de serviços de IA para descobrir o que acontecia com as informações confidenciais que lhes eram confiadas. O que eles descobriram foi um ecossistema que vazava dados altamente sensíveis como uma peneira.

A exposição foi descoberta por meio de um experimento engenhoso, concebido para testar se informações confidenciais podem vazar pela vasta cadeia de serviços de IA amplamente utilizados e como essas informações são exploradas quando isso acontece. Muitos dos aplicativos de IA atuais usam serviços como OpenRouter ou Vercel, que atuam como intermediários. Esses "roteadores de IA", às vezes também conhecidos como "gateways de IA", recebem um grande número de prompts enviados por aplicativos de IA usuários finais do aplicativo e os direciona para um mecanismo de inferência disponível com base em critérios como o que cobra o preço mais baixo ou o que é mais adequado para a tarefa em questão. Em vez de usar a Anthropic, a OpenAI ou outro grande provedor, o desenvolvedor contrata um roteador de IA para encontrar o modelo mais adequado.

Para testar possíveis vazamentos, o pesquisador HD Moore reuniu uma coleção de chaves de acesso da Amazon Web Services, credenciais funcionais vinculadas a contas vazias da AWS, senhas para serviços como SSH e URLs exclusivos, nomes de DNS e referências a repositórios privados do Git. Nenhum dos segredos havia sido usado antes, e ele controlava a infraestrutura que recebia quaisquer solicitações usando as credenciais. Em seguida, ele inseriu cada segredo em exatamente um prompt enviado a um único provedor. Caso algum dos segredos fosse vazado, esses "canários" — assim chamados porque se assemelham ao papel desse pássaro quando levado para minas de carvão — permitiriam que Moore identificasse cada elo da cadeia que fosse responsável.

"Enviamos quase dois milhões de prompts de IA contendo segredos únicos e rastreáveis para provedores de IA e, em seguida, observamos onde esses segredos apareceram", escreveu Moore, diretor de pesquisa da empresa de segurança Dragos, na quinta-feira. "O que descobrimos revelou violações de segurança, roubo de prompts e falhas generalizadas na proteção dos dados dos clientes."

Embora os prompts sejam criptografados durante a transmissão, eles são descriptografados em cada salto dentro da grande rede de revendedores de inferência. O prompt é primeiro enviado para um roteador de IA, que lê o texto não criptografado nele para determinar os provedores de inferência mais adequados para lidar com a solicitação. Muitas vezes, o prompt é então enviado para um pool de modelos disponíveis, que às vezes são executados em diferentes provedores de hospedagem. Os prompts podem também passam de um roteador de IA (como o Vercel) para outro (por exemplo, o OpenRouter). É provável que cada um desses agentes registre o prompt e o armazene pelo tempo exigido por suas políticas (se não por tempo indeterminado).

A descoberta mais preocupante foi a violação de três provedores de hospedagem diferentes. Os invasores que comprometeram um dos provedores reutilizaram "algumas centenas" de chaves da AWS. Moore escreveu:

Cada chave foi enviada em exatamente uma solicitação para um provedor, tudo dentro de alguns breves intervalos no final de outubro, e todas as solicitações que enviamos durante esses intervalos foram roubadas. Algumas das chaves roubadas vieram de solicitações que o provedor rejeitou antes mesmo de um modelo ser executado. Isso nos indica que o invasor estava copiando as solicitações na porta de entrada do provedor e não em algum ponto mais profundo da pilha de inferência. No Nas outras duas violações, algumas das solicitações roubadas foram marcadas como ZDR. Um sinalizador de privacidade não ajuda quando o invasor já está dentro.

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/)

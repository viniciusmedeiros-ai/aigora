---
title: "Portando o modelo de pintura interna de imagem Moebius 0.2B para ser executado no navegador com o Claude Code"
date: 2026-06-22
categoria: "claude"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jun/22/porting-moebius/#atom-everything"
resumo: "Esta manhã, no Hacker News, vi Moebius: 0.2B Lightweight Image Inpainting Framework with 10B-Level Performance , descrevendo um modelo de pintura interno pequeno, mas eficaz - um modelo onde você pode marcar regiões de uma imagem para remover e o modelo imagina o que deve preencher o espaço. O modelo liberado requer"
destaque: false
---

Esta manhã, no Hacker News, vi Moebius: 0.2B Lightweight Image Inpainting Framework with 10B-Level Performance , descrevendo um modelo de pintura interno pequeno, mas eficaz - um modelo onde você pode marcar regiões de uma imagem para remover e o modelo imagina o que deve preencher o espaço. O modelo lançado exigia PyTorch e NVIDIA CUDA , mas como se descrevia como 0.2B, decidi tentar obtê-lo executando usando WebGPU em um navegador. TL;DR: Eu fiz funcionar, e você pode experimentar a demonstração em simonw.github.io/moebius-web/ . Continue lendo para saber os detalhes.

Você pode abrir qualquer imagem nele (imagens não quadradas recebem letterbox), destacar áreas para remover, clicar no botão "Executar pintura" e esperar que o modelo faça sua mágica.

Meu principal projeto para hoje foi conseguir um recurso importante no Datasette: uma interface do usuário para criar e alterar tabelas, como um acompanhamento do recurso de inserir e editar linhas que lancei na semana passada.

Eu estava trabalhando nisso no Codex Desktop (aqui está o PR ) e muitas vezes me via gastando de 5 a 10 minutos girando os dedos esperando que ele concluísse um refator de tamanho médio ou adicionasse os retoques finais a uma mudança na interface do usuário.

(Uma coisa divertida sobre os agentes de codificação é que quanto mais difícil é o problema, mais tempo você tem para se distrair enquanto espera que eles terminem de triturar!)

Então decidi girar o Claude Code em uma janela de terminal e ver até onde eu poderia chegar para portar o Moebius para a web.

Meu primeiro passo foi perguntar ao Claude regular sobre a viabilidade deste projeto. No Claude.ai , que tem a capacidade de clonar repositórios do GitHub:

Clone https://github.com/hustvl/Moebius/ e diga-me se eles publicaram o código e os pesos para executar este modelo em qualquer lugar

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jun/22/porting-moebius/#atom-everything)

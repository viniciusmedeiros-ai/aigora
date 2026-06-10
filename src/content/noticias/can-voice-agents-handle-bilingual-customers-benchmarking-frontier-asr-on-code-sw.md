---
title: "Os agentes de voz podem lidar com clientes bilíngues? Benchmarking Frontier ASR em Fala com Comutação de Código"
date: 2026-06-09
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/ServiceNow-AI/code-switching"
resumo: "Mais da metade da população mundial fala mais de um idioma. E para muitos falantes bilíngues, a troca de código — alternando perfeitamente entre idiomas, mesmo no meio da frase — é uma parte natural da comunicação cotidiana. Seja em conversas casuais, contact centers ou helpdesks de TI, os palestrantes"
destaque: false
---

Mais da metade da população mundial fala mais de um idioma. E para muitos falantes bilíngues, a troca de código — alternando perfeitamente entre idiomas, mesmo no meio da frase — é uma parte natural da comunicação cotidiana. Seja em conversas casuais, contact centers ou helpdesks de TI, os falantes se adaptam com fluidez a qualquer idioma que pareça mais natural no momento.

Apesar da prevalência de falantes bilíngues em todo o mundo, tem havido pouco trabalho focado em como os agentes de voz lidam com a fala comutada por código em ambientes corporativos. Então, quando um cliente nos perguntou como nossos agentes de voz se sairiam para sua base de clientes em grande parte bilíngües que rotineiramente trocavam de código, decidimos construir nosso próprio benchmark e conjunto de dados para avaliar modelos. Nós nos concentramos no automático reconhecimento de fala (ASR) — a primeira etapa em qualquer pipeline de agente de voz — porque os erros de transcrição se propagam para todos os componentes a jusante. Em ambientes corporativos, onde um ticket mal encaminhado ou uma questão de política mal compreendida tem consequências operacionais reais, obter a transcrição correta é uma etapa especialmente importante do pipeline do agente de voz.

Nosso benchmark abrange quatro pares de idiomas mais relevantes para nossa base de clientes: espanhol-inglês, francês-inglês, francês-inglês canadense e alemão-inglês. Ele usa o idioma não inglês como o enquadramento matricial, com o inglês incorporado em comprimentos variados. Os dados abrangem uma ampla gama de cenários de Recursos Humanos (RH) e Gerenciamento de Serviços de TI (ITSM), incluindo consultas de funcionários sobre benefícios ou folha de pagamento e solicitações de suporte, como redefinição de senha, acesso VPN ou solução de problemas do dispositivo. Para medir o desempenho de vários modelos, relatamos três métricas: Taxa de Erro de Palavras (WER), Taxa de Erro de Palavras Semânticas (SWER) e Taxa de Erro de Resposta (AER). Escolhemos essas métricas para capturar (1) a precisão exata dos modelos na transcrição, bem como (2) sua capacidade de preservar o significado de o enunciado para tarefas a jusante.

Divulgamos nosso benchmark e dados por meio de nosso arnês para avaliação de modelos de voz, AU-Harness. Também fornecemos resultados de sete sistemas ASR, incluindo alguns modelos de linguagem de áudio grande (LALMs), ASRs de fronteira e ASRs de código aberto. Nossa principal descoberta é que o custo da troca de código varia dependendo do par de idiomas e do modelo testado. ElevenLabs Scribe V2, Gemini 3 Flash e Assembly AI O 3-Pro Universal surge como os principais modelos em métricas para a tarefa.

Começamos com um corpus interno de suporte de TI e interações de RH. Para criar cada enunciado com troca de código, começamos com enunciados de usuários paralelos em inglês e um dos nossos quatro idiomas não ingleses, depois filtramos por bons candidatos a troca de código. Mantemos os enunciados entre 12 e 40 palavras — curtos o suficiente para serem turnos naturais de fala, longos o suficiente para conter oportunidades reais de troca. Nós também excluir enunciados onde as entidades dominam — e-mails, números de telefone, IDs ou URLs que tornam o texto meio inglês por necessidade, em vez de escolha bilíngue. Finalmente, precisamos de pelo menos três palavras de conteúdo comutáveis — substantivos, verbos ou adjetivos que não sejam entidades ou nomes de produtos — para fornecer ao modelo de geração material suficiente para produzir uma versão significativa de troca de código.

A partir daqui, testamos várias estratégias para combinar idiomas de maneira realista e, finalmente, selecionamos um prompt de persona simples enviado a um LLM (OpenAI/GPT-5) para produzir o texto com troca de código. Em seguida, usamos um passe de verbalização LLM para converter o texto em sua forma falada e usamos o ElevenLabs Multilingual V2 para sintetizar o áudio. Cada enunciado é então revisado por um linguista de IA/PNL que é um falante nativo da língua matricial; os enunciados sinalizados são excluídos ou regenerados e revisados novamente. O conjunto de dados final tem 259 registros espanhol-inglês, 298 registros francês-inglês, 188 registros canadenses francês-inglês e 173 registros alemão-inglês

Relatamos três métricas por modelo por par de idiomas, escolhidas para capturar a precisão da transcrição, ou seja, preservação e desempenho da tarefa a jusante:

As diferenças entre as métricas tornam-se mais significativas quando os modelos divergem entre elas.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/ServiceNow-AI/code-switching)

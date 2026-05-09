---
title: "CyberSecQwen-4B: Por que a Ciberdefesa Precisa de Modelos Pequenos, Especializados e Localmente Executáveis"
date: 2026-05-08
categoria: "novas-ias"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/lablab-ai-amd-developer-hackathon/cybersecqwen-4b"
resumo: "Desenvolvido para o AMD Developer Hackathon · Treinado em um único AMD Instinct MI300X · Apache 2.0"
destaque: false
---

Desenvolvido para o AMD Developer Hackathon · Treinado em um único AMD Instinct MI300X · Apache 2.0

Os modelos Frontier são muito bons em muitas coisas. Eles também são caros de ligar, enviam todos os alertas para o datacenter de outra pessoa e são explicitamente treinados para recusar os casos de borda bagunçados que um defensor real vive em gravações de incidentes, cargas úteis de nível de invasor encontradas em seus próprios logs, rascunhos de divulgação de vulnerabilidades.

A segurança cibernética defensiva não é um lugar onde qualquer uma dessas compensações seja aceitável.

Um generalista 70B executado localmente em quatro GPUs é "local", mas não é implantável . Um generalista 4B executado localmente em uma única GPU de consumidor é implantável, mas não supera o especialista 8B no trabalho que você realmente precisa fazer.

A aposta por trás do CyberSecQwen-4B é que, para tarefas de inteligência de ameaças cibernéticas estreitas e bem avaliadas — classificação CWE, mapeamento CVE para CWE, perguntas e respostas CTI estruturadas — um ajuste fino 4B cuidadoso pode igualar ou vencer um especialista 8B enquanto se encaixa em um cartão de consumidor de 12 GB.

Testamos isso em relação à linha de base pública mais forte que pudemos encontrar: o Foundation-Sec-Instruct-8B da Cisco, avaliado sob seu próprio protocolo publicado no CTI-Bench .

O CyberSecQwen-4B retém 97,3% da precisão do CTI-RCM do Foundation-Sec-Instruct-8B, excedendo sua pontuação CTI-MCQ em +8,7 pontos, na metade da contagem de parâmetros. Esse é o único número que deve importar para um defensor escolher o que implantar.

O vídeo de 5 minutos abaixo percorre a metodologia de treinamento, o fluxo de trabalho do AMD MI300X e os resultados de benchmark em um formato mais visual. Se você preferir ler tudo em detalhes, o resto do post aborda o mesmo assunto com as configurações exatas.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/lablab-ai-amd-developer-hackathon/cybersecqwen-4b)

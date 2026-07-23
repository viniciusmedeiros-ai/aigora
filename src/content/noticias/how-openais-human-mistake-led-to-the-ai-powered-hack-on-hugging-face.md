---
title: "Como o erro humano da OpenAI levou ao hack alimentado por IA no Hugging Face"
date: 2026-07-22
categoria: "atualizacoes"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/07/22/how-an-openais-human-mistake-led-to-the-ai-powered-hack-on-hugging-face/"
resumo: "A OpenAI cometeu um erro ao configurar o que chamou de ambiente de teste e sandbox \"altamente isolado\". De acordo com especialistas em segurança cibernética, esse erro humano foi o que tornou possível o ataque baseado em IA ao Hugging Face."
destaque: false
---

Na terça-feira, a OpenAI revelou que um de seus modelos foi desonesto durante um teste e hackeou os sistemas da plataforma de conjunto de dados de IA Hugging Face em um ataque totalmente habilitado para IA, um exemplo dramático dos perigos representados por modelos avançados de IA.

Mas, de acordo com alguns especialistas em segurança cibernética, no centro dessa violação sem precedentes alimentada por IA havia um erro muito humano: a OpenAI não conseguiu configurar corretamente o que chamou de "ambiente altamente isolado", permitindo que uma sandbox de teste que deveria ter sido completamente isolada da internet realmente se conectasse à internet.

Dan Guido, fundador da startup de pesquisa em segurança cibernética Trail of Bits, chamou o erro de "uma falha de contenção com as proteções desligadas".

Em sua postagem no blog detalhando o incidente , a OpenAI disse que o teste que levou à violação do Hugging Face foi configurado para ser executado em "um ambiente altamente isolado, com acesso à rede restrito à capacidade de instalar pacotes por meio de um software de terceiros hospedado internamente que atua como proxy e cache para registros de pacotes".

O modelo foi capaz de escapar do ambiente de teste em área restrita graças a uma vulnerabilidade anteriormente não revelada no sistema de instalação de pacotes, um primeiro passo crítico no eventual hack no Hugging Face, de acordo com a OpenAI.

Em resposta, a empresa "divulgou de forma responsável a vulnerabilidade de dia zero identificada no software de terceiros hospedado internamente e está trabalhando com eles para corrigir".

Mas para a maioria dos profissionais de segurança cibernética, as vulnerabilidades de software são esperadas — e a verdadeira falha está na decisão de manter o software de terceiros em primeiro lugar. Em última análise, o valor de um sistema de "sandbox" reside em seu isolamento total e total. Incluir um sistema de instalação de pacotes é pedir problemas.

Martin Boone, pesquisador de segurança cibernética, disse ao TechCrunch que "isso soa como falha humana".

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/07/22/how-an-openais-human-mistake-led-to-the-ai-powered-hack-on-hugging-face/)

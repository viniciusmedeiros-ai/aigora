---
title: "Anthropic explica como as marcas d 'água de texto invisíveis de Claude funcionarão"
date: 2026-08-17
categoria: "claude"
fonte: "The Verge AI"
fonteUrl: "https://www.theverge.com/ai-artificial-intelligence/980869/anthropic-claude-watermarks-synthid-text-system"
resumo: "A Anthropic esclareceu como planeja aplicar marcas d 'água invisíveis ao texto gerado por Claude para cumprir as regras de transparência de IA da Europa. Na sexta-feira, a Anthropic anunciou que o sistema de marcação de texto de Claude é \"uma versão da abordagem SynthID-Text\" - uma tecnologia de marca d' água de código aberto"
destaque: false
imagem: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/01/STKB364_CLAUDE_2_C_96d15c.jpg?quality=90&#038;strip=all&#038;crop=0,0,100,100"
---

é um escritor de notícias focado em indústrias criativas, computação e cultura da internet. Jess começou sua carreira na TechRadar, cobrindo notícias e análises de hardware.

A Anthropic esclareceu como planeja aplicar marcas d 'água invisíveis ao texto gerado por Claude para cumprir as regras de transparência de IA da Europa. Na sexta-feira, a Anthropic anunciou que o sistema de marcação de texto de Claude é "uma versão da abordagem SynthID-Text" — uma tecnologia de marca d' água de código aberto desenvolvida pelo Google DeepMind que cria padrões detectáveis usando probabilidades de redação.

Esse recurso de marca d 'água, juntamente com o suporte a C2PA para imagens processadas por Claude, está sendo introduzido para atender às obrigações da Anthropic sob a Lei de IA da União Europeia, que exige que áudio, imagem, vídeo e texto sintéticos incluam marcas legíveis por máquina que permitam que o conteúdo seja detectado como gerado ou manipulado artificialmente. A Anthropic diz que as marcas d' água de texto não deixarão Claude mais caro para os usuários, ou “ter qualquer impacto prático na qualidade ou conteúdo das saídas de Claude." Aqui está a explicação da Anthropic sobre como funciona:

Pegue a frase "O tempo hoje estava frio e...". É muito improvável que a próxima palavra seja "açucarado". "Mas é bem provável que seja" nublado "ou" cinza. ”Na maioria das circunstâncias, não importa muito para o leitor qual dessas duas últimas palavras o modelo escolhe - o significado da frase é basicamente o mesmo de qualquer maneira. Em casos como este, a escolha é resolvida por um número aleatório.

A marca d 'água usa escolhas de baixo risco como essas - que ocorrem muitas vezes em um texto gerado - para deixar um padrão nas respostas de Claude. Esse padrão é indetectável para o leitor, mas é detectável para qualquer pessoa que tenha uma chave que o codifique. Quando a marca d' água é usada, as escolhas ainda são feitas aleatoriamente, mas a fonte da aleatoriedade é diferente. Em vez de usar um número aleatório arbitrário gerador para escolher a próxima palavra, a marca d 'água usa a chave e algumas palavras que vêm antes para definir qual palavra o modelo deve escolher.

Como observa Anthropic, os requisitos de transparência de IA da UE também afetam outros grandes desenvolvedores de IA, de modo que Claude não será o único modelo a introduzir marcas d 'água de texto. O chatbot Gemini do Google suporta a solução SynthID-Text desde 2024 e, embora o OpenAI não tenha detalhado nenhum plano de marca d' água de texto para o ChatGPT em seu roteiro de conformidade com a Lei de IA, ele também estará sujeito aos requisitos da lei.

Siga os tópicos e autores desta história para ver mais informações como esta no feed da sua página inicial personalizada e para receber atualizações por e-mail.

Jess Weatherbed The Verge Daily Um resumo diário gratuito das notícias que mais importam.

---

**Fonte original:** [The Verge AI](https://www.theverge.com/ai-artificial-intelligence/980869/anthropic-claude-watermarks-synthid-text-system)

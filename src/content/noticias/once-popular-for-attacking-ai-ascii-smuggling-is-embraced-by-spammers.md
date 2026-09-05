---
title: "Outrora popular por atacar IA, o contrabando de ASCII é adotado por spammers"
date: 2026-09-04
categoria: "agents"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/"
resumo: "Um bloco de unicode outrora negligenciado que é invisível para os humanos está ganhando uso cada vez mais amplo."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2026/09/no-eyes-1152x648.jpg"
---

Uma técnica inteligente usada para ocultar avisos maliciosos em ataques a agentes de IA foi adotada por spammers para evitar filtros em plataformas de e-mail projetadas para sinalizar mensagens indesejadas usadas em campanhas em massa.

A técnica é amplamente conhecida como contrabando ASCII. Ele ganhou atenção há dois anos como um meio de tornar uma classe de ataque de IA conhecida como injeções imediatas mais furtivas. Instruções maliciosas incorporadas em e-mails ou outro conteúdo não confiável a ser processado por um LLM não são escritas em texto comum. Em vez disso, eles são renderizados por um intervalo especial de tags Unicode. Por exemplo, o ponto de marcação U+E0041 espelha "A" e U+E0061 espelha "a."

O bloco de 128 tags imita uma parte do Código Padrão Americano para Intercâmbio de Informações quase perfeitamente, com uma grande diferença: os caracteres que eles codificam são legíveis por computadores, mas, por design, são quase completamente invisíveis para os seres humanos. Ao expressar os prompts maliciosos nessas tags, os LLMs detectam as instruções, mas as pessoas que leem o e-mail nunca as veem. Há muito mais sobre o contrabando de ASCII aqui .

No início deste ano, a Microsoft começou a ver um aumento maciço nas mensagens de spam que usavam a técnica. A partir de um dia no início de fevereiro, o número de assinaturas de contrabando de ASCII detectadas pelo Microsoft Defender para Office aumentou de cerca de 21.000 por dia para mais de 1,3 milhão. Em quatro dias, as detecções de assinaturas saltaram para 2,5 milhões. O dilúvio persistiu por meses e depois caiu acentuadamente em meados de maio.

“Como os caracteres de tag são invisíveis para os humanos, mas existem no nível de processamento de texto, a mesma propriedade que os torna úteis para contrabandear instruções para um modelo também os torna úteis para ofuscar palavras-chave antes que um detector os avalie”, explicou a Microsoft na quinta-feira . "A intenção é invertida, mas o mecanismo é semelhante, e as suspeitas de um usuário não são levantadas."

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/)

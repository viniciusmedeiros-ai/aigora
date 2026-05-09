---
title: "Usando o código Claude: a eficácia irracional do HTML"
date: 2026-05-08
categoria: "claude"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/#atom-everything"
resumo: "Usando o Código Claude: A Eficácia Irracional do HTML . Peça instigante de Thariq Shihipar (da equipe Claude Code da Anthropic) defendendo o HTML sobre Markdown como um formato de saída para solicitar a Claude."
destaque: false
---

Usando o Código Claude: A Eficácia Irracional do HTML . Peça instigante de Thariq Shihipar (da equipe Claude Code da Anthropic) defendendo o HTML sobre Markdown como um formato de saída para solicitar a Claude.

O artigo está repleto de exemplos interessantes (coletados neste site ) e sugestões rápidas como esta:

Ajude-me a revisar este PR criando um artefato HTML que o descreva. Não estou muito familiarizado com a lógica de streaming/contrapressão, então concentre-se nisso. Renderize o diff real com anotações de margem em linha, descobertas de código de cores por gravidade e qualquer outra coisa que possa ser necessária para transmitir bem o conceito.

Eu não peço a maioria das coisas no Markdown desde os dias do GPT-4, quando o limite de 8.192 tokens significava que a eficiência do token do Markdown em relação ao HTML valia extremamente a pena.

A peça de Thariq aqui me fez reconsiderar isso, especialmente para a produção. Pedir a Claude uma explicação em HTML significa que ele pode inserir diagramas SVG, widgets interativos, navegação na página e todos os tipos de outras maneiras legais de tornar as informações mais agradáveis de navegar.

Escrevi sobre padrões úteis para a construção de ferramentas HTML em dezembro passado, mas isso se concentrou muito em utilitários interativos como os do meu site tools.simonwillison.net. Estou animado para começar a experimentar mais com explicações ricas em HTML em resposta a prompts ad-hoc.

copy.fail descreve uma vulnerabilidade de segurança do Linux descoberta recentemente, incluindo uma prova de conceito distribuída como Python ofuscada.

curl https://copy.fail/exp | llm -m gpt-5.5 -s 'Explique este código em detalhes. Reformate-o, expanda qualquer parte confusa e aprofunde-se no que ele faz e como funciona. HTML de saída, com estilo elegante e usando recursos de HTML, CSS e JavaScript para tornar a explicação rica, interativa e o mais clara possível'

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/#atom-everything)

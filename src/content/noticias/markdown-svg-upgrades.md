---
title: "Atualizações Markdown SVG"
date: 2026-08-16
categoria: "atualizacoes"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Aug/16/markdown-svg-upgrades/"
resumo: "Comecei a construir minha ferramenta markdown-svg-renderer em maio , mas desde então adicionei recursos suficientes para que valha a pena falar aqui novamente."
destaque: false
---

Comecei a construir minha ferramenta markdown-svg-renderer em maio , mas desde então adicionei recursos suficientes para que valha a pena falar aqui novamente.

Ele evoluiu para minha ferramenta ideal para compartilhar transcrições de Markdown que incluem documentos SVG. Dada a minha propensão para desenhar pelicanos andando de bicicleta, este é um problema que eu precisava resolver!

A ferramenta é muito simples. Navegue até markdown-svg-renderer em seu navegador e cole algum Markdown para vê-lo renderizado... ou salve esse Markdown em um URL compatível com CORS ou um Gist do GitHub e cole um URL nesse documento.

A opção de URL fornecerá uma página marcável, por exemplo https://tools.simonwillison.net/markdown-svg-renderer#url=https%3A%2F%2Fgist.github.com%2Fsimonw%2F6f9e48293be5c916652d29f0dc0b0657 - que cobra a URL para este Gist .

Como você pode ver, esse bloco SVG no Markdown foi transformado em um SVG renderizado (neste caso animado) mais várias guias.

As abas são a parte realmente divertida. As guias PNG e JPEG renderizam esse SVG para esses formatos de imagem no navegador e permitem copiá-los ou baixá-los - útil para compartilhar em plataformas que não suportam SVG diretamente.

A aba MP4 é nova hoje - ela examina o SVG para ver se contém alguma animação, tenta adivinhar quanto tempo o vídeo em loop deve ter e, em seguida, renderiza um monte de quadros da animação e carrega mais de 30MB de ffmpeg.wasm para que possa compilar esses quadros em um vídeo MP4 usando todo o poder do FFMPEG compilado para WebAssembly e executado no navegador.

Ser capaz de transformar um SVG animado em um MP4 novamente facilita o compartilhamento em plataformas que não suportam animação SVG nativamente. É um truque legal!

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Aug/16/markdown-svg-upgrades/)

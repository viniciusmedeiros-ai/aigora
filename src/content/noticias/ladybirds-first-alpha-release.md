---
title: "Primeiro lançamento alfa do Ladybird"
date: 2026-11-23
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Nov/23/ladybird/"
resumo: "O Ladybird é um projeto incrivelmente ambicioso: um novo navegador, em 2026, com sua própria implementação da maioria dos componentes-chave — análise de HTML, mecanismo de CSS, layout, JavaScript e até mesmo WebAssembly. Ele ainda usa alguns componentes externos, como o HarfBuzz para formatação de texto, o Skia para gráficos 2D, o ffmpe"
destaque: false
---

O Ladybird é um projeto incrivelmente ambicioso: um novo navegador, em 2026, com sua própria implementação da maioria dos componentes-chave — análise de HTML, mecanismo de CSS, layout, JavaScript e até WebAssembly. Ele ainda usa alguns componentes externos — coisas como o HarfBuzz para formatação de texto, o Skia para gráficos 2D, o ffmpeg para vídeo e o SQLite para as coisas que você faz com o SQLite. Todo o resto faz parte do Ladybird, ou código trazido do projeto antecessor ainda mais ambicioso da Ladybird, o SerenityOS.

Esta manhã, o projeto Ladybird lançou sua primeira versão alfa, o que significa que agora você pode instalar o navegador (no macOS ou no Linux) sem ter que compilá-lo por conta própria!

Estou testando hoje e ele é muito impressionante. Ele parece rápido, a interface do usuário é leve e intuitiva, e a maioria dos sites que tentei carregar nele funcionou como deveria. Ele é assim (mostrando minha ferramenta de compressão de vídeo):

Aqui está a árvore de processos depois de abrir seis abas em uma janela e outra aba em uma segunda janela (gerada por este script, obrigado, Claude):

Ladybird (72925) [240 MB] └── Hub (72926) [61 MB] ├── RequestServer (72927) [29 MB] ├── ProcessReaper (72928) [1 MB] ├── Compositor (72930) [123 MB] ├── RequestServer (72953) [36 MB] ├── WebContent (72984) [819 MB] ├── MediaServer (73006) [118 MB] ├── VideoDecoderServer (73007) [20 MB] ├── WebContent (73052) [144 MB] ├── WebContent (73057) [73 MB] ├── WebContent (73073) [166 MB] ├── WebContent (73094) [70 MB] ├── WebContent (73112) [116 MB] ├── RequestServer (73113) [27 MB] └── WebContent (73185) [60 MB] O Ladybird executa guias diferentes em processos diferentes, um mecanismo de isolamento usado pela maioria dos navegadores (bem, tecnicamente, o Chrome usa um processo por site).

Testei o Ladybird com vários dos meus exemplos de ferramentas mais avançadas, como o compressor de vídeo mostrado acima, que executa o ffmpeg compilado para WebAssembly. Fiz com que ele redimensionasse sua própria captura de tela usando minha ferramenta de redimensionamento de imagens. Ele também executa sem problemas meu REPL do Pyodide (Python compilado para WebAssembly).

A única coisa que tentei e não funcionou foi o Datasette Lite, que executa o Pyodide em um arranjo complicado de service workers e web workers. Ao tentar iniciar o Datasette Lite, este erro é exibido:

undefined não é uma função (avaliada a partir de "navigator.serviceWorker.startMessages")

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Nov/23/ladybird/)

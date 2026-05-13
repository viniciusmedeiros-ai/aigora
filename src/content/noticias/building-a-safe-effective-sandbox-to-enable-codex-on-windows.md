---
title: "Construir uma sandbox segura e eficaz para habilitar o Codex no Windows"
date: 2026-05-13
categoria: "agents"
fonte: "OpenAI"
fonteUrl: "https://openai.com/index/building-codex-windows-sandbox"
resumo: "Saiba como a OpenAI construiu uma sandbox segura para o Codex no Windows, permitindo agentes de codificação seguros e eficientes com acesso controlado a arquivos e restrições de rede."
destaque: false
---

Quando entrei para a equipe de engenharia do Codex em setembro de 2025, o Codex para Windows não tinha uma implementação sandbox, o que significa que os usuários do Windows eram forçados a escolher entre duas opções abaixo da média ao usar os agentes de codificação do OpenAI:

O Codex, nosso agente de codificação, é executado em laptops de desenvolvedor, seja por meio da CLI, da extensão IDE ou do aplicativo de desktop. Ele gerencia uma conversa entre um humano em um teclado e um modelo em execução na nuvem para lidar com inferências.

O Codex é executado com as permissões de um usuário real por padrão, o que significa que ele pode fazer tudo o que o usuário pode fazer. Isso é poderoso e potencialmente perigoso. O modelo de codificação pode dizer ao arnês para executar comandos localmente, desde a execução de testes até a leitura ou edição de um arquivo para criar uma ramificação Git, então o modo padrão do Codex tenta encontrar o equilíbrio certo entre eficácia e segurança. Este modo padrão permite que o Codex leia arquivos em praticamente qualquer lugar e escreva arquivos dentro do seu espaço de trabalho (ou seja, o diretório onde você está executando o Codex), sem acesso à Internet, a menos que você especifique que deseja. Para alcançar essa restrição automática de gravar arquivos e acessar a rede dentro de limites seguros, o Codex precisa de um ambiente de sandbox que realmente imponha essas restrições.

Uma sandbox é um ambiente de execução restrito. Quando um desenvolvedor usa o Codex, o sistema operacional do computador inicia um comando com permissões reduzidas e essas restrições se propagam pela árvore de processos. Cada comando do Codex é colocado em área restrita desde o início, e cada processo descendente permanece dentro do mesmo limite.

O Codex precisa de recursos de isolamento impostos pelo sistema operacional do computador para implementar uma sandbox eficaz. Alguns sistemas operacionais fornecem utilitários que fazem isso bem (por exemplo, Cinto de segurança em MacOs, seccomp ou bubblewrap no Linux); no entanto, o Windows atualmente não fornece esse tipo de recurso pronto para uso.

Para tornar o Codex tão seguro e agradável de usar no Windows quanto em qualquer outro lugar, precisávamos implementar nossa própria sandbox.

O Windows oferece algumas ferramentas e primitivas para isolamento. Embora nenhuma delas atenda aos nossos requisitos, analisamos várias soluções em potencial, a saber, rotulagem de AppContainer, Windows Sandbox e Controle de Integridade Obrigatório.

Tendo avaliado todas as opções como não iniciantes, começamos a projetar nossa própria solução para trazer uma boa experiência do Codex aos usuários do Windows.

---

**Fonte original:** [OpenAI](https://openai.com/index/building-codex-windows-sandbox)

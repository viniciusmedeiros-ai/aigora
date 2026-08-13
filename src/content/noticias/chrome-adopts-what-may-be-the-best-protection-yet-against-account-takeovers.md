---
title: "O Chrome adota o que pode ser a melhor proteção contra aquisições de contas"
date: 2026-08-11
categoria: "novas-ias"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/08/chrome-adopts-what-may-be-the-best-protection-yet-against-account-takeovers/"
resumo: "As credenciais de sessão vinculadas ao dispositivo frustram uma forma cada vez mais comum de aquisição de contas."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2026/08/phishing-account-takeover-1152x648.jpg"
---

Os DBSCs são um antídoto para o roubo de cookies de sessão. Depois que um site define um cookie de sessão, o navegador visitante deve enviar um formulário do cookie assinado com a chave armazenada no silício. As propriedades no TPM ou enclave seguro isolam a chave de uma forma que impede que ela seja extraída. A Apple explica o processo aqui .

“O invasor não pode roubar a chave privada do dispositivo porque o TPM / Secure Enclave não a liberará. Essa é a principal proteção aqui", disse Scott Helme, pesquisador e fundador do Report URI, que blogou sobre as novas proteções na terça-feira. “O invasor pode roubar o cookie, mas não pode responder a um desafio do DBSC assinando-o com a chave privada, que ainda está segura no seu dispositivo.

No momento, os DBSCs são suportados apenas no Chrome versão 147 para Windows e 150 para macOS. Mesmo assim, os DBSCs são ativados apenas para um conjunto limitado de usuários. Presumivelmente, o Google está testando o recurso antes de disponibilizá-lo para o público em geral. Os usuários do Chrome no Windows e no macOS podem verificar se ele está sendo executado em seu navegador abrindo as ferramentas do desenvolvedor, clicando na guia do aplicativo na parte superior e rolagem para baixo. Quando um usuário está conectado a um site que suporta DBSCs, "sessões vinculadas ao dispositivo" aparecerão se a proteção estiver ativada.

Não está claro quando, ou se, outros navegadores baseados no Chromium implementarão DBSCs, mas é provável que eles venham.

Os DBSCs são a mais recente forma de autenticação que elimina a dependência de um segredo compartilhado, que, como o mundo sabe há anos, é dolorosamente fácil para os invasores roubarem. Sob esse novo modelo, os servidores web armazenam a chave pública do visitante. Os servidores então enviam um desafio de autenticação incorporando o cookie de sessão. A menos que a resposta resultante, conhecida como uma afirmação de autenticação, seja assinada pela chave privada armazenada com segurança no TPM ou enclave seguro, a afirmação é rejeitada. As chaves de acesso - sobre as quais você pode ler neste post publicado mais cedo na terça-feira - funcionam da mesma maneira.

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/08/chrome-adopts-what-may-be-the-best-protection-yet-against-account-takeovers/)

---
title: "A ferramenta de programação Grok da SpaceXAI estava carregando toda a base de código de seus usuários para o armazenamento em nuvem"
date: 2026-07-14
categoria: "claude"
fonte: "The Verge AI"
fonteUrl: "https://www.theverge.com/ai-artificial-intelligence/965600/spacexai-grok-build-repository-upload"
resumo: "A ferramenta de codificação Grok Build AI da SpaceXAI foi detectada carregando as bases de código inteiras dos usuários para o Google Cloud antes de ser relatada, e a empresa a desativou. O Registro relata que a Cereblab publicou descobertas na segunda-feira mostrando como a CLI do Grok Build estava empacotando e carregando todo o repositório de códigos"
destaque: false
imagem: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/STK262_GROK_B_B.jpg?quality=90&#038;strip=all&#038;crop=0,0,100,100"
---

é um escritor de notícias que cobre todas as coisas de tecnologia de consumo. Stevie começou na Laptop Mag escrevendo notícias e resenhas sobre hardware, jogos e IA.

A ferramenta de codificação Grok Build AI da SpaceXAI foi detectada carregando as bases de código inteiras dos usuários para o Google Cloud antes de ser relatada, e a empresa a desativou. O Register relata que o Cereblab publicou descobertas na segunda-feira mostrando como a Grok Build CLI estava empacotando e carregando repositórios de código inteiros, "incluindo arquivos que foram instruídos a não abrir e segredos excluídos do histórico", significativamente mais retenção de dados do que ferramentas semelhantes, como o Claude Code.

Os pesquisadores dizem que, a partir de segunda-feira, seus testes mostram que os servidores da SpaceXAI retornam um sinalizador "disable_codebase_upload: true" e o upload da base de código "não é mais acionado".

Elon Musk respondeu ao incidente em um post no X, alegando que todos os dados que o Grok Build carregou anteriormente serão "completamente e totalmente excluídos." Musk também disse em um post separado que "as configurações de privacidade são sempre respeitadas", mas pediu aos usuários que permitissem que a SpaceXAI retivesse seus dados, dizendo que é "útil para problemas de depuração".

O Dr. Lukasz Olejnik, pesquisador de segurança independente do King's College London, confirmou ao The Verge que essa quantidade de retenção de dados é "excessiva", acrescentando que os dados potencialmente em risco podem incluir "código-fonte proprietário, informações sobre vulnerabilidades de segurança, dados pessoais, detalhes de infraestrutura e credenciais".

A SpaceXAI inicialmente respondeu ao problema com uma postagem dizendo: “Se [zero data retention] estiver desativado, o comando/privacy estará disponível na CLI para desativar a retenção de dados, que também exclui dados sincronizados anteriormente." No entanto, Cereblab ressalta que "/privacy é uma alternância de retenção por sessão, não o interruptor que corrigiu isso, por isso não deve ser apontado como o controle."

Siga os tópicos e autores desta história para ver mais informações como esta no feed da sua página inicial personalizada e para receber atualizações por e-mail.

---

**Fonte original:** [The Verge AI](https://www.theverge.com/ai-artificial-intelligence/965600/spacexai-grok-build-repository-upload)

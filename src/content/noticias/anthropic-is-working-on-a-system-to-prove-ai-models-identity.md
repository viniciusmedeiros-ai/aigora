---
title: "A Anthropic está trabalhando em um sistema para provar a identidade dos modelos de IA"
date: 2026-11-03
categoria: "claude"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/"
resumo: "Chamado FlashProve, o sistema permitiria que qualquer pessoa verificasse se uma resposta de IA realmente veio do modelo do qual afirma ser."
destaque: false
---

A Anthropic está trabalhando em um sistema de código aberto para verificar qual modelo de IA produziu uma determinada saída, de acordo com um post publicado na terça-feira. O sistema, chamado FlashProve , é construído para fornecer o que os pesquisadores chamam de “inferência demonstrável” — uma prova criptográfica, essencialmente uma garantia matemática, de que uma determinada saída veio de um modelo específico. Destina-se a permitir que os usuários confirmem que a resposta que eles recebido realmente veio do modelo que eles acham que estão usando.

Semelhante às assinaturas de e-mail criptográficas que permitem que os destinatários confirmem que uma mensagem realmente veio de seu remetente reivindicado, o FlashProve seria robusto contra impostores que tentam disfarçar um modelo como outro, mesmo quando o impostor é o laboratório que construiu e executa o modelo. Em particular, os pesquisadores observam que o sistema pode ser usado para impedir que uma empresa de IA troque secretamente uma modelo para cortar custos, ou um modelo mais caro para inflar seus resultados de desempenho.

O FlashProve também pode ser usado para verificar alegações de terceiros de que uma tarefa específica foi realizada por um modelo avançado. “Um desenvolvedor pode alegar que sua biblioteca de software foi verificada em busca de vulnerabilidades por um modelo de segurança cibernética de fronteira, ou uma empresa pode alegar que seu plano de negócios foi aprovado por um modelo apropriado”, escrevem os pesquisadores. "Como um usuário pode verificar essas alegações?"

Para funcionar, o sistema exige que os laboratórios de IA publiquem uma "impressão digital" de cada modelo que eles lançam que pode ser posteriormente correspondida a saídas específicas e verificadas criptograficamente. Fundamentalmente, as impressões digitais não revelam os pesos de um modelo, os números internos que definem como ele se comporta e quais fabricantes de modelos fechados, como Anthropic e OpenAI, mantêm em sigilo. Isso significa que os laboratórios podem publicar as impressões digitais sem abrir mão de seu ativo mais valioso, permitindo que o sistema também trabalhe com modelos comerciais. O sistema também foi projetado para ser leve, para que a verificação possa ser realizada em um dispositivo local.

Como parte do anúncio, os pesquisadores lançaram uma especificação técnica detalhada e um código de trabalho para vários elementos do sistema, que está disponível publicamente sob uma licença de código aberto no GitHub . A pesquisa no sistema está em andamento e não há planos para implantá-la no Anthropic ou em qualquer outro laboratório.

"Este post de pesquisa destina-se a compartilhar o progresso intermediário, e não uma agenda de pesquisa concluída", explicam os pesquisadores no post de anúncio. "Estamos compartilhando isso explicitamente com o objetivo de que outros olhem para o que fizemos, peguem e melhorem."

Quando você compra através de links em nossos artigos, podemos ganhar uma pequena comissão . Isso não afeta nossa independência editorial.

Russell Brandom cobre o setor de tecnologia desde 2012, com foco em políticas de plataforma e tecnologias emergentes. Anteriormente, trabalhou na The Verge e Rest of World, e escreveu para a Wired, The Awl e MIT's Technology Review. Ele pode ser contatado em [email protected] ou no Signal em 412-401-5489.

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/)

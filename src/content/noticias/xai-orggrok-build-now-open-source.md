---
title: "xai-org/grok-build, agora de código aberto"
date: 2026-07-15
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jul/15/grok-build/#atom-everything"
resumo: "xai-org/grok-build, agora de código aberto ( via ) A ferramenta Grok CLI da xAI enfrentou uma forte reação da comunidade ontem, quando ficou evidente que executar o comando em um diretório poderia carregar todo o diretório para os buckets do Google Cloud da xAI. Um usuário relatou executá-lo em seu diretório inicial e ver"
destaque: false
---

xai-org/grok-build, agora de código aberto ( via ) A ferramenta Grok CLI da xAI enfrentou uma forte reação da comunidade ontem, quando ficou evidente que executar o comando em um diretório poderia carregar todo o diretório para os buckets do Google Cloud da xAI. Um usuário relatou executá-lo em seu diretório inicial e vê-lo carregar "minhas chaves SSH, meu banco de dados do gerenciador de senhas, meus documentos, fotos, vídeos, tudo".

Não vi uma explicação oficial do motivo pelo qual estava fazendo isso, mas a xAI respondeu ao feedback ( Musk : "Como medida de precaução, todos os dados do usuário que foram enviados para a SpaceXAI antes agora serão completa e totalmente excluídos.") e desativaram o recurso.

Algumas horas atrás, eles também lançaram toda a base de código Grok Build sob uma licença Apache 2.0 - presumivelmente para tentar recuperar a confiança de seus usuários. De seu thread anunciando o novo repositório :

[...] Quando o upload de dados foi desativado, essa escolha foi respeitada. Na versão beta inicial, a retenção de dados era ativada por padrão para usuários que não eram ZDR. Com base no seu feedback, mudamos isso. Agora estamos indo mais longe para proteger a privacidade.

Com todos os dados retidos excluídos, o padrão de retenção desativado e um arnês de código aberto, estamos oferecendo privacidade completa ao usuário. Você também pode executar o Grok Build totalmente open-source e local-first com sua própria inferência.

Desativamos a retenção padrão para todos os usuários do Grok Build a partir de 12 de julho. Além disso, estamos excluindo todos os dados de codificação que foram retidos anteriormente, garantindo que as preferências de cada usuário sejam respeitadas. Com essas etapas, o Grok Build vai além de outros produtos de codificação importantes para proteger a privacidade do usuário.

É uma base de código bastante surpreendente! O Grok Build contém 844.530 linhas de Rust (calculadas usando minha ferramenta SLOCCount, que exclui espaços em branco e comentários), das quais apenas cerca de 3% parecem ser vendidas.

Até agora, o repositório tem apenas um único commit liberando o código, então, infelizmente, não temos nenhuma visão de como a base de código se desenvolveu ao longo do tempo.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jul/15/grok-build/#atom-everything)

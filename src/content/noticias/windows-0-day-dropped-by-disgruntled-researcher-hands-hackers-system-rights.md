---
title: "Vulnerabilidade de dia zero do Windows divulgada por pesquisador descontente dá aos hackers direitos de sistema"
date: 2026-11-13
categoria: "atualizacoes"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/11/windows-0-day-dropped-by-disgruntled-researcher-hands-hackers-system-rights/"
resumo: "O exploit \"SignDrop\" permite que usuários locais obtenham direitos de sistema com todos os privilégios."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2026/07/GettyImages-1237693734-1152x648-1783631068.jpg"
---

Nightmare Eclipse, o pseudônimo de um pesquisador que tem uma disputa contínua e muito pública com a Microsoft, divulgou mais um zero-day do Windows.

Na terça-feira, a Nightmare Eclipse divulgou o SignDrop, uma vulnerabilidade que concede aos usuários locais direitos completos de sistema em algumas versões do Windows. A vulnerabilidade está no Common Log File System, que a Microsoft descreve como um "serviço de registro de uso geral usado por clientes de software executados no modo de usuário ou no modo kernel". Ao forçar um processo privilegiado, como o Windows Defender, a abrir um contêiner CLFS, um invasor com direitos de usuário comuns pode se aproveitar da criação de arquivos privilegiados para elevar os privilégios para o nível de Sistema.

O ataque explora a interação do CLFS, do Windows Defender e das permissões de arquivos do Windows. O exploit usa o Windows Defender para abrir um arquivo de log criado por um usuário padrão chamando o ServerMpUpdateEngineSignature, uma função legítima do Defender para processar atualizações de assinaturas de antivírus.

Ao manipular os links simbólicos do Gerenciador de Objetos do Windows, o invasor faz com que o Defender abra o contêiner CLFS no contexto de segurança do mecanismo antimalware. Se um arquivo de autenticação associado estiver ausente, o CLFS o criará usando os privilégios de sistema do Defender. Como o CLFS atribui ao arquivo recém-criado a Lista de Controle de Acesso Discrecional do arquivo original, o invasor pode obter acesso a um Arquivo criado com privilégios de sistema, permitindo que a operação de criação de arquivos seja usada indevidamente como parte de um ataque de escalonamento de privilégios.

Ironicamente, a vulnerabilidade decorre de uma medida de segurança que a Microsoft introduziu em outubro de 2025 para impedir que invasores explorassem outras vulnerabilidades no CLFS.

"Se tudo estiver encadeado corretamente, curiosamente, essa mitigação de segurança legítima pode ser usada contra ela mesma e permitir uma elevação [de] privilégios", escreveu Nightmare Eclipse. "A Microsoft faz tudo corretamente aqui, mas a lógica permite o abuso."

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/11/windows-0-day-dropped-by-disgruntled-researcher-hands-hackers-system-rights/)

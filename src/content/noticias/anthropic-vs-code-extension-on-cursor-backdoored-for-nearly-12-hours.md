---
title: "Extensão de código Antrópico VS no Cursor backdoored por quase 12 horas"
date: 2026-10-30
categoria: "claude"
fonte: "Ars Technica"
fonteUrl: "https://arstechnica.com/security/2026/10/anthropic-vs-code-extension-on-cursor-backdoored-for-nearly-12-hours/"
resumo: "Ainda não se sabe como os invasores obtiveram acesso à conta Cursor verificada do Anthropic."
destaque: false
imagem: "https://cdn.arstechnica.net/wp-content/uploads/2022/05/caution-tape-1000x648.jpeg"
---

Uma extensão oficial para o modelo Claude da Anthropic foi backdoored e ameaçou até 5.000 máquinas de desenvolvedores, várias fontes relataram na sexta-feira. A Anthropic até agora ainda não alertou os clientes sobre o incidente.

O pacote comprometido era uma extensão do VS Code disponível no mercado da Cursor, fabricante de ferramentas de desenvolvimento assistidas por IA, informou a empresa na sexta-feira. A versão maliciosa, 2.1.313, posteriormente afetou "no máximo 5.000 usuários", presumivelmente quando eles a baixaram ou seus sistemas a buscaram e instalaram automaticamente. Antrópico empurrado versão 2.1.314 várias horas após o anterior versão ficou disponível no Cursor, de acordo com o pesquisador independente Kevin Beaumont. Tanto Beaumont quanto o CTO e co-fundador da empresa de segurança Phorian disseram que a versão 2.1.313 foi distribuída através da conta oficial da Anthropic no Cursor. Até agora, nem Cursor nem Antrópico explicaram como os atacantes ganharam o controle da conta.

"Foi um compromisso da cadeia de suprimentos em que o invasor obteve acesso ao canal de distribuição oficial", disse o CTO e co-fundador da Phorian, Luke Roberts, à Ars. “A versão maliciosa 2.1.313 foi postada na conta oficial da Anthropic, substituindo efetivamente a 2.1.312. As extensões são atualizadas automaticamente no Cursor por padrão, mas os usuários podem definir isso nas configurações. - Phorian tem mais detalhes aqui .

Cursor disse que a extensão maliciosa tenta instalar um backdoor SSH persistente usando uma chave SSH controlada pelo invasor, habilitando o serviço SSH local e abrindo um túnel SSH reverso. O código foi escrito para funcionar no Windows, macOS e Linux. Como as extensões do Cursor são executadas com as permissões do Ambiente de Desenvolvimento Integrado da ferramenta, a versão backdoored provavelmente ganharia acesso a arquivos locais, código-fonte e ferramentas de desenvolvedor depois de instalado.

---

**Fonte original:** [Ars Technica](https://arstechnica.com/security/2026/10/anthropic-vs-code-extension-on-cursor-backdoored-for-nearly-12-hours/)

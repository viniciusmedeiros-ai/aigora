---
title: "Versões de segurança do Datasette 1.0a39 e 0.65.4"
date: 2026-09-11
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Sep/11/datasette-security/"
resumo: "Versões de segurança do Datasette 1.0a39 e 0.65.4 . Hoje estamos lançando duas novas versões de patch de segurança do Datasette: 1.0a39 e 0.65.4 - uma para a série alfa atual e outra para a família estável 0.65.x."
destaque: false
---

Versões de segurança do Datasette 1.0a39 e 0.65.4 . Hoje estamos lançando duas novas versões de patch de segurança do Datasette: 1.0a39 e 0.65.4 - uma para a série alfa atual e outra para a família estável 0.65.x.

Estas são correções de segurança que você deve aplicar se estiver executando uma instância do Datasette na web pública - em particular se essa instância misturar tabelas públicas e privadas.

Após os problemas relatados por Sevban Dönmez , Alex Garcia e eu executamos uma extensa auditoria do Datasette usando Claude Fable 5.1, GPT-5.6 e GPT-6 Astra. Depois, passamos quase uma semana colaborando e analisando as correções.

Eles ajudaram a encontrar alguns insetos muito sutis. Estaremos incorporando auditorias de segurança por modelos de fronteira em todo o nosso trabalho de desenvolvimento daqui para frente.

Alex criou uma maneira de dividir o trabalho que achei extremamente produtiva:

Alex Garcia e eu trabalhamos juntos executando e respondendo à auditoria, trabalhando em um repositório privado compartilhado. Para a maioria dos problemas, dividimos o trabalho: um de nós criaria os testes automatizados destacando o problema e, em seguida, o outro implementaria a correção. Isso garantiu que dois humanos separados tivessem olhos em cada um dos problemas, além de nossos agentes de codificação executarem modelos diferentes.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Sep/11/datasette-security/)

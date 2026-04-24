---
title: "Uma atualização sobre os relatórios recentes de qualidade do Claude Code"
date: 2026-04-24
categoria: "claude"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Apr/24/recent-claude-code-quality-reports/#atom-everything"
resumo: "Uma atualização sobre os recentes relatórios de qualidade do Código Claude ( via ) Acontece que o alto volume de reclamações de que o Código Claude estava fornecendo resultados de pior qualidade nos últimos dois meses foi fundamentado em problemas reais."
destaque: false
---

Uma atualização sobre os recentes relatórios de qualidade do Código Claude ( via ) Acontece que o alto volume de reclamações de que o Código Claude estava fornecendo resultados de pior qualidade nos últimos dois meses foi fundamentado em problemas reais.

Os próprios modelos não eram culpados, mas três questões separadas no arnês do Código Claude causaram problemas complexos, mas materiais, que afetaram diretamente os usuários.

A autópsia de Anthropic descreve isso em detalhes. Este em particular se destacou para mim:

Em 26 de março, enviamos uma alteração para limpar o pensamento mais antigo de Claude de sessões que estavam ociosas há mais de uma hora, para reduzir a latência quando os usuários retomavam essas sessões. Um bug fez com que isso continuasse acontecendo a cada turno pelo resto da sessão, em vez de apenas uma vez, o que fez Claude parecer esquecido e repetitivo.

Frequentemente tenho sessões de Claude Code que deixo por uma hora (ou muitas vezes um dia ou mais) antes de retornar a elas. Agora eu tenho 11 desses (de acordo com ps aux  | grep 'claude ' ) e isso é depois de fechar dezenas mais no outro dia.

Estimo que passo mais tempo solicitando essas sessões "obsoletas" do que as sessões que comecei recentemente!

Se você está construindo sistemas agênticos, vale a pena ler este artigo em detalhes - os tipos de bugs que afetam os arreios são profundamente complicados, mesmo que você deixe de lado a natureza não determinística inerente dos próprios modelos.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Apr/24/recent-claude-code-quality-reports/#atom-everything)

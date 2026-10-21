---
title: "A versão de segurança do PHP de hoje e como estamos fortalecendo a segurança do PHP"
date: 2026-10-21
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Oct/21/php-security-release/"
resumo: "A versão de segurança do PHP de hoje, e como estamos fortalecendo a segurança do PHP ( via ) Se você estiver executando alguma coisa no PHP, é vital que você atualize - as atualizações de hoje (em toda a linha PHP 8.x) abordam duas falhas de execução remota de código, e houve exploits circulando desde a noite passada, graças a uma"
destaque: false
---

A versão de segurança do PHP de hoje, e como estamos fortalecendo a segurança do PHP ( via ) Se você estiver executando alguma coisa no PHP, é vital que você atualize - as atualizações de hoje (em toda a linha PHP 8.x) abordam duas falhas de execução remota de código, e houve exploits circulando desde ontem à noite, graças a um vazamento no processo de divulgação coordenada.

Na terça-feira, 20 de outubro, por volta das 15:00 UTC, os dois CVE IDs começaram a circular em fóruns online e mídias sociais. Eles vieram com um tempo de liberação errado e uma pontuação CVSS errada de 10,0 (a pontuação real é 9,2). Nenhum detalhe técnico vazou. Em resposta, o projeto PHP antecipou seu pré-anúncio e o publicou às 19:30 UTC . Ele também mudou o lançamento de 22 de outubro, 14:00 UTC, para 21 de outubro, 14:00 UTC [...]

Como resultado do vazamento e pré-anúncio por volta das 20:00 UTC, na Califórnia, uma das empresas de segurança que havia relatado os problemas publicou por engano um vídeo. Mostrou sua prova de conceito trabalhando contra vários alvos e revelou alguns detalhes adicionais, embora limitados, sobre as vulnerabilidades. Cópias do vídeo excluído começaram a circular nas redes sociais logo depois. O vídeo contribuiu para o desenvolvimento acelerado de vários PoCs (prova de exploração de conceitos), que aumentaram a circulação em 21 de outubro.

Este artigo da equipe que descobriu a vulnerabilidade original inclui um cronograma mais detalhado da divulgação responsável pretendida original:

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Oct/21/php-security-release/)

---
title: "Ajuda do OpenAI: modo de bloqueio"
date: 2026-06-05
categoria: "atualizacoes"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jun/5/openai-help-lockdown-mode/#atom-everything"
resumo: "Ajuda do OpenAI: Modo de Bloqueio. A OpenAI provocou isso pela primeira vez em fevereiro , mas agora está disponível e \"disponível para contas pessoais elegíveis, incluindo contas gratuitas, Go, Plus e Pro, e contas ChatGPT Business de autoatendimento\":"
destaque: false
---

Ajuda do OpenAI: Modo de Bloqueio. A OpenAI provocou isso pela primeira vez em fevereiro , mas agora está disponível e "disponível para contas pessoais elegíveis, incluindo contas gratuitas, Go, Plus e Pro, e contas ChatGPT Business de autoatendimento":

O Modo de Bloqueio foi projetado para ajudar a evitar o estágio final de exfiltração de dados de um ataque de injeção imediata, limitando as solicitações de rede de saída que podem transferir dados confidenciais para um invasor. O Modo de Bloqueio não impede que injeções imediatas apareçam nos processos de ChatGPT de conteúdo. Por exemplo, uma injeção de prompt pode aparecer em conteúdo da web em cache ou em um arquivo carregado, e pode ainda afetam o comportamento ou a precisão de uma resposta.

A Trifeta Letal ocorre quando um sistema LLM tem acesso a todos os três tipos de acesso a dados privados, exposição a conteúdo não confiável e uma maneira de roubar dados e transmiti-los de volta ao invasor.

A única maneira de resolver a trifeta é cortar uma das três pernas e, de longe, a perna mais fácil de restringir sem tornar seus sistemas LLM muito menos úteis são os vetores de exfiltração para roubar dados.

Parece-me que o modo lockdown ataca diretamente essa perna, usando mecanismos que são deterministas e, crucialmente, não são avaliados por sistemas de IA que podem ser subvertidos por ataques suficientemente desonestos.

A existência do modo de bloqueio, no entanto, implica que o ChatGPT, em suas configurações padrão, não fornece proteção robusta contra ataques de exfiltração de dados suficientemente determinados!

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jun/5/openai-help-lockdown-mode/#atom-everything)

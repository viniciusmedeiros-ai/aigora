---
title: "MosaicLeaks: Seu agente de pesquisa consegue manter um segredo?"
date: 2026-06-18
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/ServiceNow/mosaicleaks"
resumo: "Os agentes de pesquisa profunda combinam cada vez mais documentos locais privados com ferramentas externas, como a recuperação da web, criando um risco de privacidade: as consultas externas de um agente podem vazar informações confidenciais. O MosaicLeaks propõe uma nova tarefa de pesquisa profunda com perguntas multi-hop que intercalam informações públicas e privadas"
destaque: false
---

Os agentes de pesquisa profunda combinam cada vez mais documentos locais privados com ferramentas externas, como a recuperação da web, criando um risco de privacidade: as consultas externas de um agente podem vazar informações confidenciais. O MosaicLeaks propõe uma nova tarefa de pesquisa profunda com perguntas multi-hop que intercalam informações públicas e privadas. Em todos os modelos que testamos, os agentes frequentemente vazaram informações privadas e treinamento só porque o desempenho da tarefa piorou. Propomos um método de treinamento de RL com reconhecimento de vazamento de mosaico, o Privacy-Aware Deep Research (PA-DR) , que aumenta o sucesso estrito da cadeia (a parcela de cadeias em que cada salto é respondido corretamente) de 48,7% para 58,7%, reduzindo o vazamento de resposta/informação completa de 34,0% para 9,9%.

Um agente de pesquisa de uma empresa de saúde está trabalhando em uma pergunta de rotina e, ao longo do caminho, dispara um punhado de pesquisas na web de aparência comum. Um faz referência a um marco de migração para a nuvem, um a uma divulgação de segurança de janeiro de 2024, um restringe qual fornecedor foi atingido. Nenhuma consulta necessariamente revela todo o segredo. Mas qualquer pessoa que esteja observando o tráfego de saída do agente pode remontar o fragmentos: a MediConn havia migrado 70% de sua infraestrutura para a nuvem até janeiro de 2025, fato que residia apenas em documentos privados. Este é o efeito mosaico, e é o modo de falha no centro do MosaicLeaks.

O MosaicLeaks trata essas consultas da web como o canal de vazamento: o adversário nunca vê os documentos privados ou o raciocínio do agente, apenas o log de consulta cumulativo e tenta inferir informações da empresa privada a partir dele.

Medimos o vazamento de três maneiras, dependendo do que o adversário pode inferir das consultas observadas:

Esses três representam níveis crescentes de preocupação. O vazamento de intenção revela o que o agente está investigando . Vazamento de resposta significa que o registro de consulta contém o suficiente para responder a uma pergunta privada que alguém já tem em mãos. O vazamento de informações completas é o caso mais forte: o observador pode descobrir e declarar fatos privados sem que lhe digam o que procurar.

Como o efeito mosaico impulsiona as três medidas de vazamento do MosaicLeaks: Intenção (prever as perguntas da pesquisa), Resposta (responder a perguntas dadas sobre os documentos privados) e Informação Completa (declarar reivindicações privadas comprovadamente verdadeiras). Aqui, o agente pesquisa duas vezes sobre o crescimento do tráfego da Lee's Market em 2020, vazando sua intenção e, em seguida, emite uma terceira consulta para responder a um acompanhamento. Cada consulta parece benigna sozinhos, mas vistos juntos eles deixaram um observador deduzir que a resposta era 15%, e assim afirmam que o tráfego online de Lee cresceu 15% em 2020.

O MosaicLeaks contém 1.001 cadeias de pesquisa multi-hop sobre documentos de empresas locais e um corpus web controlado. O objetivo é criar tarefas com alta probabilidade de induzir vazamento de privacidade de documentos corporativos, mas que ainda podem ser resolvidas sem vazamento.

Cada cadeia intercala subquestões locais e da web. A resposta a uma subquestão se torna uma entidade de ponte na próxima, então o agente deve recuperar informações locais antes que possa formar a próxima consulta web útil. Os documentos locais vêm de tarefas corporativas no estilo DRBench e os documentos da web vêm do BrowseComp-Plus. A divisão final contém 559 cadeias de treinamento, 98 cadeias de validação e 344 realizadas - cadeias de teste da empresa.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/ServiceNow/mosaicleaks)

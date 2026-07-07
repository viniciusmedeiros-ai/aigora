---
title: "O CEO da Vercel, Guillermo Rauch, na luta para separar modelos de agentes"
date: 2026-07-06
categoria: "agents"
fonte: "TechCrunch AI"
fonteUrl: "https://techcrunch.com/2026/07/06/vercel-ceo-guillermo-rauch-on-the-fight-to-split-off-models-from-agents/"
resumo: "\"A realidade é que, quando você está otimizando para a produção, você começa a olhar para um preço/desempenho\", disse Guillermo Rauch ao TechCrunch."
destaque: false
---

Conhecida por sua infraestrutura em nuvem que permite aos desenvolvedores implantar agentes sem gerenciar servidores, a Vercel silenciosamente se tornou uma das empresas mais centrais em software de IA. Atualmente, a empresa vê 6 milhões de implantações por dia, metade delas acionadas por agentes de codificação, e mais de 1 trilhão de tokens fluem diariamente pelo gateway de IA da empresa.

Após a conferência ShipNYC da empresa na semana passada, nos reunimos com o CEO da Vercel, Guillermo Rauch, para sua opinião sobre este momento em IA e como empresas de plataforma como a Vercel acabam competindo com grandes laboratórios. Aqui está uma transcrição levemente editada.

Parece que há uma energia diferente na comunidade este ano, menos programas-piloto e mais foco em como fazer as coisas funcionarem bem na prática. Tenho certeza de que você já viu muito isso com os clientes, mas estou curioso para saber como foi essa jornada dentro da Vercel.

O ano passado foi sobre prototipagem. O céu é o limite, liberte os agentes, todos podem construir e assim por diante. Fizemos isso e aprendemos muito porque tínhamos centenas de agentes desenvolvidos e implantados organicamente dentro da empresa, e então você começou a entrar nas realidades dos agentes na produção e em alguns dos desafios.

A maior lição para mim foram os casos de uso de home-run, os dois aplicativos matadores de agentes. Um é o agente de codificação, é claro. Isso está impulsionando muito a utilização de tokens no mundo, mas quando você produz tanto software, precisa de um lugar para colocá-lo. O segundo aplicativo matador de agentes é o agente interno que ajuda você a administrar a empresa. O desafio é: como você acessa os dados com segurança? Como você audita o que o agente está fazendo? Como você obtém uma trilha de todas as chamadas de ferramentas e controles de acesso que o agente teve que incorrer para realizar um trabalho?

Para resolver isso, criamos essa estrutura chamada Eve, onde você pode definir as instruções e habilidades de um agente em linguagem natural. E outra ferramenta é o Vercel Sandbox, onde você coloca o agente em uma pequena gaiola. Ele ainda pode ter a liberdade de expressar sua inteligência, mas então você pode aplicar a política sobre quais dados ele pode acessar e quais dados podem sair da área restrita.

Para a sandbox, a maior vantagem é o controle de dados. Um risco real de IA que eu sempre penso é que, quando você recebe um IDE de codificação como Devin ou Cursor, se você estiver na configuração errada, eles podem treinar em toda a sua base de código. Lembro-me de conversar com o presidente da Airbus sobre isso. Você tem décadas de riqueza de código C++ muito específico para engenharia aeroespacial. Alguém entra e instala a ferramenta de desenvolvedor errada e boom, todo o código vai para a nuvem para treinamento.

Estou curioso para saber mais sobre esse segundo caso de uso assassino. Todos nós sabemos sobre agentes de codificação, mas como é um agente corporativo interno na prática?

---

**Fonte original:** [TechCrunch AI](https://techcrunch.com/2026/07/06/vercel-ceo-guillermo-rauch-on-the-fight-to-split-off-models-from-agents/)

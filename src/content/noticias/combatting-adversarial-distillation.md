---
title: "Combate à destilação adversária"
date: 2026-11-20
categoria: "atualizacoes"
fonte: "OpenAI"
fonteUrl: "https://openai.com/index/combatting-adversarial-distillation"
resumo: "A abordagem em camadas da OpenAI para a destilação adversária combina treinamento de modelos, proteções, detecção e aplicação para proteger contra a extração de capacidades."
destaque: false
---

À medida que os modelos de IA de ponta se tornam mais capazes, as proteções desempenham um papel cada vez mais importante na forma como eles podem ser usados de maneira responsável. A destilação adversária abre caminho para que agentes mal-intencionados reproduzam essas capacidades sem as proteções adequadas. Um agente pode usar os resultados de um modelo de ponta sem autorização para treinar outro modelo com capacidades semelhantes e, em seguida, implementá-lo sem medidas de segurança comparáveis. proteções. Por exemplo, um adversário pode extrair as capacidades cibernéticas de um modelo e usar o modelo resultante para ajudar a realizar ciberataques nos quais o modelo original teria se recusado a colaborar ou que suas proteções teriam bloqueado.

Estamos compartilhando como a OpenAI detecta e interrompe a destilação adversária, como fortalecemos as proteções para o raciocínio protegido dos nossos modelos e o que aprendemos que pode ajudar a fortalecer as defesas em todo o setor.

Nossa abordagem de destilação adversária combina testes adversários, treinamento de modelos, classificadores e proteções no nível da API com investigações sobre tentativas coordenadas de extrair as capacidades do modelo. Essas proteções atualizadas estão mais alinhadas com as que usamos para biologia e cibersegurança.

Damos especial ênfase a impedir que os invasores extraiam o raciocínio protegido dos nossos modelos: as etapas intermediárias que um modelo gera internamente enquanto trabalha para chegar a uma resposta, conhecidas como sua cadeia de pensamento. Esses vestígios podem conter informações que a resposta final deixa de fora, tornando-os dados de treinamento especialmente valiosos para outro modelo.

R eforçamos nossas defesas contra a extração de raciocínios protegidos no GPT‑6.2 Astra e no GPT‑6.2 Sol. Em uma avaliação adaptativa interna usando um red teaming automatizado robusto, testamos se os invasores conseguiriam recuperar o raciocínio protegido que o modelo havia gerado ao responder a um prompt anterior. A taxa média de sucesso dos ataques caiu de 54,0% contra o GPT‑6 Astra com suas proteções originais para 0,2% em relação ao GPT‑6.2 Astra com suas proteções atualizadas.

A destilação é uma técnica comum de aprendizado de máquina em que um modelo aprende com os dados produzidos por outro. Por exemplo, um modelo pode aprender com as respostas de outro modelo, com seu raciocínio ou com seus julgamentos sobre quais respostas são melhores e por quê. Além das preocupações com a propriedade intelectual, a destilação não autorizada representa sérios riscos à segurança. Por meio da destilação adversária, um segundo modelo pode aprender capacidades de ponta avançadas sem herdar as proteções que regem como o modelo original pode usá-las.

A preocupação é especialmente evidente em domínios de uso duplo, como a cibersegurança e a biologia. Um modelo que ajuda os defensores a encontrar vulnerabilidades em softwares também pode ajudar um invasor a explorá-las; um modelo que auxilia na pesquisa biológica também pode ajudar alguém a desenvolver um patógeno prejudicial. Se tais capacidades fossem transferidas para um modelo com proteções mais fracas, ele poderia fornecer assistência que o modelo original teria recusado, ou que as salvaguardas originais teriam bloqueado.

Nossos modelos ajudam os usuários com tarefas de programação e de cibersegurança defensiva. Um segundo modelo treinado em muitos desses resultados benignos pode aprender habilidades que também se aplicam a tarefas ofensivas de cibersegurança. Para entender melhor isso, estudamos como a destilação, especialmente quando envolve traços de raciocínio, pode transferir capacidades cibernéticas de risco.

---

**Fonte original:** [OpenAI](https://openai.com/index/combatting-adversarial-distillation)

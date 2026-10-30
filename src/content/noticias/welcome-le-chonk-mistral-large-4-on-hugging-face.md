---
title: "Bem-vindo Le Chonk: Mistral Large 4 no Hugging Face"
date: 2026-10-29
categoria: "novas-ias"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/mistral-large4"
resumo: "Mistral Large 4 (também conhecido como Le Chonk) é um modelo multimodal, multilíngue, Mixture-of-Experts (MoE) da Mistral. Leva texto e imagens como entrada e gera texto. Tem cerca de 1T total, 49B parâmetro ativo e uma janela de contexto de 1M tokens ."
destaque: false
---

Mistral Large 4 (também conhecido como Le Chonk) é um modelo multimodal, multilíngue, Mixture-of-Experts (MoE) da Mistral. Leva texto e imagens como entrada e gera texto. Tem cerca de 1T total, 49B parâmetro ativo e uma janela de contexto de 1M tokens .

Há também GGUFs criados por Unsloth e pela equipe llama.cpp. É distribuído sob a Licença de Peso Aberto do Ecossistema Mistral (um derivado do MIT que estabelece limitações para ofertas de modelo como serviço).

O Mistral Large 4 é particularmente forte para segurança cibernética, agentes de codificação e multimodalidade. Neste post, veremos como o modelo funciona, suas capacidades, arquitetura e muito mais!

Mistral Large 4 combina um grande grupo de especialistas com atenção esparsa e um codificador de visão Pixtral. O modelo de linguagem seleciona um pequeno grupo de especialistas para cada token, enquanto seu indexador de atenção seleciona quais posições de token anteriores atender. Estas são duas formas diferentes de esparsidade, onde uma seleciona redes de alimentação direta, a outra seleciona posições de contexto.

O Mistral Large 4 pontua 82% no teste Artificial Analysis Cyber Index, que pede a um modelo para reproduzir uma vulnerabilidade real em software de código aberto e, em seguida, corrigir o software. Mistral relata que vários modelos de fronteira fechada pontuam perto de zero no mesmo teste porque se recusam a tentar o trabalho. Isso é super importante para os defensores, porque corrigir uma vulnerabilidade geralmente requer reproduzir a vulnerabilidade. Nos testes internos do Mistral, o Mistral Large 4 também foi útil para análise de malware, priorização de vulnerabilidades e criação de regras de detecção, para as quais o modelo não foi explicitamente treinado.

Mistral posiciona principalmente o modelo para o trabalho de segurança defensiva. A pesquisa de vulnerabilidades e a resposta a incidentes geralmente aparecem como ataques na entrada do modelo, de modo que os filtros de código fechado podem bloqueá-los. Uma equipe que depende de uma API também pode perder o acesso no meio de um incidente. Fundamentalmente, os modelos de peso aberto colocam a política de uso e a implantação sob o controle do usuário. Dito isso, o modelo ainda recusa solicitações prejudiciais: em solicitações cibernéticas do JailbreakBench, StrongREJECT e AgentHarm, sua taxa média de recusa é maior do que qualquer outro modelo de peso aberto.

Para os construtores de comunidades, um modelo de peso aberto como o Mistral Large 4 desbloqueia uma série de casos de uso posteriores. Você pode criar seu próprio sistema cibernético em torno de sua base de código, registros de falhas e amostras de malware. Por exemplo, com o TRL, você pode ajustar modelos menores do Mistral Large 4 traces corrigindo sua base de código. Na verdade, tarefas de reproduzir-então-patch usam uma recompensa verificável, então ela se encaixa com RL ambientes que poderiam ser usados para promover modelos de segurança RL menores. Os pesos abertos também permitem que os pesquisadores meçam o comportamento de recusa do modelo diretamente, em vez de confiar na descrição do profissional de saúde.

Em suma, recursos cibernéticos como o ML4 em campo aberto são um grande impulso para a comunidade.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/mistral-large4)

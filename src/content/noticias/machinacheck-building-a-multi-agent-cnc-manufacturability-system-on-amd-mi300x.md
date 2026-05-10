---
title: "MachinaCheck: Construindo um sistema de manufaturabilidade CNC multiagente no AMD MI300X"
date: 2026-05-10
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/lablab-ai-amd-developer-hackathon/machinacheck"
resumo: "Entre em qualquer pequena oficina de máquinas CNC e pergunte ao gerente como ele decide se aceita um trabalho do cliente."
destaque: false
---

Entre em qualquer pequena oficina de máquinas CNC e pergunte ao gerente como ele decide se aceita um trabalho do cliente.

A resposta é quase sempre a mesma: eles imprimem o desenho, leem todas as dimensões à mão, andam pela loja verificando quais ferramentas estão disponíveis, estimam se suas máquinas podem manter as tolerâncias necessárias e escrevem notas em uma prancheta. Todo o processo leva de 30 a 60 minutos por desenho. Para uma loja movimentada que recebe de 10 a 20 RFQs por semana, isso equivale a 5 a 20 horas de tempo hábil do gerente gastos apenas na análise de viabilidade.

Às vezes eles erram. Eles aceitam um trabalho, iniciam a produção e descobrem no meio do caminho que não têm a torneira certa ou que sua fábrica não consegue manter a tolerância em um recurso crítico. A peça é descartada. O cliente está insatisfeito. O tempo da máquina foi perdido.

O MachinaCheck é um sistema de IA multiagente. Você carrega um arquivo STEP — o formato CAD padrão que os clientes enviam para as oficinas mecânicas — junto com três entradas simples: tipo de material, tolerância necessária e quaisquer especificações de thread. Trinta segundos depois, você tem um relatório completo de manufaturabilidade informando exatamente se você pode fazer a peça, quais ferramentas você precisa, o que está faltando e quais ações tomar antes de iniciar a produção.

Antes de explicar a arquitetura, este ponto merece sua própria seção porque não é apenas uma escolha técnica — é um requisito de negócios.

Clientes de manufatura assinam NDAs. Seus arquivos STEP contêm geometria proprietária que representa anos de trabalho de engenharia e milhões de dólares em P&amp;D. O padrão de furo em um dispositivo médico ou a geometria de bolso em um componente aeroespacial é propriedade intelectual confidencial.

Enviar esses dados para OpenAI, Anthropic ou qualquer endpoint de API comercial é uma violação de confidencialidade. Ponto final.

O AMD Instinct MI300X muda completamente essa equação. Com 192 GB de VRAM HBM3 e 5,3 TB/s de largura de banda de memória, executamos o Qwen 2.5 7B Instruct totalmente no local. Nenhum dado sai da infraestrutura da loja. Nenhuma geometria de ETAPA é transmitida para um servidor de terceiros. O IP do cliente permanece onde pertence.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/lablab-ai-amd-developer-hackathon/machinacheck)

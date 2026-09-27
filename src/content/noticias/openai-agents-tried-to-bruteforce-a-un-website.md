---
title: "Agentes da OpenAI tentaram ‘forçar brutalmente’ um site da ONU"
date: 2026-09-27
categoria: "agents"
fonte: "The Verge AI"
fonteUrl: "https://www.theverge.com/ai-artificial-intelligence/1001178/openai-agents-bruteforce-un-website"
resumo: "O logotipo das Nações Unidas em um portão do lado de fora da sede da ONU em Nova York. | AFP via Getty Images	

O pesquisador de segurança Rowan Howard-Jones diz que os agentes da OpenAI examinaram o site de estatísticas da Conferência das Nações Unidas sobre Comércio e Desenvolvimento (UNCTAD) mais de 16.000 vezes entre abril e junho. Enquanto os incidentes"
destaque: false
imagem: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/09/gettyimages-2236154957.jpg?quality=90&#038;strip=all&#038;crop=0,0,100,100"
---

é o editor de fim de semana do Verge. Ele cobre a indústria de tecnologia há mais de 18 anos e sabe uma coisa ou duas sobre sintetizadores.

O pesquisador de segurança Rowan Howard-Jones diz que os agentes da OpenAI examinaram o site de estatísticas da Conferência das Nações Unidas sobre Comércio e Desenvolvimento (UNCTAD) mais de 16.000 vezes entre abril e junho . Embora o incidente não chegue ao nível do hack Hugging Face, ou dos recentes ataques a sites do governo dos EUA, é mais um exemplo preocupante de agentes de IA saindo dos limites normais para realizar uma tarefa.

De acordo com Howard-Jones, os agentes provavelmente foram encarregados de recuperar dados publicamente disponíveis relacionados ao Índice de Capacidades Produtivas (PCI) por meio da API UNCTADstat. No entanto, os agentes não pareciam ter acesso direto à API e eram limitados em sua capacidade de extrair dados da UNCTADstat devido a restrições em suas ferramentas HTTP.

Os agentes acabaram descobrindo uma maneira de contornar suas limitações e começar a extrair dados do site, mas ainda encontraram alguns erros. Neste ponto, a IA passou de criativa para enganosa. Acreditando que os erros se deviam ao fato de suas solicitações serem capturadas por um filtro inexistente, passou a mascarar seu comportamento. Eventualmente, percebeu que poderia sequestrar o jogo XSS do Google (um script de cross-site ferramenta de aprendizagem) para atingir seus objetivos. Os agentes recorreram a táticas cada vez mais agressivas para ter acesso aos dados da ONU.

Siga os tópicos e autores desta história para ver mais informações como esta no feed da sua página inicial personalizada e para receber atualizações por e-mail.

---

**Fonte original:** [The Verge AI](https://www.theverge.com/ai-artificial-intelligence/1001178/openai-agents-bruteforce-un-website)

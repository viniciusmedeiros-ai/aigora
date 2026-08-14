---
title: "Registre, treine e implante em um só lugar com Strands Agents, LeRobot e Hugging Face Storage Buckets"
date: 2026-08-13
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/amazon/strands-lerobot-streaming-data-loop"
resumo: "Um passo a passo do loop de dados de streaming no Strands Robots, um loop de agente que registra demonstrações de robôs, treina-as lendo diretamente do Hub e implanta a política de volta ao hardware, com o conjunto de dados no mesmo formato LeRobot em disco durante todo o processo."
destaque: false
---

Um passo a passo do loop de dados de streaming no Strands Robots, um loop de agente que registra demonstrações de robôs, treina-as lendo diretamente do Hub e implanta a política de volta ao hardware, com o conjunto de dados no mesmo formato LeRobot em disco durante todo o processo.

Você tem um agente que já pode gravar uma demonstração e enviá-la para o Hugging Face Hub . Agora você deseja executar esse loop continuamente: coletar episódios ao longo do dia, treinar uma política sobre o conjunto de dados em crescimento, implantá-lo e recuperar o próximo lote para melhorá-lo. Execute esse loop uma vez e cada peça funcionará. Execute-o todos os dias e você começa a pagar pelas mesmas transferências de bytes repetidamente. O as gravações que você carrega continuam crescendo, cada execução de treinamento copia todo o conjunto de dados para as GPUs antes de começar, e cada novo ponto de verificação é enviado enquanto o próximo lote de gravações volta.

O primeiro post desta série apresentou o Strands Robots , um SDK de código aberto da AWS ( Apache 2.0 ) que expõe abstrações de robôs, simulação e a pilha LeRobot como AgentTools que você compõe em um único agente Strands. Abrangeu a fábrica Robot(), registrando uma demonstração em simulação, executando uma política e implantando o mesmo código de agente em um SO-101 físico. Essa fábrica resolve um nome contra um registro de armas, humanóides, bases móveis e mãos, de modo que o SO-100 usado ao longo deste post é uma das muitas modalidades suportadas. O catálogo de robôs lista todos os robôs que a fábrica conhece. O formato de conjunto de dados da LeRobot já é usado por mais de 90.000 conjuntos de dados e modelos no Hub de mais de 8.000 editores (LeRobot Project Pulse ). Uma gravação do Strands Robots é mais uma delas, então qualquer coisa construída para ler dados LeRobot pode lê-los sem conversão. Se você é novo no Strands Robots, comece por aí; este post assume essa configuração.

Esse post seguiu o loop do agente em uma direção, de um conjunto de dados do Hub para um robô físico. Este segue os dados de outra forma, desde o primeiro frame gravado até a política implantada, através do Hugging Face Storage Buckets - um tipo de repositório de armazenamento de objetos mutável, não versionado e com suporte Xet, anunciado em março de 2026 . Um bucket fica ao lado de seus repositórios de conjunto de dados no mesmo namespace hf:// e usa a CLI de hf que você já tem, então ela se torna a camada de trabalho que mantém seus dados entre o dia em que você os registra e o dia em que você treina neles.

Alguém tem que decidir quais episódios manter, quando a cena se afastou o suficiente para regravar, se o lote de hoje é suficiente para treinar e qual ponto de verificação substitui o do braço. Cada uma dessas decisões aparece dezenas de vezes ao longo de uma campanha de coleta, e cada uma precisa dar uma olhada no que voltou antes que o próximo comando saia. Esse é o trabalho de um agente. Este post caminha você através do loop de dados dentro de um único agente: registre uma demonstração em um Storage Bucket, armazene-a para que cada sincronização carregue apenas os bytes que foram alterados, treine transmitindo o conjunto de dados diretamente do Hub em vez de baixá-lo e implante o checkpoint de volta ao hardware com uma alteração de argumento de palavra-chave. O companheiro de corrida para este post vive em exemplos/cadernos/05_streaming_data_loop.ipynb .

Onde a primeira postagem registrou um conjunto de dados e o enviou para o Hub, o agente que você constrói aqui registra um LeRobotDataset a partir de um prompt de linguagem natural, sincroniza-o em um Storage Bucket e transmite o mesmo conjunto de dados quadro a quadro, decodificando o vídeo da câmera em tempo real, sem cópia local. Você o leu de volta no mesmo processo que o escreveu: o mesmo Robô Strands Robots () que registrou o conjunto de dados o transmite. Seu checkpoint treinado é implantado no mesmo Robot() com uma alteração de argumento de palavra-chave, e as demonstrações que ele registra no hardware retornam ao mesmo bucket.

Figura 1. Os quatro estágios compartilham um back-end. Robô("so100") registra um LeRobotDataset através do DatasetRecorder compartilhado; sync_dataset_to_bucket(...) o sincroniza em um Storage Bucket; stream_dataset(...) o lê de volta no Hub sem download completo; e o checkpoint treinado é implantado no mesmo Robô com mode="real" . O formato em disco permanece exatamente como LeRobot o escreveu.

Como um Robô() registra um conjunto de dados e o lê de volta, coletar dados e treiná-lo são dois métodos em um objeto em um back-end. O agente decide executar um episódio e invoca uma ferramenta; o lançamento então prossegue na frequência de controle do robô até que o episódio termine, com a política treinada produzindo cada ação. Todo o loop, em um punhado de linhas:

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/amazon/strands-lerobot-streaming-data-loop)

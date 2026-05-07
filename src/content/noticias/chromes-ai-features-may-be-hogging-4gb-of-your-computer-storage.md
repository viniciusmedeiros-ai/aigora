---
title: "Os recursos de IA do Chrome podem estar ocupando 4 GB do armazenamento do seu computador"
date: 2026-05-06
categoria: "novas-ias"
fonte: "The Verge AI"
fonteUrl: "https://www.theverge.com/tech/924933/google-chrome-4gb-gemini-nano-ai-features"
resumo: "O Google Chrome pode estar ocupando mais espaço de armazenamento do que o esperado graças a um grande arquivo de modelo de IA no dispositivo que, em alguns casos, está sendo baixado automaticamente para as pastas do sistema do navegador. Os usuários que notaram quedas inexplicáveis em seu armazenamento de dispositivo de desktop disponível agora estão descobrindo"
destaque: false
imagem: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24418650/STK114_Google_Chrome_01.jpg?quality=90&#038;strip=all&#038;crop=0,0,100,100"
---

é um escritor de notícias focado em indústrias criativas, computação e cultura da internet. Jess começou sua carreira na TechRadar, cobrindo notícias e análises de hardware.

O Google Chrome pode estar ocupando mais espaço de armazenamento do que o esperado graças a um grande arquivo de modelo de IA no dispositivo que, em alguns casos, está sendo baixado automaticamente para as pastas do sistema do navegador. Os usuários que notaram quedas inexplicáveis no armazenamento de dispositivos de desktop disponíveis agora estão descobrindo que o Chrome está instalando um arquivo weights.bin de 4 GB dentro do diretório do navegador quando determinada IA recursos estão ativados.

O arquivo weights.bin em questão está conectado ao modelo Gemini Nano AI do Google, que alimenta ferramentas de IA do Chrome, como detecção de fraudes, assistência de gravação, preenchimento automático e recursos de sugestão. Como o modelo Gemini Nano é projetado para ser executado localmente, ele precisa usar parâmetros de treinamento armazenados em seu dispositivo, em vez de extrair informações de modelos baseados em nuvem. Isso oferece alguns benefícios de privacidade, mas não é ideal se você estiver com pouco armazenamento — especialmente porque os usuários não estão sendo claramente notificados sobre os requisitos de tamanho de arquivo.

Se você tiver determinados recursos do Gemini AI ativados no Chrome, é provável que o arquivo de 4 GB já tenha sido baixado para o seu sistema. Você pode verificar abrindo suas pastas de dados do Chrome e inspecionando o diretório OptGuideOnDeviceModel para o arquivo weights.bin.

No entanto, você não pode simplesmente excluir isso para liberar espaço — se você ainda tiver recursos de IA ativados, o Chrome poderá baixá-lo novamente no futuro. Isso significa que você precisará acessar Configurações&gt;Sistema e desativar a opção IA no dispositivo para remover esses recursos e impedir que o arquivo volte.

O Google especifica que "o tamanho exato do Gemini Nano pode variar à medida que o navegador atualiza o modelo", mas essas informações são apresentadas em um longo guia para recursos de IA integrados, e não no ponto de habilitá-los no Chrome. Se o Google tivesse tornado os requisitos de armazenamento mais claros para os usuários — ou fornecido uma opção para alimentar os recursos do Chrome AI com modelos baseados em nuvem — essa confusão poderia ter sido evitados.

"Oferecemos o Gemini Nano para Chrome desde 2024 como um modelo leve no dispositivo", disse o porta-voz do Google, Scott Westover, ao The Verge . “Ele potencializa importantes recursos de segurança, como detecção de fraudes e APIs de desenvolvedor, sem enviar seus dados para a nuvem. Embora isso exija algum espaço local na área de trabalho para ser executado, o modelo será desinstalado automaticamente se o dispositivo estiver com poucos recursos. Em Em fevereiro, começamos a implementar a capacidade de os usuários desativarem e removerem facilmente o modelo diretamente nas configurações do Chrome. Uma vez desativado, o modelo não será mais baixado ou atualizado. Mais detalhes em nosso artigo da Central de Ajuda."

Siga os tópicos e autores desta história para ver mais informações como esta no feed da sua página inicial personalizada e para receber atualizações por e-mail.

---

**Fonte original:** [The Verge AI](https://www.theverge.com/tech/924933/google-chrome-4gb-gemini-nano-ai-features)

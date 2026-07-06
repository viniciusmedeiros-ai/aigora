---
title: "🤗 Kernels: Principais Atualizações"
date: 2026-07-06
categoria: "atualizacoes"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/revamped-kernels"
resumo: "Em nosso post anterior (From Zero to GPU) , apresentamos o projeto 🤗 Kernels, que visa padronizar como os kernels personalizados são empacotados, distribuídos e consumidos. Queremos que o projeto seja tranquilo e seguro, tornando-o o mais amigável possível para o Hub."
destaque: false
---

Em nosso post anterior (From Zero to GPU) , apresentamos o projeto 🤗 Kernels, que visa padronizar como os kernels personalizados são empacotados, distribuídos e consumidos. Queremos que o projeto seja tranquilo e seguro, tornando-o o mais amigável possível para o Hub.

Nos últimos meses, trabalhamos para atingir esse objetivo. No processo, também redesenhamos quase completamente o projeto. Este post resumirá as principais atualizações que enviamos e o que está por vir.

Introduzimos um novo tipo de repositório no Hub chamado "kernel" . Isso nos permite atender aos usuários com especificidades relacionadas à computação. Por exemplo, um usuário pode ter uma noção de quais aceleradores, sistemas operacionais e versões de back-end são suportados para um determinado kernel:

Pode-se navegar por todos os kernels disponíveis no Hub aqui: https://huggingface.co/kernels .

Tornar esses núcleos cidadãos de primeira classe do Hub também beneficia o ecossistema de IA. Os usuários agora podem ver as tendências em kernels, modelos e aplicativos que os usam. Os kernels se tornam mais detectáveis para os usuários.

Os kernels executam código nativo com os mesmos privilégios do processo Python que os carrega, portanto, um kernel malicioso pode causar danos reais. Portanto, a segurança sempre foi de extrema importância para o projeto Kernels.

É por isso que nos concentramos desde o início na reprodutibilidade: você deve ser capaz de recompilar um kernel sozinho e verificar se ele corresponde à fonte disponível publicamente. Usamos o Nix para tornar isso possível, pois ele mantém as construções puras por meio da avaliação hermética da receita de construção e de uma caixa de areia fortemente isolada. Melhoramos ainda mais a proveniência incorporando o código-fonte Git sha1 no próprio kernel.

Nos últimos meses, adicionamos camadas adicionais de defesa: editores de kernel confiáveis e assinatura de código.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/revamped-kernels)

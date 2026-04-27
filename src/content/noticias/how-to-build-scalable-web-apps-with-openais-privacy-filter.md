---
title: "Como criar aplicativos web escaláveis com o Filtro de Privacidade da OpenAI"
date: 2026-04-27
categoria: "atualizacoes"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/openai-privacy-filter-web-apps"
resumo: "A OpenAI lançou o Filtro de Privacidade no Hub esta semana: um detector de informações de identificação pessoal (PII) de código aberto que rotula o texto em oito categorias em uma única passagem direta em um contexto de 128k. Cartão modelo. Passamos algumas horas construindo com ele e chegamos a três aplicativos que cada um revela"
destaque: false
---

A OpenAI lançou o Filtro de Privacidade no Hub esta semana: um detector de informações de identificação pessoal (PII) de código aberto que rotula o texto em oito categorias em uma única passagem direta em um contexto de 128k. Cartão modelo. Passamos algumas horas construindo com ele e chegamos a três aplicativos que revelam uma fatia diferente do que ele pode fazer.

Todos os três são construídos no gradio.Server , que permite emparelhar front-ends HTML/JS personalizados com o enfileiramento do Gradio, a alocação ZeroGPU e o SDK do gradio_client. Em todos esses aplicativos, o gradio.Server desempenha o mesmo papel de back-end, e essa consistência é exatamente o que o torna realmente poderoso.

O Privacy Filter é um modelo de parâmetro 1.5B com parâmetros ativos de 50M, licenciado permissivamente sob o Apache 2.0. As categorias de PII são private_person , private_address , private_email , private_phone , private_url , private_date , account_number , secret . O contexto é de 128.000 tokens. Alcança um desempenho de última geração no benchmark PII-Masking-300k . Os números completos e a metodologia estão na página oficial blog de lançamento.

Problema do usuário. Você deseja ler um documento com PII (um contrato, um currículo, um registro de bate-papo exportado) com cada intervalo detectado destacado por categoria, um filtro na barra lateral e um painel de resumo na parte superior. A experiência de leitura deve parecer um documento normal, não um formulário.

O que o Filtro de Privacidade faz aqui. Todo o arquivo passa por uma única passagem de 128k-contexto, então não há chunking, sem costura, e os deslocamentos de span se alinham diretamente com o texto renderizado. A decodificação BIOES mantém os limites do vão limpos através de longas execuções ambíguas.

O que o gr.Server faz aqui. Você pode conectar isso em Blocks com gr.HighlightedText e uma barra lateral, e isso funcionaria. A experiência de leitura que queríamos (corpo com serifa, filtros de categoria que alternam as classes CSS do lado do cliente em vez de executar novamente o modelo, um painel de resumo que não força uma página a renderizar novamente) foi mais fácil de criar manualmente do que compor. O gr.Server nos permite servir a visualização do leitor como uma única Arquivo HTML e exponha o modelo por trás de um ponto de extremidade na fila:

import gradio as gr from fastapi.responses import HTMLResponse from gradio.data_classes import FileData server = gr.Server () @ server.get ( "/" , response_class= HTMLResponse) async def homepage (): return FRONTEND_HTML # reader view; see app.py @ server.api ( name= "analyze_document" ) def analyze_document ( file: FileData ) -&gt; dict : text = extract_text(file[ "path" ]) # PyMuPDF/ python-docx source_text, spans = run_privacy_filter(text) # single 128k pass return { "text" : source_text, "spans" : spans, # [{start, end, label}, ...] "stats" : compute_stats(source_text, spans), } Observe o decorador: @ server.api (name="analyze_document") , não um simples @server.post . Essa é a parte que conecta o manipulador à fila do Gradio, para que os uploads simultâneos sejam serializados, @spaces.GPU compõe corretamente no ZeroGPU, e o mesmo ponto de extremidade é acessível a partir do navegador e do gradio_client sem código duplicado. O navegador o chama com o cliente Gradio JS:

&lt; script type = "module" &gt; import { Client , handle_file } from "https://cdn.jsdelivr.net/npm/ @ gradio/client/dist/index.min.js" ; const client = await Client . connect ( window . location . origin ); async function uploadFile ( file ) { const result = await client. predict ( "/analyze_document" , { file : handle_file (file) }); renderResults (result. data [ 0 ]); // { text, spans, stats } } &lt;/ script &gt; 2. Anonimizador de Imagem Experimente em ysharma/OPF-Image-Anonymizer .

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/openai-privacy-filter-web-apps)

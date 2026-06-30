---
title: "Peça ao seu agente para gravar demonstrações de vídeo do seu trabalho com o vídeo shot-scraper"
date: 2026-06-30
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jun/30/shot-scraper-video/#atom-everything"
resumo: "shot-scraper video é um novo comando introduzido na versão 1.10 do shot-scraper de hoje que aceita um arquivo storyboard.yml definindo uma rotina para ser executada em um aplicativo da web e usa o Playwright para gravar um vídeo dessa rotina. Já escrevi antes sobre a importância de ter agentes de codificação produzindo"
destaque: false
---

shot-scraper video é um novo comando introduzido na versão 1.10 do shot-scraper de hoje que aceita um arquivo storyboard.yml definindo uma rotina para ser executada em um aplicativo da web e usa o Playwright para gravar um vídeo dessa rotina. Já escrevi antes sobre a importância de ter agentes de codificação produzindo demonstrações de seu trabalho; esta é minha última tentativa de permitir que eles façam isso.

Aqui está um vídeo de exemplo criado usando vídeo shot-scraper , exercendo um recurso ainda em desenvolvimento, adicionando a capacidade de criar novas tabelas no Datasette a partir de dados CSV, TSV ou JSON colados:

shot-scraper video datasette-bulk-insert-storyboard.yml \ --auth datasette-demo-auth.json --mp4 (Esse arquivo JSON --auth contém um cookie , conforme descrito aqui na documentação.)

output : /tmp/datasette-bulk-insert-demo.webm server : - uv - --directory - /Users/simon/Dropbox/dev/datasette - run - datasette - -p - 6419 - --root - --secret - " 1 " - /tmp/demo.db url : http://127.0.0.1:6419/demo/tasks viewport : width : 1280 height : 720 cursor : true wait_for : ' button[data-table-action ="insert-row"] ' javascript : | (() =&gt; { let clipboardText = ""; Object.defineProperty(navigator, "clipboard", { configurable: true, get: () =&gt; ({writeText: async (text) =&gt; {clipboardText = String(text); }, readText: async () =&gt; clipboardText, }), }); })(); scenes : - name : Bulk insert existing table rows do: - pause : 0.8 - click : ' button[data-table-action ="insert-row"] ' - wait_for : " # row-edit-dialog [open] " - pause : 0.5 - click : " .row-edit-bulk-insert " - wait_for : " .row-edit-bulk-textarea " - pause : 0.5 - click : " .row-edit-copy-template " - wait_for : " text=Copied " - pause : 0.8 - fill : into : " .row-edit-bulk-textarea " text : | title,owner,status,priority,notes Prepare release video,Ana,doing,1,Recorded with shot-scraper Check pasted CSV import,Ben,review,3,Previewed before inserting Share the branch demo,Chen,queued,2,Bulk insert cria três linhas - pause : 0.8 - click : ".row-edit-save" - wait_for : " text=Previewing 3 rows. " - pause : 1.2 - click : ".row-edit-save" - wait_for : " text=3 rows inserted. " - pause : 1.0 - click : ".row-edit-cancel" - wait_for : " text=Prepare release video " - pause : 1.0 - name : Create a table from pasted CSV open : http://127.0.0.1:6419/demo wait_for : 'details.actions-menu-links summary ' do: - pause : 0.8 - click : 'details.actions-menu-links summary ' - click : ' button[data-database-action ="create-table"] ' - wait_for : " # table-create-dialog [open] " - pause : 0.5 - fill : into : ".table-create-table-name" text : " launch_metrics " - click : ".table-create-from-data" - wait_for : ".table-create-data-textarea" - pause : 0.5 - fill : into : ".table-create-data-textarea" text : | metric_id,name,score,recorded_on m001,Activation rate ,87.5,2026-06-29 m002,Retention check ,72.25,2026-06-30 m003,CSV import health ,95,2026-07-01 - pause : 0.8 - click : ".table-create-save" - wait_for : " text=Previewing 3 rows. " - pause : 1.2 - click : ".table-create-save" - wait_for_url : " **/demo/launch_metrics " - wait_for : " text=Activation rate " - pause : 1.2 A documentação do comando de vídeo inclui exemplos mais simples, mas para o propósito deste post eu pensei em ir com algo mais abrangente.

Esse storyboard de demonstração YAML foi construído inteiramente por GPT-5.5 xhigh em execução no Codex Desktop, usando o seguinte prompt executado dentro do meu checkout ~/dev/datasette deste ramo :

Agora use esse novo comando de vídeo para gravar uma demonstração de vídeo dos novos recursos desta ramificação, incluindo a execução de um servidor de desenvolvimento "uv run datasette -p 6419 --root --secret 1 /tmp/demo.db" para que você possa gravar o vídeo em um banco de dados de demonstração que você criar primeiro.

Agora que lancei o recurso, o prompt poderia dizer " run uvx shot-scraper video --help " e deveria alcançar o mesmo resultado.

Eu realmente gosto desse padrão em que a saída --help para um comando fornece detalhes suficientes para que um agente de codificação possa usá-lo - funciona como empacotar um arquivo SKILL.md diretamente dentro da ferramenta. Usei o mesmo padrão para showboat e rodney .

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jun/30/shot-scraper-video/#atom-everything)

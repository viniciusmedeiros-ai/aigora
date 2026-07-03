---
title: "llm-agente de codificação 0.1a0"
date: 2026-07-02
categoria: "agents"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Jul/2/llm-coding-agent/#atom-everything"
resumo: "Outro experimento de Fable 5. Agora que minha biblioteca de LLM evoluiu para uma estrutura de agentes, é hora de ver como seria um agente de codificação simples construído sobre ele."
destaque: false
---

Outro experimento de Fable 5. Agora que minha biblioteca de LLM evoluiu para uma estrutura de agentes, é hora de ver como seria um agente de codificação simples construído sobre ele.

Iniciei uma nova biblioteca Python usando meu repositório de modelos GitHub python-lib-template-repository e, em seguida, executei esses dois prompts (aqui está o código Claude para transcrição da web):

Escreva um spec.md para este projeto - ele dependerá do alfa "llm" mais recente do PyPI e implementará um agente de codificação de estilo de código Claude completo com ferramentas para ler e editar arquivos e executar comandos

Confirme a especificação e, em seguida, construa-a usando TDD vermelho/verde em uma série de commits sensatos (cada um com testes de aprovação e documentos atualizados) - ocasionalmente teste manualmente usando a chave de API OpenAI em seu ambiente

uvx --prerelease=allow --with llm-coding-agent llm code É muito bom para uma primeira tentativa! Aqui está o README (de autoria da Fable), que lista receitas como llm code --yolo e llm code --allow "pytest*" --allow "git diff*" .

Ele também apresenta uma API Python baseada em uma classe CodingAgent (model="gpt-5.5", root="/path", approve=True).run("Corrigir o teste com falha em tests/test_parser.py") que eu não pedi, mas estou feliz em ver implementado.

CodingTools_edit_file(caminho: str, old_string: str, new_string: str, replace_all: bool = False) -&gt; str

old_string deve corresponder exatamente ao conteúdo do arquivo (incluindo espaço em branco) e deve identificar um local exclusivo, a menos que replace_all seja verdadeiro. Retorna um diff da alteração para que possa ser verificado.

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Jul/2/llm-coding-agent/#atom-everything)

---
title: "Harness, Scaffold, and the AI Agent Terms Worth Getting Right"
date: 2026-05-25
categoria: "agents"
fonte: "Hugging Face"
fonteUrl: "https://huggingface.co/blog/agent-glossary"
resumo: "When a field evolves quickly, its vocabulary often evolves faster than its shared understanding. Terms start to blur, get reused in different contexts, or become shorthand for ideas that are never fully explained. We are currently seeing this happen in the field of AI Agents, where concepts are gett"
destaque: false
---

When a field evolves quickly, its vocabulary often evolves faster than its shared understanding. Terms start to blur, get reused in different contexts, or become shorthand for ideas that are never fully explained. We are currently seeing this happen in the field of AI Agents, where concepts are getting mixed together, some are renamed, and others are widely used for a few months before quietly disappearing.

This can be overwhelming for newcomers, and even for practitioners trying to keep up with the latest developments. After ICLR 2026, one of us ( @ariG23498 ) posted a question that captured this confusion well:

"What do you mean by the terms 'harness' and 'scaffold' in the context of agents? I have heard a lot of explanations while I was at ICLR, but I could not understand why they did not converge to a single explanation."

This glossary is our attempt to ground the terms that keep coming up without clear, consistent explanations. It is not meant to be a comprehensive dictionary of every term in the field. Instead, we focus on the concepts that are often mixed up, reused in different ways, or assumed to be obvious when they are not.

Most of these terms come up whether you're building an agent, deploying one, or just using tools like Claude Code, Codex, or Hermes Agent. The last section covers concepts specific to training models, which is more relevant if you work on that side of things.

Many of these terms don't have universally accepted definitions yet, and different frameworks use the same word differently. The goal here is not to enforce one correct vocabulary, but to provide a practical mental model that makes discussions easier to follow.

The model is the LLM: it takes text in and produces text out (e.g., Claude, Qwen, GPT, Kimi, DeepSeek…). On its own, it has no memory between calls, and no loop. The model can express the intent to call a tool, but it needs a harness to actually execute it. It answers one prompt and stops. Wrap it in scaffolding and a harness and it becomes an agent.

The behavior-defining layer around the model: system prompt, tool descriptions, how the model's responses get parsed, what it remembers across steps (context management). It shapes how the model sees the world and acts in it, whether during training or at inference.

---

**Fonte original:** [Hugging Face](https://huggingface.co/blog/agent-glossary)

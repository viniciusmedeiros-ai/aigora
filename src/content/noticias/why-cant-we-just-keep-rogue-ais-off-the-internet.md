---
title: "Why can’t we just keep rogue AIs off the internet?"
date: 2026-09-24
categoria: "agents"
fonte: "The Verge AI"
fonteUrl: "https://www.theverge.com/ai-artificial-intelligence/999881/why-cant-we-airgap-rogue-ai-agents"
resumo: "AI agents keep getting loose, escaping supposedly secure tests to attack real-world targets, commandeer obscure wikis, and leave instructions for other agents to follow. Researchers are testing these systems precisely because they might behave in unpredictable, even dangerous, ways. So wouldn't it b"
destaque: false
imagem: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/09/STK414_AI_CVIRGINIA_2_C-2.jpg?quality=90&#038;strip=all&#038;crop=0,0,100,100"
---

AI agents keep getting loose , escaping supposedly secure tests to attack real-world targets , commandeer obscure wikis , and leave instructions for other agents to follow. Researchers are testing these systems precisely because they might behave in unpredictable, even dangerous, ways. So wouldn’t it be safer to just keep the agents off the internet?

“A strict air gap reduces realism ... [It’s a] trade-off, not a fundamental technical issue.”

In theory, yes. Researchers can isolate the computers running AI tools from the internet and other outside networks, a technique known as air gapping. That can mean physically removing or disabling cables and wireless hardware and using “dumb” peripherals, with particularly sensitive setups using Faraday cages or other shielding to block electromagnetic signals from getting in or out. Done properly, an air-gapped system would offer agents no straightforward route to external targets, or outside systems any straightforward route in, making it much harder, if not impossible, to pull off attacks like the one OpenAI’s models launched against Hugging Face .

But in practice, a perfectly sealed box makes for a rather limited laboratory, particularly when the aim is to assess how an AI will perform in the real world. While some AI experiments can be run on air-gapped machines, realistic evaluations often require access to external services, APIs, and digital infrastructure, explained Thorsten Holz, a scientific director at the Max Planck Institute for Security and Privacy in Germany. “A strict air gap reduces realism,” he said, describing the decision to air gap as a “trade-off, not a fundamental technical issue.”

Ruizhe Li, an assistant professor in the school of computer science at the University of Birmingham in the UK, likened complete isolation to testing AI in an “artificial vacuum,” potentially undermining the value of the evaluation itself. “We will end up testing a neutered AI model, which blinds evaluators to how the AI model behaves, fails, or executes tool-use exploits in realistic deployment settings,” Li said.

Realism isn’t the only tradeoff. Li said air gapping is costly and can slow research to an absolute crawl, turning what would be quick iterations into “a slow logistics hurdle.” Some experiments also become “substantially harder” under a strict air gap, Holz said. That friction may be justified for risky experiments, but applying it for everything would slow down the development of new models, said Maksym Andriushchenko, a principal investigator at the ELLIS Institute Tübingen in Germany.

And even if researchers wanted to air gap everything, Andriushchenko questioned whether enough secure infrastructure exists to do it at the scale of frontier AI labs.

It would not eliminate every risk posed by AI, either. Agents could still compromise systems inside of the isolated environment, Holz said, and could theoretically produce “malicious artifacts that could be dangerous if moved outside.” Moreover, air gapping “does nothing to diagnose or resolve the latent risks waiting inside the model,” Li said.

---

**Fonte original:** [The Verge AI](https://www.theverge.com/ai-artificial-intelligence/999881/why-cant-we-airgap-rogue-ai-agents)

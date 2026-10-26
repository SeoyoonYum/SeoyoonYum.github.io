---
layout: page
title: PhaseGate
description: Research Project · Resource scheduling for efficient on-device LLMs
permalink: /research/phasegate/
nav: false
---

**Seoyoon Yum and Sehoon Kim · Accepted to the NeurIPS 2026 ODI Workshop**

[Paper](https://arxiv.org/abs/2610.04537) · [PDF](https://arxiv.org/pdf/2610.04537) · [Code and experiments](https://github.com/SeoyoonYum/PhaseGate)

### Problem

Retrieval and LLM inference compete for shared resources, making it difficult to improve throughput while keeping response latency low.

### Contribution

Initiated and led the research; co-authored the paper with Prof. Sehoon Kim (KAIST). Built a resource scheduler that adapts retrieval activity to the demands of LLM inference.

<img src="{{ '/assets/img/publication_preview/phasegate-overview.png' | relative_url }}" alt="PhaseGate system overview: resource scheduling coordinates retrieval with LLM inference." style="display: block; max-width: 100%; height: auto;" loading="lazy">

### Result

In controlled experiments, PhaseGate achieved **2.0× retrieval throughput** over a fixed scheduling baseline under the same latency constraint.

[Full experimental details and reproduction notes →](https://github.com/SeoyoonYum/PhaseGate)

[Back to publications →]({{ '/' | relative_url }}#publications-heading)

---
layout: page
title: PhaseGate
description: Phase-aware CPU retrieval scheduling for on-device LLMs on unified memory
permalink: /research/phasegate/
nav: false
---

**Seoyoon Yum and Sehoon Kim · NeurIPS 2026 ODI Workshop**

[Paper](https://arxiv.org/abs/2610.04537) · [PDF](https://arxiv.org/pdf/2610.04537) · [Code and experiments](https://github.com/SeoyoonYum/PhaseGate)

### Problem

CPU retrieval and GPU inference compete for shared memory bandwidth. Four concurrent HNSW searches increased p95 decode latency by **60–61%** on two Apple M4 systems, while prefill latency increased by **5.7–6.9%**. These measurements describe the contention problem.

### Contribution

I initiated and led this research, building a phase-aware CPU retrieval scheduler, with later advising from Prof. Sehoon Kim. PhaseGate admits more retrieval during prefill and reduces concurrency during decode. The limits are calibrated for each device and workload.

<img src="{{ '/assets/img/publication_preview/phasegate-overview.png' | relative_url }}" alt="PhaseGate system overview: CPU retrieval and GPU inference share unified memory, with retrieval admission controlled by the LLM phase." style="display: block; max-width: 100%; height: auto;" loading="lazy">

### Result

On the base-M4 Mac mini, PhaseGate achieved **2.0× aggregate retrieval throughput** compared with the best tested feasible fixed policy. Both p95 LLM latency metrics stayed within **1.25× their no-retrieval baselines** in all seven held-out runs.

This is retrieval throughput under a backlogged queue and controlled LLM workloads. The benefit varies with device, workload, and the relative time spent in prefill and decode.

[Full experimental details and reproduction notes →](https://github.com/SeoyoonYum/PhaseGate)

[Back to publications →]({{ '/' | relative_url }}#publications-heading)

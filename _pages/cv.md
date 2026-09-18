---
layout: resume
title: CV
permalink: /cv/
nav: true
nav_order: 3
---

<div class="resume-toolbar">
  <a class="resume-download" href="{{ '/assets/pdf/Seoyoon_Yum_CV.pdf' | relative_url }}">Download CV (PDF) <span aria-hidden="true">&nbsp;↓</span></a>
  <span class="resume-meta">Updated September 2026</span>
</div>
<nav class="resume-nav" aria-label="CV sections">
  <a href="#education">Education</a>
  <a href="#research">Research</a>
  <a href="#selected-work">Selected work</a>
  <a href="#leadership">Leadership</a>
  <a href="#skills">Skills</a>
</nav>

<section id="education" aria-labelledby="education-heading">
  <h2 id="education-heading">Education</h2>
  <div class="resume-entry">
    <div class="resume-date">2022–Present</div>
    <div>
      <h3>KAIST</h3>
      <p class="resume-role">B.S. in Computer Science</p>
      <p class="resume-meta">Korea Advanced Institute of Science and Technology</p>
      <p>Selected coursework: Machine Learning, Deep Learning, Operating Systems, Computer Architecture, Systems Programming, Algorithms.</p>
    </div>
  </div>
</section>

<section id="research" aria-labelledby="research-heading">
  <h2 id="research-heading">Research experience</h2>
  <div class="resume-entry">
    <div class="resume-date">Sep 2026–Present</div>
    <div>
      <h3>SEAL, KAIST</h3>
      <p class="resume-role">Research Intern</p>
      <p class="resume-meta">Advisor: Prof. Sehoon Kim</p>
      <ul>
        <li>Investigating <strong>optimization techniques for looped transformers</strong>.</li>
      </ul>
    </div>
  </div>
  <div class="resume-entry">
    <div class="resume-date">Jun 2026–Present</div>
    <div>
      <h3>PhaseGate</h3>
      <p class="resume-role">Independent Researcher</p>
      <p class="resume-meta">Self-initiated and led; later advised by Prof. Sehoon Kim, KAIST</p>
      <ul>
        <li>Built a phase-aware CPU retrieval scheduler for on-device LLMs: <strong>2.0× throughput</strong> versus the best feasible fixed policy under the same latency constraint.</li>
        <li>Characterized CPU–GPU memory contention across two Apple M4 systems: four concurrent HNSW searches increased p95 decode latency by <strong>60–61%</strong>, versus <strong>5.7–6.9%</strong> for prefill.</li>
      </ul>
    </div>
  </div>
  <div class="resume-entry">
    <div class="resume-date">Jun–Aug 2026</div>
    <div>
      <h3>CHEI Lab, UC San Diego</h3>
      <p class="resume-role">Research Intern</p>
      <p class="resume-meta">Advisor: Prof. Falko Kuester</p>
      <ul>
        <li>Evaluated a <strong>time-series foundation model</strong> for zero-shot anomaly detection on production Ceph and DigitalPath telemetry.</li>
        <li>Evaluated proxy anomalies and alert-volume tradeoffs; forecast residuals did <strong>not reliably predict genuine failures</strong>.</li>
      </ul>
    </div>
  </div>
  <div class="resume-entry">
    <div class="resume-date">Jan 2026</div>
    <div>
      <h3>SGVR Lab, KAIST</h3>
      <p class="resume-role">Research Intern</p>
      <p class="resume-meta">Advisor: Prof. Sung-Eui Yoon</p>
      <ul>
        <li>Evaluated Octo-Small vision-language-action policies on SIMPLER under 11 meaning-preserving perturbations: average success fell from <strong>60% to 25%</strong>, with structural edits causing the largest drop.</li>
      </ul>
    </div>
  </div>
  <div class="resume-entry">
    <div class="resume-date">Summer 2023</div>
    <div>
      <h3>CJ AI Center</h3>
      <p class="resume-role">Research Intern</p>
      <ul>
        <li>Built a real-time EEG-to-robotic-arm brain–computer interface using <strong>PyTorch</strong>.</li>
      </ul>
    </div>
  </div>
</section>

<section id="selected-work" aria-labelledby="work-heading">
  <h2 id="work-heading">Selected work</h2>
  <ol class="resume-works">
    <li>
      <h3>PhaseGate: Phase-Aware CPU Retrieval Scheduling for On-Device LLMs on Unified Memory</h3>
      <p class="resume-meta">S. Yum and S. Kim · 2026</p>
      <p>Under review for NeurIPS 2026 ODI Workshop.</p>
    </li>
    <li>
      <h3>Zero-Shot Time-Series Foundation Models for Infrastructure Anomaly Detection</h3>
      <p class="resume-meta">S. Yum · Technical report, 2026</p>
    </li>
    <li>
      <h3>Stress-Testing Semantic Robustness in Vision-Language-Action Policies</h3>
      <p class="resume-meta">S. Yum · Technical report, 2026 · <a href="https://doi.org/10.5281/zenodo.20777663">DOI</a></p>
    </li>
  </ol>
</section>

<section id="leadership" aria-labelledby="leadership-heading">
  <h2 id="leadership-heading">Leadership</h2>
  <div class="resume-entry">
    <div class="resume-date">Sep 2025–Present</div>
    <div>
      <h3>KAIST American Football Club</h3>
      <p class="resume-role">Captain</p>
      <p>Lead team practices, game strategy, and intra-university competitions.</p>
    </div>
  </div>
  <div class="resume-entry">
    <div class="resume-date">Jan 2024–Jul 2025</div>
    <div>
      <h3>Republic of Korea Army</h3>
      <p class="resume-role">Squad Leader and English Interpreter</p>
      <p>Led eight soldiers and interpreted between Republic of Korea and U.S. military personnel.</p>
    </div>
  </div>
</section>

<section id="skills" aria-labelledby="skills-heading">
  <h2 id="skills-heading">Technical skills</h2>
  <dl class="resume-skills">
    <dt>Code and tools</dt><dd>Python, C, Bash, Git, Linux</dd>
    <dt>ML and systems</dt><dd>PyTorch, MLX/MLX-LM, FAISS/HNSW, Prometheus, Grafana, Ceph</dd>
    <dt>Languages</dt><dd>Korean (native), English (professional; TOEFL 110)</dd>
  </dl>
</section>

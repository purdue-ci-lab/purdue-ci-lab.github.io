---
layout: page
title: Seeing Fast in the Dark
description: Capturing video at extreme frame rates and in very low light, where conventional cameras run out of photons.
permalink: /research/high-speed-low-light/
img: assets/img/research/uwbfan-spad-thumbnail.gif
importance: 1
category: imaging
short_title: "High-speed, low-light video"
img_alt: "Video of a slow scene and a transient scene of a fan"
research_question: "How do we film a scene that is both fast and dark?"
overview: "At high frame rates or in dim scenes, each frame receives only a handful of photons. We develop sensing models and reconstruction algorithms that recover sharp, high-speed video from these sparse, noisy measurements."
---

<figure class="lab-project-figure">
  <img src="{{ page.img | relative_url }}" alt="{{ page.img_alt }}" width="1200" height="800" loading="eager" />
</figure>

Fast motion and low light are two sides of the same problem: a conventional camera that shortens its exposure to freeze motion also collects less light, until each frame is little more than noise.

We study how to recover high-speed video from sparse photon measurements, using sensors such as single-photon cameras that record when individual photons arrive. By modeling how light changes over time, we can reconstruct motion and illumination changes across timescales that no fixed frame rate captures, without needing a controlled light source.

## Related publications

<div class="publications">

{% bibliography --group_by none --query @*[key=yan2026spatiotemporal||key=wei2023passive] %}

</div>

---
layout: page
title: Neural Inverse Rendering
description: Neural inverse rendering from time-resolved measurements, recovering geometry, materials, and lighting from how light travels through a scene.
permalink: /research/neural-inverse-rendering/
img: assets/img/publication_preview/firecam.png
importance: 3
category: imaging
short_title: "Neural inverse rendering"
img_alt: "Placeholder drawing of a camera on fire"
research_question: "Which scene could have produced these measurements?"
overview: "Inverse rendering runs image formation backward to recover the scene behind a set of measurements. We focus on transient inverse rendering: fitting neural scene representations to time-resolved data, so that the timing of every photon constrains geometry, appearance, and light transport."
---

<figure class="lab-project-figure">
  <img src="{{ page.img | relative_url }}" alt="{{ page.img_alt }}" width="1200" height="800" loading="eager" />
</figure>

Rendering turns a scene into measurements; inverse rendering asks the reverse question: given the measurements, what scene produced them? Conventional inverse rendering works from ordinary images, which record only how much light arrives at each pixel.

Our work focuses on transient inverse rendering, where the measurements also record when light arrives. We build neural scene representations together with differentiable models of time-resolved light transport, and fit them directly to transient and single-photon LiDAR data. Because photon timing encodes path length, these measurements constrain geometry and multi-bounce light transport far more tightly than intensity alone. This lets us reconstruct 3D scenes, synthesize new transient and conventional views, and separate shape from material and lighting, even from only a few viewpoints.

## Related publications

<div class="publications">

{% bibliography --group_by none --query @*[key=malik2023transient] %}

</div>

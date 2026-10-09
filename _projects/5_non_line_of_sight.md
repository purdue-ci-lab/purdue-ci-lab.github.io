---
layout: page
title: Non-Line-of-Sight Imaging
description: Recovering hidden scenes from indirect light transport.
permalink: /research/non-line-of-sight/
img: assets/img/research/non-line-of-sight.webp
importance: 5
category: imaging
short_title: "Around-corner imaging"
label: "Indirect light"
img_alt: "Illustrative tabletop scene with a camera facing a relay wall and a red cube hidden behind a partition"
image_caption: "A visible wall can carry light scattered from an object hidden around a corner."
research_question: "Can scattered light reveal an object outside direct view?"
overview: "Light that bounces off visible surfaces can carry information about hidden scenes. We develop physical models and reconstruction algorithms that recover shape and motion from these faint indirect measurements."
---

Non-line-of-sight (NLOS) imaging aims to reconstruct objects that are hidden from direct view — around corners or behind occluders — by analyzing light that has scattered off intermediate surfaces.

We develop physical models and reconstruction algorithms (including theory-of-Fermat-paths–style geometric approaches) that recover shape and motion of hidden scenes from these faint, indirect signals.

<figure class="lab-project-figure">
  <img src="{{ page.img | relative_url }}" alt="{{ page.img_alt }}" width="1200" height="800" loading="eager" />
  <figcaption>{{ page.image_caption }} <span>Illustrative scene.</span></figcaption>
</figure>

## Related publications

- [A Theory of Fermat Paths for Non-Line-of-Sight Shape Reconstruction]({{ '/publications/#xin2019fermat' | relative_url }})

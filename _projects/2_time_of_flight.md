---
layout: page
title: Transient Light in Flight
description: Transient imaging uses the travel time of light to measure depth, recover 3D shape and appearance, and see around corners.
permalink: /research/time-of-flight/
img: assets/media/research/transient-side-pan-thumbnail.mp4
importance: 2
category: imaging
short_title: "Transient & time-of-flight imaging"
img_alt: "Video panning around a 3D reconstruction of two mannequins as colored pulses of light from three sources sweep across the scene"
research_question: "What does the travel time of light reveal about a scene?"
overview: "Time-of-flight sensors record not just how much light returns, but when. We use this timing to recover geometry and appearance, from direct depth sensing and transient inverse rendering to hidden objects seen only through scattered light."
---

<figure class="lab-project-figure">
  {% include lab/media.liquid path=page.img alt=page.img_alt width="1200" height="800" loading="eager" %}
</figure>

Time-of-flight sensors measure how long light takes to travel through a scene. With picosecond timing, these transient measurements encode depth, shape, and material properties, along with light that has bounced several times before returning.

We develop models and algorithms that make the most of this timing information: reconstructing 3D scenes from transient and LiDAR data, recovering objects hidden around corners from indirect reflections, and using light sources already present in a scene instead of a dedicated laser.

Much of this work is transient inverse rendering: given time-resolved measurements, what scene produced them? We build neural scene representations together with differentiable models of time-resolved light transport, and fit them directly to transient and single-photon LiDAR data. Because photon timing encodes path length, these measurements constrain geometry and multi-bounce light transport far more tightly than intensity alone. This lets us reconstruct 3D scenes, synthesize new transient and conventional views, and separate shape from material and lighting, even from only a few viewpoints.

## Related publications

<div class="publications">

{% bibliography --group_by none --query @*[key=nousias2025opportunistic||key=malik2023transient||key=xin2019fermat] %}

</div>

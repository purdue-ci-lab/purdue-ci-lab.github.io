---
layout: page
title: Light in Flight
description: Time-of-flight imaging uses the travel time of light to measure depth, recover 3D shape, and see around corners.
permalink: /research/time-of-flight/
img: assets/img/research/opp-vis-tof-thumbnail.gif
importance: 2
category: imaging
short_title: "Time-of-flight imaging"
img_alt: "Video of multiple lidars sending photons to a camera"
research_question: "What does the travel time of light reveal about a scene?"
overview: "Time-of-flight sensors record not just how much light returns, but when. We use this timing to recover geometry and appearance, from direct depth sensing to hidden objects seen only through scattered light."
---

<figure class="lab-project-figure">
  <img src="{{ page.img | relative_url }}" alt="{{ page.img_alt }}" width="1200" height="800" loading="eager" />
</figure>

Time-of-flight sensors measure how long light takes to travel through a scene. With picosecond timing, these transient measurements encode depth, shape, and material properties, along with light that has bounced several times before returning.

We develop models and algorithms that make the most of this timing information: reconstructing 3D scenes from transient and LiDAR data, recovering objects hidden around corners from indirect reflections, and using light sources already present in a scene instead of a dedicated laser.

## Related publications

<div class="publications">

{% bibliography --group_by none --query @*[key=nousias2025opportunistic||key=malik2023transient||key=xin2019fermat] %}

</div>

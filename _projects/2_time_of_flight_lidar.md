---
layout: page
title: Time-of-Flight & LiDAR View Synthesis
description: Transient and neural-field methods for 3D reconstruction and novel-view rendering from active illumination.
permalink: /research/time-of-flight-lidar/
img: assets/img/research/time-of-flight.webp
importance: 2
category: imaging
short_title: "Time of flight"
label: "Depth & light transport"
img_alt: "Illustrative optical sensing camera facing a sphere, cylinder, and block at different distances"
image_caption: "The travel time of light carries information about distance and shape."
research_question: "How does the travel time of light reveal a scene’s geometry?"
overview: "Time-resolved measurements encode more than a single depth value. We study reconstruction and view synthesis from transient and LiDAR data, using neural fields to model geometry, appearance, and light transport."
---

Active time-of-flight systems illuminate a scene with pulsed light and measure the time it takes for photons to return. The resulting transient measurements encode rich geometry and material information.

We study how to reconstruct 3D scenes from this data and how to synthesize novel views directly from raw transient or LiDAR measurements — for example, using neural fields that model the full temporal light transport rather than just a depth map.

<figure class="lab-project-figure">
  <img src="{{ page.img | relative_url }}" alt="{{ page.img_alt }}" width="1200" height="800" loading="eager" />
  <figcaption>{{ page.image_caption }} <span>Illustrative scene.</span></figcaption>
</figure>

## Related publications

- [Opportunistic Single-Photon Time of Flight]({{ '/publications/#nousias2025opportunistic' | relative_url }})
- [Transient Neural Radiance Fields for LiDAR View Synthesis and 3D Reconstruction]({{ '/publications/#malik2023transient' | relative_url }})

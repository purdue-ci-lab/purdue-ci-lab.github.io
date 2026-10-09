---
layout: page
title: Time-of-Flight & LiDAR View Synthesis
description: Transient and neural-field methods for 3D reconstruction and novel-view rendering from active illumination.
permalink: /research/time-of-flight-lidar/
img: assets/img/research/time-of-flight.webp
img_alt: Conceptual illustration of pulsed light and depth reconstruction in a time-of-flight system
importance: 2
category: imaging
---

Active time-of-flight systems illuminate a scene with pulsed light and measure the time it takes for photons to return. The resulting transient measurements encode rich geometry and material information.

We study how to reconstruct 3D scenes from this data and how to synthesize novel views directly from raw transient or LiDAR measurements — for example, using neural fields that model the full temporal light transport rather than just a depth map.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/research/time-of-flight.webp" title="Time-of-flight and LiDAR illustration" alt="Conceptual illustration of pulsed light and depth reconstruction in a time-of-flight system" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

> Edit `_projects/2_time_of_flight_lidar.md` to add project details, figures, and links to papers.

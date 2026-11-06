---
layout: page
title: Event-Based Sensing
description: Sensing with neuromorphic cameras, whose pixels respond only to events, changes in what they measure, instead of recording full frames.
permalink: /research/event-based-sensing/
img: assets/media/publication_preview/firecam.png
importance: 4
category: imaging
short_title: "Event-based sensing"
img_alt: "Placeholder image"
research_question: "What can a camera see if it only records change?"
overview: "In a neuromorphic camera, pixels do not record frames; each one responds only to events, changes in the light it measures. Static parts of a scene produce no output, while changes are captured with microsecond timing and high dynamic range. We develop sensing models and algorithms that recover video, motion, and scene structure from these events."
---

<figure class="lab-project-figure">
  {% include lab/media.liquid path=page.img alt=page.img_alt width="1200" height="800" loading="eager" %}
</figure>

A conventional camera records every pixel in every frame, whether or not anything has changed. A neuromorphic camera records only events: each pixel stays silent until its measurement changes past a threshold, and then reports that change. Static parts of the scene produce nothing, while moving edges and flickering light produce bursts of events with microsecond timing, no motion blur, and a dynamic range far beyond that of frame-based sensors.

We study how to model these measurements and recover the scene behind them: reconstructing intensity video from events, estimating fast motion, and connecting neuromorphic sensors such as event and spike cameras to other photon-level sensors through a common view of how light changes over time.

## Related publications

<div class="publications">

{% bibliography --group_by none --query @*[key=yan2026spatiotemporal] %}

</div>

---
layout: page
title: Vision Foundation and Generative Models
description: Adapting large pretrained vision and generative models to unconventional sensors and extreme imaging conditions.
permalink: /research/foundation-generative-models/
img: assets/media/publication_preview/firecam.png
importance: 5
category: imaging
short_title: "Foundation & generative models"
img_alt: "Placeholder image"
research_question: "How can models trained on ordinary images help us see beyond conventional cameras?"
overview: "Vision foundation models and generative models learn powerful priors about the visual world from large collections of ordinary images. We adapt these models to unconventional sensors and extreme conditions, such as raw images captured in near darkness, so that their priors carry over to the measurements our cameras actually record."
---

<figure class="lab-project-figure">
  {% include lab/media.liquid path=page.img alt=page.img_alt width="1200" height="800" loading="eager" %}
</figure>

Large pretrained models now match features, estimate depth and camera pose, and generate realistic images with remarkable reliability, but almost all of them are trained on well-exposed photographs from conventional cameras. Their performance drops sharply on noisy raw images, photon-limited data, or the measurements of sensors that record something other than an ordinary image.

We work on bringing these models to the regimes we care about: distilling 3D foundation models so they keep working on raw images with extremely low signal-to-noise ratios, and using generative priors to fill in what sparse, noisy measurements leave undetermined.

## Related publications

<div class="publications">

{% bibliography --group_by none --query @*[key=guo2026dark3r] %}

</div>

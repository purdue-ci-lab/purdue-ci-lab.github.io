---
layout: about
title: about
permalink: /
selected_papers: true
social: false
announcements:
  enabled: true
  scrollable: false
  limit: 5
latest_posts:
  enabled: false
---

<section class="lab-hero" aria-labelledby="lab-hero-title">
  <div class="lab-hero-copy">
    <p class="lab-eyebrow">Purdue University · Computer Science</p>
    <h1 id="lab-hero-title">New ways to see,<br />one photon at a time.</h1>
    <p class="lab-hero-intro">We design cameras and algorithms that reveal what conventional imaging misses — in faint light, at high speed, and beyond direct view.</p>
    <p class="lab-hero-affiliation">The Computational Imaging Lab is led by <a href="https://sotirisnousias.com/">Dr. Sotiris Nousias</a> in Purdue’s <a href="https://www.cs.purdue.edu/">Department of Computer Science</a>.</p>
    <div class="lab-hero-actions">
      <a class="lab-button" href="{{ '/research/' | relative_url }}">Explore our research <span aria-hidden="true">↗</span></a>
      <a class="lab-text-link" href="{{ '/people/' | relative_url }}">Meet the lab <span aria-hidden="true">→</span></a>
    </div>
  </div>
  <figure class="lab-hero-figure">
    <img src="{{ '/assets/img/research/computational-photography.webp' | relative_url }}" alt="Illustrative scene of a glass lens refracting the image of a fern in natural window light" width="1200" height="800" fetchpriority="high" />
    <figcaption>Optics, sensing, and computation. <span>Illustrative image.</span></figcaption>
  </figure>
</section>

<section class="lab-section" aria-labelledby="home-research-title">
  <div class="lab-section-heading">
    <h2 id="home-research-title" class="lab-section-title">Research areas</h2>
    <a class="lab-text-link" href="{{ '/research/' | relative_url }}">All research areas <span aria-hidden="true">↗</span></a>
  </div>
  <p class="lab-section-intro">We bring optical design, statistical inference, and emerging sensors together to understand how light carries information.</p>
  {% assign sorted_projects = site.projects | sort: 'importance' %}
  <div class="lab-research-grid">
  {% for project in sorted_projects %}
    {% if project.importance == 1 or project.importance == 2 or project.importance == 5 %}
    <a class="lab-research-card" href="{{ project.url | relative_url }}">
      <img src="{{ project.img | relative_url }}" alt="{{ project.img_alt }}" loading="lazy" width="1200" height="800" />
      <div class="lab-research-card-copy">
        <p class="lab-eyebrow">{{ project.label }}</p>
        <h3>{{ project.short_title }}</h3>
        <p>{{ project.description }}</p>
        <span class="lab-card-link">Explore <span aria-hidden="true">↗</span></span>
      </div>
    </a>
    {% endif %}
  {% endfor %}
  </div>
</section>

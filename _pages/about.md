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

<section class="lab-hero lab-hero--video" aria-labelledby="lab-hero-title">
  <video class="lab-hero-video" autoplay muted loop playsinline preload="auto" poster="{{ '/assets/media/hero-poster.jpg' | relative_url }}" aria-hidden="true">
    <source src="{{ '/assets/media/background-merged.mp4' | relative_url }}" type="video/mp4" />
  </video>
  <div class="lab-hero-copy">
    <p class="lab-eyebrow">Purdue University · Computer Science</p>
    <h1 id="lab-hero-title">Seeing the world at extremes.</h1>
    <p class="lab-hero-intro">We develop imaging systems that can capture scenes beyond what conventional cameras can see.</p>
    <div class="lab-hero-actions">
      <a class="lab-button" href="{{ '/research/' | relative_url }}">Explore our research <span aria-hidden="true">↗</span></a>
      <a class="lab-text-link" href="{{ '/people/' | relative_url }}">Meet the lab <span aria-hidden="true">→</span></a>
    </div>
  </div>
</section>

<section class="lab-section" aria-labelledby="home-research-title">
  <div class="lab-section-heading">
    <h2 id="home-research-title" class="lab-section-title">Research areas</h2>
    <a class="lab-text-link" href="{{ '/research/' | relative_url }}">All research areas <span aria-hidden="true">↗</span></a>
  </div>
  {% assign sorted_projects = site.projects | sort: 'importance' %}
  <div class="lab-research-grid">
  {% for project in sorted_projects %}
    <a class="lab-research-card" href="{{ project.url | relative_url }}">
      <div class="lab-image-card">
        {% include lab/media.liquid path=project.img alt=project.img_alt width="1200" height="800" %}
      </div>
      <div class="lab-research-card-copy">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <span class="lab-card-link">Explore <span aria-hidden="true">↗</span></span>
      </div>
    </a>
  {% endfor %}
  </div>
</section>

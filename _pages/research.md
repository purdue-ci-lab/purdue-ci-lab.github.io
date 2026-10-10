---
layout: page
title: research
heading: Light, measured differently.
permalink: /research/
description: We combine optics, sensors, and algorithms to recover information from faint light, fast motion, and hidden scenes.
nav: true
nav_order: 2
---

{% assign sorted_projects = site.projects | sort: 'importance' %}

<nav class="lab-topic-nav" aria-label="Research directions">
{% for project in sorted_projects %}
  <a href="#{{ project.slug }}">{{ project.short_title }}</a>
{% endfor %}
</nav>

<div class="lab-research-directions">
{% for project in sorted_projects %}
  <section class="lab-research-row" id="{{ project.slug }}" aria-labelledby="title-{{ project.slug }}">
    <figure>
      <div class="lab-image-card">
        <img src="{{ project.img | relative_url }}" alt="{{ project.img_alt }}" loading="lazy" width="1200" height="800" />
      </div>
    </figure>
    <div class="lab-research-row-copy">
      <h2 id="title-{{ project.slug }}">{{ project.title }}</h2>
      <p class="lab-research-question">{{ project.research_question }}</p>
      <p>{{ project.overview }}</p>
      <a class="lab-text-link" href="{{ project.url | relative_url }}" aria-label="Read about {{ project.title }}">Read about this direction <span aria-hidden="true">↗</span></a>
    </div>
  </section>
{% endfor %}
</div>

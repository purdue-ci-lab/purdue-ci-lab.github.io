---
layout: page
title: research
permalink: /research/
description: Research directions in the Purdue Computational Imaging Lab.
nav: true
nav_order: 2
---

<!-- _pages/research.md — cards are generated from the files in _projects/ -->

We build cameras and algorithms that reason about light at the level of individual photons. Click a topic to read more.

{% assign sorted_projects = site.projects | sort: "importance" %}

<div style="display: flex; flex-wrap: wrap; gap: 1.8rem; margin-top: 1.5rem;">
{% for project in sorted_projects %}
  <a
    href="{{ project.url | relative_url }}"
    style="flex: 1 1 280px; max-width: 360px; display: block; text-decoration: none; color: inherit; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 8px; overflow: hidden;">
    {% if project.img %}
    <img
      src="{{ project.img | relative_url }}"
      alt="{{ project.title }}"
      loading="lazy"
      style="width: 100%; height: 160px; object-fit: cover; display: block;" />
    {% endif %}
    <div style="padding: 0.85rem 1rem;">
      <h5 style="margin: 0 0 0.4rem;">{{ project.title }}</h5>
      <p style="margin: 0; font-size: 0.9rem; opacity: 0.85;">{{ project.description }}</p>
    </div>
  </a>
{% endfor %}
</div>

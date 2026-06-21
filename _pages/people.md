---
layout: page
permalink: /people/
title: people
description: The people behind the Purdue Computational Imaging Lab.
nav: true
nav_order: 4
---

<!-- _pages/people.md — renders the cards from _data/members.yml -->

{% assign pi = site.data.members.pi %}

<!-- Principal Investigator -->
<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; align-items: center; margin-bottom: 2.5rem;">
  <img
    src="{{ pi.image | prepend: '/assets/img/' | relative_url }}"
    alt="{{ pi.name }}"
    loading="eager"
    style="width: 180px; height: 180px; object-fit: cover; border-radius: 50%;" />
  <div style="flex: 1; min-width: 260px;">
    <h3 style="margin-bottom: 0.2rem;">{{ pi.name }}</h3>
    <p style="margin-bottom: 0.6rem;"><strong>{{ pi.role }}</strong> &middot; {{ pi.title }}</p>
    {% if pi.blurb %}<p style="margin-bottom: 0.6rem;">{{ pi.blurb }}</p>{% endif %}
    <p style="margin-bottom: 0;">
      {% if pi.homepage %}<a href="{{ pi.homepage }}" style="margin-right: 0.9rem;">Homepage</a>{% endif %}
      {% if pi.scholar %}<a href="{{ pi.scholar }}" style="margin-right: 0.9rem;">Google Scholar</a>{% endif %}
      {% if pi.twitter %}<a href="{{ pi.twitter }}" style="margin-right: 0.9rem;">X</a>{% endif %}
      {% if pi.email %}<a href="mailto:{{ pi.email }}">Email</a>{% endif %}
    </p>
  </div>
</div>

<!-- Current members -->
<h2 style="margin-bottom: 1.4rem;">Members</h2>

<div style="display: flex; flex-wrap: wrap; gap: 2rem 1.6rem; justify-content: flex-start;">
{% for m in site.data.members.current %}
  <div style="flex: 0 0 160px; text-align: center;">
    <img
      src="{{ m.image | prepend: '/assets/img/' | relative_url }}"
      alt="{{ m.name }}"
      loading="lazy"
      style="width: 150px; height: 150px; object-fit: cover; border-radius: 50%; margin-bottom: 0.6rem;" />
    <div style="font-weight: 600; line-height: 1.2;">{{ m.name }}</div>
    <div style="font-size: 0.85rem; opacity: 0.75; margin-bottom: 0.35rem;">{{ m.role }}</div>
    {% if m.blurb %}<div style="font-size: 0.8rem; margin-bottom: 0.35rem;">{{ m.blurb }}</div>{% endif %}
    <div style="font-size: 0.85rem;">
      {% if m.homepage %}<a href="{{ m.homepage }}" style="margin: 0 0.25rem;">Web</a>{% endif %}
      {% if m.scholar %}<a href="{{ m.scholar }}" style="margin: 0 0.25rem;">Scholar</a>{% endif %}
      {% if m.github %}<a href="{{ m.github }}" style="margin: 0 0.25rem;">GitHub</a>{% endif %}
      {% if m.email %}<a href="mailto:{{ m.email }}" style="margin: 0 0.25rem;">Email</a>{% endif %}
    </div>
  </div>
{% endfor %}
</div>

{% if site.data.members.alumni and site.data.members.alumni.size > 0 %}
<!-- Alumni -->
<h2 style="margin-top: 2.5rem; margin-bottom: 1rem;">Alumni</h2>
<ul>
{% for a in site.data.members.alumni %}
  <li><strong>{{ a.name }}</strong>{% if a.role %} &mdash; {{ a.role }}{% endif %}{% if a.now %} (now {{ a.now }}){% endif %}</li>
{% endfor %}
</ul>
{% endif %}

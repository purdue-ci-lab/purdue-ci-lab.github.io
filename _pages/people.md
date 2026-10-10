---
layout: page
permalink: /people/
title: people
nav: true
nav_order: 4
heading: "People"
---

<!-- _pages/people.md — renders the cards from _data/members.yml -->

{% assign pi = site.data.members.pi %}

<h2 class="lab-section-title">Faculty</h2>

<div class="lab-faculty">
  {% if pi.homepage %}<a href="{{ pi.homepage }}" class="lab-person-link" tabindex="-1" aria-hidden="true">{% endif %}
  <img
    src="{{ pi.image | prepend: '/assets/img/' | relative_url }}"
    alt="{{ pi.name }}"
    loading="eager"
    class="lab-faculty-portrait" width="180" height="180" />
  {% if pi.homepage %}</a>{% endif %}
  <div>
    <h3 style="margin-bottom: 0.2rem;">
      {% if pi.homepage %}<a href="{{ pi.homepage }}" class="lab-person-link">{{ pi.name }}</a>{% else %}{{ pi.name }}{% endif %}
    </h3>
    <p style="margin-bottom: 0.6rem;"><strong>{{ pi.role }}</strong> &middot; {{ pi.title }}</p>
    {% if pi.blurb %}<p style="margin-bottom: 0;">{{ pi.blurb }}</p>{% endif %}
  </div>
</div>

<!-- Current members -->
<h2 class="lab-section-title">Members</h2>

<div class="lab-members-grid">
{% for m in site.data.members.current %}
  <div class="lab-member">
    {% if m.homepage %}<a href="{{ m.homepage }}" class="lab-person-link">{% endif %}
    <img
      src="{{ m.image | prepend: '/assets/img/' | relative_url }}"
      alt=""
      loading="lazy"
      class="lab-member-portrait" width="180" height="180" />
    <div class="lab-member-name">{{ m.name }}</div>
    {% if m.homepage %}</a>{% endif %}
    <div class="lab-member-role">{{ m.role }}</div>
    {% if m.blurb %}<div style="font-size: 0.8rem; margin-bottom: 0.35rem;">{{ m.blurb }}</div>{% endif %}
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

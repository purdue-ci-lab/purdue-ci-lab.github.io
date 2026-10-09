---
layout: page
permalink: /people/
title: people
nav: true
nav_order: 4
heading: "Our people"
---

<!-- _pages/people.md — renders the cards from _data/members.yml -->

{% assign pi = site.data.members.pi %}

<h2 class="lab-section-title">Faculty</h2>

<div class="lab-faculty">
  <div class="lab-image-card lab-faculty-photo">
    <img
      src="{{ pi.image | prepend: '/assets/img/' | relative_url }}"
      alt="{{ pi.name }}"
      loading="eager"
      class="lab-faculty-portrait" width="180" height="180" />
  </div>
  <div>
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
<h2 class="lab-section-title">Members</h2>

<div class="lab-members-grid">
{% for m in site.data.members.current %}
  <div class="lab-member">
    <div class="lab-image-card lab-member-photo">
      <img
        src="{{ m.image | prepend: '/assets/img/' | relative_url }}"
        alt="{{ m.name }}"
        loading="lazy"
        class="lab-member-portrait" width="180" height="180" />
    </div>
    <div class="lab-member-name">{{ m.name }}</div>
    <div class="lab-member-role">{{ m.role }}</div>
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

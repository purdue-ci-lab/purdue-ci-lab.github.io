---
layout: page
title: news
heading: "News"
permalink: /news/
description: Updates from the Purdue Computational Imaging Lab.
nav: true
nav_order: 5
---

{% include news.liquid %}

{% if site.data.talks and site.data.talks.size > 0 %}

## Talks

<ul>
  {% for talk in site.data.talks %}
    <li>
      <strong>{{ talk.title }}</strong> —
      {% for venue in talk.venues %}{{ venue.name }} ({{ venue.year }}){% unless forloop.last %}; {% endunless %}{% endfor %}
    </li>
  {% endfor %}
</ul>

{% endif %}

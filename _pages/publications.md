---
layout: page
permalink: /publications/
title: publications
description: Publications from the Purdue Computational Imaging Lab, in reverse chronological order.
nav: true
nav_order: 3
heading: "Publications"
eyebrow: "Research output"
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<nav class="publication-year-filter" aria-label="Filter publications by year"></nav>

<p class="publication-legend">
  <span><sup>*</sup> Equal contribution</span>
  <span><span class="lab-member-author">Underlined</span> names are lab members</span>
</p>

<div class="publications">

{% bibliography %}

</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const filter = document.querySelector(".publication-year-filter");
    const groups = Array.from(document.querySelectorAll(".publications h2.bibliography"))
      .map((heading) => ({ heading, list: heading.nextElementSibling, year: heading.textContent.trim() }))
      .filter(({ list, year }) => list?.matches("ol.bibliography") && /^\d{4}$/.test(year));
    if (!filter || groups.length === 0) return;

    const years = [...new Set(groups.map(({ year }) => year))].sort((a, b) => Number(b) - Number(a));
    const buttons = ["All years", ...years].map((label) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.setAttribute("aria-pressed", String(label === "All years"));
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        groups.forEach(({ heading, list, year }) => {
          const hide = label !== "All years" && year !== label;
          heading.classList.toggle("year-filter-hidden", hide);
          list.classList.toggle("year-filter-hidden", hide);
        });
      });
      return button;
    });
    filter.replaceChildren(...buttons);
  });
</script>

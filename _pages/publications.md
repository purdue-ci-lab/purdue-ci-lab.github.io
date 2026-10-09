---
layout: page
permalink: /publications/
title: publications
description: Publications from the Purdue Computational Imaging Lab, in reverse chronological order.
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<nav class="publication-year-filter" aria-label="Filter publications by year"></nav>

<div class="publications">

{% bibliography %}

</div>

<style>
  .publication-year-filter { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0 1.5rem; }
  .publication-year-filter button { border: 1px solid var(--global-divider-color); border-radius: 999px; background: transparent; color: var(--global-text-color); padding: 0.3rem 0.85rem; cursor: pointer; }
  .publication-year-filter button:hover, .publication-year-filter button[aria-pressed="true"] { border-color: var(--global-theme-color); color: var(--global-theme-color); }
  .publications .year-filter-hidden { display: none !important; }
</style>

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

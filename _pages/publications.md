---
layout: page
permalink: /publications/
title: publications
description: Publications from the Purdue Computational Imaging Lab, in reverse chronological order.
nav: true
nav_order: 3
heading: "Publications"
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<nav class="publication-year-filter" aria-label="Filter publications by year"></nav>

<nav class="publication-tag-filter" aria-label="Filter publications by tag">
  <button type="button" aria-pressed="true">All topics</button>
  {% for tag in site.data.tags %}
    <button type="button" data-tag="{{ tag.id }}" aria-pressed="false" hidden>{{ tag.name }}</button>
  {% endfor %}
</nav>

<p class="publication-filter-empty" hidden>No publications match these filters.</p>

<p class="publication-legend">
  <span><sup>*</sup> Equal contribution</span>
  <span><span class="lab-member-author">Underlined</span> names are lab members</span>
</p>

<div class="publications">

{% bibliography %}

</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const yearFilter = document.querySelector(".publication-year-filter");
    const tagFilter = document.querySelector(".publication-tag-filter");
    const emptyMessage = document.querySelector(".publication-filter-empty");
    const groups = Array.from(document.querySelectorAll(".publications h2.bibliography"))
      .map((heading) => ({ heading, list: heading.nextElementSibling, year: heading.textContent.trim() }))
      .filter(({ list, year }) => list?.matches("ol.bibliography") && /^\d{4}$/.test(year))
      .map((group) => ({ ...group, items: Array.from(group.list.querySelectorAll(":scope > li")) }));
    if (!yearFilter || !tagFilter || groups.length === 0) return;

    const tagsOf = (item) => (item.querySelector(".row")?.dataset.tags ?? "").split(" ").filter(Boolean);
    const usedTags = new Set(groups.flatMap(({ items }) => items.flatMap(tagsOf)));
    const state = { year: null, tag: null };

    const apply = () => {
      let shown = 0;
      groups.forEach(({ heading, list, year, items }) => {
        let visible = 0;
        items.forEach((item) => {
          const hide = state.tag !== null && !tagsOf(item).includes(state.tag);
          item.classList.toggle("tag-filter-hidden", hide);
          if (!hide) visible += 1;
        });
        const hideGroup = (state.year !== null && year !== state.year) || visible === 0;
        heading.classList.toggle("year-filter-hidden", hideGroup);
        list.classList.toggle("year-filter-hidden", hideGroup);
        if (!hideGroup) shown += visible;
      });
      emptyMessage.hidden = shown > 0;
      yearButtons.forEach((button) => button.setAttribute("aria-pressed", String((button.dataset.year ?? null) === state.year)));
      tagButtons.forEach((button) => button.setAttribute("aria-pressed", String((button.dataset.tag ?? null) === state.tag)));
    };

    const setTag = (tag) => {
      state.tag = tag;
      const url = new URL(window.location.href);
      if (tag) url.searchParams.set("tag", tag);
      else url.searchParams.delete("tag");
      window.history.replaceState(null, "", url);
      apply();
    };

    const years = [...new Set(groups.map(({ year }) => year))].sort((a, b) => Number(b) - Number(a));
    const yearButtons = [null, ...years].map((year) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = year ?? "All years";
      if (year) button.dataset.year = year;
      button.addEventListener("click", () => {
        state.year = year;
        apply();
      });
      return button;
    });
    yearFilter.replaceChildren(...yearButtons);

    // Only offer tags that at least one publication uses.
    const tagButtons = Array.from(tagFilter.querySelectorAll("button")).filter((button) => {
      const tag = button.dataset.tag ?? null;
      if (tag !== null && !usedTags.has(tag)) {
        button.remove();
        return false;
      }
      button.hidden = false;
      button.addEventListener("click", () => setTag(tag === state.tag ? null : tag));
      return true;
    });
    if (usedTags.size === 0) tagFilter.hidden = true;

    // Tag links under each publication filter in place instead of reloading the page.
    document.querySelector(".publications")?.addEventListener("click", (event) => {
      const link = event.target.closest(".publication-tags a[data-tag]");
      if (!link || !usedTags.has(link.dataset.tag)) return;
      event.preventDefault();
      setTag(link.dataset.tag);
      tagFilter.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    const initialTag = new URLSearchParams(window.location.search).get("tag");
    state.tag = usedTags.has(initialTag) ? initialTag : null;
    apply();
  });
</script>

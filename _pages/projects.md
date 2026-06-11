---
layout: page
title: Research
permalink: /research/
description: Why does biodiversity take the forms we observe, and why do traits vary across environments and species? I investigate these questions across broad spatial and taxonomic scales using comparative approaches that integrate biodiversity and environmental datasets, museum collections, and quantitative methods.
nav: true
nav_order: 1
display_categories: [Main themes, Additional directions]
one_column: [Main themes, Additional directions]
# horizontal: true
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
    
  <!-- Generate cards for each project -->
  {% assign is_one_column = false %}
  {% if page.one_column and page.one_column contains category %}
    {% assign is_one_column = true %}
  {% endif %}

  <div class="container">
    {% if is_one_column %}
    <div class="row row-cols-1 row-cols-md-1">
    {% else %}
    <div class="row row-cols-1 row-cols-md-2">
    {% endif %}
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
<!--
{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
-->
{% endif %}
</div>

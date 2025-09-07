---
layout: page
permalink: /teaching/
title: Teaching
description: Teaching has been a deeply rewarding aspect of my doctoral journey, where I learned a great deal from both inspirational mentors and students. I gained experience in engaging with diverse audiences, including lower- and upper-level college students, graduate students, children and the general public.
nav: true
nav_order: 3
display_categories: [University of Maryland, Outreach]
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.teaching | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
    
  <!-- Generate cards for each project -->
  <div class="container">
    <div class="row row-cols-1 row-cols-md-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.teaching | sort: "importance" %}

  <!-- Generate cards for each project -->
  <div class="row row-cols-1 row-cols-md-1">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>

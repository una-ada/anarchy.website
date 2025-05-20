---
layout: default
---

# Hermes the Magi
---

{% assign relevant = site.posts | where: "author","hermesthemagi" %}
{%- for post in relevant -%}
    {%- include preview.html post=post -%}
{%- endfor -%}
---
layout: default
---

# Una Ada
---

{% assign relevant = site.posts | where: "author","una" %}
{%- for post in relevant -%}
    {%- include preview.html post=post -%}
{%- endfor -%}
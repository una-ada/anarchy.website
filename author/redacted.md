---
layout: default
---

# ████
---

{% assign relevant = site.posts | where: "author","redacted" %}
{%- for post in relevant -%}
    {%- include preview.html post=post -%}
{%- endfor -%}
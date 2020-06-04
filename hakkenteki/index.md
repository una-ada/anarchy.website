---
layout: post
license: BY-ND
series: hakkenteki
title: 発見的 (Hakkenteki)
---

_This page is under construction._

{% assign relevant = site.posts | where: "series", page.series %}
{%- for post in relevant -%}
    {%- include preview.html post = post -%}
{%- endfor -%}

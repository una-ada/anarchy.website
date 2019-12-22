---
layout: post
license: BY-ND
series: hakkenteki
stylized_title: >
    ようこそ<ruby><rtc>はっけんてき</rtc><rbc>『発見的』</rbc>
    <rtc>Hakkenteki</rtc></ruby>へ!
title: 発見的 (Hakkenteki)
---

_This page is under construction._

{% assign relevant = site.posts | where: "series", page.series %}
{%- for post in relevant -%}
    {%- include preview.html post = post -%}
{%- endfor -%}

---
layout: post
title: >
    <i>Anarchy.</i>Website
---

Welcome to <em>Anarchy.</em>Website, a blog and archive created by Una Ada.
Herein lies articles on a variety of topics, ranging from linguistics to
history, from gender issues to anime, and from programming to physics. Despite
the name this site is not exclusively about anarchism, but the content here is
primarily written through the lens of anarchy.
{:.no-indent}

---

{%- assign counter = 0 -%}
{%- for post in site.posts -%}
  {%- if counter >= 10 -%}
    {%- break -%}
  {%- else -%}
    {%- unless post.hidden -%}
      {%- include preview.html post=post -%}
      {%- assign counter = counter | plus: 1 -%}
    {%- endunless -%}
  {%- endif -%}
{%- endfor %}

**[More posts &rarr;][2]**
{:.centered}

[2]:    /archive/2

---
layout: post
title: >
    <i>Anarchy.</i>Websiteへようこそ!
---

Welcome to <em>Anarchy.</em>Website, a blog and archive created by Una Ada.
Herein lies articles on a variety of topics, ranging from linguistics to
history, from gender issues to anime, and from programming to physics. Despite
the name this site is not exclusively about anarchism, but the content here is
primarily written through the lens of anarchy.

## Recent

Here are the ten latest articles published to this site, in reverse
chronological order (newest first), for a full list of every article check out
the [archive][1].

{% for post in site.posts limit:10 %}
    {%- include preview.html post=post -%}
{% endfor %}

**[More posts &rarr;][2]**

[1]:    /archive/
[2]:    /archive/2

---
layout: default
title: Etymology and Onomastics
---

# Etymology and Onomastics
{:.title}

---

_Etymology and Onomastics_ is a series of, hypothetically, weekly articles on 
etymology, written by [Una Ada](/author/una). The goal with each entry is to 
cover not just the basic chronology of a given word or name's form through 
history, but its usage and meaning along the way. This, of course, frequently 
extends to broader contextualization, discussing the various peoples and 
cultures that had a hand in that process. Hopefully, the broad nature of the 
discussions allows the reader insight not just into a word, but into history in 
general, especially as each article builds upon previous entries to provide a 
greater and greater narrative of humanity's existence thus far.

---

{% assign relevant = site.posts | where: "series","etymology" | reverse %}
{% assign ser = site.data.series["etymology"] %}
<table>
  {%- for post in relevant -%}
    {%- include localization.html post=post -%}
    <tr>
      <td style="min-width: 3em; vertical-align: top;">
        {{ series.entry }} {{ post.entry }}
      </td>
      <td>
        <h3 style="display: inline;">
          <a href="{{ post.url }}">{{ post.title }}</a>
        </h3>
        {{ post.date | date: '%b %d, %Y' }}
        <br/>
        <em>{{ post.description }}</em>
        {%- assign sorttags = post.tags
          | sort
          | join: ";"
          | remove: "etymology"
          | remove: "onomastics"
          | remove: "history"
          | split: ";"
        -%}
        {%- for tag in sorttags -%}
          {%- if tag != "" -%}
            <code><a href="/tag/#{{ tag }}">#{{ tag }}</a></code>
          {% endif %}
        {% endfor %}
      </td>
    </tr>
  {%- endfor -%}
</table>
---
layout: post
license: BY-ND
series: hakkenteki
title: 発見的 (Hakkenteki)
---

_This page is under construction._

```javascript
function init(next){
    var world = new World({
        seed: 0b11110000100,
        difficulty: normal
    }); // TODO: test values
    world.loadUI(ADMIN);
    // Add events
    world.newEvent(
        Calendar.SPRING,
        null, // default
        Events.WAR,
        e => {console.error(e)}
    ).play();
    // Handle callback
    next(world);
} // end init
```


{% assign relevant = site.posts | where: "series", page.series %}
{%- for post in relevant -%}
    {%- include preview.html post = post -%}
{%- endfor -%}

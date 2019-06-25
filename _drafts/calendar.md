---
author: trewbot
layout: post
tags: javascript programming blog calendars
title: "Building a French Republican Calendar Implementation for JavaScript"
---

In all likelihood, anyone reading this is here because they know me rather than
they were looking for something about calendars or JavaScript or whatever, so
I can somewhat safely assume there's some base knowledge of my podcast, [Goth
Angel Sinners][1], the release schedule for which (while evidently not very
closely followed up to this point) uses the [French Republican Calendar][2].
History nerds may be aware of this already, as well as anyone that's heard [Pt.
IV][3] of the podcast, but the Republican Calendar was created as part of the
effort during the French Revolution to standardize, secularize, and decimalize
measures and bureaucracy in the country; the lattermost part being of particular
interest in that the calendar was _decimalized_, with ten days for each week.
This structural deviation from the Gregorian calendar presents a hurdle for
anyone attempting to, say, use this calendar outside of basic date conversions
as you cannot simply add a localization to whatever application is being used
and call it a day. Here, I'm going to be attempting to do what is required
beyond that using the open source JavaScript library [FullCalendar][4] for
starters.

First thing I'm gonna need to do is figure out where exactly this library
determines what a date is, the schema if you will. I'm assuming this is all
pretty well built and thus derives all this information from a single source,
ideally from something built into the library though it's quite possible that it
is actually using the JavaScript `Date` class. To figure this out I'm just gonna
have to find something that necessitates the information and follow the trail
back from there. Jumping straight into the [repo][5], the first thing that
stands out to me is the "[src][6]" directory, shot in the dark from there I'm
gonna try looking at this "[core/Calendar.ts][7]" class.

Just reading the `import`s, I see a lot of references to `'.datelib/*'` which is
quite promising sounding so I'll look at the "[core/datelib][8]" directory.
Not entirely sure which file would be best, I picked "[calendar-system.ts][9]"
because, well, "system" sounds important. Doubt my process if you will, but the
contents of the file vindicate the hell out of me, from line 23:

```typescript
class GregorianCalendarSystem implements CalendarSystem { ... }
```

That's right! There's an explicit implementation of the Gregorian calendar,
which _implies_ the possibility of implementing a separate system. This is so,
so much better than I could ever have expected, maybe I should read the
documentation and see if this was actually mentioned all along, lmao.

Ok, so [the documentation][10] on their site looks to be mostly implementation
side and I want augmentation stuff. There is, however, [something][11] about how
to include plugins which again implies the creation of plugins. Combining this
knowledge with what I saw in the source code leads me to believe there is a way
to register a new `CalendarSystem` via a plugin. Yay! Progress!

Glancing over this a bit more, I do have some concerns, such as how does it know
how long a week is if this only gives it a specific date? There are, if I recall
correctly, a number of non-Gregorian calendar systems that still use the seven
day week and 12 months per year (these seemingly arbitrary numbers are actually
derived from lunar cycles so it's not super uncommon). I'll worry about this
later... or now... I'm incredibly indecisive here. In any case there are some
more references here to look into that might help figure that out anyway, such
as `DateMarker` and some other associated functions coming from
"[marker.ts][12]".

Aaaand, having opened that file, I've now seen the one thing I didn't want to
see: a numerical literal `7`. Guess I'm doing a fork. _Unless_ classes can be
overwritten using plugins, which maybe they can. I think they can? I don't know,
I should actually look these things up. Whatever, it's 03:30, I'll work on this
s'more after work later.

Alright, I'm back, work sucked but that's normal, it's Friday night and I'm
scrolling thru source code again. (:

In particular at the moment I'm trying to find what tells it how many days there
are in a week, all I saw before was how to calculate a date a week after another
date which should be easy enough to rewrite. In that "marker.ts" there was this
on line 5:

```typescript
export const DAY_IDS = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ]
```

I'm assuming this constant will be used elsewhere so I've searched for it and
found two files: "[common/table-utils.ts][13]" and
"[component/date-rendering.ts][14]," both of which use it to create classes for
DOM elements like so:

```typescript
classes.push('fc-' + DAY_IDS[date.getUTCDay()])
```

These all seem to be just used as defaults in case a full roster of classes for
the date DOM element cannot be determined, which begs the question of how that
is determined. The answer to which seems to be that it used a function called
`getDayClasses(...)`. Of course, I was reading this from the "table-utils" and
the function itself is actually contained in "date-rendering" so I'm gonna pick
at that a bit. A cursory glance leads me to believe this might be a dead end,
the `DAY_IDS` constant is used for any active day, otherwise it adds a class
called `fc-disabled-day`; though it might be useful to look into the style for
these and that one might be the easiest to track down. Maybe.

The style, found in "[common/\_standard.scss][15]" is, in whole:

```css
.fc-unthemed .fc-disabled-day {
  background: #d7d7d7;
  opacity: .3;
}
```

This is... relatively useless.

[1]:    https://twitter.com/gthnglsnnrs
[2]:    https://en.wikipedia.org/wiki/French_Republican_calendar
[3]:    https://anchor.fm/gthnglsnnrs/episodes/Part-IV-The-Paris-Commune-e2viul
[4]:    https://fullcalendar.io/
[5]:    https://github.com/fullcalendar/fullcalendar
[6]:    https://github.com/fullcalendar/fullcalendar/tree/5c271f1d0f603406530fed294b50315de3715055/src
[7]:    https://github.com/fullcalendar/fullcalendar/blob/5c271f1d0f603406530fed294b50315de3715055/src/core/Calendar.ts
[8]:    https://github.com/fullcalendar/fullcalendar/tree/5c271f1d0f603406530fed294b50315de3715055/src/core/datelib
[9]:    https://github.com/fullcalendar/fullcalendar/blob/5c271f1d0f603406530fed294b50315de3715055/src/core/datelib/calendar-system.ts
[10]:   https://fullcalendar.io/docs
[11]:   https://fullcalendar.io/docs/typescript
[12]:   https://github.com/fullcalendar/fullcalendar/blob/5c271f1d0f603406530fed294b50315de3715055/src/core/datelib/marker.ts
[13]:   https://github.com/fullcalendar/fullcalendar/blob/587922d8c018dd31be6ced0147fdb9f9d0c10241/src/core/common/table-utils.ts
[14]:   https://github.com/fullcalendar/fullcalendar/blob/83ffa5a082a1749a58ae568134e487473d6cc432/src/core/component/date-rendering.ts
[15]:   https://github.com/fullcalendar/fullcalendar/blob/c3db87d7b34dd53ae4c6ad24636b7d8573ce3116/src/core/common/_standard.scss

---
author: una
description: >
    An outline of the workflow for creating web fonts using Adobe Illustrator
    and FontForge on Windows.
layout: post
tags: design tutorial graphics font web-design
title: Web Fonts with Illustrator and FontForge (Windows)
---

- toc
{:toc}

## Preface

Per my last blog, I've recently taken on the frankly arduous task of creating
my own font; said blog is written more in the manner of a stream of
consciousness as I struggled and pushed thru with trial-and-error. Having gotten
to a point where my first font is technically usable (tho with a number
of potential compatibility issues), I'd like to delineate the lessons learned
therein.

Since my design could be considered rather unconventional (handwritten with
long descenders), I believe the technical details are far more relevant than
the design itself. Going from that, this will article will merely discuss
considerations for software usage and the like.

## I. Design

As previously stated, this isn't aiming to be a tutorial on font design, there
are a fair few decent sources on this to the point where they even weigh down
tutorials on the technical workflow. With that said, this section may seem to
be pointless, but that is not entirely the case as there is still something to
be said about this step of the process here, tho it may only be a brief
reminder:

_Think about how your font will look in context._ What I mean by this can more
or less be divided into three cases:

1.  How will your font look as words rather than individual glyphs? It's
    helpful to consider ahead of time what sort of spacing you're going for,
    especially width consistency or variation.
2.  How will your font look next to other fonts? Unless you want to cover all
    of Unicode, include both body and fixed-width forms, and $\LaTeX$
    compatibility, it will probably be used alongside other fonts. Of course,
    this might not be the case for very specialized fonts, but it is
    nonetheless a key consideration. The length of ascenders and descenders,
    along with the x-height, will greatly affect how a font can be used.
3.  How will your font look when replacing other fonts? This is similar to the
    last point, if someone were to design a page and switch from another font
    to yours, would this affect the design significantly? Another way to look
    at it is whether or not the font is intended to be a centerpiece, something
    that the rest of the design will be adjusted to match.

That said, the only other point to mention here is that I am assuming from this
point forward that your font was designed on paper and digitized in some
manner. Of course, this can easily be done with a pen and tablet to create a
digital draft from the start. Either method should result in a static image
file with a draft of your design.

## II. Vectorizing



## III. Cleaning

## IV. Import

accents > duplicate spacing characters as combining characters > automatically build accented characters > can manually adjust positioning and scale

some require overlaps > unlink references > remove overlap in menu > may require manually editing the curves > join points by dragging on top of each other (drag away first)

## V. Metrics

## VI. Validation

self intersect: try merging points that are close together > will change the extrema which can be fixed automatically > will need to set control points to integers again

## VII. Export

## VIII. CSS

## Footnotes

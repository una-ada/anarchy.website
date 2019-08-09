---
author: redacted
description: >
    (Spring, 2014) Do you like math? Of course you do, math is the basis of
    modern human understanding and logic, everybody loves it. Do you wish your
    feeble understanding of algebra and discrete mathematics could be expanded
    to be more _continuous_? Then you want to learn the beauty of Calculus, both
    differential and integral.
layout: post
permalink: "notes/math/166"
tags: notes mathematics school
title: Notes on <i>Calculus</i> I
license: BY-NC-SA
---

<style>
    strong {color:#36d;}
</style>
<script src="https://phene.co/graph/graph.js"></script>

<b>This now is the 5th edition of my AP Calculus notes. From the original
scribbles in fall of 2013 to the structured tome I began in 2015 of all my math
notes, I've spent quite some time reviewing these. That is not to say I expect
them to be perfect, they are written by me for me, the implication that they
could help anyone else is a tad narcissistic. If you can't draw conclusions with
very little to go on, or aren't mathematically inclined, these notes may only
serve as a review guide for you at best.</b>

## Introductory Ideas

**Horizontal Asymptotes (H.A.s)** are defined by the limit of the function
$f(x)$ as $x\to\infty$, and yes, the curve can cross its asymptotes (as opposed
to what is often taught in pre-calculus courses). We define this asymptote as

$$y=b\text{ where }\lim_{x\to\pm\infty}f(x)=b.\tag 1\\$$

Similarly, a **Vertical Asymptote (V.A.)** is defined as

$$x=a\text{ where }\lim_{x\to\pm a}f(x)=\infty.\tag 2\\$$

A **removable discontinuity** is a discontinuity at a single point that can be
removed by canceling terms of the function. An example of this:
$\require{cancel}(2x-3)\cancel{(2x+3)}/\cancel{(2x+3)}(x-1)$.

The basic definition of a discontinuity is that a if $f(c)\neq\lim_{x\to c}f(x)$
then $f(x)$ is discontinuous at $c$. An **oscillating discontinuity** occurs
when the curve oscillates at greater and greater frequencies as it approaches a
point such that it is never actually defined at said point. A good example of
this is $\sin(1/x)$:

<br>

<canvas id="graph-1" style="width:100%;height:300px;"></canvas>
<script>
    var graph1 = document.getElementById("graph-1"),
        rect = graph1.getBoundingClientRect();
    graph1.width = rect.width;
    graph1.height= rect.height;
    var ctx = graph1.getContext("2d");
    Graphene.graph.render(
        ctx,x=>Math.sin(1/x),
        {axisRangeX:[-Math.PI,Math.PI],tickCountX:64,extendRateX:4,labelRateX:8,
         axisRangeY:[-1.5,1.5],labelFont:"11pt 'Lora'",color:"#3366dd"}
    );
</script>

<p id="desc-1"><b>FIGURE 1.</b> Graph of the function $\sin(1/x)$.</p>

<br>

The **Intermediate Value Theorem of Continuous Functions** (not to be confused
with any other intermediate value theorems) states that **if $f(a)$ and $f(b)$
both exist then $f(c)$ where $c$ is some value $a\le c\le b$ must exist.** This
sets forth a mathematical basis for the concept of continuity.

Now, we may introduce the concept of rates of change. Assume we have a secant
line from $x_1$ to $x_2$ on the function $f$; the slope (or average rate of
change) along this line is then $f(x_1)-f(x_2)/x_1-x_2$. While this idea is by
itself trivial, we can expand upon it further to rather than discuss the
_average_ rate of change discuss the **instantaneous rate of change**. To do
this we must shrink the distance between $x_1$ and $x_2$ such that it approaches
zero, which we do by instead considering $x_2$ in terms of $x_1$ and said
distance such that $x_1$ simply becomes $x$ and $x_2$ becomes $x+h$ where $h$ is
that distance:

$$\lim\limits_{h\to0}\frac{f(x+h)-f(x)}h.\tag3\\$$

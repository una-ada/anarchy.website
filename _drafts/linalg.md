---
author: uja
description: >
    (Fall 2015) Matrices. Matrices. Matrices.
layout: post
permalink: notes/math/256
tags: notes school linear-algebra mathematics
title: Notes on <i>Linear Algebra</i>
---

<style>
    strong {color:#36d;}
</style>

Keywords and some definitions are marked in **blue**.
[MathJax](https://www.mathjax.org/) is used for mathematics rendering, to help
with readability there is a context menu that you can access by right-clicking
on any embedded equation to set a "zoom trigger," allowing you to enlarge the
math by hovering, clicking, or double clicking. This feature is disabled by
default.

* toc
{:toc}

## Introduction to Systems of Linear Equations

[2] A **linear equation** in $n$ variables $x_1,x_2,x_3,\ldots,x_n$ is of the
form

$$a_1x_1+a_2x_2+a_3x_3+\cdots+a_nx_n=b.\tag1 $$

The **coefficients** $a_1,a_2,a_3,\ldots,a_n$ and the **constant term** $b$ are
real numbers. $a_1$ is called the **leading coefficient** and $x_1$ the
**leading variable**. [3] A **solution** of a linear equation in $n$ variables
is a sequence of $n$ real numbers $s_1,s_2,s_3,\ldots,s_n$ arranged to satisfy

$$x_1=s_1,x_2=s_2,x_3=s_3,\ldots,x_n=s_n.\tag2 $$

The set of all solutions is called a **solution set**, finding this set is the
definition of **solving** the equation., To describe a set use a **parametric
representation**.

For example, solve the equation $x_1+2x_2=4$. Here $x_2$ is **free** to be
whatever it wants, while $x_1$ relies on $x_2$ (this is clearer if we rewrite
the equation as $x_1=4-2x_2$). So, we can consider $x_2$ to be a **parameter**:

$$x_1=4-2t,x_2=t.\tag3 $$

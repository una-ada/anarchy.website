---
author: uja
layout: post
permalink: notes/math/331
tags: notes school diffeq mathematics
title: Notes on <i>Differential Equations</i>
---

<style>
    strong {color:#36d;}
</style>

Each specific note is marked with a page number in brackets, e.g. "[4]". These
page numbers refer to the textbook I had used for this course in the fall of
2015:

>   Nagle, R. Kent, Edward B. Saff, Arthur David Snyder. *Fundamentals of
    Differential Equations* 8<sup>th</sup> edition. Boston: Addison-Wesley,
    2012.

Keywords and some definitions are marked in **blue**.
[MathJax](https://www.mathjax.org/) is used for mathematics rendering, to help
with readability there is a context menu that you can access by right-clicking
on any embedded equation to set a "zoom trigger," allowing you to enlarge the
math by hovering, clicking, or double clicking. This feature is diabled by
default.


* toc
{:toc}

## Background

[4] There are **ordinary differential equations** and **partial differential
equations** which differ in that the formal is with respect to (wrt) a single
variable where as the latter may be of multiple variables or a single variable
of a multivariate function. The general form is

$$a_n(x)\frac{d^ny}{dx^n}+a_{n-1}(x)\frac{d^{n-1}y}{dx^{n-1}}+\cdots+a_1(x)
\frac{dy}{dx}+a_0(x)y=F(x),\tag1 $$

and any differential equation that does not meet this form is considered to be
**nonlinear**.

## Solutions & Initial Value Problems

[6] The general form of a function where $x$ is the independent and $y$ is the
dependent variable is

$$F\left(x,y,\frac{dy}{dx},\frac{d^2y}{dx^2},\ldots,\frac{d^ny}{dx^n}\right)=0,
\tag2 $$

or

$$\frac{d^ny}{dx^n}=F\left(x,y,\frac{dy}{dx},\frac{d^2y}{dx^2},\ldots,
\frac{d^{n-1}y}{dx^{n-1}}\right).\tag3 $$

We then define some function $\phi(x)$ that when substituted for $y$ in either
Eq.2 or 3 for all $x$ on some interval $I$ is called an **explicit solution** to
the equation on $I$. That sounds really cool, but at the moment it doesn't
really mean anything.

[8] On the other hand, a relation $G(x,y)$ is said to be an **implicit
solution** to Eq.3 on the interval $I$ if it defines one or more explicit
solutions. This often defines multiple solutions because of the constant term
that is created through integration.

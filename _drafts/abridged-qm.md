---
author: uja
layout: post
tags: notes quantum-mechanics school
title: Abridged Notes on <i>Quantum Mechanics</i> I
---

<style>
    strong {color:#36d;}
</style>

These notes just cover a few basic ideas in Quantum Mechanics and are derived
from my full notes on *Quantum Mechanics*.

A **system** is some collection of particles, we describe it using
**observables**. To know the **state** of a system we must know the values of
the observables. Both quantum and classical mechanics are **dynamical** theories
in that they describe states; however, while classical is **deterministic** (we
can predict the future using it), quantum mechanics can only describe
probability. Mathematically, this is done with **wave functions** ($\Psi(\vec{r}
,t)$) which are defined as the **probability density amplitude**. To derive the
probability density from this we use:

$$|\Psi(\vec{r},t)|^2=\Psi^\ast(\vec{r},t)\Psi(\vec{r},t).\tag1 $$

Here the notation $\Psi^\ast$ refers to the complex conjugate of the wave
function. A wave function  must meet the following conditions:
1.  Must be **normalized** ($\int_{-\infty}^{\infty}\Psi(\vec{r},t))d\vec{r}=1$)
2.  Must match the boundary conditions. In a well $\Psi=0$ at the walls, whereas
    when not confined $\lim_{|x|\to\infty}\Psi=0$
3.  Arbitrary phases are allowed e.g. the phase $\phi$ in $\Psi=f(x,t)e^{i\phi}$
    since $P(x,t)=\Psi^\ast\Psi=f^\ast e^{-i\phi}fe^{i\phi}=f^\ast f$ (the phase
    does not affect observables)
4.  Must be a function
5.  Must be continuous
6.  The derivative of $\Psi$ must be continuous (such that $\Psi$ is a smooth
    function)
7.  Must satisfy the **Schrödinger Equation**:

$$i\hbar\frac{\partial\Psi}{\partial t}=\frac{-\hbar^2}{2m}\nabla^2\Psi
+V(\vec{r})\Psi.\tag2 $$

For a 1-Dimensional **free particle** (a particle with no potential energy) this
can be simplified to:

$$i\hbar\frac{\partial\Psi}{\partial t}=\frac{-\hbar^2}{2m}\frac{\partial^2\Psi}
{\partial x^2}.\tag3 $$

While this cannot be derived, we can feel like we derived it by proving that
$\Psi=Ae^{i(kx-\omega t)}$ is a solution to it. We start this by expanding the
left hand side of Eq.3 with the assumption that $E=hf=\hbar\omega$:

$$i\hbar\frac{\partial\Psi}{\partial t}=i\hbar(-i\omega)\Psi=\hbar\omega\Psi=
E\Psi,\tag5 $$

then, given that $KE=\frac{p^2}{2m}$ where $p=\frac{h}{\lambda}\cdot\frac{2\pi}
{2\pi}=\hbar k$ such that $KE=\frac{\hbar^2k^2}{2m}$, for a free particle $V=0$,
and that $E=KE+V$, we say that

$$i\hbar\frac{\partial\Psi}{\partial t}=E\Psi=\frac{\hbar^2k^2}{2m}\Psi.\tag6 $$

On the right hand side of Eq.3, we can simply evaluate the partial derivative to
find that $\frac{\partial^2}{\partial x^2}\Psi=(ik)^2\Psi=-k^2\Psi$ so that

$$\frac{-\hbar^2}{2m}\frac{\partial^2\Psi}{\partial x^2}=\frac{\hbar^2k^2}{2m}
\Psi.\tag7 $$

Since the right hand sides of Eq.6 and Eq.7 are equal, we can then set their
left hand sides to be equal, giving us the final form of

$$i\hbar\frac{\partial\Psi}{\partial t}=\frac{-\hbar^2}{2m}\frac{\partial^2\Psi}
{\partial x^2},\tag8 $$

thus proving that $\Psi=Ae^{i(kx-\omega t)}$ is a solution&hellip; probably.

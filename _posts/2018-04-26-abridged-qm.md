---
author: uja
description: >
    These notes just cover a few basic ideas in Quantum Mechanics, giving an
    introduction to wave function, the Schrödinger Equation (both time dependent
    and independent), and velocity of a particle.
layout: post
tags: notes quantum-mechanics school
title: Abridged Notes on <i>Quantum Mechanics</i> I
---

<style>
    strong {color:#36d;}
</style>

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
1.  Must be **normalized** ($\int_{-\infty}^{\infty}\Psi(\vec{r},t)d\vec{r}=1$)
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

For further exploration of the Schrödinger Equation, we can derive a time
independent form. Where Eq.3 will hereafter be referred to as the **Time
Dependent Schrödinger Equation** or "TDSE," this will be the **Time Independent
Schrödinger Equation** or "TISE." This is done by the process of separation of
variables, beginning with defining some function $\Psi(x)$ and $T(t)$ such that
$\Psi(x,t)=\Psi(x)T(t)$ and proceeding to substitute them into the TDSE:

$$i\hbar\Psi(x)\frac{\partial}{\partial t}T(t)=\frac{-\hbar^2}{2m}T(t)
\frac{\partial^2}{\partial x^2}\Psi(x).\tag9 $$

For the sake of laziness we'll just refer to $T(t)$ as $T$ and $\Psi(x)$ as
$\Psi_E$ from hereon. Moving each function to its own side of the equation
yields

$$i\hbar T^{-1}\frac{\partial T}{\partial t}=\frac{-\hbar^2}{2m}\Psi_E^{-1}
\frac{\partial^2\Psi_E}{\partial x^2}.\tag{10} $$

This equation does describe the energy of a system, so we can say that both
sides are equal to the constant value $E$ (I don't have a more thorough
explanation for this, sorry). First, the left hand side:

$$\begin{align} i\hbar T^{-1}\frac{\partial T}{\partial t}&=E,\tag{11a} \\
i\hbar\frac{\partial T}{\partial t}&=ET.\tag{11b} \end{align}$$

Haha, like the alien movie. Anyway, moving on to the right hand side:

$$\begin{align} \frac{-\hbar^2}{2m}\Psi_E^{-1}\frac{\partial^2\Psi_E}{\partial
x^2}&=E,\tag{12a} \\
\frac{-\hbar^2}{2m}\frac{\partial^2\Psi_E}{\partial x^2} & = E\Psi_E.\tag{12b}
\end{align}$$

This last equation (Eq.12b) is the TISE. If we guess a function for the time
dependence to be $T=e^{-i\omega t}$ and evaluate $\frac{\partial T}{\partial t}$
to be $-i\omega e^{-i\omega t}=-i\omega T$ which can be substituted into Eq.11b:

$$\begin{align}
i\hbar(\partial T/\partial t) & = i\hbar(-i\omega T)\tag{13a} \\
& = -i^2\hbar\omega T\tag{13b} \\
& = \hbar\omega T\tag{13c} \\
& = ET,\tag{13d} \end{align}$$

showing that $T=e^{-i\omega t}$ is a solution for time dependence, and so is the
time dependence for any $\Psi_E$.

Finally, some discussion of $k^2$. As previously mentioned, $KE=\frac{\hbar^2
k^2}{2m}$, and since $E=KE+V$ we can say that $KE=E-V$. Earlier $0$ was used for
$V$ but in this instance it will be an arbitrary constant $V_0$:

$$\begin{align} \frac{\hbar^2k^2}{2m}&=E-V_0,\tag{14a} \\
k^2&=\frac{2m}{\hbar^2}(E-V_0)\tag{14b} \\
&=\frac{2m}{\hbar^2}(\hbar\omega-V_0),\tag{14c}\end{align}$$

here Eq.14c describes a dispersion relation between $k$ and $\omega$. We can
also consider velocity $v$:

$$\begin{align} v&=f\lambda\cdot\frac{2\pi}{2\pi}\tag{15a} \\
&=2\pi f\cdot\frac\lambda{2\pi}\tag{15b} \\
&=\frac\omega k.\tag{15c}\end{align}$$

With this we can revisit Eq.14 to find a value for the velocity of the particle:

$$\begin{align} E-V&=KE,\tag{16a} \\
\hbar\omega-V_0&=\frac{k^2\hbar^2}{2m},\tag{16b} \\
\omega&=\frac{k^2\hbar}{2m}+\frac{V_0}{\hbar},\tag{16c} \\
v&=\frac{1}{k}\left(\frac{k^2\hbar}{2m}+\frac{V_0}{\hbar}\right)\tag{16d} \\
v&=\frac{k\hbar}{2m}+\frac{V_0}{k\hbar}.\tag{16e}\end{align}$$

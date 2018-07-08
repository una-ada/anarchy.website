---
author: uja
description: >
    Following up from the first section, these notes will cover finding
    solutions to the Time Independent Schrödinger Equation in what is referred
    to as the "Particle in a Box" example.
layout: post
tags: notes physics quantum-mechanics school
title: Abridged Notes on <i>Quantum Mechanics</i> II
---

<style>
    strong {color:#36d;}
</style>

<center>
    Parts:
    <a href="/2018/04/26/abridged-qm.html">I</a>,
    <b>II</b>,
    <a href="/2018/07/04/abridged-qm-3.html">III</a>
</center>

Last time we left off after defining the TISE. $\Psi_E$ is currently unbounded
and so not normalizable. In order to remedy this we must define some boundary
conditions:

$$V(x)=\begin{cases}
\infty, & |x|\gt L/2 \\
V_0,    & -L/2\ge x\ge L/2 \\
\end{cases},\tag1 $$

which defines a **well** of width $L$, where the particle cannot exist outside
the bounds of $\pm L/2$. Different forms are more
useful in different situations, specifically the $C\sin(kx)$ and $C\cos(kx)$
forms are best for standing waves and the $Ce^{ikx}$ form for moving
waves. In a box (or well), we assume the particle to be a standing wave, due to
symmetry about the origin we would choose a $\cos$ form, but still add a $\sin$
term with the full expectation that it would be multiplied by a zero constant:

$$\Psi_E(x)=A\cos(kx)+B\sin(kx).\tag2 $$

We can then apply the boundary conditions to this equation such that $\Psi_E$
is continuous, starting with the declaration

$$\Psi_E(\pm L/2)=0,\tag3 $$

and substituting this into Eq.2 yielding the system of equations

$$\begin{align}
A\cos(kL/2)+B\sin(kL/2)&=0,\tag{4a} \\
A\cos(kL/2)-B\sin(kL/2)&=0.\tag{4b}
\end{align}$$

By adding Eq.4a and Eq.4b we find the single equation

$$2A\cos(kL/2)=0,\tag5 $$

which could be solved to find

$$\begin{align}
kL/2&=(2n+1)\frac\pi2,&n=0,1,2,\ldots,\tag{6a} \\
kL/2&=n\cdot\frac\pi2,&n=1,3,5,\ldots,\tag{6b} \\
k&=\frac{n\pi}L,&n=1,3,5,\ldots.\tag{6c}
\end{align}$$

If we had instead subtracted Eq.4b from Eq.4a we would have found the equation

$$2B\sin(kL/2)=0,\tag7 $$

the solution to which, along the same lines as Eq.6, would be found as

$$k=\frac{n\pi}L,n=0,2,4,\ldots,\tag8 $$

giving us then an overall equation of

$$\Psi_E(x)=\begin{cases}
A\cos\left(\frac{n\pi}L\cdot x\right), & \text{if $n$ is odd}, \\
B\sin\left(\frac{n\pi}L\cdot x\right), & \text{if $n$ is even}.
\end{cases}\tag9 $$

Using Eq.6c, Eq.8, and from the previous part of these notes Eq.14c we can draw
conclusions about $E$:

$$\begin{align}
k^2&=\frac{2m}{\hbar^2}\left(E-V_0\right),\tag{10a} \\
\frac{n^2\pi^2}{L^2}&=\frac{2m}{\hbar^2}\left(E-V_0\right),\tag{10b} \\
\frac{n^2\pi^2\hbar^2}{2mL^2}&=E-V_0,\tag{10c} \\
\frac{n^2\pi^2\hbar^2}{2mL^2}+V_0&=E,\tag{10d}
\end{align}$$

which tells us that $E$ is quantized, a very important idea in *quantum*
mechanics. We also then need to normalize Eq.9 in order to make it a proper wave
function, we'll do this using the odd case:

$$\begin{align}
1&= \int^{L/2}_{-L/2}\Psi^\ast\Psi dx,\tag{11a} \\
 &= A^2\int^{L/2}_{-L/2}\cos^2\left(\frac{n\pi}L\cdot x\right)dx,\quad
    \cos^2(u)=\frac12(1+\cos(2u))\tag{11b} \\
 &= \frac{A^2}{2}\left(\int^{L/2}_{-L/2}1\,dx+\int^{L/2}_{-L/2}\cos\left(2\cdot
    \frac{n\pi}{L}\cdot x\right)dx\right),\tag{11c} \\
\frac{2}{A^2} &= L + \int^{L/2}_{-L/2}\cos\left(\frac{2n\pi}{L}\cdot
    x\right)dx,\tag{11d} \\
 &= L + \left.\frac{L}{2n\pi}\sin\left(\frac{2n\pi}{L}\cdot x\right)
    \right]^{L/2}_{-L/2}\tag{11e} \\
 &= L + \frac{L}{2n\pi}[\sin(n\pi)-\sin(-n\pi)],\quad\sin(n\pi)=0\tag{11f} \\
\frac{2}{A^2} &= L,\tag{11g} \\
A &= \sqrt{2/L}.\tag{11h} \\
\end{align}$$

We call solutions to the TISE **stationary states** due to their lack of time
dependence; while the superposition principle does not apply to these solutions
(a linear combination of stationary states is not a stationary state) it does
apply to solutions to the TDSE. Consider the unbounded case:

$$V(x)=V_0,\quad-\infty\lt x\lt\infty,\tag{12} $$

with a solution being of the form:

$$\Psi(x,t)=Ae^{i(\pm kx-\omega t)}.\tag{13} $$

However, as previously stated, this is not a normalizable function. So let's
talk about infinite waves. Since the function would extend to infinity, the
uncertainty on the $x$-coordinate of the particle would be infinite, that is to
say $\Delta x=\infty$, and so according to the uncertainty principle we can also
say $\Delta p=0$. This is called a **pure momentum state** since the momentum of
the particle is known exactly but the position is not known at all. Furthermore,
if we throw some $\hbar$s into Eq.13 and keep in mind that $E=\hbar\omega$ and
$p=\hbar k$:

$$\begin{align}
\Psi(x,t)&=Ae^{i(\pm k\hbar x-\hbar\omega t)\cdot(1/\hbar)},\tag{14a} \\
&=Ae^{i(\pm px-Et)\cdot(1/\hbar)}.\tag{14b}
\end{align}$$

This points us to the conclusion that $E$ and $t$ are linked in the same way as
$p$ and $x$, such that $\Delta E=0$ and $\Delta t=\infty$. As such we can also
call this a **pure energy state**, from this we know that every solution to the
TISE has exact energy. But what about the whole not being normalizable issue?
Well, if we add two wave functions together we create a beat, if we add more it
simply makes these beats more distinct, and so we can keep doing this to keep
pushing the beats further and further apart ad infinitum:

$$\begin{align}
\Psi(x,t)&=\sum^N_{j=1}A_je^{i\left(\pm k_jx-\omega_jt\right)},\tag{15a} \\
         &=\int^\infty_0A(k)e^{i(\pm kx-\omega(k)t)}dk,\tag{15b}\\
         &=\frac1{\sqrt{2\pi}}\int^\infty_{-\infty}A(k)e^{ikx}e^{-i\omega(k)t)}
           dk.\tag{15c}\\
\end{align}$$

The $1/\sqrt{2\pi}$ term is actually a normalization factor, I think... anyway,
this is a normalizable function. Interestingly, if we take a look at the case of
$t=0$:

$$\Psi(x,0)=\frac1{\sqrt{2\pi}}\int^\infty_{-\infty}A(k)e^{ikx}dk,\tag{16}$$

we'll see that this actually resembles a Fourier Transform, which means it would
then have the inverse of

$$A(k)=\frac1{\sqrt{2\pi}}\int^\infty_{-\infty}\Psi(x,0)e^{-ikx}dx.\tag{17}$$

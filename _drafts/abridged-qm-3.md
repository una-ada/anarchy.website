---
author: uja
description: >
    ...
layout: post
tags: notes physics quantum-mechanics school
title: Abridged Notes on <i>Quantum Mechanics</i> III
---

<style>
    strong {color:#36d;}
</style>

<center>
    Parts:
    <a href="/2018/04/26/abridged-qm.html">I</a>,
    <a href="/2018/05/10/abridged-qm-2.html">II</a>,
    <b>III</b>
</center>

Previously on "Abridged Notes on _Quantum Mechanics_" we briefly touched on the
Fourier Transform representation of the Time-Independent Schrödinger Equation
(TISE). The Transform moves us between position $x$ and wavelength $k$, the
latter of which could also be related to momentum. This relation of space and
momentum is reminiscent of the Heisenberg Uncertainty Principle (HUP) and
through some basic substitution we can make this even more evident:

$$\begin{align}
\Delta x\Delta p &\geq\hbar/2,\tag{1a} \\
\Delta x\hbar\Delta k &\geq\hbar/2,\tag{1b} \\
\Delta x\Delta k &\geq1/2.\tag{1c} \\
\end{align}$$

This implies, rightfully so, that the HUP can be shown using the Fourier
Transform. Consider Eq.13 from the previous section where $t=0$:

$$\Psi(x,0)=Ae^{ik_0x}.\tag2 $$

Euler's Equation would tell us that this represents a $\cos$ function with
frequency $k_0$, and thus its Fourier Transform $A(k)$ would appear as a spike
at $k_0$. This tells us that, since $\Psi(x,0)$ is a cosine function, $\Delta x
\sim\infty$ and $\Delta k\sim0$. Both the HUP and the FT state that a wider
$\Psi(x,0)$ implies a narrower $A(k)$ and vise versa.

$$
\hat{O}\xi
$$

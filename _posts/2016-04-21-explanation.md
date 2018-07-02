---
author: tjh
layout: post
tags: school physics
---

We began with the basic equations for this scenario that we were given during
the simulations, first being the speed of the wave:

$$v=\sqrt{\frac{F_T}{\mu}},\tag1$$

where $v$ is the velocity of the wave in meters per second, $F_T$ is the tension
on the string in Newtons, and $\mu$ is the linear density of the string in
kilograms per meter; then the wavelength:

$$\lambda_n=\frac{2L}{n},\tag2$$

where $\lambda_n$ is the wavelength for the nth harmonic, $L$ is the length of
the string, and $n$ is the number of the harmonic; and finally the frequency:

$$f_n=\frac{v}{\lambda_n}=\frac{vn}{2L},\tag3$$

where $f_n$ is the frequency of the nth harmonic. Since we were adjusting the
frequency and finding a value for n, our independent variable was $f_n$ and our
dependent was $n$. To get a function of our independent for our dependent we
began by substituing the equation for $v$ into that for $f_n$:

$$f_n=\frac{n}{2L}\sqrt{\frac{F_T}{\mu}}.\tag4$$

Since we were creating tension with a pulley, we defined $F_T$ as

$$F_T=mg,\tag5$$

where $m$ is the mass of the weight at the end of the pulley. With this
substitution we were able to derive an equation for a fit line:

$$f_n=\frac{n}{2L}\sqrt{\frac{mg}{\mu}},\tag{6a}$$

$$f_n^{-2}=\frac{\mu4L^2}{mgn^2},\tag{6b}$$

$$n^2=\mu\frac{4L^2}{mg}f_n^2.\tag{6c}$$

The $\frac{4L^2}{mg}$ term consisted entirely of constants, $L$ being measured
at 1.46m, $m$ being 0.15kg, and $g$ being the acceleration due to gravity
9.81m/s<sup>2</sup>, which simplifies the equation to

$$n^2=\mu\cdot5.79\cdot f_n^2.\tag7$$

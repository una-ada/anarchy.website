---
title: Building an Acousto-Optical Deflector
---

# Building an Acousto-Optical Deflector

*This post was written as a project proposal but never submitted for funding.*

## Introduction

The acousto-optical effect is the change in refractive index of a material
caused by an acoustic wave applied to said material. This is a particular case
of photoelasticity, which can be used to experimentally measure stress
distributions within a material<sup><a href="#1">1</a></sup>, where the
difference in refractive indices (represented by the optic
indicatrix<sup><a href="#2">2</a></sup> B) along each axis is caused by acoustic
waves rather than mechanical tension. The change in optical indicatrices is
found then with the equation

$$\nabla B_i=p_{ij}a{j},\tag1$$

where $p_{ij}$ is the photoelastic tensor and $a_j$ is the
strain<sup><a href="#3">3</a></sup>. However, it can be assumed that if a laser
is being used as a light source normal to a single axis $z$, then only the
refractive index along said axis needs to be calculated to predict the path of
the light. It is also assumed that the acoustic wave applied to the refractive
material is planar in the following calculation of the refractive index:

$$n(z,t)=n_0+\Delta n\cos(2\pi ft-Kz),\tag2$$

where $n_0$ is refractive index of the material without strain, $f$ is the
frequency and $K$ is the wave number of the acoustic wave, and $\Delta n$ is the
refractive index change caused by the acoustic wave:

$$\Delta n=-\frac{1}{2}n_0^3 pa.\tag3$$

This creates a diffraction grating along the z-axis moving as the acoustic wave
moves along the same axis. The diffraction pattern of this grating will fall
into one of two categories: the Raman-Nath Regime or the Bragg Regime,
determined by the Klein-Cook Parameter:

$$Q=\frac{2\pi\lambda_0L}{n_0\Lambda^2}
    =\frac{2\pi\lambda_0Lf^2}{n_0v^2},\tag4$$

where $\lambda_0$ is the wavelength of the optic wave; $L$ is the distance
across the acoustic wave that the optic wave travels; $\Lambda$ is the
wavelength, $f$ is the frequency, and $v$ is the velocity of the acoustic wave.
The diffraction falls into the Raman-Nath Regime when $Q\ll 1$, and the Bragg
Regime when $Q\gg 1$. The Raman-Nath Regime gives multiple diffractions at
several angles, which is not optimal for the creation of a deflector, as such it
is best to remain within the Bragg Regime.

<br>

![An acousto-optical deflector](/assets/img/ao.png)

**FIGURE 1.** An example of an acousto-optic deflector, showing the material
with the acoustic waves vertically oriented and a width of $L$. This example
assumes Bragg Regime, and therefore has an incident angle of $\theta_B$ from the
horizontal, and a diffraction pattern with two maxima: the 0th order maximum at
$-\theta_B$ and the 1st order maximum at $\theta_B$ from the horizontal.

<br>

To ensure that the deflector follows this condition, the Klein-Cook Parameter
can be substituted into the condition for the Bragg Regime:

$$\frac{2\pi\lambda_0L}{n_0\Lambda^2}\gg1,\tag{5a}$$
$$2\pi\lambda_0L\gg n_0\Lambda^2,\tag{5b}$$

which can be further simplified based on a few assumptions: using a common red
HeNe laser<sup><a href="#4">4</a></sup> as the light source such that
$\lambda_0 = 632.8nm$, and paratellurite (TeO2)<sup><a href="#5">5</a></sup> as
the material through which the acoustic waves are produced such
that<sup><a href="#6">6</a></sup> $n_0 = 2.259$. Substituting these values, the
equation becomes:

$$L\gg\frac{b}{2\pi}\Lambda^2,\tag6$$

where $b = 3.570\cdot10^6 m^{-1}$.

Under the previous assumptions, and in the Bragg Regime, the diffracted light
beams will be found around the Bragg angle $\theta_B$ is given by the function:

$$\sin(\theta_B)=-\frac{\lambda_0f}{2n_iv}
\left[ 1+\frac{v^2}{\lambda_0^2f^2}(n_i^2-n_0^2)\right],\tag7$$

where $n_i$ is the refractive index of the incident beam. If $n_i=n_0$, as it
would in an isotropic material (a crystal whose refractive index is equal in all
directions), then the above equation simplifies nicely to:

$$\sin(\theta_B)=-\frac{\lambda_0f}{2n_iv},\tag8$$

Paratellerium is not isotropic, it is uniaxial, having the same refractive index
along two axes but a difference in the third axis, giving its optical indicatrix
the shape of a uniaxial ellipsoidal surface. However, so long as the material is
oriented in such a way that the angle of incidence is between the two axes of
equal refractive index, the $n_i=n_0$ for this case and Eq. 8 can be used rather
than the more complicated Eq. 7.

The clearest usage of an acousto-optical deflector is to create a scanning beam,
changing the 1st order diffraction’s angle by adjusting the acoustic wavelength.
This would suggest that a function for $\theta_B$ with respect to $\Lambda$
would be a more beneficial form:

$$\theta_B=\arcsin\left(-\frac{1}{2b\Lambda}\right).\tag9$$

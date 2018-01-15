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

$$
\nabla B_i=p_{ij}a{j},\tag1
$$

where $p_ij$ is the photoelastic tensor and $a_j$ is the
strain<sup><a href="#3">3</a></sup>. However, it can be assumed that if a laser
is being used as a light source normal to a single axis $z$, then only the
refractive index along said axis needs to be calculated to predict the path of
the light. It is also assumed that the acoustic wave applied to the refractive
material is planar in the following calculation of the refractive index:

$$
n(z,t)=n_0+\Delta n\cos(2\pi ft-Kz),\tag2
$$

where $n_0$ is refractive index of the material without strain, $f$ is the
frequency and $K$ is the wave number of the acoustic wave, and $\Delta n$ is the
refractive index change caused by the acoustic wave:

$$
\Delta n=-\frac{1}{2}n_0^3 pa.\tag3
$$

This creates a diffraction grating along the z-axis moving as the acoustic wave
moves along the same axis. The diffraction pattern of this grating will fall
into one of two categories: the Raman-Nath Regime or the Bragg Regime,
determined by the Klein-Cook Parameter:

$$
Q=\frac{2\pi\lambda_0L}{n_0\Lambda^2}=\frac{2\pi\lambda_0Lf^2}{n_0v^2},\tag4
$$

where $\lambda_0$ is the wavelength of the optic wave; $L$ is the distance
across the acoustic wave that the optic wave travels; $\Lambda$ is the
wavelength, $f$ is the frequency, and $v$ is the velocity of the acoustic wave.
The diffraction falls into the Raman-Nath Regime when $Q\ll 1$, and the Bragg
Regime when $Q\gg 1$. The Raman-Nath Regime gives multiple diffractions at
several angles, which is not optimal for the creation of a deflector, as such it
is best to remain within the Bragg Regime.

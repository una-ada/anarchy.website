---
author: trewbot
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

[3] For example, solve the equation $x_1+2x_2=4$. Here $x_2$ is **free** to be
whatever it wants, while $x_1$ relies on $x_2$ (this is clearer if we rewrite
the equation as $x_1=4-2x_2$). So, we can consider $x_2$ to be a **parameter**:

$$x_1=4-2t,x_2=t.\tag3 $$

[4] A **system** of $m$ linear equations in $n$ variables is a set of $m$
equations, each of which is linear in the same $n$ variables:

$$
\begin{align}
a_{11}x_1+a_{12}x_2+a_{13}x_3+\cdots+a_{1n}x_n &= b_1,\tag{4a}\\
a_{21}x_1+a_{22}x_2+a_{23}x_3+\cdots+a_{2n}x_n &= b_2,\tag{4b}\\
a_{31}x_1+a_{32}x_2+a_{33}x_3+\cdots+a_{3n}x_n &= b_3,\tag{4c}\\
\vdots&\\
a_{n1}x_1+a_{n2}x_2+a_{n3}x_3+\cdots+a_{nn}x_n &= b_n.\tag{4d}
\end{align}
$$

[5] For a system of linear equations, one of the following is true:
1. there is one solution (**consistent system**),
2. there are infinite solutions (consistent system), i.e. **colinear**,
3. there are no solutions (**inconsistent system**), i.e. **parallel**.

[7] This will be covered more in the next section, but there are operations to
produce equivalent systems of linear equations:
1. interchange two equations,
2. multiple an equation by a nonzero constant,
3. add a multiple of an equation to another equation.

## Gaussian- and Gaussian-Jordan Elimination

[13] What is a **matrix**? If $m$ and $n$ are positive integers, and $m\times n$
matrix is a rectangular array such as:

$$
A = \begin{bmatrix}
a_{11} & a_{12} & a_{13} & \cdots & a_{1n} \\
a_{21} & a_{22} & a_{23} & \cdots & a_{2n} \\
a_{31} & a_{32} & a_{33} & \cdots & a_{3n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & a_{m3} & \cdots & a_{mn} \\
\end{bmatrix}, \tag5
$$

where each **entry**, $a_{ij}$, of the matrix is a number and $m\times n$
describes the number of row ($m$) and columns ($n$).

[14] The equations for systems of equations extend to matrices as **elementary
row operations**, which produce **row equivalent** matrices:
1. interchange two rows,
2. multiple a row by a nonzero constant,
3. add a multiple of a row to another row.

[15] **Gaussian Elimination** is the process of using elementary row operations
to put the matrix in **row-echelon form** which has the following properties:
1. any rows containing all zeroes ($0$) are on the bottom,
2. the first nonzero entry in a row is always a one ($1$),
3. for two successive nonzero rows, the leading one ($1$) is further to the left
   on the higher row.

To achieve **reduced row-echelon form** we add the rule:
4. every column containing a leading one ($1$) has zeroes ($0$) in all positions
above and below said one ($1$).

[6] **Back-substitution** for matrices and systems of equations refers to
finding variables in terms of each other to eventually find values for some that
are then substituted back into said equations so as to eventually find values
for all variables.

[16] Combining Gaussian Elimination with back-substitution gives us these steps:
1. write the **augmented matrix** of the system,
2. use elementary row operations to find the row-echelon form,
3. write the system from the row-echelon form and use back-substitution to solve
   it.

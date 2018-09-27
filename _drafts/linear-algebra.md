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

[13] What is a **matrix**? If $m$ and $n$ are positive integers, an $m\times n$
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

[13] Examples of representing a system as a system, an **augmented matrix**, and
a **coefficient matrix** (in order):

$$
\begin{align}
 x - 4y + 3z &=  5 \\
-x + 3y -  z &= -3 \tag6 \\
2x      - 4z &=  6, \\
\end{align}
$$

$$
\begin{bmatrix}
 1 & -4 &  3 &  5 \\
-1 &  3 & -1 & -3 \\
 2 &  0 & -4 &  6 \\
\end{bmatrix}, \tag7
$$

and

$$
\begin{bmatrix}
 1 & -4 &  3 \\
-1 &  3 & -1 \\
 2 &  0 & -4 \\
\end{bmatrix}. \tag8
$$

[19] **Gauss-Jordan Elimination** involved finding the reduced row-echelon form
which basically gives you the solution. Something to note: I just ate my own
tooth... uh, more importantly: if a column representing a variable in reduced
row-echelon form does not contain a leading one, then said variable is a
parameter.

[21] A **homogenous** system is one in which all equations have the constant
term zero. Every homogenous system is consistent. If there are fewer equations
than variables there are $\infty$ solutions (see last paragraph).

## Applications of Systems of Linear Equations

[25] **Polynomial curve fitting** is a process of taking points $(x_1,y_1),(x_2,
y_2),(x_3,y_3),\ldots,(x_n,y_n)$ and putting them in the form:

$$
\begin{align}
a_0 + a_1x_1 + a_2x_1^2 + \cdots + a_{n-1}x_1^{n-1} &= y_1,\tag9\\
a_0 + a_1x_2 + a_2x_2^2 + \cdots + a_{n-1}x_2^{n-1} &= y_2,\\
a_0 + a_1x_3 + a_2x_3^2 + \cdots + a_{n-1}x_3^{n-1} &= y_3,\\
\vdots&\\
a_0 + a_1x_n + a_2x_n^2 + \cdots + a_{n-1}x_n^{n-1} &= y_n.
\end{align}
$$

Then you just treat this system as you would any other: solving it with your
calculator because people can't be bothered to manually solve an $8\times6$
matrix.

[29] **Network analysis** requires understanding that for each node in a network
the sum of the inputs is equal to the sum of the outputs. Use this concept to
create a system of linear equations that represents the system, convert said
system to a matrix, then solve.

[29] Example 5. Set up a system of linear equations to represent the network in
FIGURE 1.

<br>

![A network.](/assets/img/math/256/figure-1.png)

<b>FIGURE 1.</b> I should probably replace this with like an SVG or something.

<br>

The idea is to get constant terms on the right and space out all the $x_n$s to
represent how the matrix would look and whatever you want.

$$
\begin{alignat}{6}
x_1 && + x_2 &&       &&       &&       & =  20,\\
    &&       &&   x_3 && - x_4 &&       & = -20,\\
    &&   x_2 && + x_3 &&       &&       & =  20,\tag{10}\\
x_1 &&       &&       &&       && - x_5 & = -10,\\
    &&       &&       && - x_4 && + x_5 & = -10.
\end{alignat}
$$

Then pretend I wrote out the augmented matrix so I can now show you the reduced
row-echelon form for it.

$$
\begin{bmatrix}
1 & 0 & 0 & 0 & -1 & -10\\
0 & 1 & 0 & 0 &  1 &  30\\
0 & 0 & 1 & 0 & -1 & -10\\
0 & 0 & 0 & 1 & -1 &  10\\
0 & 0 & 0 & 0 &  0 &   0
\end{bmatrix}.\tag{11}
$$

So you can find a solution set from this, such as: $x_1=t-10$, $x_2=-t+30$,
$x_3=t-10$, $x_4=t+10$, $x_5=t$. obviously with $x_5$ being our parameter.
That's just about all the important things here.

## Operations with Matrices

[40] By now we've _certainly_ seen all the ways to represent a matrix:
$A,B,\ldots;$ $[a_{ij}],[b_{ij}],\ldots;$ or an array of values. To determine if
two matrices are equal we use the definition:

> Two matrices, $A=[a_{ij}]$ and $B=[b_{ij}]$ are equal when they have the
  same size, $m\times n$, and $a_{ij}=b_{ij}$ for all $1\le i\le m$ and $1\le j
  \le n$.

[41] To add two matrices we add their corresponding entries as described in the
definition of their sum:

> If $A=[a_{ij}]$ and $B=[b_{ij}]$ are matrices with size $m\times n$, then
  their sum is the $m\times n$ matrix given by $A+B=[a_{ij}+b_{ij}]$. If $A$ and
  $B$ are matrices of different sizes then $A+B$ is undefined.

**Scalar multiplication** is also defined fairly simply as well:

$$
c\cdot A = [c\cdot a_{ij}].\tag{12}
$$

Subtracting matrices can then be defined via this scalar multiplication and
matrix addition:

$$
A-B=A+(-1)\cdot B.\tag{13}
$$

[42] I'm bored so I'll just write out the definition then move on:

> If $A=[a_{ij}]$ is an $m\times n$ matrix and $B=[b_{ij}]$ is an $n\times p$
  matrix then the product $AB$ is an $m\times p$ matrix defined as:

$$ AB=[c_{ij}],\quad c_{ij}=\sum_{k=1}^na_{ik}b_{kj}.\tag{13} $$

[45] A system of linear equations $Ax=b$ where $x$ and $b$ are column matrices
as a matrix equation:

$$
\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\
a_{31}&a_{32}&a_{33}\end{bmatrix} \begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix} =
\begin{bmatrix}b_1\\b_2\\b_3\end{bmatrix},\tag{14}
$$

and as a system of linear equations:

$$\begin{align}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 &= b_1,\\
a_{21}x_1 + a_{22}x_2 + a_{23}x_3 &= b_2,\tag{15}\\
a_{31}x_1 + a_{32}x_2 + a_{33}x_3 &= b_3.\\
\end{align}$$

## Properties of Matrix Operations

[52] Some properties of matrix addition and scalar multiplication:

1. Commutative property of addition: $A+B=B+A$.
2. Associative property of addition: $A+(B+C)=(A+B)+C$.
3. Associative property of multiplication: $(cd)\cdot A=c\cdot(dA)$.
4. Multiplicative identity: $1\cdot A=A$.
5. Distributive property: $c\cdot(A+B)=c\cdot A+c\cdot B$.
6. Distributive property: $(c+d)\cdot A=c\cdot A+d\cdot A$.

[53] Properties of **zero matrices** ($m\times n$ matrices of all zeroes):

1. $A+0_{mn}=A$.
2. $A+(-A)=0_{mn}$.
3. If $c\cdot A=0\_{mn}$, $c=0$ or $A=0\_{mn}$.

[54] Properties of matrix multiplication:

1. Associative property of multiplication: $A\cdot(BC)=(AB)\cdot C$.
2. Distributive property: $A\cdot(B+C)=AB-AC$.
3. Distributive property: $(A+B)\cdot C=AC+BC$.
4. Whatever this is called: $c\cdot(AB)=(cA)\cdot B=a\cdot(cB)$.

**Matrix multiplication is not commutative,** like, it would make zero fucking
sense for it to be and if you think otherwise you need to go back and look at
the definition for matrix multiplication. Also, you could probably prove all
these using said definition, so if you're looking for some Fun™ do that.

[55] The **identity matrix** of order $n$ is a square $n\times n$ matrix whose
values are all zero except for the diagonal whose values are all one:

$$
I_n = \begin{bmatrix}
1      & 0      & 0      & \cdots & 0 \\
0      & 1      & 0      & \cdots & 0 \\
0      & 0      & 1      & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0      & 0      & 0      & \cdots & 1 \\
\end{bmatrix}. \tag{16}
$$

The identity matrix has the following properties:

1. $A\cdot I_n = A$.
2. $I_m\cdot A = A$.

[57] A **transpose** of a matrix is formed by writing its columns as rows and
vise versa. An $m\times n$ matrix's transpose, $A^T$, is an $n\times m$ matrix.
Here's some properties of that as well:

1. Transpose of a transpose: $(A^T)^T=A$.
2. Transpose of a sum: $(A+B)^T=A^T+B^T$.
3. Transpose of a scalar multiple: $(cA)^T=c(A^T)$.
4. Transpose of a product: $(AB)^T=B^TA^T$.

$AA^T=(AA^T)^T$ so, like, $AA^T$ is a symmetric operation... I think that's what
was meant by this... coolio.

## The Inverse of a Matrix

[62] An $n\times n$ matrix $A$ is **inversible** (or **nonsingular**) when
there exists an $n\times n$ matrix $B$ such that the following is true:

$$A\cdot B=B\cdot A=I_n,\tag{17}$$

where $I_n$ is the identity matrix of order $n$. The matrix $B$ is called the
inverse of $A$. If $A$ is an inversible matrix, then its inverse is unique. The
inverse of $A$ is denoted $A^{-1}$.

[63] To find the inverse, you can solve the matrix equation $Ax=I$ for $x$. This
involves writing out each operation done to multiple the matrices as its own
equation (and therefore sucks ass). This gives you a system which you solve to
find the entries of the inverse matrix.

[64] Example 2. Find the inverse of $A$ where

$$A=\begin{bmatrix}1&4\\-1&-3\end{bmatrix}.\tag{18}$$

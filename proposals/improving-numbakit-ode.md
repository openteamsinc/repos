---
title: Improving numbakit-ode - an intuitive package that leverages numba to speed up ODE integration
tagline: Build a better API, implement a variety of integrators, provide documentation and examples.
image: https://storage.googleapis.com/repos-backend/proposal_33723e33-3d1e-4f2f-b71e-841a7c52c7f6.jpg
funding:
    committed: 12000
    total: 0
sponsors: null
authors: 
 - '@hgrecco'
github-discussion: https://github.com/openteamsinc/proposal_discussions/discussions/150
---

# Project Overview

A few years ago, we developed numbakit-ode, a Python package to solve ordinary differential equations (ODE) that uses Numba to compile code and therefore speed up calculations. We showed that we could generate a pure Python codebase that runs as fast or faster than C/Fortran/Cython code in SciPy. But it also lowers the barrier to new contributions and can be easily combined with other Numba-accelerated code.

In this project, we aim to take numbakit-ode to the next stage. We will improve the API by learning from successful packages like DifferentialEquations.jl. In contrast to SciPy, where different algorithms are implemented by inheriting from a base Solver class, our package will provide a unified solve function which receives the algorithms as arguments (inversion of control). This design results in a more maintainable and extensible codebase and provides a simpler API with less verbose function signatures, as it decouples the algorithm parameters from the solver parameters. Additionally, it would provide performance improvements in both runtime and, particularly, compile time, according to some preliminary tests we performed, as less code needs to be JIT compiled by Numba.

Further development of numbakit-ode would include the implementation of adaptive multistep methods, which are the basis of the widely used LSODA solver, and stochastic solvers. By the end of the project, we aim to deliver:
1) a "solve" function, a 'problem" class, and a "stepper" protocol.
2) stepper implementations for all methods existing in SciPy and for Verner and Tsitsouras methods, which are more efficient modern alternatives (https://github.com/scipy/scipy/pull/15667);
3) documentation, with examples and interactive Jupyter notebooks,
4) tests and benchmarks.
5) a package published both in PyPI and conda-forge.
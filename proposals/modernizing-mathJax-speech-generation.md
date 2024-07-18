---
title: Modernizing MathJax Speech Generation
tagline: Converting MathJax's Speech Solution to Typescript
image: https://storage.googleapis.com/repos-backend/proposal_c8bb132f-9f79-4013-a2b8-5e09f6d9a3d3.png
funding:
    committed: 4400
    total: 4400
sponsors: null
authors: 
 - '@bskinn'
team: null
github-discussion: https://github.com/openteamsinc/proposal_discussions/discussions/62
---

# Project Overview

We propose a short sprint to convert MathJax's Speech Rule Engine (SRE) from plain Javascript to a Typescript library, ensuring seamless integration with MathJax and third-party systems. The transition aims to enhance efficiency and ease of use by enabling webpack compatibility. MathJax's accessibility extension relies on SRE for speech and Braille generation, interactive formula navigation, and semantic interpretation of mathematical syntax. Originally part of Google's ChromeVox, SRE is now a standalone open-source library used by MathJax, MathLive, Google's ChromeVox, Texthelp's EquatIO, Wikimedia, and publishers for alternative text descriptions.

SRE's current dependence on Google's Closure library and Javascript compiler, with JSDoc type syntax, poses limitations. Closure's outdated status contrasts with the industry shift to Typescript, prompting the need for a more contemporary foundation. Closure's compilation lacks webpack's advanced dependency management, hindering dynamic bundling of SRE libraries and compatibility with modern Javascript's module import system.

Our approach involves leveraging the Gents tool from Google's Clutz library for the code conversion. Drawing from experience in converting other Closure-based projects, we anticipate completing the conversion in a one-week sprint. The initial phase focuses on the automatic conversion with Gents, transforming JSDoc Types into Typescript annotations, updating syntax, and establishing the module import structure. Subsequent manual cleanup addresses issues such as singleton pattern adjustments, enum rewriting, template types to generics, and refining object types. Following the code conversion, we proceed to optimize the Typescript codebase, replacing generic Array types, incorporating destructuring, leveraging efficient Maps, and converting Gents-generated variable declarations to constant definitions. Simultaneously, we revamp SRE's build system for webpack compatibility, conduct thorough testing using a suite of over 100,000 tests, and prepare a v4.0 beta release for npm publication. Refactoring for dynamic loading and testing within MathJax ensures a robust and reliable outcome, aligning with the broader goals of the project.

This proposal is adapted from a past NumFOCUS Small Development Grant application.
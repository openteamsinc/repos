---
title: Consortium for Python Data API Standards
tagline: Driving innovation in Python’s data ecosystem by standardizing array and dataframe APIs
image: https://storage.googleapis.com/repos-backend/proposal_d055e921-3179-4159-8352-fe8117673ada.png
funding:
    committed: 400000
    total: 400000
sponsors: null
authors: 
 - '@srossross'
github-discussion: https://github.com/openteamsinc/proposal_discussions/discussions/17
---

# Project Overview

## Pitch

Even as Python has become a common language to express scientific computing and machine learning workflows, the foundational data-structures used in Python, such as n-dimensional arrays (tensors) and dataframes, have become more divided. Tensors are fragmented between TensorFlow, PyTorch, NumPy, CuPy, MXNet, JAX, Xarray, Dask, and more. Dataframes are fragmented between Pandas, cuDF, Vaex, Modin, Dask, Koalas, PySpark, Apache Arrow, and more.

The API differences between these projects often provide marginal benefit and lead to inconsistencies and incompatibilities that require additional effort, limit participation, prevent re-use, and slow progress. Innovation and differentiation are most valuable when created using standard building blocks that ensure consistency and compatibility.

To address ecosystem fragmentation, Quansight Labs is leading the Consortium for Python Data API Standards to develop API standards for arrays and dataframes within the Python ecosystem. Consortium members and industry partners work together to establish goals and metrics, target key use cases, and define API proposals for standardization. The standards are coordinated with the wider open-source community during both creation and subsequent dissemination. During each phase of standardization, the Consortium actively disseminates public artifacts, solicits discussion, and collaborates with NumPy, pandas, and the wider PyData community to refine standards and facilitate ecosystem adoption.

Funding for the Consortium helps support the design and engineering resources necessary in building tooling, gathering data, engaging key stakeholders, facilitating adoption, and drafting specification documents.


# Project Details & Specifications

## Technical Description

The Consortium for Python Data API Standards (the Consortium) is an organization dedicated to developing API standards for arrays and dataframes within the Python ecosystem. The Consortium comprises both maintainers of array and dataframe libraries and the industry stakeholders who depend on those libraries. The Consortium’s goals are twofold. The first goal is to enable writing code and packages which can support multiple array and/or dataframe libraries. The second goal is to facilitate interchange among the array and dataframe data structures.

The Consortium is sustained by industry stakeholders, who sponsor and fund the required engineering, technical writing, and participation of key community contributors. A working group sets the high-level goals, requirements, and user stories necessary to start making initial decisions. With this framework in place, engineers build required tooling, prepare data, and draft specification documents. The specification drafts undergo multiple iterations based on working group feedback. Once specification drafts have a concrete outline, input from library maintainer members is requested. Upon working group approval, drafts are released as a Request for Comments (RFC) as part of a public review process. After a period of public review and downstream implementation, the specifications are finalized and released as public artifacts available on GitHub.
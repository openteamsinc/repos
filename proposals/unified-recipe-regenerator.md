---
title: Unified Recipe Regenerator
tagline: Unify Upstream Metadata Parsing/Change Detection Across Languages & Improve Recipe Regeneration
image: https://storage.googleapis.com/repos-backend/proposal_b7031401-c426-47c7-be53-1cda5c0bf91d.png
funding:
    committed: 3750
    total: 3750
sponsors: null
authors: 
 - '@bskinn'
team: null
github-discussion: https://github.com/openteamsinc/proposal_discussions/discussions/66
---

# Project Overview

The conda-forge open source project has achieved consistent package version updates through automated processes; however, the metadata remains a concern. Our proposal aims to address this gap by implementing proper metadata parsing from upstream projects.

Packaging plays a crucial role in bridging the gap between software development and usage, simplifying the installation of complex pre-compiled binaries. Conda-forge, as a community-driven binary distribution, has successfully tackled the challenges associated with building packages across diverse platforms, languages, and user bases. It strives to maintain high standards, openness in binary distribution, and accessibility for beginners with support from seasoned packaging experts. The project's primary motivations are to ensure ecosystem self-consistency and deliver the latest software to the community.

While conda-forge has deployed bots and web services for automated pull requests, the diversity of packages, including R, Julia, Perl, and Python, poses a challenge. This diversity complicates the regeneration of recipes when upstream metadata, URLs and dependencies are updated.

To overcome this challenge, our proposal suggests implementing a unified conda-skeleton recipe regenerator inspired by the successful bioconda R-recipe regenerator. This expansion aims to cover Python and other package formats supporting metadata inspection. The project goals include extending the bioconda R-recipe regenerator to Python, unifying both regenerators into a single conda-skeleton, and facilitating the selective regeneration of specific metadata components. Additionally, we plan to introduce a conda-smithy regenerate recipe, enabling the bot to update recipe metadata, including dependency versions.

This proposal is adapted from a past NumFOCUS Small Development Grant application.
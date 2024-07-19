---
title: JupyterLab Extension Manager Enhancements
tagline: Allow/Deny Lists, Splash Screens, and Improved Extension Discoverability
image: https://storage.googleapis.com/repos-backend/proposal_b5c3e35e-552b-4d4b-8aac-e0dc1d8ad190.png
funding:
    committed: 75000
    total: 75000
sponsors: null
authors: 
 - '@bskinn'
team: null
github-discussion: https://github.com/openteamsinc/proposal_discussions/discussions/61
---

# Project Overview

We propose to enhance the JupyterLab open-source project through a series of focused software development tasks. Firstly, our objective is to implement a denylist and allowlist mechanism after engaging in discussions with Binder. This involves designing the format of denylist/allowlist files (e.g., JSON, YAML), establishing a dedicated repository for the denylist of extensions, and integrating code into JupyterLab with default denylist and configurable options.

Concurrently, we will conduct research on Text in extension UI from other systems to inform the creation of a distinct warning system for JupyterLab. This effort is complemented by comprehensive documentation of these configurations for user accessibility. Additionally, part of our proposal is to introduce a straightforward method for displaying a splash screen upon extension installation. This includes tasks such as crafting a user story, UI design, and implementation.

As part of our broader initiative, we will enable the Extension Manager by default to streamline user experience. Furthermore, we propose the addition of types/tags for extensions. This entails tasks spanning UI/UX design, backend implementation for extension metadata, UI implementation for displaying and filtering these tags, and thorough documentation in the extension guide.

Lastly, our proposal involves integrating contextual suggestions for extensions. This includes UI/UX design, UI and backend implementation for various suggestion areas, and comprehensive documentation of the implemented features. This systematic approach addresses key enhancements, fostering the continuous improvement of JupyterLab.

This proposal is adapted from prior work executed by Quansight.
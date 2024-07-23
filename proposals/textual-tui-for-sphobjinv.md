---
title: Textual TUI for sphobjinv
tagline: Interactive Console-Based Browser for Sphinx objects.inv Inventories
image: https://storage.googleapis.com/repos-backend/proposal_aab5e859-2ca1-4158-9651-02e69d9f0a6e.png
funding:
    committed: 0
    total:  10000
sponsors: null
authors: 
 - '@bskinn'
team: null
github-discussion: https://github.com/openteamsinc/proposal_discussions/discussions/64
---

# Project Overview

sphobjinv provides an API and a CLI to interact with the objects.inv inventories produced by the Sphinx documentation system when building documentation to HTML. It allows creating, editing, and searching inventories, as well as converting to and from the partially zlib-compressed objects.inv format.

sphobjinv's current 'suggest' feature is helpful for searching for objects in inventories by keyword, but it is a basic and narrow functionality. The recent rapid advancements in Python 'text user interface' (TUI) capabilities as driven by the Rich and Textual frameworks would provide an attractive platform for an enhanced user experience for searching and editing Sphinx objects inventories.

This proposal aims to implement such a TUI for sphobjinv, with a focus on implementing the ability to freely browse and search an inventory. It would include additional search capabilities beyond the current 'fuzzy-search' approach used in the 'suggest' functionality. These additional search modes would also be exposed in the sphobjinv CLI and API.
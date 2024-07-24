---
title: Scorer Plugin System for sphobjinv 'suggest'
tagline: Enable Users to Write & Use Custom Scorers for Inventory Searches
image: https://storage.googleapis.com/repos-backend/proposal_777e4b57-73fe-41c4-b5ca-10fc86eca4a2.png
funding:
    committed: 0
    total: 7500
sponsors: null
authors: 
 - '@bskinn'
team: null
github-discussion: https://github.com/openteamsinc/proposal_discussions/discussions/149
---

# Project Overview

sphobjinv provides an API and a CLI to interact with the objects.inv inventories produced by the Sphinx documentation system when building documentation to HTML. It allows creating, editing, and searching inventories, as well as converting to and from the partially zlib-compressed objects.inv file format.

sphobjinv's current 'suggest' feature is helpful for searching for objects in inventories by keyword to an extent, but only a single search method based on fuzzy-search is implemented. The usefulness of 'sphobjinv suggest' would be significantly increased if users could define and plug in their own search methods (see https://github.com/bskinn/sphobjinv/issues/207 and https://github.com/sopel-irc/sopel-rtfm/commit/6d2de967fb14a287da70d5461f75ca40fa6ae6b5#commitcomment-55538884).

This proposal aims to implement this 'suggest' scorer plugin system for sphobjinv, with the intent of supporting pluggable scorer selection throughout the 'suggest' CLI and API. While at the moment only the scorer system is planned to be made pluggable, the plan is to use a general plugin framework like pluggy in case further extensibility of some other part of the machinery becomes desirable.
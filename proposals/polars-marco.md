---
title: Let's make Polars time series operations ergonomic
tagline: Polars' rolling functions aren't easy to use, and expanding ones aren't implemented - let's change that!
image: https://storage.googleapis.com/repos-backend/proposal_37db62a8-2a74-43c2-b0ab-f61ca762a5f3.png
funding:
    committed: 50000
    total: 0
sponsors: null
authors: 
 - '@MarcoGorelli'
team: null
github-discussion: https://github.com/openteamsinc/proposal_discussions/discussions/196
---

# Project Overview

Polars is a dataframe library taking the world by storm. We are seeing many companies using it in production (e.g. G-Research call it a "game-changer" https://pola.rs/posts/case-gresearch/), Nvidia are contributing GPU support to it (https://pola.rs/posts/polars-on-gpu/), and several open source packages like scikit-learn have added support for it.

Despite being powerful, some areas are difficult to use. In particular, some time series functionality. This proposal aims to change that!

Specifically, the idea is to address all of the following:
 - rolling aggregations should not require the data to be sorted in order to work
 - rolling aggregations should support missing values
 - expanding windows should be supported
 - interpolate_by should be implemented, to allow for interpolation based on a time column
 - ewm_mean_by should support `adjust=True`


# Project Details & Specifications

Specifically, the idea is to address all of the following:

 - rolling aggregations should not require the data to be sorted in order to work
 - rolling aggregations should support missing values
 - expanding windows should be supported
 - interpolate_by should be implemented, to allow for interpolation based on a time column [done!]
 - ewm_mean_by should support `adjust=True`
 - DataFrame.group_by_dynamic and DataFrame.rolling should not require sorted data

# Project Stages

## Phase 1

The first stage deals with the "sorted data" assumption.

First, the following temporal methods should not require sorted data in order to work (estimate: 80 hours):
 - DataFrame.upsample
 - DataFrame.rolling
 - DataFrame.group_by_dynamic


This will already solve a major painpoint for users.

## Phase 2

Rolling aggregations will then need to be refactored to support missing values. The "no missing values" assumption is quite heavily embedded, so this will require a significant refactor. Estimate: 120 hours.

## Phase 3

`ewm_mean_by` should support `adjust=True`. This will require some careful consideration and adjustment to the current (unadjusted) algorithm. Furthermore, the "sorted data is not required" assumption should be carried through. Estimate: 40 hours.

## Phase 4

Finally, expanding windows should be added, mirroring rolling windows. This will require some very heavy refactoring. Just like with rolling windows, no sortedness assumption should be present. Estimate: 120 hours.
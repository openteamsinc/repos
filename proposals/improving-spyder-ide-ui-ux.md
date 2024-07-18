---
title: Improving Spyder IDE UX/UI
tagline: Spyder 6 - Unifying Linting, Profiling, and Code Cells for Optimal Python Coding
image: https://storage.googleapis.com/repos-backend/proposal_728f7072-826e-4bb0-8e84-cfbf2b6c2770.png
funding:
    committed: 10000
    total: 10000
sponsors: null
authors: 
 - '@srossross'
github-discussion: https://github.com/openteamsinc/proposal_discussions/discussions/151
---

# Project Overview

We propose to continue the work started in Spyder 5 to improve the User Experience (UX) and User Interface (UI) of its different components. Specifically, we would like to implement the agreed enhancements in the Spyder ux-improvements repository, where decisions were made regarding the usability and functionality aspects of Spyder’s interface after a lengthy discussion process with its team.

## Description

As part of a concerted effort to improve Spyder’s UX/UI, its team started to define the necessary improvements to provide a more consistent interface for its users in the second half of 2020. To keep track of these discussions, a new repository was created, the ux-improvements one [1]. There, a thorough review was done to better understand Spyder’s entire interface and the current functionality offered by each of its panes, and agree on the desired one. From this work, Spyder 5.0 was released in April 2021 with a new color system, as well as a new set of icons. However, a good number of decisions were left to be implemented after that [2], when a new API to create plugins, also added in version 5, was finished and stabilized. This task took most of the team’s efforts until the end of last year, but we are now ready to resume the planned UX/UI work for Spyder 6, to be released next year.
This grant would move the project forward in several ways by bringing a better user experience and overall usability to Spyder. In particular, we plan to implement the following enhancements:

* Add menu entries to start new code evaluation consoles for any Conda or Pyenv environment found in the system [3]. The current process to do that is quite cumbersome and not intuitive at all.
* Improve how code cells are discovered and used [4]. Code cells make it very easy to run a file in chunks, but at the moment it is far from easy to understand how to get started with them.
* Consolidate linting results in a single pane [5]. Right now it is not easy to browse all errors and warnings displayed in Spyder’s Editor, a functionality available in most IDEs.
* Simplify how the Profiler pane works and make it easier to find and use [6]. Profiling is an important task in scientific computing because it helps to quickly find bottlenecks during execution. However, it’s not easy to use because there are few graphical profilers available for Python that are also integrated in IDEs.
* Improve the usability of the Variable Explorer [7]. This pane is quite important for many users and it can be enhanced by providing a way to filter variables, reload them when they are opened in our specialized viewers, and showing tooltips when header names are too long.
* Show an explanatory message for panes that appear empty at startup [8]. This will help new users to quickly understand how to use them.
* Provide a better grouping of the many configuration options that can be set in Spyder Preferences and through it menus [9]. There are some pane entries in Preferences (e.g. the Editor one) and menus (e.g. Source) which have too many options without a clear structure, which make them difficult to navigate.
* Implement a new design for pane tabs to make them visually distinct from files and consoles [10]. This way users would have less trouble navigating the many Spyder panes (more than 10 at the moment).
* Remove the old Spyder 2 icon set because it is incomplete and outdated [11].
* Use a default set of fonts for the interface [12]. In this way, Spyder would have the same look and feel in different operating systems.
With this proposal we aim to fund Juan Bautista-Rojas, a recently joined junior developer who has done a great job helping the project with a previously awarded NumFOCUS Small Development Grant proposal (Improving the Spyder IDE installation experience [13]). Juan Sebastian will be supervised and working with one of our core developers (Daniel Althviz-Moré), for 6 months full-time in order to develop as many UX/UI improvement decisions as possible.
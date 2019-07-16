---
layout: presentation
day: 2
group: 6
spot: 52
length: 20
type: talk
categories: talks
time: 16:20
startTime: 1550784000
speakers-text: Clara Turp
speakers:
- clara-turp
-
-
slides:
title: Automating link management&#58; When institutional infrastructure works against you
---
Managing resource links in academic libraries is increasingly challenging, especially in an e-preferred environment, as it involves keeping millions of links up to date at any given time. This presentation outlines a project undertaken in 2018 to solve this problem and the challenges encountered along the way.

I will begin by stepping through a solution that automatically manages open access links in OCLC’s WorldShare system. This approach uses OCLC’s Knowledge Base API to review the URL contained in particular collections’ KBART and sends monthly reports containing broken and redirecting links.

I will then discuss the challenges encountered regarding institutional infrastructure as well as strategies that facilitated the process of rewriting code for older versions while managing different python libraries. Choosing to use a university server seems like a straightforward decision due to various benefits, including complete automation and improved long-term code management. However, this is not so simple in a world where writing code in Python 3 (or even Python 2.7) is a radical departure from the status quo.

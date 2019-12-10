---
layout: presentation
type: talk
speakers-text: Huma Zafar
categories: talks
speakers:
- huma-zafar
length: 20
slugTitle: a-new-approach-to-old-metadata
abstract:
title: A New Approach to Old Metadata
---
This talk will discuss a year-long project to rebuild our metadata services at our organization -- including, in particular, a new MARC processing library.

Parsing MARC effectively begins with understanding how to model it for modern concerns, and, unfortunately, the MARC standard provides little assistance in that regard. In order to improve our ability to work with MARC, we started by constructing our own "modern MARC" model and then building application layers on top of that to parse and transform MARC data more powerfully than we could before. The lessons we've learned on how to do this are likely to be of interest to anyone who needs to work with imperfect legacy data.
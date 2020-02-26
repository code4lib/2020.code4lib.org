---
speakers-text: Brandon Bellanti, Simmons University
type: poster
length: 30
day: 2
categories: posters
layout: presentation
startTime: 2020-03-10 15:20
title: Pythagoras&#58; Using Python to Find Patterns in Music Score Data
---
Pythagoras is an ongoing digital humanities project using Python to parse and analyze music scores encoded as MusicXML files. The primary goal of the project is to identify relationships within individual works, among works by the same composer, and among works from different composers.

First, a score is converted from XML to a CSV then loaded into to a Pandas data frame where it can be analyzed. Simple analyses of scores include the distributions of pitches, note lengths, and instruments. More complex analyses include regex searches to find recurring patterns of notes. The results are stored in a database, visualized using Matplotlib and Tableau, and accessed through a web interface. When a user searches for a composer or work, any works or composers that utilize similar compositional styles or patterns are returned.

An intended outcome for this project is to give music performers, educators, historians, librarians, and anyone else interested in digital humanities new insights into musical relationships as well as new methods of data analysis in the arts.  
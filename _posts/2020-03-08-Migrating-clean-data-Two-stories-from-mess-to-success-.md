---
layout: presentation
type: talk
speakers-text: Clara Turp
categories: talks
speakers:
- clara-turp
length: 15
slugTitle: migrating-clean-data-two-stories-from-mess-to-success-
abstract:
title: Migrating Clean Data&#58; Two Stories from Mess to Success 
---
Data cleanup during a migration is more than an opportunity to standardize data practices, it is also a necessary step to ensure the data will be ingested by the new system. This presentation will therefore outline the data cleanup process undertaken during two major system migrations at McGill University, including shared challenges, themes, and the lessons learned from this work.  In 2019, McGill University Library underwent two major system migrations: the library’s integrated library system (ILS) and its institutional repository (IR), and I was heavily involved in both migrations. In total, over 4 million items were migrated. I will discuss challenges that were common to both migrations, as well as issues that were unique to each.

The migration of our ILS from Aleph (Ex-Libris) to Worldshare (OCLC) had the advantage of retaining similar data structures, MARC records for example. However, the scale of the migration and the need to meet the vendor’s requirements meant adjusting the data and presenting creative solutions to retain data that couldn’t be ingested by the system.

Conversely,  the biggest data challenge faced during the migration of the repository to an open-source solution (Samvera) was the structure of the data going from a relational database to linked data. 
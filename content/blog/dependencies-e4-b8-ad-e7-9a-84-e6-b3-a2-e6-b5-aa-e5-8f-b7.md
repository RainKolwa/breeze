---
title: dependencies中的波浪号
id: 205
categories:
  - Magento
date: 2015-11-12 11:23:48
tags:
---

> 波浪号~:In the simplest terms, the tilde matches the most recent minor version (the middle number). ~1.2.3 will match all 1.2.x versions but will miss 1.3.0.> 
> 
> 尖括号^:The caret, on the other hand, is more relaxed. It will update you to the most recent major version (the first number). ^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.
摘自 [http://fredkschott.com/post/2014/02/npm-no-longer-defaults-to-tildes/](http://fredkschott.com/post/2014/02/npm-no-longer-defaults-to-tildes/)
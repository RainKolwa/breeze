---
title: How to get pure text content from Elements with children elements
id: 225
categories:
  - Magento
date: 2015-12-07 11:36:26
tags:
---

<pre class="lang:default decode:true ">$('#foo').contents().filter(function(){return this.nodeType == 3;})[0].nodeValue;</pre>
&nbsp;
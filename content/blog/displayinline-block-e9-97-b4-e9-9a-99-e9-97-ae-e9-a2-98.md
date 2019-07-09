---
title: 'display:inline-block间隙问题'
id: 60
categories:
  - Magento
date: 2014-12-01 21:07:56
tags:
---

 
<pre class="lang:default decode:true " >&lt;div class="wrap"&gt;
	&lt;a href="#" class="cur"&gt;Category1&lt;/a&gt;
	&lt;a href="#"&gt;Category2&lt;/a&gt;
	&lt;a href="#"&gt;Category3&lt;/a&gt;
	&lt;a href="#"&gt;Category4&lt;/a&gt;
	&lt;a href="#"&gt;Category5&lt;/a&gt;
&lt;/div&gt;</pre> 

<pre class="lang:css decode:true " >.wrap{font-size: 0;}
.wrap a{font-size: 18px;display: inline-block; *display:inline; *zoom:1;}</pre> 
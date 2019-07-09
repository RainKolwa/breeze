---
title: jQuery.merge()
id: 100
categories:
  - Magento
date: 2014-12-11 23:57:06
tags:
---

`$.merge()`函数是破坏性的。它会修改第一个数组的内容，并将第二个数组的内容添加到第一个数组中。

可是使用如下方法先拷贝一个旧的数组出来，以备不时之需：
<pre class="lang:default decode:true ">var newArray = $.merge([], oldArray);</pre>
&nbsp;
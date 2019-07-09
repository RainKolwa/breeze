---
title: jquery 选择器转义
id: 37
categories:
  - Magento
date: 2014-11-18 23:40:39
tags:
---

<pre class="lang:default decode:true " >&lt;input id="name:value" name="name" value="value" /&gt;
//此时需要使用双反斜杠转义
$('#name\\:value').val('Hello,sunshine');</pre> 
---
title: fancybox阻止弹窗浮层后面的内容滚动
id: 166
categories:
  - Magento
date: 2015-03-22 20:30:27
tags:
---

<pre class="lang:default decode:true ">$('.fancybox-overlay').bind("mousewheel", function() {
     return false;
});</pre>
如上所写，只要在overlay上取消滚轮事件就好了
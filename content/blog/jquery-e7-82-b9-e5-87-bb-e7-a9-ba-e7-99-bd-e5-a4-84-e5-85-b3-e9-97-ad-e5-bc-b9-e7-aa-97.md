---
title: jquery点击空白处关闭弹窗
id: 115
categories:
  - Magento
date: 2014-12-17 16:57:24
tags:
---

<pre class="lang:js decode:true ">//点击空白处关闭弹窗
$(document).on("click",function(e){
    var target  = $(e.target);
    if(target.closest("#popBox").length == 0){
        //关闭弹窗
    }
    e.stopPropagation();
})</pre>
&nbsp;
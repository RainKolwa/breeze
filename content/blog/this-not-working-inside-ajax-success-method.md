---
title: '''this'' not working inside ajax success method'
id: 90
categories:
  - Magento
date: 2014-12-08 14:54:14
tags:
---

<pre class="lang:default decode:true  ">var element = this;

$.ajax({
    //...
    success: function(json) {
         // 'this' refers to the jQXHR object
         // use 'element' to refer to the DOM element
         // or '$(element)' to refer to the jQuery object
    }
});</pre>
&nbsp;
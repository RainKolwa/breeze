---
title: jquery操作iframe中的元素
id: 168
categories:
  - Magento
date: 2015-03-24 09:16:46
tags:
---

<pre class="lang:default decode:true ">&lt;iframe id='iframe1' height='35' width='35' src='../button.html' frameborder=0&gt;&lt;/iframe&gt;</pre>
&nbsp;
<pre class="lang:default decode:true  ">$("#iframe1").contents().find("#button").click(function(e){
    e.preventDefault();
    //just do it
});</pre>
&nbsp;
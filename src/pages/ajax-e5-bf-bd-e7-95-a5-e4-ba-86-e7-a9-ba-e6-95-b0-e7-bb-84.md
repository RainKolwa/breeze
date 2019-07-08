---
title: $.ajax忽略了空数组
id: 185
categories:
  - Magento
date: 2015-09-07 16:46:20
tags:
---

<pre class="lang:default decode:true ">var data_test = { foo: [], bar: [ 'baz' ] };

$.ajax({
    url: "test.php",
    type: "POST",
    data: JSON.stringify(data_test),
    contentType: 'application/json'
});</pre>
&nbsp;
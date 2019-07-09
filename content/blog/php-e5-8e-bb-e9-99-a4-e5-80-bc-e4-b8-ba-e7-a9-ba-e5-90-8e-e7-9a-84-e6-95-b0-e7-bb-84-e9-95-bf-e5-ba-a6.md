---
title: php去除值为空后的数组长度
id: 136
categories:
  - Magento
date: 2015-01-15 10:20:35
tags:
---

&nbsp;
<pre class="lang:php decode:true ">&lt;?php 
$arr = array( 
1=&gt;"apple", 
2=&gt;"pear", 
3=&gt;"watermelon", 
4=&gt;"" 
); 
echo count(array_filter($arr))); 
?&gt;</pre>
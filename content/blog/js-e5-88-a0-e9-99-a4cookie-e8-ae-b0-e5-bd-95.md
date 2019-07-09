---
title: js删除cookie记录
tags:
  - cookie
id: 66
categories:
  - Magento
date: 2014-12-02 17:11:41
---

 
<pre class="lang:js decode:true " >function deleteCookie(name) {
  document.cookie = name+"=;expires="+(new Date(0)).toGMTString();
}</pre> 
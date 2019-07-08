---
title: center popup window when using window.open()
id: 123
categories:
  - Magento
date: 2014-12-25 16:41:04
tags:
---

<pre class="lang:js decode:true ">function popupwindow(url, w, h) {
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	window.open(url, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}</pre>
&nbsp;
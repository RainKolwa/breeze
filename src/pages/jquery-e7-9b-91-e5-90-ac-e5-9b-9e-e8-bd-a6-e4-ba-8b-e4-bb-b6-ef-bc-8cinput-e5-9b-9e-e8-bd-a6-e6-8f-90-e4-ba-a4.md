---
title: jquery 监听回车事件，input回车提交
id: 98
categories:
  - Magento
date: 2014-12-10 18:39:15
tags:
---

<pre class="lang:js decode:true ">$("#target").keypress(function(event) {
	if (event.keyCode == 13) { 
		console.log('Hello,BLACKSHARBABY')
	} 
});</pre>
&nbsp;
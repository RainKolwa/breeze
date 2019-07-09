---
title: js判断鼠标滚轮滚动方向
id: 94
categories:
  - Magento
date: 2014-12-09 11:13:46
tags:
---

<pre class="lang:default decode:true  ">var scrollFunc=function(e){
	var direct;
	e=e || window.event;
	if(e.wheelDelta){//IE/Opera/Chrome(wheelDelta:-120-&gt;down)
		direct=e.wheelDelta;
	}else if(e.detail){//Firefox(wheelDelta:3-&gt;down)
		direct=-e.detail;
	}
	if(direct&lt;0){
		//down
	}else{
		//up
	}
}
if(document.addEventListener){
	document.addEventListener('DOMMouseScroll',scrollFunc,false);
}
window.onmousewheel=document.onmousewheel=scrollFunc;</pre>
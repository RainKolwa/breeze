---
title: iScroll点击触发多次解决办法
id: 64
categories:
  - Magento
date: 2014-12-02 12:35:15
tags:
---

在点击事件中加入如下判断

方法1：iscroll初始化的时候加上这段配置
<pre class="lang:default decode:true ">click:((/Chrome\/\d/.test(window.navigator.appVersion)) ? true : parseFloat(navigator.userAgent.match(/Android [\d+.]{3,5}/)[0].replace('Android ','')) &lt; 4.4 ? false : true)</pre>
方法2：
<pre class="lang:default decode:true">var t1 = null;//设置为全局变量
if (t1 == null){
	t1 = new Date().getTime();
}else{		
	var t2 = new Date().getTime();
	if(t2 - t1 &lt; 500){
		t1 = t2;
		return;
	}else{
		t1 = t2;
	}
}</pre>
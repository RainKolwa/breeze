---
title: iScroll点击触发多次解决办法
date: 2014-12-02 12:35:15
tags:
  - Javascript
---

在点击事件中加入如下判断

## 方法1：iscroll初始化的时候加上这段配置

```js
click:((/Chrome\/\d/.test(window.navigator.appVersion)) ? true : parseFloat(navigator.userAgent.match(/Android [\d+.]{3,5}/)[0].replace('Android ','')) &lt; 4.4 ? false : true)
```

## 方法2：
```js
var t1 = null;
if (t1 == null){
	t1 = new Date().getTime();
}else{		
	var t2 = new Date().getTime();
	if(t2 - t1 < 500){
		t1 = t2;
		return;
	}else{
		t1 = t2;
	}
}
```
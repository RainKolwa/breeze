---
title: Fancybox阻止弹窗浮层后面的内容滚动
date: 2015-03-22 20:30:27
tags:
  - jQuery
  - Javascript
---

只要在overlay上取消滚轮事件就好了。

```js
$('.fancybox-overlay').bind('mousewheel', function() {
  return false;
});
```

[Fancybox](http://fancyapps.com/fancybox/3/) 太好用了。一度成为我项目中标配。
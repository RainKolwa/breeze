---
title: 用jQuery怎么操作iframe中的元素？
date: 2015-03-24 09:16:46
tags:
  - jQuery
  - Javascript
---

```html
<iframe id='demo' height='35' width='35' src='../button.html' frameborder=0></iframe>

```
&nbsp;
```js
$("#demo").contents().find("#button").click(function(e){
  e.preventDefault();
  //just do it
});
```
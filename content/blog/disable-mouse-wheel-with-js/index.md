---
title: 如何使用JS禁止鼠标滚轮事件
date: 2014-12-07 02:29:28
tags:
  - Javascript
---

```js
function disabledMouseWheel() {
  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
  }
  window.onmousewheel = document.onmousewheel = scrollFunc;
}

function scrollFunc(evt) {
  evt = evt || window.event;
    if(evt.preventDefault) {
    // Firefox
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      // IE
      evt.cancelBubble=true;
      evt.returnValue = false;
  }
  return false;
}

window.onload = disabledMouseWheel;
```


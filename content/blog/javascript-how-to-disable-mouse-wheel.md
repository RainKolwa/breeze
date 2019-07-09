---
title: javascript how to disable mouse wheel
id: 88
categories:
  - Magento
date: 2014-12-07 02:29:28
tags:
---

<pre class="lang:default decode:true ">function disabledMouseWheel() {
  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
  }//W3C
  window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome
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
window.onload=disabledMouseWheel;</pre>
&nbsp;
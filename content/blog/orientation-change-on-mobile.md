---
title: 如何监听手机横竖屏事件
date: 2015-04-09 01:05:41
tags:
  - javascript
---

有些移动端的网站，例如网页版的游戏，需要在横屏下浏览才能获得最佳的体验，如果用户将手机直立起来，那么就展示一个全屏的弹窗提醒用户。可以通过监听 window 的 `orientationchange` 事件来达到这个目的，代码如下：

> 不过操作 window.orientation 已经不推荐了，现在可以用 [window.screen.orientation](https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation)

```js
function onOrientationChange() {
  if (window.orientation == 90 || window.orientation == -90) {
    // 横过来了
  } else {
    // 竖起来了
  }
}

onOrientationChange()

$(window).bind('orientationchange', function(e) {
  orientationchange()
})
```

也可以通过 css 的 media query 来实现：

```css
@media (orientation: portrait) {
  /*横屏时展示*/
  .playfield {
    display: block;
  }
  .overlay {
    display: none;
  }
}
@media (orientation: landscape) {
  /*竖屏时隐藏*/
  .playfield {
    display: none;
  }
  .overlay {
    display: block;
  }
}
```

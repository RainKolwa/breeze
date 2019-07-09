---
title: 用JS获取视频的原始高度
date: 2014-12-25 12:15:26
tags:
- Javascript
---

今天碰到一个情况，需求获取到页面中视频的原始宽高，发现直接获取视频的宽高有时会获取不到。翻了下文档，发现应当注册一个`loadedmetadata`事件，并在其回调中获取视频宽高。

这个`loadedmetadata`事件，顾名思义，就是获取到了元信息，视频的宽高就存在元信息中。具体代码示例如下：

### HTML 部分
```html
<video src="/path/demo.mp4" controls="controls" id="player">
your browser does not support the video tag
</video>
```

### Javascript 部分
```javascript
const myVideo = document.getElementById("player")

myVideo.addEventListener("loadedmetadata", function (e) {
  let width = e.target.videoWidth
  let height = e.target.videoHeight
  console.log('video width = ', width)
  console.log('video height = ', height)
}, false);
```
这里注意到`addEventListener`中的第三个参数设置成了`false`，具体是什么意思呢？我也不知道（XD）。以后分析下。
---
title: 华为P30上视频异常重头播放
date: 2019-07-06 13:30
tags:
- Javascript
---

最近收到反馈说华为P30手机在播放项目中的视频时，播放到一半会意外地跳转到视频开头播放。解决bug的第一步，重现bug。借来一台P30，果然是个bug。不过我用 `spy-debugger` 也没有收集到有效的错误信息。

最后在Stackoverflow上看到一篇类似的问题，讲如果在视频正在播放中调用play()方法，有可能会导致视频重头播放。于是我在调用play()方法前加了一段校验的逻辑，代码如下：

```js{6}
play = time => {
  const video = document.getElementById('demo')
  if (time >= 0) {
    video.currentTime = time
  }
  const isVideoPlaying = !video.paused && !video.ended && video.readyState > 2
  if (!isVideoPlaying) {
    video.play()
  }
}
```

问题愉快的解决了，目前只在华为P30上遇到过这个问题。

### video的readyState属性是什么意思？

readyState反映视频的加载状态，其具体的值的意义如下：

- 0: 未加载
- 1: 已初始化
- 2: 当前帧已加载，下一帧未加载
- 3: 下一帧也加载了
- 4: 后面好多帧都加载好了

#### 参考文档

- [HTMLMediaElement.readyState](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState)

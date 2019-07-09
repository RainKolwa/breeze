---
title: 禁用iOS视频全屏播放
date: 2015-11-05 12:01:40
tags:
  - Javascript
  - React
---

在iOS中视频默认会全屏播放，如果想禁用的话，可以在video标签上增加一个属性。

```html
<video src="demo.mp4" webkit-playsinline></video>
```

如果是在*react*项目中，则需要设置下自定义属性：

```jsx{5,13,14}
...此处省略1万行代码

attachCustomAttributes = dom => {
  if (dom) {
    dom.setAttribute('webkit-playsinline', true)
  }
}

render() {
  return <video
    src={`demo.mp4`}
    controls
    playsInline
    ref={this.attachCustomAttributes}
  >
    对不起，您的设备不支持播放此视频，请尝试点击
    <Link to={source}>这里</Link>
    观看
  </video>
}

```
---
title: react-router中的../＃/..如何去除
date: 2015-11-13 14:22:38
tags:
  - React
  - Javascript
---

刚开始用react开发项目，发现url末尾默认会拼一段hash类的东西，觉得不太干净，翻了一下资料，发现可以定义router使用的history。如下：

```js
import createBrowserHistory from 'history/lib/createBrowserHistory'

// 然后在Router上加上这个
<Router history={createBrowserHistory()}>
```


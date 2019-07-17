---
title: 如何进行错误监控？
date: 2019-07-17 11:33:02
tags:
  - Javascript
---

可以用window.onerror拦截报错。但是线上的文件一般是打包后的，需要生成sourcemap文件便于debug。

如何上报错误？

```js
window.onerror = function(message, url, line) {
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
    var logurl = "<%= htmlWebpackPlugin.options.errorApi %>";
    var params = {
      message: message,
      url: url,
      line: line,
      userAgent: window.navigator.userAgent
    }
    xhr.open("POST", logurl, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(params));
  }
  return false;
}
```

或者也可以使用img标签的方案来上传。

以上只是一个简单的示范，上报错误如果想更加清晰，有条理，也可以进行分类，归纳，记录用户数据，结合sourcemap定位代码片段，统计触发次数，设置错误预警等等。

如果既想获得好的错误日志浏览体验，又不愿意开辟独立的产品线维护，可以考虑比较成熟的第三方解决方案，例如[Fundebug：一行代码搞定BUG监控](https://www.fundebug.com/)。

### 几种常见的错误类型：

- Error
- ReferenceError
- UncaughtError
- SyntaxError
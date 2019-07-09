---
title: $.ajax忽略了空数组
date: 2015-09-07 16:46:20
tags:
- jQuery
---

在使用jQuery的过程中发现如果请求body含有空数组，那这个key会直接被忽略掉，这个应该算bug吧。于是跟后端商量可以用下面的方案处理下。

```js{6}
var data = { foo: [], bar: [ 'baz' ] };

$.ajax({
  url: "demo/url",
  type: "POST",
  data: JSON.stringify(data),
  contentType: 'application/json'
});
```

其实是通过`JSON.stringify()`将数据转成了JSON字符串，再通过`JSON.parse()`来解析就可以了。
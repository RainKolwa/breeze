---
title: IE9中iframe加载失败
date: 2015-01-21 11:30:54
tags:
  - HTML
---

又是令人头大的IE，还好我有Google，于是我翻到了资料，可以用下面这行代码解决IE9中iframe不加载的问题。

在\<head\>中加入下面这行代码：

```html{4}
<!DOCTYPE html> 
<html> 
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    ...此处省略1万行代码
</head>
```
注意高亮部分代码位置，是**紧接在head下面的**，下面就是见证奇迹的时刻~

问题解决了，那这行代码是什么意思呢？

### http-equiv
> 这个枚举属性定义了能改变服务器和用户引擎行为的编译。

比如下面几个示例（代码示例来自[这里](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#attr-http-equiv)）：

```html
<!-- Defining the charset in HTML4 -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<!-- In HTML5 -->
<meta charset="utf-8">

<!-- Redirect page after 3 seconds -->
<meta http-equiv="refresh" content="3;url=http://www.mozilla.org/">
```

### X-UA-Compatible
这里属性是IE专用，微软设置这个属性是为了让开发者可以根据需要定义IE浏览器渲染的兼容模式。
从IE11开始，edge模式是IE浏览器默认首选的。

另外还有一个`chrome=1`的值可以加在上面的edge后面，以此来启用chrome框架（如果用户系统中已安装）

所以可以这么写：

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```
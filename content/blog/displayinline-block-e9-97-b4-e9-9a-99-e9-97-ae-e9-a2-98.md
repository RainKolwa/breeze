---
title: 'display: inline-block元素间隙问题'
id: 60
categories:
  - Magento
date: 2014-12-01 21:07:56
tags:
  - CSS
---

在使用`dislay:inline-block`的过程中发现元素之间会有令人讨厌的间隔，如果想去掉间隔，通过下面的一段css代码即可实现。

```html
<style>
.wrap{font-size: 0;}
.wrap a{font-size: 18px;display: inline-block;*display: inline;*zoom: 1;}
</style>

<div class="wrap">
 <a href="#" class="active">Category1</a>
 <a href="#">Category2</a>
 <a href="#">Category3</a>
 <a href="#">Category4</a>
 <a href="#">Category5</a>
</div>
```

css代码中，属性前面添加*号是为了兼容ie7。

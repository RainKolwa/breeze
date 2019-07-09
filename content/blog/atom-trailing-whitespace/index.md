---
title: 使用Atom编辑器导致git changes中出现空格变化
date: 2016-05-26 12:40:18
tags:
- Tools
---

最近在使用Atom编辑器的过程中，发现提交时会出现一些多余的change，貌似Atom自动删除了代码末尾的空格。翻了下资料发现Atom有个内置的包做了这件事。

如果你想禁用这个功能，可以这么操作：

```bash
cd ~/.atom
vim config.cson

// 将whitespace中的`removeTrailingWhitespace`属性设置为false

'whitespace':
  'removeTrailingWhitespace': false
```

当然如果项目中大家都用Atom应该就不会出现这个问题啦。话说这个内置的包并没有做错什么，它使得项目的代码更加干净了。


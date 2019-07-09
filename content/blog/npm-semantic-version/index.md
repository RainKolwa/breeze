---
title: Dependencies中的波浪号是什么意思？
date: 2015-11-12 11:23:48
tags:
  - npm
---

提到这个话题一定要说一下**Semver**这个模块，它是**Semantic Version**的简称，中文翻译成*语义化版本*。

这个语义化的版本管理的具体规则是怎样的？

### 版本号的结构

比如v1.2.3，翻了下文档发下结构可以用模版字符串表述成：
```js
/**
 * major：重大版本
 * minor：小版本
 * patch：补丁
 */
const version = `v${major}.${minor}.${patch}`
```

### 波浪号
> 波浪号~:In the simplest terms, the tilde matches the most recent minor version (the middle number). ~1.2.3 will match all 1.2.x versions but will miss 1.3.0.

我试着翻译一下：

波浪号匹配的是中间的版本号，比如你在package.json中写的是～1.2.3，那你在升级的时候，比如1.2.4版本出来了，就会默认更新上去，但是如果1.3.0版本出来了，则不会默认更新上去，只能手动指定版本号。

### 尖括号
> 尖括号^:The caret, on the other hand, is more relaxed. It will update you to the most recent major version (the first number). ^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.

我试着翻译一下：

尖括号呢，则更加“宽松”一点。它是以版本号中的第一位为准。譬如说你设定的版本号是^1.2.3，那1.3.0，或者说1.x.x的版本，它都会默认更新，但是2.0.0版本就不认。

[参考文档](https://docs.npmjs.com/misc/semver)
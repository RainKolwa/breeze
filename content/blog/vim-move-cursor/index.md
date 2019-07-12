---
title: Vim中如何快速定位到文件末尾
id: 75
date: 2014-12-03 20:56:29
tags:
  - Vim
  - Tools
---

这里要墙裂推荐陈皓的译文[《简明 VIM 练级攻略》](https://coolshell.cn/articles/5426.html)

即使不直接使用Vim，也可以给编辑器武装上Vim插件，比如Atom中有Vim-mode-plus，在VSCode中也可以直接装Vim插件。

现在回答下本文的标题。Vim中如何快速定位到文件末尾？

```vim
# 定位到文件开头
gg
# 定位到文件末尾
G
# 定位到行开头
0
# 定位到行末尾
$
```
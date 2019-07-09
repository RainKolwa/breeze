---
title: Mac Finder显示隐藏文件
date: 2016-05-12 18:35:43
tags:
- Mac
---

有时候如果需要在Mac下查看隐藏的文件或者文件夹，可以使用下面的两种方法：

### 方法1:（推荐）
`Cmd+Shift+.`


### 方法2
打开终端，按照下面的命令输入，再重新打开Finder即可：

```bash
// 显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder

// 不显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles -boolean false ; killall Finder
```

---
title: mac finder显示隐藏文件
id: 244
categories:
  - Mac
date: 2016-05-12 18:35:43
tags:
---

<pre class="lang:default decode:true ">// 显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder

// 不显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles -boolean false ; killall Finder</pre>

&nbsp;
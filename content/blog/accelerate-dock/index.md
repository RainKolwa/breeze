---
title: 加速显示Dock
date: 2016-02-02 01:53:15
tags:
- Mac
---

有咩有觉得Mac上唤醒Dock的时候慢的让人憋尿？用下面的一行命令，解决你的痛楚，现在就打开终端！


```bash
defaults write com.apple.Dock autohide-delay -float 0 &amp;&amp; killall Dock
```

啊～世界还是很美好
---
title: 在ubuntu中串联mp3文件
date: 2015-11-12 11:33:05
tags:
- Ubuntu
---

最近因为项目需要（后端兼运维请假），需要将若干个mp3文件串联成一个。下面就推荐一下这个命令行工具。

```bash
apt-get install mp3wrap
mp3wrap ../我是新文件.mp3 ./*.mp3
```

### 首先apt-get是什么？
> 高级打包工具（英语：Advanced Packaging Tools，缩写为APT）是Debian及其派生的Linux软件包管理器。

意思是应该跟 `npm` 差不多吧。

### 然后mp3wrap是什么？
> Mp3Wrap  is  a  free  command-line utility, which wraps two or more mp3 files in one large playable file, without losing filename and ID3 information.

我试着翻译一下：

*Mp3Wrap*是一个免费的命令行工具，它可以将两个或者多个mp3文件合并成一个可以播放的大文件，并且能够保留文件名和ID3信息。

对了*ID3*是什么鬼？
> ID3是一种metadata容器，多应用于MP3格式的音频文件中。它可以将相关的曲名、演唱者、专辑、音轨数等信息存储在MP3文件中，又称作“ID3Tags”。
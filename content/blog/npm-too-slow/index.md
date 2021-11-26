---
title: node-sass安装失败，NPM速度慢？
date: 2015-11-13 21:35:16
tags:
  - npm
---

node-sass安装失败，有可能是因为npm下载速度慢导致的，解决办法就是切换到[淘宝的NPM镜像](https://npm.taobao.org/)源来提速。

```bash
npm install node-sass --registry=https://registry.npm.taobao.org
```

### 为了方便可以设置npm默认使用淘宝的镜像

```bash
npm config set registry https://registry.npm.taobao.org
```

或者可以使用`cnpm`

### 使用cnpm

全局安装cnpm指令

```bash
npm install cnpm -g --registry=https://registry.npm.taobao.org
cnpm install node-sass
```

### NRM

如果公司有内部的镜像，有时需要在公司和个人的项目切换，推荐一个npm源管理工具，[NRM](https://github.com/Pana/nrm)

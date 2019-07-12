---
title: npm 速度慢
id: 214
categories:
  - Magento
date: 2015-11-13 21:35:16
tags:
---

NPM有时下载指定的包会异常的蛮，比如node-sass等，怎么办呢？

可以通过指定淘宝源来提速！

```bash
npm install node-sass --registry=https://registry.npm.taobao.org
```

### 设置npm默认使用淘宝镜像
```bash
npm config set registry https://registry.npm.taobao.org
```

如果不想更改，也可以直接使用`cnpm`

### 使用cnpm
全局安装cnpm指令
```bash
npm install cnpm -g --registry=https://registry.npm.taobao.org
cnpm install node-sass
```

[淘宝 NPM 镜像](https://npm.taobao.org/)
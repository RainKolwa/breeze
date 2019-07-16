---
title: 用Pandoc将markdown转pdf
date: 2019-07-16 09:46:01
tags:
  - Tools
---

又到了更新简历的时候了，距离上次更新简历感觉已经过了5年了吧。最近写Markdown有点走火入魔，觉得我的简历应该也是Markdown格式。但是最终还是要转成DOCX或者PDF格式。

想到可以用pandoc转，就在mac上安装了。
```bash
brew install pandoc
```

第二步就开始转吧
```bash
pandoc test1.md -s -o test1.pdf
```

啊哦，预料之中的报错，提示需要安装[LaTex](https://tug.org/mactex/)，点开下载发现3.8G，OMG，吓得我赶紧打开我破解版本的迅雷，10M/s，美滋滋。安装完成后需要重启一次电脑。

再来一次，发现中文字体没有被解析，需要增加下面的参数指定中文字体：
```bash
pandoc --pdf-engine=xelatex -V mainfont='PingFang SC' test1.md -o test1.pdf

// 可以通过下面的命令确定中文字体属性
fc-list :lang=zh
```

看起来大功告成了，等等，emoji表情文字怎么变叉叉了，正当我准备重新翻看资料的时候，突然灵机一动，按照下面的步骤完美的解决了所有问题。

```bash
// 第一步：将markdown转成html
pandoc test1.md -f markdown -t html -s -o test1.html

// 第二步：打开chrome，Cmd+P，设置隐藏页眉页脚，另存为PDF
```

### 如何设置隐藏页眉页脚？

打印弹窗中选更多设置，取消勾选页眉页脚即可。如下图：
![取消勾选页眉页脚](./setting.jpg)

我真是太机智了。
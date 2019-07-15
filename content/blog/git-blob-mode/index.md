---
title: git old mode 100644 new mode 100755
date: 2016-05-12 09:14:14
tags:
  - Git
---

提交代码的时候出现了如题的提示，为什么会出现这个提示呢？因为我改了项目的文件夹权限。

```bash
diff --git a/.gitignore b/.gitignore

> old mode 100644
> old mode 100644
```

比较粗暴的解决办法如下，可以告诉git直接忽略文件夹权限的改动。

```bash
git config core.filemode false
```

### 100644

> In this case, you’re specifying a mode of 100644, which means it’s a normal file. Other options are 100755, which means it’s an executable file; and 120000, which specifies a symbolic link. The mode is taken from normal UNIX modes but is much less flexible — these three modes are the only ones that are valid for files (blobs) in Git (although other modes are used for directories and submodules).

摘自 [这里](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

我试着翻译一下：

100644 => 普通文件  
100755 => 可执行文件  
120000 => 软连接  
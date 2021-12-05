---
title: 找回不小心删除的本地分支
date: 2019-09-09 11:29:12
tags:
- Git
- Tool
---

今天不小心删除了一个没有合并，也没有push到远程，只有本地提交过的分支。
这种情况下，可以通过以下步骤恢复：

```bash
# 第一步先找回之前最后提交的Commit Id
1. git log -g

# 第二步通过以下命令基于最新的提交建立新分支
2. git branch [new_branch_name] [commit_id]
```

另外补充两剂git操作后悔药：

1. 本来没想提交的文件，提交后又想ignore掉，参考[Github docs](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files)

```bash
# Step1 untrack this file
git rm --cached <file>
# Step2 将文件添加到.gitignore文件中
# Step3 提交变更
git add -u
```

2. 提交了但是发现commit message写错字了

```bash
# 输入下面的命令，然后根据自己需要更改即可
git commit --amend
```

更多的修改提交历史的办法可以[参考这里](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2)

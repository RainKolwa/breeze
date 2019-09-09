---
title: 找回不小心删除的本地分支
date: 2019-09-09 11:29:12
tags:
- Git
---

今天不小心删除了一个没有合并，也没有push到远程，只有本地提交过的分支。
这种情况下，可以通过以下步骤恢复：

```bash
# 第一步先找回之前最后提交的Commit Id
1. git log -g

# 第二步通过以下命令基于最新的提交建立新分支
2. git branch [new_branch_name] [commit_id]
```
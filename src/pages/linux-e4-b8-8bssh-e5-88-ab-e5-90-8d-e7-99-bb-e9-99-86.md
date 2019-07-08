---
title: linux下ssh别名登陆
tags:
  - linux
id: 105
categories:
  - Magento
date: 2014-12-17 11:26:33
---

1.cd到~/.ssh/目录下
<pre class="lang:default decode:true ">ssh-keygen -t rsa</pre>
2.将公钥上传到服务器~/.ssh/目录下
<pre class="lang:default decode:true ">scp ./blog.pub user@X.X.X.X:~/.ssh/</pre>
3.把公钥复制到authorized_keys里
<pre class="lang:default decode:true ">cat blog.pub &gt;&gt; authorized_keys</pre>
4.设置目录权限
<pre class="lang:default decode:true ">chmod 700 ~/.ssh/
chmod 600 authorized_keys</pre>
5.重启ssh
<pre class="lang:default decode:true ">/etc/init.d/sshd restart</pre>
6.本地~/.ssh/目录下新建config文件，格式如下

<!--StartFragment -->
<div>![](file:///C:\Users\Dev\AppData\Roaming\Tencent\Users\414039927\QQ\WinTemp\RichOle\ERX6_T0EIDE5~1A@LQ4{8DG.jpg)[![ERX6_T0EIDE5~1A@LQ4{8DG](http://www.rainlee.net/wp-content/uploads/2014/12/ERX6_T0EIDE51A@LQ48DG.jpg)](http://www.rainlee.net/wp-content/uploads/2014/12/ERX6_T0EIDE51A@LQ48DG.jpg)</div>
<div></div>
<div></div>
7.Done!试一试
<pre class="lang:default decode:true ">ssh rainlee</pre>

特别鸣谢：
[http://dhq.me/use-ssh-config-manage-ssh-session](http://dhq.me/use-ssh-config-manage-ssh-session)
---
title: linux下修改mysql root密码
id: 70
categories:
  - Magento
date: 2014-12-03 15:38:06
tags:
---

1．修改MySQL的登录设置：
# vi /etc/my.cnf
在[mysqld]的段中加上一句：skip-grant-tables
例如：
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
skip-grant-tables
保存并且退出vi。
2．重新启动mysqld
# /etc/init.d/mysqld restart
Stopping MySQL: [ OK ]
Starting MySQL: [ OK ]
3．登录并修改MySQL的root密码
# /usr/bin/mysql
Welcome to the MySQL monitor. Commands end with ; or \g.
Your MySQL connection id is 3 to server version: 3.23.56
Type 'help;' or '\h' for help. Type '\c' to clear the buffer.
mysql&gt; USE mysql ;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
Database changed
mysql&gt; UPDATE user SET Password = password ( 'new-password' ) WHERE User = 'root' ;
Query OK, 0 rows affected (0.00 sec)
Rows matched: 2 Changed: 0 Warnings: 0
mysql&gt; flush privileges ;
Query OK, 0 rows affected (0.01 sec)
mysql&gt; quit
Bye
4．将MySQL的登录设置修改回来
# vi /etc/my.cnf
将刚才在[mysqld]的段中加上的skip-grant-tables删除
保存并且退出vi。
5．重新启动mysqld
# /etc/init.d/mysqld restart
Stopping MySQL: [ OK ]
Starting MySQL: [ OK ]

特别鸣谢：[http://www.cnblogs.com/allenblogs/archive/2010/08/12/1798247.html](http://www.cnblogs.com/allenblogs/archive/2010/08/12/1798247.html)
---
title: CentOS下安装phpmyadmin
id: 73
categories:
  - Magento
date: 2014-12-03 16:46:45
tags:
---

1、进入网站根目录（如/var/www/html）
cd /var/www/html
2、下载最新版本的phpMyAdmin程序
wget http://nchc.dl.sourceforge.net/project/phpmyadmin/phpMyAdmin/3.3.10/phpMyAdmin-3.3.10-all-languages.tar.gz
3、解压程序压缩包
tar xvfz phpMyAdmin-3.3.10-all-languages.tar.gz
4、移动目录phpMyAdmin-3.3.10-all-languages到phpmyadmin文件夹
mv phpMyAdmin-3.3.10-all-languages phpmyadmin
5、进入phpmyadmin目录
cd phpmyadmin
6、复制样本配置文件到config.inc.php文件
cp config.sample.inc.php config.inc.php
7、编辑配置文件并按以下修改
vi config.inc.php
找到$cfg['Servers'][$i]['auth_type'] = 'cookie';
修改后的代码：
$cfg['Servers'][$i]['auth_type'] = 'http';
8、重启apache
service httpd restart
9、访问http://XX.XX.com/phpmyadmin提示You don't have permission to access /phpmyadmin/ on this server.
解决办法：vi /etc/httpd/conf.d/phpMyAdmin.conf 将Deny from all改为Allow from all
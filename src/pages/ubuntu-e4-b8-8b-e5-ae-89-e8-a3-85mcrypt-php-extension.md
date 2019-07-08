---
title: ubuntu14.04下安装Mcrypt Php Extension
id: 130
categories:
  - Magento
date: 2015-01-08 18:47:26
tags:
---

转载自：http://blog.archean.me/2013/10/22/install-mcrypt-php-extension-on-ubuntu-server/
<pre class="lang:default decode:true ">//安装 Mcrypt 包, 顺便安装 php 开发环境
$ sudo apt-get install php5-mcrypt php5-dev

//将配置文件链接给 PHP
$ sudo ln -s /etc/php5/mods-available/mcrypt.ini /etc/php5/cli/conf.d/mcrypt.ini

//开启 Mcrypt 模块
$ sudo php5enmod mcrypt

//重启 Nginx, PHP-FPM
$ sudo /etc/init.d/nginx restart
$ sudo service php5-fpm restart</pre>
---
title: 413 Request Entity Too Large
date: 2016-05-12 10:08:27
tags:
  - Nginx
  - PHP
---

413 Request Entity Too Large，出现这个错误提示意味着客户端上传的文件大小超出了服务器的限制。如果想增大限制，可以按照下面的步骤修改一下ngxin配置：

### Nginx
```bash
// nginx.conf

// 在http中增加这行代码
client_max_body_size 10M;

// 重启
service nginx reload
```

### PHP
```bash
// php.ini

// 你可以用下面这行代码查看目前的阈值
grep -E "upload_max_filesize|memory_limit|post_max_size" /etc/php5/fpm/php.ini
// 然后修改这行代码来更新
upload_max_filesize 10M;

// 重启
service php5-fpm restart
```
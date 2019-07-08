---
title: 413 Request Entity Too Large
id: 242
categories:
  - Ubuntu
date: 2016-05-12 10:08:27
tags:
---

<pre class="lang:default decode:true ">// nginx.conf
// add this line in http
client_max_body_size 10M;

// php.ini
// you can use below line to check sizes of you config
grep -E "upload_max_filesize|memory_limit|post_max_size" /etc/php5/fpm/php.ini
// maybe you should update like:
upload_max_filesize 10M;

// reload/restart your nginx/php
sudo service nginx reload
sudo service php5-fpm restart</pre>

&nbsp;
---
title: Nginx 405 Not Allowed
date: 2019-07-02 10:56
tags:
- HTTP
- Nginx
---

最近在对接[Ping++](https://www.pingxx.com/)时，发现从银联渠道支付完成后回调回来的页面显示*405 Not Allowed*，Ping++的帮助中心真是全，检索了一下，解决方案如下：

> success_url 设置成静态页面，支付成功后跳转至页面显示 405 Not Allowed  
> 报错原因  
> Apache、IIS、Nginx 等绝大多数 web 服务器，都不允许静态文件响应 POST 请求。  
> 解决方案  
> 建议使用 .aspx、.asp、.jsp、.php 这样的动态页面。

但是咱是单页面应用，有没有其他办法？于是我翻了以下资料，可以修改项目的Nginx配置来解决。

```nginx{10}
server {
  server_name          foo.bar;
  listen               80;
  listen               443 ssl;
  ssl_certificate      /etc/nginx/ssl/foo.bar.cer;
  ssl_certificate_key  /etc/nginx/ssl/foo.bar.key;
  root /var/www/foobar/build;
  location / {
    try_files $uri $uri/ /index.html =404;
    error_page 405 =200 $request_uri;
  }
  if ($scheme != "https") {
    return 301 https://$host$request_uri;
  }
}
```

### HTTP code 405
状态码 405 Method Not Allowed 表明服务器禁止了使用当前 HTTP 方法的请求。
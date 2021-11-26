---
title: Nginx 405 Not Allowed
date: 2019-07-02 10:56
tags:
- Nginx
---

最近在对接[Ping++](https://www.pingxx.com/)时，发现从银联渠道支付完成后回调回来的页面显示*405 Not Allowed*，Ping++的官方的帮助中心提供的解决方案如下：

> success_url 设置成静态页面，支付成功后跳转至页面显示 405 Not Allowed  
> 报错原因  
> Apache、IIS、Nginx 等绝大多数 web 服务器，都不允许静态文件响应 POST 请求。  
> 解决方案  
> 建议使用 .aspx、.asp、.jsp、.php 这样的动态页面。

如果项目是单页面应用，可以通过修改 Nginx 配置来解决，配置如下：

```nginx{7}
server {
  server_name          example.com;
  listen               80;
  root /var/www/example/build;
  location / {
    try_files $uri $uri/ /index.html =404;
    error_page 405 =200 $request_uri;
  }
  if ($scheme != "https") {
    return 301 https://$host$request_uri;
  }
}
```

### 关于状态码

HTTP状态都有约定的含义，第一数字的含义如下：

- 2xx 表示成功
- 3xx 表示重定向
- 4xx 表示客户端错误
- 5xx 表示服务端错误

其中4xx中几个比较常见的状态码：

- 400 Bad Request，表示请求中的参数不合法
- 401 表示未登录
- 403 服务器拒绝执行
- 404 Not Found，查无此“求”
- 405 Method Not Allowed，表明服务器禁止了使用当前 HTTP 方法的请求

更多状态码相关的介绍可以参考 [HTTP状态码](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)

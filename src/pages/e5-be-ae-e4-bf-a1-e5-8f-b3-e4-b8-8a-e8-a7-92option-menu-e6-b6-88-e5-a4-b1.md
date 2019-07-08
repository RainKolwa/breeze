---
title: 微信右上角option menu消失
id: 44
categories:
  - Magento
date: 2014-11-19 04:06:36
tags:
---

 
<pre class="lang:default decode:true " >WeixinApi.ready(function(Api){
    var wxData = {
        link : 'http://' + window.location.host,
        desc : 'DESCRIPTION',
        imgUrl : 'http://' + window.location.host + '/assets/images/sharePic.jpg',
        title : 'TITLE'
    };

    var wxCallbacks = {
        // 整个分享过程结束
        all : function(resp,shareTo) {
            window.location.href = 'http://' + window.location.host;
        }
    };

    Api.shareToFriend(wxData,wxCallbacks);
    Api.shareToTimeline(wxData,wxCallbacks);
    Api.shareToWeibo(wxData,wxCallbacks);
    //此处先执行一次hide()再show()
    Api.hideOptionMenu();
    Api.showOptionMenu();
});</pre> 
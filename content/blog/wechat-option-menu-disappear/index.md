---
title: 微信右上角OptionMenu消失了？
date: 2014-11-19 04:06:36
tags:
  - Javascript
---

最近的项目发生了一件诡异的事情，可能是受其他模块影响，也可能是微信的BUG，右上角的三个点不见了！发现如果先调用一次hideOptionMenu，再调用一次showOptionMenu，就可以解决这个问题，代码如下，先记录下来吧：

```js
WeixinApi.ready(function(Api){
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
});
```
---
title: js获取视频的宽度高度
tags:
  - video
id: 113
categories:
  - Magento
date: 2014-12-17 15:39:26
---

<pre class="lang:js decode:true   ">$('.videoWrap video').bind("loadedmetadata", function () {
    var width = this.videoWidth;
    var height = this.videoHeight;
    console.log('width='+width+' height='+height);
});</pre>
&nbsp;
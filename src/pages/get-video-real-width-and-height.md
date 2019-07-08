---
title: get video real width and height
id: 121
categories:
  - Magento
date: 2014-12-25 12:15:26
tags:
---

<pre class="lang:js decode:true ">var myVideo = document.getElementById("myVideo");
myVideo.addEventListener("loadedmetadata", function (e) {
    var width = this.videoWidth,
        height = this.videoHeight;
}, false );</pre>
&nbsp;
---
title: How to use icomoon fonts in ios navtive application
id: 221
categories:
  - Magento
date: 2015-11-20 00:27:49
tags:
---

<pre class="lang:default decode:true ">(void)viewDidLoad{
[super viewDidLoad];
[iconLabel setFont:[UIFont fontWithName:@"icomoon" size:130]];
[iconLabel setText:[NSString stringWithUTF8String:"\ue909"]];
}
// take care of "\ue909",you need to use "\u"+FONT_CODE</pre>
&nbsp;
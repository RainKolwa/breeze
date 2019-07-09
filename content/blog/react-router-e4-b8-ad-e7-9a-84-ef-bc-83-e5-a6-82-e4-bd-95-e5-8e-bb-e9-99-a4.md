---
title: react-router中的../＃/..如何去除
id: 212
categories:
  - Magento
date: 2015-11-13 14:22:38
tags:
---

<pre class="lang:default decode:true ">// JavaScript module import
import createBrowserHistory from 'history/lib/createBrowserHistory'
// or commonjs
const createBrowserHistory = require('history/lib/createBrowserHistory')

// 然后在Router上加上这个
&lt;Router history={createBrowserHistory()}&gt;</pre>
&nbsp;
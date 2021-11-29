---
title: 为Blog添加百度统计
date: 2021-11-28 21:35:23
tags:
- gastby
- react
---

发现一件挺有意思的事情，就是我的博客内容不多，都是记录了些平时需要查资料，然后又比较容易忘记的代码片段，但是我的博客其实已经"迭代🤔"了很多版了。刚开始的时候是wordpress，然后又用过hexo，hexo还换过两次皮肤，现在又用了gastby，我现在都不知道这样折腾来折腾去的意义在哪里。最重要的是内容不是吗（陷入沉思）？

为Blog添加百度统计？本来就是一个没流量的博客，记录了些没可能只对我本人有用的东西。统计个啥劲呢？答案就在博客的标题里，最近把标题改成了“B,Log”，译成中文是“装逼日记”。所以必须得有统计哈哈。

Gatsby中加入百度统计，首先找到html.js，在header部分加入统计代码，然后为了统计到页面级别，再在gatsby-browser.js中的onRouteUpdate函数中加入百度统计的trackPageView事件。完事了，简单对吧。

下面记录下这两部分代码。

```react
// html.js
export default function HTML (props) {
  const siteid = 'xxxxxxxxxxx'
  const tongji = (
    <script
      key={`baidu-tongji`}
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?${siteid}";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`,
      }}
    />
  )
  return (
    <html {...props.htmlAttributes}>
      <head>
        <!-- 省略meta信息 -->
        {[...props.headComponents, tongji]}
      </head>
      <body {...props.bodyAttributes}>
       <!-- 省略body信息 -->
      </body>
    </html>
  )
}
```

```js
// gastby-browser.js
exports.onRouteUpdate = ({ location }) => {
  if (
    process.env.NODE_ENV === `production` &&
    typeof window._hmt === `function`
  ) {
    window._hmt.push(['_trackPageview', (location || {}).pathname])
  }
}
```

下面再记录下彩蛋。代码发布后，我发现并没有统计到页面级别的数据。于是开始了"人在囧途"的排查问题之旅。

1. 首先发现统计的脚本加载失败，提示`net::ERR_CONNECTION_CLOSED 200`， 发现是因为代理ClashX开着。

2. 然后发现 onRouteUpdate事件并没有监听到，可能是gatsby-browser不应该使用esm引入。

3. 然后重新发布代码还是无效，发现部署成功，但是文件没更新。

4. 然后又发现github actions中配置的cp 命令实际上是没生效的。之前写的是`cp -r ./public ./dist`，首次部署没有问题，但是如果已经有dist文件夹，public文件夹会被发布到dist/public下。。

真是曲折，20分钟已经没了。

5. 另外，代码安装好后发现百度统计现在支持单页面应用数据统计了。只需要在配置中打开开关即可。

> 启用之后，百度统计会基于[History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)或者[hashchange](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)自动为[单页应用](https://baike.baidu.com/item/SPA/17536313)记录页面 PV 日志，开发者无需在路由切换时手动埋点，[查看详情](https://tongji.baidu.com/web/help/article?id=324&type=0)。

…卒

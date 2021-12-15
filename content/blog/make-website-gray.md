---
title: Tailwind网站变灰
date: 2021-12-13 22:10:10
tags:
- tailwind
- css
---
 
今天是南京大屠杀纪念日，上午公司送的小米电动牙刷坏了，打开京东发现首屏灰了。晚上吃完饭在电梯里跟同事讨论页面变灰的方案，于是动手在一个官网项目上试了下。

官网使用的是Vite + tailwindcss，为了快速发布一版，网站有不少模块是直接copy的  [Tailblocks — Ready-to-use Tailwind CSS blocks](https://tailblocks.cc/) 。

我的思路大致是：

1. 使用CSS `filter: grayscale(1)`置灰图片及背景图片
2. 配置文件改用CSS变量，写两套theme配置，用css选择器里来区别
3. 通过日期里决定是否往最外层容器中添加theme-gray的class name

下面记录下我的方案：
tailwind.config.js

```js
module.exports = {
  content: [],
  theme: {
    extend: {
      textColor: {
        blue: "var(--text-blue)",
      }
    },
  },
  plugins: [],
}
```

tailwind.css

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

:root {
  --text-blue: blue;
}
:root .theme-gray {
  --text-blue: #000000;
}
.theme-gray img {
  filter: grayscale(1);
}
.theme-gray .block-banner {
  filter: grayscale(1);
}
```

index.html

```html
<script>
      if(new Date().getMonth() === 11 && new Date().getDay() === 13) {
        document.querySelector('#app').setAttribute('class', 'theme-gray');
      }
    </script>
```

得益于各大主流浏览器的支持，CSS变量的方案得到了很多应用，例如运行时多主题，用户可以直接在界面选择切换。只要写一个主题选择的组件，来控制外层容器的class名即可，包括夜览模式，道理也是一样的。

### 夜览模式

以前编码的时候特别迷恋"暗黑"模式，甚至一度浏览网页也全部深色模式（基于一个chrome插件，叫[Dark Reader - Chrome Web Store](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh)）。但后台因为不知道在哪看到的，深色模式看多了伤眼睛，就劝退了😂。

但夜览模式除了系统支持，在很多网页上也很流行，而且是自动切换的。有时候我们想按照用户系统设置的模式来展示网站，CSS可以通过**prefers-color-scheme**来检测系统的主题色是亮色还是暗色：

```css
.day   { background: #eee; color: black; }
.night { background: #333; color: white; }

@media (prefers-color-scheme: dark) {
  .day.dark-scheme   { background:  #333; color: white; }
  .night.dark-scheme { background: black; color:  #ddd; }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme   { background: white; color:  #555; }
  .night.light-scheme { background:  #eee; color: black; }
}
```

我们也可以通过window变量的`matchMedia`方法来判断当前系统是否暗色主题：

```js
window.matchMedia('(prefers-color-scheme: dark)').matches
// expected true or false
```

这样我们就可以将当前的主题存在localStorage中，网站加载的时候通过localStorage来判断应该使用什么类型的主题，由此实现切换dark mode的功能。

tailwind提供了一个更方便修改dark模式下元素样式的方法，直接在class中添加`dark:your-class-name`就行，实例如下：

```css
<!-- Dark mode not enabled -->
<html>
<body>
  <!-- Will be white -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>

<!-- Dark mode enabled -->
<html class="dark">
<body>
  <!-- Will be black -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>
```

### 多主题切换

除了使用上面的方式，ant design采用了另一种方式，原理大致是通过less的modifyVars方式来切换。这里暂不展开讨论了，相关的实现可以参考这里，<https://pro.ant.design/zh-CN/blog/change-theme>。

### 参考

1. <https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually>
2. <https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme>

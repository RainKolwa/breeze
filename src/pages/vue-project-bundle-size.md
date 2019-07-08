---
title: "vue-cli+iview项目打包大小优化"
date: "2018-03-04 14:45:53"
tags:
---

最近用vue-cli+iview做了一个项目，打包后发现vendor文件竟然超过了1M，惊了。于是就通过一下四个步骤优化了下。


- iview 按需加载
- lodash 按需加载
- moment 只引入需要的语言
- 路由懒加载

打包文件分析工具 [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)，如果你也是用的vue-cli初始化的项目，可以直接`npm run build --report`。

### iview 按需加载

1.安装插件
```yarn add babel-plugin-import -D
// npm install babel-plugin-import --save-dev
```2..babelrc中的plugins参数中增加
```[
  "import",
  {
    "libraryName": "iview",
    "libraryDirectory": "src/components"
  }
]
```3.入口文件main.js
```// 引入用到的组件
import { Button, Table, Icon, Row, Col, Menu, MenuItem, Submenu, Spin, DatePicker, TimePicker, Input, Progress, Breadcrumb, BreadcrumbItem, ColorPicker, Form, FormItem, Upload, Select, Option, Modal, Page, CheckboxGroup, Checkbox, Poptip, Avatar, Message } from 'iview'

// 注册组件
...
Vue.component('Poptip', Poptip)
Vue.component('Avatar', Avatar)

// 注册全局函数
Vue.prototype.$Message = Message

```> [官方文档](https://www.iviewui.com/docs/guide/start#%E6%8C%89%E9%9C%80%E5%BC%95%E7%94%A8)


### lodash 按需加载
这个网上教程很多了，这里就不再赘述
```// 别这样
import _ from 'lodash'
// 要这样
import assign from 'lodash/assign'
```

### moment 只引入需要的语言
因为webpack解析的问题，当我们使用`import 'moment/locale/zh-cn'`时，webpack会默认加载整个`moment/locale/`目录
webpack配置文件中的module参数中增加：
```module: {
  ...
  noParse: [/moment.js/]
}
```关于noParse的说明，可以看[这里](https://doc.webpack-china.org/configuration/module/#module-noparse)
```import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')
```
### 路由懒加载
修改路由配置
```// view函数接收文件名称
const view = name => () => import(`../views/${name}`)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/sign-in',
      name: 'SignIn',
      component: view('signIn'),
    }
  ]
})
```设置了懒加载后，打包的文件会变成这样：
```static/js/0.38cdf8708ea1c69ccb23.js    21.9 kB       0  [emitted]         vendor-async
static/js/1.b88b0c6577465cefe081.js     213 kB       1  [emitted]
static/js/2.5118df0982cf0c447000.js    4.67 kB       2  [emitted]
static/js/3.311e01d3b5504c3a493c.js    25.9 kB       3  [emitted]
static/js/4.460669943bc6d205d769.js    2.92 kB       4  [emitted]
static/js/5.e5ab3b5317c9e13c55f7.js    4.58 kB       5  [emitted]
static/js/6.9197ab16ab0ffbdcdf60.js    3.52 kB       6  [emitted]
static/js/7.dfea99f77a7721726a8b.js       3 kB       7  [emitted]
```
经过上述四个步骤后，vendor文件的大小从1M降到了412 kB  

| Lodash  | Moment   | Iview    |
| ------- | -------- | -------- |
| 75.15KB | 217.78KB | 458.78KB |
| 19.55KB | 51.62KB  | 31.82KB  |


## 总结
目前优化总体来讲就是走两条路子，一条是“按需”，一条是”拆”。

**按需**：一些常用的依赖如上文中提及的lodash、momentjs都支持按需加载，用多少拿多少，打包后的文件自然就会小。

**拆**：将公用库与自己写的业务代码隔离，一方面提高打包速度，另一方面也解决了打包到一个文件过大的问题；将业务代码以路由为基础，拆分发到每个页面，每个页面只引入用到的文件，一方面提高了用户访问速度，另一方面也解决了打包到一个文件过大的问题。

最后上两张图：
优化前
![优化前](/images/start.jpg)
优化后
![优化后](/images/end.jpg)

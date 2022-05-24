---
title: Vitepress搜索之Algolia手动爬虫
date: 2022-05-24 16:43:01
tags:
  - Vue

---

最近使用VitePress搭建了一个技术文档网站。VitePress默认主题支持`Algolia DocSearch`，在Algolia官网申请账号后，通过下面的配置即可实现：

```js
module.exports = {
  themeConfig: {
    algolia: {
      appId: 'your_app_id',
      apiKey: 'your_api_key',
      indexName: 'index_name'
    }
  }
}
```

但是配置好后，想用上Algolia的检索服务，还需要在[这里](https://docsearch.algolia.com/)申请服务，审核通过后才可生效，并且申请资格中有一条：

> Your website must be a technical documentation of an open source project or a technical blog. We do not index commercial content.

您的网站必须是开源项目的技术文档或者技术博客，很遗憾，我参与的项目并没有开源打算。

怎么办呢？进入正题：

Algolia提供了另外两种途径：

1. [Run your own](https://docsearch.algolia.com/docs/legacy/run-your-own/)
2. [Use any of our other API clients](https://www.algolia.com/doc/api-client/getting-started/install/javascript/?client=javascript)

我选择了前者。

### 第一步

在项目根目录下新建一个`.env`文件，内容如下:

```bash
APPLICATION_ID=YOUR_APP_ID
API_KEY=YOUR_API_KEY
```

这里需要注意，提供的`API_KEY`需要有写入权限。

### 第二步

安装 [jq](https://github.com/stedolan/jq/wiki/Installation)，用来处理命令行中的JSON。

### 第三步

准备配置文件`config.json`，同样可以放在项目根目录下：

```json
{
  "index_name": "xxxx",
  "start_urls": ["https://xxx.xxx.com"],
  "selectors": {
    "lvl0": ".content h1",
    "lvl1": ".content h2",
    "lvl2": ".content h3",
    "lvl3": ".content h4",
    "lvl4": ".content h5",
    "lvl5": ".content h6",
    "content": ".content p, .content li"
  },
  "selectors_exclude": [
    "aside",
    ".page-footer",
    ".next-and-prev-link",
    ".table-of-contents"
  ],
  "js_render": true
}

```

这里要注意需要配置上`js_render`，配置后Algolia会使用`Selenium`来采集页面信息。`selectors`和`selectors_exclude`分别为采集的DOM范围和排除采集的范围，配置`selectors_exclude`可以屏蔽掉一些不必要的干扰内容。

### 第四步

在项目下新建`crawler.sh`，运行这个文件即可:

```bash
#!/bin/bash

docker run -it --env-file=.env -e 'CONFIG='"$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper:latest
```

运行没问题的话会有如下的输出：

```bash
Getting https://xxx.xxx.com from selenium
> DocSearch: https://xxx.xxx.com/ 2 records)
Getting https://xxx.xxx.com/resource/optimization from selenium
Getting https://xxx.xxx.com/resource/introduction from selenium
Getting https://xxx.xxx.com/application/optimization from selenium

# ...

Nb hits: 80
```

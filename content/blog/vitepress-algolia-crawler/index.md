---
title: Vitepress搜索之Algolia手动爬虫
date: 2022-05-24 16:43:01
tags:
  - Vue

---

最近使用 VitePress 搭建了一套内部技术文档，想复用默认主题中的 `Algolia DocSearch`。按照官网操作申请账号、填好配置，却发现 DocSearch 只面向开源项目开放，私有站点无法通过审核。为了仍然享受 Algolia 的检索体验，我尝试了官方提供的“自建爬虫 + 自己托管索引”方案，最终跑通。本文记录完整流程，读完你可以：

- 理解为什么官方 DocSearch 无法覆盖私有 VitePress 站点；
- 搭建自托管的 Algolia 爬虫，并生成索引；
- 把生成的索引配置回 VitePress，实现站内即时搜索。

## 背景：官方 DocSearch 的限制

VitePress 默认主题支持 `algolia` 字段，只要填入账号即可：

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

但是配置完后，还需要在 [DocSearch 官网](https://docsearch.algolia.com/) 申请爬虫服务。申请条件里写得很清楚：

> Your website must be a technical documentation of an open source project or a technical blog. We do not index commercial content.

私有项目毕竟无法公开，于是被拒之门外。好在 Algolia 还提供了另外两种方式：

- [Run your own](https://docsearch.algolia.com/docs/legacy/run-your-own/): 自己运行 DocSearch 爬虫，把结果写入自己的 Algolia 应用。
- [Use any of our other API clients](https://www.algolia.com/doc/api-client/getting-started/install/javascript/?client=javascript): 使用任意 API Client，完全自定义索引和数据。

对“已有 VitePress 站点 + 只缺搜索”的场景而言，前者成本最低，所以本文基于“Run your own”展开。

## 前置条件

- 可访问的 Algolia 账号，并已在 Algolia Dashboard 中创建应用（AppId）和 Index；需要一个具备 **write** 权限的 API Key。
- 一台可以运行 Docker 的机器（Mac/Linux/WSL 均可），并已安装 [Docker](https://docs.docker.com/get-docker/) 与 [jq](https://github.com/stedolan/jq/wiki/Installation)。
- 一个已经部署的 VitePress 站点（本地或线上），能够通过 URL 访问。若站点设置了 Basic Auth，需在 `start_urls` 中附带凭据。
- 了解站点的 DOM 结构，知道内容区域的容器 class，方便配置 selectors。

## 步骤 1：准备 `.env`，存放敏感凭据

在项目根目录下创建 `.env`：

```bash
APPLICATION_ID=YOUR_APP_ID
API_KEY=YOUR_API_KEY
```

确保 `API_KEY` 拥有写入权限（Algolia Dashboard → API Keys → 权限里包含 `addObject`, `deleteObject` 等）。可以在终端用 `curl` 简单调用 `/1/indexes/*/settings` 验证权限是否正确。

## 步骤 2：安装并验证 jq / Docker

DocSearch 官方镜像需要 Docker 运行，`jq` 用于把 `config.json` 序列化为一行字符串。安装完成后执行以下命令确认版本：

```bash
docker --version
jq --version
```

任一命令报错都需要先修复，否则后续脚本无法执行。

## 步骤 3：编写 `config.json` 并解释 selectors

在项目根目录创建 `config.json`：

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

几个关键点：

- `start_urls`：列出 VitePress 站点的入口。若有多语言，可写多个地址。支持 `sitemaps` 字段引入 sitemap。
- `selectors`：指明内容在哪些 DOM 元素里。默认 VitePress 把正文渲染在 `.content` 下，所以我从 `h1 ~ h6` 和 `p/li` 提取层级。若你自定义了主题，需要根据实际 DOM 调整。
- `selectors_exclude`：排除无需索引的区域，例如侧边栏（`.table-of-contents`）、底部导航（`.next-and-prev-link`）等，避免噪声。
- `js_render: true`：让爬虫使用 Selenium，在内容通过客户端 JS 渲染时非常关键。我测试过把它关掉，结果只抓到静态骨架页面。

调试技巧：先在浏览器 DevTools 中运行 `document.querySelector('.content h2')` 等语句确认是否能选中目标元素。

## 步骤 4：编写并运行 `crawler.sh`

新增 `crawler.sh`：

```bash
#!/bin/bash

docker run -it --env-file=.env -e 'CONFIG='"$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper:latest
```

脚本做了两件事：

1. 读取 `.env` 中的 `APPLICATION_ID` 和 `API_KEY`；
2. 将 `config.json` 序列化后传给 `algolia/docsearch-scraper` 官方镜像。

运行成功会看到类似输出：

```bash
Getting https://xxx.xxx.com from selenium
> DocSearch: https://xxx.xxx.com/ 2 records)
Getting https://xxx.xxx.com/resource/optimization from selenium
Getting https://xxx.xxx.com/resource/introduction from selenium
Getting https://xxx.xxx.com/application/optimization from selenium

# ...

Nb hits: 80
```

`Nb hits` 表示写入索引的记录数量。如果为 0，通常是 selectors 没配好或页面被登录墙拦截。

## 步骤 5：接回 VitePress

爬虫成功后，Algolia 应用的 `index_name` 里就有了数据。接下来调整 `docs/.vitepress/config.ts`（或 `config.js`）：

```ts
export default {
  themeConfig: {
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'SEARCH_ONLY_API_KEY',
      indexName: 'xxxx'
    }
  }
}
```

- `apiKey` 换成 **Search-Only** Key，避免把可写 Key 暴露到前端。
- 如果站点有多语言/多版本，可配置 `searchParameters`，例如 `{ facetFilters: ['lang:zh-CN'] }`。

部署完成后刷新页面，就能看到 DocSearch 弹窗正常返回结果。

## 验证与排障清单

- Docker 日志报 403：检查 `start_urls` 是否可访问、`ALGOLIA_APPLICATION_ID` 是否匹配。
- `Nb hits` 大幅少于页面数：`selectors_exclude` 过度过滤，或 `appId/index_name` 指向旧索引。
- VitePress 搜索为空：确认前端使用的 `indexName` 和爬虫写入的一致，并在 Algolia Dashboard 查看最新更新时间。

## 总结

当官方 DocSearch 无法覆盖私有项目时，自托管爬虫是“最接近官方体验”的方案：只需准备 `.env + config.json + crawler.sh` 三件套，再按需调整 selectors，就能把 VitePress 的内容同步到 Algolia。上线后记得设置定时任务（如 GitHub Actions + cron）定期触发爬虫，保证索引更新。只要前置条件满足，整个流程 30 分钟内即可完成。***

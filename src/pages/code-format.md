---
title: "code format"
date: "2019-06-20 13:00"
---

## This is an article to test code format.

### default
```
console.log('Default.')
```

### inline
I would like a cup of `COFFEE` for now.

### javascript
```javascript{1-2}
function hello (name) {
  console.log(`Hello, ${name}!`)
}
```

### 中文字体

```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```
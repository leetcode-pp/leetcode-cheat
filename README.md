## 刷题小助手

[谷歌商店安装](https://chrome.google.com/webstore/detail/leetcode-cheatsheet/fniccleejlofifaakbgppmbbcdfjonle?hl=en-US)

[Chrome Extension Store](https://chrome.google.com/webstore/detail/leetcode-cheatsheet/fniccleejlofifaakbgppmbbcdfjonle?hl=en-US)

[下载最新 Chrome 扩展](./leetcode-cheat-0.10.5.zip)

[Download latest Chrome Extension](./leetcode-cheat-0.10.5.zip)

功能介绍：

- [刷题效率低？或许你就差这么一个插件](https://lucifer.ren/blog/2020/08/16/leetcode-cheat/)

## 部署到自己的服务器

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## 开发

目录结构:

```
|-public 插件的 mainfest，html 等静态资源
|-spider 爬虫抓取和转化后的相关文件
|---raw-markdown 由github上抓到的题解markdown原文件
|---yield-db-json 从markdown中提取标题、tag、公司、各语言题解生产的json
|-src 源代码
|-scripts
|--- constants.js 脚本常量
|--- curl-leetcode.js 爬虫请求逻辑
|--- LeeCodeProvider.js 爬虫基类
|--- Logger.js 日志辅助类
|--- utils.js 正则、文件操作等辅助类
|---db 所有的题目信息， 标签信息， 公司信息
|---App.js 主逻辑都在这里
```

- [爬虫相关](./scripts/README.MD)

## 构建

- npm run build

> 然后将 build 文件夹的内容添加到扩展中即可，具体方式见上面的`功能介绍`。以后每次执行 npm run build， 插件会自动刷新，无需手动加载。

- npm run build:web 构建 web 版本的应用，即可直接脱离 chrome 插件的形式存在

## 计划

- [x] 完善题目，优先级比较高的是 91 的这些题目，按照现有的两个题目的标准进行完善。
- [x] 标签完善。目前很多标签是没有对应的讲解的，比如递归，队列等。
- [x] 代码模板
- [ ] [可视化调试](./src/visualDebug/README.md)
- [ ] “此题已经收录到了 91” 功能

## 参考

- [chrome 扩展开发官方文档](https://developer.chrome.com/extensions)

## License

[Apache-2.0](./LICENSE.txt)

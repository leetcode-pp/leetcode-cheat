## 刷题小助手

功能介绍：

- [刷题效率低？或许你就差这么一个插件](https://lucifer.ren/blog/2020/06/06/algo-chrome-extension/)

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

## 爬虫
- npm run crawl 此命令会先从github上拉取问题列表，将文件名解析成数组，然后根据问题名称循   环拉取与之对应的markdown文件（此过程会先查找本地是否存在，如果存在则跳过）
  问题拉取完成后，根据markdown匹配正则，转化成所需的json文件



## 构建
- npm run build
- 然后将 build 文件夹的内容添加到扩展中即可，具体方式见上面的`功能介绍`。

> 以后每次执行 npm run build， 插件会自动刷新，无需手动加载。


## 计划

- [ ] 完善题目，优先级比较高的是 91 的这些题目，按照现有的两个题目的标准进行完善。
- [ ] 标签完善。目前很多标签是没有对应的讲解的，比如递归，队列等。

## 参考

- [chrome 扩展开发官方文档](https://developer.chrome.com/extensions)

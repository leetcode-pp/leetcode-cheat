## 刷题小助手

功能介绍：

- [刷题效率低？或许你就差这么一个插件](https://lucifer.ren/blog/2020/06/06/algo-chrome-extension/)

## 开发

目录结构:

```
|-public 插件的 mainfest，html 等静态资源
|-src 源代码
|---db 所有的题目信息， 标签信息， 公司信息
|---App.js 主逻辑都在这里
```



## 构建
- npm run auto 自动生成问题解答json
- npm run build
- 然后将 build 文件夹的内容添加到扩展中即可，具体方式见上面的`功能介绍`。

> 以后每次执行 npm run build， 插件会自动刷新，无需手动加载。

## 计划

- [ ] 完善题目，优先级比较高的是 91 的这些题目，按照现有的两个题目的标准进行完善。
- [ ] 标签完善。目前很多标签是没有对应的讲解的，比如递归，队列等。

## 参考

- [chrome 扩展开发官方文档](https://developer.chrome.com/extensions)

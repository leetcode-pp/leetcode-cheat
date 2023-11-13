const zh = {
  app: {
    name: "力扣加加",
    preview: "预览",
    copyMdOrigin: "点击复制 MarkDown 原文",
    fullScreen: "全屏模式(退出请按 ESC)",
    toUse: "去使用",
    custom: "自定义",
    presets: "预设",
    setLang: "设置语言",
    changeLang: "English",
    copy: "复制",
    save: "保存",
    yes: "是",
    no: "否",
    delete: "删除",
    delTitle: "确认要删除么？",
    deleteSuccess: "删除成功~",
    saveSuccess: "保存成功~",
    copySuccess: "复制成功~",
    article: "文章",
    recommendedQuestions: "推荐题目：",
    goForDictation: "去默写",
    contribution: "纠错 or 贡献其他语言",
    back: "返回主页",
    viewSolution: "查看本题题解",
    viewInHandpickCollection: "该题已被收录到精选合集《{slotText}》点击查看",
    notCollected: "本题暂未被力扣加加收录，点击查看所有已收录题目~",
    allCollected: "所有已收录的题目",
    writingExplanation: "正在撰写题解...",
    goToTheWebsiteToUse: "去网站使用",
    checkTips:
      "一般只要你开启了自动更新，那么当插件更新之后chrome会在五个小时以内自动更新。如果你想第一时间更新，或者您禁用了自动更新，都可以在这里检测最新版。",
    checkBtn: "检测更新",
    selfIntroduction:
      "作者是一个 Github 40K star 的前端架构师，leetcode 刷题插件leetcode-cheatsheet作者，掌握各种算法套路，写了十几万字的算法刷题套路电子书，公众号回复【电子书】获取。",
    allSolutions: {
      columns: {
        title: "题目",
        tag: "标签",
      },
    },
    initializeContentScriptFailed: "初始化 chrome 插件 content script 失败",
    run: "运行",
    submit: "提交",
    wirteSolution: "写题解",
    visualizationDebug: "可视化调试",
    linkedListCommnet:
      "如果你在调试链表题目，手动生成链表很麻烦，想快速生成链表可以注释如下方法，并使用如下方法，输入一个数组，返回一个链表",
    visualDebugComment:
      "替换下方的 xxx 为主函数名， yyy 为测试用例参数开启调试",
    visualDebugSupport: "当前仅支持",
    getProblemError: "获取题目描述失败，请先切换到题目描述标签页",
    savingProblem: "正在存储题目信息，请稍后~",
    githubAPIError:
      "使用 Github API 失败，已为您切换为普通模式，普通模式仅可自动带入题目名称，题目地址以及题解语言。",
    notYet: "暂无",
  },
  problem: {
    69: "69. x 的平方根",
    278: "278. 第一个错误的版本",
    "278_desc":
      "最左最右思路一样，大家练习两道，实际情况根据题意使用不同的二分即可。",
    327: "327. 区间和的个数",
    493: "493. 翻转对",
    743: "743. 网络延迟时间",
    778: "778. 水位上升的泳池中游泳",
    "778_desc":
      "DFS + 二分，类似的题目有很多，比如第 1439 题。这种题套路都很像，难度其实也不算大。",
    1109: "1109. 航班预订统计",
    1314: "1314. 矩阵区域和",
    1462: "1462. 课程表 IV",
    1480: "1480. 一维数组的动态和",
    1584: "1584. 连接所有点的最小费用",
    2536: "2536. 子矩阵元素加 1",

    minimumLightRadius: "最小光照半径",
    minimumLightRadius_desc: "经典能力检测二分，力扣也有一道类似题",
    kthPairDistance: "第 K 小的距离对",
    kthPairDistance_desc: "典型的计数二分，本质上也是能力检测，只不过题量大，单独拆出来。",
    JZ51: "剑指 Offer 51. 数组中的逆序对",

    longestIncreasingSubsequence: "最长上升子序列系列",
    longestIncreasingSubsequence_desc: "系列经典题目，值得一做",
  },
  codeTemplate: {
    name: "代码模板",
    perSum: {
      title: "前缀和",
      tips: "建议先学会之后再用模板。 如果你还不会的话，可以看看这篇",
      item1: "一维前缀和",
      item2: "二维前缀和",
      item3: "一维差分数组",
      item4: "二维差分数组",
    },
    graph: {
      title: "图",
      item1: "dijkstra(单源贪心最短路径)",
      item2: "floyd_warshall(多源动态规划最短路径)",
      item3: "Bellman–Ford（单源动态规划最短路径）",
      item4: "Kruskal（又称加边法，是一种最小生成树算法）",
      item5: "Prim（又称加点法，是一种最小生成树算法）",
      item6: "Kahn（基于BFS的拓扑排序）",
    },

    moreTemplate: "更多模板后续陆续更新~",
  },
  dataStructureVisualization: {
    name: "数据结构可视化",
    incrementalUsage: "增量使用",
    explain1:
      "暂不支持编辑功能。如果需要编辑，可通过先“使用”再“保存”，最后“删除”原有的数据，从而间接实现。",
    explain2: "模板可以增量使用。点击”去使用“的下拉三角，并选择增量使用即可。",
    explain3:
      "使用的模板会根据你鼠标的位置生成。比如你的鼠标在点(100, 100)，那么模板会整体偏移 (100, 100)个单位。如果此时模板并不是正好以(100, 100)为左上顶点，说明模板本身制作的时候就不是以(0,0)为左上顶点制作的。大家制作自定义模板的话需要注意这一点。",
    explain4: "你也可以选择直接使用原生 excalidraw ",
  },

  explanationTemplate: {
    name: "题解模板",
    goToTheWebsiteToUse: "去网站使用",
    problemAddress: "题目地址",
    problemDesc: "题目描述",
    preKnowledge: "前置知识",
    company: "公司",
    thinking: "思路",
    keyPoints: "关键点",
    languageSupport: "语言支持",
    complexityAnalysis: "复杂度分析",
    complexityDeclare: "令 n 为数组长度。",
    timeComplexity: "时间复杂度",
    spaceComplexity: "空间复杂度",
    howToUse: "如何使用？",
    programmingLanguage: "编程语言:1",
    commonFormulas: "常用公式（点击可复制）：",
    noBackup: "没有找到任何备份文件",
    restore: "恢复上次编辑内容",
    backupTips:
      "题解每五秒备份一次，如果你不小心刷新了浏览器可以点击下方的恢复按钮还原。由于是覆盖式备份，因此仅会保存最后一次编辑的内容。",
    afterUpdateTemplateTips: "后续考虑提供更多题解模板。",
    afterUpdateThemeTips: "后续考虑支持更多主题，以及用户自定义主题。",
  },
  complexityQuickCheck: {
    name: "复杂度速查",
    tips: "不懂为什么？点这里",
    dataScale: "数据规模",
    timeComplexity: "算法可接受时间复杂度",
  },
  learningRoute: {
    name: "学习路线",
    dp: "动态规划",
    binarySearch: "二分查找",
    binarySearchDesc: `
    如果让我用一句话总结二分法，我会说**二分法是一种让未知世界无机可乘的算法**。即二分法无论如何我们都可以舍弃一半解，也就是无论如何都可以将解空间砍半。
    难点就是两点：**什么条件** 和 **舍弃哪部分**。这是二分法核心要解决的问题。
    
    从战术上有两种基本类型，分别是最左插入二分和最右插入二分。
    
    从战略上有四种基本类型，能力检测二分，前缀和二分，插入排序二分和计数二分。
    
    两种类型（最左和最右插入）主要解决的的是：**解空间已经明确出来了，如何用代码找出具体的解**。而四大应用主要解决的是：**如何构造解空间**。更多的情况则是如何构建有序序列。

    这两部分都是实操性很强的内容，在理解这两部分内容的同时，请大家务必牢记一个中心**折半**。
    
    更多内容请访问：https://lucifer.ren/blog/2021/03/08/binary-search-1`,
    binarySearch_item1: "最左/最右二分",
    binarySearch_item1_text: "代码参考：代码模板 - 二分法",
    binarySearch_item1_keys: `
    1. 最左二分不断收缩右边界，最终返回左边界
    2. 最右二分不断收缩左边界，最终返回右边界
    `,
    binarySearch_item2: "能力检测二分",
    binarySearch_item2_keys: `定义函数 possible 参数是 mid，返回值是布尔值。外层根据返回值调整"解空间"。示例代码是以最左二分为例的。
    `,
    binarySearch_item3: "前缀和二分",
    binarySearch_item3_keys: `
    如果数组是非负的，那么前缀和就是一个单调不递减数组，我们有时候可以基于它来做二分。
    `,
    binarySearch_item4: "插入排序二分",
    binarySearch_item4_keys: `
    不断插入并维护序列有序，进而利用有序做一些事情。
    `,
    binarySearch_item5: "计数二分",
    binarySearch_item5_keys: `本质也是能力检测，因此和能力检测框架基本一致，大家对比理解一下。
    `,

    tree: "树",
    linkedList: "链表",
    clickToEnlarge: "单击可放大",
    recommendedProblems: "推荐题目",
  },
  checkForUpdates: {
    name: "检查更新",
  },
  aboutMe: {
    name: "关于我",
  },
};
// export default zh;
module.exports = zh;

export const cn = {
    
  app: {
    setLang: "设置语言",
    changeLang: "English",
    copy: "复制",
    copySuccess: "复制成功~",
    article: "文章",
    recommendedQuestions: "推荐题目：",
    goForDictation: "去默写",
    contribution:"纠错 or 贡献其他语言",
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
    initializeContentScriptFailed:"初始化 chrome 插件 content script 失败",
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
  },
  problem: {
    "743": "743. 网络延迟时间",
    "1109": "1109. 航班预订统计",
    "1314": "1314. 矩阵区域和",
    "1462":"1462. 课程表 IV",
    "1480": "1480. 一维数组的动态和",
    "1584":"1584. 连接所有点的最小费用",
    "2536": "2536. 子矩阵元素加 1",
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

    moreTemplate:"更多模板后续陆续更新~"
  },
  dataStructureVisualization: {
    name: "数据结构可视化",
  },

  explanationTemplate: {
    name: "题解模板",
  },
  complexityQuickCheck: {
    name: "复杂度速查",
  },
  learningRoute: {
    name: "学习路线",
  },
  checkForUpdates: {
    name: "检查更新",
  },
  aboutMe: {
    name: "关于我",
  },
};
export default cn;

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
    3: "3. 无重复字符的最长子串",
    10: "10. 正则表达式匹配",
    34: "34. 在排序数组中查找元素的第一个和最后一个位置",
    39: "39. 组合总和",
    40: "40. 组合总和 II",
    44: "44. 通配符匹配",
    46: "46. 全排列",
    47: "47. 全排列 II",
    52: "52. N 皇后 II",
    62: "62. 不同路径",
    63: "63. 不同路径 II",
    64: "64. 最小路径和",
    69: "69. x 的平方根",
    70: "70. 爬楼梯",
    72: "72. 编辑距离",
    76: "76. 最小覆盖子串",
    78: "78. 子集",
    90: "90. 子集 II",
    113: "113. 路径总和 II",
    116: "116. 填充每个节点的下一个右侧节点指针",
    131: "131. 分割回文串",
    140: "140. 单词拆分 II",
    148: "148. 排序链表",
    174: "174. 地下城游戏",
    198: "198. 打家劫舍",
    208: "208. 实现 Trie (前缀树)",
    209: "209. 长度最小的子数组",
    211: "211. 添加与搜索单词 - 数据结构设计",
    212: "212. 单词搜索 II",
    233: "233. 数字 1 的个数",
    278: "278. 第一个错误的版本",
    "278_desc":
      "最左最右思路一样，大家练习两道，实际情况根据题意使用不同的二分即可。",
    292: "292. Nim 游戏",
    303: "303. 区域和检索 - 数组不可变（使用一维前缀和会更简单）",
    307: "307. 区域和检索 - 数组可修改",
    327: "327. 区间和的个数",
    322: "322. 零钱兑换",
    337: "337. 打家劫舍 III",
    357: "357. 计算各个位数不同的数字个数",
    399: "399. 除法求值",
    416: "416. 分割等和子集",
    438: "438. 找到字符串中所有字母异位词",
    464: "464. 我能赢吗",
    472: "472. 连接词",
    493: "493. 翻转对",
    513: "513. 找树左下角的值",
    518: "518. 零钱兑换 II",
    528: "528. 按权重随机选择",
    540: "540. 有序数组中的单一元素",
    547: "547. 朋友圈",
    576: "576. 出界的路径数(只能选两个方向变成了只能选四个方向而已)",
    648: "648. 单词替换",
    662: "662. 二叉树最大宽度",
    698: "698. 划分为 k 个相等的子集",
    721: "721. 账户合并",
    743: "743. 网络延迟时间",
    778: "778. 水位上升的泳池中游泳",
    "778_desc":
      "DFS + 二分，类似的题目有很多，比如第 1439 题。这种题套路都很像，难度其实也不算大。",
    808: "808. 分汤",
    816: "816. 模糊坐标",
    820: "820. 单词的压缩编码",
    837: "837. 新21点",
    863: "863. 二叉树中所有距离为 K 的结点",
    877: "877. 石子游戏",
    902: "902. 最大为 N 的数字组合",
    904: "904. 水果成篮",
    912: "912. 排序数组",
    930: "930. 和相同的二元子数组",
    935: "935. 骑士拨号器(只能选两个方向变成了只能选八个方向而已)",
    990: "990. 等式方程的可满足性",
    992: "992. K 个不同整数的子数组",
    1004: "1004. 最大连续 1 的个数 III",
    1015: "1015. 可被 K 整除的最小整数",
    1032: "1032. 字符流",
    1046: "1046. 最后一块石头的重量(这道题需要用大顶堆，不过都差不多)",
    1202: "1202. 交换字符串中的元素",
    1109: "1109. 航班预订统计",
    1140: "1140. 石子游戏 II",
    1234: "1234. 替换子串得到平衡字符串",
    1248: "1248. 统计「优美子数组」",
    1255: "1255. 得分最高的单词集合",
    1314: "1314. 矩阵区域和",
    1406: "1406. 石子游戏 III",
    1462: "1462. 课程表 IV",
    1480: "1480. 一维数组的动态和",
    1510: "1510. 石子游戏 IV",
    1563: "1563. 石子游戏 V",
    1584: "1584. 连接所有点的最小费用",
    1649: "1649. 通过指令创建有序数组",
    1681: "1681. 最小不兼容性",
    1686: "1686. 石子游戏 VI",
    "1686_desc": "除了这个，其他《石子游戏》思路基本都一样",
    1690: "1690. 石子游戏 VII",
    1886: "1886. 判断矩阵经轮转后是否一致",
    2536: "2536. 子矩阵元素加 1",
    2569: "2569. 更新数组后处理求和查询",
    2736: "2736. 最大和查询",
    2867: "2867. 统计树中的合法路径数目",

    // https://binarysearch.com/problems
    minimumLightRadius: "最小光照半径",
    minimumLightRadius_desc: "经典能力检测二分，力扣也有一道类似题",
    kthPairDistance: "第 K 小的距离对",
    kthPairDistance_desc:
      "典型的计数二分，本质上也是能力检测，只不过题量大，单独拆出来。",
    increasingDigits: "递增的数位",
    palindromicInsertions: "回文插入",
    palindromicInsertions_desc:
      "区间 dp 需要从序列两头同时进行，而不是从序列的某一端到另一端",

    // 剑指 Offer 系列
    JZ51: "剑指 Offer 51. 数组中的逆序对",

    // 面试题系列
    interview17_13: "面试题 17.13. 恢复空格",
    interview17_13__desc:
      "细节怎么练？+1？ -1? 怎么初始化？大家可以通过这道题学习一下~",

    longestIncreasingSubsequence: "最长上升子序列系列",
    longestIncreasingSubsequence_desc: "系列经典题目，值得一做",
    littleRabbitsChessboard: "小兔的棋盘",
    shopeesOffice: "Shopee 的办公室",
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
    binarySearch: {
      title: "二分法",
      item1: "查找一个数",
      item2: "寻找最左边的满足条件的值",
      item3: "寻找最右边的满足条件的值",
      item4: "寻找最左插入位置",
      item5: "寻找最右插入位置",
    },
    BFS: {
      item1: "带层信息",
      item2: "不带层信息",
    },

    heap: {
      title: "堆",
      item1: "小顶堆",
    },

    slidingWindow: {
      title: "滑动窗口",
      item1: "固定窗口（伪代码）",
      item2: "可变窗口（伪代码）",
    },

    backtrack: {
      title: "回溯",
      item1: "标准回溯（伪代码）",
      item2: "笛卡尔积优化",
    },

    trie: {
      title: "前缀树",
      item1: "标准前缀树",
    },

    uf: {
      title: "并查集",
      item1: "不带权并查集",
      item2: "带权并查集",
    },

    segmentTree: {
      title: "线段树",
      item1: "区间和线段树",
      item2: "区间和懒更新（区间更新）线段树",
      item3: "计数线段树",
      item4: "动态开点",
    },

    handWriting: {
      title: "手撕算法",
      item1: "数组排序",
      item2: "链表排序",
    },

    rotate: {
      title: "矩阵旋转",
      item1: "顺时针 90° 旋转二维矩阵",
    },

    prime: {
      title: "求质数",
      item1: "质数筛选法",
    },

    suffixArray: {
      title: "后缀数组",
      item1: "标准版",
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
    code: "代码",
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

    dp: "动态规划",
    dp_desc: `
    同一类型的不同题目框架基本一致，但细节略有不同，模板代码仅以某一种为例进行讲述，大家根据实际情况微调。
    
    动态规划三把斧：状态，枚举，转移方程（选择）。对于每一种题目，我都尽量按照这三点给大家提示。
    
    当然这个学习路线是给有一些基础的人看的，如果你还没有基础，可以看下相关文章，之后我也会写一篇硬核套路文。
    `,
    dp_item1: "单字符串型",
    dp_item1_keys1: `
    状态：1. dp[i] 表示以 s[i] 结尾的 xxxx
         2. dp[i] 表示到 s[i] 为止的 xxxx
    `,

    dp_item1_keys2:
      "枚举：通常都是两层循环，一层循环固定左端点，另一层循环固定右端点进行枚举",
    dp_item1_keys3:
      "转移方程：根据题目选择是否和 s[j] 结合，取最大，最小或计数即可",

    dp_item2: "双字符串型",
    dp_item2_keys1: `
    状态：1. dp[i][j] 表示以 s1[i],s2[j] 结尾的 xxxx
         2. dp[i][j] 表示到 s1[i],s2[j] 为止的 xxxx
    `,
    dp_item2_keys2:
      "枚举：通常都是两层循环，一层循环固定 s1 的右端点，另一层循环固定 s2 的右端点进行枚举",
    dp_item2_keys3:
      "状态转移：根据题目以及 s[i]， s[j] 的关系，取最大，最小或计数即可",

    dp_item3: "爬楼梯型",
    dp_item3_keys1: `
    状态：1. 一维通常是 dp[i] 表示以 nums[i] 结尾的 xxxx
         2. 二维通常是 dp[i][j] 表示以 grid[i][j] 结尾的 xxxx
    `,
    dp_item3_keys2:
      "枚举：一维就是一层循环枚举所有的 nums，二维就是两层循环枚举所有的 grid",
    dp_item3_keys3: `
    状态转移：1. 一维通常是当前格子和前面的两个格子的关系，可能是最大最小或计数。 
            dp[i] = dp[i - 1] + dp[i - 2]，这也叫递推式，因为不涉及决策。
            2. 二维通常是当前格子和上方以及左方的两个格子的关系，可能是最大最小或计数。
            dp[i][j] = dp[i - 1][j] + dp[i][j-1]，这也叫递推式，因为不涉及决策。
            3. 根转移方程不难看出， 这种题目通常都可以滚动数组优化
            `,

    dp_item4: "背包型（仅列举题目）",
    dp_item5: "数位型（仅列举题目）",
    dp_item5_keys1:
      "常见的 dp 定义为 dp[i][j] 其中 i 为数字的长度， j 为最后一位的数。比如 dp[3][2] 表示这个数一共三位，最后一位是 2 的情况",

    dp_item6: "概率型（仅列举题目）",
    dp_item7: "博弈型（仅列举题目）",

    dp_item8: "区间 DP",
    dp_item8_text_comment:
      "使用记忆化可能会更好书写，比如上面的 dp 代码改成记忆化递归就是：",
    dp_item8_keys1: `
    右边界倒序遍历，左边界正序遍历
    `,
    dp_item8_keys2: "通常都是返回 dp[0][n]，而不是其他常见的 dp[-1][-1]",
    dp_item9: "状态压缩型（仅列举题目）",

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

const en = {
  app: {
    name: "LeetCode Cheatsheet",
    preview: "Preview",
    copyMdOrigin: "Click to copy MarkDown origin",
    fullScreen: "Full Screen (Press ESC to exit)",
    toUse: "To Use",
    custom: "Custom",
    presets: "Presets",
    setLang: "Set Language",
    changeLang: "中文",
    copy: "copy",
    save: "save",
    yes: "yes",
    no: "no",
    delete: "delete",
    delTitle: "Are you sure you want to delete it?",
    deleteSuccess: "Delete successfully~",
    saveSuccess: "Save successfully~",
    copySuccess: "Copy successfully~",
    article: "article",
    recommendedQuestions: "Recommended Questions:",
    goForDictation: "go for dictation",
    contribution: "Correction or contribution to other languages",
    back: "Back to Home page",
    viewSolution: "View solution",
    viewInHandpickCollection:
      "This question has been collected in the handpick collection《{slotText}》Click to view",
    notCollected:
      "This question has not been collected by LeetCode Plus, click to view all collected questions",
    allCollected: "All collected questions",
    writingExplanation: "Writing explanation",
    goToTheWebsiteToUse: "Go to the website to use",
    checkTips:
      "Generally, as long as you turn on automatic updates, chrome will automatically update within five hours after the plug-in is updated. If you want to update as soon as possible, or if you disable automatic updates, you can check the latest version here.",
    checkBtn: "Check for updates",
    selfIntroduction:
      "The author is a front-end architect with 40K stars on Github, the author of the leetcode-cheatsheet leetcode plugin, master all kinds of algorithm routines, and wrote hundreds of thousands of words of algorithm brushing e-books. Reply to the public account [电子书] to get.",
    allSolutions: {
      columns: {
        title: "Title",
        tag: "Tag",
      },
    },
    initializeContentScriptFailed:
      "Failed to initialize the chrome plugin content script",
    run: "Run",
    submit: "Submit",
    wirteSolution: "Write Solution",
    visualizationDebug: "Visualization Debug",
    linkedListCommnet:
      "If you are debugging linked list questions, it is very troublesome to generate linked lists manually. If you want to quickly generate linked lists, you can comment out the following method and use the following method to enter an array and return a linked list.",
    visualDebugComment:
      "Replace xxx below with the main function name, yyy with the test case parameter, and turn on debugging",
    getProblemError:
      "Failed to get the problem description, please switch to the problem description tab first",
    savingProblem: "Saving problem information, please wait~",
    githubAPIError:
      "Failed to use Github API, has been switched to normal mode, normal mode can only automatically bring in the problem name, problem address and solution language.",
    notYet: "Not yet",
  },
  problem: {
    3: "3. Longest Substring Without Repeating Characters",
    10: "10. Regular Expression Matching",
    34: "34. Find First and Last Position of Element in Sorted Array",
    39: "39. Combination Sum",
    40: "40. Combination Sum II",
    44: "44. Wildcard Matching",
    46: "46. Permutations",
    47: "47. Permutations II",
    52: "52. N-Queens II",
    62: "62. Unique Paths",
    63: "63. Unique Paths II",
    64: "64. Minimum Path Sum",
    69: "69. Sqrt(x)",
    70: "70. Climbing Stairs",
    72: "72. Edit Distance",
    76: "76. Minimum Window Substring",
    78: "78. Subsets",
    90: "90. Subsets II",
    113: "113. Path Sum II",
    116: "116. Populating Next Right Pointers in Each Node",
    131: "131. Palindrome Partitioning",
    140: "140. Word Break II",
    148: "148. Sort List",
    174: "174. Dungeon Game",
    198: "198. House Robber",
    208: "208. Implement Trie (Prefix Tree)",
    209: "209. Minimum Size Subarray Sum",
    211: "211. Design Add and Search Words Data Structure",
    212: "212. Word Search II",
    233: "233. Number of Digit One",
    278: "278. First Bad Version",
    "278_desc":
      "The idea of the leftmost and rightmost is the same. Everyone can practice two questions. The actual situation can use different binary search according to the meaning of the question.",
    292: "292. Nim Game",
    303: "303. Range Sum Query - Immutable(It is simpler to use one-dimensional prefix sums)",
    307: "307. Range Sum Query - Mutable",
    327: "327. Count of Range Sum",
    322: "322. Coin Change",
    337: "337. House Robber III",
    357: "357. Count Numbers with Unique Digits",
    399: "399. Evaluate Division",
    416: "416. Partition Equal Subset Sum",
    438: "438. Find All Anagrams in a String",
    464: "464. Can I Win",
    472: "472. Concatenated Words",
    493: "493. Reverse Pairs",
    513: "513. Find Bottom Left Tree Value",
    518: "518. Coin Change 2",
    528: "528. Random Pick with Weight",
    540: "540. Single Element in a Sorted Array",
    547: "547. Number of Provinces",
    576: "576. Out of Boundary Paths(changed from selecting two directions to selecting four directions)",
    648: "648. Replace Words",
    662: "662. Maximum Width of Binary Tree",
    698: "698. Partition to K Equal Sum Subsets",
    721: "721. Accounts Merge",
    743: "743. Network Delay Time",
    778: "778. Swim in Rising Water",
    "778_desc":
      "DFS + binary search, there are many similar questions, such as the 1439th question. This kind of question routine is very similar, and the difficulty is not big.",
    808: "808. Soup Servings",
    816: "816. Ambiguous Coordinates",
    820: "820. Short Encoding of Words",
    837: "837. New 21 Game",
    863: "863. All Nodes Distance K in Binary Tree",
    877: "877. Stone Game",
    902: "902. Numbers At Most N Given Digit Set",
    904: "904. Fruit Into Baskets",
    912: "912. Sort an Array",
    930: "930. Binary Subarrays With Sum",
    935: "935. Knight Dialer(Changed from selecting two directions to selecting eight directions)",
    990: "990. Satisfiability of Equality Equations",
    992: "992. Subarrays with K Different Integers",
    1004: "1004. Max Consecutive Ones III",
    1015: "1015. Smallest Integer Divisible by K",
    1032: "1032. Stream of Characters",
    1046: "1046. Last Stone Weight(This question needs to use a large top heap, but they are almost the same)",
    1140: "1140. Stone Game II",
    1109: "1109. Corporate Flight Bookings",
    1202: "1202. Smallest String With Swaps",
    1234: "1234. Replace the Substring for Balanced String",
    1248: "1248. Count Number of Nice Subarrays",
    1255: "1255. Maximum Score Words Formed by Letters",
    1314: "1314. Matrix Block Sum",
    1406: "1406. Stone Game III",
    1462: "1462. Course Schedule IV",
    1480: "1480. Running Sum of 1d Array",
    1510: "1510. Stone Game IV",
    1563: "1563. Stone Game V",
    1584: "1584. Min Cost to Connect All Points",
    1649: "1649. Create Sorted Array through Instructions",
    1681: "1681. Minimum Incompatibility",
    1686: "1686. Stone Game VI",
    "1686_desc":
      "Except for this one, the other \"Stone Game\" ideas are basically the same",
    1690: "1690. Stone Game VII",
    1886: "1886. Determine Whether Matrix Can Be Obtained By Rotation",
    2536: "2536. Increment Submatrices by One",
    2569: "2569. Handling Sum Queries After Update",
    2736: "2736. Maximum Sum Queries",
    2867: "2867. Number of Valid Paths in a Tree",

    // https://binarysearch.com/problems
    minimumLightRadius: "Minimum Light Radius",
    minimumLightRadius_desc:
      "Classic ability detection binary search, leetcode also has a similar topic",
    kthPairDistance: "Kth Smallest Distance Pair",
    kthPairDistance_desc:
      "Typical counting binary search, which is essentially an ability test, but the number of questions is large, so it is separated.",
    increasingDigits: "Increasing Digits",
    palindromicInsertions: "Palindromic Insertions",
    palindromicInsertions_desc:
      "For interval dynamic programming, it is necessary to proceed simultaneously from both ends of the sequence, rather than from one end of the sequence to the other.",

    // 剑指 Offer 系列
    JZ51: "Sword Offer 51. Reverse pairs in an array",

    // 面试题系列
    interview17_13: "Interview 17.13. Re-Space LCCI",
    interview17_13__desc:
      "CHow to practice the details? 1? - 1? How to initialize? You can learn through this question ~",

    longestIncreasingSubsequence: "Longest Increasing Subsequence Series",
    longestIncreasingSubsequence_desc: "Series classic topic, worth doing",
    littleRabbitsChessboard: "Little Rabbit's Chessboard",
    shopeesOffice: "Shopee's Office",
  },
  codeTemplate: {
    name: "Code Template",
    perSum: {
      title: "Prefix Sum",
      tips: "It is recommended to learn it first and then use the template. If you don't know it yet, you can take a look at this article",
      item1: "One-dimensional prefix sum",
      item2: "Two-dimensional prefix sum",
      item3: "One-dimensional difference array",
      item4: "Two-dimensional difference array",
    },
    graph: {
      title: "Graph",
      item1: "dijkstra(single-source greedy shortest path)",
      item1_desc1: "For example, consider a graph like this:",
      item1_desc2: "We construct it using an adjacency matrix:",
      item2: "floyd_warshall(multi-source dynamic programming shortest path)",
      item3: "Bellman–Ford(single-source dynamic programming shortest path)",
      item4:
        "Kruskal(also known as adding edge method, is a minimum spanning tree algorithm)",
      item5:
        "Prim(also known as adding point method, is a minimum spanning tree algorithm)",
      item6: "Kahn(topological sorting based on BFS)",
    },
    binarySearch: {
      title: "Binary Search",
      item1: "Find a number",
      item2: "Find the leftmost value that satisfies the condition",
      item3: "Find the rightmost value that satisfies the condition",
      item4: "Find the leftmost insertion position",
      item5: "Find the rightmost insertion position",
    },
    BFS: {
      item1: "With layer information",
      item2: "Without layer information",
    },

    heap: {
      title: "Heap",
      item1: "Min Heap",
    },

    slidingWindow: {
      title: "Sliding Window",
      item1: "Fixed length sliding window",
      item1_text:`
      Initialize front and back pointers to 0.
      Initialize ans.

      for front in iterable
          update window info (front in, back out)
          move back pointer
      update ans
      return ans
          `,
      item2: "Variable length sliding window",
      item2_text:`
      Initialize the slow pointer to 0.
      Initialize ans.

      for fast pointer in iterable collection
          update information in the window
          while the window does not satisfy the question
              expand or shrink the window
              move the slow pointer
          update the answer
      return ans
          `
    },

    backtrack: {
      title: "Backtrack",
      item1: "Standard backtrack",
      item2: "Cartesian product optimization",
    },

    trie: {
      title: "Trie",
      item1: "Standard Trie",
    },

    uf: {
      title: "Union Find",
      item1: "Union Find without weight",
      item2: "Union Find with weight",
    },

    segmentTree: {
      title: "Segment Tree",
      item1: "Interval and segment tree",
      item2:
        "Interval sum with lazy propagation (interval update) segment tree",
      item3: "Counting segment tree",
      item4: "Dynamic allocation of nodes",
    },

    handWriting: {
      title: "Hand Writing",
      item1: "Sort an array",
      item2: "Sort a linked list",
    },

    rotate: {
      title: "Rotate",
      item1: "Rotate the 2D matrix 90 degrees clockwise.",
    },

    prime: {
      title: "Prime",
      item1: "Prime screening method",
    },

    suffixArray: {
      title: "Suffix Array",
      item1: "Standard version",
    },

    moreTemplate: "More templates will be updated one after another~",
  },
  dataStructureVisualization: {
    name: "Data Structure Visualization",
    incrementalUsage: "Incremental Usage",
    explain1:
      "The editing function is not supported. If you need to edit, you can do so indirectly by first \"use\", then \"save\", and finally \"delete\" the original data.",
    explain2:
      "Templates can be used incrementally. Click the drop-down triangle of 'to use' and select Incremental Usage.",
    explain3:
      "The template will be generated according to the position of your mouse. For example, if your mouse is at point (100, 100), the template will be offset by (100, 100) units as a whole. If the template is not exactly at (100, 100), it means that the template itself was not created with (0, 0) as the top-left corner. When creating custom templates, it's important to keep this in mind.",
    explain4: "You can also choose to use the native excalidraw directly ",
  },

  explanationTemplate: {
    name: "Explanation Template",
    code: "Code",
    goToTheWebsiteToUse: "Go to the website to use",
    problemAddress: "Problem Address",
    problemDesc: "Problem Description",
    preKnowledge: "Pre Knowledge",
    company: "Company",
    thinking: "Thinking",
    keyPoints: "Key Points",
    languageSupport: "Language Support",
    complexityAnalysis: "Complexity Analysis",
    complexityDeclare: "Let n be the length of the array.",
    timeComplexity: "Time Complexity",
    spaceComplexity: "Space Complexity",
    howToUse: "How to use it?",
    programmingLanguage: "Programming Language:",
    commonFormulas: "Common formulas (click to copy):",
    noBackup: "No backup file found",
    restore: "Restore last edit content",
    backupTips:
      "The explanation is backed up every five seconds. If you accidentally refresh the browser, you can click the restore button below to restore it. Since it is an overwrite backup, only the last edited content will be saved.",
    afterUpdateTemplateTips:
      "More explanation templates will be provided later.",
    afterUpdateThemeTips:
      "More themes and user-defined themes will be supported later.",
  },
  complexityQuickCheck: {
    name: "Complexity Quick Check",
    tips: "Don't understand why? Click here",
    dataScale: "Data Scale",
    timeComplexity: "Algorithm acceptable time complexity",
  },
  learningRoute: {
    name: "Learning Route",
    binarySearch: "Binary Search",
    binarySearchDesc: `
    If you ask me to summarize binary search in one sentence, I would say that binary search is an algorithm that makes the unknown world inorganic. That is, no matter what, we can discard half of the solutions, that is, we can cut the solution space in half.
    The difficulty is two points: **what conditions** and **which part to discard**. This is the core problem that binary search needs to solve.

    There are two basic types of tactics, namely the leftmost insertion binary search and the rightmost insertion binary search.

    There are four basic types of strategies: ability detection binary search, prefix sum binary search, insertion sort binary search, and counting binary search.

    These two parts are very practical. While understanding these two parts, please keep in mind a central point **half**.

    For more information, please visit: https://lucifer.ren/blog/2021/03/08/binary-search-1`,
    binarySearch_item1: "Leftmost/Rightmost Binary Search",
    binarySearch_item1_text: "Code reference: Code templates - Binary",
    binarySearch_item1_keys: `
    1. shrink the right boundary continuously and finally return the left boundary
    2. shrink the left boundary continuously and finally return the right boundary
    `,
    binarySearch_item2: "Ability Detection Binary Search",
    binarySearch_item2_keys: `Define the function that the possible argument is mid and the return value is a Boolean value. The outer layer adjusts according to the return value "; Solution space" . The sample code is an example of the leftmost binary.
    `,
    binarySearch_item3: "Prefix Sum Binary Search",
    binarySearch_item3_keys: `
    If the array is non-negative, then the prefix sum is a monotone non-decrement array, and we can sometimes make dichotomies based on it.
    `,
    binarySearch_item4: "Insertion Sort Binary Search",
    binarySearch_item4_keys: `
    Continuously insert and maintain the ordered sequence, and then use the ordered sequence to do something.
    `,
    binarySearch_item5: "Counting Binary Search",
    binarySearch_item5_keys: `The essence is also ability detection, so it is basically the same as the ability detection framework. Everyone compares and understands.
    `,

    dp: "Dynamic Programming",
    dp_desc: `The basic framework for different problems of the same type is generally consistent, but with slight variations in details. The template code is explained using a specific type as an example, and individuals should make adjustments based on the actual situation.

    The three key points for dynamic programming are: state, enumeration, and transition equations (choices). For each type of problem, I try to provide hints based on these three points.
    
    Of course, this learning path is intended for those with some foundation. If you don't have a foundation yet, you can refer to related articles. I will also write a comprehensive routine article in the future.`,
    dp_item1: "Single string type",
    dp_item1_keys1: `
    State: 1. dp[i] represents the xxxx ending with s[i]
           2. dp[i] represents the xxxx up to s[i]`,
    dp_item1_keys2:
      "Enumeration: It usually involves two nested loops, where one loop fixes the left endpoint and the other loop fixes the right endpoint for enumeration.",
    dp_item1_keys3:
      "Transition equation: Based on the problem, choose whether to combine with s[j], then take the maximum, minimum, or count as required.",

    dp_item2: "Double string type",
    dp_item2_keys1: `
    State: 1. dp[i][j] represents the xxxx ending with s1[i], s2[j]
           2. dp[i][j] represents the xxxx up to s1[i], s2[j]`,
    dp_item2_keys2:
      "Enumeration: Typically, it involves two nested loops, where one loop fixes the right endpoint of s1, and the other loop fixes the right endpoint of s2 for enumeration.",
    dp_item2_keys3:
      "State transition: Based on the problem and the relationship between s[i] and s[j], take the maximum, minimum, or count as required.",

    dp_item3: "Sequence type",
    dp_item3_keys1: `
    State: 1. In one-dimensional arrays, dp[i] usually represents the xxxx ending with nums[i]
           2. In two-dimensional arrays, dp[i][j] usually represents the xxxx ending with grid[i][j]`,
    dp_item3_keys2:
      "Enumeration: One-dimensional involves a single loop to enumerate all nums, while two-dimensional involves two loops to enumerate all grid.",
    dp_item3_keys3: `
    State transition: 1. In one dimension, it usually involves the relationship between the current cell and the preceding two cells, possibly involving maximum, minimum, or counting.
                      dp[i] = dp[i - 1] + dp[i - 2]" This is also called a recurrence relation because it does not involve decision-making.
                      2. In two dimensions, it usually involves the relationship between the current cell and its upper and left adjacent cells, possibly involving maximum, minimum, or counting.
                      dp[i][j] = dp[i - 1][j] + dp[i][j-1]" This is also called a recurrence relation because it does not involve decision-making.
                      3. From the transition equation, it's not difficult to see that this type of problem can usually be optimized using rolling arrays.
    `,

    dp_item4: "Backpack type(List only the problems)",
    dp_item5: "Number type(List only the problems)",
    dp_item5_keys1:
      "The common definition of dynamic programming is represented as dp[i][j], where i stands for the length of the number, and j represents the last digit. For example, dp[3][2] denotes a number with a total of three digits, with 2 as the last digit.",
    dp_item6: "Probability type(List only the problems)",
    dp_item7: "Game type(List only the problems)",

    dp_item8: "Interval DP",
    dp_item8_keys1: `
    Traversing in reverse from the right boundary and in forward from the left boundary
            `,
    dp_item8_keys2:
      "Typically, the return value is dp[0][n], rather than other common dp[-1][-1].",
    dp_item9: "State compression type(List only the problems)",

    tree: "Tree",
    linkedList: "Linked List",
    clickToEnlarge: "Click to enlarge",
    recommendedProblems: "Recommended Problems",
  },
  checkForUpdates: {
    name: "Check for Updates",
  },
  aboutMe: {
    name: "About Me",
  },
};
// export default en;
module.exports = en;

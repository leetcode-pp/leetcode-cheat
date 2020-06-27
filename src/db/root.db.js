
    export const db_collection = {
       "TwoSum":{
    "id": "1",
    "name": "TwoSum",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "求和转换为求差",
            "link": null,
            "color": "blue"
        },
        {
            "text": "借助Map结构将数组中每个元素及其索引相互对应",
            "link": null,
            "color": "blue"
        },
        {
            "text": "以空间换时间，将查找时间从O(N)降低到O(1)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1.TwoSum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nconst twoSum = function (nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n    if (map.has(diff)) {\n      return [map.get(diff), i];\n    }\n    map.set(nums[i], i);\n  }\n};\n"
        }
    ]
},
"symmetric-tree":{
    "id": "101",
    "name": "symmetric-tree",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 二叉树\n- 递归\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/101.symmetric-tree.md",
    "code": [
        {
            "language": "py",
            "text": "\nseen = dict()\nfor i, num in enumerate(nums):\n    seen[i] = num\nfor i, num in enumerate(nums):\n    if  seen[len(nums) - 1 - i] != num:\n      return False\nreturn True\n"
        },
        {
            "language": "py",
            "text": "\nl = 0\nr = len(nums) - 1\n\nwhile l < r:\n   if nums[l] != nums[r]: return False\n   l += 1\n   r -= 1\nreturn True\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def isSymmetric(self, root: TreeNode) -> bool:\n        def dfs(root1, root2):\n            if root1 == root2: return True\n            if not root1 or not root2: return False\n            if root1.val != root2.val: return False\n            return dfs(root1.left, root2.right) and dfs(root1.right, root2.left)\n        if not root: return True\n        return dfs(root.left, root.right)\n"
        }
    ]
},
"capacity-to-ship-packages-within-d-days-cn":{
    "id": "1011",
    "name": "capacity-to-ship-packages-within-d-days-cn",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 二分法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "能够识别出是给定的有限序列查找一个数字（二分查找），要求你对二分查找以及变体十分熟悉",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1011.capacity-to-ship-packages-within-d-days-cn.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} weights\n * @param {number} D\n * @return {number}\n */\nvar shipWithinDays = function(weights, D) {\n  let high = weights.reduce((acc, cur) => acc + cur)\n  let low = 0\n\n  while(low < high) {\n    let mid = Math.floor((high + low) / 2)\n    if (canShip(mid)) {\n      high = mid\n    } else {\n      low = mid + 1\n    }\n  }\n\n  return low\n\n  function canShip(opacity) {\n    let remain = opacity\n    let count = 1\n    for (let weight of weights) {\n      if (weight > opacity) {\n        return false\n      }\n      remain -= weight\n      if (remain < 0) {\n        count++\n        remain = opacity - weight\n      }\n      if (count > D) {\n        return false\n      }\n    }\n    return count <= D\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\ndef canShip(opacity):\n    # 指定船的容量是否可以在D天运完\n    lo = 0\n    hi = total\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if canShip(mid):\n            hi = mid\n        else:\n            lo = mid + 1\n\n    return lo\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def shipWithinDays(self, weights: List[int], D: int) -> int:\n        lo = 0\n        hi = 0\n\n        def canShip(opacity):\n            days = 1\n            remain = opacity\n            for weight in weights:\n                if weight > opacity:\n                    return False\n                remain -= weight\n                if remain < 0:\n                    days += 1\n                    remain = opacity - weight\n            return days <= D\n\n        for weight in weights:\n            hi += weight\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if canShip(mid):\n                hi = mid\n            else:\n                lo = mid + 1\n\n        return lo\n"
        }
    ]
},
"capacity-to-ship-packages-within-d-days-en":{
    "id": "1011",
    "name": "capacity-to-ship-packages-within-d-days-en",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1011.capacity-to-ship-packages-within-d-days-en.md",
    "code": [
        {
            "language": "js",
            "text": "\r\n/**\r\n * @param {number[]} weights\r\n * @param {number} D\r\n * @return {number}\r\n */\r\nvar shipWithinDays = function(weights, D) {\r\n  let high = weights.reduce((acc, cur) => acc + cur)\r\n  let low = 0\r\n\r\n  while(low < high) {\r\n    let mid = Math.floor((high + low) / 2)\r\n    if (canShip(mid)) {\r\n      high = mid\r\n    } else {\r\n      low = mid + 1\r\n    }\r\n  }\r\n\r\n  return low\r\n\r\n  function canShip(opacity) {\r\n    let remain = opacity\r\n    let count = 1\r\n    for (let weight of weights) {\r\n      if (weight > opacity) {\r\n        return false\r\n      }\r\n      remain -= weight\r\n      if (remain < 0) {\r\n        count++\r\n        remain = opacity - weight\r\n      }\r\n      if (count > D) {\r\n        return false\r\n      }\r\n    }\r\n    return count <= D\r\n  }\r\n};\r\n"
        },
        {
            "language": "py",
            "text": "\r\ndef canShip(opacity):\r\n    # Whether the capacity of the specified ship can be shipped in D days\r\n    lo = 0\r\n    hi = total\r\n    while lo < hi:\r\n        mid = (lo + hi) // 2\r\n        if canShip(mid):\r\n            hi = mid\r\n        else:\r\n            lo = mid + 1\r\n    return lo\r\n"
        },
        {
            "language": "py",
            "text": "\r\nclass Solution:\r\n    def shipWithinDays(self, weights: List[int], D: int) -> int:\r\n        lo = 0\r\n        hi = 0\r\n\r\n        def canShip(opacity):\r\n            days = 1\r\n            remain = opacity\r\n            for weight in weights:\r\n                if weight > opacity:\r\n                    return False\r\n                remain -= weight\r\n                if remain < 0:\r\n                    days += 1\r\n                    remain = opacity - weight\r\n            return days <= D\r\n\r\n        for weight in weights:\r\n            hi += weight\r\n        while lo < hi:\r\n            mid = (lo + hi) // 2\r\n            if canShip(mid):\r\n                hi = mid\r\n            else:\r\n                lo = mid + 1\r\n\r\n        return lo\r\n"
        }
    ]
},
"best-sightseeing-pair":{
    "id": "1014",
    "name": "best-sightseeing-pair",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "空间换时间",
            "link": null,
            "color": "blue"
        },
        {
            "text": "dp空间优化",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1014.best-sightseeing-pair.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxScoreSightseeingPair(self, A: List[int]) -> int:\n        n = len(A)\n        res = 0\n        for i in range(n - 1):\n            for j in range(i + 1, n):\n                res = max(res, A[i] + A[j] + i - j)\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxScoreSightseeingPair(self, A: List[int]) -> int:\n        n = len(A)\n        dp = [float('-inf')] * (n + 1)\n        res = 0\n        for i in range(n):\n            dp[i + 1] = max(dp[i], A[i] + i)\n            res = max(res, dp[i] + A[i] - i)\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxScoreSightseeingPair(self, A: List[int]) -> int:\n        n = len(A)\n        pre = A[0] + 0\n        res = 0\n        for i in range(1, n):\n            res = max(res, pre + A[i] - i)\n            pre = max(pre, A[i] + i)\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxScoreSightseeingPair(self, A: List[int]) -> int:\n        n = len(A)\n        pre = A[0] + 0\n        res = 0\n        for i in range(1, n):\n            # res = max(res, pre + A[i] - i)\n            # pre = max(pre, A[i] + i)\n            res = res if res > pre + A[i] - i else pre + A[i] - i\n            pre = pre if pre > A[i] + i else A[i] + i\n        return res\n"
        }
    ]
},
"smallest-integer-divisible-by-k":{
    "id": "1015",
    "name": "smallest-integer-divisible-by-k",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数学（无限循环与循环节）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1015.smallest-integer-divisible-by-k.md",
    "code": [
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1015 lang=python3\n#\n# [1015] 可被 K 整除的最小整数\n#\n\n# @lc code=start\n\n\nclass Solution:\n    def smallestRepunitDivByK(self, K: int) -> int:\n        if K % 10 in [2, 4, 5, 6, 8]:\n            return - 1\n        seen = set()\n        mod = 0\n        for i in range(1, K + 1):\n            mod = (mod * 10 + 1) % K\n            if mod in seen:\n                return -1\n            if mod == 0:\n                return ix\n            seen.add(mod)\n\n        # @lc code=end\n\n\n"
        }
    ]
},
"next-greater-node-in-linked-list":{
    "id": "1019",
    "name": "next-greater-node-in-linked-list",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n- 栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "单调栈（单调递减栈）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "单调栈的代码模板",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1019.next-greater-node-in-linked-list.md",
    "code": [
        {
            "language": "py",
            "text": "\ndef monoStack(list):\n    st = []\n    for v in list:\n        while len(st) > 0 and v > st[-1]:\n            st.pop()\n        st.append(v)\n    return st\nmonoStack([5, 4, 2, 1, 3]) # output: [5, 4, 3]\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n     def nextLargerNodes(self, head):\n        res, st = [], []\n        while head:\n            while len(st) > 0 and head.val > st[-1][1]:\n                res[st.pop()[0]] = head.val\n            st.append((len(res), head.val))\n            res.append(0)\n            head = head.next\n        return res\n"
        }
    ]
},
"binary-tree-level-order-traversal":{
    "id": "102",
    "name": "binary-tree-level-order-traversal",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 队列\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "队列",
            "link": null,
            "color": "blue"
        },
        {
            "text": "队列中用Null(一个特殊元素)来划分每层",
            "link": null,
            "color": "blue"
        },
        {
            "text": "树的基本操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历",
            "link": null,
            "color": "blue"
        },
        {
            "text": "层次遍历（BFS）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "注意塞入null的时候，判断一下当前队列是否为空，不然会无限循环",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/102.binary-tree-level-order-traversal.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=102 lang=javascript\n *\n * [102] Binary Tree Level Order Traversal\n *\n * https://leetcode.com/problems/binary-tree-level-order-traversal/description/\n *\n * algorithms\n * Medium (47.18%)\n * Total Accepted:    346.4K\n * Total Submissions: 731.3K\n * Testcase Example:  '[3,9,20,null,null,15,7]'\n *\n * Given a binary tree, return the level order traversal of its nodes' values.\n * (ie, from left to right, level by level).\n *\n *\n * For example:\n * Given binary tree [3,9,20,null,null,15,7],\n *\n *\n * ⁠   3\n * ⁠  / \\\n * ⁠ 9  20\n * ⁠   /  \\\n * ⁠  15   7\n *\n *\n *\n * return its level order traversal as:\n *\n * [\n * ⁠ [3],\n * ⁠ [9,20],\n * ⁠ [15,7]\n * ]\n *\n *\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar levelOrder = function(root) {\n  if (!root) return [];\n  const items = []; // 存放所有节点\n  const queue = [root, null]; // null 简化操作\n  let levelNodes = []; // 存放每一层的节点\n\n  while (queue.length > 0) {\n    const t = queue.shift();\n\n    if (t) {\n      levelNodes.push(t.val)\n      if (t.left) {\n        queue.push(t.left);\n      }\n      if (t.right) {\n        queue.push(t.right);\n      }\n    } else { // 一层已经遍历完了\n      items.push(levelNodes);\n      levelNodes = [];\n      if (queue.length > 0) {\n        queue.push(null)\n      }\n    }\n  }\n\n  return items;\n};\n\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def levelOrder(self, root: TreeNode) -> List[List[int]]:\n        \"\"\"递归法\"\"\"\n        if root is None:\n            return []\n        \n        result = []\n        \n        def add_to_result(level, node):\n            \"\"\"递归函数\n            :param level int 当前在二叉树的层次\n            :param node TreeNode 当前节点\n            \"\"\"\n            if level > len(result) - 1:\n                result.append([])\n                \n            result[level].append(node.val)\n            if node.left:\n                add_to_result(level+1, node.left)\n            if node.right:\n                add_to_result(level+1, node.right)\n        \n        add_to_result(0, root)\n        return result\n"
        }
    ]
},
"number-of-enclaves":{
    "id": "1020",
    "name": "number-of-enclaves",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- DFS\n- hashset\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "visited记录访问过的节点，防止重复计算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1020.number-of-enclaves.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    temp = 0\n    meetEdge = False\n\n    def numEnclaves(self, A: List[List[int]]) -> int:\n        cnt = 0\n        m = len(A)\n        n = len(A[0])\n        visited = set()\n\n        def dfs(i, j):\n            if i < 0 or i >= m or j < 0 or j >= n or (i, j) in visited:\n                return\n            visited.add((i, j))\n            if A[i][j] == 1:\n                self.temp += 1\n            else:\n                return\n            if i == 0 or i == m - 1 or j == 0 or j == n - 1:\n                self.meetEdge = True\n            dfs(i + 1, j)\n            dfs(i - 1, j)\n            dfs(i, j + 1)\n            dfs(i, j - 1)\n        for i in range(m):\n            for j in range(n):\n                dfs(i, j)\n                if not self.meetEdge:\n                    cnt += self.temp\n                self.meetEdge = False\n                self.temp = 0\n        return cnt\n\n"
        },
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1020 lang=python3\n#\n# [1020] 飞地的数量\n#\n\n# @lc code=start\n\n\nclass Solution:\n\n    def numEnclaves(self, A: List[List[int]]) -> int:\n        cnt = 0\n        m = len(A)\n        n = len(A[0])\n\n        def dfs(i, j):\n            if i < 0 or i >= m or j < 0 or j >= n or A[i][j] == 0:\n                return\n            A[i][j] = 0\n\n            dfs(i + 1, j)\n            dfs(i - 1, j)\n            dfs(i, j + 1)\n            dfs(i, j - 1)\n        for i in range(m):\n            dfs(i, 0)\n            dfs(i, n - 1)\n        for j in range(1, n - 1):\n            dfs(0, j)\n            dfs(m - 1, j)\n        for i in range(m):\n            for j in range(n):\n                if A[i][j] == 1:\n                    cnt += 1\n        return cnt\n\n        # @lc code=end\n\n"
        }
    ]
},
"camelcase-matching":{
    "id": "1023",
    "name": "camelcase-matching",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "双指针",
            "link": null,
            "color": "blue"
        },
        {
            "text": "字符串匹配",
            "link": null,
            "color": "blue"
        },
        {
            "text": "子序列",
            "link": null,
            "color": "blue"
        },
        {
            "text": "子串",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1023.camelcase-matching.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def isSubsequence(self, s: str, t: str) -> bool:\n        i = 0\n        j = 0\n        while j < len(t):\n            if i < len(s) and s[i] == t[j]:\n                i += 1\n                j += 1\n            else:\n                j += 1\n            if i >= len (s):\n                return True\n        return i == len(s)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def camelMatch(self, queries: List[str], pattern: str) -> List[bool]:\n        res = []\n        for query in queries:\n            i = 0\n            j = 0\n            while i < len(query):\n                if j < len(pattern) and query[i] == pattern[j]:\n                    i += 1\n                    j += 1\n                elif query[i].islower():\n                    i += 1\n                else:\n                    break\n            if i == len(query) and j == len(pattern):\n                res.append(True)\n            else:\n                res.append(False)\n        return res\n"
        }
    ]
},
"binary-tree-zigzag-level-order-traversal":{
    "id": "103",
    "name": "binary-tree-zigzag-level-order-traversal",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 队列\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "队列",
            "link": null,
            "color": "blue"
        },
        {
            "text": "队列中用Null(一个特殊元素)来划分每层",
            "link": null,
            "color": "blue"
        },
        {
            "text": "树的基本操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历",
            "link": null,
            "color": "blue"
        },
        {
            "text": "层次遍历（BFS）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/103.binary-tree-zigzag-level-order-traversal.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=103 lang=javascript\n *\n * [103] Binary Tree Zigzag Level Order Traversal\n *\n * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/\n *\n * algorithms\n * Medium (40.57%)\n * Total Accepted:    201.2K\n * Total Submissions: 493.7K\n * Testcase Example:  '[3,9,20,null,null,15,7]'\n *\n * Given a binary tree, return the zigzag level order traversal of its nodes'\n * values. (ie, from left to right, then right to left for the next level and\n * alternate between).\n * \n * \n * For example:\n * Given binary tree [3,9,20,null,null,15,7],\n * \n * ⁠   3\n * ⁠  / \\\n * ⁠ 9  20\n * ⁠   /  \\\n * ⁠  15   7\n * \n * \n * \n * return its zigzag level order traversal as:\n * \n * [\n * ⁠ [3],\n * ⁠ [20,9],\n * ⁠ [15,7]\n * ]\n * \n * \n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar zigzagLevelOrder = function(root) {\n  if (!root) return [];   \n  const items = [];\n  let isOdd = true;\n  let levelNodes = [];\n  \n  const queue = [root, null];\n\n\n  while(queue.length > 0) {\n      const t = queue.shift();\n\n      if (t) {\n          levelNodes.push(t.val)\n          if (t.left) {\n            queue.push(t.left)\n          }\n          if (t.right) {\n            queue.push(t.right)\n          }\n      } else {\n        if (!isOdd) {\n          levelNodes = levelNodes.reverse();\n        }\n        items.push(levelNodes)\n        levelNodes = [];\n        isOdd = !isOdd;\n        if (queue.length > 0) {\n            queue.push(null);\n        }\n      }\n  }\n\n  return items\n    \n};\n"
        }
    ]
},
"maximum-sum-of-two-non-overlapping-subarrays":{
    "id": "1031",
    "name": "maximum-sum-of-two-non-overlapping-subarrays",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.注意图中描述的都是A[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1],而不是A[i],因为basecase为空数组,而不是A[0];2.求解图中ASUM数组的时候,注意定义的是ASUM[i]=sum(A[0:i]),因此当i等于0时,A[0:0]为空数组,即:ASUM[0]为0,而ASUM[1]才等于A[0];3.求解图中MAXL数组时,注意i<L时,没有意义,因为长度不够,所以从i=L时才开始求解;4.求解图中MAXM数组时,也一样,要从i=M时才开始求解;5.求解图中SUMM数组时,因为我们需要一个L子数组和一个M子数组,因此长度要大于等于L+M才有意义,所以要从i=L+M时开始求解.",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1031.maximum-sum-of-two-non-overlapping-subarrays.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumTwoNoOverlap(self, a: List[int], l: int, m: int) -> int:\n        \"\"\"\n\n        define asum[i] as the sum of subarray, a[0:i]\n        define maxl[i] as the maximum sum of l-length subarray in a[0:i]\n        define maxm[i] as the maximum sum of m-length subarray in a[0:i]\n        define msum[i] as the maximum sum of non-overlap l-length subarray and m-length subarray\n\n        case 1: a[i] is both not in l-length subarray and m-length subarray, then msum[i] = msum[i - 1]\n        case 2: a[i] is in l-length subarray, then msum[i] = asum[i] - asum[i-l] + maxm[i-l]\n        case 3: a[i] is in m-length subarray, then msum[i] = asum[i] - asum[i-m] + maxl[i-m]\n\n        so, msum[i] = max(msum[i - 1], asum[i] - asum[i-l] + maxl[i-l], asum[i] - asum[i-m] + maxm[i-m])\n        \"\"\"\n\n        alen, tlen = len(a), l + m\n        asum = [0] * (alen + 1)\n        maxl = [0] * (alen + 1)\n        maxm = [0] * (alen + 1)\n        msum = [0] * (alen + 1)\n\n        for i in range(tlen):\n            if i == 1:\n                asum[i] = a[i - 1]\n            elif i > 1:\n                asum[i] = asum[i - 1] + a[i - 1]\n            if i >= l:\n                maxl[i] = max(maxl[i - 1], asum[i] - asum[i - l])\n            if i >= m:\n                maxm[i] = max(maxm[i - 1], asum[i] - asum[i - m])\n\n        for i in range(tlen, alen + 1):\n            asum[i] = asum[i - 1] + a[i - 1]\n            suml = asum[i] - asum[i - l]\n            summ = asum[i] - asum[i - m]\n            maxl[i] = max(maxl[i - 1], suml)\n            maxm[i] = max(maxm[i - 1], summ)\n            msum[i] = max(msum[i - 1], suml + maxm[i - l], summ + maxl[i - m])\n\n        return msum[-1]\n"
        }
    ]
},
"maximum-depth-of-binary-tree":{
    "id": "104",
    "name": "maximum-depth-of-binary-tree",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 递归\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "队列",
            "link": null,
            "color": "blue"
        },
        {
            "text": "队列中用Null(一个特殊元素)来划分每层，或者在对每层进行迭代之前保存当前队列元素的个数（即当前层所含元素个数）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "树的基本操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历",
            "link": null,
            "color": "blue"
        },
        {
            "text": "层次遍历（BFS）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/104.maximum-depth-of-binary-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar maxDepth = function(root) {\n  if (!root) return 0;\n  if (!root.left && !root.right) return 1;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n};\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=104 lang=javascript\n *\n * [104] Maximum Depth of Binary Tree\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxDepth = function(root) {\n  if (!root) return 0;\n  if (!root.left && !root.right) return 1;\n\n  // 层次遍历 BFS\n  let cur = root;\n  const queue = [root, null];\n  let depth = 1;\n\n  while ((cur = queue.shift()) !== undefined) {\n    if (cur === null) {\n      // 注意⚠️： 不处理会无限循环，进而堆栈溢出\n      if (queue.length === 0) return depth;\n      depth++;\n      queue.push(null);\n      continue;\n    }\n    const l = cur.left;\n    const r = cur.right;\n\n    if (l) queue.push(l);\n    if (r) queue.push(r);\n  }\n\n  return depth;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxDepth(self, root: TreeNode) -> int:\n        if not root: return 0\n        q, depth = [root, None], 1\n        while q:\n            node = q.pop(0)\n            if node:\n                if node.left: q.append(node.left)\n                if node.right: q.append(node.right)\n            elif q:\n                q.append(None)\n                depth += 1\n        return depth\n"
        }
    ]
},
"Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal":{
    "id": "105",
    "name": "Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 二叉树\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/105.Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal.md",
    "code": [
        {
            "language": "java",
            "text": "\npreorder = [3,9,20,15,7]\ninorder = [9,3,15,20,7]\n"
        },
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n  public TreeNode buildTree(int[] preorder, int[] inorder) {\n    if (preorder.length != inorder.length) return null;\n    \n    HashMap<Integer, Integer> map = new HashMap<> ();\n\n    for (int i=0; i<inorder.length; i++) {\n      map.put(inorder[i], i);\n    }\n\n    return helper(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1, map);\n  }\n\n  public TreeNode helper(int[] preorder, int preStart, int preEnd, int[] inorder, int inStart, int inEnd, HashMap<Integer, Integer> map) {\n    if (preStart>preEnd || inStart>inEnd) return null;\n    \n    TreeNode root = new TreeNode(preorder[prestart]);\n    int inRoot = map.get(preorder[preStart]);\n    int leftChldLen = inRoot - inStart;\n\n    root.left = helper(preorder, preStart+1, preStart+leftChldLen, inorder, inStart, inRoot-1, map);\n    root.left = helper(preorder, preStart+leftChldLen+1, preEnd, inorder, inRoot+1, inEnd, map);\n\n    return root;\n  }\n}\n"
        }
    ]
},
"container-with-most-water":{
    "id": "11",
    "name": "container-with-most-water",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "双指针优化时间复杂度",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/11.container-with-most-water.md",
    "code": [
        {
            "language": "js",
            "text": "\n// 这个解法比较暴力，效率比较低\n// 时间复杂度是O(n^2)\nlet max = 0;\nfor (let i = 0; i < height.length; i++) {\n  for (let j = i + 1; j < height.length; j++) {\n    const currentArea = Math.abs(i - j) * Math.min(height[i], height[j]);\n    if (currentArea > max) {\n      max = currentArea;\n    }\n  }\n}\nreturn max;\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} height\n * @return {number}\n */\nvar maxArea = function (height) {\n  if (!height || height.length <= 1) return 0;\n\n  let leftPos = 0;\n  let rightPos = height.length - 1;\n  let max = 0;\n  while (leftPos < rightPos) {\n    const currentArea =\n      Math.abs(leftPos - rightPos) *\n      Math.min(height[leftPos], height[rightPos]);\n    if (currentArea > max) {\n      max = currentArea;\n    }\n    // 更新小的\n    if (height[leftPos] < height[rightPos]) {\n      leftPos++;\n    } else {\n      // 如果相等就随便了\n      rightPos--;\n    }\n  }\n\n  return max;\n};\n"
        }
    ]
},
"path-in-zigzag-labelled-binary-tree":{
    "id": "1104",
    "name": "path-in-zigzag-labelled-binary-tree",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 二叉树\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "满二叉树的性质：1.最小值是`2**(level",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1)`，最大值是`2**level",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1`，其中level是树的深度。2.假如父节点的索引为i，那么左子节点就是2\\*i，右边子节点就是2\\*i+1。3.假如子节点的索引是i，那么父节点的索引就是i//2。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "先思考一般情况（不是之字形），然后通过观察找出规律",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1104.path-in-zigzag-labelled-binary-tree.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def pathInZigZagTree(self, label: int) -> List[int]:\n        level = 0\n        res = []\n        # for each level, ranged from 2 ** (level - 1) to 2 ** level - 1\n        while 2 ** level - 1 < label:\n            level += 1\n\n        while level > 0:\n            res.insert(0, label)\n            label = 2 ** (level - 1) + 2 ** level - 1 - label\n            label //= 2\n            level -= 1\n        return res\n"
        }
    ]
},
"path-sum-ii":{
    "id": "113",
    "name": "path-sum-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/113.path-sum-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=113 lang=javascript\n *\n * [113] Path Sum II\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\nfunction backtrack(root, sum, res, tempList) {\n  if (root === null) return;\n  if (root.left === null && root.right === null && sum === root.val)\n    return res.push([...tempList, root.val]);\n\n  tempList.push(root.val);\n  backtrack(root.left, sum - root.val, res, tempList);\n\n  backtrack(root.right, sum - root.val, res, tempList);\n  tempList.pop();\n}\n/**\n * @param {TreeNode} root\n * @param {number} sum\n * @return {number[][]}\n */\nvar pathSum = function(root, sum) {\n  if (root === null) return [];\n  const res = [];\n  backtrack(root, sum, res, []);\n  return res;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:\n        if not root:\n            return []\n        \n        result = []\n        \n        def trace_node(pre_list, left_sum, node):\n            new_list = pre_list.copy()\n            new_list.append(node.val)\n            if not node.left and not node.right:\n                # 这个判断可以和上面的合并，但分开写会快几毫秒，可以省去一些不必要的判断\n                if left_sum == node.val:\n                    result.append(new_list)\n            else:\n                if node.left:\n                    trace_node(new_list, left_sum-node.val, node.left)\n                if node.right:\n                    trace_node(new_list, left_sum-node.val, node.right)\n        \n        trace_node([], sum, root)\n        return result\n"
        }
    ]
},
"maximum-of-absolute-value-expression":{
    "id": "1131",
    "name": "maximum-of-absolute-value-expression",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数学分析",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1131.maximum-of-absolute-value-expression.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxAbsValExpr(self, arr1: List[int], arr2: List[int]) -> int:\n        A = []\n        B = []\n        C = []\n        D = []\n        for i in range(len(arr1)):\n            a, b, c, d = arr1[i] + arr2[i] + i, arr1[i] - arr2[i] + \\\n                i, arr2[i] - arr1[i] + i, -1 * arr2[i] - arr1[i] + i\n            A.append(a)\n            B.append(b)\n            C.append(c)\n            D.append(d)\n        return max(max(A) - min(A), max(B) - min(B), max(C) - min(C), max(D) - min(D))\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxAbsValExpr(self, arr1: List[int], arr2: List[int]) -> int:\n        # 曼哈顿距离模板代码\n        sign = [1, -1]\n        n = len(arr1)\n        dists = []\n        # 三维模板\n        for a in sign:\n            for b in sign:\n                for c in sign:\n                    maxDist = float('-inf')\n                    minDist = float('inf')\n                    # 分别计算所有点的曼哈顿距离\n                    for i in range(n):\n                        dist = arr1[i] * a + arr2[i] * b + i * c\n                        maxDist = max(maxDist, dist)\n                        minDist = min(minDist, dist)\n                    # 将所有的点的曼哈顿距离放到dists中\n                    dists.append(maxDist - minDist)\n        return max(dists)\n"
        }
    ]
},
"optimize-water-distribution-in-a-village-cn":{
    "id": "1168",
    "name": "optimize-water-distribution-in-a-village-cn",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 图\n- 最小生成树\n\nexample 1 pic:\n\n![example 1](../assets/problems/1168.optimize-water-distribution-in-a-village-example1.png)\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.构建图，得出所有边2.对所有边排序3.遍历所有的边（从小到大）4.对于每条边，检查是否已经连通，若没有连通，加上边上的值，连通两个节点。若已连通，跳过。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1168.optimize-water-distribution-in-a-village-cn.md",
    "code": [
        {
            "language": "java",
            "text": "\n  class OptimizeWaterDistribution {\n    public int minCostToSupplyWater(int n, int[] wells, int[][] pipes) {\n      List<EdgeCost> costs = new ArrayList<>();\n      for (int i = 1; i <= n; i++) {\n        costs.add(new EdgeCost(0, i, wells[i - 1]));\n      }\n      for (int[] p : pipes) {\n        costs.add(new EdgeCost(p[0], p[1], p[2]));\n      }\n      Collections.sort(costs);\n      int minCosts = 0;\n      UnionFind uf = new UnionFind(n);\n      for (EdgeCost edge : costs) {\n        int rootX = uf.find(edge.node1);\n        int rootY = uf.find(edge.node2);\n        if (rootX == rootY) continue;\n        minCosts += edge.cost;\n        uf.union(edge.node1, edge.node2);\n        // for each union, we connnect one node\n        n--;\n        // if all nodes already connected, terminate early\n        if (n == 0) {\n          return minCosts;\n        }\n      }\n      return minCosts;\n    }\n  \n    class EdgeCost implements Comparable<EdgeCost> {\n      int node1;\n      int node2;\n      int cost;\n      public EdgeCost(int node1, int node2, int cost) {\n        this.node1 = node1;\n        this.node2 = node2;\n        this.cost = cost;\n      }\n  \n      @Override\n      public int compareTo(EdgeCost o) {\n        return this.cost - o.cost;\n      }\n    }\n    \n    class UnionFind {\n      int[] parent;\n      int[] rank;\n      public UnionFind(int n) {\n        parent = new int[n + 1];\n        for (int i = 0; i <= n; i++) {\n          parent[i] = i;\n        }\n        rank = new int[n + 1];\n      }\n      public int find(int x) {\n        return x == parent[x] ? x : find(parent[x]);\n      }\n      public void union(int x, int y) {\n        int px = find(x);\n        int py = find(y);\n        if (px == py) return;\n        if (rank[px] >= rank[py]) {\n          parent[py] = px;\n          rank[px] += rank[py];\n        } else {\n          parent[px] = py;\n          rank[py] += rank[px];\n        }\n      }\n    }\n  }\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minCostToSupplyWater(self, n: int, wells: List[int], pipes: List[List[int]]) -> int:\n        union_find = {i: i for i in range(n + 1)}\n        \n        def find(x):\n            return x if x == union_find[x] else find(union_find[x])\n        \n        def union(x, y):\n            px = find(x)\n            py = find(y)\n            union_find[px] = py\n            \n        graph_wells = [[cost, 0, i] for i, cost in enumerate(wells, 1)]\n        graph_pipes = [[cost, i, j] for i, j, cost in pipes]\n        min_costs = 0\n        for cost, x, y in sorted(graph_wells + graph_pipes):\n            if find(x) == find(y):\n                continue\n            union(x, y)\n            min_costs += cost\n            n -= 1\n            if n == 0:\n                return min_costs\n"
        }
    ]
},
"optimize-water-distribution-in-a-village-en":{
    "id": "1168",
    "name": "optimize-water-distribution-in-a-village-en",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1168.optimize-water-distribution-in-a-village-en.md",
    "code": [
        {
            "language": "java",
            "text": "\n  class OptimizeWaterDistribution {\n    public int minCostToSupplyWater(int n, int[] wells, int[][] pipes) {\n      List<EdgeCost> costs = new ArrayList<>();\n      for (int i = 1; i <= n; i++) {\n        costs.add(new EdgeCost(0, i, wells[i - 1]));\n      }\n      for (int[] p : pipes) {\n        costs.add(new EdgeCost(p[0], p[1], p[2]));\n      }\n      Collections.sort(costs);\n      int minCosts = 0;\n      UnionFind uf = new UnionFind(n);\n      for (EdgeCost edge : costs) {\n        int rootX = uf.find(edge.node1);\n        int rootY = uf.find(edge.node2);\n        if (rootX == rootY) continue;\n        minCosts += edge.cost;\n        uf.union(edge.node1, edge.node2);\n        // for each union, we connnect one node\n        n--;\n        // if all nodes already connected, terminate early\n        if (n == 0) {\n          return minCosts;\n        }\n      }\n      return minCosts;\n    }\n  \n    class EdgeCost implements Comparable<EdgeCost> {\n      int node1;\n      int node2;\n      int cost;\n      public EdgeCost(int node1, int node2, int cost) {\n        this.node1 = node1;\n        this.node2 = node2;\n        this.cost = cost;\n      }\n  \n      @Override\n      public int compareTo(EdgeCost o) {\n        return this.cost - o.cost;\n      }\n    }\n    \n    class UnionFind {\n      int[] parent;\n      int[] rank;\n      public UnionFind(int n) {\n        parent = new int[n + 1];\n        for (int i = 0; i <= n; i++) {\n          parent[i] = i;\n        }\n        rank = new int[n + 1];\n      }\n      public int find(int x) {\n        return x == parent[x] ? x : find(parent[x]);\n      }\n      public void union(int x, int y) {\n        int px = find(x);\n        int py = find(y);\n        if (px == py) return;\n        if (rank[px] >= rank[py]) {\n          parent[py] = px;\n          rank[px] += rank[py];\n        } else {\n          parent[px] = py;\n          rank[py] += rank[px];\n        }\n      }\n    }\n  }\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minCostToSupplyWater(self, n: int, wells: List[int], pipes: List[List[int]]) -> int:\n        union_find = {i: i for i in range(n + 1)}\n        \n        def find(x):\n            return x if x == union_find[x] else find(union_find[x])\n        \n        def union(x, y):\n            px = find(x)\n            py = find(y)\n            union_find[px] = py\n            \n        graph_wells = [[cost, 0, i] for i, cost in enumerate(wells, 1)]\n        graph_pipes = [[cost, i, j] for i, j, cost in pipes]\n        min_costs = 0\n        for cost, x, y in sorted(graph_wells + graph_pipes):\n            if find(x) == find(y):\n                continue\n            union(x, y)\n            min_costs += cost\n            n -= 1\n            if n == 0:\n                return min_costs\n"
        }
    ]
},
"maximum-subarray-sum-with-one-deletion":{
    "id": "1186",
    "name": "maximum-subarray-sum-with-one-deletion",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "空间换时间",
            "link": null,
            "color": "blue"
        },
        {
            "text": "头尾双数组",
            "link": null,
            "color": "blue"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1186.maximum-subarray-sum-with-one-deletion.md",
    "code": [
        {
            "language": "py",
            "text": "\n  class Solution:\n    def maximumSum(self, arr: List[int]) -> int:\n        res = arr[0]\n        def maxSubSum(arr, skip):\n            res = maxSub = float(\"-inf\")\n           \n            for i in range(len(arr)):\n                if i == skip:\n                    continue\n                maxSub = max(arr[i], maxSub + arr[i])\n                res = max(res, maxSub)\n            return res\n\t\t# 这里循环到了len(arr)项，表示的是一个都不删除的情况\n        for i in range(len(arr) + 1):\n            res = max(res, maxSubSum(arr, i))\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maximumSum(self, arr: List[int]) -> int:\n        n = len(arr)\n        l = [arr[0]] * n\n        r = [arr[n - 1]] * n\n        if n == 1:\n            return arr[0]\n        res = arr[0]\n        for i in range(1, n):\n            l[i] = max(l[i - 1] + arr[i], arr[i])\n            res = max(res, l[i])\n        for i in range(n - 2, -1, -1):\n            r[i] = max(r[i + 1] + arr[i], arr[i])\n            res = max(res, r[i])\n        for i in range(1, n - 1):\n            res = max(res, l[i - 1] + r[i + 1])\n      \n        return res\n\n"
        },
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1186 lang=python3\n#\n# [1186] 删除一次得到子数组最大和\n#\n\n# @lc code=start\n\n\nclass Solution:\n    def maximumSum(self, arr: List[int]) -> int:\n        # DP\n        max0 = arr[0]\n        max1 = arr[0]\n        res = arr[0]\n        n = len(arr)\n        if n == 1:\n            return max0\n\n        for i in range(1, n):\n            # 先更新max1，再更新max0，因为max1用到了上一个max0\n            max1 = max(max1 + arr[i], max0)\n            max0 = max(max0 + arr[i], arr[i])\n            res = max(res, max0, max1)\n        return res\n\n\n# @lc code=end\n\n\n"
        }
    ]
},
"best-time-to-buy-and-sell-stock":{
    "id": "121",
    "name": "best-time-to-buy-and-sell-stock",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "这类题只要你在心中（或者别的地方）画出上面这种图就很容易解决",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/121.best-time-to-buy-and-sell-stock.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function(prices) {\n    let min = prices[0];\n    let profit = 0;\n    // 7 1 5 3 6 4\n    for(let i = 1; i < prices.length; i++) {\n        if (prices[i] > prices[i -1]) {\n            profit = Math.max(profit, prices[i] - min);\n        } else {\n            min = Math.min(min, prices[i]);;\n        }\n    }\n\n    return profit;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * 系统上C++的测试用例中的输入有[]，因此需要加一个判断\n */\nclass Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        if (prices.empty()) return 0;\n        auto min = prices[0];\n        auto profit = 0;\n        for (auto i = 1; i < prices.size(); ++i) {\n            if (prices[i] > prices[i -1]) {\n                profit = max(profit, prices[i] - min);\n            } else {\n                min = std::min(min, prices[i]);;\n            }\n        }\n        return profit;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxProfit(self, prices: 'List[int]') -> int:\n        if not prices: return 0\n\n        min_price = float('inf')\n        max_profit = 0\n\n        for price in prices:\n            if price < min_price:\n                min_price = price\n            elif max_profit < price - min_price:\n                max_profit = price - min_price\n        return max_profit\n"
        }
    ]
},
"longest-arithmetic-subsequence-of-given-difference":{
    "id": "1218",
    "name": "longest-arithmetic-subsequence-of-given-difference",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "将`以每一个元素结尾的最长等差子序列的长度`统统存起来",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1218.longest-arithmetic-subsequence-of-given-difference.md",
    "code": [
        {
            "language": "py",
            "text": "\n  def longestSubsequence(self, arr: List[int], difference: int) -> int:\n        n = len(arr)\n        res = 1\n        for i in range(n):\n            count = 1\n            for j in range(i + 1, n):\n                if arr[i] + difference * count == arr[j]:\n                    count += 1\n\n                if count > res:\n                    res = count\n\n        return res\n"
        },
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1218 lang=python3\n#\n# [1218] 最长定差子序列\n#\n\n# @lc code=start\n\n\nclass Solution:\n\n    # 动态规划\n    def longestSubsequence(self, arr: List[int], difference: int) -> int:\n        n = len(arr)\n        res = 1\n        dp = {}\n        for num in arr:\n            dp[num] = 1\n            if num - difference in dp:\n                dp[num] = dp[num - difference] + 1\n\n        return max(dp.values())\n\n# @lc code=end\n"
        }
    ]
},
"best-time-to-buy-and-sell-stock-ii":{
    "id": "122",
    "name": "best-time-to-buy-and-sell-stock-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "这类题只要你在心中（或者别的地方）画出上面这种图就很容易解决",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/122.best-time-to-buy-and-sell-stock-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function(prices) {\n    let profit = 0;\n\n    for(let i = 1; i < prices.length; i++) {\n        if (prices[i] > prices[i -1]) {\n            profit  = profit + prices[i] - prices[i - 1];\n        }\n    }\n\n    return profit;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxProfit(self, prices: 'List[int]') -> int:\n        gains = [prices[i] - prices[i-1] for i in range(1, len(prices))\n                 if prices[i] - prices[i-1] > 0]\n        return sum(gains)\n#评论区里都讲这是一道开玩笑的送分题.\n"
        }
    ]
},
"airplane-seat-assignment-probability":{
    "id": "1227",
    "name": "airplane-seat-assignment-probability",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 记忆化搜索\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1227.airplane-seat-assignment-probability.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nthPersonGetsNthSeat(self, n: int) -> float:\n        if n == 1:\n            return 1\n        if n == 2:\n            return 0.5\n        res = 1 / n\n        for i in range(2, n):\n            res += self.nthPersonGetsNthSeat(n - i + 1) * 1 / n\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    seen = {}\n\n    def nthPersonGetsNthSeat(self, n: int) -> float:\n        if n == 1:\n            return 1\n        if n == 2:\n            return 0.5\n        if n in self.seen:\n            return self.seen[n]\n        res = 1 / n\n        for i in range(2, n):\n            res += self.nthPersonGetsNthSeat(n - i + 1) * 1 / n\n        self.seen[n] = res\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nthPersonGetsNthSeat(self, n: int) -> float:\n        if n == 1:\n            return 1\n        if n == 2:\n            return 0.5\n\n        dp = [1, .5] * n\n\n        for i in range(2, n):\n            dp[i] = 1 / n\n            for j in range(2, i):\n                dp[i] += dp[i - j + 1] * 1 / n\n        return dp[-1]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nthPersonGetsNthSeat(self, n: int) -> float:\n        if n == 1:\n            return 1\n        if n == 2:\n            return 0.5\n\n        dp = [1, .5] * n\n\n        for i in range(2, n):\n            dp[i] = 1/n+(n-2)/n * dp[n-1]\n        return dp[-1]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nthPersonGetsNthSeat(self, n: int) -> float:\n        return 1 if n == 1 else .5\n\n"
        }
    ]
},
"binary-tree-maximum-path-sum":{
    "id": "124",
    "name": "binary-tree-maximum-path-sum",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 递归\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "理解题目中的path定义",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/124.binary-tree-maximum-path-sum.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n  int ans;\n  public int maxPathSum(TreeNode root) {\n    ans = Integer.MIN_VALUE;\n    helper(root);   // recursion\n    return ans;\n  }\n\n  public int helper(TreeNode root) {\n    if (root == null) return 0;\n    int leftMax = Math.max(0, helper(root.left));     // find the max sub-path sum in left sub-tree\n    int rightMax = Math.max(0, helper(root.right));   // find the max sub-path sum in right sub-tree\n    ans = Math.max(ans, leftMax+rightMax+root.val);   // find the max path sum at current node\n    return max(leftMax, rightMax) + root.val;         // according to the definition of path, the return value of current node can only be that the sum of current node value plus either left or right max path sum.\n  }\n}\n"
        },
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=124 lang=javascript\n *\n * [124] Binary Tree Maximum Path Sum\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\nfunction helper(node, payload) {\n  if (node === null) return 0;\n\n  const l = helper(node.left, payload);\n  const r = helper(node.right, payload);\n\n  payload.max = Math.max(\n    node.val + Math.max(0, l) + Math.max(0, r),\n    payload.max\n  );\n\n  return node.val + Math.max(l, r, 0);\n}\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxPathSum = function(root) {\n  if (root === null) return 0;\n  const payload = {\n    max: root.val\n  };\n  helper(root, payload);\n  return payload.max;\n};\n"
        }
    ]
},
"valid-palindrome":{
    "id": "125",
    "name": "valid-palindrome",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回文\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "双指针",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/125.valid-palindrome.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n/*\n * @lc app=leetcode id=125 lang=javascript\n *\n * [125] Valid Palindrome\n */\n// 只处理英文字符（题目忽略大小写，我们前面全部转化成了小写， 因此这里我们只判断小写）和数字\nfunction isValid(c) {\n  const charCode = c.charCodeAt(0);\n  const isDigit =\n    charCode >= \"0\".charCodeAt(0) && charCode <= \"9\".charCodeAt(0);\n  const isChar = charCode >= \"a\".charCodeAt(0) && charCode <= \"z\".charCodeAt(0);\n\n  return isDigit || isChar;\n}\n/**\n * @param {string} s\n * @return {boolean}\n */\nvar isPalindrome = function(s) {\n  s = s.toLowerCase();\n  let left = 0;\n  let right = s.length - 1;\n\n  while (left < right) {\n    if (!isValid(s[left])) {\n      left++;\n      continue;\n    }\n    if (!isValid(s[right])) {\n      right--;\n      continue;\n    }\n\n    if (s[left] === s[right]) {\n      left++;\n      right--;\n    } else {\n      break;\n    }\n  }\n\n  return right <= left;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def isPalindrome(self, s: str) -> bool:\n        left, right = 0, len(s) - 1\n        while left < right:\n            if not s[left].isalnum():\n                left += 1\n                continue\n            if not s[right].isalnum():\n                right -= 1\n                continue\n            if s[left].lower() == s[right].lower():\n                left += 1\n                right -= 1\n            else:\n                break\n        return right <= left\n\n    def isPalindrome2(self, s: str) -> bool:\n        \"\"\"\n        使用语言特性进行求解\n        \"\"\"\n        s = ''.join(i for i in s if i.isalnum()).lower()\n        return s == s[::-1]\n"
        }
    ]
},
"shift-2d-grid":{
    "id": "1260",
    "name": "shift-2d-grid",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1260.shift-2d-grid.md",
    "code": [
        {
            "language": "py",
            "text": "\nfrom copy import deepcopy\n\nclass Solution:\n    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:\n        n = len(grid)\n        m = len(grid[0])\n        for _ in range(k):\n            old = deepcopy(grid)\n            for i in range(n):\n                for j in range(m):\n                    if j == m - 1:\n                            grid[(i + 1) % n][0] = old[i][j]\n                    elif i == n - 1 and j == m - 1:\n                        grid[0][0] = old[i][j]\n                    else:\n                        grid[i][j + 1] = old[i][j]\n        return grid\n"
        },
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1260 lang=python3\n#\n# [1260] 二维网格迁移\n#\n\n# @lc code=start\n\n\nclass Solution:\n    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:\n        n = len(grid)\n        m = len(grid[0])\n        # 二维到一维\n        arr = [grid[i][j] for i in range(n) for j in range(m)]\n        # 取模，缩小k的范围，避免无意义的运算\n        k %= m * n\n        res = []\n        # 首尾交换法\n\n        def reverse(l, r):\n            while l < r:\n                t = arr[l]\n                arr[l] = arr[r]\n                arr[r] = t\n                l += 1\n                r -= 1\n        # 三次旋转\n        reverse(0, m * n - k - 1)\n        reverse(m * n - k, m * n - 1)\n        reverse(0, m * n - 1)\n        # 一维到二维\n        row = []\n        for i in range(m * n):\n            if i > 0 and i % m == 0:\n                res.append(row)\n                row = []\n            row.append(arr[i])\n        res.append(row)\n\n        return res\n\n# @lc code=end\n\n"
        }
    ]
},
"find-elements-in-a-contaminated-binary-tree":{
    "id": "1261",
    "name": "find-elements-in-a-contaminated-binary-tree",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 二进制\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1261.find-elements-in-a-contaminated-binary-tree.md",
    "code": [
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass FindElements:\n    node = None\n    def __init__(self, root: TreeNode):\n        def recover(node):\n            if not node:\n                return node;\n            if node.left:\n                node.left.val =  2 * node.val + 1\n            if node.right:\n                 node.right.val = 2 * node.val + 2\n            recover(node.left)\n            recover(node.right)\n            return node\n        root.val = 0\n        self.node = recover(root)\n\n\n    def find(self, target: int) -> bool:\n        def findInTree(node, target):\n            if not node:\n                return False\n            if node.val == target:\n                return True\n            return findInTree(node.left, target) or findInTree(node.right, target)\n        return findInTree(self.node, target)\n\n\n\n\n# Your FindElements object will be instantiated and called as such:\n# obj = FindElements(root)\n# param_1 = obj.find(target)\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass FindElements:\n    def __init__(self, root: TreeNode):\n        # set 不能放在init外侧。 因为测试用例之间不会销毁FindElements的变量\n        self.seen = set()\n        def recover(node):\n            if not node:\n                return node;\n            if node.left:\n                node.left.val =  2 * node.val + 1\n                self.seen.add(node.left.val)\n            if node.right:\n                 node.right.val = 2 * node.val + 2\n                 self.seen.add(node.right.val)\n            recover(node.left)\n            recover(node.right)\n            return node\n        root.val = 0\n        self.seen.add(0)\n        self.node = recover(root)\n\n\n    def find(self, target: int) -> bool:\n        return target in self.seen\n\n\n\n\n# Your FindElements object will be instantiated and called as such:\n# obj = FindElements(root)\n# param_1 = obj.find(target)\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass FindElements:\n    node = None\n    def __init__(self, root: TreeNode):\n        def recover(node):\n            if not node:\n                return node;\n            if node.left:\n                node.left.val =  2 * node.val + 1\n            if node.right:\n                 node.right.val = 2 * node.val + 2\n            recover(node.left)\n            recover(node.right)\n            return node\n        root.val = 0\n        self.node = recover(root)\n\n\n    def find(self, target: int) -> bool:\n        node = self.node\n        for bit in bin(target+1)[3:]:\n            node = node and (node.left, node.right)[int(bit)]\n        return bool(node)\n\n\n\n\n# Your FindElements object will be instantiated and called as such:\n# obj = FindElements(root)\n# param_1 = obj.find(target)\n"
        }
    ]
},
"greatest-sum-divisible-by-three":{
    "id": "1262",
    "name": "greatest-sum-divisible-by-three",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 回溯法\n- 排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "贪婪法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "状态机",
            "link": null,
            "color": "blue"
        },
        {
            "text": "数学分析",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1262.greatest-sum-divisible-by-three.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumDivThree(self, nums: List[int]) -> int:\n        self.res = 0\n        def backtrack(temp, start):\n            total = sum(temp)\n            if total % 3 == 0:\n                self.res = max(self.res, total)\n            for i in range(start, len(nums)):\n                temp.append(nums[i])\n                backtrack(temp, i + 1)\n                temp.pop(-1)\n\n\n        backtrack([], 0)\n\n        return self.res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumDivThree(self, nums: List[int]) -> int:\n        one = []\n        two = []\n        total = 0\n\n        for num in nums:\n            total += num\n            if num % 3 == 1:\n                one.append(num)\n            if num % 3 == 2:\n                two.append(num)\n        one.sort()\n        two.sort()\n        if total % 3 == 0:\n            return total\n        elif total % 3 == 1 and one:\n            if len(two) >= 2 and one[0] > two[0] + two[1]:\n                return total - two[0] - two[1]\n            return total - one[0]\n        elif total % 3 == 2 and two:\n            if len(one) >= 2 and two[0] > one[0] + one[1]:\n                return total - one[0] - one[1]\n            return total - two[0]\n        return 0\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumDivThree(self, nums: List[int]) -> int:\n        one = [float('inf')] * 2\n        two = [float('inf')] * 2\n        total = 0\n\n        for num in nums:\n            total += num\n            if num % 3 == 1:\n                if num < one[0]:\n                    t = one[0]\n                    one[0] = num\n                    one[1] = t\n                elif num < one[1]:\n                    one[1] = num\n            if num % 3 == 2:\n                if num < two[0]:\n                    t = two[0]\n                    two[0] = num\n                    two[1] = t\n                elif num < two[1]:\n                    two[1] = num\n        if total % 3 == 0:\n            return total\n        elif total % 3 == 1 and one:\n            if len(two) >= 2 and one[0] > two[0] + two[1]:\n                return total - two[0] - two[1]\n            return total - one[0]\n        elif total % 3 == 2 and two:\n            if len(one) >= 2 and two[0] > one[0] + one[1]:\n                return total - one[0] - one[1]\n            return total - two[0]\n        return 0\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumDivThree(self, nums: List[int]) -> int:\n        state = [0, float('-inf'), float('-inf')]\n\n        for num in nums:\n            if num % 3 == 0:\n                state = [state[0] + num, state[1] + num, state[2] + num]\n            if num % 3 == 1:\n                a = max(state[2] + num, state[0])\n                b = max(state[0] + num, state[1])\n                c = max(state[1] + num, state[2])\n                state = [a, b, c]\n            if num % 3 == 2:\n                a = max(state[1] + num, state[0])\n                b = max(state[2] + num, state[1])\n                c = max(state[0] + num, state[2])\n                state = [a, b, c]\n        return state[0]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumDivThree(self, nums: List[int]) -> int:\n        state = [0, float('-inf'), float('-inf')]\n\n        for num in nums:\n            temp = [0] * 3\n            for i in range(3):\n                temp[(i + num) % 3] = max(state[(i + num) % 3], state[i] + num)\n            state = temp\n\n        return state[0]\n"
        }
    ]
},
"longest-consecutive-sequence":{
    "id": "128",
    "name": "longest-consecutive-sequence",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- hashmap\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "空间换时间",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/128.longest-consecutive-sequence.md",
    "code": [
        {
            "language": "js",
            "text": "\nif (nums.length === 0) return 0;\nlet count = 1;\nlet maxCount = 1;\n// 这里其实可以不需要排序，这么做只不过是为了方便理解\nnums = [...new Set(nums)].sort((a, b) => a - b);\nfor (let i = 0; i < nums.length - 1; i++) {\n  if (nums[i + 1] - nums[i] === 1) {\n    count++;\n  } else {\n    if (count > maxCount) {\n      maxCount = count;\n    }\n    count = 1;\n  }\n}\nreturn Math.max(count, maxCount);\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar longestConsecutive = function(nums) {\n  set = new Set(nums);\n  let max = 0;\n  let temp = 0;\n  set.forEach(x => {\n    // 说明x是连续序列的开头元素\n    if (!set.has(x - 1)) {\n      temp = x + 1;\n      while (set.has(y)) {\n        temp = temp + 1;\n      }\n      max = Math.max(max, y - x); // y - x 就是从x开始到最后有多少连续的数字\n    }\n  });\n  return max;\n};\n"
        }
    ]
},
"sum-root-to-leaf-numbers":{
    "id": "129",
    "name": "sum-root-to-leaf-numbers",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 递归\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "递归分析",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/129.sum-root-to-leaf-numbers.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=129 lang=javascript\n *\n * [129] Sum Root to Leaf Numbers\n */\nfunction helper(node, cur) {\n  if (node === null) return 0;\n  const next = node.val + cur * 10;\n\n  if (node.left === null && node.right === null) return next;\n\n  const l = helper(node.left, next);\n  const r = helper(node.right, next);\n\n  return l + r;\n}\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar sumNumbers = function(root) {\n  // tag: `tree` `dfs` `math`\n  return helper(root, 0);\n};\n"
        },
        {
            "language": "py",
            "text": "\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def sumNumbers(self, root: TreeNode) -> int:\n\n        def helper(node, cur_val):\n            if not node: return 0\n            next_val = cur_val * 10 + node.val\n\n            if not (node.left or node.right):\n                return next_val\n\n            left_val = helper(node.left, next_val)\n            right_val = helper(node.right, next_val)\n\n            return left_val + right_val\n\n        return helper(root, 0)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def sumNumbers(self, root: TreeNode) -> int:\n        if not root: return 0\n        result = 0\n        node_queue, sum_queue = [root], [root.val]\n        while node_queue:\n            for i in node_queue:\n                cur_node = node_queue.pop(0)\n                cur_val = sum_queue.pop(0)\n                if cur_node.left:\n                    node_queue.append(cur_node.left)\n                    sum_queue.append(cur_val * 10 + cur_node.left.val)\n                if cur_node.right:\n                    node_queue.append(cur_node.right)\n                    sum_queue.append(cur_val * 10 + cur_node.right.val)\n                if not (cur_node.left or cur_node.right):\n                    result += cur_val\n        return result\n"
        }
    ]
},
"maximum-number-of-occurrences-of-a-substring":{
    "id": "1297",
    "name": "maximum-number-of-occurrences-of-a-substring",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 字符串\n- 滑动窗口\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "滑动窗口",
            "link": null,
            "color": "blue"
        },
        {
            "text": "识别题目干扰信息",
            "link": null,
            "color": "blue"
        },
        {
            "text": "看题目限制条件，对于本题有用的信息是`1<=maxLetters<=26`",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1297.maximum-number-of-occurrences-of-a-substring.md",
    "code": [
        {
            "language": "java",
            "text": "\n public int maxFreq(String s, int maxLetters, int minSize, int maxSize) {\n    Map<String, Integer> counter = new HashMap<>();\n    int res = 0;\n    for (int i = 0; i < s.length() - minSize + 1; i++) {\n        String substr = s.substring(i, i + minSize);\n        if (checkNum(substr, maxLetters)) {\n            int newVal = counter.getOrDefault(substr, 0) + 1;\n            counter.put(substr, newVal);\n            res = Math.max(res, newVal);\n        }\n    }\n    return res;\n}\npublic boolean checkNum(String substr, int maxLetters) {\n    Set<Character> set = new HashSet<>();\n    for (int i = 0; i < substr.length(); i++)\n        set.add(substr.charAt(i));\n    return set.size() <= maxLetters;\n}\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:\n        n = len(s)\n        letters = set()\n        cnts = dict()\n        res = 0\n        for i in range(n - minSize + 1):\n            length = minSize\n            while i + length <= n and length <= maxSize:\n                t = s[i:i + length]\n                for c in t:\n                    if len(letters) > maxLetters:\n                        break\n                    letters.add(c)\n                if len(letters) <= maxLetters:\n                    cnts[t] = cnts.get(t, 0) + 1\n                    res = max(res, cnts[t])\n                letters.clear()\n                length += 1\n        return res\n"
        },
        {
            "language": "py",
            "text": "\n def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:\n        counter, res = {}, 0\n        for i in range(0, len(s) - minSize + 1):\n            sub = s[i : i + minSize]\n            if len(set(sub)) <= maxLetters:\n                counter[sub] = counter.get(sub, 0) + 1\n                res = max(res, counter[sub])\n        return res;\n\n# @lc code=end\n"
        }
    ]
},
"surrounded-regions":{
    "id": "130",
    "name": "surrounded-regions",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- DFS\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二维数组DFS解题模板",
            "link": null,
            "color": "blue"
        },
        {
            "text": "转化问题为`连通区域问题`",
            "link": null,
            "color": "blue"
        },
        {
            "text": "直接mutate原数组，节省空间",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/130.surrounded-regions.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n\n\n/*\n * @lc app=leetcode id=130 lang=javascript\n *\n * [130] Surrounded Regions\n */\n// 将O以及周边的O转化为A\nfunction mark(board, i, j, rows, cols) {\n  if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1 || board[i][j] !== \"O\")\n    return;\n\n  board[i][j] = \"A\";\n  mark(board, i + 1, j, rows, cols);\n  mark(board, i - 1, j, rows, cols);\n  mark(board, i, j + 1, rows, cols);\n  mark(board, i, j - 1, rows, cols);\n}\n/**\n * @param {character[][]} board\n * @return {void} Do not return anything, modify board in-place instead.\n */\nvar solve = function(board) {\n  const rows = board.length;\n  if (rows === 0) return [];\n  const cols = board[0].length;\n\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      if (i === 0 || i == rows - 1 || j === 0 || j === cols - 1) {\n        mark(board, i, j, rows, cols);\n      }\n    }\n  }\n\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      if (board[i][j] === \"O\") {\n        board[i][j] = \"X\";\n      } else if (board[i][j] === \"A\") {\n        board[i][j] = \"O\";\n      }\n    }\n  }\n\n  return board;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, board: List[List[str]]) -> None:\n        \"\"\"\n        Do not return anything, modify board in-place instead.\n        \"\"\"\n        # 如果数组长或宽小于等于2，则不需要替换\n        if len(board) <= 2 or len(board[0]) <= 2:\n            return\n        \n        row, col = len(board), len(board[0])\n        \n        def dfs(i, j):\n            \"\"\"\n            深度优先算法，如果符合条件，替换为A并进一步测试，否则停止\n            \"\"\"\n            if i < 0 or j < 0 or i >= row or j >= col or board[i][j] != 'O':\n                return\n            board[i][j] = 'A'\n            \n            dfs(i - 1, j)\n            dfs(i + 1, j)\n            dfs(i, j - 1)\n            dfs(i, j + 1)\n        \n        # 从外围开始\n        for i in range(row):\n            dfs(i, 0)\n            dfs(i, col-1)\n        \n        for j in range(col):\n            dfs(0, j)\n            dfs(row-1, j)\n        \n        # 最后完成替换\n        for i in range(row):\n            for j in range(col):\n                if board[i][j] == 'O':\n                    board[i][j] = 'X'\n                elif board[i][j] == 'A':\n                    board[i][j] = 'O'\n"
        }
    ]
},
"palindrome-partitioning":{
    "id": "131",
    "name": "palindrome-partitioning",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/131.palindrome-partitioning.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=131 lang=javascript\n *\n * [131] Palindrome Partitioning\n */\n\nfunction isPalindrom(s) {\n    let left = 0;\n    let right = s.length - 1;\n\n    while(left < right && s[left] === s[right]) {\n        left++;\n        right--;\n    }\n\n    return left >= right;\n}\n function backtrack(s, list, tempList, start) {\n    const sliced = s.slice(start);\n\n    if (isPalindrom(sliced) && (tempList.join(\"\").length === s.length)) list.push([...tempList]);\n\n    for(let i = 0; i < sliced.length; i++) {\n        const sub = sliced.slice(0, i + 1);\n        if (isPalindrom(sub)) {\n            tempList.push(sub);\n        } else {\n            continue;\n        }\n        backtrack(s, list, tempList, start + i + 1);\n        tempList.pop();\n    }\n }\n/**\n * @param {string} s\n * @return {string[][]}\n */\nvar partition = function(s) {\n    // \"aab\"\n    // [\"aa\", \"b\"]\n    // [\"a\", \"a\", \"b\"]\n    const list = [];\n    backtrack(s, list, [], 0);\n    return list;\n};\n\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def partition(self, s: str) -> List[List[str]]:\n        \"\"\"回溯法\"\"\"\n        \n        res = []\n        \n        def helper(s, tmp):\n            \"\"\"\n            如果是空字符串，说明已经处理完毕\n            否则逐个字符往前测试，判断是否是回文\n            如果是，则处理剩余字符串，并将已经得到的列表作为参数\n            \"\"\"\n            if not s:\n                res.append(tmp)\n            for i in range(1, len(s) + 1):\n                if s[:i] == s[:i][::-1]:\n                    helper(s[i:], tmp + [s[:i]])\n        \n        helper(s, [])\n        return res\n"
        }
    ]
},
"xor-queries-of-a-subarray":{
    "id": "1310",
    "name": "xor-queries-of-a-subarray",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 前缀和\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "异或的性质x^y^x=y",
            "link": null,
            "color": "blue"
        },
        {
            "text": "前缀表达式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1310.xor-queries-of-a-subarray.md",
    "code": [
        {
            "language": "java",
            "text": "\n  public int[] xorQueries(int[] arr, int[][] queries) {\n\n        int[] preXor = new int[arr.length];\n        preXor[0] = 0;\n\n        for (int i = 1; i < arr.length; i++)\n            preXor[i] = preXor[i - 1] ^ arr[i - 1];\n\n        int[] res = new int[queries.length];\n\n        for (int i = 0; i < queries.length; i++) {\n\n            int left = queries[i][0], right = queries[i][1];\n            res[i] = arr[right] ^ preXor[right] ^ preXor[left];\n        }\n\n        return res;\n    }\n\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    vector<int> xorQueries(vector<int>& arr, vector<vector<int>>& queries) {\n        vector<int>res;\n        for(int i=1; i<arr.size(); ++i){\n            arr[i]^=arr[i-1];\n        }\n        for(vector<int>temp :queries){\n            if(temp[0]==0){\n                res.push_back(arr[temp[1]]);\n            }\n            else{\n                res.push_back(arr[temp[0]-1]^arr[temp[1]]);\n            }\n        }\n        return res;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:\n \t\tres = []\n        for (L, R) in queries:\n            i = L\n            xor = 0\n            while i <= R:\n                xor ^= arr[i]\n                i += 1\n            res.append(xor)\n        return res\n"
        },
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1218 lang=python3\n#\n# [1218] 最长定差子序列\n#\n\n# @lc code=start\n\n\nclass Solution:\n    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:\n\t\tpre = [0]\n        res = []\n        for i in range(len(arr)):\n            pre.append(pre[i] ^ arr[i])\n        for (L, R) in queries:\n            res.append(pre[L] ^ pre[R + 1])\n        return res\n\n# @lc code=end\n"
        }
    ]
},
"remove-palindromic-subsequences":{
    "id": "1332",
    "name": "remove-palindromic-subsequences",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回文\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1332.remove-palindromic-subsequences.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def removePalindromeSub(self, s: str) -> int:\n        if s == '':\n            return 0\n        def isPalindrome(s):\n            l = 0\n            r = len(s) - 1\n            while l < r:\n                if s[l] != s[r]:\n                    return False\n                l += 1\n                r -= 1\n            return True\n        return 1 if isPalindrome(s) else 2\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def removePalindromeSub(self, s: str) -> int:\n        if s == '':\n            return 0\n        return 1 if s == s[::-1] else 2\n\n"
        }
    ]
},
"find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance":{
    "id": "1334",
    "name": "find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n- Floyd-Warshall\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1334.find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:\n        # 构建dist矩阵\n        dist = [[float('inf')] * n for _ in  range(n)]\n        for i, j, w in edges:\n            dist[i][j] = w\n            dist[j][i] = w\n        for i in range(n):\n            dist[i][i] = 0\n        for k in range(n):\n            for i in range(n):\n                for j in range(n):\n                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])\n\n        # 过滤\n        res = 0\n        minCnt = float('inf')\n        for i in range(n):\n            cnt = 0\n            for d in dist[i]:\n                if d <= distanceThreshold:\n                    cnt += 1\n            if cnt <= minCnt:\n                minCnt = cnt\n                res = i\n        return res\n\n\n"
        }
    ]
},
"single-number":{
    "id": "136",
    "name": "single-number",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 位运算\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "1.异或的性质两个数字异或的结果`a^b`是将a和b的二进制每一位进行运算，得出的数字。运算的逻辑是如果同一位的数字相同则为0，不同则为12.异或的规律",
            "link": null,
            "color": "blue"
        },
        {
            "text": "任何数和本身异或则为`0`",
            "link": null,
            "color": "blue"
        },
        {
            "text": "任何数和0异或是`本身`3.很多人只是记得异或的性质和规律，但是缺乏对其本质的理解，导致很难想到这种解法（我本人也没想到）4.bit运算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/136.single-number.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=136 lang=javascript\n *\n * [136] Single Number\n *\n * https://leetcode.com/problems/single-number/description/\n *\n * algorithms\n * Easy (59.13%)\n * Total Accepted:    429.3K\n * Total Submissions: 724.1K\n * Testcase Example:  '[2,2,1]'\n *\n * Given a non-empty array of integers, every element appears twice except for\n * one. Find that single one.\n *\n * Note:\n *\n * Your algorithm should have a linear runtime complexity. Could you implement\n * it without using extra memory?\n *\n * Example 1:\n *\n *\n * Input: [2,2,1]\n * Output: 1\n *\n *\n * Example 2:\n *\n *\n * Input: [4,1,2,1,2]\n * Output: 4\n *\n *\n */\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar singleNumber = function(nums) {\n  let ret = 0;\n  for (let index = 0; index < nums.length; index++) {\n    const element = nums[index];\n    ret = ret ^ element;\n  }\n  return ret;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        single_number = 0\n        for num in nums:\n            single_number ^= num\n        return single_number\n"
        }
    ]
},
"find-the-longest-substring-containing-vowels-in-even-counts":{
    "id": "1371",
    "name": "find-the-longest-substring-containing-vowels-in-even-counts",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 前缀和\n- 状态压缩\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀和",
            "link": null,
            "color": "blue"
        },
        {
            "text": "状态压缩",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1371.find-the-longest-substring-containing-vowels-in-even-counts.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int findTheLongestSubstring(String s) {\n\n        int len = s.length();\n\n        if (len == 0)\n            return 0;\n\n        int[][] preSum = new int[len][5];\n        int start = getIndex(s.charAt(0));\n        if (start != -1)\n            preSum[0][start]++;\n\n        // preSum\n        for (int i = 1; i < len; i++) {\n\n            int idx = getIndex(s.charAt(i));\n\n            for (int j = 0; j < 5; j++) {\n\n                if (idx == j)\n                    preSum[i][j] = preSum[i - 1][j] + 1;\n                else\n                    preSum[i][j] = preSum[i - 1][j];\n            }\n        }\n\n        for (int i = len - 1; i >= 0; i--) {\n\n            for (int j = 0; j < len - i; j++) {\n                if (checkValid(preSum, s, i, i + j))\n                    return i + 1\n            }\n        }\n        return 0\n    }\n\n\n    public boolean checkValid(int[][] preSum, String s, int left, int right) {\n\n        int idx = getIndex(s.charAt(left));\n\n        for (int i = 0; i < 5; i++)\n            if (((preSum[right][i] - preSum[left][i] + (idx == i ? 1 : 0)) & 1) == 1)\n                return false;\n\n        return true;\n    }\n    public int getIndex(char ch) {\n\n        if (ch == 'a')\n            return 0;\n        else if (ch == 'e')\n            return 1;\n        else if (ch == 'i')\n            return 2;\n        else if (ch == 'o')\n            return 3;\n        else if (ch == 'u')\n            return 4;\n        else\n            return -1;\n    }\n}\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def findTheLongestSubstring(self, s: str) -> int:\n        for i in range(len(s), 0, -1):\n            for j in range(len(s) - i + 1):\n                sub = s[j:j + i]\n                has_odd_vowel = False\n                for vowel in ['a', 'e', 'i', 'o', 'u']:\n                    if sub.count(vowel) % 2 != 0:\n                        has_odd_vowel = True\n                        break\n                if not has_odd_vowel: return  i\n        return 0\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    i_mapper = {\n        \"a\": 0,\n        \"e\": 1,\n        \"i\": 2,\n        \"o\": 3,\n        \"u\": 4\n    }\n    def check(self, s, pre, l, r):\n        for i in range(5):\n            if s[l] in self.i_mapper and i == self.i_mapper[s[l]]: cnt = 1\n            else: cnt = 0\n            if (pre[r][i] - pre[l][i] + cnt) % 2 != 0: return False\n        return True\n    def findTheLongestSubstring(self, s: str) -> int:\n        n = len(s)\n\n        pre = [[0] * 5 for _ in range(n)]\n\n        # pre\n        for i in range(n):\n            for j in range(5):\n                if s[i] in self.i_mapper and self.i_mapper[s[i]] == j:\n                    pre[i][j] = pre[i - 1][j] + 1\n                else:\n                    pre[i][j] = pre[i - 1][j]\n        for i in range(n - 1, -1, -1):\n            for j in range(n - i):\n                if self.check(s, pre, j, i + j):\n                    return i + 1\n        return 0\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def findTheLongestSubstring(self, s: str) -> int:\n        mapper = {\n            \"a\": 1,\n            \"e\": 2,\n            \"i\": 4,\n            \"o\": 8,\n            \"u\": 16\n        }\n        seen = {0: -1}\n        res = cur = 0\n\n        for i in range(len(s)):\n            if s[i] in mapper:\n                cur ^= mapper.get(s[i])\n            # 全部奇偶性都相同，相减一定都是偶数\n            if cur in seen:\n                res = max(res, i - seen.get(cur))\n            else:\n                seen[cur] = i\n        return res\n\n"
        }
    ]
},
"word-break":{
    "id": "139",
    "name": "word-break",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/139.word-break.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=139 lang=javascript\n *\n * [139] Word Break\n *\n * https://leetcode.com/problems/word-break/description/\n *\n * algorithms\n * Medium (34.45%)\n * Total Accepted:    317.8K\n * Total Submissions: 913.9K\n * Testcase Example:  '\"leetcode\"\\n[\"leet\",\"code\"]'\n *\n * Given a non-empty string s and a dictionary wordDict containing a list of\n * non-empty words, determine if s can be segmented into a space-separated\n * sequence of one or more dictionary words.\n *\n * Note:\n *\n *\n * The same word in the dictionary may be reused multiple times in the\n * segmentation.\n * You may assume the dictionary does not contain duplicate words.\n *\n *\n * Example 1:\n *\n *\n * Input: s = \"leetcode\", wordDict = [\"leet\", \"code\"]\n * Output: true\n * Explanation: Return true because \"leetcode\" can be segmented as \"leet\n * code\".\n *\n *\n * Example 2:\n *\n *\n * Input: s = \"applepenapple\", wordDict = [\"apple\", \"pen\"]\n * Output: true\n * Explanation: Return true because \"applepenapple\" can be segmented as \"apple\n * pen apple\".\n * Note that you are allowed to reuse a dictionary word.\n *\n *\n * Example 3:\n *\n *\n * Input: s = \"catsandog\", wordDict = [\"cats\", \"dog\", \"sand\", \"and\", \"cat\"]\n * Output: false\n *\n *\n */\n/**\n * @param {string} s\n * @param {string[]} wordDict\n * @return {boolean}\n */\nvar wordBreak = function(s, wordDict) {\n  const dp = Array(s.length + 1);\n  dp[0] = true;\n  for (let i = 0; i < s.length + 1; i++) {\n    for (let word of wordDict) {\n      if (dp[i - word.length] && word.length <= i) {\n          if (s.substring(i - word.length, i) === word) {\n            dp[i] = true;\n          }\n      }\n    }\n  }\n\n  return dp[s.length] || false;\n};\n"
        }
    ]
},
"binary-tree-preorder-traversal":{
    "id": "144",
    "name": "binary-tree-preorder-traversal",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 递归\n- 栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二叉树的基本操作（遍历）>不同的遍历算法差异还是蛮大的",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果非递归的话利用栈来简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果数据规模不大的话，建议使用递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "递归的问题需要注意两点，一个是终止条件，一个如何缩小规模1.终止条件，自然是当前这个元素是null（链表也是一样）2.由于二叉树本身就是一个递归结构，每次处理一个子树其实就是缩小了规模，难点在于如何合并结果，这里的合并结果其实就是`mid.concat(left).concat(right)`,mid是一个具体的节点，left和right`递归求出即可`",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/144.binary-tree-preorder-traversal.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=144 lang=javascript\n *\n * [144] Binary Tree Preorder Traversal\n *\n * https://leetcode.com/problems/binary-tree-preorder-traversal/description/\n *\n * algorithms\n * Medium (50.36%)\n * Total Accepted:    314K\n * Total Submissions: 621.2K\n * Testcase Example:  '[1,null,2,3]'\n *\n * Given a binary tree, return the preorder traversal of its nodes' values.\n *\n * Example:\n *\n *\n * Input: [1,null,2,3]\n * ⁠  1\n * ⁠   \\\n * ⁠    2\n * ⁠   /\n * ⁠  3\n *\n * Output: [1,2,3]\n *\n *\n * Follow up: Recursive solution is trivial, could you do it iteratively?\n *\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar preorderTraversal = function(root) {\n  // 1. Recursive solution\n\n  // if (!root) return [];\n\n  // return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right));\n\n  // 2. iterative solutuon\n\n  if (!root) return [];\n  const ret = [];\n  const stack = [root];\n  let t = stack.pop();\n\n  while (t) {\n    ret.push(t.val);\n    if (t.right) {\n      stack.push(t.right);\n    }\n    if (t.left) {\n      stack.push(t.left);\n    }\n    t = stack.pop();\n  }\n\n  return ret;\n};\n"
        }
    ]
},
"form-largest-integer-with-digits-that-add-up-to-target":{
    "id": "1449",
    "name": "form-largest-integer-with-digits-that-add-up-to-target",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 动态规划\n-背包问题\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1449.form-largest-integer-with-digits-that-add-up-to-target.md",
    "code": [
        {
            "language": "py",
            "text": "\nfor i in 0 to N:\n    for j in 1 to V + 1:\n        dp[j] = max(dp[j], dp[j - cost[i])\n"
        },
        {
            "language": "py",
            "text": "\nfor i in 1 to N + 1:\n    # 这里是倒序的，原因在于这里是01背包。\n    for j in V to 0:\n        dp[j] = max(dp[j], dp[j - cost[i - 1])\n"
        },
        {
            "language": "py",
            "text": "\nfor i in 1 to N + 1:\n    # 这里不是倒序，原因是我们这里是完全背包问题\n    for j in 1 to V + 1:\n        dp[j] = max(dp[j], dp[j - cost[i - 1])\n\n"
        },
        {
            "language": "py",
            "text": "\nfor i in 1 to N + 1:\n    for j in V to 0:\n        dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - cost[i - 1])\n"
        },
        {
            "language": "py",
            "text": "\nfor i in 1 to N + 1:\n   for j in 1 to V + 1:\n       dp[i][j] = max(dp[i - 1][j], dp[i][j - cost[i - 1])\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestNumber(self, cost: List[int], target: int) -> str:\n        dp = [0] + [float('-inf')] * target\n        for i in range(9, 0, -1):\n            for j in range(1, target+1):\n                if j >= cost[i - 1]:\n                    dp[j] = max(dp[j], (dp[j-cost[i - 1]] * 10) + i)\n        return str(dp[target]) if dp[target] > 0 else '0'\n\n"
        },
        {
            "language": "py",
            "text": "\nfor i in 1 to N + 1:\n    for j in V to 0:\n        ...\n\n"
        },
        {
            "language": "py",
            "text": "\nfor j in V to 0:\n    for i in 1 to N + 1:\n        ...\n\n"
        }
    ]
},
"binary-tree-postorder-traversal":{
    "id": "145",
    "name": "binary-tree-postorder-traversal",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 栈\n- 递归\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二叉树的基本操作（遍历）>不同的遍历算法差异还是蛮大的",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果非递归的话利用栈来简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果数据规模不大的话，建议使用递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "递归的问题需要注意两点，一个是终止条件，一个如何缩小规模1.终止条件，自然是当前这个元素是null（链表也是一样）2.由于二叉树本身就是一个递归结构，每次处理一个子树其实就是缩小了规模，难点在于如何合并结果，这里的合并结果其实就是`left.concat(right).concat(mid)`,mid是一个具体的节点，left和right`递归求出即可`",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/145.binary-tree-postorder-traversal.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=145 lang=javascript\n *\n * [145] Binary Tree Postorder Traversal\n *\n * https://leetcode.com/problems/binary-tree-postorder-traversal/description/\n *\n * algorithms\n * Hard (47.06%)\n * Total Accepted:    242.6K\n * Total Submissions: 512.8K\n * Testcase Example:  '[1,null,2,3]'\n *\n * Given a binary tree, return the postorder traversal of its nodes' values.\n *\n * Example:\n *\n *\n * Input: [1,null,2,3]\n * ⁠  1\n * ⁠   \\\n * ⁠    2\n * ⁠   /\n * ⁠  3\n *\n * Output: [3,2,1]\n *\n *\n * Follow up: Recursive solution is trivial, could you do it iteratively?\n *\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar postorderTraversal = function(root) {\n  // 1. Recursive solution\n\n  // if (!root) return [];\n\n  // return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat(root.val);\n\n  // 2. iterative solutuon\n\n  if (!root) return [];\n  const ret = [];\n  const stack = [root];\n  let p = root; // 标识元素，用来判断节点是否应该出栈\n\n  while (stack.length > 0) {\n    const top = stack[stack.length - 1];\n    if (\n      top.left === p ||\n      top.right === p || // 子节点已经遍历过了\n      (top.left === null && top.right === null) // 叶子元素\n    ) {\n      p = stack.pop();\n      ret.push(p.val);\n    } else {\n      if (top.right) {\n        stack.push(top.right);\n      }\n      if (top.left) {\n        stack.push(top.left);\n      }\n    }\n  }\n\n  return ret;\n};\n\n"
        }
    ]
},
"lru-cache":{
    "id": "146",
    "name": "lru-cache",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 队列\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "队列简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "队列的操作是这道题的灵魂，很容易少考虑情况",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/146.lru-cache.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number} capacity\n */\nvar LRUCache = function(capacity) {\n    this.cache = {};\n    this.capacity = capacity;\n    this.size = 0;\n    this.queue = [];\n};\n\n/** \n * @param {number} key\n * @return {number}\n */\nLRUCache.prototype.get = function(key) {\n    const hit = this.cache[key];\n\n    if (hit !== undefined) {\n        this.queue = this.queue.filter(q => q !== key);\n        this.queue.push(key);\n        return hit;\n    }\n    return -1;\n};\n\n/** \n * @param {number} key \n * @param {number} value\n * @return {void}\n */\nLRUCache.prototype.put = function(key, value) {\n    const hit = this.cache[key];\n\n    // update cache\n    this.cache[key] = value;\n\n    if (!hit) {\n        // invalid cache and resize size;\n        if (this.size === this.capacity) {\n            // invalid cache\n            const key = this.queue.shift();\n            this.cache[key] = undefined;\n        } else {\n            this.size = this.size + 1;\n        }\n        this.queue.push(key);\n    } else {\n        this.queue = this.queue.filter(q => q !== key);\n        this.queue.push(key);\n    }\n};\n\n/** \n * Your LRUCache object will be instantiated and called as such:\n * var obj = new LRUCache(capacity)\n * var param_1 = obj.get(key)\n * obj.put(key,value)\n */\n\n"
        }
    ]
},
"3-sum":{
    "id": "15",
    "name": "3-sum",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 排序\n- 双指针\n- 分治\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "排序之后，用双指针",
            "link": null,
            "color": "blue"
        },
        {
            "text": "分治",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/15.3-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=15 lang=javascript\n *\n * [15] 3Sum\n *\n * https://leetcode.com/problems/3sum/description/\n *\n * algorithms\n * Medium (23.51%)\n * Total Accepted:    531.5K\n * Total Submissions: 2.2M\n * Testcase Example:  '[-1,0,1,2,-1,-4]'\n *\n * Given an array nums of n integers, are there elements a, b, c in nums such\n * that a + b + c = 0? Find all unique triplets in the array which gives the\n * sum of zero.\n *\n * Note:\n *\n * The solution set must not contain duplicate triplets.\n *\n * Example:\n *\n *\n * Given array nums = [-1, 0, 1, 2, -1, -4],\n *\n * A solution set is:\n * [\n * ⁠ [-1, 0, 1],\n * ⁠ [-1, -1, 2]\n * ]\n *\n *\n */\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar threeSum = function (nums) {\n  if (nums.length < 3) return [];\n  const list = [];\n  nums.sort((a, b) => a - b);\n  for (let i = 0; i < nums.length; i++) {\n    //nums is sorted,so it's impossible to have a sum = 0\n    if (nums[i] > 0) break;\n    // skip duplicated result without set\n    if (i > 0 && nums[i] === nums[i - 1]) continue;\n    let left = i + 1;\n    let right = nums.length - 1;\n\n    // for each index i\n    // we want to find the triplet [i, left, right] which sum to 0\n    while (left < right) {\n      // since left < right, and left > i, no need to compare i === left and i === right.\n      if (nums[left] + nums[right] + nums[i] === 0) {\n        list.push([nums[left], nums[right], nums[i]]);\n        // skip duplicated result without set\n        while (nums[left] === nums[left + 1]) {\n          left++;\n        }\n        left++;\n        // skip duplicated result without set\n        while (nums[right] === nums[right - 1]) {\n          right--;\n        }\n        right--;\n        continue;\n      } else if (nums[left] + nums[right] + nums[i] > 0) {\n        right--;\n      } else {\n        left++;\n      }\n    }\n  }\n  return list;\n};\n"
        }
    ]
},
"evaluate-reverse-polish-notation":{
    "id": "150",
    "name": "evaluate-reverse-polish-notation",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "1.栈的基本用法2.如果你用的是JS的话，需要注意/和其他很多语言是不一样的3.如果你用的是JS的话，需要先将字符串转化为数字。否则有很多意想不到的结果4.操作符的顺序应该是先出栈的是第二位，后出栈的是第一位。这在不符合交换律的操作中很重要，比如减法和除法。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/150.evaluate-reverse-polish-notation.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=150 lang=javascript\n *\n * [150] Evaluate Reverse Polish Notation\n *\n * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/\n *\n * algorithms\n * Medium (31.43%)\n * Total Accepted:    153.3K\n * Total Submissions: 485.8K\n * Testcase Example:  '[\"2\",\"1\",\"+\",\"3\",\"*\"]'\n *\n * Evaluate the value of an arithmetic expression in Reverse Polish Notation.\n *\n * Valid operators are +, -, *, /. Each operand may be an integer or another\n * expression.\n *\n * Note:\n *\n *\n * Division between two integers should truncate toward zero.\n * The given RPN expression is always valid. That means the expression would\n * always evaluate to a result and there won't be any divide by zero\n * operation.\n *\n *\n * Example 1:\n *\n *\n * Input: [\"2\", \"1\", \"+\", \"3\", \"*\"]\n * Output: 9\n * Explanation: ((2 + 1) * 3) = 9\n *\n *\n * Example 2:\n *\n *\n * Input: [\"4\", \"13\", \"5\", \"/\", \"+\"]\n * Output: 6\n * Explanation: (4 + (13 / 5)) = 6\n *\n *\n * Example 3:\n *\n *\n * Input: [\"10\", \"6\", \"9\", \"3\", \"+\", \"-11\", \"*\", \"/\", \"*\", \"17\", \"+\", \"5\", \"+\"]\n * Output: 22\n * Explanation:\n * ⁠ ((10 * (6 / ((9 + 3) * -11))) + 17) + 5\n * = ((10 * (6 / (12 * -11))) + 17) + 5\n * = ((10 * (6 / -132)) + 17) + 5\n * = ((10 * 0) + 17) + 5\n * = (0 + 17) + 5\n * = 17 + 5\n * = 22\n *\n *\n */\n/**\n * @param {string[]} tokens\n * @return {number}\n */\nvar evalRPN = function(tokens) {\n  // 这种算法的前提是 tokens是有效的，\n  // 当然这由算法来保证\n  const stack = [];\n\n  for (let index = 0; index < tokens.length; index++) {\n    const token = tokens[index];\n    // 对于运算数， 我们直接入栈\n    if (!Number.isNaN(Number(token))) {\n      stack.push(token);\n    } else {\n      // 遇到操作符，我们直接大胆运算，不用考虑算术优先级\n      // 然后将运算结果入栈即可\n\n      // 当然如果题目进一步扩展，允许使用单目等其他运算符，我们的算法需要做微小的调整\n      const a = Number(stack.pop());\n      const b = Number(stack.pop());\n      if (token === \"*\") {\n        stack.push(b * a);\n      } else if (token === \"/\") {\n        stack.push(b / a >> 0);\n      } else if (token === \"+\") {\n        stack.push(b + a);\n      } else if (token === \"-\") {\n        stack.push(b - a);\n      }\n    }\n  }\n\n  return stack.pop();\n};\n\n"
        }
    ]
},
"maximum-product-subarray":{
    "id": "152",
    "name": "maximum-product-subarray",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 滑动窗口\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "同时记录乘积最大值和乘积最小值",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/152.maximum-product-subarray.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar maxProduct = function(nums) {\n  let max = nums[0];\n  let temp = null;\n  for (let i = 0; i < nums.length; i++) {\n    temp = nums[i];\n    for (let j = i + 1; j < nums.length; j++) {\n      temp *= nums[j];\n      max = Math.max(temp, max);\n    }\n  }\n\n  return max;\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar maxProduct = function(nums) {\n  let max = nums[0];\n  let min = nums[0];\n  let res = nums[0];\n\n  for (let i = 1; i < nums.length; i++) {\n    let tmp = min;\n    min = Math.min(nums[i], Math.min(max * nums[i], min * nums[i])); // 取最小\n    max = Math.max(nums[i], Math.max(max * nums[i], tmp * nums[i])); /// 取最大\n    res = Math.max(res, max);\n  }\n  return res;\n};\n"
        },
        {
            "language": "py",
            "text": "\n\n\nclass Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        n = len(nums)\n        max__dp = [1] * (n + 1)\n        min_dp = [1] * (n + 1)\n        ans = float('-inf')\n\n        for i in range(1, n + 1):\n            max__dp[i] = max(max__dp[i - 1] * nums[i - 1],\n                             min_dp[i - 1] * nums[i - 1], nums[i - 1])\n            min_dp[i] = min(max__dp[i - 1] * nums[i - 1],\n                            min_dp[i - 1] * nums[i - 1], nums[i - 1])\n            ans = max(ans, max__dp[i])\n        return ans\n  "
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        n = len(nums)\n        a = b = 1\n        ans = float('-inf')\n\n        for i in range(1, n + 1):\n            temp = a\n            a = max(a * nums[i - 1],\n                    b * nums[i - 1], nums[i - 1])\n            b = min(temp * nums[i - 1],\n                    b * nums[i - 1], nums[i - 1])\n            ans = max(ans, a)\n        return ans\n\n"
        }
    ]
},
"min-stack":{
    "id": "155",
    "name": "min-stack",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 差值法\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "最小栈存储的不应该是真实值，而是真实值和min的差值",
            "link": null,
            "color": "blue"
        },
        {
            "text": "top的时候涉及到对数据的还原，这里千万注意是**上一个**最小值",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/155.min-stack.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=155 lang=javascript\n *\n * [155] Min Stack\n */\n/**\n * initialize your data structure here.\n */\nvar MinStack = function() {\n  this.stack = [];\n  this.minV = Number.MAX_VALUE;\n};\n\n/**\n * @param {number} x\n * @return {void}\n */\nMinStack.prototype.push = function(x) {\n  // update 'min'\n  const minV = this.minV;\n  if (x < this.minV) {\n    this.minV = x;\n  }\n  return this.stack.push(x - minV);\n};\n\n/**\n * @return {void}\n */\nMinStack.prototype.pop = function() {\n  const item = this.stack.pop();\n  const minV = this.minV;\n\n  if (item < 0) {\n    this.minV = minV - item;\n    return minV;\n  }\n  return item + minV;\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.top = function() {\n  const item = this.stack[this.stack.length - 1];\n  const minV = this.minV;\n\n  if (item < 0) {\n    return minV;\n  }\n  return item + minV;\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.min = function() {\n  return this.minV;\n};\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * var obj = new MinStack()\n * obj.push(x)\n * obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.min()\n */\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * initialize your data structure here.\n */\nvar MinStack = function() {\n    this.stack = []\n    this.minStack = []\n};\n\n/** \n * @param {number} x\n * @return {void}\n */\nMinStack.prototype.push = function(x) {\n    this.stack.push(x)\n    if (this.minStack.length == 0 ||  x <= this.minStack[this.minStack.length - 1]) {\n        this.minStack.push(x)\n    }\n};\n\n/**\n * @return {void}\n */\nMinStack.prototype.pop = function() {\n    const x = this.stack.pop()\n    if (x !== void 0 &&  x === this.minStack[this.minStack.length - 1]) {\n        this.minStack.pop()\n    }\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.top = function() {\n    return this.stack[this.stack.length - 1]\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.min = function() {\n    return this.minStack[this.minStack.length - 1]\n};\n\n/** \n * Your MinStack object will be instantiated and called as such:\n * var obj = new MinStack()\n * obj.push(x)\n * obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.min()\n */\n"
        },
        {
            "language": "py",
            "text": "\nclass MinStack:\n\n    def __init__(self):\n        \"\"\"\n        initialize your data structure here.\n        \"\"\"\n        self.minV = float('inf')\n        self.stack = []\n\n    def push(self, x: int) -> None:\n        self.stack.append(x - self.minV)\n        if x < self.minV:\n            self.minV = x\n\n    def pop(self) -> None:\n        if not self.stack:\n            return\n        tmp = self.stack.pop()\n        if tmp < 0:\n            self.minV -= tmp\n\n    def top(self) -> int:\n        if not self.stack:\n            return\n        tmp = self.stack[-1]\n        if tmp < 0:\n            return self.minV\n        else:\n            return self.minV + tmp\n\n    def min(self) -> int:\n        return self.minV\n\n\n\n# Your MinStack object will be instantiated and called as such:\n# obj = MinStack()\n# obj.push(x)\n# obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.min()\n"
        },
        {
            "language": "py",
            "text": "\nclass MinStack:\n\n    def __init__(self):\n        \"\"\"\n        initialize your data structure here.\n        \"\"\"\n        self.stack = []\n        self.minstack = []\n\n    def push(self, x: int) -> None:\n        self.stack.append(x)\n        if not self.minstack or x <= self.minstack[-1]:\n            self.minstack.append(x)\n\n    def pop(self) -> None:\n        tmp = self.stack.pop()\n        if tmp == self.minstack[-1]:\n            self.minstack.pop()\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def min(self) -> int:\n        return self.minstack[-1]\n\n\n# Your MinStack object will be instantiated and called as such:\n# obj = MinStack()\n# obj.push(x)\n# obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.min()\n"
        }
    ]
},
"two-sum-ii-input-array-is-sorted":{
    "id": "167",
    "name": "two-sum-ii-input-array-is-sorted",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "由于是有序的，因此双指针更好",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/167.two-sum-ii-input-array-is-sorted.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} numbers\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(numbers, target) {\n    const visited = {} // 记录出现的数字， 空间复杂度N\n\n    for (let index = 0; index < numbers.length; index++) {\n        const element = numbers[index];\n        if (visited[target - element] !== void 0) {\n            return [visited[target - element], index + 1]\n        }\n        visited[element] = index + 1;\n    }\n    return [];\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\n        visited = {}\n        for index, number in enumerate(numbers):\n            if target - number in visited:\n                return [visited[target-number], index+1]\n            else:\n                visited[number] = index + 1\n\n# 双指针思路实现\nclass Solution:\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\n        left, right = 0, len(numbers) - 1\n        while left < right:\n            if numbers[left] + numbers[right] < target:\n                left += 1\n            if numbers[left] + numbers[right] > target:\n                right -= 1\n            if numbers[left] + numbers[right] == target:\n                return [left+1, right+1]\n"
        }
    ]
},
"majority-element":{
    "id": "169",
    "name": "majority-element",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 投票算法\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "投票算法",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/169.majority-element.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar majorityElement = function(nums) {\n    let count = 1;\n    let majority = nums[0];\n    for(let i = 1; i < nums.length; i++) {\n        if (count === 0) {\n            majority = nums[i];\n        }\n        if (nums[i] === majority) {\n            count ++;\n        } else {\n            count --;\n        }\n    }\n    return majority;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        count, majority = 1, nums[0]\n        for num in nums[1:]:\n            if count == 0:\n                majority = num\n            if num == majority:\n                count += 1\n            else:\n                count -= 1\n        return majority\n"
        }
    ]
},
"Letter-Combinations-of-a-Phone-Number":{
    "id": "17",
    "name": "Letter-Combinations-of-a-Phone-Number",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回溯\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯",
            "link": null,
            "color": "blue"
        },
        {
            "text": "回溯模板",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/17.Letter-Combinations-of-a-Phone-Number.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {string} digits\n * @return {string[]}\n */\nconst letterCombinations = function (digits) {\n  if (!digits) {\n    return [];\n  }\n  const len = digits.length;\n  const map = new Map();\n  map.set(\"2\", \"abc\");\n  map.set(\"3\", \"def\");\n  map.set(\"4\", \"ghi\");\n  map.set(\"5\", \"jkl\");\n  map.set(\"6\", \"mno\");\n  map.set(\"7\", \"pqrs\");\n  map.set(\"8\", \"tuv\");\n  map.set(\"9\", \"wxyz\");\n  const result = [];\n\n  function generate(i, str) {\n    if (i == len) {\n      result.push(str);\n      return;\n    }\n    const tmp = map.get(digits[i]);\n    for (let r = 0; r < tmp.length; r++) {\n      generate(i + 1, str + tmp[r]);\n    }\n  }\n  generate(0, \"\");\n  return result;\n};\n"
        }
    ]
},
"factorial-trailing-zeroes":{
    "id": "172",
    "name": "factorial-trailing-zeroes",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 递归\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数论",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/172.factorial-trailing-zeroes.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=172 lang=javascript\n *\n * [172] Factorial Trailing Zeroes\n */\n/**\n * @param {number} n\n * @return {number}\n */\nvar trailingZeroes = function(n) {\n  // tag: 数论\n\n  // if (n === 0) return n;\n\n  // 递归： f(n) = n / 5 + f(n / 5)\n  // return Math.floor(n / 5)  + trailingZeroes(Math.floor(n / 5));\n  let count = 0;\n  while (n >= 5) {\n    count += Math.floor(n / 5);\n    n = Math.floor(n / 5);\n  }\n  return count;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def trailingZeroes(self, n: int) -> int:\n        count = 0\n        while n >= 5:\n            n = n // 5\n            count += n\n        return count\n\n\n# 递归\nclass Solution:\n    def trailingZeroes(self, n: int) -> int:\n        if n == 0: return 0\n        return n // 5 + self.trailingZeroes(n // 5)\n"
        }
    ]
},
"removeNthNodeFromEndofList":{
    "id": "19",
    "name": "removeNthNodeFromEndofList",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.链表这种数据结构的特点和使用2.使用双指针3.使用一个dummyHead简化操作",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/19.removeNthNodeFromEndofList.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        TreeNode dummy = new TreeNode(0);\n        dummy.next = head;\n        TreeNode first = dummy;\n        TreeNode second = dummy;\n\n        if (int i=0; i<=n; i++) {\n            first = first.next;\n        }\n\n        while (first != null) {\n            first = first.next;\n            second = second.next;\n        }\n\n        second.next = second.next.next;\n\n        return dummy.next;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=19 lang=javascript\n *\n * [19] Remove Nth Node From End of List\n *\n * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/\n *\n * algorithms\n * Medium (34.03%)\n * Total Accepted:    360.1K\n * Total Submissions: 1.1M\n * Testcase Example:  '[1,2,3,4,5]\\n2'\n *\n * Given a linked list, remove the n-th node from the end of list and return\n * its head.\n *\n * Example:\n *\n *\n * Given linked list: 1->2->3->4->5, and n = 2.\n *\n * After removing the second node from the end, the linked list becomes\n * 1->2->3->5.\n *\n *\n * Note:\n *\n * Given n will always be valid.\n *\n * Follow up:\n *\n * Could you do this in one pass?\n *\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} n\n * @return {ListNode}\n */\nvar removeNthFromEnd = function (head, n) {\n  let i = -1;\n  const noop = {\n    next: null,\n  };\n\n  const dummyHead = new ListNode(); // 增加一个dummyHead 简化操作\n  dummyHead.next = head;\n\n  let currentP1 = dummyHead;\n  let currentP2 = dummyHead;\n\n  while (currentP1) {\n    if (i === n) {\n      currentP2 = currentP2.next;\n    }\n\n    if (i !== n) {\n      i++;\n    }\n\n    currentP1 = currentP1.next;\n  }\n\n  currentP2.next = ((currentP2 || noop).next || noop).next;\n\n  return dummyHead.next;\n};\n"
        }
    ]
},
"reverse-bits":{
    "id": "190",
    "name": "reverse-bits",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 双指针\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.可以用任何数字和1进行位运算的结果都取决于该数字最后一位的特性简化操作和提高性能eg:",
            "link": null,
            "color": "blue"
        },
        {
            "text": "n&1===1,说明n的最后一位是1",
            "link": null,
            "color": "blue"
        },
        {
            "text": "n&1===0,说明n的最后一位是02.对于JS，ES规范在之前很多版本都是没有无符号整形的，转化为无符号，可以用一个trick`n>>>0`3.双\"指针\"模型4.bit运算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/190.reverse-bits.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=190 lang=javascript\n *\n * [190] Reverse Bits\n *\n * https://leetcode.com/problems/reverse-bits/description/\n *\n * algorithms\n * Easy (30.30%)\n * Total Accepted:    173.7K\n * Total Submissions: 568.2K\n * Testcase Example:  '00000010100101000001111010011100'\n *\n * Reverse bits of a given 32 bits unsigned integer.\n *\n *\n *\n * Example 1:\n *\n *\n * Input: 00000010100101000001111010011100\n * Output: 00111001011110000010100101000000\n * Explanation: The input binary string 00000010100101000001111010011100\n * represents the unsigned integer 43261596, so return 964176192 which its\n * binary representation is 00111001011110000010100101000000.\n *\n *\n * Example 2:\n *\n *\n * Input: 11111111111111111111111111111101\n * Output: 10111111111111111111111111111111\n * Explanation: The input binary string 11111111111111111111111111111101\n * represents the unsigned integer 4294967293, so return 3221225471 which its\n * binary representation is 10101111110010110010011101101001.\n *\n *\n *\n * Note:\n *\n *\n * Note that in some languages such as Java, there is no unsigned integer type.\n * In this case, both input and output will be given as signed integer type and\n * should not affect your implementation, as the internal binary representation\n * of the integer is the same whether it is signed or unsigned.\n * In Java, the compiler represents the signed integers using 2's complement\n * notation. Therefore, in Example 2 above the input represents the signed\n * integer -3 and the output represents the signed integer -1073741825.\n *\n *\n *\n *\n * Follow up:\n *\n * If this function is called many times, how would you optimize it?\n *\n */\n/**\n * @param {number} n - a positive integer\n * @return {number} - a positive integer\n */\nvar reverseBits = function(n) {\n  let res = 0;\n  for (let i = 0; i < 32; i++) {\n    res = (res << 1) + (n & 1);\n    n = n >>> 1;\n  }\n\n  return res >>> 0;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    # @param n, an integer\n    # @return an integer\n    def reverseBits(self, n):\n        result = 0\n        for i in range(32):\n            result = (result << 1) + (n & 1)\n            n >>= 1\n        return result\n"
        }
    ]
},
"number-of-1-bits":{
    "id": "191",
    "name": "number-of-1-bits",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 位运算\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.`n&(n",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1)`可以`消除`n最后的一个1的原理简化操作2.bit运算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/191.number-of-1-bits.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=191 lang=javascript\n *\n */\n/**\n * @param {number} n - a positive integer\n * @return {number}\n */\nvar hammingWeight = function(n) {\n  let count = 0;\n  while (n !== 0) {\n    n = n & (n - 1);\n    count++;\n  }\n\n  return count;\n};\n\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int hammingWeight(uint32_t v) {\n        auto count = 0;\n        while (v != 0) {\n            v &= (v - 1);\n            ++count;\n        }\n        return count;\n    }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nconst uint32_t ODD_BIT_MASK = 0xAAAAAAAA;\nconst uint32_t EVEN_BIT_MASK = 0x55555555;\nconst uint32_t ODD_2BIT_MASK = 0xCCCCCCCC;\nconst uint32_t EVEN_2BIT_MASK = 0x33333333;\nconst uint32_t ODD_4BIT_MASK = 0xF0F0F0F0;\nconst uint32_t EVEN_4BIT_MASK = 0x0F0F0F0F;\nconst uint32_t ODD_8BIT_MASK = 0xFF00FF00;\nconst uint32_t EVEN_8BIT_MASK = 0x00FF00FF;\nconst uint32_t ODD_16BIT_MASK = 0xFFFF0000;\nconst uint32_t EVEN_16BIT_MASK = 0x0000FFFF;\n\nclass Solution {\npublic:\n\n    int hammingWeight(uint32_t v) {\n        v = (v & EVEN_BIT_MASK) + ((v & ODD_BIT_MASK) >> 1);\n        v = (v & EVEN_2BIT_MASK) + ((v & ODD_2BIT_MASK) >> 2);\n        v = (v & EVEN_4BIT_MASK) + ((v & ODD_4BIT_MASK) >> 4);\n        v = (v & EVEN_8BIT_MASK) + ((v & ODD_8BIT_MASK) >> 8);\n        return (v & EVEN_16BIT_MASK) + ((v & ODD_16BIT_MASK) >> 16);\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    def hammingWeight(self, n):\n        \"\"\"\n        :type n: int\n        :rtype: int\n        \"\"\"\n        count = 0\n        while n:\n            n &= n - 1\n            count += 1\n        return count\n"
        }
    ]
},
"house-robber":{
    "id": "198",
    "name": "house-robber",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/198.house-robber.md",
    "code": [
        {
            "language": "js",
            "text": "\nlet a = 0;\nlet b = 0;\n\nfor (let i = 0; i < nums.length; i++) {\n  const temp = b;\n  b = Math.max(a + nums[i], b);\n  a = temp;\n}\n\nreturn b;\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=198 lang=javascript\n *\n * [198] House Robber\n *\n * https://leetcode.com/problems/house-robber/description/\n *\n * algorithms\n * Easy (40.80%)\n * Total Accepted:    312.1K\n * Total Submissions: 762.4K\n * Testcase Example:  '[1,2,3,1]'\n *\n * You are a professional robber planning to rob houses along a street. Each\n * house has a certain amount of money stashed, the only constraint stopping\n * you from robbing each of them is that adjacent houses have security system\n * connected and it will automatically contact the police if two adjacent\n * houses were broken into on the same night.\n *\n * Given a list of non-negative integers representing the amount of money of\n * each house, determine the maximum amount of money you can rob tonight\n * without alerting the police.\n *\n * Example 1:\n *\n *\n * Input: [1,2,3,1]\n * Output: 4\n * Explanation: Rob house 1 (money = 1) and then rob house 3 (money =\n * 3).\n * Total amount you can rob = 1 + 3 = 4.\n *\n * Example 2:\n *\n *\n * Input: [2,7,9,3,1]\n * Output: 12\n * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house\n * 5 (money = 1).\n * Total amount you can rob = 2 + 9 + 1 = 12.\n *\n *\n */\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar rob = function(nums) {\n  // Tag: DP\n  const dp = [];\n  dp[0] = 0;\n  dp[1] = 0;\n\n  for (let i = 2; i < nums.length + 2; i++) {\n    dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);\n  }\n\n  return dp[nums.length + 1];\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def rob(self, nums: List[int]) -> int:\n        if not nums:\n            return 0\n\n        length = len(nums)\n        if length == 1:\n            return nums[0]\n        else:\n            prev = nums[0]\n            cur = max(prev, nums[1])\n            for i in range(2, length):\n                cur, prev = max(prev + nums[i], cur), cur\n            return cur\n"
        }
    ]
},
"binary-tree-right-side-view":{
    "id": "199",
    "name": "binary-tree-right-side-view",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 队列\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "队列",
            "link": null,
            "color": "blue"
        },
        {
            "text": "队列中用Null(一个特殊元素)来划分每层",
            "link": null,
            "color": "blue"
        },
        {
            "text": "树的基本操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历",
            "link": null,
            "color": "blue"
        },
        {
            "text": "层次遍历（BFS）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "二叉树的右视图可以看作是层次遍历每次只取每一层的最右边的元素",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/199.binary-tree-right-side-view.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=199 lang=javascript\n *\n * [199] Binary Tree Right Side View\n *\n * https://leetcode.com/problems/binary-tree-right-side-view/description/\n *\n * algorithms\n * Medium (46.74%)\n * Total Accepted:    156.1K\n * Total Submissions: 332.3K\n * Testcase Example:  '[1,2,3,null,5,null,4]'\n *\n * Given a binary tree, imagine yourself standing on the right side of it,\n * return the values of the nodes you can see ordered from top to bottom.\n *\n * Example:\n *\n *\n * Input: [1,2,3,null,5,null,4]\n * Output: [1, 3, 4]\n * Explanation:\n *\n * ⁠  1            <---\n * ⁠/   \\\n * 2     3         <---\n * ⁠\\     \\\n * ⁠ 5     4       <---\n *\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar rightSideView = function(root) {\n  if (!root) return [];\n\n  const ret = [];\n  const queue = [root, null];\n\n  let levelNodes = [];\n\n  while (queue.length > 0) {\n    const node = queue.shift();\n    if (node !== null) {\n      levelNodes.push(node.val);\n      if (node.right) {\n        queue.push(node.right);\n      }\n      if (node.left) {\n        queue.push(node.left);\n      }\n    } else {\n      // 一层遍历已经结束\n      ret.push(levelNodes[0]);\n      if (queue.length > 0) {\n        queue.push(null);\n      }\n      levelNodes = [];\n    }\n  }\n\n  return ret;\n};\n"
        }
    ]
},
"addTwoNumbers":{
    "id": "2",
    "name": "addTwoNumbers",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.链表这种数据结构的特点和使用2.用一个carried变量来实现进位的功能，每次相加之后计算carried，并用于下一位的计算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2.addTwoNumbers.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function (l1, l2) {\n  if (l1 === null || l2 === null) return null;\n\n  // 使用dummyHead可以简化对链表的处理，dummyHead.next指向新链表\n  let dummyHead = new ListNode(0);\n  let cur1 = l1;\n  let cur2 = l2;\n  let cur = dummyHead; // cur用于计算新链表\n  let carry = 0; // 进位标志\n\n  while (cur1 !== null || cur2 !== null) {\n    let val1 = cur1 !== null ? cur1.val : 0;\n    let val2 = cur2 !== null ? cur2.val : 0;\n    let sum = val1 + val2 + carry;\n    let newNode = new ListNode(sum % 10); // sum%10取模结果范围为0~9，即为当前节点的值\n    carry = sum >= 10 ? 1 : 0; // sum>=10，carry=1，表示有进位\n    cur.next = newNode;\n    cur = cur.next;\n\n    if (cur1 !== null) {\n      cur1 = cur1.next;\n    }\n\n    if (cur2 !== null) {\n      cur2 = cur2.next;\n    }\n  }\n\n  if (carry > 0) {\n    // 如果最后还有进位，新加一个节点\n    cur.next = new ListNode(carry);\n  }\n\n  return dummyHead.next;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        ListNode* ret = nullptr;\n        ListNode* cur = nullptr;\n        int carry = 0;\n        while (l1 != nullptr || l2 != nullptr || carry != 0) {\n            carry += (l1 == nullptr ? 0 : l1->val) + (l2 == nullptr ? 0 : l2->val);\n            auto temp = new ListNode(carry % 10);\n            carry /= 10;\n            if (ret == nullptr) {\n                ret = temp;\n                cur = ret;\n            }\n            else {\n                cur->next = temp;\n                cur = cur->next;\n            }\n            l1 = l1 == nullptr ? nullptr : l1->next;\n            l2 = l2 == nullptr ? nullptr : l2->next;\n        }\n        return ret;\n    }\n};\n"
        }
    ]
},
"validParentheses":{
    "id": "20",
    "name": "validParentheses",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.栈的基本特点和操作2.如果你用的是JS没有现成的栈，可以用数组来模拟入：push出：pop>入：push出shift就是队列",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/20.validParentheses.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {string} s\n * @return {boolean}\n */\nvar isValid = function (s) {\n  let valid = true;\n  const stack = [];\n  const mapper = {\n    \"{\": \"}\",\n    \"[\": \"]\",\n    \"(\": \")\",\n  };\n\n  for (let i in s) {\n    const v = s[i];\n    if ([\"(\", \"[\", \"{\"].indexOf(v) > -1) {\n      stack.push(v);\n    } else {\n      const peak = stack.pop();\n      if (v !== mapper[peak]) {\n        return false;\n      }\n    }\n  }\n\n  if (stack.length > 0) return false;\n\n  return valid;\n};\n"
        }
    ]
},
"number-of-islands":{
    "id": "200",
    "name": "number-of-islands",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- DFS\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二维数组DFS解题模板",
            "link": null,
            "color": "blue"
        },
        {
            "text": "将已经访问的元素置为0，省去visited的空间开销",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/200.number-of-islands.md",
    "code": [
        {
            "language": "java",
            "text": "\n   public int numIslands(char[][] grid) {\n        if (grid == null || grid.length == 0 || grid[0].length == 0) return 0;\n\n        int count = 0;\n        for (int row = 0; row < grid.length; row++) {\n            for (int col = 0; col < grid[0].length; col++) {\n                if (grid[row][col] == '1') {\n                    dfs(grid, row, col);\n                    count++;\n                }\n            }\n        }\n        return count;\n    }\n\n    private void dfs(char[][] grid,int row,int col) {\n        if (row<0||row== grid.length||col<0||col==grid[0].length||grid[row][col]!='1') {\n            return;\n        }\n        grid[row][col] = '0';\n        dfs(grid, row-1, col);\n        dfs(grid, row+1, col);\n        dfs(grid, row, col+1);\n        dfs(grid, row, col-1);\n    }\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=200 lang=javascript\n *\n * [200] Number of Islands\n */\nfunction helper(grid, i, j, rows, cols) {\n  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === \"0\")\n    return;\n\n  grid[i][j] = \"0\";\n\n  helper(grid, i + 1, j, rows, cols);\n  helper(grid, i, j + 1, rows, cols);\n  helper(grid, i - 1, j, rows, cols);\n  helper(grid, i, j - 1, rows, cols);\n}\n/**\n * @param {character[][]} grid\n * @return {number}\n */\nvar numIslands = function(grid) {\n  let res = 0;\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      if (grid[i][j] === \"1\") {\n        helper(grid, i, j, rows, cols);\n        res++;\n      }\n    }\n  }\n  return res;\n};\n"
        }
    ]
},
"bitwise-and-of-numbers-range":{
    "id": "201",
    "name": "bitwise-and-of-numbers-range",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 位运算\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "n个连续数字求与的时候，前m位都是1",
            "link": null,
            "color": "blue"
        },
        {
            "text": "可以用递归实现，个人认为比较难想到",
            "link": null,
            "color": "blue"
        },
        {
            "text": "bit运算代码：```js(n>m)?(rangeBitwiseAnd(m/2,n/2)<<1):m;```>每次问题规模缩小一半，这是二分法吗？",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/201.bitwise-and-of-numbers-range.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n    let res = m;\n    for (let i = m + 1; i <= n; i++) {\n      res = res & i;\n    }\n    return res;\n\n"
        },
        {
            "language": "js",
            "text": "\n\n(n > m) ? (rangeBitwiseAnd(m/2, n/2) << 1) : m;\n\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=201 lang=javascript\n *\n * [201] Bitwise AND of Numbers Range\n *\n */\n/**\n * @param {number} m\n * @param {number} n\n * @return {number}\n */\nvar rangeBitwiseAnd = function(m, n) {\n  let count = 0;\n  while (m !== n) {\n    m = m >> 1;\n    n = n >> 1;\n    count++;\n  }\n\n  return n << count;\n};\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def rangeBitwiseAnd(self, m: int, n: int) -> int:\n        cnt = 0\n        while m != n:\n            m >>= 1\n            n >>= 1\n            cnt += 1\n\n        return m << cnt\n "
        }
    ]
},
"remove-linked-list-elements":{
    "id": "203",
    "name": "remove-linked-list-elements",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "链表的基本操作（删除指定节点）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "虚拟节点dummy简化操作>其实设置dummy节点就是为了处理特殊位置（头节点），这这道题就是如果头节点是给定的需要删除的节点呢？为了保证代码逻辑的一致性，即不需要为头节点特殊定制逻辑，才采用的虚拟节点。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果连续两个节点都是要删除的节点，这个情况容易被忽略。eg:```js//只有下个节点不是要删除的节点才更新currentif(!next||next.val!==val){current=next;}```",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/203.remove-linked-list-elements.md",
    "code": [
        {
            "language": "js",
            "text": "\n// 只有下个节点不是要删除的节点才更新 current\nif (!next || next.val !== val) {\n    current =  next;\n}\n\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {ListNode} head\n * @param {number} val\n * @return {ListNode}\n */\nvar removeElements = function(head, val) {\n    const dummy = {\n        next: head\n    }\n    let current = dummy;\n\n    while(current && current.next) {\n        let next = current.next;\n        if (next.val === val) {\n            current.next = next.next;\n            next = next.next;\n        }\n\n        if (!next || next.val !== val) {\n            current =  next;\n        }\n    }\n\n    return dummy.next;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def removeElements(self, head: ListNode, val: int) -> ListNode:\n        prev = ListNode(0)\n        prev.next = head\n        cur = prev\n        while cur.next:\n            if cur.next.val == val:\n                cur.next = cur.next.next\n            else:\n                cur = cur.next\n        return prev.next\n"
        }
    ]
},
"reverse-linked-list":{
    "id": "206",
    "name": "reverse-linked-list",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "链表的基本操作（交换）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "虚拟节点dummy简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "注意更新current和pre的位置，否则有可能出现溢出",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/206.reverse-linked-list.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode pre = null, cur = head;\n\n        while (cur != null) {\n            ListNode next = cur.next;\n            cur.next = pre;\n            pre = cur;\n            cur = next;\n        }\n\n        return pre;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar reverseList = function(head) {\n    if (!head || !head.next) return head;\n\n    let cur = head;\n    let pre = null;\n\n    while(cur) {\n        const next = cur.next;\n        cur.next = pre;\n        pre = cur;\n        cur = next;\n    }\n\n    return pre;\n};\n\n"
        },
        {
            "language": "js",
            "text": "\nvar reverseList = function(head) {\n  // 递归结束条件\n  if (head === null || head.next === null) {\n    return head\n  }\n\n  // 递归反转 子链表\n  let newReverseList = reverseList(head.next)\n  // 获取原来链表的第 2 个节点 newReverseListTail\n  let newReverseListTail = head.next\n  // 调整原来头结点和第 2 个节点的指向\n  newReverseListTail.next = head\n  head.next = null\n\n  // 将调整后的链表返回\n  return newReverseList\n}\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        ListNode* prev = NULL;\n        ListNode* cur = head;\n        ListNode* next = NULL;\n        while (cur != NULL) {\n            next = cur->next;\n            cur->next = prev;\n            prev = cur;\n            cur = next;\n        }\n        return prev;\n    }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n// 普通递归\nclass Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        ListNode* tail = nullptr;\n        return reverseRecursive(head, tail);\n    }\n\n    ListNode* reverseRecursive(ListNode *head, ListNode *&tail) {\n        if (head == nullptr) {\n            tail = nullptr;\n            return head;\n        }\n        if (head->next == nullptr) {\n            tail = head;\n            return head;\n        }\n        auto h = reverseRecursive(head->next, tail);\n        if (tail != nullptr) {\n            tail->next = head;\n            tail = head;\n            head->next = nullptr;\n        }\n        return h;\n    }\n};\n\n// （类似）尾递归\nclass Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        if (head == nullptr) return head;\n        return reverseRecursive(nullptr, head, head->next);\n    }\n\n    ListNode* reverseRecursive(ListNode *prev, ListNode *head, ListNode *next)\n    {\n        if (next == nullptr) return head;\n        auto n = next->next;\n        next->next = head;\n        head->next = prev;\n        return reverseRecursive(head, next, n);\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def reverseList(self, head: ListNode) -> ListNode:\n        if not head: return None\n        prev = None\n        cur = head\n        while cur:\n            cur.next, prev, cur = prev, cur, cur.next\n        return prev\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def reverseList(self, head: ListNode) -> ListNode:\n        if not head or not head.next: return head\n        ans = self.reverseList(head.next)\n        head.next.next = head\n        head.next = None\n        return ans\n"
        }
    ]
},
"implement-trie-prefix-tree":{
    "id": "208",
    "name": "implement-trie-prefix-tree",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 前缀树\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀树",
            "link": null,
            "color": "blue"
        },
        {
            "text": "核心逻辑```jsconstc=word[i];constcurrent=computeIndex(c)if(!ws.children[current]){ws.children[current]=newTrieNode(c);}ws=ws.children[current];//深度递增}```",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/208.implement-trie-prefix-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\nfunction TrieNode(val) {\n  this.val = val; // 当前的字母\n  this.children = []; // 题目要求字典仅有a-z，那么其长度最大为26（26个字母）\n  this.isWord = false;\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction computeIndex(c) {\n  return c.charCodeAt(0) - \"a\".charCodeAt(0);\n}\n"
        },
        {
            "language": "js",
            "text": "\n const c = word[i];\n const current = computeIndex(c)\nif (!ws.children[current]) {\n    ws.children[current] = new TrieNode(c);\n  }\n  ws = ws.children[current]; // 深度递增\n}\n\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=208 lang=javascript\n *\n * [208] Implement Trie (Prefix Tree)\n *\n * https://leetcode.com/problems/implement-trie-prefix-tree/description/\n *\n * algorithms\n * Medium (36.93%)\n * Total Accepted:    172K\n * Total Submissions: 455.5K\n * Testcase Example:  '[\"Trie\",\"insert\",\"search\",\"search\",\"startsWith\",\"insert\",\"search\"]\\n[[],[\"apple\"],[\"apple\"],[\"app\"],[\"app\"],[\"app\"],[\"app\"]]'\n *\n * Implement a trie with insert, search, and startsWith methods.\n *\n * Example:\n *\n *\n * Trie trie = new Trie();\n *\n * trie.insert(\"apple\");\n * trie.search(\"apple\");   // returns true\n * trie.search(\"app\");     // returns false\n * trie.startsWith(\"app\"); // returns true\n * trie.insert(\"app\");\n * trie.search(\"app\");     // returns true\n *\n *\n * Note:\n *\n *\n * You may assume that all inputs are consist of lowercase letters a-z.\n * All inputs are guaranteed to be non-empty strings.\n *\n *\n */\nfunction TrieNode(val) {\n  this.val = val;\n  this.children = [];\n  this.isWord = false;\n}\n\nfunction computeIndex(c) {\n  return c.charCodeAt(0) - \"a\".charCodeAt(0);\n}\n/**\n * Initialize your data structure here.\n */\nvar Trie = function() {\n  this.root = new TrieNode(null);\n};\n\n/**\n * Inserts a word into the trie.\n * @param {string} word\n * @return {void}\n */\nTrie.prototype.insert = function(word) {\n  let ws = this.root;\n  for (let i = 0; i < word.length; i++) {\n    const c = word[i];\n    const current = computeIndex(c);\n    if (!ws.children[current]) {\n      ws.children[current] = new TrieNode(c);\n    }\n    ws = ws.children[current];\n  }\n  ws.isWord = true;\n};\n\n/**\n * Returns if the word is in the trie.\n * @param {string} word\n * @return {boolean}\n */\nTrie.prototype.search = function(word) {\n  let ws = this.root;\n  for (let i = 0; i < word.length; i++) {\n    const c = word[i];\n    const current = computeIndex(c);\n    if (!ws.children[current]) return false;\n    ws = ws.children[current];\n  }\n  return ws.isWord;\n};\n\n/**\n * Returns if there is any word in the trie that starts with the given prefix.\n * @param {string} prefix\n * @return {boolean}\n */\nTrie.prototype.startsWith = function(prefix) {\n  let ws = this.root;\n  for (let i = 0; i < prefix.length; i++) {\n    const c = prefix[i];\n    const current = computeIndex(c);\n    if (!ws.children[current]) return false;\n    ws = ws.children[current];\n  }\n  return true;\n};\n\n/**\n * Your Trie object will be instantiated and called as such:\n * var obj = new Trie()\n * obj.insert(word)\n * var param_2 = obj.search(word)\n * var param_3 = obj.startsWith(prefix)\n */\n"
        }
    ]
},
"minimum-size-subarray-sum":{
    "id": "209",
    "name": "minimum-size-subarray-sum",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 滑动窗口\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "滑动窗口简化操作(滑窗口适合用于求解这种要求`连续`的题目)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/209.minimum-size-subarray-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=209 lang=javascript\n *\n * [209] Minimum Size Subarray Sum\n *\n */\n/**\n * @param {number} s\n * @param {number[]} nums\n * @return {number}\n */\nvar minSubArrayLen = function(s, nums) {\n  if (nums.length === 0) return 0;\n  const slideWindow = [];\n  let acc = 0;\n  let min = null;\n\n  for (let i = 0; i < nums.length + 1; i++) {\n    const num = nums[i];\n\n    while (acc >= s) {\n      if (min === null || slideWindow.length < min) {\n        min = slideWindow.length;\n      }\n      acc = acc - slideWindow.shift();\n    }\n\n    slideWindow.push(num);\n\n    acc = slideWindow.reduce((a, b) => a + b, 0);\n  }\n\n  return min || 0;\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar minSubArrayLen = function(s, nums) {\n  if (nums.length === 0) return 0;\n  const slideWindow = [];\n  let acc = 0;\n  let min = null;\n\n  for (let i = 0; i < nums.length + 1; i++) {\n    const num = nums[i];\n\n    while (acc > s) {\n      acc = acc - slideWindow.shift();\n    }\n    if (acc === s) {\n      if (min === null || slideWindow.length < min) {\n        min = slideWindow.length;\n      }\n      slideWindow.shift();\n    }\n\n    slideWindow.push(num);\n\n    acc = slideWindow.reduce((a, b) => a + b, 0);\n  }\n\n  return min || 0;\n};\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def minSubArrayLen(self, s: int, nums: List[int]) -> int:\n        l = total = 0\n        ans = len(nums) + 1\n        for r in range(len(nums)):\n            total += nums[r]\n            while total >= s:\n                ans = min(ans, r - l + 1)\n                total -= nums[l]\n                l += 1\n        return  0 if ans == len(nums) + 1 else ans\n"
        }
    ]
},
"MergeTwoSortedLists":{
    "id": "21",
    "name": "MergeTwoSortedLists",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 递归\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "掌握链表数据结构",
            "link": null,
            "color": "blue"
        },
        {
            "text": "考虑边界情况2",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/21.MergeTwoSortedLists.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nconst mergeTwoLists = function (l1, l2) {\n  if (l1 === null) {\n    return l2;\n  }\n  if (l2 === null) {\n    return l1;\n  }\n  if (l1.val < l2.val) {\n    l1.next = mergeTwoLists(l1.next, l2);\n    return l1;\n  } else {\n    l2.next = mergeTwoLists(l1, l2.next);\n    return l2;\n  }\n};\n"
        }
    ]
},
"add-and-search-word-data-structure-design":{
    "id": "211",
    "name": "add-and-search-word-data-structure-design",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 前缀树\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀树（也叫字典树），英文名Trie（读作tree或者try）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/211.add-and-search-word-data-structure-design.md",
    "code": [
        {
            "language": "py",
            "text": "\ndef search(self, word):\n        \"\"\"\n        Returns if the word is in the trie.\n        :type word: str\n        :rtype: bool\n        \"\"\"\n        curr = self.Trie\n        for i, w in enumerate(word):\n            if w == '.':\n                wizards = []\n                for k in curr.keys():\n                    if k == '#':\n                        continue\n                    wizards.append(self.search(word[:i] + k + word[i + 1:]))\n                return any(wizards)\n            if w not in curr:\n                return False\n            curr = curr[w]\n        return \"#\" in curr\n"
        },
        {
            "language": "py",
            "text": "\ndef search(self, word):\n        \"\"\"\n        Returns if the word is in the trie.\n        :type word: str\n        :rtype: bool\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                return False\n            curr = curr[w]\n        return \"#\" in curr\n"
        },
        {
            "language": "py",
            "text": "\nclass Trie:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.Trie = {}\n\n    def insert(self, word):\n        \"\"\"\n        Inserts a word into the trie.\n        :type word: str\n        :rtype: void\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                curr[w] = {}\n            curr = curr[w]\n        curr['#'] = 1\n\n    def search(self, word):\n        \"\"\"\n        Returns if the word is in the trie.\n        :type word: str\n        :rtype: bool\n        \"\"\"\n        curr = self.Trie\n        for i, w in enumerate(word):\n            if w == '.':\n                wizards = []\n                for k in curr.keys():\n                    if k == '#':\n                        continue\n                    wizards.append(self.search(word[:i] + k + word[i + 1:]))\n                return any(wizards)\n            if w not in curr:\n                return False\n            curr = curr[w]\n        return \"#\" in curr\n"
        },
        {
            "language": "py",
            "text": "\nclass WordDictionary:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.trie = Trie()\n\n    def addWord(self, word: str) -> None:\n        \"\"\"\n        Adds a word into the data structure.\n        \"\"\"\n        self.trie.insert(word)\n\n    def search(self, word: str) -> bool:\n        \"\"\"\n        Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.\n        \"\"\"\n        return self.trie.search(word)\n\n\n# Your WordDictionary object will be instantiated and called as such:\n# obj = WordDictionary()\n# obj.addWord(word)\n# param_2 = obj.search(word)\n"
        }
    ]
},
"word-search-ii":{
    "id": "212",
    "name": "word-search-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 前缀树\n- DFS\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀树（也叫字典树），英文名Trie（读作tree或者try）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "DFS",
            "link": null,
            "color": "blue"
        },
        {
            "text": "hashmap结合dfs记录访问过的元素的时候，注意结束之后需要将hashmap的值重置。（下方代码的`delseen[(i,j)]`）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/212.word-search-ii.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Trie:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.Trie = {}\n\n    def insert(self, word):\n        \"\"\"\n        Inserts a word into the trie.\n        :type word: str\n        :rtype: void\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                curr[w] = {}\n            curr = curr[w]\n        curr['#'] = 1\n\n    def startsWith(self, prefix):\n        \"\"\"\n        Returns if there is any word in the trie that starts with the given prefix.\n        :type prefix: str\n        :rtype: bool\n        \"\"\"\n\n        curr = self.Trie\n        for w in prefix:\n            if w not in curr:\n                return False\n            curr = curr[w]\n        return True\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\n        m = len(board)\n        if m == 0:\n            return []\n        n = len(board[0])\n        trie = Trie()\n        seen = None\n        res = set()\n        for word in words:\n            trie.insert(word)\n\n        def dfs(s, i, j):\n            if (i, j) in seen or i < 0 or i >= m or j < 0 or j >= n or not trie.startsWith(s):\n                return\n            s += board[i][j]\n            seen[(i, j)] = True\n\n            if s in words:\n                res.add(s)\n            dfs(s, i + 1, j)\n            dfs(s, i - 1, j)\n            dfs(s, i, j + 1)\n            dfs(s, i, j - 1)\n\n            del seen[(i, j)]\n\n        for i in range(m):\n            for j in range(n):\n                seen = dict()\n                dfs(\"\", i, j)\n        return list(res)\n"
        }
    ]
},
"kth-largest-element-in-an-array":{
    "id": "215",
    "name": "kth-largest-element-in-an-array",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 堆\n- Quick Select\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.直接排序很简单2.堆（Heap）主要是要维护一个K大小的小顶堆，扫描一遍数组，最后堆顶元素即是所求。3.QuickSelect,关键是是取pivot，对数组区间做partition，比较pivot的位置，类似二分，取pivot左边或右边继续递归查找。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/215.kth-largest-element-in-an-array.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass KthLargestElementSort {\n public int findKthlargest2(int[] nums, int k) {\n    Arrays.sort(nums);\n    return nums[nums.length - k];\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass KthLargestElementHeap {\n  public int findKthLargest(int[] nums, int k) {\n      PriorityQueue<Integer> pq = new PriorityQueue<>();\n      for (int num : nums) {\n        pq.offer(num);\n        if (pq.size() > k) {\n          pq.poll();\n        }\n      }\n      return pq.poll();\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass KthLargestElementQuickSelect {\n    static Random random = new Random();\n    public int findKthLargest3(int[] nums, int k) {\n      int len = nums.length;\n      return select(nums, 0, len - 1, len - k);\n    }\n    \n    private int select(int[] nums, int left, int right, int k) {\n      if (left == right) return nums[left];\n      // random select pivotIndex between left and right\n      int pivotIndex = left + random.nextInt(right - left);\n      // do partition, move smaller than pivot number into pivot left\n      int pos = partition(nums, left, right, pivotIndex);\n      if (pos == k) {\n        return nums[pos];\n      } else if (pos > k) {\n        return select(nums, left, pos - 1, k);\n      } else {\n        return select(nums, pos + 1, right, k);\n      }\n    }\n    \n    private int partition(int[] nums, int left, int right, int pivotIndex) {\n      int pivot = nums[pivotIndex];\n      // move pivot to end\n      swap(nums, right, pivotIndex);\n      int pos = left;\n      // move smaller num to pivot left\n      for (int i = left; i <= right; i++) {\n        if (nums[i] < pivot) {\n          swap(nums, pos++, i);\n        }\n      }\n      // move pivot to original place\n      swap(nums, right, pos);\n      return pos;\n    }\n    \n    private void swap(int[] nums, int i, int j) {\n      int tmp = nums[i];\n      nums[i] = nums[j];\n      nums[j] = tmp;\n    }\n}\n"
        }
    ]
},
"contains-duplicate-ii":{
    "id": "219",
    "name": "contains-duplicate-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- hashmap\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析无",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/219.contains-duplicate-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=219 lang=javascript\n *\n * [219] Contains Duplicate II\n *\n * https://leetcode.com/problems/contains-duplicate-ii/description/\n *\n * algorithms\n * Easy (34.75%)\n * Total Accepted:    187.3K\n * Total Submissions: 537.5K\n * Testcase Example:  '[1,2,3,1]\\n3'\n *\n * Given an array of integers and an integer k, find out whether there are two\n * distinct indices i and j in the array such that nums[i] = nums[j] and the\n * absolute difference between i and j is at most k.\n *\n *\n * Example 1:\n *\n *\n * Input: nums = [1,2,3,1], k = 3\n * Output: true\n *\n *\n *\n * Example 2:\n *\n *\n * Input: nums = [1,0,1,1], k = 1\n * Output: true\n *\n *\n *\n * Example 3:\n *\n *\n * Input: nums = [1,2,3,1,2,3], k = 2\n * Output: false\n *\n *\n *\n *\n *\n */\n/**\n * @param {number[]} nums\n * @param {number} k\n * @return {boolean}\n */\nvar containsNearbyDuplicate = function(nums, k) {\n    const visited = {};\n    for(let i = 0; i < nums.length; i++) {\n        const num = nums[i];\n        if (visited[num] !== undefined && i - visited[num] <= k) {\n            return true;\n        }\n        visited[num] = i;\n    }\n    return false\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        d = {}\n        for index, num in enumerate(nums):\n            if num in d and index - d[num] <= k:\n                return True\n            d[num] = index\n        return False\n"
        }
    ]
},
"GenerateParentheses":{
    "id": "22",
    "name": "GenerateParentheses",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- DFS\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "当l<r时记得剪枝",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/22.GenerateParentheses.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number} n\n * @return {string[]}\n * @param l 左括号已经用了几个\n * @param r 右括号已经用了几个\n * @param str 当前递归得到的拼接字符串结果\n * @param res 结果集\n */\nconst generateParenthesis = function (n) {\n  const res = [];\n\n  function dfs(l, r, str) {\n    if (l == n && r == n) {\n      return res.push(str);\n    }\n    // l 小于 r 时不满足条件 剪枝\n    if (l < r) {\n      return;\n    }\n    // l 小于 n 时可以插入左括号，最多可以插入 n 个\n    if (l < n) {\n      dfs(l + 1, r, str + \"(\");\n    }\n    // r < l 时 可以插入右括号\n    if (r < l) {\n      dfs(l, r + 1, str + \")\");\n    }\n  }\n  dfs(0, 0, \"\");\n  return res;\n};\n"
        }
    ]
},
"maximal-square":{
    "id": "221",
    "name": "maximal-square",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n- 递归\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "DP",
            "link": null,
            "color": "blue"
        },
        {
            "text": "递归公式可以利用dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1][j]和dp[i][j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]的计算结果，而不用重新计算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "空间复杂度可以降低到O(n),n为列数",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/221.maximal-square.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n/*\n * @lc app=leetcode id=221 lang=javascript\n *\n * [221] Maximal Square\n */\n/**\n * @param {character[][]} matrix\n * @return {number}\n */\nvar maximalSquare = function(matrix) {\n  if (matrix.length === 0) return 0;\n  const dp = [];\n  const rows = matrix.length;\n  const cols = matrix[0].length;\n  let max = Number.MIN_VALUE;\n\n  for (let i = 0; i < rows + 1; i++) {\n    if (i === 0) {\n      dp[i] = Array(cols + 1).fill(0);\n    } else {\n      dp[i] = [0];\n    }\n  }\n\n  for (let i = 1; i < rows + 1; i++) {\n    for (let j = 1; j < cols + 1; j++) {\n      if (matrix[i - 1][j - 1] === \"1\") {\n        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;\n        max = Math.max(max, dp[i][j]);\n      } else {\n        dp[i][j] = 0;\n      }\n    }\n  }\n\n  return max * max;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maximalSquare(self, matrix: List[List[str]]) -> int:\n        res = 0\n        m = len(matrix)\n        if m == 0:\n            return 0\n        n = len(matrix[0])\n        dp = [[0] * (n + 1) for _ in range(m + 1)]\n\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1 if matrix[i - 1][j - 1] == \"1\" else 0\n                res = max(res, dp[i][j])\n        return res ** 2\n"
        }
    ]
},
"invert-binary-tree":{
    "id": "226",
    "name": "invert-binary-tree",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 递归\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "递归简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果树很高，建议使用栈来代替递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "这道题目对顺序没要求的，因此队列数组操作都是一样的，无任何区别",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/226.invert-binary-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=226 lang=javascript\n *\n * [226] Invert Binary Tree\n *\n * https://leetcode.com/problems/invert-binary-tree/description/\n *\n * algorithms\n * Easy (57.14%)\n * Total Accepted:    311K\n * Total Submissions: 540.6K\n * Testcase Example:  '[4,2,7,1,3,6,9]'\n *\n * Invert a binary tree.\n *\n * Example:\n *\n * Input:\n *\n *\n * ⁠    4\n * ⁠  /   \\\n * ⁠ 2     7\n * ⁠/ \\   / \\\n * 1   3 6   9\n *\n * Output:\n *\n *\n * ⁠    4\n * ⁠  /   \\\n * ⁠ 7     2\n * ⁠/ \\   / \\\n * 9   6 3   1\n *\n * Trivia:\n * This problem was inspired by this original tweet by Max Howell:\n *\n * Google: 90% of our engineers use the software you wrote (Homebrew), but you\n * can’t invert a binary tree on a whiteboard so f*** off.\n *\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function(root) {\n  if (!root) return root;\n  // 递归\n  //   const left = root.left;\n  //   const right = root.right;\n  //   root.right = invertTree(left);\n  //   root.left = invertTree(right);\n  // 我们用stack来模拟递归\n  // 本质上递归是利用了执行栈，执行栈也是一种栈\n  // 其实这里使用队列也是一样的，因为这里顺序不重要\n\n  const stack = [root];\n  let current = null;\n  while ((current = stack.shift())) {\n    const left = current.left;\n    const right = current.right;\n    current.right = left;\n    current.left = right;\n    if (left) {\n      stack.push(left);\n    }\n    if (right) {\n      stack.push(right);\n    }\n  }\n  return root;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def invertTree(self, root: TreeNode) -> TreeNode:\n        if not root:\n            return None\n        stack = [root]\n        while stack:\n            node = stack.pop(0)\n            node.left, node.right = node.right, node.left\n            if node.left:\n                stack.append(node.left)\n            if node.right:\n                stack.append(node.right)\n        return root\n"
        }
    ]
},
"majority-element-ii":{
    "id": "229",
    "name": "majority-element-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 摩尔投票法\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "摩尔投票法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "两个counter",
            "link": null,
            "color": "blue"
        },
        {
            "text": "最后得到的只是出现次数最多的两个数字，有可能不满足出现次数大于1/3",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/229.majority-element-ii.md",
    "code": [
        {
            "language": "java",
            "text": "\n/*\n * @lc app=leetcode id=229 lang=java\n *\n * [229] Majority Element II\n */\nclass Solution {\n    public List<Integer> majorityElement(int[] nums) {\n        List<Integer> res = new ArrayList<Integer>();\n        if (nums == null || nums.length == 0)\n            return res;\n        int n1 = nums[0], n2 = nums[0], cnt1 = 0, cnt2 = 0, len = nums.length;\n        for (int i = 0; i < len; i++) {\n            if (nums[i] == n1)\n                cnt1++;\n            else if (nums[i] == n2)\n                cnt2++;\n            else if (cnt1 == 0) {\n                n1 = nums[i];\n                cnt1 = 1;\n            } else if (cnt2 == 0) {\n                n2 = nums[i];\n                cnt2 = 1;\n            } else {\n                cnt1--;\n                cnt2--;\n            }\n        }\n        cnt1 = 0;\n        cnt2 = 0;\n        for (int i = 0; i < len; i++) {\n            if (nums[i] == n1)\n                cnt1++;\n            else if (nums[i] == n2)\n                cnt2++;\n        }\n        if (cnt1 > len / 3)\n            res.add(n1);\n        if (cnt2 > len / 3 && n1 != n2)\n            res.add(n2);\n        return res;\n    }\n}\n\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=229 lang=javascript\n *\n * [229] Majority Element II\n */\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar majorityElement = function(nums) {\n  const res = [];\n  const len = nums.length;\n  let n1 = null,\n    n2 = null,\n    cnt1 = 0,\n    cnt2 = 0;\n\n  for (let i = 0; i < len; i++) {\n    if (n1 === nums[i]) {\n      cnt1++;\n    } else if (n2 === nums[i]) {\n      cnt2++;\n    } else if (cnt1 === 0) {\n      n1 = nums[i];\n      cnt1++;\n    } else if (cnt2 === 0) {\n      n2 = nums[i];\n      cnt2++;\n    } else {\n      cnt1--;\n      cnt2--;\n    }\n  }\n\n  cnt1 = 0;\n  cnt2 = 0;\n\n  for (let i = 0; i < len; i++) {\n    if (n1 === nums[i]) {\n      cnt1++;\n    } else if (n2 === nums[i]) {\n      cnt2++;\n    }\n  }\n\n  if (cnt1 > (len / 3) >>> 0) {\n    res.push(n1);\n  }\n  if (cnt2 > (len / 3) >>> 0) {\n    res.push(n2);\n  }\n\n  return res;\n};\n\n"
        }
    ]
},
"merge-k-sorted-lists":{
    "id": "23",
    "name": "merge-k-sorted-lists",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n- 归并排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分治",
            "link": null,
            "color": "blue"
        },
        {
            "text": "归并排序(mergesort)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/23.merge-k-sorted-lists.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=23 lang=javascript\n *\n * [23] Merge k Sorted Lists\n *\n * https://leetcode.com/problems/merge-k-sorted-lists/description/\n *\n */\nfunction mergeTwoLists(l1, l2) {\n  const dummyHead = {};\n  let current = dummyHead;\n  // l1: 1 -> 3 -> 5\n  // l2: 2 -> 4 -> 6\n  while (l1 !== null && l2 !== null) {\n    if (l1.val < l2.val) {\n      current.next = l1; // 把小的添加到结果链表\n      current = current.next; // 移动结果链表的指针\n      l1 = l1.next; // 移动小的那个链表的指针\n    } else {\n      current.next = l2;\n      current = current.next;\n      l2 = l2.next;\n    }\n  }\n\n  if (l1 === null) {\n    current.next = l2;\n  } else {\n    current.next = l1;\n  }\n  return dummyHead.next;\n}\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nvar mergeKLists = function(lists) {\n  // 图参考： https://zhuanlan.zhihu.com/p/61796021\n  if (lists.length === 0) return null;\n  if (lists.length === 1) return lists[0];\n  if (lists.length === 2) {\n    return mergeTwoLists(lists[0], lists[1]);\n  }\n\n  const mid = lists.length >> 1;\n  const l1 = [];\n  for (let i = 0; i < mid; i++) {\n    l1[i] = lists[i];\n  }\n\n  const l2 = [];\n  for (let i = mid, j = 0; i < lists.length; i++, j++) {\n    l2[j] = lists[i];\n  }\n\n  return mergeTwoLists(mergeKLists(l1), mergeKLists(l2));\n};\n"
        }
    ]
},
"kth-smallest-element-in-a-bst":{
    "id": "230",
    "name": "kth-smallest-element-in-a-bst",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 中序遍历\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "中序遍历",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/230.kth-smallest-element-in-a-bst.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nprivate int count = 1;\nprivate int res;\n\npublic int KthSmallest (TreeNode root, int k) {\n    inorder(root, k);\n    return res;\n}\n\npublic void inorder (TreeNode root, int k) {\n    if (root == null) return;\n\n    inorder(root.left, k);\n\n    if (count++ == k) {\n        res = root.val;\n        return;\n    }\n    \n    inorder(root.right, k);\n}\n"
        },
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=230 lang=javascript\n *\n * [230] Kth Smallest Element in a BST\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function(root, k) {\n    const stack = [root];\n    let cur = root;\n    let i = 0;\n\n    function insertAllLefts(cur) {\n        while(cur && cur.left) {\n            const l = cur.left;\n            stack.push(l);\n            cur = l;\n        }\n    }\n    insertAllLefts(cur);\n\n    while(cur = stack.pop()) {\n        i++;\n        if (i === k) return cur.val;\n        const r = cur.right;\n\n        if (r) {\n            stack.push(r);\n            insertAllLefts(r);\n        }\n    }\n\n    return -1;\n\n    \n};\n"
        },
        {
            "language": "js",
            "text": "\n\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\nfunction nodeCount(node) {\n    if (node === null) return 0;\n    \n    const l = nodeCount(node.left);\n    const r = nodeCount(node.right);\n    \n    return 1 + l + r;\n}\n/**\n * @param {TreeNode} root\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function(root, k) {\n    const c = nodeCount(root.left);\n    if (c === k - 1) return root.val;\n    else if (c < k - 1) return kthSmallest(root.right, k - c - 1);\n    return kthSmallest(root.left, k)\n};\n\n"
        }
    ]
},
"implement-queue-using-stacks":{
    "id": "232",
    "name": "implement-queue-using-stacks",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 栈\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "在push的时候利用辅助栈(双栈)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/232.implement-queue-using-stacks.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass MyQueue {\n    Stack<Integer> pushStack = new Stack<> ();\n    Stack<Integer> popStack = new Stack<> ();\n\n    /** Initialize your data structure here. */\n    public MyQueue() {\n\n    }\n    \n    /** Push element x to the back of queue. */\n    public void push(int x) {\n        while (!popStack.isEmpty()) {\n            pushStack.push(popStack.pop());\n        }\n        pushStack.push(x);\n    }\n    \n    /** Removes the element from in front of queue and returns that element. */\n    public int pop() {\n        while (!pushStack.isEmpty()) {\n            popStack.push(pushStack.pop());\n        }\n        return popStack.pop();\n    }\n    \n    /** Get the front element. */\n    public int peek() {\n        while (!pushStack.isEmpty()) {\n            popStack.push(pushStack.pop());\n        }\n        return popStack.peek();\n    }\n    \n    /** Returns whether the queue is empty. */\n    public boolean empty() {\n        return pushStack.isEmpty() && popStack.isEmpty();\n    }\n}\n\n/**\n * Your MyQueue object will be instantiated and called as such:\n * MyQueue obj = new MyQueue();\n * obj.push(x);\n * int param_2 = obj.pop();\n * int param_3 = obj.peek();\n * boolean param_4 = obj.empty();\n */\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=232 lang=javascript\n *\n * [232] Implement Queue using Stacks\n */\n/**\n * Initialize your data structure here.\n */\nvar MyQueue = function() {\n  // tag: queue stack array\n  this.stack = [];\n  this.helperStack = [];\n};\n\n/**\n * Push element x to the back of queue.\n * @param {number} x\n * @return {void}\n */\nMyQueue.prototype.push = function(x) {\n  let cur = null;\n  while ((cur = this.stack.pop())) {\n    this.helperStack.push(cur);\n  }\n  this.helperStack.push(x);\n\n  while ((cur = this.helperStack.pop())) {\n    this.stack.push(cur);\n  }\n};\n\n/**\n * Removes the element from in front of queue and returns that element.\n * @return {number}\n */\nMyQueue.prototype.pop = function() {\n  return this.stack.pop();\n};\n\n/**\n * Get the front element.\n * @return {number}\n */\nMyQueue.prototype.peek = function() {\n  return this.stack[this.stack.length - 1];\n};\n\n/**\n * Returns whether the queue is empty.\n * @return {boolean}\n */\nMyQueue.prototype.empty = function() {\n  return this.stack.length === 0;\n};\n\n/**\n * Your MyQueue object will be instantiated and called as such:\n * var obj = new MyQueue()\n * obj.push(x)\n * var param_2 = obj.pop()\n * var param_3 = obj.peek()\n * var param_4 = obj.empty()\n */\n"
        },
        {
            "language": "py",
            "text": "\nclass MyQueue:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.stack = []\n        self.help_stack = []\n\n    def push(self, x: int) -> None:\n        \"\"\"\n        Push element x to the back of queue.\n        \"\"\"\n        while self.stack:\n            self.help_stack.append(self.stack.pop())\n        self.help_stack.append(x)\n        while self.help_stack:\n            self.stack.append(self.help_stack.pop())\n\n    def pop(self) -> int:\n        \"\"\"\n        Removes the element from in front of queue and returns that element.\n        \"\"\"\n        return self.stack.pop()\n\n    def peek(self) -> int:\n        \"\"\"\n        Get the front element.\n        \"\"\"\n        return self.stack[-1]\n\n    def empty(self) -> bool:\n        \"\"\"\n        Returns whether the queue is empty.\n        \"\"\"\n        return not bool(self.stack)\n\n\n# Your MyQueue object will be instantiated and called as such:\n# obj = MyQueue()\n# obj.push(x)\n# param_2 = obj.pop()\n# param_3 = obj.peek()\n# param_4 = obj.empty()\n"
        }
    ]
},
"lowest-common-ancestor-of-a-binary-tree":{
    "id": "236",
    "name": "lowest-common-ancestor-of-a-binary-tree",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 递归\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "用递归的思路去思考树",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/236.lowest-common-ancestor-of-a-binary-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\n  // 如果我们找到了p，直接进行返回，那如果下面就是q呢？ 其实这没有影响，但是还是要多考虑一下\n  if (!root || root === p || root === q) return root;\n  const left = lowestCommonAncestor(root.left, p, q); // 去左边找，我们期望返回找到的节点\n  const right = lowestCommonAncestor(root.right, p, q);// 去右边找，我们期望返回找到的节点\n  if (!left) return right; // 左子树找不到，返回右子树\n  if (!right) return left; // 右子树找不到，返回左子树\n  return root; // 左右子树分别有一个，则返回root\n\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */\nvar lowestCommonAncestor = function(root, p, q) {\n  if (!root || root === p || root === q) return root;\n  const left = lowestCommonAncestor(root.left, p, q);\n  const right = lowestCommonAncestor(root.right, p, q);\n  if (!left) return right; // 左子树找不到，返回右子树\n  if (!right) return left; // 右子树找不到，返回左子树\n  return root; // 左右子树分别有一个，则返回root\n};\n"
        }
    ]
},
"product-of-array-except-self":{
    "id": "238",
    "name": "product-of-array-except-self",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "两次遍历，一次正向，一次反向。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "维护一个数组，第i项代表前i个元素（不包括i）的乘积",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/238.product-of-array-except-self.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar productExceptSelf = function(nums) {\n  const ret = [];\n\n  for (let i = 0, temp = 1; i < nums.length; i++) {\n    ret[i] = temp;\n    temp *= nums[i];\n  }\n  // 此时ret[i]存放的是前i个元素相乘的结果(不包含第i个)\n\n  // 如果没有上面的循环的话，\n  // ret经过下面的循环会变成ret[i]存放的是后i个元素相乘的结果(不包含第i个)\n\n  // 我们的目标是ret[i]存放的所有数字相乘的结果(不包含第i个)\n\n  // 因此我们只需要对于上述的循环产生的ret[i]基础上运算即可\n  for (let i = nums.length - 1, temp = 1; i >= 0; i--) {\n    ret[i] *= temp;\n    temp *= nums[i];\n  }\n  return ret;\n};\n"
        }
    ]
},
"sliding-window-maximum":{
    "id": "239",
    "name": "sliding-window-maximum",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 队列\n- 滑动窗口\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "双端队列简化时间复杂度",
            "link": null,
            "color": "blue"
        },
        {
            "text": "滑动窗口",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/239.sliding-window-maximum.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar maxSlidingWindow = function(nums, k) {\n  // bad 时间复杂度O(n * k)\n  if (nums.length === 0 || k === 0) return [];\n  let slideWindow = [];\n  const ret = [];\n  for (let i = 0; i < nums.length - k + 1; i++) {\n    for (let j = 0; j < k; j++) {\n      slideWindow.push(nums[i + j]);\n    }\n    ret.push(Math.max(...slideWindow));\n    slideWindow = [];\n  }\n  return ret;\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar maxSlidingWindow = function(nums, k) {\n  // 双端队列优化时间复杂度, 时间复杂度O(n)\n  const deque = []; // 存放在接下来的滑动窗口可能成为最大值的数\n  const ret = [];\n  for (let i = 0; i < nums.length; i++) {\n    // 清空失效元素\n    while (deque[0] < i - k + 1) {\n      deque.shift();\n    }\n\n    while (nums[deque[deque.length - 1]] < nums[i]) {\n      deque.pop();\n    }\n\n    deque.push(i);\n\n    if (i >= k - 1) {\n      ret.push(nums[deque[0]]);\n    }\n  }\n  return ret;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        if k == 0: return []\n        res = []\n        for r in range(k - 1, len(nums)):\n            res.append(max(nums[r - k + 1:r + 1]))\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        deque, res, n = [], [], len(nums)\n        for i in range(n):\n            while deque and deque[0] < i - k + 1:\n                deque.pop(0)\n            while deque and nums[i] > nums[deque[-1]]:\n                deque.pop(-1)\n            deque.append(i)\n            if i >= k - 1: res.append(nums[deque[0]])\n        return res\n\n\n"
        }
    ]
},
"swapNodesInPairs":{
    "id": "24",
    "name": "swapNodesInPairs",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.链表这种数据结构的特点和使用2.dummyHead简化操作",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/24.swapNodesInPairs.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar swapPairs = function(head) {\n  const dummy = new ListNode(0);\n  dummy.next = head;\n  let current = dummy;\n  while (current.next != null && current.next.next != null) {\n    // 初始化双指针\n    const first = current.next;\n    const second = current.next.next;\n    \n    // 更新双指针和 current 指针\n    first.next = second.next;\n    second.next = first;\n    current.next = second;\n\n    // 更新指针\n    current = current.next.next;\n  }\n  return dummy.next;\n};\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def swapPairs(self, head: ListNode) -> ListNode:\n        \"\"\"\n        用递归实现链表相邻互换：\n        第一个节点的 next 是第三、第四个节点交换的结果，第二个节点的 next 是第一个节点；\n        第三个节点的 next 是第五、第六个节点交换的结果，第四个节点的 next 是第三个节点；\n        以此类推\n        :param ListNode head\n        :return ListNode\n        \"\"\"\n        # 如果为 None 或 next 为 None，则直接返回\n        if not head or not head.next:\n            return head\n\n        _next = head.next\n        head.next = self.swapPairs(_next.next)\n        _next.next = head\n        return _next\n"
        }
    ]
},
"search-a-2-d-matrix-ii":{
    "id": "240",
    "name": "search-a-2-d-matrix-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "从角落开始遍历，利用递增的特性简化时间复杂度",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/240.search-a-2-d-matrix-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n/*\n * @lc app=leetcode id=240 lang=javascript\n *\n * [240] Search a 2D Matrix II\n *\n * https://leetcode.com/problems/search-a-2d-matrix-ii/description/\n *\n * \n */\n/**\n * @param {number[][]} matrix\n * @param {number} target\n * @return {boolean}\n */\nvar searchMatrix = function(matrix, target) {\n    if (!matrix || matrix.length === 0) return 0;\n\n    let colIndex = 0;\n    let rowIndex = matrix.length - 1;\n    while(rowIndex > 0 && target < matrix[rowIndex][colIndex]) {\n        rowIndex --;\n    }\n\n    while(colIndex < matrix[0].length) {\n        if (target === matrix[rowIndex][colIndex]) return true;\n        if (target > matrix[rowIndex][colIndex]) {\n            colIndex ++;\n        } else if (rowIndex > 0){\n            rowIndex --;\n        } else {\n            return false;\n        }\n    }\n\n    return  false;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def searchMatrix(self, matrix, target):\n        m = len(matrix)\n        if m == 0:\n            return False\n        n = len(matrix[0])\n        i = m - 1\n        j = 0\n\n        while i >= 0 and j < n:\n            if matrix[i][j] == target:\n                return True\n            if matrix[i][j] > target:\n                i -= 1\n            else:\n                j += 1\n        return False\n"
        }
    ]
},
"reverse-nodes-in-k-groups-cn":{
    "id": "25",
    "name": "reverse-nodes-in-k-groups-cn",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.创建一个dummynode2.对链表以k为单位进行分组，记录每一组的起始和最后节点位置3.对每一组进行翻转，更换起始和最后的位置4.返回`dummy.next`.",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/25.reverse-nodes-in-k-groups-cn.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass ReverseKGroupsLinkedList {\n  public ListNode reverseKGroup(ListNode head, int k) {\n      if (head == null || k == 1) {\n        return head;\n      }\n      ListNode dummy = new ListNode(0);\n      dummy.next = head;\n\n      ListNode start = dummy;\n      ListNode end = head;\n      int count = 0;\n      while (end != null) {\n        count++;\n        // group\n        if (count % k == 0) {\n          // reverse linked list (start, end]\n          start = reverse(start, end.next);\n          end = start.next;\n        } else {\n          end = end.next;\n        }\n      }\n      return dummy.next;\n    }\n\n    /**\n     * reverse linked list from range (start, end), return last node.\n     * for example:\n     * 0->1->2->3->4->5->6->7->8\n     * |           |\n     * start       end\n     *\n     * After call start = reverse(start, end)\n     *\n     * 0->3->2->1->4->5->6->7->8\n     *          |  |\n     *       start end\n     *       first\n     *\n     */\n    private ListNode reverse(ListNode start, ListNode end) {\n      ListNode curr = start.next;\n      ListNode prev = start;\n      ListNode first = curr;\n      while (curr != end){\n        ListNode temp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = temp;\n      }\n      start.next = prev;\n      first.next = curr;\n      return first;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {ListNode} head\n * @param {number} k\n * @return {ListNode}\n */\nvar reverseKGroup = function(head, k) {\n  // 标兵\n  let dummy = new ListNode()\n  dummy.next = head\n  let [start, end] = [dummy, dummy.next]\n  let count = 0\n  while(end) {\n    count++\n    if (count % k === 0) {\n      start = reverseList(start, end.next)\n      end = start.next\n    } else {\n      end = end.next\n    }\n  }\n  return dummy.next\n\n  // 翻转stat -> end的链表\n  function reverseList(start, end) {\n    let [pre, cur] = [start, start.next]\n    const first = cur\n    while(cur !== end) {\n      let next = cur.next\n      cur.next = pre\n      pre = cur\n      cur = next\n    }\n    start.next = pre\n    first.next = cur\n    return first\n  }\n};\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:\n        if head is None or k < 2:\n            return head\n        dummy = ListNode(0)\n        dummy.next = head\n        start = dummy\n        end = head\n        count = 0\n        while end:\n            count += 1\n            if count % k == 0:\n                start = self.reverse(start, end.next)\n                end = start.next\n            else:\n                end = end.next\n        return dummy.next\n\n    def reverse(self, start, end):\n        prev, curr = start, start.next\n        first = curr\n        while curr != end:\n            temp = curr.next\n            curr.next = prev\n            prev = curr\n            curr = temp\n        start.next = prev\n        first.next = curr\n        return first\n"
        }
    ]
},
"reverse-nodes-in-k-groups-en":{
    "id": "25",
    "name": "reverse-nodes-in-k-groups-en",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/25.reverse-nodes-in-k-groups-en.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass ReverseKGroupsLinkedList {\n  public ListNode reverseKGroup(ListNode head, int k) {\n      if (head == null || k == 1) {\n        return head;\n      }\n      ListNode dummy = new ListNode(0);\n      dummy.next = head;\n  \n      ListNode start = dummy;\n      ListNode end = head;\n      int count = 0;\n      while (end != null) {\n        count++;\n        // group\n        if (count % k == 0) {\n          // reverse linked list (start, end]\n          start = reverse(start, end.next);\n          end = start.next;\n        } else {\n          end = end.next;\n        }\n      }\n      return dummy.next;\n    }\n  \n     /** \n     * reverse linked list from range (start, end), return last node.\n     * for example: \n     * 0->1->2->3->4->5->6->7->8\n     * |           |\n     * start       end\n     * \n     * After call start = reverse(start, end)\n     * \n     * 0->3->2->1->4->5->6->7->8\n     *          |  |\n     *       start end\n     *       \n     * @return the reversed list's 'start' node, which is the precedence of node end\n     */\n    private ListNode reverse(ListNode start, ListNode end) {\n      ListNode curr = start.next;\n      ListNode prev = start;\n      ListNode first = curr;\n      while (curr != end){\n        ListNode temp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = temp;\n      }\n      start.next = prev;\n      first.next = curr;\n      return first;\n    }\n}\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:\n        if head is None or k < 2:\n            return head\n        dummy = ListNode(0)\n        dummy.next = head\n        start = dummy\n        end = head\n        count = 0\n        while end:\n            count += 1\n            if count % k == 0:\n                start = self.reverse(start, end.next)\n                end = start.next\n            else:\n                end = end.next\n        return dummy.next\n    \n    def reverse(self, start, end):\n        prev, curr = start, start.next\n        first = curr\n        while curr != end:\n            temp = curr.next\n            curr.next = prev\n            prev = curr\n            curr = temp\n        start.next = prev\n        first.next = curr\n        return first\n"
        }
    ]
},
"remove-duplicates-from-sorted-array":{
    "id": "26",
    "name": "remove-duplicates-from-sorted-array",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "双指针这道题如果不要求，O(n)的时间复杂度，O(1)的空间复杂度的话，会很简单。但是这道题是要求的，这种题的思路一般都是采用双指针",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果是数据是无序的，就不可以用这种方式了，从这里也可以看出排序在算法中的基础性和重要性。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "注意nums为空时的边界条件。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/26.remove-duplicates-from-sorted-array.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar removeDuplicates = function(nums) {\n    const size = nums.length;\n    if(size==0) return 0;\n    let slowP = 0;\n    for (let fastP = 0; fastP < size; fastP++) {\n        if (nums[fastP] !== nums[slowP]) {\n            slowP++;\n            nums[slowP] = nums[fastP]\n        }\n    }\n    return slowP + 1;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        if(nums.empty()) return 0;\n        int fast,slow;\n        fast=slow=0;\n        while(fast!=nums.size()){\n            if(nums[fast]==nums[slow]) fast++;\n            else {\n                slow++;\n                nums[slow]=nums[fast];\n                fast++;\n            }\n        }\n        return slow+1;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        if nums:\n            slow = 0\n            for fast in range(1, len(nums)):\n                if nums[fast] != nums[slow]:\n                    slow += 1\n                    nums[slow] = nums[fast]\n            return slow + 1\n        else:\n            return 0\n"
        }
    ]
},
"ugly-number":{
    "id": "263",
    "name": "ugly-number",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 因数分解\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数论",
            "link": null,
            "color": "blue"
        },
        {
            "text": "因数分解",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/263.ugly-number.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n  while(num % 2 === 0)   num = num / 2;\n  while(num % 3 === 0)   num = num / 3;\n  while(num % 5 === 0)   num = num / 5;\n\n  return num === 1;\n\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=263 lang=javascript\n *\n * [263] Ugly Number\n */\n/**\n * @param {number} num\n * @return {boolean}\n */\nvar isUgly = function(num) {\n  // TAG: 数论\n  if (num <= 0) return false;\n  if (num === 1) return true;\n\n  const list = [2, 3, 5];\n\n  if (list.includes(num)) return true;\n\n  for (let i of list) {\n    if (num % i === 0) return isUgly(Math.floor(num / i));\n  }\n  return false;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# 非递归写法\nclass Solution:\n    def isUgly(self, num: int) -> bool:\n        if num <= 0:\n            return False\n        for i in (2, 3, 5):\n            while num % i == 0:\n                num /= i\n        return num == 1\n"
        }
    ]
},
"perfect-squares":{
    "id": "279",
    "name": "perfect-squares",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 递归\n- 动态规划\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "如果用递归+缓存，缓存的设计很重要我的做法是key就是n，value是以n为起点，到达底端的深度。下次取出缓存的时候用当前的level+存的深度就是我们想要的level.",
            "link": null,
            "color": "blue"
        },
        {
            "text": "使用动态规划的核心点还是选和不选的问题```jsfor(leti=1;i<=n;i++){for(letj=1;j*j<=i;j++){//不选（dp[i]）还是选（dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "j*j]）dp[i]=Math.min(dp[i],dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "j*j]+1);}}```",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/279.perfect-squares.md",
    "code": [
        {
            "language": "js",
            "text": "\nconst mapper = {};\n\nfunction d(n, level) {\n  if (n === 0) return level;\n\n  let i = 1;\n  const arr = [];\n\n  while (n - i * i >= 0) {\n    const hit = mapper[n - i * i];\n    if (hit) {\n      arr.push(hit + level);\n    } else {\n      const depth = d(n - i * i, level + 1) - level;\n      mapper[n - i * i] = depth;\n      arr.push(depth + level);\n    }\n    i++;\n  }\n\n  return Math.min(...arr);\n}\n/**\n * @param {number} n\n * @return {number}\n */\nvar numSquares = function(n) {\n  return d(n, 0);\n};\n"
        },
        {
            "language": "js",
            "text": "\nfor (let i = 1; i <= n; i++) {\n  for (let j = 1; j * j <= i; j++) {\n    // 不选（dp[i]） 还是  选（dp[i - j * j]）\n    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);\n  }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=279 lang=javascript\n *\n * [279] Perfect Squares\n *\n * https://leetcode.com/problems/perfect-squares/description/\n *\n * algorithms\n * Medium (40.98%)\n * Total Accepted:    168.2K\n * Total Submissions: 408.5K\n * Testcase Example:  '12'\n *\n * Given a positive integer n, find the least number of perfect square numbers\n * (for example, 1, 4, 9, 16, ...) which sum to n.\n *\n * Example 1:\n *\n *\n * Input: n = 12\n * Output: 3\n * Explanation: 12 = 4 + 4 + 4.\n *\n * Example 2:\n *\n *\n * Input: n = 13\n * Output: 2\n * Explanation: 13 = 4 + 9.\n */\n/**\n * @param {number} n\n * @return {number}\n */\nvar numSquares = function(n) {\n  if (n <= 0) {\n    return 0;\n  }\n\n  const dp = Array(n + 1).fill(Number.MAX_VALUE);\n  dp[0] = 0;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 1; j * j <= i; j++) {\n      // 不选（dp[i]） 还是  选（dp[i - j * j]）\n      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);\n    }\n  }\n\n  return dp[n];\n};\n"
        }
    ]
},
"move-zeroes":{
    "id": "283",
    "name": "move-zeroes",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析无",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/283.move-zeroes.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar moveZeroes = function(nums) {\n    let index = 0;\n    for(let i = 0; i < nums.length; i++) {\n        const num = nums[i];\n        if (num !== 0) {\n            nums[index++] = num;\n        }\n    }\n\n    for(let i = index; i < nums.length; i++) {\n        nums[index++] = 0;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        \"\"\"\n        slow = fast = 0\n        while fast < len(nums):\n            if nums[fast] != 0:\n                nums[fast], nums[slow] = nums[slow], nums[fast]\n                slow += 1\n            fast += 1\n"
        }
    ]
},
"divide-two-integers":{
    "id": "29",
    "name": "divide-two-integers",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 二分法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二分查找",
            "link": null,
            "color": "blue"
        },
        {
            "text": "正负数的判断中，这样判断更简单。```jsconstisNegative=dividend>0!==divisor>0;```",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/29.divide-two-integers.md",
    "code": [
        {
            "language": "js",
            "text": "\n  let acc = divisor;\n  let count = 0;\n\n  while (dividend - acc >= 0) {\n    acc += divisor;\n    count++;\n  }\n\n  return count;\n\n"
        },
        {
            "language": "js",
            "text": "\nconst isNegative = dividend > 0 !== divisor > 0;\n"
        },
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=29 lang=javascript\n *\n * [29] Divide Two Integers\n */\n/**\n * @param {number} dividend\n * @param {number} divisor\n * @return {number}\n */\nvar divide = function(dividend, divisor) {\n  if (divisor === 1) return dividend;\n\n  // 这种方法很巧妙，即符号相同则为正，不同则为负\n  const isNegative = dividend > 0 !== divisor > 0;\n\n  const MAX_INTERGER = Math.pow(2, 31);\n\n  const res = helper(Math.abs(dividend), Math.abs(divisor));\n\n  // overflow\n  if (res > MAX_INTERGER - 1 || res < -1 * MAX_INTERGER) {\n    return MAX_INTERGER - 1;\n  }\n\n  return isNegative ? -1 * res : res;\n};\n\nfunction helper(dividend, divisor) {\n  // 二分法\n  if (dividend <= 0) return 0;\n  if (dividend < divisor) return 0;\n  if (divisor === 1) return dividend;\n\n  let acc = 2 * divisor;\n  let count = 1;\n\n  while (dividend - acc > 0) {\n    acc += acc;\n    count += count;\n  }\n  // 直接使用位移运算，比如acc >> 1会有问题\n  const last = dividend - Math.floor(acc / 2);\n\n  return count + helper(last, divisor);\n}\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def divide(self, dividend: int, divisor: int) -> int:\n        \"\"\"\n        二分法\n        :param int divisor\n        :param int dividend\n        :return int\n        \"\"\"\n        # 错误处理\n        if divisor == 0:\n            raise ZeroDivisionError\n        if abs(divisor) == 1:\n            result = dividend if 1 == divisor else -dividend\n            return min(2**31-1, max(-2**31, result))\n\n        # 确定结果的符号\n        sign = ((dividend >= 0) == (divisor >= 0))\n        \n        result = 0\n        # abs也可以直接写在while条件中，不过可能会多计算几次\n        _divisor = abs(divisor)\n        _dividend = abs(dividend)\n        \n        while _divisor <= _dividend:\n            r, _dividend = self._multi_divide(_divisor, _dividend)\n            result += r\n        \n        result = result if sign else -result\n\n        # 注意返回值不能超过32位有符号数的表示范围\n        return min(2**31-1, max(-2**31, result))\n    \n    def _multi_divide(self, divisor, dividend):\n        \"\"\"\n        翻倍除法，如果可以被除，则下一步除数翻倍，直至除数大于被除数，\n        返回商加总的结果与被除数的剩余值；\n        这里就不做异常处理了；\n        :param int divisor\n        :param int dividend\n        :return tuple result, left_dividend\n        \"\"\"\n        result = 0\n        times_count = 1\n        while divisor <= dividend:\n            dividend -= divisor\n            result += times_count\n            times_count += times_count\n            divisor += divisor\n        return result, dividend\n"
        }
    ]
},
"find-median-from-data-stream":{
    "id": "295",
    "name": "find-median-from-data-stream",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 堆\n- 队列\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "用两个堆（一个大顶堆，一个小顶堆）来简化时间复杂度",
            "link": null,
            "color": "blue"
        },
        {
            "text": "用优先级队列简化操作>JavaScript不像Java，C++等语言都有`优先级队列`中这种数据结构，因此大家可以使用社区的实现>个人认为没有非要纠结于优先级队列怎么实现，至少这道题不是考这个的>优先级队列的实现个人认为已经超过了这道题想考察的范畴",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/295.find-median-from-data-stream.md",
    "code": [
        {
            "language": "js",
            "text": "\nfunction findMedian(a) {\n  return a.length % 2 === 0\n    ? (a[a.length >> 1] + a[a.length >> (1 + 1)]) / 2\n    : a[a.length >> 1];\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * initialize your data structure here.\n */\nvar MedianFinder = function() {\n  this.maxHeap = [];\n  this.minHeap = [];\n};\n\nfunction minHeapify() {\n  this.minHeap.unshift(null);\n  const a = this.minHeap;\n\n  // 为了方便大家理解，这里选用了粗暴的实现\n  // 时间复杂度为O(n)\n  // 其实可以降到O(logn)， 具体细节我不想在这里讲解和实现\n  for (let i = a.length - 1; i >> 1 > 0; i--) {\n    // 自下往上堆化\n    if (a[i] < a[i >> 1]) { // 如果子元素更小，则交换位置\n      const temp = a[i];\n      this.minHeap[i] = a[i >> 1];\n      this.minHeap[i >> 1] = temp;\n    }\n  }\n  this.minHeap.shift(null);\n}\n\nfunction maxHeapify() {\n  this.maxHeap.unshift(null);\n  const a = this.maxHeap;\n\n  // 为了方便大家理解，这里选用了粗暴的实现\n  // 时间复杂度为O(n)\n  // 其实可以降到O(logn)， 具体细节我不想在这里讲解和实现\n  for (let i = a.length - 1; i >> 1 > 0; i--) {\n    // 自下往上堆化\n    if (a[i] > a[i >> 1]) { // 如果子元素更大，则交换位置\n      const temp = a[i];\n      this.maxHeap[i] = a[i >> 1];\n      this.maxHeap[i >> 1] = temp;\n    }\n  }\n  this.maxHeap.shift(null);\n}\n\n/**\n * @param {number} num\n * @return {void}\n */\nMedianFinder.prototype.addNum = function(num) {\n  // 为了大家容易理解，这部分代码写的比较冗余\n\n  // 插入\n  if (num >= (this.minHeap[0] || Number.MIN_VALUE)) {\n    this.minHeap.push(num);\n  } else {\n    this.maxHeap.push(num);\n  }\n  // 调整两个堆的节点数量平衡\n  // 使得大顶堆的数量最多大于小顶堆一个， 且一定不小于小顶堆数量\n  if (this.maxHeap.length > this.minHeap.length + 1) {\n    // 大顶堆的堆顶元素移动到小顶堆\n    this.minHeap.push(this.maxHeap.shift());\n  }\n\n  if (this.minHeap.length > this.maxHeap.length) {\n    // 小顶堆的堆顶元素移动到大顶堆\n    this.maxHeap.push(this.minHeap.shift());\n  }\n\n  // 调整堆顶元素\n  if (this.maxHeap[0] > this.minHeap[0]) {\n    const temp = this.maxHeap[0];\n    this.maxHeap[0] = this.minHeap[0];\n    this.minHeap[0] = temp;\n  }\n\n  // 堆化\n  maxHeapify.call(this);\n  minHeapify.call(this);\n};\n\n/**\n * @return {number}\n */\nMedianFinder.prototype.findMedian = function() {\n  if ((this.maxHeap.length + this.minHeap.length) % 2 === 0) {\n    return (this.minHeap[0] + this.maxHeap[0]) / 2;\n  } else {\n    return this.maxHeap[0];\n  }\n};\n\n/**\n * Your MedianFinder object will be instantiated and called as such:\n * var obj = new MedianFinder()\n * obj.addNum(num)\n * var param_2 = obj.findMedian()\n */\n"
        },
        {
            "language": "js",
            "text": "\n\nthis.heap.unshift(null);\n// ....\nthis.heap.shift(null);\n\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=295 lang=javascript\n *\n * [295] Find Median from Data Stream\n *\n * https://leetcode.com/problems/find-median-from-data-stream/description/\n *\n * algorithms\n * Hard (35.08%)\n * Total Accepted:    101.2K\n * Total Submissions: 282.4K\n * Testcase Example:  '[\"MedianFinder\",\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"]\\n[[],[1],[2],[],[3],[]]'\n *\n * Median is the middle value in an ordered integer list. If the size of the\n * list is even, there is no middle value. So the median is the mean of the two\n * middle value.\n * For example,\n *\n * [2,3,4], the median is 3\n *\n * [2,3], the median is (2 + 3) / 2 = 2.5\n *\n * Design a data structure that supports the following two operations:\n *\n *\n * void addNum(int num) - Add a integer number from the data stream to the data\n * structure.\n * double findMedian() - Return the median of all elements so far.\n *\n *\n *\n *\n * Example:\n *\n *\n * addNum(1)\n * addNum(2)\n * findMedian() -> 1.5\n * addNum(3)\n * findMedian() -> 2\n *\n *\n *\n *\n * Follow up:\n *\n *\n * If all integer numbers from the stream are between 0 and 100, how would you\n * optimize it?\n * If 99% of all integer numbers from the stream are between 0 and 100, how\n * would you optimize it?\n *\n *\n */\n/**\n * initialize your data structure here.\n */\nvar MedianFinder = function() {\n  this.maxHeap = new PriorityQueue((a, b) => a - b);\n  this.minHeap = new PriorityQueue((a, b) => b - a);\n};\n\n/**\n * @param {number} num\n * @return {void}\n */\nMedianFinder.prototype.addNum = function(num) {\n    // 我们的目标就是建立两个堆，一个大顶堆，一个小顶堆\n    // 结合中位数的特点\n    // 这两个堆需要满足:\n    // 1. 大顶堆元素都比小顶堆小（由于堆的特点其实只要比较堆顶即可）\n    // 2. 大顶堆元素不小于小顶堆，且最多比小顶堆多一个元素\n\n    // 满足上面两个条件的话，如果想要找到中位数，就比较简单了\n    // 如果两个堆数量相等（本质是总数为偶数）, 就两个堆顶元素的平均数\n    // 如果两个堆数量不相等（本质是总数为奇数）， 就取大顶堆的堆顶元素\n\n    // 问题如果保证满足上述两个特点\n\n    // 1. 保证第一点\n    this.maxHeap.enq(num);\n    // 由于小顶堆的所有数都来自大顶堆的堆顶元素（最大值）\n    // 因此可以保证第一点\n    this.minHeap.enq(this.maxHeap.deq());\n\n    // 2. 保证第二点\n    if (this.maxHeap.size() < this.minHeap.size()){\n        this.maxHeap.enq(this.minHeap.deq());\n    }\n};\n\n/**\n * @return {number}\n */\nMedianFinder.prototype.findMedian = function() {\n    if (this.maxHeap.size() == this.minHeap.size()) return (this.maxHeap.peek() + this.minHeap.peek()) /  2.0;\n    else return this.maxHeap.peek();\n};\n\n/**\n * Your MedianFinder object will be instantiated and called as such:\n * var obj = new MedianFinder()\n * obj.addNum(num)\n * var param_2 = obj.findMedian()\n */\n\n"
        }
    ]
},
"json":{
    "id": "15",
    "name": "3-sum",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 排序\n- 双指针\n- 分治\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "排序之后，用双指针",
            "link": null,
            "color": "blue"
        },
        {
            "text": "分治",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/15.3-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=15 lang=javascript\n *\n * [15] 3Sum\n *\n * https://leetcode.com/problems/3sum/description/\n *\n * algorithms\n * Medium (23.51%)\n * Total Accepted:    531.5K\n * Total Submissions: 2.2M\n * Testcase Example:  '[-1,0,1,2,-1,-4]'\n *\n * Given an array nums of n integers, are there elements a, b, c in nums such\n * that a + b + c = 0? Find all unique triplets in the array which gives the\n * sum of zero.\n *\n * Note:\n *\n * The solution set must not contain duplicate triplets.\n *\n * Example:\n *\n *\n * Given array nums = [-1, 0, 1, 2, -1, -4],\n *\n * A solution set is:\n * [\n * ⁠ [-1, 0, 1],\n * ⁠ [-1, -1, 2]\n * ]\n *\n *\n */\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar threeSum = function (nums) {\n  if (nums.length < 3) return [];\n  const list = [];\n  nums.sort((a, b) => a - b);\n  for (let i = 0; i < nums.length; i++) {\n    //nums is sorted,so it's impossible to have a sum = 0\n    if (nums[i] > 0) break;\n    // skip duplicated result without set\n    if (i > 0 && nums[i] === nums[i - 1]) continue;\n    let left = i + 1;\n    let right = nums.length - 1;\n\n    // for each index i\n    // we want to find the triplet [i, left, right] which sum to 0\n    while (left < right) {\n      // since left < right, and left > i, no need to compare i === left and i === right.\n      if (nums[left] + nums[right] + nums[i] === 0) {\n        list.push([nums[left], nums[right], nums[i]]);\n        // skip duplicated result without set\n        while (nums[left] === nums[left + 1]) {\n          left++;\n        }\n        left++;\n        // skip duplicated result without set\n        while (nums[right] === nums[right - 1]) {\n          right--;\n        }\n        right--;\n        continue;\n      } else if (nums[left] + nums[right] + nums[i] > 0) {\n        right--;\n      } else {\n        left++;\n      }\n    }\n  }\n  return list;\n};\n"
        }
    ]
},
"longestSubstringWithoutRepeatingCharacters":{
    "id": "3",
    "name": "longestSubstringWithoutRepeatingCharacters",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n- [滑动窗口](https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md)\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "1.用一个mapper记录出现过并且没有被删除的字符2.用一个滑动窗口记录当前index开始的最大的不重复的字符序列3.用res去记录目前位置最大的长度，每次滑动窗口更新就去决定是否需要更新res",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/3.longestSubstringWithoutRepeatingCharacters.md",
    "code": [
        {
            "language": "py",
            "text": "\nfrom collections import defaultdict\n\n\nclass Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        l = 0\n        ans = 0\n        counter = defaultdict(lambda: 0)\n\n        for r in range(len(s)):\n            while counter.get(s[r], 0) != 0:\n                counter[s[l]] = counter.get(s[l], 0) - 1\n                l += 1\n            counter[s[r]] += 1\n            ans = max(ans, r - l + 1)\n\n        return ans\n"
        }
    ]
},
"substring-with-concatenation-of-all-words":{
    "id": "30",
    "name": "substring-with-concatenation-of-all-words",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 字符串\n- 数组\n- 哈希表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "Counter",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/30.substring-with-concatenation-of-all-words.md",
    "code": [
        {
            "language": "py",
            "text": "\nfrom collections import Counter\n\n\nclass Solution:\n    def findSubstring(self, s: str, words: List[str]) -> List[int]:\n        if not s or not words:\n            return []\n        res = []\n        n = len(words)\n        word_len = len(words[0])\n        window_len = word_len * n\n        target = Counter(words)\n        i = 0\n        while i < len(s) - window_len + 1:\n            sliced = []\n            start = i\n            for _ in range(n):\n                sliced.append(s[start:start + word_len])\n                start += word_len\n            if Counter(sliced) == target:\n                res.append(i)\n            i += 1\n        return res\n"
        }
    ]
},
"remove-invalid-parentheses":{
    "id": "301",
    "name": "remove-invalid-parentheses",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- BFS\n- 队列\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "广度优先遍历",
            "link": null,
            "color": "blue"
        },
        {
            "text": "使用队列简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "使用一个visited的mapper，来避免遍历同样的字符串",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/301.remove-invalid-parentheses.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=301 lang=javascript\n *\n * [301] Remove Invalid Parentheses\n *\n * https://leetcode.com/problems/remove-invalid-parentheses/description/\n *\n * algorithms\n * Hard (38.52%)\n * Total Accepted:    114.3K\n * Total Submissions: 295.4K\n * Testcase Example:  '\"()())()\"'\n *\n * Remove the minimum number of invalid parentheses in order to make the input\n * string valid. Return all possible results.\n *\n * Note: The input string may contain letters other than the parentheses ( and\n * ).\n *\n * Example 1:\n *\n *\n * Input: \"()())()\"\n * Output: [\"()()()\", \"(())()\"]\n *\n *\n * Example 2:\n *\n *\n * Input: \"(a)())()\"\n * Output: [\"(a)()()\", \"(a())()\"]\n *\n *\n * Example 3:\n *\n *\n * Input: \")(\"\n * Output: [\"\"]\n *\n */\nvar isValid = function(s) {\n  let openParenthes = 0;\n  for(let i = 0; i < s.length; i++) {\n    if (s[i] === '(') {\n      openParenthes++;\n    } else if (s[i] === ')') {\n      if (openParenthes === 0) return false;\n      openParenthes--;\n    }\n  }\n  return openParenthes === 0;\n};\n/**\n * @param {string} s\n * @return {string[]}\n */\nvar removeInvalidParentheses = function(s) {\n  if (!s || s.length === 0) return [\"\"];\n  const ret = [];\n  const queue = [s];\n  const visited = {};\n  let current = null;\n  let removedParentheses = 0; // 只记录最小改动\n\n  while ((current = queue.shift())) {\n    let hit = isValid(current);\n    if (hit) {\n      if (!removedParentheses) {\n       removedParentheses =  s.length - current.length\n      }\n      if (s.length - current.length > removedParentheses) return ret.length === 0 ? [\"\"] : ret;;\n      ret.unshift(current);\n      continue;\n    }\n    for (let i = 0; i < current.length; i++) {\n      if (current[i] !== ')' && current[i] !== '(') continue;\n      const subString = current.slice(0, i).concat(current.slice(i + 1));\n      if (visited[subString]) continue;\n      visited[subString] = true;\n      queue.push(subString);\n    }\n  }\n\n  return ret.length === 0 ? [\"\"] : ret;\n};\n"
        }
    ]
},
"best-time-to-buy-and-sell-stock-with-cooldown":{
    "id": "309",
    "name": "best-time-to-buy-and-sell-stock-with-cooldown",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "多状态动态规划",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/309.best-time-to-buy-and-sell-stock-with-cooldown.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=309 lang=javascript\n *\n * [309] Best Time to Buy and Sell Stock with Cooldown\n *\n */\n/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function(prices) {\n  if (prices == null || prices.length <= 1) return 0;\n\n  // 定义状态变量\n  const buy = [];\n  const sell = [];\n  // 寻常\n  buy[0] = -prices[0];\n  buy[1] = Math.max(-prices[0], -prices[1]);\n  sell[0] = 0;\n  sell[1] = Math.max(0, prices[1] - prices[0]);\n  for (let i = 2; i < prices.length; i++) {\n    // 状态转移方程\n    // 第i天只能是买或者cooldown\n    // 如果买利润就是sell[i - 2] - prices[i], 注意这里是i - 2，不是 i-1 ，因为有cooldown的限制\n    // cooldown就是buy[i -1]\n    buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);\n    // 第i天只能是卖或者cooldown\n    // 如果卖利润就是buy[i  -1] + prices[i]\n    // cooldown就是sell[i -1]\n    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);\n  }\n\n  return Math.max(buy[prices.length - 1], sell[prices.length - 1], 0);\n};\n"
        }
    ]
},
"next-permutation":{
    "id": "31",
    "name": "next-permutation",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "写几个例子通常会帮助理解问题的规律",
            "link": null,
            "color": "blue"
        },
        {
            "text": "在有序数组中首尾指针不断交换位置即可实现reverse",
            "link": null,
            "color": "blue"
        },
        {
            "text": "找到从右边起`第一个大于nums[i]的`，并将其和nums[i]进行交换",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/31.next-permutation.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=31 lang=javascript\n *\n * [31] Next Permutation\n */\n\nfunction reverseRange(A, i, j) {\n  while (i < j) {\n    const temp = A[i];\n    A[i] = A[j];\n    A[j] = temp;\n    i++;\n    j--;\n  }\n}\n/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar nextPermutation = function(nums) {\n  // 时间复杂度O(n) 空间复杂度O(1)\n  if (nums == null || nums.length <= 1) return;\n\n  let i = nums.length - 2;\n  // 从后往前找到第一个降序的,相当于找到了我们的回溯点\n  while (i > -1 && nums[i + 1] <= nums[i]) i--;\n\n  // 如果找了就swap\n  if (i > -1) {\n    let j = nums.length - 1;\n    // 找到从右边起第一个大于nums[i]的，并将其和nums[i]进行交换\n    // 因为如果交换的数字比nums[i]还要小肯定不符合题意\n    while (nums[j] <= nums[i]) j--;\n    const temp = nums[i];\n    nums[i] = nums[j];\n    nums[j] = temp;\n  }\n\n  // 最后我们只需要将剩下的元素从左到右，依次填入当前最小的元素就可以保证是大于当前排列的最小值了\n  // [i + 1, A.length -1]的元素进行反转\n\n  reverseRange(nums, i + 1, nums.length - 1);\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nextPermutation(self, nums):\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        :param list nums\n        \"\"\"\n        # 第一步，从后往前，找到下降点\n        down_index = None\n        for i in range(len(nums)-2, -1, -1):\n            if nums[i] < nums[i+1]:\n                down_index = i\n                break\n        # 如果没有下降点，重新排列\n        if down_index is None:\n            nums.reverse()\n        # 如果有下降点\n        else:\n            # 第二步，从后往前，找到比下降点大的数，对换位置\n            for i in range(len(nums)-1, i, -1):\n                if nums[down_index] < nums[i]:\n                    nums[down_index], nums[i] = nums[i], nums[down_index]\n                    break\n            # 第三部，重新排列下降点之后的数\n            i, j = down_index+1, len(nums)-1\n            while i < j:\n                nums[i], nums[j] = nums[j], nums[i]\n                i += 1\n                j -= 1\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nextPermutation(self, nums):\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        :param list nums\n        \"\"\"\n        # 第一步，从后往前，找到下降点\n        down_index = None\n        for i in range(len(nums)-2, -1, -1):\n            if nums[i] < nums[i+1]:\n                down_index = i\n                break\n        # 如果没有下降点，重新排列\n        if down_index is None:\n            nums.reverse()\n        # 如果有下降点\n        else:\n            # 第二步，从后往前，找到比下降点大的数，对换位置\n            for i in range(len(nums)-1, i, -1):\n                if nums[down_index] < nums[i]:\n                    nums[down_index], nums[i] = nums[i], nums[down_index]\n                    break\n            # 第三步，重新排列下降点之后的数\n            i, j = down_index+1, len(nums)-1\n            while i < j:\n                nums[i], nums[j] = nums[j], nums[i]\n                i += 1\n                j -= 1\n"
        }
    ]
},
"burst-balloons":{
    "id": "312",
    "name": "burst-balloons",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/312.burst-balloons.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar maxCoins = function (nums) {\n  let res = Number.MIN_VALUE;\n  backtrack(nums, 0);\n  return res;\n  // 回溯法，状态树很大\n  function backtrack(nums, score) {\n    if (nums.length == 0) {\n      res = Math.max(res, score);\n      return;\n    }\n    for (let i = 0, n = nums.length; i < n; i++) {\n      let point =\n        (i - 1 < 0 ? 1 : nums[i - 1]) *\n        nums[i] *\n        (i + 1 >= n ? 1 : nums[i + 1]);\n      let tempNums = [].concat(nums);\n      // 做选择 在 nums 中删除元素 nums[i]\n      nums.splice(i, 1);\n      // 递归回溯\n      backtrack(nums, score + point);\n      // 撤销选择\n      nums = [...tempNums];\n    }\n  }\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar maxCoins = function (nums) {\n  let n = nums.length;\n  // 添加两侧的虚拟气球\n  let points = [1, ...nums, 1];\n  let dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0));\n  // 最后一行开始遍历,从下往上\n  for (let i = n; i >= 0; i--) {\n    // 从左往右\n    for (let j = i + 1; j < n + 2; j++) {\n      for (let k = i + 1; k < j; k++) {\n        dp[i][j] = Math.max(\n          dp[i][j],\n          points[j] * points[k] * points[i] + dp[i][k] + dp[k][j]\n        );\n      }\n    }\n  }\n  return dp[0][n + 1];\n};\n"
        }
    ]
},
"longest-valid-parentheses":{
    "id": "32",
    "name": "longest-valid-parentheses",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.第3点特征,需要检查的字符是s[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]和s[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "2",
            "link": null,
            "color": "blue"
        },
        {
            "text": "dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]],根据定义可知:i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1>=dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1],但是i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "2不一定大于dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1],因此,需要检查越界;3.第4点特征最容易遗漏,还有就是不需要检查越界,因为根据定义可知:i>=dp[i],所以dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "dp[i]]的边界情况是dp[0];",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/32.longest-valid-parentheses.md",
    "code": [
        {
            "language": "js",
            "text": "\n// 用栈来解\nvar longestValidParentheses = function(s) {\n  let stack = new Array()\n  let longest = 0\n  stack.push(-1)\n  for(let i = 0; i < s.length; i++) {\n    if (s[i] === '(') {\n      stack.push(i)\n    } else {\n      stack.pop()\n      if (stack.length === 0) {\n        stack.push(i)\n      } else {\n        longest = Math.max(longest, i - stack[stack.length - 1])\n      }\n    }\n  }\n  return longest\n};\n"
        },
        {
            "language": "py",
            "text": "\ns = '(())())'\n"
        }
    ]
},
"coin-change":{
    "id": "322",
    "name": "coin-change",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 贪心算法\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "动态规划",
            "link": null,
            "color": "blue"
        },
        {
            "text": "子问题用dp[i]来表示组成i块钱，需要最少的硬币数，那么1.第j个硬币我可以选择不拿这个时候，硬币数=dp[i]2.第j个硬币我可以选择拿这个时候，硬币数=dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "coins[j]]+1",
            "link": null,
            "color": "blue"
        },
        {
            "text": "和背包问题不同，硬币是可以拿任意个",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对于每一个dp[i]我们都选择遍历一遍coin，不断更新dp[i]",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/322.coin-change.md",
    "code": [
        {
            "language": "js",
            "text": "\n\nvar coinChange = function(coins, amount) {\n    if (amount === 0) {\n      return 0;\n    }\n    const dp = Array(amount + 1).fill(Number.MAX_VALUE)\n    dp[0] = 0;\n    for (let i = 1; i < dp.length; i++) {\n      for (let j = 0; j < coins.length; j++) {\n        if (i - coins[j] >= 0) {\n          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);\n        }\n      }\n    }\n\n    return dp[dp.length - 1] === Number.MAX_VALUE ? -1 : dp[dp.length - 1];\n\n\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        if amount < 0:\n            return - 1\n        dp = [[amount + 1 for _ in range(len(coins) + 1)]\n              for _ in range(amount + 1)]\n        # 初始化第一行为0，其他为最大值（也就是amount + 1）\n\n        for j in range(len(coins) + 1):\n            dp[0][j] = 0\n\n        for i in range(1, amount + 1):\n            for j in range(1, len(coins) + 1):\n                if i - coins[j - 1] >= 0:\n                    dp[i][j] = min(\n                        dp[i][j - 1], dp[i - coins[j - 1]][j] + 1)\n                else:\n                    dp[i][j] = dp[i][j - 1]\n\n        return -1 if dp[-1][-1] == amount + 1 else dp[-1][-1]\n "
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        dp = [amount + 1] * (amount + 1)\n        dp[0] = 0\n\n        for i in range(1, amount + 1):\n            for j in range(len(coins)):\n                if i >= coins[j]:\n                    dp[i] = min(dp[i], dp[i - coins[j]] + 1)\n\n        return -1 if dp[-1] == amount + 1 else dp[-1]\n"
        }
    ]
},
"odd-even-linked-list":{
    "id": "328",
    "name": "odd-even-linked-list",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "用虚拟节点来简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "循环的结束条件设置为`odd&&odd.next&&even&&even.next`,不应该是`odd&&even`,否则需要记录一下奇数节点的最后一个节点，复杂了操作",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/328.odd-even-linked-list.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=328 lang=javascript\n *\n * [328] Odd Even Linked List\n *\n *\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar oddEvenList = function(head) {\n  if (!head || !head.next) return head;\n\n  const dummyHead1 = {\n    next: head\n  };\n  const dummyHead2 = {\n    next: head.next\n  };\n\n  let odd = dummyHead1.next;\n  let even = dummyHead2.next;\n\n  while (odd && odd.next && even && even.next) {\n    const oddNext = odd.next.next;\n    const evenNext = even.next.next;\n\n    odd.next = oddNext;\n    even.next = evenNext;\n\n    odd = oddNext;\n    even = evenNext;\n  }\n\n  odd.next = dummyHead2.next;\n\n  return dummyHead1.next;\n};\n"
        }
    ]
},
"search-in-rotated-sorted-array":{
    "id": "33",
    "name": "search-in-rotated-sorted-array",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 二分法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二分法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "找出有序区间，然后根据target是否在有序区间舍弃一半元素",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/33.search-in-rotated-sorted-array.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=33 lang=javascript\n *\n * [33] Search in Rotated Sorted Array\n */\n/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar search = function(nums, target) {\n  // 时间复杂度：O(logn)\n  // 空间复杂度：O(1)\n  // [6,7,8,1,2,3,4,5]\n  let start = 0;\n  let end = nums.length - 1;\n\n  while (start <= end) {\n    const mid = start + ((end - start) >> 1);\n    if (nums[mid] === target) return mid;\n\n    // [start, mid]有序\n\n    // ️⚠️注意这里的等号\n    if (nums[mid] >= nums[start]) {\n      //target 在 [start, mid] 之间\n\n      // 其实target不可能等于nums[mid]， 但是为了对称，我还是加上了等号\n      if (target >= nums[start] && target <= nums[mid]) {\n        end = mid - 1;\n      } else {\n        //target 不在 [start, mid] 之间\n        start = mid + 1;\n      }\n    } else {\n      // [mid, end]有序\n\n      // target 在 [mid, end] 之间\n      if (target >= nums[mid] && target <= nums[end]) {\n        start = mid + 1;\n      } else {\n        // target 不在 [mid, end] 之间\n        end = mid - 1;\n      }\n    }\n  }\n\n  return -1;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        \"\"\"用二分法，先判断左右两边哪一边是有序的，再判断是否在有序的列表之内\"\"\"\n        if len(nums) <= 0:\n            return -1\n\n        left = 0\n        right = len(nums) - 1\n        while left < right:\n            mid = (right - left) // 2 + left\n            if nums[mid] == target:\n                return mid\n            \n            # 如果中间的值大于最左边的值，说明左边有序\n            if nums[mid] > nums[left]:\n                if nums[left] <= target <= nums[mid]:\n                    right = mid\n                else:\n                    # 这里 +1，因为上面是 <= 符号\n                    left = mid + 1\n            # 否则右边有序\n            else:\n                # 注意：这里必须是 mid+1，因为根据我们的比较方式，mid属于左边的序列\n                if nums[mid+1] <= target <= nums[right]:\n                    left = mid + 1\n                else:\n                    right = mid\n                    \n        return left if nums[left] == target else -1\n"
        }
    ]
},
"increasing-triplet-subsequence":{
    "id": "334",
    "name": "increasing-triplet-subsequence",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "维护三个变量，分别记录最小值，第二小值，第三小值。只要我们能够填满这三个变量就返回true，否则返回false",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/334.increasing-triplet-subsequence.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=334 lang=javascript\n *\n * [334] Increasing Triplet Subsequence\n *\n * https://leetcode.com/problems/increasing-triplet-subsequence/description/\n *\n * algorithms\n * Medium (39.47%)\n * Total Accepted:    89.6K\n * Total Submissions: 226.6K\n * Testcase Example:  '[1,2,3,4,5]'\n *\n * Given an unsorted array return whether an increasing subsequence of length 3\n * exists or not in the array.\n * \n * Formally the function should:\n * \n * Return true if there exists i, j, k \n * such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return\n * false.\n * \n * Note: Your algorithm should run in O(n) time complexity and O(1) space\n * complexity.\n * \n * \n * Example 1:\n * \n * \n * Input: [1,2,3,4,5]\n * Output: true\n * \n * \n *\n * Example 2:\n * \n * \n * Input: [5,4,3,2,1]\n * Output: false\n * \n * \n * \n */\n/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar increasingTriplet = function(nums) {\n    if (nums.length < 3) return false;\n    let n1 = Number.MAX_VALUE;\n    let n2 = Number.MAX_VALUE;\n\n    for(let i = 0; i < nums.length; i++) {\n        if (nums[i] <= n1) {\n            n1 = nums[i]\n        } else if (nums[i] <= n2) {\n            n2 = nums[i]\n        } else {\n            return true;\n        }\n    }\n\n    return false;\n};\n"
        }
    ]
},
"self-crossing":{
    "id": "335",
    "name": "self-crossing",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 滑动窗口\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "一定要画图辅助",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对于这种$O(1)$空间复杂度有固定的套路。常见的有：1.直接修改原数组2.滑动窗口（当前状态并不是和之前所有状态有关，而是仅和某几个有关）。我们采用的是滑动窗口。但是难点就在于我们怎么知道当前状态和哪几个有关。对于这道题来说，画图或许可以帮助你打开思路。另外面试的时候说出$O(N)$的思路也不失为一个帮助你冷静分析问题的手段。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/335.self-crossing.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def isSelfCrossing(self, x: List[int]) -> bool:\n        n = len(x)\n        if n < 4:\n            return False\n        for i in range(3, n):\n            if x[i] >= x[i - 2] and x[i - 1] <= x[i - 3]:\n                return True\n            if x[i - 1] <= x[i - 3] and x[i - 2] <= x[i]:\n                return True\n            if i > 3 and x[i - 1] == x[i - 3] and x[i] + x[i - 4] == x[i - 2]:\n                return True\n            if i > 4 and x[i] + x[i - 4] >= x[i - 2] and x[i - 1] >= x[i - 3] - x[i - 5] \\\n                    and x[i - 1] <= x[i - 3] and x[i - 2] >= x[i - 4] and x[i - 3] >= x[i - 5]:\n                return True\n        return False\n"
        }
    ]
},
"power-of-four":{
    "id": "342",
    "name": "power-of-four",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数论\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数论",
            "link": null,
            "color": "blue"
        },
        {
            "text": "2的幂次方特点（数学性质以及二进制表示）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "4的幂次方特点（数学性质以及二进制表示）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/342.power-of-four.md",
    "code": [
        {
            "language": "js",
            "text": "\nwhile (num && num % 4 == 0) {\n  num /= 4;\n}\nreturn num == 1;\n"
        },
        {
            "language": "js",
            "text": "\nreturn num > 0 && (num & (num - 1)) === 0 && (num - 1) % 3 === 0;\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=342 lang=javascript\n *\n * [342] Power of Four\n */\n/**\n * @param {number} num\n * @return {boolean}\n */\nvar isPowerOfFour = function(num) {\n  // tag: 数论\n\n  if (num === 1) return true;\n  if (num < 4) return false;\n\n  if ((num & (num - 1)) !== 0) return false;\n\n  return (num & 0x55555555) === num;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def isPowerOfFour(self, num: int) -> bool:\n        if num == 1:\n            return True\n        elif num < 4:\n            return False\n        else:\n            if not num & (num-1) == 0:\n                return False\n            else:\n                return num & 0x55555555 == num\n\n    # 另一种解法：将数字转化为二进制表示的字符串，利用字符串的相关操作进行判断\n    def isPowerOfFour(self, num: int) -> bool:\n        binary_num = bin(num)[2:]\n        return binary_num.strip('0') == '1' and len(binary_num) % 2 == 1\n"
        }
    ]
},
"integer-break":{
    "id": "343",
    "name": "integer-break",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 递归\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数学抽象",
            "link": null,
            "color": "blue"
        },
        {
            "text": "递归分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "记忆化递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/343.integer-break.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def integerBreak(self, n: int) -> int:\n        dp = [1] * (n + 1)\n        for i in range(3, n + 1):\n            for j in range(1, i):\n                dp[i] = max(j * dp[i - j], j * (i - j), dp[i])\n        return dp[n]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def integerBreak(self, n: int) -> int:\n        if n == 2: return 1\n        res = 0\n        for i in range(1, n):\n            res = max(res, max(i * self.integerBreak(n - i),i * (n - i)))\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    @lru_cache()\n    def integerBreak(self, n: int) -> int:\n        if n == 2: return 1\n        res = 0\n        for i in range(1, n):\n            res = max(res, max(i * self.integerBreak(n - i),i * (n - i)))\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def integerBreak(self, n: int) -> int:\n        dp = [1] * (n + 1)\n        for i in range(3, n + 1):\n            for j in range(1, i):\n                dp[i] = max(j * dp[i - j], j * (i - j), dp[i])\n        return dp[n]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def integerBreak(self, n: int) -> int:\n        dp = [1] * (n + 1)\n        for i in range(3, n + 1):\n            for j in range(1, i):\n                dp[i] = max(j * dp[i - j], j * (i - j), dp[i])\n        return dp[n]\n"
        }
    ]
},
"intersection-of-two-arrays":{
    "id": "349",
    "name": "intersection-of-two-arrays",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- hashtable\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析无",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/349.intersection-of-two-arrays.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=349 lang=javascript\n *\n * [349] Intersection of Two Arrays\n *\n * https://leetcode.com/problems/intersection-of-two-arrays/description/\n *\n * algorithms\n * Easy (53.11%)\n * Total Accepted:    203.6K\n * Total Submissions: 380.9K\n * Testcase Example:  '[1,2,2,1]\\n[2,2]'\n *\n * Given two arrays, write a function to compute their intersection.\n *\n * Example 1:\n *\n *\n * Input: nums1 = [1,2,2,1], nums2 = [2,2]\n * Output: [2]\n *\n *\n *\n * Example 2:\n *\n *\n * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]\n * Output: [9,4]\n *\n *\n * Note:\n *\n *\n * Each element in the result must be unique.\n * The result can be in any order.\n *\n *\n *\n *\n */\n/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number[]}\n */\nvar intersection = function(nums1, nums2) {\n    const visited = {};\n    const ret = [];\n    for(let i = 0; i < nums1.length; i++) {\n        const num = nums1[i];\n\n        visited[num] = num;\n    }\n\n    for(let i = 0; i < nums2.length; i++) {\n        const num = nums2[i];\n\n        if (visited[num] !== undefined) {\n            ret.push(num);\n            visited[num] = undefined;\n        }\n    }\n\n    return ret;\n\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        visited, result = {}, []\n        for num in nums1:\n            visited[num] = num\n        for num in nums2:\n            if num in visited:\n                result.append(num)\n                visited.pop(num)\n        return result\n\n    # 另一种解法：利用 Python 中的集合进行计算\n    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        return set(nums1) & set(nums2)\n"
        }
    ]
},
"water-and-jug-problem":{
    "id": "365",
    "name": "water-and-jug-problem",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- BFS\n- 最大公约数\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/365.water-and-jug-problem.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number} x\n * @param {number} y\n * @param {number} z\n * @return {boolean}\n */\nvar canMeasureWater = function(x, y, z) {\n  if (x + y < z) return false;\n\n  if (z === 0) return true;\n\n  if (x === 0) return y === z;\n\n  if (y === 0) return x === z;\n\n  function GCD(a, b) {\n    let min = Math.min(a, b);\n    while (min) {\n      if (a % min === 0 && b % min === 0) return min;\n      min--;\n    }\n    return 1;\n  }\n\n  return z % GCD(x, y) === 0;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def canMeasureWater(self, x: int, y: int, z: int) -> bool:\n        if x + y < z:\n            return False\n        queue = [(0, 0)]\n        seen = set((0, 0))\n\n        while(len(queue) > 0):\n            a, b = queue.pop(0)\n            if a ==z or b == z or a + b == z:\n                return True\n            states = set()\n\n            states.add((x, b))\n            states.add((a, y))\n            states.add((0, b))\n            states.add((a, 0)) \n            states.add((min(x, b + a), 0 if b < x - a else b - (x - a))) \n            states.add((0 if a + b < y else a - (y - b), min(b + a, y)))\n            for state in states:\n                if state in seen:\n                    continue;\n                queue.append(state)\n                seen.add(state)\n        return False\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def canMeasureWater(self, x: int, y: int, z: int) -> bool:\n        if x + y < z:\n            return False\n\n        if (z == 0):\n            return True\n\n        if (x == 0):\n            return y == z\n\n        if (y == 0):\n            return x == z\n\n        def GCD(a, b):\n            smaller = min(a, b)\n            while smaller:\n                if a % smaller == 0 and b % smaller == 0:\n                    return smaller\n                smaller -= 1\n\n        return z % GCD(x, y) == 0\n"
        },
        {
            "language": "py",
            "text": "\ndef GCD(a, b):\n    if b == 0: return a\n    return GCD(b, a % b)\n"
        }
    ]
},
"sum-of-two-integers":{
    "id": "371",
    "name": "sum-of-two-integers",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 位运算\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "异或是一种不进位的加减法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "求与之后左移一位来可以表示进位",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/371.sum-of-two-integers.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=371 lang=javascript\n *\n * [371] Sum of Two Integers\n */\n/**\n * @param {number} a\n * @param {number} b\n * @return {number}\n */\nvar getSum = function(a, b) {\n    if (a === 0) return b;\n\n    if (b === 0) return a;\n\n    return getSum(a ^ b, (a & b) << 1);\n};\n"
        }
    ]
},
"kth-smallest-element-in-a-sorted-matrix":{
    "id": "378",
    "name": "kth-smallest-element-in-a-sorted-matrix",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 二分查找\n- 堆\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二分查找",
            "link": null,
            "color": "blue"
        },
        {
            "text": "有序矩阵的套路（文章末尾还有一道有序矩阵的题目）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "堆（优先级队列）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/378.kth-smallest-element-in-a-sorted-matrix.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=378 lang=javascript\n *\n * [378] Kth Smallest Element in a Sorted Matrix\n */\nfunction notGreaterCount(matrix, target) {\n  // 等价于在matrix 中搜索mid，搜索的过程中利用有序的性质记录比mid小的元素个数\n\n  // 我们选择左下角，作为开始元素\n  let curRow = 0;\n  // 多少列\n  const COL_COUNT = matrix[0].length;\n  // 最后一列的索引\n  const LAST_COL = COL_COUNT - 1;\n  let res = 0;\n\n  while (curRow < matrix.length) {\n    // 比较最后一列的数据和target的大小\n    if (matrix[curRow][LAST_COL] < target) {\n      res += COL_COUNT;\n    } else {\n      let i = COL_COUNT - 1;\n      while (i < COL_COUNT && matrix[curRow][i] > target) {\n        i--;\n      }\n      // 注意这里要加1\n      res += i + 1;\n    }\n    curRow++;\n  }\n\n  return res;\n}\n/**\n * @param {number[][]} matrix\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function(matrix, k) {\n  if (matrix.length < 1) return null;\n  let start = matrix[0][0];\n  let end = matrix[matrix.length - 1][matrix[0].length - 1];\n  while (start < end) {\n    const mid = start + ((end - start) >> 1);\n    const count = notGreaterCount(matrix, mid);\n    if (count < k) start = mid + 1;\n    else end = mid;\n  }\n  // 返回start,mid, end 都一样\n  return start;\n};\n"
        }
    ]
},
"insert-delete-getrandom-o1":{
    "id": "380",
    "name": "insert-delete-getrandom-o1",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 哈希表\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数组",
            "link": null,
            "color": "blue"
        },
        {
            "text": "哈希表",
            "link": null,
            "color": "blue"
        },
        {
            "text": "数组+哈希表",
            "link": null,
            "color": "blue"
        },
        {
            "text": "基本算法时间复杂度分析",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/380.insert-delete-getrandom-o1.md",
    "code": [
        {
            "language": "py",
            "text": "\nfrom random import random\n\n\nclass RandomizedSet:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.data = dict()\n        self.arr = []\n        self.n = 0\n\n    def insert(self, val: int) -> bool:\n        \"\"\"\n        Inserts a value to the set. Returns true if the set did not already contain the specified element.\n        \"\"\"\n        if val in self.data:\n            return False\n        self.data[val] = self.n\n        self.arr.append(val)\n        self.n += 1\n\n        return True\n\n    def remove(self, val: int) -> bool:\n        \"\"\"\n        Removes a value from the set. Returns true if the set contained the specified element.\n        \"\"\"\n        if val not in self.data:\n            return False\n        i = self.data[val]\n        # 更新data\n        self.data[self.arr[-1]] = i\n        self.data.pop(val)\n        # 更新arr\n        self.arr[i] = self.arr[-1]\n        # 删除最后一项\n        self.arr.pop()\n        self.n -= 1\n\n        return True\n\n    def getRandom(self) -> int:\n        \"\"\"\n        Get a random element from the set.\n        \"\"\"\n\n        return self.arr[int(random() * self.n)]\n\n\n# Your RandomizedSet object will be instantiated and called as such:\n# obj = RandomizedSet()\n# param_1 = obj.insert(val)\n# param_2 = obj.remove(val)\n# param_3 = obj.getRandom()\n"
        }
    ]
},
"combination-sum":{
    "id": "39",
    "name": "combination-sum",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/39.combination-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=39 lang=javascript\n *\n * [39] Combination Sum\n *\n * https://leetcode.com/problems/combination-sum/description/\n *\n * algorithms\n * Medium (46.89%)\n * Total Accepted:    326.7K\n * Total Submissions: 684.2K\n * Testcase Example:  '[2,3,6,7]\\n7'\n *\n * Given a set of candidate numbers (candidates) (without duplicates) and a\n * target number (target), find all unique combinations in candidates where the\n * candidate numbers sums to target.\n *\n * The same repeated number may be chosen from candidates unlimited number of\n * times.\n *\n * Note:\n *\n *\n * All numbers (including target) will be positive integers.\n * The solution set must not contain duplicate combinations.\n *\n *\n * Example 1:\n *\n *\n * Input: candidates = [2,3,6,7], target = 7,\n * A solution set is:\n * [\n * ⁠ [7],\n * ⁠ [2,2,3]\n * ]\n *\n *\n * Example 2:\n *\n *\n * Input: candidates = [2,3,5], target = 8,\n * A solution set is:\n * [\n * [2,2,2,2],\n * [2,3,3],\n * [3,5]\n * ]\n *\n */\n\nfunction backtrack(list, tempList, nums, remain, start) {\n  if (remain < 0) return;\n  else if (remain === 0) return list.push([...tempList]);\n  for (let i = start; i < nums.length; i++) {\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums, remain - nums[i], i); // 数字可以重复使用， i + 1代表不可以重复利用\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nvar combinationSum = function(candidates, target) {\n  const list = [];\n  backtrack(list, [], candidates.sort((a, b) => a - b), target, 0);\n  return list;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        \"\"\"\n        回溯法，层层递减，得到符合条件的路径就加入结果集中，超出则剪枝；\n        主要是要注意一些细节，避免重复等；\n        \"\"\"\n        size = len(candidates)\n        if size <= 0:\n            return []\n        \n        # 先排序，便于后面剪枝\n        candidates.sort()\n        \n        path = []\n        res = []\n        self._find_path(target, path, res, candidates, 0, size)\n        \n        return res\n        \n    def _find_path(self, target, path, res, candidates, begin, size):\n        \"\"\"沿着路径往下走\"\"\"\n        if target == 0:\n            res.append(path.copy())\n        else:\n            for i in range(begin, size):\n                left_num = target - candidates[i]\n                # 如果剩余值为负数，说明超过了，剪枝\n                if left_num < 0:\n                    break\n                # 否则把当前值加入路径\n                path.append(candidates[i])\n                # 为避免重复解，我们把比当前值小的参数也从下一次寻找中剔除，\n                # 因为根据他们得出的解一定在之前就找到过了\n                self._find_path(left_num, path, res, candidates, i, size)\n                # 记得把当前值移出路径，才能进入下一个值的路径\n                path.pop()\n"
        }
    ]
},
"json":{
    "id": "454",
    "name": "4-sum-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- hashTable\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "空间换时间",
            "link": null,
            "color": "blue"
        },
        {
            "text": "两两分组，求出两两结合能够得出的可能数，然后合并即可。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/454.4-sum-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n/*\n * @lc app=leetcode id=454 lang=javascript\n *\n * [454] 4Sum II\n *\n * https://leetcode.com/problems/4sum-ii/description/\n/**\n * @param {number[]} A\n * @param {number[]} B\n * @param {number[]} C\n * @param {number[]} D\n * @return {number}\n */\nvar fourSumCount = function(A, B, C, D) {\n  const sumMapper = {};\n  let res = 0;\n  for (let i = 0; i < A.length; i++) {\n    for (let j = 0; j < B.length; j++) {\n        sumMapper[A[i] + B[j]] = (sumMapper[A[i] + B[j]] || 0) + 1;\n    }\n  }\n\n  for (let i = 0; i < C.length; i++) {\n    for (let j = 0; j < D.length; j++) {\n        res += sumMapper[- (C[i] + D[j])] || 0;\n    }\n  }\n\n  return res;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:\n        mapper = {}\n        res = 0\n        for i in A:\n            for j in B:\n                mapper[i + j] = mapper.get(i + j, 0) + 1\n        \n        for i in C:\n            for j in D:\n                res += mapper.get(-1 * (i + j), 0)\n        return res\n "
        }
    ]
},
"median-of-two-sorted-array":{
    "id": "4",
    "name": "median-of-two-sorted-array",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 中位数\n- 分治法\n- 二分查找\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.暴力求解，在线性时间内merge两个排好序的数组成一个数组。2.二分查找，关键点在于",
            "link": null,
            "color": "blue"
        },
        {
            "text": "要partition两个排好序的数组成左右两等份，partition需要满足`len(Aleft)+len(Bleft)=(m+n+1)/2",
            "link": null,
            "color": "blue"
        },
        {
            "text": "m是数组A的长度，n是数组B的长度`",
            "link": null,
            "color": "blue"
        },
        {
            "text": "并且partition后A左边最大(`maxLeftA`),A右边最小（`minRightA`),B左边最大（`maxLeftB`),B右边最小（`minRightB`)满足`(maxLeftA<=minRightB&&maxLeftB<=minRightA)`有了这两个条件，那么median就在这四个数中，根据奇数或者是偶数，```奇数：median=max(maxLeftA,maxLeftB)偶数：median=(max(maxLeftA,maxLeftB)+min(minRightA,minRightB))/2```",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/4.median-of-two-sorted-array.md",
    "code": [
        {
            "language": "java",
            "text": " []\nclass MedianTwoSortedArrayBruteForce {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n      int[] newArr = mergeTwoSortedArray(nums1, nums2);\n      int n = newArr.length;\n      if (n % 2 == 0) {\n        // even\n        return (double) (newArr[n / 2] + newArr[n / 2 - 1]) / 2;\n      } else {\n        // odd\n        return (double) newArr[n / 2];\n      }\n    }\n    private int[] mergeTwoSortedArray(int[] nums1, int[] nums2) {\n      int m = nums1.length;\n      int n = nums2.length;\n      int[] res = new int[m + n];\n      int i = 0;\n      int j = 0;\n      int idx = 0;\n      while (i < m && j < n) {\n        if (nums1[i] <= nums2[j]) {\n          res[idx++] = nums1[i++];\n        } else {\n          res[idx++] = nums2[j++];\n        }\n      }\n      while (i < m) {\n        res[idx++] = nums1[i++];\n      }\n      while (j < n) {\n        res[idx++] = nums2[j++];\n      }\n      return res;\n    }\n}\n"
        },
        {
            "language": "java",
            "text": " []\nclass MedianSortedTwoArrayBinarySearch {\n  public static double findMedianSortedArraysBinarySearch(int[] nums1, int[] nums2) {\n     // do binary search for shorter length array, make sure time complexity log(min(m,n)).\n     if (nums1.length > nums2.length) {\n        return findMedianSortedArraysBinarySearch(nums2, nums1);\n      }\n      int m = nums1.length;\n      int n = nums2.length;\n      int lo = 0;\n      int hi = m;\n      while (lo <= hi) {\n        // partition A position i\n        int i = lo + (hi - lo) / 2;\n        // partition B position j\n        int j = (m + n + 1) / 2 - i;\n\n        int maxLeftA = i == 0 ? Integer.MIN_VALUE : nums1[i - 1];\n        int minRightA = i == m ? Integer.MAX_VALUE : nums1[i];\n\n        int maxLeftB = j == 0 ? Integer.MIN_VALUE : nums2[j - 1];\n        int minRightB = j == n ? Integer.MAX_VALUE : nums2[j];\n\n        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {\n          // total length is even\n          if ((m + n) % 2 == 0) {\n            return (double) (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;\n          } else {\n            // total length is odd\n            return (double) Math.max(maxLeftA, maxLeftB);\n          }\n        } else if (maxLeftA > minRightB) {\n          // binary search left half\n          hi = i - 1;\n        } else {\n          // binary search right half\n          lo = i + 1;\n        }\n      }\n      return 0.0;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": " []\n/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nvar findMedianSortedArrays = function (nums1, nums2) {\n  // 归并排序\n  const merged = [];\n  let i = 0;\n  let j = 0;\n  while (i < nums1.length && j < nums2.length) {\n    if (nums1[i] < nums2[j]) {\n      merged.push(nums1[i++]);\n    } else {\n      merged.push(nums2[j++]);\n    }\n  }\n  while (i < nums1.length) {\n    merged.push(nums1[i++]);\n  }\n  while (j < nums2.length) {\n    merged.push(nums2[j++]);\n  }\n\n  const { length } = merged;\n  return length % 2 === 1\n    ? merged[Math.floor(length / 2)]\n    : (merged[length / 2] + merged[length / 2 - 1]) / 2;\n};\n"
        },
        {
            "language": "js",
            "text": " []\n/**\n * 二分解法\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nvar findMedianSortedArrays = function (nums1, nums2) {\n  // make sure to do binary search for shorten array\n  if (nums1.length > nums2.length) {\n    [nums1, nums2] = [nums2, nums1];\n  }\n  const m = nums1.length;\n  const n = nums2.length;\n  let low = 0;\n  let high = m;\n  while (low <= high) {\n    const i = low + Math.floor((high - low) / 2);\n    const j = Math.floor((m + n + 1) / 2) - i;\n\n    const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];\n    const minRightA = i === m ? Infinity : nums1[i];\n    const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];\n    const minRightB = j === n ? Infinity : nums2[j];\n\n    if (maxLeftA <= minRightB && minRightA >= maxLeftB) {\n      return (m + n) % 2 === 1\n        ? Math.max(maxLeftA, maxLeftB)\n        : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;\n    } else if (maxLeftA > minRightB) {\n      high = i - 1;\n    } else {\n      low = low + 1;\n    }\n  }\n};\n"
        }
    ]
},
"combination-sum-ii":{
    "id": "40",
    "name": "combination-sum-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/40.combination-sum-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=40 lang=javascript\n *\n * [40] Combination Sum II\n *\n * https://leetcode.com/problems/combination-sum-ii/description/\n *\n * algorithms\n * Medium (40.31%)\n * Total Accepted:    212.8K\n * Total Submissions: 519K\n * Testcase Example:  '[10,1,2,7,6,1,5]\\n8'\n *\n * Given a collection of candidate numbers (candidates) and a target number\n * (target), find all unique combinations in candidates where the candidate\n * numbers sums to target.\n * \n * Each number in candidates may only be used once in the combination.\n * \n * Note:\n * \n * \n * All numbers (including target) will be positive integers.\n * The solution set must not contain duplicate combinations.\n * \n * \n * Example 1:\n * \n * \n * Input: candidates = [10,1,2,7,6,1,5], target = 8,\n * A solution set is:\n * [\n * ⁠ [1, 7],\n * ⁠ [1, 2, 5],\n * ⁠ [2, 6],\n * ⁠ [1, 1, 6]\n * ]\n * \n * \n * Example 2:\n * \n * \n * Input: candidates = [2,5,2,1,2], target = 5,\n * A solution set is:\n * [\n * [1,2,2],\n * [5]\n * ]\n * \n * \n */\nfunction backtrack(list, tempList, nums, remain, start) {\n    if (remain < 0) return;\n    else if (remain === 0) return list.push([...tempList]);\n    for (let i = start; i < nums.length; i++) {\n      // 和39.combination-sum 的其中一个区别就是这道题candidates可能有重复\n      // 代码表示就是下面这一行\n      if(i > start && nums[i] == nums[i-1]) continue; // skip duplicates\n      tempList.push(nums[i]);\n      backtrack(list, tempList, nums, remain - nums[i], i + 1); // i + 1代表不可以重复利用， i 代表数字可以重复使用 \n      tempList.pop();\n    }\n  }\n/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nvar combinationSum2 = function(candidates, target) {\n    const list = [];\n    backtrack(list, [], candidates.sort((a, b) => a - b), target, 0);\n    return list;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:\n        \"\"\"\n        与39题的区别是不能重用元素，而元素可能有重复；\n        不能重用好解决，回溯的index往下一个就行；\n        元素可能有重复，就让结果的去重麻烦一些；\n        \"\"\"\n        size = len(candidates)\n        if size == 0:\n            return []\n        \n        # 还是先排序，主要是方便去重\n        candidates.sort()\n        \n        path = []\n        res = []\n        self._find_path(candidates, path, res, target, 0, size)\n        \n        return res\n    \n    def _find_path(self, candidates, path, res, target, begin, size):\n        if target == 0:\n            res.append(path.copy())\n        else:\n            for i in range(begin, size):\n                left_num = target - candidates[i]\n                if left_num < 0:\n                    break\n                # 如果存在重复的元素，前一个元素已经遍历了后一个元素与之后元素组合的所有可能\n                if i > begin and candidates[i] == candidates[i-1]:\n                    continue\n                path.append(candidates[i])\n                # 开始的 index 往后移了一格\n                self._find_path(candidates, path, res, left_num, i+1, size)\n                path.pop()\n"
        }
    ]
},
"partition-equal-subset-sum":{
    "id": "416",
    "name": "partition-equal-subset-sum",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- DFS\n- 动态规划\n \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/416.partition-equal-subset-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar canPartition = function (nums) {\n  let sum = nums.reduce((acc, num) => acc + num, 0);\n  if (sum % 2) {\n    return false;\n  }\n  sum = sum / 2;\n  return dfs(nums, sum, 0);\n};\n\nfunction dfs(nums, target, cur) {\n  if (target < 0 || cur > nums.length) {\n    return false;\n  }\n  return (\n    target === 0 ||\n    dfs(nums, target - nums[cur], cur + 1) ||\n    dfs(nums, target, cur + 1)\n  );\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar canPartition = function (nums) {\n  let sum = nums.reduce((acc, num) => acc + num, 0);\n  if (sum % 2) {\n    return false;\n  }\n  sum = sum / 2;\n  nums = nums.sort((a, b) => b - a);\n  if (sum < nums[0]) {\n    return false;\n  }\n  return dfs(nums, sum, sum, 0);\n};\n\nfunction dfs(nums, pickRemain, discardRemain, cur) {\n  if (pickRemain === 0 || discardRemain === 0) {\n    return true;\n  }\n\n  if (pickRemain < 0 || discardRemain < 0 || cur > nums.length) {\n    return false;\n  }\n\n  return (\n    dfs(nums, pickRemain - nums[cur], discardRemain, cur + 1) ||\n    dfs(nums, pickRemain, discardRemain - nums[cur], cur + 1)\n  );\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar canPartition = function (nums) {\n  let sum = nums.reduce((acc, num) => acc + num, 0);\n  if (sum % 2) {\n    return false;\n  } else {\n    sum = sum / 2;\n  }\n\n  const dp = Array.from(nums).map(() =>\n    Array.from({ length: sum + 1 }).fill(false)\n  );\n\n  for (let i = 0; i < nums.length; i++) {\n    dp[i][0] = true;\n  }\n\n  for (let i = 0; i < dp.length - 1; i++) {\n    for (let j = 0; j < dp[0].length; j++) {\n      dp[i + 1][j] =\n        j - nums[i] >= 0 ? dp[i][j] || dp[i][j - nums[i]] : dp[i][j];\n    }\n  }\n\n  return dp[nums.length - 1][sum];\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar canPartition = function (nums) {\n  let sum = nums.reduce((acc, num) => acc + num, 0);\n  if (sum % 2) {\n    return false;\n  }\n  sum = sum / 2;\n  const dp = Array.from({ length: sum + 1 }).fill(false);\n  dp[0] = true;\n\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = sum; j > 0; j--) {\n      dp[j] = dp[j] || (j - nums[i] >= 0 && dp[j - nums[i]]);\n    }\n  }\n\n  return dp[sum];\n};\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number} amount\n * @param {number[]} coins\n * @return {number}\n */\nvar change = function (amount, coins) {\n  const dp = Array.from({ length: amount + 1 }).fill(0);\n  dp[0] = 1;\n  for (let i = 0; i < coins.length; i++) {\n    for (let j = 1; j <= amount; j++) {\n      dp[j] = dp[j] + (j - coins[i] >= 0 ? dp[j - coins[i]] : 0);\n    }\n  }\n  return dp[amount];\n};\n"
        }
    ]
},
"trapping-rain-water":{
    "id": "42",
    "name": "trapping-rain-water",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [
        {
            "text": "建模`h[i]=Math.min(左边柱子最大值,右边柱子最大值)`(h为下雨之后的水位)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/42.trapping-rain-water.md",
    "code": [
        {
            "language": "js",
            "text": "\n\nfor(let i = 0; i < height.length; i++) {\n    area += (h[i] - height[i]) * 1; // h为下雨之后的水位\n}\n\n"
        },
        {
            "language": "js",
            "text": "\n\n/*\n * @lc app=leetcode id=42 lang=javascript\n *\n * [42] Trapping Rain Water\n *\n */\n/**\n * @param {number[]} height\n * @return {number}\n */\nvar trap = function(height) {\n    let max = 0;\n    let volumn = 0;\n    const leftMax = [];\n    const rightMax = [];\n\n    for(let i = 0; i < height.length; i++) {\n        leftMax[i] = max = Math.max(height[i], max);\n    }\n\n    max = 0;\n\n    for(let i = height.length - 1; i >= 0; i--) {\n        rightMax[i] = max = Math.max(height[i], max);\n    }\n\n    for(let i = 0; i < height.length; i++) {\n        volumn = volumn +  Math.min(leftMax[i], rightMax[i]) - height[i]\n    }\n\n    return volumn;\n};\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def trap(self, heights: List[int]) -> int:\n        n = len(heights)\n        l, r = [0] * (n + 1), [0] * (n + 1)\n        ans = 0\n        for i in range(1, len(heights) + 1):\n            l[i] = max(l[i - 1], heights[i - 1])\n        for i in range(len(heights) - 1, 0, -1):\n            r[i] = max(r[i + 1], heights[i])\n        for i in range(len(heights)):\n            ans += max(0, min(l[i + 1], r[i]) - heights[i])\n        return ans     \n"
        }
    ]
},
"path-sum-iii":{
    "id": "437",
    "name": "path-sum-iii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- hashmap\n \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "通过hashmap，以时间换空间",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对于这种连续的元素求和问题，有一个共同的思路，可以参考[这道题目](./560.subarray",
            "link": null,
            "color": "blue"
        },
        {
            "text": "sum",
            "link": null,
            "color": "blue"
        },
        {
            "text": "equals",
            "link": null,
            "color": "blue"
        },
        {
            "text": "k.md)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/437.path-sum-iii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n// the number of the paths starting from self\nfunction helper(root, sum) {\n  if (root === null) return 0;\n  const l = helper(root.left, sum - root.val);\n  const r = helper(root.right, sum - root.val);\n\n  return l + r + (root.val === sum ? 1 : 0);\n}\n/**\n * @param {TreeNode} root\n * @param {number} sum\n * @return {number}\n */\nvar pathSum = function(root, sum) {\n// 空间复杂度O(n) 时间复杂度介于O(nlogn) 和 O(n^2)\n  // tag: dfs tree\n  if (root === null) return 0;\n  // the number of the paths starting from self\n  const self = helper(root, sum);\n  // we don't know the answer, so we just pass it down\n  const l = pathSum(root.left, sum);\n  // we don't know the answer, so we just pass it down\n  const r = pathSum(root.right, sum);\n\n  return self + l + r;\n};\n\n"
        },
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=437 lang=javascript\n *\n * [437] Path Sum III\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\nfunction helper(root, acc, target, hashmap) {\n  // see also : https://leetcode.com/problems/subarray-sum-equals-k/\n\n  if (root === null) return 0;\n  let count = 0;\n  acc += root.val;\n  if (acc === target) count++;\n  if (hashmap[acc - target] !== void 0) {\n    count += hashmap[acc - target];\n  }\n  if (hashmap[acc] === void 0) {\n    hashmap[acc] = 1;\n  } else {\n    hashmap[acc] += 1;\n  }\n  const res =\n    count +\n    helper(root.left, acc, target, hashmap) +\n    helper(root.right, acc, target, hashmap);\n\n    // 这里要注意别忘记了\n    hashmap[acc] = hashmap[acc] - 1;\n\n    return res;\n}\n\nvar pathSum = function(root, sum) {\n  // 时间复杂度和空间复杂度都是O(n)\n  const hashmap = {};\n  return helper(root, 0, sum, hashmap);\n};\n"
        }
    ]
},
"add-two-numbers-ii":{
    "id": "445",
    "name": "add-two-numbers-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n- 栈\n \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "栈的基本操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "carried变量记录进位",
            "link": null,
            "color": "blue"
        },
        {
            "text": "循环的终止条件设置成`stack.length>0`可以简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "注意特殊情况，比如1+99=100",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/445.add-two-numbers-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=445 lang=javascript\n *\n * [445] Add Two Numbers II\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function(l1, l2) {\n  const stack1 = [];\n  const stack2 = [];\n  const stack = [];\n\n  let cur1 = l1;\n  let cur2 = l2;\n  let curried = 0;\n\n  while (cur1) {\n    stack1.push(cur1.val);\n    cur1 = cur1.next;\n  }\n\n  while (cur2) {\n    stack2.push(cur2.val);\n    cur2 = cur2.next;\n  }\n\n  let a = null;\n  let b = null;\n\n  while (stack1.length > 0 || stack2.length > 0) {\n    a = Number(stack1.pop()) || 0;\n    b = Number(stack2.pop()) || 0;\n\n    stack.push((a + b + curried) % 10);\n\n    if (a + b + curried >= 10) {\n      curried = 1;\n    } else {\n      curried = 0;\n    }\n  }\n\n  if (curried === 1) {\n    stack.push(1);\n  }\n\n  const dummy = {};\n\n  let current = dummy;\n\n  while (stack.length > 0) {\n    current.next = {\n      val: stack.pop(),\n      next: null\n    };\n\n    current = current.next;\n  }\n\n  return dummy.next;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:\n        def listToStack(l: ListNode) -> list:\n            stack, c = [], l\n            while c:\n                stack.append(c.val)\n                c = c.next\n            return stack\n            \n        # transfer l1 and l2 into stacks\n        stack1, stack2 = listToStack(l1), listToStack(l2)\n            \n        # add stack1 and stack2\n        diff = abs(len(stack1) - len(stack2))\n        stack1 = ([0]*diff + stack1 if len(stack1) < len(stack2) else stack1)\n        stack2 = ([0]*diff + stack2 if len(stack2) < len(stack1) else stack2)\n        stack3 = [x + y for x, y in zip(stack1, stack2)]\n        \n        # calculate carry for each item in stack3 and add one to the item before it\n        carry = 0\n        for i, val in enumerate(stack3[::-1]):\n            index = len(stack3) - i - 1\n            carry, stack3[index] = divmod(val + carry, 10)\n            if carry and index == 0: \n                stack3 = [1] + stack3\n            elif carry:\n                stack3[index - 1] += 1\n        \n        # transfer stack3 to a linkedList\n        result = ListNode(0)\n        c = result\n        for item in stack3:\n            c.next = ListNode(item)\n            c = c.next\n        \n        return result.next\n"
        }
    ]
},
"4-sum-ii":{
    "id": "454",
    "name": "4-sum-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- hashTable\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "空间换时间",
            "link": null,
            "color": "blue"
        },
        {
            "text": "两两分组，求出两两结合能够得出的可能数，然后合并即可。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/454.4-sum-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n/*\n * @lc app=leetcode id=454 lang=javascript\n *\n * [454] 4Sum II\n *\n * https://leetcode.com/problems/4sum-ii/description/\n/**\n * @param {number[]} A\n * @param {number[]} B\n * @param {number[]} C\n * @param {number[]} D\n * @return {number}\n */\nvar fourSumCount = function(A, B, C, D) {\n  const sumMapper = {};\n  let res = 0;\n  for (let i = 0; i < A.length; i++) {\n    for (let j = 0; j < B.length; j++) {\n        sumMapper[A[i] + B[j]] = (sumMapper[A[i] + B[j]] || 0) + 1;\n    }\n  }\n\n  for (let i = 0; i < C.length; i++) {\n    for (let j = 0; j < D.length; j++) {\n        res += sumMapper[- (C[i] + D[j])] || 0;\n    }\n  }\n\n  return res;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:\n        mapper = {}\n        res = 0\n        for i in A:\n            for j in B:\n                mapper[i + j] = mapper.get(i + j, 0) + 1\n        \n        for i in C:\n            for j in D:\n                res += mapper.get(-1 * (i + j), 0)\n        return res\n "
        }
    ]
},
"AssignCookies":{
    "id": "455",
    "name": "AssignCookies",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 贪心算法\n- 双指针求解\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "将需求因子g和s分别从小到大进行排序，使用贪心思想，配合双指针，每个饼干只尝试一次，成功则换下一个孩子来尝试。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/455.AssignCookies.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} g\n * @param {number[]} s\n * @return {number}\n */\nconst findContentChildren = function (g, s) {\n    g = g.sort((a, b) => a - b);\n    s = s.sort((a, b) => a - b);\n    let gi = 0; // 胃口值\n    let sj = 0; // 饼干尺寸\n    let res = 0;\n    while (gi < g.length && sj < s.length) {\n        // 当饼干 sj >= 胃口 gi 时，饼干满足胃口，更新满足的孩子数并移动指针\n        if (s[sj] >= g[gi]) {\n            gi++;\n            sj++;\n            res++;\n        } else {\n            // 当饼干 sj < 胃口 gi 时，饼干不能满足胃口，需要换大的\n            sj++;\n        }\n    }\n    return res;\n};\n"
        }
    ]
},
"permutations":{
    "id": "46",
    "name": "permutations",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/46.permutations.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=46 lang=javascript\n *\n * [46] Permutations\n *\n * https://leetcode.com/problems/permutations/description/\n *\n * algorithms\n * Medium (53.60%)\n * Total Accepted:    344.6K\n * Total Submissions: 642.9K\n * Testcase Example:  '[1,2,3]'\n *\n * Given a collection of distinct integers, return all possible permutations.\n *\n * Example:\n *\n *\n * Input: [1,2,3]\n * Output:\n * [\n * ⁠ [1,2,3],\n * ⁠ [1,3,2],\n * ⁠ [2,1,3],\n * ⁠ [2,3,1],\n * ⁠ [3,1,2],\n * ⁠ [3,2,1]\n * ]\n *\n *\n */\nfunction backtrack(list, tempList, nums) {\n  if (tempList.length === nums.length) return list.push([...tempList]);\n  for (let i = 0; i < nums.length; i++) {\n    if (tempList.includes(nums[i])) continue;\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums);\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar permute = function (nums) {\n  const list = [];\n  backtrack(list, [], nums);\n  return list;\n};\n"
        }
    ]
},
"lfu-cache":{
    "id": "460",
    "name": "lfu-cache",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n- HashMap\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析用两个`Map`分别保存`nodeMap{key,node}`和`freqMap{frequent,DoublyLinkedList}`。实现`get`和`put`操作都是`O(1)`的时间复杂度。可以用Java自带的一些数据结构，比如HashLinkedHashSet，这样就不需要自己自建Node，DoublelyLinkedList。可以很大程度的缩减代码量。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/460.lfu-cache.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class LC460LFUCache {\n  class Node {\n    int key, val, freq;\n    Node prev, next;\n\n    Node(int key, int val) {\n      this.key = key;\n      this.val = val;\n      freq = 1;\n    }\n  }\n\n  class DoubleLinkedList {\n    private Node head;\n    private Node tail;\n    private int size;\n\n    DoubleLinkedList() {\n      head = new Node(0, 0);\n      tail = new Node(0, 0);\n      head.next = tail;\n      tail.prev = head;\n    }\n\n    void add(Node node) {\n      head.next.prev = node;\n      node.next = head.next;\n      node.prev = head;\n      head.next = node;\n      size++;\n    }\n\n    void remove(Node node) {\n      node.prev.next = node.next;\n      node.next.prev = node.prev;\n      size--;\n    }\n\n    // always remove last node if last node exists\n    Node removeLast() {\n      if (size > 0) {\n        Node node = tail.prev;\n        remove(node);\n        return node;\n      } else return null;\n    }\n  }\n\n  // cache capacity\n  private int capacity;\n  // min frequent\n  private int minFreq;\n  Map<Integer, Node> nodeMap;\n  Map<Integer, DoubleLinkedList> freqMap;\n  public LC460LFUCache(int capacity) {\n    this.minFreq = 0;\n    this.capacity = capacity;\n    nodeMap = new HashMap<>();\n    freqMap = new HashMap<>();\n  }\n\n  public int get(int key) {\n    Node node = nodeMap.get(key);\n    if (node == null) return -1;\n    update(node);\n    return node.val;\n  }\n\n  public void put(int key, int value) {\n    if (capacity == 0) return;\n    Node node;\n    if (nodeMap.containsKey(key)) {\n      node = nodeMap.get(key);\n      node.val = value;\n      update(node);\n    } else {\n      node = new Node(key, value);\n      nodeMap.put(key, node);\n      if (nodeMap.size() == capacity) {\n        DoubleLinkedList lastList = freqMap.get(minFreq);\n        nodeMap.remove(lastList.removeLast().key);\n      }\n      minFreq = 1;\n      DoubleLinkedList newList = freqMap.getOrDefault(node.freq, new DoubleLinkedList());\n      newList.add(node);\n      freqMap.put(node.freq, newList);\n    }\n  }\n\n  private void update(Node node) {\n    DoubleLinkedList oldList = freqMap.get(node.freq);\n    oldList.remove(node);\n    if (node.freq == minFreq && oldList.size == 0) minFreq++;\n    node.freq++;\n    DoubleLinkedList newList = freqMap.getOrDefault(node.freq, new DoubleLinkedList());\n    newList.add(node);\n    freqMap.put(node.freq, newList);\n  }\n }\n"
        }
    ]
},
"permutations-ii":{
    "id": "47",
    "name": "permutations-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/47.permutations-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=47 lang=javascript\n *\n * [47] Permutations II\n *\n * https://leetcode.com/problems/permutations-ii/description/\n *\n * algorithms\n * Medium (39.29%)\n * Total Accepted:    234.1K\n * Total Submissions: 586.2K\n * Testcase Example:  '[1,1,2]'\n *\n * Given a collection of numbers that might contain duplicates, return all\n * possible unique permutations.\n *\n * Example:\n *\n *\n * Input: [1,1,2]\n * Output:\n * [\n * ⁠ [1,1,2],\n * ⁠ [1,2,1],\n * ⁠ [2,1,1]\n * ]\n *\n *\n */\nfunction backtrack(list, nums, tempList, visited) {\n  if (tempList.length === nums.length) return list.push([...tempList]);\n  for (let i = 0; i < nums.length; i++) {\n    // 和46.permutations的区别是这道题的nums是可以重复的\n    // 我们需要过滤这种情况\n    if (visited[i]) continue; // 不能用tempList.includes(nums[i])了，因为有重复\n    // visited[i - 1] 这个判断容易忽略\n    if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) continue;\n\n    visited[i] = true;\n    tempList.push(nums[i]);\n    backtrack(list, nums, tempList, visited);\n    visited[i] = false;\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar permuteUnique = function (nums) {\n  const list = [];\n  backtrack(\n    list,\n    nums.sort((a, b) => a - b),\n    [],\n    []\n  );\n  return list;\n};\n"
        }
    ]
},
"concatenated-words":{
    "id": "472",
    "name": "concatenated-words",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 前缀树\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "前缀树",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/472.concatenated-words.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Trie:\n\n    def __init__(self):\n        self.Trie = {}\n        self.visited = {}\n\n    def insert(self, word):\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                curr[w] = {}\n            curr = curr[w]\n        curr['#'] = 1\n\n    def cntWords(self, word):\n        if not word:\n            return 0\n        if word in self.visited:\n            return self.visited[word]\n        curr = self.Trie\n        res = float('-inf')\n\n        for i, w in enumerate(word):\n            if w not in curr:\n                return res\n            curr = curr[w]\n            if '#' in curr:\n                res = max(res, 1 + self.cntWords(word[i + 1:]))\n        self.visited[word] = res\n        return res\n\n\nclass Solution:\n    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:\n        self.trie = Trie()\n        res = []\n\n        for word in words:\n            self.trie.insert(word)\n        for word in words:\n            if self.trie.cntWords(word) >= 2:\n                res.append(word)\n        return res\n"
        }
    ]
},
"ones-and-zeros-en":{
    "id": "474",
    "name": "ones-and-zeros-en",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/474.ones-and-zeros-en.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass OnesAndZerosBFRecursive {\n public int findMaxForm2(String[] strs, int m, int n) {\n    return helper(strs, 0, m, n);\n }\n private int helper(String[] strs, int idx, int j, int k) {\n    if (idx == strs.length) return 0;\n    // count current idx string number of zeros and ones\n    int[] counts = countZeroOnes(strs[idx]);\n    // if j >= count0 && k >= count1, take current index string\n    int takeCurrStr = j - counts[0] >= 0 && k - counts[1] >= 0\n        ? 1 + helper(strs, idx + 1, j - counts[0], k - counts[1])\n        : -1;\n    // don't take current index string strs[idx], continue next string\n    int notTakeCurrStr = helper(strs, idx + 1, j, k);\n    return Math.max(takeCurrStr, notTakeCurrStr);\n }\n private int[] countZeroOnes(String s) {\n    int[] res = new int[2];\n    for (char ch : s.toCharArray()) {\n      res[ch - '0']++;\n    }\n    return res;\n }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass OnesAndZerosMemoRecur {\n  public int findMaxForm4(String[] strs, int m, int n) {\n      return helper(strs, 0, m, n, new int[strs.length][m + 1][n + 1]);\n  }\n  private int helper(String[] strs, int idx, int j, int k, int[][][] memo) {\n      if (idx == strs.length) return 0;\n      // check if already calculated, return value\n      if (memo[idx][j][k] != 0) {\n        return memo[idx][j][k];\n      }\n      int[] counts = countZeroOnes(strs[idx]);\n      // if satisfy condition, take current string, strs[idx], update count0 and count1\n      int takeCurrStr = j - counts[0] >= 0 && k - counts[1] >= 0\n          ? 1 + helper(strs, idx + 1, j - counts[0], k - counts[1], memo)\n          : -1;\n      // not take current string\n      int notTakeCurrStr = helper(strs, idx + 1, j, k, memo);\n      // always keep track the max value into memory\n      memo[idx][j][k] = Math.max(takeCurrStr, notTakeCurrStr);\n      return memo[idx][j][k];\n  }\n  private int[] countZeroOnes(String s) {\n       int[] res = new int[2];\n       for (char ch : s.toCharArray()) {\n         res[ch - '0']++;\n       }\n       return res;\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass OnesAndZeros3DDP {\n  public int findMaxForm(String[] strs, int m, int n) {\n      int l = strs.length;\n      int [][][] d = new int[l + 1][m + 1][n + 1];\n      for (int i = 0; i <= l; i ++){\n        int [] nums = new int[]{0,0};\n        if (i > 0){\n          nums = countZeroOnes(strs[i - 1]);\n        }\n        for (int j = 0; j <= m; j ++){\n          for (int k = 0; k <= n; k ++){\n            if (i == 0) {\n              d[i][j][k] = 0;\n            } else if (j >= nums[0] && k >= nums[1]){\n              d[i][j][k] = Math.max(d[i - 1][j][k], d[i - 1][j - nums[0]][k - nums[1]] + 1);\n            } else {\n              d[i][j][k] = d[i - 1][j][k];\n            }\n          }\n        }\n      }\n      return d[l][m][n];\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass OnesAndZeros2DDP {\n  public int findMaxForm(String[] strs, int m, int n) {\n      int[][] dp = new int[m + 1][n + 1];\n      for (String s : strs) {\n        int[] counts = countZeroOnes(s);\n        for (int i = m; i >= counts[0]; i--) {\n          for (int j = n; j >= counts[1]; j--) {\n            dp[i][j] = Math.max(1 + dp[i - counts[0]][j - counts[1]], dp[i][j]);\n          }\n        }\n      }\n      return dp[m][n];\n  }\n  private int[] countZeroOnes(String s) {\n       int[] res = new int[2];\n       for (char ch : s.toCharArray()) {\n         res[ch - '0']++;\n       }\n       return res;\n  }\n}\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:\n        return self.helper(strs, m, n, 0)\n    \n    def helper(self, strs, m, n, idx):\n        if idx == len(strs):\n            return 0\n        take_curr_str = -1\n        count0, count1 = strs[idx].count('0'), strs[idx].count('1')\n        if m >= count0 and n >= count1:\n            take_curr_str = max(take_curr_str, self.helper(strs, m - count0, n - count1, idx + 1) + 1)\n        not_take_curr_str = self.helper(strs, m, n, idx + 1)\n        return max(take_curr_str, not_take_curr_str)\n        \n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:\n        memo = {k:[[0]*(n+1) for _ in range(m+1)] for k in range(len(strs)+1)}\n        return self.helper(strs, 0, m, n, memo)\n    \n    def helper(self, strs, idx, m, n, memo):\n        if idx == len(strs):\n            return 0\n        if memo[idx][m][n] != 0:\n            return memo[idx][m][n]\n        take_curr_str = -1\n        count0, count1 = strs[idx].count('0'), strs[idx].count('1')\n        if m >= count0 and n >= count1:\n            take_curr_str = max(take_curr_str, self.helper(strs, idx + 1, m - count0, n - count1, memo) + 1)\n        not_take_curr_str = self.helper(strs, idx + 1, m, n, memo)\n        memo[idx][m][n] = max(take_curr_str, not_take_curr_str)\n        return memo[idx][m][n]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:\n        l = len(strs)\n        dp = [[0]*(n+1) for _ in range(m+1)]\n        for i in range(1, l + 1):\n              count0, count1 = strs[i - 1].count('0'), strs[i - 1].count('1')\n              for i in reversed(range(count0, m + 1)):\n                for j in reversed(range(count1, n + 1)):\n                    dp[i][j] = max(dp[i][j], 1 + dp[i - count0][j - count1])\n        return dp[m][n]\n"
        }
    ]
},
"rotate-image":{
    "id": "48",
    "name": "rotate-image",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 原地算法\n- 矩阵\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "矩阵旋转操作",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/48.rotate-image.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar rotate = function (matrix) {\n  // 时间复杂度O(n^2) 空间复杂度O(n)\n  const oMatrix = JSON.parse(JSON.stringify(matrix)); // clone\n  const n = oMatrix.length;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) {\n      matrix[j][n - i - 1] = oMatrix[i][j];\n    }\n  }\n};\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=48 lang=javascript\n *\n * [48] Rotate Image\n */\n/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar rotate = function (matrix) {\n  // 时间复杂度O(n^2) 空间复杂度O(1)\n\n  // 做法： 先沿着对角线翻转，然后沿着水平线翻转\n  const n = matrix.length;\n  function swap(arr, [i, j], [m, n]) {\n    const temp = arr[i][j];\n    arr[i][j] = arr[m][n];\n    arr[m][n] = temp;\n  }\n  for (let i = 0; i < n - 1; i++) {\n    for (let j = 0; j < n - i; j++) {\n      swap(matrix, [i, j], [n - j - 1, n - i - 1]);\n    }\n  }\n\n  for (let i = 0; i < n / 2; i++) {\n    for (let j = 0; j < n; j++) {\n      swap(matrix, [i, j], [n - i - 1, j]);\n    }\n  }\n};\n"
        }
    ]
},
"group-anagrams":{
    "id": "49",
    "name": "group-anagrams",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n- 排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "桶排序",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/49.group-anagrams.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar groupAnagrams = function (strs) {\n  const hashTable = {};\n\n  function sort(str) {\n    return str.split(\"\").sort().join(\"\");\n  }\n\n  // 这个方法需要排序，因此不是很优，但是很直观，容易想到\n  for (let i = 0; i < strs.length; i++) {\n    const str = strs[i];\n    const key = sort(str);\n    if (!hashTable[key]) {\n      hashTable[key] = [str];\n    } else {\n      hashTable[key].push(str);\n    }\n  }\n\n  return Object.values(hashTable);\n};\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=49 lang=javascript\n *\n * [49] Group Anagrams\n */\n/**\n * @param {string[]} strs\n * @return {string[][]}\n */\nvar groupAnagrams = function (strs) {\n  // 类似桶排序\n\n  let counts = [];\n  const hashTable = {};\n  for (let i = 0; i < strs.length; i++) {\n    const str = strs[i];\n    counts = Array(26).fill(0);\n    for (let j = 0; j < str.length; j++) {\n      counts[str[j].charCodeAt(0) - \"a\".charCodeAt(0)]++;\n    }\n    const key = counts.join(\"\");\n    if (!hashTable[key]) {\n      hashTable[key] = [str];\n    } else {\n      hashTable[key].push(str);\n    }\n  }\n\n  return Object.values(hashTable);\n};\n"
        }
    ]
},
"reverse-pairs":{
    "id": "493",
    "name": "reverse-pairs",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 归并排序\n- 逆序数\n- 分治\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "归并排序",
            "link": null,
            "color": "blue"
        },
        {
            "text": "逆序数",
            "link": null,
            "color": "blue"
        },
        {
            "text": "分治",
            "link": null,
            "color": "blue"
        },
        {
            "text": "识别考点，其他非重点可以使用语言内置方法",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/493.reverse-pairs.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    def reversePairs(self, nums):\n        n = len(nums)\n        cnt = 0\n        for i in range(n):\n            for j in range(i + 1, n):\n                if nums[i] > 2 * nums[j]:\n                    cnt += 1\n        return cnt\n"
        },
        {
            "language": "py",
            "text": "\nl = r = 0\nwhile l < len(left) and r < len(right):\n    if left[l] <= 2 * right[r]:\n        l += 1\n    else:\n        self.cnt += len(left) - l\n        r += 1\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    def reversePairs(self, nums):\n        self.cnt = 0\n\n        def mergeSort(lst):\n            L = len(lst)\n            if L <= 1:\n                return lst\n            return mergeTwo(mergeSort(lst[:L//2]), mergeSort(lst[L//2:]))\n\n        def mergeTwo(left, right):\n            l = r = 0\n            while l < len(left) and r < len(right):\n                if left[l] <= 2 * right[r]:\n                    l += 1\n                else:\n                    self.cnt += len(left) - l\n                    r += 1\n            return sorted(left+right)\n\n        mergeSort(nums)\n        return self.cnt\n\n"
        }
    ]
},
"target-sum":{
    "id": "494",
    "name": "target-sum",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "对元素进行分组，分组的依据是符号，是`+`或者`",
            "link": null,
            "color": "blue"
        },
        {
            "text": "`",
            "link": null,
            "color": "blue"
        },
        {
            "text": "通过数学公式推导可以简化我们的求解过程，这需要一点`数学知识和数学意识`",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/494.target-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=494 lang=javascript\n *\n * [494] Target Sum\n *\n */\n// 这个是我们熟悉的问题了\n// 我们这里需要求解的是nums里面有多少种可以组成target的方式\nvar sumCount = function(nums, target) {\n  // 这里通过观察，我们没必要使用二维数组去存储这些计算结果\n  // 使用一维数组可以有效节省空间\n  const dp = Array(target + 1).fill(0);\n  dp[0] = 1;\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = target; j >= nums[i]; j--) {\n      dp[j] += dp[j - nums[i]];\n    }\n  }\n  return dp[target];\n};\nconst add = nums => nums.reduce((a, b) => (a += b), 0);\n/**\n * @param {number[]} nums\n * @param {number} S\n * @return {number}\n */\nvar findTargetSumWays = function(nums, S) {\n  const sum = add(nums);\n  if (sum < S) return 0;\n  if ((S + sum) % 2 === 1) return 0;\n  return sumCount(nums, (S + sum) >> 1);\n};\n"
        }
    ]
},
"longest-palindromic-substring":{
    "id": "5",
    "name": "longest-palindromic-substring",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回文\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "”延伸“（extend）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5.longest-palindromic-substring.md",
    "code": [
        {
            "language": "js",
            "text": "\nif (s[i] === s[j] && dp[i + 1][j - 1]) {\n  dp[i][j] = true;\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=5 lang=javascript\n *\n * [5] Longest Palindromic Substring\n */\n/**\n * @param {string} s\n * @return {string}\n */\nvar longestPalindrome = function (s) {\n  // babad\n  // tag : dp\n  if (!s || s.length === 0) return \"\";\n  let res = s[0];\n\n  const dp = [];\n\n  // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]\n  for (let i = s.length - 1; i >= 0; i--) {\n    dp[i] = [];\n    for (let j = i; j < s.length; j++) {\n      if (j - i === 0) dp[i][j] = true;\n      // specail case 1\n      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;\n      // specail case 2\n      else if (s[i] === s[j] && dp[i + 1][j - 1]) {\n        // state transition\n        dp[i][j] = true;\n      }\n\n      if (dp[i][j] && j - i + 1 > res.length) {\n        // update res\n        res = s.slice(i, j + 1);\n      }\n    }\n  }\n\n  return res;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def longestPalindrome(self, s: str) -> str:\n        n = len(s)\n        if n == 0:\n            return \"\"\n        res = s[0]\n        def extend(i, j, s):\n            while(i >= 0 and j < len(s) and s[i] == s[j]):\n                i -= 1\n                j += 1\n            return s[i + 1:j]\n\n        for i in range(n - 1):\n            e1 = extend(i, i, s)\n            e2 = extend(i, i + 1, s)\n            if max(len(e1), len(e2)) > len(res):\n                res = e1 if len(e1) > len(e2) else e2\n        return res\n"
        }
    ]
},
"pow-x-n":{
    "id": "50",
    "name": "pow-x-n",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 递归\n- 位运算\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "超时分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "hashtable",
            "link": null,
            "color": "blue"
        },
        {
            "text": "数学分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "二进制转十进制",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/50.pow-x-n.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n == 0:\n            return 1\n        if n < 0:\n            return 1 / self.myPow(x, -n)\n        res = 1\n        for _ in range(n):\n            res *= x\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n == 0:\n            return 1\n        if n == 1:\n            return x\n        if n < 0:\n            return 1 / self.myPow(x, -n)\n        return self.myPow(x, n // 2) * self.myPow(x, n - n // 2)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n == 0:\n            return 1\n        if n == 1:\n            return x\n        if n < 0:\n            return 1 / self.myPow(x, -n)\n        return self.myPow(x _ x, n // 2) if n % 2 == 0 else x _ self.myPow(x, n - 1)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n < 0:\n            return 1 / self.myPow(x, -n)\n        res = 1\n        while n:\n            if n & 1 == 1:\n                res *= x\n            x *= x\n            n >>= 1\n        return res\n"
        }
    ]
},
"Find-Mode-in-Binary-Search-Tree":{
    "id": "501",
    "name": "Find-Mode-in-Binary-Search-Tree",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/501.Find-Mode-in-Binary-Search-Tree.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {   \n    List<Integer> list = new ArrayList<> ();\n    TreeNode preNode = null;\n    int max = 0, count = 0;\n    \n    public int[] findMode(TreeNode root) {\n        helper(root);\n        int[] res = new int[list.size()];\n        for (int i=0; i<res.length; i++) {\n            res[i] = list.get(i);\n        }\n        return res;\n    }\n    \n    private void helper (TreeNode root) {\n        if (root == null) return;\n        helper(root.left);\n        \n        if (preNode != null && root.val == preNode.val) {\n            count++;\n        } else {\n            count = 1;\n        }\n        \n        if (count > max) {\n            list.clear();\n            list.add(root.val);\n            max = count;\n        } else if (max == count) {\n            list.add(root.val);            \n        }\n        preNode = root;\n        helper(root.right);\n    }\n}\n"
        }
    ]
},
"longest-palindromic-subsequence":{
    "id": "516",
    "name": "longest-palindromic-subsequence",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "”延伸“（extend）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/516.longest-palindromic-subsequence.md",
    "code": [
        {
            "language": "js",
            "text": "\nif (s[i] === s[j]) {\n  dp[i][j] = dp[i + 1][j - 1] + 2;\n} else {\n  dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=516 lang=javascript\n *\n * [516] Longest Palindromic Subsequence\n */\n/**\n * @param {string} s\n * @return {number}\n */\nvar longestPalindromeSubseq = function(s) {\n  // bbbab 返回4\n  // tag : dp\n  const dp = [];\n\n  for (let i = s.length - 1; i >= 0; i--) {\n    dp[i] = Array(s.length).fill(0);\n    for (let j = i; j < s.length; j++) {\n      if (i - j === 0) dp[i][j] = 1;\n      else if (s[i] === s[j]) {\n        dp[i][j] = dp[i + 1][j - 1] + 2;\n      } else {\n        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);\n      }\n    }\n  }\n\n  return dp[0][s.length - 1];\n};\n"
        }
    ]
},
"coin-change-2":{
    "id": "518",
    "name": "coin-change-2",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n- 背包问题\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "动态规划",
            "link": null,
            "color": "blue"
        },
        {
            "text": "子问题用dp[i]来表示组成i块钱，需要最少的硬币数，那么1.第j个硬币我可以选择不拿这个时候，组成数=dp[i]2.第j个硬币我可以选择拿这个时候，组成数=dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "coins[j]]+dp[i]",
            "link": null,
            "color": "blue"
        },
        {
            "text": "和01背包问题不同，硬币是可以拿任意个，属于完全背包问题",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对于每一个dp[i]我们都选择遍历一遍coin，不断更新dp[i]eg:```jsif(amount===0)return1;constdp=[Array(amount+1).fill(1)];for(leti=1;i<amount+1;i++){dp[i]=Array(coins.length+1).fill(0);for(letj=1;j<coins.length+1;j++){//从1开始可以简化运算if(i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "coins[j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]>=0){//注意这里是coins[j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]而不是coins[j]dp[i][j]=dp[i][j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]+dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "coins[j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]][j];//由于可以重复使用硬币所以这里是j不是j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1}else{dp[i][j]=dp[i][j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1];}}}returndp[dp.length",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1][coins.length];```",
            "link": null,
            "color": "blue"
        },
        {
            "text": "当我们选择一维数组去解的时候，内外循环将会对结果造成影响![](https://tva1.sinaimg.cn/large/0082zybply1gcb7fjfon6j30j00bddh2.jpg)eg:```js//这种答案是不对的。//原因在于比如amount=5,coins=[1,2,5]//这种算法会将[1,2,2][2,1,2][2,2,1]算成不同的if(amount===0)return1;constdp=[1].concat(Array(amount).fill(0));for(leti=1;i<amount+1;i++){for(letj=0;j<coins.length;j++){if(i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "coins[j]>=0){dp[i]=dp[i]+dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "coins[j]];}}}returndp[dp.length",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1];//正确的写法应该是内外循环调换一下,具体可以看下方代码区```",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/518.coin-change-2.md",
    "code": [
        {
            "language": "js",
            "text": "\nif (amount === 0) return 1;\n\nconst dp = [Array(amount + 1).fill(1)];\n\nfor (let i = 1; i < amount + 1; i++) {\n  dp[i] = Array(coins.length + 1).fill(0);\n  for (let j = 1; j < coins.length + 1; j++) {\n    // 从1开始可以简化运算\n    if (i - coins[j - 1] >= 0) {\n      // 注意这里是coins[j -1]而不是coins[j]\n      dp[i][j] = dp[i][j - 1] + dp[i - coins[j - 1]][j]; // 由于可以重复使用硬币所以这里是j不是j-1\n    } else {\n      dp[i][j] = dp[i][j - 1];\n    }\n  }\n}\n\nreturn dp[dp.length - 1][coins.length];\n"
        },
        {
            "language": "js",
            "text": "\n// 这种答案是不对的。\n// 原因在于比如amount = 5, coins = [1,2,5]\n// 这种算法会将[1,2,2] [2,1,2] [2, 2, 1] 算成不同的\n\nif (amount === 0) return 1;\n\nconst dp = [1].concat(Array(amount).fill(0));\n\nfor (let i = 1; i < amount + 1; i++) {\n  for (let j = 0; j < coins.length; j++) {\n    if (i - coins[j] >= 0) {\n      dp[i] = dp[i] + dp[i - coins[j]];\n    }\n  }\n}\n\nreturn dp[dp.length - 1];\n\n// 正确的写法应该是内外循环调换一下, 具体可以看下方代码区\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=518 lang=javascript\n *\n * [518] Coin Change 2\n *\n */\n/**\n * @param {number} amount\n * @param {number[]} coins\n * @return {number}\n */\nvar change = function(amount, coins) {\n  if (amount === 0) return 1;\n\n  const dp = [1].concat(Array(amount).fill(0));\n\n  for (let j = 0; j < coins.length; j++) {\n    for (let i = 1; i < amount + 1; i++) {\n      if (i - coins[j] >= 0) {\n        dp[i] = dp[i] + dp[i - coins[j]];\n      }\n    }\n  }\n\n  return dp[dp.length - 1];\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def change(self, amount: int, coins: List[int]) -> int:\n        dp = [0] * (amount + 1)\n        dp[0] = 1\n\n        for j in range(len(coins)):\n            for i in range(1, amount + 1):\n                if i >= coins[j]:\n                    dp[i] += dp[i - coins[j]]\n\n        return dp[-1]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def change(self, amount: int, coins: List[int]) -> int:\n        dp = [[0 for _ in range(len(coins) + 1)] for _ in range(amount + 1)]\n        for j in range(len(coins) + 1):\n            dp[0][j] = 1\n\n        for i in range(amount + 1):\n            for j in range(1, len(coins) + 1):\n                if i >= coins[j - 1]:\n                    dp[i][j] = dp[i - coins[j - 1]][j] + dp[i][j - 1]\n                else:\n                    dp[i][j] = dp[i][j - 1]\n        return dp[-1][-1]\n"
        }
    ]
},
"N-Queens-II":{
    "id": "52",
    "name": "N-Queens-II",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "DFS（深度优先搜索）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/52.N-Queens-II.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number} n\n * @return {number}\n * @param row 当前层\n * @param cols 列\n * @param pie 左斜线\n * @param na 右斜线\n */\nconst totalNQueens = function (n) {\n    let res = 0;\n    const dfs = (n, row, cols, pie, na) => {\n        if (row >= n) {\n            res++;\n            return;\n        }\n        // 将所有能放置 Q 的位置由 0 变成 1，以便进行后续的位遍历\n        // 也就是得到当前所有的空位\n        let bits = (~(cols | pie | na)) & ((1 << n) - 1);\n        while (bits) {\n            // 取最低位的1\n            let p = bits & -bits;\n            // 把P位置上放入皇后\n            bits = bits & (bits - 1);\n            // row + 1 搜索下一行可能的位置\n            // cols ｜ p 目前所有放置皇后的列\n            // (pie | p) << 1 和 (na | p) >> 1) 与已放置过皇后的位置 位于一条斜线上的位置\n            dfs(n, row + 1, cols | p, (pie | p) << 1, (na | p) >> 1);\n        }\n    }\n    dfs(n, 0, 0, 0, 0);\n    return res;\n};\n"
        }
    ]
},
"maximum-sum-subarray-cn":{
    "id": "53",
    "name": "maximum-sum-subarray-cn",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [
        {
            "text": "分析1.暴力解，列举所有组合子序列首尾位置的组合，求解最大的子序列和,优化可以预先处理，得到前缀和2.分治法，每次从中间位置把数组分为左右中三部分，分别求出左右中（这里中是包括中间元素的子序列）最大和。对左右分别深度递归，三者中最大值即为当前最大子序列和。3.动态规划，找到状态转移方程，求到当前位置最大和。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/53.maximum-sum-subarray-cn.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass MaximumSubarrayPrefixSum {\n  public int maxSubArray(int[] nums) {\n      int len = nums.length;\n      int maxSum = Integer.MIN_VALUE;\n      int sum = 0;\n      for (int i = 0; i < len; i++) {\n        sum = 0;\n        for (int j = i; j < len; j++) {\n          sum += nums[j];\n          maxSum = Math.max(maxSum, sum);\n        }\n      }\n      return maxSum;\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MaxSumSubarray {\n  public int maxSubArray3(int[] nums) {\n      int maxSum = nums[0];\n      int sum = 0;\n      int minSum = 0;\n      for (int num : nums) {\n        // prefix Sum\n        sum += num;\n        // update maxSum\n        maxSum = Math.max(maxSum, sum - minSum);\n        // update minSum\n        minSum = Math.min(minSum, sum);\n      }\n      return maxSum;\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MaximumSubarrayDivideConquer {\n  public int maxSubArrayDividConquer(int[] nums) {\n      if (nums == null || nums.length == 0) return 0;\n      return helper(nums, 0, nums.length - 1);\n    }\n    private int helper(int[] nums, int l, int r) {\n      if (l > r) return Integer.MIN_VALUE;\n      int mid = (l + r) >>> 1;\n      int left = helper(nums, l, mid - 1);\n      int right = helper(nums, mid + 1, r);\n      int leftMaxSum = 0;\n      int sum = 0;\n      // left surfix maxSum start from index mid - 1 to l\n      for (int i = mid - 1; i >= l; i--) {\n        sum += nums[i];\n        leftMaxSum = Math.max(leftMaxSum, sum);\n      }\n      int rightMaxSum = 0;\n      sum = 0;\n      // right prefix maxSum start from index mid + 1 to r\n      for (int i = mid + 1; i <= r; i++) {\n        sum += nums[i];\n        rightMaxSum = Math.max(sum, rightMaxSum);\n      }\n      // max(left, right, crossSum)\n      return Math.max(leftMaxSum + rightMaxSum + nums[mid], Math.max(left, right));\n    }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MaximumSubarrayDP {\n   public int maxSubArray(int[] nums) {\n      int currMaxSum = nums[0];\n      int maxSum = nums[0];\n      for (int i = 1; i < nums.length; i++) {\n        currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);\n        maxSum = Math.max(maxSum, currMaxSum);\n      }\n      return maxSum;\n   }\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction LSS(list) {\n  const len = list.length;\n  let max = -Number.MAX_VALUE;\n  let sum = 0;\n  for (let i = 0; i < len; i++) {\n    sum = 0;\n    for (let j = i; j < len; j++) {\n      sum += list[j];\n      if (sum > max) {\n        max = sum;\n      }\n    }\n  }\n\n  return max;\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction LSS(list) {\n  const len = list.length;\n  let max = list[0];\n  let min = 0;\n  let sum = 0;\n  for (let i = 0; i < len; i++) {\n    sum += list[i];\n    if (sum - min > max) max = sum - min;\n    if (sum < min) {\n      min = sum;\n    }\n  }\n\n  return max;\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction helper(list, m, n) {\n  if (m === n) return list[m];\n  let sum = 0;\n  let lmax = -Number.MAX_VALUE;\n  let rmax = -Number.MAX_VALUE;\n  const mid = ((n - m) >> 1) + m;\n  const l = helper(list, m, mid);\n  const r = helper(list, mid + 1, n);\n  for (let i = mid; i >= m; i--) {\n    sum += list[i];\n    if (sum > lmax) lmax = sum;\n  }\n\n  sum = 0;\n\n  for (let i = mid + 1; i <= n; i++) {\n    sum += list[i];\n    if (sum > rmax) rmax = sum;\n  }\n\n  return Math.max(l, r, lmax + rmax);\n}\n\nfunction LSS(list) {\n  return helper(list, 0, list.length - 1);\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction LSS(list) {\n  const len = list.length;\n  let max = list[0];\n  for (let i = 1; i < len; i++) {\n    list[i] = Math.max(0, list[i - 1]) + list[i];\n    if (list[i] > max) max = list[i];\n  }\n\n  return max;\n}\n"
        },
        {
            "language": "py",
            "text": "\nimport sys\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        maxSum = -sys.maxsize\n        sum = 0\n        for i in range(n):\n            sum = 0\n            for j in range(i, n):\n                sum += nums[j]\n                maxSum = max(maxSum, sum)\n        \n        return maxSum\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        maxSum = nums[0]\n        minSum = sum = 0\n        for i in range(n):\n            sum += nums[i]\n            maxSum = max(maxSum, sum - minSum)\n            minSum = min(minSum, sum)\n            \n        return maxSum\n"
        },
        {
            "language": "py",
            "text": "\nimport sys\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        return self.helper(nums, 0, len(nums) - 1)\n    def helper(self, nums, l, r):\n        if l > r:\n            return -sys.maxsize\n        mid = (l + r) // 2\n        left = self.helper(nums, l, mid - 1)\n        right = self.helper(nums, mid + 1, r)\n        left_suffix_max_sum = right_prefix_max_sum = 0\n        sum = 0\n        for i in reversed(range(l, mid)):\n            sum += nums[i]\n            left_suffix_max_sum = max(left_suffix_max_sum, sum)\n        sum = 0\n        for i in range(mid + 1, r + 1):\n            sum += nums[i]\n            right_prefix_max_sum = max(right_prefix_max_sum, sum)\n        cross_max_sum = left_suffix_max_sum + right_prefix_max_sum + nums[mid]\n        return max(cross_max_sum, left, right)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        max_sum_ending_curr_index = max_sum = nums[0]\n        for i in range(1, n):\n            max_sum_ending_curr_index = max(max_sum_ending_curr_index + nums[i], nums[i])\n            max_sum = max(max_sum_ending_curr_index, max_sum)\n            \n        return max_sum\n"
        }
    ]
},
"maximum-sum-subarray-en":{
    "id": "53",
    "name": "maximum-sum-subarray-en",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/53.maximum-sum-subarray-en.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass MaximumSubarrayPrefixSum {\n  public int maxSubArray(int[] nums) {\n      int len = nums.length;\n      int maxSum = Integer.MIN_VALUE;\n      int sum = 0;\n      for (int i = 0; i < len; i++) {\n        sum = 0;\n        for (int j = i; j < len; j++) {\n          sum += nums[j];\n          maxSum = Math.max(maxSum, sum);\n        }\n      }\n      return maxSum;\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MaxSumSubarray {\n  public int maxSubArray3(int[] nums) {\n      int maxSum = nums[0];\n      int sum = 0;\n      int minSum = 0;\n      for (int num : nums) {\n        // prefix Sum\n        sum += num;\n        // update maxSum\n        maxSum = Math.max(maxSum, sum - minSum);\n        // update minSum\n        minSum = Math.min(minSum, sum);\n      }\n      return maxSum;\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MaximumSubarrayDivideConquer {\n  public int maxSubArrayDividConquer(int[] nums) {\n      if (nums == null || nums.length == 0) return 0;\n      return helper(nums, 0, nums.length - 1);\n    }\n    private int helper(int[] nums, int l, int r) {\n      if (l > r) return Integer.MIN_VALUE;\n      int mid = (l + r) >>> 1;\n      int left = helper(nums, l, mid - 1);\n      int right = helper(nums, mid + 1, r);\n      int leftMaxSum = 0;\n      int sum = 0;\n      // left surfix maxSum start from index mid - 1 to l\n      for (int i = mid - 1; i >= l; i--) {\n        sum += nums[i];\n        leftMaxSum = Math.max(leftMaxSum, sum);\n      }\n      int rightMaxSum = 0;\n      sum = 0;\n      // right prefix maxSum start from index mid + 1 to r\n      for (int i = mid + 1; i <= r; i++) {\n        sum += nums[i];\n        rightMaxSum = Math.max(sum, rightMaxSum);\n      }\n      // max(left, right, crossSum)\n      return Math.max(leftMaxSum + rightMaxSum + nums[mid], Math.max(left, right));\n    }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MaximumSubarrayDP {\n   public int maxSubArray(int[] nums) {\n      int currMaxSum = nums[0];\n      int maxSum = nums[0];\n      for (int i = 1; i < nums.length; i++) {\n        currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);\n        maxSum = Math.max(maxSum, currMaxSum);\n      }\n      return maxSum;\n   }\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction LSS(list) {\n  const len = list.length;\n  let max = -Number.MAX_VALUE;\n  let sum = 0;\n  for (let i = 0; i < len; i++) {\n    sum = 0;\n    for (let j = i; j < len; j++) {\n      sum += list[j];\n      if (sum > max) {\n        max = sum;\n      }\n    }\n  }\n\n  return max;\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction LSS(list) {\n  const len = list.length;\n  let max = list[0];\n  let min = 0;\n  let sum = 0;\n  for (let i = 0; i < len; i++) {\n    sum += list[i];\n    if (sum - min > max) max = sum - min;\n    if (sum < min) {\n      min = sum;\n    }\n  }\n\n  return max;\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction helper(list, m, n) {\n  if (m === n) return list[m];\n  let sum = 0;\n  let lmax = -Number.MAX_VALUE;\n  let rmax = -Number.MAX_VALUE;\n  const mid = ((n - m) >> 1) + m;\n  const l = helper(list, m, mid);\n  const r = helper(list, mid + 1, n);\n  for (let i = mid; i >= m; i--) {\n    sum += list[i];\n    if (sum > lmax) lmax = sum;\n  }\n\n  sum = 0;\n\n  for (let i = mid + 1; i <= n; i++) {\n    sum += list[i];\n    if (sum > rmax) rmax = sum;\n  }\n\n  return Math.max(l, r, lmax + rmax);\n}\n\nfunction LSS(list) {\n  return helper(list, 0, list.length - 1);\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction LSS(list) {\n  const len = list.length;\n  let max = list[0];\n  for (let i = 1; i < len; i++) {\n    list[i] = Math.max(0, list[i - 1]) + list[i];\n    if (list[i] > max) max = list[i];\n  }\n\n  return max;\n}\n"
        },
        {
            "language": "py",
            "text": "\nimport sys\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        maxSum = -sys.maxsize\n        sum = 0\n        for i in range(n):\n            sum = 0\n            for j in range(i, n):\n                sum += nums[j]\n                maxSum = max(maxSum, sum)\n        \n        return maxSum\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        maxSum = nums[0]\n        minSum = sum = 0\n        for i in range(n):\n            sum += nums[i]\n            maxSum = max(maxSum, sum - minSum)\n            minSum = min(minSum, sum)\n            \n        return maxSum\n"
        },
        {
            "language": "py",
            "text": "\nimport sys\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        return self.helper(nums, 0, len(nums) - 1)\n    def helper(self, nums, l, r):\n        if l > r:\n            return -sys.maxsize\n        mid = (l + r) // 2\n        left = self.helper(nums, l, mid - 1)\n        right = self.helper(nums, mid + 1, r)\n        left_suffix_max_sum = right_prefix_max_sum = 0\n        sum = 0\n        for i in reversed(range(l, mid)):\n            sum += nums[i]\n            left_suffix_max_sum = max(left_suffix_max_sum, sum)\n        sum = 0\n        for i in range(mid + 1, r + 1):\n            sum += nums[i]\n            right_prefix_max_sum = max(right_prefix_max_sum, sum)\n        cross_max_sum = left_suffix_max_sum + right_prefix_max_sum + nums[mid]\n        return max(cross_max_sum, left, right)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        max_sum_ending_curr_index = max_sum = nums[0]\n        for i in range(1, n):\n            max_sum_ending_curr_index = max(max_sum_ending_curr_index + nums[i], nums[i])\n            max_sum = max(max_sum_ending_curr_index, max_sum)\n            \n        return max_sum\n"
        }
    ]
},
"friend-circles-en":{
    "id": "547",
    "name": "friend-circles-en",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/547.friend-circles-en.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass FindCirclesDFS {\n  public int findCircleNumDFS(int[][] M) {\n    if (M == null || M.length == 0 || M[0].length == 0) return 0;\n    int n = M.length;\n    int numCircles = 0;\n    boolean[] visited = new boolean[n];\n    for (int i = 0; i < n; i++) {\n      if (!visited[i]) {\n        dfs(M, i, visited, n);\n        numCircles++;\n      }\n    }\n    return numCircles;\n  }\n\n  private void dfs(int[][] M, int i, boolean[] visited, int n) {\n    for (int j = 0; j < n; j++) {\n      if (M[i][j] == 1 && !visited[j]) {\n        visited[j] = true;\n        dfs(M, j, visited, n);\n      }\n    }\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass FindCircleBFS {\n  public int findCircleNumBFS(int[][] M) {\n    if (M == null || M.length == 0) return 0;\n    int numCircle = 0;\n    int n = M.length;\n    boolean[] visited = new boolean[n];\n    Queue<Integer> queue = new LinkedList<>();\n    for (int i = 0; i < n; i++) {\n      // already visited, skip\n      if (visited[i]) continue;\n      queue.add(i);\n      while (!queue.isEmpty()) {\n        int curr = queue.poll();\n        visited[curr] = true;\n        for (int j = 0; j < n; j++) {\n          if (M[curr][j] == 1 && !visited[j]) {\n            queue.add(j);\n          }\n        }\n      }\n      numCircle++;\n    }\n    return numCircle;\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass FindCircleUF {\n public int findCircleNumUF(int[][] M) {\n    if (M == null || M.length == 0 || M[0].length == 0) return 0;\n    int n = M.length;\n    UnionFind uf = new UnionFind(n);\n    for (int i = 0; i < n - 1; i++) {\n      for (int j = i + 1; j < n; j++) {\n        // union friends\n        if (M[i][j] == 1) {\n          uf.union(i, j);\n        }\n      }\n    }\n    return uf.count;\n  }\n}\n\nclass UnionFind {\n  int count;\n  int[] parent;\n  int[] rank;\n\n  public UnionFind(int n) {\n    count = n;\n    parent = new int[n];\n    rank = new int[n];\n    for (int i = 0; i < n; i++) {\n      parent[i] = i;\n    }\n  }\n\n  public int find(int a) {\n    return parent[a] == a ? a : find(parent[a]);\n  }\n\n  public void union(int a, int b) {\n    int rootA = find(a);\n    int rootB = find(b);\n    if (rootA == rootB) return;\n    if (rank[rootA] <= rank[rootB]) {\n      parent[rootA] = rootB;\n      rank[rootB] += rank[rootA];\n    } else {\n      parent[rootB] = rootA;\n      rank[rootA] += rank[rootB];\n    }\n    count--;\n  }\n\n  public int count() {\n    return count;\n  }\n}\n"
        }
    ]
},
"friend-circles":{
    "id": "547",
    "name": "friend-circles",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 并查集\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/547.friend-circles.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass UF:\n    parent = {}\n    cnt = 0\n    def __init__(self, M):\n        n = len(M)\n        for i in range(n):\n            self.parent[i] = i\n            self.cnt += 1\n\n    def find(self, x):\n        while x != self.parent[x]:\n            x = self.parent[x]\n        return x\n    def union(self, p, q):\n        if self.connected(p, q): return\n        self.parent[self.find(p)] = self.find(q)\n        self.cnt -= 1\n    def connected(self, p, q):\n        return self.find(p) == self.find(q)\n\nclass Solution:\n    def findCircleNum(self, M: List[List[int]]) -> int:\n        n = len(M)\n        uf = UF(M)\n        for i in range(n):\n            for j in range(i):\n                if M[i][j] == 1:\n                    uf.union(i, j)\n        return uf.cnt\n\n"
        }
    ]
},
"jump-game":{
    "id": "55",
    "name": "jump-game",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 贪心\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "建模(记录和更新当前位置能够到达的最大的索引即可)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/55.jump-game.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar canJump = function (nums) {\n  let max = 0; // 能够走到的数组下标\n\n  for (let i = 0; i < nums.length; i++) {\n    if (max < i) return false; // 当前这一步都走不到，后面更走不到了\n    max = Math.max(nums[i] + i, max);\n  }\n\n  return max >= nums.length - 1;\n};\n"
        }
    ]
},
"merge-intervals":{
    "id": "56",
    "name": "merge-intervals",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "对数组进行排序简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果不排序，需要借助一些hack,这里不介绍了",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/56.merge-intervals.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=56 lang=javascript\n *\n * [56] Merge Intervals\n */\n/**\n * @param {number[][]} intervals\n * @return {number[][]}\n */\n\nfunction intersected(a, b) {\n  if (a[0] > b[1] || a[1] < b[0]) return false;\n  return true;\n}\n\nfunction mergeTwo(a, b) {\n  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];\n}\nvar merge = function (intervals) {\n  // 这种算法需要先排序\n  intervals.sort((a, b) => a[0] - b[0]);\n  for (let i = 0; i < intervals.length - 1; i++) {\n    const cur = intervals[i];\n    const next = intervals[i + 1];\n\n    if (intersected(cur, next)) {\n      intervals[i] = undefined;\n      intervals[i + 1] = mergeTwo(cur, next);\n    }\n  }\n  return intervals.filter((q) => q);\n};\n"
        }
    ]
},
"subarray-sum-equals-k":{
    "id": "560",
    "name": "subarray-sum-equals-k",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n- 前缀和\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀和",
            "link": null,
            "color": "blue"
        },
        {
            "text": "可以利用hashmap记录和的累加值来避免重复计算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/560.subarray-sum-equals-k.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=560 lang=javascript\n *\n * [560] Subarray Sum Equals K\n */\n/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nvar subarraySum = function (nums, k) {\n  const hashmap = {};\n  let acc = 0;\n  let count = 0;\n\n  for (let i = 0; i < nums.length; i++) {\n    acc += nums[i];\n\n    if (acc === k) count++;\n\n    if (hashmap[acc - k] !== void 0) {\n      count += hashmap[acc - k];\n    }\n\n    if (hashmap[acc] === void 0) {\n      hashmap[acc] = 1;\n    } else {\n      hashmap[acc] += 1;\n    }\n  }\n\n  return count;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def subarraySum(self, nums: List[int], k: int) -> int:\n        cnt, n =  0, len(nums)\n        for i in range(n):\n            sum = 0\n            for j in range(i, n):\n                sum += nums[j]\n                if (sum == k): cnt += 1\n        return cnt\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def subarraySum(self, nums: List[int], k: int) -> int:\n      cnt, n =  0, len(nums)\n      pre = [0] * (n + 1)\n      for i in range(1, n + 1):\n          pre[i] = pre[i - 1] + nums[i - 1]\n      for i in range(1, n + 1):\n          for j in range(i, n + 1):\n              if (pre[j] - pre[i - 1] == k): cnt += 1\n      return cnt\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def subarraySum(self, nums: List[int], k: int) -> int:\n        d = {}\n        acc = count = 0\n        for num in nums:\n            acc += num\n            if acc == k:\n                count += 1\n            if acc - k in d:\n                count += d[acc-k]\n            if acc in d:\n                d[acc] += 1\n            else:\n                d[acc] = 1\n        return count\n"
        }
    ]
},
"distribute-candies":{
    "id": "575",
    "name": "distribute-candies",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "这是一道逻辑题目，因此如果逻辑分析清楚了，代码是自然而然的",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/575.distribute-candies.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=575 lang=javascript\n *\n * [575] Distribute Candies\n */\n/**\n * @param {number[]} candies\n * @return {number}\n */\nvar distributeCandies = function(candies) {\n    const count = new Set(candies);\n    return Math.min(count.size, candies.length >> 1);\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def distributeCandies(self, candies: List[int]) -> int:\n        return min(len(set(candies)), len(candies) >> 1)\n"
        }
    ]
},
"permutation-sequence":{
    "id": "60",
    "name": "permutation-sequence",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数学\n- 回溯\n- factorial\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "找规律",
            "link": null,
            "color": "blue"
        },
        {
            "text": "排列组合",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/60.permutation-sequence.md",
    "code": [
        {
            "language": "py",
            "text": "\nimport math\n\nclass Solution:\n    def getPermutation(self, n: int, k: int) -> str:\n        res = \"\"\n        candidates = [str(i) for i in range(1, n + 1)]\n\n        while n != 0:\n            facto = math.factorial(n - 1)\n            # i 表示前面被我们排除的组数，也就是k所在的组的下标\n            # k // facto 是不行的， 比如在 k % facto == 0的情况下就会有问题\n            i = math.ceil(k / facto) - 1\n            # 我们把candidates[i]加入到结果集，然后将其弹出candidates（不能重复使用元素）\n            res += candidates[i]\n            candidates.pop(i)\n            # k 缩小了 facto *  i\n            k -= facto * i\n            # 每次迭代我们实际上就处理了一个元素，n 减去 1，当n == 0 说明全部处理完成，我们退出循环\n            n -= 1\n        return res\n"
        }
    ]
},
"find-duplicate-file-in-system":{
    "id": "609",
    "name": "find-duplicate-file-in-system",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "hashtable",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/609.find-duplicate-file-in-system.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=609 lang=javascript\n *\n * [609] Find Duplicate File in System\n *\n * https://leetcode.com/problems/find-duplicate-file-in-system/description/\n *\n * algorithms\n * Medium (54.21%)\n * Total Accepted:    24.1K\n * Total Submissions: 44.2K\n * Testcase Example:  '[\"root/a 1.txt(abcd) 2.txt(efgh)\",\"root/c 3.txt(abcd)\",\"root/c/d 4.txt(efgh)\",\"root 4.txt(efgh)\"]'\n *\n * Given a list of directory info including directory path, and all the files\n * with contents in this directory, you need to find out all the groups of\n * duplicate files in the file system in terms of their paths.\n *\n * A group of duplicate files consists of at least two files that have exactly\n * the same content.\n *\n * A single directory info string in the input list has the following format:\n *\n * \"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ...\n * fn.txt(fn_content)\"\n *\n * It means there are n files (f1.txt, f2.txt ... fn.txt with content\n * f1_content, f2_content ... fn_content, respectively) in directory\n * root/d1/d2/.../dm. Note that n >= 1 and m >= 0. If m = 0, it means the\n * directory is just the root directory.\n *\n * The output is a list of group of duplicate file paths. For each group, it\n * contains all the file paths of the files that have the same content. A file\n * path is a string that has the following format:\n *\n * \"directory_path/file_name.txt\"\n *\n * Example 1:\n *\n *\n * Input:\n * [\"root/a 1.txt(abcd) 2.txt(efgh)\", \"root/c 3.txt(abcd)\", \"root/c/d\n * 4.txt(efgh)\", \"root 4.txt(efgh)\"]\n * Output:\n *\n * [[\"root/a/2.txt\",\"root/c/d/4.txt\",\"root/4.txt\"],[\"root/a/1.txt\",\"root/c/3.txt\"]]\n *\n *\n *\n *\n * Note:\n *\n *\n * No order is required for the final output.\n * You may assume the directory name, file name and file content only has\n * letters and digits, and the length of file content is in the range of\n * [1,50].\n * The number of files given is in the range of [1,20000].\n * You may assume no files or directories share the same name in the same\n * directory.\n * You may assume each given directory info represents a unique directory.\n * Directory path and file info are separated by a single blank space.\n *\n *\n *\n * Follow-up beyond contest:\n *\n *\n * Imagine you are given a real file system, how will you search files? DFS or\n * BFS?\n * If the file content is very large (GB level), how will you modify your\n * solution?\n * If you can only read the file by 1kb each time, how will you modify your\n * solution?\n * What is the time complexity of your modified solution? What is the most\n * time-consuming part and memory consuming part of it? How to optimize?\n * How to make sure the duplicated files you find are not false positive?\n *\n *\n */\n/**\n * @param {string[]} paths\n * @return {string[][]}\n */\nvar findDuplicate = function(paths) {\n  const hashmap = {};\n\n  for (let path of paths) {\n    const [folder, ...files] = path.split(\" \");\n    for (let file of files) {\n      const lpi = file.indexOf(\"(\");\n      const rpi = file.lastIndexOf(\")\");\n      const filename = file.slice(0, lpi);\n      const content = file.slice(lpi, rpi);\n      const fullname = `${folder}/${filename}`;\n      if (!hashmap[content]) hashmap[content] = [];\n      hashmap[content].push(fullname);\n    }\n  }\n\n  return Object.values(hashmap).filter(q => q.length >= 2);\n};\n"
        }
    ]
},
"unique-paths":{
    "id": "62",
    "name": "unique-paths",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "记忆化递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "基本动态规划问题",
            "link": null,
            "color": "blue"
        },
        {
            "text": "空间复杂度可以进一步优化到O(n),这会是一个考点",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/62.unique-paths.md",
    "code": [
        {
            "language": "js",
            "text": "\nconst dp = [];\nfor (let i = 0; i < m + 1; i++) {\n  dp[i] = [];\n  dp[i][0] = 0;\n}\nfor (let i = 0; i < n + 1; i++) {\n  dp[0][i] = 0;\n}\nfor (let i = 1; i < m + 1; i++) {\n  for (let j = 1; j < n + 1; j++) {\n    dp[i][j] = j === 1 ? 1 : dp[i - 1][j] + dp[i][j - 1]; // 转移方程\n  }\n}\n\nreturn dp[m][n];\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=62 lang=javascript\n *\n * [62] Unique Paths\n *\n * https://leetcode.com/problems/unique-paths/description/\n */\n/**\n * @param {number} m\n * @param {number} n\n * @return {number}\n */\nvar uniquePaths = function (m, n) {\n  const dp = Array(n).fill(1);\n\n  for (let i = 1; i < m; i++) {\n    for (let j = 1; j < n; j++) {\n      dp[j] = dp[j] + dp[j - 1];\n    }\n  }\n\n  return dp[n - 1];\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        d = [[1] * n for _ in range(m)]\n\n        for col in range(1, m):\n            for row in range(1, n):\n                d[col][row] = d[col - 1][row] + d[col][row - 1]\n\n        return d[m - 1][n - 1]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    visited = dict()\n\n    def uniquePaths(self, m: int, n: int) -> int:\n        if (m, n) in self.visited:\n            return self.visited[(m, n)]\n        if m == 1 or n == 1:\n            return 1\n        cnt = self.uniquePaths(m - 1, n) + self.uniquePaths(m, n - 1)\n        self.visited[(m, n)] = cnt\n        return cnt\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n\n    def uniquePaths(self, m: int, n: int) -> int:\n        dp = [1] * n\n        for _ in range(1, m):\n            for j in range(1, n):\n                dp[j] += dp[j - 1]\n        return dp[n - 1]\n"
        }
    ]
},
"accounts-merge":{
    "id": "721",
    "name": "accounts-merge",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 并查集\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/721.accounts-merge.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass UF:\n    def __init__(self):\n        self.parent = {}\n\n    def find(self, x):\n        self.parent.setdefault(x, x)\n        while x != self.parent[x]:\n            x = self.parent[x]\n        return x\n    def union(self, p, q):\n        self.parent[self.find(p)] = self.find(q)\n\n\nclass Solution:\n    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:\n        uf = UF()\n        email_to_name = {}\n        res = collections.defaultdict(list)\n        for account in accounts:\n            for i in range(1, len(account)):\n                email_to_name[account[i]] = account[0]\n                if i < len(account) - 1:uf.union(account[i], account[i + 1])\n        for email in email_to_name:\n            res[uf.find(email)].append(email)\n\n        return [[email_to_name[value[0]]] + sorted(value) for value in res.values()]\n"
        }
    ]
},
"set-matrix-zeroes":{
    "id": "73",
    "name": "set-matrix-zeroes",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 状态压缩\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "使用第一行和第一列来替代我们m+n数组",
            "link": null,
            "color": "blue"
        },
        {
            "text": "先记录下”第一行和第一列是否全是0“这样的一个数据，否则会因为后续对第一行第一列的更新造成数据丢失",
            "link": null,
            "color": "blue"
        },
        {
            "text": "最后更新第一行第一列",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/73.set-matrix-zeroes.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar setZeroes = function (matrix) {\n  if (matrix.length === 0) return matrix;\n  const m = matrix.length;\n  const n = matrix[0].length;\n  const zeroes = Array(m + n).fill(false);\n\n  for (let i = 0; i < m; i++) {\n    for (let j = 0; j < n; j++) {\n      const item = matrix[i][j];\n\n      if (item === 0) {\n        zeroes[i] = true;\n        zeroes[m + j] = true;\n      }\n    }\n  }\n\n  for (let i = 0; i < m; i++) {\n    if (zeroes[i]) {\n      matrix[i] = Array(n).fill(0);\n    }\n  }\n\n  for (let i = 0; i < n; i++) {\n    if (zeroes[m + i]) {\n      for (let j = 0; j < m; j++) {\n        matrix[j][i] = 0;\n      }\n    }\n  }\n\n  return matrix;\n};\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=73 lang=javascript\n *\n * [73] Set Matrix Zeroes\n */\n/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar setZeroes = function (matrix) {\n  if (matrix.length === 0) return matrix;\n  const m = matrix.length;\n  const n = matrix[0].length;\n\n  // 时间复杂度 O(m * n), 空间复杂度 O(1)\n  let firstRow = false; // 第一行是否应该全部为0\n  let firstCol = false; // 第一列是否应该全部为0\n\n  for (let i = 0; i < m; i++) {\n    for (let j = 0; j < n; j++) {\n      const item = matrix[i][j];\n      if (item === 0) {\n        if (i === 0) {\n          firstRow = true;\n        }\n        if (j === 0) {\n          firstCol = true;\n        }\n        matrix[0][j] = 0;\n        matrix[i][0] = 0;\n      }\n    }\n  }\n\n  for (let i = 1; i < m; i++) {\n    for (let j = 1; j < n; j++) {\n      const item = matrix[i][j];\n      if (matrix[0][j] == 0 || matrix[i][0] == 0) {\n        matrix[i][j] = 0;\n      }\n    }\n  }\n\n  // 最后处理第一行和第一列\n\n  if (firstRow) {\n    for (let i = 0; i < n; i++) {\n      matrix[0][i] = 0;\n    }\n  }\n\n  if (firstCol) {\n    for (let i = 0; i < m; i++) {\n      matrix[i][0] = 0;\n    }\n  }\n\n  return matrix;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        \"\"\"\n        Do not return anything, modify matrix in-place instead.\n        \"\"\"\n        def setRowZeros(matrix: List[List[int]], i:int) -> None:\n            C = len(matrix[0])\n            matrix[i] = [0] * C\n\n        def setColZeros(matrix: List[List[int]], j:int) -> None:\n            R = len(matrix)\n            for i in range(R):\n                matrix[i][j] = 0\n\n        isCol = False\n        R = len(matrix)\n        C = len(matrix[0])\n\n        for i in range(R):\n            if matrix[i][0] == 0:\n                isCol = True\n            for j in range(1, C):\n                if matrix[i][j] == 0:\n                    matrix[i][0] = 0\n                    matrix[0][j] = 0\n        for j in range(1, C):\n            if matrix[0][j] == 0:\n                setColZeros(matrix, j)\n\n        for i in range(R):\n            if matrix[i][0] == 0:\n                setRowZeros(matrix, i)\n\n        if isCol:\n            setColZeros(matrix, 0)\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        \"\"\"\n        这题要解决的问题是，必须有个地方记录判断结果，但又不能影响下一步的判断条件；\n        直接改为0的话，会影响下一步的判断条件；\n        因此，有一种思路是先改为None，最后再将None改为0；\n        从条件上看，如果可以将第一行、第二行作为记录空间，那么，用None应该也不算违背题目条件；\n        \"\"\"\n        rows = len(matrix)\n        cols = len(matrix[0])\n        # 遍历矩阵，用None记录要改的地方，注意如果是0则要保留，否则会影响下一步判断\n        for r in range(rows):\n            for c in range(cols):\n                if matrix[r][c] is not None and matrix[r][c] == 0:\n                    # 改值\n                    for i in range(rows):\n                        matrix[i][c] = None if matrix[i][c] != 0 else 0\n                    for j in range(cols):\n                        matrix[r][j] = None if matrix[r][j] != 0 else 0\n        # 再次遍历，将None改为0\n        for r in range(rows):\n            for c in range(cols):\n                if matrix[r][c] is None:\n                    matrix[r][c] = 0\n"
        }
    ]
},
"sort-colors":{
    "id": "75",
    "name": "sort-colors",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- [荷兰国旗问题](https://en.wikipedia.org/wiki/Dutch_national_flag_problem)\n- 排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "荷兰国旗问题",
            "link": null,
            "color": "blue"
        },
        {
            "text": "countingsort",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/75.sort-colors.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def sortColors(self, nums: List[int]) -> None:\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        \"\"\"\n        p0 = cur = 0\n        p2 = len(nums) - 1\n\n        while cur <= p2:\n            if nums[cur] == 0:\n                nums[cur], nums[p0] = nums[p0], nums[cur]\n                p0 += 1\n                cur += 1\n            elif nums[cur] == 2:\n                nums[cur], nums[p2] = nums[p2], nums[cur]\n                p2 -= 1\n            else:\n                cur += 1\n"
        }
    ]
},
"subsets-en":{
    "id": "78",
    "name": "subsets-en",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/78.subsets-en.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n/*\n * @lc app=leetcode id=78 lang=javascript\n *\n * [78] Subsets\n *\n * https://leetcode.com/problems/subsets/description/\n *\n * algorithms\n * Medium (51.19%)\n * Total Accepted:    351.6K\n * Total Submissions: 674.8K\n * Testcase Example:  '[1,2,3]'\n *\n * Given a set of distinct integers, nums, return all possible subsets (the\n * power set).\n * \n * Note: The solution set must not contain duplicate subsets.\n * \n * Example:\n * \n * \n * Input: nums = [1,2,3]\n * Output:\n * [\n * ⁠ [3],\n * [1],\n * [2],\n * [1,2,3],\n * [1,3],\n * [2,3],\n * [1,2],\n * []\n * ]\n * \n */\nfunction backtrack(list, tempList, nums, start) {\n    list.push([...tempList]);\n    for(let i = start; i < nums.length; i++) {\n        tempList.push(nums[i]);\n        backtrack(list, tempList, nums, i + 1);\n        tempList.pop();\n    }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsets = function(nums) {\n    const list = [];\n    backtrack(list, [], nums, 0);\n    return list;\n};\n"
        }
    ]
},
"subsets":{
    "id": "78",
    "name": "subsets",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回溯\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/78.subsets.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=78 lang=javascript\n *\n * [78] Subsets\n *\n * https://leetcode.com/problems/subsets/description/\n *\n * algorithms\n * Medium (51.19%)\n * Total Accepted:    351.6K\n * Total Submissions: 674.8K\n * Testcase Example:  '[1,2,3]'\n *\n * Given a set of distinct integers, nums, return all possible subsets (the\n * power set).\n *\n * Note: The solution set must not contain duplicate subsets.\n *\n * Example:\n *\n *\n * Input: nums = [1,2,3]\n * Output:\n * [\n * ⁠ [3],\n * [1],\n * [2],\n * [1,2,3],\n * [1,3],\n * [2,3],\n * [1,2],\n * []\n * ]\n *\n */\nfunction backtrack(list, tempList, nums, start) {\n  list.push([...tempList]);\n  for (let i = start; i < nums.length; i++) {\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums, i + 1);\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsets = function (nums) {\n  const list = [];\n  backtrack(list, [], nums, 0);\n  return list;\n};\n"
        }
    ]
},
"word-search-en":{
    "id": "79",
    "name": "word-search-en",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/79.word-search-en.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class LC79WordSearch {\n  public boolean exist(char[][] board, String word) {\n    if (board == null || board.length == 0 || board[0].length == 0\n        || word == null || word.length() == 0) return true;\n    int rows = board.length;\n    int cols = board[0].length;\n    for (int r = 0; r < rows; r++) {\n      for (int c = 0; c < cols; c++) {\n        // scan board, start with word first character \n        if (board[r][c] == word.charAt(0)) {\n          if (helper(board, word, r, c, 0)) {\n            return true;\n          }\n        }\n      }\n    }\n    return false;\n  }\n  \n  private boolean helper(char[][] board, String word, int r, int c, int start) {\n    // already match word all characters, return true\n    if (start == word.length()) return true;\n    if (!isValid(board, r, c) ||\n        board[r][c] != word.charAt(start)) return false;\n    // mark visited\n    board[r][c] = '*';\n    boolean res = helper(board, word, r + 1, c, start + 1)\n        ||  helper(board, word, r, c + 1, start + 1)\n        ||  helper(board, word, r - 1, c, start + 1)\n        ||  helper(board, word, r, c - 1, start + 1);\n    // backtracking to start position\n    board[r][c] = word.charAt(start);\n    return res;\n  }\n  \n  private boolean isValid(char[][] board, int r, int c) {\n    return r >= 0 && r < board.length && c >= 0 && c < board[0].length;\n  }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=79 lang=javascript\n *\n * [79] Word Search\n */\nfunction DFS(board, row, col, rows, cols, word, cur) {\n  // 边界检查\n  if (row >= rows || row < 0) return false;\n  if (col >= cols || col < 0) return false;\n\n  const item = board[row][col];\n\n  if (item !== word[cur]) return false;\n\n  if (cur + 1 === word.length) return true;\n\n  // If use HashMap keep track visited letters, then need manual clear HashMap for each backtrack which needs extra space.\n  // here we use a little trick\n  board[row][col] = null;\n\n  // UP, DOWN, LEFT, RIGHT\n  const res =\n    DFS(board, row + 1, col, rows, cols, word, cur + 1) ||\n    DFS(board, row - 1, col, rows, cols, word, cur + 1) ||\n    DFS(board, row, col - 1, rows, cols, word, cur + 1) ||\n    DFS(board, row, col + 1, rows, cols, word, cur + 1);\n\n  board[row][col] = item;\n\n  return res;\n}\n/**\n * @param {character[][]} board\n * @param {string} word\n * @return {boolean}\n */\nvar exist = function(board, word) {\n  if (word.length === 0) return true;\n  if (board.length === 0) return false;\n\n  const rows = board.length;\n  const cols = board[0].length;\n\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      const hit = DFS(board, i, j, rows, cols, word, 0);\n      if (hit) return true;\n    }\n  }\n  return false;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        m = len(board)\n        n = len(board[0])\n        \n        def dfs(board, r, c, word, index):\n            if index == len(word):\n                return True\n            if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[index]:\n                return False\n            board[r][c] = '*'\n            res = dfs(board, r - 1, c, word, index + 1) or dfs(board, r + 1, c, word, index + 1) or dfs(board, r, c - 1, word, index + 1) or dfs(board, r, c + 1, word, index + 1)\n            board[r][c] = word[index]\n            return res\n        \n        for r in range(m):\n            for c in range(n):\n                if board[r][c] == word[0]:\n                    if dfs(board, r, c, word, 0):\n                        return True\n"
        }
    ]
},
"word-search":{
    "id": "79",
    "name": "word-search",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回溯\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历二维数组的每一个点，找到起始点相同的字符，做DFS",
            "link": null,
            "color": "blue"
        },
        {
            "text": "DFS过程中，要记录已经访问过的节点，防止重复遍历，这里（JavaCode中）用`*`表示当前已经访问过，也可以用Set或者是boolean[][]数组记录访问过的节点位置。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "是否匹配当前单词中的字符，不符合回溯，这里记得把当前`*`重新设为当前字符。如果用Set或者是boolean[][]数组，记得把当前位置重设为没有访问过。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/79.word-search.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class LC79WordSearch {\n  public boolean exist(char[][] board, String word) {\n    if (board == null || board.length == 0 || board[0].length == 0\n        || word == null || word.length() == 0) return true;\n    int rows = board.length;\n    int cols = board[0].length;\n    for (int r = 0; r < rows; r++) {\n      for (int c = 0; c < cols; c++) {\n        // scan board, start with word first character\n        if (board[r][c] == word.charAt(0)) {\n          if (helper(board, word, r, c, 0)) {\n            return true;\n          }\n        }\n      }\n    }\n    return false;\n  }\n\n  private boolean helper(char[][] board, String word, int r, int c, int start) {\n    // already match word all characters, return true\n    if (start == word.length()) return true;\n    if (!isValid(board, r, c) ||\n        board[r][c] != word.charAt(start)) return false;\n    // mark visited\n    board[r][c] = '*';\n    boolean res = helper(board, word, r - 1, c, start + 1) // 上\n        ||  helper(board, word, r + 1, c, start + 1)       // 下\n        ||  helper(board, word, r, c - 1, start + 1)       // 左\n        ||  helper(board, word, r, c + 1, start + 1);      // 右\n    // backtracking to start position\n    board[r][c] = word.charAt(start);\n    return res;\n  }\n\n  private boolean isValid(char[][] board, int r, int c) {\n    return r >= 0 && r < board.length && c >= 0 && c < board[0].length;\n  }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=79 lang=javascript\n *\n * [79] Word Search\n */\nfunction DFS(board, row, col, rows, cols, word, cur) {\n  // 边界检查\n  if (row >= rows || row < 0) return false;\n  if (col >= cols || col < 0) return false;\n\n  const item = board[row][col];\n\n  if (item !== word[cur]) return false;\n\n  if (cur + 1 === word.length) return true;\n\n  // 如果你用hashmap记录访问的字母， 那么你需要每次backtrack的时候手动清除hashmap，并且需要额外的空间\n  // 这里我们使用一个little trick\n\n  board[row][col] = null;\n\n  // 上下左右\n  const res =\n    DFS(board, row + 1, col, rows, cols, word, cur + 1) ||\n    DFS(board, row - 1, col, rows, cols, word, cur + 1) ||\n    DFS(board, row, col - 1, rows, cols, word, cur + 1) ||\n    DFS(board, row, col + 1, rows, cols, word, cur + 1);\n\n  board[row][col] = item;\n\n  return res;\n}\n/**\n * @param {character[][]} board\n * @param {string} word\n * @return {boolean}\n */\nvar exist = function (board, word) {\n  if (word.length === 0) return true;\n  if (board.length === 0) return false;\n\n  const rows = board.length;\n  const cols = board[0].length;\n\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      const hit = DFS(board, i, j, rows, cols, word, 0);\n      if (hit) return true;\n    }\n  }\n  return false;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        m = len(board)\n        n = len(board[0])\n\n        def dfs(board, r, c, word, index):\n            if index == len(word):\n                return True\n            if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[index]:\n                return False\n            board[r][c] = '*'\n            res = dfs(board, r - 1, c, word, index + 1) or dfs(board, r + 1, c, word, index + 1) or dfs(board, r, c - 1, word, index + 1) or dfs(board, r, c + 1, word, index + 1)\n            board[r][c] = word[index]\n            return res\n\n        for r in range(m):\n            for c in range(n):\n                if board[r][c] == word[0]:\n                    if dfs(board, r, c, word, 0):\n                        return True\n"
        }
    ]
},
"remove-duplicates-from-sorted-array-ii":{
    "id": "80",
    "name": "remove-duplicates-from-sorted-array-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "快慢指针",
            "link": null,
            "color": "blue"
        },
        {
            "text": "读写指针",
            "link": null,
            "color": "blue"
        },
        {
            "text": "删除排序问题",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/80.remove-duplicates-from-sorted-array-ii.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        # 写指针\n        i = 0\n        K = 2\n        for num in nums:\n            if i < K or num != nums[i-K]:\n                nums[i] = num\n                i += 1\n        return i\n"
        }
    ]
},
"short-encoding-of-words":{
    "id": "820",
    "name": "short-encoding-of-words",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 前缀树\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀树",
            "link": null,
            "color": "blue"
        },
        {
            "text": "去重",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/820.short-encoding-of-words.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Trie:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.Trie = {}\n\n    def insert(self, word):\n        \"\"\"\n        Inserts a word into the trie.\n        :type word: str\n        :rtype: void\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                curr[w] = {}\n            curr = curr[w]\n        curr['#'] = 1\n\n    def isTail(self, word):\n        \"\"\"\n        Returns if the word is in the trie.\n        :type word: str\n        :rtype: bool\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            curr = curr[w]\n        return len(curr) == 1\nclass Solution:\n    def minimumLengthEncoding(self, words: List[str]) -> int:\n        trie = Trie()\n        cnt = 0\n        words = set(words)\n        for word in words:\n            trie.insert(word[::-1])\n        for word in words:\n            if trie.isTail(word[::-1]):\n                cnt += len(word) + 1\n        return cnt\n\n"
        }
    ]
},
"largest-rectangle-in-histogram":{
    "id": "84",
    "name": "largest-rectangle-in-histogram",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 单调栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/84.largest-rectangle-in-histogram.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n, ans = len(heights), 0\n        if n != 0:\n            ans = heights[0]\n        for i in range(n):\n            height = heights[i]\n            for j in range(i, n):\n                height = min(height, heights[j])\n                ans = max(ans, (j - i + 1) * height)\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n = len(heights)\n        l, r, ans = [-1] * n, [n] * n, 0\n        for i in range(1, n):\n            j = i - 1\n            while j >= 0 and heights[j] >= heights[i]:\n                j -= 1\n            l[i] = j\n        for i in range(n - 2, -1, -1):\n            j = i + 1\n            while j < n and heights[j] >= heights[i]:\n                j += 1\n            r[i] = j\n        for i in range(n):\n            ans = max(ans, heights[i] * (r[i] - l[i] - 1))\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n = len(heights)\n        l, r, ans = [-1] * n, [n] * n, 0\n\n        for i in range(1, n):\n            j = i - 1\n            while j >= 0 and heights[j] >= heights[i]:\n                j = l[j]\n            l[i] = j\n        for i in range(n - 2, -1, -1):\n            j = i + 1\n            while j < n and heights[j] >= heights[i]:\n                j = r[j]\n            r[i] = j\n        for i in range(n):\n            ans = max(ans, heights[i] * (r[i] - l[i] - 1))\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n, heights, st, ans = len(heights), [0] + heights + [0], [], 0\n        for i in range(n + 2):\n            while st and heights[st[-1]] > heights[i]:\n                ans = max(ans, heights[st.pop(-1)] * (i - st[-1] - 1))\n            st.append(i)\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n, heights, st, ans = len(heights),[0] + heights + [0], [], 0\n        for i in range(n + 2):\n            while st and heights[st[-1]] > heights[i]:\n                a = heights[st[-1]]\n                # 如果没有前面的哨兵，这里可能会越界。\n                st.pop()\n                ans = max(ans, a * (i - 1 - st[-1]))\n            st.append(i)\n        return ans\n"
        }
    ]
},
"maximal-rectangle":{
    "id": "85",
    "name": "maximal-rectangle",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 单调栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/85.maximal-rectangle.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n, heights, st, ans = len(heights), [0] + heights + [0], [], 0\n        for i in range(n + 2):\n            while st and heights[st[-1]] > heights[i]:\n                ans = max(ans, heights[st.pop(-1)] * (i - st[-1] - 1))\n            st.append(i)\n\n        return ans\n    def maximalRectangle(self, matrix: List[List[str]]) -> int:\n        m = len(matrix)\n        if m == 0: return 0\n        n = len(matrix[0])\n        heights = [0] * n\n        ans = 0\n        for i in range(m):\n            for j in range(n):\n                if matrix[i][j] == \"0\":\n                    heights[j] = 0\n                else:\n                    heights[j] += 1\n            ans = max(ans, self.largestRectangleArea(heights))\n        return ans\n\n"
        }
    ]
},
"partition-list":{
    "id": "86",
    "name": "partition-list",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "链表的基本操作（遍历）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "虚拟节点dummy简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历完成之后记得`currentL1.next=null;`否则会内存溢出>如果单纯的遍历是不需要上面操作的，但是我们的遍历会导致currentL1.next和currentL2.next>中有且仅有一个不是null，如果不这么操作的话会导致两个链表成环，造成溢出。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/86.partition-list.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=86 lang=javascript\n *\n * [86] Partition List\n *\n * https://leetcode.com/problems/partition-list/description/\n *\n * algorithms\n * Medium (36.41%)\n * Total Accepted:    155.1K\n * Total Submissions: 425.1K\n * Testcase Example:  '[1,4,3,2,5,2]\\n3'\n *\n * Given a linked list and a value x, partition it such that all nodes less\n * than x come before nodes greater than or equal to x.\n *\n * You should preserve the original relative order of the nodes in each of the\n * two partitions.\n *\n * Example:\n *\n *\n * Input: head = 1->4->3->2->5->2, x = 3\n * Output: 1->2->2->4->3->5\n *\n *\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} x\n * @return {ListNode}\n */\nvar partition = function (head, x) {\n  const dummyHead1 = {\n    next: null,\n  };\n  const dummyHead2 = {\n    next: null,\n  };\n\n  let current = {\n    next: head,\n  };\n  let currentL1 = dummyHead1;\n  let currentL2 = dummyHead2;\n  while (current.next) {\n    current = current.next;\n    if (current.val < x) {\n      currentL1.next = current;\n      currentL1 = current;\n    } else {\n      currentL2.next = current;\n      currentL2 = current;\n    }\n  }\n\n  currentL2.next = null;\n\n  currentL1.next = dummyHead2.next;\n\n  return dummyHead1.next;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def partition(self, head: ListNode, x: int) -> ListNode:\n        \"\"\"在原链表操作，思路基本一致，只是通过指针进行区分而已\"\"\"\n        # 在链表最前面设定一个初始node作为锚点，方便返回最后的结果\n        first_node = ListNode(0)\n        first_node.next = head\n        # 设计三个指针，一个指向小于x的最后一个节点，即前后分离点\n        # 一个指向当前遍历节点的前一个节点\n        # 一个指向当前遍历的节点\n        sep_node = first_node\n        pre_node = first_node\n        current_node = head\n\n        while current_node is not None:\n            if current_node.val < x:\n                # 注意有可能出现前一个节点就是分离节点的情况\n                if pre_node is sep_node:\n                    pre_node = current_node\n                    sep_node = current_node\n                    current_node = current_node.next\n                else:\n                    # 这段次序比较烧脑\n                    pre_node.next = current_node.next\n                    current_node.next = sep_node.next\n                    sep_node.next = current_node\n                    sep_node = current_node\n                    current_node = pre_node.next\n            else:\n                pre_node = current_node\n                current_node = pre_node.next\n\n        return first_node.next\n"
        }
    ]
},
"walking-robot-simulation":{
    "id": "874",
    "name": "walking-robot-simulation",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "理解题意，这道题容易理解错题意，求解为`最终位置距离原点的距离`",
            "link": null,
            "color": "blue"
        },
        {
            "text": "建立坐标系",
            "link": null,
            "color": "blue"
        },
        {
            "text": "使用集合简化线形查找的时间复杂度。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/874.walking-robot-simulation.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:\n        pos = [0, 0]\n        deg = 90\n        ans = 0\n        obstaclesSet = set(map(tuple, obstacles))\n\n        for command in commands:\n            if command == -1:\n                deg = (deg + 270) % 360\n            elif command == -2:\n                deg = (deg + 90) % 360\n            else:\n                if deg == 0:\n                    i = 0\n                    while i < command and not (pos[0] + 1, pos[1]) in obstaclesSet:\n                        pos[0] += 1\n                        i += 1\n                if deg == 90:\n                    i = 0\n                    while i < command and not (pos[0], pos[1] + 1) in obstaclesSet:\n                        pos[1] += 1\n                        i += 1\n                if deg == 180:\n                    i = 0\n                    while i < command and not (pos[0] - 1, pos[1]) in obstaclesSet:\n                        pos[0] -= 1\n                        i += 1\n                if deg == 270:\n                    i = 0\n                    while i < command and not (pos[0], pos[1] - 1) in obstaclesSet:\n                        pos[1] -= 1\n                        i += 1\n                ans = max(ans, pos[0] ** 2 + pos[1] ** 2)\n        return ans\n"
        }
    ]
},
"koko-eating-bananas":{
    "id": "875",
    "name": "koko-eating-bananas",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 二分查找\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二分查找",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/875.koko-eating-bananas.md",
    "code": [
        {
            "language": "js",
            "text": "\n\nfunction canEatAllBananas(piles, H, mid) {\n     let h = 0;\n     for(let pile of piles) {\n        h += Math.ceil(pile / mid);\n     }\n\n     return h <= H;\n }\n/**\n * @param {number[]} piles\n * @param {number} H\n * @return {number}\n */\nvar minEatingSpeed = function(piles, H) {\n    let lo = 1,\n    hi = Math.max(...piles);\n\n    while(lo <= hi) {\n        let mid = lo + ((hi - lo) >> 1);\n        if (canEatAllBananas(piles, H, mid)) {\n            hi = mid - 1;\n        } else {\n            lo = mid + 1;\n        }\n    }\n\n    return lo; //  不能选择hi\n};\n"
        }
    ]
},
"stone-game":{
    "id": "877",
    "name": "stone-game",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "可以用DP（动态规划）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "可以从数学的角度去分析>......(😅)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/877.stone-game.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} piles\n * @return {boolean}\n */\nvar stoneGame = function(piles) {\n  return true;\n};\n"
        }
    ]
},
"merge-sorted-array":{
    "id": "88",
    "name": "merge-sorted-array",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 归并排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "从后往前比较，并从后往前插入",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/88.merge-sorted-array.md",
    "code": [
        {
            "language": "js",
            "text": "\n// 这种解法连m都用不到\n// 这显然不是出题人的意思\nif (n === 0) return;\nlet current2 = 0;\nfor (let i = nums1.length - 1; i >= nums1.length - n; i--) {\n  nums1[i] = nums2[current2++];\n}\nnums1.sort((a, b) => a - b); // 当然你可以自己写排序，这里懒得写了，因为已经偏离了题目本身\n"
        },
        {
            "language": "js",
            "text": "\n// 将nums1 和 nums2 合并\nfunction merge(nums1, nums2) {\n  let ret = [];\n  while (nums1.length || nums2.length) {\n    // 为了方便大家理解，这里代码有点赘余\n    if (nums1.length === 0) {\n      ret.push(nums2.shift());\n      continue;\n    }\n\n    if (nums2.length === 0) {\n      ret.push(nums1.shift());\n      continue;\n    }\n    const a = nums1[0];\n    const b = nums2[0];\n    if (a > b) {\n      ret.push(nums2.shift());\n    } else {\n      ret.push(nums1.shift());\n    }\n  }\n  return ret;\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar merge = function (nums1, m, nums2, n) {\n  // 设置一个指针，指针初始化指向nums1的末尾（根据#62，应该是index为 m+n-1 的位置，因为nums1的长度有可能更长）\n  // 然后不断左移指针更新元素\n  let current = m + n - 1;\n\n  while (current >= 0) {\n    // 没必要继续了\n    if (n === 0) return;\n\n    // 为了方便大家理解，这里代码有点赘余\n    if (m < 1) {\n      nums1[current--] = nums2[--n];\n      continue;\n    }\n\n    if (n < 1) {\n      nums1[current--] = nums1[--m];\n      continue;\n    }\n    // 取大的填充 nums1的末尾\n    // 然后更新 m 或者 n\n    if (nums1[m - 1] > nums2[n - 1]) {\n      nums1[current--] = nums1[--m];\n    } else {\n      nums1[current--] = nums2[--n];\n    }\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        \"\"\"\n        Do not return anything, modify nums1 in-place instead.\n        \"\"\"\n        # 整体思路相似，只不过没有使用 current 指针记录当前填补位置\n        while m > 0 and n > 0:\n            if nums1[m-1] <= nums2[n-1]:\n                nums1[m+n-1] = nums2[n-1]\n                n -= 1\n            else:\n                nums1[m+n-1] = nums1[m-1]\n                m -=1\n        \"\"\"\n        由于没有使用 current，第一步比较结束后有两种情况:\n            1. 指针 m>0，n=0，此时不需要做任何处理\n            2. 指针 n>0，m=0，此时需要将 nums2 指针左侧元素全部拷贝到 nums1 的前 n 位\n        \"\"\"\n        if n > 0:\n            nums1[:n] = nums2[:n]\n"
        }
    ]
},
"super-egg-drop":{
    "id": "887",
    "name": "super-egg-drop",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "dp建模思路要发生变化,即`dp[M][K]meansthat,givenKeggsandMmoves，whatisthemaximumnumberoffloorthatwecancheck.`",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/887.super-egg-drop.md",
    "code": [
        {
            "language": "js",
            "text": "\n const dp = Array(K + 1);\n    dp[0] = Array(N + 1).fill(0);\n    for (let i = 1; i < K + 1; i++) {\n      dp[i] = [0];\n      for (let j = 1; j < N + 1; j++) {\n        // 只有一个鸡蛋\n        if (i === 1) {\n          dp[i][j] = j;\n          continue;\n        }\n        // 只有一层楼\n        if (j === 1) {\n          dp[i][j] = 1;\n          continue;\n        }\n\n        // 每一层我们都模拟一遍\n        const all = [];\n        for (let k = 1; k < j + 1; k++) {\n          const brokenCount = dp[i - 1][k - 1]; // 如果碎了\n          const notBrokenCount = dp[i][j - k]; // 如果没碎\n          all.push(Math.max(brokenCount, notBrokenCount)); // 最坏的可能\n        }\n        dp[i][j] = Math.min(...all) + 1; // 最坏的集合中我们取最好的情况\n      }\n    }\n\n    return dp[K][N];\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number} K\n * @param {number} N\n * @return {number}\n */\nvar superEggDrop = function(K, N) {\n  // 不选择dp[K][M]的原因是dp[M][K]可以简化操作\n  const dp = Array(N + 1).fill(0).map(_ => Array(K + 1).fill(0))\n  \n  let m = 0;\n  while (dp[m][K] < N) {\n      m++;\n      for (let k = 1; k <= K; ++k)\n          dp[m][k] = dp[m - 1][k - 1] + 1 + dp[m - 1][k];\n  }\n  return m;\n};\n"
        }
    ]
},
"maximum-frequency-stack":{
    "id": "895",
    "name": "maximum-frequency-stack",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 栈\n- 哈希表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "栈的基本性质",
            "link": null,
            "color": "blue"
        },
        {
            "text": "hashtable的基本性质",
            "link": null,
            "color": "blue"
        },
        {
            "text": "push和pop的时候同时更新fraq，max_fraq和fraq_stack。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/895.maximum-frequency-stack.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass FreqStack:\n\n    def __init__(self):\n        self.fraq = collections.defaultdict(lambda: 0)\n        self.fraq_stack = collections.defaultdict(list)\n        self.max_fraq = 0\n        \n    def push(self, x: int) -> None:\n        self.fraq[x] += 1\n        if self.fraq[x] > self.max_fraq:\n            self.max_fraq = self.fraq[x]\n        self.fraq_stack[self.fraq[x]].append(x)    \n        \n    def pop(self) -> int:\n        ans = self.fraq_stack[self.max_fraq].pop()\n        self.fraq[ans] -= 1\n        if not self.fraq_stack[self.max_fraq]:\n            self.max_fraq -= 1\n        return ans\n\n# Your FreqStack object will be instantiated and called as such:\n# obj = FreqStack()\n# obj.push(x)\n# param_2 = obj.pop()\n"
        }
    ]
},
"subsets-ii-en":{
    "id": "90",
    "name": "subsets-ii-en",
    "company": [],
    "tags": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/90.subsets-ii-en.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=90 lang=javascript\n *\n * [90] Subsets II\n *\n * https://leetcode.com/problems/subsets-ii/description/\n *\n * algorithms\n * Medium (41.53%)\n * Total Accepted:    197.1K\n * Total Submissions: 469.1K\n * Testcase Example:  '[1,2,2]'\n *\n * Given a collection of integers that might contain duplicates, nums, return\n * all possible subsets (the power set).\n * \n * Note: The solution set must not contain duplicate subsets.\n * \n * Example:\n * \n * \n * Input: [1,2,2]\n * Output:\n * [\n * ⁠ [2],\n * ⁠ [1],\n * ⁠ [1,2,2],\n * ⁠ [2,2],\n * ⁠ [1,2],\n * ⁠ []\n * ]\n * \n * \n */\nfunction backtrack(list, tempList, nums, start) {\n    list.push([...tempList]);\n    for(let i = start; i < nums.length; i++) {\n        //nums can be duplicated, which is different from Problem 78 - subsets\n        //So the situation should be taken into consideration\n        if (i > start && nums[i] === nums[i - 1]) continue;\n        tempList.push(nums[i]);\n        backtrack(list, tempList, nums, i + 1)\n        tempList.pop();\n    }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsetsWithDup = function(nums) {\n    const list = [];\n    backtrack(list, [], nums.sort((a, b) => a - b), 0, [])\n    return list;\n};\n"
        }
    ]
},
"subsets-ii":{
    "id": "90",
    "name": "subsets-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 回溯\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/90.subsets-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=90 lang=javascript\n *\n * [90] Subsets II\n *\n * https://leetcode.com/problems/subsets-ii/description/\n *\n * algorithms\n * Medium (41.53%)\n * Total Accepted:    197.1K\n * Total Submissions: 469.1K\n * Testcase Example:  '[1,2,2]'\n *\n * Given a collection of integers that might contain duplicates, nums, return\n * all possible subsets (the power set).\n *\n * Note: The solution set must not contain duplicate subsets.\n *\n * Example:\n *\n *\n * Input: [1,2,2]\n * Output:\n * [\n * ⁠ [2],\n * ⁠ [1],\n * ⁠ [1,2,2],\n * ⁠ [2,2],\n * ⁠ [1,2],\n * ⁠ []\n * ]\n *\n *\n */\nfunction backtrack(list, tempList, nums, start) {\n  list.push([...tempList]);\n  for (let i = start; i < nums.length; i++) {\n    // 和78.subsets的区别在于这道题nums可以有重复\n    // 因此需要过滤这种情况\n    if (i > start && nums[i] === nums[i - 1]) continue;\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums, i + 1);\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsetsWithDup = function (nums) {\n  const list = [];\n  backtrack(\n    list,\n    [],\n    nums.sort((a, b) => a - b),\n    0,\n    []\n  );\n  return list;\n};\n"
        }
    ]
},
"rle-iterator":{
    "id": "900",
    "name": "rle-iterator",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/900.rle-iterator.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} A\n */\nvar RLEIterator = function(A) {\n    this.A = A;\n    this.current = 0;\n};\n\n\n/** \n * @param {number} n\n * @return {number}\n */\nRLEIterator.prototype.next = function(n) {\n    const A = this.A;\n    while(this.current < A.length && A[this.current] < n){\n        n = n - A[this.current];\n        this.current += 2;\n    }\n    \n    if(this.current >= A.length){\n        return -1;\n    }\n    \n    A[this.current] = A[this.current] - n; // 更新Count\n    return A[this.current + 1]; // 返回element\n};\n\n/** \n * Your RLEIterator object will be instantiated and called as such:\n * var obj = new RLEIterator(A)\n * var param_1 = obj.next(n)\n */\n"
        }
    ]
},
"decode-ways":{
    "id": "91",
    "name": "decode-ways",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 爬楼梯问题\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "爬楼梯问题（我把这种题目统称为爬楼梯问题）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/91.decode-ways.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=91 lang=javascript\n *\n * [91] Decode Ways\n *\n * https://leetcode.com/problems/decode-ways/description/\n *\n * algorithms\n * Medium (21.93%)\n * Total Accepted:    254.4K\n * Total Submissions: 1.1M\n * Testcase Example:  '\"12\"'\n *\n * A message containing letters from A-Z is being encoded to numbers using the\n * following mapping:\n *\n *\n * 'A' -> 1\n * 'B' -> 2\n * ...\n * 'Z' -> 26\n *\n *\n * Given a non-empty string containing only digits, determine the total number\n * of ways to decode it.\n *\n * Example 1:\n *\n *\n * Input: \"12\"\n * Output: 2\n * Explanation: It could be decoded as \"AB\" (1 2) or \"L\" (12).\n *\n *\n * Example 2:\n *\n *\n * Input: \"226\"\n * Output: 3\n * Explanation: It could be decoded as \"BZ\" (2 26), \"VF\" (22 6), or \"BBF\" (2 2\n * 6).\n *\n */\n/**\n * @param {string} s\n * @return {number}\n */\nvar numDecodings = function (s) {\n  if (s == null || s.length == 0) {\n    return 0;\n  }\n  const dp = Array(s.length + 1).fill(0);\n  dp[0] = 1;\n  dp[1] = s[0] !== \"0\" ? 1 : 0;\n  for (let i = 2; i < s.length + 1; i++) {\n    const one = +s.slice(i - 1, i);\n    const two = +s.slice(i - 2, i);\n\n    if (two >= 10 && two <= 26) {\n      dp[i] = dp[i - 2];\n    }\n\n    if (one >= 1 && one <= 9) {\n      dp[i] += dp[i - 1];\n    }\n  }\n\n  return dp[dp.length - 1];\n};\n"
        }
    ]
},
"sort-an-array":{
    "id": "912",
    "name": "sort-an-array",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "排序算法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "注意题目的限制条件从而选择合适的算法",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/912.sort-an-array.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar sortArray = function(nums) {\n    const counts = Array(50000 * 2 + 1).fill(0);\n    const res = [];\n    for(const num of nums) counts[50000 + num] += 1;\n    for(let i in counts)  {\n        while(counts[i]--) {\n            res.push(i - 50000)\n        }\n    }\n    return res;\n};\n"
        },
        {
            "language": "js",
            "text": "\nfunction swap(nums, a, b) {\n    const temp = nums[a];\n    nums[a] = nums[b];\n    nums[b] = temp;\n}\n\nfunction helper(nums, start, end) {\n    if (start >= end) return;\n    const pivotIndex = start + ((end - start) >>> 1)\n    const pivot = nums[pivotIndex]\n    let i = start;\n    let j = end;\n    while (i <= j) {\n        while (nums[i] < pivot) i++;\n        while (nums[j] > pivot) j--;\n        if (i <= j) {\n            swap(nums, i, j);\n            i++;\n            j--;\n        }\n    }\n    helper(nums, start, j);\n    helper(nums, i, end);\n}\n\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar sortArray = function(nums) {\n    helper(nums, 0, nums.length - 1);\n    return nums;\n};\n"
        }
    ]
},
"reverse-linked-list-ii":{
    "id": "92",
    "name": "reverse-linked-list-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "链表的基本操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "考虑特殊情况m是1或者n是链表长度的情况，我们可以采用虚拟节点dummy简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "用四个变量记录特殊节点，然后操作这四个节点使之按照一定方式连接即可。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "注意更新current和pre的位置，否则有可能出现溢出",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/92.reverse-linked-list-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=92 lang=javascript\n *\n * [92] Reverse Linked List II\n *\n * https://leetcode.com/problems/reverse-linked-list-ii/description/\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} m\n * @param {number} n\n * @return {ListNode}\n */\nvar reverseBetween = function (head, m, n) {\n  // 虚拟节点，简化操作\n  const dummyHead = {\n    next: head,\n  };\n\n  let cur = dummyHead.next; // 当前遍历的节点\n  let pre = cur; // 因为要反转，因此我们需要记住前一个节点\n  let index = 0; // 链表索引，用来判断是否是特殊位置（头尾位置）\n\n  // 上面提到的四个特殊节点\n  let p1 = (p2 = p3 = p4 = null);\n\n  while (cur) {\n    const next = cur.next;\n    index++;\n\n    // 对 (m - n) 范围内的节点进行反转\n    if (index > m && index <= n) {\n      cur.next = pre;\n    }\n\n    // 下面四个if都是边界, 用于更新四个特殊节点的值\n    if (index === m - 1) {\n      p1 = cur;\n    }\n    if (index === m) {\n      p2 = cur;\n    }\n\n    if (index === n) {\n      p3 = cur;\n    }\n\n    if (index === n + 1) {\n      p4 = cur;\n    }\n\n    pre = cur;\n\n    cur = next;\n  }\n\n  // 两个链表合并起来\n  (p1 || dummyHead).next = p3; // 特殊情况需要考虑\n  p2.next = p4;\n\n  return dummyHead.next;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* reverseBetween(ListNode* head, int s, int e) {\n        if (s == e) return head;\n        ListNode* prev = nullptr;\n        auto cur = head;\n        for (int i = 1; i < s; ++i) {\n            prev = cur;\n            cur = cur->next;\n        }\n        // 此时各指针指向：\n        // x -> x -> x -> x  -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> x -> x -> x ->\n        // ^head          ^prev ^cur\n        ListNode* p = nullptr;\n        auto c = cur;\n        auto tail = c;\n        ListNode* n = nullptr;\n        for (int i = s; i <= e; ++i) {\n            n = c->next;\n            c->next = p;\n            p = c;\n            c = n;\n        }\n        // 此时各指针指向：\n        // x -> x -> x -> x     8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1     x -> x -> x ->\n        // ^head          ^prev ^p                                 ^cur  ^c\n        //                                                         ^tail\n        if (prev != nullptr) { // 若指向前一个节点的指针不为空，则说明s在链表中间（不是头节点）\n            prev->next = p;\n            cur->next = c;\n            return head;\n        } else {\n            if (tail != nullptr) tail->next = c;\n            return p;\n        }\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:\n        pre = None\n        cur = head\n        i = 0\n        p1 = p2 = p3 = p4 = None\n        # ...\n        if p1:\n            p1.next = p3\n        else:\n            dummy.next = p3\n        if p2:\n            p2.next = p4\n        return head\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n   def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:\n       pre = None\n       cur = head\n       i = 0\n       p1 = p2 = p3 = p4 = None\n       dummy = ListNode(0)\n       dummy.next = head\n\n       # ...\n\n       if p1:\n           p1.next = p3\n       else:\n           dummy.next = p3\n       if p2:\n           p2.next = p4\n\n       return dummy.next\n"
        },
        {
            "language": "py",
            "text": "\n    while cur:\n           i += 1\n           if i == m - 1:\n               p1 = cur\n           next = cur.next\n           if m < i <= n:\n               cur.next = pre\n\n           if i == m:\n               p2 = cur\n               p2.next = None\n\n           if i == n:\n               p3 = cur\n\n           if i == n + 1:\n               p4 = cur\n\n           pre = cur\n           cur = next\n"
        }
    ]
},
"knight-dialer":{
    "id": "935",
    "name": "knight-dialer",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- DFS\n- 记忆化搜索\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/935.knight-dialer.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def knightDialer(self, N: int) -> int:\n        cnt = 0\n        jump = [[4, 6], [6, 8], [7, 9], [4, 8], [\n            0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]]\n        visited = dict()\n\n        def helper(i, n):\n            if (i, n) in visited: return visited[(i, n)]\n            if n == 1:\n                return 1\n            cnt = 0\n            for j in jump[i]:\n                cnt += helper(j, n - 1)\n            visited[(i, n)] = cnt\n            return cnt\n        for i in range(10):\n            cnt += helper(i, N)\n        return cnt % (10**9 + 7)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def knightDialer(self, N: int) -> int:\n        a0 = a1 = a2 = a3 = a4 = a5 = a6 = a7 = a8 = a9 = 1\n        for _ in range(N - 1):\n            a0, a1, a2, a3, a4, a5, a6, a7, a8, a9 = a4 + a6, a6 + a8, a7 + \\\n                a9, a4 + a8, a0 + a3 + a9, 0, a0 + a1 + a7, a2 + a6, a1 + a3, a2 + a4\n        return (a0 + a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9) % (10**9 + 7)\n"
        }
    ]
},
"binary-tree-inorder-traversal":{
    "id": "94",
    "name": "binary-tree-inorder-traversal",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 二叉树\n- 递归\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二叉树的基本操作（遍历）>不同的遍历算法差异还是蛮大的",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果非递归的话利用栈来简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果数据规模不大的话，建议使用递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "递归的问题需要注意两点，一个是终止条件，一个如何缩小规模1.终止条件，自然是当前这个元素是null（链表也是一样）2.由于二叉树本身就是一个递归结构，每次处理一个子树其实就是缩小了规模，难点在于如何合并结果，这里的合并结果其实就是`left.concat(mid).concat(right)`,mid是一个具体的节点，left和right`递归求出即可`",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/94.binary-tree-inorder-traversal.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    List<Integer> res = new LinkedList<>();\n    public List<Integer> inorderTraversal(TreeNode root) {\n        inorder(root);\n        return res;\n    }\n\n    public void inorder (TreeNode root) {\n        if (root == null) return;\n\n        inorder(root.left);\n\n        res.add(root.val);\n\n        inorder(root.right);\n    }\n}\n"
        },
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        List<Integer> res = new ArrayList<> ();\n        Stack<TreeNode> stack = new Stack<> ();\n\n        while (root != null || !stack.isEmpty()) {\n            while (root != null) {\n                stack.push(root);\n                root = root.left;\n            }\n            root = stack.pop();\n            res.add(root.val);\n            root = root.right;\n        }\n        return res;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=94 lang=javascript\n *\n * [94] Binary Tree Inorder Traversal\n *\n * https://leetcode.com/problems/binary-tree-inorder-traversal/description/\n *\n * algorithms\n * Medium (55.22%)\n * Total Accepted:    422.4K\n * Total Submissions: 762.1K\n * Testcase Example:  '[1,null,2,3]'\n *\n * Given a binary tree, return the inorder traversal of its nodes' values.\n *\n * Example:\n *\n *\n * Input: [1,null,2,3]\n * ⁠  1\n * ⁠   \\\n * ⁠    2\n * ⁠   /\n * ⁠  3\n *\n * Output: [1,3,2]\n *\n * Follow up: Recursive solution is trivial, could you do it iteratively?\n *\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar inorderTraversal = function (root) {\n  // 1. Recursive solution\n  // if (!root) return [];\n  // const left = root.left ? inorderTraversal(root.left) : [];\n  // const right = root.right ? inorderTraversal(root.right) : [];\n  // return left.concat([root.val]).concat(right);\n\n  // 2. iterative solutuon\n  if (!root) return [];\n  const stack = [root];\n  const ret = [];\n  let left = root.left;\n\n  let item = null; // stack 中弹出的当前项\n\n  while (left) {\n    stack.push(left);\n    left = left.left;\n  }\n\n  while ((item = stack.pop())) {\n    ret.push(item.val);\n    let t = item.right;\n\n    while (t) {\n      stack.push(t);\n      t = t.left;\n    }\n  }\n\n  return ret;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode* root) {\n        vector<TreeNode*> s;\n        vector<int> v;\n        while (root != NULL || !s.empty()) {\n            for (; root != NULL; root = root->left)\n                s.push_back(root);\n            v.push_back(s.back()->val);\n            root = s.back()->right;\n            s.pop_back();\n        }\n        return v;\n    }\n};\n"
        }
    ]
},
"unique-binary-search-trees-ii":{
    "id": "95",
    "name": "unique-binary-search-trees-ii",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 二叉搜索树\n- 分治\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分治法",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/95.unique-binary-search-trees-ii.md",
    "code": []
},
"unique-binary-search-trees":{
    "id": "96",
    "name": "unique-binary-search-trees",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 二叉搜索树\n- 分治\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分治法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "笛卡尔积",
            "link": null,
            "color": "blue"
        },
        {
            "text": "记忆化递归",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/96.unique-binary-search-trees.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def numTrees(self, n: int) -> int:\n        if n <= 1:\n            return 1\n        res = 0\n        for i in range(1, n + 1):\n            res += self.numTrees(i - 1) * self.numTrees(n - i)\n        return res\n"
        }
    ]
},
"validate-binary-search-tree":{
    "id": "98",
    "name": "validate-binary-search-tree",
    "company": [],
    "tags": [],
    "pre": [
        {
            "text": "\n\n- 中序遍历\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二叉树的基本操作（遍历）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "中序遍历一个二叉查找树（BST）的结果是一个有序数组",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果一个树遍历的结果是有序数组，那么他也是一个二叉查找树(BST)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/98.validate-binary-search-tree.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public boolean isValidBST(TreeNode root) {\n        Stack<Integer> stack = new Stack<> ();\n        TreeNode previous = null;\n\n        while (root != null || !stack.isEmpty()) {\n            while (root != null) {\n                stack.push(root);\n                root = root.left;\n            }\n            root = stack.pop();\n            if (previous != null && root.val <= previous.val ) return false;\n            previous = root;\n            root = root.right;\n        }\n        return true;\n    }\n}\n"
        },
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public boolean isValidBST(TreeNode root) {\n        return helper(root, null, null);\n    }\n\n    private boolean helper(TreeNode root, Integer lower, Integer higher) {\n        if (root == null) return true;\n\n        if (lower != null && root.val <= lower) return false;\n        if (higher != null && root.val >= higher) return false;\n\n        if (!helper(root.left, lower, root.val)) return false;\n        if (!helper(root.right, root.val, higher)) return false;\n\n        return true;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=98 lang=javascript\n *\n * [98] Validate Binary Search Tree\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isValidBST = function (root) {\n  if (root === null) return true;\n  if (root.left === null && root.right === null) return true;\n  const stack = [root];\n  let cur = root;\n  let pre = null;\n\n  function insertAllLefts(cur) {\n    while (cur && cur.left) {\n      const l = cur.left;\n      stack.push(l);\n      cur = l;\n    }\n  }\n  insertAllLefts(cur);\n\n  while ((cur = stack.pop())) {\n    if (pre && cur.val <= pre.val) return false;\n    const r = cur.right;\n\n    if (r) {\n      stack.push(r);\n      insertAllLefts(r);\n    }\n    pre = cur;\n  }\n\n  return true;\n};\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isValidBST = function (root) {\n  if (!root) return true;\n  return valid(root);\n};\n\nfunction valid(root, min = -Infinity, max = Infinity) {\n  if (!root) return true;\n  const val = root.val;\n  if (val <= min) return false;\n  if (val >= max) return false;\n  return valid(root.left, min, val) && valid(root.right, val, max);\n}\n"
        },
        {
            "language": "cpp",
            "text": "\n// 递归\nclass Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        TreeNode* prev = nullptr;\n        return validateBstInorder(root, prev);\n    }\n\nprivate:\n    bool validateBstInorder(TreeNode* root, TreeNode*& prev) {\n        if (root == nullptr) return true;\n        if (!validateBstInorder(root->left, prev)) return false;\n        if (prev != nullptr && prev->val >= root->val) return false;\n        prev = root;\n        return validateBstInorder(root->right, prev);\n    }\n};\n\n// 迭代\nclass Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        auto s = vector<TreeNode*>();\n        TreeNode* prev = nullptr;\n        while (root != nullptr || !s.empty()) {\n            while (root != nullptr) {\n                s.push_back(root);\n                root = root->left;\n            }\n            root = s.back();\n            s.pop_back();\n            if (prev != nullptr && prev->val >= root->val) return false;\n            prev = root;\n            root = root->right;\n        }\n        return true;\n    }\n};\n"
        }
    ]
},
"json":{
    "id": "455",
    "name": "AssignCookies",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 贪心算法\n- 双指针求解\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "将需求因子g和s分别从小到大进行排序，使用贪心思想，配合双指针，每个饼干只尝试一次，成功则换下一个孩子来尝试。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/455.AssignCookies.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} g\n * @param {number[]} s\n * @return {number}\n */\nconst findContentChildren = function (g, s) {\n    g = g.sort((a, b) => a - b);\n    s = s.sort((a, b) => a - b);\n    let gi = 0; // 胃口值\n    let sj = 0; // 饼干尺寸\n    let res = 0;\n    while (gi < g.length && sj < s.length) {\n        // 当饼干 sj >= 胃口 gi 时，饼干满足胃口，更新满足的孩子数并移动指针\n        if (s[sj] >= g[gi]) {\n            gi++;\n            sj++;\n            res++;\n        } else {\n            // 当饼干 sj < 胃口 gi 时，饼干不能满足胃口，需要换大的\n            sj++;\n        }\n    }\n    return res;\n};\n"
        }
    ]
},
"json":{
    "id": "105",
    "name": "Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 二叉树\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/105.Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal.md",
    "code": [
        {
            "language": "java",
            "text": "\npreorder = [3,9,20,15,7]\ninorder = [9,3,15,20,7]\n"
        },
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n  public TreeNode buildTree(int[] preorder, int[] inorder) {\n    if (preorder.length != inorder.length) return null;\n    \n    HashMap<Integer, Integer> map = new HashMap<> ();\n\n    for (int i=0; i<inorder.length; i++) {\n      map.put(inorder[i], i);\n    }\n\n    return helper(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1, map);\n  }\n\n  public TreeNode helper(int[] preorder, int preStart, int preEnd, int[] inorder, int inStart, int inEnd, HashMap<Integer, Integer> map) {\n    if (preStart>preEnd || inStart>inEnd) return null;\n    \n    TreeNode root = new TreeNode(preorder[prestart]);\n    int inRoot = map.get(preorder[preStart]);\n    int leftChldLen = inRoot - inStart;\n\n    root.left = helper(preorder, preStart+1, preStart+leftChldLen, inorder, inStart, inRoot-1, map);\n    root.left = helper(preorder, preStart+leftChldLen+1, preEnd, inorder, inRoot+1, inEnd, map);\n\n    return root;\n  }\n}\n"
        }
    ]
},
"json":{
    "id": "501",
    "name": "Find-Mode-in-Binary-Search-Tree",
    "company": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/501.Find-Mode-in-Binary-Search-Tree.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {   \n    List<Integer> list = new ArrayList<> ();\n    TreeNode preNode = null;\n    int max = 0, count = 0;\n    \n    public int[] findMode(TreeNode root) {\n        helper(root);\n        int[] res = new int[list.size()];\n        for (int i=0; i<res.length; i++) {\n            res[i] = list.get(i);\n        }\n        return res;\n    }\n    \n    private void helper (TreeNode root) {\n        if (root == null) return;\n        helper(root.left);\n        \n        if (preNode != null && root.val == preNode.val) {\n            count++;\n        } else {\n            count = 1;\n        }\n        \n        if (count > max) {\n            list.clear();\n            list.add(root.val);\n            max = count;\n        } else if (max == count) {\n            list.add(root.val);            \n        }\n        preNode = root;\n        helper(root.right);\n    }\n}\n"
        }
    ]
},
"json":{
    "id": "22",
    "name": "GenerateParentheses",
    "company": [],
    "pre": [
        {
            "text": "\n\n- DFS\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "当l<r时记得剪枝",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/22.GenerateParentheses.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number} n\n * @return {string[]}\n * @param l 左括号已经用了几个\n * @param r 右括号已经用了几个\n * @param str 当前递归得到的拼接字符串结果\n * @param res 结果集\n */\nconst generateParenthesis = function (n) {\n  const res = [];\n\n  function dfs(l, r, str) {\n    if (l == n && r == n) {\n      return res.push(str);\n    }\n    // l 小于 r 时不满足条件 剪枝\n    if (l < r) {\n      return;\n    }\n    // l 小于 n 时可以插入左括号，最多可以插入 n 个\n    if (l < n) {\n      dfs(l + 1, r, str + \"(\");\n    }\n    // r < l 时 可以插入右括号\n    if (r < l) {\n      dfs(l, r + 1, str + \")\");\n    }\n  }\n  dfs(0, 0, \"\");\n  return res;\n};\n"
        }
    ]
},
"json":{
    "id": "17",
    "name": "Letter-Combinations-of-a-Phone-Number",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回溯\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯",
            "link": null,
            "color": "blue"
        },
        {
            "text": "回溯模板",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/17.Letter-Combinations-of-a-Phone-Number.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {string} digits\n * @return {string[]}\n */\nconst letterCombinations = function (digits) {\n  if (!digits) {\n    return [];\n  }\n  const len = digits.length;\n  const map = new Map();\n  map.set(\"2\", \"abc\");\n  map.set(\"3\", \"def\");\n  map.set(\"4\", \"ghi\");\n  map.set(\"5\", \"jkl\");\n  map.set(\"6\", \"mno\");\n  map.set(\"7\", \"pqrs\");\n  map.set(\"8\", \"tuv\");\n  map.set(\"9\", \"wxyz\");\n  const result = [];\n\n  function generate(i, str) {\n    if (i == len) {\n      result.push(str);\n      return;\n    }\n    const tmp = map.get(digits[i]);\n    for (let r = 0; r < tmp.length; r++) {\n      generate(i + 1, str + tmp[r]);\n    }\n  }\n  generate(0, \"\");\n  return result;\n};\n"
        }
    ]
},
"json":{
    "id": "21",
    "name": "MergeTwoSortedLists",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 递归\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "掌握链表数据结构",
            "link": null,
            "color": "blue"
        },
        {
            "text": "考虑边界情况2",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/21.MergeTwoSortedLists.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nconst mergeTwoLists = function (l1, l2) {\n  if (l1 === null) {\n    return l2;\n  }\n  if (l2 === null) {\n    return l1;\n  }\n  if (l1.val < l2.val) {\n    l1.next = mergeTwoLists(l1.next, l2);\n    return l1;\n  } else {\n    l2.next = mergeTwoLists(l1, l2.next);\n    return l2;\n  }\n};\n"
        }
    ]
},
"json":{
    "id": "52",
    "name": "N-Queens-II",
    "company": [],
    "pre": [],
    "keyPoints": [
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "DFS（深度优先搜索）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/52.N-Queens-II.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number} n\n * @return {number}\n * @param row 当前层\n * @param cols 列\n * @param pie 左斜线\n * @param na 右斜线\n */\nconst totalNQueens = function (n) {\n    let res = 0;\n    const dfs = (n, row, cols, pie, na) => {\n        if (row >= n) {\n            res++;\n            return;\n        }\n        // 将所有能放置 Q 的位置由 0 变成 1，以便进行后续的位遍历\n        // 也就是得到当前所有的空位\n        let bits = (~(cols | pie | na)) & ((1 << n) - 1);\n        while (bits) {\n            // 取最低位的1\n            let p = bits & -bits;\n            // 把P位置上放入皇后\n            bits = bits & (bits - 1);\n            // row + 1 搜索下一行可能的位置\n            // cols ｜ p 目前所有放置皇后的列\n            // (pie | p) << 1 和 (na | p) >> 1) 与已放置过皇后的位置 位于一条斜线上的位置\n            dfs(n, row + 1, cols | p, (pie | p) << 1, (na | p) >> 1);\n        }\n    }\n    dfs(n, 0, 0, 0, 0);\n    return res;\n};\n"
        }
    ]
},
"json":{
    "id": "1",
    "name": "TwoSum",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "求和转换为求差",
            "link": null,
            "color": "blue"
        },
        {
            "text": "借助Map结构将数组中每个元素及其索引相互对应",
            "link": null,
            "color": "blue"
        },
        {
            "text": "以空间换时间，将查找时间从O(N)降低到O(1)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1.TwoSum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nconst twoSum = function (nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n    if (map.has(diff)) {\n      return [map.get(diff), i];\n    }\n    map.set(nums[i], i);\n  }\n};\n"
        }
    ]
},
"json":{
    "id": "721",
    "name": "accounts-merge",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 并查集\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/721.accounts-merge.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass UF:\n    def __init__(self):\n        self.parent = {}\n\n    def find(self, x):\n        self.parent.setdefault(x, x)\n        while x != self.parent[x]:\n            x = self.parent[x]\n        return x\n    def union(self, p, q):\n        self.parent[self.find(p)] = self.find(q)\n\n\nclass Solution:\n    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:\n        uf = UF()\n        email_to_name = {}\n        res = collections.defaultdict(list)\n        for account in accounts:\n            for i in range(1, len(account)):\n                email_to_name[account[i]] = account[0]\n                if i < len(account) - 1:uf.union(account[i], account[i + 1])\n        for email in email_to_name:\n            res[uf.find(email)].append(email)\n\n        return [[email_to_name[value[0]]] + sorted(value) for value in res.values()]\n"
        }
    ]
},
"json":{
    "id": "211",
    "name": "add-and-search-word-data-structure-design",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 前缀树\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀树（也叫字典树），英文名Trie（读作tree或者try）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/211.add-and-search-word-data-structure-design.md",
    "code": [
        {
            "language": "py",
            "text": "\ndef search(self, word):\n        \"\"\"\n        Returns if the word is in the trie.\n        :type word: str\n        :rtype: bool\n        \"\"\"\n        curr = self.Trie\n        for i, w in enumerate(word):\n            if w == '.':\n                wizards = []\n                for k in curr.keys():\n                    if k == '#':\n                        continue\n                    wizards.append(self.search(word[:i] + k + word[i + 1:]))\n                return any(wizards)\n            if w not in curr:\n                return False\n            curr = curr[w]\n        return \"#\" in curr\n"
        },
        {
            "language": "py",
            "text": "\ndef search(self, word):\n        \"\"\"\n        Returns if the word is in the trie.\n        :type word: str\n        :rtype: bool\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                return False\n            curr = curr[w]\n        return \"#\" in curr\n"
        },
        {
            "language": "py",
            "text": "\nclass Trie:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.Trie = {}\n\n    def insert(self, word):\n        \"\"\"\n        Inserts a word into the trie.\n        :type word: str\n        :rtype: void\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                curr[w] = {}\n            curr = curr[w]\n        curr['#'] = 1\n\n    def search(self, word):\n        \"\"\"\n        Returns if the word is in the trie.\n        :type word: str\n        :rtype: bool\n        \"\"\"\n        curr = self.Trie\n        for i, w in enumerate(word):\n            if w == '.':\n                wizards = []\n                for k in curr.keys():\n                    if k == '#':\n                        continue\n                    wizards.append(self.search(word[:i] + k + word[i + 1:]))\n                return any(wizards)\n            if w not in curr:\n                return False\n            curr = curr[w]\n        return \"#\" in curr\n"
        },
        {
            "language": "py",
            "text": "\nclass WordDictionary:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.trie = Trie()\n\n    def addWord(self, word: str) -> None:\n        \"\"\"\n        Adds a word into the data structure.\n        \"\"\"\n        self.trie.insert(word)\n\n    def search(self, word: str) -> bool:\n        \"\"\"\n        Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.\n        \"\"\"\n        return self.trie.search(word)\n\n\n# Your WordDictionary object will be instantiated and called as such:\n# obj = WordDictionary()\n# obj.addWord(word)\n# param_2 = obj.search(word)\n"
        }
    ]
},
"json":{
    "id": "445",
    "name": "add-two-numbers-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n- 栈\n \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "栈的基本操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "carried变量记录进位",
            "link": null,
            "color": "blue"
        },
        {
            "text": "循环的终止条件设置成`stack.length>0`可以简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "注意特殊情况，比如1+99=100",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/445.add-two-numbers-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=445 lang=javascript\n *\n * [445] Add Two Numbers II\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function(l1, l2) {\n  const stack1 = [];\n  const stack2 = [];\n  const stack = [];\n\n  let cur1 = l1;\n  let cur2 = l2;\n  let curried = 0;\n\n  while (cur1) {\n    stack1.push(cur1.val);\n    cur1 = cur1.next;\n  }\n\n  while (cur2) {\n    stack2.push(cur2.val);\n    cur2 = cur2.next;\n  }\n\n  let a = null;\n  let b = null;\n\n  while (stack1.length > 0 || stack2.length > 0) {\n    a = Number(stack1.pop()) || 0;\n    b = Number(stack2.pop()) || 0;\n\n    stack.push((a + b + curried) % 10);\n\n    if (a + b + curried >= 10) {\n      curried = 1;\n    } else {\n      curried = 0;\n    }\n  }\n\n  if (curried === 1) {\n    stack.push(1);\n  }\n\n  const dummy = {};\n\n  let current = dummy;\n\n  while (stack.length > 0) {\n    current.next = {\n      val: stack.pop(),\n      next: null\n    };\n\n    current = current.next;\n  }\n\n  return dummy.next;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:\n        def listToStack(l: ListNode) -> list:\n            stack, c = [], l\n            while c:\n                stack.append(c.val)\n                c = c.next\n            return stack\n            \n        # transfer l1 and l2 into stacks\n        stack1, stack2 = listToStack(l1), listToStack(l2)\n            \n        # add stack1 and stack2\n        diff = abs(len(stack1) - len(stack2))\n        stack1 = ([0]*diff + stack1 if len(stack1) < len(stack2) else stack1)\n        stack2 = ([0]*diff + stack2 if len(stack2) < len(stack1) else stack2)\n        stack3 = [x + y for x, y in zip(stack1, stack2)]\n        \n        # calculate carry for each item in stack3 and add one to the item before it\n        carry = 0\n        for i, val in enumerate(stack3[::-1]):\n            index = len(stack3) - i - 1\n            carry, stack3[index] = divmod(val + carry, 10)\n            if carry and index == 0: \n                stack3 = [1] + stack3\n            elif carry:\n                stack3[index - 1] += 1\n        \n        # transfer stack3 to a linkedList\n        result = ListNode(0)\n        c = result\n        for item in stack3:\n            c.next = ListNode(item)\n            c = c.next\n        \n        return result.next\n"
        }
    ]
},
"json":{
    "id": "2",
    "name": "add-two-numbers",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.链表这种数据结构的特点和使用2.用一个carried变量来实现进位的功能，每次相加之后计算carried，并用于下一位的计算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2.add-two-numbers.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function (l1, l2) {\n  if (l1 === null || l2 === null) return null;\n\n  // 使用dummyHead可以简化对链表的处理，dummyHead.next指向新链表\n  let dummyHead = new ListNode(0);\n  let cur1 = l1;\n  let cur2 = l2;\n  let cur = dummyHead; // cur用于计算新链表\n  let carry = 0; // 进位标志\n\n  while (cur1 !== null || cur2 !== null) {\n    let val1 = cur1 !== null ? cur1.val : 0;\n    let val2 = cur2 !== null ? cur2.val : 0;\n    let sum = val1 + val2 + carry;\n    let newNode = new ListNode(sum % 10); // sum%10取模结果范围为0~9，即为当前节点的值\n    carry = sum >= 10 ? 1 : 0; // sum>=10，carry=1，表示有进位\n    cur.next = newNode;\n    cur = cur.next;\n\n    if (cur1 !== null) {\n      cur1 = cur1.next;\n    }\n\n    if (cur2 !== null) {\n      cur2 = cur2.next;\n    }\n  }\n\n  if (carry > 0) {\n    // 如果最后还有进位，新加一个节点\n    cur.next = new ListNode(carry);\n  }\n\n  return dummyHead.next;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        ListNode* ret = nullptr;\n        ListNode* cur = nullptr;\n        int carry = 0;\n        while (l1 != nullptr || l2 != nullptr || carry != 0) {\n            carry += (l1 == nullptr ? 0 : l1->val) + (l2 == nullptr ? 0 : l2->val);\n            auto temp = new ListNode(carry % 10);\n            carry /= 10;\n            if (ret == nullptr) {\n                ret = temp;\n                cur = ret;\n            }\n            else {\n                cur->next = temp;\n                cur = cur->next;\n            }\n            l1 = l1 == nullptr ? nullptr : l1->next;\n            l2 = l2 == nullptr ? nullptr : l2->next;\n        }\n        return ret;\n    }\n};\n"
        }
    ]
},
"json":{
    "id": "2",
    "name": "addTwoNumbers",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.链表这种数据结构的特点和使用2.用一个carried变量来实现进位的功能，每次相加之后计算carried，并用于下一位的计算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2.addTwoNumbers.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function (l1, l2) {\n  if (l1 === null || l2 === null) return null;\n\n  // 使用dummyHead可以简化对链表的处理，dummyHead.next指向新链表\n  let dummyHead = new ListNode(0);\n  let cur1 = l1;\n  let cur2 = l2;\n  let cur = dummyHead; // cur用于计算新链表\n  let carry = 0; // 进位标志\n\n  while (cur1 !== null || cur2 !== null) {\n    let val1 = cur1 !== null ? cur1.val : 0;\n    let val2 = cur2 !== null ? cur2.val : 0;\n    let sum = val1 + val2 + carry;\n    let newNode = new ListNode(sum % 10); // sum%10取模结果范围为0~9，即为当前节点的值\n    carry = sum >= 10 ? 1 : 0; // sum>=10，carry=1，表示有进位\n    cur.next = newNode;\n    cur = cur.next;\n\n    if (cur1 !== null) {\n      cur1 = cur1.next;\n    }\n\n    if (cur2 !== null) {\n      cur2 = cur2.next;\n    }\n  }\n\n  if (carry > 0) {\n    // 如果最后还有进位，新加一个节点\n    cur.next = new ListNode(carry);\n  }\n\n  return dummyHead.next;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        ListNode* ret = nullptr;\n        ListNode* cur = nullptr;\n        int carry = 0;\n        while (l1 != nullptr || l2 != nullptr || carry != 0) {\n            carry += (l1 == nullptr ? 0 : l1->val) + (l2 == nullptr ? 0 : l2->val);\n            auto temp = new ListNode(carry % 10);\n            carry /= 10;\n            if (ret == nullptr) {\n                ret = temp;\n                cur = ret;\n            }\n            else {\n                cur->next = temp;\n                cur = cur->next;\n            }\n            l1 = l1 == nullptr ? nullptr : l1->next;\n            l2 = l2 == nullptr ? nullptr : l2->next;\n        }\n        return ret;\n    }\n};\n"
        }
    ]
},
"json":{
    "id": "1227",
    "name": "airplane-seat-assignment-probability",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 记忆化搜索\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1227.airplane-seat-assignment-probability.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nthPersonGetsNthSeat(self, n: int) -> float:\n        if n == 1:\n            return 1\n        if n == 2:\n            return 0.5\n        res = 1 / n\n        for i in range(2, n):\n            res += self.nthPersonGetsNthSeat(n - i + 1) * 1 / n\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    seen = {}\n\n    def nthPersonGetsNthSeat(self, n: int) -> float:\n        if n == 1:\n            return 1\n        if n == 2:\n            return 0.5\n        if n in self.seen:\n            return self.seen[n]\n        res = 1 / n\n        for i in range(2, n):\n            res += self.nthPersonGetsNthSeat(n - i + 1) * 1 / n\n        self.seen[n] = res\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nthPersonGetsNthSeat(self, n: int) -> float:\n        if n == 1:\n            return 1\n        if n == 2:\n            return 0.5\n\n        dp = [1, .5] * n\n\n        for i in range(2, n):\n            dp[i] = 1 / n\n            for j in range(2, i):\n                dp[i] += dp[i - j + 1] * 1 / n\n        return dp[-1]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nthPersonGetsNthSeat(self, n: int) -> float:\n        if n == 1:\n            return 1\n        if n == 2:\n            return 0.5\n\n        dp = [1, .5] * n\n\n        for i in range(2, n):\n            dp[i] = 1/n+(n-2)/n * dp[n-1]\n        return dp[-1]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nthPersonGetsNthSeat(self, n: int) -> float:\n        return 1 if n == 1 else .5\n\n"
        }
    ]
},
"json":{
    "id": "1014",
    "name": "best-sightseeing-pair",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "空间换时间",
            "link": null,
            "color": "blue"
        },
        {
            "text": "dp空间优化",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1014.best-sightseeing-pair.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxScoreSightseeingPair(self, A: List[int]) -> int:\n        n = len(A)\n        res = 0\n        for i in range(n - 1):\n            for j in range(i + 1, n):\n                res = max(res, A[i] + A[j] + i - j)\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxScoreSightseeingPair(self, A: List[int]) -> int:\n        n = len(A)\n        dp = [float('-inf')] * (n + 1)\n        res = 0\n        for i in range(n):\n            dp[i + 1] = max(dp[i], A[i] + i)\n            res = max(res, dp[i] + A[i] - i)\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxScoreSightseeingPair(self, A: List[int]) -> int:\n        n = len(A)\n        pre = A[0] + 0\n        res = 0\n        for i in range(1, n):\n            res = max(res, pre + A[i] - i)\n            pre = max(pre, A[i] + i)\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxScoreSightseeingPair(self, A: List[int]) -> int:\n        n = len(A)\n        pre = A[0] + 0\n        res = 0\n        for i in range(1, n):\n            # res = max(res, pre + A[i] - i)\n            # pre = max(pre, A[i] + i)\n            res = res if res > pre + A[i] - i else pre + A[i] - i\n            pre = pre if pre > A[i] + i else A[i] + i\n        return res\n"
        }
    ]
},
"json":{
    "id": "122",
    "name": "best-time-to-buy-and-sell-stock-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "这类题只要你在心中（或者别的地方）画出上面这种图就很容易解决",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/122.best-time-to-buy-and-sell-stock-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function(prices) {\n    let profit = 0;\n\n    for(let i = 1; i < prices.length; i++) {\n        if (prices[i] > prices[i -1]) {\n            profit  = profit + prices[i] - prices[i - 1];\n        }\n    }\n\n    return profit;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxProfit(self, prices: 'List[int]') -> int:\n        gains = [prices[i] - prices[i-1] for i in range(1, len(prices))\n                 if prices[i] - prices[i-1] > 0]\n        return sum(gains)\n#评论区里都讲这是一道开玩笑的送分题.\n"
        }
    ]
},
"json":{
    "id": "309",
    "name": "best-time-to-buy-and-sell-stock-with-cooldown",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "多状态动态规划",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/309.best-time-to-buy-and-sell-stock-with-cooldown.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=309 lang=javascript\n *\n * [309] Best Time to Buy and Sell Stock with Cooldown\n *\n */\n/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function(prices) {\n  if (prices == null || prices.length <= 1) return 0;\n\n  // 定义状态变量\n  const buy = [];\n  const sell = [];\n  // 寻常\n  buy[0] = -prices[0];\n  buy[1] = Math.max(-prices[0], -prices[1]);\n  sell[0] = 0;\n  sell[1] = Math.max(0, prices[1] - prices[0]);\n  for (let i = 2; i < prices.length; i++) {\n    // 状态转移方程\n    // 第i天只能是买或者cooldown\n    // 如果买利润就是sell[i - 2] - prices[i], 注意这里是i - 2，不是 i-1 ，因为有cooldown的限制\n    // cooldown就是buy[i -1]\n    buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);\n    // 第i天只能是卖或者cooldown\n    // 如果卖利润就是buy[i  -1] + prices[i]\n    // cooldown就是sell[i -1]\n    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);\n  }\n\n  return Math.max(buy[prices.length - 1], sell[prices.length - 1], 0);\n};\n"
        }
    ]
},
"json":{
    "id": "121",
    "name": "best-time-to-buy-and-sell-stock",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "这类题只要你在心中（或者别的地方）画出上面这种图就很容易解决",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/121.best-time-to-buy-and-sell-stock.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function(prices) {\n    let min = prices[0];\n    let profit = 0;\n    // 7 1 5 3 6 4\n    for(let i = 1; i < prices.length; i++) {\n        if (prices[i] > prices[i -1]) {\n            profit = Math.max(profit, prices[i] - min);\n        } else {\n            min = Math.min(min, prices[i]);;\n        }\n    }\n\n    return profit;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * 系统上C++的测试用例中的输入有[]，因此需要加一个判断\n */\nclass Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        if (prices.empty()) return 0;\n        auto min = prices[0];\n        auto profit = 0;\n        for (auto i = 1; i < prices.size(); ++i) {\n            if (prices[i] > prices[i -1]) {\n                profit = max(profit, prices[i] - min);\n            } else {\n                min = std::min(min, prices[i]);;\n            }\n        }\n        return profit;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxProfit(self, prices: 'List[int]') -> int:\n        if not prices: return 0\n\n        min_price = float('inf')\n        max_profit = 0\n\n        for price in prices:\n            if price < min_price:\n                min_price = price\n            elif max_profit < price - min_price:\n                max_profit = price - min_price\n        return max_profit\n"
        }
    ]
},
"json":{
    "id": "94",
    "name": "binary-tree-inorder-traversal",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 二叉树\n- 递归\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二叉树的基本操作（遍历）>不同的遍历算法差异还是蛮大的",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果非递归的话利用栈来简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果数据规模不大的话，建议使用递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "递归的问题需要注意两点，一个是终止条件，一个如何缩小规模1.终止条件，自然是当前这个元素是null（链表也是一样）2.由于二叉树本身就是一个递归结构，每次处理一个子树其实就是缩小了规模，难点在于如何合并结果，这里的合并结果其实就是`left.concat(mid).concat(right)`,mid是一个具体的节点，left和right`递归求出即可`",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/94.binary-tree-inorder-traversal.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    List<Integer> res = new LinkedList<>();\n    public List<Integer> inorderTraversal(TreeNode root) {\n        inorder(root);\n        return res;\n    }\n\n    public void inorder (TreeNode root) {\n        if (root == null) return;\n\n        inorder(root.left);\n\n        res.add(root.val);\n\n        inorder(root.right);\n    }\n}\n"
        },
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        List<Integer> res = new ArrayList<> ();\n        Stack<TreeNode> stack = new Stack<> ();\n\n        while (root != null || !stack.isEmpty()) {\n            while (root != null) {\n                stack.push(root);\n                root = root.left;\n            }\n            root = stack.pop();\n            res.add(root.val);\n            root = root.right;\n        }\n        return res;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=94 lang=javascript\n *\n * [94] Binary Tree Inorder Traversal\n *\n * https://leetcode.com/problems/binary-tree-inorder-traversal/description/\n *\n * algorithms\n * Medium (55.22%)\n * Total Accepted:    422.4K\n * Total Submissions: 762.1K\n * Testcase Example:  '[1,null,2,3]'\n *\n * Given a binary tree, return the inorder traversal of its nodes' values.\n *\n * Example:\n *\n *\n * Input: [1,null,2,3]\n * ⁠  1\n * ⁠   \\\n * ⁠    2\n * ⁠   /\n * ⁠  3\n *\n * Output: [1,3,2]\n *\n * Follow up: Recursive solution is trivial, could you do it iteratively?\n *\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar inorderTraversal = function (root) {\n  // 1. Recursive solution\n  // if (!root) return [];\n  // const left = root.left ? inorderTraversal(root.left) : [];\n  // const right = root.right ? inorderTraversal(root.right) : [];\n  // return left.concat([root.val]).concat(right);\n\n  // 2. iterative solutuon\n  if (!root) return [];\n  const stack = [root];\n  const ret = [];\n  let left = root.left;\n\n  let item = null; // stack 中弹出的当前项\n\n  while (left) {\n    stack.push(left);\n    left = left.left;\n  }\n\n  while ((item = stack.pop())) {\n    ret.push(item.val);\n    let t = item.right;\n\n    while (t) {\n      stack.push(t);\n      t = t.left;\n    }\n  }\n\n  return ret;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode* root) {\n        vector<TreeNode*> s;\n        vector<int> v;\n        while (root != NULL || !s.empty()) {\n            for (; root != NULL; root = root->left)\n                s.push_back(root);\n            v.push_back(s.back()->val);\n            root = s.back()->right;\n            s.pop_back();\n        }\n        return v;\n    }\n};\n"
        }
    ]
},
"json":{
    "id": "102",
    "name": "binary-tree-level-order-traversal",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 队列\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "队列",
            "link": null,
            "color": "blue"
        },
        {
            "text": "队列中用Null(一个特殊元素)来划分每层",
            "link": null,
            "color": "blue"
        },
        {
            "text": "树的基本操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历",
            "link": null,
            "color": "blue"
        },
        {
            "text": "层次遍历（BFS）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "注意塞入null的时候，判断一下当前队列是否为空，不然会无限循环",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/102.binary-tree-level-order-traversal.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar levelOrder = function(root) {\n  if (!root) return [];\n  const items = []; // 存放所有节点\n  const queue = [root, null]; // null 简化操作\n  let levelNodes = []; // 存放每一层的节点\n\n  while (queue.length > 0) {\n    const t = queue.shift();\n\n    if (t) {\n      levelNodes.push(t.val)\n      if (t.left) {\n        queue.push(t.left);\n      }\n      if (t.right) {\n        queue.push(t.right);\n      }\n    } else { // 一层已经遍历完了\n      items.push(levelNodes);\n      levelNodes = [];\n      if (queue.length > 0) {\n        queue.push(null)\n      }\n    }\n  }\n\n  return items;\n};\n\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def levelOrder(self, root: TreeNode) -> List[List[int]]:\n        \"\"\"递归法\"\"\"\n        if root is None:\n            return []\n        \n        result = []\n        \n        def add_to_result(level, node):\n            \"\"\"递归函数\n            :param level int 当前在二叉树的层次\n            :param node TreeNode 当前节点\n            \"\"\"\n            if level > len(result) - 1:\n                result.append([])\n                \n            result[level].append(node.val)\n            if node.left:\n                add_to_result(level+1, node.left)\n            if node.right:\n                add_to_result(level+1, node.right)\n        \n        add_to_result(0, root)\n        return result\n"
        }
    ]
},
"json":{
    "id": "124",
    "name": "binary-tree-maximum-path-sum",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 递归\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "理解题目中的path定义",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/124.binary-tree-maximum-path-sum.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n  int ans;\n  public int maxPathSum(TreeNode root) {\n    ans = Integer.MIN_VALUE;\n    helper(root);   // recursion\n    return ans;\n  }\n\n  public int helper(TreeNode root) {\n    if (root == null) return 0;\n    int leftMax = Math.max(0, helper(root.left));     // find the max sub-path sum in left sub-tree\n    int rightMax = Math.max(0, helper(root.right));   // find the max sub-path sum in right sub-tree\n    ans = Math.max(ans, leftMax+rightMax+root.val);   // find the max path sum at current node\n    return max(leftMax, rightMax) + root.val;         // according to the definition of path, the return value of current node can only be that the sum of current node value plus either left or right max path sum.\n  }\n}\n"
        },
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=124 lang=javascript\n *\n * [124] Binary Tree Maximum Path Sum\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\nfunction helper(node, payload) {\n  if (node === null) return 0;\n\n  const l = helper(node.left, payload);\n  const r = helper(node.right, payload);\n\n  payload.max = Math.max(\n    node.val + Math.max(0, l) + Math.max(0, r),\n    payload.max\n  );\n\n  return node.val + Math.max(l, r, 0);\n}\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxPathSum = function(root) {\n  if (root === null) return 0;\n  const payload = {\n    max: root.val\n  };\n  helper(root, payload);\n  return payload.max;\n};\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    ans = float('-inf')\n    def maxPathSum(self, root: TreeNode) -> int:\n        def helper(node):\n            if not node: return 0\n            l = helper(node.left)\n            r = helper(node.right)\n            self.ans = max(self.ans, max(l,0) + max(r, 0) + node.val)\n            return max(l, r, 0) + node.val\n        helper(root)\n        return self.ans\n "
        }
    ]
},
"json":{
    "id": "145",
    "name": "binary-tree-postorder-traversal",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 栈\n- 递归\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二叉树的基本操作（遍历）>不同的遍历算法差异还是蛮大的",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果非递归的话利用栈来简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果数据规模不大的话，建议使用递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "递归的问题需要注意两点，一个是终止条件，一个如何缩小规模1.终止条件，自然是当前这个元素是null（链表也是一样）2.由于二叉树本身就是一个递归结构，每次处理一个子树其实就是缩小了规模，难点在于如何合并结果，这里的合并结果其实就是`left.concat(right).concat(mid)`,mid是一个具体的节点，left和right`递归求出即可`",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/145.binary-tree-postorder-traversal.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=145 lang=javascript\n *\n * [145] Binary Tree Postorder Traversal\n *\n * https://leetcode.com/problems/binary-tree-postorder-traversal/description/\n *\n * algorithms\n * Hard (47.06%)\n * Total Accepted:    242.6K\n * Total Submissions: 512.8K\n * Testcase Example:  '[1,null,2,3]'\n *\n * Given a binary tree, return the postorder traversal of its nodes' values.\n *\n * Example:\n *\n *\n * Input: [1,null,2,3]\n * ⁠  1\n * ⁠   \\\n * ⁠    2\n * ⁠   /\n * ⁠  3\n *\n * Output: [3,2,1]\n *\n *\n * Follow up: Recursive solution is trivial, could you do it iteratively?\n *\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar postorderTraversal = function(root) {\n  // 1. Recursive solution\n\n  // if (!root) return [];\n\n  // return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat(root.val);\n\n  // 2. iterative solutuon\n\n  if (!root) return [];\n  const ret = [];\n  const stack = [root];\n  let p = root; // 标识元素，用来判断节点是否应该出栈\n\n  while (stack.length > 0) {\n    const top = stack[stack.length - 1];\n    if (\n      top.left === p ||\n      top.right === p || // 子节点已经遍历过了\n      (top.left === null && top.right === null) // 叶子元素\n    ) {\n      p = stack.pop();\n      ret.push(p.val);\n    } else {\n      if (top.right) {\n        stack.push(top.right);\n      }\n      if (top.left) {\n        stack.push(top.left);\n      }\n    }\n  }\n\n  return ret;\n};\n\n"
        }
    ]
},
"json":{
    "id": "144",
    "name": "binary-tree-preorder-traversal",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 递归\n- 栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二叉树的基本操作（遍历）>不同的遍历算法差异还是蛮大的",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果非递归的话利用栈来简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果数据规模不大的话，建议使用递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "递归的问题需要注意两点，一个是终止条件，一个如何缩小规模1.终止条件，自然是当前这个元素是null（链表也是一样）2.由于二叉树本身就是一个递归结构，每次处理一个子树其实就是缩小了规模，难点在于如何合并结果，这里的合并结果其实就是`mid.concat(left).concat(right)`,mid是一个具体的节点，left和right`递归求出即可`",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/144.binary-tree-preorder-traversal.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=144 lang=javascript\n *\n * [144] Binary Tree Preorder Traversal\n *\n * https://leetcode.com/problems/binary-tree-preorder-traversal/description/\n *\n * algorithms\n * Medium (50.36%)\n * Total Accepted:    314K\n * Total Submissions: 621.2K\n * Testcase Example:  '[1,null,2,3]'\n *\n * Given a binary tree, return the preorder traversal of its nodes' values.\n *\n * Example:\n *\n *\n * Input: [1,null,2,3]\n * ⁠  1\n * ⁠   \\\n * ⁠    2\n * ⁠   /\n * ⁠  3\n *\n * Output: [1,2,3]\n *\n *\n * Follow up: Recursive solution is trivial, could you do it iteratively?\n *\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar preorderTraversal = function(root) {\n  // 1. Recursive solution\n\n  // if (!root) return [];\n\n  // return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right));\n\n  // 2. iterative solutuon\n\n  if (!root) return [];\n  const ret = [];\n  const stack = [root];\n  let t = stack.pop();\n\n  while (t) {\n    ret.push(t.val);\n    if (t.right) {\n      stack.push(t.right);\n    }\n    if (t.left) {\n      stack.push(t.left);\n    }\n    t = stack.pop();\n  }\n\n  return ret;\n};\n"
        }
    ]
},
"json":{
    "id": "199",
    "name": "binary-tree-right-side-view",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 队列\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "队列",
            "link": null,
            "color": "blue"
        },
        {
            "text": "队列中用Null(一个特殊元素)来划分每层",
            "link": null,
            "color": "blue"
        },
        {
            "text": "树的基本操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历",
            "link": null,
            "color": "blue"
        },
        {
            "text": "层次遍历（BFS）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "二叉树的右视图可以看作是层次遍历每次只取每一层的最右边的元素",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/199.binary-tree-right-side-view.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=199 lang=javascript\n *\n * [199] Binary Tree Right Side View\n *\n * https://leetcode.com/problems/binary-tree-right-side-view/description/\n *\n * algorithms\n * Medium (46.74%)\n * Total Accepted:    156.1K\n * Total Submissions: 332.3K\n * Testcase Example:  '[1,2,3,null,5,null,4]'\n *\n * Given a binary tree, imagine yourself standing on the right side of it,\n * return the values of the nodes you can see ordered from top to bottom.\n *\n * Example:\n *\n *\n * Input: [1,2,3,null,5,null,4]\n * Output: [1, 3, 4]\n * Explanation:\n *\n * ⁠  1            <---\n * ⁠/   \\\n * 2     3         <---\n * ⁠\\     \\\n * ⁠ 5     4       <---\n *\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar rightSideView = function(root) {\n  if (!root) return [];\n\n  const ret = [];\n  const queue = [root, null];\n\n  let levelNodes = [];\n\n  while (queue.length > 0) {\n    const node = queue.shift();\n    if (node !== null) {\n      levelNodes.push(node.val);\n      if (node.right) {\n        queue.push(node.right);\n      }\n      if (node.left) {\n        queue.push(node.left);\n      }\n    } else {\n      // 一层遍历已经结束\n      ret.push(levelNodes[0]);\n      if (queue.length > 0) {\n        queue.push(null);\n      }\n      levelNodes = [];\n    }\n  }\n\n  return ret;\n};\n"
        }
    ]
},
"json":{
    "id": "103",
    "name": "binary-tree-zigzag-level-order-traversal",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 队列\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "队列",
            "link": null,
            "color": "blue"
        },
        {
            "text": "队列中用Null(一个特殊元素)来划分每层",
            "link": null,
            "color": "blue"
        },
        {
            "text": "树的基本操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历",
            "link": null,
            "color": "blue"
        },
        {
            "text": "层次遍历（BFS）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/103.binary-tree-zigzag-level-order-traversal.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=103 lang=javascript\n *\n * [103] Binary Tree Zigzag Level Order Traversal\n *\n * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/\n *\n * algorithms\n * Medium (40.57%)\n * Total Accepted:    201.2K\n * Total Submissions: 493.7K\n * Testcase Example:  '[3,9,20,null,null,15,7]'\n *\n * Given a binary tree, return the zigzag level order traversal of its nodes'\n * values. (ie, from left to right, then right to left for the next level and\n * alternate between).\n * \n * \n * For example:\n * Given binary tree [3,9,20,null,null,15,7],\n * \n * ⁠   3\n * ⁠  / \\\n * ⁠ 9  20\n * ⁠   /  \\\n * ⁠  15   7\n * \n * \n * \n * return its zigzag level order traversal as:\n * \n * [\n * ⁠ [3],\n * ⁠ [20,9],\n * ⁠ [15,7]\n * ]\n * \n * \n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar zigzagLevelOrder = function(root) {\n  if (!root) return [];   \n  const items = [];\n  let isOdd = true;\n  let levelNodes = [];\n  \n  const queue = [root, null];\n\n\n  while(queue.length > 0) {\n      const t = queue.shift();\n\n      if (t) {\n          levelNodes.push(t.val)\n          if (t.left) {\n            queue.push(t.left)\n          }\n          if (t.right) {\n            queue.push(t.right)\n          }\n      } else {\n        if (!isOdd) {\n          levelNodes = levelNodes.reverse();\n        }\n        items.push(levelNodes)\n        levelNodes = [];\n        isOdd = !isOdd;\n        if (queue.length > 0) {\n            queue.push(null);\n        }\n      }\n  }\n\n  return items\n    \n};\n"
        }
    ]
},
"json":{
    "id": "201",
    "name": "bitwise-and-of-numbers-range",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 位运算\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "n个连续数字求与的时候，前m位都是1",
            "link": null,
            "color": "blue"
        },
        {
            "text": "可以用递归实现，个人认为比较难想到",
            "link": null,
            "color": "blue"
        },
        {
            "text": "bit运算代码：```js(n>m)?(rangeBitwiseAnd(m/2,n/2)<<1):m;```>每次问题规模缩小一半，这是二分法吗？",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/201.bitwise-and-of-numbers-range.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n    let res = m;\n    for (let i = m + 1; i <= n; i++) {\n      res = res & i;\n    }\n    return res;\n\n"
        },
        {
            "language": "js",
            "text": "\n\n(n > m) ? (rangeBitwiseAnd(m/2, n/2) << 1) : m;\n\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=201 lang=javascript\n *\n * [201] Bitwise AND of Numbers Range\n *\n */\n/**\n * @param {number} m\n * @param {number} n\n * @return {number}\n */\nvar rangeBitwiseAnd = function(m, n) {\n  let count = 0;\n  while (m !== n) {\n    m = m >> 1;\n    n = n >> 1;\n    count++;\n  }\n\n  return n << count;\n};\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def rangeBitwiseAnd(self, m: int, n: int) -> int:\n        cnt = 0\n        while m != n:\n            m >>= 1\n            n >>= 1\n            cnt += 1\n\n        return m << cnt\n "
        }
    ]
},
"json":{
    "id": "312",
    "name": "burst-balloons",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/312.burst-balloons.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar maxCoins = function (nums) {\n  let res = Number.MIN_VALUE;\n  backtrack(nums, 0);\n  return res;\n  // 回溯法，状态树很大\n  function backtrack(nums, score) {\n    if (nums.length == 0) {\n      res = Math.max(res, score);\n      return;\n    }\n    for (let i = 0, n = nums.length; i < n; i++) {\n      let point =\n        (i - 1 < 0 ? 1 : nums[i - 1]) *\n        nums[i] *\n        (i + 1 >= n ? 1 : nums[i + 1]);\n      let tempNums = [].concat(nums);\n      // 做选择 在 nums 中删除元素 nums[i]\n      nums.splice(i, 1);\n      // 递归回溯\n      backtrack(nums, score + point);\n      // 撤销选择\n      nums = [...tempNums];\n    }\n  }\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar maxCoins = function (nums) {\n  let n = nums.length;\n  // 添加两侧的虚拟气球\n  let points = [1, ...nums, 1];\n  let dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0));\n  // 最后一行开始遍历,从下往上\n  for (let i = n; i >= 0; i--) {\n    // 从左往右\n    for (let j = i + 1; j < n + 2; j++) {\n      for (let k = i + 1; k < j; k++) {\n        dp[i][j] = Math.max(\n          dp[i][j],\n          points[j] * points[k] * points[i] + dp[i][k] + dp[k][j]\n        );\n      }\n    }\n  }\n  return dp[0][n + 1];\n};\n"
        }
    ]
},
"json":{
    "id": "1023",
    "name": "camelcase-matching",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "双指针",
            "link": null,
            "color": "blue"
        },
        {
            "text": "字符串匹配",
            "link": null,
            "color": "blue"
        },
        {
            "text": "子序列",
            "link": null,
            "color": "blue"
        },
        {
            "text": "子串",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1023.camelcase-matching.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def isSubsequence(self, s: str, t: str) -> bool:\n        i = 0\n        j = 0\n        while j < len(t):\n            if i < len(s) and s[i] == t[j]:\n                i += 1\n                j += 1\n            else:\n                j += 1\n            if i >= len (s):\n                return True\n        return i == len(s)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def camelMatch(self, queries: List[str], pattern: str) -> List[bool]:\n        res = []\n        for query in queries:\n            i = 0\n            j = 0\n            while i < len(query):\n                if j < len(pattern) and query[i] == pattern[j]:\n                    i += 1\n                    j += 1\n                elif query[i].islower():\n                    i += 1\n                else:\n                    break\n            if i == len(query) and j == len(pattern):\n                res.append(True)\n            else:\n                res.append(False)\n        return res\n"
        }
    ]
},
"json":{
    "id": "1011",
    "name": "capacity-to-ship-packages-within-d-days-cn",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 二分法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "能够识别出是给定的有限序列查找一个数字（二分查找），要求你对二分查找以及变体十分熟悉",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1011.capacity-to-ship-packages-within-d-days-cn.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} weights\n * @param {number} D\n * @return {number}\n */\nvar shipWithinDays = function(weights, D) {\n  let high = weights.reduce((acc, cur) => acc + cur)\n  let low = 0\n\n  while(low < high) {\n    let mid = Math.floor((high + low) / 2)\n    if (canShip(mid)) {\n      high = mid\n    } else {\n      low = mid + 1\n    }\n  }\n\n  return low\n\n  function canShip(opacity) {\n    let remain = opacity\n    let count = 1\n    for (let weight of weights) {\n      if (weight > opacity) {\n        return false\n      }\n      remain -= weight\n      if (remain < 0) {\n        count++\n        remain = opacity - weight\n      }\n      if (count > D) {\n        return false\n      }\n    }\n    return count <= D\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\ndef canShip(opacity):\n    # 指定船的容量是否可以在D天运完\n    lo = 0\n    hi = total\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if canShip(mid):\n            hi = mid\n        else:\n            lo = mid + 1\n\n    return lo\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def shipWithinDays(self, weights: List[int], D: int) -> int:\n        lo = 0\n        hi = 0\n\n        def canShip(opacity):\n            days = 1\n            remain = opacity\n            for weight in weights:\n                if weight > opacity:\n                    return False\n                remain -= weight\n                if remain < 0:\n                    days += 1\n                    remain = opacity - weight\n            return days <= D\n\n        for weight in weights:\n            hi += weight\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if canShip(mid):\n                hi = mid\n            else:\n                lo = mid + 1\n\n        return lo\n"
        }
    ]
},
"json":{
    "id": "1011",
    "name": "capacity-to-ship-packages-within-d-days-en",
    "company": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1011.capacity-to-ship-packages-within-d-days-en.md",
    "code": [
        {
            "language": "js",
            "text": "\r\n/**\r\n * @param {number[]} weights\r\n * @param {number} D\r\n * @return {number}\r\n */\r\nvar shipWithinDays = function(weights, D) {\r\n  let high = weights.reduce((acc, cur) => acc + cur)\r\n  let low = 0\r\n\r\n  while(low < high) {\r\n    let mid = Math.floor((high + low) / 2)\r\n    if (canShip(mid)) {\r\n      high = mid\r\n    } else {\r\n      low = mid + 1\r\n    }\r\n  }\r\n\r\n  return low\r\n\r\n  function canShip(opacity) {\r\n    let remain = opacity\r\n    let count = 1\r\n    for (let weight of weights) {\r\n      if (weight > opacity) {\r\n        return false\r\n      }\r\n      remain -= weight\r\n      if (remain < 0) {\r\n        count++\r\n        remain = opacity - weight\r\n      }\r\n      if (count > D) {\r\n        return false\r\n      }\r\n    }\r\n    return count <= D\r\n  }\r\n};\r\n"
        },
        {
            "language": "py",
            "text": "\r\ndef canShip(opacity):\r\n    # Whether the capacity of the specified ship can be shipped in D days\r\n    lo = 0\r\n    hi = total\r\n    while lo < hi:\r\n        mid = (lo + hi) // 2\r\n        if canShip(mid):\r\n            hi = mid\r\n        else:\r\n            lo = mid + 1\r\n    return lo\r\n"
        },
        {
            "language": "py",
            "text": "\r\nclass Solution:\r\n    def shipWithinDays(self, weights: List[int], D: int) -> int:\r\n        lo = 0\r\n        hi = 0\r\n\r\n        def canShip(opacity):\r\n            days = 1\r\n            remain = opacity\r\n            for weight in weights:\r\n                if weight > opacity:\r\n                    return False\r\n                remain -= weight\r\n                if remain < 0:\r\n                    days += 1\r\n                    remain = opacity - weight\r\n            return days <= D\r\n\r\n        for weight in weights:\r\n            hi += weight\r\n        while lo < hi:\r\n            mid = (lo + hi) // 2\r\n            if canShip(mid):\r\n                hi = mid\r\n            else:\r\n                lo = mid + 1\r\n\r\n        return lo\r\n"
        }
    ]
},
"json":{
    "id": "518",
    "name": "coin-change-2",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n- 背包问题\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "动态规划",
            "link": null,
            "color": "blue"
        },
        {
            "text": "子问题用dp[i]来表示组成i块钱，需要最少的硬币数，那么1.第j个硬币我可以选择不拿这个时候，组成数=dp[i]2.第j个硬币我可以选择拿这个时候，组成数=dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "coins[j]]+dp[i]",
            "link": null,
            "color": "blue"
        },
        {
            "text": "和01背包问题不同，硬币是可以拿任意个，属于完全背包问题",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对于每一个dp[i]我们都选择遍历一遍coin，不断更新dp[i]eg:```jsif(amount===0)return1;constdp=[Array(amount+1).fill(1)];for(leti=1;i<amount+1;i++){dp[i]=Array(coins.length+1).fill(0);for(letj=1;j<coins.length+1;j++){//从1开始可以简化运算if(i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "coins[j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]>=0){//注意这里是coins[j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]而不是coins[j]dp[i][j]=dp[i][j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]+dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "coins[j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]][j];//由于可以重复使用硬币所以这里是j不是j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1}else{dp[i][j]=dp[i][j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1];}}}returndp[dp.length",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1][coins.length];```",
            "link": null,
            "color": "blue"
        },
        {
            "text": "当我们选择一维数组去解的时候，内外循环将会对结果造成影响![](https://tva1.sinaimg.cn/large/0082zybply1gcb7fjfon6j30j00bddh2.jpg)eg:```js//这种答案是不对的。//原因在于比如amount=5,coins=[1,2,5]//这种算法会将[1,2,2][2,1,2][2,2,1]算成不同的if(amount===0)return1;constdp=[1].concat(Array(amount).fill(0));for(leti=1;i<amount+1;i++){for(letj=0;j<coins.length;j++){if(i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "coins[j]>=0){dp[i]=dp[i]+dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "coins[j]];}}}returndp[dp.length",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1];//正确的写法应该是内外循环调换一下,具体可以看下方代码区```",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/518.coin-change-2.md",
    "code": [
        {
            "language": "js",
            "text": "\nif (amount === 0) return 1;\n\nconst dp = [Array(amount + 1).fill(1)];\n\nfor (let i = 1; i < amount + 1; i++) {\n  dp[i] = Array(coins.length + 1).fill(0);\n  for (let j = 1; j < coins.length + 1; j++) {\n    // 从1开始可以简化运算\n    if (i - coins[j - 1] >= 0) {\n      // 注意这里是coins[j -1]而不是coins[j]\n      dp[i][j] = dp[i][j - 1] + dp[i - coins[j - 1]][j]; // 由于可以重复使用硬币所以这里是j不是j-1\n    } else {\n      dp[i][j] = dp[i][j - 1];\n    }\n  }\n}\n\nreturn dp[dp.length - 1][coins.length];\n"
        },
        {
            "language": "js",
            "text": "\n// 这种答案是不对的。\n// 原因在于比如amount = 5, coins = [1,2,5]\n// 这种算法会将[1,2,2] [2,1,2] [2, 2, 1] 算成不同的\n\nif (amount === 0) return 1;\n\nconst dp = [1].concat(Array(amount).fill(0));\n\nfor (let i = 1; i < amount + 1; i++) {\n  for (let j = 0; j < coins.length; j++) {\n    if (i - coins[j] >= 0) {\n      dp[i] = dp[i] + dp[i - coins[j]];\n    }\n  }\n}\n\nreturn dp[dp.length - 1];\n\n// 正确的写法应该是内外循环调换一下, 具体可以看下方代码区\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=518 lang=javascript\n *\n * [518] Coin Change 2\n *\n */\n/**\n * @param {number} amount\n * @param {number[]} coins\n * @return {number}\n */\nvar change = function(amount, coins) {\n  if (amount === 0) return 1;\n\n  const dp = [1].concat(Array(amount).fill(0));\n\n  for (let j = 0; j < coins.length; j++) {\n    for (let i = 1; i < amount + 1; i++) {\n      if (i - coins[j] >= 0) {\n        dp[i] = dp[i] + dp[i - coins[j]];\n      }\n    }\n  }\n\n  return dp[dp.length - 1];\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def change(self, amount: int, coins: List[int]) -> int:\n        dp = [0] * (amount + 1)\n        dp[0] = 1\n\n        for j in range(len(coins)):\n            for i in range(1, amount + 1):\n                if i >= coins[j]:\n                    dp[i] += dp[i - coins[j]]\n\n        return dp[-1]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def change(self, amount: int, coins: List[int]) -> int:\n        dp = [[0 for _ in range(len(coins) + 1)] for _ in range(amount + 1)]\n        for j in range(len(coins) + 1):\n            dp[0][j] = 1\n\n        for i in range(amount + 1):\n            for j in range(1, len(coins) + 1):\n                if i >= coins[j - 1]:\n                    dp[i][j] = dp[i - coins[j - 1]][j] + dp[i][j - 1]\n                else:\n                    dp[i][j] = dp[i][j - 1]\n        return dp[-1][-1]\n"
        }
    ]
},
"json":{
    "id": "322",
    "name": "coin-change",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 贪心算法\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "动态规划",
            "link": null,
            "color": "blue"
        },
        {
            "text": "子问题用dp[i]来表示组成i块钱，需要最少的硬币数，那么1.第j个硬币我可以选择不拿这个时候，硬币数=dp[i]2.第j个硬币我可以选择拿这个时候，硬币数=dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "coins[j]]+1",
            "link": null,
            "color": "blue"
        },
        {
            "text": "和背包问题不同，硬币是可以拿任意个",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对于每一个dp[i]我们都选择遍历一遍coin，不断更新dp[i]",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/322.coin-change.md",
    "code": [
        {
            "language": "js",
            "text": "\n\nvar coinChange = function(coins, amount) {\n    if (amount === 0) {\n      return 0;\n    }\n    const dp = Array(amount + 1).fill(Number.MAX_VALUE)\n    dp[0] = 0;\n    for (let i = 1; i < dp.length; i++) {\n      for (let j = 0; j < coins.length; j++) {\n        if (i - coins[j] >= 0) {\n          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);\n        }\n      }\n    }\n\n    return dp[dp.length - 1] === Number.MAX_VALUE ? -1 : dp[dp.length - 1];\n\n\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        if amount < 0:\n            return - 1\n        dp = [[amount + 1 for _ in range(len(coins) + 1)]\n              for _ in range(amount + 1)]\n        # 初始化第一行为0，其他为最大值（也就是amount + 1）\n\n        for j in range(len(coins) + 1):\n            dp[0][j] = 0\n\n        for i in range(1, amount + 1):\n            for j in range(1, len(coins) + 1):\n                if i - coins[j - 1] >= 0:\n                    dp[i][j] = min(\n                        dp[i][j - 1], dp[i - coins[j - 1]][j] + 1)\n                else:\n                    dp[i][j] = dp[i][j - 1]\n\n        return -1 if dp[-1][-1] == amount + 1 else dp[-1][-1]\n "
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        dp = [amount + 1] * (amount + 1)\n        dp[0] = 0\n\n        for i in range(1, amount + 1):\n            for j in range(len(coins)):\n                if i >= coins[j]:\n                    dp[i] = min(dp[i], dp[i - coins[j]] + 1)\n\n        return -1 if dp[-1] == amount + 1 else dp[-1]\n"
        }
    ]
},
"json":{
    "id": "40",
    "name": "combination-sum-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/40.combination-sum-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\nfunction backtrack(list, tempList, nums, remain, start) {\n    if (remain < 0) return;\n    else if (remain === 0) return list.push([...tempList]);\n    for (let i = start; i < nums.length; i++) {\n      // 和39.combination-sum 的其中一个区别就是这道题candidates可能有重复\n      // 代码表示就是下面这一行\n      if(i > start && nums[i] == nums[i-1]) continue; // skip duplicates\n      tempList.push(nums[i]);\n      backtrack(list, tempList, nums, remain - nums[i], i + 1); // i + 1代表不可以重复利用， i 代表数字可以重复使用 \n      tempList.pop();\n    }\n  }\n/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nvar combinationSum2 = function(candidates, target) {\n    const list = [];\n    backtrack(list, [], candidates.sort((a, b) => a - b), target, 0);\n    return list;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:\n        \"\"\"\n        与39题的区别是不能重用元素，而元素可能有重复；\n        不能重用好解决，回溯的index往下一个就行；\n        元素可能有重复，就让结果的去重麻烦一些；\n        \"\"\"\n        size = len(candidates)\n        if size == 0:\n            return []\n        \n        # 还是先排序，主要是方便去重\n        candidates.sort()\n        \n        path = []\n        res = []\n        self._find_path(candidates, path, res, target, 0, size)\n        \n        return res\n    \n    def _find_path(self, candidates, path, res, target, begin, size):\n        if target == 0:\n            res.append(path.copy())\n        else:\n            for i in range(begin, size):\n                left_num = target - candidates[i]\n                if left_num < 0:\n                    break\n                # 如果存在重复的元素，前一个元素已经遍历了后一个元素与之后元素组合的所有可能\n                if i > begin and candidates[i] == candidates[i-1]:\n                    continue\n                path.append(candidates[i])\n                # 开始的 index 往后移了一格\n                self._find_path(candidates, path, res, left_num, i+1, size)\n                path.pop()\n"
        }
    ]
},
"json":{
    "id": "39",
    "name": "combination-sum",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/39.combination-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=39 lang=javascript\n *\n * [39] Combination Sum\n *\n * https://leetcode.com/problems/combination-sum/description/\n *\n * algorithms\n * Medium (46.89%)\n * Total Accepted:    326.7K\n * Total Submissions: 684.2K\n * Testcase Example:  '[2,3,6,7]\\n7'\n *\n * Given a set of candidate numbers (candidates) (without duplicates) and a\n * target number (target), find all unique combinations in candidates where the\n * candidate numbers sums to target.\n *\n * The same repeated number may be chosen from candidates unlimited number of\n * times.\n *\n * Note:\n *\n *\n * All numbers (including target) will be positive integers.\n * The solution set must not contain duplicate combinations.\n *\n *\n * Example 1:\n *\n *\n * Input: candidates = [2,3,6,7], target = 7,\n * A solution set is:\n * [\n * ⁠ [7],\n * ⁠ [2,2,3]\n * ]\n *\n *\n * Example 2:\n *\n *\n * Input: candidates = [2,3,5], target = 8,\n * A solution set is:\n * [\n * [2,2,2,2],\n * [2,3,3],\n * [3,5]\n * ]\n *\n */\n\nfunction backtrack(list, tempList, nums, remain, start) {\n  if (remain < 0) return;\n  else if (remain === 0) return list.push([...tempList]);\n  for (let i = start; i < nums.length; i++) {\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums, remain - nums[i], i); // 数字可以重复使用， i + 1代表不可以重复利用\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nvar combinationSum = function(candidates, target) {\n  const list = [];\n  backtrack(list, [], candidates.sort((a, b) => a - b), target, 0);\n  return list;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        \"\"\"\n        回溯法，层层递减，得到符合条件的路径就加入结果集中，超出则剪枝；\n        主要是要注意一些细节，避免重复等；\n        \"\"\"\n        size = len(candidates)\n        if size <= 0:\n            return []\n        \n        # 先排序，便于后面剪枝\n        candidates.sort()\n        \n        path = []\n        res = []\n        self._find_path(target, path, res, candidates, 0, size)\n        \n        return res\n        \n    def _find_path(self, target, path, res, candidates, begin, size):\n        \"\"\"沿着路径往下走\"\"\"\n        if target == 0:\n            res.append(path.copy())\n        else:\n            for i in range(begin, size):\n                left_num = target - candidates[i]\n                # 如果剩余值为负数，说明超过了，剪枝\n                if left_num < 0:\n                    break\n                # 否则把当前值加入路径\n                path.append(candidates[i])\n                # 为避免重复解，我们把比当前值小的参数也从下一次寻找中剔除，\n                # 因为根据他们得出的解一定在之前就找到过了\n                self._find_path(left_num, path, res, candidates, i, size)\n                # 记得把当前值移出路径，才能进入下一个值的路径\n                path.pop()\n"
        }
    ]
},
"json":{
    "id": "472",
    "name": "concatenated-words",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 前缀树\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "前缀树",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/472.concatenated-words.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Trie:\n\n    def __init__(self):\n        self.Trie = {}\n        self.visited = {}\n\n    def insert(self, word):\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                curr[w] = {}\n            curr = curr[w]\n        curr['#'] = 1\n\n    def cntWords(self, word):\n        if not word:\n            return 0\n        if word in self.visited:\n            return self.visited[word]\n        curr = self.Trie\n        res = float('-inf')\n\n        for i, w in enumerate(word):\n            if w not in curr:\n                return res\n            curr = curr[w]\n            if '#' in curr:\n                res = max(res, 1 + self.cntWords(word[i + 1:]))\n        self.visited[word] = res\n        return res\n\n\nclass Solution:\n    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:\n        self.trie = Trie()\n        res = []\n\n        for word in words:\n            self.trie.insert(word)\n        for word in words:\n            if self.trie.cntWords(word) >= 2:\n                res.append(word)\n        return res\n"
        }
    ]
},
"json":{
    "id": "11",
    "name": "container-with-most-water",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "双指针优化时间复杂度",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/11.container-with-most-water.md",
    "code": [
        {
            "language": "js",
            "text": "\n// 这个解法比较暴力，效率比较低\n// 时间复杂度是O(n^2)\nlet max = 0;\nfor (let i = 0; i < height.length; i++) {\n  for (let j = i + 1; j < height.length; j++) {\n    const currentArea = Math.abs(i - j) * Math.min(height[i], height[j]);\n    if (currentArea > max) {\n      max = currentArea;\n    }\n  }\n}\nreturn max;\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} height\n * @return {number}\n */\nvar maxArea = function (height) {\n  if (!height || height.length <= 1) return 0;\n\n  let leftPos = 0;\n  let rightPos = height.length - 1;\n  let max = 0;\n  while (leftPos < rightPos) {\n    const currentArea =\n      Math.abs(leftPos - rightPos) *\n      Math.min(height[leftPos], height[rightPos]);\n    if (currentArea > max) {\n      max = currentArea;\n    }\n    // 更新小的\n    if (height[leftPos] < height[rightPos]) {\n      leftPos++;\n    } else {\n      // 如果相等就随便了\n      rightPos--;\n    }\n  }\n\n  return max;\n};\n"
        }
    ]
},
"json":{
    "id": "219",
    "name": "contains-duplicate-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- hashmap\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析无",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/219.contains-duplicate-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=219 lang=javascript\n *\n * [219] Contains Duplicate II\n *\n * https://leetcode.com/problems/contains-duplicate-ii/description/\n *\n * algorithms\n * Easy (34.75%)\n * Total Accepted:    187.3K\n * Total Submissions: 537.5K\n * Testcase Example:  '[1,2,3,1]\\n3'\n *\n * Given an array of integers and an integer k, find out whether there are two\n * distinct indices i and j in the array such that nums[i] = nums[j] and the\n * absolute difference between i and j is at most k.\n *\n *\n * Example 1:\n *\n *\n * Input: nums = [1,2,3,1], k = 3\n * Output: true\n *\n *\n *\n * Example 2:\n *\n *\n * Input: nums = [1,0,1,1], k = 1\n * Output: true\n *\n *\n *\n * Example 3:\n *\n *\n * Input: nums = [1,2,3,1,2,3], k = 2\n * Output: false\n *\n *\n *\n *\n *\n */\n/**\n * @param {number[]} nums\n * @param {number} k\n * @return {boolean}\n */\nvar containsNearbyDuplicate = function(nums, k) {\n    const visited = {};\n    for(let i = 0; i < nums.length; i++) {\n        const num = nums[i];\n        if (visited[num] !== undefined && i - visited[num] <= k) {\n            return true;\n        }\n        visited[num] = i;\n    }\n    return false\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        d = {}\n        for index, num in enumerate(nums):\n            if num in d and index - d[num] <= k:\n                return True\n            d[num] = index\n        return False\n"
        }
    ]
},
"json":{
    "id": "91",
    "name": "decode-ways",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 爬楼梯问题\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "爬楼梯问题（我把这种题目统称为爬楼梯问题）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/91.decode-ways.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=91 lang=javascript\n *\n * [91] Decode Ways\n *\n * https://leetcode.com/problems/decode-ways/description/\n *\n * algorithms\n * Medium (21.93%)\n * Total Accepted:    254.4K\n * Total Submissions: 1.1M\n * Testcase Example:  '\"12\"'\n *\n * A message containing letters from A-Z is being encoded to numbers using the\n * following mapping:\n *\n *\n * 'A' -> 1\n * 'B' -> 2\n * ...\n * 'Z' -> 26\n *\n *\n * Given a non-empty string containing only digits, determine the total number\n * of ways to decode it.\n *\n * Example 1:\n *\n *\n * Input: \"12\"\n * Output: 2\n * Explanation: It could be decoded as \"AB\" (1 2) or \"L\" (12).\n *\n *\n * Example 2:\n *\n *\n * Input: \"226\"\n * Output: 3\n * Explanation: It could be decoded as \"BZ\" (2 26), \"VF\" (22 6), or \"BBF\" (2 2\n * 6).\n *\n */\n/**\n * @param {string} s\n * @return {number}\n */\nvar numDecodings = function (s) {\n  if (s == null || s.length == 0) {\n    return 0;\n  }\n  const dp = Array(s.length + 1).fill(0);\n  dp[0] = 1;\n  dp[1] = s[0] !== \"0\" ? 1 : 0;\n  for (let i = 2; i < s.length + 1; i++) {\n    const one = +s.slice(i - 1, i);\n    const two = +s.slice(i - 2, i);\n\n    if (two >= 10 && two <= 26) {\n      dp[i] = dp[i - 2];\n    }\n\n    if (one >= 1 && one <= 9) {\n      dp[i] += dp[i - 1];\n    }\n  }\n\n  return dp[dp.length - 1];\n};\n"
        }
    ]
},
"json":{
    "id": "575",
    "name": "distribute-candies",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "这是一道逻辑题目，因此如果逻辑分析清楚了，代码是自然而然的",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/575.distribute-candies.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=575 lang=javascript\n *\n * [575] Distribute Candies\n */\n/**\n * @param {number[]} candies\n * @return {number}\n */\nvar distributeCandies = function(candies) {\n    const count = new Set(candies);\n    return Math.min(count.size, candies.length >> 1);\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def distributeCandies(self, candies: List[int]) -> int:\n        return min(len(set(candies)), len(candies) >> 1)\n"
        }
    ]
},
"json":{
    "id": "29",
    "name": "divide-two-integers",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 二分法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二分查找",
            "link": null,
            "color": "blue"
        },
        {
            "text": "正负数的判断中，这样判断更简单。```jsconstisNegative=dividend>0!==divisor>0;```",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/29.divide-two-integers.md",
    "code": [
        {
            "language": "js",
            "text": "\n  let acc = divisor;\n  let count = 0;\n\n  while (dividend - acc >= 0) {\n    acc += divisor;\n    count++;\n  }\n\n  return count;\n\n"
        },
        {
            "language": "js",
            "text": "\nconst isNegative = dividend > 0 !== divisor > 0;\n"
        },
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=29 lang=javascript\n *\n * [29] Divide Two Integers\n */\n/**\n * @param {number} dividend\n * @param {number} divisor\n * @return {number}\n */\nvar divide = function(dividend, divisor) {\n  if (divisor === 1) return dividend;\n\n  // 这种方法很巧妙，即符号相同则为正，不同则为负\n  const isNegative = dividend > 0 !== divisor > 0;\n\n  const MAX_INTERGER = Math.pow(2, 31);\n\n  const res = helper(Math.abs(dividend), Math.abs(divisor));\n\n  // overflow\n  if (res > MAX_INTERGER - 1 || res < -1 * MAX_INTERGER) {\n    return MAX_INTERGER - 1;\n  }\n\n  return isNegative ? -1 * res : res;\n};\n\nfunction helper(dividend, divisor) {\n  // 二分法\n  if (dividend <= 0) return 0;\n  if (dividend < divisor) return 0;\n  if (divisor === 1) return dividend;\n\n  let acc = 2 * divisor;\n  let count = 1;\n\n  while (dividend - acc > 0) {\n    acc += acc;\n    count += count;\n  }\n  // 直接使用位移运算，比如acc >> 1会有问题\n  const last = dividend - Math.floor(acc / 2);\n\n  return count + helper(last, divisor);\n}\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def divide(self, dividend: int, divisor: int) -> int:\n        \"\"\"\n        二分法\n        :param int divisor\n        :param int dividend\n        :return int\n        \"\"\"\n        # 错误处理\n        if divisor == 0:\n            raise ZeroDivisionError\n        if abs(divisor) == 1:\n            result = dividend if 1 == divisor else -dividend\n            return min(2**31-1, max(-2**31, result))\n\n        # 确定结果的符号\n        sign = ((dividend >= 0) == (divisor >= 0))\n        \n        result = 0\n        # abs也可以直接写在while条件中，不过可能会多计算几次\n        _divisor = abs(divisor)\n        _dividend = abs(dividend)\n        \n        while _divisor <= _dividend:\n            r, _dividend = self._multi_divide(_divisor, _dividend)\n            result += r\n        \n        result = result if sign else -result\n\n        # 注意返回值不能超过32位有符号数的表示范围\n        return min(2**31-1, max(-2**31, result))\n    \n    def _multi_divide(self, divisor, dividend):\n        \"\"\"\n        翻倍除法，如果可以被除，则下一步除数翻倍，直至除数大于被除数，\n        返回商加总的结果与被除数的剩余值；\n        这里就不做异常处理了；\n        :param int divisor\n        :param int dividend\n        :return tuple result, left_dividend\n        \"\"\"\n        result = 0\n        times_count = 1\n        while divisor <= dividend:\n            dividend -= divisor\n            result += times_count\n            times_count += times_count\n            divisor += divisor\n        return result, dividend\n"
        }
    ]
},
"json":{
    "id": "150",
    "name": "evaluate-reverse-polish-notation",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "1.栈的基本用法2.如果你用的是JS的话，需要注意/和其他很多语言是不一样的3.如果你用的是JS的话，需要先将字符串转化为数字。否则有很多意想不到的结果4.操作符的顺序应该是先出栈的是第二位，后出栈的是第一位。这在不符合交换律的操作中很重要，比如减法和除法。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/150.evaluate-reverse-polish-notation.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=150 lang=javascript\n *\n * [150] Evaluate Reverse Polish Notation\n *\n * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/\n *\n * algorithms\n * Medium (31.43%)\n * Total Accepted:    153.3K\n * Total Submissions: 485.8K\n * Testcase Example:  '[\"2\",\"1\",\"+\",\"3\",\"*\"]'\n *\n * Evaluate the value of an arithmetic expression in Reverse Polish Notation.\n *\n * Valid operators are +, -, *, /. Each operand may be an integer or another\n * expression.\n *\n * Note:\n *\n *\n * Division between two integers should truncate toward zero.\n * The given RPN expression is always valid. That means the expression would\n * always evaluate to a result and there won't be any divide by zero\n * operation.\n *\n *\n * Example 1:\n *\n *\n * Input: [\"2\", \"1\", \"+\", \"3\", \"*\"]\n * Output: 9\n * Explanation: ((2 + 1) * 3) = 9\n *\n *\n * Example 2:\n *\n *\n * Input: [\"4\", \"13\", \"5\", \"/\", \"+\"]\n * Output: 6\n * Explanation: (4 + (13 / 5)) = 6\n *\n *\n * Example 3:\n *\n *\n * Input: [\"10\", \"6\", \"9\", \"3\", \"+\", \"-11\", \"*\", \"/\", \"*\", \"17\", \"+\", \"5\", \"+\"]\n * Output: 22\n * Explanation:\n * ⁠ ((10 * (6 / ((9 + 3) * -11))) + 17) + 5\n * = ((10 * (6 / (12 * -11))) + 17) + 5\n * = ((10 * (6 / -132)) + 17) + 5\n * = ((10 * 0) + 17) + 5\n * = (0 + 17) + 5\n * = 17 + 5\n * = 22\n *\n *\n */\n/**\n * @param {string[]} tokens\n * @return {number}\n */\nvar evalRPN = function(tokens) {\n  // 这种算法的前提是 tokens是有效的，\n  // 当然这由算法来保证\n  const stack = [];\n\n  for (let index = 0; index < tokens.length; index++) {\n    const token = tokens[index];\n    // 对于运算数， 我们直接入栈\n    if (!Number.isNaN(Number(token))) {\n      stack.push(token);\n    } else {\n      // 遇到操作符，我们直接大胆运算，不用考虑算术优先级\n      // 然后将运算结果入栈即可\n\n      // 当然如果题目进一步扩展，允许使用单目等其他运算符，我们的算法需要做微小的调整\n      const a = Number(stack.pop());\n      const b = Number(stack.pop());\n      if (token === \"*\") {\n        stack.push(b * a);\n      } else if (token === \"/\") {\n        stack.push(b / a >> 0);\n      } else if (token === \"+\") {\n        stack.push(b + a);\n      } else if (token === \"-\") {\n        stack.push(b - a);\n      }\n    }\n  }\n\n  return stack.pop();\n};\n\n"
        }
    ]
},
"json":{
    "id": "172",
    "name": "factorial-trailing-zeroes",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 递归\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数论",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/172.factorial-trailing-zeroes.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=172 lang=javascript\n *\n * [172] Factorial Trailing Zeroes\n */\n/**\n * @param {number} n\n * @return {number}\n */\nvar trailingZeroes = function(n) {\n  // tag: 数论\n\n  // if (n === 0) return n;\n\n  // 递归： f(n) = n / 5 + f(n / 5)\n  // return Math.floor(n / 5)  + trailingZeroes(Math.floor(n / 5));\n  let count = 0;\n  while (n >= 5) {\n    count += Math.floor(n / 5);\n    n = Math.floor(n / 5);\n  }\n  return count;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def trailingZeroes(self, n: int) -> int:\n        count = 0\n        while n >= 5:\n            n = n // 5\n            count += n\n        return count\n\n\n# 递归\nclass Solution:\n    def trailingZeroes(self, n: int) -> int:\n        if n == 0: return 0\n        return n // 5 + self.trailingZeroes(n // 5)\n"
        }
    ]
},
"json":{
    "id": "609",
    "name": "find-duplicate-file-in-system",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "hashtable",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/609.find-duplicate-file-in-system.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=609 lang=javascript\n *\n * [609] Find Duplicate File in System\n *\n * https://leetcode.com/problems/find-duplicate-file-in-system/description/\n *\n * algorithms\n * Medium (54.21%)\n * Total Accepted:    24.1K\n * Total Submissions: 44.2K\n * Testcase Example:  '[\"root/a 1.txt(abcd) 2.txt(efgh)\",\"root/c 3.txt(abcd)\",\"root/c/d 4.txt(efgh)\",\"root 4.txt(efgh)\"]'\n *\n * Given a list of directory info including directory path, and all the files\n * with contents in this directory, you need to find out all the groups of\n * duplicate files in the file system in terms of their paths.\n *\n * A group of duplicate files consists of at least two files that have exactly\n * the same content.\n *\n * A single directory info string in the input list has the following format:\n *\n * \"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ...\n * fn.txt(fn_content)\"\n *\n * It means there are n files (f1.txt, f2.txt ... fn.txt with content\n * f1_content, f2_content ... fn_content, respectively) in directory\n * root/d1/d2/.../dm. Note that n >= 1 and m >= 0. If m = 0, it means the\n * directory is just the root directory.\n *\n * The output is a list of group of duplicate file paths. For each group, it\n * contains all the file paths of the files that have the same content. A file\n * path is a string that has the following format:\n *\n * \"directory_path/file_name.txt\"\n *\n * Example 1:\n *\n *\n * Input:\n * [\"root/a 1.txt(abcd) 2.txt(efgh)\", \"root/c 3.txt(abcd)\", \"root/c/d\n * 4.txt(efgh)\", \"root 4.txt(efgh)\"]\n * Output:\n *\n * [[\"root/a/2.txt\",\"root/c/d/4.txt\",\"root/4.txt\"],[\"root/a/1.txt\",\"root/c/3.txt\"]]\n *\n *\n *\n *\n * Note:\n *\n *\n * No order is required for the final output.\n * You may assume the directory name, file name and file content only has\n * letters and digits, and the length of file content is in the range of\n * [1,50].\n * The number of files given is in the range of [1,20000].\n * You may assume no files or directories share the same name in the same\n * directory.\n * You may assume each given directory info represents a unique directory.\n * Directory path and file info are separated by a single blank space.\n *\n *\n *\n * Follow-up beyond contest:\n *\n *\n * Imagine you are given a real file system, how will you search files? DFS or\n * BFS?\n * If the file content is very large (GB level), how will you modify your\n * solution?\n * If you can only read the file by 1kb each time, how will you modify your\n * solution?\n * What is the time complexity of your modified solution? What is the most\n * time-consuming part and memory consuming part of it? How to optimize?\n * How to make sure the duplicated files you find are not false positive?\n *\n *\n */\n/**\n * @param {string[]} paths\n * @return {string[][]}\n */\nvar findDuplicate = function(paths) {\n  const hashmap = {};\n\n  for (let path of paths) {\n    const [folder, ...files] = path.split(\" \");\n    for (let file of files) {\n      const lpi = file.indexOf(\"(\");\n      const rpi = file.lastIndexOf(\")\");\n      const filename = file.slice(0, lpi);\n      const content = file.slice(lpi, rpi);\n      const fullname = `${folder}/${filename}`;\n      if (!hashmap[content]) hashmap[content] = [];\n      hashmap[content].push(fullname);\n    }\n  }\n\n  return Object.values(hashmap).filter(q => q.length >= 2);\n};\n"
        }
    ]
},
"json":{
    "id": "1261",
    "name": "find-elements-in-a-contaminated-binary-tree",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 二进制\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1261.find-elements-in-a-contaminated-binary-tree.md",
    "code": [
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass FindElements:\n    node = None\n    def __init__(self, root: TreeNode):\n        def recover(node):\n            if not node:\n                return node;\n            if node.left:\n                node.left.val =  2 * node.val + 1\n            if node.right:\n                 node.right.val = 2 * node.val + 2\n            recover(node.left)\n            recover(node.right)\n            return node\n        root.val = 0\n        self.node = recover(root)\n\n\n    def find(self, target: int) -> bool:\n        def findInTree(node, target):\n            if not node:\n                return False\n            if node.val == target:\n                return True\n            return findInTree(node.left, target) or findInTree(node.right, target)\n        return findInTree(self.node, target)\n\n\n\n\n# Your FindElements object will be instantiated and called as such:\n# obj = FindElements(root)\n# param_1 = obj.find(target)\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass FindElements:\n    def __init__(self, root: TreeNode):\n        # set 不能放在init外侧。 因为测试用例之间不会销毁FindElements的变量\n        self.seen = set()\n        def recover(node):\n            if not node:\n                return node;\n            if node.left:\n                node.left.val =  2 * node.val + 1\n                self.seen.add(node.left.val)\n            if node.right:\n                 node.right.val = 2 * node.val + 2\n                 self.seen.add(node.right.val)\n            recover(node.left)\n            recover(node.right)\n            return node\n        root.val = 0\n        self.seen.add(0)\n        self.node = recover(root)\n\n\n    def find(self, target: int) -> bool:\n        return target in self.seen\n\n\n\n\n# Your FindElements object will be instantiated and called as such:\n# obj = FindElements(root)\n# param_1 = obj.find(target)\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass FindElements:\n    node = None\n    def __init__(self, root: TreeNode):\n        def recover(node):\n            if not node:\n                return node;\n            if node.left:\n                node.left.val =  2 * node.val + 1\n            if node.right:\n                 node.right.val = 2 * node.val + 2\n            recover(node.left)\n            recover(node.right)\n            return node\n        root.val = 0\n        self.node = recover(root)\n\n\n    def find(self, target: int) -> bool:\n        node = self.node\n        for bit in bin(target+1)[3:]:\n            node = node and (node.left, node.right)[int(bit)]\n        return bool(node)\n\n\n\n\n# Your FindElements object will be instantiated and called as such:\n# obj = FindElements(root)\n# param_1 = obj.find(target)\n"
        }
    ]
},
"json":{
    "id": "295",
    "name": "find-median-from-data-stream",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 堆\n- 队列\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "用两个堆（一个大顶堆，一个小顶堆）来简化时间复杂度",
            "link": null,
            "color": "blue"
        },
        {
            "text": "用优先级队列简化操作>JavaScript不像Java，C++等语言都有`优先级队列`中这种数据结构，因此大家可以使用社区的实现>个人认为没有非要纠结于优先级队列怎么实现，至少这道题不是考这个的>优先级队列的实现个人认为已经超过了这道题想考察的范畴",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/295.find-median-from-data-stream.md",
    "code": [
        {
            "language": "js",
            "text": "\nfunction findMedian(a) {\n  return a.length % 2 === 0\n    ? (a[a.length >> 1] + a[a.length >> (1 + 1)]) / 2\n    : a[a.length >> 1];\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * initialize your data structure here.\n */\nvar MedianFinder = function() {\n  this.maxHeap = [];\n  this.minHeap = [];\n};\n\nfunction minHeapify() {\n  this.minHeap.unshift(null);\n  const a = this.minHeap;\n\n  // 为了方便大家理解，这里选用了粗暴的实现\n  // 时间复杂度为O(n)\n  // 其实可以降到O(logn)， 具体细节我不想在这里讲解和实现\n  for (let i = a.length - 1; i >> 1 > 0; i--) {\n    // 自下往上堆化\n    if (a[i] < a[i >> 1]) { // 如果子元素更小，则交换位置\n      const temp = a[i];\n      this.minHeap[i] = a[i >> 1];\n      this.minHeap[i >> 1] = temp;\n    }\n  }\n  this.minHeap.shift(null);\n}\n\nfunction maxHeapify() {\n  this.maxHeap.unshift(null);\n  const a = this.maxHeap;\n\n  // 为了方便大家理解，这里选用了粗暴的实现\n  // 时间复杂度为O(n)\n  // 其实可以降到O(logn)， 具体细节我不想在这里讲解和实现\n  for (let i = a.length - 1; i >> 1 > 0; i--) {\n    // 自下往上堆化\n    if (a[i] > a[i >> 1]) { // 如果子元素更大，则交换位置\n      const temp = a[i];\n      this.maxHeap[i] = a[i >> 1];\n      this.maxHeap[i >> 1] = temp;\n    }\n  }\n  this.maxHeap.shift(null);\n}\n\n/**\n * @param {number} num\n * @return {void}\n */\nMedianFinder.prototype.addNum = function(num) {\n  // 为了大家容易理解，这部分代码写的比较冗余\n\n  // 插入\n  if (num >= (this.minHeap[0] || Number.MIN_VALUE)) {\n    this.minHeap.push(num);\n  } else {\n    this.maxHeap.push(num);\n  }\n  // 调整两个堆的节点数量平衡\n  // 使得大顶堆的数量最多大于小顶堆一个， 且一定不小于小顶堆数量\n  if (this.maxHeap.length > this.minHeap.length + 1) {\n    // 大顶堆的堆顶元素移动到小顶堆\n    this.minHeap.push(this.maxHeap.shift());\n  }\n\n  if (this.minHeap.length > this.maxHeap.length) {\n    // 小顶堆的堆顶元素移动到大顶堆\n    this.maxHeap.push(this.minHeap.shift());\n  }\n\n  // 调整堆顶元素\n  if (this.maxHeap[0] > this.minHeap[0]) {\n    const temp = this.maxHeap[0];\n    this.maxHeap[0] = this.minHeap[0];\n    this.minHeap[0] = temp;\n  }\n\n  // 堆化\n  maxHeapify.call(this);\n  minHeapify.call(this);\n};\n\n/**\n * @return {number}\n */\nMedianFinder.prototype.findMedian = function() {\n  if ((this.maxHeap.length + this.minHeap.length) % 2 === 0) {\n    return (this.minHeap[0] + this.maxHeap[0]) / 2;\n  } else {\n    return this.maxHeap[0];\n  }\n};\n\n/**\n * Your MedianFinder object will be instantiated and called as such:\n * var obj = new MedianFinder()\n * obj.addNum(num)\n * var param_2 = obj.findMedian()\n */\n"
        },
        {
            "language": "js",
            "text": "\n\nthis.heap.unshift(null);\n// ....\nthis.heap.shift(null);\n\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=295 lang=javascript\n *\n * [295] Find Median from Data Stream\n *\n * https://leetcode.com/problems/find-median-from-data-stream/description/\n *\n * algorithms\n * Hard (35.08%)\n * Total Accepted:    101.2K\n * Total Submissions: 282.4K\n * Testcase Example:  '[\"MedianFinder\",\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"]\\n[[],[1],[2],[],[3],[]]'\n *\n * Median is the middle value in an ordered integer list. If the size of the\n * list is even, there is no middle value. So the median is the mean of the two\n * middle value.\n * For example,\n *\n * [2,3,4], the median is 3\n *\n * [2,3], the median is (2 + 3) / 2 = 2.5\n *\n * Design a data structure that supports the following two operations:\n *\n *\n * void addNum(int num) - Add a integer number from the data stream to the data\n * structure.\n * double findMedian() - Return the median of all elements so far.\n *\n *\n *\n *\n * Example:\n *\n *\n * addNum(1)\n * addNum(2)\n * findMedian() -> 1.5\n * addNum(3)\n * findMedian() -> 2\n *\n *\n *\n *\n * Follow up:\n *\n *\n * If all integer numbers from the stream are between 0 and 100, how would you\n * optimize it?\n * If 99% of all integer numbers from the stream are between 0 and 100, how\n * would you optimize it?\n *\n *\n */\n/**\n * initialize your data structure here.\n */\nvar MedianFinder = function() {\n  this.maxHeap = new PriorityQueue((a, b) => a - b);\n  this.minHeap = new PriorityQueue((a, b) => b - a);\n};\n\n/**\n * @param {number} num\n * @return {void}\n */\nMedianFinder.prototype.addNum = function(num) {\n    // 我们的目标就是建立两个堆，一个大顶堆，一个小顶堆\n    // 结合中位数的特点\n    // 这两个堆需要满足:\n    // 1. 大顶堆元素都比小顶堆小（由于堆的特点其实只要比较堆顶即可）\n    // 2. 大顶堆元素不小于小顶堆，且最多比小顶堆多一个元素\n\n    // 满足上面两个条件的话，如果想要找到中位数，就比较简单了\n    // 如果两个堆数量相等（本质是总数为偶数）, 就两个堆顶元素的平均数\n    // 如果两个堆数量不相等（本质是总数为奇数）， 就取大顶堆的堆顶元素\n\n    // 问题如果保证满足上述两个特点\n\n    // 1. 保证第一点\n    this.maxHeap.enq(num);\n    // 由于小顶堆的所有数都来自大顶堆的堆顶元素（最大值）\n    // 因此可以保证第一点\n    this.minHeap.enq(this.maxHeap.deq());\n\n    // 2. 保证第二点\n    if (this.maxHeap.size() < this.minHeap.size()){\n        this.maxHeap.enq(this.minHeap.deq());\n    }\n};\n\n/**\n * @return {number}\n */\nMedianFinder.prototype.findMedian = function() {\n    if (this.maxHeap.size() == this.minHeap.size()) return (this.maxHeap.peek() + this.minHeap.peek()) /  2.0;\n    else return this.maxHeap.peek();\n};\n\n/**\n * Your MedianFinder object will be instantiated and called as such:\n * var obj = new MedianFinder()\n * obj.addNum(num)\n * var param_2 = obj.findMedian()\n */\n\n"
        }
    ]
},
"json":{
    "id": "1334",
    "name": "find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n- Floyd-Warshall\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1334.find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:\n        # 构建dist矩阵\n        dist = [[float('inf')] * n for _ in  range(n)]\n        for i, j, w in edges:\n            dist[i][j] = w\n            dist[j][i] = w\n        for i in range(n):\n            dist[i][i] = 0\n        for k in range(n):\n            for i in range(n):\n                for j in range(n):\n                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])\n\n        # 过滤\n        res = 0\n        minCnt = float('inf')\n        for i in range(n):\n            cnt = 0\n            for d in dist[i]:\n                if d <= distanceThreshold:\n                    cnt += 1\n            if cnt <= minCnt:\n                minCnt = cnt\n                res = i\n        return res\n\n\n"
        }
    ]
},
"json":{
    "id": "1371",
    "name": "find-the-longest-substring-containing-vowels-in-even-counts",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 前缀和\n- 状态压缩\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀和",
            "link": null,
            "color": "blue"
        },
        {
            "text": "状态压缩",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1371.find-the-longest-substring-containing-vowels-in-even-counts.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int findTheLongestSubstring(String s) {\n\n        int len = s.length();\n\n        if (len == 0)\n            return 0;\n\n        int[][] preSum = new int[len][5];\n        int start = getIndex(s.charAt(0));\n        if (start != -1)\n            preSum[0][start]++;\n\n        // preSum\n        for (int i = 1; i < len; i++) {\n\n            int idx = getIndex(s.charAt(i));\n\n            for (int j = 0; j < 5; j++) {\n\n                if (idx == j)\n                    preSum[i][j] = preSum[i - 1][j] + 1;\n                else\n                    preSum[i][j] = preSum[i - 1][j];\n            }\n        }\n\n        for (int i = len - 1; i >= 0; i--) {\n\n            for (int j = 0; j < len - i; j++) {\n                if (checkValid(preSum, s, i, i + j))\n                    return i + 1\n            }\n        }\n        return 0\n    }\n\n\n    public boolean checkValid(int[][] preSum, String s, int left, int right) {\n\n        int idx = getIndex(s.charAt(left));\n\n        for (int i = 0; i < 5; i++)\n            if (((preSum[right][i] - preSum[left][i] + (idx == i ? 1 : 0)) & 1) == 1)\n                return false;\n\n        return true;\n    }\n    public int getIndex(char ch) {\n\n        if (ch == 'a')\n            return 0;\n        else if (ch == 'e')\n            return 1;\n        else if (ch == 'i')\n            return 2;\n        else if (ch == 'o')\n            return 3;\n        else if (ch == 'u')\n            return 4;\n        else\n            return -1;\n    }\n}\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def findTheLongestSubstring(self, s: str) -> int:\n        for i in range(len(s), 0, -1):\n            for j in range(len(s) - i + 1):\n                sub = s[j:j + i]\n                has_odd_vowel = False\n                for vowel in ['a', 'e', 'i', 'o', 'u']:\n                    if sub.count(vowel) % 2 != 0:\n                        has_odd_vowel = True\n                        break\n                if not has_odd_vowel: return  i\n        return 0\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    i_mapper = {\n        \"a\": 0,\n        \"e\": 1,\n        \"i\": 2,\n        \"o\": 3,\n        \"u\": 4\n    }\n    def check(self, s, pre, l, r):\n        for i in range(5):\n            if s[l] in self.i_mapper and i == self.i_mapper[s[l]]: cnt = 1\n            else: cnt = 0\n            if (pre[r][i] - pre[l][i] + cnt) % 2 != 0: return False\n        return True\n    def findTheLongestSubstring(self, s: str) -> int:\n        n = len(s)\n\n        pre = [[0] * 5 for _ in range(n)]\n\n        # pre\n        for i in range(n):\n            for j in range(5):\n                if s[i] in self.i_mapper and self.i_mapper[s[i]] == j:\n                    pre[i][j] = pre[i - 1][j] + 1\n                else:\n                    pre[i][j] = pre[i - 1][j]\n        for i in range(n - 1, -1, -1):\n            for j in range(n - i):\n                if self.check(s, pre, j, i + j):\n                    return i + 1\n        return 0\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def findTheLongestSubstring(self, s: str) -> int:\n        mapper = {\n            \"a\": 1,\n            \"e\": 2,\n            \"i\": 4,\n            \"o\": 8,\n            \"u\": 16\n        }\n        seen = {0: -1}\n        res = cur = 0\n\n        for i in range(len(s)):\n            if s[i] in mapper:\n                cur ^= mapper.get(s[i])\n            # 全部奇偶性都相同，相减一定都是偶数\n            if cur in seen:\n                res = max(res, i - seen.get(cur))\n            else:\n                seen[cur] = i\n        return res\n\n"
        }
    ]
},
"json":{
    "id": "1449",
    "name": "form-largest-integer-with-digits-that-add-up-to-target",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 动态规划\n-背包问题\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1449.form-largest-integer-with-digits-that-add-up-to-target.md",
    "code": [
        {
            "language": "py",
            "text": "\nfor i in 0 to N:\n    for j in 1 to V + 1:\n        dp[j] = max(dp[j], dp[j - cost[i])\n"
        },
        {
            "language": "py",
            "text": "\nfor i in 1 to N + 1:\n    # 这里是倒序的，原因在于这里是01背包。\n    for j in V to 0:\n        dp[j] = max(dp[j], dp[j - cost[i - 1])\n"
        },
        {
            "language": "py",
            "text": "\nfor i in 1 to N + 1:\n    # 这里不是倒序，原因是我们这里是完全背包问题\n    for j in 1 to V + 1:\n        dp[j] = max(dp[j], dp[j - cost[i - 1])\n\n"
        },
        {
            "language": "py",
            "text": "\nfor i in 1 to N + 1:\n    for j in V to 0:\n        dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - cost[i - 1])\n"
        },
        {
            "language": "py",
            "text": "\nfor i in 1 to N + 1:\n   for j in 1 to V + 1:\n       dp[i][j] = max(dp[i - 1][j], dp[i][j - cost[i - 1])\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestNumber(self, cost: List[int], target: int) -> str:\n        dp = [0] + [float('-inf')] * target\n        for i in range(9, 0, -1):\n            for j in range(1, target+1):\n                if j >= cost[i - 1]:\n                    dp[j] = max(dp[j], (dp[j-cost[i - 1]] * 10) + i)\n        return str(dp[target]) if dp[target] > 0 else '0'\n\n"
        },
        {
            "language": "py",
            "text": "\nfor i in 1 to N + 1:\n    for j in V to 0:\n        ...\n\n"
        },
        {
            "language": "py",
            "text": "\nfor j in V to 0:\n    for i in 1 to N + 1:\n        ...\n\n"
        }
    ]
},
"json":{
    "id": "547",
    "name": "friend-circles-en",
    "company": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/547.friend-circles-en.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass FindCirclesDFS {\n  public int findCircleNumDFS(int[][] M) {\n    if (M == null || M.length == 0 || M[0].length == 0) return 0;\n    int n = M.length;\n    int numCircles = 0;\n    boolean[] visited = new boolean[n];\n    for (int i = 0; i < n; i++) {\n      if (!visited[i]) {\n        dfs(M, i, visited, n);\n        numCircles++;\n      }\n    }\n    return numCircles;\n  }\n\n  private void dfs(int[][] M, int i, boolean[] visited, int n) {\n    for (int j = 0; j < n; j++) {\n      if (M[i][j] == 1 && !visited[j]) {\n        visited[j] = true;\n        dfs(M, j, visited, n);\n      }\n    }\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass FindCircleBFS {\n  public int findCircleNumBFS(int[][] M) {\n    if (M == null || M.length == 0) return 0;\n    int numCircle = 0;\n    int n = M.length;\n    boolean[] visited = new boolean[n];\n    Queue<Integer> queue = new LinkedList<>();\n    for (int i = 0; i < n; i++) {\n      // already visited, skip\n      if (visited[i]) continue;\n      queue.add(i);\n      while (!queue.isEmpty()) {\n        int curr = queue.poll();\n        visited[curr] = true;\n        for (int j = 0; j < n; j++) {\n          if (M[curr][j] == 1 && !visited[j]) {\n            queue.add(j);\n          }\n        }\n      }\n      numCircle++;\n    }\n    return numCircle;\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass FindCircleUF {\n public int findCircleNumUF(int[][] M) {\n    if (M == null || M.length == 0 || M[0].length == 0) return 0;\n    int n = M.length;\n    UnionFind uf = new UnionFind(n);\n    for (int i = 0; i < n - 1; i++) {\n      for (int j = i + 1; j < n; j++) {\n        // union friends\n        if (M[i][j] == 1) {\n          uf.union(i, j);\n        }\n      }\n    }\n    return uf.count;\n  }\n}\n\nclass UnionFind {\n  int count;\n  int[] parent;\n  int[] rank;\n\n  public UnionFind(int n) {\n    count = n;\n    parent = new int[n];\n    rank = new int[n];\n    for (int i = 0; i < n; i++) {\n      parent[i] = i;\n    }\n  }\n\n  public int find(int a) {\n    return parent[a] == a ? a : find(parent[a]);\n  }\n\n  public void union(int a, int b) {\n    int rootA = find(a);\n    int rootB = find(b);\n    if (rootA == rootB) return;\n    if (rank[rootA] <= rank[rootB]) {\n      parent[rootA] = rootB;\n      rank[rootB] += rank[rootA];\n    } else {\n      parent[rootB] = rootA;\n      rank[rootA] += rank[rootB];\n    }\n    count--;\n  }\n\n  public int count() {\n    return count;\n  }\n}\n"
        }
    ]
},
"json":{
    "id": "547",
    "name": "friend-circles",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 并查集\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/547.friend-circles.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass UF:\n    parent = {}\n    cnt = 0\n    def __init__(self, M):\n        n = len(M)\n        for i in range(n):\n            self.parent[i] = i\n            self.cnt += 1\n\n    def find(self, x):\n        while x != self.parent[x]:\n            x = self.parent[x]\n        return x\n    def union(self, p, q):\n        if self.connected(p, q): return\n        self.parent[self.find(p)] = self.find(q)\n        self.cnt -= 1\n    def connected(self, p, q):\n        return self.find(p) == self.find(q)\n\nclass Solution:\n    def findCircleNum(self, M: List[List[int]]) -> int:\n        n = len(M)\n        uf = UF(M)\n        for i in range(n):\n            for j in range(i):\n                if M[i][j] == 1:\n                    uf.union(i, j)\n        return uf.cnt\n\n"
        }
    ]
},
"json":{
    "id": "22",
    "name": "generate-parentheses",
    "company": [],
    "pre": [
        {
            "text": "\n\n- DFS\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "当l<r时记得剪枝",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/22.generate-parentheses.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number} n\n * @return {string[]}\n * @param l 左括号已经用了几个\n * @param r 右括号已经用了几个\n * @param str 当前递归得到的拼接字符串结果\n * @param res 结果集\n */\nconst generateParenthesis = function (n) {\n  const res = [];\n\n  function dfs(l, r, str) {\n    if (l == n && r == n) {\n      return res.push(str);\n    }\n    // l 小于 r 时不满足条件 剪枝\n    if (l < r) {\n      return;\n    }\n    // l 小于 n 时可以插入左括号，最多可以插入 n 个\n    if (l < n) {\n      dfs(l + 1, r, str + \"(\");\n    }\n    // r < l 时 可以插入右括号\n    if (r < l) {\n      dfs(l, r + 1, str + \")\");\n    }\n  }\n  dfs(0, 0, \"\");\n  return res;\n};\n"
        }
    ]
},
"json":{
    "id": "1262",
    "name": "greatest-sum-divisible-by-three",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 回溯法\n- 排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "贪婪法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "状态机",
            "link": null,
            "color": "blue"
        },
        {
            "text": "数学分析",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1262.greatest-sum-divisible-by-three.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumDivThree(self, nums: List[int]) -> int:\n        self.res = 0\n        def backtrack(temp, start):\n            total = sum(temp)\n            if total % 3 == 0:\n                self.res = max(self.res, total)\n            for i in range(start, len(nums)):\n                temp.append(nums[i])\n                backtrack(temp, i + 1)\n                temp.pop(-1)\n\n\n        backtrack([], 0)\n\n        return self.res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumDivThree(self, nums: List[int]) -> int:\n        one = []\n        two = []\n        total = 0\n\n        for num in nums:\n            total += num\n            if num % 3 == 1:\n                one.append(num)\n            if num % 3 == 2:\n                two.append(num)\n        one.sort()\n        two.sort()\n        if total % 3 == 0:\n            return total\n        elif total % 3 == 1 and one:\n            if len(two) >= 2 and one[0] > two[0] + two[1]:\n                return total - two[0] - two[1]\n            return total - one[0]\n        elif total % 3 == 2 and two:\n            if len(one) >= 2 and two[0] > one[0] + one[1]:\n                return total - one[0] - one[1]\n            return total - two[0]\n        return 0\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumDivThree(self, nums: List[int]) -> int:\n        one = [float('inf')] * 2\n        two = [float('inf')] * 2\n        total = 0\n\n        for num in nums:\n            total += num\n            if num % 3 == 1:\n                if num < one[0]:\n                    t = one[0]\n                    one[0] = num\n                    one[1] = t\n                elif num < one[1]:\n                    one[1] = num\n            if num % 3 == 2:\n                if num < two[0]:\n                    t = two[0]\n                    two[0] = num\n                    two[1] = t\n                elif num < two[1]:\n                    two[1] = num\n        if total % 3 == 0:\n            return total\n        elif total % 3 == 1 and one:\n            if len(two) >= 2 and one[0] > two[0] + two[1]:\n                return total - two[0] - two[1]\n            return total - one[0]\n        elif total % 3 == 2 and two:\n            if len(one) >= 2 and two[0] > one[0] + one[1]:\n                return total - one[0] - one[1]\n            return total - two[0]\n        return 0\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumDivThree(self, nums: List[int]) -> int:\n        state = [0, float('-inf'), float('-inf')]\n\n        for num in nums:\n            if num % 3 == 0:\n                state = [state[0] + num, state[1] + num, state[2] + num]\n            if num % 3 == 1:\n                a = max(state[2] + num, state[0])\n                b = max(state[0] + num, state[1])\n                c = max(state[1] + num, state[2])\n                state = [a, b, c]\n            if num % 3 == 2:\n                a = max(state[1] + num, state[0])\n                b = max(state[2] + num, state[1])\n                c = max(state[0] + num, state[2])\n                state = [a, b, c]\n        return state[0]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumDivThree(self, nums: List[int]) -> int:\n        state = [0, float('-inf'), float('-inf')]\n\n        for num in nums:\n            temp = [0] * 3\n            for i in range(3):\n                temp[(i + num) % 3] = max(state[(i + num) % 3], state[i] + num)\n            state = temp\n\n        return state[0]\n"
        }
    ]
},
"json":{
    "id": "49",
    "name": "group-anagrams",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n- 排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "桶排序",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/49.group-anagrams.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar groupAnagrams = function (strs) {\n  const hashTable = {};\n\n  function sort(str) {\n    return str.split(\"\").sort().join(\"\");\n  }\n\n  // 这个方法需要排序，因此不是很优，但是很直观，容易想到\n  for (let i = 0; i < strs.length; i++) {\n    const str = strs[i];\n    const key = sort(str);\n    if (!hashTable[key]) {\n      hashTable[key] = [str];\n    } else {\n      hashTable[key].push(str);\n    }\n  }\n\n  return Object.values(hashTable);\n};\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=49 lang=javascript\n *\n * [49] Group Anagrams\n */\n/**\n * @param {string[]} strs\n * @return {string[][]}\n */\nvar groupAnagrams = function (strs) {\n  // 类似桶排序\n\n  let counts = [];\n  const hashTable = {};\n  for (let i = 0; i < strs.length; i++) {\n    const str = strs[i];\n    counts = Array(26).fill(0);\n    for (let j = 0; j < str.length; j++) {\n      counts[str[j].charCodeAt(0) - \"a\".charCodeAt(0)]++;\n    }\n    const key = counts.join(\"\");\n    if (!hashTable[key]) {\n      hashTable[key] = [str];\n    } else {\n      hashTable[key].push(str);\n    }\n  }\n\n  return Object.values(hashTable);\n};\n"
        }
    ]
},
"json":{
    "id": "198",
    "name": "house-robber",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/198.house-robber.md",
    "code": [
        {
            "language": "js",
            "text": "\nlet a = 0;\nlet b = 0;\n\nfor (let i = 0; i < nums.length; i++) {\n  const temp = b;\n  b = Math.max(a + nums[i], b);\n  a = temp;\n}\n\nreturn b;\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=198 lang=javascript\n *\n * [198] House Robber\n *\n * https://leetcode.com/problems/house-robber/description/\n *\n * algorithms\n * Easy (40.80%)\n * Total Accepted:    312.1K\n * Total Submissions: 762.4K\n * Testcase Example:  '[1,2,3,1]'\n *\n * You are a professional robber planning to rob houses along a street. Each\n * house has a certain amount of money stashed, the only constraint stopping\n * you from robbing each of them is that adjacent houses have security system\n * connected and it will automatically contact the police if two adjacent\n * houses were broken into on the same night.\n *\n * Given a list of non-negative integers representing the amount of money of\n * each house, determine the maximum amount of money you can rob tonight\n * without alerting the police.\n *\n * Example 1:\n *\n *\n * Input: [1,2,3,1]\n * Output: 4\n * Explanation: Rob house 1 (money = 1) and then rob house 3 (money =\n * 3).\n * Total amount you can rob = 1 + 3 = 4.\n *\n * Example 2:\n *\n *\n * Input: [2,7,9,3,1]\n * Output: 12\n * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house\n * 5 (money = 1).\n * Total amount you can rob = 2 + 9 + 1 = 12.\n *\n *\n */\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar rob = function(nums) {\n  // Tag: DP\n  const dp = [];\n  dp[0] = 0;\n  dp[1] = 0;\n\n  for (let i = 2; i < nums.length + 2; i++) {\n    dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);\n  }\n\n  return dp[nums.length + 1];\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def rob(self, nums: List[int]) -> int:\n        if not nums:\n            return 0\n\n        length = len(nums)\n        if length == 1:\n            return nums[0]\n        else:\n            prev = nums[0]\n            cur = max(prev, nums[1])\n            for i in range(2, length):\n                cur, prev = max(prev + nums[i], cur), cur\n            return cur\n"
        }
    ]
},
"json":{
    "id": "232",
    "name": "implement-queue-using-stacks",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 栈\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "在push的时候利用辅助栈(双栈)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/232.implement-queue-using-stacks.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass MyQueue {\n    Stack<Integer> pushStack = new Stack<> ();\n    Stack<Integer> popStack = new Stack<> ();\n\n    /** Initialize your data structure here. */\n    public MyQueue() {\n\n    }\n    \n    /** Push element x to the back of queue. */\n    public void push(int x) {\n        while (!popStack.isEmpty()) {\n            pushStack.push(popStack.pop());\n        }\n        pushStack.push(x);\n    }\n    \n    /** Removes the element from in front of queue and returns that element. */\n    public int pop() {\n        while (!pushStack.isEmpty()) {\n            popStack.push(pushStack.pop());\n        }\n        return popStack.pop();\n    }\n    \n    /** Get the front element. */\n    public int peek() {\n        while (!pushStack.isEmpty()) {\n            popStack.push(pushStack.pop());\n        }\n        return popStack.peek();\n    }\n    \n    /** Returns whether the queue is empty. */\n    public boolean empty() {\n        return pushStack.isEmpty() && popStack.isEmpty();\n    }\n}\n\n/**\n * Your MyQueue object will be instantiated and called as such:\n * MyQueue obj = new MyQueue();\n * obj.push(x);\n * int param_2 = obj.pop();\n * int param_3 = obj.peek();\n * boolean param_4 = obj.empty();\n */\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=232 lang=javascript\n *\n * [232] Implement Queue using Stacks\n */\n/**\n * Initialize your data structure here.\n */\nvar MyQueue = function() {\n  // tag: queue stack array\n  this.stack = [];\n  this.helperStack = [];\n};\n\n/**\n * Push element x to the back of queue.\n * @param {number} x\n * @return {void}\n */\nMyQueue.prototype.push = function(x) {\n  let cur = null;\n  while ((cur = this.stack.pop())) {\n    this.helperStack.push(cur);\n  }\n  this.helperStack.push(x);\n\n  while ((cur = this.helperStack.pop())) {\n    this.stack.push(cur);\n  }\n};\n\n/**\n * Removes the element from in front of queue and returns that element.\n * @return {number}\n */\nMyQueue.prototype.pop = function() {\n  return this.stack.pop();\n};\n\n/**\n * Get the front element.\n * @return {number}\n */\nMyQueue.prototype.peek = function() {\n  return this.stack[this.stack.length - 1];\n};\n\n/**\n * Returns whether the queue is empty.\n * @return {boolean}\n */\nMyQueue.prototype.empty = function() {\n  return this.stack.length === 0;\n};\n\n/**\n * Your MyQueue object will be instantiated and called as such:\n * var obj = new MyQueue()\n * obj.push(x)\n * var param_2 = obj.pop()\n * var param_3 = obj.peek()\n * var param_4 = obj.empty()\n */\n"
        },
        {
            "language": "py",
            "text": "\nclass MyQueue:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.stack = []\n        self.help_stack = []\n\n    def push(self, x: int) -> None:\n        \"\"\"\n        Push element x to the back of queue.\n        \"\"\"\n        while self.stack:\n            self.help_stack.append(self.stack.pop())\n        self.help_stack.append(x)\n        while self.help_stack:\n            self.stack.append(self.help_stack.pop())\n\n    def pop(self) -> int:\n        \"\"\"\n        Removes the element from in front of queue and returns that element.\n        \"\"\"\n        return self.stack.pop()\n\n    def peek(self) -> int:\n        \"\"\"\n        Get the front element.\n        \"\"\"\n        return self.stack[-1]\n\n    def empty(self) -> bool:\n        \"\"\"\n        Returns whether the queue is empty.\n        \"\"\"\n        return not bool(self.stack)\n\n\n# Your MyQueue object will be instantiated and called as such:\n# obj = MyQueue()\n# obj.push(x)\n# param_2 = obj.pop()\n# param_3 = obj.peek()\n# param_4 = obj.empty()\n"
        }
    ]
},
"json":{
    "id": "208",
    "name": "implement-trie-prefix-tree",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 前缀树\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀树",
            "link": null,
            "color": "blue"
        },
        {
            "text": "核心逻辑```jsconstc=word[i];constcurrent=computeIndex(c)if(!ws.children[current]){ws.children[current]=newTrieNode(c);}ws=ws.children[current];//深度递增}```",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/208.implement-trie-prefix-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\nfunction TrieNode(val) {\n  this.val = val; // 当前的字母\n  this.children = []; // 题目要求字典仅有a-z，那么其长度最大为26（26个字母）\n  this.isWord = false;\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction computeIndex(c) {\n  return c.charCodeAt(0) - \"a\".charCodeAt(0);\n}\n"
        },
        {
            "language": "js",
            "text": "\n const c = word[i];\n const current = computeIndex(c)\nif (!ws.children[current]) {\n    ws.children[current] = new TrieNode(c);\n  }\n  ws = ws.children[current]; // 深度递增\n}\n\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=208 lang=javascript\n *\n * [208] Implement Trie (Prefix Tree)\n *\n * https://leetcode.com/problems/implement-trie-prefix-tree/description/\n *\n * algorithms\n * Medium (36.93%)\n * Total Accepted:    172K\n * Total Submissions: 455.5K\n * Testcase Example:  '[\"Trie\",\"insert\",\"search\",\"search\",\"startsWith\",\"insert\",\"search\"]\\n[[],[\"apple\"],[\"apple\"],[\"app\"],[\"app\"],[\"app\"],[\"app\"]]'\n *\n * Implement a trie with insert, search, and startsWith methods.\n *\n * Example:\n *\n *\n * Trie trie = new Trie();\n *\n * trie.insert(\"apple\");\n * trie.search(\"apple\");   // returns true\n * trie.search(\"app\");     // returns false\n * trie.startsWith(\"app\"); // returns true\n * trie.insert(\"app\");\n * trie.search(\"app\");     // returns true\n *\n *\n * Note:\n *\n *\n * You may assume that all inputs are consist of lowercase letters a-z.\n * All inputs are guaranteed to be non-empty strings.\n *\n *\n */\nfunction TrieNode(val) {\n  this.val = val;\n  this.children = [];\n  this.isWord = false;\n}\n\nfunction computeIndex(c) {\n  return c.charCodeAt(0) - \"a\".charCodeAt(0);\n}\n/**\n * Initialize your data structure here.\n */\nvar Trie = function() {\n  this.root = new TrieNode(null);\n};\n\n/**\n * Inserts a word into the trie.\n * @param {string} word\n * @return {void}\n */\nTrie.prototype.insert = function(word) {\n  let ws = this.root;\n  for (let i = 0; i < word.length; i++) {\n    const c = word[i];\n    const current = computeIndex(c);\n    if (!ws.children[current]) {\n      ws.children[current] = new TrieNode(c);\n    }\n    ws = ws.children[current];\n  }\n  ws.isWord = true;\n};\n\n/**\n * Returns if the word is in the trie.\n * @param {string} word\n * @return {boolean}\n */\nTrie.prototype.search = function(word) {\n  let ws = this.root;\n  for (let i = 0; i < word.length; i++) {\n    const c = word[i];\n    const current = computeIndex(c);\n    if (!ws.children[current]) return false;\n    ws = ws.children[current];\n  }\n  return ws.isWord;\n};\n\n/**\n * Returns if there is any word in the trie that starts with the given prefix.\n * @param {string} prefix\n * @return {boolean}\n */\nTrie.prototype.startsWith = function(prefix) {\n  let ws = this.root;\n  for (let i = 0; i < prefix.length; i++) {\n    const c = prefix[i];\n    const current = computeIndex(c);\n    if (!ws.children[current]) return false;\n    ws = ws.children[current];\n  }\n  return true;\n};\n\n/**\n * Your Trie object will be instantiated and called as such:\n * var obj = new Trie()\n * obj.insert(word)\n * var param_2 = obj.search(word)\n * var param_3 = obj.startsWith(prefix)\n */\n"
        }
    ]
},
"json":{
    "id": "334",
    "name": "increasing-triplet-subsequence",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "维护三个变量，分别记录最小值，第二小值，第三小值。只要我们能够填满这三个变量就返回true，否则返回false",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/334.increasing-triplet-subsequence.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=334 lang=javascript\n *\n * [334] Increasing Triplet Subsequence\n *\n * https://leetcode.com/problems/increasing-triplet-subsequence/description/\n *\n * algorithms\n * Medium (39.47%)\n * Total Accepted:    89.6K\n * Total Submissions: 226.6K\n * Testcase Example:  '[1,2,3,4,5]'\n *\n * Given an unsorted array return whether an increasing subsequence of length 3\n * exists or not in the array.\n * \n * Formally the function should:\n * \n * Return true if there exists i, j, k \n * such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return\n * false.\n * \n * Note: Your algorithm should run in O(n) time complexity and O(1) space\n * complexity.\n * \n * \n * Example 1:\n * \n * \n * Input: [1,2,3,4,5]\n * Output: true\n * \n * \n *\n * Example 2:\n * \n * \n * Input: [5,4,3,2,1]\n * Output: false\n * \n * \n * \n */\n/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar increasingTriplet = function(nums) {\n    if (nums.length < 3) return false;\n    let n1 = Number.MAX_VALUE;\n    let n2 = Number.MAX_VALUE;\n\n    for(let i = 0; i < nums.length; i++) {\n        if (nums[i] <= n1) {\n            n1 = nums[i]\n        } else if (nums[i] <= n2) {\n            n2 = nums[i]\n        } else {\n            return true;\n        }\n    }\n\n    return false;\n};\n"
        }
    ]
},
"json":{
    "id": "380",
    "name": "insert-delete-getrandom-o1",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 哈希表\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数组",
            "link": null,
            "color": "blue"
        },
        {
            "text": "哈希表",
            "link": null,
            "color": "blue"
        },
        {
            "text": "数组+哈希表",
            "link": null,
            "color": "blue"
        },
        {
            "text": "基本算法时间复杂度分析",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/380.insert-delete-getrandom-o1.md",
    "code": [
        {
            "language": "py",
            "text": "\nfrom random import random\n\n\nclass RandomizedSet:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.data = dict()\n        self.arr = []\n        self.n = 0\n\n    def insert(self, val: int) -> bool:\n        \"\"\"\n        Inserts a value to the set. Returns true if the set did not already contain the specified element.\n        \"\"\"\n        if val in self.data:\n            return False\n        self.data[val] = self.n\n        self.arr.append(val)\n        self.n += 1\n\n        return True\n\n    def remove(self, val: int) -> bool:\n        \"\"\"\n        Removes a value from the set. Returns true if the set contained the specified element.\n        \"\"\"\n        if val not in self.data:\n            return False\n        i = self.data[val]\n        # 更新data\n        self.data[self.arr[-1]] = i\n        self.data.pop(val)\n        # 更新arr\n        self.arr[i] = self.arr[-1]\n        # 删除最后一项\n        self.arr.pop()\n        self.n -= 1\n\n        return True\n\n    def getRandom(self) -> int:\n        \"\"\"\n        Get a random element from the set.\n        \"\"\"\n\n        return self.arr[int(random() * self.n)]\n\n\n# Your RandomizedSet object will be instantiated and called as such:\n# obj = RandomizedSet()\n# param_1 = obj.insert(val)\n# param_2 = obj.remove(val)\n# param_3 = obj.getRandom()\n"
        }
    ]
},
"json":{
    "id": "343",
    "name": "integer-break",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 递归\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数学抽象",
            "link": null,
            "color": "blue"
        },
        {
            "text": "递归分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "记忆化递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/343.integer-break.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def integerBreak(self, n: int) -> int:\n        dp = [1] * (n + 1)\n        for i in range(3, n + 1):\n            for j in range(1, i):\n                dp[i] = max(j * dp[i - j], j * (i - j), dp[i])\n        return dp[n]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def integerBreak(self, n: int) -> int:\n        if n == 2: return 1\n        res = 0\n        for i in range(1, n):\n            res = max(res, max(i * self.integerBreak(n - i),i * (n - i)))\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    @lru_cache()\n    def integerBreak(self, n: int) -> int:\n        if n == 2: return 1\n        res = 0\n        for i in range(1, n):\n            res = max(res, max(i * self.integerBreak(n - i),i * (n - i)))\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def integerBreak(self, n: int) -> int:\n        dp = [1] * (n + 1)\n        for i in range(3, n + 1):\n            for j in range(1, i):\n                dp[i] = max(j * dp[i - j], j * (i - j), dp[i])\n        return dp[n]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def integerBreak(self, n: int) -> int:\n        dp = [1] * (n + 1)\n        for i in range(3, n + 1):\n            for j in range(1, i):\n                dp[i] = max(j * dp[i - j], j * (i - j), dp[i])\n        return dp[n]\n"
        }
    ]
},
"json":{
    "id": "349",
    "name": "intersection-of-two-arrays",
    "company": [],
    "pre": [
        {
            "text": "\n\n- hashtable\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析无",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/349.intersection-of-two-arrays.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=349 lang=javascript\n *\n * [349] Intersection of Two Arrays\n *\n * https://leetcode.com/problems/intersection-of-two-arrays/description/\n *\n * algorithms\n * Easy (53.11%)\n * Total Accepted:    203.6K\n * Total Submissions: 380.9K\n * Testcase Example:  '[1,2,2,1]\\n[2,2]'\n *\n * Given two arrays, write a function to compute their intersection.\n *\n * Example 1:\n *\n *\n * Input: nums1 = [1,2,2,1], nums2 = [2,2]\n * Output: [2]\n *\n *\n *\n * Example 2:\n *\n *\n * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]\n * Output: [9,4]\n *\n *\n * Note:\n *\n *\n * Each element in the result must be unique.\n * The result can be in any order.\n *\n *\n *\n *\n */\n/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number[]}\n */\nvar intersection = function(nums1, nums2) {\n    const visited = {};\n    const ret = [];\n    for(let i = 0; i < nums1.length; i++) {\n        const num = nums1[i];\n\n        visited[num] = num;\n    }\n\n    for(let i = 0; i < nums2.length; i++) {\n        const num = nums2[i];\n\n        if (visited[num] !== undefined) {\n            ret.push(num);\n            visited[num] = undefined;\n        }\n    }\n\n    return ret;\n\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        visited, result = {}, []\n        for num in nums1:\n            visited[num] = num\n        for num in nums2:\n            if num in visited:\n                result.append(num)\n                visited.pop(num)\n        return result\n\n    # 另一种解法：利用 Python 中的集合进行计算\n    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        return set(nums1) & set(nums2)\n"
        }
    ]
},
"json":{
    "id": "226",
    "name": "invert-binary-tree",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 递归\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "递归简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果树很高，建议使用栈来代替递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "这道题目对顺序没要求的，因此队列数组操作都是一样的，无任何区别",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/226.invert-binary-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=226 lang=javascript\n *\n * [226] Invert Binary Tree\n *\n * https://leetcode.com/problems/invert-binary-tree/description/\n *\n * algorithms\n * Easy (57.14%)\n * Total Accepted:    311K\n * Total Submissions: 540.6K\n * Testcase Example:  '[4,2,7,1,3,6,9]'\n *\n * Invert a binary tree.\n *\n * Example:\n *\n * Input:\n *\n *\n * ⁠    4\n * ⁠  /   \\\n * ⁠ 2     7\n * ⁠/ \\   / \\\n * 1   3 6   9\n *\n * Output:\n *\n *\n * ⁠    4\n * ⁠  /   \\\n * ⁠ 7     2\n * ⁠/ \\   / \\\n * 9   6 3   1\n *\n * Trivia:\n * This problem was inspired by this original tweet by Max Howell:\n *\n * Google: 90% of our engineers use the software you wrote (Homebrew), but you\n * can’t invert a binary tree on a whiteboard so f*** off.\n *\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function(root) {\n  if (!root) return root;\n  // 递归\n  //   const left = root.left;\n  //   const right = root.right;\n  //   root.right = invertTree(left);\n  //   root.left = invertTree(right);\n  // 我们用stack来模拟递归\n  // 本质上递归是利用了执行栈，执行栈也是一种栈\n  // 其实这里使用队列也是一样的，因为这里顺序不重要\n\n  const stack = [root];\n  let current = null;\n  while ((current = stack.shift())) {\n    const left = current.left;\n    const right = current.right;\n    current.right = left;\n    current.left = right;\n    if (left) {\n      stack.push(left);\n    }\n    if (right) {\n      stack.push(right);\n    }\n  }\n  return root;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def invertTree(self, root: TreeNode) -> TreeNode:\n        if not root:\n            return None\n        stack = [root]\n        while stack:\n            node = stack.pop(0)\n            node.left, node.right = node.right, node.left\n            if node.left:\n                stack.append(node.left)\n            if node.right:\n                stack.append(node.right)\n        return root\n"
        }
    ]
},
"json":{
    "id": "55",
    "name": "jump-game",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 贪心\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "建模(记录和更新当前位置能够到达的最大的索引即可)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/55.jump-game.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar canJump = function (nums) {\n  let max = 0; // 能够走到的数组下标\n\n  for (let i = 0; i < nums.length; i++) {\n    if (max < i) return false; // 当前这一步都走不到，后面更走不到了\n    max = Math.max(nums[i] + i, max);\n  }\n\n  return max >= nums.length - 1;\n};\n"
        }
    ]
},
"json":{
    "id": "935",
    "name": "knight-dialer",
    "company": [],
    "pre": [
        {
            "text": "\n\n- DFS\n- 记忆化搜索\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/935.knight-dialer.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def knightDialer(self, N: int) -> int:\n        cnt = 0\n        jump = [[4, 6], [6, 8], [7, 9], [4, 8], [\n            0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]]\n        visited = dict()\n\n        def helper(i, n):\n            if (i, n) in visited: return visited[(i, n)]\n            if n == 1:\n                return 1\n            cnt = 0\n            for j in jump[i]:\n                cnt += helper(j, n - 1)\n            visited[(i, n)] = cnt\n            return cnt\n        for i in range(10):\n            cnt += helper(i, N)\n        return cnt % (10**9 + 7)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def knightDialer(self, N: int) -> int:\n        a0 = a1 = a2 = a3 = a4 = a5 = a6 = a7 = a8 = a9 = 1\n        for _ in range(N - 1):\n            a0, a1, a2, a3, a4, a5, a6, a7, a8, a9 = a4 + a6, a6 + a8, a7 + \\\n                a9, a4 + a8, a0 + a3 + a9, 0, a0 + a1 + a7, a2 + a6, a1 + a3, a2 + a4\n        return (a0 + a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9) % (10**9 + 7)\n"
        }
    ]
},
"json":{
    "id": "875",
    "name": "koko-eating-bananas",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 二分查找\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二分查找",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/875.koko-eating-bananas.md",
    "code": [
        {
            "language": "js",
            "text": "\n\nfunction canEatAllBananas(piles, H, mid) {\n     let h = 0;\n     for(let pile of piles) {\n        h += Math.ceil(pile / mid);\n     }\n\n     return h <= H;\n }\n/**\n * @param {number[]} piles\n * @param {number} H\n * @return {number}\n */\nvar minEatingSpeed = function(piles, H) {\n    let lo = 1,\n    hi = Math.max(...piles);\n\n    while(lo <= hi) {\n        let mid = lo + ((hi - lo) >> 1);\n        if (canEatAllBananas(piles, H, mid)) {\n            hi = mid - 1;\n        } else {\n            lo = mid + 1;\n        }\n    }\n\n    return lo; //  不能选择hi\n};\n"
        }
    ]
},
"json":{
    "id": "215",
    "name": "kth-largest-element-in-an-array",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 堆\n- Quick Select\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.直接排序很简单2.堆（Heap）主要是要维护一个K大小的小顶堆，扫描一遍数组，最后堆顶元素即是所求。3.QuickSelect,关键是是取pivot，对数组区间做partition，比较pivot的位置，类似二分，取pivot左边或右边继续递归查找。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/215.kth-largest-element-in-an-array.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass KthLargestElementSort {\n public int findKthlargest2(int[] nums, int k) {\n    Arrays.sort(nums);\n    return nums[nums.length - k];\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass KthLargestElementHeap {\n  public int findKthLargest(int[] nums, int k) {\n      PriorityQueue<Integer> pq = new PriorityQueue<>();\n      for (int num : nums) {\n        pq.offer(num);\n        if (pq.size() > k) {\n          pq.poll();\n        }\n      }\n      return pq.poll();\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass KthLargestElementQuickSelect {\n    static Random random = new Random();\n    public int findKthLargest3(int[] nums, int k) {\n      int len = nums.length;\n      return select(nums, 0, len - 1, len - k);\n    }\n    \n    private int select(int[] nums, int left, int right, int k) {\n      if (left == right) return nums[left];\n      // random select pivotIndex between left and right\n      int pivotIndex = left + random.nextInt(right - left);\n      // do partition, move smaller than pivot number into pivot left\n      int pos = partition(nums, left, right, pivotIndex);\n      if (pos == k) {\n        return nums[pos];\n      } else if (pos > k) {\n        return select(nums, left, pos - 1, k);\n      } else {\n        return select(nums, pos + 1, right, k);\n      }\n    }\n    \n    private int partition(int[] nums, int left, int right, int pivotIndex) {\n      int pivot = nums[pivotIndex];\n      // move pivot to end\n      swap(nums, right, pivotIndex);\n      int pos = left;\n      // move smaller num to pivot left\n      for (int i = left; i <= right; i++) {\n        if (nums[i] < pivot) {\n          swap(nums, pos++, i);\n        }\n      }\n      // move pivot to original place\n      swap(nums, right, pos);\n      return pos;\n    }\n    \n    private void swap(int[] nums, int i, int j) {\n      int tmp = nums[i];\n      nums[i] = nums[j];\n      nums[j] = tmp;\n    }\n}\n"
        }
    ]
},
"json":{
    "id": "230",
    "name": "kth-smallest-element-in-a-bst",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 中序遍历\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "中序遍历",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/230.kth-smallest-element-in-a-bst.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nprivate int count = 1;\nprivate int res;\n\npublic int KthSmallest (TreeNode root, int k) {\n    inorder(root, k);\n    return res;\n}\n\npublic void inorder (TreeNode root, int k) {\n    if (root == null) return;\n\n    inorder(root.left, k);\n\n    if (count++ == k) {\n        res = root.val;\n        return;\n    }\n    \n    inorder(root.right, k);\n}\n"
        },
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=230 lang=javascript\n *\n * [230] Kth Smallest Element in a BST\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function(root, k) {\n    const stack = [root];\n    let cur = root;\n    let i = 0;\n\n    function insertAllLefts(cur) {\n        while(cur && cur.left) {\n            const l = cur.left;\n            stack.push(l);\n            cur = l;\n        }\n    }\n    insertAllLefts(cur);\n\n    while(cur = stack.pop()) {\n        i++;\n        if (i === k) return cur.val;\n        const r = cur.right;\n\n        if (r) {\n            stack.push(r);\n            insertAllLefts(r);\n        }\n    }\n\n    return -1;\n\n    \n};\n"
        },
        {
            "language": "js",
            "text": "\n\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\nfunction nodeCount(node) {\n    if (node === null) return 0;\n    \n    const l = nodeCount(node.left);\n    const r = nodeCount(node.right);\n    \n    return 1 + l + r;\n}\n/**\n * @param {TreeNode} root\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function(root, k) {\n    const c = nodeCount(root.left);\n    if (c === k - 1) return root.val;\n    else if (c < k - 1) return kthSmallest(root.right, k - c - 1);\n    return kthSmallest(root.left, k)\n};\n\n"
        }
    ]
},
"json":{
    "id": "378",
    "name": "kth-smallest-element-in-a-sorted-matrix",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 二分查找\n- 堆\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二分查找",
            "link": null,
            "color": "blue"
        },
        {
            "text": "有序矩阵的套路（文章末尾还有一道有序矩阵的题目）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "堆（优先级队列）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/378.kth-smallest-element-in-a-sorted-matrix.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=378 lang=javascript\n *\n * [378] Kth Smallest Element in a Sorted Matrix\n */\nfunction notGreaterCount(matrix, target) {\n  // 等价于在matrix 中搜索mid，搜索的过程中利用有序的性质记录比mid小的元素个数\n\n  // 我们选择左下角，作为开始元素\n  let curRow = 0;\n  // 多少列\n  const COL_COUNT = matrix[0].length;\n  // 最后一列的索引\n  const LAST_COL = COL_COUNT - 1;\n  let res = 0;\n\n  while (curRow < matrix.length) {\n    // 比较最后一列的数据和target的大小\n    if (matrix[curRow][LAST_COL] < target) {\n      res += COL_COUNT;\n    } else {\n      let i = COL_COUNT - 1;\n      while (i < COL_COUNT && matrix[curRow][i] > target) {\n        i--;\n      }\n      // 注意这里要加1\n      res += i + 1;\n    }\n    curRow++;\n  }\n\n  return res;\n}\n/**\n * @param {number[][]} matrix\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function(matrix, k) {\n  if (matrix.length < 1) return null;\n  let start = matrix[0][0];\n  let end = matrix[matrix.length - 1][matrix[0].length - 1];\n  while (start < end) {\n    const mid = start + ((end - start) >> 1);\n    const count = notGreaterCount(matrix, mid);\n    if (count < k) start = mid + 1;\n    else end = mid;\n  }\n  // 返回start,mid, end 都一样\n  return start;\n};\n"
        }
    ]
},
"json":{
    "id": "84",
    "name": "largest-rectangle-in-histogram",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 单调栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/84.largest-rectangle-in-histogram.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n, ans = len(heights), 0\n        if n != 0:\n            ans = heights[0]\n        for i in range(n):\n            height = heights[i]\n            for j in range(i, n):\n                height = min(height, heights[j])\n                ans = max(ans, (j - i + 1) * height)\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n = len(heights)\n        l, r, ans = [-1] * n, [n] * n, 0\n        for i in range(1, n):\n            j = i - 1\n            while j >= 0 and heights[j] >= heights[i]:\n                j -= 1\n            l[i] = j\n        for i in range(n - 2, -1, -1):\n            j = i + 1\n            while j < n and heights[j] >= heights[i]:\n                j += 1\n            r[i] = j\n        for i in range(n):\n            ans = max(ans, heights[i] * (r[i] - l[i] - 1))\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n = len(heights)\n        l, r, ans = [-1] * n, [n] * n, 0\n\n        for i in range(1, n):\n            j = i - 1\n            while j >= 0 and heights[j] >= heights[i]:\n                j = l[j]\n            l[i] = j\n        for i in range(n - 2, -1, -1):\n            j = i + 1\n            while j < n and heights[j] >= heights[i]:\n                j = r[j]\n            r[i] = j\n        for i in range(n):\n            ans = max(ans, heights[i] * (r[i] - l[i] - 1))\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n, heights, st, ans = len(heights), [0] + heights + [0], [], 0\n        for i in range(n + 2):\n            while st and heights[st[-1]] > heights[i]:\n                ans = max(ans, heights[st.pop(-1)] * (i - st[-1] - 1))\n            st.append(i)\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n, heights, st, ans = len(heights),[0] + heights + [0], [], 0\n        for i in range(n + 2):\n            while st and heights[st[-1]] > heights[i]:\n                a = heights[st[-1]]\n                # 如果没有前面的哨兵，这里可能会越界。\n                st.pop()\n                ans = max(ans, a * (i - 1 - st[-1]))\n            st.append(i)\n        return ans\n"
        }
    ]
},
"json":{
    "id": "460",
    "name": "lfu-cache",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n- HashMap\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析用两个`Map`分别保存`nodeMap{key,node}`和`freqMap{frequent,DoublyLinkedList}`。实现`get`和`put`操作都是`O(1)`的时间复杂度。可以用Java自带的一些数据结构，比如HashLinkedHashSet，这样就不需要自己自建Node，DoublelyLinkedList。可以很大程度的缩减代码量。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/460.lfu-cache.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class LC460LFUCache {\n  class Node {\n    int key, val, freq;\n    Node prev, next;\n\n    Node(int key, int val) {\n      this.key = key;\n      this.val = val;\n      freq = 1;\n    }\n  }\n\n  class DoubleLinkedList {\n    private Node head;\n    private Node tail;\n    private int size;\n\n    DoubleLinkedList() {\n      head = new Node(0, 0);\n      tail = new Node(0, 0);\n      head.next = tail;\n      tail.prev = head;\n    }\n\n    void add(Node node) {\n      head.next.prev = node;\n      node.next = head.next;\n      node.prev = head;\n      head.next = node;\n      size++;\n    }\n\n    void remove(Node node) {\n      node.prev.next = node.next;\n      node.next.prev = node.prev;\n      size--;\n    }\n\n    // always remove last node if last node exists\n    Node removeLast() {\n      if (size > 0) {\n        Node node = tail.prev;\n        remove(node);\n        return node;\n      } else return null;\n    }\n  }\n\n  // cache capacity\n  private int capacity;\n  // min frequent\n  private int minFreq;\n  Map<Integer, Node> nodeMap;\n  Map<Integer, DoubleLinkedList> freqMap;\n  public LC460LFUCache(int capacity) {\n    this.minFreq = 0;\n    this.capacity = capacity;\n    nodeMap = new HashMap<>();\n    freqMap = new HashMap<>();\n  }\n\n  public int get(int key) {\n    Node node = nodeMap.get(key);\n    if (node == null) return -1;\n    update(node);\n    return node.val;\n  }\n\n  public void put(int key, int value) {\n    if (capacity == 0) return;\n    Node node;\n    if (nodeMap.containsKey(key)) {\n      node = nodeMap.get(key);\n      node.val = value;\n      update(node);\n    } else {\n      node = new Node(key, value);\n      nodeMap.put(key, node);\n      if (nodeMap.size() == capacity) {\n        DoubleLinkedList lastList = freqMap.get(minFreq);\n        nodeMap.remove(lastList.removeLast().key);\n      }\n      minFreq = 1;\n      DoubleLinkedList newList = freqMap.getOrDefault(node.freq, new DoubleLinkedList());\n      newList.add(node);\n      freqMap.put(node.freq, newList);\n    }\n  }\n\n  private void update(Node node) {\n    DoubleLinkedList oldList = freqMap.get(node.freq);\n    oldList.remove(node);\n    if (node.freq == minFreq && oldList.size == 0) minFreq++;\n    node.freq++;\n    DoubleLinkedList newList = freqMap.getOrDefault(node.freq, new DoubleLinkedList());\n    newList.add(node);\n    freqMap.put(node.freq, newList);\n  }\n }\n"
        }
    ]
},
"json":{
    "id": "1218",
    "name": "longest-arithmetic-subsequence-of-given-difference",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "将`以每一个元素结尾的最长等差子序列的长度`统统存起来",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1218.longest-arithmetic-subsequence-of-given-difference.md",
    "code": [
        {
            "language": "py",
            "text": "\n  def longestSubsequence(self, arr: List[int], difference: int) -> int:\n        n = len(arr)\n        res = 1\n        for i in range(n):\n            count = 1\n            for j in range(i + 1, n):\n                if arr[i] + difference * count == arr[j]:\n                    count += 1\n\n                if count > res:\n                    res = count\n\n        return res\n"
        },
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1218 lang=python3\n#\n# [1218] 最长定差子序列\n#\n\n# @lc code=start\n\n\nclass Solution:\n\n    # 动态规划\n    def longestSubsequence(self, arr: List[int], difference: int) -> int:\n        n = len(arr)\n        res = 1\n        dp = {}\n        for num in arr:\n            dp[num] = 1\n            if num - difference in dp:\n                dp[num] = dp[num - difference] + 1\n\n        return max(dp.values())\n\n# @lc code=end\n"
        }
    ]
},
"json":{
    "id": "128",
    "name": "longest-consecutive-sequence",
    "company": [],
    "pre": [
        {
            "text": "\n\n- hashmap\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "空间换时间",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/128.longest-consecutive-sequence.md",
    "code": [
        {
            "language": "js",
            "text": "\nif (nums.length === 0) return 0;\nlet count = 1;\nlet maxCount = 1;\n// 这里其实可以不需要排序，这么做只不过是为了方便理解\nnums = [...new Set(nums)].sort((a, b) => a - b);\nfor (let i = 0; i < nums.length - 1; i++) {\n  if (nums[i + 1] - nums[i] === 1) {\n    count++;\n  } else {\n    if (count > maxCount) {\n      maxCount = count;\n    }\n    count = 1;\n  }\n}\nreturn Math.max(count, maxCount);\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar longestConsecutive = function(nums) {\n  set = new Set(nums);\n  let max = 0;\n  let temp = 0;\n  set.forEach(x => {\n    // 说明x是连续序列的开头元素\n    if (!set.has(x - 1)) {\n      temp = x + 1;\n      while (set.has(y)) {\n        temp = temp + 1;\n      }\n      max = Math.max(max, y - x); // y - x 就是从x开始到最后有多少连续的数字\n    }\n  });\n  return max;\n};\n"
        }
    ]
},
"json":{
    "id": "516",
    "name": "longest-palindromic-subsequence",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "”延伸“（extend）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/516.longest-palindromic-subsequence.md",
    "code": [
        {
            "language": "js",
            "text": "\nif (s[i] === s[j]) {\n  dp[i][j] = dp[i + 1][j - 1] + 2;\n} else {\n  dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=516 lang=javascript\n *\n * [516] Longest Palindromic Subsequence\n */\n/**\n * @param {string} s\n * @return {number}\n */\nvar longestPalindromeSubseq = function(s) {\n  // bbbab 返回4\n  // tag : dp\n  const dp = [];\n\n  for (let i = s.length - 1; i >= 0; i--) {\n    dp[i] = Array(s.length).fill(0);\n    for (let j = i; j < s.length; j++) {\n      if (i - j === 0) dp[i][j] = 1;\n      else if (s[i] === s[j]) {\n        dp[i][j] = dp[i + 1][j - 1] + 2;\n      } else {\n        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);\n      }\n    }\n  }\n\n  return dp[0][s.length - 1];\n};\n"
        }
    ]
},
"json":{
    "id": "5",
    "name": "longest-palindromic-substring",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回文\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "”延伸“（extend）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5.longest-palindromic-substring.md",
    "code": [
        {
            "language": "js",
            "text": "\nif (s[i] === s[j] && dp[i + 1][j - 1]) {\n  dp[i][j] = true;\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=5 lang=javascript\n *\n * [5] Longest Palindromic Substring\n */\n/**\n * @param {string} s\n * @return {string}\n */\nvar longestPalindrome = function (s) {\n  // babad\n  // tag : dp\n  if (!s || s.length === 0) return \"\";\n  let res = s[0];\n\n  const dp = [];\n\n  // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]\n  for (let i = s.length - 1; i >= 0; i--) {\n    dp[i] = [];\n    for (let j = i; j < s.length; j++) {\n      if (j - i === 0) dp[i][j] = true;\n      // specail case 1\n      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;\n      // specail case 2\n      else if (s[i] === s[j] && dp[i + 1][j - 1]) {\n        // state transition\n        dp[i][j] = true;\n      }\n\n      if (dp[i][j] && j - i + 1 > res.length) {\n        // update res\n        res = s.slice(i, j + 1);\n      }\n    }\n  }\n\n  return res;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def longestPalindrome(self, s: str) -> str:\n        n = len(s)\n        if n == 0:\n            return \"\"\n        res = s[0]\n        def extend(i, j, s):\n            while(i >= 0 and j < len(s) and s[i] == s[j]):\n                i -= 1\n                j += 1\n            return s[i + 1:j]\n\n        for i in range(n - 1):\n            e1 = extend(i, i, s)\n            e2 = extend(i, i + 1, s)\n            if max(len(e1), len(e2)) > len(res):\n                res = e1 if len(e1) > len(e2) else e2\n        return res\n"
        }
    ]
},
"json":{
    "id": "3",
    "name": "longest-substring-without-repeating-characters",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n- [滑动窗口](https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md)\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "1.用一个mapper记录出现过并且没有被删除的字符2.用一个滑动窗口记录当前index开始的最大的不重复的字符序列3.用res去记录目前位置最大的长度，每次滑动窗口更新就去决定是否需要更新res",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/3.longest-substring-without-repeating-characters.md",
    "code": [
        {
            "language": "py",
            "text": "\nfrom collections import defaultdict\n\n\nclass Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        l = 0\n        ans = 0\n        counter = defaultdict(lambda: 0)\n\n        for r in range(len(s)):\n            while counter.get(s[r], 0) != 0:\n                counter[s[l]] = counter.get(s[l], 0) - 1\n                l += 1\n            counter[s[r]] += 1\n            ans = max(ans, r - l + 1)\n\n        return ans\n"
        }
    ]
},
"json":{
    "id": "32",
    "name": "longest-valid-parentheses",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.第3点特征,需要检查的字符是s[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]和s[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "2",
            "link": null,
            "color": "blue"
        },
        {
            "text": "dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]],根据定义可知:i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1>=dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1],但是i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "2不一定大于dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1],因此,需要检查越界;3.第4点特征最容易遗漏,还有就是不需要检查越界,因为根据定义可知:i>=dp[i],所以dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "dp[i]]的边界情况是dp[0];",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/32.longest-valid-parentheses.md",
    "code": [
        {
            "language": "js",
            "text": "\n// 用栈来解\nvar longestValidParentheses = function(s) {\n  let stack = new Array()\n  let longest = 0\n  stack.push(-1)\n  for(let i = 0; i < s.length; i++) {\n    if (s[i] === '(') {\n      stack.push(i)\n    } else {\n      stack.pop()\n      if (stack.length === 0) {\n        stack.push(i)\n      } else {\n        longest = Math.max(longest, i - stack[stack.length - 1])\n      }\n    }\n  }\n  return longest\n};\n"
        },
        {
            "language": "py",
            "text": "\ns = '(())())'\n"
        }
    ]
},
"json":{
    "id": "3",
    "name": "longestSubstringWithoutRepeatingCharacters",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n- [滑动窗口](https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md)\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "1.用一个mapper记录出现过并且没有被删除的字符2.用一个滑动窗口记录当前index开始的最大的不重复的字符序列3.用res去记录目前位置最大的长度，每次滑动窗口更新就去决定是否需要更新res",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/3.longestSubstringWithoutRepeatingCharacters.md",
    "code": [
        {
            "language": "py",
            "text": "\nfrom collections import defaultdict\n\n\nclass Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        l = 0\n        ans = 0\n        counter = defaultdict(lambda: 0)\n\n        for r in range(len(s)):\n            while counter.get(s[r], 0) != 0:\n                counter[s[l]] = counter.get(s[l], 0) - 1\n                l += 1\n            counter[s[r]] += 1\n            ans = max(ans, r - l + 1)\n\n        return ans\n"
        }
    ]
},
"json":{
    "id": "236",
    "name": "lowest-common-ancestor-of-a-binary-tree",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 递归\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "用递归的思路去思考树",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/236.lowest-common-ancestor-of-a-binary-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\n  // 如果我们找到了p，直接进行返回，那如果下面就是q呢？ 其实这没有影响，但是还是要多考虑一下\n  if (!root || root === p || root === q) return root;\n  const left = lowestCommonAncestor(root.left, p, q); // 去左边找，我们期望返回找到的节点\n  const right = lowestCommonAncestor(root.right, p, q);// 去右边找，我们期望返回找到的节点\n  if (!left) return right; // 左子树找不到，返回右子树\n  if (!right) return left; // 右子树找不到，返回左子树\n  return root; // 左右子树分别有一个，则返回root\n\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */\nvar lowestCommonAncestor = function(root, p, q) {\n  if (!root || root === p || root === q) return root;\n  const left = lowestCommonAncestor(root.left, p, q);\n  const right = lowestCommonAncestor(root.right, p, q);\n  if (!left) return right; // 左子树找不到，返回右子树\n  if (!right) return left; // 右子树找不到，返回左子树\n  return root; // 左右子树分别有一个，则返回root\n};\n"
        }
    ]
},
"json":{
    "id": "146",
    "name": "lru-cache",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 队列\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "队列简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "队列的操作是这道题的灵魂，很容易少考虑情况",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/146.lru-cache.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number} capacity\n */\nvar LRUCache = function(capacity) {\n    this.cache = {};\n    this.capacity = capacity;\n    this.size = 0;\n    this.queue = [];\n};\n\n/** \n * @param {number} key\n * @return {number}\n */\nLRUCache.prototype.get = function(key) {\n    const hit = this.cache[key];\n\n    if (hit !== undefined) {\n        this.queue = this.queue.filter(q => q !== key);\n        this.queue.push(key);\n        return hit;\n    }\n    return -1;\n};\n\n/** \n * @param {number} key \n * @param {number} value\n * @return {void}\n */\nLRUCache.prototype.put = function(key, value) {\n    const hit = this.cache[key];\n\n    // update cache\n    this.cache[key] = value;\n\n    if (!hit) {\n        // invalid cache and resize size;\n        if (this.size === this.capacity) {\n            // invalid cache\n            const key = this.queue.shift();\n            this.cache[key] = undefined;\n        } else {\n            this.size = this.size + 1;\n        }\n        this.queue.push(key);\n    } else {\n        this.queue = this.queue.filter(q => q !== key);\n        this.queue.push(key);\n    }\n};\n\n/** \n * Your LRUCache object will be instantiated and called as such:\n * var obj = new LRUCache(capacity)\n * var param_1 = obj.get(key)\n * obj.put(key,value)\n */\n\n"
        }
    ]
},
"json":{
    "id": "229",
    "name": "majority-element-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 摩尔投票法\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "摩尔投票法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "两个counter",
            "link": null,
            "color": "blue"
        },
        {
            "text": "最后得到的只是出现次数最多的两个数字，有可能不满足出现次数大于1/3",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/229.majority-element-ii.md",
    "code": [
        {
            "language": "java",
            "text": "\n/*\n * @lc app=leetcode id=229 lang=java\n *\n * [229] Majority Element II\n */\nclass Solution {\n    public List<Integer> majorityElement(int[] nums) {\n        List<Integer> res = new ArrayList<Integer>();\n        if (nums == null || nums.length == 0)\n            return res;\n        int n1 = nums[0], n2 = nums[0], cnt1 = 0, cnt2 = 0, len = nums.length;\n        for (int i = 0; i < len; i++) {\n            if (nums[i] == n1)\n                cnt1++;\n            else if (nums[i] == n2)\n                cnt2++;\n            else if (cnt1 == 0) {\n                n1 = nums[i];\n                cnt1 = 1;\n            } else if (cnt2 == 0) {\n                n2 = nums[i];\n                cnt2 = 1;\n            } else {\n                cnt1--;\n                cnt2--;\n            }\n        }\n        cnt1 = 0;\n        cnt2 = 0;\n        for (int i = 0; i < len; i++) {\n            if (nums[i] == n1)\n                cnt1++;\n            else if (nums[i] == n2)\n                cnt2++;\n        }\n        if (cnt1 > len / 3)\n            res.add(n1);\n        if (cnt2 > len / 3 && n1 != n2)\n            res.add(n2);\n        return res;\n    }\n}\n\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=229 lang=javascript\n *\n * [229] Majority Element II\n */\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar majorityElement = function(nums) {\n  const res = [];\n  const len = nums.length;\n  let n1 = null,\n    n2 = null,\n    cnt1 = 0,\n    cnt2 = 0;\n\n  for (let i = 0; i < len; i++) {\n    if (n1 === nums[i]) {\n      cnt1++;\n    } else if (n2 === nums[i]) {\n      cnt2++;\n    } else if (cnt1 === 0) {\n      n1 = nums[i];\n      cnt1++;\n    } else if (cnt2 === 0) {\n      n2 = nums[i];\n      cnt2++;\n    } else {\n      cnt1--;\n      cnt2--;\n    }\n  }\n\n  cnt1 = 0;\n  cnt2 = 0;\n\n  for (let i = 0; i < len; i++) {\n    if (n1 === nums[i]) {\n      cnt1++;\n    } else if (n2 === nums[i]) {\n      cnt2++;\n    }\n  }\n\n  if (cnt1 > (len / 3) >>> 0) {\n    res.push(n1);\n  }\n  if (cnt2 > (len / 3) >>> 0) {\n    res.push(n2);\n  }\n\n  return res;\n};\n\n"
        }
    ]
},
"json":{
    "id": "169",
    "name": "majority-element",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 投票算法\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "投票算法",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/169.majority-element.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar majorityElement = function(nums) {\n    let count = 1;\n    let majority = nums[0];\n    for(let i = 1; i < nums.length; i++) {\n        if (count === 0) {\n            majority = nums[i];\n        }\n        if (nums[i] === majority) {\n            count ++;\n        } else {\n            count --;\n        }\n    }\n    return majority;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        count, majority = 1, nums[0]\n        for num in nums[1:]:\n            if count == 0:\n                majority = num\n            if num == majority:\n                count += 1\n            else:\n                count -= 1\n        return majority\n"
        }
    ]
},
"json":{
    "id": "85",
    "name": "maximal-rectangle",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 单调栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/85.maximal-rectangle.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n, heights, st, ans = len(heights), [0] + heights + [0], [], 0\n        for i in range(n + 2):\n            while st and heights[st[-1]] > heights[i]:\n                ans = max(ans, heights[st.pop(-1)] * (i - st[-1] - 1))\n            st.append(i)\n\n        return ans\n    def maximalRectangle(self, matrix: List[List[str]]) -> int:\n        m = len(matrix)\n        if m == 0: return 0\n        n = len(matrix[0])\n        heights = [0] * n\n        ans = 0\n        for i in range(m):\n            for j in range(n):\n                if matrix[i][j] == \"0\":\n                    heights[j] = 0\n                else:\n                    heights[j] += 1\n            ans = max(ans, self.largestRectangleArea(heights))\n        return ans\n\n"
        }
    ]
},
"json":{
    "id": "221",
    "name": "maximal-square",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n- 递归\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "DP",
            "link": null,
            "color": "blue"
        },
        {
            "text": "递归公式可以利用dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1][j]和dp[i][j",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]的计算结果，而不用重新计算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "空间复杂度可以降低到O(n),n为列数",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/221.maximal-square.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n/*\n * @lc app=leetcode id=221 lang=javascript\n *\n * [221] Maximal Square\n */\n/**\n * @param {character[][]} matrix\n * @return {number}\n */\nvar maximalSquare = function(matrix) {\n  if (matrix.length === 0) return 0;\n  const dp = [];\n  const rows = matrix.length;\n  const cols = matrix[0].length;\n  let max = Number.MIN_VALUE;\n\n  for (let i = 0; i < rows + 1; i++) {\n    if (i === 0) {\n      dp[i] = Array(cols + 1).fill(0);\n    } else {\n      dp[i] = [0];\n    }\n  }\n\n  for (let i = 1; i < rows + 1; i++) {\n    for (let j = 1; j < cols + 1; j++) {\n      if (matrix[i - 1][j - 1] === \"1\") {\n        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;\n        max = Math.max(max, dp[i][j]);\n      } else {\n        dp[i][j] = 0;\n      }\n    }\n  }\n\n  return max * max;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maximalSquare(self, matrix: List[List[str]]) -> int:\n        res = 0\n        m = len(matrix)\n        if m == 0:\n            return 0\n        n = len(matrix[0])\n        dp = [[0] * (n + 1) for _ in range(m + 1)]\n\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1 if matrix[i - 1][j - 1] == \"1\" else 0\n                res = max(res, dp[i][j])\n        return res ** 2\n"
        }
    ]
},
"json":{
    "id": "104",
    "name": "maximum-depth-of-binary-tree",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 递归\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "队列",
            "link": null,
            "color": "blue"
        },
        {
            "text": "队列中用Null(一个特殊元素)来划分每层，或者在对每层进行迭代之前保存当前队列元素的个数（即当前层所含元素个数）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "树的基本操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历",
            "link": null,
            "color": "blue"
        },
        {
            "text": "层次遍历（BFS）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/104.maximum-depth-of-binary-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar maxDepth = function(root) {\n  if (!root) return 0;\n  if (!root.left && !root.right) return 1;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n};\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=104 lang=javascript\n *\n * [104] Maximum Depth of Binary Tree\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxDepth = function(root) {\n  if (!root) return 0;\n  if (!root.left && !root.right) return 1;\n\n  // 层次遍历 BFS\n  let cur = root;\n  const queue = [root, null];\n  let depth = 1;\n\n  while ((cur = queue.shift()) !== undefined) {\n    if (cur === null) {\n      // 注意⚠️： 不处理会无限循环，进而堆栈溢出\n      if (queue.length === 0) return depth;\n      depth++;\n      queue.push(null);\n      continue;\n    }\n    const l = cur.left;\n    const r = cur.right;\n\n    if (l) queue.push(l);\n    if (r) queue.push(r);\n  }\n\n  return depth;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxDepth(self, root: TreeNode) -> int:\n        if not root: return 0\n        q, depth = [root, None], 1\n        while q:\n            node = q.pop(0)\n            if node:\n                if node.left: q.append(node.left)\n                if node.right: q.append(node.right)\n            elif q:\n                q.append(None)\n                depth += 1\n        return depth\n"
        }
    ]
},
"json":{
    "id": "895",
    "name": "maximum-frequency-stack",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 栈\n- 哈希表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "栈的基本性质",
            "link": null,
            "color": "blue"
        },
        {
            "text": "hashtable的基本性质",
            "link": null,
            "color": "blue"
        },
        {
            "text": "push和pop的时候同时更新fraq，max_fraq和fraq_stack。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/895.maximum-frequency-stack.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass FreqStack:\n\n    def __init__(self):\n        self.fraq = collections.defaultdict(lambda: 0)\n        self.fraq_stack = collections.defaultdict(list)\n        self.max_fraq = 0\n        \n    def push(self, x: int) -> None:\n        self.fraq[x] += 1\n        if self.fraq[x] > self.max_fraq:\n            self.max_fraq = self.fraq[x]\n        self.fraq_stack[self.fraq[x]].append(x)    \n        \n    def pop(self) -> int:\n        ans = self.fraq_stack[self.max_fraq].pop()\n        self.fraq[ans] -= 1\n        if not self.fraq_stack[self.max_fraq]:\n            self.max_fraq -= 1\n        return ans\n\n# Your FreqStack object will be instantiated and called as such:\n# obj = FreqStack()\n# obj.push(x)\n# param_2 = obj.pop()\n"
        }
    ]
},
"json":{
    "id": "1297",
    "name": "maximum-number-of-occurrences-of-a-substring",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 字符串\n- 滑动窗口\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "滑动窗口",
            "link": null,
            "color": "blue"
        },
        {
            "text": "识别题目干扰信息",
            "link": null,
            "color": "blue"
        },
        {
            "text": "看题目限制条件，对于本题有用的信息是`1<=maxLetters<=26`",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1297.maximum-number-of-occurrences-of-a-substring.md",
    "code": [
        {
            "language": "java",
            "text": "\n public int maxFreq(String s, int maxLetters, int minSize, int maxSize) {\n    Map<String, Integer> counter = new HashMap<>();\n    int res = 0;\n    for (int i = 0; i < s.length() - minSize + 1; i++) {\n        String substr = s.substring(i, i + minSize);\n        if (checkNum(substr, maxLetters)) {\n            int newVal = counter.getOrDefault(substr, 0) + 1;\n            counter.put(substr, newVal);\n            res = Math.max(res, newVal);\n        }\n    }\n    return res;\n}\npublic boolean checkNum(String substr, int maxLetters) {\n    Set<Character> set = new HashSet<>();\n    for (int i = 0; i < substr.length(); i++)\n        set.add(substr.charAt(i));\n    return set.size() <= maxLetters;\n}\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:\n        n = len(s)\n        letters = set()\n        cnts = dict()\n        res = 0\n        for i in range(n - minSize + 1):\n            length = minSize\n            while i + length <= n and length <= maxSize:\n                t = s[i:i + length]\n                for c in t:\n                    if len(letters) > maxLetters:\n                        break\n                    letters.add(c)\n                if len(letters) <= maxLetters:\n                    cnts[t] = cnts.get(t, 0) + 1\n                    res = max(res, cnts[t])\n                letters.clear()\n                length += 1\n        return res\n"
        },
        {
            "language": "py",
            "text": "\n def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:\n        counter, res = {}, 0\n        for i in range(0, len(s) - minSize + 1):\n            sub = s[i : i + minSize]\n            if len(set(sub)) <= maxLetters:\n                counter[sub] = counter.get(sub, 0) + 1\n                res = max(res, counter[sub])\n        return res;\n\n# @lc code=end\n"
        }
    ]
},
"json":{
    "id": "1131",
    "name": "maximum-of-absolute-value-expression",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数学分析",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1131.maximum-of-absolute-value-expression.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxAbsValExpr(self, arr1: List[int], arr2: List[int]) -> int:\n        A = []\n        B = []\n        C = []\n        D = []\n        for i in range(len(arr1)):\n            a, b, c, d = arr1[i] + arr2[i] + i, arr1[i] - arr2[i] + \\\n                i, arr2[i] - arr1[i] + i, -1 * arr2[i] - arr1[i] + i\n            A.append(a)\n            B.append(b)\n            C.append(c)\n            D.append(d)\n        return max(max(A) - min(A), max(B) - min(B), max(C) - min(C), max(D) - min(D))\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxAbsValExpr(self, arr1: List[int], arr2: List[int]) -> int:\n        # 曼哈顿距离模板代码\n        sign = [1, -1]\n        n = len(arr1)\n        dists = []\n        # 三维模板\n        for a in sign:\n            for b in sign:\n                for c in sign:\n                    maxDist = float('-inf')\n                    minDist = float('inf')\n                    # 分别计算所有点的曼哈顿距离\n                    for i in range(n):\n                        dist = arr1[i] * a + arr2[i] * b + i * c\n                        maxDist = max(maxDist, dist)\n                        minDist = min(minDist, dist)\n                    # 将所有的点的曼哈顿距离放到dists中\n                    dists.append(maxDist - minDist)\n        return max(dists)\n"
        }
    ]
},
"json":{
    "id": "152",
    "name": "maximum-product-subarray",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 滑动窗口\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "同时记录乘积最大值和乘积最小值",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/152.maximum-product-subarray.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar maxProduct = function(nums) {\n  let max = nums[0];\n  let temp = null;\n  for (let i = 0; i < nums.length; i++) {\n    temp = nums[i];\n    for (let j = i + 1; j < nums.length; j++) {\n      temp *= nums[j];\n      max = Math.max(temp, max);\n    }\n  }\n\n  return max;\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar maxProduct = function(nums) {\n  let max = nums[0];\n  let min = nums[0];\n  let res = nums[0];\n\n  for (let i = 1; i < nums.length; i++) {\n    let tmp = min;\n    min = Math.min(nums[i], Math.min(max * nums[i], min * nums[i])); // 取最小\n    max = Math.max(nums[i], Math.max(max * nums[i], tmp * nums[i])); /// 取最大\n    res = Math.max(res, max);\n  }\n  return res;\n};\n"
        },
        {
            "language": "py",
            "text": "\n\n\nclass Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        n = len(nums)\n        max__dp = [1] * (n + 1)\n        min_dp = [1] * (n + 1)\n        ans = float('-inf')\n\n        for i in range(1, n + 1):\n            max__dp[i] = max(max__dp[i - 1] * nums[i - 1],\n                             min_dp[i - 1] * nums[i - 1], nums[i - 1])\n            min_dp[i] = min(max__dp[i - 1] * nums[i - 1],\n                            min_dp[i - 1] * nums[i - 1], nums[i - 1])\n            ans = max(ans, max__dp[i])\n        return ans\n  "
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        n = len(nums)\n        a = b = 1\n        ans = float('-inf')\n\n        for i in range(1, n + 1):\n            temp = a\n            a = max(a * nums[i - 1],\n                    b * nums[i - 1], nums[i - 1])\n            b = min(temp * nums[i - 1],\n                    b * nums[i - 1], nums[i - 1])\n            ans = max(ans, a)\n        return ans\n\n"
        }
    ]
},
"json":{
    "id": "1186",
    "name": "maximum-subarray-sum-with-one-deletion",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "空间换时间",
            "link": null,
            "color": "blue"
        },
        {
            "text": "头尾双数组",
            "link": null,
            "color": "blue"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1186.maximum-subarray-sum-with-one-deletion.md",
    "code": [
        {
            "language": "py",
            "text": "\n  class Solution:\n    def maximumSum(self, arr: List[int]) -> int:\n        res = arr[0]\n        def maxSubSum(arr, skip):\n            res = maxSub = float(\"-inf\")\n           \n            for i in range(len(arr)):\n                if i == skip:\n                    continue\n                maxSub = max(arr[i], maxSub + arr[i])\n                res = max(res, maxSub)\n            return res\n\t\t# 这里循环到了len(arr)项，表示的是一个都不删除的情况\n        for i in range(len(arr) + 1):\n            res = max(res, maxSubSum(arr, i))\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maximumSum(self, arr: List[int]) -> int:\n        n = len(arr)\n        l = [arr[0]] * n\n        r = [arr[n - 1]] * n\n        if n == 1:\n            return arr[0]\n        res = arr[0]\n        for i in range(1, n):\n            l[i] = max(l[i - 1] + arr[i], arr[i])\n            res = max(res, l[i])\n        for i in range(n - 2, -1, -1):\n            r[i] = max(r[i + 1] + arr[i], arr[i])\n            res = max(res, r[i])\n        for i in range(1, n - 1):\n            res = max(res, l[i - 1] + r[i + 1])\n      \n        return res\n\n"
        },
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1186 lang=python3\n#\n# [1186] 删除一次得到子数组最大和\n#\n\n# @lc code=start\n\n\nclass Solution:\n    def maximumSum(self, arr: List[int]) -> int:\n        # DP\n        max0 = arr[0]\n        max1 = arr[0]\n        res = arr[0]\n        n = len(arr)\n        if n == 1:\n            return max0\n\n        for i in range(1, n):\n            # 先更新max1，再更新max0，因为max1用到了上一个max0\n            max1 = max(max1 + arr[i], max0)\n            max0 = max(max0 + arr[i], arr[i])\n            res = max(res, max0, max1)\n        return res\n\n\n# @lc code=end\n\n\n"
        }
    ]
},
"json":{
    "id": "1031",
    "name": "maximum-sum-of-two-non-overlapping-subarrays",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.注意图中描述的都是A[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1],而不是A[i],因为basecase为空数组,而不是A[0];2.求解图中ASUM数组的时候,注意定义的是ASUM[i]=sum(A[0:i]),因此当i等于0时,A[0:0]为空数组,即:ASUM[0]为0,而ASUM[1]才等于A[0];3.求解图中MAXL数组时,注意i<L时,没有意义,因为长度不够,所以从i=L时才开始求解;4.求解图中MAXM数组时,也一样,要从i=M时才开始求解;5.求解图中SUMM数组时,因为我们需要一个L子数组和一个M子数组,因此长度要大于等于L+M才有意义,所以要从i=L+M时开始求解.",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1031.maximum-sum-of-two-non-overlapping-subarrays.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumTwoNoOverlap(self, a: List[int], l: int, m: int) -> int:\n        \"\"\"\n\n        define asum[i] as the sum of subarray, a[0:i]\n        define maxl[i] as the maximum sum of l-length subarray in a[0:i]\n        define maxm[i] as the maximum sum of m-length subarray in a[0:i]\n        define msum[i] as the maximum sum of non-overlap l-length subarray and m-length subarray\n\n        case 1: a[i] is both not in l-length subarray and m-length subarray, then msum[i] = msum[i - 1]\n        case 2: a[i] is in l-length subarray, then msum[i] = asum[i] - asum[i-l] + maxm[i-l]\n        case 3: a[i] is in m-length subarray, then msum[i] = asum[i] - asum[i-m] + maxl[i-m]\n\n        so, msum[i] = max(msum[i - 1], asum[i] - asum[i-l] + maxl[i-l], asum[i] - asum[i-m] + maxm[i-m])\n        \"\"\"\n\n        alen, tlen = len(a), l + m\n        asum = [0] * (alen + 1)\n        maxl = [0] * (alen + 1)\n        maxm = [0] * (alen + 1)\n        msum = [0] * (alen + 1)\n\n        for i in range(tlen):\n            if i == 1:\n                asum[i] = a[i - 1]\n            elif i > 1:\n                asum[i] = asum[i - 1] + a[i - 1]\n            if i >= l:\n                maxl[i] = max(maxl[i - 1], asum[i] - asum[i - l])\n            if i >= m:\n                maxm[i] = max(maxm[i - 1], asum[i] - asum[i - m])\n\n        for i in range(tlen, alen + 1):\n            asum[i] = asum[i - 1] + a[i - 1]\n            suml = asum[i] - asum[i - l]\n            summ = asum[i] - asum[i - m]\n            maxl[i] = max(maxl[i - 1], suml)\n            maxm[i] = max(maxm[i - 1], summ)\n            msum[i] = max(msum[i - 1], suml + maxm[i - l], summ + maxl[i - m])\n\n        return msum[-1]\n"
        }
    ]
},
"json":{
    "id": "53",
    "name": "maximum-sum-subarray-cn",
    "company": [],
    "pre": [],
    "keyPoints": [
        {
            "text": "分析1.暴力解，列举所有组合子序列首尾位置的组合，求解最大的子序列和,优化可以预先处理，得到前缀和2.分治法，每次从中间位置把数组分为左右中三部分，分别求出左右中（这里中是包括中间元素的子序列）最大和。对左右分别深度递归，三者中最大值即为当前最大子序列和。3.动态规划，找到状态转移方程，求到当前位置最大和。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/53.maximum-sum-subarray-cn.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass MaximumSubarrayPrefixSum {\n  public int maxSubArray(int[] nums) {\n      int len = nums.length;\n      int maxSum = Integer.MIN_VALUE;\n      int sum = 0;\n      for (int i = 0; i < len; i++) {\n        sum = 0;\n        for (int j = i; j < len; j++) {\n          sum += nums[j];\n          maxSum = Math.max(maxSum, sum);\n        }\n      }\n      return maxSum;\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MaxSumSubarray {\n  public int maxSubArray3(int[] nums) {\n      int maxSum = nums[0];\n      int sum = 0;\n      int minSum = 0;\n      for (int num : nums) {\n        // prefix Sum\n        sum += num;\n        // update maxSum\n        maxSum = Math.max(maxSum, sum - minSum);\n        // update minSum\n        minSum = Math.min(minSum, sum);\n      }\n      return maxSum;\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MaximumSubarrayDivideConquer {\n  public int maxSubArrayDividConquer(int[] nums) {\n      if (nums == null || nums.length == 0) return 0;\n      return helper(nums, 0, nums.length - 1);\n    }\n    private int helper(int[] nums, int l, int r) {\n      if (l > r) return Integer.MIN_VALUE;\n      int mid = (l + r) >>> 1;\n      int left = helper(nums, l, mid - 1);\n      int right = helper(nums, mid + 1, r);\n      int leftMaxSum = 0;\n      int sum = 0;\n      // left surfix maxSum start from index mid - 1 to l\n      for (int i = mid - 1; i >= l; i--) {\n        sum += nums[i];\n        leftMaxSum = Math.max(leftMaxSum, sum);\n      }\n      int rightMaxSum = 0;\n      sum = 0;\n      // right prefix maxSum start from index mid + 1 to r\n      for (int i = mid + 1; i <= r; i++) {\n        sum += nums[i];\n        rightMaxSum = Math.max(sum, rightMaxSum);\n      }\n      // max(left, right, crossSum)\n      return Math.max(leftMaxSum + rightMaxSum + nums[mid], Math.max(left, right));\n    }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MaximumSubarrayDP {\n   public int maxSubArray(int[] nums) {\n      int currMaxSum = nums[0];\n      int maxSum = nums[0];\n      for (int i = 1; i < nums.length; i++) {\n        currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);\n        maxSum = Math.max(maxSum, currMaxSum);\n      }\n      return maxSum;\n   }\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction LSS(list) {\n  const len = list.length;\n  let max = -Number.MAX_VALUE;\n  let sum = 0;\n  for (let i = 0; i < len; i++) {\n    sum = 0;\n    for (let j = i; j < len; j++) {\n      sum += list[j];\n      if (sum > max) {\n        max = sum;\n      }\n    }\n  }\n\n  return max;\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction LSS(list) {\n  const len = list.length;\n  let max = list[0];\n  let min = 0;\n  let sum = 0;\n  for (let i = 0; i < len; i++) {\n    sum += list[i];\n    if (sum - min > max) max = sum - min;\n    if (sum < min) {\n      min = sum;\n    }\n  }\n\n  return max;\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction helper(list, m, n) {\n  if (m === n) return list[m];\n  let sum = 0;\n  let lmax = -Number.MAX_VALUE;\n  let rmax = -Number.MAX_VALUE;\n  const mid = ((n - m) >> 1) + m;\n  const l = helper(list, m, mid);\n  const r = helper(list, mid + 1, n);\n  for (let i = mid; i >= m; i--) {\n    sum += list[i];\n    if (sum > lmax) lmax = sum;\n  }\n\n  sum = 0;\n\n  for (let i = mid + 1; i <= n; i++) {\n    sum += list[i];\n    if (sum > rmax) rmax = sum;\n  }\n\n  return Math.max(l, r, lmax + rmax);\n}\n\nfunction LSS(list) {\n  return helper(list, 0, list.length - 1);\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction LSS(list) {\n  const len = list.length;\n  let max = list[0];\n  for (let i = 1; i < len; i++) {\n    list[i] = Math.max(0, list[i - 1]) + list[i];\n    if (list[i] > max) max = list[i];\n  }\n\n  return max;\n}\n"
        },
        {
            "language": "py",
            "text": "\nimport sys\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        maxSum = -sys.maxsize\n        sum = 0\n        for i in range(n):\n            sum = 0\n            for j in range(i, n):\n                sum += nums[j]\n                maxSum = max(maxSum, sum)\n        \n        return maxSum\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        maxSum = nums[0]\n        minSum = sum = 0\n        for i in range(n):\n            sum += nums[i]\n            maxSum = max(maxSum, sum - minSum)\n            minSum = min(minSum, sum)\n            \n        return maxSum\n"
        },
        {
            "language": "py",
            "text": "\nimport sys\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        return self.helper(nums, 0, len(nums) - 1)\n    def helper(self, nums, l, r):\n        if l > r:\n            return -sys.maxsize\n        mid = (l + r) // 2\n        left = self.helper(nums, l, mid - 1)\n        right = self.helper(nums, mid + 1, r)\n        left_suffix_max_sum = right_prefix_max_sum = 0\n        sum = 0\n        for i in reversed(range(l, mid)):\n            sum += nums[i]\n            left_suffix_max_sum = max(left_suffix_max_sum, sum)\n        sum = 0\n        for i in range(mid + 1, r + 1):\n            sum += nums[i]\n            right_prefix_max_sum = max(right_prefix_max_sum, sum)\n        cross_max_sum = left_suffix_max_sum + right_prefix_max_sum + nums[mid]\n        return max(cross_max_sum, left, right)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        max_sum_ending_curr_index = max_sum = nums[0]\n        for i in range(1, n):\n            max_sum_ending_curr_index = max(max_sum_ending_curr_index + nums[i], nums[i])\n            max_sum = max(max_sum_ending_curr_index, max_sum)\n            \n        return max_sum\n"
        }
    ]
},
"json":{
    "id": "53",
    "name": "maximum-sum-subarray-en",
    "company": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/53.maximum-sum-subarray-en.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass MaximumSubarrayPrefixSum {\n  public int maxSubArray(int[] nums) {\n      int len = nums.length;\n      int maxSum = Integer.MIN_VALUE;\n      int sum = 0;\n      for (int i = 0; i < len; i++) {\n        sum = 0;\n        for (int j = i; j < len; j++) {\n          sum += nums[j];\n          maxSum = Math.max(maxSum, sum);\n        }\n      }\n      return maxSum;\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MaxSumSubarray {\n  public int maxSubArray3(int[] nums) {\n      int maxSum = nums[0];\n      int sum = 0;\n      int minSum = 0;\n      for (int num : nums) {\n        // prefix Sum\n        sum += num;\n        // update maxSum\n        maxSum = Math.max(maxSum, sum - minSum);\n        // update minSum\n        minSum = Math.min(minSum, sum);\n      }\n      return maxSum;\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MaximumSubarrayDivideConquer {\n  public int maxSubArrayDividConquer(int[] nums) {\n      if (nums == null || nums.length == 0) return 0;\n      return helper(nums, 0, nums.length - 1);\n    }\n    private int helper(int[] nums, int l, int r) {\n      if (l > r) return Integer.MIN_VALUE;\n      int mid = (l + r) >>> 1;\n      int left = helper(nums, l, mid - 1);\n      int right = helper(nums, mid + 1, r);\n      int leftMaxSum = 0;\n      int sum = 0;\n      // left surfix maxSum start from index mid - 1 to l\n      for (int i = mid - 1; i >= l; i--) {\n        sum += nums[i];\n        leftMaxSum = Math.max(leftMaxSum, sum);\n      }\n      int rightMaxSum = 0;\n      sum = 0;\n      // right prefix maxSum start from index mid + 1 to r\n      for (int i = mid + 1; i <= r; i++) {\n        sum += nums[i];\n        rightMaxSum = Math.max(sum, rightMaxSum);\n      }\n      // max(left, right, crossSum)\n      return Math.max(leftMaxSum + rightMaxSum + nums[mid], Math.max(left, right));\n    }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MaximumSubarrayDP {\n   public int maxSubArray(int[] nums) {\n      int currMaxSum = nums[0];\n      int maxSum = nums[0];\n      for (int i = 1; i < nums.length; i++) {\n        currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);\n        maxSum = Math.max(maxSum, currMaxSum);\n      }\n      return maxSum;\n   }\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction LSS(list) {\n  const len = list.length;\n  let max = -Number.MAX_VALUE;\n  let sum = 0;\n  for (let i = 0; i < len; i++) {\n    sum = 0;\n    for (let j = i; j < len; j++) {\n      sum += list[j];\n      if (sum > max) {\n        max = sum;\n      }\n    }\n  }\n\n  return max;\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction LSS(list) {\n  const len = list.length;\n  let max = list[0];\n  let min = 0;\n  let sum = 0;\n  for (let i = 0; i < len; i++) {\n    sum += list[i];\n    if (sum - min > max) max = sum - min;\n    if (sum < min) {\n      min = sum;\n    }\n  }\n\n  return max;\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction helper(list, m, n) {\n  if (m === n) return list[m];\n  let sum = 0;\n  let lmax = -Number.MAX_VALUE;\n  let rmax = -Number.MAX_VALUE;\n  const mid = ((n - m) >> 1) + m;\n  const l = helper(list, m, mid);\n  const r = helper(list, mid + 1, n);\n  for (let i = mid; i >= m; i--) {\n    sum += list[i];\n    if (sum > lmax) lmax = sum;\n  }\n\n  sum = 0;\n\n  for (let i = mid + 1; i <= n; i++) {\n    sum += list[i];\n    if (sum > rmax) rmax = sum;\n  }\n\n  return Math.max(l, r, lmax + rmax);\n}\n\nfunction LSS(list) {\n  return helper(list, 0, list.length - 1);\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction LSS(list) {\n  const len = list.length;\n  let max = list[0];\n  for (let i = 1; i < len; i++) {\n    list[i] = Math.max(0, list[i - 1]) + list[i];\n    if (list[i] > max) max = list[i];\n  }\n\n  return max;\n}\n"
        },
        {
            "language": "py",
            "text": "\nimport sys\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        maxSum = -sys.maxsize\n        sum = 0\n        for i in range(n):\n            sum = 0\n            for j in range(i, n):\n                sum += nums[j]\n                maxSum = max(maxSum, sum)\n        \n        return maxSum\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        maxSum = nums[0]\n        minSum = sum = 0\n        for i in range(n):\n            sum += nums[i]\n            maxSum = max(maxSum, sum - minSum)\n            minSum = min(minSum, sum)\n            \n        return maxSum\n"
        },
        {
            "language": "py",
            "text": "\nimport sys\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        return self.helper(nums, 0, len(nums) - 1)\n    def helper(self, nums, l, r):\n        if l > r:\n            return -sys.maxsize\n        mid = (l + r) // 2\n        left = self.helper(nums, l, mid - 1)\n        right = self.helper(nums, mid + 1, r)\n        left_suffix_max_sum = right_prefix_max_sum = 0\n        sum = 0\n        for i in reversed(range(l, mid)):\n            sum += nums[i]\n            left_suffix_max_sum = max(left_suffix_max_sum, sum)\n        sum = 0\n        for i in range(mid + 1, r + 1):\n            sum += nums[i]\n            right_prefix_max_sum = max(right_prefix_max_sum, sum)\n        cross_max_sum = left_suffix_max_sum + right_prefix_max_sum + nums[mid]\n        return max(cross_max_sum, left, right)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        max_sum_ending_curr_index = max_sum = nums[0]\n        for i in range(1, n):\n            max_sum_ending_curr_index = max(max_sum_ending_curr_index + nums[i], nums[i])\n            max_sum = max(max_sum_ending_curr_index, max_sum)\n            \n        return max_sum\n"
        }
    ]
},
"json":{
    "id": "4",
    "name": "median-of-two-sorted-array",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 中位数\n- 分治法\n- 二分查找\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.暴力求解，在线性时间内merge两个排好序的数组成一个数组。2.二分查找，关键点在于",
            "link": null,
            "color": "blue"
        },
        {
            "text": "要partition两个排好序的数组成左右两等份，partition需要满足`len(Aleft)+len(Bleft)=(m+n+1)/2",
            "link": null,
            "color": "blue"
        },
        {
            "text": "m是数组A的长度，n是数组B的长度`",
            "link": null,
            "color": "blue"
        },
        {
            "text": "并且partition后A左边最大(`maxLeftA`),A右边最小（`minRightA`),B左边最大（`maxLeftB`),B右边最小（`minRightB`)满足`(maxLeftA<=minRightB&&maxLeftB<=minRightA)`有了这两个条件，那么median就在这四个数中，根据奇数或者是偶数，```奇数：median=max(maxLeftA,maxLeftB)偶数：median=(max(maxLeftA,maxLeftB)+min(minRightA,minRightB))/2```",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/4.median-of-two-sorted-array.md",
    "code": [
        {
            "language": "java",
            "text": " []\nclass MedianTwoSortedArrayBruteForce {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n      int[] newArr = mergeTwoSortedArray(nums1, nums2);\n      int n = newArr.length;\n      if (n % 2 == 0) {\n        // even\n        return (double) (newArr[n / 2] + newArr[n / 2 - 1]) / 2;\n      } else {\n        // odd\n        return (double) newArr[n / 2];\n      }\n    }\n    private int[] mergeTwoSortedArray(int[] nums1, int[] nums2) {\n      int m = nums1.length;\n      int n = nums2.length;\n      int[] res = new int[m + n];\n      int i = 0;\n      int j = 0;\n      int idx = 0;\n      while (i < m && j < n) {\n        if (nums1[i] <= nums2[j]) {\n          res[idx++] = nums1[i++];\n        } else {\n          res[idx++] = nums2[j++];\n        }\n      }\n      while (i < m) {\n        res[idx++] = nums1[i++];\n      }\n      while (j < n) {\n        res[idx++] = nums2[j++];\n      }\n      return res;\n    }\n}\n"
        },
        {
            "language": "java",
            "text": " []\nclass MedianSortedTwoArrayBinarySearch {\n  public static double findMedianSortedArraysBinarySearch(int[] nums1, int[] nums2) {\n     // do binary search for shorter length array, make sure time complexity log(min(m,n)).\n     if (nums1.length > nums2.length) {\n        return findMedianSortedArraysBinarySearch(nums2, nums1);\n      }\n      int m = nums1.length;\n      int n = nums2.length;\n      int lo = 0;\n      int hi = m;\n      while (lo <= hi) {\n        // partition A position i\n        int i = lo + (hi - lo) / 2;\n        // partition B position j\n        int j = (m + n + 1) / 2 - i;\n\n        int maxLeftA = i == 0 ? Integer.MIN_VALUE : nums1[i - 1];\n        int minRightA = i == m ? Integer.MAX_VALUE : nums1[i];\n\n        int maxLeftB = j == 0 ? Integer.MIN_VALUE : nums2[j - 1];\n        int minRightB = j == n ? Integer.MAX_VALUE : nums2[j];\n\n        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {\n          // total length is even\n          if ((m + n) % 2 == 0) {\n            return (double) (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;\n          } else {\n            // total length is odd\n            return (double) Math.max(maxLeftA, maxLeftB);\n          }\n        } else if (maxLeftA > minRightB) {\n          // binary search left half\n          hi = i - 1;\n        } else {\n          // binary search right half\n          lo = i + 1;\n        }\n      }\n      return 0.0;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": " []\n/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nvar findMedianSortedArrays = function (nums1, nums2) {\n  // 归并排序\n  const merged = [];\n  let i = 0;\n  let j = 0;\n  while (i < nums1.length && j < nums2.length) {\n    if (nums1[i] < nums2[j]) {\n      merged.push(nums1[i++]);\n    } else {\n      merged.push(nums2[j++]);\n    }\n  }\n  while (i < nums1.length) {\n    merged.push(nums1[i++]);\n  }\n  while (j < nums2.length) {\n    merged.push(nums2[j++]);\n  }\n\n  const { length } = merged;\n  return length % 2 === 1\n    ? merged[Math.floor(length / 2)]\n    : (merged[length / 2] + merged[length / 2 - 1]) / 2;\n};\n"
        },
        {
            "language": "js",
            "text": " []\n/**\n * 二分解法\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nvar findMedianSortedArrays = function (nums1, nums2) {\n  // make sure to do binary search for shorten array\n  if (nums1.length > nums2.length) {\n    [nums1, nums2] = [nums2, nums1];\n  }\n  const m = nums1.length;\n  const n = nums2.length;\n  let low = 0;\n  let high = m;\n  while (low <= high) {\n    const i = low + Math.floor((high - low) / 2);\n    const j = Math.floor((m + n + 1) / 2) - i;\n\n    const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];\n    const minRightA = i === m ? Infinity : nums1[i];\n    const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];\n    const minRightB = j === n ? Infinity : nums2[j];\n\n    if (maxLeftA <= minRightB && minRightA >= maxLeftB) {\n      return (m + n) % 2 === 1\n        ? Math.max(maxLeftA, maxLeftB)\n        : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;\n    } else if (maxLeftA > minRightB) {\n      high = i - 1;\n    } else {\n      low = low + 1;\n    }\n  }\n};\n"
        }
    ]
},
"json":{
    "id": "56",
    "name": "merge-intervals",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "对数组进行排序简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果不排序，需要借助一些hack,这里不介绍了",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/56.merge-intervals.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=56 lang=javascript\n *\n * [56] Merge Intervals\n */\n/**\n * @param {number[][]} intervals\n * @return {number[][]}\n */\n\nfunction intersected(a, b) {\n  if (a[0] > b[1] || a[1] < b[0]) return false;\n  return true;\n}\n\nfunction mergeTwo(a, b) {\n  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];\n}\nvar merge = function (intervals) {\n  // 这种算法需要先排序\n  intervals.sort((a, b) => a[0] - b[0]);\n  for (let i = 0; i < intervals.length - 1; i++) {\n    const cur = intervals[i];\n    const next = intervals[i + 1];\n\n    if (intersected(cur, next)) {\n      intervals[i] = undefined;\n      intervals[i + 1] = mergeTwo(cur, next);\n    }\n  }\n  return intervals.filter((q) => q);\n};\n"
        }
    ]
},
"json":{
    "id": "23",
    "name": "merge-k-sorted-lists",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n- 归并排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分治",
            "link": null,
            "color": "blue"
        },
        {
            "text": "归并排序(mergesort)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/23.merge-k-sorted-lists.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=23 lang=javascript\n *\n * [23] Merge k Sorted Lists\n *\n * https://leetcode.com/problems/merge-k-sorted-lists/description/\n *\n */\nfunction mergeTwoLists(l1, l2) {\n  const dummyHead = {};\n  let current = dummyHead;\n  // l1: 1 -> 3 -> 5\n  // l2: 2 -> 4 -> 6\n  while (l1 !== null && l2 !== null) {\n    if (l1.val < l2.val) {\n      current.next = l1; // 把小的添加到结果链表\n      current = current.next; // 移动结果链表的指针\n      l1 = l1.next; // 移动小的那个链表的指针\n    } else {\n      current.next = l2;\n      current = current.next;\n      l2 = l2.next;\n    }\n  }\n\n  if (l1 === null) {\n    current.next = l2;\n  } else {\n    current.next = l1;\n  }\n  return dummyHead.next;\n}\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nvar mergeKLists = function(lists) {\n  // 图参考： https://zhuanlan.zhihu.com/p/61796021\n  if (lists.length === 0) return null;\n  if (lists.length === 1) return lists[0];\n  if (lists.length === 2) {\n    return mergeTwoLists(lists[0], lists[1]);\n  }\n\n  const mid = lists.length >> 1;\n  const l1 = [];\n  for (let i = 0; i < mid; i++) {\n    l1[i] = lists[i];\n  }\n\n  const l2 = [];\n  for (let i = mid, j = 0; i < lists.length; i++, j++) {\n    l2[j] = lists[i];\n  }\n\n  return mergeTwoLists(mergeKLists(l1), mergeKLists(l2));\n};\n"
        }
    ]
},
"json":{
    "id": "88",
    "name": "merge-sorted-array",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 归并排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "从后往前比较，并从后往前插入",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/88.merge-sorted-array.md",
    "code": [
        {
            "language": "js",
            "text": "\n// 这种解法连m都用不到\n// 这显然不是出题人的意思\nif (n === 0) return;\nlet current2 = 0;\nfor (let i = nums1.length - 1; i >= nums1.length - n; i--) {\n  nums1[i] = nums2[current2++];\n}\nnums1.sort((a, b) => a - b); // 当然你可以自己写排序，这里懒得写了，因为已经偏离了题目本身\n"
        },
        {
            "language": "js",
            "text": "\n// 将nums1 和 nums2 合并\nfunction merge(nums1, nums2) {\n  let ret = [];\n  while (nums1.length || nums2.length) {\n    // 为了方便大家理解，这里代码有点赘余\n    if (nums1.length === 0) {\n      ret.push(nums2.shift());\n      continue;\n    }\n\n    if (nums2.length === 0) {\n      ret.push(nums1.shift());\n      continue;\n    }\n    const a = nums1[0];\n    const b = nums2[0];\n    if (a > b) {\n      ret.push(nums2.shift());\n    } else {\n      ret.push(nums1.shift());\n    }\n  }\n  return ret;\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar merge = function (nums1, m, nums2, n) {\n  // 设置一个指针，指针初始化指向nums1的末尾（根据#62，应该是index为 m+n-1 的位置，因为nums1的长度有可能更长）\n  // 然后不断左移指针更新元素\n  let current = m + n - 1;\n\n  while (current >= 0) {\n    // 没必要继续了\n    if (n === 0) return;\n\n    // 为了方便大家理解，这里代码有点赘余\n    if (m < 1) {\n      nums1[current--] = nums2[--n];\n      continue;\n    }\n\n    if (n < 1) {\n      nums1[current--] = nums1[--m];\n      continue;\n    }\n    // 取大的填充 nums1的末尾\n    // 然后更新 m 或者 n\n    if (nums1[m - 1] > nums2[n - 1]) {\n      nums1[current--] = nums1[--m];\n    } else {\n      nums1[current--] = nums2[--n];\n    }\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        \"\"\"\n        Do not return anything, modify nums1 in-place instead.\n        \"\"\"\n        # 整体思路相似，只不过没有使用 current 指针记录当前填补位置\n        while m > 0 and n > 0:\n            if nums1[m-1] <= nums2[n-1]:\n                nums1[m+n-1] = nums2[n-1]\n                n -= 1\n            else:\n                nums1[m+n-1] = nums1[m-1]\n                m -=1\n        \"\"\"\n        由于没有使用 current，第一步比较结束后有两种情况:\n            1. 指针 m>0，n=0，此时不需要做任何处理\n            2. 指针 n>0，m=0，此时需要将 nums2 指针左侧元素全部拷贝到 nums1 的前 n 位\n        \"\"\"\n        if n > 0:\n            nums1[:n] = nums2[:n]\n"
        }
    ]
},
"json":{
    "id": "21",
    "name": "merge-two-sorted-lists",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 递归\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "掌握链表数据结构",
            "link": null,
            "color": "blue"
        },
        {
            "text": "考虑边界情况2",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/21.merge-two-sorted-lists.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nconst mergeTwoLists = function (l1, l2) {\n  if (l1 === null) {\n    return l2;\n  }\n  if (l2 === null) {\n    return l1;\n  }\n  if (l1.val < l2.val) {\n    l1.next = mergeTwoLists(l1.next, l2);\n    return l1;\n  } else {\n    l2.next = mergeTwoLists(l1, l2.next);\n    return l2;\n  }\n};\n"
        }
    ]
},
"json":{
    "id": "155",
    "name": "min-stack",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 差值法\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "最小栈存储的不应该是真实值，而是真实值和min的差值",
            "link": null,
            "color": "blue"
        },
        {
            "text": "top的时候涉及到对数据的还原，这里千万注意是**上一个**最小值",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/155.min-stack.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=155 lang=javascript\n *\n * [155] Min Stack\n */\n/**\n * initialize your data structure here.\n */\nvar MinStack = function() {\n  this.stack = [];\n  this.minV = Number.MAX_VALUE;\n};\n\n/**\n * @param {number} x\n * @return {void}\n */\nMinStack.prototype.push = function(x) {\n  // update 'min'\n  const minV = this.minV;\n  if (x < this.minV) {\n    this.minV = x;\n  }\n  return this.stack.push(x - minV);\n};\n\n/**\n * @return {void}\n */\nMinStack.prototype.pop = function() {\n  const item = this.stack.pop();\n  const minV = this.minV;\n\n  if (item < 0) {\n    this.minV = minV - item;\n    return minV;\n  }\n  return item + minV;\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.top = function() {\n  const item = this.stack[this.stack.length - 1];\n  const minV = this.minV;\n\n  if (item < 0) {\n    return minV;\n  }\n  return item + minV;\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.min = function() {\n  return this.minV;\n};\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * var obj = new MinStack()\n * obj.push(x)\n * obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.min()\n */\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * initialize your data structure here.\n */\nvar MinStack = function() {\n    this.stack = []\n    this.minStack = []\n};\n\n/** \n * @param {number} x\n * @return {void}\n */\nMinStack.prototype.push = function(x) {\n    this.stack.push(x)\n    if (this.minStack.length == 0 ||  x <= this.minStack[this.minStack.length - 1]) {\n        this.minStack.push(x)\n    }\n};\n\n/**\n * @return {void}\n */\nMinStack.prototype.pop = function() {\n    const x = this.stack.pop()\n    if (x !== void 0 &&  x === this.minStack[this.minStack.length - 1]) {\n        this.minStack.pop()\n    }\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.top = function() {\n    return this.stack[this.stack.length - 1]\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.min = function() {\n    return this.minStack[this.minStack.length - 1]\n};\n\n/** \n * Your MinStack object will be instantiated and called as such:\n * var obj = new MinStack()\n * obj.push(x)\n * obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.min()\n */\n"
        },
        {
            "language": "py",
            "text": "\nclass MinStack:\n\n    def __init__(self):\n        \"\"\"\n        initialize your data structure here.\n        \"\"\"\n        self.minV = float('inf')\n        self.stack = []\n\n    def push(self, x: int) -> None:\n        self.stack.append(x - self.minV)\n        if x < self.minV:\n            self.minV = x\n\n    def pop(self) -> None:\n        if not self.stack:\n            return\n        tmp = self.stack.pop()\n        if tmp < 0:\n            self.minV -= tmp\n\n    def top(self) -> int:\n        if not self.stack:\n            return\n        tmp = self.stack[-1]\n        if tmp < 0:\n            return self.minV\n        else:\n            return self.minV + tmp\n\n    def min(self) -> int:\n        return self.minV\n\n\n\n# Your MinStack object will be instantiated and called as such:\n# obj = MinStack()\n# obj.push(x)\n# obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.min()\n"
        },
        {
            "language": "py",
            "text": "\nclass MinStack:\n\n    def __init__(self):\n        \"\"\"\n        initialize your data structure here.\n        \"\"\"\n        self.stack = []\n        self.minstack = []\n\n    def push(self, x: int) -> None:\n        self.stack.append(x)\n        if not self.minstack or x <= self.minstack[-1]:\n            self.minstack.append(x)\n\n    def pop(self) -> None:\n        tmp = self.stack.pop()\n        if tmp == self.minstack[-1]:\n            self.minstack.pop()\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def min(self) -> int:\n        return self.minstack[-1]\n\n\n# Your MinStack object will be instantiated and called as such:\n# obj = MinStack()\n# obj.push(x)\n# obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.min()\n"
        }
    ]
},
"json":{
    "id": "209",
    "name": "minimum-size-subarray-sum",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 滑动窗口\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "滑动窗口简化操作(滑窗口适合用于求解这种要求`连续`的题目)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/209.minimum-size-subarray-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=209 lang=javascript\n *\n * [209] Minimum Size Subarray Sum\n *\n */\n/**\n * @param {number} s\n * @param {number[]} nums\n * @return {number}\n */\nvar minSubArrayLen = function(s, nums) {\n  if (nums.length === 0) return 0;\n  const slideWindow = [];\n  let acc = 0;\n  let min = null;\n\n  for (let i = 0; i < nums.length + 1; i++) {\n    const num = nums[i];\n\n    while (acc >= s) {\n      if (min === null || slideWindow.length < min) {\n        min = slideWindow.length;\n      }\n      acc = acc - slideWindow.shift();\n    }\n\n    slideWindow.push(num);\n\n    acc = slideWindow.reduce((a, b) => a + b, 0);\n  }\n\n  return min || 0;\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar minSubArrayLen = function(s, nums) {\n  if (nums.length === 0) return 0;\n  const slideWindow = [];\n  let acc = 0;\n  let min = null;\n\n  for (let i = 0; i < nums.length + 1; i++) {\n    const num = nums[i];\n\n    while (acc > s) {\n      acc = acc - slideWindow.shift();\n    }\n    if (acc === s) {\n      if (min === null || slideWindow.length < min) {\n        min = slideWindow.length;\n      }\n      slideWindow.shift();\n    }\n\n    slideWindow.push(num);\n\n    acc = slideWindow.reduce((a, b) => a + b, 0);\n  }\n\n  return min || 0;\n};\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def minSubArrayLen(self, s: int, nums: List[int]) -> int:\n        l = total = 0\n        ans = len(nums) + 1\n        for r in range(len(nums)):\n            total += nums[r]\n            while total >= s:\n                ans = min(ans, r - l + 1)\n                total -= nums[l]\n                l += 1\n        return  0 if ans == len(nums) + 1 else ans\n"
        }
    ]
},
"json":{
    "id": "283",
    "name": "move-zeroes",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析无",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/283.move-zeroes.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar moveZeroes = function(nums) {\n    let index = 0;\n    for(let i = 0; i < nums.length; i++) {\n        const num = nums[i];\n        if (num !== 0) {\n            nums[index++] = num;\n        }\n    }\n\n    for(let i = index; i < nums.length; i++) {\n        nums[index++] = 0;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        \"\"\"\n        slow = fast = 0\n        while fast < len(nums):\n            if nums[fast] != 0:\n                nums[fast], nums[slow] = nums[slow], nums[fast]\n                slow += 1\n            fast += 1\n"
        }
    ]
},
"json":{
    "id": "1019",
    "name": "next-greater-node-in-linked-list",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n- 栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "单调栈（单调递减栈）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "单调栈的代码模板",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1019.next-greater-node-in-linked-list.md",
    "code": [
        {
            "language": "py",
            "text": "\ndef monoStack(list):\n    st = []\n    for v in list:\n        while len(st) > 0 and v > st[-1]:\n            st.pop()\n        st.append(v)\n    return st\nmonoStack([5, 4, 2, 1, 3]) # output: [5, 4, 3]\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n     def nextLargerNodes(self, head):\n        res, st = [], []\n        while head:\n            while len(st) > 0 and head.val > st[-1][1]:\n                res[st.pop()[0]] = head.val\n            st.append((len(res), head.val))\n            res.append(0)\n            head = head.next\n        return res\n"
        }
    ]
},
"json":{
    "id": "31",
    "name": "next-permutation",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "写几个例子通常会帮助理解问题的规律",
            "link": null,
            "color": "blue"
        },
        {
            "text": "在有序数组中首尾指针不断交换位置即可实现reverse",
            "link": null,
            "color": "blue"
        },
        {
            "text": "找到从右边起`第一个大于nums[i]的`，并将其和nums[i]进行交换",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/31.next-permutation.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=31 lang=javascript\n *\n * [31] Next Permutation\n */\n\nfunction reverseRange(A, i, j) {\n  while (i < j) {\n    const temp = A[i];\n    A[i] = A[j];\n    A[j] = temp;\n    i++;\n    j--;\n  }\n}\n/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar nextPermutation = function(nums) {\n  // 时间复杂度O(n) 空间复杂度O(1)\n  if (nums == null || nums.length <= 1) return;\n\n  let i = nums.length - 2;\n  // 从后往前找到第一个降序的,相当于找到了我们的回溯点\n  while (i > -1 && nums[i + 1] <= nums[i]) i--;\n\n  // 如果找了就swap\n  if (i > -1) {\n    let j = nums.length - 1;\n    // 找到从右边起第一个大于nums[i]的，并将其和nums[i]进行交换\n    // 因为如果交换的数字比nums[i]还要小肯定不符合题意\n    while (nums[j] <= nums[i]) j--;\n    const temp = nums[i];\n    nums[i] = nums[j];\n    nums[j] = temp;\n  }\n\n  // 最后我们只需要将剩下的元素从左到右，依次填入当前最小的元素就可以保证是大于当前排列的最小值了\n  // [i + 1, A.length -1]的元素进行反转\n\n  reverseRange(nums, i + 1, nums.length - 1);\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nextPermutation(self, nums):\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        :param list nums\n        \"\"\"\n        # 第一步，从后往前，找到下降点\n        down_index = None\n        for i in range(len(nums)-2, -1, -1):\n            if nums[i] < nums[i+1]:\n                down_index = i\n                break\n        # 如果没有下降点，重新排列\n        if down_index is None:\n            nums.reverse()\n        # 如果有下降点\n        else:\n            # 第二步，从后往前，找到比下降点大的数，对换位置\n            for i in range(len(nums)-1, i, -1):\n                if nums[down_index] < nums[i]:\n                    nums[down_index], nums[i] = nums[i], nums[down_index]\n                    break\n            # 第三部，重新排列下降点之后的数\n            i, j = down_index+1, len(nums)-1\n            while i < j:\n                nums[i], nums[j] = nums[j], nums[i]\n                i += 1\n                j -= 1\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nextPermutation(self, nums):\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        :param list nums\n        \"\"\"\n        # 第一步，从后往前，找到下降点\n        down_index = None\n        for i in range(len(nums)-2, -1, -1):\n            if nums[i] < nums[i+1]:\n                down_index = i\n                break\n        # 如果没有下降点，重新排列\n        if down_index is None:\n            nums.reverse()\n        # 如果有下降点\n        else:\n            # 第二步，从后往前，找到比下降点大的数，对换位置\n            for i in range(len(nums)-1, i, -1):\n                if nums[down_index] < nums[i]:\n                    nums[down_index], nums[i] = nums[i], nums[down_index]\n                    break\n            # 第三步，重新排列下降点之后的数\n            i, j = down_index+1, len(nums)-1\n            while i < j:\n                nums[i], nums[j] = nums[j], nums[i]\n                i += 1\n                j -= 1\n"
        }
    ]
},
"json":{
    "id": "191",
    "name": "number-of-1-bits",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 位运算\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.`n&(n",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1)`可以`消除`n最后的一个1的原理简化操作2.bit运算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/191.number-of-1-bits.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=191 lang=javascript\n *\n */\n/**\n * @param {number} n - a positive integer\n * @return {number}\n */\nvar hammingWeight = function(n) {\n  let count = 0;\n  while (n !== 0) {\n    n = n & (n - 1);\n    count++;\n  }\n\n  return count;\n};\n\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int hammingWeight(uint32_t v) {\n        auto count = 0;\n        while (v != 0) {\n            v &= (v - 1);\n            ++count;\n        }\n        return count;\n    }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nconst uint32_t ODD_BIT_MASK = 0xAAAAAAAA;\nconst uint32_t EVEN_BIT_MASK = 0x55555555;\nconst uint32_t ODD_2BIT_MASK = 0xCCCCCCCC;\nconst uint32_t EVEN_2BIT_MASK = 0x33333333;\nconst uint32_t ODD_4BIT_MASK = 0xF0F0F0F0;\nconst uint32_t EVEN_4BIT_MASK = 0x0F0F0F0F;\nconst uint32_t ODD_8BIT_MASK = 0xFF00FF00;\nconst uint32_t EVEN_8BIT_MASK = 0x00FF00FF;\nconst uint32_t ODD_16BIT_MASK = 0xFFFF0000;\nconst uint32_t EVEN_16BIT_MASK = 0x0000FFFF;\n\nclass Solution {\npublic:\n\n    int hammingWeight(uint32_t v) {\n        v = (v & EVEN_BIT_MASK) + ((v & ODD_BIT_MASK) >> 1);\n        v = (v & EVEN_2BIT_MASK) + ((v & ODD_2BIT_MASK) >> 2);\n        v = (v & EVEN_4BIT_MASK) + ((v & ODD_4BIT_MASK) >> 4);\n        v = (v & EVEN_8BIT_MASK) + ((v & ODD_8BIT_MASK) >> 8);\n        return (v & EVEN_16BIT_MASK) + ((v & ODD_16BIT_MASK) >> 16);\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    def hammingWeight(self, n):\n        \"\"\"\n        :type n: int\n        :rtype: int\n        \"\"\"\n        count = 0\n        while n:\n            n &= n - 1\n            count += 1\n        return count\n"
        }
    ]
},
"json":{
    "id": "1020",
    "name": "number-of-enclaves",
    "company": [],
    "pre": [
        {
            "text": "\n\n- DFS\n- hashset\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "visited记录访问过的节点，防止重复计算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1020.number-of-enclaves.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    temp = 0\n    meetEdge = False\n\n    def numEnclaves(self, A: List[List[int]]) -> int:\n        cnt = 0\n        m = len(A)\n        n = len(A[0])\n        visited = set()\n\n        def dfs(i, j):\n            if i < 0 or i >= m or j < 0 or j >= n or (i, j) in visited:\n                return\n            visited.add((i, j))\n            if A[i][j] == 1:\n                self.temp += 1\n            else:\n                return\n            if i == 0 or i == m - 1 or j == 0 or j == n - 1:\n                self.meetEdge = True\n            dfs(i + 1, j)\n            dfs(i - 1, j)\n            dfs(i, j + 1)\n            dfs(i, j - 1)\n        for i in range(m):\n            for j in range(n):\n                dfs(i, j)\n                if not self.meetEdge:\n                    cnt += self.temp\n                self.meetEdge = False\n                self.temp = 0\n        return cnt\n\n"
        },
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1020 lang=python3\n#\n# [1020] 飞地的数量\n#\n\n# @lc code=start\n\n\nclass Solution:\n\n    def numEnclaves(self, A: List[List[int]]) -> int:\n        cnt = 0\n        m = len(A)\n        n = len(A[0])\n\n        def dfs(i, j):\n            if i < 0 or i >= m or j < 0 or j >= n or A[i][j] == 0:\n                return\n            A[i][j] = 0\n\n            dfs(i + 1, j)\n            dfs(i - 1, j)\n            dfs(i, j + 1)\n            dfs(i, j - 1)\n        for i in range(m):\n            dfs(i, 0)\n            dfs(i, n - 1)\n        for j in range(1, n - 1):\n            dfs(0, j)\n            dfs(m - 1, j)\n        for i in range(m):\n            for j in range(n):\n                if A[i][j] == 1:\n                    cnt += 1\n        return cnt\n\n        # @lc code=end\n\n"
        }
    ]
},
"json":{
    "id": "200",
    "name": "number-of-islands",
    "company": [],
    "pre": [
        {
            "text": "\n\n- DFS\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二维数组DFS解题模板",
            "link": null,
            "color": "blue"
        },
        {
            "text": "将已经访问的元素置为0，省去visited的空间开销",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/200.number-of-islands.md",
    "code": [
        {
            "language": "java",
            "text": "\n   public int numIslands(char[][] grid) {\n        if (grid == null || grid.length == 0 || grid[0].length == 0) return 0;\n\n        int count = 0;\n        for (int row = 0; row < grid.length; row++) {\n            for (int col = 0; col < grid[0].length; col++) {\n                if (grid[row][col] == '1') {\n                    dfs(grid, row, col);\n                    count++;\n                }\n            }\n        }\n        return count;\n    }\n\n    private void dfs(char[][] grid,int row,int col) {\n        if (row<0||row== grid.length||col<0||col==grid[0].length||grid[row][col]!='1') {\n            return;\n        }\n        grid[row][col] = '0';\n        dfs(grid, row-1, col);\n        dfs(grid, row+1, col);\n        dfs(grid, row, col+1);\n        dfs(grid, row, col-1);\n    }\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=200 lang=javascript\n *\n * [200] Number of Islands\n */\nfunction helper(grid, i, j, rows, cols) {\n  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === \"0\")\n    return;\n\n  grid[i][j] = \"0\";\n\n  helper(grid, i + 1, j, rows, cols);\n  helper(grid, i, j + 1, rows, cols);\n  helper(grid, i - 1, j, rows, cols);\n  helper(grid, i, j - 1, rows, cols);\n}\n/**\n * @param {character[][]} grid\n * @return {number}\n */\nvar numIslands = function(grid) {\n  let res = 0;\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      if (grid[i][j] === \"1\") {\n        helper(grid, i, j, rows, cols);\n        res++;\n      }\n    }\n  }\n  return res;\n};\n"
        }
    ]
},
"json":{
    "id": "328",
    "name": "odd-even-linked-list",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "用虚拟节点来简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "循环的结束条件设置为`odd&&odd.next&&even&&even.next`,不应该是`odd&&even`,否则需要记录一下奇数节点的最后一个节点，复杂了操作",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/328.odd-even-linked-list.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=328 lang=javascript\n *\n * [328] Odd Even Linked List\n *\n *\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar oddEvenList = function(head) {\n  if (!head || !head.next) return head;\n\n  const dummyHead1 = {\n    next: head\n  };\n  const dummyHead2 = {\n    next: head.next\n  };\n\n  let odd = dummyHead1.next;\n  let even = dummyHead2.next;\n\n  while (odd && odd.next && even && even.next) {\n    const oddNext = odd.next.next;\n    const evenNext = even.next.next;\n\n    odd.next = oddNext;\n    even.next = evenNext;\n\n    odd = oddNext;\n    even = evenNext;\n  }\n\n  odd.next = dummyHead2.next;\n\n  return dummyHead1.next;\n};\n"
        }
    ]
},
"json":{
    "id": "474",
    "name": "ones-and-zeros-en",
    "company": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/474.ones-and-zeros-en.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass OnesAndZerosBFRecursive {\n public int findMaxForm2(String[] strs, int m, int n) {\n    return helper(strs, 0, m, n);\n }\n private int helper(String[] strs, int idx, int j, int k) {\n    if (idx == strs.length) return 0;\n    // count current idx string number of zeros and ones\n    int[] counts = countZeroOnes(strs[idx]);\n    // if j >= count0 && k >= count1, take current index string\n    int takeCurrStr = j - counts[0] >= 0 && k - counts[1] >= 0\n        ? 1 + helper(strs, idx + 1, j - counts[0], k - counts[1])\n        : -1;\n    // don't take current index string strs[idx], continue next string\n    int notTakeCurrStr = helper(strs, idx + 1, j, k);\n    return Math.max(takeCurrStr, notTakeCurrStr);\n }\n private int[] countZeroOnes(String s) {\n    int[] res = new int[2];\n    for (char ch : s.toCharArray()) {\n      res[ch - '0']++;\n    }\n    return res;\n }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass OnesAndZerosMemoRecur {\n  public int findMaxForm4(String[] strs, int m, int n) {\n      return helper(strs, 0, m, n, new int[strs.length][m + 1][n + 1]);\n  }\n  private int helper(String[] strs, int idx, int j, int k, int[][][] memo) {\n      if (idx == strs.length) return 0;\n      // check if already calculated, return value\n      if (memo[idx][j][k] != 0) {\n        return memo[idx][j][k];\n      }\n      int[] counts = countZeroOnes(strs[idx]);\n      // if satisfy condition, take current string, strs[idx], update count0 and count1\n      int takeCurrStr = j - counts[0] >= 0 && k - counts[1] >= 0\n          ? 1 + helper(strs, idx + 1, j - counts[0], k - counts[1], memo)\n          : -1;\n      // not take current string\n      int notTakeCurrStr = helper(strs, idx + 1, j, k, memo);\n      // always keep track the max value into memory\n      memo[idx][j][k] = Math.max(takeCurrStr, notTakeCurrStr);\n      return memo[idx][j][k];\n  }\n  private int[] countZeroOnes(String s) {\n       int[] res = new int[2];\n       for (char ch : s.toCharArray()) {\n         res[ch - '0']++;\n       }\n       return res;\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass OnesAndZeros3DDP {\n  public int findMaxForm(String[] strs, int m, int n) {\n      int l = strs.length;\n      int [][][] d = new int[l + 1][m + 1][n + 1];\n      for (int i = 0; i <= l; i ++){\n        int [] nums = new int[]{0,0};\n        if (i > 0){\n          nums = countZeroOnes(strs[i - 1]);\n        }\n        for (int j = 0; j <= m; j ++){\n          for (int k = 0; k <= n; k ++){\n            if (i == 0) {\n              d[i][j][k] = 0;\n            } else if (j >= nums[0] && k >= nums[1]){\n              d[i][j][k] = Math.max(d[i - 1][j][k], d[i - 1][j - nums[0]][k - nums[1]] + 1);\n            } else {\n              d[i][j][k] = d[i - 1][j][k];\n            }\n          }\n        }\n      }\n      return d[l][m][n];\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass OnesAndZeros2DDP {\n  public int findMaxForm(String[] strs, int m, int n) {\n      int[][] dp = new int[m + 1][n + 1];\n      for (String s : strs) {\n        int[] counts = countZeroOnes(s);\n        for (int i = m; i >= counts[0]; i--) {\n          for (int j = n; j >= counts[1]; j--) {\n            dp[i][j] = Math.max(1 + dp[i - counts[0]][j - counts[1]], dp[i][j]);\n          }\n        }\n      }\n      return dp[m][n];\n  }\n  private int[] countZeroOnes(String s) {\n       int[] res = new int[2];\n       for (char ch : s.toCharArray()) {\n         res[ch - '0']++;\n       }\n       return res;\n  }\n}\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:\n        return self.helper(strs, m, n, 0)\n    \n    def helper(self, strs, m, n, idx):\n        if idx == len(strs):\n            return 0\n        take_curr_str = -1\n        count0, count1 = strs[idx].count('0'), strs[idx].count('1')\n        if m >= count0 and n >= count1:\n            take_curr_str = max(take_curr_str, self.helper(strs, m - count0, n - count1, idx + 1) + 1)\n        not_take_curr_str = self.helper(strs, m, n, idx + 1)\n        return max(take_curr_str, not_take_curr_str)\n        \n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:\n        memo = {k:[[0]*(n+1) for _ in range(m+1)] for k in range(len(strs)+1)}\n        return self.helper(strs, 0, m, n, memo)\n    \n    def helper(self, strs, idx, m, n, memo):\n        if idx == len(strs):\n            return 0\n        if memo[idx][m][n] != 0:\n            return memo[idx][m][n]\n        take_curr_str = -1\n        count0, count1 = strs[idx].count('0'), strs[idx].count('1')\n        if m >= count0 and n >= count1:\n            take_curr_str = max(take_curr_str, self.helper(strs, idx + 1, m - count0, n - count1, memo) + 1)\n        not_take_curr_str = self.helper(strs, idx + 1, m, n, memo)\n        memo[idx][m][n] = max(take_curr_str, not_take_curr_str)\n        return memo[idx][m][n]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:\n        l = len(strs)\n        dp = [[0]*(n+1) for _ in range(m+1)]\n        for i in range(1, l + 1):\n              count0, count1 = strs[i - 1].count('0'), strs[i - 1].count('1')\n              for i in reversed(range(count0, m + 1)):\n                for j in reversed(range(count1, n + 1)):\n                    dp[i][j] = max(dp[i][j], 1 + dp[i - count0][j - count1])\n        return dp[m][n]\n"
        }
    ]
},
"json":{
    "id": "1168",
    "name": "optimize-water-distribution-in-a-village-cn",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 图\n- 最小生成树\n\nexample 1 pic:\n\n![example 1](../assets/problems/1168.optimize-water-distribution-in-a-village-example1.png)\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.构建图，得出所有边2.对所有边排序3.遍历所有的边（从小到大）4.对于每条边，检查是否已经连通，若没有连通，加上边上的值，连通两个节点。若已连通，跳过。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1168.optimize-water-distribution-in-a-village-cn.md",
    "code": [
        {
            "language": "java",
            "text": "\n  class OptimizeWaterDistribution {\n    public int minCostToSupplyWater(int n, int[] wells, int[][] pipes) {\n      List<EdgeCost> costs = new ArrayList<>();\n      for (int i = 1; i <= n; i++) {\n        costs.add(new EdgeCost(0, i, wells[i - 1]));\n      }\n      for (int[] p : pipes) {\n        costs.add(new EdgeCost(p[0], p[1], p[2]));\n      }\n      Collections.sort(costs);\n      int minCosts = 0;\n      UnionFind uf = new UnionFind(n);\n      for (EdgeCost edge : costs) {\n        int rootX = uf.find(edge.node1);\n        int rootY = uf.find(edge.node2);\n        if (rootX == rootY) continue;\n        minCosts += edge.cost;\n        uf.union(edge.node1, edge.node2);\n        // for each union, we connnect one node\n        n--;\n        // if all nodes already connected, terminate early\n        if (n == 0) {\n          return minCosts;\n        }\n      }\n      return minCosts;\n    }\n  \n    class EdgeCost implements Comparable<EdgeCost> {\n      int node1;\n      int node2;\n      int cost;\n      public EdgeCost(int node1, int node2, int cost) {\n        this.node1 = node1;\n        this.node2 = node2;\n        this.cost = cost;\n      }\n  \n      @Override\n      public int compareTo(EdgeCost o) {\n        return this.cost - o.cost;\n      }\n    }\n    \n    class UnionFind {\n      int[] parent;\n      int[] rank;\n      public UnionFind(int n) {\n        parent = new int[n + 1];\n        for (int i = 0; i <= n; i++) {\n          parent[i] = i;\n        }\n        rank = new int[n + 1];\n      }\n      public int find(int x) {\n        return x == parent[x] ? x : find(parent[x]);\n      }\n      public void union(int x, int y) {\n        int px = find(x);\n        int py = find(y);\n        if (px == py) return;\n        if (rank[px] >= rank[py]) {\n          parent[py] = px;\n          rank[px] += rank[py];\n        } else {\n          parent[px] = py;\n          rank[py] += rank[px];\n        }\n      }\n    }\n  }\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minCostToSupplyWater(self, n: int, wells: List[int], pipes: List[List[int]]) -> int:\n        union_find = {i: i for i in range(n + 1)}\n        \n        def find(x):\n            return x if x == union_find[x] else find(union_find[x])\n        \n        def union(x, y):\n            px = find(x)\n            py = find(y)\n            union_find[px] = py\n            \n        graph_wells = [[cost, 0, i] for i, cost in enumerate(wells, 1)]\n        graph_pipes = [[cost, i, j] for i, j, cost in pipes]\n        min_costs = 0\n        for cost, x, y in sorted(graph_wells + graph_pipes):\n            if find(x) == find(y):\n                continue\n            union(x, y)\n            min_costs += cost\n            n -= 1\n            if n == 0:\n                return min_costs\n"
        }
    ]
},
"json":{
    "id": "1168",
    "name": "optimize-water-distribution-in-a-village-en",
    "company": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1168.optimize-water-distribution-in-a-village-en.md",
    "code": [
        {
            "language": "java",
            "text": "\n  class OptimizeWaterDistribution {\n    public int minCostToSupplyWater(int n, int[] wells, int[][] pipes) {\n      List<EdgeCost> costs = new ArrayList<>();\n      for (int i = 1; i <= n; i++) {\n        costs.add(new EdgeCost(0, i, wells[i - 1]));\n      }\n      for (int[] p : pipes) {\n        costs.add(new EdgeCost(p[0], p[1], p[2]));\n      }\n      Collections.sort(costs);\n      int minCosts = 0;\n      UnionFind uf = new UnionFind(n);\n      for (EdgeCost edge : costs) {\n        int rootX = uf.find(edge.node1);\n        int rootY = uf.find(edge.node2);\n        if (rootX == rootY) continue;\n        minCosts += edge.cost;\n        uf.union(edge.node1, edge.node2);\n        // for each union, we connnect one node\n        n--;\n        // if all nodes already connected, terminate early\n        if (n == 0) {\n          return minCosts;\n        }\n      }\n      return minCosts;\n    }\n  \n    class EdgeCost implements Comparable<EdgeCost> {\n      int node1;\n      int node2;\n      int cost;\n      public EdgeCost(int node1, int node2, int cost) {\n        this.node1 = node1;\n        this.node2 = node2;\n        this.cost = cost;\n      }\n  \n      @Override\n      public int compareTo(EdgeCost o) {\n        return this.cost - o.cost;\n      }\n    }\n    \n    class UnionFind {\n      int[] parent;\n      int[] rank;\n      public UnionFind(int n) {\n        parent = new int[n + 1];\n        for (int i = 0; i <= n; i++) {\n          parent[i] = i;\n        }\n        rank = new int[n + 1];\n      }\n      public int find(int x) {\n        return x == parent[x] ? x : find(parent[x]);\n      }\n      public void union(int x, int y) {\n        int px = find(x);\n        int py = find(y);\n        if (px == py) return;\n        if (rank[px] >= rank[py]) {\n          parent[py] = px;\n          rank[px] += rank[py];\n        } else {\n          parent[px] = py;\n          rank[py] += rank[px];\n        }\n      }\n    }\n  }\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minCostToSupplyWater(self, n: int, wells: List[int], pipes: List[List[int]]) -> int:\n        union_find = {i: i for i in range(n + 1)}\n        \n        def find(x):\n            return x if x == union_find[x] else find(union_find[x])\n        \n        def union(x, y):\n            px = find(x)\n            py = find(y)\n            union_find[px] = py\n            \n        graph_wells = [[cost, 0, i] for i, cost in enumerate(wells, 1)]\n        graph_pipes = [[cost, i, j] for i, j, cost in pipes]\n        min_costs = 0\n        for cost, x, y in sorted(graph_wells + graph_pipes):\n            if find(x) == find(y):\n                continue\n            union(x, y)\n            min_costs += cost\n            n -= 1\n            if n == 0:\n                return min_costs\n"
        }
    ]
},
"json":{
    "id": "131",
    "name": "palindrome-partitioning",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/131.palindrome-partitioning.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=131 lang=javascript\n *\n * [131] Palindrome Partitioning\n */\n\nfunction isPalindrom(s) {\n    let left = 0;\n    let right = s.length - 1;\n\n    while(left < right && s[left] === s[right]) {\n        left++;\n        right--;\n    }\n\n    return left >= right;\n}\n function backtrack(s, list, tempList, start) {\n    const sliced = s.slice(start);\n\n    if (isPalindrom(sliced) && (tempList.join(\"\").length === s.length)) list.push([...tempList]);\n\n    for(let i = 0; i < sliced.length; i++) {\n        const sub = sliced.slice(0, i + 1);\n        if (isPalindrom(sub)) {\n            tempList.push(sub);\n        } else {\n            continue;\n        }\n        backtrack(s, list, tempList, start + i + 1);\n        tempList.pop();\n    }\n }\n/**\n * @param {string} s\n * @return {string[][]}\n */\nvar partition = function(s) {\n    // \"aab\"\n    // [\"aa\", \"b\"]\n    // [\"a\", \"a\", \"b\"]\n    const list = [];\n    backtrack(s, list, [], 0);\n    return list;\n};\n\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def partition(self, s: str) -> List[List[str]]:\n        \"\"\"回溯法\"\"\"\n        \n        res = []\n        \n        def helper(s, tmp):\n            \"\"\"\n            如果是空字符串，说明已经处理完毕\n            否则逐个字符往前测试，判断是否是回文\n            如果是，则处理剩余字符串，并将已经得到的列表作为参数\n            \"\"\"\n            if not s:\n                res.append(tmp)\n            for i in range(1, len(s) + 1):\n                if s[:i] == s[:i][::-1]:\n                    helper(s[i:], tmp + [s[:i]])\n        \n        helper(s, [])\n        return res\n"
        }
    ]
},
"json":{
    "id": "416",
    "name": "partition-equal-subset-sum",
    "company": [],
    "pre": [
        {
            "text": "\n\n- DFS\n- 动态规划\n \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/416.partition-equal-subset-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar canPartition = function (nums) {\n  let sum = nums.reduce((acc, num) => acc + num, 0);\n  if (sum % 2) {\n    return false;\n  }\n  sum = sum / 2;\n  return dfs(nums, sum, 0);\n};\n\nfunction dfs(nums, target, cur) {\n  if (target < 0 || cur > nums.length) {\n    return false;\n  }\n  return (\n    target === 0 ||\n    dfs(nums, target - nums[cur], cur + 1) ||\n    dfs(nums, target, cur + 1)\n  );\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar canPartition = function (nums) {\n  let sum = nums.reduce((acc, num) => acc + num, 0);\n  if (sum % 2) {\n    return false;\n  }\n  sum = sum / 2;\n  nums = nums.sort((a, b) => b - a);\n  if (sum < nums[0]) {\n    return false;\n  }\n  return dfs(nums, sum, sum, 0);\n};\n\nfunction dfs(nums, pickRemain, discardRemain, cur) {\n  if (pickRemain === 0 || discardRemain === 0) {\n    return true;\n  }\n\n  if (pickRemain < 0 || discardRemain < 0 || cur > nums.length) {\n    return false;\n  }\n\n  return (\n    dfs(nums, pickRemain - nums[cur], discardRemain, cur + 1) ||\n    dfs(nums, pickRemain, discardRemain - nums[cur], cur + 1)\n  );\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar canPartition = function (nums) {\n  let sum = nums.reduce((acc, num) => acc + num, 0);\n  if (sum % 2) {\n    return false;\n  } else {\n    sum = sum / 2;\n  }\n\n  const dp = Array.from(nums).map(() =>\n    Array.from({ length: sum + 1 }).fill(false)\n  );\n\n  for (let i = 0; i < nums.length; i++) {\n    dp[i][0] = true;\n  }\n\n  for (let i = 0; i < dp.length - 1; i++) {\n    for (let j = 0; j < dp[0].length; j++) {\n      dp[i + 1][j] =\n        j - nums[i] >= 0 ? dp[i][j] || dp[i][j - nums[i]] : dp[i][j];\n    }\n  }\n\n  return dp[nums.length - 1][sum];\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar canPartition = function (nums) {\n  let sum = nums.reduce((acc, num) => acc + num, 0);\n  if (sum % 2) {\n    return false;\n  }\n  sum = sum / 2;\n  const dp = Array.from({ length: sum + 1 }).fill(false);\n  dp[0] = true;\n\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = sum; j > 0; j--) {\n      dp[j] = dp[j] || (j - nums[i] >= 0 && dp[j - nums[i]]);\n    }\n  }\n\n  return dp[sum];\n};\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number} amount\n * @param {number[]} coins\n * @return {number}\n */\nvar change = function (amount, coins) {\n  const dp = Array.from({ length: amount + 1 }).fill(0);\n  dp[0] = 1;\n  for (let i = 0; i < coins.length; i++) {\n    for (let j = 1; j <= amount; j++) {\n      dp[j] = dp[j] + (j - coins[i] >= 0 ? dp[j - coins[i]] : 0);\n    }\n  }\n  return dp[amount];\n};\n"
        }
    ]
},
"json":{
    "id": "86",
    "name": "partition-list",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "链表的基本操作（遍历）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "虚拟节点dummy简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历完成之后记得`currentL1.next=null;`否则会内存溢出>如果单纯的遍历是不需要上面操作的，但是我们的遍历会导致currentL1.next和currentL2.next>中有且仅有一个不是null，如果不这么操作的话会导致两个链表成环，造成溢出。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/86.partition-list.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=86 lang=javascript\n *\n * [86] Partition List\n *\n * https://leetcode.com/problems/partition-list/description/\n *\n * algorithms\n * Medium (36.41%)\n * Total Accepted:    155.1K\n * Total Submissions: 425.1K\n * Testcase Example:  '[1,4,3,2,5,2]\\n3'\n *\n * Given a linked list and a value x, partition it such that all nodes less\n * than x come before nodes greater than or equal to x.\n *\n * You should preserve the original relative order of the nodes in each of the\n * two partitions.\n *\n * Example:\n *\n *\n * Input: head = 1->4->3->2->5->2, x = 3\n * Output: 1->2->2->4->3->5\n *\n *\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} x\n * @return {ListNode}\n */\nvar partition = function (head, x) {\n  const dummyHead1 = {\n    next: null,\n  };\n  const dummyHead2 = {\n    next: null,\n  };\n\n  let current = {\n    next: head,\n  };\n  let currentL1 = dummyHead1;\n  let currentL2 = dummyHead2;\n  while (current.next) {\n    current = current.next;\n    if (current.val < x) {\n      currentL1.next = current;\n      currentL1 = current;\n    } else {\n      currentL2.next = current;\n      currentL2 = current;\n    }\n  }\n\n  currentL2.next = null;\n\n  currentL1.next = dummyHead2.next;\n\n  return dummyHead1.next;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def partition(self, head: ListNode, x: int) -> ListNode:\n        \"\"\"在原链表操作，思路基本一致，只是通过指针进行区分而已\"\"\"\n        # 在链表最前面设定一个初始node作为锚点，方便返回最后的结果\n        first_node = ListNode(0)\n        first_node.next = head\n        # 设计三个指针，一个指向小于x的最后一个节点，即前后分离点\n        # 一个指向当前遍历节点的前一个节点\n        # 一个指向当前遍历的节点\n        sep_node = first_node\n        pre_node = first_node\n        current_node = head\n\n        while current_node is not None:\n            if current_node.val < x:\n                # 注意有可能出现前一个节点就是分离节点的情况\n                if pre_node is sep_node:\n                    pre_node = current_node\n                    sep_node = current_node\n                    current_node = current_node.next\n                else:\n                    # 这段次序比较烧脑\n                    pre_node.next = current_node.next\n                    current_node.next = sep_node.next\n                    sep_node.next = current_node\n                    sep_node = current_node\n                    current_node = pre_node.next\n            else:\n                pre_node = current_node\n                current_node = pre_node.next\n\n        return first_node.next\n"
        }
    ]
},
"json":{
    "id": "1104",
    "name": "path-in-zigzag-labelled-binary-tree",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 二叉树\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "满二叉树的性质：1.最小值是`2**(level",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1)`，最大值是`2**level",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1`，其中level是树的深度。2.假如父节点的索引为i，那么左子节点就是2\\*i，右边子节点就是2\\*i+1。3.假如子节点的索引是i，那么父节点的索引就是i//2。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "先思考一般情况（不是之字形），然后通过观察找出规律",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1104.path-in-zigzag-labelled-binary-tree.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def pathInZigZagTree(self, label: int) -> List[int]:\n        level = 0\n        res = []\n        # for each level, ranged from 2 ** (level - 1) to 2 ** level - 1\n        while 2 ** level - 1 < label:\n            level += 1\n\n        while level > 0:\n            res.insert(0, label)\n            label = 2 ** (level - 1) + 2 ** level - 1 - label\n            label //= 2\n            level -= 1\n        return res\n"
        }
    ]
},
"json":{
    "id": "113",
    "name": "path-sum-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/113.path-sum-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=113 lang=javascript\n *\n * [113] Path Sum II\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\nfunction backtrack(root, sum, res, tempList) {\n  if (root === null) return;\n  if (root.left === null && root.right === null && sum === root.val)\n    return res.push([...tempList, root.val]);\n\n  tempList.push(root.val);\n  backtrack(root.left, sum - root.val, res, tempList);\n\n  backtrack(root.right, sum - root.val, res, tempList);\n  tempList.pop();\n}\n/**\n * @param {TreeNode} root\n * @param {number} sum\n * @return {number[][]}\n */\nvar pathSum = function(root, sum) {\n  if (root === null) return [];\n  const res = [];\n  backtrack(root, sum, res, []);\n  return res;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:\n        if not root:\n            return []\n        \n        result = []\n        \n        def trace_node(pre_list, left_sum, node):\n            new_list = pre_list.copy()\n            new_list.append(node.val)\n            if not node.left and not node.right:\n                # 这个判断可以和上面的合并，但分开写会快几毫秒，可以省去一些不必要的判断\n                if left_sum == node.val:\n                    result.append(new_list)\n            else:\n                if node.left:\n                    trace_node(new_list, left_sum-node.val, node.left)\n                if node.right:\n                    trace_node(new_list, left_sum-node.val, node.right)\n        \n        trace_node([], sum, root)\n        return result\n"
        }
    ]
},
"json":{
    "id": "437",
    "name": "path-sum-iii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- hashmap\n \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "通过hashmap，以时间换空间",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对于这种连续的元素求和问题，有一个共同的思路，可以参考[这道题目](./560.subarray",
            "link": null,
            "color": "blue"
        },
        {
            "text": "sum",
            "link": null,
            "color": "blue"
        },
        {
            "text": "equals",
            "link": null,
            "color": "blue"
        },
        {
            "text": "k.md)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/437.path-sum-iii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n// the number of the paths starting from self\nfunction helper(root, sum) {\n  if (root === null) return 0;\n  const l = helper(root.left, sum - root.val);\n  const r = helper(root.right, sum - root.val);\n\n  return l + r + (root.val === sum ? 1 : 0);\n}\n/**\n * @param {TreeNode} root\n * @param {number} sum\n * @return {number}\n */\nvar pathSum = function(root, sum) {\n// 空间复杂度O(n) 时间复杂度介于O(nlogn) 和 O(n^2)\n  // tag: dfs tree\n  if (root === null) return 0;\n  // the number of the paths starting from self\n  const self = helper(root, sum);\n  // we don't know the answer, so we just pass it down\n  const l = pathSum(root.left, sum);\n  // we don't know the answer, so we just pass it down\n  const r = pathSum(root.right, sum);\n\n  return self + l + r;\n};\n\n"
        },
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=437 lang=javascript\n *\n * [437] Path Sum III\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\nfunction helper(root, acc, target, hashmap) {\n  // see also : https://leetcode.com/problems/subarray-sum-equals-k/\n\n  if (root === null) return 0;\n  let count = 0;\n  acc += root.val;\n  if (acc === target) count++;\n  if (hashmap[acc - target] !== void 0) {\n    count += hashmap[acc - target];\n  }\n  if (hashmap[acc] === void 0) {\n    hashmap[acc] = 1;\n  } else {\n    hashmap[acc] += 1;\n  }\n  const res =\n    count +\n    helper(root.left, acc, target, hashmap) +\n    helper(root.right, acc, target, hashmap);\n\n    // 这里要注意别忘记了\n    hashmap[acc] = hashmap[acc] - 1;\n\n    return res;\n}\n\nvar pathSum = function(root, sum) {\n  // 时间复杂度和空间复杂度都是O(n)\n  const hashmap = {};\n  return helper(root, 0, sum, hashmap);\n};\n"
        }
    ]
},
"json":{
    "id": "279",
    "name": "perfect-squares",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 递归\n- 动态规划\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "如果用递归+缓存，缓存的设计很重要我的做法是key就是n，value是以n为起点，到达底端的深度。下次取出缓存的时候用当前的level+存的深度就是我们想要的level.",
            "link": null,
            "color": "blue"
        },
        {
            "text": "使用动态规划的核心点还是选和不选的问题```jsfor(leti=1;i<=n;i++){for(letj=1;j*j<=i;j++){//不选（dp[i]）还是选（dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "j*j]）dp[i]=Math.min(dp[i],dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "j*j]+1);}}```",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/279.perfect-squares.md",
    "code": [
        {
            "language": "js",
            "text": "\nconst mapper = {};\n\nfunction d(n, level) {\n  if (n === 0) return level;\n\n  let i = 1;\n  const arr = [];\n\n  while (n - i * i >= 0) {\n    const hit = mapper[n - i * i];\n    if (hit) {\n      arr.push(hit + level);\n    } else {\n      const depth = d(n - i * i, level + 1) - level;\n      mapper[n - i * i] = depth;\n      arr.push(depth + level);\n    }\n    i++;\n  }\n\n  return Math.min(...arr);\n}\n/**\n * @param {number} n\n * @return {number}\n */\nvar numSquares = function(n) {\n  return d(n, 0);\n};\n"
        },
        {
            "language": "js",
            "text": "\nfor (let i = 1; i <= n; i++) {\n  for (let j = 1; j * j <= i; j++) {\n    // 不选（dp[i]） 还是  选（dp[i - j * j]）\n    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);\n  }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=279 lang=javascript\n *\n * [279] Perfect Squares\n *\n * https://leetcode.com/problems/perfect-squares/description/\n *\n * algorithms\n * Medium (40.98%)\n * Total Accepted:    168.2K\n * Total Submissions: 408.5K\n * Testcase Example:  '12'\n *\n * Given a positive integer n, find the least number of perfect square numbers\n * (for example, 1, 4, 9, 16, ...) which sum to n.\n *\n * Example 1:\n *\n *\n * Input: n = 12\n * Output: 3\n * Explanation: 12 = 4 + 4 + 4.\n *\n * Example 2:\n *\n *\n * Input: n = 13\n * Output: 2\n * Explanation: 13 = 4 + 9.\n */\n/**\n * @param {number} n\n * @return {number}\n */\nvar numSquares = function(n) {\n  if (n <= 0) {\n    return 0;\n  }\n\n  const dp = Array(n + 1).fill(Number.MAX_VALUE);\n  dp[0] = 0;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 1; j * j <= i; j++) {\n      // 不选（dp[i]） 还是  选（dp[i - j * j]）\n      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);\n    }\n  }\n\n  return dp[n];\n};\n"
        }
    ]
},
"json":{
    "id": "60",
    "name": "permutation-sequence",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数学\n- 回溯\n- factorial\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "找规律",
            "link": null,
            "color": "blue"
        },
        {
            "text": "排列组合",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/60.permutation-sequence.md",
    "code": [
        {
            "language": "py",
            "text": "\nimport math\n\nclass Solution:\n    def getPermutation(self, n: int, k: int) -> str:\n        res = \"\"\n        candidates = [str(i) for i in range(1, n + 1)]\n\n        while n != 0:\n            facto = math.factorial(n - 1)\n            # i 表示前面被我们排除的组数，也就是k所在的组的下标\n            # k // facto 是不行的， 比如在 k % facto == 0的情况下就会有问题\n            i = math.ceil(k / facto) - 1\n            # 我们把candidates[i]加入到结果集，然后将其弹出candidates（不能重复使用元素）\n            res += candidates[i]\n            candidates.pop(i)\n            # k 缩小了 facto *  i\n            k -= facto * i\n            # 每次迭代我们实际上就处理了一个元素，n 减去 1，当n == 0 说明全部处理完成，我们退出循环\n            n -= 1\n        return res\n"
        }
    ]
},
"json":{
    "id": "47",
    "name": "permutations-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/47.permutations-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=47 lang=javascript\n *\n * [47] Permutations II\n *\n * https://leetcode.com/problems/permutations-ii/description/\n *\n * algorithms\n * Medium (39.29%)\n * Total Accepted:    234.1K\n * Total Submissions: 586.2K\n * Testcase Example:  '[1,1,2]'\n *\n * Given a collection of numbers that might contain duplicates, return all\n * possible unique permutations.\n *\n * Example:\n *\n *\n * Input: [1,1,2]\n * Output:\n * [\n * ⁠ [1,1,2],\n * ⁠ [1,2,1],\n * ⁠ [2,1,1]\n * ]\n *\n *\n */\nfunction backtrack(list, nums, tempList, visited) {\n  if (tempList.length === nums.length) return list.push([...tempList]);\n  for (let i = 0; i < nums.length; i++) {\n    // 和46.permutations的区别是这道题的nums是可以重复的\n    // 我们需要过滤这种情况\n    if (visited[i]) continue; // 不能用tempList.includes(nums[i])了，因为有重复\n    // visited[i - 1] 这个判断容易忽略\n    if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) continue;\n\n    visited[i] = true;\n    tempList.push(nums[i]);\n    backtrack(list, nums, tempList, visited);\n    visited[i] = false;\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar permuteUnique = function (nums) {\n  const list = [];\n  backtrack(\n    list,\n    nums.sort((a, b) => a - b),\n    [],\n    []\n  );\n  return list;\n};\n"
        }
    ]
},
"json":{
    "id": "46",
    "name": "permutations",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回溯法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/46.permutations.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=46 lang=javascript\n *\n * [46] Permutations\n *\n * https://leetcode.com/problems/permutations/description/\n *\n * algorithms\n * Medium (53.60%)\n * Total Accepted:    344.6K\n * Total Submissions: 642.9K\n * Testcase Example:  '[1,2,3]'\n *\n * Given a collection of distinct integers, return all possible permutations.\n *\n * Example:\n *\n *\n * Input: [1,2,3]\n * Output:\n * [\n * ⁠ [1,2,3],\n * ⁠ [1,3,2],\n * ⁠ [2,1,3],\n * ⁠ [2,3,1],\n * ⁠ [3,1,2],\n * ⁠ [3,2,1]\n * ]\n *\n *\n */\nfunction backtrack(list, tempList, nums) {\n  if (tempList.length === nums.length) return list.push([...tempList]);\n  for (let i = 0; i < nums.length; i++) {\n    if (tempList.includes(nums[i])) continue;\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums);\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar permute = function (nums) {\n  const list = [];\n  backtrack(list, [], nums);\n  return list;\n};\n"
        }
    ]
},
"json":{
    "id": "50",
    "name": "pow-x-n",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 递归\n- 位运算\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "超时分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "hashtable",
            "link": null,
            "color": "blue"
        },
        {
            "text": "数学分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "二进制转十进制",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/50.pow-x-n.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n == 0:\n            return 1\n        if n < 0:\n            return 1 / self.myPow(x, -n)\n        res = 1\n        for _ in range(n):\n            res *= x\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n == 0:\n            return 1\n        if n == 1:\n            return x\n        if n < 0:\n            return 1 / self.myPow(x, -n)\n        return self.myPow(x, n // 2) * self.myPow(x, n - n // 2)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n == 0:\n            return 1\n        if n == 1:\n            return x\n        if n < 0:\n            return 1 / self.myPow(x, -n)\n        return self.myPow(x _ x, n // 2) if n % 2 == 0 else x _ self.myPow(x, n - 1)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n < 0:\n            return 1 / self.myPow(x, -n)\n        res = 1\n        while n:\n            if n & 1 == 1:\n                res *= x\n            x *= x\n            n >>= 1\n        return res\n"
        }
    ]
},
"json":{
    "id": "342",
    "name": "power-of-four",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数论\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数论",
            "link": null,
            "color": "blue"
        },
        {
            "text": "2的幂次方特点（数学性质以及二进制表示）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "4的幂次方特点（数学性质以及二进制表示）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/342.power-of-four.md",
    "code": [
        {
            "language": "js",
            "text": "\nwhile (num && num % 4 == 0) {\n  num /= 4;\n}\nreturn num == 1;\n"
        },
        {
            "language": "js",
            "text": "\nreturn num > 0 && (num & (num - 1)) === 0 && (num - 1) % 3 === 0;\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=342 lang=javascript\n *\n * [342] Power of Four\n */\n/**\n * @param {number} num\n * @return {boolean}\n */\nvar isPowerOfFour = function(num) {\n  // tag: 数论\n\n  if (num === 1) return true;\n  if (num < 4) return false;\n\n  if ((num & (num - 1)) !== 0) return false;\n\n  return (num & 0x55555555) === num;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def isPowerOfFour(self, num: int) -> bool:\n        if num == 1:\n            return True\n        elif num < 4:\n            return False\n        else:\n            if not num & (num-1) == 0:\n                return False\n            else:\n                return num & 0x55555555 == num\n\n    # 另一种解法：将数字转化为二进制表示的字符串，利用字符串的相关操作进行判断\n    def isPowerOfFour(self, num: int) -> bool:\n        binary_num = bin(num)[2:]\n        return binary_num.strip('0') == '1' and len(binary_num) % 2 == 1\n"
        }
    ]
},
"json":{
    "id": "238",
    "name": "product-of-array-except-self",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "两次遍历，一次正向，一次反向。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "维护一个数组，第i项代表前i个元素（不包括i）的乘积",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/238.product-of-array-except-self.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar productExceptSelf = function(nums) {\n  const ret = [];\n\n  for (let i = 0, temp = 1; i < nums.length; i++) {\n    ret[i] = temp;\n    temp *= nums[i];\n  }\n  // 此时ret[i]存放的是前i个元素相乘的结果(不包含第i个)\n\n  // 如果没有上面的循环的话，\n  // ret经过下面的循环会变成ret[i]存放的是后i个元素相乘的结果(不包含第i个)\n\n  // 我们的目标是ret[i]存放的所有数字相乘的结果(不包含第i个)\n\n  // 因此我们只需要对于上述的循环产生的ret[i]基础上运算即可\n  for (let i = nums.length - 1, temp = 1; i >= 0; i--) {\n    ret[i] *= temp;\n    temp *= nums[i];\n  }\n  return ret;\n};\n"
        }
    ]
},
"json":{
    "id": "80",
    "name": "remove-duplicates-from-sorted-array-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "快慢指针",
            "link": null,
            "color": "blue"
        },
        {
            "text": "读写指针",
            "link": null,
            "color": "blue"
        },
        {
            "text": "删除排序问题",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/80.remove-duplicates-from-sorted-array-ii.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        # 写指针\n        i = 0\n        K = 2\n        for num in nums:\n            if i < K or num != nums[i-K]:\n                nums[i] = num\n                i += 1\n        return i\n"
        }
    ]
},
"json":{
    "id": "26",
    "name": "remove-duplicates-from-sorted-array",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "双指针这道题如果不要求，O(n)的时间复杂度，O(1)的空间复杂度的话，会很简单。但是这道题是要求的，这种题的思路一般都是采用双指针",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果是数据是无序的，就不可以用这种方式了，从这里也可以看出排序在算法中的基础性和重要性。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "注意nums为空时的边界条件。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/26.remove-duplicates-from-sorted-array.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar removeDuplicates = function(nums) {\n    const size = nums.length;\n    if(size==0) return 0;\n    let slowP = 0;\n    for (let fastP = 0; fastP < size; fastP++) {\n        if (nums[fastP] !== nums[slowP]) {\n            slowP++;\n            nums[slowP] = nums[fastP]\n        }\n    }\n    return slowP + 1;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        if(nums.empty()) return 0;\n        int fast,slow;\n        fast=slow=0;\n        while(fast!=nums.size()){\n            if(nums[fast]==nums[slow]) fast++;\n            else {\n                slow++;\n                nums[slow]=nums[fast];\n                fast++;\n            }\n        }\n        return slow+1;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        if nums:\n            slow = 0\n            for fast in range(1, len(nums)):\n                if nums[fast] != nums[slow]:\n                    slow += 1\n                    nums[slow] = nums[fast]\n            return slow + 1\n        else:\n            return 0\n"
        }
    ]
},
"json":{
    "id": "301",
    "name": "remove-invalid-parentheses",
    "company": [],
    "pre": [
        {
            "text": "\n\n- BFS\n- 队列\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "广度优先遍历",
            "link": null,
            "color": "blue"
        },
        {
            "text": "使用队列简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "使用一个visited的mapper，来避免遍历同样的字符串",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/301.remove-invalid-parentheses.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=301 lang=javascript\n *\n * [301] Remove Invalid Parentheses\n *\n * https://leetcode.com/problems/remove-invalid-parentheses/description/\n *\n * algorithms\n * Hard (38.52%)\n * Total Accepted:    114.3K\n * Total Submissions: 295.4K\n * Testcase Example:  '\"()())()\"'\n *\n * Remove the minimum number of invalid parentheses in order to make the input\n * string valid. Return all possible results.\n *\n * Note: The input string may contain letters other than the parentheses ( and\n * ).\n *\n * Example 1:\n *\n *\n * Input: \"()())()\"\n * Output: [\"()()()\", \"(())()\"]\n *\n *\n * Example 2:\n *\n *\n * Input: \"(a)())()\"\n * Output: [\"(a)()()\", \"(a())()\"]\n *\n *\n * Example 3:\n *\n *\n * Input: \")(\"\n * Output: [\"\"]\n *\n */\nvar isValid = function(s) {\n  let openParenthes = 0;\n  for(let i = 0; i < s.length; i++) {\n    if (s[i] === '(') {\n      openParenthes++;\n    } else if (s[i] === ')') {\n      if (openParenthes === 0) return false;\n      openParenthes--;\n    }\n  }\n  return openParenthes === 0;\n};\n/**\n * @param {string} s\n * @return {string[]}\n */\nvar removeInvalidParentheses = function(s) {\n  if (!s || s.length === 0) return [\"\"];\n  const ret = [];\n  const queue = [s];\n  const visited = {};\n  let current = null;\n  let removedParentheses = 0; // 只记录最小改动\n\n  while ((current = queue.shift())) {\n    let hit = isValid(current);\n    if (hit) {\n      if (!removedParentheses) {\n       removedParentheses =  s.length - current.length\n      }\n      if (s.length - current.length > removedParentheses) return ret.length === 0 ? [\"\"] : ret;;\n      ret.unshift(current);\n      continue;\n    }\n    for (let i = 0; i < current.length; i++) {\n      if (current[i] !== ')' && current[i] !== '(') continue;\n      const subString = current.slice(0, i).concat(current.slice(i + 1));\n      if (visited[subString]) continue;\n      visited[subString] = true;\n      queue.push(subString);\n    }\n  }\n\n  return ret.length === 0 ? [\"\"] : ret;\n};\n"
        }
    ]
},
"json":{
    "id": "203",
    "name": "remove-linked-list-elements",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "链表的基本操作（删除指定节点）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "虚拟节点dummy简化操作>其实设置dummy节点就是为了处理特殊位置（头节点），这这道题就是如果头节点是给定的需要删除的节点呢？为了保证代码逻辑的一致性，即不需要为头节点特殊定制逻辑，才采用的虚拟节点。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果连续两个节点都是要删除的节点，这个情况容易被忽略。eg:```js//只有下个节点不是要删除的节点才更新currentif(!next||next.val!==val){current=next;}```",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/203.remove-linked-list-elements.md",
    "code": [
        {
            "language": "js",
            "text": "\n// 只有下个节点不是要删除的节点才更新 current\nif (!next || next.val !== val) {\n    current =  next;\n}\n\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {ListNode} head\n * @param {number} val\n * @return {ListNode}\n */\nvar removeElements = function(head, val) {\n    const dummy = {\n        next: head\n    }\n    let current = dummy;\n\n    while(current && current.next) {\n        let next = current.next;\n        if (next.val === val) {\n            current.next = next.next;\n            next = next.next;\n        }\n\n        if (!next || next.val !== val) {\n            current =  next;\n        }\n    }\n\n    return dummy.next;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def removeElements(self, head: ListNode, val: int) -> ListNode:\n        prev = ListNode(0)\n        prev.next = head\n        cur = prev\n        while cur.next:\n            if cur.next.val == val:\n                cur.next = cur.next.next\n            else:\n                cur = cur.next\n        return prev.next\n"
        }
    ]
},
"json":{
    "id": "1332",
    "name": "remove-palindromic-subsequences",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回文\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1332.remove-palindromic-subsequences.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def removePalindromeSub(self, s: str) -> int:\n        if s == '':\n            return 0\n        def isPalindrome(s):\n            l = 0\n            r = len(s) - 1\n            while l < r:\n                if s[l] != s[r]:\n                    return False\n                l += 1\n                r -= 1\n            return True\n        return 1 if isPalindrome(s) else 2\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def removePalindromeSub(self, s: str) -> int:\n        if s == '':\n            return 0\n        return 1 if s == s[::-1] else 2\n\n"
        }
    ]
},
"json":{
    "id": "19",
    "name": "removeNthNodeFromEndofList",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.链表这种数据结构的特点和使用2.使用双指针3.使用一个dummyHead简化操作",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/19.removeNthNodeFromEndofList.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        TreeNode dummy = new TreeNode(0);\n        dummy.next = head;\n        TreeNode first = dummy;\n        TreeNode second = dummy;\n\n        if (int i=0; i<=n; i++) {\n            first = first.next;\n        }\n\n        while (first != null) {\n            first = first.next;\n            second = second.next;\n        }\n\n        second.next = second.next.next;\n\n        return dummy.next;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=19 lang=javascript\n *\n * [19] Remove Nth Node From End of List\n *\n * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/\n *\n * algorithms\n * Medium (34.03%)\n * Total Accepted:    360.1K\n * Total Submissions: 1.1M\n * Testcase Example:  '[1,2,3,4,5]\\n2'\n *\n * Given a linked list, remove the n-th node from the end of list and return\n * its head.\n *\n * Example:\n *\n *\n * Given linked list: 1->2->3->4->5, and n = 2.\n *\n * After removing the second node from the end, the linked list becomes\n * 1->2->3->5.\n *\n *\n * Note:\n *\n * Given n will always be valid.\n *\n * Follow up:\n *\n * Could you do this in one pass?\n *\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} n\n * @return {ListNode}\n */\nvar removeNthFromEnd = function (head, n) {\n  let i = -1;\n  const noop = {\n    next: null,\n  };\n\n  const dummyHead = new ListNode(); // 增加一个dummyHead 简化操作\n  dummyHead.next = head;\n\n  let currentP1 = dummyHead;\n  let currentP2 = dummyHead;\n\n  while (currentP1) {\n    if (i === n) {\n      currentP2 = currentP2.next;\n    }\n\n    if (i !== n) {\n      i++;\n    }\n\n    currentP1 = currentP1.next;\n  }\n\n  currentP2.next = ((currentP2 || noop).next || noop).next;\n\n  return dummyHead.next;\n};\n"
        }
    ]
},
"json":{
    "id": "190",
    "name": "reverse-bits",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 双指针\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.可以用任何数字和1进行位运算的结果都取决于该数字最后一位的特性简化操作和提高性能eg:",
            "link": null,
            "color": "blue"
        },
        {
            "text": "n&1===1,说明n的最后一位是1",
            "link": null,
            "color": "blue"
        },
        {
            "text": "n&1===0,说明n的最后一位是02.对于JS，ES规范在之前很多版本都是没有无符号整形的，转化为无符号，可以用一个trick`n>>>0`3.双\"指针\"模型4.bit运算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/190.reverse-bits.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=190 lang=javascript\n *\n * [190] Reverse Bits\n *\n * https://leetcode.com/problems/reverse-bits/description/\n *\n * algorithms\n * Easy (30.30%)\n * Total Accepted:    173.7K\n * Total Submissions: 568.2K\n * Testcase Example:  '00000010100101000001111010011100'\n *\n * Reverse bits of a given 32 bits unsigned integer.\n *\n *\n *\n * Example 1:\n *\n *\n * Input: 00000010100101000001111010011100\n * Output: 00111001011110000010100101000000\n * Explanation: The input binary string 00000010100101000001111010011100\n * represents the unsigned integer 43261596, so return 964176192 which its\n * binary representation is 00111001011110000010100101000000.\n *\n *\n * Example 2:\n *\n *\n * Input: 11111111111111111111111111111101\n * Output: 10111111111111111111111111111111\n * Explanation: The input binary string 11111111111111111111111111111101\n * represents the unsigned integer 4294967293, so return 3221225471 which its\n * binary representation is 10101111110010110010011101101001.\n *\n *\n *\n * Note:\n *\n *\n * Note that in some languages such as Java, there is no unsigned integer type.\n * In this case, both input and output will be given as signed integer type and\n * should not affect your implementation, as the internal binary representation\n * of the integer is the same whether it is signed or unsigned.\n * In Java, the compiler represents the signed integers using 2's complement\n * notation. Therefore, in Example 2 above the input represents the signed\n * integer -3 and the output represents the signed integer -1073741825.\n *\n *\n *\n *\n * Follow up:\n *\n * If this function is called many times, how would you optimize it?\n *\n */\n/**\n * @param {number} n - a positive integer\n * @return {number} - a positive integer\n */\nvar reverseBits = function(n) {\n  let res = 0;\n  for (let i = 0; i < 32; i++) {\n    res = (res << 1) + (n & 1);\n    n = n >>> 1;\n  }\n\n  return res >>> 0;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    # @param n, an integer\n    # @return an integer\n    def reverseBits(self, n):\n        result = 0\n        for i in range(32):\n            result = (result << 1) + (n & 1)\n            n >>= 1\n        return result\n"
        }
    ]
},
"json":{
    "id": "92",
    "name": "reverse-linked-list-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "链表的基本操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "考虑特殊情况m是1或者n是链表长度的情况，我们可以采用虚拟节点dummy简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "用四个变量记录特殊节点，然后操作这四个节点使之按照一定方式连接即可。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "注意更新current和pre的位置，否则有可能出现溢出",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/92.reverse-linked-list-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=92 lang=javascript\n *\n * [92] Reverse Linked List II\n *\n * https://leetcode.com/problems/reverse-linked-list-ii/description/\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} m\n * @param {number} n\n * @return {ListNode}\n */\nvar reverseBetween = function (head, m, n) {\n  // 虚拟节点，简化操作\n  const dummyHead = {\n    next: head,\n  };\n\n  let cur = dummyHead.next; // 当前遍历的节点\n  let pre = cur; // 因为要反转，因此我们需要记住前一个节点\n  let index = 0; // 链表索引，用来判断是否是特殊位置（头尾位置）\n\n  // 上面提到的四个特殊节点\n  let p1 = (p2 = p3 = p4 = null);\n\n  while (cur) {\n    const next = cur.next;\n    index++;\n\n    // 对 (m - n) 范围内的节点进行反转\n    if (index > m && index <= n) {\n      cur.next = pre;\n    }\n\n    // 下面四个if都是边界, 用于更新四个特殊节点的值\n    if (index === m - 1) {\n      p1 = cur;\n    }\n    if (index === m) {\n      p2 = cur;\n    }\n\n    if (index === n) {\n      p3 = cur;\n    }\n\n    if (index === n + 1) {\n      p4 = cur;\n    }\n\n    pre = cur;\n\n    cur = next;\n  }\n\n  // 两个链表合并起来\n  (p1 || dummyHead).next = p3; // 特殊情况需要考虑\n  p2.next = p4;\n\n  return dummyHead.next;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* reverseBetween(ListNode* head, int s, int e) {\n        if (s == e) return head;\n        ListNode* prev = nullptr;\n        auto cur = head;\n        for (int i = 1; i < s; ++i) {\n            prev = cur;\n            cur = cur->next;\n        }\n        // 此时各指针指向：\n        // x -> x -> x -> x  -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> x -> x -> x ->\n        // ^head          ^prev ^cur\n        ListNode* p = nullptr;\n        auto c = cur;\n        auto tail = c;\n        ListNode* n = nullptr;\n        for (int i = s; i <= e; ++i) {\n            n = c->next;\n            c->next = p;\n            p = c;\n            c = n;\n        }\n        // 此时各指针指向：\n        // x -> x -> x -> x     8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1     x -> x -> x ->\n        // ^head          ^prev ^p                                 ^cur  ^c\n        //                                                         ^tail\n        if (prev != nullptr) { // 若指向前一个节点的指针不为空，则说明s在链表中间（不是头节点）\n            prev->next = p;\n            cur->next = c;\n            return head;\n        } else {\n            if (tail != nullptr) tail->next = c;\n            return p;\n        }\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:\n        pre = None\n        cur = head\n        i = 0\n        p1 = p2 = p3 = p4 = None\n        # ...\n        if p1:\n            p1.next = p3\n        else:\n            dummy.next = p3\n        if p2:\n            p2.next = p4\n        return head\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n   def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:\n       pre = None\n       cur = head\n       i = 0\n       p1 = p2 = p3 = p4 = None\n       dummy = ListNode(0)\n       dummy.next = head\n\n       # ...\n\n       if p1:\n           p1.next = p3\n       else:\n           dummy.next = p3\n       if p2:\n           p2.next = p4\n\n       return dummy.next\n"
        },
        {
            "language": "py",
            "text": "\n    while cur:\n           i += 1\n           if i == m - 1:\n               p1 = cur\n           next = cur.next\n           if m < i <= n:\n               cur.next = pre\n\n           if i == m:\n               p2 = cur\n               p2.next = None\n\n           if i == n:\n               p3 = cur\n\n           if i == n + 1:\n               p4 = cur\n\n           pre = cur\n           cur = next\n"
        }
    ]
},
"json":{
    "id": "206",
    "name": "reverse-linked-list",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "链表的基本操作（交换）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "虚拟节点dummy简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "注意更新current和pre的位置，否则有可能出现溢出",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/206.reverse-linked-list.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode pre = null, cur = head;\n\n        while (cur != null) {\n            ListNode next = cur.next;\n            cur.next = pre;\n            pre = cur;\n            cur = next;\n        }\n\n        return pre;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar reverseList = function(head) {\n    if (!head || !head.next) return head;\n\n    let cur = head;\n    let pre = null;\n\n    while(cur) {\n        const next = cur.next;\n        cur.next = pre;\n        pre = cur;\n        cur = next;\n    }\n\n    return pre;\n};\n\n"
        },
        {
            "language": "js",
            "text": "\nvar reverseList = function(head) {\n  // 递归结束条件\n  if (head === null || head.next === null) {\n    return head\n  }\n\n  // 递归反转 子链表\n  let newReverseList = reverseList(head.next)\n  // 获取原来链表的第 2 个节点 newReverseListTail\n  let newReverseListTail = head.next\n  // 调整原来头结点和第 2 个节点的指向\n  newReverseListTail.next = head\n  head.next = null\n\n  // 将调整后的链表返回\n  return newReverseList\n}\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        ListNode* prev = NULL;\n        ListNode* cur = head;\n        ListNode* next = NULL;\n        while (cur != NULL) {\n            next = cur->next;\n            cur->next = prev;\n            prev = cur;\n            cur = next;\n        }\n        return prev;\n    }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n// 普通递归\nclass Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        ListNode* tail = nullptr;\n        return reverseRecursive(head, tail);\n    }\n\n    ListNode* reverseRecursive(ListNode *head, ListNode *&tail) {\n        if (head == nullptr) {\n            tail = nullptr;\n            return head;\n        }\n        if (head->next == nullptr) {\n            tail = head;\n            return head;\n        }\n        auto h = reverseRecursive(head->next, tail);\n        if (tail != nullptr) {\n            tail->next = head;\n            tail = head;\n            head->next = nullptr;\n        }\n        return h;\n    }\n};\n\n// （类似）尾递归\nclass Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        if (head == nullptr) return head;\n        return reverseRecursive(nullptr, head, head->next);\n    }\n\n    ListNode* reverseRecursive(ListNode *prev, ListNode *head, ListNode *next)\n    {\n        if (next == nullptr) return head;\n        auto n = next->next;\n        next->next = head;\n        head->next = prev;\n        return reverseRecursive(head, next, n);\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def reverseList(self, head: ListNode) -> ListNode:\n        if not head: return None\n        prev = None\n        cur = head\n        while cur:\n            cur.next, prev, cur = prev, cur, cur.next\n        return prev\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def reverseList(self, head: ListNode) -> ListNode:\n        if not head or not head.next: return head\n        ans = self.reverseList(head.next)\n        head.next.next = head\n        head.next = None\n        return ans\n"
        }
    ]
},
"json":{
    "id": "25",
    "name": "reverse-nodes-in-k-groups-cn",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.创建一个dummynode2.对链表以k为单位进行分组，记录每一组的起始和最后节点位置3.对每一组进行翻转，更换起始和最后的位置4.返回`dummy.next`.",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/25.reverse-nodes-in-k-groups-cn.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass ReverseKGroupsLinkedList {\n  public ListNode reverseKGroup(ListNode head, int k) {\n      if (head == null || k == 1) {\n        return head;\n      }\n      ListNode dummy = new ListNode(0);\n      dummy.next = head;\n\n      ListNode start = dummy;\n      ListNode end = head;\n      int count = 0;\n      while (end != null) {\n        count++;\n        // group\n        if (count % k == 0) {\n          // reverse linked list (start, end]\n          start = reverse(start, end.next);\n          end = start.next;\n        } else {\n          end = end.next;\n        }\n      }\n      return dummy.next;\n    }\n\n    /**\n     * reverse linked list from range (start, end), return last node.\n     * for example:\n     * 0->1->2->3->4->5->6->7->8\n     * |           |\n     * start       end\n     *\n     * After call start = reverse(start, end)\n     *\n     * 0->3->2->1->4->5->6->7->8\n     *          |  |\n     *       start end\n     *       first\n     *\n     */\n    private ListNode reverse(ListNode start, ListNode end) {\n      ListNode curr = start.next;\n      ListNode prev = start;\n      ListNode first = curr;\n      while (curr != end){\n        ListNode temp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = temp;\n      }\n      start.next = prev;\n      first.next = curr;\n      return first;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {ListNode} head\n * @param {number} k\n * @return {ListNode}\n */\nvar reverseKGroup = function(head, k) {\n  // 标兵\n  let dummy = new ListNode()\n  dummy.next = head\n  let [start, end] = [dummy, dummy.next]\n  let count = 0\n  while(end) {\n    count++\n    if (count % k === 0) {\n      start = reverseList(start, end.next)\n      end = start.next\n    } else {\n      end = end.next\n    }\n  }\n  return dummy.next\n\n  // 翻转stat -> end的链表\n  function reverseList(start, end) {\n    let [pre, cur] = [start, start.next]\n    const first = cur\n    while(cur !== end) {\n      let next = cur.next\n      cur.next = pre\n      pre = cur\n      cur = next\n    }\n    start.next = pre\n    first.next = cur\n    return first\n  }\n};\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:\n        if head is None or k < 2:\n            return head\n        dummy = ListNode(0)\n        dummy.next = head\n        start = dummy\n        end = head\n        count = 0\n        while end:\n            count += 1\n            if count % k == 0:\n                start = self.reverse(start, end.next)\n                end = start.next\n            else:\n                end = end.next\n        return dummy.next\n\n    def reverse(self, start, end):\n        prev, curr = start, start.next\n        first = curr\n        while curr != end:\n            temp = curr.next\n            curr.next = prev\n            prev = curr\n            curr = temp\n        start.next = prev\n        first.next = curr\n        return first\n"
        }
    ]
},
"json":{
    "id": "25",
    "name": "reverse-nodes-in-k-groups-en",
    "company": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/25.reverse-nodes-in-k-groups-en.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass ReverseKGroupsLinkedList {\n  public ListNode reverseKGroup(ListNode head, int k) {\n      if (head == null || k == 1) {\n        return head;\n      }\n      ListNode dummy = new ListNode(0);\n      dummy.next = head;\n  \n      ListNode start = dummy;\n      ListNode end = head;\n      int count = 0;\n      while (end != null) {\n        count++;\n        // group\n        if (count % k == 0) {\n          // reverse linked list (start, end]\n          start = reverse(start, end.next);\n          end = start.next;\n        } else {\n          end = end.next;\n        }\n      }\n      return dummy.next;\n    }\n  \n     /** \n     * reverse linked list from range (start, end), return last node.\n     * for example: \n     * 0->1->2->3->4->5->6->7->8\n     * |           |\n     * start       end\n     * \n     * After call start = reverse(start, end)\n     * \n     * 0->3->2->1->4->5->6->7->8\n     *          |  |\n     *       start end\n     *       \n     * @return the reversed list's 'start' node, which is the precedence of node end\n     */\n    private ListNode reverse(ListNode start, ListNode end) {\n      ListNode curr = start.next;\n      ListNode prev = start;\n      ListNode first = curr;\n      while (curr != end){\n        ListNode temp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = temp;\n      }\n      start.next = prev;\n      first.next = curr;\n      return first;\n    }\n}\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:\n        if head is None or k < 2:\n            return head\n        dummy = ListNode(0)\n        dummy.next = head\n        start = dummy\n        end = head\n        count = 0\n        while end:\n            count += 1\n            if count % k == 0:\n                start = self.reverse(start, end.next)\n                end = start.next\n            else:\n                end = end.next\n        return dummy.next\n    \n    def reverse(self, start, end):\n        prev, curr = start, start.next\n        first = curr\n        while curr != end:\n            temp = curr.next\n            curr.next = prev\n            prev = curr\n            curr = temp\n        start.next = prev\n        first.next = curr\n        return first\n"
        }
    ]
},
"json":{
    "id": "493",
    "name": "reverse-pairs",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 归并排序\n- 逆序数\n- 分治\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "归并排序",
            "link": null,
            "color": "blue"
        },
        {
            "text": "逆序数",
            "link": null,
            "color": "blue"
        },
        {
            "text": "分治",
            "link": null,
            "color": "blue"
        },
        {
            "text": "识别考点，其他非重点可以使用语言内置方法",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/493.reverse-pairs.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    def reversePairs(self, nums):\n        n = len(nums)\n        cnt = 0\n        for i in range(n):\n            for j in range(i + 1, n):\n                if nums[i] > 2 * nums[j]:\n                    cnt += 1\n        return cnt\n"
        },
        {
            "language": "py",
            "text": "\nl = r = 0\nwhile l < len(left) and r < len(right):\n    if left[l] <= 2 * right[r]:\n        l += 1\n    else:\n        self.cnt += len(left) - l\n        r += 1\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    def reversePairs(self, nums):\n        self.cnt = 0\n\n        def mergeSort(lst):\n            L = len(lst)\n            if L <= 1:\n                return lst\n            return mergeTwo(mergeSort(lst[:L//2]), mergeSort(lst[L//2:]))\n\n        def mergeTwo(left, right):\n            l = r = 0\n            while l < len(left) and r < len(right):\n                if left[l] <= 2 * right[r]:\n                    l += 1\n                else:\n                    self.cnt += len(left) - l\n                    r += 1\n            return sorted(left+right)\n\n        mergeSort(nums)\n        return self.cnt\n\n"
        }
    ]
},
"json":{
    "id": "900",
    "name": "rle-iterator",
    "company": [],
    "pre": [
        {
            "text": "\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/900.rle-iterator.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} A\n */\nvar RLEIterator = function(A) {\n    this.A = A;\n    this.current = 0;\n};\n\n\n/** \n * @param {number} n\n * @return {number}\n */\nRLEIterator.prototype.next = function(n) {\n    const A = this.A;\n    while(this.current < A.length && A[this.current] < n){\n        n = n - A[this.current];\n        this.current += 2;\n    }\n    \n    if(this.current >= A.length){\n        return -1;\n    }\n    \n    A[this.current] = A[this.current] - n; // 更新Count\n    return A[this.current + 1]; // 返回element\n};\n\n/** \n * Your RLEIterator object will be instantiated and called as such:\n * var obj = new RLEIterator(A)\n * var param_1 = obj.next(n)\n */\n"
        }
    ]
},
"json":{
    "id": "48",
    "name": "rotate-image",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 原地算法\n- 矩阵\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "矩阵旋转操作",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/48.rotate-image.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar rotate = function (matrix) {\n  // 时间复杂度O(n^2) 空间复杂度O(n)\n  const oMatrix = JSON.parse(JSON.stringify(matrix)); // clone\n  const n = oMatrix.length;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) {\n      matrix[j][n - i - 1] = oMatrix[i][j];\n    }\n  }\n};\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=48 lang=javascript\n *\n * [48] Rotate Image\n */\n/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar rotate = function (matrix) {\n  // 时间复杂度O(n^2) 空间复杂度O(1)\n\n  // 做法： 先沿着对角线翻转，然后沿着水平线翻转\n  const n = matrix.length;\n  function swap(arr, [i, j], [m, n]) {\n    const temp = arr[i][j];\n    arr[i][j] = arr[m][n];\n    arr[m][n] = temp;\n  }\n  for (let i = 0; i < n - 1; i++) {\n    for (let j = 0; j < n - i; j++) {\n      swap(matrix, [i, j], [n - j - 1, n - i - 1]);\n    }\n  }\n\n  for (let i = 0; i < n / 2; i++) {\n    for (let j = 0; j < n; j++) {\n      swap(matrix, [i, j], [n - i - 1, j]);\n    }\n  }\n};\n"
        }
    ]
},
"json":{
    "id": "240",
    "name": "search-a-2-d-matrix-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "从角落开始遍历，利用递增的特性简化时间复杂度",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/240.search-a-2-d-matrix-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n/*\n * @lc app=leetcode id=240 lang=javascript\n *\n * [240] Search a 2D Matrix II\n *\n * https://leetcode.com/problems/search-a-2d-matrix-ii/description/\n *\n * \n */\n/**\n * @param {number[][]} matrix\n * @param {number} target\n * @return {boolean}\n */\nvar searchMatrix = function(matrix, target) {\n    if (!matrix || matrix.length === 0) return 0;\n\n    let colIndex = 0;\n    let rowIndex = matrix.length - 1;\n    while(rowIndex > 0 && target < matrix[rowIndex][colIndex]) {\n        rowIndex --;\n    }\n\n    while(colIndex < matrix[0].length) {\n        if (target === matrix[rowIndex][colIndex]) return true;\n        if (target > matrix[rowIndex][colIndex]) {\n            colIndex ++;\n        } else if (rowIndex > 0){\n            rowIndex --;\n        } else {\n            return false;\n        }\n    }\n\n    return  false;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def searchMatrix(self, matrix, target):\n        m = len(matrix)\n        if m == 0:\n            return False\n        n = len(matrix[0])\n        i = m - 1\n        j = 0\n\n        while i >= 0 and j < n:\n            if matrix[i][j] == target:\n                return True\n            if matrix[i][j] > target:\n                i -= 1\n            else:\n                j += 1\n        return False\n"
        }
    ]
},
"json":{
    "id": "33",
    "name": "search-in-rotated-sorted-array",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 二分法\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二分法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "找出有序区间，然后根据target是否在有序区间舍弃一半元素",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/33.search-in-rotated-sorted-array.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=33 lang=javascript\n *\n * [33] Search in Rotated Sorted Array\n */\n/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar search = function(nums, target) {\n  // 时间复杂度：O(logn)\n  // 空间复杂度：O(1)\n  // [6,7,8,1,2,3,4,5]\n  let start = 0;\n  let end = nums.length - 1;\n\n  while (start <= end) {\n    const mid = start + ((end - start) >> 1);\n    if (nums[mid] === target) return mid;\n\n    // [start, mid]有序\n\n    // ️⚠️注意这里的等号\n    if (nums[mid] >= nums[start]) {\n      //target 在 [start, mid] 之间\n\n      // 其实target不可能等于nums[mid]， 但是为了对称，我还是加上了等号\n      if (target >= nums[start] && target <= nums[mid]) {\n        end = mid - 1;\n      } else {\n        //target 不在 [start, mid] 之间\n        start = mid + 1;\n      }\n    } else {\n      // [mid, end]有序\n\n      // target 在 [mid, end] 之间\n      if (target >= nums[mid] && target <= nums[end]) {\n        start = mid + 1;\n      } else {\n        // target 不在 [mid, end] 之间\n        end = mid - 1;\n      }\n    }\n  }\n\n  return -1;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        \"\"\"用二分法，先判断左右两边哪一边是有序的，再判断是否在有序的列表之内\"\"\"\n        if len(nums) <= 0:\n            return -1\n\n        left = 0\n        right = len(nums) - 1\n        while left < right:\n            mid = (right - left) // 2 + left\n            if nums[mid] == target:\n                return mid\n            \n            # 如果中间的值大于最左边的值，说明左边有序\n            if nums[mid] > nums[left]:\n                if nums[left] <= target <= nums[mid]:\n                    right = mid\n                else:\n                    # 这里 +1，因为上面是 <= 符号\n                    left = mid + 1\n            # 否则右边有序\n            else:\n                # 注意：这里必须是 mid+1，因为根据我们的比较方式，mid属于左边的序列\n                if nums[mid+1] <= target <= nums[right]:\n                    left = mid + 1\n                else:\n                    right = mid\n                    \n        return left if nums[left] == target else -1\n"
        }
    ]
},
"json":{
    "id": "335",
    "name": "self-crossing",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 滑动窗口\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "一定要画图辅助",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对于这种$O(1)$空间复杂度有固定的套路。常见的有：1.直接修改原数组2.滑动窗口（当前状态并不是和之前所有状态有关，而是仅和某几个有关）。我们采用的是滑动窗口。但是难点就在于我们怎么知道当前状态和哪几个有关。对于这道题来说，画图或许可以帮助你打开思路。另外面试的时候说出$O(N)$的思路也不失为一个帮助你冷静分析问题的手段。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/335.self-crossing.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def isSelfCrossing(self, x: List[int]) -> bool:\n        n = len(x)\n        if n < 4:\n            return False\n        for i in range(3, n):\n            if x[i] >= x[i - 2] and x[i - 1] <= x[i - 3]:\n                return True\n            if x[i - 1] <= x[i - 3] and x[i - 2] <= x[i]:\n                return True\n            if i > 3 and x[i - 1] == x[i - 3] and x[i] + x[i - 4] == x[i - 2]:\n                return True\n            if i > 4 and x[i] + x[i - 4] >= x[i - 2] and x[i - 1] >= x[i - 3] - x[i - 5] \\\n                    and x[i - 1] <= x[i - 3] and x[i - 2] >= x[i - 4] and x[i - 3] >= x[i - 5]:\n                return True\n        return False\n"
        }
    ]
},
"json":{
    "id": "73",
    "name": "set-matrix-zeroes",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 状态压缩\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "使用第一行和第一列来替代我们m+n数组",
            "link": null,
            "color": "blue"
        },
        {
            "text": "先记录下”第一行和第一列是否全是0“这样的一个数据，否则会因为后续对第一行第一列的更新造成数据丢失",
            "link": null,
            "color": "blue"
        },
        {
            "text": "最后更新第一行第一列",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/73.set-matrix-zeroes.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar setZeroes = function (matrix) {\n  if (matrix.length === 0) return matrix;\n  const m = matrix.length;\n  const n = matrix[0].length;\n  const zeroes = Array(m + n).fill(false);\n\n  for (let i = 0; i < m; i++) {\n    for (let j = 0; j < n; j++) {\n      const item = matrix[i][j];\n\n      if (item === 0) {\n        zeroes[i] = true;\n        zeroes[m + j] = true;\n      }\n    }\n  }\n\n  for (let i = 0; i < m; i++) {\n    if (zeroes[i]) {\n      matrix[i] = Array(n).fill(0);\n    }\n  }\n\n  for (let i = 0; i < n; i++) {\n    if (zeroes[m + i]) {\n      for (let j = 0; j < m; j++) {\n        matrix[j][i] = 0;\n      }\n    }\n  }\n\n  return matrix;\n};\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=73 lang=javascript\n *\n * [73] Set Matrix Zeroes\n */\n/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar setZeroes = function (matrix) {\n  if (matrix.length === 0) return matrix;\n  const m = matrix.length;\n  const n = matrix[0].length;\n\n  // 时间复杂度 O(m * n), 空间复杂度 O(1)\n  let firstRow = false; // 第一行是否应该全部为0\n  let firstCol = false; // 第一列是否应该全部为0\n\n  for (let i = 0; i < m; i++) {\n    for (let j = 0; j < n; j++) {\n      const item = matrix[i][j];\n      if (item === 0) {\n        if (i === 0) {\n          firstRow = true;\n        }\n        if (j === 0) {\n          firstCol = true;\n        }\n        matrix[0][j] = 0;\n        matrix[i][0] = 0;\n      }\n    }\n  }\n\n  for (let i = 1; i < m; i++) {\n    for (let j = 1; j < n; j++) {\n      const item = matrix[i][j];\n      if (matrix[0][j] == 0 || matrix[i][0] == 0) {\n        matrix[i][j] = 0;\n      }\n    }\n  }\n\n  // 最后处理第一行和第一列\n\n  if (firstRow) {\n    for (let i = 0; i < n; i++) {\n      matrix[0][i] = 0;\n    }\n  }\n\n  if (firstCol) {\n    for (let i = 0; i < m; i++) {\n      matrix[i][0] = 0;\n    }\n  }\n\n  return matrix;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        \"\"\"\n        Do not return anything, modify matrix in-place instead.\n        \"\"\"\n        def setRowZeros(matrix: List[List[int]], i:int) -> None:\n            C = len(matrix[0])\n            matrix[i] = [0] * C\n\n        def setColZeros(matrix: List[List[int]], j:int) -> None:\n            R = len(matrix)\n            for i in range(R):\n                matrix[i][j] = 0\n\n        isCol = False\n        R = len(matrix)\n        C = len(matrix[0])\n\n        for i in range(R):\n            if matrix[i][0] == 0:\n                isCol = True\n            for j in range(1, C):\n                if matrix[i][j] == 0:\n                    matrix[i][0] = 0\n                    matrix[0][j] = 0\n        for j in range(1, C):\n            if matrix[0][j] == 0:\n                setColZeros(matrix, j)\n\n        for i in range(R):\n            if matrix[i][0] == 0:\n                setRowZeros(matrix, i)\n\n        if isCol:\n            setColZeros(matrix, 0)\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        \"\"\"\n        这题要解决的问题是，必须有个地方记录判断结果，但又不能影响下一步的判断条件；\n        直接改为0的话，会影响下一步的判断条件；\n        因此，有一种思路是先改为None，最后再将None改为0；\n        从条件上看，如果可以将第一行、第二行作为记录空间，那么，用None应该也不算违背题目条件；\n        \"\"\"\n        rows = len(matrix)\n        cols = len(matrix[0])\n        # 遍历矩阵，用None记录要改的地方，注意如果是0则要保留，否则会影响下一步判断\n        for r in range(rows):\n            for c in range(cols):\n                if matrix[r][c] is not None and matrix[r][c] == 0:\n                    # 改值\n                    for i in range(rows):\n                        matrix[i][c] = None if matrix[i][c] != 0 else 0\n                    for j in range(cols):\n                        matrix[r][j] = None if matrix[r][j] != 0 else 0\n        # 再次遍历，将None改为0\n        for r in range(rows):\n            for c in range(cols):\n                if matrix[r][c] is None:\n                    matrix[r][c] = 0\n"
        }
    ]
},
"json":{
    "id": "1260",
    "name": "shift-2d-grid",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1260.shift-2d-grid.md",
    "code": [
        {
            "language": "py",
            "text": "\nfrom copy import deepcopy\n\nclass Solution:\n    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:\n        n = len(grid)\n        m = len(grid[0])\n        for _ in range(k):\n            old = deepcopy(grid)\n            for i in range(n):\n                for j in range(m):\n                    if j == m - 1:\n                            grid[(i + 1) % n][0] = old[i][j]\n                    elif i == n - 1 and j == m - 1:\n                        grid[0][0] = old[i][j]\n                    else:\n                        grid[i][j + 1] = old[i][j]\n        return grid\n"
        },
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1260 lang=python3\n#\n# [1260] 二维网格迁移\n#\n\n# @lc code=start\n\n\nclass Solution:\n    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:\n        n = len(grid)\n        m = len(grid[0])\n        # 二维到一维\n        arr = [grid[i][j] for i in range(n) for j in range(m)]\n        # 取模，缩小k的范围，避免无意义的运算\n        k %= m * n\n        res = []\n        # 首尾交换法\n\n        def reverse(l, r):\n            while l < r:\n                t = arr[l]\n                arr[l] = arr[r]\n                arr[r] = t\n                l += 1\n                r -= 1\n        # 三次旋转\n        reverse(0, m * n - k - 1)\n        reverse(m * n - k, m * n - 1)\n        reverse(0, m * n - 1)\n        # 一维到二维\n        row = []\n        for i in range(m * n):\n            if i > 0 and i % m == 0:\n                res.append(row)\n                row = []\n            row.append(arr[i])\n        res.append(row)\n\n        return res\n\n# @lc code=end\n\n"
        }
    ]
},
"json":{
    "id": "820",
    "name": "short-encoding-of-words",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 前缀树\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀树",
            "link": null,
            "color": "blue"
        },
        {
            "text": "去重",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/820.short-encoding-of-words.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Trie:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.Trie = {}\n\n    def insert(self, word):\n        \"\"\"\n        Inserts a word into the trie.\n        :type word: str\n        :rtype: void\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                curr[w] = {}\n            curr = curr[w]\n        curr['#'] = 1\n\n    def search(self, word):\n        \"\"\"\n        Returns if the word is in the trie.\n        :type word: str\n        :rtype: bool\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            curr = curr[w]\n        # len(curr) == 1 means we meet '#'\n        # when we search 'em'(which reversed from 'me')\n        # the result is len(curr) > 1\n        # cause the curr look like { '#': 1, i: {...}} \n        return len(curr) == 1 \nclass Solution:\n    def minimumLengthEncoding(self, words: List[str]) -> int:\n        trie = Trie()\n        cnt = 0\n        words = set(words)\n        for word in words:\n            trie.insert(word[::-1])\n        for word in words:\n            if trie.search(word[::-1]):\n                cnt += len(word) + 1\n        return cnt\n\n"
        }
    ]
},
"json":{
    "id": "136",
    "name": "single-number",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 位运算\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "1.异或的性质两个数字异或的结果`a^b`是将a和b的二进制每一位进行运算，得出的数字。运算的逻辑是如果同一位的数字相同则为0，不同则为12.异或的规律",
            "link": null,
            "color": "blue"
        },
        {
            "text": "任何数和本身异或则为`0`",
            "link": null,
            "color": "blue"
        },
        {
            "text": "任何数和0异或是`本身`3.很多人只是记得异或的性质和规律，但是缺乏对其本质的理解，导致很难想到这种解法（我本人也没想到）4.bit运算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/136.single-number.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=136 lang=javascript\n *\n * [136] Single Number\n *\n * https://leetcode.com/problems/single-number/description/\n *\n * algorithms\n * Easy (59.13%)\n * Total Accepted:    429.3K\n * Total Submissions: 724.1K\n * Testcase Example:  '[2,2,1]'\n *\n * Given a non-empty array of integers, every element appears twice except for\n * one. Find that single one.\n *\n * Note:\n *\n * Your algorithm should have a linear runtime complexity. Could you implement\n * it without using extra memory?\n *\n * Example 1:\n *\n *\n * Input: [2,2,1]\n * Output: 1\n *\n *\n * Example 2:\n *\n *\n * Input: [4,1,2,1,2]\n * Output: 4\n *\n *\n */\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar singleNumber = function(nums) {\n  let ret = 0;\n  for (let index = 0; index < nums.length; index++) {\n    const element = nums[index];\n    ret = ret ^ element;\n  }\n  return ret;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        single_number = 0\n        for num in nums:\n            single_number ^= num\n        return single_number\n"
        }
    ]
},
"json":{
    "id": "239",
    "name": "sliding-window-maximum",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 队列\n- 滑动窗口\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "双端队列简化时间复杂度",
            "link": null,
            "color": "blue"
        },
        {
            "text": "滑动窗口",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/239.sliding-window-maximum.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar maxSlidingWindow = function(nums, k) {\n  // bad 时间复杂度O(n * k)\n  if (nums.length === 0 || k === 0) return [];\n  let slideWindow = [];\n  const ret = [];\n  for (let i = 0; i < nums.length - k + 1; i++) {\n    for (let j = 0; j < k; j++) {\n      slideWindow.push(nums[i + j]);\n    }\n    ret.push(Math.max(...slideWindow));\n    slideWindow = [];\n  }\n  return ret;\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar maxSlidingWindow = function(nums, k) {\n  // 双端队列优化时间复杂度, 时间复杂度O(n)\n  const deque = []; // 存放在接下来的滑动窗口可能成为最大值的数\n  const ret = [];\n  for (let i = 0; i < nums.length; i++) {\n    // 清空失效元素\n    while (deque[0] < i - k + 1) {\n      deque.shift();\n    }\n\n    while (nums[deque[deque.length - 1]] < nums[i]) {\n      deque.pop();\n    }\n\n    deque.push(i);\n\n    if (i >= k - 1) {\n      ret.push(nums[deque[0]]);\n    }\n  }\n  return ret;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        if k == 0: return []\n        res = []\n        for r in range(k - 1, len(nums)):\n            res.append(max(nums[r - k + 1:r + 1]))\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        deque, res, n = [], [], len(nums)\n        for i in range(n):\n            while deque and deque[0] < i - k + 1:\n                deque.pop(0)\n            while deque and nums[i] > nums[deque[-1]]:\n                deque.pop(-1)\n            deque.append(i)\n            if i >= k - 1: res.append(nums[deque[0]])\n        return res\n\n\n"
        }
    ]
},
"json":{
    "id": "1015",
    "name": "smallest-integer-divisible-by-k",
    "company": [],
    "pre": [
        {
            "text": "\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数学（无限循环与循环节）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1015.smallest-integer-divisible-by-k.md",
    "code": [
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1015 lang=python3\n#\n# [1015] 可被 K 整除的最小整数\n#\n\n# @lc code=start\n\n\nclass Solution:\n    def smallestRepunitDivByK(self, K: int) -> int:\n        if K % 10 in [2, 4, 5, 6, 8]:\n            return - 1\n        seen = set()\n        mod = 0\n        for i in range(1, K + 1):\n            mod = (mod * 10 + 1) % K\n            if mod in seen:\n                return -1\n            if mod == 0:\n                return ix\n            seen.add(mod)\n\n        # @lc code=end\n\n\n"
        }
    ]
},
"json":{
    "id": "912",
    "name": "sort-an-array",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 数组\n- 排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "排序算法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "注意题目的限制条件从而选择合适的算法",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/912.sort-an-array.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar sortArray = function(nums) {\n    const counts = Array(50000 * 2 + 1).fill(0);\n    const res = [];\n    for(const num of nums) counts[50000 + num] += 1;\n    for(let i in counts)  {\n        while(counts[i]--) {\n            res.push(i - 50000)\n        }\n    }\n    return res;\n};\n"
        },
        {
            "language": "js",
            "text": "\nfunction swap(nums, a, b) {\n    const temp = nums[a];\n    nums[a] = nums[b];\n    nums[b] = temp;\n}\n\nfunction helper(nums, start, end) {\n    if (start >= end) return;\n    const pivotIndex = start + ((end - start) >>> 1)\n    const pivot = nums[pivotIndex]\n    let i = start;\n    let j = end;\n    while (i <= j) {\n        while (nums[i] < pivot) i++;\n        while (nums[j] > pivot) j--;\n        if (i <= j) {\n            swap(nums, i, j);\n            i++;\n            j--;\n        }\n    }\n    helper(nums, start, j);\n    helper(nums, i, end);\n}\n\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar sortArray = function(nums) {\n    helper(nums, 0, nums.length - 1);\n    return nums;\n};\n"
        }
    ]
},
"json":{
    "id": "75",
    "name": "sort-colors",
    "company": [],
    "pre": [
        {
            "text": "\n\n- [荷兰国旗问题](https://en.wikipedia.org/wiki/Dutch_national_flag_problem)\n- 排序\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "荷兰国旗问题",
            "link": null,
            "color": "blue"
        },
        {
            "text": "countingsort",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/75.sort-colors.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def sortColors(self, nums: List[int]) -> None:\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        \"\"\"\n        p0 = cur = 0\n        p2 = len(nums) - 1\n\n        while cur <= p2:\n            if nums[cur] == 0:\n                nums[cur], nums[p0] = nums[p0], nums[cur]\n                p0 += 1\n                cur += 1\n            elif nums[cur] == 2:\n                nums[cur], nums[p2] = nums[p2], nums[cur]\n                p2 -= 1\n            else:\n                cur += 1\n"
        }
    ]
},
"json":{
    "id": "877",
    "name": "stone-game",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "可以用DP（动态规划）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "可以从数学的角度去分析>......(😅)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/877.stone-game.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} piles\n * @return {boolean}\n */\nvar stoneGame = function(piles) {\n  return true;\n};\n"
        }
    ]
},
"json":{
    "id": "560",
    "name": "subarray-sum-equals-k",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n- 前缀和\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀和",
            "link": null,
            "color": "blue"
        },
        {
            "text": "可以利用hashmap记录和的累加值来避免重复计算",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/560.subarray-sum-equals-k.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=560 lang=javascript\n *\n * [560] Subarray Sum Equals K\n */\n/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nvar subarraySum = function (nums, k) {\n  const hashmap = {};\n  let acc = 0;\n  let count = 0;\n\n  for (let i = 0; i < nums.length; i++) {\n    acc += nums[i];\n\n    if (acc === k) count++;\n\n    if (hashmap[acc - k] !== void 0) {\n      count += hashmap[acc - k];\n    }\n\n    if (hashmap[acc] === void 0) {\n      hashmap[acc] = 1;\n    } else {\n      hashmap[acc] += 1;\n    }\n  }\n\n  return count;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def subarraySum(self, nums: List[int], k: int) -> int:\n        cnt, n =  0, len(nums)\n        for i in range(n):\n            sum = 0\n            for j in range(i, n):\n                sum += nums[j]\n                if (sum == k): cnt += 1\n        return cnt\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def subarraySum(self, nums: List[int], k: int) -> int:\n      cnt, n =  0, len(nums)\n      pre = [0] * (n + 1)\n      for i in range(1, n + 1):\n          pre[i] = pre[i - 1] + nums[i - 1]\n      for i in range(1, n + 1):\n          for j in range(i, n + 1):\n              if (pre[j] - pre[i - 1] == k): cnt += 1\n      return cnt\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def subarraySum(self, nums: List[int], k: int) -> int:\n        d = {}\n        acc = count = 0\n        for num in nums:\n            acc += num\n            if acc == k:\n                count += 1\n            if acc - k in d:\n                count += d[acc-k]\n            if acc in d:\n                d[acc] += 1\n            else:\n                d[acc] = 1\n        return count\n"
        }
    ]
},
"json":{
    "id": "78",
    "name": "subsets-en",
    "company": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/78.subsets-en.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n/*\n * @lc app=leetcode id=78 lang=javascript\n *\n * [78] Subsets\n *\n * https://leetcode.com/problems/subsets/description/\n *\n * algorithms\n * Medium (51.19%)\n * Total Accepted:    351.6K\n * Total Submissions: 674.8K\n * Testcase Example:  '[1,2,3]'\n *\n * Given a set of distinct integers, nums, return all possible subsets (the\n * power set).\n * \n * Note: The solution set must not contain duplicate subsets.\n * \n * Example:\n * \n * \n * Input: nums = [1,2,3]\n * Output:\n * [\n * ⁠ [3],\n * [1],\n * [2],\n * [1,2,3],\n * [1,3],\n * [2,3],\n * [1,2],\n * []\n * ]\n * \n */\nfunction backtrack(list, tempList, nums, start) {\n    list.push([...tempList]);\n    for(let i = start; i < nums.length; i++) {\n        tempList.push(nums[i]);\n        backtrack(list, tempList, nums, i + 1);\n        tempList.pop();\n    }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsets = function(nums) {\n    const list = [];\n    backtrack(list, [], nums, 0);\n    return list;\n};\n"
        }
    ]
},
"json":{
    "id": "90",
    "name": "subsets-ii-en",
    "company": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/90.subsets-ii-en.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n\n/*\n * @lc app=leetcode id=90 lang=javascript\n *\n * [90] Subsets II\n *\n * https://leetcode.com/problems/subsets-ii/description/\n *\n * algorithms\n * Medium (41.53%)\n * Total Accepted:    197.1K\n * Total Submissions: 469.1K\n * Testcase Example:  '[1,2,2]'\n *\n * Given a collection of integers that might contain duplicates, nums, return\n * all possible subsets (the power set).\n * \n * Note: The solution set must not contain duplicate subsets.\n * \n * Example:\n * \n * \n * Input: [1,2,2]\n * Output:\n * [\n * ⁠ [2],\n * ⁠ [1],\n * ⁠ [1,2,2],\n * ⁠ [2,2],\n * ⁠ [1,2],\n * ⁠ []\n * ]\n * \n * \n */\nfunction backtrack(list, tempList, nums, start) {\n    list.push([...tempList]);\n    for(let i = start; i < nums.length; i++) {\n        //nums can be duplicated, which is different from Problem 78 - subsets\n        //So the situation should be taken into consideration\n        if (i > start && nums[i] === nums[i - 1]) continue;\n        tempList.push(nums[i]);\n        backtrack(list, tempList, nums, i + 1)\n        tempList.pop();\n    }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsetsWithDup = function(nums) {\n    const list = [];\n    backtrack(list, [], nums.sort((a, b) => a - b), 0, [])\n    return list;\n};\n"
        }
    ]
},
"json":{
    "id": "90",
    "name": "subsets-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回溯\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/90.subsets-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\nfunction backtrack(list, tempList, nums, start) {\n  list.push([...tempList]);\n  for (let i = start; i < nums.length; i++) {\n    // 和78.subsets的区别在于这道题nums可以有重复\n    // 因此需要过滤这种情况\n    if (i > start && nums[i] === nums[i - 1]) continue;\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums, i + 1);\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsetsWithDup = function (nums) {\n  const list = [];\n  backtrack(\n    list,\n    [],\n    nums.sort((a, b) => a - b),\n    0,\n    []\n  );\n  return list;\n};\n"
        }
    ]
},
"json":{
    "id": "78",
    "name": "subsets",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回溯\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "backtrack解题公式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/78.subsets.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=78 lang=javascript\n *\n * [78] Subsets\n *\n * https://leetcode.com/problems/subsets/description/\n *\n * algorithms\n * Medium (51.19%)\n * Total Accepted:    351.6K\n * Total Submissions: 674.8K\n * Testcase Example:  '[1,2,3]'\n *\n * Given a set of distinct integers, nums, return all possible subsets (the\n * power set).\n *\n * Note: The solution set must not contain duplicate subsets.\n *\n * Example:\n *\n *\n * Input: nums = [1,2,3]\n * Output:\n * [\n * ⁠ [3],\n * [1],\n * [2],\n * [1,2,3],\n * [1,3],\n * [2,3],\n * [1,2],\n * []\n * ]\n *\n */\nfunction backtrack(list, tempList, nums, start) {\n  list.push([...tempList]);\n  for (let i = start; i < nums.length; i++) {\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums, i + 1);\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsets = function (nums) {\n  const list = [];\n  backtrack(list, [], nums, 0);\n  return list;\n};\n"
        }
    ]
},
"json":{
    "id": "30",
    "name": "substring-with-concatenation-of-all-words",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 字符串\n- 数组\n- 哈希表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "Counter",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/30.substring-with-concatenation-of-all-words.md",
    "code": [
        {
            "language": "py",
            "text": "\nfrom collections import Counter\n\n\nclass Solution:\n    def findSubstring(self, s: str, words: List[str]) -> List[int]:\n        if not s or not words:\n            return []\n        res = []\n        n = len(words)\n        word_len = len(words[0])\n        window_len = word_len * n\n        target = Counter(words)\n        i = 0\n        while i < len(s) - window_len + 1:\n            sliced = []\n            start = i\n            for _ in range(n):\n                sliced.append(s[start:start + word_len])\n                start += word_len\n            if Counter(sliced) == target:\n                res.append(i)\n            i += 1\n        return res\n"
        }
    ]
},
"json":{
    "id": "371",
    "name": "sum-of-two-integers",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 位运算\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "异或是一种不进位的加减法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "求与之后左移一位来可以表示进位",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/371.sum-of-two-integers.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=371 lang=javascript\n *\n * [371] Sum of Two Integers\n */\n/**\n * @param {number} a\n * @param {number} b\n * @return {number}\n */\nvar getSum = function(a, b) {\n    if (a === 0) return b;\n\n    if (b === 0) return a;\n\n    return getSum(a ^ b, (a & b) << 1);\n};\n"
        }
    ]
},
"json":{
    "id": "129",
    "name": "sum-root-to-leaf-numbers",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 递归\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "递归分析",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/129.sum-root-to-leaf-numbers.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=129 lang=javascript\n *\n * [129] Sum Root to Leaf Numbers\n */\nfunction helper(node, cur) {\n  if (node === null) return 0;\n  const next = node.val + cur * 10;\n\n  if (node.left === null && node.right === null) return next;\n\n  const l = helper(node.left, next);\n  const r = helper(node.right, next);\n\n  return l + r;\n}\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar sumNumbers = function(root) {\n  // tag: `tree` `dfs` `math`\n  return helper(root, 0);\n};\n"
        },
        {
            "language": "py",
            "text": "\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def sumNumbers(self, root: TreeNode) -> int:\n\n        def helper(node, cur_val):\n            if not node: return 0\n            next_val = cur_val * 10 + node.val\n\n            if not (node.left or node.right):\n                return next_val\n\n            left_val = helper(node.left, next_val)\n            right_val = helper(node.right, next_val)\n\n            return left_val + right_val\n\n        return helper(root, 0)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def sumNumbers(self, root: TreeNode) -> int:\n        if not root: return 0\n        result = 0\n        node_queue, sum_queue = [root], [root.val]\n        while node_queue:\n            for i in node_queue:\n                cur_node = node_queue.pop(0)\n                cur_val = sum_queue.pop(0)\n                if cur_node.left:\n                    node_queue.append(cur_node.left)\n                    sum_queue.append(cur_val * 10 + cur_node.left.val)\n                if cur_node.right:\n                    node_queue.append(cur_node.right)\n                    sum_queue.append(cur_val * 10 + cur_node.right.val)\n                if not (cur_node.left or cur_node.right):\n                    result += cur_val\n        return result\n"
        }
    ]
},
"json":{
    "id": "887",
    "name": "super-egg-drop",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "dp建模思路要发生变化,即`dp[M][K]meansthat,givenKeggsandMmoves，whatisthemaximumnumberoffloorthatwecancheck.`",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/887.super-egg-drop.md",
    "code": [
        {
            "language": "js",
            "text": "\nconst dp = Array(K + 1);\ndp[0] = Array(N + 1).fill(0);\nfor (let i = 1; i < K + 1; i++) {\n  dp[i] = [0];\n  for (let j = 1; j < N + 1; j++) {\n    // 只有一个鸡蛋\n    if (i === 1) {\n      dp[i][j] = j;\n      continue;\n    }\n    // 只有一层楼\n    if (j === 1) {\n      dp[i][j] = 1;\n      continue;\n    }\n\n    // 每一层我们都模拟一遍\n    const all = [];\n    for (let k = 1; k < j + 1; k++) {\n      const brokenCount = dp[i - 1][k - 1]; // 如果碎了\n      const notBrokenCount = dp[i][j - k]; // 如果没碎\n      all.push(Math.max(brokenCount, notBrokenCount)); // 最坏的可能\n    }\n    dp[i][j] = Math.min(...all) + 1; // 最坏的集合中我们取最好的情况\n  }\n}\n\nreturn dp[K][N];\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number} K\n * @param {number} N\n * @return {number}\n */\nvar superEggDrop = function (K, N) {\n  // 不选择dp[K][M]的原因是dp[M][K]可以简化操作\n  const dp = Array(N + 1)\n    .fill(0)\n    .map((_) => Array(K + 1).fill(0));\n\n  let m = 0;\n  while (dp[m][K] < N) {\n    m++;\n    for (let k = 1; k <= K; ++k) dp[m][k] = dp[m - 1][k - 1] + 1 + dp[m - 1][k];\n  }\n  return m;\n};\n"
        }
    ]
},
"json":{
    "id": "130",
    "name": "surrounded-regions",
    "company": [],
    "pre": [
        {
            "text": "\n\n- DFS\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二维数组DFS解题模板",
            "link": null,
            "color": "blue"
        },
        {
            "text": "转化问题为`连通区域问题`",
            "link": null,
            "color": "blue"
        },
        {
            "text": "直接mutate原数组，节省空间",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/130.surrounded-regions.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n\n\n/*\n * @lc app=leetcode id=130 lang=javascript\n *\n * [130] Surrounded Regions\n */\n// 将O以及周边的O转化为A\nfunction mark(board, i, j, rows, cols) {\n  if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1 || board[i][j] !== \"O\")\n    return;\n\n  board[i][j] = \"A\";\n  mark(board, i + 1, j, rows, cols);\n  mark(board, i - 1, j, rows, cols);\n  mark(board, i, j + 1, rows, cols);\n  mark(board, i, j - 1, rows, cols);\n}\n/**\n * @param {character[][]} board\n * @return {void} Do not return anything, modify board in-place instead.\n */\nvar solve = function(board) {\n  const rows = board.length;\n  if (rows === 0) return [];\n  const cols = board[0].length;\n\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      if (i === 0 || i == rows - 1 || j === 0 || j === cols - 1) {\n        mark(board, i, j, rows, cols);\n      }\n    }\n  }\n\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      if (board[i][j] === \"O\") {\n        board[i][j] = \"X\";\n      } else if (board[i][j] === \"A\") {\n        board[i][j] = \"O\";\n      }\n    }\n  }\n\n  return board;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, board: List[List[str]]) -> None:\n        \"\"\"\n        Do not return anything, modify board in-place instead.\n        \"\"\"\n        # 如果数组长或宽小于等于2，则不需要替换\n        if len(board) <= 2 or len(board[0]) <= 2:\n            return\n        \n        row, col = len(board), len(board[0])\n        \n        def dfs(i, j):\n            \"\"\"\n            深度优先算法，如果符合条件，替换为A并进一步测试，否则停止\n            \"\"\"\n            if i < 0 or j < 0 or i >= row or j >= col or board[i][j] != 'O':\n                return\n            board[i][j] = 'A'\n            \n            dfs(i - 1, j)\n            dfs(i + 1, j)\n            dfs(i, j - 1)\n            dfs(i, j + 1)\n        \n        # 从外围开始\n        for i in range(row):\n            dfs(i, 0)\n            dfs(i, col-1)\n        \n        for j in range(col):\n            dfs(0, j)\n            dfs(row-1, j)\n        \n        # 最后完成替换\n        for i in range(row):\n            for j in range(col):\n                if board[i][j] == 'O':\n                    board[i][j] = 'X'\n                elif board[i][j] == 'A':\n                    board[i][j] = 'O'\n"
        }
    ]
},
"json":{
    "id": "24",
    "name": "swapNodesInPairs",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 链表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.链表这种数据结构的特点和使用2.dummyHead简化操作",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/24.swapNodesInPairs.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar swapPairs = function(head) {\n  const dummy = new ListNode(0);\n  dummy.next = head;\n  let current = dummy;\n  while (current.next != null && current.next.next != null) {\n    // 初始化双指针\n    const first = current.next;\n    const second = current.next.next;\n    \n    // 更新双指针和 current 指针\n    first.next = second.next;\n    second.next = first;\n    current.next = second;\n\n    // 更新指针\n    current = current.next.next;\n  }\n  return dummy.next;\n};\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def swapPairs(self, head: ListNode) -> ListNode:\n        \"\"\"\n        用递归实现链表相邻互换：\n        第一个节点的 next 是第三、第四个节点交换的结果，第二个节点的 next 是第一个节点；\n        第三个节点的 next 是第五、第六个节点交换的结果，第四个节点的 next 是第三个节点；\n        以此类推\n        :param ListNode head\n        :return ListNode\n        \"\"\"\n        # 如果为 None 或 next 为 None，则直接返回\n        if not head or not head.next:\n            return head\n\n        _next = head.next\n        head.next = self.swapPairs(_next.next)\n        _next.next = head\n        return _next\n"
        }
    ]
},
"json":{
    "id": "101",
    "name": "symmetric-tree",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 二叉树\n- 递归\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/101.symmetric-tree.md",
    "code": [
        {
            "language": "py",
            "text": "\nseen = dict()\nfor i, num in enumerate(nums):\n    seen[i] = num\nfor i, num in enumerate(nums):\n    if  seen[len(nums) - 1 - i] != num:\n      return False\nreturn True\n"
        },
        {
            "language": "py",
            "text": "\nl = 0\nr = len(nums) - 1\n\nwhile l < r:\n   if nums[l] != nums[r]: return False\n   l += 1\n   r -= 1\nreturn True\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def isSymmetric(self, root: TreeNode) -> bool:\n        def dfs(root1, root2):\n            if root1 == root2: return True\n            if not root1 or not root2: return False\n            if root1.val != root2.val: return False\n            return dfs(root1.left, root2.right) and dfs(root1.right, root2.left)\n        if not root: return True\n        return dfs(root.left, root.right)\n"
        }
    ]
},
"json":{
    "id": "494",
    "name": "target-sum",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "对元素进行分组，分组的依据是符号，是`+`或者`",
            "link": null,
            "color": "blue"
        },
        {
            "text": "`",
            "link": null,
            "color": "blue"
        },
        {
            "text": "通过数学公式推导可以简化我们的求解过程，这需要一点`数学知识和数学意识`",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/494.target-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=494 lang=javascript\n *\n * [494] Target Sum\n *\n */\n// 这个是我们熟悉的问题了\n// 我们这里需要求解的是nums里面有多少种可以组成target的方式\nvar sumCount = function(nums, target) {\n  // 这里通过观察，我们没必要使用二维数组去存储这些计算结果\n  // 使用一维数组可以有效节省空间\n  const dp = Array(target + 1).fill(0);\n  dp[0] = 1;\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = target; j >= nums[i]; j--) {\n      dp[j] += dp[j - nums[i]];\n    }\n  }\n  return dp[target];\n};\nconst add = nums => nums.reduce((a, b) => (a += b), 0);\n/**\n * @param {number[]} nums\n * @param {number} S\n * @return {number}\n */\nvar findTargetSumWays = function(nums, S) {\n  const sum = add(nums);\n  if (sum < S) return 0;\n  if ((S + sum) % 2 === 1) return 0;\n  return sumCount(nums, (S + sum) >> 1);\n};\n"
        }
    ]
},
"json":{
    "id": "42",
    "name": "trapping-rain-water",
    "company": [],
    "pre": [],
    "keyPoints": [
        {
            "text": "建模`h[i]=Math.min(左边柱子最大值,右边柱子最大值)`(h为下雨之后的水位)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/42.trapping-rain-water.md",
    "code": [
        {
            "language": "js",
            "text": "\n\nfor(let i = 0; i < height.length; i++) {\n    area += (h[i] - height[i]) * 1; // h为下雨之后的水位\n}\n\n"
        },
        {
            "language": "js",
            "text": "\n\n/*\n * @lc app=leetcode id=42 lang=javascript\n *\n * [42] Trapping Rain Water\n *\n */\n/**\n * @param {number[]} height\n * @return {number}\n */\nvar trap = function(height) {\n    let max = 0;\n    let volumn = 0;\n    const leftMax = [];\n    const rightMax = [];\n\n    for(let i = 0; i < height.length; i++) {\n        leftMax[i] = max = Math.max(height[i], max);\n    }\n\n    max = 0;\n\n    for(let i = height.length - 1; i >= 0; i--) {\n        rightMax[i] = max = Math.max(height[i], max);\n    }\n\n    for(let i = 0; i < height.length; i++) {\n        volumn = volumn +  Math.min(leftMax[i], rightMax[i]) - height[i]\n    }\n\n    return volumn;\n};\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def trap(self, heights: List[int]) -> int:\n        n = len(heights)\n        l, r = [0] * (n + 1), [0] * (n + 1)\n        ans = 0\n        for i in range(1, len(heights) + 1):\n            l[i] = max(l[i - 1], heights[i - 1])\n        for i in range(len(heights) - 1, 0, -1):\n            r[i] = max(r[i + 1], heights[i])\n        for i in range(len(heights)):\n            ans += max(0, min(l[i + 1], r[i]) - heights[i])\n        return ans     \n"
        }
    ]
},
"json":{
    "id": "167",
    "name": "two-sum-ii-input-array-is-sorted",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "由于是有序的，因此双指针更好",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/167.two-sum-ii-input-array-is-sorted.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} numbers\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(numbers, target) {\n    const visited = {} // 记录出现的数字， 空间复杂度N\n\n    for (let index = 0; index < numbers.length; index++) {\n        const element = numbers[index];\n        if (visited[target - element] !== void 0) {\n            return [visited[target - element], index + 1]\n        }\n        visited[element] = index + 1;\n    }\n    return [];\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\n        visited = {}\n        for index, number in enumerate(numbers):\n            if target - number in visited:\n                return [visited[target-number], index+1]\n            else:\n                visited[number] = index + 1\n\n# 双指针思路实现\nclass Solution:\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\n        left, right = 0, len(numbers) - 1\n        while left < right:\n            if numbers[left] + numbers[right] < target:\n                left += 1\n            if numbers[left] + numbers[right] > target:\n                right -= 1\n            if numbers[left] + numbers[right] == target:\n                return [left+1, right+1]\n"
        }
    ]
},
"json":{
    "id": "1",
    "name": "two-sum",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "求和转换为求差",
            "link": null,
            "color": "blue"
        },
        {
            "text": "借助Map结构将数组中每个元素及其索引相互对应",
            "link": null,
            "color": "blue"
        },
        {
            "text": "以空间换时间，将查找时间从O(N)降低到O(1)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1.two-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nconst twoSum = function (nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n    if (map.has(diff)) {\n      return [map.get(diff), i];\n    }\n    map.set(nums[i], i);\n  }\n};\n"
        }
    ]
},
"json":{
    "id": "263",
    "name": "ugly-number",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 因数分解\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数论",
            "link": null,
            "color": "blue"
        },
        {
            "text": "因数分解",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/263.ugly-number.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n  while(num % 2 === 0)   num = num / 2;\n  while(num % 3 === 0)   num = num / 3;\n  while(num % 5 === 0)   num = num / 5;\n\n  return num === 1;\n\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=263 lang=javascript\n *\n * [263] Ugly Number\n */\n/**\n * @param {number} num\n * @return {boolean}\n */\nvar isUgly = function(num) {\n  // TAG: 数论\n  if (num <= 0) return false;\n  if (num === 1) return true;\n\n  const list = [2, 3, 5];\n\n  if (list.includes(num)) return true;\n\n  for (let i of list) {\n    if (num % i === 0) return isUgly(Math.floor(num / i));\n  }\n  return false;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# 非递归写法\nclass Solution:\n    def isUgly(self, num: int) -> bool:\n        if num <= 0:\n            return False\n        for i in (2, 3, 5):\n            while num % i == 0:\n                num /= i\n        return num == 1\n"
        }
    ]
},
"json":{
    "id": "95",
    "name": "unique-binary-search-trees-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 二叉搜索树\n- 分治\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分治法",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/95.unique-binary-search-trees-ii.md",
    "code": []
},
"json":{
    "id": "96",
    "name": "unique-binary-search-trees",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 二叉搜索树\n- 分治\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分治法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "笛卡尔积",
            "link": null,
            "color": "blue"
        },
        {
            "text": "记忆化递归",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/96.unique-binary-search-trees.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def numTrees(self, n: int) -> int:\n        if n <= 1:\n            return 1\n        res = 0\n        for i in range(1, n + 1):\n            res += self.numTrees(i - 1) * self.numTrees(n - i)\n        return res\n"
        }
    ]
},
"json":{
    "id": "62",
    "name": "unique-paths",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "记忆化递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "基本动态规划问题",
            "link": null,
            "color": "blue"
        },
        {
            "text": "空间复杂度可以进一步优化到O(n),这会是一个考点",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/62.unique-paths.md",
    "code": [
        {
            "language": "js",
            "text": "\nconst dp = [];\nfor (let i = 0; i < m + 1; i++) {\n  dp[i] = [];\n  dp[i][0] = 0;\n}\nfor (let i = 0; i < n + 1; i++) {\n  dp[0][i] = 0;\n}\nfor (let i = 1; i < m + 1; i++) {\n  for (let j = 1; j < n + 1; j++) {\n    dp[i][j] = j === 1 ? 1 : dp[i - 1][j] + dp[i][j - 1]; // 转移方程\n  }\n}\n\nreturn dp[m][n];\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=62 lang=javascript\n *\n * [62] Unique Paths\n *\n * https://leetcode.com/problems/unique-paths/description/\n */\n/**\n * @param {number} m\n * @param {number} n\n * @return {number}\n */\nvar uniquePaths = function (m, n) {\n  const dp = Array(n).fill(1);\n\n  for (let i = 1; i < m; i++) {\n    for (let j = 1; j < n; j++) {\n      dp[j] = dp[j] + dp[j - 1];\n    }\n  }\n\n  return dp[n - 1];\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        d = [[1] * n for _ in range(m)]\n\n        for col in range(1, m):\n            for row in range(1, n):\n                d[col][row] = d[col - 1][row] + d[col][row - 1]\n\n        return d[m - 1][n - 1]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    visited = dict()\n\n    def uniquePaths(self, m: int, n: int) -> int:\n        if (m, n) in self.visited:\n            return self.visited[(m, n)]\n        if m == 1 or n == 1:\n            return 1\n        cnt = self.uniquePaths(m - 1, n) + self.uniquePaths(m, n - 1)\n        self.visited[(m, n)] = cnt\n        return cnt\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n\n    def uniquePaths(self, m: int, n: int) -> int:\n        dp = [1] * n\n        for _ in range(1, m):\n            for j in range(1, n):\n                dp[j] += dp[j - 1]\n        return dp[n - 1]\n"
        }
    ]
},
"json":{
    "id": "125",
    "name": "valid-palindrome",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回文\n- 双指针\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "双指针",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/125.valid-palindrome.md",
    "code": [
        {
            "language": "js",
            "text": "\n\n/*\n * @lc app=leetcode id=125 lang=javascript\n *\n * [125] Valid Palindrome\n */\n// 只处理英文字符（题目忽略大小写，我们前面全部转化成了小写， 因此这里我们只判断小写）和数字\nfunction isValid(c) {\n  const charCode = c.charCodeAt(0);\n  const isDigit =\n    charCode >= \"0\".charCodeAt(0) && charCode <= \"9\".charCodeAt(0);\n  const isChar = charCode >= \"a\".charCodeAt(0) && charCode <= \"z\".charCodeAt(0);\n\n  return isDigit || isChar;\n}\n/**\n * @param {string} s\n * @return {boolean}\n */\nvar isPalindrome = function(s) {\n  s = s.toLowerCase();\n  let left = 0;\n  let right = s.length - 1;\n\n  while (left < right) {\n    if (!isValid(s[left])) {\n      left++;\n      continue;\n    }\n    if (!isValid(s[right])) {\n      right--;\n      continue;\n    }\n\n    if (s[left] === s[right]) {\n      left++;\n      right--;\n    } else {\n      break;\n    }\n  }\n\n  return right <= left;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def isPalindrome(self, s: str) -> bool:\n        left, right = 0, len(s) - 1\n        while left < right:\n            if not s[left].isalnum():\n                left += 1\n                continue\n            if not s[right].isalnum():\n                right -= 1\n                continue\n            if s[left].lower() == s[right].lower():\n                left += 1\n                right -= 1\n            else:\n                break\n        return right <= left\n\n    def isPalindrome2(self, s: str) -> bool:\n        \"\"\"\n        使用语言特性进行求解\n        \"\"\"\n        s = ''.join(i for i in s if i.isalnum()).lower()\n        return s == s[::-1]\n"
        }
    ]
},
"json":{
    "id": "20",
    "name": "valid-parentheses",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.栈的基本特点和操作2.如果你用的是JS没有现成的栈，可以用数组来模拟入：push出：pop>入：push出shift就是队列",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/20.valid-parentheses.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {string} s\n * @return {boolean}\n */\nvar isValid = function (s) {\n  let valid = true;\n  const stack = [];\n  const mapper = {\n    \"{\": \"}\",\n    \"[\": \"]\",\n    \"(\": \")\",\n  };\n\n  for (let i in s) {\n    const v = s[i];\n    if ([\"(\", \"[\", \"{\"].indexOf(v) > -1) {\n      stack.push(v);\n    } else {\n      const peak = stack.pop();\n      if (v !== mapper[peak]) {\n        return false;\n      }\n    }\n  }\n\n  if (stack.length > 0) return false;\n\n  return valid;\n};\n"
        }
    ]
},
"json":{
    "id": "20",
    "name": "validParentheses",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 栈\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.栈的基本特点和操作2.如果你用的是JS没有现成的栈，可以用数组来模拟入：push出：pop>入：push出shift就是队列",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/20.validParentheses.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {string} s\n * @return {boolean}\n */\nvar isValid = function (s) {\n  let valid = true;\n  const stack = [];\n  const mapper = {\n    \"{\": \"}\",\n    \"[\": \"]\",\n    \"(\": \")\",\n  };\n\n  for (let i in s) {\n    const v = s[i];\n    if ([\"(\", \"[\", \"{\"].indexOf(v) > -1) {\n      stack.push(v);\n    } else {\n      const peak = stack.pop();\n      if (v !== mapper[peak]) {\n        return false;\n      }\n    }\n  }\n\n  if (stack.length > 0) return false;\n\n  return valid;\n};\n"
        }
    ]
},
"json":{
    "id": "98",
    "name": "validate-binary-search-tree",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 中序遍历\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二叉树的基本操作（遍历）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "中序遍历一个二叉查找树（BST）的结果是一个有序数组",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果一个树遍历的结果是有序数组，那么他也是一个二叉查找树(BST)",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/98.validate-binary-search-tree.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public boolean isValidBST(TreeNode root) {\n        Stack<Integer> stack = new Stack<> ();\n        TreeNode previous = null;\n\n        while (root != null || !stack.isEmpty()) {\n            while (root != null) {\n                stack.push(root);\n                root = root.left;\n            }\n            root = stack.pop();\n            if (previous != null && root.val <= previous.val ) return false;\n            previous = root;\n            root = root.right;\n        }\n        return true;\n    }\n}\n"
        },
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public boolean isValidBST(TreeNode root) {\n        return helper(root, null, null);\n    }\n\n    private boolean helper(TreeNode root, Integer lower, Integer higher) {\n        if (root == null) return true;\n\n        if (lower != null && root.val <= lower) return false;\n        if (higher != null && root.val >= higher) return false;\n\n        if (!helper(root.left, lower, root.val)) return false;\n        if (!helper(root.right, root.val, higher)) return false;\n\n        return true;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=98 lang=javascript\n *\n * [98] Validate Binary Search Tree\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isValidBST = function (root) {\n  if (root === null) return true;\n  if (root.left === null && root.right === null) return true;\n  const stack = [root];\n  let cur = root;\n  let pre = null;\n\n  function insertAllLefts(cur) {\n    while (cur && cur.left) {\n      const l = cur.left;\n      stack.push(l);\n      cur = l;\n    }\n  }\n  insertAllLefts(cur);\n\n  while ((cur = stack.pop())) {\n    if (pre && cur.val <= pre.val) return false;\n    const r = cur.right;\n\n    if (r) {\n      stack.push(r);\n      insertAllLefts(r);\n    }\n    pre = cur;\n  }\n\n  return true;\n};\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isValidBST = function (root) {\n  if (!root) return true;\n  return valid(root);\n};\n\nfunction valid(root, min = -Infinity, max = Infinity) {\n  if (!root) return true;\n  const val = root.val;\n  if (val <= min) return false;\n  if (val >= max) return false;\n  return valid(root.left, min, val) && valid(root.right, val, max);\n}\n"
        },
        {
            "language": "cpp",
            "text": "\n// 递归\nclass Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        TreeNode* prev = nullptr;\n        return validateBstInorder(root, prev);\n    }\n\nprivate:\n    bool validateBstInorder(TreeNode* root, TreeNode*& prev) {\n        if (root == nullptr) return true;\n        if (!validateBstInorder(root->left, prev)) return false;\n        if (prev != nullptr && prev->val >= root->val) return false;\n        prev = root;\n        return validateBstInorder(root->right, prev);\n    }\n};\n\n// 迭代\nclass Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        auto s = vector<TreeNode*>();\n        TreeNode* prev = nullptr;\n        while (root != nullptr || !s.empty()) {\n            while (root != nullptr) {\n                s.push_back(root);\n                root = root->left;\n            }\n            root = s.back();\n            s.pop_back();\n            if (prev != nullptr && prev->val >= root->val) return false;\n            prev = root;\n            root = root->right;\n        }\n        return true;\n    }\n};\n"
        }
    ]
},
"json":{
    "id": "874",
    "name": "walking-robot-simulation",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 哈希表\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "理解题意，这道题容易理解错题意，求解为`最终位置距离原点的距离`",
            "link": null,
            "color": "blue"
        },
        {
            "text": "建立坐标系",
            "link": null,
            "color": "blue"
        },
        {
            "text": "使用集合简化线形查找的时间复杂度。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/874.walking-robot-simulation.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:\n        pos = [0, 0]\n        deg = 90\n        ans = 0\n        obstaclesSet = set(map(tuple, obstacles))\n\n        for command in commands:\n            if command == -1:\n                deg = (deg + 270) % 360\n            elif command == -2:\n                deg = (deg + 90) % 360\n            else:\n                if deg == 0:\n                    i = 0\n                    while i < command and not (pos[0] + 1, pos[1]) in obstaclesSet:\n                        pos[0] += 1\n                        i += 1\n                if deg == 90:\n                    i = 0\n                    while i < command and not (pos[0], pos[1] + 1) in obstaclesSet:\n                        pos[1] += 1\n                        i += 1\n                if deg == 180:\n                    i = 0\n                    while i < command and not (pos[0] - 1, pos[1]) in obstaclesSet:\n                        pos[0] -= 1\n                        i += 1\n                if deg == 270:\n                    i = 0\n                    while i < command and not (pos[0], pos[1] - 1) in obstaclesSet:\n                        pos[1] -= 1\n                        i += 1\n                ans = max(ans, pos[0] ** 2 + pos[1] ** 2)\n        return ans\n"
        }
    ]
},
"json":{
    "id": "365",
    "name": "water-and-jug-problem",
    "company": [],
    "pre": [
        {
            "text": "\n\n- BFS\n- 最大公约数\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/365.water-and-jug-problem.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number} x\n * @param {number} y\n * @param {number} z\n * @return {boolean}\n */\nvar canMeasureWater = function(x, y, z) {\n  if (x + y < z) return false;\n\n  if (z === 0) return true;\n\n  if (x === 0) return y === z;\n\n  if (y === 0) return x === z;\n\n  function GCD(a, b) {\n    let min = Math.min(a, b);\n    while (min) {\n      if (a % min === 0 && b % min === 0) return min;\n      min--;\n    }\n    return 1;\n  }\n\n  return z % GCD(x, y) === 0;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def canMeasureWater(self, x: int, y: int, z: int) -> bool:\n        if x + y < z:\n            return False\n        queue = [(0, 0)]\n        seen = set((0, 0))\n\n        while(len(queue) > 0):\n            a, b = queue.pop(0)\n            if a ==z or b == z or a + b == z:\n                return True\n            states = set()\n\n            states.add((x, b))\n            states.add((a, y))\n            states.add((0, b))\n            states.add((a, 0)) \n            states.add((min(x, b + a), 0 if b < x - a else b - (x - a))) \n            states.add((0 if a + b < y else a - (y - b), min(b + a, y)))\n            for state in states:\n                if state in seen:\n                    continue;\n                queue.append(state)\n                seen.add(state)\n        return False\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def canMeasureWater(self, x: int, y: int, z: int) -> bool:\n        if x + y < z:\n            return False\n\n        if (z == 0):\n            return True\n\n        if (x == 0):\n            return y == z\n\n        if (y == 0):\n            return x == z\n\n        def GCD(a, b):\n            smaller = min(a, b)\n            while smaller:\n                if a % smaller == 0 and b % smaller == 0:\n                    return smaller\n                smaller -= 1\n\n        return z % GCD(x, y) == 0\n"
        },
        {
            "language": "py",
            "text": "\ndef GCD(a, b):\n    if b == 0: return a\n    return GCD(b, a % b)\n"
        }
    ]
},
"json":{
    "id": "139",
    "name": "word-break",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 动态规划\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/139.word-break.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=139 lang=javascript\n *\n * [139] Word Break\n *\n * https://leetcode.com/problems/word-break/description/\n *\n * algorithms\n * Medium (34.45%)\n * Total Accepted:    317.8K\n * Total Submissions: 913.9K\n * Testcase Example:  '\"leetcode\"\\n[\"leet\",\"code\"]'\n *\n * Given a non-empty string s and a dictionary wordDict containing a list of\n * non-empty words, determine if s can be segmented into a space-separated\n * sequence of one or more dictionary words.\n *\n * Note:\n *\n *\n * The same word in the dictionary may be reused multiple times in the\n * segmentation.\n * You may assume the dictionary does not contain duplicate words.\n *\n *\n * Example 1:\n *\n *\n * Input: s = \"leetcode\", wordDict = [\"leet\", \"code\"]\n * Output: true\n * Explanation: Return true because \"leetcode\" can be segmented as \"leet\n * code\".\n *\n *\n * Example 2:\n *\n *\n * Input: s = \"applepenapple\", wordDict = [\"apple\", \"pen\"]\n * Output: true\n * Explanation: Return true because \"applepenapple\" can be segmented as \"apple\n * pen apple\".\n * Note that you are allowed to reuse a dictionary word.\n *\n *\n * Example 3:\n *\n *\n * Input: s = \"catsandog\", wordDict = [\"cats\", \"dog\", \"sand\", \"and\", \"cat\"]\n * Output: false\n *\n *\n */\n/**\n * @param {string} s\n * @param {string[]} wordDict\n * @return {boolean}\n */\nvar wordBreak = function(s, wordDict) {\n  const dp = Array(s.length + 1);\n  dp[0] = true;\n  for (let i = 0; i < s.length + 1; i++) {\n    for (let word of wordDict) {\n      if (dp[i - word.length] && word.length <= i) {\n          if (s.substring(i - word.length, i) === word) {\n            dp[i] = true;\n          }\n      }\n    }\n  }\n\n  return dp[s.length] || false;\n};\n"
        }
    ]
},
"json":{
    "id": "79",
    "name": "word-search-en",
    "company": [],
    "pre": [],
    "keyPoints": [],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/79.word-search-en.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class LC79WordSearch {\n  public boolean exist(char[][] board, String word) {\n    if (board == null || board.length == 0 || board[0].length == 0\n        || word == null || word.length() == 0) return true;\n    int rows = board.length;\n    int cols = board[0].length;\n    for (int r = 0; r < rows; r++) {\n      for (int c = 0; c < cols; c++) {\n        // scan board, start with word first character \n        if (board[r][c] == word.charAt(0)) {\n          if (helper(board, word, r, c, 0)) {\n            return true;\n          }\n        }\n      }\n    }\n    return false;\n  }\n  \n  private boolean helper(char[][] board, String word, int r, int c, int start) {\n    // already match word all characters, return true\n    if (start == word.length()) return true;\n    if (!isValid(board, r, c) ||\n        board[r][c] != word.charAt(start)) return false;\n    // mark visited\n    board[r][c] = '*';\n    boolean res = helper(board, word, r + 1, c, start + 1)\n        ||  helper(board, word, r, c + 1, start + 1)\n        ||  helper(board, word, r - 1, c, start + 1)\n        ||  helper(board, word, r, c - 1, start + 1);\n    // backtracking to start position\n    board[r][c] = word.charAt(start);\n    return res;\n  }\n  \n  private boolean isValid(char[][] board, int r, int c) {\n    return r >= 0 && r < board.length && c >= 0 && c < board[0].length;\n  }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=79 lang=javascript\n *\n * [79] Word Search\n */\nfunction DFS(board, row, col, rows, cols, word, cur) {\n  // 边界检查\n  if (row >= rows || row < 0) return false;\n  if (col >= cols || col < 0) return false;\n\n  const item = board[row][col];\n\n  if (item !== word[cur]) return false;\n\n  if (cur + 1 === word.length) return true;\n\n  // If use HashMap keep track visited letters, then need manual clear HashMap for each backtrack which needs extra space.\n  // here we use a little trick\n  board[row][col] = null;\n\n  // UP, DOWN, LEFT, RIGHT\n  const res =\n    DFS(board, row + 1, col, rows, cols, word, cur + 1) ||\n    DFS(board, row - 1, col, rows, cols, word, cur + 1) ||\n    DFS(board, row, col - 1, rows, cols, word, cur + 1) ||\n    DFS(board, row, col + 1, rows, cols, word, cur + 1);\n\n  board[row][col] = item;\n\n  return res;\n}\n/**\n * @param {character[][]} board\n * @param {string} word\n * @return {boolean}\n */\nvar exist = function(board, word) {\n  if (word.length === 0) return true;\n  if (board.length === 0) return false;\n\n  const rows = board.length;\n  const cols = board[0].length;\n\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      const hit = DFS(board, i, j, rows, cols, word, 0);\n      if (hit) return true;\n    }\n  }\n  return false;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        m = len(board)\n        n = len(board[0])\n        \n        def dfs(board, r, c, word, index):\n            if index == len(word):\n                return True\n            if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[index]:\n                return False\n            board[r][c] = '*'\n            res = dfs(board, r - 1, c, word, index + 1) or dfs(board, r + 1, c, word, index + 1) or dfs(board, r, c - 1, word, index + 1) or dfs(board, r, c + 1, word, index + 1)\n            board[r][c] = word[index]\n            return res\n        \n        for r in range(m):\n            for c in range(n):\n                if board[r][c] == word[0]:\n                    if dfs(board, r, c, word, 0):\n                        return True\n"
        }
    ]
},
"json":{
    "id": "212",
    "name": "word-search-ii",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 前缀树\n- DFS\n  \n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀树（也叫字典树），英文名Trie（读作tree或者try）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "DFS",
            "link": null,
            "color": "blue"
        },
        {
            "text": "hashmap结合dfs记录访问过的元素的时候，注意结束之后需要将hashmap的值重置。（下方代码的`delseen[(i,j)]`）",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/212.word-search-ii.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Trie:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.Trie = {}\n\n    def insert(self, word):\n        \"\"\"\n        Inserts a word into the trie.\n        :type word: str\n        :rtype: void\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                curr[w] = {}\n            curr = curr[w]\n        curr['#'] = 1\n\n    def startsWith(self, prefix):\n        \"\"\"\n        Returns if there is any word in the trie that starts with the given prefix.\n        :type prefix: str\n        :rtype: bool\n        \"\"\"\n\n        curr = self.Trie\n        for w in prefix:\n            if w not in curr:\n                return False\n            curr = curr[w]\n        return True\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\n        m = len(board)\n        if m == 0:\n            return []\n        n = len(board[0])\n        trie = Trie()\n        seen = None\n        res = set()\n        for word in words:\n            trie.insert(word)\n\n        def dfs(s, i, j):\n            if (i, j) in seen or i < 0 or i >= m or j < 0 or j >= n or not trie.startsWith(s):\n                return\n            s += board[i][j]\n            seen[(i, j)] = True\n\n            if s in words:\n                res.add(s)\n            dfs(s, i + 1, j)\n            dfs(s, i - 1, j)\n            dfs(s, i, j + 1)\n            dfs(s, i, j - 1)\n\n            del seen[(i, j)]\n\n        for i in range(m):\n            for j in range(n):\n                seen = dict()\n                dfs(\"\", i, j)\n        return list(res)\n"
        }
    ]
},
"json":{
    "id": "79",
    "name": "word-search",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 回溯\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历二维数组的每一个点，找到起始点相同的字符，做DFS",
            "link": null,
            "color": "blue"
        },
        {
            "text": "DFS过程中，要记录已经访问过的节点，防止重复遍历，这里（JavaCode中）用`*`表示当前已经访问过，也可以用Set或者是boolean[][]数组记录访问过的节点位置。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "是否匹配当前单词中的字符，不符合回溯，这里记得把当前`*`重新设为当前字符。如果用Set或者是boolean[][]数组，记得把当前位置重设为没有访问过。",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/79.word-search.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class LC79WordSearch {\n  public boolean exist(char[][] board, String word) {\n    if (board == null || board.length == 0 || board[0].length == 0\n        || word == null || word.length() == 0) return true;\n    int rows = board.length;\n    int cols = board[0].length;\n    for (int r = 0; r < rows; r++) {\n      for (int c = 0; c < cols; c++) {\n        // scan board, start with word first character\n        if (board[r][c] == word.charAt(0)) {\n          if (helper(board, word, r, c, 0)) {\n            return true;\n          }\n        }\n      }\n    }\n    return false;\n  }\n\n  private boolean helper(char[][] board, String word, int r, int c, int start) {\n    // already match word all characters, return true\n    if (start == word.length()) return true;\n    if (!isValid(board, r, c) ||\n        board[r][c] != word.charAt(start)) return false;\n    // mark visited\n    board[r][c] = '*';\n    boolean res = helper(board, word, r - 1, c, start + 1) // 上\n        ||  helper(board, word, r + 1, c, start + 1)       // 下\n        ||  helper(board, word, r, c - 1, start + 1)       // 左\n        ||  helper(board, word, r, c + 1, start + 1);      // 右\n    // backtracking to start position\n    board[r][c] = word.charAt(start);\n    return res;\n  }\n\n  private boolean isValid(char[][] board, int r, int c) {\n    return r >= 0 && r < board.length && c >= 0 && c < board[0].length;\n  }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=79 lang=javascript\n *\n * [79] Word Search\n */\nfunction DFS(board, row, col, rows, cols, word, cur) {\n  // 边界检查\n  if (row >= rows || row < 0) return false;\n  if (col >= cols || col < 0) return false;\n\n  const item = board[row][col];\n\n  if (item !== word[cur]) return false;\n\n  if (cur + 1 === word.length) return true;\n\n  // 如果你用hashmap记录访问的字母， 那么你需要每次backtrack的时候手动清除hashmap，并且需要额外的空间\n  // 这里我们使用一个little trick\n\n  board[row][col] = null;\n\n  // 上下左右\n  const res =\n    DFS(board, row + 1, col, rows, cols, word, cur + 1) ||\n    DFS(board, row - 1, col, rows, cols, word, cur + 1) ||\n    DFS(board, row, col - 1, rows, cols, word, cur + 1) ||\n    DFS(board, row, col + 1, rows, cols, word, cur + 1);\n\n  board[row][col] = item;\n\n  return res;\n}\n/**\n * @param {character[][]} board\n * @param {string} word\n * @return {boolean}\n */\nvar exist = function (board, word) {\n  if (word.length === 0) return true;\n  if (board.length === 0) return false;\n\n  const rows = board.length;\n  const cols = board[0].length;\n\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      const hit = DFS(board, i, j, rows, cols, word, 0);\n      if (hit) return true;\n    }\n  }\n  return false;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        m = len(board)\n        n = len(board[0])\n\n        def dfs(board, r, c, word, index):\n            if index == len(word):\n                return True\n            if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[index]:\n                return False\n            board[r][c] = '*'\n            res = dfs(board, r - 1, c, word, index + 1) or dfs(board, r + 1, c, word, index + 1) or dfs(board, r, c - 1, word, index + 1) or dfs(board, r, c + 1, word, index + 1)\n            board[r][c] = word[index]\n            return res\n\n        for r in range(m):\n            for c in range(n):\n                if board[r][c] == word[0]:\n                    if dfs(board, r, c, word, 0):\n                        return True\n"
        }
    ]
},
"json":{
    "id": "1310",
    "name": "xor-queries-of-a-subarray",
    "company": [],
    "pre": [
        {
            "text": "\n\n- 前缀和\n\n",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "异或的性质x^y^x=y",
            "link": null,
            "color": "blue"
        },
        {
            "text": "前缀表达式",
            "link": null,
            "color": "blue"
        }
    ],
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1310.xor-queries-of-a-subarray.md",
    "code": [
        {
            "language": "java",
            "text": "\n  public int[] xorQueries(int[] arr, int[][] queries) {\n\n        int[] preXor = new int[arr.length];\n        preXor[0] = 0;\n\n        for (int i = 1; i < arr.length; i++)\n            preXor[i] = preXor[i - 1] ^ arr[i - 1];\n\n        int[] res = new int[queries.length];\n\n        for (int i = 0; i < queries.length; i++) {\n\n            int left = queries[i][0], right = queries[i][1];\n            res[i] = arr[right] ^ preXor[right] ^ preXor[left];\n        }\n\n        return res;\n    }\n\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    vector<int> xorQueries(vector<int>& arr, vector<vector<int>>& queries) {\n        vector<int>res;\n        for(int i=1; i<arr.size(); ++i){\n            arr[i]^=arr[i-1];\n        }\n        for(vector<int>temp :queries){\n            if(temp[0]==0){\n                res.push_back(arr[temp[1]]);\n            }\n            else{\n                res.push_back(arr[temp[0]-1]^arr[temp[1]]);\n            }\n        }\n        return res;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:\n \t\tres = []\n        for (L, R) in queries:\n            i = L\n            xor = 0\n            while i <= R:\n                xor ^= arr[i]\n                i += 1\n            res.append(xor)\n        return res\n"
        },
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1218 lang=python3\n#\n# [1218] 最长定差子序列\n#\n\n# @lc code=start\n\n\nclass Solution:\n    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:\n\t\tpre = [0]\n        res = []\n        for i in range(len(arr)):\n            pre.append(pre[i] ^ arr[i])\n        for (L, R) in queries:\n            res.append(pre[L] ^ pre[R + 1])\n        return res\n\n# @lc code=end\n"
        }
    ]
},

     }
   
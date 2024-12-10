
/* eslint-disable */
    export const db_collection = {
       "two-sum":{
    "id": "1",
    "name": "two-sum",
    "pre": [
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
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
    "companies": [
        {
            "name": "字节跳动"
        },
        {
            "name": "百度"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "adobe"
        },
        {
            "name": "airbnb"
        },
        {
            "name": "amazon"
        },
        {
            "name": "apple"
        },
        {
            "name": "bloomberg"
        },
        {
            "name": "dropbox"
        },
        {
            "name": "facebook"
        },
        {
            "name": "linkedin"
        },
        {
            "name": "microsoft"
        },
        {
            "name": "uber"
        },
        {
            "name": "yahoo"
        },
        {
            "name": "yelp"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1.two-sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1.two-sum.md",
    "code": [
        {
            "language": "java",
            "text": "\nfor(int i = 0; i < n; i++) {\n  for(int j = 0; j < i;j ++){\n    if (nums[i] + nums[j] == target) return [j, i]\n  }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> hashtable = new HashMap<Integer, Integer>();\n        for (int i = 0; i < nums.length; ++i) {\n            if (hashtable.containsKey(target - nums[i])) {\n                return new int[]{hashtable.get(target - nums[i]), i};\n            }\n            hashtable.put(nums[i], i);\n        }\n        return new int[0];\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nconst twoSum = function (nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n    if (map.has(diff)) {\n      return [map.get(diff), i];\n    }\n    map.set(nums[i], i);\n  }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& A, int target) {\n        unordered_map<int, int> m;\n        for (int i = 0; i < A.size(); ++i) {\n            int t = target - A[i];\n            if (m.count(t)) return { m[t], i };\n            m[A[i]] = i;\n        }\n        return {};\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        hashtable = dict()\n        for i, num in enumerate(nums):\n            if target - num in hashtable:\n                return [hashtable[target - num], i]\n            hashtable[nums[i]] = i\n        return []\n"
        }
    ]
},
"add-two-numbers":{
    "id": "2",
    "name": "add-two-numbers",
    "pre": [
        {
            "text": "链表",
            "link": null,
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.链表这种数据结构的特点和使用2.用一个carried变量来实现进位的功能，每次相加之后计算carried，并用于下一位的计算",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "百度"
        },
        {
            "name": "腾讯"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2.add-two-numbers.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2.add-two-numbers.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        ListNode dummyHead = new ListNode(0);\n        ListNode cur = dummyHead;\n        int carry = 0;\n\n        while(l1 != null || l2 != null)\n        {\n            int sum = carry;\n            if(l1 != null)\n            {\n                sum += l1.val;\n                l1 = l1.next;\n            }\n            if(l2 != null)\n            {\n                sum += l2.val;\n                l2 = l2.next;\n            }\n            // 创建新节点\n            carry = sum / 10;\n            cur.next = new ListNode(sum % 10);\n            cur = cur.next;\n\n        }\n        if (carry > 0) {\n            cur.next = new ListNode(carry);\n        }\n        return dummyHead.next;\n    }\n}\n\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function (l1, l2) {\n  if (l1 === null || l2 === null) return null;\n\n  // 使用dummyHead可以简化对链表的处理，dummyHead.next指向新链表\n  let dummyHead = new ListNode(0);\n  let cur1 = l1;\n  let cur2 = l2;\n  let cur = dummyHead; // cur用于计算新链表\n  let carry = 0; // 进位标志\n\n  while (cur1 !== null || cur2 !== null) {\n    let val1 = cur1 !== null ? cur1.val : 0;\n    let val2 = cur2 !== null ? cur2.val : 0;\n    let sum = val1 + val2 + carry;\n    let newNode = new ListNode(sum % 10); // sum%10取模结果范围为0~9，即为当前节点的值\n    carry = sum >= 10 ? 1 : 0; // sum>=10，carry=1，表示有进位\n    cur.next = newNode;\n    cur = cur.next;\n\n    if (cur1 !== null) {\n      cur1 = cur1.next;\n    }\n\n    if (cur2 !== null) {\n      cur2 = cur2.next;\n    }\n  }\n\n  if (carry > 0) {\n    // 如果最后还有进位，新加一个节点\n    cur.next = new ListNode(carry);\n  }\n\n  return dummyHead.next;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        ListNode* ret = nullptr;\n        ListNode* cur = nullptr;\n        int carry = 0;\n        while (l1 != nullptr || l2 != nullptr || carry != 0) {\n            carry += (l1 == nullptr ? 0 : l1->val) + (l2 == nullptr ? 0 : l2->val);\n            auto temp = new ListNode(carry % 10);\n            carry /= 10;\n            if (ret == nullptr) {\n                ret = temp;\n                cur = ret;\n            }\n            else {\n                cur->next = temp;\n                cur = cur->next;\n            }\n            l1 = l1 == nullptr ? nullptr : l1->next;\n            l2 = l2 == nullptr ? nullptr : l2->next;\n        }\n        return ret;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def addTwoNumbers(self, l1, l2):\n        \"\"\"\n        :type l1: ListNode\n        :type l2: ListNode\n        :rtype: ListNode\n        \"\"\"\n        res=ListNode(0)\n        head=res\n        carry=0\n        while l1 or l2 or carry!=0:\n            sum=carry\n            if l1:\n                sum+=l1.val\n                l1=l1.next\n            if l2:\n                sum+=l2.val\n                l2=l2.next\n            # set value\n            if sum<=9:\n                res.val=sum\n                carry=0\n            else:\n                res.val=sum%10\n                carry=sum//10\n            # creat new node\n            if l1 or l2 or carry!=0:\n                res.next=ListNode(0)\n                res=res.next\n        return head\n\n"
        }
    ]
},
"longest-substring-without-repeating-characters":{
    "id": "3",
    "name": "longest-substring-without-repeating-characters",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/3.longest-substring-without-repeating-characters.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/3.longest-substring-without-repeating-characters.md",
    "code": []
},
"median-of-two-sorted-arrays":{
    "id": "4",
    "name": "median-of-two-sorted-arrays",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/4.median-of-two-sorted-arrays.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/4.median-of-two-sorted-arrays.md",
    "code": []
},
"longest-palindromic-substring":{
    "id": "5",
    "name": "longest-palindromic-substring",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/5.longest-palindromic-substring.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5.longest-palindromic-substring.md",
    "code": []
},
"container-with-most-water":{
    "id": "11",
    "name": "container-with-most-water",
    "pre": [
        {
            "text": "双指针",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "双指针优化时间复杂度",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "字节跳动"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "阿里巴巴"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/11.container-with-most-water.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/11.container-with-most-water.md",
    "code": [
        {
            "language": "js",
            "text": "\nlet max = 0;\nfor (let i = 0; i < height.length; i++) {\n  for (let j = i + 1; j < height.length; j++) {\n    const currentArea = Math.abs(i - j) * Math.min(height[i], height[j]);\n    if (currentArea > max) {\n      max = currentArea;\n    }\n  }\n}\nreturn max;\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} height\n * @return {number}\n */\nvar maxArea = function (height) {\n  if (!height || height.length <= 1) return 0;\n\n  let leftPos = 0;\n  let rightPos = height.length - 1;\n  let max = 0;\n  while (leftPos < rightPos) {\n    const currentArea =\n      Math.abs(leftPos - rightPos) *\n      Math.min(height[leftPos], height[rightPos]);\n    if (currentArea > max) {\n      max = currentArea;\n    }\n    // 更新小的\n    if (height[leftPos] < height[rightPos]) {\n      leftPos++;\n    } else {\n      // 如果相等就随便了\n      rightPos--;\n    }\n  }\n\n  return max;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxArea(self, heights):\n        l, r =  0, len(heights) - 1\n        ans = 0\n        while l < r:\n            ans = max(ans, (r - l) * min(heights[l], heights[r]))\n            if heights[r] > heights[l]:\n                l += 1\n            else:\n                r -= 1\n        return ans\n"
        }
    ]
},
"3sum":{
    "id": "15",
    "name": "3sum",
    "pre": [
        {
            "text": "排序",
            "link": null,
            "color": "purple"
        },
        {
            "text": "双指针",
            "link": null,
            "color": "green"
        },
        {
            "text": "分治",
            "link": null,
            "color": "gold"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/15.3sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/15.3sum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar threeSum = function (nums) {\n  if (nums.length < 3) return [];\n  const list = [];\n  nums.sort((a, b) => a - b);\n  for (let i = 0; i < nums.length; i++) {\n    //nums is sorted,so it's impossible to have a sum = 0\n    if (nums[i] > 0) break;\n    // skip duplicated result without set\n    if (i > 0 && nums[i] === nums[i - 1]) continue;\n    let left = i + 1;\n    let right = nums.length - 1;\n\n    // for each index i\n    // we want to find the triplet [i, left, right] which sum to 0\n    while (left < right) {\n      // since left < right, and left > i, no need to compare i === left and i === right.\n      if (nums[left] + nums[right] + nums[i] === 0) {\n        list.push([nums[left], nums[right], nums[i]]);\n        // skip duplicated result without set\n        while (nums[left] === nums[left + 1]) {\n          left++;\n        }\n        left++;\n        // skip duplicated result without set\n        while (nums[right] === nums[right - 1]) {\n          right--;\n        }\n        right--;\n        continue;\n      } else if (nums[left] + nums[right] + nums[i] > 0) {\n        right--;\n      } else {\n        left++;\n      }\n    }\n  }\n  return list;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& A) {\n        sort(begin(A), end(A));\n        vector<vector<int>> ans;\n        int N = A.size();\n        for (int i = 0; i < N - 2; ++i) {\n            if (i && A[i] == A[i - 1]) continue;\n            int L = i + 1, R = N - 1;\n            while (L < R) {\n                int sum = A[i] + A[L] + A[R];\n                if (sum == 0) ans.push_back({ A[i], A[L], A[R] });\n                if (sum >= 0) {\n                    --R;\n                    while (L < R && A[R] == A[R + 1]) --R;\n                }\n                if (sum <= 0) {\n                    ++L;\n                    while (L < R && A[L] == A[L - 1]) ++L;\n                }\n            }\n        }\n        return ans;\n    }\n}\n"
        }
    ]
},
"Letter-Combinations-of-a-Phone-Number":{
    "id": "17",
    "name": "Letter-Combinations-of-a-Phone-Number",
    "pre": [
        {
            "text": "回溯",
            "link": null,
            "color": "green"
        },
        {
            "text": "笛卡尔积",
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "腾讯"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/17.Letter-Combinations-of-a-Phone-Number.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/17.Letter-Combinations-of-a-Phone-Number.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n\n    private String letterMap[] = {\n            \" \",    //0\n            \"\",     //1\n            \"abc\",  //2\n            \"def\",  //3\n            \"ghi\",  //4\n            \"jkl\",  //5\n            \"mno\",  //6\n            \"pqrs\", //7\n            \"tuv\",  //8\n            \"wxyz\"  //9\n    };\n    private ArrayList<String> res;\n    public List<String> letterCombinations(String digits) {\n        res = new ArrayList<String>();\n        if(digits.equals(\"\"))\n        {\n            return res;\n        }\n        dfs(digits, 0, \"\");\n        return res;\n    }\n\n    public void dfs(String digits, int index, String s)\n    {\n        if(index == digits.length())\n        {\n            res.add(s);\n            return;\n        }\n        // 获取当前数字\n        Character c = digits.charAt(index);\n        // 获取数字对应字母\n        String letters = letterMap[c-'0'];\n        for(int i = 0 ; i < letters.length() ; i ++)\n        {\n            dfs(digits, index+1, s+letters.charAt(i));\n        }\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {string} digits\n * @return {string[]}\n */\nconst letterCombinations = function (digits) {\n  if (!digits) {\n    return [];\n  }\n  const len = digits.length;\n  const map = new Map();\n  map.set(\"2\", \"abc\");\n  map.set(\"3\", \"def\");\n  map.set(\"4\", \"ghi\");\n  map.set(\"5\", \"jkl\");\n  map.set(\"6\", \"mno\");\n  map.set(\"7\", \"pqrs\");\n  map.set(\"8\", \"tuv\");\n  map.set(\"9\", \"wxyz\");\n  const result = [];\n\n  function generate(i, str) {\n    if (i == len) {\n      result.push(str);\n      return;\n    }\n    const tmp = map.get(digits[i]);\n    for (let r = 0; r < tmp.length; r++) {\n      generate(i + 1, str + tmp[r]);\n    }\n  }\n  generate(0, \"\");\n  return result;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    string letterMap[10] = {\" \",\" \",\"abc\",\"def\",\"ghi\",\"jkl\",\"mno\",\"pqrs\",\"tuv\",\"wxyz\"};\n    vector<string> res;\n    vector<string> letterCombinations(string digits) {\n        if(digits == \"\")\n        {\n            return res;\n        }\n        dfs(digits, 0, \"\");\n        return res;\n    }\n\n    void dfs(string digits, int index, string s)\n    {\n        if(index == digits.length())\n        {\n            res.push_back(s);\n            return;\n        }\n        // 获取当前数字\n        char c = digits[index];\n        // 获取数字对应字母\n        string letters = letterMap[c-'0'];\n        for(int i = 0 ; i < letters.length() ; i ++)\n        {\n            dfs(digits, index+1, s+letters[i]);\n        }\n    }\n}\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    def letterCombinations(self, digits):\n        \"\"\"\n        :type digits: str\n        :rtype: List[str]\n        \"\"\"\n        if not digits:\n            return []\n        # 0-9\n        self.d = [\" \",\" \",\"abc\",\"def\",\"ghi\",\"jkl\",\"mno\",\"pqrs\",\"tuv\",\"wxyz\"]\n        self.res = []\n        self.dfs(digits, 0, \"\")\n        return self.res\n\n    def dfs(self, digits, index, s):\n        # 递归的终止条件,用index记录每次遍历到字符串的位置\n        if index == len(digits):\n            self.res.append(s)\n            return\n        # 获取当前数字\n        c = digits[index]\n        # print(c, int(c))\n        # 获取数字对应字母\n        letters = self.d[int(c)]\n        # 遍历字符串\n        for l in letters:\n            # 调用下一层\n            self.dfs(digits, index+1, s+l)\n"
        },
        {
            "language": "py",
            "text": "\n\n# 输入：\"23\"\n# 输出：[\"ad\", \"ae\", \"af\", \"bd\", \"be\", \"bf\", \"cd\", \"ce\", \"cf\"].\nclass Solution:\n    def letterCombinations(self, digits: str) -> List[str]:\n        mapper = [\" \", \" \", \"abc\", \"def\", \"ghi\",\n                  \"jkl\", \"mno\", \"pqrs\", \"tuv\", \"wxyz\"]\n        @lru_cache(None)\n        def backtrack(digits, start):\n            if start >= len(digits):\n                return ['']\n            ans = []\n            for i in range(start, len(digits)):\n                for c in mapper[int(digits[i])]:\n                    # 笛卡尔积\n                    for p in backtrack(digits, i + 1):\n                        # 需要过滤诸如  \"d\", \"e\", \"f\" 等长度不符合的数据\n                        if start == 0:\n                            if len(c + p) == len(digits):\n                                ans.append(c + p)\n                        else:\n                            ans.append(c + p)\n            return ans\n        if not digits:\n            return []\n        return backtrack(digits, 0)\n\n"
        }
    ]
},
"removeNthNodeFromEndofList":{
    "id": "19",
    "name": "removeNthNodeFromEndofList",
    "pre": [
        {
            "text": "链表",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "双指针",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.链表这种数据结构的特点和使用2.使用双指针3.使用一个dummyHead简化操作",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "百度"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/19.removeNthNodeFromEndofList.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/19.removeNthNodeFromEndofList.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        TreeNode dummy = new TreeNode(0);\n        dummy.next = head;\n        TreeNode first = dummy;\n        TreeNode second = dummy;\n\n        if (int i=0; i<=n; i++) {\n            first = first.next;\n        }\n\n        while (first != null) {\n            first = first.next;\n            second = second.next;\n        }\n\n        second.next = second.next.next;\n\n        return dummy.next;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {ListNode} head\n * @param {number} n\n * @return {ListNode}\n */\nvar removeNthFromEnd = function (head, n) {\n  let i = -1;\n  const noop = {\n    next: null,\n  };\n\n  const dummyHead = new ListNode(); // 增加一个dummyHead 简化操作\n  dummyHead.next = head;\n\n  let currentP1 = dummyHead;\n  let currentP2 = dummyHead;\n\n  while (currentP1) {\n    if (i === n) {\n      currentP2 = currentP2.next;\n    }\n\n    if (i !== n) {\n      i++;\n    }\n\n    currentP1 = currentP1.next;\n  }\n\n  currentP2.next = ((currentP2 || noop).next || noop).next;\n\n  return dummyHead.next;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    ListNode* removeNthFromEnd(ListNode* head, int n) {\n        ListNode *p = head, *q = head;\n        while (n--) q = q->next;\n        if (!q) {\n            head = head->next;\n            delete p;\n            return head;\n        }\n        while (q->next) p = p->next, q = q->next;\n        q = p->next;\n        p->next = q->next;\n        delete q;\n        return head;\n    }\n};\n"
        }
    ]
},
"valid-parentheses":{
    "id": "20",
    "name": "valid-parentheses",
    "pre": [
        {
            "text": "栈",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.栈的基本特点和操作2.可以用数组来模拟栈比如入：push出：pop就是栈。入：push出shift就是队列。但是这种算法实现的队列在头部删除元素的时候时间复杂度比较高，具体大家可以参考一下[双端队列deque](https://zh.wikipedia.org/wiki/%E5%8F%8C%E7%AB%AF%E9%98%9F%E5%88%97)。",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "百度"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "airbnb"
        },
        {
            "name": "amazon"
        },
        {
            "name": "bloomberg"
        },
        {
            "name": "facebook"
        },
        {
            "name": "google"
        },
        {
            "name": "microsoft"
        },
        {
            "name": "twitter"
        },
        {
            "name": "zenefits"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/20.valid-parentheses.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/20.valid-parentheses.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public boolean isValid(String s) {\n        //1.判断空字符串\n        if(s.isEmpty()) return true;\n        //2.创建辅助栈\n        Stack<Character> stack = new Stack<>();\n        //3.仅遍历一次\n        for(char c : s.toCharArray()){\n            if(c == '('){\n                stack.push(')');\n            }else if(c == '['){\n                stack.push(']');\n            }else if(c == '{'){\n                stack.push('}');\n            }else if(stack.isEmpty() || c != stack.pop()){\n                return false;\n            }\n        }\n        //4.返回\n        return stack.isEmpty();\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {string} s\n * @return {boolean}\n */\nvar isValid = function (s) {\n  let valid = true;\n  const stack = [];\n  const mapper = {\n    \"{\": \"}\",\n    \"[\": \"]\",\n    \"(\": \")\",\n  };\n\n  for (let i in s) {\n    const v = s[i];\n    if ([\"(\", \"[\", \"{\"].indexOf(v) > -1) {\n      stack.push(v);\n    } else {\n      const peak = stack.pop();\n      if (v !== mapper[peak]) {\n        return false;\n      }\n    }\n  }\n\n  if (stack.length > 0) return false;\n\n  return valid;\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar isValid = function (s) {\n  while (s.includes(\"[]\") || s.includes(\"()\") || s.includes(\"{}\")) {\n    s = s.replace(\"[]\", \"\").replace(\"()\", \"\").replace(\"{}\", \"\");\n  }\n  s = s.replace(\"[]\", \"\").replace(\"()\", \"\").replace(\"{}\", \"\");\n  return s.length === 0;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    bool isValid(string s) {\n        int n = s.size();\n        if (n % 2 == 1) {\n            return false;\n        }\n\n        unordered_map<char, char> pairs = {\n            {')', '('},\n            {']', '['},\n            {'}', '{'}\n        };\n        stack<char> stk;\n        for (char ch: s) {\n            if (pairs.count(ch)) {\n                if (stk.empty() || stk.top() != pairs[ch]) {\n                    return false;\n                }\n                stk.pop();\n            }\n            else {\n                stk.push(ch);\n            }\n        }\n        return stk.empty();\n    }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    bool isValid(string s) {\n        int top = -1;\n        for(int i =0;i<s.length();++i){\n            if(top<0 || !isMatch(s[top], s[i])){\n                ++top;\n                s[top] = s[i];\n            }else{\n                --top;\n            }\n        }\n        return top == -1;\n    }\n    bool isMatch(char c1, char c2){\n        if(c1 == '(' && c2 == ')') return true;\n        if(c1 == '[' && c2 == ']') return true;\n        if(c1 == '{' && c2 == '}') return true;\n        return false;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\n    class Solution:\n        def isValid(self,s):\n          stack = []\n          map = {\n            \"{\":\"}\",\n            \"[\":\"]\",\n            \"(\":\")\"\n          }\n          for x in s:\n            if x in map:\n              stack.append(map[x])\n            else:\n              if len(stack)!=0:\n                top_element = stack.pop()\n                if x != top_element:\n                  return False\n                else:\n                  continue\n              else:\n                return False\n          return len(stack) == 0\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n     def isValid(self, s):\n\n        while '[]' in s or '()' in s or '{}' in s:\n            s = s.replace('[]','').replace('()','').replace('{}','')\n        return not len(s)\n"
        }
    ]
},
"merge-two-sorted-lists":{
    "id": "21",
    "name": "merge-two-sorted-lists",
    "pre": [
        {
            "text": "递归",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
            "color": "orange"
        },
        {
            "text": "链表",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "掌握链表数据结构",
            "link": null,
            "color": "blue"
        },
        {
            "text": "考虑边界情况",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "amazon"
        },
        {
            "name": "apple"
        },
        {
            "name": "linkedin"
        },
        {
            "name": "microsoft"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/21.merge-two-sorted-lists.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/21.merge-two-sorted-lists.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        if (l1 == null) {\n            return l2;\n        }\n        else if (l2 == null) {\n            return l1;\n        }\n        else if (l1.val < l2.val) {\n            l1.next = mergeTwoLists(l1.next, l2);\n            return l1;\n        }\n        else {\n            l2.next = mergeTwoLists(l1, l2.next);\n            return l2;\n        }\n\n    }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        ListNode prehead = new ListNode(-1);\n\n        ListNode prev = prehead;\n        while (l1 != null && l2 != null) {\n            if (l1.val <= l2.val) {\n                prev.next = l1;\n                l1 = l1.next;\n            } else {\n                prev.next = l2;\n                l2 = l2.next;\n            }\n            prev = prev.next;\n        }\n\n        // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可\n        prev.next = l1 == null ? l2 : l1;\n\n        return prehead.next;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nconst mergeTwoLists = function (l1, l2) {\n  if (l1 === null) {\n    return l2;\n  }\n  if (l2 === null) {\n    return l1;\n  }\n  if (l1.val < l2.val) {\n    l1.next = mergeTwoLists(l1.next, l2);\n    return l1;\n  } else {\n    l2.next = mergeTwoLists(l1, l2.next);\n    return l2;\n  }\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar mergeTwoLists = function (l1, l2) {\n  const prehead = new ListNode(-1);\n\n  let prev = prehead;\n  while (l1 != null && l2 != null) {\n    if (l1.val <= l2.val) {\n      prev.next = l1;\n      l1 = l1.next;\n    } else {\n      prev.next = l2;\n      l2 = l2.next;\n    }\n    prev = prev.next;\n  }\n  prev.next = l1 === null ? l2 : l1;\n\n  return prehead.next;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n        if (l1 == nullptr) {\n            return l2;\n        } else if (l2 == nullptr) {\n            return l1;\n        } else if (l1->val < l2->val) {\n            l1->next = mergeTwoLists(l1->next, l2);\n            return l1;\n        } else {\n            l2->next = mergeTwoLists(l1, l2->next);\n            return l2;\n        }\n    }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* a, ListNode* b) {\n        ListNode head, *tail = &head;\n        while (a && b) {\n            if (a->val <= b->val) {\n                tail->next = a;\n                a = a->next;\n            } else {\n                tail->next = b;\n                b = b->next;\n            }\n            tail = tail->next;\n        }\n        tail->next = a ? a : b;\n        return head.next;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:\n        if not l1: return l2  # 终止条件，直到两个链表都空\n        if not l2: return l1\n        if l1.val <= l2.val:  # 递归调用\n            l1.next = self.mergeTwoLists(l1.next,l2)\n            return l1\n        else:\n            l2.next = self.mergeTwoLists(l1,l2.next)\n            return l2\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:\n        prehead = ListNode(-1)\n\n        prev = prehead\n        while l1 and l2:\n            if l1.val <= l2.val:\n                prev.next = l1\n                l1 = l1.next\n            else:\n                prev.next = l2\n                l2 = l2.next            \n            prev = prev.next\n\n        # 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可\n        prev.next = l1 if l1 is not None else l2\n\n        return prehead.next\n"
        }
    ]
},
"generate-parentheses":{
    "id": "22",
    "name": "generate-parentheses",
    "pre": [
        {
            "text": "DFS",
            "link": null,
            "color": "red"
        },
        {
            "text": "回溯法",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "当l<r时记得剪枝",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "百度"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/22.generate-parentheses.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/22.generate-parentheses.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number} n\n * @return {string[]}\n * @param l 左括号已经用了几个\n * @param r 右括号已经用了几个\n * @param str 当前递归得到的拼接字符串结果\n * @param res 结果集\n */\nconst generateParenthesis = function (n) {\n  const res = [];\n\n  function dfs(l, r, str) {\n    if (l == n && r == n) {\n      return res.push(str);\n    }\n    // l 小于 r 时不满足条件 剪枝\n    if (l < r) {\n      return;\n    }\n    // l 小于 n 时可以插入左括号，最多可以插入 n 个\n    if (l < n) {\n      dfs(l + 1, r, str + \"(\");\n    }\n    // r < l 时 可以插入右括号\n    if (r < l) {\n      dfs(l, r + 1, str + \")\");\n    }\n  }\n  dfs(0, 0, \"\");\n  return res;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\ns.push_back(')');\ndfs(l, r + 1, s);\ns.pop_back();\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\nprivate:\n    vector<string> ans;\n    void generate(int leftCnt, int rightCnt, string &s) {\n        if (!leftCnt && !rightCnt) {\n            ans.push_back(s);\n            return;\n        }\n        if (leftCnt) {\n            s.push_back('(');\n            generate(leftCnt - 1, rightCnt, s);\n            s.pop_back();\n        }\n        if (rightCnt > leftCnt) {\n            s.push_back(')');\n            generate(leftCnt, rightCnt - 1, s);\n            s.pop_back();\n        }\n    }\npublic:\n    vector<string> generateParenthesis(int n) {\n        string s;\n        generate(n, n, s);\n        return ans;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nres = []\ndef dfs(l, r, s):\n   if l > n or r > n: return\n   if (l == r == n): res.append(s)\n   # 剪枝，提高算法效率\n   if l < r: return\n   # 加一个左括号\n   dfs(l + 1, r, s + '(')\n   # 加一个右括号\n   dfs(l, r + 1, s + ')')\ndfs(0, 0, '')\nreturn res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def generateParenthesis(self, n: int) -> List[str]:\n        res = []\n        def dfs(l, r, s):\n            if l > n or r > n: return\n            if (l == r == n): res.append(s)\n            if l < r: return\n            # 加一个左括号\n            dfs(l + 1, r, s + '(')\n            # 加一个右括号\n            dfs(l, r + 1, s + ')')\n        dfs(0, 0, '')\n        return res\n"
        }
    ]
},
"merge-k-sorted-lists":{
    "id": "23",
    "name": "merge-k-sorted-lists",
    "pre": [
        {
            "text": "链表",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "归并排序",
            "link": null,
            "color": "cyan"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "百度"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/23.merge-k-sorted-lists.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/23.merge-k-sorted-lists.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=23 lang=javascript\n *\n * [23] Merge k Sorted Lists\n *\n * https://leetcode.com/problems/merge-k-sorted-lists/description/\n *\n */\nfunction mergeTwoLists(l1, l2) {\n  const dummyHead = {};\n  let current = dummyHead;\n  // l1: 1 -> 3 -> 5\n  // l2: 2 -> 4 -> 6\n  while (l1 !== null && l2 !== null) {\n    if (l1.val < l2.val) {\n      current.next = l1; // 把小的添加到结果链表\n      current = current.next; // 移动结果链表的指针\n      l1 = l1.next; // 移动小的那个链表的指针\n    } else {\n      current.next = l2;\n      current = current.next;\n      l2 = l2.next;\n    }\n  }\n\n  if (l1 === null) {\n    current.next = l2;\n  } else {\n    current.next = l1;\n  }\n  return dummyHead.next;\n}\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nvar mergeKLists = function (lists) {\n  // 图参考： https://zhuanlan.zhihu.com/p/61796021\n  if (lists.length === 0) return null;\n  if (lists.length === 1) return lists[0];\n  if (lists.length === 2) {\n    return mergeTwoLists(lists[0], lists[1]);\n  }\n\n  const mid = lists.length >> 1;\n  const l1 = [];\n  for (let i = 0; i < mid; i++) {\n    l1[i] = lists[i];\n  }\n\n  const l2 = [];\n  for (let i = mid, j = 0; i < lists.length; i++, j++) {\n    l2[j] = lists[i];\n  }\n\n  return mergeTwoLists(mergeKLists(l1), mergeKLists(l2));\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\nprivate:\n    ListNode* mergeTwoLists(ListNode* a, ListNode* b) {\n        ListNode head(0), *tail = &head;\n        while (a && b) {\n            if (a->val < b->val) { tail->next = a; a = a->next; }\n            else { tail->next = b; b = b->next; }\n            tail = tail->next;\n        }\n        tail->next = a ? a : b;\n        return head.next;\n    }\npublic:\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        if (lists.empty()) return NULL;\n        for (int N = lists.size(); N > 1; N = (N + 1) / 2) {\n            for (int i = 0; i < N / 2; ++i) {\n                lists[i] = mergeTwoLists(lists[i], lists[N - 1 - i]);\n            }\n        }\n        return lists[0];\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def mergeKLists(self, lists: List[ListNode]) -> ListNode:\n        n = len(lists)\n\n        # basic cases\n        if n == 0: return None\n        if n == 1: return lists[0]\n        if n == 2: return self.mergeTwoLists(lists[0], lists[1])\n\n        # divide and conqure if not basic cases\n        mid = n // 2\n        return self.mergeTwoLists(self.mergeKLists(lists[:mid]), self.mergeKLists(lists[mid:n]))\n\n\n    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:\n        res = ListNode(0)\n        c1, c2, c3 = l1, l2, res\n        while c1 or c2:\n            if c1 and c2:\n                if c1.val < c2.val:\n                    c3.next = ListNode(c1.val)\n                    c1 = c1.next\n                else:\n                    c3.next = ListNode(c2.val)\n                    c2 = c2.next\n                c3 = c3.next\n            elif c1:\n                c3.next = c1\n                break\n            else:\n                c3.next = c2\n                break\n\n        return res.next\n"
        }
    ]
},
"swapNodesInPairs":{
    "id": "24",
    "name": "swapNodesInPairs",
    "pre": [
        {
            "text": "链表",
            "link": null,
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "解析1.链表这种数据结构的特点和使用2.dummyHead简化操作",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/24.swapNodesInPairs.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/24.swapNodesInPairs.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar swapPairs = function (head) {\n  const dummy = new ListNode(0);\n  dummy.next = head;\n  let current = dummy;\n  while (current.next != null && current.next.next != null) {\n    // 初始化双指针\n    const first = current.next;\n    const second = current.next.next;\n\n    // 更新双指针和 current 指针\n    first.next = second.next;\n    second.next = first;\n    current.next = second;\n\n    // 更新指针\n    current = current.next.next;\n  }\n  return dummy.next;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    ListNode* swapPairs(ListNode* head) {\n        ListNode h, *tail = &h;\n        while (head && head->next) {\n            auto p = head, q = head->next;\n            head = q->next;\n            q->next = p;\n            tail->next = q;\n            tail = p;\n        }\n        tail->next = head;\n        return h.next;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def swapPairs(self, head: ListNode) -> ListNode:\n        \"\"\"\n        用递归实现链表相邻互换：\n        第一个节点的 next 是第三、第四个节点交换的结果，第二个节点的 next 是第一个节点；\n        第三个节点的 next 是第五、第六个节点交换的结果，第四个节点的 next 是第三个节点；\n        以此类推\n        :param ListNode head\n        :return ListNode\n        \"\"\"\n        # 如果为 None 或 next 为 None，则直接返回\n        if not head or not head.next:\n            return head\n\n        _next = head.next\n        head.next = self.swapPairs(_next.next)\n        _next.next = head\n        return _next\n"
        }
    ]
},
"reverse-nodes-in-k-groups-cn":{
    "id": "25",
    "name": "reverse-nodes-in-k-groups-cn",
    "pre": [
        {
            "text": "链表",
            "link": null,
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.创建一个dummynode2.对链表以k为单位进行分组，记录每一组的起始和最后节点位置3.对每一组进行翻转，更换起始和最后的位置4.返回`dummy.next`.",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/25.reverse-nodes-in-k-groups-cn.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/25.reverse-nodes-in-k-groups-cn.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass ReverseKGroupsLinkedList {\n  public ListNode reverseKGroup(ListNode head, int k) {\n      if (head == null || k == 1) {\n        return head;\n      }\n      ListNode dummy = new ListNode(0);\n      dummy.next = head;\n\n      ListNode start = dummy;\n      ListNode end = head;\n      int count = 0;\n      while (end != null) {\n        count++;\n        // group\n        if (count % k == 0) {\n          // reverse linked list (start, end]\n          start = reverse(start, end.next);\n          end = start.next;\n        } else {\n          end = end.next;\n        }\n      }\n      return dummy.next;\n    }\n\n    /**\n     * reverse linked list from range (start, end), return last node.\n     * for example:\n     * 0->1->2->3->4->5->6->7->8\n     * |           |\n     * start       end\n     *\n     * After call start = reverse(start, end)\n     *\n     * 0->3->2->1->4->5->6->7->8\n     *          |  |\n     *       start end\n     *       first\n     *\n     */\n    private ListNode reverse(ListNode start, ListNode end) {\n      ListNode curr = start.next;\n      ListNode prev = start;\n      ListNode first = curr;\n      while (curr != end){\n        ListNode temp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = temp;\n      }\n      start.next = prev;\n      first.next = curr;\n      return first;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {ListNode} head\n * @param {number} k\n * @return {ListNode}\n */\nvar reverseKGroup = function (head, k) {\n  // 标兵\n  let dummy = new ListNode();\n  dummy.next = head;\n  let [start, end] = [dummy, dummy.next];\n  let count = 0;\n  while (end) {\n    count++;\n    if (count % k === 0) {\n      start = reverseList(start, end.next);\n      end = start.next;\n    } else {\n      end = end.next;\n    }\n  }\n  return dummy.next;\n\n  // 翻转stat -> end的链表\n  function reverseList(start, end) {\n    let [pre, cur] = [start, start.next];\n    const first = cur;\n    while (cur !== end) {\n      let next = cur.next;\n      cur.next = pre;\n      pre = cur;\n      cur = next;\n    }\n    start.next = pre;\n    first.next = cur;\n    return first;\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:\n        if head is None or k < 2:\n            return head\n        dummy = ListNode(0)\n        dummy.next = head\n        start = dummy\n        end = head\n        count = 0\n        while end:\n            count += 1\n            if count % k == 0:\n                start = self.reverse(start, end.next)\n                # end 调到下一个\n                end = start.next\n            else:\n                end = end.next\n        return dummy.next\n    # (start, end） 左右都开放\n\n    def reverse(self, start, end):\n        prev, curr = start, start.next\n        first = curr\n        # 反转\n        while curr != end:\n            next = curr.next\n            curr.next = prev\n            prev = curr\n            curr = next\n        # 将反转后的链表添加到原链表中\n        start.next = prev\n        first.next = end\n        # 返回反转前的头， 也就是反转后的尾部\n        return first\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:\n        if head is None or k < 2:\n            return head\n        dummy = ListNode(0)\n        dummy.next = head\n        pre = dummy\n        cur = head\n        count = 0\n        while cur:\n            count += 1\n            if count % k == 0:\n                pre = self.reverse(pre, cur.next)\n                # end 调到下一个位置\n                cur = pre.next\n            else:\n                cur = cur.next\n        return dummy.next\n    # (p1, p4） 左右都开放\n\n    def reverse(self, p1, p4):\n        prev, curr = p1, p1.next\n        p2 = curr\n        # 反转\n        while curr != p4:\n            next = curr.next\n            curr.next = prev\n            prev = curr\n            curr = next\n        # 将反转后的链表添加到原链表中\n        # prev 相当于 p3\n        p1.next = prev\n        p2.next = p4\n        # 返回反转前的头， 也就是反转后的尾部\n        return p2\n\n# @lc code=end\n\n"
        }
    ]
},
"reverse-nodes-in-k-groups":{
    "id": "25",
    "name": "reverse-nodes-in-k-groups",
    "pre": [
        {
            "text": "链表",
            "link": null,
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.创建一个dummynode2.对链表以k为单位进行分组，记录每一组的起始和最后节点位置3.对每一组进行翻转，更换起始和最后的位置4.返回`dummy.next`.",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/25.reverse-nodes-in-k-groups.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/25.reverse-nodes-in-k-groups.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass ReverseKGroupsLinkedList {\n  public ListNode reverseKGroup(ListNode head, int k) {\n      if (head == null || k == 1) {\n        return head;\n      }\n      ListNode dummy = new ListNode(0);\n      dummy.next = head;\n\n      ListNode start = dummy;\n      ListNode end = head;\n      int count = 0;\n      while (end != null) {\n        count++;\n        // group\n        if (count % k == 0) {\n          // reverse linked list (start, end]\n          start = reverse(start, end.next);\n          end = start.next;\n        } else {\n          end = end.next;\n        }\n      }\n      return dummy.next;\n    }\n\n    /**\n     * reverse linked list from range (start, end), return last node.\n     * for example:\n     * 0->1->2->3->4->5->6->7->8\n     * |           |\n     * start       end\n     *\n     * After call start = reverse(start, end)\n     *\n     * 0->3->2->1->4->5->6->7->8\n     *          |  |\n     *       start end\n     *       first\n     *\n     */\n    private ListNode reverse(ListNode start, ListNode end) {\n      ListNode curr = start.next;\n      ListNode prev = start;\n      ListNode first = curr;\n      while (curr != end){\n        ListNode temp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = temp;\n      }\n      start.next = prev;\n      first.next = curr;\n      return first;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {ListNode} head\n * @param {number} k\n * @return {ListNode}\n */\nvar reverseKGroup = function (head, k) {\n  // 标兵\n  let dummy = new ListNode();\n  dummy.next = head;\n  let [start, end] = [dummy, dummy.next];\n  let count = 0;\n  while (end) {\n    count++;\n    if (count % k === 0) {\n      start = reverseList(start, end.next);\n      end = start.next;\n    } else {\n      end = end.next;\n    }\n  }\n  return dummy.next;\n\n  // 翻转stat -> end的链表\n  function reverseList(start, end) {\n    let [pre, cur] = [start, start.next];\n    const first = cur;\n    while (cur !== end) {\n      let next = cur.next;\n      cur.next = pre;\n      pre = cur;\n      cur = next;\n    }\n    start.next = pre;\n    first.next = cur;\n    return first;\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    # 翻转一个子链表，并且返回新的头与尾\n    def reverse(self, head: ListNode, tail: ListNode, terminal):\n        cur = head\n        pre = None\n        while cur != terminal:\n            next = cur.next\n            cur.next = pre\n\n            pre = cur\n            cur = next\n        return tail, head\n\n    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:\n        ans = ListNode()\n        ans.next = head\n        pre = ans\n\n        while head:\n            tail = pre\n            # 查看剩余部分长度是否大于等于 k\n            for i in range(k):\n                tail = tail.next\n                if not tail:\n                    return ans.next\n            next = tail.next\n            head, tail = self.reverse(head, tail, tail.next)\n            # 把子链表重新接回原链表\n            pre.next = head\n            tail.next = next\n            pre = tail\n            head = next\n\n        return ans.next\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:\n        if head is None or k < 2:\n            return head\n        dummy = ListNode(0)\n        dummy.next = head\n        pre = dummy\n        cur = head\n        count = 0\n        while cur:\n            count += 1\n            if count % k == 0:\n                pre = self.reverse(pre, cur.next)\n                # end 调到下一个位置\n                cur = pre.next\n            else:\n                cur = cur.next\n        return dummy.next\n    # (p1, p4） 左右都开放\n\n    def reverse(self, p1, p4):\n        prev, curr = p1, p1.next\n        p2 = curr\n        # 反转\n        while curr != p4:\n            next = curr.next\n            curr.next = prev\n            prev = curr\n            curr = next\n        # 将反转后的链表添加到原链表中\n        # prev 相当于 p3\n        p1.next = prev\n        p2.next = p4\n        # 返回反转前的头， 也就是反转后的尾部\n        return p2\n\n# @lc code=end\n\n"
        }
    ]
},
"remove-duplicates-from-sorted-array":{
    "id": "26",
    "name": "remove-duplicates-from-sorted-array",
    "pre": [
        {
            "text": "数组",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "purple"
        },
        {
            "text": "双指针",
            "link": null,
            "color": "green"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "bloomberg"
        },
        {
            "name": "facebook"
        },
        {
            "name": "microsoft"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/26.remove-duplicates-from-sorted-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/26.remove-duplicates-from-sorted-array.md",
    "code": [
        {
            "language": "java",
            "text": "\n public int removeDuplicates(int[] nums) {\n    if(nums == null || nums.length == 0) return 0;\n    int p = 0;\n    int q = 1;\n    while(q < nums.length){\n        if(nums[p] != nums[q]){\n            nums[p + 1] = nums[q];\n            p++;\n        }\n        q++;\n    }\n    return p + 1;\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar removeDuplicates = function (nums) {\n  const size = nums.length;\n  if (size == 0) return 0;\n  let slowP = 0;\n  for (let fastP = 0; fastP < size; fastP++) {\n    if (nums[fastP] !== nums[slowP]) {\n      slowP++;\n      nums[slowP] = nums[fastP];\n    }\n  }\n  return slowP + 1;\n};\n"
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
"divide-two-integers":{
    "id": "29",
    "name": "divide-two-integers",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/29.divide-two-integers.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/29.divide-two-integers.md",
    "code": []
},
"substring-with-concatenation-of-all-words":{
    "id": "30",
    "name": "substring-with-concatenation-of-all-words",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/30.substring-with-concatenation-of-all-words.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/30.substring-with-concatenation-of-all-words.md",
    "code": []
},
"next-permutation":{
    "id": "31",
    "name": "next-permutation",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/31.next-permutation.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/31.next-permutation.md",
    "code": []
},
"longest-valid-parentheses":{
    "id": "32",
    "name": "longest-valid-parentheses",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/32.longest-valid-parentheses.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/32.longest-valid-parentheses.md",
    "code": []
},
"search-in-rotated-sorted-array":{
    "id": "33",
    "name": "search-in-rotated-sorted-array",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/33.search-in-rotated-sorted-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/33.search-in-rotated-sorted-array.md",
    "code": []
},
"combination-sum":{
    "id": "39",
    "name": "combination-sum",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/39.combination-sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/39.combination-sum.md",
    "code": []
},
"combination-sum-ii":{
    "id": "40",
    "name": "combination-sum-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/40.combination-sum-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/40.combination-sum-ii.md",
    "code": []
},
"trapping-rain-water":{
    "id": "42",
    "name": "trapping-rain-water",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/42.trapping-rain-water.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/42.trapping-rain-water.md",
    "code": []
},
"permutations":{
    "id": "46",
    "name": "permutations",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/46.permutations.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/46.permutations.md",
    "code": []
},
"permutations-ii":{
    "id": "47",
    "name": "permutations-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/47.permutations-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/47.permutations-ii.md",
    "code": []
},
"rotate-image":{
    "id": "48",
    "name": "rotate-image",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/48.rotate-image.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/48.rotate-image.md",
    "code": []
},
"group-anagrams":{
    "id": "49",
    "name": "group-anagrams",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/49.group-anagrams.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/49.group-anagrams.md",
    "code": []
},
"pow-x-n":{
    "id": "50",
    "name": "pow-x-n",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/50.pow-x-n.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/50.pow-x-n.md",
    "code": []
},
"N-Queens-II":{
    "id": "52",
    "name": "N-Queens-II",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/52.N-Queens-II.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/52.N-Queens-II.md",
    "code": []
},
"maximum-sum-subarray-cn":{
    "id": "53",
    "name": "maximum-sum-subarray-cn",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/53.maximum-sum-subarray-cn.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/53.maximum-sum-subarray-cn.md",
    "code": []
},
"jump-game":{
    "id": "55",
    "name": "jump-game",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/55.jump-game.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/55.jump-game.md",
    "code": []
},
"merge-intervals":{
    "id": "56",
    "name": "merge-intervals",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/56.merge-intervals.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/56.merge-intervals.md",
    "code": []
},
"insert-interval":{
    "id": "57",
    "name": "insert-interval",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/57.insert-interval.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/57.insert-interval.md",
    "code": []
},
"permutation-sequence":{
    "id": "60",
    "name": "permutation-sequence",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/60.permutation-sequence.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/60.permutation-sequence.md",
    "code": []
},
"Rotate-List":{
    "id": "61",
    "name": "Rotate-List",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/61.Rotate-List.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/61.Rotate-List.md",
    "code": []
},
"unique-paths":{
    "id": "62",
    "name": "unique-paths",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/62.unique-paths.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/62.unique-paths.md",
    "code": []
},
"unique-paths-ii":{
    "id": "63",
    "name": "unique-paths-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/63.unique-paths-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/63.unique-paths-ii.md",
    "code": []
},
"valid-number":{
    "id": "65",
    "name": "valid-number",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/65.valid-number.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/65.valid-number.md",
    "code": []
},
"plus-one":{
    "id": "66",
    "name": "plus-one",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/66.plus-one.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/66.plus-one.md",
    "code": []
},
"set-matrix-zeroes":{
    "id": "73",
    "name": "set-matrix-zeroes",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/73.set-matrix-zeroes.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/73.set-matrix-zeroes.md",
    "code": []
},
"sort-colors":{
    "id": "75",
    "name": "sort-colors",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/75.sort-colors.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/75.sort-colors.md",
    "code": []
},
"subsets":{
    "id": "78",
    "name": "subsets",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/78.subsets.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/78.subsets.md",
    "code": []
},
"word-search":{
    "id": "79",
    "name": "word-search",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/79.word-search.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/79.word-search.md",
    "code": []
},
"remove-duplicates-from-sorted-array-ii":{
    "id": "80",
    "name": "remove-duplicates-from-sorted-array-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/80.remove-duplicates-from-sorted-array-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/80.remove-duplicates-from-sorted-array-ii.md",
    "code": []
},
"largest-rectangle-in-histogram":{
    "id": "84",
    "name": "largest-rectangle-in-histogram",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/84.largest-rectangle-in-histogram.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/84.largest-rectangle-in-histogram.md",
    "code": []
},
"maximal-rectangle":{
    "id": "85",
    "name": "maximal-rectangle",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/85.maximal-rectangle.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/85.maximal-rectangle.md",
    "code": []
},
"partition-list":{
    "id": "86",
    "name": "partition-list",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/86.partition-list.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/86.partition-list.md",
    "code": []
},
"scramble-string":{
    "id": "87",
    "name": "scramble-string",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/87.scramble-string.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/87.scramble-string.md",
    "code": []
},
"merge-sorted-array":{
    "id": "88",
    "name": "merge-sorted-array",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/88.merge-sorted-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/88.merge-sorted-array.md",
    "code": []
},
"subsets-ii":{
    "id": "90",
    "name": "subsets-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/90.subsets-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/90.subsets-ii.md",
    "code": []
},
"decode-ways":{
    "id": "91",
    "name": "decode-ways",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/91.decode-ways.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/91.decode-ways.md",
    "code": []
},
"reverse-linked-list-ii":{
    "id": "92",
    "name": "reverse-linked-list-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/92.reverse-linked-list-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/92.reverse-linked-list-ii.md",
    "code": []
},
"binary-tree-inorder-traversal":{
    "id": "94",
    "name": "binary-tree-inorder-traversal",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/94.binary-tree-inorder-traversal.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/94.binary-tree-inorder-traversal.md",
    "code": []
},
"unique-binary-search-trees-ii":{
    "id": "95",
    "name": "unique-binary-search-trees-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/95.unique-binary-search-trees-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/95.unique-binary-search-trees-ii.md",
    "code": []
},
"unique-binary-search-trees":{
    "id": "96",
    "name": "unique-binary-search-trees",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/96.unique-binary-search-trees.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/96.unique-binary-search-trees.md",
    "code": []
},
"validate-binary-search-tree":{
    "id": "98",
    "name": "validate-binary-search-tree",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/98.validate-binary-search-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/98.validate-binary-search-tree.md",
    "code": []
},
"same-tree":{
    "id": "100",
    "name": "same-tree",
    "pre": [
        {
            "text": "递归",
            "link": null,
            "color": "orange"
        },
        {
            "text": "层序遍历",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "前中序确定一棵树",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/100.same-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/100.same-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar isSameTree = function (p, q) {\n  if (!p || !q) {\n    return !p && !q;\n  }\n  return (\n    p.val === q.val &&\n    isSameTree(p.left, q.left) &&\n    isSameTree(p.right, q.right)\n  );\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar isSameTree = function (p, q) {\n  let curLevelA = [p];\n  let curLevelB = [q];\n\n  while (curLevelA.length && curLevelB.length) {\n    let nextLevelA = [];\n    let nextLevelB = [];\n    const isOK = isSameCurLevel(curLevelA, curLevelB, nextLevelA, nextLevelB);\n    if (isOK) {\n      curLevelA = nextLevelA;\n      curLevelB = nextLevelB;\n    } else {\n      return false;\n    }\n  }\n\n  return true;\n};\n\nfunction isSameCurLevel(curLevelA, curLevelB, nextLevelA, nextLevelB) {\n  if (curLevelA.length !== curLevelB.length) {\n    return false;\n  }\n  for (let i = 0; i < curLevelA.length; i++) {\n    if (!isSameNode(curLevelA[i], curLevelB[i])) {\n      return false;\n    }\n    curLevelA[i] && nextLevelA.push(curLevelA[i].left, curLevelA[i].right);\n    curLevelB[i] && nextLevelB.push(curLevelB[i].left, curLevelB[i].right);\n  }\n  return true;\n}\n\nfunction isSameNode(nodeA, nodeB) {\n  if (!nodeA || !nodeB) {\n    return nodeA === nodeB;\n  }\n  return nodeA.val === nodeB.val;\n  // return nodeA === nodeB || (nodeA && nodeB && nodeA.val === nodeB.val);\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar isSameTree = function (p, q) {\n  const preorderP = preorder(p, []);\n  const preorderQ = preorder(q, []);\n  const inorderP = inorder(p, []);\n  const inorderQ = inorder(q, []);\n  return (\n    preorderP.join(\"\") === preorderQ.join(\"\") &&\n    inorderP.join(\"\") === inorderQ.join(\"\")\n  );\n};\n\nfunction preorder(root, arr) {\n  if (root === null) {\n    arr.push(\" \");\n    return arr;\n  }\n  arr.push(root.val);\n  preorder(root.left, arr);\n  preorder(root.right, arr);\n  return arr;\n}\n\nfunction inorder(root, arr) {\n  if (root === null) {\n    arr.push(\" \");\n    return arr;\n  }\n  inorder(root.left, arr);\n  arr.push(root.val);\n  inorder(root.right, arr);\n  return arr;\n}\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        return (!p && !q) || (p && q && p->val == q->val && isSameTree(p->left, q->left) && isSameTree(p->right, q->right));\n    }\n};\n"
        }
    ]
},
"symmetric-tree":{
    "id": "101",
    "name": "symmetric-tree",
    "pre": [
        {
            "text": "二叉树",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "geekblue"
        },
        {
            "text": "递归",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
            "color": "orange"
        }
    ],
    "keyPoints": [],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "bloomberg"
        },
        {
            "name": "linkedin"
        },
        {
            "name": "microsoft"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/101.symmetric-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/101.symmetric-tree.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public boolean isSymmetric(TreeNode root) {\n        if(root == null)\n        {\n            return true;\n        }\n        else{\n            return recur(root.left, root.right);\n        }\n        // return root == null ? true : recur(root.left, root.right);\n    }\n\n    public boolean recur(TreeNode l, TreeNode r)\n    {\n        if(l == null && r==null)\n        {\n            return true;\n        }\n        // 只存在一个子节点 或者左右不相等\n        if(l==null || r==null || l.val != r.val)\n        {\n            return false;\n        }\n\n        return recur(l.left, r.right) && recur(l.right, r.left);\n    }\n}\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    bool isSymmetric(TreeNode* root) {\n        return root==NULL?true:recur(root->left, root->right);\n    }\n\n    bool recur(TreeNode* l, TreeNode* r)\n    {\n        if(l == NULL && r==NULL)\n        {\n            return true;\n        }\n        // 只存在一个子节点 或者左右不相等\n        if(l==NULL || r==NULL || l->val != r->val)\n        {\n            return false;\n        }\n\n        return recur(l->left, r->right) && recur(l->right, r->left);\n    }\n};\n"
        },
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
            "text": "\n\nclass Solution:\n    def isSymmetric(self, root: TreeNode) -> bool:\n        def dfs(root1, root2):\n            if root1 == root2 == None: return True\n            if not root1 or not root2: return False\n            if root1.val != root2.val: return False\n            return dfs(root1.left, root2.right) and dfs(root1.right, root2.left)\n        if not root: return True\n        return dfs(root.left, root.right)\n"
        }
    ]
},
"binary-tree-level-order-traversal":{
    "id": "102",
    "name": "binary-tree-level-order-traversal",
    "pre": [
        {
            "text": "队列",
            "link": null,
            "color": "volcano"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/102.binary-tree-level-order-traversal.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/102.binary-tree-level-order-traversal.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar levelOrder = function (root) {\n  if (!root) return [];\n  const items = []; // 存放所有节点\n  const queue = [root, null]; // null 简化操作\n  let levelNodes = []; // 存放每一层的节点\n\n  while (queue.length > 0) {\n    const t = queue.shift();\n\n    if (t) {\n      levelNodes.push(t.val);\n      if (t.left) {\n        queue.push(t.left);\n      }\n      if (t.right) {\n        queue.push(t.right);\n      }\n    } else {\n      // 一层已经遍历完了\n      items.push(levelNodes);\n      levelNodes = [];\n      if (queue.length > 0) {\n        queue.push(null);\n      }\n    }\n  }\n\n  return items;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def levelOrder(self, root: TreeNode) -> List[List[int]]:\n        \"\"\"递归法\"\"\"\n        if root is None:\n            return []\n\n        result = []\n\n        def add_to_result(level, node):\n            \"\"\"递归函数\n            :param level int 当前在二叉树的层次\n            :param node TreeNode 当前节点\n            \"\"\"\n            if level > len(result) - 1:\n                result.append([])\n\n            result[level].append(node.val)\n            if node.left:\n                add_to_result(level+1, node.left)\n            if node.right:\n                add_to_result(level+1, node.right)\n\n        add_to_result(0, root)\n        return result\n"
        }
    ]
},
"binary-tree-zigzag-level-order-traversal":{
    "id": "103",
    "name": "binary-tree-zigzag-level-order-traversal",
    "pre": [
        {
            "text": "队列",
            "link": null,
            "color": "volcano"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/103.binary-tree-zigzag-level-order-traversal.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/103.binary-tree-zigzag-level-order-traversal.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar zigzagLevelOrder = function(root) {\n  if (!root) return [];   \n  const items = [];\n  let isOdd = true;\n  let levelNodes = [];\n  \n  const queue = [root, null];\n\n\n  while(queue.length > 0) {\n      const t = queue.shift();\n\n      if (t) {\n          levelNodes.push(t.val)\n          if (t.left) {\n            queue.push(t.left)\n          }\n          if (t.right) {\n            queue.push(t.right)\n          }\n      } else {\n        if (!isOdd) {\n          levelNodes = levelNodes.reverse();\n        }\n        items.push(levelNodes)\n        levelNodes = [];\n        isOdd = !isOdd;\n        if (queue.length > 0) {\n            queue.push(null);\n        }\n      }\n  }\n\n  return items\n    \n};\n"
        }
    ]
},
"maximum-depth-of-binary-tree":{
    "id": "104",
    "name": "maximum-depth-of-binary-tree",
    "pre": [
        {
            "text": "递归",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
            "color": "orange"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "apple"
        },
        {
            "name": "linkedin"
        },
        {
            "name": "uber"
        },
        {
            "name": "yahoo"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/104.maximum-depth-of-binary-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/104.maximum-depth-of-binary-tree.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public int maxDepth(TreeNode root) {\n        if(root == null)\n        {\n            return 0;\n        }\n        // 队列\n        Queue<TreeNode> queue = new LinkedList<TreeNode>();\n        queue.offer(root);\n        int res = 0;\n        // 按层扩展\n        while(!queue.isEmpty())\n        {\n            // 拿出该层所有节点，并压入子节点\n            int size = queue.size();\n            while(size > 0)\n            {\n                TreeNode node = queue.poll();\n\n                if(node.left != null)\n                {\n                    queue.offer(node.left);\n                }\n                if(node.right != null)\n                {\n                    queue.offer(node.right);\n                }\n                size-=1;\n            }\n            // 统计层数\n            res +=1;\n        }\n        return res;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar maxDepth = function (root) {\n  if (!root) return 0;\n  if (!root.left && !root.right) return 1;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n};\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=104 lang=javascript\n *\n * [104] Maximum Depth of Binary Tree\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxDepth = function (root) {\n  if (!root) return 0;\n  if (!root.left && !root.right) return 1;\n\n  // 层次遍历 BFS\n  let cur = root;\n  const queue = [root, null];\n  let depth = 1;\n\n  while ((cur = queue.shift()) !== undefined) {\n    if (cur === null) {\n      // 注意⚠️： 不处理会无限循环，进而堆栈溢出\n      if (queue.length === 0) return depth;\n      depth++;\n      queue.push(null);\n      continue;\n    }\n    const l = cur.left;\n    const r = cur.right;\n\n    if (l) queue.push(l);\n    if (r) queue.push(r);\n  }\n\n  return depth;\n};\n"
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
    "pre": [
        {
            "text": "二叉树",
            "link": null,
            "color": "geekblue"
        }
    ],
    "keyPoints": [],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/105.Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal.md",
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
"convert-sorted-array-to-binary-search-tree":{
    "id": "108",
    "name": "convert-sorted-array-to-binary-search-tree",
    "pre": [
        {
            "text": "二叉搜索树",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "geekblue"
        },
        {
            "text": "平衡二叉树",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "geekblue"
        },
        {
            "text": "递归",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
            "color": "orange"
        }
    ],
    "keyPoints": [
        {
            "text": "找中点",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "airbnb"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/108.convert-sorted-array-to-binary-search-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/108.convert-sorted-array-to-binary-search-tree.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public TreeNode sortedArrayToBST(int[] nums) {\n        return dfs(nums, 0, nums.length - 1);\n    }\n\n    private TreeNode dfs(int[] nums, int lo, int hi) {\n        if (lo > hi) {\n            return null;\n        }\n        int mid = lo + (hi - lo) / 2;\n        TreeNode root = new TreeNode(nums[mid]);\n        root.left = dfs(nums, lo, mid - 1);\n        root.right = dfs(nums, mid + 1, hi);\n        return root;\n    }\n}\n\n"
        },
        {
            "language": "js",
            "text": "\nvar sortedArrayToBST = function (nums) {\n  // 由于数组是排序好的，因此一个思路就是将数组分成两半，一半是左子树，另一半是右子树\n  // 然后运用“树的递归性质”递归完成操作即可。\n  if (nums.length === 0) return null;\n  const mid = nums.length >> 1;\n  const root = new TreeNode(nums[mid]);\n\n  root.left = sortedArrayToBST(nums.slice(0, mid));\n  root.right = sortedArrayToBST(nums.slice(mid + 1));\n  return root;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    TreeNode* sortedArrayToBST(vector<int>& nums) {\n        return reBuild(nums, 0, nums.size()-1);\n    }\n\n    TreeNode* reBuild(vector<int>& nums, int left, int right)\n    {\n        // 终止条件：中序遍历为空\n        if(left > right)\n        {\n            return NULL;\n        }\n        // 建立当前子树的根节点\n        int mid = (left+right)/2;\n        TreeNode * root = new TreeNode(nums[mid]);\n\n        // 左子树的下层递归\n        root->left = reBuild(nums, left, mid-1);\n        // 右子树的下层递归\n        root->right = reBuild(nums, mid+1, right);\n        // 返回根节点\n        return root;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:\n        if not nums: return None\n        mid = (len(nums) - 1) // 2\n        root = TreeNode(nums[mid])\n        root.left = self.sortedArrayToBST(nums[:mid])\n        root.right = self.sortedArrayToBST(nums[mid + 1:])\n        return root\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    def sortedArrayToBST(self, nums):\n        \"\"\"\n        :type nums: List[int]\n        :rtype: TreeNode\n        \"\"\"\n        return self.reBuild(nums, 0, len(nums)-1)\n\n    def reBuild(self, nums, left, right):\n         # 终止条件：\n        if left > right:\n            return\n        # 建立当前子树的根节点\n        mid = (left + right)//2\n        root = TreeNode(nums[mid])\n        # 左右子树的下层递归\n        root.left = self.reBuild(nums, left, mid-1)\n        root.right = self.reBuild(nums, mid+1, right)\n\n        return root\n"
        }
    ]
},
"Convert-Sorted-List-to-Binary-Search-Tree":{
    "id": "109",
    "name": "Convert-Sorted-List-to-Binary-Search-Tree",
    "pre": [
        {
            "text": "递归",
            "link": null,
            "color": "orange"
        },
        {
            "text": "二叉搜索树",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "> 对于树中任意一个点，当前节点的值必然大于所有左子树节点的值",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "> 同理,当前节点的值必然小于所有右子树节点的值",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/109.Convert-Sorted-List-to-Binary-Search-Tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/109.Convert-Sorted-List-to-Binary-Search-Tree.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n public TreeNode sortedListToBST(ListNode head) {\n     if(head == null) return null;\n     return run(head,null);\n }\n private TreeNode run(ListNode head, ListNode tail){\n     if(head == tail) return null;\n     ListNode fast = head, slow = head;\n     while(fast != tail && fast.next != tail){\n         fast = fast.next.next;\n         slow = slow.next;\n     }\n     TreeNode root = new TreeNode(slow.val);\n     root.left = run(head, slow);\n     root.right = run(slow.next, tail);\n     return root;\n }\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar sortedListToBST = function (head) {\n  if (!head) return null;\n  return run(head, null);\n};\n\nfunction run(head, tail) {\n  if (head == tail) return null;\n  let fast = head;\n  let slow = head;\n  while (fast != tail && fast.next != tail) {\n    fast = fast.next.next;\n    slow = slow.next;\n  }\n  let root = new TreeNode(slow.val);\n  root.left = run(head, slow);\n  root.right = run(slow.next, tail);\n  return root;\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar sortedListToBST = function (head) {\n  let res = [];\n  while (head) {\n    res.push(head.val);\n    head = head.next;\n  }\n  return run(res);\n};\n\nfunction run(res) {\n  if (res.length == 0) return null;\n  let mid = parseInt(res.length / 2);\n  let root = new TreeNode(res[mid]);\n  root.left = mid > 0 ? run(res.slice(0, mid)) : null;\n  root.right = mid >= res.length - 1 ? null : run(res.slice(mid + 1));\n  return root;\n}\n"
        }
    ]
},
"path-sum-ii":{
    "id": "113",
    "name": "path-sum-ii",
    "pre": [
        {
            "text": "回溯法",
            "link": null,
            "color": "gold"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/113.path-sum-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/113.path-sum-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=113 lang=javascript\n *\n * [113] Path Sum II\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\nfunction backtrack(root, sum, res, tempList) {\n  if (root === null) return;\n  if (root.left === null && root.right === null && sum === root.val)\n    return res.push([...tempList, root.val]);\n\n  tempList.push(root.val);\n  backtrack(root.left, sum - root.val, res, tempList);\n\n  backtrack(root.right, sum - root.val, res, tempList);\n  tempList.pop();\n}\n/**\n * @param {TreeNode} root\n * @param {number} sum\n * @return {number[][]}\n */\nvar pathSum = function (root, sum) {\n  if (root === null) return [];\n  const res = [];\n  backtrack(root, sum, res, []);\n  return res;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:\n        if not root:\n            return []\n\n        result = []\n\n        def trace_node(pre_list, left_sum, node):\n            new_list = pre_list.copy()\n            new_list.append(node.val)\n            if not node.left and not node.right:\n                # 这个判断可以和上面的合并，但分开写会快几毫秒，可以省去一些不必要的判断\n                if left_sum == node.val:\n                    result.append(new_list)\n            else:\n                if node.left:\n                    trace_node(new_list, left_sum-node.val, node.left)\n                if node.right:\n                    trace_node(new_list, left_sum-node.val, node.right)\n\n        trace_node([], sum, root)\n        return result\n"
        }
    ]
},
"best-time-to-buy-and-sell-stock":{
    "id": "121",
    "name": "best-time-to-buy-and-sell-stock",
    "pre": [
        {
            "text": "数组",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "这类题只要你在心中（或者别的地方）画出上面这种图就很容易解决",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "amazon"
        },
        {
            "name": "bloomberg"
        },
        {
            "name": "facebook"
        },
        {
            "name": "microsoft"
        },
        {
            "name": "uber"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/121.best-time-to-buy-and-sell-stock.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/121.best-time-to-buy-and-sell-stock.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int maxProfit(int[] prices) {\n        int minprice = Integer.MAX_VALUE;\n        int maxprofit = 0;\n        for (int price: prices) {\n            maxprofit = Math.max(maxprofit, price - minprice);\n             minprice = Math.min(price, minprice);\n        }\n        return maxprofit;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function (prices) {\n  let min = prices[0];\n  let profit = 0;\n  // 7 1 5 3 6 4\n  for (let i = 1; i < prices.length; i++) {\n    if (prices[i] > prices[i - 1]) {\n      profit = Math.max(profit, prices[i] - min);\n    } else {\n      min = Math.min(min, prices[i]);\n    }\n  }\n\n  return profit;\n};\n"
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
"best-time-to-buy-and-sell-stock-ii":{
    "id": "122",
    "name": "best-time-to-buy-and-sell-stock-ii",
    "pre": [
        {
            "text": "数组",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "这类题只要你在心中（或者别的地方）画出上面这种图就很容易解决",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "bloomberg"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/122.best-time-to-buy-and-sell-stock-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/122.best-time-to-buy-and-sell-stock-ii.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int maxProfit(int[] prices) {\n        int res = 0;\n        for(int i=1;i<prices.length;i++)\n        {\n            if(prices[i] > prices[i-1])\n            {\n                res += prices[i] - prices[i-1];\n            }\n        }\n        return res;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function (prices) {\n  let profit = 0;\n\n  for (let i = 1; i < prices.length; i++) {\n    if (prices[i] > prices[i - 1]) {\n      profit = profit + prices[i] - prices[i - 1];\n    }\n  }\n\n  return profit;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int res = 0;\n        for(int i=1;i<prices.size();i++)\n        {\n            if(prices[i] > prices[i-1])\n            {\n                res += prices[i] - prices[i-1];\n            }\n        }\n        return res;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        profit = 0\n        for i in range(1, len(prices)):\n            tmp = prices[i] - prices[i - 1]\n            if tmp > 0: profit += tmp\n        return profit\n"
        }
    ]
},
"binary-tree-maximum-path-sum":{
    "id": "124",
    "name": "binary-tree-maximum-path-sum",
    "pre": [
        {
            "text": "树",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/tree.md",
            "color": "purple"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/124.binary-tree-maximum-path-sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/124.binary-tree-maximum-path-sum.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n  int ans;\n  public int maxPathSum(TreeNode root) {\n    ans = Integer.MIN_VALUE;\n    helper(root);   // recursion\n    return ans;\n  }\n\n  public int helper(TreeNode root) {\n    if (root == null) return 0;\n    int leftMax = Math.max(0, helper(root.left));     // find the max sub-path sum in left sub-tree\n    int rightMax = Math.max(0, helper(root.right));   // find the max sub-path sum in right sub-tree\n    ans = Math.max(ans, leftMax+rightMax+root.val);   // find the max path sum at current node\n    return max(leftMax, rightMax) + root.val;         // according to the definition of path, the return value of current node can only be that the sum of current node value plus either left or right max path sum.\n  }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=124 lang=javascript\n *\n * [124] Binary Tree Maximum Path Sum\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\nfunction helper(node, payload) {\n  if (node === null) return 0;\n\n  const l = helper(node.left, payload);\n  const r = helper(node.right, payload);\n\n  payload.max = Math.max(\n    node.val + Math.max(0, l) + Math.max(0, r),\n    payload.max\n  );\n\n  return node.val + Math.max(l, r, 0);\n}\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxPathSum = function (root) {\n  if (root === null) return 0;\n  const payload = {\n    max: root.val,\n  };\n  helper(root, payload);\n  return payload.max;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\nprivate:\n    int ans = INT_MIN;\n    int postOrder(TreeNode *root) {\n        if (!root) return INT_MIN;\n        int L = max(0, postOrder(root->left)), R = max(0, postOrder(root->right));\n        ans = max(ans, L + R + root->val);\n        return root->val + max(L, R);\n    }\npublic:\n    int maxPathSum(TreeNode* root) {\n        postOrder(root);\n        return ans;\n    }\n};\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    ans = float('-inf')\n    def maxPathSum(self, root: TreeNode) -> int:\n        def helper(node):\n            if not node: return 0\n            l = helper(node.left)\n            r = helper(node.right)\n            self.ans = max(self.ans, max(l,0) + max(r, 0) + node.val)\n            return max(l, r, 0) + node.val\n        helper(root)\n        return self.ans\n"
        }
    ]
},
"valid-palindrome":{
    "id": "125",
    "name": "valid-palindrome",
    "pre": [
        {
            "text": "回文",
            "link": null,
            "color": "lime"
        },
        {
            "text": "双指针",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "双指针",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "facebook"
        },
        {
            "name": "microsoft"
        },
        {
            "name": "uber"
        },
        {
            "name": "zenefits"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/125.valid-palindrome.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/125.valid-palindrome.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public boolean isPalindrome(String s) {\n        int n = s.length();\n        int left = 0, right = n - 1;\n        while (left < right) {\n            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {\n                ++left;\n            }\n            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {\n                --right;\n            }\n            if (left < right) {\n                if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {\n                    return false;\n                }\n                ++left;\n                --right;\n            }\n        }\n        return true;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=125 lang=javascript\n *\n * [125] Valid Palindrome\n */\n// 只处理英文字符（题目忽略大小写，我们前面全部转化成了小写， 因此这里我们只判断小写）和数字\nfunction isValid(c) {\n  const charCode = c.charCodeAt(0);\n  const isDigit =\n    charCode >= \"0\".charCodeAt(0) && charCode <= \"9\".charCodeAt(0);\n  const isChar = charCode >= \"a\".charCodeAt(0) && charCode <= \"z\".charCodeAt(0);\n\n  return isDigit || isChar;\n}\n/**\n * @param {string} s\n * @return {boolean}\n */\nvar isPalindrome = function (s) {\n  s = s.toLowerCase();\n  let left = 0;\n  let right = s.length - 1;\n\n  while (left < right) {\n    if (!isValid(s[left])) {\n      left++;\n      continue;\n    }\n    if (!isValid(s[right])) {\n      right--;\n      continue;\n    }\n\n    if (s[left] === s[right]) {\n      left++;\n      right--;\n    } else {\n      break;\n    }\n  }\n\n  return right <= left;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def isPalindrome(self, s: str) -> bool:\n        left, right = 0, len(s) - 1\n        while left < right:\n            if not s[left].isalnum():\n                left += 1\n                continue\n            if not s[right].isalnum():\n                right -= 1\n                continue\n            if s[left].lower() == s[right].lower():\n                left += 1\n                right -= 1\n            else:\n                break\n        return right <= left\n\n    def isPalindrome2(self, s: str) -> bool:\n        \"\"\"\n        使用语言特性进行求解\n        \"\"\"\n        s = ''.join(i for i in s if i.isalnum()).lower()\n        return s == s[::-1]\n"
        }
    ]
},
"longest-consecutive-sequence":{
    "id": "128",
    "name": "longest-consecutive-sequence",
    "pre": [
        {
            "text": "hashmap",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "从所有的序列起点（终点也行）开始尝试",
            "link": null,
            "color": "blue"
        },
        {
            "text": "空间换时间",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/128.longest-consecutive-sequence.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/128.longest-consecutive-sequence.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int longestConsecutive(int[] nums) {\n        Set<Integer> set = new HashSet<Integer>();\n        int ans = 0;\n        for (int num : nums) {\n            set.add(num);\n        }\n        for(int i = 0;i < nums.length; i ++) {\n            int x = nums[i];\n            // 说明x是连续序列的开头元素\n            if  (!set.contains(x - 1)) {\n                while(set.contains(x + 1)) {\n                    x ++;\n                }\n            }\n            ans = Math.max(ans, x - nums[i] + 1);\n        }\n        return ans;\n\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\nif (nums.length === 0) return 0;\nlet count = 1;\nlet maxCount = 1;\n// 这里其实可以不需要排序，这么做只不过是为了方便理解\nnums = [...new Set(nums)].sort((a, b) => a - b);\nfor (let i = 0; i < nums.length - 1; i++) {\n  if (nums[i + 1] - nums[i] === 1) {\n    count++;\n  } else {\n    if (count > maxCount) {\n      maxCount = count;\n    }\n    count = 1;\n  }\n}\nreturn Math.max(count, maxCount);\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar longestConsecutive = function (nums) {\n  set = new Set(nums);\n  let max = 0;\n  let temp = 0;\n  set.forEach((x) => {\n    // 说明x是连续序列的开头元素。加这个条件相当于剪枝的作用，否则时间复杂度会退化到 N ^ 2\n    if (!set.has(x - 1)) {\n      temp = x + 1;\n      while (set.has(y)) {\n        temp = temp + 1;\n      }\n      max = Math.max(max, y - x); // y - x 就是从x开始到最后有多少连续的数字\n    }\n  });\n  return max;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def longestConsecutive(self, A: List[int]) -> int:\n        seen = set(A)\n        ans = 0\n        for a in A:\n            t = a\n            # 说明 t 是连续序列的开头元素。加这个条件相当于剪枝的作用，否则时间复杂度会退化到 N ^ 2\n            if t + 1 not in seen:\n                while t - 1 in seen:\n                    t -= 1\n            ans = max(ans, a - t + 1)\n        return ans\n"
        }
    ]
},
"sum-root-to-leaf-numbers":{
    "id": "129",
    "name": "sum-root-to-leaf-numbers",
    "pre": [
        {
            "text": "递归",
            "link": null,
            "color": "orange"
        }
    ],
    "keyPoints": [
        {
            "text": "递归分析",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/129.sum-root-to-leaf-numbers.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/129.sum-root-to-leaf-numbers.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=129 lang=javascript\n *\n * [129] Sum Root to Leaf Numbers\n */\nfunction helper(node, cur) {\n  if (node === null) return 0;\n  const next = node.val + cur * 10;\n\n  if (node.left === null && node.right === null) return next;\n\n  const l = helper(node.left, next);\n  const r = helper(node.right, next);\n\n  return l + r;\n}\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar sumNumbers = function (root) {\n  // tag: `tree` `dfs` `math`\n  return helper(root, 0);\n};\n"
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
"surrounded-regions":{
    "id": "130",
    "name": "surrounded-regions",
    "pre": [
        {
            "text": "DFS",
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/130.surrounded-regions.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/130.surrounded-regions.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=130 lang=javascript\n *\n * [130] Surrounded Regions\n */\n// 将O以及周边的O转化为A\nfunction mark(board, i, j, rows, cols) {\n  if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1 || board[i][j] !== \"O\")\n    return;\n\n  board[i][j] = \"A\";\n  mark(board, i + 1, j, rows, cols);\n  mark(board, i - 1, j, rows, cols);\n  mark(board, i, j + 1, rows, cols);\n  mark(board, i, j - 1, rows, cols);\n}\n/**\n * @param {character[][]} board\n * @return {void} Do not return anything, modify board in-place instead.\n */\nvar solve = function (board) {\n  const rows = board.length;\n  if (rows === 0) return [];\n  const cols = board[0].length;\n\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      if (i === 0 || i == rows - 1 || j === 0 || j === cols - 1) {\n        mark(board, i, j, rows, cols);\n      }\n    }\n  }\n\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      if (board[i][j] === \"O\") {\n        board[i][j] = \"X\";\n      } else if (board[i][j] === \"A\") {\n        board[i][j] = \"O\";\n      }\n    }\n  }\n\n  return board;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\n    int M, N, dirs[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};\n    void dfs(vector<vector<char>> &board, int x, int y) {\n        if (x < 0 || x >= M || y < 0 || y >= N || board[x][y] != 'O') return;\n        board[x][y] = '#';\n        for (auto &dir : dirs) dfs(board, x + dir[0], y + dir[1]);\n    }\npublic:\n    void solve(vector<vector<char>>& board) {\n        if (board.empty() || board[0].empty()) return;\n        M = board.size(), N = board[0].size();\n        for (int i = 0; i < M; ++i) {\n            dfs(board, i, 0);\n            dfs(board, i, N - 1);\n        }\n        for (int j = 0; j < N; ++j) {\n            dfs(board, 0, j);\n            dfs(board, M - 1, j);\n        }\n        for (auto &row : board) {\n            for (auto &cell : row) {\n                cell = cell == '#' ? 'O' : 'X';\n            }\n        }\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, board: List[List[str]]) -> None:\n        \"\"\"\n        Do not return anything, modify board in-place instead.\n        \"\"\"\n        # 如果数组长或宽小于等于2，则不需要替换\n        if len(board) <= 2 or len(board[0]) <= 2:\n            return\n\n        row, col = len(board), len(board[0])\n\n        def dfs(i, j):\n            \"\"\"\n            深度优先算法，如果符合条件，替换为A并进一步测试，否则停止\n            \"\"\"\n            if i < 0 or j < 0 or i >= row or j >= col or board[i][j] != 'O':\n                return\n            board[i][j] = 'A'\n\n            dfs(i - 1, j)\n            dfs(i + 1, j)\n            dfs(i, j - 1)\n            dfs(i, j + 1)\n\n        # 从外围开始\n        for i in range(row):\n            dfs(i, 0)\n            dfs(i, col-1)\n\n        for j in range(col):\n            dfs(0, j)\n            dfs(row-1, j)\n\n        # 最后完成替换\n        for i in range(row):\n            for j in range(col):\n                if board[i][j] == 'O':\n                    board[i][j] = 'X'\n                elif board[i][j] == 'A':\n                    board[i][j] = 'O'\n"
        }
    ]
},
"palindrome-partitioning":{
    "id": "131",
    "name": "palindrome-partitioning",
    "pre": [
        {
            "text": "回溯法",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯法",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/131.palindrome-partitioning.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/131.palindrome-partitioning.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=131 lang=javascript\n *\n * [131] Palindrome Partitioning\n */\n\nfunction isPalindrom(s) {\n  let left = 0;\n  let right = s.length - 1;\n\n  while (left < right && s[left] === s[right]) {\n    left++;\n    right--;\n  }\n\n  return left >= right;\n}\nfunction backtrack(s, list, tempList, start) {\n  const sliced = s.slice(start);\n\n  if (isPalindrom(sliced) && tempList.join(\"\").length === s.length)\n    list.push([...tempList]);\n\n  for (let i = 0; i < sliced.length; i++) {\n    const sub = sliced.slice(0, i + 1);\n    if (isPalindrom(sub)) {\n      tempList.push(sub);\n    } else {\n      continue;\n    }\n    backtrack(s, list, tempList, start + i + 1);\n    tempList.pop();\n  }\n}\n/**\n * @param {string} s\n * @return {string[][]}\n */\nvar partition = function (s) {\n  // \"aab\"\n  // [\"aa\", \"b\"]\n  // [\"a\", \"a\", \"b\"]\n  const list = [];\n  backtrack(s, list, [], 0);\n  return list;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n\tclass Solution {\nprivate:\n  vector<vector<string>> ans;\n  vector<string> tmp;\n  bool isPalindrome(string &s, int first, int last) {\n    while (first < last && s[first] == s[last]) ++first, --last;\n    return first >= last;\n  }\n  void dfs(string &s, int start) {\n    if (start == s.size()) { ans.push_back(tmp); return; }\n    for (int i = start; i < s.size(); ++i) {\n      if (isPalindrome(s, start, i)) {\n        tmp.push_back(s.substr(start, i - start + 1));\n        dfs(s, i + 1);\n        tmp.pop_back();\n      }\n    }\n  }\npublic:\n  vector<vector<string>> partition(string s) {\n    dfs(s, 0);\n    return ans;\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def partition(self, s: str) -> List[List[str]]:\n        \"\"\"回溯法\"\"\"\n\n        res = []\n\n        def helper(s, tmp):\n            \"\"\"\n            如果是空字符串，说明已经处理完毕\n            否则逐个字符往前测试，判断是否是回文\n            如果是，则处理剩余字符串，并将已经得到的列表作为参数\n            \"\"\"\n            if not s:\n                res.append(tmp)\n            for i in range(1, len(s) + 1):\n                if s[:i] == s[:i][::-1]:\n                    helper(s[i:], tmp + [s[:i]])\n\n        helper(s, [])\n        return res\n"
        }
    ]
},
"palindrome-partitioning-ii":{
    "id": "132",
    "name": "palindrome-partitioning-ii",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "预处理。将s[i:j]是否为回文的数据提前计算出来存储到一个二维数组中。接下来就是普通的动态规划。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果s[0:j]本身就是一个回文，那么dp[j]应该是0",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/132.palindrome-partitioning-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/132.palindrome-partitioning-ii.md",
    "code": [
        {
            "language": "py",
            "text": "\nfor i in range(n):\n    for j in range(i + 1, n):\n        if judge(i + 1, j):\n            # 你的逻辑\n"
        },
        {
            "language": "py",
            "text": "\npalindrome_pairs[i][j] = (s[i] == s[j]) and palindrome_pairs[i + 1][j - 1]\n"
        },
        {
            "language": "py",
            "text": "\nfor i in range(n):\n    for j in range(i + 1, n):\n        if judge(i + 1, j):\n            dp[j] = min(dp[j], dp[i] + 1)\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def minCut(self, s: str) -> int:\n        n = len(s)\n        palindrome_pairs = [[True] * n for _ in range(n)]\n\n        for i in range(n - 1, -1, -1):\n            for j in range(i + 1, n):\n                palindrome_pairs[i][j] = (s[i] == s[j]) and palindrome_pairs[i + 1][j - 1]\n\n        def judge(i, j):\n            return palindrome_pairs[i][j]\n\n        dp = [float(\"inf\")] * n\n        dp[0] = 0\n        for i in range(n):\n            for j in range(i + 1, n):\n                if palindrome_pairs[0][j]:\n                    dp[j] = 0\n                elif judge(i + 1, j):\n                    dp[j] = min(dp[j], dp[i] + 1)\n        return dp[-1]\n\n"
        }
    ]
},
"single-number":{
    "id": "136",
    "name": "single-number",
    "pre": [
        {
            "text": "位运算",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/bit.md",
            "color": "blue"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/136.single-number.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/136.single-number.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int singleNumber(int[] nums) {\n        int res = 0;\n        for(int n:nums)\n        {\n            // 异或\n            res ^= n;\n        }\n        return res;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar singleNumber = function (nums) {\n  let ret = 0;\n  for (let index = 0; index < nums.length; index++) {\n    const element = nums[index];\n    ret = ret ^ element;\n  }\n  return ret;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        single_number = 0\n        for num in nums:\n            single_number ^= num\n        return single_number\n"
        }
    ]
},
"word-break":{
    "id": "139",
    "name": "word-break",
    "pre": [
        {
            "text": "动态规划",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/139.word-break.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/139.word-break.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {string} s\n * @param {string[]} wordDict\n * @return {boolean}\n */\nvar wordBreak = function (s, wordDict) {\n  const dp = Array(s.length + 1);\n  dp[0] = true;\n  for (let i = 0; i < s.length + 1; i++) {\n    for (let word of wordDict) {\n      if (word.length <= i && dp[i - word.length]) {\n        if (s.substring(i - word.length, i) === word) {\n          dp[i] = true;\n        }\n      }\n    }\n  }\n\n  return dp[s.length] || false;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    bool wordBreak(string s, vector<string>& dict) {\n        unordered_set<string> st(begin(dict), end(dict));\n        int N = s.size();\n        vector<bool> dp(N + 1);\n        dp[0] = true;\n        for (int i = 1; i <= N; ++i) {\n            for (int j = 0; j < i && !dp[i]; ++j) {\n                dp[i] = dp[j] && st.count(s.substr(j, i - j));\n            }\n        }\n        return dp[N];\n    }\n};\n\n"
        },
        {
            "language": "py",
            "text": "\n@cache\ndef dp(pos):\n    if pos == len(s): return True\n    for word in wordDict:\n        if s[pos:pos+len(word)] == word and dp(pos + len(word)): return True\n    return False\nreturn dp(0)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> bool:\n        wordDict = set(wordDict)\n        @cache\n        def dp(pos):\n            if pos == len(s): return True\n            cur = ''\n            for nxt in range(pos, len(s)):\n                cur += s[nxt]\n                if cur in wordDict and dp(nxt + 1): return True\n            return False\n        return dp(0)\n"
        }
    ]
},
"word-break-ii":{
    "id": "140",
    "name": "word-break-ii",
    "pre": [
        {
            "text": "回溯",
            "link": null,
            "color": "green"
        },
        {
            "text": "笛卡尔积",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/140.word-break-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/140.word-break-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n\"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\"[\n  (\"a\",\n  \"aa\",\n  \"aaa\",\n  \"aaaa\",\n  \"aaaaa\",\n  \"aaaaaa\",\n  \"aaaaaaa\",\n  \"aaaaaaaa\",\n  \"aaaaaaaaa\",\n  \"aaaaaaaaaa\")\n];\n"
        },
        {
            "language": "js",
            "text": "\n{\n  hi: true,\n  h: true,\n  i: true,\n  world: true,\n  hello: true,\n\n}\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\n    int maxLen = 0;\n    unordered_set<string> ws;\n    vector<int> m;\n    vector<string> ans;\n    bool dfs(string &s, int i, string tmp) {\n        if (i == s.size()) {\n            ans.push_back(tmp);\n            return true;\n        }\n        if (m[i] == 0) return m[i];\n        m[i] = 0;\n        for (int j = min((int)s.size(), i + maxLen); j > i; --j) {\n            auto sub = s.substr(i, j - i);\n            if (ws.count(sub) && dfs(s, j, tmp.size() ? tmp + \" \" + sub : sub)) m[i] = 1;\n        }\n        return m[i];\n    }\npublic:\n    vector<string> wordBreak(string s, vector<string>& dict) {\n        ws = { dict.begin(), dict.end() };\n        for (auto &w : dict) maxLen = max(maxLen, (int)w.size());\n        m.assign(s.size(), -1); // -1 = unvisited, 0 = can not reach end, 1 = can reach end.\n        dfs(s, 0, \"\");\n        return ans;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:\n        ans = []\n        n = len(s)\n\n        def backtrack(temp, start):\n            if start == n: ans.append(temp[1:])\n            for i in range(start, n):\n                if s[start:i + 1] in wordDict:\n                    backtrack(temp + \" \" + s[start:i + 1], i + 1)\n        backtrack('', 0)\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:\n        n = len(s)\n        @lru_cache(None)\n        def backtrack(start):\n            ans = []\n            if start == n:\n                ans.append('')\n            for i in range(start, n):\n                if s[start:i + 1] in wordDict:\n                    if start == 0: temp = s[start:i + 1]\n                    else: temp = \" \" + s[start:i + 1]\n                    ps = backtrack(i + 1)\n                    for p in ps:\n                        ans.append(temp + p)\n            return ans\n        return backtrack(0)\n"
        }
    ]
},
"Linked-List-Cycle-II":{
    "id": "142",
    "name": "Linked-List-Cycle-II",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/142.Linked-List-Cycle-II.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/142.Linked-List-Cycle-II.md",
    "code": [
        {
            "language": "js",
            "text": "\ndata = new Set() // 声明哈希表\nwhile head不为空{\n  if 当前节点在哈希表中存在{\n    return head // 当前节点就是环的入口节点\n  } else {\n    将当前节点插入哈希表\n  }\n  head指针后移\n}\nreturn null // 环不存在\n"
        },
        {
            "language": "js",
            "text": "\nlet data = new Set();\nwhile (head) {\n  if (data.has(head)) {\n    return head;\n  } else {\n    data.add(head);\n  }\n  head = head.next;\n}\nreturn null;\n"
        },
        {
            "language": "js",
            "text": "x\nfast = head\nslow = head //快慢指针都指向头部\ndo {\n  快指针向后两步\n  慢指针向后一步\n} while 快慢指针不相等时\nif 指针都为空时{\n  return null // 没有环\n}\nwhile 快慢指针不相等时{\n  快指针向后一步\n  慢指针向后一步\n}\nreturn fast\n"
        },
        {
            "language": "js",
            "text": "\nif (head == null || head.next == null) return null;\nlet fast = (slow = head);\ndo {\n  if (fast != null && fast.next != null) {\n    fast = fast.next.next;\n  } else {\n    fast = null;\n  }\n  slow = slow.next;\n} while (fast != slow);\nif (fast == null) return null;\nfast = head;\nwhile (fast != slow) {\n  fast = fast.next;\n  slow = slow.next;\n}\nreturn fast;\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    ListNode *detectCycle(ListNode *head) {\n        if (!head) return NULL;\n        auto p = head, q = head;\n        while (p && p->next) {\n            p = p->next->next;\n            q = q->next;\n            if (p == q) break;\n        }\n        if (!p || !p->next) return NULL;\n        p = head;\n        for (; p != q; p = p->next, q = q->next);\n        return p;\n    }\n};\n\n"
        }
    ]
},
"binary-tree-preorder-traversal":{
    "id": "144",
    "name": "binary-tree-preorder-traversal",
    "pre": [
        {
            "text": "递归",
            "link": null,
            "color": "orange"
        },
        {
            "text": "栈",
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/144.binary-tree-preorder-traversal.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/144.binary-tree-preorder-traversal.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar preorderTraversal = function (root) {\n  // 1. Recursive solution\n\n  // if (!root) return [];\n\n  // return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right));\n\n  // 2. iterative solutuon\n\n  if (!root) return [];\n  const ret = [];\n  const stack = [root];\n  let t = stack.pop();\n\n  while (t) {\n    if (t.right) {\n      stack.push(t.right);\n    }\n    if (t.left) {\n      stack.push(t.left);\n    }\n    ret.push(t.val);\n    t = stack.pop();\n  }\n\n  return ret;\n};\n"
        }
    ]
},
"binary-tree-postorder-traversal":{
    "id": "145",
    "name": "binary-tree-postorder-traversal",
    "pre": [
        {
            "text": "栈",
            "link": null,
            "color": "red"
        },
        {
            "text": "递归",
            "link": null,
            "color": "orange"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/145.binary-tree-postorder-traversal.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/145.binary-tree-postorder-traversal.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar postorderTraversal = function (root) {\n  // 1. Recursive solution\n\n  // if (!root) return [];\n\n  // return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat(root.val);\n\n  // 2. iterative solutuon\n\n  if (!root) return [];\n  const ret = [];\n  const stack = [root];\n  let p = root; // 标识元素，用来判断节点是否应该出栈\n\n  while (stack.length > 0) {\n    const top = stack[stack.length - 1];\n    if (\n      top.left === p ||\n      top.right === p || // 子节点已经遍历过了\n      (top.left === null && top.right === null) // 叶子元素\n    ) {\n      p = stack.pop();\n      ret.push(p.val);\n    } else {\n      if (top.right) {\n        stack.push(top.right);\n      }\n      if (top.left) {\n        stack.push(top.left);\n      }\n    }\n  }\n\n  return ret;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    vector<int> postorderTraversal(TreeNode* root) {\n        vector<int> ans;\n        stack<TreeNode*> s;\n        TreeNode *prev = NULL;\n        while (root || s.size()) {\n            while (root) {\n                s.push(root);\n                root = root->left;\n            }\n            root = s.top();\n            if (!root->right || root->right == prev) {\n                ans.push_back(root->val);\n                s.pop();\n                prev = root;\n                root = NULL;\n            } else root = root->right;\n        }\n        return ans;\n    }\n};\n"
        }
    ]
},
"lru-cache":{
    "id": "146",
    "name": "lru-cache",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/146.lru-cache.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/146.lru-cache.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar LRUCache = function(capacity) {\n\t保存一个该数据结构的最大容量\n\t生成一个双向链表,同时保存该链表的头结点与尾节点\n\t生成一个哈希表\n};\n\nfunction get (key) {\n\tif 哈希表中存在该关键字 {\n\t\t根据哈希表获取该链表节点\n\t\t将该节点放置于链表头部\n\t\treturn 链表节点的值\n\t} else {\n\t\t  return -1\n\t}\n};\n\nfunction put (key, value) {\n    if 哈希表中存在该关键字 {\n\t\t根据哈希表获取该链表节点\n\t\t将该链表节点的值更新\n\t\t将该节点放置于链表头部\n\t} else {\n\t\tif 容量已满 {\n\t\t\t删除链表尾部的节点\n\t\t\t新生成一个节点\n\t\t\t将该节点放置于链表头部\n\t\t} else {\n\t\t\t新生成一个节点\n\t\t\t将该节点放置于链表头部\n\t\t}\n\t}\n};\n"
        },
        {
            "language": "js",
            "text": "\nclass ListNode{\n    constructor(key, val){\n        this.key = key;\n        this.val = val;\n        this.pre = null;\n        this.next = null;\n    }\n};\n\nclass LRUCache{\n    constructor(capacity){\n        this.capacity = capacity;\n        this.size = 0;\n        this.data = {};\n        this.head = new ListNode();\n        this.tail = new ListNode();\n        this.head.next = this.tail;\n        this.tail.pre = this.head;\n    }\n\n    get(key){\n        if(!this.data[key]) return -1;\n        else{\n            let node = this.data[key];\n            this.removeNode(node);\n            this.appendHead(node);\n            \n            return node.val;\n        }\n    }\n\n    put(key, value){\n        if(!this.data[key]){\n            let node = new ListNode(key, value);\n\n            this.data[key] = node;\n            this.appendHead(node);\n            this.size++;\n\n            if(this.size > this.capacity){\n                const lastKey = this.removeTail();\n                delete this.data[lastKey];\n                this.size--;\n            }\n\n        }else{\n            let node = this.data[key];\n            this.removeNode(node);\n            node.val = value;\n            this.appendHead(node);\n        }   \n    }\n\n    removeNode(node){\n        let preNode = node.pre;\n        let nextNode = node.next;\n\n        preNode.next = nextNode;\n        nextNode.pre = preNode;\n    }\n\n    appendHead(node){\n        let firstNode = this.head.next;\n\n        this.head.next = node;\n        node.pre = this.head;\n        node.next = firstNode;\n        firstNode.pre = node;\n    }\n\n    removeTail(){\n        let key = this.tail.pre.key;\n\n        this.removeNode(this.tail.pre);\n        \n        return key;\n    }\n}\n\n"
        },
        {
            "language": "py",
            "text": "\nclass DLinkedNode:\n    def __init__(self, key=0, value=0):\n        self.key = key\n        self.value = value\n        self.prev = None\n        self.next = None\n\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cache = dict()\n        # 使用伪头部和伪尾部节点\n        self.head = DLinkedNode()\n        self.tail = DLinkedNode()\n        self.head.next = self.tail\n        self.tail.prev = self.head\n        self.capacity = capacity\n        self.size = 0\n\n    def get(self, key: int) -> int:\n        if key not in self.cache:\n            return -1\n        # 如果 key 存在，先通过哈希表定位，再移到头部\n        node = self.cache[key]\n        self.moveToHead(node)\n        return node.value\n\n    def put(self, key: int, value: int) -> None:\n        if key not in self.cache:\n            # 如果 key 不存在，创建一个新的节点\n            node = DLinkedNode(key, value)\n            # 添加进哈希表\n            self.cache[key] = node\n            # 添加至双向链表的头部\n            self.addToHead(node)\n            self.size += 1\n            if self.size > self.capacity:\n                # 如果超出容量，删除双向链表的尾部节点\n                removed = self.removeTail()\n                # 删除哈希表中对应的项\n                self.cache.pop(removed.key)\n                self.size -= 1\n        else:\n            # 如果 key 存在，先通过哈希表定位，再修改 value，并移到头部\n            node = self.cache[key]\n            node.value = value\n            self.moveToHead(node)\n\n    def addToHead(self, node):\n        node.prev = self.head\n        node.next = self.head.next\n        self.head.next.prev = node\n        self.head.next = node\n\n    def removeNode(self, node):\n        node.prev.next = node.next\n        node.next.prev = node.prev\n\n    def moveToHead(self, node):\n        self.removeNode(node)\n        self.addToHead(node)\n\n    def removeTail(self):\n        node = self.tail.prev\n        self.removeNode(node)\n        return node\n\n"
        }
    ]
},
"insertion-sort-list":{
    "id": "147",
    "name": "insertion-sort-list",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/147.insertion-sort-list.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/147.insertion-sort-list.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public ListNode insertionSortList(ListNode head) {\n\t\tListNode ans = new ListNode(-1);\n\t\twhile( head != null ){\n\t\t\tListNode next = head.next;\n            ListNode cur = ans;\n\t\t\twhile(cur.next != null && cur.next.val < head.val ){\n\t\t\t\tcur = cur.next;\n\t\t\t}\n\t\t\thead.next = cur.next;\n\t\t\tcur.next = head;\n\t\t\thead = next;\n\t\t}\n\n\t\treturn ans.next;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar insertionSortList = function (head) {\n  ans = new ListNode(-1);\n  while (head != null) {\n    next = head.next;\n    cur = ans;\n    while (cur.next != null && cur.next.val < head.val) {\n      cur = cur.next;\n    }\n    head.next = cur.next;\n    cur.next = head;\n    head = next;\n  }\n\n  return ans.next;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    ListNode* insertionSortList(ListNode* head) {\n        ListNode dummy, *p;\n        while (head) {\n            auto *n = head;\n            head = head->next;\n            p = &dummy;\n            while (p->next && p->next->val < n->val) p = p->next;\n            n->next = p->next;\n            p->next = n;\n        }\n        return dummy.next;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def insertionSortList(self, head: ListNode) -> ListNode:\n        ans = ListNode(float(\"-inf\"))\n        # do domething\n        return ans.next\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def insertionSortList(self, head: ListNode) -> ListNode:\n        ans = ListNode(float(\"-inf\"))\n\n        def insert(to_be_insert):\n            # 选择插入的位置，并插入\n\n        while head:\n            insert(head)\n            head = head.next\n        return ans.next\n"
        },
        {
            "language": "py",
            "text": "\n# ans 就是上面我提到的虚拟节点\nans = cur\nwhile cur.next and cur.next.val < to_be_insert.val:\n    cur = cur.next\n"
        },
        {
            "language": "py",
            "text": "\nto_be_insert.next = cur.next\ncur.next = to_be_insert\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def insertionSortList(self, head: ListNode) -> ListNode:\n        ans = ListNode(float(\"-inf\"))\n\n        def helper(inserted):\n            cur = ans\n            while cur.next and cur.next.val < inserted.val:\n                cur = cur.next\n            inserted.next = cur.next\n            cur.next = inserted\n\n        while head:\n            helper(head)\n            head = head.next\n        return ans.next\n"
        },
        {
            "language": "py",
            "text": "\ninserted.next = cur.next\ncur.next = inserted\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def insertionSortList(self, head: ListNode) -> ListNode:\n        ans = ListNode(float(\"-inf\"))\n\n        def insert(to_be_insert):\n            # 选择插入的位置，并插入\n            # 这里 to_to_insert 的 next 会被修改，进而影响外层的 head\n\n        while head:\n            # 留下联系方式\n            next = head.next\n            insert(head)\n            # 使用联系方式更新 head\n            head = next\n        return ans.next\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def insertionSortList(self, head: ListNode) -> ListNode:\n       ans = ListNode(float(\"-inf\"))\n\n        while head:\n            next = head.next\n            cur = ans\n            while cur.next and cur.next.val < head.val:\n                cur = cur.next\n            head.next = cur.next\n            cur.next = head\n            head = next\n        return ans.next\n"
        }
    ]
},
"evaluate-reverse-polish-notation":{
    "id": "150",
    "name": "evaluate-reverse-polish-notation",
    "pre": [
        {
            "text": "栈",
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/150.evaluate-reverse-polish-notation.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/150.evaluate-reverse-polish-notation.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public static int evalRPN(String[] tokens) {\n\tint[] numStack = new int[tokens.length / 2 + 1];\n\tint index = 0;\n\tfor (String s : tokens) {\n\t    if (s.equals(\"+\")) {\n                numStack[index - 2] += numStack[--index];\n            } else if (s.equals(\"-\")) {\n                numStack[index - 2] -= numStack[--index];\n            } else if (s.equals(\"*\")) {\n                numStack[index - 2] *= numStack[--index];\n            } else if (s.equals(\"/\")) {\n                numStack[index - 2] /= numStack[--index];\n            } else {\n                numStack[index++] = Integer.parseInt(s);\n            }\n\t}\n\treturn numStack[0];\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {string[]} tokens\n * @return {number}\n */\nvar evalRPN = function (tokens) {\n  // 这种算法的前提是 tokens是有效的，\n  // 当然这由算法来保证\n  const stack = [];\n\n  for (let index = 0; index < tokens.length; index++) {\n    const token = tokens[index];\n    // 对于运算数， 我们直接入栈\n    if (!Number.isNaN(Number(token))) {\n      stack.push(token);\n    } else {\n      // 遇到操作符，我们直接大胆运算，不用考虑算术优先级\n      // 然后将运算结果入栈即可\n\n      // 当然如果题目进一步扩展，允许使用单目等其他运算符，我们的算法需要做微小的调整\n      const a = Number(stack.pop());\n      const b = Number(stack.pop());\n      if (token === \"*\") {\n        stack.push(b * a);\n      } else if (token === \"/\") {\n        stack.push((b / a) >> 0);\n      } else if (token === \"+\") {\n        stack.push(b + a);\n      } else if (token === \"-\") {\n        stack.push(b - a);\n      }\n    }\n  }\n\n  return stack.pop();\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n\tclass Solution {\npublic:\n  int evalRPN(vector<string>& tokens) {\n    stack<int> s;\n    for (string t : tokens) {\n      if (isdigit(t.back())) s.push(stoi(t));\n      else {\n        int n = s.top();\n        s.pop();\n        switch(t[0]) {\n          case '+': s.top() += n; break;\n          case '-': s.top() -= n; break;\n          case '*': s.top() *= n; break;\n          case '/': s.top() /= n; break;\n        }\n      }\n    }\n    return s.top();\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def evalRPN(self, tokens: List[str]) -> int:\n        if len(tokens) > 2:\n            stack = []\n            operations = ['+', '-', '*', '/']\n            for token in tokens:\n                if token in operations:\n                    b = int(stack.pop())\n                    a = int(stack.pop())\n                    if '+' == token:\n                        tmp = a + b\n                    elif '-' == token:\n                        tmp = a - b\n                    elif '*' == token:\n                        tmp = a * b\n                    else:\n                        tmp = int(a / b)\n                    stack.append(tmp)\n                else:\n                    stack.append(token)\n            return stack[0]\n        return int(tokens[-1])\n"
        }
    ]
},
"maximum-product-subarray":{
    "id": "152",
    "name": "maximum-product-subarray",
    "pre": [
        {
            "text": "滑动窗口",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "同时记录乘积最大值和乘积最小值",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/152.maximum-product-subarray.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/152.maximum-product-subarray.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar maxProduct = function (nums) {\n  let max = nums[0];\n  let temp = null;\n  for (let i = 0; i < nums.length; i++) {\n    temp = nums[i];\n    for (let j = i + 1; j < nums.length; j++) {\n      temp *= nums[j];\n      max = Math.max(temp, max);\n    }\n  }\n\n  return max;\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar maxProduct = function (nums) {\n  let max = nums[0];\n  let min = nums[0];\n  let res = nums[0];\n\n  for (let i = 1; i < nums.length; i++) {\n    let tmp = min;\n    min = Math.min(nums[i], Math.min(max * nums[i], min * nums[i])); // 取最小\n    max = Math.max(nums[i], Math.max(max * nums[i], tmp * nums[i])); /// 取最大\n    res = Math.max(res, max);\n  }\n  return res;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int maxProduct(vector<int>& A) {\n        int maxProd = 1, minProd = 1, ans = INT_MIN;\n        for (int n : A) {\n            int a = n * maxProd, b = n * minProd;\n            maxProd = max({n, a, b});\n            minProd = min({n, a, b});\n            ans = max(ans, maxProd);\n        }\n        return ans;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\n\n\nclass Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        n = len(nums)\n        max__dp = [1] * (n + 1)\n        min_dp = [1] * (n + 1)\n        ans = float('-inf')\n\n        for i in range(1, n + 1):\n            max__dp[i] = max(max__dp[i - 1] * nums[i - 1],\n                             min_dp[i - 1] * nums[i - 1], nums[i - 1])\n            min_dp[i] = min(max__dp[i - 1] * nums[i - 1],\n                            min_dp[i - 1] * nums[i - 1], nums[i - 1])\n            ans = max(ans, max__dp[i])\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        n = len(nums)\n        a = b = 1\n        ans = float('-inf')\n\n        for i in range(1, n + 1):\n            temp = a\n            a = max(a * nums[i - 1],\n                    b * nums[i - 1], nums[i - 1])\n            b = min(temp * nums[i - 1],\n                    b * nums[i - 1], nums[i - 1])\n            ans = max(ans, a)\n        return ans\n\n"
        }
    ]
},
"find-minimum-in-rotated-sorted-array":{
    "id": "153",
    "name": "find-minimum-in-rotated-sorted-array",
    "pre": [
        {
            "text": "二分",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/binary-search-1.md",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "如果左端点的值小于右端点的值则可以提前退出",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/153.find-minimum-in-rotated-sorted-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/153.find-minimum-in-rotated-sorted-array.md",
    "code": [
        {
            "language": "py",
            "text": "\nwhile l < r:\n   # your code here\nreturn nums[l] # or nums[r]\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def findMin(self, nums: List[int]) -> int:\n        l, r = 0, len(nums) - 1\n\n        while l < r:\n            # important\n            if nums[l] < nums[r]:\n                return nums[l]\n            mid = (l + r) // 2\n            # left part\n            if nums[mid] > nums[r]:\n                l = mid + 1\n            else:\n                # right part\n                r = mid\n        # l or r is not important\n        return nums[l]\n\n\n"
        }
    ]
},
"find-minimum-in-rotated-sorted-array-ii":{
    "id": "154",
    "name": "find-minimum-in-rotated-sorted-array-ii",
    "pre": [
        {
            "text": "二分",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/binary-search-1.md",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "比较右端点而不是左端点",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果左端点的值小于右端点的值则可以提前退出",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/154.find-minimum-in-rotated-sorted-array-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/154.find-minimum-in-rotated-sorted-array-ii.md",
    "code": [
        {
            "language": "py",
            "text": "\n\n\n\nclass Solution:\n    def findMin(self, nums: List[int]) -> int:\n        l, r = 0, len(nums) - 1\n\n        while l < r:\n            if nums[l] < nums[r]:\n                return nums[l]\n            mid = (l + r) // 2\n            # [2,2,2,0,1]\n            if nums[mid] > nums[r]:\n                l = mid + 1\n            elif nums[mid] < nums[r]:\n                r = mid\n            else:\n                r -= 1\n\n        return nums[l]  # or nums[r]\n\n\n"
        }
    ]
},
"min-stack":{
    "id": "155",
    "name": "min-stack",
    "pre": [
        {
            "text": "栈",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "往minstack中push的判断条件。应该是stack为空或者x小于等于minstack栈顶元素",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "amazon"
        },
        {
            "name": "bloomberg"
        },
        {
            "name": "google"
        },
        {
            "name": "snapchat"
        },
        {
            "name": "uber"
        },
        {
            "name": "zenefits"
        },
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/155.min-stack.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/155.min-stack.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class MinStack {\n\n    // 数据栈\n    private Stack<Integer> data;\n    // 辅助栈\n    private Stack<Integer> helper;\n\n    /**\n     * initialize your data structure here.\n     */\n    public MinStack() {\n        data = new Stack<>();\n        helper = new Stack<>();\n    }\n    \n    public void push(int x) {\n        // 辅助栈在必要的时候才增加\n        data.add(x);\n        if (helper.isEmpty() || helper.peek() >= x) {\n            helper.add(x);\n        }\n    }\n\n    public void pop() {\n        // 关键 3：data 一定得 pop()\n        if (!data.isEmpty()) {\n            // 注意：声明成 int 类型，这里完成了自动拆箱，从 Integer 转成了 int，\n            // 因此下面的比较可以使用 \"==\" 运算符\n            int top = data.pop();\n            if(top == helper.peek()){\n                helper.pop();\n            }\n        }\n    }\n\n    public int top() {\n        if(!data.isEmpty()){\n            return data.peek();\n        }\n    }\n\n    public int getMin() {\n        if(!helper.isEmpty()){\n            return helper.peek();\n        }\n    }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MinStack {\n    long min;\n    Stack<Long> stack;\n    \n    /** initialize your data structure here. */\n    public MinStack() {\n        stack = new Stack<>();\n    }\n    \n    public void push(int x) {\n        if (stack.isEmpty()) {\n            stack.push(0L);\n            min = x;\n        }\n        else {\n            stack.push(x - min);\n            if (x < min)\n                min = x;\n        }\n    }\n    \n    public void pop() {\n        long p = stack.pop();\n        \n        if (p < 0) {\n            // if (p < 0), the popped value is the min\n            // Recall p is added by this statement: stack.push(x - min);\n            // So, p = x - old_min\n            // old_min = x - p\n            // again, if (p < 0), x is the min so:\n            // old_min = min - p\n            min = min - p;\n        }\n    }\n    \n    public int top() {\n        long p = stack.peek();\n        \n        if (p < 0) {\n            return (int) min;\n        }\n        else {\n            // p = x - min\n            // x = p + min\n            return (int) (p + min);\n        }\n    }\n    \n    public int getMin() {\n        return (int) min;    \n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * initialize your data structure here.\n */\nvar MinStack = function() {\n    this.stack = []\n    this.minStack = []\n};\n\n/** \n * @param {number} x\n * @return {void}\n */\nMinStack.prototype.push = function(x) {\n    this.stack.push(x)\n    if (this.minStack.length == 0 ||  x <= this.minStack[this.minStack.length - 1]) {\n        this.minStack.push(x)\n    }\n};\n\n/**\n * @return {void}\n */\nMinStack.prototype.pop = function() {\n    const x = this.stack.pop()\n    if (x !== void 0 &&  x === this.minStack[this.minStack.length - 1]) {\n        this.minStack.pop()\n    }\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.top = function() {\n    return this.stack[this.stack.length - 1]\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.min = function() {\n    return this.minStack[this.minStack.length - 1]\n};\n\n/** \n * Your MinStack object will be instantiated and called as such:\n * var obj = new MinStack()\n * obj.push(x)\n * obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.min()\n */\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=155 lang=javascript\n *\n * [155] Min Stack\n */\n/**\n * initialize your data structure here.\n */\nvar MinStack = function() {\n  this.stack = [];\n  this.minV = Number.MAX_VALUE;\n};\n\n/**\n * @param {number} x\n * @return {void}\n */\nMinStack.prototype.push = function(x) {\n  // update 'min'\n  const minV = this.minV;\n  if (x < this.minV) {\n    this.minV = x;\n  }\n  return this.stack.push(x - minV);\n};\n\n/**\n * @return {void}\n */\nMinStack.prototype.pop = function() {\n  const item = this.stack.pop();\n  const minV = this.minV;\n\n  if (item < 0) {\n    this.minV = minV - item;\n    return minV;\n  }\n  return item + minV;\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.top = function() {\n  const item = this.stack[this.stack.length - 1];\n  const minV = this.minV;\n\n  if (item < 0) {\n    return minV;\n  }\n  return item + minV;\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.min = function() {\n  return this.minV;\n};\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * var obj = new MinStack()\n * obj.push(x)\n * obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.min()\n */\n"
        },
        {
            "language": "cpp",
            "text": "\nclass MinStack {\n    stack<int> data;\n    stack<int> helper;\npublic:\n    /** initialize your data structure here. */\n    MinStack() {\n        \n    }\n    \n    void push(int x) {\n        data.push(x);\n        if(helper.empty() || helper.top() >= x)\n        {\n            helper.push(x);\n        }\n        \n    }\n    \n    void pop() {\n        int top = data.top();\n        data.pop();\n        if(top == helper.top())\n        {\n            helper.pop();\n        }\n        \n    }\n    \n    int top() {\n        return data.top();\n    }\n    \n    int getMin() {\n        return helper.top();\n    }\n};\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * MinStack* obj = new MinStack();\n * obj->push(x);\n * obj->pop();\n * int param_3 = obj->top();\n * int param_4 = obj->getMin();\n */\n"
        },
        {
            "language": "cpp",
            "text": "\nclass MinStack {\n    stack<long> data;\n    long min = INT_MAX;\npublic:\n    /** initialize your data structure here. */\n    MinStack() {\n        \n    }\n    \n    void push(int x) {\n        data.push(x - min);\n        if(x < min)\n        {\n            min = x;\n        }\n        \n    }\n    \n    void pop() {\n        long top = data.top();\n        data.pop();\n        // 更新最小值\n        if(top < 0)\n        {\n            min -= top;\n        }\n        \n    }\n    \n    int top() {\n        long top = data.top();\n        // 最小值为 min\n        if (top < 0)\n        {\n            return min;\n        }\n        else{\n            return min+top;\n        }\n    }\n    \n    int getMin() {\n        return min;\n    }\n};\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * MinStack* obj = new MinStack();\n * obj->push(x);\n * obj->pop();\n * int param_3 = obj->top();\n * int param_4 = obj->getMin();\n */\n"
        },
        {
            "language": "py",
            "text": "\nclass MinStack:\n\n    def __init__(self):\n        \"\"\"\n        initialize your data structure here.\n        \"\"\"\n        self.stack = []\n        self.minstack = []\n\n    def push(self, x: int) -> None:\n        self.stack.append(x)\n        if not self.minstack or x <= self.minstack[-1]:\n            self.minstack.append(x)\n\n    def pop(self) -> None:\n        tmp = self.stack.pop()\n        if tmp == self.minstack[-1]:\n            self.minstack.pop()\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def min(self) -> int:\n        return self.minstack[-1]\n\n\n# Your MinStack object will be instantiated and called as such:\n# obj = MinStack()\n# obj.push(x)\n# obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.min()\n"
        },
        {
            "language": "py",
            "text": "\nclass MinStack:\n\n    def __init__(self):\n        \"\"\"\n        initialize your data structure here.\n        \"\"\"\n        self.minV = float('inf')\n        self.stack = []\n\n    def push(self, x: int) -> None:\n        self.stack.append(x - self.minV)\n        if x < self.minV:\n            self.minV = x\n\n    def pop(self) -> None:\n        if not self.stack:\n            return\n        tmp = self.stack.pop()\n        if tmp < 0:\n            self.minV -= tmp\n\n    def top(self) -> int:\n        if not self.stack:\n            return\n        tmp = self.stack[-1]\n        if tmp < 0:\n            return self.minV\n        else:\n            return self.minV + tmp\n\n    def min(self) -> int:\n        return self.minV\n\n\n\n# Your MinStack object will be instantiated and called as such:\n# obj = MinStack()\n# obj.push(x)\n# obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.min()\n"
        }
    ]
},
"Intersection-of-Two-Linked-Lists":{
    "id": "160",
    "name": "Intersection-of-Two-Linked-Lists",
    "pre": [
        {
            "text": "链表",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "双指针",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/160.Intersection-of-Two-Linked-Lists.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/160.Intersection-of-Two-Linked-Lists.md",
    "code": [
        {
            "language": "js",
            "text": "x\ndata = new Set() // 存放A链表的所有节点的地址\n\nwhile A不为空{\n  哈希表中添加A链表当前节点\n  A指针向后移动\n}\n\nwhile B不为空{\n  if 如果哈希表中含有B链表当前节点\n    return B\n  B指针向后移动\n}\n\nreturn null // 两条链表没有相交点\n"
        },
        {
            "language": "js",
            "text": "\nlet data = new Set();\nwhile (A !== null) {\n  data.add(A);\n  A = A.next;\n}\nwhile (B !== null) {\n  if (data.has(B)) return B;\n  B = B.next;\n}\nreturn null;\n"
        },
        {
            "language": "js",
            "text": "\na = headA\nb = headB\nwhile a,b指针不相等时 {\n    if a指针为空时\n      a指针重定位到链表 B的头结点\n    else\n      a指针向后移动一位\n    if b指针为空时\n      b指针重定位到链表 A的头结点\n    else\n      b指针向后移动一位\n}\nreturn a\n"
        },
        {
            "language": "js",
            "text": "\nvar getIntersectionNode = function (headA, headB) {\n  let a = headA,\n    b = headB;\n  while (a != b) {\n    a = a === null ? headB : a.next;\n    b = b === null ? headA : b.next;\n  }\n  return a;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:\n        a, b = headA, headB\n        while a != b:\n            a = a.next if a else headB\n            b = b.next if b else headA\n        return a\n"
        }
    ]
},
"two-sum-ii-input-array-is-sorted":{
    "id": "167",
    "name": "two-sum-ii-input-array-is-sorted",
    "pre": [
        {
            "text": "双指针",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "由于是有序的，因此双指针更好",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "amazon"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/167.two-sum-ii-input-array-is-sorted.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/167.two-sum-ii-input-array-is-sorted.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        int n = numbers.length;\n        int left = 0;\n        int right = n-1;\n        while(left <= right)\n        {\n            if(numbers[left] + numbers[right] == target)\n            {\n                return new int[]{left + 1, right + 1};\n            }\n            else if (numbers[left] + numbers[right] > target)\n            {\n                right--;\n            }\n            else\n            {\n                left++;\n            }\n        }\n\n        return new int[]{-1, -1};\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} numbers\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function (numbers, target) {\n  const visited = {}; // 记录出现的数字， 空间复杂度N\n\n  for (let index = 0; index < numbers.length; index++) {\n    const element = numbers[index];\n    if (visited[target - element] !== void 0) {\n      return [visited[target - element], index + 1];\n    }\n    visited[element] = index + 1;\n  }\n  return [];\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& numbers, int target) {\n        int n = numbers.size();\n        int left = 0;\n        int right = n-1;\n        while(left <= right)\n        {\n            if(numbers[left] + numbers[right] == target)\n            {\n                return {left + 1, right + 1};\n            }\n            else if (numbers[left] + numbers[right] > target)\n            {\n                right--;\n            }\n            else\n            {\n                left++;\n            }\n        }\n        return {-1, -1};\n    }\n};\n"
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
    "pre": [
        {
            "text": "投票算法",
            "link": null,
            "color": "geekblue"
        }
    ],
    "keyPoints": [
        {
            "text": "投票算法",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "adobe"
        },
        {
            "name": "zenefits"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/169.majority-element.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/169.majority-element.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int majorityElement(int[] nums) {\n        int count = 0;\n        Integer candidate = null;\n\n        for (int num : nums) {\n            if (count == 0) {\n                candidate = num;\n            }\n            count += (num == candidate) ? 1 : -1;\n        }\n\n        return candidate;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar majorityElement = function (nums) {\n  let count = 1;\n  let majority = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    if (count === 0) {\n      majority = nums[i];\n    }\n    if (nums[i] === majority) {\n      count++;\n    } else {\n      count--;\n    }\n  }\n  return majority;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        int ans = 0, cnt = 0;\n        for (int n : nums) {\n            if (ans == n) ++cnt;\n            else if (cnt > 0) --cnt;\n            else {\n                ans = n;\n                cnt = 1;\n            }\n        }\n        return ans;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        count, majority = 1, nums[0]\n        for num in nums[1:]:\n            if count == 0:\n                majority = num\n            if num == majority:\n                count += 1\n            else:\n                count -= 1\n        return majority\n"
        }
    ]
},
"factorial-trailing-zeroes":{
    "id": "172",
    "name": "factorial-trailing-zeroes",
    "pre": [
        {
            "text": "递归",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "orange"
        }
    ],
    "keyPoints": [
        {
            "text": "数论",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "bloomberg"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/172.factorial-trailing-zeroes.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/172.factorial-trailing-zeroes.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=172 lang=javascript\n *\n * [172] Factorial Trailing Zeroes\n */\n/**\n * @param {number} n\n * @return {number}\n */\nvar trailingZeroes = function (n) {\n  // tag: 数论\n\n  // if (n === 0) return n;\n\n  // 递归： f(n) = n / 5 + f(n / 5)\n  // return Math.floor(n / 5)  + trailingZeroes(Math.floor(n / 5));\n  let count = 0;\n  while (n >= 5) {\n    count += Math.floor(n / 5);\n    n = Math.floor(n / 5);\n  }\n  return count;\n};\n"
        },
        {
            "language": "js",
            "text": "\nclass Solution {\n    public int trailingZeroes(int n) {\n        int res = 0;\n        while(n >= 5)\n        {\n            n/=5;\n            res += n;\n        }\n        return res;\n    }\n}\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int trailingZeroes(int n) {\n        int res = 0;\n        while(n >= 5)\n        {\n            n/=5;\n            res += n;\n        }\n        return res;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def trailingZeroes(self, n: int) -> int:\n        count = 0\n        while n >= 5:\n            n = n // 5\n            count += n\n        return count\n\n\n# 递归\nclass Solution:\n    def trailingZeroes(self, n: int) -> int:\n        if n == 0: return 0\n        return n // 5 + self.trailingZeroes(n // 5)\n"
        }
    ]
},
"reverse-bits":{
    "id": "190",
    "name": "reverse-bits",
    "pre": [
        {
            "text": "双指针",
            "link": null,
            "color": "green"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "airbnb"
        },
        {
            "name": "apple"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/190.reverse-bits.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/190.reverse-bits.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class Solution {\n    public int reverseBits(int n) {\n        int rev = 0;\n        for (int i = 0; i < 32 && n != 0; ++i) {\n            rev |= (n & 1) << (31 - i);\n            n >>>= 1;\n        }\n        return rev;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number} n - a positive integer\n * @return {number} - a positive integer\n */\nvar reverseBits = function (n) {\n  let res = 0;\n  for (let i = 0; i < 32; i++) {\n    res = (res << 1) + (n & 1);\n    n = n >>> 1;\n  }\n\n  return res >>> 0;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    # @param n, an integer\n    # @return an integer\n    def reverseBits(self, n):\n        result = 0\n        for i in range(32):\n            result = (result << 1) | (n & 1)\n            n >>= 1\n        return result\n# or\nclass Solution:\n    def reverseBits(self, n: int) -> int:\n        ans = 0\n        for i in range(31, -1, -1):\n            ans |= ((n >> i) & 1) << (31 - i)\n        return ans\n"
        }
    ]
},
"number-of-1-bits":{
    "id": "191",
    "name": "number-of-1-bits",
    "pre": [
        {
            "text": "位运算",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/bit.md",
            "color": "blue"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "apple"
        },
        {
            "name": "microsoft"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/191.number-of-1-bits.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/191.number-of-1-bits.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class Solution {\n    public int hammingWeight(int n) {\n        int count = 0;\n        for (int i = 0; i < 32; i++) {\n            if ((n & (1 << i)) != 0) {\n                count++;\n            }\n        }\n        return count;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=191 lang=javascript\n *\n */\n/**\n * @param {number} n - a positive integer\n * @return {number}\n */\nvar hammingWeight = function (n) {\n  let count = 0;\n  while (n !== 0) {\n    n = n & (n - 1);\n    count++;\n  }\n\n  return count;\n};\n"
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
    "pre": [
        {
            "text": "动态规划",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        },
        {
            "name": "airbnb"
        },
        {
            "name": "linkedin"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/198.house-robber.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/198.house-robber.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int rob(int[] nums) {\n        if (nums == null || nums.length == 0) {\n            return 0;\n        }\n        int length = nums.length;\n        if (length == 1) {\n            return nums[0];\n        }\n        int prev = nums[0], cur = Math.max(nums[0], nums[1]);\n        for (int i = 2; i < length; i++) {\n            int temp = cur;\n            cur = Math.max(prev + nums[i], cur);\n            prev = temp;\n        }\n        return cur;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\nlet a = 0;\nlet b = 0;\n\nfor (let i = 0; i < nums.length; i++) {\n  const temp = b;\n  b = Math.max(a + nums[i], b);\n  a = temp;\n}\n\nreturn b;\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar rob = function (nums) {\n  // Tag: DP\n  const dp = [];\n  dp[0] = 0;\n  dp[1] = 0;\n\n  for (let i = 2; i < nums.length + 2; i++) {\n    dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);\n  }\n\n  return dp[nums.length + 1];\n};\n"
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
    "pre": [
        {
            "text": "队列",
            "link": null,
            "color": "volcano"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/199.binary-tree-right-side-view.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/199.binary-tree-right-side-view.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar rightSideView = function(root) {\n  if (!root) return [];\n\n  const ret = [];\n  const queue = [root, null];\n\n  let levelNodes = [];\n\n  while (queue.length > 0) {\n    const node = queue.shift();\n    if (node !== null) {\n      levelNodes.push(node.val);\n      if (node.right) {\n        queue.push(node.right);\n      }\n      if (node.left) {\n        queue.push(node.left);\n      }\n    } else {\n      // 一层遍历已经结束\n      ret.push(levelNodes[0]);\n      if (queue.length > 0) {\n        queue.push(null);\n      }\n      levelNodes = [];\n    }\n  }\n\n  return ret;\n};\n"
        }
    ]
},
"number-of-islands":{
    "id": "200",
    "name": "number-of-islands",
    "pre": [
        {
            "text": "DFS",
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/200.number-of-islands.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/200.number-of-islands.md",
    "code": [
        {
            "language": "java",
            "text": "\n   public int numIslands(char[][] grid) {\n        if (grid == null || grid.length == 0 || grid[0].length == 0) return 0;\n\n        int count = 0;\n        for (int row = 0; row < grid.length; row++) {\n            for (int col = 0; col < grid[0].length; col++) {\n                if (grid[row][col] == '1') {\n                    dfs(grid, row, col);\n                    count++;\n                }\n            }\n        }\n        return count;\n    }\n\n    private void dfs(char[][] grid,int row,int col) {\n        if (row<0||row== grid.length||col<0||col==grid[0].length||grid[row][col]!='1') {\n            return;\n        }\n        grid[row][col] = '0';\n        dfs(grid, row-1, col);\n        dfs(grid, row+1, col);\n        dfs(grid, row, col+1);\n        dfs(grid, row, col-1);\n    }\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=200 lang=javascript\n *\n * [200] Number of Islands\n */\nfunction helper(grid, i, j, rows, cols) {\n  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === \"0\")\n    return;\n\n  grid[i][j] = \"0\";\n\n  helper(grid, i + 1, j, rows, cols);\n  helper(grid, i, j + 1, rows, cols);\n  helper(grid, i - 1, j, rows, cols);\n  helper(grid, i, j - 1, rows, cols);\n}\n/**\n * @param {character[][]} grid\n * @return {number}\n */\nvar numIslands = function (grid) {\n  let res = 0;\n  const rows = grid.length;\n  if (rows === 0) return 0;\n  const cols = grid[0].length;\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      if (grid[i][j] === \"1\") {\n        helper(grid, i, j, rows, cols);\n        res++;\n      }\n    }\n  }\n  return res;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        int res = 0;\n        for(int i=0;i<grid.size();i++)\n        {\n            for(int j=0;j<grid[0].size();j++)\n            {\n                if(grid[i][j] == '1')\n                {\n                    dfs(grid, i, j);\n                    res += 1;\n                }\n            }\n        }\n        return res;\n\n    }\n    void dfs(vector<vector<char>>& grid, int i, int j)\n    {\n        // edge\n        if(i<0 || i>= grid.size() || j<0 || j>= grid[0].size() || grid[i][j] != '1')\n        {\n            return;\n        }\n        grid[i][j] = '0';\n        dfs(grid, i+1, j);\n        dfs(grid, i-1, j);\n        dfs(grid, i, j+1);\n        dfs(grid, i, j-1);\n    }\n};\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def numIslands(self, grid: List[List[str]]) -> int:\n        if not grid: return 0\n\n        count = 0\n        for i in range(len(grid)):\n            for j in range(len(grid[0])):\n                if grid[i][j] == '1':\n                    self.dfs(grid, i, j)\n                    count += 1\n\n        return count\n\n    def dfs(self, grid, i, j):\n        if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] != '1':\n            return\n        grid[i][j] = '0'\n        self.dfs(grid, i + 1, j)\n        self.dfs(grid, i - 1, j)\n        self.dfs(grid, i, j + 1)\n        self.dfs(grid, i, j - 1)\n\n"
        }
    ]
},
"bitwise-and-of-numbers-range":{
    "id": "201",
    "name": "bitwise-and-of-numbers-range",
    "pre": [
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
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
            "text": "bit运算代码：```jsn>m?rangeBitwiseAnd(m/2,n/2)<<1:m;```>每次问题规模缩小一半，这是二分法吗？",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/201.bitwise-and-of-numbers-range.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/201.bitwise-and-of-numbers-range.md",
    "code": [
        {
            "language": "js",
            "text": "\nlet res = m;\nfor (let i = m + 1; i <= n; i++) {\n  res = res & i;\n}\nreturn res;\n"
        },
        {
            "language": "js",
            "text": "\nn > m ? rangeBitwiseAnd(m / 2, n / 2) << 1 : m;\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=201 lang=javascript\n *\n * [201] Bitwise AND of Numbers Range\n *\n */\n/**\n * @param {number} m\n * @param {number} n\n * @return {number}\n */\nvar rangeBitwiseAnd = function (m, n) {\n  let count = 0;\n  while (m !== n) {\n    m = m >> 1;\n    n = n >> 1;\n    count++;\n  }\n\n  return n << count;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def rangeBitwiseAnd(self, m: int, n: int) -> int:\n        cnt = 0\n        while m != n:\n            m >>= 1\n            n >>= 1\n            cnt += 1\n\n        return m << cnt\n"
        }
    ]
},
"remove-linked-list-elements":{
    "id": "203",
    "name": "remove-linked-list-elements",
    "pre": [
        {
            "text": "链表",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "链表的基本操作（删除指定节点）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "虚拟节点dummy简化操作>其实设置dummy节点就是为了处理特殊位置（头节点），这这道题就是如果头节点是给定的需要删除的节点呢？>为了保证代码逻辑的一致性，即不需要为头节点特殊定制逻辑，才采用的虚拟节点。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如果连续两个节点都是要删除的节点，这个情况容易被忽略。eg:```js//只有下个节点不是要删除的节点才更新currentif(!next||next.val!==val){current=next;}```",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/203.remove-linked-list-elements.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/203.remove-linked-list-elements.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public ListNode removeElements(ListNode head, int val) {\n        ListNode dummyHead = new ListNode(0);\n        dummyHead.next = head;\n        ListNode temp = dummyHead;\n        while (temp.next != null) {\n            if (temp.next.val == val) {\n                temp.next = temp.next.next;\n            } else {\n                temp = temp.next;\n            }\n        }\n        return dummyHead.next;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n// 只有下个节点不是要删除的节点才更新 current\nif (!next || next.val !== val) {\n  current = next;\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {ListNode} head\n * @param {number} val\n * @return {ListNode}\n */\nvar removeElements = function (head, val) {\n  const dummy = {\n    next: head,\n  };\n  let current = dummy;\n\n  while (current && current.next) {\n    let next = current.next;\n    if (next.val === val) {\n      current.next = next.next;\n      next = next.next;\n    }\n\n    if (!next || next.val !== val) {\n      current = next;\n    }\n  }\n\n  return dummy.next;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    ListNode* removeElements(ListNode* head, int val) {\n        struct ListNode* dummyHead = new ListNode(0, head);\n        struct ListNode* temp = dummyHead;\n        while (temp->next != NULL) {\n            if (temp->next->val == val) {\n                temp->next = temp->next->next;\n            } else {\n                temp = temp->next;\n            }\n        }\n        return dummyHead->next;\n    }\n};\n"
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
    "pre": [
        {
            "text": "链表",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "magenta"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "百度"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "adobe"
        },
        {
            "name": "amazon"
        },
        {
            "name": "apple"
        },
        {
            "name": "bloomberg"
        },
        {
            "name": "facebook"
        },
        {
            "name": "microsoft"
        },
        {
            "name": "snapchat"
        },
        {
            "name": "twitter"
        },
        {
            "name": "uber"
        },
        {
            "name": "yahoo"
        },
        {
            "name": "yelp"
        },
        {
            "name": "zenefits"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/206.reverse-linked-list.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/206.reverse-linked-list.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode pre = null, cur = head;\n\n        while (cur != null) {\n            ListNode next = cur.next;\n            cur.next = pre;\n            pre = cur;\n            cur = next;\n        }\n\n        return pre;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar reverseList = function (head) {\n  if (!head || !head.next) return head;\n\n  let cur = head;\n  let pre = null;\n\n  while (cur) {\n    const next = cur.next;\n    cur.next = pre;\n    pre = cur;\n    cur = next;\n  }\n\n  return pre;\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar reverseList = function (head) {\n  // 递归结束条件\n  if (head === null || head.next === null) {\n    return head;\n  }\n\n  // 递归反转 子链表\n  let newReverseList = reverseList(head.next);\n  // 获取原来链表的第 2 个节点 newReverseListTail\n  let newReverseListTail = head.next;\n  // 调整原来头结点和第 2 个节点的指向\n  newReverseListTail.next = head;\n  head.next = null;\n\n  // 将调整后的链表返回\n  return newReverseList;\n};\n"
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
    "pre": [
        {
            "text": "前缀树",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/trie.md",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀树",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/208.implement-trie-prefix-tree.md",
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
            "text": "\n/*\n * @lc app=leetcode id=208 lang=javascript\n *\n * [208] Implement Trie (Prefix Tree)\n *\n * https://leetcode.com/problems/implement-trie-prefix-tree/description/\n *\n * algorithms\n * Medium (36.93%)\n * Total Accepted:    172K\n * Total Submissions: 455.5K\n * Testcase Example:  '[\"Trie\",\"insert\",\"search\",\"search\",\"startsWith\",\"insert\",\"search\"]\\n[[],[\"apple\"],[\"apple\"],[\"app\"],[\"app\"],[\"app\"],[\"app\"]]'\n *\n * Implement a trie with insert, search, and startsWith methods.\n *\n * Example:\n *\n *\n * Trie trie = new Trie();\n *\n * trie.insert(\"apple\");\n * trie.search(\"apple\");   // returns true\n * trie.search(\"app\");     // returns false\n * trie.startsWith(\"app\"); // returns true\n * trie.insert(\"app\");\n * trie.search(\"app\");     // returns true\n *\n *\n * Note:\n *\n *\n * You may assume that all inputs are consist of lowercase letters a-z.\n * All inputs are guaranteed to be non-empty strings.\n *\n *\n */\nfunction TrieNode(val) {\n  this.val = val;\n  this.children = [];\n  this.isWord = false;\n}\n\nfunction computeIndex(c) {\n  return c.charCodeAt(0) - \"a\".charCodeAt(0);\n}\n/**\n * Initialize your data structure here.\n */\nvar Trie = function () {\n  this.root = new TrieNode(null);\n};\n\n/**\n * Inserts a word into the trie.\n * @param {string} word\n * @return {void}\n */\nTrie.prototype.insert = function (word) {\n  let ws = this.root;\n  for (let i = 0; i < word.length; i++) {\n    const c = word[i];\n    const current = computeIndex(c);\n    if (!ws.children[current]) {\n      ws.children[current] = new TrieNode(c);\n    }\n    ws = ws.children[current];\n  }\n  ws.isWord = true;\n};\n\n/**\n * Returns if the word is in the trie.\n * @param {string} word\n * @return {boolean}\n */\nTrie.prototype.search = function (word) {\n  let ws = this.root;\n  for (let i = 0; i < word.length; i++) {\n    const c = word[i];\n    const current = computeIndex(c);\n    if (!ws.children[current]) return false;\n    ws = ws.children[current];\n  }\n  return ws.isWord;\n};\n\n/**\n * Returns if there is any word in the trie that starts with the given prefix.\n * @param {string} prefix\n * @return {boolean}\n */\nTrie.prototype.startsWith = function (prefix) {\n  let ws = this.root;\n  for (let i = 0; i < prefix.length; i++) {\n    const c = prefix[i];\n    const current = computeIndex(c);\n    if (!ws.children[current]) return false;\n    ws = ws.children[current];\n  }\n  return true;\n};\n\n/**\n * Your Trie object will be instantiated and called as such:\n * var obj = new Trie()\n * obj.insert(word)\n * var param_2 = obj.search(word)\n * var param_3 = obj.startsWith(prefix)\n */\n"
        }
    ]
},
"minimum-size-subarray-sum":{
    "id": "209",
    "name": "minimum-size-subarray-sum",
    "pre": [
        {
            "text": "滑动窗口",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "滑动窗口简化操作(滑窗口适合用于求解这种要求`连续`的题目)",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/209.minimum-size-subarray-sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/209.minimum-size-subarray-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=209 lang=javascript\n *\n * [209] Minimum Size Subarray Sum\n *\n */\n/**\n * @param {number} s\n * @param {number[]} nums\n * @return {number}\n */\nvar minSubArrayLen = function (s, nums) {\n  if (nums.length === 0) return 0;\n  const slideWindow = [];\n  let acc = 0;\n  let min = null;\n\n  for (let i = 0; i < nums.length + 1; i++) {\n    const num = nums[i];\n\n    while (acc >= s) {\n      if (min === null || slideWindow.length < min) {\n        min = slideWindow.length;\n      }\n      acc = acc - slideWindow.shift();\n    }\n\n    slideWindow.push(num);\n\n    acc = slideWindow.reduce((a, b) => a + b, 0);\n  }\n\n  return min || 0;\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar minSubArrayLen = function (s, nums) {\n  if (nums.length === 0) return 0;\n  const slideWindow = [];\n  let acc = 0;\n  let min = null;\n\n  for (let i = 0; i < nums.length + 1; i++) {\n    const num = nums[i];\n\n    while (acc > s) {\n      acc = acc - slideWindow.shift();\n    }\n    if (acc === s) {\n      if (min === null || slideWindow.length < min) {\n        min = slideWindow.length;\n      }\n      slideWindow.shift();\n    }\n\n    slideWindow.push(num);\n\n    acc = slideWindow.reduce((a, b) => a + b, 0);\n  }\n\n  return min || 0;\n};\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def minSubArrayLen(self, s: int, nums: List[int]) -> int:\n        l = total = 0\n        ans = len(nums) + 1\n        for r in range(len(nums)):\n            total += nums[r]\n            while total >= s:\n                ans = min(ans, r - l + 1)\n                total -= nums[l]\n                l += 1\n        return  0 if ans == len(nums) + 1 else ans\n"
        }
    ]
},
"add-and-search-word-data-structure-design":{
    "id": "211",
    "name": "add-and-search-word-data-structure-design",
    "pre": [
        {
            "text": "前缀树",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/trie.md",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀树（也叫字典树），英文名Trie（读作tree或者try）",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/211.add-and-search-word-data-structure-design.md",
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
    "pre": [
        {
            "text": "前缀树",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/trie.md",
            "color": "purple"
        },
        {
            "text": "深度优先遍历",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/DFS.md",
            "color": "geekblue"
        },
        {
            "text": "小岛专题",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/island.md",
            "color": "purple"
        },
        {
            "text": "剪枝",
            "link": null,
            "color": "gold"
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
            "text": "剪枝的技巧",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/212.word-search-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/212.word-search-ii.md",
    "code": [
        {
            "language": "py",
            "text": "\nfrom collections import defaultdict\nclass Trie:\n    def __init__(self):\n        self.children = defaultdict(Trie)\n        self.word = \"\"\n\n    def insert(self, word):\n        cur = self\n        for c in word:\n            cur = cur.children[c]\n        cur.word = word\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\n        def dfs(row, col, cur):\n            if row < 0 or row >= m or col < 0 or col >= n or board[row][col] == '.' or board[row][col] not in cur.children: return\n            c = board[row][col]\n            cur  = cur.children[c]\n            if cur.word != '': ans.add(cur.word)\n            board[row][col] = '.'\n            dfs(row+1,col, cur)\n            dfs(row-1,col, cur)\n            dfs(row,col+1, cur)\n            dfs(row,col-1, cur)\n            board[row][col] = c\n        m, n = len(board), len(board[0])\n        ans = set()\n        trie = Trie()\n        words = set(words)\n        for word in words:\n            trie.insert(word)\n        for i in range(m):\n            for j in range(n):\n                dfs(i, j, trie)\n        return list(ans)\n"
        }
    ]
},
"kth-largest-element-in-an-array":{
    "id": "215",
    "name": "kth-largest-element-in-an-array",
    "pre": [
        {
            "text": "堆",
            "link": null,
            "color": "green"
        },
        {
            "text": "Quick Select",
            "link": null,
            "color": "lime"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.直接排序很简单2.堆（Heap）主要是要维护一个K大小的小顶堆，扫描一遍数组，最后堆顶元素即是所求。3.QuickSelect,关键是是取pivot，对数组区间做partition，比较pivot的位置，类似二分，取pivot左边或右边继续递归查找。",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/215.kth-largest-element-in-an-array.md",
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
    "pre": [
        {
            "text": "hashmap",
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/219.contains-duplicate-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/219.contains-duplicate-ii.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for(int i=0;i<nums.length;i++)\n        {\n            if(map.get(nums[i]) != null && (i-map.get(nums[i])) <= k)\n            {\n                return true;\n            }\n            map.put(nums[i], i);\n        }\n        return false;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @param {number} k\n * @return {boolean}\n */\nvar containsNearbyDuplicate = function (nums, k) {\n  const visited = {};\n  for (let i = 0; i < nums.length; i++) {\n    const num = nums[i];\n    if (visited[num] !== undefined && i - visited[num] <= k) {\n      return true;\n    }\n    visited[num] = i;\n  }\n  return false;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        d = {}\n        for index, num in enumerate(nums):\n            if num in d and index - d[num] <= k:\n                return True\n            d[num] = index\n        return False\n"
        }
    ]
},
"contains-duplicate-iii":{
    "id": "220",
    "name": "contains-duplicate-iii",
    "pre": [
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "分桶排序思想的应用",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/220.contains-duplicate-iii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/220.contains-duplicate-iii.md",
    "code": [
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    bool containsNearbyAlmostDuplicate(vector<int>& nums, int k, int t) {\n        if(t<0) return false;\n        //t+1可能会溢出，所以要+ 1LL\n        long long mod = t + 1LL;\n        unordered_map<long long,long long> buck;\n        for(int i=0;i<nums.size();i++)\n        {\n            long long nth = nums[i] / mod;\n            //可能nums[i]为负数，比如-4 / 5 以及 -4 / 5都等于0，所以负数要向下移动一位\n            if(nums[i] < 0) nth--;\n            //这里要用find 不能直接[],因为可能本身存储的数字就为0\n            if(buck.find(nth)!=buck.end())\n                return true;\n            else if(buck.find(nth-1)!=buck.end() && abs(nums[i] - buck[nth-1]) <= t)\n                return true;\n            else if(buck.find(nth+1)!=buck.end() && abs(nums[i] - buck[nth+1]) <= t)\n                return true;\n            buck[nth] = nums[i];\n            if(i >= k)\n            {\n                long long pos = nums[i - k] / mod;\n                if(nums[i - k] < 0) pos--;\n                buck.erase(pos);\n            }\n        }\n        return false;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                if abs(nums[i] - nums[j]) <= t and j - i  <= k:\n                    return True\n        return False\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:\n        for i in range(len(nums)):\n            for j in range(i + 1, min(len(nums), i + k + 1)):\n                if abs(nums[i] - nums[j]) <= t:\n                    return True\n        return False\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:\n        bucket = dict()\n        if t < 0: return False\n        for i in range(len(nums)):\n            nth = nums[i] // (t + 1)\n            if nth in bucket:\n                return True\n            if nth - 1 in bucket and abs(nums[i] - bucket[nth - 1]) <= t:\n                return True\n            if nth + 1 in bucket and abs(nums[i] - bucket[nth + 1]) <= t:\n                return True\n            bucket[nth] = nums[i]\n            if i >= k: bucket.pop(nums[i - k] // (t + 1))\n        return False\n"
        }
    ]
},
"maximal-square":{
    "id": "221",
    "name": "maximal-square",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        },
        {
            "text": "递归",
            "link": null,
            "color": "orange"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/221.maximal-square.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/221.maximal-square.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=221 lang=javascript\n *\n * [221] Maximal Square\n */\n/**\n * @param {character[][]} matrix\n * @return {number}\n */\nvar maximalSquare = function (matrix) {\n  if (matrix.length === 0) return 0;\n  const dp = [];\n  const rows = matrix.length;\n  const cols = matrix[0].length;\n  let max = Number.MIN_VALUE;\n\n  for (let i = 0; i < rows + 1; i++) {\n    if (i === 0) {\n      dp[i] = Array(cols + 1).fill(0);\n    } else {\n      dp[i] = [0];\n    }\n  }\n\n  for (let i = 1; i < rows + 1; i++) {\n    for (let j = 1; j < cols + 1; j++) {\n      if (matrix[i - 1][j - 1] === \"1\") {\n        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;\n        max = Math.max(max, dp[i][j]);\n      } else {\n        dp[i][j] = 0;\n      }\n    }\n  }\n\n  return max * max;\n};\n"
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
    "pre": [
        {
            "text": "递归",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
            "color": "orange"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/226.invert-binary-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/226.invert-binary-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function (root) {\n  if (!root) return root;\n  // 递归\n  //   const left = root.left;\n  //   const right = root.right;\n  //   root.right = invertTree(left);\n  //   root.left = invertTree(right);\n  // 我们用stack来模拟递归\n  // 本质上递归是利用了执行栈，执行栈也是一种栈\n  // 其实这里使用队列也是一样的，因为这里顺序不重要\n\n  const stack = [root];\n  let current = null;\n  while ((current = stack.shift())) {\n    const left = current.left;\n    const right = current.right;\n    current.right = left;\n    current.left = right;\n    if (left) {\n      stack.push(left);\n    }\n    if (right) {\n      stack.push(right);\n    }\n  }\n  return root;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def invertTree(self, root: TreeNode) -> TreeNode:\n        if not root:\n            return None\n        stack = [root]\n        while stack:\n            node = stack.pop(0)\n            node.left, node.right = node.right, node.left\n            if node.left:\n                stack.append(node.left)\n            if node.right:\n                stack.append(node.right)\n        return root\n"
        }
    ]
},
"basic-calculator-ii":{
    "id": "227",
    "name": "basic-calculator-ii",
    "pre": [
        {
            "text": "栈",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "区分一目和二目运算符，并使用栈来简化操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "记录pre_flag，即上一次出现的操作符",
            "link": null,
            "color": "blue"
        },
        {
            "text": "使用哨兵简化操作。一个是s的$，另一个是pre_flag的+",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/227.basic-calculator-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/227.basic-calculator-ii.md",
    "code": [
        {
            "language": "py",
            "text": "\n1 + 2\n"
        },
        {
            "language": "py",
            "text": "\n+ 1 + 2\n# 可看成\n(+1)(+2)\n"
        },
        {
            "language": "py",
            "text": "\n(-1)(+2)(+3)(-4)\n"
        },
        {
            "language": "py",
            "text": "\n(5) / (2)\n"
        },
        {
            "language": "py",
            "text": "\n(3) * (4)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def calculate(self, s: str) -> int:\n        stack = []\n        s += '$'\n        pre_flag = '+'\n        num = 0\n\n        for c in s:\n            if c.isdigit():\n                num = num * 10 + int(c)\n            elif c == ' ': continue\n            else:\n                if pre_flag == '+':\n                    stack.append(num)\n                elif pre_flag == '-':\n                    stack.append(-num)\n                elif pre_flag == '*':\n                    stack.append(stack.pop() * num)\n                elif pre_flag == '/':\n                    stack.append(int(stack.pop() / num))\n                pre_flag = c\n                num = 0\n        return sum(stack)\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def calculate(self, s: str) -> int:\n        s = '(' + s + ')'\n        n = len(s)\n        i = 0\n        stack_ops = [] # 存储字符串的栈\n        stack_nums = [] # 存储数字的栈\n        while i < n:\n            if s[i] in ' ':\n                i += 1\n                continue\n            elif '0' <= s[i] <= '9':\n                # 是数字\n                num = ''\n                while i < n and s[i].isdigit():\n                    num += s[i]\n                    i += 1\n                i -= 1\n                stack_nums.append(int(num))\n                if not stack_ops:\n                    i += 1\n                    continue\n                op = stack_ops.pop()\n                num = stack_nums.pop()\n                if op == \"+\":\n                    num *= 1\n                elif op == \"-\":\n                    num *= -1\n                elif op == \"*\":\n                    num = stack_nums.pop() * num\n                elif op == \"/\":\n                    if num ^ stack_nums[-1] > 0: num = stack_nums.pop() // num\n                    else: num = (stack_nums.pop() + num - 1) // num\n                stack_nums.append(num)\n            else:\n                stack_ops.append(s[i])\n            i += 1\n        return sum(stack_nums)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def calculate(self, s: str) -> int:\n        def dfs(s, start):\n            stack = []\n            pre_flag = '+'\n            num = 0\n            i = start\n            while i < len(s):\n                c = s[i]\n                if  c == ' ':\n                    i += 1\n                    continue\n                elif c == '(':\n                    i, num = dfs(s, i+1)\n                elif c.isdigit():\n                    num = num * 10 + int(c)\n                else:\n                    if pre_flag == '+':\n                        stack.append(num)\n                    elif pre_flag == '-':\n                        stack.append(-num)\n                    if c == ')': break\n                    pre_flag = c\n                    num = 0\n                i += 1\n            return i, sum(stack)\n        s += '$'\n        return dfs(s, 0)[1]\n\n"
        },
        {
            "language": "py",
            "text": "\nif c == ')':\n    if pre_flag == '+':\n        stack.append(num)\n    elif pre_flag == '-':\n        stack.append(-num)\n    break\n"
        }
    ]
},
"majority-element-ii":{
    "id": "229",
    "name": "majority-element-ii",
    "pre": [
        {
            "text": "摩尔投票法",
            "link": null,
            "color": "orange"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/229.majority-element-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/229.majority-element-ii.md",
    "code": [
        {
            "language": "java",
            "text": "\n/*\n * @lc app=leetcode id=229 lang=java\n *\n * [229] Majority Element II\n */\nclass Solution {\n    public List<Integer> majorityElement(int[] nums) {\n        List<Integer> res = new ArrayList<Integer>();\n        if (nums == null || nums.length == 0)\n            return res;\n        int n1 = nums[0], n2 = nums[0], cnt1 = 0, cnt2 = 0, len = nums.length;\n        for (int i = 0; i < len; i++) {\n            if (nums[i] == n1)\n                cnt1++;\n            else if (nums[i] == n2)\n                cnt2++;\n            else if (cnt1 == 0) {\n                n1 = nums[i];\n                cnt1 = 1;\n            } else if (cnt2 == 0) {\n                n2 = nums[i];\n                cnt2 = 1;\n            } else {\n                cnt1--;\n                cnt2--;\n            }\n        }\n        cnt1 = 0;\n        cnt2 = 0;\n        for (int i = 0; i < len; i++) {\n            if (nums[i] == n1)\n                cnt1++;\n            else if (nums[i] == n2)\n                cnt2++;\n        }\n        if (cnt1 > len / 3)\n            res.add(n1);\n        if (cnt2 > len / 3 && n1 != n2)\n            res.add(n2);\n        return res;\n    }\n}\n\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=229 lang=javascript\n *\n * [229] Majority Element II\n */\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar majorityElement = function (nums) {\n  const res = [];\n  const len = nums.length;\n  let n1 = null,\n    n2 = null,\n    cnt1 = 0,\n    cnt2 = 0;\n\n  for (let i = 0; i < len; i++) {\n    if (n1 === nums[i]) {\n      cnt1++;\n    } else if (n2 === nums[i]) {\n      cnt2++;\n    } else if (cnt1 === 0) {\n      n1 = nums[i];\n      cnt1++;\n    } else if (cnt2 === 0) {\n      n2 = nums[i];\n      cnt2++;\n    } else {\n      cnt1--;\n      cnt2--;\n    }\n  }\n\n  cnt1 = 0;\n  cnt2 = 0;\n\n  for (let i = 0; i < len; i++) {\n    if (n1 === nums[i]) {\n      cnt1++;\n    } else if (n2 === nums[i]) {\n      cnt2++;\n    }\n  }\n\n  if (cnt1 > (len / 3) >>> 0) {\n    res.push(n1);\n  }\n  if (cnt2 > (len / 3) >>> 0) {\n    res.push(n2);\n  }\n\n  return res;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    vector<int> majorityElement(vector<int>& nums) {\n        int c1 = 0, c2 = 0, v1 = 0, v2 = 1;\n        for (int n : nums) {\n            if (v1 == n) ++c1;\n            else if (v2 == n) ++c2;\n            else if (!c1) v1 = n, ++c1;\n            else if (!c2) v2 = n, ++c2;\n            else --c1, --c2;\n        }\n        c1 = c2 = 0;\n        for (int n : nums) {\n            if (v1 == n) ++c1;\n            if (v2 == n) ++c2;\n        }\n        vector<int> v;\n        if (c1 > nums.size() / 3) v.push_back(v1);\n        if (c2 > nums.size() / 3) v.push_back(v2);\n        return v;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def majorityElement(self, nums):\n        c1 = c2 = 0\n        v1 = v2 = -1\n\n        for num in nums:\n            if num == v1: c1 += 1\n            elif num == v2: c2 += 1\n            elif c1 == 0:\n                c1 = 1\n                v1 = num\n            elif c2 == 0:\n                c2 = 1\n                v2 = num\n            else:\n                c1 -= 1\n                c2 -= 1\n        # check\n        c1 = c2 = 0\n        for num in nums:\n            if v1 == num: c1 += 1\n            if v2 == num: c2 += 1\n        ans = []\n        if c1 > len(nums)//3: ans.append(v1)\n        if c2 > len(nums)//3: ans.append(v2)\n        return list(set(ans))\n"
        }
    ]
},
"kth-smallest-element-in-a-bst":{
    "id": "230",
    "name": "kth-smallest-element-in-a-bst",
    "pre": [
        {
            "text": "中序遍历",
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/230.kth-smallest-element-in-a-bst.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/230.kth-smallest-element-in-a-bst.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nprivate int count = 1;\nprivate int res;\n\npublic int KthSmallest (TreeNode root, int k) {\n    inorder(root, k);\n    return res;\n}\n\npublic void inorder (TreeNode root, int k) {\n    if (root == null) return;\n\n    inorder(root.left, k);\n\n    if (count++ == k) {\n        res = root.val;\n        return;\n    }\n\n    inorder(root.right, k);\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=230 lang=javascript\n *\n * [230] Kth Smallest Element in a BST\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function (root, k) {\n  const stack = [root];\n  let cur = root;\n  let i = 0;\n\n  function insertAllLefts(cur) {\n    while (cur && cur.left) {\n      const l = cur.left;\n      stack.push(l);\n      cur = l;\n    }\n  }\n  insertAllLefts(cur);\n\n  while ((cur = stack.pop())) {\n    i++;\n    if (i === k) return cur.val;\n    const r = cur.right;\n\n    if (r) {\n      stack.push(r);\n      insertAllLefts(r);\n    }\n  }\n\n  return -1;\n};\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\nfunction nodeCount(node) {\n  if (node === null) return 0;\n\n  const l = nodeCount(node.left);\n  const r = nodeCount(node.right);\n\n  return 1 + l + r;\n}\n/**\n * @param {TreeNode} root\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function (root, k) {\n  const c = nodeCount(root.left);\n  if (c === k - 1) return root.val;\n  else if (c < k - 1) return kthSmallest(root.right, k - c - 1);\n  return kthSmallest(root.left, k);\n};\n"
        }
    ]
},
"implement-queue-using-stacks":{
    "id": "232",
    "name": "implement-queue-using-stacks",
    "pre": [
        {
            "text": "栈",
            "link": null,
            "color": "red"
        },
        {
            "text": "队列",
            "link": null,
            "color": "volcano"
        }
    ],
    "keyPoints": [
        {
            "text": "在push的时候利用辅助栈(双栈)",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/232.implement-queue-using-stacks.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/232.implement-queue-using-stacks.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass MyQueue {\n    Stack<Integer> pushStack = new Stack<> ();\n    Stack<Integer> popStack = new Stack<> ();\n\n    /** Initialize your data structure here. */\n    public MyQueue() {\n\n    }\n\n    /** Push element x to the back of queue. */\n    public void push(int x) {\n        while (!popStack.isEmpty()) {\n            pushStack.push(popStack.pop());\n        }\n        pushStack.push(x);\n    }\n\n    /** Removes the element from in front of queue and returns that element. */\n    public int pop() {\n        while (!pushStack.isEmpty()) {\n            popStack.push(pushStack.pop());\n        }\n        return popStack.pop();\n    }\n\n    /** Get the front element. */\n    public int peek() {\n        while (!pushStack.isEmpty()) {\n            popStack.push(pushStack.pop());\n        }\n        return popStack.peek();\n    }\n\n    /** Returns whether the queue is empty. */\n    public boolean empty() {\n        return pushStack.isEmpty() && popStack.isEmpty();\n    }\n}\n\n/**\n * Your MyQueue object will be instantiated and called as such:\n * MyQueue obj = new MyQueue();\n * obj.push(x);\n * int param_2 = obj.pop();\n * int param_3 = obj.peek();\n * boolean param_4 = obj.empty();\n */\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=232 lang=javascript\n *\n * [232] Implement Queue using Stacks\n */\n/**\n * Initialize your data structure here.\n */\nvar MyQueue = function () {\n  // tag: queue stack array\n  this.stack = [];\n  this.helperStack = [];\n};\n\n/**\n * Push element x to the back of queue.\n * @param {number} x\n * @return {void}\n */\nMyQueue.prototype.push = function (x) {\n  let cur = null;\n  while ((cur = this.stack.pop())) {\n    this.helperStack.push(cur);\n  }\n  this.helperStack.push(x);\n\n  while ((cur = this.helperStack.pop())) {\n    this.stack.push(cur);\n  }\n};\n\n/**\n * Removes the element from in front of queue and returns that element.\n * @return {number}\n */\nMyQueue.prototype.pop = function () {\n  return this.stack.pop();\n};\n\n/**\n * Get the front element.\n * @return {number}\n */\nMyQueue.prototype.peek = function () {\n  return this.stack[this.stack.length - 1];\n};\n\n/**\n * Returns whether the queue is empty.\n * @return {boolean}\n */\nMyQueue.prototype.empty = function () {\n  return this.stack.length === 0;\n};\n\n/**\n * Your MyQueue object will be instantiated and called as such:\n * var obj = new MyQueue()\n * obj.push(x)\n * var param_2 = obj.pop()\n * var param_3 = obj.peek()\n * var param_4 = obj.empty()\n */\n"
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
    "pre": [
        {
            "text": "递归",
            "link": null,
            "color": "orange"
        }
    ],
    "keyPoints": [
        {
            "text": "用递归的思路去思考树",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/236.lowest-common-ancestor-of-a-binary-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/236.lowest-common-ancestor-of-a-binary-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\n// 如果我们找到了p，直接进行返回，那如果下面就是q呢？ 其实这没有影响，但是还是要多考虑一下\nif (!root || root === p || root === q) return root;\nconst left = lowestCommonAncestor(root.left, p, q); // 去左边找，我们期望返回找到的节点\nconst right = lowestCommonAncestor(root.right, p, q); // 去右边找，我们期望返回找到的节点\nif (!left) return right; // 左子树找不到，返回右子树\nif (!right) return left; // 右子树找不到，返回左子树\nreturn root; // 左右子树分别有一个，则返回root\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */\nvar lowestCommonAncestor = function (root, p, q) {\n  if (!root || root === p || root === q) return root;\n  const left = lowestCommonAncestor(root.left, p, q);\n  const right = lowestCommonAncestor(root.right, p, q);\n  if (!left) return right; // 左子树找不到，返回右子树\n  if (!right) return left; // 右子树找不到，返回左子树\n  return root; // 左右子树分别有一个，则返回root\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        if not root or root == p or root == q:\n            return root\n        left = self.lowestCommonAncestor(root.left, p, q)\n        right = self.lowestCommonAncestor(root.right, p, q)\n\n        if not left:\n            return right\n        if not right:\n            return left\n        else:\n            return root\n\n"
        }
    ]
},
"product-of-array-except-self":{
    "id": "238",
    "name": "product-of-array-except-self",
    "pre": [
        {
            "text": "数组",
            "link": null,
            "color": "purple"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/238.product-of-array-except-self.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/238.product-of-array-except-self.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar productExceptSelf = function (nums) {\n  const ret = [];\n\n  for (let i = 0, temp = 1; i < nums.length; i++) {\n    ret[i] = temp;\n    temp *= nums[i];\n  }\n  // 此时ret[i]存放的是前i个元素相乘的结果(不包含第i个)\n\n  // 如果没有上面的循环的话，\n  // ret经过下面的循环会变成ret[i]存放的是后i个元素相乘的结果(不包含第i个)\n\n  // 我们的目标是ret[i]存放的所有数字相乘的结果(不包含第i个)\n\n  // 因此我们只需要对于上述的循环产生的ret[i]基础上运算即可\n  for (let i = nums.length - 1, temp = 1; i >= 0; i--) {\n    ret[i] *= temp;\n    temp *= nums[i];\n  }\n  return ret;\n};\n"
        }
    ]
},
"sliding-window-maximum":{
    "id": "239",
    "name": "sliding-window-maximum",
    "pre": [
        {
            "text": "队列",
            "link": null,
            "color": "volcano"
        },
        {
            "text": "滑动窗口",
            "link": null,
            "color": "purple"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/239.sliding-window-maximum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/239.sliding-window-maximum.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar maxSlidingWindow = function (nums, k) {\n  // bad 时间复杂度O(n * k)\n  if (nums.length === 0 || k === 0) return [];\n  let slideWindow = [];\n  const ret = [];\n  for (let i = 0; i < nums.length - k + 1; i++) {\n    for (let j = 0; j < k; j++) {\n      slideWindow.push(nums[i + j]);\n    }\n    ret.push(Math.max(...slideWindow));\n    slideWindow = [];\n  }\n  return ret;\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar maxSlidingWindow = function (nums, k) {\n  // 双端队列优化时间复杂度, 时间复杂度O(n)\n  const deque = []; // 存放在接下来的滑动窗口可能成为最大值的数\n  const ret = [];\n  for (let i = 0; i < nums.length; i++) {\n    // 清空失效元素\n    while (deque[0] < i - k + 1) {\n      deque.shift();\n    }\n\n    while (nums[deque[deque.length - 1]] < nums[i]) {\n      deque.pop();\n    }\n\n    deque.push(i);\n\n    if (i >= k - 1) {\n      ret.push(nums[deque[0]]);\n    }\n  }\n  return ret;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        if k == 0: return []\n        res = []\n        for r in range(k - 1, len(nums)):\n            res.append(max(nums[r - k + 1:r + 1]))\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        q = collections.deque() # 本质就是单调队列\n        ans = []\n        for i in range(len(nums)):\n            while q and nums[q[-1]] <= nums[i]: q.pop() # 维持单调性\n            while q and i - q[0] >= k: q.popleft() # 移除失效元素\n            q.append(i)\n            if i >= k - 1: ans.append(nums[q[0]])\n        return ans\n"
        }
    ]
},
"search-a-2-d-matrix-ii":{
    "id": "240",
    "name": "search-a-2-d-matrix-ii",
    "pre": [
        {
            "text": "数组",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "从角落开始遍历，利用递增的特性简化时间复杂",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/240.search-a-2-d-matrix-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/240.search-a-2-d-matrix-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=240 lang=javascript\n *\n * [240] Search a 2D Matrix II\n *\n * https://leetcode.com/problems/search-a-2d-matrix-ii/description/\n *\n *\n */\n/**\n * @param {number[][]} matrix\n * @param {number} target\n * @return {boolean}\n */\nvar searchMatrix = function (matrix, target) {\n  if (!matrix || matrix.length === 0) return false;\n\n  let colIndex = 0;\n  let rowIndex = matrix.length - 1;\n  while (rowIndex > 0 && target < matrix[rowIndex][colIndex]) {\n    rowIndex--;\n  }\n\n  while (colIndex < matrix[0].length) {\n    if (target === matrix[rowIndex][colIndex]) return true;\n    if (target > matrix[rowIndex][colIndex]) {\n      colIndex++;\n    } else if (rowIndex > 0) {\n      rowIndex--;\n    } else {\n      return false;\n    }\n  }\n\n  return false;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def searchMatrix(self, matrix, target):\n        m = len(matrix)\n        if m == 0:\n            return False\n        n = len(matrix[0])\n        i = m - 1\n        j = 0\n\n        while i >= 0 and j < n:\n            if matrix[i][j] == target:\n                return True\n            if matrix[i][j] > target:\n                i -= 1\n            else:\n                j += 1\n        return False\n"
        }
    ]
},
"ugly-number":{
    "id": "263",
    "name": "ugly-number",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/263.ugly-number.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/263.ugly-number.md",
    "code": []
},
"perfect-squares":{
    "id": "279",
    "name": "perfect-squares",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/279.perfect-squares.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/279.perfect-squares.md",
    "code": []
},
"move-zeroes":{
    "id": "283",
    "name": "move-zeroes",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/283.move-zeroes.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/283.move-zeroes.md",
    "code": []
},
"find-median-from-data-stream":{
    "id": "295",
    "name": "find-median-from-data-stream",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/295.find-median-from-data-stream.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/295.find-median-from-data-stream.md",
    "code": []
},
"serialize-and-deserialize-binary-tree":{
    "id": "297",
    "name": "serialize-and-deserialize-binary-tree",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/297.serialize-and-deserialize-binary-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/297.serialize-and-deserialize-binary-tree.md",
    "code": []
},
"remove-invalid-parentheses":{
    "id": "301",
    "name": "remove-invalid-parentheses",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/301.remove-invalid-parentheses.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/301.remove-invalid-parentheses.md",
    "code": []
},
"best-time-to-buy-and-sell-stock-with-cooldown":{
    "id": "309",
    "name": "best-time-to-buy-and-sell-stock-with-cooldown",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/309.best-time-to-buy-and-sell-stock-with-cooldown.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/309.best-time-to-buy-and-sell-stock-with-cooldown.md",
    "code": []
},
"burst-balloons":{
    "id": "312",
    "name": "burst-balloons",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/312.burst-balloons.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/312.burst-balloons.md",
    "code": []
},
"coin-change":{
    "id": "322",
    "name": "coin-change",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/322.coin-change.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/322.coin-change.md",
    "code": []
},
"wiggle-sort-ii":{
    "id": "324",
    "name": "wiggle-sort-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/324.wiggle-sort-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/324.wiggle-sort-ii.md",
    "code": []
},
"odd-even-linked-list":{
    "id": "328",
    "name": "odd-even-linked-list",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/328.odd-even-linked-list.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/328.odd-even-linked-list.md",
    "code": []
},
"patching-array":{
    "id": "330",
    "name": "patching-array",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/330.patching-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/330.patching-array.md",
    "code": []
},
"verify-preorder-serialization-of-a-binary-tree":{
    "id": "331",
    "name": "verify-preorder-serialization-of-a-binary-tree",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/331.verify-preorder-serialization-of-a-binary-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/331.verify-preorder-serialization-of-a-binary-tree.md",
    "code": []
},
"increasing-triplet-subsequence":{
    "id": "334",
    "name": "increasing-triplet-subsequence",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/334.increasing-triplet-subsequence.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/334.increasing-triplet-subsequence.md",
    "code": []
},
"self-crossing":{
    "id": "335",
    "name": "self-crossing",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/335.self-crossing.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/335.self-crossing.md",
    "code": []
},
"house-robber-iii":{
    "id": "337",
    "name": "house-robber-iii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/337.house-robber-iii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/337.house-robber-iii.md",
    "code": []
},
"power-of-four":{
    "id": "342",
    "name": "power-of-four",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/342.power-of-four.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/342.power-of-four.md",
    "code": []
},
"integer-break":{
    "id": "343",
    "name": "integer-break",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/343.integer-break.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/343.integer-break.md",
    "code": []
},
"intersection-of-two-arrays":{
    "id": "349",
    "name": "intersection-of-two-arrays",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/349.intersection-of-two-arrays.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/349.intersection-of-two-arrays.md",
    "code": []
},
"water-and-jug-problem":{
    "id": "365",
    "name": "water-and-jug-problem",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/365.water-and-jug-problem.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/365.water-and-jug-problem.md",
    "code": []
},
"sum-of-two-integers":{
    "id": "371",
    "name": "sum-of-two-integers",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/371.sum-of-two-integers.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/371.sum-of-two-integers.md",
    "code": []
},
"kth-smallest-element-in-a-sorted-matrix":{
    "id": "378",
    "name": "kth-smallest-element-in-a-sorted-matrix",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/378.kth-smallest-element-in-a-sorted-matrix.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/378.kth-smallest-element-in-a-sorted-matrix.md",
    "code": []
},
"insert-delete-getrandom-o1":{
    "id": "380",
    "name": "insert-delete-getrandom-o1",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/380.insert-delete-getrandom-o1.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/380.insert-delete-getrandom-o1.md",
    "code": []
},
"mini-parser":{
    "id": "385",
    "name": "mini-parser",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/385.mini-parser.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/385.mini-parser.md",
    "code": []
},
"decode-string":{
    "id": "394",
    "name": "decode-string",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/394.decode-string.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/394.decode-string.md",
    "code": []
},
"binary-watch":{
    "id": "401",
    "name": "binary-watch",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/401.binary-watch.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/401.binary-watch.md",
    "code": []
},
"partition-equal-subset-sum":{
    "id": "416",
    "name": "partition-equal-subset-sum",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/416.partition-equal-subset-sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/416.partition-equal-subset-sum.md",
    "code": []
},
"longest-repeating-character-replacement":{
    "id": "424",
    "name": "longest-repeating-character-replacement",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/424.longest-repeating-character-replacement.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/424.longest-repeating-character-replacement.md",
    "code": []
},
"path-sum-iii":{
    "id": "437",
    "name": "path-sum-iii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/437.path-sum-iii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/437.path-sum-iii.md",
    "code": []
},
"find-all-anagrams-in-a-string":{
    "id": "438",
    "name": "find-all-anagrams-in-a-string",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/438.find-all-anagrams-in-a-string.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/438.find-all-anagrams-in-a-string.md",
    "code": []
},
"add-two-numbers-ii":{
    "id": "445",
    "name": "add-two-numbers-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/445.add-two-numbers-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/445.add-two-numbers-ii.md",
    "code": []
},
"4-sum-ii":{
    "id": "454",
    "name": "4-sum-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/454.4-sum-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/454.4-sum-ii.md",
    "code": []
},
"AssignCookies":{
    "id": "455",
    "name": "AssignCookies",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/455.AssignCookies.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/455.AssignCookies.md",
    "code": []
},
"132-pattern":{
    "id": "456",
    "name": "132-pattern",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/456.132-pattern.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/456.132-pattern.md",
    "code": []
},
"circular-array-loop":{
    "id": "457",
    "name": "circular-array-loop",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/457.circular-array-loop.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/457.circular-array-loop.md",
    "code": []
},
"lfu-cache":{
    "id": "460",
    "name": "lfu-cache",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/460.lfu-cache.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/460.lfu-cache.md",
    "code": []
},
"can-i-win":{
    "id": "464",
    "name": "can-i-win",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/464.can-i-win.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/464.can-i-win.md",
    "code": []
},
"implement-rand10-using-rand7":{
    "id": "470",
    "name": "implement-rand10-using-rand7",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/470.implement-rand10-using-rand7.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/470.implement-rand10-using-rand7.md",
    "code": []
},
"concatenated-words":{
    "id": "472",
    "name": "concatenated-words",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/472.concatenated-words.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/472.concatenated-words.md",
    "code": []
},
"matchsticks-to-square":{
    "id": "473",
    "name": "matchsticks-to-square",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/473.matchsticks-to-square.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/473.matchsticks-to-square.md",
    "code": []
},
"sliding-window-median":{
    "id": "480",
    "name": "sliding-window-median",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/480.sliding-window-median.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/480.sliding-window-median.md",
    "code": []
},
"smallest-good-base":{
    "id": "483",
    "name": "smallest-good-base",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/483.smallest-good-base.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/483.smallest-good-base.md",
    "code": []
},
"zuma-game":{
    "id": "488",
    "name": "zuma-game",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/488.zuma-game.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/488.zuma-game.md",
    "code": []
},
"reverse-pairs":{
    "id": "493",
    "name": "reverse-pairs",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/493.reverse-pairs.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/493.reverse-pairs.md",
    "code": []
},
"target-sum":{
    "id": "494",
    "name": "target-sum",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/494.target-sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/494.target-sum.md",
    "code": []
},
"base-7":{
    "id": "504",
    "name": "base-7",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/504.base-7.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/504.base-7.md",
    "code": []
},
"find-bottom-left-tree-value":{
    "id": "513",
    "name": "find-bottom-left-tree-value",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/513.find-bottom-left-tree-value.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/513.find-bottom-left-tree-value.md",
    "code": []
},
"longest-palindromic-subsequence":{
    "id": "516",
    "name": "longest-palindromic-subsequence",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/516.longest-palindromic-subsequence.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/516.longest-palindromic-subsequence.md",
    "code": []
},
"coin-change-2":{
    "id": "518",
    "name": "coin-change-2",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/518.coin-change-2.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/518.coin-change-2.md",
    "code": []
},
"contiguous-array":{
    "id": "525",
    "name": "contiguous-array",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/525.contiguous-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/525.contiguous-array.md",
    "code": []
},
"friend-circles":{
    "id": "547",
    "name": "friend-circles",
    "pre": [
        {
            "text": "并查集",
            "link": null,
            "color": "volcano"
        }
    ],
    "keyPoints": [],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "百度"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/547.friend-circles.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/547.friend-circles.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass UF:\n    parent = {}\n    cnt = 0\n    def __init__(self, M):\n        n = len(M)\n        for i in range(n):\n            self.parent[i] = i\n            self.cnt += 1\n\n    def find(self, x):\n        while x != self.parent[x]:\n            x = self.parent[x]\n        return x\n    def union(self, p, q):\n        if self.connected(p, q): return\n        self.parent[self.find(p)] = self.find(q)\n        self.cnt -= 1\n    def connected(self, p, q):\n        return self.find(p) == self.find(q)\n\nclass Solution:\n    def findCircleNum(self, M: List[List[int]]) -> int:\n        n = len(M)\n        uf = UF(M)\n        for i in range(n):\n            for j in range(i):\n                if M[i][j] == 1:\n                    uf.union(i, j)\n        return uf.cnt\n\n"
        }
    ]
},
"number-of-provinces":{
    "id": "547",
    "name": "number-of-provinces",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/547.number-of-provinces.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/547.number-of-provinces.md",
    "code": []
},
"subarray-sum-equals-k":{
    "id": "560",
    "name": "subarray-sum-equals-k",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/560.subarray-sum-equals-k.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/560.subarray-sum-equals-k.md",
    "code": []
},
"distribute-candies":{
    "id": "575",
    "name": "distribute-candies",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/575.distribute-candies.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/575.distribute-candies.md",
    "code": []
},
"construct-string-from-binary-tree":{
    "id": "606",
    "name": "construct-string-from-binary-tree",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/606.construct-string-from-binary-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/606.construct-string-from-binary-tree.md",
    "code": []
},
"find-duplicate-file-in-system":{
    "id": "609",
    "name": "find-duplicate-file-in-system",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/609.find-duplicate-file-in-system.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/609.find-duplicate-file-in-system.md",
    "code": []
},
"valid-triangle-number":{
    "id": "611",
    "name": "valid-triangle-number",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/611.valid-triangle-number.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/611.valid-triangle-number.md",
    "code": []
},
"image-smoother":{
    "id": "661",
    "name": "image-smoother",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/661.image-smoother.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/661.image-smoother.md",
    "code": []
},
"strange-printer":{
    "id": "664",
    "name": "strange-printer",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/664.strange-printer.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/664.strange-printer.md",
    "code": []
},
"non-decreasing-array":{
    "id": "665",
    "name": "non-decreasing-array",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/665.non-decreasing-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/665.non-decreasing-array.md",
    "code": []
},
"number-of-longest-increasing-subsequence":{
    "id": "673",
    "name": "number-of-longest-increasing-subsequence",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/673.number-of-longest-increasing-subsequence.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/673.number-of-longest-increasing-subsequence.md",
    "code": []
},
"24-game":{
    "id": "679",
    "name": "24-game",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/679.24-game.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/679.24-game.md",
    "code": []
},
"repeated-string-match":{
    "id": "686",
    "name": "repeated-string-match",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/686.repeated-string-match.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/686.repeated-string-match.md",
    "code": []
},
"random-pick-with-blacklist":{
    "id": "710",
    "name": "random-pick-with-blacklist",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/710.random-pick-with-blacklist.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/710.random-pick-with-blacklist.md",
    "code": []
},
"best-time-to-buy-and-sell-stock-with-transaction-fee":{
    "id": "714",
    "name": "best-time-to-buy-and-sell-stock-with-transaction-fee",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/714.best-time-to-buy-and-sell-stock-with-transaction-fee.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/714.best-time-to-buy-and-sell-stock-with-transaction-fee.md",
    "code": []
},
"range-module":{
    "id": "715",
    "name": "range-module",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/715.range-module.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/715.range-module.md",
    "code": []
},
"maximum-length-of-repeated-subarray":{
    "id": "718",
    "name": "maximum-length-of-repeated-subarray",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/718.maximum-length-of-repeated-subarray.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/718.maximum-length-of-repeated-subarray.md",
    "code": []
},
"accounts-merge":{
    "id": "721",
    "name": "accounts-merge",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/721.accounts-merge.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/721.accounts-merge.md",
    "code": []
},
"number-of-atoms":{
    "id": "726",
    "name": "number-of-atoms",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/726.number-of-atoms.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/726.number-of-atoms.md",
    "code": []
},
"asteroid-collision":{
    "id": "735",
    "name": "asteroid-collision",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/735.asteroid-collision.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/735.asteroid-collision.md",
    "code": []
},
"reach-a-number":{
    "id": "754",
    "name": "reach-a-number",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/754.reach-a-number.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/754.reach-a-number.md",
    "code": []
},
"max-chunks-to-make-sorted-ii":{
    "id": "768",
    "name": "max-chunks-to-make-sorted-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/768.max-chunks-to-make-sorted-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/768.max-chunks-to-make-sorted-ii.md",
    "code": []
},
"is-graph-bipartite":{
    "id": "785",
    "name": "is-graph-bipartite",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/785.is-graph-bipartite.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/785.is-graph-bipartite.md",
    "code": []
},
"domino-and-tromino-tiling":{
    "id": "790",
    "name": "domino-and-tromino-tiling",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/790.domino-and-tromino-tiling.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/790.domino-and-tromino-tiling.md",
    "code": []
},
"champagne-tower":{
    "id": "799",
    "name": "champagne-tower",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/799.champagne-tower.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/799.champagne-tower.md",
    "code": []
},
"minimum-swaps-to-make-sequences-increasing":{
    "id": "801",
    "name": "minimum-swaps-to-make-sequences-increasing",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/801.minimum-swaps-to-make-sequences-increasing.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/801.minimum-swaps-to-make-sequences-increasing.md",
    "code": []
},
"split-array-with-same-average":{
    "id": "805",
    "name": "split-array-with-same-average",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/805.split-array-with-same-average.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/805.split-array-with-same-average.md",
    "code": []
},
"ambiguous-coordinates":{
    "id": "816",
    "name": "ambiguous-coordinates",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/816.ambiguous-coordinates.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/816.ambiguous-coordinates.md",
    "code": []
},
"short-encoding-of-words":{
    "id": "820",
    "name": "short-encoding-of-words",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/820.short-encoding-of-words.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/820.short-encoding-of-words.md",
    "code": []
},
"shortest-distance-to-a-character":{
    "id": "821",
    "name": "shortest-distance-to-a-character",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/821.shortest-distance-to-a-character.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/821.shortest-distance-to-a-character.md",
    "code": []
},
"push-dominoes":{
    "id": "838",
    "name": "push-dominoes",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/838.push-dominoes.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/838.push-dominoes.md",
    "code": []
},
"similar-string-groups":{
    "id": "839",
    "name": "similar-string-groups",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/839.similar-string-groups.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/839.similar-string-groups.md",
    "code": []
},
"length-of-longest-fibonacci-subsequence":{
    "id": "873",
    "name": "length-of-longest-fibonacci-subsequence",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/873.length-of-longest-fibonacci-subsequence.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/873.length-of-longest-fibonacci-subsequence.md",
    "code": []
},
"walking-robot-simulation":{
    "id": "874",
    "name": "walking-robot-simulation",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/874.walking-robot-simulation.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/874.walking-robot-simulation.md",
    "code": []
},
"koko-eating-bananas":{
    "id": "875",
    "name": "koko-eating-bananas",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/875.koko-eating-bananas.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/875.koko-eating-bananas.md",
    "code": []
},
"stone-game":{
    "id": "877",
    "name": "stone-game",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/877.stone-game.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/877.stone-game.md",
    "code": []
},
"possible-bipartition":{
    "id": "886",
    "name": "possible-bipartition",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/886.possible-bipartition.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/886.possible-bipartition.md",
    "code": []
},
"super-egg-drop":{
    "id": "887",
    "name": "super-egg-drop",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/887.super-egg-drop.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/887.super-egg-drop.md",
    "code": []
},
"maximum-frequency-stack":{
    "id": "895",
    "name": "maximum-frequency-stack",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/895.maximum-frequency-stack.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/895.maximum-frequency-stack.md",
    "code": []
},
"bitwise-ors-of-subarrays":{
    "id": "898",
    "name": "bitwise-ors-of-subarrays",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/898.bitwise-ors-of-subarrays.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/898.bitwise-ors-of-subarrays.md",
    "code": []
},
"rle-iterator":{
    "id": "900",
    "name": "rle-iterator",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/900.rle-iterator.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/900.rle-iterator.md",
    "code": []
},
"snakes-and-ladders":{
    "id": "909",
    "name": "snakes-and-ladders",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/909.snakes-and-ladders.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/909.snakes-and-ladders.md",
    "code": []
},
"online-election":{
    "id": "911",
    "name": "online-election",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/911.online-election.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/911.online-election.md",
    "code": []
},
"sort-an-array":{
    "id": "912",
    "name": "sort-an-array",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/912.sort-an-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/912.sort-an-array.md",
    "code": []
},
"maximum-sum-circular-subarray":{
    "id": "918",
    "name": "maximum-sum-circular-subarray",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/918.maximum-sum-circular-subarray.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/918.maximum-sum-circular-subarray.md",
    "code": []
},
"beautiful-array":{
    "id": "932",
    "name": "beautiful-array",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/932.beautiful-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/932.beautiful-array.md",
    "code": []
},
"knight-dialer":{
    "id": "935",
    "name": "knight-dialer",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/935.knight-dialer.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/935.knight-dialer.md",
    "code": []
},
"most-stones-removed-with-same-row-or-column":{
    "id": "947",
    "name": "most-stones-removed-with-same-row-or-column",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/947.most-stones-removed-with-same-row-or-column.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/947.most-stones-removed-with-same-row-or-column.md",
    "code": []
},
"regions-cut-by-slashes":{
    "id": "959",
    "name": "regions-cut-by-slashes",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/959.regions-cut-by-slashes.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/959.regions-cut-by-slashes.md",
    "code": []
},
"odd-even-jump":{
    "id": "975",
    "name": "odd-even-jump",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/975.odd-even-jump.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/975.odd-even-jump.md",
    "code": []
},
"longest-turbulent-subarray":{
    "id": "978",
    "name": "longest-turbulent-subarray",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/978.longest-turbulent-subarray.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/978.longest-turbulent-subarray.md",
    "code": []
},
"vertical-order-traversal-of-a-binary-tree":{
    "id": "987",
    "name": "vertical-order-traversal-of-a-binary-tree",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/987.vertical-order-traversal-of-a-binary-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/987.vertical-order-traversal-of-a-binary-tree.md",
    "code": []
},
"minimum-number-of-k-consecutive-bit-flips":{
    "id": "995",
    "name": "minimum-number-of-k-consecutive-bit-flips",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/995.minimum-number-of-k-consecutive-bit-flips.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/995.minimum-number-of-k-consecutive-bit-flips.md",
    "code": []
},
"find-the-town-judge":{
    "id": "997",
    "name": "find-the-town-judge",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/997.find-the-town-judge.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/997.find-the-town-judge.md",
    "code": []
},
"max-consecutive-ones-iii":{
    "id": "1004",
    "name": "max-consecutive-ones-iii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1004.max-consecutive-ones-iii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1004.max-consecutive-ones-iii.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def longestOnes(self, A: List[int], K: int) -> int:\n        i = ans = 0\n\n        for j in range(len(A)):\n            K -= A[j] == 0\n            while K < 0:\n                K += A[i] == 0\n                i += 1\n            ans = max(ans, j - i + 1)\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def longestOnes(self, A: List[int], K: int) -> int:\n        i = 0\n\n        for j in range(len(A)):\n            K -= 1 - A[j]\n            if K < 0:\n                K += 1 - A[i]\n                i += 1\n        return j - i + 1\n"
        }
    ]
},
"capacity-to-ship-packages-within-d-days-cn":{
    "id": "1011",
    "name": "capacity-to-ship-packages-within-d-days-cn",
    "pre": [
        {
            "text": "二分法",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [
        {
            "text": "能够识别出是给定的有限序列查找一个数字（二分查找），要求你对二分查找以及变体十分熟悉",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1011.capacity-to-ship-packages-within-d-days-cn.md",
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
"capacity-to-ship-packages-within-d-days":{
    "id": "1011",
    "name": "capacity-to-ship-packages-within-d-days",
    "pre": [
        {
            "text": "二分法",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [
        {
            "text": "能力检测二分",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1011.capacity-to-ship-packages-within-d-days.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1011.capacity-to-ship-packages-within-d-days.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} weights\n * @param {number} D\n * @return {number}\n */\nvar shipWithinDays = function (weights, D) {\n  let high = weights.reduce((acc, cur) => acc + cur);\n  let low = 0;\n\n  while (low < high) {\n    let mid = Math.floor((high + low) / 2);\n    if (canShip(mid)) {\n      high = mid;\n    } else {\n      low = mid + 1;\n    }\n  }\n\n  return low;\n\n  function canShip(opacity) {\n    let remain = opacity;\n    let count = 1;\n    for (let weight of weights) {\n      if (weight > opacity) {\n        return false;\n      }\n      remain -= weight;\n      if (remain < 0) {\n        count++;\n        remain = opacity - weight;\n      }\n      if (count > D) {\n        return false;\n      }\n    }\n    return count <= D;\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\ndef canShip(opacity):\n    # 指定船的容量是否可以在D天运完\n    lo = 0\n    hi = total # total 其实就是 sum(weights)\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if canShip(mid):\n            hi = mid - 1\n        else:\n            lo = mid + 1\n\n    return lo\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def shipWithinDays(self, weights: List[int], D: int) -> int:\n        def possible(mid):\n            days = 1\n            cur = 0\n            for w in weights:\n                if w > mid:\n                    return False\n                if cur + w > mid:\n                    cur = 0\n                    days += 1\n                cur += w\n            return days <= D\n\n        l, r = 1, sum(weights)\n\n        while l <= r:\n            mid = (l + r) // 2\n            if possible(mid):\n                r = mid - 1\n            else:\n                l = mid + 1\n        return l\n\n"
        }
    ]
},
"best-sightseeing-pair":{
    "id": "1014",
    "name": "best-sightseeing-pair",
    "pre": [
        {
            "text": "动态规划",
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1014.best-sightseeing-pair.md",
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
    "pre": [
        {
            "text": "循环节",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "数学（无限循环与循环节）",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1015.smallest-integer-divisible-by-k.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1015.smallest-integer-divisible-by-k.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def smallestRepunitDivByK(self, K: int) -> int:\n        if K % 10 in [2, 4, 5, 6, 8]:\n            return - 1\n        seen = set()\n        mod = 0\n        for i in range(1, K + 1):\n            mod = (mod * 10 + 1) % K\n            if mod in seen:\n                return -1\n            if mod == 0:\n                return ix\n            seen.add(mod)\n"
        }
    ]
},
"next-greater-node-in-linked-list":{
    "id": "1019",
    "name": "next-greater-node-in-linked-list",
    "pre": [
        {
            "text": "链表",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "栈",
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
    "companies": [
        {
            "name": "腾讯"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1019.next-greater-node-in-linked-list.md",
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
"number-of-enclaves":{
    "id": "1020",
    "name": "number-of-enclaves",
    "pre": [
        {
            "text": "DFS",
            "link": null,
            "color": "red"
        },
        {
            "text": "hashset",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "visited记录访问过的节点，防止无限循环。",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1020.number-of-enclaves.md",
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
    "pre": [
        {
            "text": "双指针",
            "link": null,
            "color": "green"
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
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1023.camelcase-matching.md",
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
"maximum-sum-of-two-non-overlapping-subarrays":{
    "id": "1031",
    "name": "maximum-sum-of-two-non-overlapping-subarrays",
    "pre": [
        {
            "text": "数组",
            "link": null,
            "color": "purple"
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
    "companies": [
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1031.maximum-sum-of-two-non-overlapping-subarrays.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1031.maximum-sum-of-two-non-overlapping-subarrays.md",
    "code": [
        {
            "language": "cpp",
            "text": "\nclass Solution {\nprivate:\n    int get(vector<int> &v, int i) {\n        return (i >= 0 && i < v.size()) ? v[i] : 0;\n    }\npublic:\n    int maxSumTwoNoOverlap(vector<int>& A, int L, int M) {\n        int N = A.size(), ans = 0;\n        partial_sum(A.begin(), A.end(), A.begin());\n        vector<int> maxLeft(N, 0), maxRight(N, 0);\n        for (int i = L - 1; i < N; ++i) maxLeft[i] = max(get(maxLeft, i - 1), A[i] - get(A, i - L));\n        for (int i = N - L; i >= 0; --i) maxRight[i] = max(get(maxRight, i + 1), A[i + L - 1] - get(A, i - 1));\n        for (int i = M - 1; i < N; ++i) {\n            int sum = A[i] - get(A, i - M)\n                + max(get(maxLeft, i - M), get(maxRight, i + 1));\n            ans = max(ans, sum);\n        }\n        return ans;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumTwoNoOverlap(self, a: List[int], l: int, m: int) -> int:\n        \"\"\"\n\n        define asum[i] as the sum of subarray, a[0:i]\n        define maxl[i] as the maximum sum of l-length subarray in a[0:i]\n        define maxm[i] as the maximum sum of m-length subarray in a[0:i]\n        define msum[i] as the maximum sum of non-overlap l-length subarray and m-length subarray\n\n        case 1: a[i] is both not in l-length subarray and m-length subarray, then msum[i] = msum[i - 1]\n        case 2: a[i] is in l-length subarray, then msum[i] = asum[i] - asum[i-l] + maxm[i-l]\n        case 3: a[i] is in m-length subarray, then msum[i] = asum[i] - asum[i-m] + maxl[i-m]\n\n        so, msum[i] = max(msum[i - 1], asum[i] - asum[i-l] + maxl[i-l], asum[i] - asum[i-m] + maxm[i-m])\n        \"\"\"\n\n        alen, tlen = len(a), l + m\n        asum = [0] * (alen + 1)\n        maxl = [0] * (alen + 1)\n        maxm = [0] * (alen + 1)\n        msum = [0] * (alen + 1)\n\n        for i in range(tlen):\n            if i == 1:\n                asum[i] = a[i - 1]\n            elif i > 1:\n                asum[i] = asum[i - 1] + a[i - 1]\n            if i >= l:\n                maxl[i] = max(maxl[i - 1], asum[i] - asum[i - l])\n            if i >= m:\n                maxm[i] = max(maxm[i - 1], asum[i] - asum[i - m])\n\n        for i in range(tlen, alen + 1):\n            asum[i] = asum[i - 1] + a[i - 1]\n            suml = asum[i] - asum[i - l]\n            summ = asum[i] - asum[i - m]\n            maxl[i] = max(maxl[i - 1], suml)\n            maxm[i] = max(maxm[i - 1], summ)\n            msum[i] = max(msum[i - 1], suml + maxm[i - l], summ + maxl[i - m])\n\n        return msum[-1]\n"
        }
    ]
},
"stream-of-characters":{
    "id": "1032",
    "name": "stream-of-characters",
    "pre": [
        {
            "text": "前缀树",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/trie.md",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀树模板",
            "link": null,
            "color": "blue"
        },
        {
            "text": "倒序插入",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1032.stream-of-characters.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1032.stream-of-characters.md",
    "code": [
        {
            "language": "js",
            "text": "\nstreamChecker.query(\"a\"); // stream： a\nstreamChecker.query(\"b\"); // stream：ab\nstreamChecker.query(\"c\"); // stream：abc\n"
        },
        {
            "language": "js",
            "text": "\nstreamChecker.query(\"a\"); // stream： a\nstreamChecker.query(\"b\"); // stream：ab\nstreamChecker.query(\"c\"); // stream：abc\n"
        },
        {
            "language": "py",
            "text": "\nclass StreamChecker:\n\n    def __init__(self, words: List[str]):\n        self.trie = Trie()\n        self.stream = deque([])\n\n        for word in set(words):\n            self.trie.insert(word[::-1])\n\n    def query(self, letter: str) -> bool:\n        self.stream.appendleft(letter)\n        return self.trie.search(self.stream)\n"
        },
        {
            "language": "py",
            "text": "\nclass Trie:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.Trie = {}\n\n    def insert(self, word):\n        \"\"\"\n        Inserts a word into the trie.\n        :type word: str\n        :rtype: void\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                curr[w] = {}\n            curr = curr[w]\n        curr['#'] = 1\n\n    def search(self, word):\n        \"\"\"\n        Returns if the word is in the trie.\n        :type word: str\n        :rtype: bool\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                return False\n            if \"#\" in curr[w]:\n                return True\n            curr = curr[w]\n        return False\n\n\nclass StreamChecker:\n\n    def __init__(self, words: List[str]):\n        self.trie = Trie()\n        self.stream = deque([])\n\n        for word in set(words):\n            self.trie.insert(word[::-1])\n\n    def query(self, letter: str) -> bool:\n        self.stream.appendleft(letter)\n        return self.trie.search(self.stream)\n\n\n"
        }
    ]
},
"partition-array-for-maximum-sum":{
    "id": "1043",
    "name": "partition-array-for-maximum-sum",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        },
        {
            "text": "记忆化递归",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1043.partition-array-for-maximum-sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1043.partition-array-for-maximum-sum.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:\n        @lru_cache(None)\n        def dp(i):\n            if i >= len(arr): return 0\n            ans = 0\n            max_value = -1\n            for steps in range(1, k + 1):\n                if i + steps - 1 < len(arr): max_value = max(max_value, arr[i + steps - 1])\n                else: break\n                ans = max(ans, max_value * steps +  dp(i + steps))\n            return ans\n        return dp(0)\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maxSumAfterPartitioning(self, nums: List[int], k: int) -> int:\n        n = len(nums)\n        dp = [0] * (n+1)\n\n        for i in range(1, n+1):\n            max_ele = 0\n            for j in range(i, min(n+1, i+k)):\n                max_ele = max(max_ele, nums[j-1])\n                # range: [i,j]\n                dp[j] = max(dp[j], (j-i+1) * max_ele + dp[i-1])\n        return max(dp)\n\n"
        }
    ]
},
"previous-permutation-with-one-swap":{
    "id": "1053",
    "name": "previous-permutation-with-one-swap",
    "pre": [],
    "keyPoints": [
        {
            "text": "需要i尽可能地大（尽可能的把低位变大，而不是高位），nums[j]尽可能大",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1053.previous-permutation-with-one-swap.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1053.previous-permutation-with-one-swap.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def prevPermOpt1(self, arr: List[int]) -> List[int]:\n        l = -1\n        for i in range(len(arr)-1, -1, -1):\n            if arr[i-1] > arr[i]:\n                l = i - 1\n                break\n        if l == -1: return arr\n        ans = 0\n        r = -1\n        for i in range(l+1, len(arr)):\n            if arr[i] < arr[l] and arr[i] > ans:\n                ans = arr[i]\n                r = i\n        if r == -1:\n            return arr\n        arr[l], arr[r] = arr[r], arr[l]\n        return arr\n        \n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def prevPermOpt1(self, arr: List[int]) -> List[int]:\n        l = -1\n        for i in range(len(arr)-1, -1, -1):\n            if arr[i-1] > arr[i]:\n                l = i - 1\n                break\n        if l == -1: return arr\n        for i in range(len(arr)-1, l, -1):\n            if arr[i] < arr[l] and arr[i] != arr[i-1]:\n                r = i\n                break\n        if r == -1:\n            return arr\n        arr[l], arr[r] = arr[r], arr[l]\n        return arr\n        \n            \n\n"
        }
    ]
},
"path-in-zigzag-labelled-binary-tree":{
    "id": "1104",
    "name": "path-in-zigzag-labelled-binary-tree",
    "pre": [
        {
            "text": "二叉树",
            "link": null,
            "color": "geekblue"
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
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1104.path-in-zigzag-labelled-binary-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1104.path-in-zigzag-labelled-binary-tree.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def pathInZigZagTree(self, label: int) -> List[int]:\n        level = 0\n        res = []\n        while 2 ** level - 1 < label:\n            level += 1\n\n        while level > 0:\n            res.insert(0, label)\n            label = 2 ** (level - 1) + 2 ** level - 1 - label\n            label //= 2\n            level -= 1\n        return res\n"
        }
    ]
},
"number-of-equivalent-domino-pairs":{
    "id": "1128",
    "name": "number-of-equivalent-domino-pairs",
    "pre": [
        {
            "text": "组合计数",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1128.number-of-equivalent-domino-pairs.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1128.number-of-equivalent-domino-pairs.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:\n        n = len(dominoes)\n        cnt = 0\n        cntMapper = dict()\n\n        for a, b in dominoes:\n            k = str(a) + str(b) if a > b else str(b) + str(a)\n            cntMapper[k] = cntMapper.get(k, 0) + 1\n        for k in cntMapper:\n            v = cntMapper[k]\n            if v > 1:\n                cnt += (v * (v - 1)) // 2\n        return cnt\n\n"
        },
        {
            "language": "py",
            "text": "\n       counts = [0] * 1024\n        ans = 0\n        for a, b in dominoes:\n            if a >= b: v = a <<5 | b\n            else: v = b << 5 | a\n            ans += counts[v]\n            counts[v] += 1\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n\n\nclass Solution:\n    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:\n        counts = [0] * 9 * 9\n        ans = 0\n        for a, b in dominoes:\n            v = min((a - 1) * 9 + (b - 1), (b - 1) * 9 + (a - 1))\n            ans += counts[v]\n            counts[v] += 1\n        return ans\n"
        }
    ]
},
"shortest-path-with-alternating-colors":{
    "id": "1129",
    "name": "shortest-path-with-alternating-colors",
    "pre": [
        {
            "text": "BFS",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1129.shortest-path-with-alternating-colors.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1129.shortest-path-with-alternating-colors.md",
    "code": [
        {
            "language": "py",
            "text": "\n\n\nclass Solution:\n    def shortestAlternatingPaths(self, n: int, red_edges: List[List[int]], blue_edges: List[List[int]]) -> List[int]:\n        ans = [2 * n] * n\n        neibors_red = collections.defaultdict(list)\n        neibors_blue = collections.defaultdict(list)\n        # 1. 建立邻接矩阵\n        for fr, to in red_edges:\n            neibors_red[fr].append(to)\n        for fr, to in blue_edges:\n            neibors_blue[fr].append(to)‘\n        # 将颜色也存入到队中\n        q = collections.deque([(0, -1), (0, 1)])\n        steps = 0\n\n        while q:\n            for _ in range(len(q)):\n                cur, color = q.popleft()\n                ans[cur] = min(ans[cur], steps)\n                # color == 1 该取红边了，否则取蓝边\n                neibors = neibors_red if color == 1 else neibors_blue\n                for nxt in neibors[cur]:\n                    q.append((nxt, -1 * color))\n                # 此处的作用等同于 visited，即防止环的产产生。\n                neibors[cur] = []\n            steps += 1\n\n        return [-1 if a == 2 * n else a for a in ans]\n\n\n"
        }
    ]
},
"maximum-of-absolute-value-expression":{
    "id": "1131",
    "name": "maximum-of-absolute-value-expression",
    "pre": [
        {
            "text": "数组",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "数学分析",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "腾讯"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1131.maximum-of-absolute-value-expression.md",
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
"alphabet-board-path":{
    "id": "1138",
    "name": "alphabet-board-path",
    "pre": [
        {
            "text": "矩阵",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "理解题意",
            "link": null,
            "color": "blue"
        },
        {
            "text": "矩阵坐标映射",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1138.alphabet-board-path.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1138.alphabet-board-path.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def alphabetBoardPath(self, target: str) -> str:\n        board = []\n        for i in range(5):\n            for j in range(5):\n                board.append((i,j))\n        board.append((5,0))\n        last_x = last_y = 0\n        ans = ''\n        for c in target:\n            nxt_x, nxt_y = board[ord(c)-ord('a')]\n            up = max(0, last_x - nxt_x)\n            down = max(0, nxt_x - last_x)\n            left = max(0, last_y - nxt_y)\n            right = max(0, nxt_y - last_y)\n            ans += 'U'*up + 'L'*left + 'D'*down + 'R'*right + '!'\n            last_x, last_y = nxt_x, nxt_y\n        return ans\n\n\n\n"
        }
    ]
},
"optimize-water-distribution-in-a-village-cn":{
    "id": "1168",
    "name": "optimize-water-distribution-in-a-village-cn",
    "pre": [
        {
            "text": "图",
            "link": null,
            "color": "green"
        },
        {
            "text": "最小生成树",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.构建图，得出所有边2.对所有边排序3.遍历所有的边（从小到大）4.对于每条边，检查是否已经连通，若没有连通，加上边上的值，连通两个节点。若已连通，跳过。",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1168.optimize-water-distribution-in-a-village-cn.md",
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
"optimize-water-distribution-in-a-village":{
    "id": "1168",
    "name": "optimize-water-distribution-in-a-village",
    "pre": [
        {
            "text": "图",
            "link": null,
            "color": "green"
        },
        {
            "text": "最小生成树",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.构建图，得出所有边2.对所有边排序3.遍历所有的边（从小到大）4.对于每条边，检查是否已经连通，若没有连通，加上边上的值，连通两个节点。若已连通，跳过。",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1168.optimize-water-distribution-in-a-village.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1168.optimize-water-distribution-in-a-village.md",
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
"number-of-valid-words-for-each-puzzle":{
    "id": "1178",
    "name": "number-of-valid-words-for-each-puzzle",
    "pre": [
        {
            "text": "枚举子集",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "前缀树",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "枚举子集算法",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1178.number-of-valid-words-for-each-puzzle.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1178.number-of-valid-words-for-each-puzzle.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findNumOfValidWords(self, words: List[str], puzzles: List[str]) -> List[int]:\n        s_word = [set(word) for word in words]\n        ans = []\n        for puzzle in puzzles:\n            cnt = 0\n            for word in s_word:\n                if puzzle[0] not in word:\n                    continue\n                flag = False\n                for c in word:\n                    if c not in puzzle:\n                        flag = True\n                        break\n                if not flag:\n                    cnt += 1\n            ans.append(cnt)\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def findNumOfValidWords(self, words: List[str], puzzles: List[str]) -> List[int]:\n        counts = collections.defaultdict(int)\n        ans = [0] * len(puzzles)\n        for word in words:\n            bit = 0 # bit 是 word 的二进制表示\n            for c in word:\n                bit |= 1 << ord(c) - ord(\"a\")\n            counts[bit] += 1\n        for i, puzzle in enumerate(puzzles):\n            bit = 0 # bit 是 puzzle 的二进制表示\n            for c in puzzle:\n                bit |= 1 << ord(c) - ord(\"a\")\n            j = bit # j 是 bit 的子集\n            # 倒序枚举 bit 的子集 j\n            while j:\n                # 单词 word 需要包含谜面的第一个字母\n                if 1 << ord(puzzle[0]) - ord(\"a\") & j:\n                    ans[i] += counts[j]\n                j = bit & (j - 1)\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\n{\n    \"abc\": 3\n}\n"
        },
        {
            "language": "py",
            "text": "\ndef get_subset(puzzle, pos):\n  # ...\n  get_subset(next_with_puzzle_pos , pos + 1) # 选 pos\n  get_subset(next_without_puzzle_pos, pos + 1) # 不选 pos\n  # ...\n"
        },
        {
            "language": "py",
            "text": "\n\n class TrieNode:\n    def __init__(self):\n        self.count = 0\n        self.children = {}\n\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def insert(self, word):\n        cur = self.root\n        for c in word:\n            if c not in cur.children:\n                cur.children[c] = TrieNode()\n            cur = cur.children[c]\n        cur.count += 1\n\n\nclass Solution:\n    def findNumOfValidWords(self, words: List[str], puzzles: List[str]) -> List[int]:\n        trie = Trie()\n        for word in words:\n            trie.insert(sorted(set(word)))\n\n        def get_count(first_letter, cur, i, puzzle):\n            if i == len(puzzle):\n                return cur.count\n            if not cur:\n                return 0\n            ans = 0\n            # 这个判断成立的条件是 puzzle 中不存在重复的字符， 这恰好就是题目的限制条件\n            if puzzle[i] != first_letter:\n                ans += get_count(first_letter, cur, i + 1, puzzle)\n            if puzzle[i] in cur.children:\n                ans += get_count(first_letter, cur.children[puzzle[i]], i + 1, puzzle)\n            return ans\n\n"
        }
    ]
},
"maximum-subarray-sum-with-one-deletion":{
    "id": "1186",
    "name": "maximum-subarray-sum-with-one-deletion",
    "pre": [
        {
            "text": "数组",
            "link": null,
            "color": "purple"
        },
        {
            "text": "动态规划",
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
    "companies": [
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1186.maximum-subarray-sum-with-one-deletion.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1186.maximum-subarray-sum-with-one-deletion.md",
    "code": [
        {
            "language": "py",
            "text": "\n  class Solution:\n    def maximumSum(self, arr: List[int]) -> int:\n        res = arr[0]\n        def maxSubSum(arr, skip):\n            res = maxSub = float(\"-inf\")\n\n            for i in range(len(arr)):\n                if i == skip:\n                    continue\n                maxSub = max(arr[i], maxSub + arr[i])\n                res = max(res, maxSub)\n            return res\n\t\t# 这里循环到了len(arr)项，表示的是一个都不删除的情况\n        for i in range(len(arr) + 1):\n            res = max(res, maxSubSum(arr, i))\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maximumSum(self, arr: List[int]) -> int:\n        n = len(arr)\n        l = [arr[0]] * n\n        r = [arr[n - 1]] * n\n        if n == 1:\n            return arr[0]\n        res = arr[0]\n        for i in range(1, n):\n            l[i] = max(l[i - 1] + arr[i], arr[i])\n            res = max(res, l[i])\n        for i in range(n - 2, -1, -1):\n            r[i] = max(r[i + 1] + arr[i], arr[i])\n            res = max(res, r[i])\n        for i in range(1, n - 1):\n            res = max(res, l[i - 1] + r[i + 1])\n\n        return res\n\n"
        },
        {
            "language": "py",
            "text": "\n#\n# @lc app=leetcode.cn id=1186 lang=python3\n#\n# [1186] 删除一次得到子数组最大和\n#\n\n# @lc code=start\n\n\nclass Solution:\n    def maximumSum(self, arr: List[int]) -> int:\n        # DP\n        max0 = arr[0]\n        max1 = arr[0]\n        res = arr[0]\n        n = len(arr)\n        if n == 1:\n            return max0\n\n        for i in range(1, n):\n            # 先更新max1，再更新max0，因为max1用到了上一个max0\n            max1 = max(max1 + arr[i], max0)\n            max0 = max(max0 + arr[i], arr[i])\n            res = max(res, max0, max1)\n        return res\n"
        }
    ]
},
"sort-items-by-groups-respecting-dependencies":{
    "id": "1203",
    "name": "sort-items-by-groups-respecting-dependencies",
    "pre": [
        {
            "text": "图论 - 拓扑排序",
            "link": null,
            "color": "volcano"
        },
        {
            "text": "BFS & DFS",
            "link": null,
            "color": "orange"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1203.sort-items-by-groups-respecting-dependencies.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1203.sort-items-by-groups-respecting-dependencies.md",
    "code": [
        {
            "language": "py",
            "text": "\n    def tp_sort(self, items, indegree, neighbors):\n        q = collections.deque([])\n        ans = []\n        for item in items:\n            if not indegree[item]:\n                q.append(item)\n        while q:\n            cur = q.popleft()\n            ans.append(cur)\n\n            for neighbor in neighbors[cur]:\n                indegree[neighbor] -= 1\n                if not indegree[neighbor]:\n                    q.append(neighbor)\n\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def tp_sort(self, items: int, pres: List[List[int]]) -> List[int]:\n        res = []\n        visited = [0] * items\n        adjacent = [[] for _ in range(items)]\n\n        def dfs(i):\n            if visited[i] == 1:\n                return False\n            if visited[i] == 2:\n                return True\n            visited[i] = 1\n            for j in adjacent[i]:\n                if not dfs(j):\n                    return False\n\n            visited[i] = 2\n            res.append(i)\n            return True\n        for cur, pre in pres:\n            adjacent[cur].append(pre)\n        for i in range(items):\n            if not dfs(i):\n                return []\n        return res\n"
        },
        {
            "language": "py",
            "text": "\n\nfor pre in pres[project]:\n    if group[pre] != group[project]:\n        # 小组关系图\n        group_indegree[group[project]] += 1\n        group_neighbors[group[pre]].append(group[project])\n    else:\n        # 项目关系图\n        # ...\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def tp_sort(self, items, indegree, neighbors):\n        q = collections.deque([])\n        ans = []\n        for item in items:\n            if not indegree[item]:\n                q.append(item)\n        while q:\n            cur = q.popleft()\n            ans.append(cur)\n\n            for neighbor in neighbors[cur]:\n                indegree[neighbor] -= 1\n                if not indegree[neighbor]:\n                    q.append(neighbor)\n\n        return ans\n\n    def sortItems(self, n: int, m: int, group: List[int], pres: List[List[int]]) -> List[int]:\n        max_group_id = m\n        for project in range(n):\n            if group[project] == -1:\n                group[project] = max_group_id\n                max_group_id += 1\n\n        project_indegree = collections.defaultdict(int)\n        group_indegree = collections.defaultdict(int)\n        project_neighbors = collections.defaultdict(list)\n        group_neighbors = collections.defaultdict(list)\n        group_projects = collections.defaultdict(list)\n\n        for project in range(n):\n            group_projects[group[project]].append(project)\n\n            for pre in pres[project]:\n                if group[pre] != group[project]:\n                    # 小组关系图\n                    group_indegree[group[project]] += 1\n                    group_neighbors[group[pre]].append(group[project])\n                else:\n                    # 项目关系图\n                    project_indegree[project] += 1\n                    project_neighbors[pre].append(project)\n\n        ans = []\n\n        group_queue = self.tp_sort([i for i in range(max_group_id)], group_indegree, group_neighbors)\n\n        if len(group_queue) != max_group_id:\n            return []\n\n        for group_id in group_queue:\n\n            project_queue = self.tp_sort(group_projects[group_id], project_indegree, project_neighbors)\n\n            if len(project_queue) != len(group_projects[group_id]):\n                return []\n            ans += project_queue\n\n        return ans\n"
        }
    ]
},
"longest-arithmetic-subsequence-of-given-difference":{
    "id": "1218",
    "name": "longest-arithmetic-subsequence-of-given-difference",
    "pre": [
        {
            "text": "数组",
            "link": null,
            "color": "purple"
        },
        {
            "text": "动态规划",
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
    "companies": [
        {
            "name": "腾讯"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1218.longest-arithmetic-subsequence-of-given-difference.md",
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
"airplane-seat-assignment-probability":{
    "id": "1227",
    "name": "airplane-seat-assignment-probability",
    "pre": [
        {
            "text": "记忆化搜索",
            "link": null,
            "color": "lime"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1227.airplane-seat-assignment-probability.md",
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
"maximum-score-words-formed-by-letters":{
    "id": "1255",
    "name": "maximum-score-words-formed-by-letters",
    "pre": [
        {
            "text": "回溯",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯模板",
            "link": null,
            "color": "blue"
        },
        {
            "text": "计数",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1255.maximum-score-words-formed-by-letters.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1255.maximum-score-words-formed-by-letters.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxScoreWords(self, words, letters, score):\n        ans = 0\n\n        def dfs(start, 当前的分数, counter):\n            if start > len(words): return\n            ans = max(ans, cur)\n            for j in 循环start之后的单词:\n                if 如果当前单词加进去还满足游戏规则:\n                    dfs(j + 1, 新的分数, 新的counter)\n\n        dfs(0, 0, collections.Counter(letters))\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxScoreWords(self, words, letters, score):\n        self.ans = 0\n        words_score = [sum(score[ord(c)-ord('a')] for c in word) for word in words]\n        words_counter = [collections.Counter(word) for word in words]\n\n        def backtrack(start, cur, counter):\n            if start > len(words):\n                return\n            self.ans = max(self.ans, cur)\n            for j, w_counter in enumerate(words_counter[start:], start):\n                if all(n <= counter.get(c,0) for c,n in w_counter.items()):\n                    backtrack(j+1, cur+words_score[j], counter-w_counter)\n\n        backtrack(0, 0, collections.Counter(letters))\n        return self.ans\n"
        }
    ]
},
"shift-2d-grid":{
    "id": "1260",
    "name": "shift-2d-grid",
    "pre": [
        {
            "text": "数组",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "purple"
        },
        {
            "text": "数学",
            "link": null,
            "color": "geekblue"
        }
    ],
    "keyPoints": [],
    "companies": [
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1260.shift-2d-grid.md",
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
    "pre": [
        {
            "text": "二进制",
            "link": null,
            "color": "volcano"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1261.find-elements-in-a-contaminated-binary-tree.md",
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
    "pre": [
        {
            "text": "数组",
            "link": null,
            "color": "purple"
        },
        {
            "text": "回溯法",
            "link": null,
            "color": "gold"
        },
        {
            "text": "排序",
            "link": null,
            "color": "purple"
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
    "companies": [
        {
            "name": "字节跳动"
        },
        {
            "name": "网易有道"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1262.greatest-sum-divisible-by-three.md",
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
"maximum-number-of-occurrences-of-a-substring":{
    "id": "1297",
    "name": "maximum-number-of-occurrences-of-a-substring",
    "pre": [
        {
            "text": "字符串",
            "link": null,
            "color": "green"
        },
        {
            "text": "滑动窗口",
            "link": null,
            "color": "purple"
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
    "companies": [
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1297.maximum-number-of-occurrences-of-a-substring.md",
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
"xor-queries-of-a-subarray":{
    "id": "1310",
    "name": "xor-queries-of-a-subarray",
    "pre": [
        {
            "text": "前缀和",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/prefix.md",
            "color": "cyan"
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
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1310.xor-queries-of-a-subarray.md",
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
    "pre": [
        {
            "text": "回文",
            "link": null,
            "color": "lime"
        }
    ],
    "keyPoints": [
        {
            "text": "注意审题目，一定要利用题目条件“只含有a和b两个字符”否则容易做的很麻烦",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1332.remove-palindromic-subsequences.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1332.remove-palindromic-subsequences.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int removePalindromeSub(String s) {\n        if (\"\".equals(s)) {\n            return 0;\n        }\n        if (s.equals(new StringBuilder(s).reverse().toString())) {\n            return 1;\n        }\n        return 2;\n    }\n}\n"
        },
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
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        },
        {
            "text": "Floyd-Warshall",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1334.find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1334.find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:\n        # 构建dist矩阵\n        dist = [[float('inf')] * n for _ in  range(n)]\n        for i, j, w in edges:\n            dist[i][j] = w\n            dist[j][i] = w\n        for i in range(n):\n            dist[i][i] = 0\n        for k in range(n):\n            for i in range(n):\n                for j in range(n):\n                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])\n\n        # 过滤\n        res = 0\n        minCnt = float('inf')\n        for i in range(n):\n            cnt = 0\n            for d in dist[i]:\n                if d <= distanceThreshold:\n                    cnt += 1\n            if cnt <= minCnt:\n                minCnt = cnt\n                res = i\n        return res\n\n\n"
        }
    ]
},
"find-the-longest-substring-containing-vowels-in-even-counts":{
    "id": "1371",
    "name": "find-the-longest-substring-containing-vowels-in-even-counts",
    "pre": [
        {
            "text": "前缀和",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/prefix.md",
            "color": "cyan"
        },
        {
            "text": "状态压缩",
            "link": null,
            "color": "green"
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
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1371.find-the-longest-substring-containing-vowels-in-even-counts.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1371.find-the-longest-substring-containing-vowels-in-even-counts.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int findTheLongestSubstring(String s) {\n\n        int len = s.length();\n\n        if (len == 0)\n            return 0;\n\n        int[][] preSum = new int[len][5];\n        int start = getIndex(s.charAt(0));\n        if (start != -1)\n            preSum[0][start]++;\n\n        // preSum\n        for (int i = 1; i < len; i++) {\n\n            int idx = getIndex(s.charAt(i));\n\n            for (int j = 0; j < 5; j++) {\n\n                if (idx == j)\n                    preSum[i][j] = preSum[i - 1][j] + 1;\n                else\n                    preSum[i][j] = preSum[i - 1][j];\n            }\n        }\n\n        for (int i = len - 1; i >= 0; i--) {\n\n            for (int j = 0; j < len - i; j++) {\n                if (checkValid(preSum, s, j, i + j))\n                    return i + 1;\n            }\n        }\n        return 0;\n    }\n\n\n    public boolean checkValid(int[][] preSum, String s, int left, int right) {\n\n        int idx = getIndex(s.charAt(left));\n\n        for (int i = 0; i < 5; i++)\n            if (((preSum[right][i] - preSum[left][i] + (idx == i ? 1 : 0)) & 1) == 1)\n                return false;\n\n        return true;\n    }\n    public int getIndex(char ch) {\n\n        if (ch == 'a')\n            return 0;\n        else if (ch == 'e')\n            return 1;\n        else if (ch == 'i')\n            return 2;\n        else if (ch == 'o')\n            return 3;\n        else if (ch == 'u')\n            return 4;\n        else\n            return -1;\n    }\n}\n"
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
"design-a-stack-with-increment-operation":{
    "id": "1381",
    "name": "design-a-stack-with-increment-operation",
    "pre": [
        {
            "text": "栈",
            "link": null,
            "color": "red"
        },
        {
            "text": "前缀和",
            "link": null,
            "color": "cyan"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1381.design-a-stack-with-increment-operation.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1381.design-a-stack-with-increment-operation.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass CustomStack:\n\n    def __init__(self, size: int):\n        self.st = []\n        self.cnt = 0\n        self.size = size\n\n    def push(self, x: int) -> None:\n        if self.cnt < self.size:\n            self.st.append(x)\n            self.cnt += 1\n\n\n    def pop(self) -> int:\n        if self.cnt == 0: return -1\n        self.cnt -= 1\n        return self.st.pop()\n\n\n    def increment(self, k: int, val: int) -> None:\n        for i in range(0, min(self.cnt, k)):\n            self.st[i] += val\n\n"
        },
        {
            "language": "py",
            "text": "\nclass CustomStack:\n\n    def __init__(self, size: int):\n        self.st = []\n        self.cnt = 0\n        self.size = size\n        self.incrementals = [0] * size\n\n    def push(self, x: int) -> None:\n        if self.cnt < self.size:\n            self.st.append(x)\n            self.cnt += 1\n\n\n    def pop(self) -> int:\n        if self.cnt == 0: return -1\n        if self.cnt >= 2:\n            self.incrementals[self.cnt - 2] += self.incrementals[self.cnt - 1]\n        ans = self.st.pop() + self.incrementals[self.cnt - 1]\n        self.incrementals[self.cnt - 1] = 0\n        self.cnt -= 1\n        return ans\n\n\n    def increment(self, k: int, val: int) -> None:\n            if self.cnt:\n                self.incrementals[min(self.cnt, k) - 1] += val\n"
        },
        {
            "language": "py",
            "text": "\nclass CustomStack:\n\n    def __init__(self, size: int):\n        self.st = []\n        self.cnt = 0\n        self.size = size\n        self.incrementals = []\n\n    def push(self, x: int) -> None:\n        if self.cnt < self.size:\n            self.st.append(x)\n            self.incrementals.append(0)\n            self.cnt += 1\n\n\n    def pop(self) -> int:\n        if self.cnt == 0: return -1\n        self.cnt -= 1\n        if self.cnt >= 1:\n            self.incrementals[-2] += self.incrementals[-1]\n        return self.st.pop() + self.incrementals.pop()\n\n\n    def increment(self, k: int, val: int) -> None:\n        if self.incrementals:\n            self.incrementals[min(self.cnt, k) - 1] += val\n"
        }
    ]
},
"maximum-points-you-can-obtain-from-cards":{
    "id": "1423",
    "name": "maximum-points-you-can-obtain-from-cards",
    "pre": [
        {
            "text": "滑动窗口",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "思路逆转，取两边最大就是取中间最小",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1423.maximum-points-you-can-obtain-from-cards.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1423.maximum-points-you-can-obtain-from-cards.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxScore(self, A: List[int], k: int) -> int:\n        @lru_cache(None)\n        def dp(s, e, k):\n          if k == 0: return 0\n          return max(A[s] + dp(s + 1, e, k - 1), A[e] + dp(s, e - 1, k - 1))\n        return dp(0, len(A)-1, k)\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maxScore(self, A: List[int], k: int) -> int:\n        n = len(A)\n        ans = t = sum(A[: n - k])\n        for i in range(n - k, n):\n            t += A[i]\n            t -= A[i - (n - k)]\n            ans = min(ans, t)\n        return sum(A) - ans\n\n\n"
        }
    ]
},
"jump-game-iv":{
    "id": "1435",
    "name": "jump-game-iv",
    "pre": [
        {
            "text": "BFS",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1435.jump-game-iv.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1435.jump-game-iv.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minJumps(self, A: List[int]) -> int:\n        dic = collections.defaultdict(list)\n        n = len(A)\n\n        for i, a in enumerate(A):\n            dic[a].append(i)\n        visited = set([0])\n        q = collections.deque([0])\n        steps = 0\n\n        while q:\n            for _ in range(len(q)):\n                i = q.popleft()\n                visited.add(i)\n                if i == n - 1: return steps\n                for neibor in dic[A[i]] + [i - 1, i + 1]:\n                    if 0 <= neibor < n and neibor not in visited:\n                        q.append(neibor)\n                # 剪枝\n                dic[A[i]] = []\n            steps += 1\n        return -1\n"
        }
    ]
},
"longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit":{
    "id": "1438",
    "name": "longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit",
    "pre": [
        {
            "text": "有序集合",
            "link": null,
            "color": "red"
        },
        {
            "text": "二分法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "滑动窗口",
            "link": null,
            "color": "purple"
        },
        {
            "text": "单调栈",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "维护一个有序数组，并通过二分法找到插入位置",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1438.longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1438.longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def longestSubarray(self, A: List[int], limit: int) -> int:\n        d = []\n        ans = 1\n\n        for i, a in enumerate(A):\n            bisect.insort(d, a)\n            if len(d) > 1:\n                while d[-1] - d[0] > limit:\n                    d.remove(A[i - len(d)+1])\n                ans = max(ans, len(d))\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\n\nfrom sortedcontainers import SortedList\nclass Solution:\n    def longestSubarray(self, A: List[int], limit: int) -> int:\n        d = SortedList()\n        ans = 1\n\n        for i, a in enumerate(A):\n            d.add(a)\n            if len(d) > 1:\n                while d[-1] - d[0] > limit:\n                    d.remove(A[i - len(d)+1])\n                ans = max(ans, len(d))\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def longestSubarray(self, A: List[int], limit: int) -> int:\n        q1, q2 = collections.deque(), collections.deque()\n        ans = 1\n        i = 0\n        for j, a in enumerate(A):\n            while q1 and q1[-1] < a:\n                q1.pop()\n            q1.append(a)\n            while q2 and q2[-1] > a:\n                q2.pop()\n            q2.append(a)\n            while i < j and q1 and q2 and q1[0] - q2[0] > limit:\n                if A[i] == q1[0]: q1.popleft()\n                elif A[i] == q2[0]: q2.popleft()\n                i += 1\n            ans = max(ans, j - i + 1)\n        return ans\n\n"
        }
    ]
},
"form-largest-integer-with-digits-that-add-up-to-target":{
    "id": "1449",
    "name": "form-largest-integer-with-digits-that-add-up-to-target",
    "pre": [
        {
            "text": "数组",
            "link": null,
            "color": "purple"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        },
        {
            "text": "背包问题",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1449.form-largest-integer-with-digits-that-add-up-to-target.md",
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
"parallel-courses-ii":{
    "id": "1494",
    "name": "parallel-courses-ii",
    "pre": [
        {
            "text": "拓扑排序",
            "link": null,
            "color": "purple"
        },
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "枚举",
            "link": null,
            "color": "blue"
        },
        {
            "text": "位运算的枚举子集优化",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1494.parallel-courses-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1494.parallel-courses-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n// 外层枚举所有小于等于 x 的数\nans = [];\nfor (i = 1; i < 1 << n; i++) {\n  if ((x | i) === x) ans.push(i);\n}\n// ans 就是所有非空子集\n"
        },
        {
            "language": "js",
            "text": "\nans = [];\n// 外层枚举所有小于等于 x 的数\nfor (i = x; i != 0; i = (i - 1) & x) {\n  ans.push(i);\n}\n// ans 就是所有非空子集\n"
        },
        {
            "language": "py",
            "text": "\n# 含义为我们可以选择在这一学期学习 sub，或者选择在下一学期学习 sub\n# dp[studied | sub] 就是两种选择的较小值\ndp[studied | sub] = min(dp[studied | sub], dp[studied] + 1)\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def minNumberOfSemesters(self, n: int, dependencies: List[List[int]], k: int) -> int:\n        neighbors = collections.defaultdict(int)\n        dp = [n] * (1 << n)\n\n        for fr, to in dependencies:\n            neighbors[to - 1] |= 1 << (fr - 1)\n        dp[0] = 0  # 表示什么都不学的情况需要 0 学期\n        for i in range(1 << n):\n            can = 0\n            for j in range(n):\n                if (i & neighbors[j]) == neighbors[j]:\n                    can |= 1 << j\n            # 已经学过的不能学\n            can &= ~i\n            sub = can\n            while sub:\n                # 可以学习 sub\n                if bin(sub).count(\"1\") <= k:\n                    dp[i | sub] = min(dp[i | sub], dp[i] + 1)\n                sub = (sub - 1) & can # 快速跳到下一个子集（枚举子集优化）\n        return dp[(1 << n) - 1]\n\n\n"
        }
    ]
},
"find-a-value-of-a-mysterious-function-closest-to-target":{
    "id": "1521",
    "name": "find-a-value-of-a-mysterious-function-closest-to-target",
    "pre": [
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "识别出函数func满足某种单调性",
            "link": null,
            "color": "blue"
        },
        {
            "text": "采用合适的枚举方法",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1521.find-a-value-of-a-mysterious-function-closest-to-target.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1521.find-a-value-of-a-mysterious-function-closest-to-target.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def closestToTarget(self, A: List[int], target: int) -> int:\n        seen = set()\n        ans = float('inf')\n        for a in A:\n            seen.add(a)\n            t = set()\n            # 类似滚动数组 此时的 seen 相当于 sub[i-1]\n            for b in seen:\n                yu = a & b\n                ans = min(ans, abs(yu - target))\n                t.add(yu)\n            # 此时的 t 就是 sub[i]，我们需要更新回 seen\n            seen = t\n        return ans\n"
        }
    ]
},
"minimum-number-of-increments-on-subarrays-to-form-a-target-array":{
    "id": "1526",
    "name": "minimum-number-of-increments-on-subarrays-to-form-a-target-array",
    "pre": [],
    "keyPoints": [
        {
            "text": "逆向思考",
            "link": null,
            "color": "blue"
        },
        {
            "text": "考虑修改的左右端点",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1526.minimum-number-of-increments-on-subarrays-to-form-a-target-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1526.minimum-number-of-increments-on-subarrays-to-form-a-target-array.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minNumberOperations(self, nums: List[int]) -> int:\n        ans = abs(nums[0])\n        for i in range(1, len(nums)):\n            if abs(nums[i]) > abs(nums[i - 1]): # 这种情况，说明前面不能顺便把我改了，还需要我操作 k 次\n                ans += abs(nums[i]) - abs(nums[i - 1])\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, A, size, K):\n        N = len(A)\n\n        def possible(target):\n            # 差分数组 d\n            d = [0] * N\n            moves = a = 0\n            for i in range(N):\n                # a 相当于差分数组 d 的前缀和\n                a += d[i]\n                # 当前值和 target 的差距\n                delta = target - (A[i] + a)\n                # 大于 0 表示不到 target，我们必须需要进行 +1 操作\n                if delta > 0:\n                    moves += delta\n                    # 更新前缀和\n                    a += delta\n                    # 如果 i + size >= N 对应我上面提到的只修改左端点，不修改右端点的情况\n                    if i + size < N:\n                        d[i + size] -= delta\n            # 执行的+1操作小于等于K 说明可行\n            return moves <= K\n        # 定义解空间\n        lo, hi = min(A), max(A) + K\n        # 最右二分模板\n        while lo <= hi:\n            mi = (lo + hi) // 2\n            if possible(mi):\n                lo = mi + 1\n            else:\n                hi = mi - 1\n        return hi\n"
        }
    ]
},
"minimum-numbers-of-function-calls-to-make-target-array":{
    "id": "1558",
    "name": "minimum-numbers-of-function-calls-to-make-target-array",
    "pre": [
        {
            "text": "模拟",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "逆向思考",
            "link": null,
            "color": "blue"
        },
        {
            "text": "使用两个变量分别记录add和multi的次数",
            "link": null,
            "color": "blue"
        },
        {
            "text": "multi取决于整个数组最大的数，add取决于数组出现奇数的次数",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1558.minimum-numbers-of-function-calls-to-make-target-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1558.minimum-numbers-of-function-calls-to-make-target-array.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minOperations(self, nums: List[int]) -> int:\n        max_multi = add = 0\n\n        for num in nums:\n            # your code here\n        return max_multi + add\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minOperations(self, nums: List[int]) -> int:\n        max_multi = add = 0\n\n        for num in nums:\n            multi = 0\n            while num > 0:\n                if num & 1 == 1:\n                    add += 1\n                    num -= 1\n                if num >= 2:\n                    multi += 1\n                    num //= 2\n\n            max_multi = max(max_multi, multi)\n        return max_multi + add\n\n"
        }
    ]
},
"shortest-subarray-to-be-removed-to-make-array-sorted":{
    "id": "1574",
    "name": "shortest-subarray-to-be-removed-to-make-array-sorted",
    "pre": [
        {
            "text": "双指针",
            "link": null,
            "color": "green"
        },
        {
            "text": "滑动窗口",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md \"滑动窗口\"",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "画图",
            "link": null,
            "color": "blue"
        },
        {
            "text": "边界条件的考察（比如+1",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1等号）",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1574.shortest-subarray-to-be-removed-to-make-array-sorted.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1574.shortest-subarray-to-be-removed-to-make-array-sorted.md",
    "code": [
        {
            "language": "java",
            "text": "\nans = cnt = 1\nfor(int i = 1; i < A.length; i++ ) {\n    if (A[i] >= A[i - 1]) {\n        cnt++\n    }\n    else {\n        ans = max(ans, cnt)\n        cnt = 1\n    }\n}\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int findLengthOfShortestSubarray(vector<int>& A) {\n        int N = A.size(), left = 0, right = N - 1;\n        while (left + 1 < N && A[left] <= A[left + 1]) ++left;\n        if (left == A.size() - 1) return 0;\n        while (right > left && A[right - 1] <= A[right]) --right;\n        int ans = min(N - left - 1, right), i = 0, j = right;\n        while (i <= left && j < N) {\n            if (A[j] >= A[i]) {\n                ans = min(ans, j - i - 1);\n                ++i;\n            } else ++j;\n        }\n        return ans;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findLengthOfShortestSubarray(self, A: List[int]) -> int:\n        n = len(A)\n        l, r = 0, n - 1\n\n        while l < n - 1 and A[l] <= A[l + 1]:\n            l += 1\n        if l == n - 1:\n            return 0\n        while r > 0 and A[r] >= A[r - 1]:\n            r -= 1\n        ans = min(r, n - l - 1)\n        i = 0\n        while i <= l and r < n:\n            if A[i] <= A[r]:\n                # delete i + 1 ~ r - 1\n                ans = min(ans, r - i - 1)\n                i += 1\n            else:\n                # extend the sliding window\n                r += 1\n        return ans\n\n"
        }
    ]
},
"maximum-sum-obtained-of-any-permutation":{
    "id": "1589",
    "name": "maximum-sum-obtained-of-any-permutation",
    "pre": [
        {
            "text": "差分&前缀和",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "贪心",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "差分",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1589.maximum-sum-obtained-of-any-permutation.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1589.maximum-sum-obtained-of-any-permutation.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSumRangeQuery(self, nums: List[int], requests: List[List[int]]) -> int:\n        counter = collections.Counter()\n        n = len(nums)\n        for s, e in requests:\n            for i in range(s, e+1):\n                counter[i] += 1\n        ans = i = 0\n        nums.sort(reverse=True)\n        for v in sorted(counter.values(), reverse=True):\n            ans += v * nums[i]\n            ans %= 10 ** 9 + 7\n            i += 1\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maxSumRangeQuery(self, nums: List[int], requests: List[List[int]]) -> int:\n        counter = collections.Counter()\n        n = len(nums)\n        for s, e in requests:\n            counter[s] += 1\n            if e + 1 < n:\n                counter[e + 1] -= 1\n        for i in range(1, n):\n            counter[i] += counter[i - 1]\n        ans = i = 0\n        nums.sort(reverse=True)\n        for v in sorted(counter.values(), reverse=True):\n            ans += v * nums[i]\n            ans %= 10 ** 9 + 7\n            i += 1\n        return ans\n\n"
        }
    ]
},
"path-with-minimum-effort":{
    "id": "1631",
    "name": "path-with-minimum-effort",
    "pre": [
        {
            "text": "二维矩阵",
            "link": null,
            "color": "purple"
        },
        {
            "text": "深度优先遍历",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/DFS.md",
            "color": "geekblue"
        },
        {
            "text": "二分查找",
            "link": "https://github.com/azl397985856/leetcode/blob/master/91/binary-search.md",
            "color": "magenta"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1631.path-with-minimum-effort.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1631.path-with-minimum-effort.md",
    "code": [
        {
            "language": "py",
            "text": "\nreturn dfs(i + 1, j, heights[i][j], target) or dfs(i - 1, j, heights[i][j], target) or dfs(i, j + 1, heights[i][j], target) or dfs(i, j - 1, heights[i][j], target)\n"
        },
        {
            "language": "py",
            "text": "\ntop = dfs(i + 1, j, heights[i][j], target)\nbottom = dfs(i - 1, j, heights[i][j], target)\nright = dfs(i, j + 1, heights[i][j], target)\nleft = dfs(i, j - 1, heights[i][j], target)\nreturn top or bottom or right or left\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minimumEffortPath(self, heights: List[List[int]]) -> int:\n        lo, hi = 0, 10**6 - 1\n        m, n = len(heights), len(heights[0])\n        def dfs(i, j, pre, target):\n            if (i, j) in visited: return False\n            if i < 0 or i >= m or j < 0 or j >= n or abs(heights[i][j] - pre) > target: return False\n            if i == m - 1 and j == n - 1: return True\n            visited.add((i, j))\n            return dfs(i + 1, j, heights[i][j], target) or dfs(i - 1, j, heights[i][j], target) or dfs(i, j + 1, heights[i][j], target) or dfs(i, j - 1, heights[i][j], target)\n        # 查找最右侧满足条件的值\n        while lo <= hi:\n            visited = set()\n            mid = (lo + hi) >> 1\n            if dfs(0, 0, heights[0][0], mid): hi = mid - 1\n            else: lo = mid + 1\n        return lo\n\n"
        }
    ]
},
"count-substrings-that-differ-by-one-character":{
    "id": "1638",
    "name": "count-substrings-that-differ-by-one-character",
    "pre": [
        {
            "text": "枚举",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "递推",
            "link": null,
            "color": "volcano"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "枚举s和t的起点i和j，接下来枚举子串长度k",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1638.count-substrings-that-differ-by-one-character.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1638.count-substrings-that-differ-by-one-character.md",
    "code": [
        {
            "language": "py",
            "text": "\n\n# 方法 1\nclass Solution:\n    def countSubstrings(self, s: str, t: str) -> int:\n        m, n = len(s), len(t)\n        ans = 0\n        for i in range(m):\n            for j in range(n):\n                diff = 0\n                k = 0\n                while i + k < m and j + k < n:\n                    diff += int(s[i + k] != t[j + k])\n                    if diff > 1:\n                        break\n                    if diff == 1:\n                        ans += 1\n                    k += 1\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\n\n# 方法 2\nclass Solution:\n    def countSubstrings(self, s: str, t: str) -> int:\n        L = [[0] * (len(t)+1) for _ in range(len(s)+1)] # L[i][j] 表示 s[i] != s[j] 情况下可以向左扩展的最大长度\n        R = [[0] * (len(t)+1) for _ in range(len(s)+1)] # R[i][j] 表示 s[i] != s[j] 情况下可以向右扩展的最大长度\n        ans = 0\n        for i in range(1,len(s)+1):\n            for j in range(1,len(t)+1):\n                if s[i-1] != t[j-1]:\n                    L[i][j] = 0\n                else:\n                    L[i][j] = L[i-1][j-1] + 1\n        for i in range(len(s)-1,-1,-1):\n            for j in range(len(t)-1,-1,-1):\n                if s[i] != t[j]:\n                    R[i][j] = 0\n                else:\n                    R[i][j] = R[i+1][j+1] + 1\n        # 枚举不同的那个字符，这样就只需向左向右匹配即可\n        for i in range(len(s)):\n            for j in range(len(t)):\n                # L 前面有哨兵，因此 L[i][j] 相当于没有哨兵的 L[i-1][j-1]\n                if s[i] != t[j]: ans += (L[i][j] + 1) * (R[i+1][j+1] + 1)\n        return ans\n\n"
        }
    ]
},
"number-of-ways-to-form-a-target-string-given-a-dictionary":{
    "id": "1639",
    "name": "number-of-ways-to-form-a-target-string-given-a-dictionary",
    "pre": [
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "使用哈希表加速dp状态转移",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1639.number-of-ways-to-form-a-target-string-given-a-dictionary.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1639.number-of-ways-to-form-a-target-string-given-a-dictionary.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def numWays(self, words: List[str], target: str) -> int:\n        MOD = 10 ** 9 + 7\n        k = len(words[0])\n        cnt = [[0] * k for _ in range(26)]\n        for j in range(k):\n            for word in words:\n                cnt[ord(word[j]) - ord('a')][j] += 1\n        @cache\n        def dp(col, pos):\n            if len(target) - pos > len(words[0]) - col: return 0 # 剪枝\n            if pos == len(target): return 1\n            if col == len(words[0]): return 0\n            ans = dp(col+1, pos) # skip\n            for word in words: # pick one of the word[col]\n                if word[col] == target[pos]:\n                    ans += dp(col+1, pos+1)\n                    ans %= MOD\n            return ans % MOD\n        return dp(0, 0) % MOD\n"
        },
        {
            "language": "py",
            "text": "\nfor word in words: # pick one of the word[col]\n    if word[col] == target[pos]:\n        ans += dp(col+1, pos+1)\n        ans %= MOD\n"
        },
        {
            "language": "py",
            "text": "\ncnt = [[0] * k for _ in range(26)]\nfor j in range(k):\n    for word in words:\n        cnt[ord(word[j]) - ord('a')][j] += 1\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def numWays(self, words: List[str], target: str) -> int:\n        MOD = 10 ** 9 + 7\n        k = len(words[0])\n        cnt = [[0] * k for _ in range(26)]\n        for j in range(k):\n            for word in words:\n                cnt[ord(word[j]) - ord('a')][j] += 1\n        @cache\n        def dp(col, pos):\n            if len(target) - pos > len(words[0]) - col: return 0 # 剪枝\n            if pos == len(target): return 1\n            if col == len(words[0]): return 0\n            ans = dp(col+1, pos) # skip\n            ans += dp(col+1, pos+1) * cnt[ord(target[pos]) - ord('a')][col] # 根据上面的提示，我们可以这样优化\n            return ans % MOD\n        return dp(0, 0) % MOD\n\n"
        }
    ]
},
"create-sorted-array-through-instructions":{
    "id": "1649",
    "name": "create-sorted-array-through-instructions",
    "pre": [
        {
            "text": "二分法",
            "link": "../91/binary-search.md",
            "color": "blue"
        },
        {
            "text": "线段树",
            "link": "https://oi-wiki.org/ds/seg/",
            "color": "orange"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1649.create-sorted-array-through-instructions.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1649.create-sorted-array-through-instructions.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def createSortedArray(self, instructions: List[int]) -> int:\n        mod = 10 ** 9 + 7\n        nums = []\n        ans = 0\n        # eg: 1 2 2 3\n        for instruction in instructions:\n            l = bisect.bisect_left(nums, instruction)\n            r = bisect.bisect_right(nums, instruction)\n            nums[l:l] = [instruction]\n            ans = (ans + min(l, len(nums) - r - 1)) % mod\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nnums.insert(l, instruction)\n"
        },
        {
            "language": "py",
            "text": "\nnums[l:l] = [instruction]\n"
        },
        {
            "language": "py",
            "text": "\n    upper = max(instructions)\n    # 初始化线段树\n    seg = SegmentTree(upper, 1)\n    for instruction in instructions:\n        # 进行两次查询\n        l = seg.queryCount(1, instruction - 1)\n        r = seg.queryCount(instruction + 1, upper)\n        ans = (ans + min(l, r)) % mod\n        # 进行一次更新\n        seg.updateCount(instruction)\n    return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass SegmentTree:\n    def __init__(self, upper, lower):\n        \"\"\"\n        data:传入的数组\n        \"\"\"\n        self.lower = lower\n        self.upper = upper\n        #  申请4倍data长度的空间来存线段树节点\n        self.tree = [0] * (4 * (upper - lower + 1))  # 索引i的左孩子索引为2i+1，右孩子为2i+2\n\n    # 本质就是一个自底向上的更新过程\n    # 因此可以使用后序遍历，即在函数返回的时候更新父节点。\n    def update(self, tree_index, l, r, index):\n        \"\"\"\n        tree_index:某个根节点索引\n        l, r : 此根节点代表区间的左右边界\n        index : 更新的值的索引\n        \"\"\"\n        if l > index or r < index:\n            return\n        self.tree[tree_index] += 1\n        if l == r:\n            return\n        mid = (l + r) // 2\n        left, right = tree_index * 2 + 1, tree_index * 2 + 2\n        self.update(left, l, mid, index)\n        self.update(right, mid + 1, r, index)\n\n    def updateCount(self, index: int):\n        self.update(0, self.lower, self.upper, index)\n\n    def query(self, tree_index: int, l: int, r: int, ql: int, qr: int) -> int:\n        \"\"\"\n        递归查询区间[ql,..,qr]的值\n        tree_index : 某个根节点的索引\n        l, r : 该节点表示的区间的左右边界\n        ql, qr: 待查询区间的左右边界\n        \"\"\"\n        if qr < l or ql > r:\n            return 0\n        # l 和 r 在 [ql, qr] 内\n        if ql <= l and qr >= r:\n            return self.tree[tree_index]\n        mid = (l + r) // 2\n        left, right = tree_index * 2 + 1, tree_index * 2 + 2\n        return self.query(left, l, mid, ql, qr) + self.query(right, mid + 1, r, ql, qr)\n\n    def queryCount(self, ql: int, qr: int) -> int:\n        \"\"\"\n        返回区间[ql,..,qr]的计数信息\n        \"\"\"\n        return self.query(0, self.lower, self.upper, ql, qr)\n\n\nclass Solution:\n    def createSortedArray(self, instructions: List[int]) -> int:\n        mod = 10 ** 9 + 7\n        ans = 0\n        # eg: 1 2 2 3\n        upper = max(instructions)\n        seg = SegmentTree(upper, 1)\n        for instruction in instructions:\n            l = seg.queryCount(1, instruction - 1)\n            r = seg.queryCount(instruction + 1, upper)\n            ans = (ans + min(l, r)) % mod\n            seg.updateCount(instruction)\n        return ans\n"
        }
    ]
},
"minimum-operations-to-reduce-x-to-zero":{
    "id": "1658",
    "name": "minimum-operations-to-reduce-x-to-zero",
    "pre": [
        {
            "text": "堆",
            "link": null,
            "color": "green"
        },
        {
            "text": "滑动窗口",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md",
            "color": "purple"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1658.minimum-operations-to-reduce-x-to-zero.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1658.minimum-operations-to-reduce-x-to-zero.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minOperations(self, nums: List[int], x: int) -> int:\n        # 看数据范围，这种方法铁定超时（指数复杂度）\n        h = [(0, 0, len(nums) - 1, x)]\n        while h:\n            moves,l,r,remain = heapq.heappop(h)\n            if remain == 0: return moves\n            if l + 1 < len(nums): heapq.heappush(h, (moves + 1, l + 1,r, remain-nums[l]))\n            if r > 0: heapq.heappush(h, (moves + 1, l,r-1, remain-nums[r]))\n        return -1\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minOperations(self, nums: List[int], x: int) -> int:\n        n = len(nums)\n\n        @lru_cache(None)\n        def dp(l, r, x):\n            if x == 0:\n                return 0\n            if x < 0 or r < 0 or l > len(nums) - 1:\n                return n + 1\n            return 1 + min(dp(l + 1, r, x - nums[l]), dp(l, r - 1, x - nums[r]))\n\n        ans = dp(0, len(nums) - 1, x)\n        return -1 if ans > n else ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minOperations(self, nums: List[int], x: int) -> int:\n        # 逆向求解，滑动窗口\n        i = 0\n        target = sum(nums) - x\n        win = 0\n        ans = len(nums)\n        if target == 0: return ans\n        for j in range(len(nums)):\n            win += nums[j]\n            while i < j and win > target:\n                win -= nums[i]\n                i += 1\n            if win == target:\n                ans = min(ans, len(nums) - (j - i + 1))\n        return -1 if ans == len(nums) else ans\n\n"
        }
    ]
},
"minimum-number-of-removals-to-make-mountain-array":{
    "id": "1671",
    "name": "minimum-number-of-removals-to-make-mountain-array",
    "pre": [
        {
            "text": "最长上升子序列",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1671.minimum-number-of-removals-to-make-mountain-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1671.minimum-number-of-removals-to-make-mountain-array.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minimumMountainRemovals(self, nums: List[int]) -> int:\n        n = len(nums)\n        ans = n\n        def LIS(A):\n            d = []\n            for a in A:\n                i = bisect.bisect_left(d, a)\n                if i < len(d):\n                    d[i] = a\n                elif not d or d[-1] < a:\n                    d.append(a)\n            return d.index(A[-1])\n\n        for i in range(1, n-1):\n            l, r = LIS(nums[:i+1]), LIS(nums[i:][::-1])\n            if not l or not r: continue\n            ans = min(ans, n - 1 - l - r)\n        return ans\n"
        }
    ]
},
"checking-existence-of-edge-length-limited-paths":{
    "id": "1697",
    "name": "checking-existence-of-edge-length-limited-paths",
    "pre": [
        {
            "text": "排序",
            "link": null,
            "color": "purple"
        },
        {
            "text": "并查集",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/union-find.md",
            "color": "volcano"
        }
    ],
    "keyPoints": [
        {
            "text": "离线查询优化",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1697.checking-existence-of-edge-length-limited-paths.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1697.checking-existence-of-edge-length-limited-paths.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass UF:\n    parent = {}\n    size = {}\n    cnt = 0\n    def __init__(self, M):\n        # 初始化 parent，size 和 cnt\n        for i in range(M):\n            self.parent[i] = i\n            self.size[i] = 1\n\n    def find(self, x):\n        while x != self.parent[x]:\n            x = self.parent[x]\n            # 路径压缩\n            self.parent[x] = self.parent[self.parent[x]];\n        return x\n    def union(self, p, q):\n        if self.connected(p, q): return\n        # 小的树挂到大的树上， 使树尽量平衡\n        leader_p = self.find(p)\n        leader_q = self.find(q)\n        if self.size[leader_p] < self.size[leader_q]:\n            self.parent[leader_p] = leader_q\n            self.size[leader_p] += self.size[leader_q]\n        else:\n            self.parent[leader_q] = leader_p\n            self.size[leader_q] += self.size[leader_p]\n        self.cnt -= 1\n    def connected(self, p, q):\n        return self.find(p) == self.find(q)\nclass Solution:\n    def distanceLimitedPathsExist(self, n: int, edgeList: List[List[int]], queries: List[List[int]]) -> List[bool]:\n        m = len(queries)\n        edgeList.sort(key=lambda a:a[2])\n        queries = [(fr, to, w, i) for i, [fr, to, w] in enumerate(queries)]\n        queries.sort(key=lambda a:a[2])\n        ans = [False] * m\n        uf = UF(n)\n        j = 0\n        for fr, to, w, i in queries:\n            while j < len(edgeList) and edgeList[j][2] < w:\n                uf.union(edgeList[j][0], edgeList[j][1])\n                j += 1\n            if uf.connected(fr, to): ans[i] = True\n        return ans\n\n"
        }
    ]
},
"minimum-operations-to-make-a-subsequence":{
    "id": "1713",
    "name": "minimum-operations-to-make-a-subsequence",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        },
        {
            "text": "LIS",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "LIS",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1713.minimum-operations-to-make-a-subsequence.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1713.minimum-operations-to-make-a-subsequence.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minOperations(self, target: List[int], A: List[int]) -> int:\n        def LIS(A):\n            d = []\n            for a in A:\n                i = bisect.bisect_left(d, a)\n                if d and i < len(d):\n                    d[i] = a\n                else:\n                    d.append(a)\n            return len(d)\n        B = []\n        target = { t:i for i, t in enumerate(target)}\n        for a in A:\n            if a in target: B.append(target[a])\n        return len(target) - LIS(B)\n"
        }
    ]
},
"find-minimum-time-to-finish-all-jobs":{
    "id": "1723",
    "name": "find-minimum-time-to-finish-all-jobs",
    "pre": [
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "回溯",
            "link": null,
            "color": "green"
        },
        {
            "text": "剪枝",
            "link": null,
            "color": "gold"
        },
        {
            "text": "子集枚举",
            "link": null,
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "剪枝（否则会超时）",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1723.find-minimum-time-to-finish-all-jobs.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1723.find-minimum-time-to-finish-all-jobs.md",
    "code": [
        {
            "language": "cpp",
            "text": "\n\nclass Solution {\npublic:\n    int minimumTimeRequired(vector<int>& jobs, int k) {\n        int n = jobs.size();\n        vector<int> sum(1 << n);\n        for (int i = 0; i < (1 << n); i++) {\n            for(int j = 0; j < n; j++) {\n                if (i & (1 << j)) {\n                    sum[i] += jobs[j];\n                }\n            }\n        }\n\n        vector<vector<int>> dp(k, vector<int>(1 << n));\n        for (int i = 0; i < (1 << n); i++) {\n            dp[0][i] = sum[i];\n        }\n\n        for (int i = 1; i < k; i++) {\n           // 二进制子集枚举优化\n            for (int j = 0; j < (1 << n); j++) {\n                dp[i][j] = INT_MAX;\n                for (int x = j; x; x = (x - 1) & j) {\n                    dp[i][j] = min(dp[i][j], max(dp[i - 1][j - x], sum[x]));\n                }\n            }\n        }\n        return dp[k - 1][(1 << n) - 1];\n    }\n};\n\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minimumTimeRequired(self, jobs: List[int], k: int) -> int:\n        def backtrack(pos, workloads, limit):\n            if pos >= len(jobs): return True\n            for i in range(len(workloads)):\n                workload = workloads[i]\n                if jobs[pos] + workload <= limit:\n                    workloads[i] += jobs[pos]\n                    if backtrack(pos + 1, workloads, limit): return True\n                    workloads[i] -= jobs[pos]\n                # 剪枝\n                if workload == 0:\n                    return False\n            return False\n        def possible(limit):\n            return backtrack(0, [0] * k, limit)\n        # 剪枝\n        jobs.sort(reverse=True)\n        l, r = jobs[0], sum(jobs)\n        while l <= r:\n            mid = (l + r) // 2\n            if possible(mid):\n                r = mid - 1\n            else:\n                l = mid + 1\n        return l\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minimumTimeRequired(self, jobs: List[int], k: int) -> int:\n        n = len(jobs)\n        sum_jobs = [0] * (1 << n)\n        dp = [[float(\"inf\") for _ in range(1 << n)] for _ in range(k)]\n\n        for i in range(1 << n):\n            for j in range(n):\n                if i & 1 << j:\n                    sum_jobs[i] += jobs[j]\n\n        for i in range(1 << n):\n            dp[0][i] = sum_jobs[i]\n\n        for i in range(1, k):\n            #  二进制子集枚举优化\n            for j in range(1 << n):\n                sub = j\n                while sub != 0:\n                    dp[i][j] = min(dp[i][j], max(dp[i - 1][j - sub], sum_jobs[sub]))\n                    sub = j & (sub - 1)\n        return dp[-1][-1]\n\n"
        }
    ]
},
"change-minimum-characters-to-satisfy-one-of-three-conditions":{
    "id": "1737",
    "name": "change-minimum-characters-to-satisfy-one-of-three-conditions",
    "pre": [
        {
            "text": "计数",
            "link": null,
            "color": "orange"
        },
        {
            "text": "枚举",
            "link": null,
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "使用一个长度为26的数组计数不仅性能比哈希表好，并且在这里代码书写会更简单",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1737.change-minimum-characters-to-satisfy-one-of-three-conditions.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1737.change-minimum-characters-to-satisfy-one-of-three-conditions.md",
    "code": [
        {
            "language": "py",
            "text": "\n        # 枚举 A 的最大字母\n        for i in range(1, 26):\n            t = 0\n            # A 中大于等于 i 的所有字符都需要进行一次操作\n            for j in range(i, 26):\n                t += counter_A[j]\n            # B 中小于 i 的所有字符都需要进行一次操作\n            for j in range(i):\n                t += counter_B[j]\n            # 枚举的所有情况中取最小的\n            ans = min(ans, t)\n"
        },
        {
            "language": "py",
            "text": "\nfor i in range(26):\n     ans = min(ans, len(A) + len(B) - counter_A[i] - counter_B[i])\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minCharacters(self, A: str, B: str) -> int:\n        counter_A = [0] * 26\n        counter_B = [0] * 26\n        for a in A:\n            counter_A[ord(a) - ord('a')] += 1\n        for b in B:\n            counter_B[ord(b) - ord('a')] += 1\n        ans = len(A) + len(B)\n        for i in range(26):\n            ans = min(ans, len(A) + len(B) - counter_A[i] - counter_B[i])\n        for i in range(1, 26):\n            t = 0\n            for j in range(i, 26):\n                t += counter_A[j]\n            for j in range(i):\n                t += counter_B[j]\n            ans = min(ans, t)\n        for i in range(1, 26):\n            t = 0\n            for j in range(i, 26):\n                t += counter_B[j]\n            for j in range(i):\n                t += counter_A[j]\n            ans = min(ans, t)\n        return ans\n\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minCharacters(self, A: str, B: str) -> int:\n        ca = collections.Counter(A)\n        cb = collections.Counter(B)\n        # ca 中严格大于 cb 的最小操作数\n        def greater_cost(ca, cb):\n            ans = float(\"inf\")\n            # 枚举 ca 中的最小值\n            for i in range(1, 26):\n                count = 0\n                # 将 ca 中小于最小值的都进行一次操作\n                for j in range(i):\n                    count += ca[chr(97 + j)]\n                # 将 cb 中大于等于最小值的都进行一次操作（注意这里的等号）\n                for j in range(i, 26):\n                    count += cb[chr(97 + j)]\n                ans = min(ans, count)\n            return ans\n\n        def equal_cost(ca, cb):\n            ans = float(\"inf\")\n            for i in range(26):\n                ans = min(ans, len(A) + len(B) - ca[chr(97 + i)] - cb[chr(97 + i)])\n            return ans\n\n        return min(greater_cost(ca, cb), greater_cost(cb, ca), equal_cost(ca, cb))\n\n"
        }
    ]
},
"maximum-score-from-performing-multiplication-operations":{
    "id": "1770",
    "name": "maximum-score-from-performing-multiplication-operations",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        },
        {
            "text": "区间动态规划",
            "link": null,
            "color": "geekblue"
        }
    ],
    "keyPoints": [
        {
            "text": "维度选择",
            "link": null,
            "color": "blue"
        },
        {
            "text": "降维",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1770.maximum-score-from-performing-multiplication-operations.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1770.maximum-score-from-performing-multiplication-operations.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maximumScore(self, nums: List[int], multipliers: List[int]) -> int:\n        @cache\n        def dp(i, j, steps):\n            if steps == len(multipliers): return 0\n            return max(dp(i + 1, j, steps + 1) + multipliers[steps] * nums[i], dp(i, j - 1, steps + 1) + multipliers[steps] * nums[j])\n        return dp(0, len(nums) - 1, 0)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maximumScore(self, nums: List[int], multipliers: List[int]) -> int:\n        @cache\n        def dp(i, j):\n            steps = len(nums) - (j - i + 1)\n            if steps == len(multipliers): return 0\n            return max(dp(i + 1, j) + multipliers[steps] * nums[i], dp(i, j - 1,) + multipliers[steps] * nums[j])\n        return dp(0, len(nums) - 1)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maximumScore(self, nums: List[int], multipliers: List[int]) -> int:\n        @cache\n        def dp(i, j):\n            steps = len(nums) - (j - i + 1)\n            if steps == len(multipliers): return 0\n            return max(dp(i + 1, j) + multipliers[steps] * nums[i], dp(i, j - 1,) + multipliers[steps] * nums[j])\n        ans = dp(0, len(nums) - 1)\n        dp.cache_clear()\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maximumScore(self, nums: List[int], multipliers: List[int]) -> int:\n        n,m=len(nums),len(multipliers)\n        dp=[[float('-inf')]*(m+1) for _ in range(m+1)]\n        dp[0][0]=0\n        ans=float('-inf')\n        for i in range(1,m+1): # 枚举长度\n            for l in range(i+1): # 枚举左侧取了 l 个\n                r = i - l # 右侧取的就是总数 -  左边取的\n                dp[l][r]=max(dp[l][r],dp[l-1][r]+nums[l-1]*multipliers[i-1], dp[l][r-1]+nums[-r]*multipliers[i-1])\n                if i == m: ans=max(ans,dp[l][r])\n        return ans\n\n\n"
        }
    ]
},
"make-the-xor-of-all-segments-equal-to-zero":{
    "id": "1787",
    "name": "make-the-xor-of-all-segments-equal-to-zero",
    "pre": [
        {
            "text": "异或",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "异或的自反性",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对值域（upper）做dp，而不是数组索引。",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1787.make-the-xor-of-all-segments-equal-to-zero.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1787.make-the-xor-of-all-segments-equal-to-zero.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minChanges(self, nums: List[int], k: int) -> int:\n        counter = collections.defaultdict(int)\n        UPPER = 2 ** 10\n        n = len(nums)\n        for i, num in enumerate(nums):\n            counter[(i % k, num)] += 1\n        dp = [[n] * UPPER for _ in range(k)]\n\n        for i in range(k):\n            size_i = n // k + int(n % k > i)\n            for j in range(UPPER):\n                for p in range(UPPER):\n                    if i == 0:\n                        dp[i][j] = size_i - counter[(i, j)]\n                    else:\n                        dp[i][j] = min(\n                            dp[i][j],\n                            dp[i - 1][p] + size_i - counter[(i, p ^ j)],\n                        )\n        return dp[-1][0]\n\n"
        },
        {
            "language": "py",
            "text": "\n        counter = collections.defaultdict(int)\n        UPPER = 2 ** 10\n        n = len(nums)\n        for i, num in enumerate(nums):\n            counter[(i % k, num)] += 1\n        dp = [n] * UPPER\n\n        for i in range(k):\n            size_i = n // k + int(n % k > i)\n            nxt_dp = [n] * UPPER\n            for j in range(UPPER):\n                for p in range(UPPER):\n                    if i == 0:\n                        nxt_dp[j] = size_i - counter[(i, j)]\n                    else:\n                        nxt_dp[j] = min(\n                            nxt_dp[j],\n                            dp[p] + size_i - counter[(i, p ^ j)],\n                        )\n            dp = nxt_dp\n        return dp[0]\n"
        },
        {
            "language": "py",
            "text": "\nfor val, count in counter[i].items():  # 改成这一列已有的数\n    nxt_dp[j ^ val] = min(nxt_dp[j ^ val], dp[j] + size_i - count)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minChanges(self, nums: List[int], k: int) -> int:\n        counter = collections.defaultdict(lambda: collections.defaultdict(int))\n        UPPER = 2 ** 10\n        n = len(nums)\n        for i, num in enumerate(nums):\n            counter[i % k][num] += 1\n        dp = [n] * UPPER\n        dp[0] = 0\n\n        for i in range(k):\n            size_i = n // k + int(n % k > i)\n            nxt_dp = [min(dp) + size_i] * UPPER  # 改成新的数\n            for j in range(UPPER):\n                for val, count in counter[i].items():  # 改成这一列已有的数\n                    nxt_dp[j ^ val] = min(nxt_dp[j ^ val], dp[j] + size_i - count)\n            dp = nxt_dp\n        return dp[0]\n\n\n"
        }
    ]
},
"maximum-score-of-a-good-subarray":{
    "id": "1793",
    "name": "maximum-score-of-a-good-subarray",
    "pre": [
        {
            "text": "单调栈",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "贡献法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "单调栈",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1793.maximum-score-of-a-good-subarray.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1793.maximum-score-of-a-good-subarray.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maximumScore(self, nums: List[int], k: int) -> int:\n        # 单调栈求出 nums[i] 的下一个更小的下标 j\n        st = []\n        ans = 0\n        nums += [0]\n        for i in range(len(nums)):\n            while st and nums[st[-1]] > nums[i]:\n                # 含义：st[-1] 的下一个更小的是 i\n                left = st[-2] if len(st) > 1 else -1 # 注意这里是 -2，因为 st[-1] 是当前元素， 我们要在当前元素的左边记录找。也可以先 st.pop() 后在 st[-1]\n                if left < k < i: # 注意由于 left 和 i 我们都无法取到（开区间），因此这里不能有等号\n                    ans = max(ans, (i - left - 1) * nums[st[-1]])\n                st.pop()\n            st.append(i)\n        return ans\n"
        }
    ]
},
"single-threaded-cpu":{
    "id": "1834",
    "name": "single-threaded-cpu",
    "pre": [
        {
            "text": "模拟",
            "link": null,
            "color": "purple"
        },
        {
            "text": "堆",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "堆",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1834.single-threaded-cpu.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1834.single-threaded-cpu.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def getOrder(self, tasks: List[List[int]]) -> List[int]:\n        tasks = [(task[0], i, task[1]) for i, task in enumerate(tasks)]\n        tasks.sort()\n        backlog = []\n        time = 0\n        ans = []\n        pos = 0\n        for _ in tasks:\n            if not backlog:\n                time = max(time, tasks[pos][0])\n            while pos < len(tasks) and tasks[pos][0] <= time:\n                heapq.heappush(backlog, (tasks[pos][2], tasks[pos][1]))\n                pos += 1\n            d, j = heapq.heappop(backlog)\n            time += d\n            ans.append(j)\n        return ans\n\n"
        }
    ]
},
"find-xor-sum-of-all-pairs-bitwise-and":{
    "id": "1835",
    "name": "find-xor-sum-of-all-pairs-bitwise-and",
    "pre": [
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [
        {
            "text": "从位的角度思考问题",
            "link": null,
            "color": "blue"
        },
        {
            "text": "位运算（这里是AND和XOR）的基本特性",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1835.find-xor-sum-of-all-pairs-bitwise-and.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1835.find-xor-sum-of-all-pairs-bitwise-and.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def getXORSum(self, A: List[int], B: List[int]) -> int:\n        ans = 0\n        for i in range(31):\n            ones_a = ones_b = 0\n            for a in A:\n                if a & (1 << i):\n                    ones_a += 1\n            for b in B:\n                if b & (1 << i):\n                    ones_b += 1\n            if ones_a * ones_b & 1:\n                ans |= 1 << i\n        return ans\n\n"
        }
    ]
},
"jump-game-vii":{
    "id": "1871",
    "name": "jump-game-vii",
    "pre": [
        {
            "text": "BFS",
            "link": null,
            "color": "purple"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        },
        {
            "text": "前缀和",
            "link": null,
            "color": "cyan"
        }
    ],
    "keyPoints": [
        {
            "text": "将题目抽象为图的联通问题",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1871.jump-game-vii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1871.jump-game-vii.md",
    "code": [
        {
            "language": "js",
            "text": "\nbools = [false, true, false, false, true];\nbools[2] || bools[3];\n"
        },
        {
            "language": "js",
            "text": "\nbools = [false, true, false, false, true]\nfor(let i = s; i < min(e,len(bools)); i++) {\n    if bools[i]: return true\n}\nreturn false\n\n"
        },
        {
            "language": "js",
            "text": "\nbools = [false, true, false, false, true];\n// bools 映射为 [0,1,0,0,1]\n// pres 为 [0,1,1,1,2]\nreturn pres[e] - s == 0 ? 0 : pres[s - 1];\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:\n        if s[-1] == '1': return False\n        zeroes = set([i for i in range(len(s)) if s[i] == '0'])\n        q = set([0])\n        while q:\n            cur = q.pop()\n            if cur == len(s) - 1: return True\n            for nxt in range(cur + minJump, min(cur + maxJump, len(s)) + 1):\n                if nxt in zeroes and nxt not in q:\n                    q.add(nxt)\n        return False\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:\n        def dp(pos):\n            if pos == len(s) - 1: return True\n            return s[pos] == '0' and any([dp(i) for i in range(pos + minJump, min(len(s), pos + maxJump + 1))])\n        if s[-1] == '1': return False\n        return dp(0)\n"
        },
        {
            "language": "py",
            "text": "\n\n\nclass Solution:\n    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:\n        n = len(s)\n        pres = [0] * n\n        dp = [0] * n\n        dp[0] = pres[0] = 1\n        for i in range(1, n):\n            l = i - maxJump - 1\n            r = i - minJump\n            dp[i] = s[i] == '0' and (0 if r < 0 else pres[r]) - (0 if l < 0 else pres[l]) > 0\n            pres[i] = pres[i-1] + dp[i]\n        return dp[-1]\n\n"
        },
        {
            "language": "py",
            "text": "\n\nfrom sortedcontainers import SortedList\nclass Solution:\n    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:\n        if s[-1] == '1': return False\n        zeroes = SortedList([i for i in range(len(s)) if s[i] == '0'])\n\n        dp = [False] * len(s)\n        dp[0] = True\n\n        for i in range(len(s)):\n            if dp[i]:\n                l = zeroes.bisect_left(i + minJump)\n                r = zeroes.bisect_right(i + maxJump)\n                for v in [zeroes[i] for i in range(l, r)]:\n                    dp[v] = True\n                    zeroes.remove(v)\n        return dp[-1]\n\n"
        }
    ]
},
"stone-game-viii":{
    "id": "1872",
    "name": "stone-game-viii",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        },
        {
            "text": "前缀和",
            "link": null,
            "color": "cyan"
        }
    ],
    "keyPoints": [
        {
            "text": "前缀和",
            "link": null,
            "color": "blue"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1872.stone-game-viii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1872.stone-game-viii.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nfrom itertools import accumulate\n\nclass Solution:\n    def stoneGameVIII(self, stones: List[int]) -> int:\n        pres = list(accumulate(stones))\n\n        @cache\n        def dp(pos):\n            if pos == len(stones):\n                return 0\n            ans = float(\"-inf\")\n            for nxt in range(pos, len(stones)):\n                ans = max(ans, pres[nxt] - dp(nxt + 1))\n            return ans\n\n        return dp(1)\n\n"
        },
        {
            "language": "py",
            "text": "\nfrom itertools import accumulate\n\n\nclass Solution:\n    def stoneGameVIII(self, stones: List[int]) -> int:\n        pres = list(accumulate(stones))\n        n = len(stones)\n\n        @cache\n        def dp(pos):\n            if pos == n - 1:\n                return pres[n - 1]\n            return max(dp(pos + 1), pres[pos] - dp(pos + 1))\n\n        return dp(1)\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def stoneGameVIII(self, stones: List[int]) -> int:\n        pres = list(accumulate(stones))\n        n = len(stones)\n        dp = [0] * n\n        dp[n - 1] = pres[n - 1]\n        for i in range(n - 2, 0, -1):\n            dp[i] = max(dp[i + 1], pres[i] - dp[i + 1])\n        return dp[1]\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def stoneGameVIII(self, stones: List[int]) -> int:\n        pres = list(accumulate(stones))\n        n = len(stones)\n        ans = pres[n - 1]\n        for i in range(n - 2, 0, -1):\n            ans = max(ans, pres[i] - ans)\n        return ans\n"
        }
    ]
},
"merge-triplets-to-form-target-triplet":{
    "id": "1899",
    "name": "merge-triplets-to-form-target-triplet",
    "pre": [
        {
            "text": "贪心",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "max操作的**单调递增性**",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1899.merge-triplets-to-form-target-triplet.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1899.merge-triplets-to-form-target-triplet.md",
    "code": [
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    bool mergeTriplets(vector<vector<int>>& triplets, vector<int>& target) {\n        bool sx = false, sy = false, sz = false;\n        for (int i = 0; i < triplets.size() && (!sx || !sy || !sz); i++) {\n            auto &t = triplets[i];\n            if (t[0] == target[0] && t[1] <= target[1] && t[2] <= target[2]) {\n                sx = true;\n            }\n            if (t[1] == target[1] && t[0] <= target[0] && t[2] <= target[2]) {\n                sy = true;\n            }\n            if (t[2] == target[2] && t[0] <= target[0] && t[1] <= target[1]) {\n                sz = true;\n            }\n        }\n        return sx && sy && sz;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:\n        tx, ty, tz = target\n        cx = cy = cz = 0\n        for a, b, c in triplets:\n            if a <= tx and b <= ty and c <= tz:\n                cx, cy, cz = max(cx, a), max(cy, b), max(cz, c)\n        return (cx, cy, cz) == (tx, ty, tz)\n\n"
        }
    ]
},
"the-number-of-full-rounds-you-have-played":{
    "id": "1904",
    "name": "the-number-of-full-rounds-you-have-played",
    "pre": [
        {
            "text": "暂无",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "将开始时间和结束时间**规范到**标准时间",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1904.the-number-of-full-rounds-you-have-played.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1904.the-number-of-full-rounds-you-have-played.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def numberOfRounds(self, startTime: str, finishTime: str) -> int:\n        sh, sm = map(int, startTime.split(\":\"))\n        eh, em = map(int, finishTime.split(\":\"))\n        if 0 < sm < 15:\n            sm = 15\n        elif 15 < sm < 30:\n            sm = 30\n        elif 30 < sm < 45:\n            sm = 45\n        elif 45 < sm < 60:\n            sm = 0\n            sh += 1\n        if 0 < em < 15:\n            em = 0\n        elif 15 < em < 30:\n            em = 15\n        elif 30 < em < 45:\n            em = 30\n        elif 45 < em < 60:\n            em = 45\n        st = sh * 60 + sm\n        et = eh * 60 + em\n        if st > et:\n            et += 24 * 60\n        return (et - st) // 15\n\n"
        }
    ]
},
"minimum-absolute-difference-queries":{
    "id": "1906",
    "name": "minimum-absolute-difference-queries",
    "pre": [
        {
            "text": "前缀和",
            "link": null,
            "color": "cyan"
        },
        {
            "text": "离散化",
            "link": null,
            "color": "volcano"
        }
    ],
    "keyPoints": [
        {
            "text": "同时对索引和值建立前缀和，即建立二维前缀和",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1906.minimum-absolute-difference-queries.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1906.minimum-absolute-difference-queries.md",
    "code": [
        {
            "language": "py",
            "text": "\nfor i in range(1, 101):\n    v = pres[qr+1][i] - pres[ql][i]\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def minDifference(self, nums: List[int], queries: List[List[int]]) -> List[int]:\n        ans = []\n        n = len(nums)\n        pres = [[0] * 101]\n        for i, num in enumerate(nums):\n            pres.append(pres[-1].copy())\n            pres[-1][num] += 1\n\n        for ql, qr in queries:\n            pre = -100\n            cur = 100\n            for i in range(1, 101):\n                if pres[qr+1][i] - pres[ql][i] > 0:\n                    cur = min(cur, i - pre)\n                    pre = i\n            if cur >= 100: ans.append(-1)\n            else: ans.append(cur)\n        return ans\n\n"
        }
    ]
},
"last-day-where-you-can-still-cross":{
    "id": "1970",
    "name": "last-day-where-you-can-still-cross",
    "pre": [
        {
            "text": "多源 BFS",
            "link": null,
            "color": "green"
        },
        {
            "text": "二分",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/1970.last-day-where-you-can-still-cross.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/1970.last-day-where-you-can-still-cross.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def latestDayToCross(self, row: int, col: int, cells: List[List[int]]) -> int:\n        def can(d):\n            visited = set()\n            q = collections.deque([(0,j) for j in range(col)])\n            for x, y in cells[:d]:\n                visited.add((x-1, y-1))\n            while q:\n                x,y = q.popleft()\n                if (x,y) in visited: continue\n                visited.add((x,y))\n                if x == row - 1: return True\n                for dx, dy in [(1,0), (-1,0), (0,1), (0,-1)]:\n                    if 0 <= x + dx < row and 0 <= y + dy < col: q.append((x+dx, y+dy))\n            return False\n\n        l, r = 0, row * col\n        while l <=r :\n            mid = (l+r)//2\n            if can(mid):\n                l = mid + 1\n            else:\n                r = mid - 1\n        return r\n\n\n"
        }
    ]
},
"find-original-array-from-doubled-array":{
    "id": "2007",
    "name": "find-original-array-from-doubled-array",
    "pre": [
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "对changed进行排序后再处理",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2007.find-original-array-from-doubled-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2007.find-original-array-from-doubled-array.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def findOriginalArray(self, changed: List[int]) -> List[int]:\n        counter = collections.Counter(changed)\n        if counter[0] % 2: return []\n        n = len(changed)\n        changed.sort()\n        ans = []\n        for c in changed:\n            if counter[c] < 1: continue\n            double = c * 2\n            if double in counter:\n                ans.append(c)\n            else:\n                return []\n            if double == 0:\n                counter[double] -= 2\n            else:\n                counter[double] -= 1\n                counter[c] -= 1\n        if len(ans) == n // 2: return ans\n        return []\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def recoverArray(self, nums: List[int]) -> List[int]:\n        n = len(nums)\n        nums.sort()\n        for i in range(n):\n            # enumerate i, assueme that: nums[i] is higher[0]\n            d = nums[i] - nums[0]\n            if d == 0 or d & 1: continue # k 应该是大于 0 的整数\n            k = d // 2\n            counter = collections.Counter(nums)\n            ans = []\n            for key in sorted(counter):\n                if counter[key + 2 * k] >= counter[key]:\n                    ans += [key + k] * counter[key]\n                    counter[key + 2 * k] -= counter[key]\n                else:\n                    break # 剪枝（不剪枝的话实测 Python 也能通过，不过要多花很多时间）\n            if len(ans) == n // 2: return ans\n        return []\n"
        }
    ]
},
"maximum-earnings-from-taxi":{
    "id": "2008",
    "name": "maximum-earnings-from-taxi",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        },
        {
            "text": "二分",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "二分优化时间复杂度",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2008.maximum-earnings-from-taxi.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2008.maximum-earnings-from-taxi.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maxTaxiEarnings(self, n: int, rides: List[List[int]]) -> int:\n        rides.sort(key=lambda x:x[1])\n\n        n = len(rides)\n        dp = [e-s+t for s,e,t in rides]\n        def bisect_right(rides, i):\n            l, r = 0, i\n            while l <= r:\n                mid = (l+r)//2\n                if rides[i][0] >= rides[mid][1]:\n                    l = mid + 1\n                else:\n                    r = mid - 1\n            return r\n        for j in range(1, n):\n            i = bisect_right(rides, j)\n            if i == -1:\n                dp[j] = max(dp[j], dp[j-1])\n            else:\n                dp[j] = max(dp[j], dp[j-1], dp[i] + rides[j][1] - rides[j][0] + rides[j][2])\n        return max(dp)\n\n"
        }
    ]
},
"minimum-number-of-operations-to-make-array-continuous":{
    "id": "2009",
    "name": "minimum-number-of-operations-to-make-array-continuous",
    "pre": [
        {
            "text": "二分",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "反向思考，题目要找最少操作数，其实就是找最多保留多少个数",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对于每一个num我们需要找到其作为左端点时，那么右端点就是v+on",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1，于是我们在这个数组中找值在num和v+on",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1的有多少个，这些都是可以保留的",
            "link": null,
            "color": "blue"
        },
        {
            "text": "排序+二分减少时间复杂度",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2009.minimum-number-of-operations-to-make-array-continuous.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2009.minimum-number-of-operations-to-make-array-continuous.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nimport bisect\n\n\nclass Solution:\n    def minOperations(self, nums: List[int]) -> int:\n        ans = on = len(nums)\n        nums = list(set(nums))\n        nums.sort()\n        n = len(nums)\n        for i, v in enumerate(nums):\n            # nums[i] 一定有一个是在端点的，如果都不在端点，变成在端点不会使得答案更差\n            r = bisect.bisect_right(nums, v + on - 1) # 枚举 i 作为左端点\n            l = bisect.bisect_left(nums, v - on + 1) # 枚举 i 作为右端点\n            ans = min(ans, n - (r - i), n - (i - l + 1))\n        return ans + (on - n)\n\n"
        }
    ]
},
"maximum-number-of-ways-to-partition-an-array":{
    "id": "2025",
    "name": "maximum-number-of-ways-to-partition-an-array",
    "pre": [
        {
            "text": "枚举",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "前缀和",
            "link": null,
            "color": "cyan"
        },
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "滚动思想",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2025.maximum-number-of-ways-to-partition-an-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2025.maximum-number-of-ways-to-partition-an-array.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def waysToPartition(self, nums: List[int], k: int) -> int:\n        n, pres = len(nums), list(accumulate(nums))\n        left, right = defaultdict(int), Counter(pres[:n - 1])\n        total = pres[-1]\n        ans = right[total / 2]\n        for i in range(n):\n            if i > 0: left[pres[i - 1]] += 1\n            if i > 0: right[pres[i - 1]] -= 1\n            ans = max(ans, left[(total - nums[i] + k) / 2] + right[total - (total - nums[i] + k) / 2])\n        return ans\n\n\n"
        }
    ]
},
"smallest-k-length-subsequence-with-occurrences-of-a-letter":{
    "id": "2030",
    "name": "smallest-k-length-subsequence-with-occurrences-of-a-letter",
    "pre": [
        {
            "text": "单调栈",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "先不考虑repetition，这就是一个典型的单调栈题目",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2030.smallest-k-length-subsequence-with-occurrences-of-a-letter.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2030.smallest-k-length-subsequence-with-occurrences-of-a-letter.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def smallestSubsequence(self, s: str, k: int, letter: str, repetition: int) -> str:\n        stack = []\n        remain, k = k, len(s) - k\n        pre_letters, pos_letters = 0, s.count(letter)\n        for a in s:\n            while k and stack and stack[-1] > a:\n                if stack[-1] == letter:\n                    if repetition > pre_letters + pos_letters - 1: break # 重要\n                    pre_letters -= 1\n                stack.pop()\n                k -= 1\n            if a == letter:\n                pre_letters += 1\n                pos_letters -= 1\n            stack.append(a)\n        # 不能直接取前 remain 个，因为可能不满足 repetition 的要求，因此需要记录一下剔除超过 remain 部分元素后，我们剔除了多少 letter（假设为 m 个），之后把末尾的 m 个非 letter 替换为 letter 以满足  repetiton 的要求\n        while len(stack) > remain:\n            if stack[-1] == letter:\n                pre_letters -= 1\n            stack.pop()\n        for i in range(remain-1,-1,-1):\n            if pre_letters < repetition and stack[i] != letter:\n                pre_letters += 1\n                stack[i] = letter\n        return ''.join(stack)\n\n\n"
        }
    ]
},
"sequentially-ordinal-rank-tracker":{
    "id": "2102",
    "name": "sequentially-ordinal-rank-tracker",
    "pre": [
        {
            "text": "平衡二叉树",
            "link": null,
            "color": "geekblue"
        }
    ],
    "keyPoints": [
        {
            "text": "add的时候对score取反，达到**如果有两个景点的评分一样，那么字典序较小的景点更好**的效果。",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2102.sequentially-ordinal-rank-tracker.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2102.sequentially-ordinal-rank-tracker.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nfrom sortedcontainers import SortedList\nclass SORTracker:\n\n    def __init__(self):\n        sl = SortedList()\n        self.i = -1\n        self.sl = sl\n\n    def add(self, name: str, score: int) -> None:\n        self.sl.add((score, name))\n\n    def get(self) -> str:\n        ans = self.sl[self.i][1]\n        self.i += 1\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n\nfrom sortedcontainers import SortedList\nclass SORTracker:\n\n    def __init__(self):\n        sl = SortedList()\n        self.i = -1\n        self.sl = sl\n\n    def add(self, name: str, score: int) -> None:\n        self.sl.add((score, -1 * toNumber(name) ,name))\n\n    def get(self) -> str:\n        ans = self.sl[self.i][2]\n        self.i += 1\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n\nfrom sortedcontainers import SortedList\nclass SORTracker:\n\n    def __init__(self):\n        sl = SortedList()\n        self.i = 0\n        self.sl = sl\n\n    def add(self, name: str, score: int) -> None:\n        self.sl.add((-score, name))\n\n    def get(self) -> str:\n        ans = self.sl[self.i][1]\n        self.i += 1\n        return ans\n\n\n\n# Your SORTracker object will be instantiated and called as such:\n# obj = SORTracker()\n# obj.add(name,score)\n# param_2 = obj.get()\n\n"
        }
    ]
},
"maximum-running-time-of-n-computers":{
    "id": "2141",
    "name": "maximum-running-time-of-n-computers",
    "pre": [
        {
            "text": "二分",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "证明总的可用电池大于等于总的分钟数是充要条件",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2141.maximum-running-time-of-n-computers.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2141.maximum-running-time-of-n-computers.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maxRunTime(self, n: int, batteries: List[int]) -> int:\n        def can(k):\n            return sum([min(k, battery) for battery in batteries]) >= n * k\n        l, r = 0, sum(batteries)\n        while l <= r:\n            mid = (l + r) // 2\n            if can(mid):\n                l = mid + 1\n            else:\n                r = mid - 1\n        return r\n\n"
        }
    ]
},
"count-good-triplets-in-an-array":{
    "id": "2172",
    "name": "count-good-triplets-in-an-array",
    "pre": [
        {
            "text": "平衡二叉树",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "枚举",
            "link": null,
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "根据数组A的索引对应关系置换数组B，得到新的数组C，问题转化为堆C求递增三元组的个数",
            "link": null,
            "color": "blue"
        },
        {
            "text": "枚举三元组中中间的数",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2172.count-good-triplets-in-an-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2172.count-good-triplets-in-an-array.md",
    "code": [
        {
            "language": "py",
            "text": "\nn = len(nums1)\nfor i in range(n):\n    d[nums1[i]] = i\n"
        },
        {
            "language": "py",
            "text": "\nfor i in range(n):\n    nums.append(d[nums2[i]])\n"
        },
        {
            "language": "py",
            "text": "\nsl1 = SortedList()\nsl2 = SortedList(nums)\nfor num in nums:\n    sl1.add(num)\n    sl2.remove(num)\n    ans += sl1.bisect_left(num) * (len(sl2) - sl2.bisect_left(num + 1))\nreturn ans\n"
        },
        {
            "language": "py",
            "text": "\n\nfrom sortedcontainers import SortedList\nclass Solution:\n    def goodTriplets(self, nums1: List[int], nums2: List[int]) -> int:\n        d = {}\n        nums = []\n        ans = 0\n        n = len(nums1)\n        for i in range(n):\n            d[nums1[i]] = i\n        for i in range(n):\n            nums.append(d[nums2[i]])\n        sl1 = SortedList()\n        for num in nums:\n            sl1.add(num)\n            ans += sl1.bisect_left(num) * ((n - num - (len(sl1) - sl1.bisect_left(num))))\n        return ans\n\n"
        }
    ]
},
"minimum-white-tiles-after-covering-with-carpets":{
    "id": "2209",
    "name": "minimum-white-tiles-after-covering-with-carpets",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2209.minimum-white-tiles-after-covering-with-carpets.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2209.minimum-white-tiles-after-covering-with-carpets.md",
    "code": [
        {
            "language": "py",
            "text": "\ndp[i][j] = dp[i-1][j] + int(floor[i] == '1')\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def minimumWhiteTiles(self, floor: str, numCarpets: int, carpetLen: int) -> int:\n        dp = [[0] * (numCarpets + 1) for _ in range(len(floor))]\n        for i in range(len(floor)):\n            for j in range(numCarpets + 1):\n                if j == 0:\n                    dp[i][j] = dp[i-1][j] + int(floor[i] == '1')\n                    continue\n                if i >= carpetLen and j > 0:\n                    dp[i][j] = dp[i - carpetLen][j - 1]\n                dp[i][j] = min(dp[i][j],  dp[i-1][j] + int(floor[i] == '1'))\n\n        return dp[-1][-1]\n\n"
        }
    ]
},
"sum-of-total-strength-of-wizards":{
    "id": "2281",
    "name": "sum-of-total-strength-of-wizards",
    "pre": [],
    "keyPoints": [
        {
            "text": "计算每一项对结果的贡献",
            "link": null,
            "color": "blue"
        },
        {
            "text": "固定一个变量",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2281.sum-of-total-strength-of-wizards.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2281.sum-of-total-strength-of-wizards.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def sumSubarrayMins(self, A: List[int]) -> int:\n        n = len(A)\n        st = []\n        left = [-1] * n\n        right = [n] * n\n        res = 0\n        for i, a in enumerate(A):\n            while st and a <= A[st[-1]]:\n                right[st.pop()] = i\n            if st:\n                left[i] = st[-1]\n            st.append(i)\n        for i, a in enumerate(A):\n            res += a * (i - left[i]) * (right[i] - i)\n\n        return res % 1000000007\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def totalStrength(self, A):\n        mod = 10 ** 9 + 7\n        n = len(A)\n\n        right = [n] * n\n        left = [-1] * n\n        st = []\n        for i in range(n):\n            while st and A[st[-1]] >= A[i]:\n                right[st.pop()] = i\n            if st:\n                left[i] = st[-1]\n            st.append(i)\n\n        res = 0\n        acc = list(accumulate(accumulate(A), initial = 0))\n        for i in range(n):\n            l, r = left[i], right[i]\n            lacc = acc[i] - acc[max(l, 0)]\n            racc = acc[r] - acc[i]\n            ln, rn = i - l, r - i\n            res += A[i] * (racc * ln - lacc * rn) % mod\n        return res % mod\n\n"
        }
    ]
},
"naming-a-company":{
    "id": "2306",
    "name": "naming-a-company",
    "pre": [
        {
            "text": "枚举",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "笛卡尔积",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2306.naming-a-company.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2306.naming-a-company.md",
    "code": [
        {
            "language": "py",
            "text": "\nc: set([\"offee\"])\nd: set([\"onuts\"])\nt: set([\"ime\", \"offee\"])\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def distinctNames(self, ideas: List[str]) -> int:\n        ans = set()\n        seen = set(ideas)\n        starts = collections.defaultdict(list)\n        # 预处理出 starts 字典\n        for idea in ideas:\n            starts[idea[0]].append(idea[1:])\n\n        for idea in ideas:\n            for i in range(26):\n                ch = chr(i + 97)\n                if idea[0] != ch:\n                    a = ch + idea[1:]\n                    if a not in seen:\n                        # 枚举后缀\n                        for b in starts[ch]:\n                            if idea[0] + b not in seen:\n                                ans.add((a, idea[0] + b))\n        return len(ans)\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def distinctNames(self, ideas: List[str]) -> int:\n        ans = 0\n        seen = set(ideas)\n        starts = collections.defaultdict(set)\n\n        for idea in ideas:\n            starts[idea[0]].add(idea[1:])\n        for j in range(25):\n            for i in range(j + 1, 26):\n                set_x = starts[chr(i + 97)]\n                set_y = starts[chr(j + 97)]\n                intersections = len(set_x & set_y) # 交集\n                ans += 2 * (len(set_x) - intersections) * (len(set_y) - intersections)\n        return ans\n\n\n"
        }
    ]
},
"selling-pieces-of-wood":{
    "id": "2312",
    "name": "selling-pieces-of-wood",
    "pre": [
        {
            "text": "动态规划记忆化递归",
            "link": null,
            "color": "geekblue"
        }
    ],
    "keyPoints": [
        {
            "text": "枚举切割点",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2312.selling-pieces-of-wood.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2312.selling-pieces-of-wood.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def sellingWood(self, m: int, n: int, prices: List[List[int]]) -> int:\n        d = {(h, w): p for h, w, p in prices}\n        @cache\n        def dp(i, j):\n            ans = d.get((i, j), 0) # 不切\n            # 竖着切\n            for x in range(1, i):\n                ans = max(ans, dp(x, j) + dp(i - x, j))\n            # 横着切\n            for y in range(1, j):\n                ans = max(ans, dp(i, y) + dp(i, j - y))\n            return ans # 且三种选择的最大值即可\n        return dp(m, n)\n\n"
        }
    ]
},
"distribute-money-to-maximum-children":{
    "id": "2591",
    "name": "distribute-money-to-maximum-children",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        },
        {
            "text": "脑筋急转弯",
            "link": null,
            "color": "cyan"
        }
    ],
    "keyPoints": [
        {
            "text": "先每个人分配一块钱，保证题目约束”每个人“都需要分到。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "贪心",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2591.distribute-money-to-maximum-children.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2591.distribute-money-to-maximum-children.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def distMoney(self, money: int, children: int) -> int:\n        # @cache\n        # def dp(money, children):\n        #     if children == 0:\n        #         if money == 0: return 0\n        #         return -inf\n        #     if money == 0: return -inf\n        #     ans = -inf\n        #     for i in range(1, money+1):\n        #         if i == 4: continue\n        #         ans = max(ans, int(i == 8) + dp(money - i, children - 1))\n        #     return ans\n        # ans = dp(money, children)\n        # if ans == -inf: return -1\n        # return ans\n        if money < children: return -1\n        dp = [[-inf] * (children+1) for _ in range(money+1)]\n        dp[0][0] = 0\n        for i in range(money+1):\n            for j in range(1, children+1):\n                for k in range(1, i+1):\n                    if k == 4: continue\n                    dp[i][j] = max(dp[i][j], int(k == 8) + dp[i - k][j - 1])\n        return -1 if dp[-1][-1] == -inf else dp[-1][-1]\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def distMoney(self, money: int, children: int) -> int:\n        money -= children  # 每人至少 1 美元\n        if money < 0: return -1\n        ans = min(money // 7, children)  # 初步分配，让尽量多的人分到 8 美元\n        money -= ans * 7\n        children -= ans\n        # children == 0 and money：必须找一个前面分了 8 美元的人，分配完剩余的钱\n        # children == 1 and money == 3：不能有人恰好分到 4 美元\n        if children == 0 and money or \\\n           children == 1 and money == 3:\n            ans -= 1\n        return ans\n\n"
        }
    ]
},
"maximize-greatness-of-an-array":{
    "id": "2592",
    "name": "maximize-greatness-of-an-array",
    "pre": [
        {
            "text": "二分",
            "link": null,
            "color": "purple"
        },
        {
            "text": "贪心",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "能力检测二分",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2592.maximize-greatness-of-an-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2592.maximize-greatness-of-an-array.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maximizeGreatness(self, nums: List[int]) -> int:\n        A = sorted(nums)\n\n        l, r = 1, len(nums)\n        def can(mid):\n            for i in range(mid):\n                if A[i] >= A[len(nums) - mid + i]: return False\n            return True\n\n\n        while l <= r:\n            mid = (l + r) // 2\n            if can(mid):\n                l = mid + 1\n            else:\n                r = mid - 1\n        return r\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maximizeGreatness(self, nums: List[int]) -> int:\n        nums.sort()\n        i = 0\n        for x in nums:\n            if x > nums[i]:\n                i += 1\n        return i\n\n"
        }
    ]
},
"find-score-of-an-array-after-marking-all-elements":{
    "id": "2593",
    "name": "find-score-of-an-array-after-marking-all-elements",
    "pre": [
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "哈希表记录每个元素的访问状态",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2593.find-score-of-an-array-after-marking-all-elements.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2593.find-score-of-an-array-after-marking-all-elements.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def findScore(self, nums: List[int]) -> int:\n        ans = 0\n        vis = [False] * (len(nums) + 2)  # 保证下标不越界\n        for i, x in sorted(enumerate(nums, 1), key=lambda p: p[1]):\n            if not vis[i]:\n                vis[i - 1] = True\n                vis[i + 1] = True  # 标记相邻的两个元素\n                ans += x\n        return ans\n\n"
        }
    ]
},
"minimum-absolute-difference-between-elements-with-constraint":{
    "id": "2817",
    "name": "minimum-absolute-difference-between-elements-with-constraint",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2817.minimum-absolute-difference-between-elements-with-constraint.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2817.minimum-absolute-difference-between-elements-with-constraint.md",
    "code": []
},
"count-k-subsequences-of-a-string-with-maximum-beauty":{
    "id": "2842",
    "name": "count-k-subsequences-of-a-string-with-maximum-beauty",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2842.count-k-subsequences-of-a-string-with-maximum-beauty.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2842.count-k-subsequences-of-a-string-with-maximum-beauty.md",
    "code": []
},
"beautiful-towers-i":{
    "id": "2865",
    "name": "beautiful-towers-i",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2865.beautiful-towers-i.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2865.beautiful-towers-i.md",
    "code": []
},
"beautiful-towers-ii":{
    "id": "2866",
    "name": "beautiful-towers-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2866.beautiful-towers-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2866.beautiful-towers-ii.md",
    "code": []
},
"maximum-xor-product":{
    "id": "2939",
    "name": "maximum-xor-product",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2939.maximum-xor-product.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2939.maximum-xor-product.md",
    "code": []
},
"count-the-number-of-incremovable-subarrays-ii":{
    "id": "2972",
    "name": "count-the-number-of-incremovable-subarrays-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2972.count-the-number-of-incremovable-subarrays-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2972.count-the-number-of-incremovable-subarrays-ii.md",
    "code": []
},
"find-the-number-of-ways-to-place-people-ii":{
    "id": "3027",
    "name": "find-the-number-of-ways-to-place-people-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/3027.find-the-number-of-ways-to-place-people-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/3027.find-the-number-of-ways-to-place-people-ii.md",
    "code": []
},
"maximize-consecutive-elements-in-an-array-after-modification":{
    "id": "3041",
    "name": "maximize-consecutive-elements-in-an-array-after-modification",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/3041.maximize-consecutive-elements-in-an-array-after-modification.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/3041.maximize-consecutive-elements-in-an-array-after-modification.md",
    "code": []
},
"find-the-sum-of-the-power-of-all-subsequences":{
    "id": "3082",
    "name": "find-the-sum-of-the-power-of-all-subsequences",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/3082.find-the-sum-of-the-power-of-all-subsequences.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/3082.find-the-sum-of-the-power-of-all-subsequences.md",
    "code": []
},
"minimum-cost-walk-in-weighted-graph":{
    "id": "3108",
    "name": "minimum-cost-walk-in-weighted-graph",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/3108.minimum-cost-walk-in-weighted-graph.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/3108.minimum-cost-walk-in-weighted-graph.md",
    "code": []
},
"minimum-operations-to-make-array-equal-to-target":{
    "id": "3229",
    "name": "minimum-operations-to-make-array-equal-to-target",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/3229.minimum-operations-to-make-array-equal-to-target.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/3229.minimum-operations-to-make-array-equal-to-target.md",
    "code": []
},
"maximum-frequency-of-an-element-after-performing-operations-ii":{
    "id": "3347",
    "name": "maximum-frequency-of-an-element-after-performing-operations-ii",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/3347.maximum-frequency-of-an-element-after-performing-operations-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/3347.maximum-frequency-of-an-element-after-performing-operations-ii.md",
    "code": []
},
"selling-pieces-of-wood":{
    "id": "5254",
    "name": "selling-pieces-of-wood",
    "pre": [
        {
            "text": "动态规划记忆化递归",
            "link": null,
            "color": "geekblue"
        }
    ],
    "keyPoints": [
        {
            "text": "枚举切割点",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/5254.selling-pieces-of-wood.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5254.selling-pieces-of-wood.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def sellingWood(self, m: int, n: int, prices: List[List[int]]) -> int:\n        d = {(h, w): p for h, w, p in prices}\n        @cache\n        def dp(i, j):\n            ans = d.get((i, j), 0) # 不切\n            # 竖着切\n            for x in range(1, i):\n                ans = max(ans, dp(x, j) + dp(i - x, j))\n            # 横着切\n            for y in range(1, j):\n                ans = max(ans, dp(i, y) + dp(i, j - y))\n            return ans # 且三种选择的最大值即可\n        return dp(m, n)\n\n"
        }
    ]
},
"maximum-xor-with-an-element-from-array":{
    "id": "5640",
    "name": "maximum-xor-with-an-element-from-array",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/5640.maximum-xor-with-an-element-from-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5640.maximum-xor-with-an-element-from-array.md",
    "code": []
},
"minimum-skips-to-arrive-at-meeting-on-time":{
    "id": "5775",
    "name": "minimum-skips-to-arrive-at-meeting-on-time",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/5775.minimum-skips-to-arrive-at-meeting-on-time.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5775.minimum-skips-to-arrive-at-meeting-on-time.md",
    "code": []
},
"find-good-days-to-rob-the-bank":{
    "id": "5935",
    "name": "find-good-days-to-rob-the-bank",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/5935.find-good-days-to-rob-the-bank.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5935.find-good-days-to-rob-the-bank.md",
    "code": []
},
"detonate-the-maximum-bombs":{
    "id": "5936",
    "name": "detonate-the-maximum-bombs",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/5936.detonate-the-maximum-bombs.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5936.detonate-the-maximum-bombs.md",
    "code": []
},
"intervals-between-identical-elements":{
    "id": "5965",
    "name": "intervals-between-identical-elements",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/5965.intervals-between-identical-elements.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5965.intervals-between-identical-elements.md",
    "code": []
},
"count-good-triplets-in-an-array":{
    "id": "5999",
    "name": "count-good-triplets-in-an-array",
    "pre": [
        {
            "text": "平衡二叉树",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "枚举",
            "link": null,
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "根据数组A的索引对应关系置换数组B，得到新的数组C，问题转化为堆C求递增三元组的个数",
            "link": null,
            "color": "blue"
        },
        {
            "text": "枚举三元组中中间的数",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/5999.count-good-triplets-in-an-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5999.count-good-triplets-in-an-array.md",
    "code": [
        {
            "language": "py",
            "text": "\nn = len(nums1)\nfor i in range(n):\n    d[nums1[i]] = i\n"
        },
        {
            "language": "py",
            "text": "\nfor i in range(n):\n    nums.append(d[nums2[i]])\n"
        },
        {
            "language": "py",
            "text": "\nsl1 = SortedList()\nsl2 = SortedList(nums)\nfor num in nums:\n    sl1.add(num)\n    sl2.remove(num)\n    ans += sl1.bisect_left(num) * (len(sl2) - sl2.bisect_left(num + 1))\nreturn ans\n"
        },
        {
            "language": "py",
            "text": "\n\nfrom sortedcontainers import SortedList\nclass Solution:\n    def goodTriplets(self, nums1: List[int], nums2: List[int]) -> int:\n        d = {}\n        nums = []\n        ans = 0\n        n = len(nums1)\n        for i in range(n):\n            d[nums1[i]] = i\n        for i in range(n):\n            nums.append(d[nums2[i]])\n        sl1 = SortedList()\n        for num in nums:\n            sl1.add(num)\n            ans += sl1.bisect_left(num) * ((n - num - (len(sl1) - sl1.bisect_left(num))))\n        return ans\n\n"
        }
    ]
},
"maximize-number-of-subsequences-in-a-string":{
    "id": "6201",
    "name": "maximize-number-of-subsequences-in-a-string",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/6201.maximize-number-of-subsequences-in-a-string.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/6201.maximize-number-of-subsequences-in-a-string.md",
    "code": []
},
"md":{
    "id": "Bus-Fare",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Bus-Fare.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Bus-Fare.md",
    "code": []
},
"md":{
    "id": "Connected-Road-to-Destination",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Connected-Road-to-Destination.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Connected-Road-to-Destination.md",
    "code": []
},
"md":{
    "id": "Every-Sublist-Min-Sum",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Every-Sublist-Min-Sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Every-Sublist-Min-Sum.md",
    "code": []
},
"md":{
    "id": "Increasing-Digits",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Increasing-Digits.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Increasing-Digits.md",
    "code": []
},
"md":{
    "id": "Kth-Pair-Distance",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Kth-Pair-Distance.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Kth-Pair-Distance.md",
    "code": []
},
"md":{
    "id": "Largest-Equivalent-Set-of-Pairs",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Largest-Equivalent-Set-of-Pairs.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Largest-Equivalent-Set-of-Pairs.md",
    "code": []
},
"md":{
    "id": "Longest-Contiguously-Strictly-Increasing-Sublist-After-Deletion",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Longest-Contiguously-Strictly-Increasing-Sublist-After-Deletion.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Longest-Contiguously-Strictly-Increasing-Sublist-After-Deletion.md",
    "code": []
},
"md":{
    "id": "Longest-Matrix-Path-Length",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Longest-Matrix-Path-Length.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Longest-Matrix-Path-Length.md",
    "code": []
},
"md":{
    "id": "Maximize-the-Number-of-Equivalent-Pairs-After-Swaps",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Maximize-the-Number-of-Equivalent-Pairs-After-Swaps.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Maximize-the-Number-of-Equivalent-Pairs-After-Swaps.md",
    "code": []
},
"md":{
    "id": "Minimum-Dropping-Path-Sum",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Minimum-Dropping-Path-Sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Minimum-Dropping-Path-Sum.md",
    "code": []
},
"md":{
    "id": "Minimum-Light-Radius",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Minimum-Light-Radius.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Minimum-Light-Radius.md",
    "code": []
},
"md":{
    "id": "Number-Stream-to-Intervals",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Number-Stream-to-Intervals.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Number-Stream-to-Intervals.md",
    "code": []
},
"md":{
    "id": "Number-of-Substrings-with-Single-Character-Difference",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Number-of-Substrings-with-Single-Character-Difference.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Number-of-Substrings-with-Single-Character-Difference.md",
    "code": []
},
"md":{
    "id": "Sort-String-by-Flipping",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Sort-String-by-Flipping.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Sort-String-by-Flipping.md",
    "code": []
},
"md":{
    "id": "Ticket-Order",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Ticket-Order.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Ticket-Order.md",
    "code": []
},
"md":{
    "id": "Triple-Inversion",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Triple-Inversion.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Triple-Inversion.md",
    "code": []
},
"md":{
    "id": "binode-lcci",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/binode-lcci.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/binode-lcci.md",
    "code": []
},
"md":{
    "id": "consecutive-wins",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/consecutive-wins.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/consecutive-wins.md",
    "code": []
},
"md":{
    "id": "get-kth-magic-number-lcci",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/get-kth-magic-number-lcci.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/get-kth-magic-number-lcci.md",
    "code": []
},
"meChtZ":{
    "id": "lcp20",
    "name": "meChtZ",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/lcp20.meChtZ.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/lcp20.meChtZ.md",
    "code": []
},
"Za25hA":{
    "id": "lcp21",
    "name": "Za25hA",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/lcp21.Za25hA.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/lcp21.Za25hA.md",
    "code": []
},
"md":{
    "id": "max-black-square-lcci",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/max-black-square-lcci.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/max-black-square-lcci.md",
    "code": []
},
"md":{
    "id": "sub-sort-lcci",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/sub-sort-lcci.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/sub-sort-lcci.md",
    "code": []
},

     }
   
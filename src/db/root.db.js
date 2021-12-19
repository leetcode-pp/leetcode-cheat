
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
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nconst twoSum = function (nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n    if (map.has(diff)) {\n      return [map.get(diff), i];\n    }\n    map.set(nums[i], i);\n  }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& A, int target) {\n        unordered_map<int, int> m;\n        for (int i = 0; i < A.size(); ++i) {\n            int t = target - A[i];\n            if (m.count(t)) return { m[t], i };\n            m[A[i]] = i;\n        }\n        return {};\n    }\n};\n"
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
    "pre": [
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        },
        {
            "text": "滑动窗口",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "mapper记录出现过并且没有被删除的字符",
            "link": null,
            "color": "blue"
        },
        {
            "text": "滑动窗口记录当前index开始的最大的不重复的字符序列",
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
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/3.longest-substring-without-repeating-characters.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/3.longest-substring-without-repeating-characters.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int lengthOfLongestSubstring(String s) {\n        int ans = 0, start = 0;\n        int n = s.length();\n        //\n        Map<Character, Integer> map = new HashMap<>();\n\n        for(int i=0;i<n;i++)\n        {\n            char alpha = s.charAt(i);\n            if(map.containsKey(alpha))\n            {\n                start = Math.max(start, map.get(alpha)+1);\n            }\n            ans = Math.max(ans, i-start+1);\n            // 字符位置\n            map.put(alpha, i);\n        }\n\n        return ans;\n    }\n}\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n\n        int ans = 0, start = 0;\n        int n = s.length();\n        //\n        map<char, int> mp;\n\n        for(int i=0;i<n;i++)\n        {\n            char alpha = s[i];\n            if(mp.count(alpha))\n            {\n                start = max(start, mp[alpha]+1);\n            }\n            ans = max(ans, i-start+1);\n            // 字符位置\n            mp[alpha] = i;\n        }\n\n        return ans;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nfrom collections import defaultdict\n\n\nclass Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        l = 0\n        ans = 0\n        counter = defaultdict(lambda: 0)\n\n        for r in range(len(s)):\n            while counter.get(s[r], 0) != 0:\n                counter[s[l]] = counter.get(s[l], 0) - 1\n                l += 1\n            counter[s[r]] += 1\n            ans = max(ans, r - l + 1)\n\n        return ans\n"
        }
    ]
},
"median-of-two-sorted-arrays":{
    "id": "4",
    "name": "median-of-two-sorted-arrays",
    "pre": [
        {
            "text": "中位数",
            "link": null,
            "color": "cyan"
        },
        {
            "text": "分治法",
            "link": null,
            "color": "volcano"
        },
        {
            "text": "二分查找",
            "link": null,
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "有序数组容易想到二分查找",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对小的数组进行二分可降低时间复杂度",
            "link": null,
            "color": "blue"
        },
        {
            "text": "根据leftp1,rightp2,leftp2和rightp1的大小关系确定结束点和收缩方向",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/4.median-of-two-sorted-arrays.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/4.median-of-two-sorted-arrays.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass MedianTwoSortedArrayBruteForce {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n      int[] newArr = mergeTwoSortedArray(nums1, nums2);\n      int n = newArr.length;\n      if (n % 2 == 0) {\n        // even\n        return (double) (newArr[n / 2] + newArr[n / 2 - 1]) / 2;\n      } else {\n        // odd\n        return (double) newArr[n / 2];\n      }\n    }\n    private int[] mergeTwoSortedArray(int[] nums1, int[] nums2) {\n      int m = nums1.length;\n      int n = nums2.length;\n      int[] res = new int[m + n];\n      int i = 0;\n      int j = 0;\n      int idx = 0;\n      while (i < m && j < n) {\n        if (nums1[i] <= nums2[j]) {\n          res[idx++] = nums1[i++];\n        } else {\n          res[idx++] = nums2[j++];\n        }\n      }\n      while (i < m) {\n        res[idx++] = nums1[i++];\n      }\n      while (j < n) {\n        res[idx++] = nums2[j++];\n      }\n      return res;\n    }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass MedianSortedTwoArrayBinarySearch {\n  public static double findMedianSortedArraysBinarySearch(int[] nums1, int[] nums2) {\n     // do binary search for shorter length array, make sure time complexity log(min(m,n)).\n     if (nums1.length > nums2.length) {\n        return findMedianSortedArraysBinarySearch(nums2, nums1);\n      }\n      int m = nums1.length;\n      int n = nums2.length;\n      int lo = 0;\n      int hi = m;\n      while (lo <= hi) {\n        // partition A position i\n        int i = lo + (hi - lo) / 2;\n        // partition B position j\n        int j = (m + n + 1) / 2 - i;\n\n        int maxLeftA = i == 0 ? Integer.MIN_VALUE : nums1[i - 1];\n        int minRightA = i == m ? Integer.MAX_VALUE : nums1[i];\n\n        int maxLeftB = j == 0 ? Integer.MIN_VALUE : nums2[j - 1];\n        int minRightB = j == n ? Integer.MAX_VALUE : nums2[j];\n\n        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {\n          // total length is even\n          if ((m + n) % 2 == 0) {\n            return (double) (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;\n          } else {\n            // total length is odd\n            return (double) Math.max(maxLeftA, maxLeftB);\n          }\n        } else if (maxLeftA > minRightB) {\n          // binary search left half\n          hi = i - 1;\n        } else {\n          // binary search right half\n          lo = i + 1;\n        }\n      }\n      return 0.0;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nvar findMedianSortedArrays = function (nums1, nums2) {\n  // 归并排序\n  const merged = [];\n  let i = 0;\n  let j = 0;\n  while (i < nums1.length && j < nums2.length) {\n    if (nums1[i] < nums2[j]) {\n      merged.push(nums1[i++]);\n    } else {\n      merged.push(nums2[j++]);\n    }\n  }\n  while (i < nums1.length) {\n    merged.push(nums1[i++]);\n  }\n  while (j < nums2.length) {\n    merged.push(nums2[j++]);\n  }\n\n  const { length } = merged;\n  return length % 2 === 1\n    ? merged[Math.floor(length / 2)]\n    : (merged[length / 2] + merged[length / 2 - 1]) / 2;\n};\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * 二分解法\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nvar findMedianSortedArrays = function (nums1, nums2) {\n  // make sure to do binary search for shorten array\n  if (nums1.length > nums2.length) {\n    [nums1, nums2] = [nums2, nums1];\n  }\n  const m = nums1.length;\n  const n = nums2.length;\n  let low = 0;\n  let high = m;\n  while (low <= high) {\n    const i = low + Math.floor((high - low) / 2);\n    const j = Math.floor((m + n + 1) / 2) - i;\n\n    const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];\n    const minRightA = i === m ? Infinity : nums1[i];\n    const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];\n    const minRightB = j === n ? Infinity : nums2[j];\n\n    if (maxLeftA <= minRightB && minRightA >= maxLeftB) {\n      return (m + n) % 2 === 1\n        ? Math.max(maxLeftA, maxLeftB)\n        : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;\n    } else if (maxLeftA > minRightB) {\n      high = i - 1;\n    } else {\n      low = low + 1;\n    }\n  }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        if (nums1.size() > nums2.size()) swap(nums1, nums2);\n        int M = nums1.size(), N = nums2.size(), L = 0, R = M, K = (M + N + 1) / 2;\n        while (true) {\n            int i = (L + R) / 2, j = K - i;\n            if (i < M && nums2[j - 1] > nums1[i]) L = i + 1;\n            else if (i > L && nums1[i - 1] > nums2[j]) R = i - 1;\n            else {\n                int maxLeft = max(i ? nums1[i - 1] : INT_MIN, j ? nums2[j - 1] : INT_MIN);\n                if ((M + N) % 2) return maxLeft;\n                int minRight = min(i == M ? INT_MAX : nums1[i], j == N ? INT_MAX : nums2[j]);\n                return (maxLeft + minRight) / 2.0;\n            }\n        }\n    }\n};\n\n"
        },
        {
            "language": "py",
            "text": "\nif leftp1 > rightp2:\n    hi = mid1 - 1\nelse:\n    lo = mid1 + 1\n"
        },
        {
            "language": "py",
            "text": "\nif leftp2 > rightp1:\n    hi = mid2 - 1\nelse:\n    lo = mid2 + 1\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\n        N = len(nums1)\n        M = len(nums2)\n        if N > M:\n            return self.findMedianSortedArrays(nums2, nums1)\n\n        lo = 0\n        hi = N\n        combined = N + M\n\n        while lo <= hi:\n            mid1 = lo + hi >> 1\n            mid2 = ((combined + 1) >> 1) - mid1\n\n            leftp1 = -float(\"inf\") if mid1 == 0 else nums1[mid1 - 1]\n            rightp1 = float(\"inf\") if mid1 == N else nums1[mid1]\n\n            leftp2 = -float(\"inf\") if mid2 == 0 else nums2[mid2 - 1]\n            rightp2 = float(\"inf\") if mid2 == M else nums2[mid2]\n\n            # Check if the partition is valid for the case of\n            if leftp1 <= rightp2 and leftp2 <= rightp1:\n                if combined % 2 == 0:\n                    return (max(leftp1, leftp2)+min(rightp1, rightp2)) / 2.0\n\n                return max(leftp1, leftp2)\n            else:\n                if leftp1 > rightp2:\n                    hi = mid1 - 1\n                else:\n                    lo = mid1 + 1\n        return -1\n"
        }
    ]
},
"longest-palindromic-substring":{
    "id": "5",
    "name": "longest-palindromic-substring",
    "pre": [
        {
            "text": "回文",
            "link": null,
            "color": "lime"
        }
    ],
    "keyPoints": [
        {
            "text": "”延伸“（extend）",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/5.longest-palindromic-substring.md",
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
            "language": "cpp",
            "text": "\nclass Solution {\nprivate:\n    int expand(string &s, int L, int R) {\n        while (L >= 0 && R < s.size() && s[L] == s[R]) {\n            --L;\n            ++R;\n        }\n        return R - L - 1;\n    }\npublic:\n    string longestPalindrome(string s) {\n        if (s.empty()) return s;\n        int start = 0, maxLen = 0;\n        for (int i = 0; i < s.size(); ++i) {\n            int len1 = expand(s, i, i);\n            int len2 = expand(s, i, i + 1);\n            int len = max(len1, len2);\n            if (len > maxLen) {\n                start = i - (len - 1) / 2;\n                maxLen = len;\n            }\n        }\n        return s.substr(start, maxLen);\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def longestPalindrome(self, s: str) -> str:\n        n = len(s)\n        if n == 0:\n            return \"\"\n        res = s[0]\n        def extend(i, j, s):\n            while(i >= 0 and j < len(s) and s[i] == s[j]):\n                i -= 1\n                j += 1\n            return s[i + 1:j]\n\n        for i in range(n - 1):\n            e1 = extend(i, i, s)\n            e2 = extend(i, i + 1, s)\n            if max(len(e1), len(e2)) > len(res):\n                res = e1 if len(e1) > len(e2) else e2\n        return res\n"
        }
    ]
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
            "language": "js",
            "text": "\n/**\n * @param {string} s\n * @return {boolean}\n */\nvar isValid = function (s) {\n  let valid = true;\n  const stack = [];\n  const mapper = {\n    \"{\": \"}\",\n    \"[\": \"]\",\n    \"(\": \")\",\n  };\n\n  for (let i in s) {\n    const v = s[i];\n    if ([\"(\", \"[\", \"{\"].indexOf(v) > -1) {\n      stack.push(v);\n    } else {\n      const peak = stack.pop();\n      if (v !== mapper[peak]) {\n        return false;\n      }\n    }\n  }\n\n  if (stack.length > 0) return false;\n\n  return valid;\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar isValid = function (s) {\n  while (s.includes(\"[]\") || s.includes(\"()\") || s.includes(\"{}\")) {\n    s = s.replace(\"[]\", \"\").replace(\"()\", \"\").replace(\"{}\", \"\");\n  }\n  s = s.replace(\"[]\", \"\").replace(\"()\", \"\").replace(\"{}\", \"\");\n  return s.length === 0;\n};\n"
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
    "pre": [
        {
            "text": "二分法",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [
        {
            "text": "[二分查找](../91/binary",
            "link": null,
            "color": "blue"
        },
        {
            "text": "search.md)",
            "link": null,
            "color": "blue"
        },
        {
            "text": "正负数的判断中，这样判断更简单。```jsconstisNegative=dividend>0!==divisor>0;```或者利用异或：```jsconstisNegative=dividend^(divisor<0);```",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "Facebook"
        },
        {
            "name": "Microsoft"
        },
        {
            "name": "Oracle"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/29.divide-two-integers.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/29.divide-two-integers.md",
    "code": [
        {
            "language": "js",
            "text": "\nlet acc = divisor;\nlet count = 0;\n\nwhile (dividend - acc >= 0) {\n  acc += divisor;\n  count++;\n}\n\nreturn count;\n"
        },
        {
            "language": "js",
            "text": "\nconst isNegative = dividend > 0 !== divisor > 0;\n"
        },
        {
            "language": "js",
            "text": "\nconst isNegative = dividend ^ (divisor < 0);\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=29 lang=javascript\n *\n * [29] Divide Two Integers\n */\n/**\n * @param {number} dividend\n * @param {number} divisor\n * @return {number}\n */\nvar divide = function (dividend, divisor) {\n  if (divisor === 1) return dividend;\n\n  // 这种方法很巧妙，即符号相同则为正，不同则为负\n  const isNegative = dividend > 0 !== divisor > 0;\n\n  const MAX_INTERGER = Math.pow(2, 31);\n\n  const res = helper(Math.abs(dividend), Math.abs(divisor));\n\n  // overflow\n  if (res > MAX_INTERGER - 1 || res < -1 * MAX_INTERGER) {\n    return MAX_INTERGER - 1;\n  }\n\n  return isNegative ? -1 * res : res;\n};\n\nfunction helper(dividend, divisor) {\n  // 二分法\n  if (dividend <= 0) return 0;\n  if (dividend < divisor) return 0;\n  if (divisor === 1) return dividend;\n\n  let acc = 2 * divisor;\n  let count = 1;\n\n  while (dividend - acc > 0) {\n    acc += acc;\n    count += count;\n  }\n  // 直接使用位移运算，比如acc >> 1会有问题\n  const last = dividend - Math.floor(acc / 2);\n\n  return count + helper(last, divisor);\n}\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int divide(int dividend, int divisor) {\n        if (!divisor) return 0;  // divide-by-zero error\n        bool pos1 = dividend > 0, pos2 = divisor > 0, pos = !(pos1^pos2);\n        if (pos1) dividend = -dividend;\n        if (pos2) divisor = -divisor;\n        int q = 0, d = divisor, t = 1;\n        while (t > 0 && dividend < 0) {\n            if (dividend - d <= 0) {\n                dividend -= d;\n                q -= t;\n                if ((INT_MIN >> 1) < d) {\n                    t <<= 1;\n                    d <<= 1;\n                }\n            } else {\n                d >>= 1;\n                t >>= 1;\n            }\n        }\n        return pos? -q : q;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def divide(self, dividend: int, divisor: int) -> int:\n        \"\"\"\n        二分法\n        :param int divisor\n        :param int dividend\n        :return int\n        \"\"\"\n        # 错误处理\n        if divisor == 0:\n            raise ZeroDivisionError\n        if abs(divisor) == 1:\n            result = dividend if 1 == divisor else -dividend\n            return min(2**31-1, max(-2**31, result))\n\n        # 确定结果的符号\n        sign = ((dividend >= 0) == (divisor >= 0))\n\n        result = 0\n        # abs也可以直接写在while条件中，不过可能会多计算几次\n        _divisor = abs(divisor)\n        _dividend = abs(dividend)\n\n        while _divisor <= _dividend:\n            r, _dividend = self._multi_divide(_divisor, _dividend)\n            result += r\n\n        result = result if sign else -result\n\n        # 注意返回值不能超过32位有符号数的表示范围\n        return min(2**31-1, max(-2**31, result))\n\n    def _multi_divide(self, divisor, dividend):\n        \"\"\"\n        翻倍除法，如果可以被除，则下一步除数翻倍，直至除数大于被除数，\n        返回商加总的结果与被除数的剩余值；\n        这里就不做异常处理了；\n        :param int divisor\n        :param int dividend\n        :return tuple result, left_dividend\n        \"\"\"\n        result = 0\n        times_count = 1\n        while divisor <= dividend:\n            dividend -= divisor\n            result += times_count\n            times_count += times_count\n            divisor += divisor\n        return result, dividend\n"
        }
    ]
},
"substring-with-concatenation-of-all-words":{
    "id": "30",
    "name": "substring-with-concatenation-of-all-words",
    "pre": [
        {
            "text": "字符串",
            "link": null,
            "color": "green"
        },
        {
            "text": "数组",
            "link": null,
            "color": "purple"
        },
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "Counter",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/30.substring-with-concatenation-of-all-words.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/30.substring-with-concatenation-of-all-words.md",
    "code": [
        {
            "language": "cpp",
            "text": "\n\nclass Solution {\nprivate:\n    int len, n;\n    string s;\n    bool rec(int i, unordered_map<string, int> &m, int cnt) {\n        if (cnt == n) return true;\n        int &v = m[s.substr(i, len)];\n        if (v) {\n            v--;\n            bool ret = rec(i + len, m, cnt + 1);\n            v++;\n            return ret;\n        }\n        return false;\n    }\npublic:\n    vector<int> findSubstring(string s, vector<string>& words) {\n        if (words.empty()) return {};\n        this->s = s;\n        len = words[0].size();\n        n = words.size();\n        unordered_map<string, int> m;\n        for (string word : words) ++m[word];\n        int end = s.size() - n * len;\n        vector<int> v;\n        for (int i = 0; i <= end; ++i) {\n            if (rec(i, m, 0)) v.push_back(i);\n        }\n        return v;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nfrom collections import Counter\n\n\nclass Solution:\n    def findSubstring(self, s: str, words: List[str]) -> List[int]:\n        if not s or not words:\n            return []\n        res = []\n        n = len(words)\n        word_len = len(words[0])\n        window_len = word_len * n\n        target = Counter(words)\n        i = 0\n        while i < len(s) - window_len + 1:\n            sliced = []\n            start = i\n            for _ in range(n):\n                sliced.append(s[start:start + word_len])\n                start += word_len\n            if Counter(sliced) == target:\n                res.append(i)\n            i += 1\n        return res\n"
        }
    ]
},
"next-permutation":{
    "id": "31",
    "name": "next-permutation",
    "pre": [
        {
            "text": "回溯法",
            "link": null,
            "color": "gold"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/31.next-permutation.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/31.next-permutation.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=31 lang=javascript\n *\n * [31] Next Permutation\n */\n\nfunction reverseRange(A, i, j) {\n  while (i < j) {\n    const temp = A[i];\n    A[i] = A[j];\n    A[j] = temp;\n    i++;\n    j--;\n  }\n}\n/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar nextPermutation = function (nums) {\n  // 时间复杂度O(n) 空间复杂度O(1)\n  if (nums == null || nums.length <= 1) return;\n\n  let i = nums.length - 2;\n  // 从后往前找到第一个降序的,相当于找到了我们的回溯点\n  while (i > -1 && nums[i + 1] <= nums[i]) i--;\n\n  // 如果找了就swap\n  if (i > -1) {\n    let j = nums.length - 1;\n    // 找到从右边起第一个大于nums[i]的，并将其和nums[i]进行交换\n    // 因为如果交换的数字比nums[i]还要小肯定不符合题意\n    while (nums[j] <= nums[i]) j--;\n    const temp = nums[i];\n    nums[i] = nums[j];\n    nums[j] = temp;\n  }\n\n  // 最后我们只需要将剩下的元素从左到右，依次填入当前最小的元素就可以保证是大于当前排列的最小值了\n  // [i + 1, A.length -1]的元素进行反转\n\n  reverseRange(nums, i + 1, nums.length - 1);\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n  void nextPermutation(vector<int>& nums) {\n    int i = nums.size() - 2, j = nums.size() - 1;\n    while (i >= 0 && nums[i] >= nums[i + 1]) --i;\n    if (i >= 0) {\n      while (j > i && nums[j] <= nums[i]) --j;\n      swap(nums[i], nums[j]);\n    }\n    reverse(nums.begin() + i + 1, nums.end());\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def nextPermutation(self, nums):\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        :param list nums\n        \"\"\"\n        # 第一步，从后往前，找到下降点\n        down_index = None\n        for i in range(len(nums)-2, -1, -1):\n            if nums[i] < nums[i+1]:\n                down_index = i\n                break\n        # 如果没有下降点，重新排列\n        if down_index is None:\n            nums.reverse()\n        # 如果有下降点\n        else:\n            # 第二步，从后往前，找到比下降点大的数，对换位置\n            for i in range(len(nums)-1, i, -1):\n                if nums[down_index] < nums[i]:\n                    nums[down_index], nums[i] = nums[i], nums[down_index]\n                    break\n            # 第三部，重新排列下降点之后的数\n            i, j = down_index+1, len(nums)-1\n            while i < j:\n                nums[i], nums[j] = nums[j], nums[i]\n                i += 1\n                j -= 1\n"
        }
    ]
},
"longest-valid-parentheses":{
    "id": "32",
    "name": "longest-valid-parentheses",
    "pre": [
        {
            "text": "动态规划",
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
            "text": "1],因此,需要检查越界;2.第4点特征最容易遗漏,还有就是不需要检查越界,因为根据定义可知:i>=dp[i],所以dp[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "dp[i]]的边界情况是dp[0];",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/32.longest-valid-parentheses.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/32.longest-valid-parentheses.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class Solution {\n    public int longestValidParentheses(String s) {\n        int left = 0, right = 0, maxlength = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (s.charAt(i) == '(') {\n                left++;\n            } else {\n                right++;\n            }\n            if (left == right) {\n                maxlength = Math.max(maxlength, left + right);\n            }\n            if (right > left) {\n                left = right = 0;\n            }\n        }\n        left = right = 0;\n        for (int i = s.length() - 1; i >= 0; i--) {\n            if (s.charAt(i) == '(') {\n                left++;\n            } else {\n                right++;\n            }\n            if (left == right) {\n                maxlength = Math.max(maxlength, left + right);\n            }\n            if (left > right) {\n                left = right = 0;\n            }\n        }\n        return maxlength;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n// 用栈来解\nvar longestValidParentheses = function (s) {\n  let stack = new Array();\n  let longest = 0;\n  stack.push(-1);\n  for (let i = 0; i < s.length; i++) {\n    if (s[i] === \"(\") {\n      stack.push(i);\n    } else {\n      stack.pop();\n      if (stack.length === 0) {\n        stack.push(i);\n      } else {\n        longest = Math.max(longest, i - stack[stack.length - 1]);\n      }\n    }\n  }\n  return longest;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int longestValidParentheses(string s) {\n        stack<int> st;\n        st.push(-1);\n        int ans = 0;\n        for (int i = 0; i < s.size(); ++i) {\n            if (s[i] == ')' && st.top() != -1 && s[st.top()] == '(') {\n                st.pop();\n                ans = max(ans, i - st.top());\n            } else st.push(i);\n        }\n        return ans;\n    }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int longestValidParentheses(string s) {\n        int left = 0, right = 0, ans = 0, N = s.size();\n        for (int i = 0; i < N; ++i) {\n            left += s[i] == '(';\n            right += s[i] == ')';\n            if (left == right) ans = max(ans, left + right);\n            else if (right > left) left = right = 0;\n        }\n        left = 0, right = 0;\n        for (int i = N - 1; i >= 0; --i) {\n            left += s[i] == '(';\n            right += s[i] == ')';\n            if (left == right) ans = max(ans, left + right);\n            else if (left > right) left = right = 0;\n        }\n        return ans;\n    }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int longestValidParentheses(string s) {\n        vector<int> dp(s.size() + 1, 0);\n        int ans = 0;\n        for (int i = 0; i < s.size(); ++i) {\n            if (s[i] == '(') continue;\n            int start = i - dp[i] - 1;\n            if (start >= 0 && s[start] == '(')\n                dp[i + 1] = dp[i] + 2 + dp[start];\n            ans = max(ans, dp[i + 1]);\n        }\n        return ans;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def longestValidParentheses(self, s: str) -> int:\n        n = len(s)\n        ans = 0\n\n        def validCnt(start):\n            # cnt 为 ) 的数量减去 ( 的数量\n            cnt = 0\n            ans = 0\n            for i in range(start, n):\n                if s[i] == '(':\n                    cnt += 1\n                if s[i] == ')':\n                    cnt -= 1\n                if cnt < 0:\n                    return i - start\n                if cnt == 0:\n                    ans = max(ans, i - start + 1)\n            return ans\n        for i in range(n):\n            ans = max(ans, validCnt(i))\n\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def longestValidParentheses(self, s: str) -> int:\n        if not s:\n            return 0\n        res = 0\n        stack = [-1]\n        for i in range(len(s)):\n            if s[i] == \"(\":\n                stack.append(i)\n            else:\n                stack.pop()\n                if not stack:\n                    stack.append(i)\n                else:\n                    res = max(res, i - stack[-1])\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def longestValidParentheses(self, s: str) -> int:\n        ans = l = r = 0\n        for c in s:\n            if c == '(':\n                l += 1\n            else:\n                r += 1\n            if l == r:\n                ans = max(ans, l + r)\n            if r > l:\n                l = r = 0\n        l = r = 0\n        for c in s[::-1]:\n            if c == '(':\n                l += 1\n            else:\n                r += 1\n            if l == r:\n                ans = max(ans, l + r)\n            if r < l:\n                l = r = 0\n\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\ns = '(())())'\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def longestValidParentheses(self, s: str) -> int:\n        mlen = 0\n        slen = len(s)\n        dp = [0] * (slen + 1)\n        for i in range(1, len(s) + 1):\n            # 有效的括号对不可能会以'('结尾的\n            if s[i - 1] == '(':\n                continue\n\n            left_paren = i - 2 - dp[i - 1]\n            if left_paren >= 0 and s[left_paren] == '(':\n                dp[i] = dp[i - 1] + 2\n\n                # 拼接有效括号对\n                if dp[i - dp[i]]:\n                    dp[i] += dp[i - dp[i]]\n\n                # 更新最大有效扩对长度\n                if dp[i] > mlen:\n                    mlen = dp[i]\n\n        return mlen\n"
        }
    ]
},
"search-in-rotated-sorted-array":{
    "id": "33",
    "name": "search-in-rotated-sorted-array",
    "pre": [
        {
            "text": "数组",
            "link": null,
            "color": "purple"
        },
        {
            "text": "二分法",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [
        {
            "text": "[二分法](../91/binary",
            "link": null,
            "color": "blue"
        },
        {
            "text": "search.md)",
            "link": null,
            "color": "blue"
        },
        {
            "text": "找出有序区间，然后根据target是否在有序区间舍弃一半元素",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/33.search-in-rotated-sorted-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/33.search-in-rotated-sorted-array.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=33 lang=javascript\n *\n * [33] Search in Rotated Sorted Array\n */\n/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar search = function (nums, target) {\n  // 时间复杂度：O(logn)\n  // 空间复杂度：O(1)\n  // [6,7,8,1,2,3,4,5]\n  let start = 0;\n  let end = nums.length - 1;\n\n  while (start <= end) {\n    const mid = start + ((end - start) >> 1);\n    if (nums[mid] === target) return mid;\n\n    // [start, mid]有序\n\n    // ️⚠️注意这里的等号\n    if (nums[mid] >= nums[start]) {\n      //target 在 [start, mid] 之间\n\n      // 其实target不可能等于nums[mid]， 但是为了对称，我还是加上了等号\n      if (target >= nums[start] && target <= nums[mid]) {\n        end = mid - 1;\n      } else {\n        //target 不在 [start, mid] 之间\n        start = mid + 1;\n      }\n    } else {\n      // [mid, end]有序\n\n      // target 在 [mid, end] 之间\n      if (target >= nums[mid] && target <= nums[end]) {\n        start = mid + 1;\n      } else {\n        // target 不在 [mid, end] 之间\n        end = mid - 1;\n      }\n    }\n  }\n\n  return -1;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        \"\"\"用二分法，先判断左右两边哪一边是有序的，再判断是否在有序的列表之内\"\"\"\n        if len(nums) <= 0:\n            return -1\n\n        left = 0\n        right = len(nums) - 1\n        while left < right:\n            mid = (right - left) // 2 + left\n            if nums[mid] == target:\n                return mid\n\n            # 如果中间的值大于最左边的值，说明左边有序\n            if nums[mid] > nums[left]:\n                if nums[left] <= target <= nums[mid]:\n                    right = mid\n                else:\n                    # 这里 +1，因为上面是 <= 符号\n                    left = mid + 1\n            # 否则右边有序\n            else:\n                # 注意：这里必须是 mid+1，因为根据我们的比较方式，mid属于左边的序列\n                if nums[mid+1] <= target <= nums[right]:\n                    left = mid + 1\n                else:\n                    right = mid\n\n        return left if nums[left] == target else -1\n"
        }
    ]
},
"combination-sum":{
    "id": "39",
    "name": "combination-sum",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/39.combination-sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/39.combination-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\nfunction backtrack(list, tempList, nums, remain, start) {\n  if (remain < 0) return;\n  else if (remain === 0) return list.push([...tempList]);\n  for (let i = start; i < nums.length; i++) {\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums, remain - nums[i], i); // 数字可以重复使用， i + 1代表不可以重复利用\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nvar combinationSum = function (candidates, target) {\n  const list = [];\n  backtrack(\n    list,\n    [],\n    candidates.sort((a, b) => a - b),\n    target,\n    0\n  );\n  return list;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\nprivate:\n    vector<vector<int>> res;\n    void dfs(vector<int> &c, int t, int start, vector<int> &v) {\n        if (!t) {\n            res.push_back(v);\n            return;\n        }\n        for (int i = start; i < c.size() && t >= c[i]; ++i) {\n            v.push_back(c[i]);\n            dfs(c, t - c[i], i, v);\n            v.pop_back();\n        }\n    }\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        sort(candidates.begin(), candidates.end());\n        vector<int> v;\n        dfs(candidates, target, 0, v);\n        return res;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        \"\"\"\n        回溯法，层层递减，得到符合条件的路径就加入结果集中，超出则剪枝；\n        主要是要注意一些细节，避免重复等；\n        \"\"\"\n        size = len(candidates)\n        if size <= 0:\n            return []\n\n        # 先排序，便于后面剪枝\n        candidates.sort()\n\n        path = []\n        res = []\n        self._find_path(target, path, res, candidates, 0, size)\n\n        return res\n\n    def _find_path(self, target, path, res, candidates, begin, size):\n        \"\"\"沿着路径往下走\"\"\"\n        if target == 0:\n            res.append(path.copy())\n        else:\n            for i in range(begin, size):\n                left_num = target - candidates[i]\n                # 如果剩余值为负数，说明超过了，剪枝\n                if left_num < 0:\n                    break\n                # 否则把当前值加入路径\n                path.append(candidates[i])\n                # 为避免重复解，我们把比当前值小的参数也从下一次寻找中剔除，\n                # 因为根据他们得出的解一定在之前就找到过了\n                self._find_path(left_num, path, res, candidates, i, size)\n                # 记得把当前值移出路径，才能进入下一个值的路径\n                path.pop()\n"
        }
    ]
},
"combination-sum-ii":{
    "id": "40",
    "name": "combination-sum-ii",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/40.combination-sum-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/40.combination-sum-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\nfunction backtrack(list, tempList, nums, remain, start) {\n  if (remain < 0) return;\n  else if (remain === 0) return list.push([...tempList]);\n  for (let i = start; i < nums.length; i++) {\n    // 和39.combination-sum 的其中一个区别就是这道题candidates可能有重复\n    // 代码表示就是下面这一行。注意 i > start 这一条件\n    if (i > start && nums[i] == nums[i - 1]) continue; // skip duplicates\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums, remain - nums[i], i + 1); // i + 1代表不可以重复利用， i 代表数字可以重复使用\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nvar combinationSum2 = function (candidates, target) {\n  const list = [];\n  backtrack(\n    list,\n    [],\n    candidates.sort((a, b) => a - b),\n    target,\n    0\n  );\n  return list;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\n    vector<vector<int>> ans;\n    void backtrack(vector<int> &A, int target, int start, vector<int> &path) {\n        if (!target) {\n            ans.push_back(path);\n            return;\n        }\n        for (int i = start; i < A.size() && target >= A[i]; ++i) {\n            if (i != start && A[i] == A[i - 1]) continue;\n            path.push_back(A[i]);\n            dfs(A, target - A[i], i + 1, path);\n            path.pop_back();\n        }\n    }\npublic:\n    vector<vector<int>> combinationSum2(vector<int>& A, int target) {\n        sort(A.begin(), A.end());\n        vector<int> path;\n        backtrack(A, target, 0, path);\n        return ans;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\n if target == 0:\n    res.append(path.copy())\nelse:\n    for i in range(begin, size):\n        left_num = target - candidates[i]\n        if left_num < 0:\n            break\n        path.append(candidates[i])\n        self._find_path(candidates, path, res, left_num, i+1, size)\n        path.pop()\n"
        },
        {
            "language": "py",
            "text": "\n\n if target == 0:\n    res.append(path.copy())\nelse:\n    for i in range(begin, size):\n        # 增加下面一行代码\n        if i > begin and candidates[i] == candidate[i - 1]: continue\n        left_num = target - candidates[i]\n        if left_num < 0:\n            break\n        path.append(candidates[i])\n        self._find_path(candidates, path, res, left_num, i+1, size)\n        path.pop()\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:\n        \"\"\"\n        与39题的区别是不能重用元素，而元素可能有重复；\n        不能重用好解决，回溯的index往下一个就行；\n        元素可能有重复，就让结果的去重麻烦一些；\n        \"\"\"\n        size = len(candidates)\n        if size == 0:\n            return []\n\n        # 还是先排序，主要是方便去重\n        candidates.sort()\n\n        path = []\n        res = []\n        self._find_path(candidates, path, res, target, 0, size)\n\n        return res\n\n    def _find_path(self, candidates, path, res, target, begin, size):\n        if target == 0:\n            res.append(path.copy())\n        else:\n            for i in range(begin, size):\n                left_num = target - candidates[i]\n                if left_num < 0:\n                    break\n                # 如果存在重复的元素，前一个元素已经遍历了后一个元素与之后元素组合的所有可能\n                if i > begin and candidates[i] == candidates[i-1]:\n                    continue\n                path.append(candidates[i])\n                # 开始的 index 往后移了一格\n                self._find_path(candidates, path, res, left_num, i+1, size)\n                path.pop()\n"
        }
    ]
},
"trapping-rain-water":{
    "id": "42",
    "name": "trapping-rain-water",
    "pre": [
        {
            "text": "空间换时间",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "双指针",
            "link": null,
            "color": "green"
        },
        {
            "text": "单调栈",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "建模`h[i]=Math.min(左边柱子最大值,右边柱子最大值)`(h为下雨之后的水位)",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/42.trapping-rain-water.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/42.trapping-rain-water.md",
    "code": [
        {
            "language": "js",
            "text": "\nfor (let i = 0; i < height.length; i++) {\n  area += (h[i] - height[i]) * 1; // h为下雨之后的水位\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=42 lang=javascript\n *\n * [42] Trapping Rain Water\n *\n */\n/**\n * @param {number[]} height\n * @return {number}\n */\nvar trap = function (height) {\n  let max = 0;\n  let volume = 0;\n  const leftMax = [];\n  const rightMax = [];\n\n  for (let i = 0; i < height.length; i++) {\n    leftMax[i] = max = Math.max(height[i], max);\n  }\n\n  max = 0;\n\n  for (let i = height.length - 1; i >= 0; i--) {\n    rightMax[i] = max = Math.max(height[i], max);\n  }\n\n  for (let i = 0; i < height.length; i++) {\n    volume = volume + Math.min(leftMax[i], rightMax[i]) - height[i];\n  }\n\n  return volume;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nint trap(vector<int>& heights)\n{\n\tif(heights == null)\n\t\treturn 0;\n    int ans = 0;\n    int size = heights.size();\n    vector<int> left_max(size), right_max(size);\n    left_max[0] = heights[0];\n    for (int i = 1; i < size; i++) {\n        left_max[i] = max(heights[i], left_max[i - 1]);\n    }\n    right_max[size - 1] = heights[size - 1];\n    for (int i = size - 2; i >= 0; i--) {\n        right_max[i] = max(heights[i], right_max[i + 1]);\n    }\n    for (int i = 1; i < size - 1; i++) {\n        ans += min(left_max[i], right_max[i]) - heights[i];\n    }\n    return ans;\n}\n\n"
        },
        {
            "language": "cpp",
            "text": "\n\nclass Solution {\npublic:\n    int trap(vector<int>& heights)\n{\n    int left = 0, right = heights.size() - 1;\n    int ans = 0;\n    int left_max = 0, right_max = 0;\n    while (left < right) {\n        if (heights[left] < heights[right]) {\n            heights[left] >= left_max ? (left_max = heights[left]) : ans += (left_max - heights[left]);\n            ++left;\n        }\n        else {\n            heights[right] >= right_max ? (right_max = heights[right]) : ans += (right_max - heights[right]);\n            --right;\n        }\n    }\n    return ans;\n}\n\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def trap(self, heights: List[int]) -> int:\n        n = len(heights)\n        l, r = [0] * n, [0] * n\n        ans = 0\n        for i in range(1, len(heights)):\n            l[i] = max(l[i - 1], heights[i - 1])\n        for i in range(len(heights) - 2, 0, -1):\n            r[i] = max(r[i + 1], heights[i + 1])\n        for i in range(len(heights)):\n            ans += max(0, min(l[i], r[i]) - heights[i])\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def trap(self, heights: List[int]) -> int:\n        n = len(heights)\n        l_max = r_max = 0\n        l, r = 0, n - 1\n        ans = 0\n        while l < r:\n            if heights[l] < heights[r]:\n                if heights[l] < l_max:\n                    ans += l_max - heights[l]\n                else:\n                    l_max = heights[l]\n                l += 1\n            else:\n                if heights[r] < r_max:\n                    ans += r_max - heights[r]\n                else:\n                    r_max = heights[r]\n                r -= 1\n        return ans\n"
        }
    ]
},
"permutations":{
    "id": "46",
    "name": "permutations",
    "pre": [
        {
            "text": "回溯",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/backtrack.md",
            "color": "green"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/46.permutations.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/46.permutations.md",
    "code": [
        {
            "language": "js",
            "text": "\nfunction backtrack(list, tempList, nums) {\n  if (tempList.length === nums.length) return list.push([...tempList]);\n  for (let i = 0; i < nums.length; i++) {\n    if (tempList.includes(nums[i])) continue;\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums);\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar permute = function (nums) {\n  const list = [];\n  backtrack(list, [], nums);\n  return list;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\n    vector<vector<int>> ans;\n    void dfs(vector<int> &nums, int start) {\n        if (start == nums.size() - 1) {\n            ans.push_back(nums);\n            return;\n        }\n        for (int i = start; i < nums.size(); ++i) {\n            swap(nums[i], nums[start]);\n            dfs(nums, start + 1);\n            swap(nums[i], nums[start]);\n        }\n    }\npublic:\n    vector<vector<int>> permute(vector<int>& nums) {\n        dfs(nums, 0);\n        return ans;\n    }\n};\n"
        }
    ]
},
"permutations-ii":{
    "id": "47",
    "name": "permutations-ii",
    "pre": [
        {
            "text": "回溯",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/backtrack.md",
            "color": "green"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/47.permutations-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/47.permutations-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=47 lang=javascript\n *\n * [47] Permutations II\n */\nfunction backtrack(list, nums, tempList, visited) {\n  if (tempList.length === nums.length) return list.push([...tempList]);\n  for (let i = 0; i < nums.length; i++) {\n    // 和46.permutations的区别是这道题的nums是可以重复的\n    // 我们需要过滤这种情况\n    if (visited[i]) continue; // 同一个数字不能用两次\n    if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) continue; // 同样值的数字不能用两次\n\n    visited[i] = true;\n    tempList.push(nums[i]);\n    backtrack(list, nums, tempList, visited);\n    visited[i] = false;\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar permuteUnique = function (nums) {\n  const list = [];\n  backtrack(\n    list,\n    nums.sort((a, b) => a - b),\n    [],\n    []\n  );\n  return list;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\nprivate:\n  vector<vector<int>> ans;\n  void permute(vector<int> nums, int start) {\n    if (start == nums.size() - 1) {\n      ans.push_back(nums);\n      return;\n    }\n    for (int i = start; i < nums.size(); ++i) {\n      if (i != start && nums[i] == nums[start]) continue;\n      swap(nums[i], nums[start]);\n      permute(nums, start + 1);\n    }\n  }\npublic:\n  vector<vector<int>> permuteUnique(vector<int>& nums) {\n    sort(nums.begin(), nums.end());\n    permute(nums, 0);\n    return ans;\n  }\n};\n"
        }
    ]
},
"rotate-image":{
    "id": "48",
    "name": "rotate-image",
    "pre": [
        {
            "text": "原地算法",
            "link": null,
            "color": "orange"
        },
        {
            "text": "矩阵",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "矩阵旋转操作",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/48.rotate-image.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/48.rotate-image.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar rotate = function (matrix) {\n  // 时间复杂度O(n^2) 空间复杂度O(n)\n  const oMatrix = JSON.parse(JSON.stringify(matrix)); // clone\n  const n = oMatrix.length;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) {\n      matrix[j][n - i - 1] = oMatrix[i][j];\n    }\n  }\n};\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=48 lang=javascript\n *\n * [48] Rotate Image\n */\n/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar rotate = function (matrix) {\n  // 时间复杂度O(n^2) 空间复杂度O(1)\n\n  // 做法： 先沿着对角线翻转，然后沿着水平线翻转\n  const n = matrix.length;\n  function swap(arr, [i, j], [m, n]) {\n    const temp = arr[i][j];\n    arr[i][j] = arr[m][n];\n    arr[m][n] = temp;\n  }\n  for (let i = 0; i < n - 1; i++) {\n    for (let j = 0; j < n - i; j++) {\n      swap(matrix, [i, j], [n - j - 1, n - i - 1]);\n    }\n  }\n\n  for (let i = 0; i < n / 2; i++) {\n    for (let j = 0; j < n; j++) {\n      swap(matrix, [i, j], [n - i - 1, j]);\n    }\n  }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        int N = matrix.size();\n        for (int i = 0; i < N / 2; ++i) {\n            for (int j = i; j < N - i - 1; ++j) {\n                int tmp = matrix[i][j];\n                matrix[i][j] = matrix[N - j - 1][i];\n                matrix[N - j - 1][i] = matrix[N - i - 1][N - j - 1];\n                matrix[N - i - 1][N - j - 1] = matrix[j][N - i - 1];\n                matrix[j][N - i - 1] = tmp;\n            }\n        }\n    }\n};\n"
        }
    ]
},
"group-anagrams":{
    "id": "49",
    "name": "group-anagrams",
    "pre": [
        {
            "text": "哈希表",
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
            "text": "桶排序",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/49.group-anagrams.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/49.group-anagrams.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar groupAnagrams = function (strs) {\n  const hashTable = {};\n\n  function sort(str) {\n    return str.split(\"\").sort().join(\"\");\n  }\n\n  // 这个方法需要排序，因此不是很优，但是很直观，容易想到\n  for (let i = 0; i < strs.length; i++) {\n    const str = strs[i];\n    const key = sort(str);\n    if (!hashTable[key]) {\n      hashTable[key] = [str];\n    } else {\n      hashTable[key].push(str);\n    }\n  }\n\n  return Object.values(hashTable);\n};\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=49 lang=javascript\n *\n * [49] Group Anagrams\n */\n/**\n * @param {string[]} strs\n * @return {string[][]}\n */\nvar groupAnagrams = function (strs) {\n  // 类似桶排序\n\n  let counts = [];\n  const hashTable = {};\n  for (let i = 0; i < strs.length; i++) {\n    const str = strs[i];\n    counts = Array(26).fill(0);\n    for (let j = 0; j < str.length; j++) {\n      counts[str[j].charCodeAt(0) - \"a\".charCodeAt(0)]++;\n    }\n    const key = counts.join(\"-\");\n    if (!hashTable[key]) {\n      hashTable[key] = [str];\n    } else {\n      hashTable[key].push(str);\n    }\n  }\n\n  return Object.values(hashTable);\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& A) {\n        unordered_map<string, int> m;\n        vector<vector<string>> ans;\n        for (auto &s : A) {\n            auto p = s;\n            sort(p.begin(), p.end());\n            if (!m.count(p)) {\n                m[p] = ans.size();\n                ans.push_back({});\n            }\n            ans[m[p]].push_back(s);\n        }\n        return ans;\n    }\n};\n"
        }
    ]
},
"pow-x-n":{
    "id": "50",
    "name": "pow-x-n",
    "pre": [
        {
            "text": "递归",
            "link": null,
            "color": "orange"
        },
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/50.pow-x-n.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/50.pow-x-n.md",
    "code": [
        {
            "language": "cpp",
            "text": "\nclass Solution {\n    double myPow(double x, long n) {\n        if (n < 0) return 1 / myPow(x, -n);\n        if (n == 0) return 1;\n        if (n == 1) return x;\n        if (n == 2) return x * x;\n        return myPow(myPow(x, n / 2), 2) * (n % 2 ? x : 1);\n    }\npublic:\n    double myPow(double x, int n) {\n        return myPow(x, (long)n);\n    }\n};\n"
        },
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
            "text": "\nclass Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n == 0:\n            return 1\n        if n == 1:\n            return x\n        if n < 0:\n            return 1 / self.myPow(x, -n)\n        return self.myPow(x * x, n // 2) if n % 2 == 0 else x * self.myPow(x, n - 1)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n < 0:\n            return 1 / self.myPow(x, -n)\n        res = 1\n        while n:\n            if n & 1 == 1:\n                res *= x\n            x *= x\n            n >>= 1\n        return res\n"
        }
    ]
},
"N-Queens-II":{
    "id": "52",
    "name": "N-Queens-II",
    "pre": [
        {
            "text": "回溯",
            "link": null,
            "color": "green"
        },
        {
            "text": "深度优先遍历",
            "link": null,
            "color": "geekblue"
        }
    ],
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/52.N-Queens-II.md",
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
    "pre": [
        {
            "text": "滑动窗口",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md",
            "color": "purple"
        },
        {
            "text": "动态规划",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析1.暴力解，列举所有组合子序列首尾位置的组合，求解最大的子序列和,优化可以预先处理，得到前缀和2.分治法，每次从中间位置把数组分为左右中三部分，分别求出左右中（这里中是包括中间元素的子序列）最大和。对左右分别深度递归，三者中最大值即为当前最大子序列和。3.动态规划，找到状态转移方程，求到当前位置最大和。",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/53.maximum-sum-subarray-cn.md",
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
            "text": "\nclass MaximumSubarrayDP {\n  public int maxSubArray(int[] nums) {\n     int currMaxSum = nums[0];\n     int maxSum = nums[0];\n     for (int i = 1; i < nums.length; i++) {\n       currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);\n       maxSum = Math.max(maxSum, currMaxSum);\n     }\n     return maxSum;\n  }\n}\n"
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
            "text": "\nimport sys\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        maxSum = -sys.maxsize\n        sum = 0\n        for i in range(n):\n            sum = 0\n            for j in range(i, n):\n                sum += nums[j]\n                maxSum = max(maxSum, sum)\n\n        return maxSum\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        maxSum = nums[0]\n        minSum = sum = 0\n        for i in range(n):\n            sum += nums[i]\n            maxSum = max(maxSum, sum - minSum)\n            minSum = min(minSum, sum)\n\n        return maxSum\n"
        },
        {
            "language": "py",
            "text": "\nimport sys\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        return self.helper(nums, 0, len(nums) - 1)\n    def helper(self, nums, l, r):\n        if l > r:\n            return -sys.maxsize\n        mid = (l + r) // 2\n        left = self.helper(nums, l, mid - 1)\n        right = self.helper(nums, mid + 1, r)\n        left_suffix_max_sum = right_prefix_max_sum = 0\n        sum = 0\n        for i in reversed(range(l, mid)):\n            sum += nums[i]\n            left_suffix_max_sum = max(left_suffix_max_sum, sum)\n        sum = 0\n        for i in range(mid + 1, r + 1):\n            sum += nums[i]\n            right_prefix_max_sum = max(right_prefix_max_sum, sum)\n        cross_max_sum = left_suffix_max_sum + right_prefix_max_sum + nums[mid]\n        return max(cross_max_sum, left, right)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        max_sum_ending_curr_index = max_sum = nums[0]\n        for i in range(1, n):\n            max_sum_ending_curr_index = max(max_sum_ending_curr_index + nums[i], nums[i])\n            max_sum = max(max_sum_ending_curr_index, max_sum)\n\n        return max_sum\n"
        }
    ]
},
"jump-game":{
    "id": "55",
    "name": "jump-game",
    "pre": [
        {
            "text": "贪心",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/greedy.md",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "记录和更新当前位置能够到达的最大的索引",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/55.jump-game.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/55.jump-game.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public boolean canJump(int[] nums) {\n        int n=nums.length;\n        int k=0;\n        for(int i=0;i<n;i++)\n        {\n            if(i>k){\n                return false;\n            }\n            // 能跳到最后一个位置\n            if(k>=n-1){\n                return true;\n            }\n            // 从当前位置能跳的最远的位置\n            k = Math.max(k, i+nums[i]);\n        }\n        return k >= n-1;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar canJump = function (nums) {\n  let max = 0; // 能够走到的数组下标\n\n  for (let i = 0; i < nums.length; i++) {\n    if (max < i) return false; // 当前这一步都走不到，后面更走不到了\n    max = Math.max(nums[i] + i, max);\n  }\n\n  return max >= nums.length - 1;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        int n=nums.size();\n        int k=0;\n        for(int i=0;i<n;i++)\n        {\n            if(i>k){\n                return false;\n            }\n            // 能跳到最后一个位置\n            if(k>=n-1){\n                return true;\n            }\n            // 从当前位置能跳的最远的位置\n            k = max(k, i+nums[i]);\n        }\n        return k >= n-1;\n    }\n};\n"
        }
    ]
},
"merge-intervals":{
    "id": "56",
    "name": "merge-intervals",
    "pre": [
        {
            "text": "排序",
            "link": null,
            "color": "purple"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/56.merge-intervals.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/56.merge-intervals.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=56 lang=javascript\n *\n * [56] Merge Intervals\n */\n/**\n * @param {number[][]} intervals\n * @return {number[][]}\n */\n\nfunction intersected(a, b) {\n  if (a[0] > b[1] || a[1] < b[0]) return false;\n  return true;\n}\n\nfunction mergeTwo(a, b) {\n  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];\n}\nvar merge = function (intervals) {\n  // 这种算法需要先排序\n  intervals.sort((a, b) => a[0] - b[0]);\n  for (let i = 0; i < intervals.length - 1; i++) {\n    const cur = intervals[i];\n    const next = intervals[i + 1];\n\n    if (intersected(cur, next)) {\n      intervals[i] = undefined;\n      intervals[i + 1] = mergeTwo(cur, next);\n    }\n  }\n  return intervals.filter((q) => q);\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, intervals, cut):\n        ans = []\n        for s, e in intervals:\n            if s < cut[0]: ans.append([s, min(e, cut[0])])\n            if cut[1] < e: ans.append([max(s, cut[1]), e])\n        return ans\n"
        }
    ]
},
"insert-interval":{
    "id": "57",
    "name": "insert-interval",
    "pre": [
        {
            "text": "排序",
            "link": null,
            "color": "purple"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/57.insert-interval.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/57.insert-interval.md",
    "code": [
        {
            "language": "py",
            "text": "\n\n\nclass Solution:\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\n        intervals.append(newInterval)\n        intervals.sort(key=lambda a: a[0])\n\n        def intersected(a, b):\n            if a[0] > b[1] or a[1] < b[0]:\n                return False\n            return True\n\n        def mergeTwo(a, b):\n            return [min(a[0], b[0]), max(a[1], b[1])]\n\n        i = 0\n        while i < len(intervals) - 1:\n            cur = intervals[i]\n            next = intervals[i + 1]\n            if intersected(cur, next):\n                intervals[i] = None\n                intervals[i + 1] = mergeTwo(cur, next)\n            i += 1\n\n        return list(filter(lambda x: x, intervals))\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\n        i, n = 0, len(intervals)\n        ans = []\n\n        def intersected(a, b):\n            if a[0] > b[1] or a[1] < b[0]:\n                return False\n            return True\n        # 前\n        while i < n and intervals[i][1] < newInterval[0]:\n            ans.append(intervals[i])\n            i += 1\n        # 中\n        while i < n and intersected(intervals[i], newInterval):\n            newInterval = [min(intervals[i][0], newInterval[0]),\n                           max(intervals[i][1], newInterval[1])]\n            i += 1\n        ans.append(newInterval)\n        # 后\n        while i < n:\n            ans.append(intervals[i])\n            i += 1\n        return ans\n"
        }
    ]
},
"permutation-sequence":{
    "id": "60",
    "name": "permutation-sequence",
    "pre": [
        {
            "text": "数学",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "回溯",
            "link": null,
            "color": "green"
        },
        {
            "text": "factorial",
            "link": null,
            "color": "orange"
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
            "name": "Twitter"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/60.permutation-sequence.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/60.permutation-sequence.md",
    "code": [
        {
            "language": "py",
            "text": "\nimport math\n\nclass Solution:\n    def getPermutation(self, n: int, k: int) -> str:\n        res = \"\"\n        candidates = [str(i) for i in range(1, n + 1)]\n\n        while n != 0:\n            facto = math.factorial(n - 1)\n            # i 表示前面被我们排除的组数，也就是k所在的组的下标\n            # k // facto 是不行的， 比如在 k % facto == 0的情况下就会有问题\n            i = math.ceil(k / facto) - 1\n            # 我们把candidates[i]加入到结果集，然后将其弹出candidates（不能重复使用元素）\n            res += candidates[i]\n            candidates.pop(i)\n            # k 缩小了 facto *  i\n            k -= facto * i\n            # 每次迭代我们实际上就处理了一个元素，n 减去 1，当n == 0 说明全部处理完成，我们退出循环\n            n -= 1\n        return res\n"
        }
    ]
},
"Rotate-List":{
    "id": "61",
    "name": "Rotate-List",
    "pre": [
        {
            "text": "求单链表的倒数第 N 个节点",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/61.Rotate-List.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/61.Rotate-List.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public ListNode rotateRight(ListNode head, int k) {\n        if(head == null || head.next == null) return head;\n        int count = 0;\n        ListNode now = head;\n        while(now != null){\n            now = now.next;\n            count++;\n        }\n        k = k % count;\n        ListNode slow = head, fast = head;\n        while(fast.next != null){\n            if(k-- <= 0){\n                slow = slow.next;\n            }\n            fast = fast.next;\n        }\n        fast.next = head;\n        ListNode res = slow.next;\n        slow.next = null;\n        return res;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n快指针 = head;\n慢指针 = head;\nwhile (快指针.next) {\n  if (N-- <= 0) {\n    慢指针 = 慢指针.next;\n  }\n  快指针 = 快指针.next;\n}\n"
        },
        {
            "language": "js",
            "text": "\nlet slow = (fast = head);\nwhile (fast.next) {\n  if (k-- <= 0) {\n    slow = slow.next;\n  }\n  fast = fast.next;\n}\n"
        },
        {
            "language": "js",
            "text": "\n  获取链表的长度\n  k = k % 链表的长度\n  获取倒数第k + 1,倒数第K个节点与链表尾节点\n  倒数第k + 1个节点.next = null\n  链表尾节点.next = head\n  return 倒数第k个节点\n"
        },
        {
            "language": "js",
            "text": "\nvar rotateRight = function (head, k) {\n  if (!head || !head.next) return head;\n  let count = 0,\n    now = head;\n  while (now) {\n    now = now.next;\n    count++;\n  }\n  k = k % count;\n  let slow = (fast = head);\n  while (fast.next) {\n    if (k-- <= 0) {\n      slow = slow.next;\n    }\n    fast = fast.next;\n  }\n  fast.next = head;\n  let res = slow.next;\n  slow.next = null;\n  return res;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\n    int getLength(ListNode *head) {\n        int len = 0;\n        for (; head; head = head->next, ++len);\n        return len;\n    }\npublic:\n    ListNode* rotateRight(ListNode* head, int k) {\n        if (!head) return NULL;\n        int len = getLength(head);\n        k %= len;\n        if (k == 0) return head;\n        auto p = head, q = head;\n        while (k--) q = q->next;\n        while (q->next) {\n            p = p->next;\n            q = q->next;\n        }\n        auto h = p->next;\n        q->next = head;\n        p->next = NULL;\n        return h;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def rotateRight(self, head: ListNode, k: int) -> ListNode:\n        # 双指针\n        if head:\n            p1 = head\n            p2 = head\n            count = 1\n            i = 0\n            while i < k:\n                if p2.next:\n                    count += 1\n                    p2 = p2.next\n                else:\n                    k = k % count\n                    i = -1\n                    p2 = head\n                i += 1\n\n            while p2.next:\n                p1 = p1.next\n                p2 = p2.next\n\n            if p1.next:\n                tmp = p1.next\n            else:\n                return head\n            p1.next = None\n            p2.next = head\n            return tmp\n"
        }
    ]
},
"unique-paths":{
    "id": "62",
    "name": "unique-paths",
    "pre": [
        {
            "text": "排列组合",
            "link": null,
            "color": "green"
        },
        {
            "text": "动态规划",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "排列组合原理",
            "link": null,
            "color": "blue"
        },
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/62.unique-paths.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/62.unique-paths.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=62 lang=javascript\n *\n * [62] Unique Paths\n *\n * https://leetcode.com/problems/unique-paths/description/\n */\n/**\n * @param {number} m\n * @param {number} n\n * @return {number}\n */\nvar uniquePaths = function (m, n) {\n  const dp = Array(n).fill(1);\n\n  for (let i = 1; i < m; i++) {\n    for (let j = 1; j < n; j++) {\n      dp[j] = dp[j] + dp[j - 1];\n    }\n  }\n\n  return dp[n - 1];\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        vector<int> dp(n + 1, 0);\n        dp[n - 1] = 1;\n        for (int i = m - 1; i >= 0; --i) {\n            for (int j = n - 1; j >= 0; --j) dp[j] += dp[j + 1];\n        }\n        return dp[0];\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        d = [[1] * n for _ in range(m)]\n\n        for col in range(1, m):\n            for row in range(1, n):\n                d[col][row] = d[col - 1][row] + d[col][row - 1]\n\n        return d[m - 1][n - 1]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n\n    @lru_cache\n    def uniquePaths(self, m: int, n: int) -> int:\n        if m == 1 or n == 1:\n            return 1\n        return self.uniquePaths(m - 1, n) + self.uniquePaths(m, n - 1)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n\n    def uniquePaths(self, m: int, n: int) -> int:\n        dp = [1] * n\n        for _ in range(1, m):\n            for j in range(1, n):\n                dp[j] += dp[j - 1]\n        return dp[n - 1]\n"
        }
    ]
},
"unique-paths-ii":{
    "id": "63",
    "name": "unique-paths-ii",
    "pre": [
        {
            "text": "动态规划",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/63.unique-paths-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/63.unique-paths-ii.md",
    "code": [
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {\n        int M = obstacleGrid.size(), N = obstacleGrid[0].size();\n        vector<int> memo(N, 0);\n        memo[N - 1] = 1;\n        for (int i = M - 1; i >= 0; --i) {\n            for (int j = N - 1; j >= 0; --j) {\n                if (obstacleGrid[i][j] == 1) memo[j] = 0;\n                else memo[j] += j == N - 1 ? 0 : memo[j + 1];\n            }\n        }\n        return memo[0];\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:\n        m = len(obstacleGrid)\n        if m == 0: return 0\n        n = len(obstacleGrid[0])\n        @lru_cache(None)\n        def dfs(i, j):\n            if i < 0 or i >= m or j < 0 or j >= n: return 0\n            if obstacleGrid[i][j] == 1: return 0\n            if i == 0 and j == 0: return 1\n            return dfs(i - 1, j) + dfs(i, j - 1)\n        return dfs(m - 1, n - 1)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:\n        m = len(obstacleGrid)\n        n = len(obstacleGrid[0])\n        if obstacleGrid[0][0]:\n            return 0\n\n        dp = [[0] * (n + 1) for _ in range(m + 1)]\n        dp[1][1] = 1\n\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                if i == 1 and j == 1:\n                    continue\n                if obstacleGrid[i - 1][j - 1] == 0:\n                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1]\n                else:\n                    dp[i][j] = 0\n        return dp[m][n]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:\n        m = len(obstacleGrid)\n        n = len(obstacleGrid[0])\n        if obstacleGrid[0][0]:\n            return 0\n\n        dp = [0] * (n + 1)\n        dp[1] = 1\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                if obstacleGrid[i - 1][j - 1] == 0:\n                    dp[j] += dp[j - 1]\n                else:\n                    dp[j] = 0\n        return dp[-1]\n"
        }
    ]
},
"valid-number":{
    "id": "65",
    "name": "valid-number",
    "pre": [
        {
            "text": "暂无",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "分析非法的情况，用三个变量记录上一次出现的点，指数，数字的位置来复制判断",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/65.valid-number.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/65.valid-number.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def isNumber(self, s: str) -> bool:\n        last_dot = last_e = last_d = -1\n        for i, c in enumerate(s):\n            if c.isdigit():\n                last_d = i\n            elif c == '.':\n                if last_dot != -1 or last_e != -1: return False\n                last_dot = i\n            elif c.lower() == 'e':\n                if last_d == -1 or last_e != -1: return False\n                last_e = i\n            elif c == '+' or c == '-':\n                if i == 0 or s[i-1].lower() == 'e':\n                    continue\n                else:\n                    return False\n            else:\n                return False\n\n        return s[-1].isdigit() or (s[-1] == '.' and last_d != -1)\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def isNumber(self, s: str) -> bool:\n        # 任何状态机的核心都是建立如下的状态机模型\n        states = {\n            \"start\": {\"SIGN\":\"sign1\",  \"DIGIT\":\"digit1\",  \"DOT\":\"dot1\"},\n            \"sign1\": {\"DIGIT\":\"digit1\",  \"DOT\":\"dot1\"},\n            \"sign2\": {\"DIGIT\":\"D\"},\n            \"digit1\": {\"DIGIT\":\"digit1\",  \"DOT\":\"dot2\",  \"EXP\":\"exp\",  \"END\": True},\n            \"digit2\": {\"DIGIT\":\"digit2\",  \"EXP\":\"exp\",  \"END\": True},\n            \"dot1\": {\"DIGIT\":\"digit2\"}, # 前面没数字\n            \"dot2\": {\"DIGIT\":\"digit2\",  \"EXP\":\"exp\",  \"END\": True}, # 前面有数字\n            \"exp\": {\"SIGN\":\"sign2\",  \"DIGIT\":\"D\"},\n            \"D\": {\"DIGIT\":\"D\",  \"END\": True}\n        }\n\n        def get(ch):\n            if ch == \".\": return \"DOT\"\n            elif ch in \"+-\": return \"SIGN\"\n            elif ch in \"Ee\": return \"EXP\"\n            elif ch.isdigit(): return \"DIGIT\"\n\n        state = \"start\"\n        for c in s:\n            state = states[state].get(get(c))\n            if not state: return False\n\n        return \"END\" in states[state]\n\n"
        }
    ]
},
"plus-one":{
    "id": "66",
    "name": "plus-one",
    "pre": [
        {
            "text": "数组的遍历(正向遍历和反向遍历)",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/66.plus-one.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/66.plus-one.md",
    "code": [
        {
            "language": "java",
            "text": "\nfor(int i = n - 1; i > - 1; i --) {\n  内部逻辑\n}\n\n"
        },
        {
            "language": "js",
            "text": "\n// 首先我们要从数组的最后一位开始我们的计算得出我们新的sum\nsum = arr[arr.length - 1] + 1\n\n// 接下来我们需要判断这个新的sum是否超过9\nsum > 9 ?\n\n// 假如大于 9, 那么我们会更新这一位为 0 并且将carry值更改为1\ncarry = 1\narr[i] = 0\n\n// 假如不大于 9，更新最后一位为sum并直接返回数组\narr[arr.length - 1] = sum\nreturn arr\n\n// 接着我们要继续向数组的倒数第二位重复进行我们上一步的操作\n...\n\n// 当我们完成以后，如果数组第一位时的sum大于0，那么我们就要给数组的首位增添一个1\nresult = new array with size of arr.length + 1\nresult[0] = 1\nresult[1] ...... result[result.length - 1]  = 0\n"
        },
        {
            "language": "js",
            "text": "\nvar plusOne = function (digits) {\n  var carry = 1; // 我们将初始的 +1 也当做是一个在个位的 carry\n  for (var i = digits.length - 1; i > -1; i--) {\n    if (carry) {\n      var sum = carry + digits[i];\n      digits[i] = sum % 10;\n      carry = sum > 9 ? 1 : 0; // 每次计算都会更新下一步需要用到的 carry\n    }\n  }\n  if (carry === 1) {\n    digits.unshift(1); // 如果carry最后停留在1，说明有需要额外的一个长度 所以我们就在首位增添一个 1\n  }\n  return digits;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    vector<int> plusOne(vector<int>& A) {\n        int i = A.size() - 1, carry = 1;\n        for (; i >= 0 && carry; --i) {\n            carry += A[i];\n            A[i] = carry % 10;\n            carry /= 10;\n        }\n        if (carry) A.insert(begin(A), carry);\n        return A;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def plusOne(self, digits: List[int]) -> List[int]:\n        carry = 1\n        for i in range(len(digits) - 1, -1, -1):\n            digits[i], carry = (carry + digits[i]) % 10, (carry + digits[i]) // 10\n        return [carry] + digits if carry else digits\n"
        }
    ]
},
"set-matrix-zeroes":{
    "id": "73",
    "name": "set-matrix-zeroes",
    "pre": [
        {
            "text": "状态压缩",
            "link": null,
            "color": "green"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/73.set-matrix-zeroes.md",
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
    "pre": [
        {
            "text": "荷兰国旗问题",
            "link": "https://en.wikipedia.org/wiki/Dutch_national_flag_problem",
            "color": "purple"
        },
        {
            "text": "排序",
            "link": null,
            "color": "purple"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/75.sort-colors.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/75.sort-colors.md",
    "code": [
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        int r = 0, g = 0, b = 0;\n        for (int n : nums) {\n            if (n == 0) {\n                nums[b++] = 2;\n                nums[g++] = 1;\n                nums[r++] = 0;\n            } else if (n == 1) {\n                nums[b++] = 2;\n                nums[g++] = 1;\n            } else nums[b++] = 2;\n        }\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def sortColors(self, nums: List[int]) -> None:\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        \"\"\"\n        p0 = cur = 0\n        p2 = len(nums) - 1\n\n        while cur <= p2:\n            if nums[cur] == 0:\n                nums[cur], nums[p0] = nums[p0], nums[cur]\n                p0 += 1\n                cur += 1\n            elif nums[cur] == 2:\n                nums[cur], nums[p2] = nums[p2], nums[cur]\n                p2 -= 1\n            else:\n                cur += 1\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def partition(self, head: ListNode, x: int) -> ListNode:\n        l1 = cur = head\n        while cur:\n            if cur.val < x:\n                cur.val, l1.val = l1.val, cur.val\n                l1 = l1.next\n            cur = cur.next\n        return head\n"
        }
    ]
},
"subsets":{
    "id": "78",
    "name": "subsets",
    "pre": [
        {
            "text": "回溯",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/backtrack.md",
            "color": "green"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/78.subsets.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/78.subsets.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    // 结果\n    List<List<Integer>> res = new ArrayList();\n    public List<List<Integer>> subsets(int[] nums) {\n        backtrack(nums, 0, new ArrayList<Integer>());\n        return res;\n    }\n\n    public void backtrack(int[] nums, int start, ArrayList<Integer> track)\n    {\n        // 注意：深拷贝\n        res.add(new ArrayList(track));\n        for(int i=start; i<nums.length;i++)\n        {\n            // 做选择\n            track.add(nums[i]);\n            // 回溯\n            backtrack(nums, i+1, track);\n            // 撤销选择\n            track.remove(track.size()-1);\n        }\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction backtrack(list, tempList, nums, start) {\n  list.push([...tempList]);\n  for (let i = start; i < nums.length; i++) {\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums, i + 1);\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsets = function (nums) {\n  const list = [];\n  backtrack(list, [], nums, 0);\n  return list;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def subsets(self, nums):\n        self.res = []\n        self.track = []\n        self.backtrack(nums, 0, self.track)\n\n        return self.res\n\n    def backtrack(self, nums, start, track):\n        # 注意深拷贝\n        self.res.append(list(self.track))\n        for i in range(start, len(nums)):\n            # 做选择\n            self.track.append(nums[i])\n            # 回溯\n            self.backtrack(nums, i+1, self.track)\n            # 撤销选择\n            self.track.pop()\n"
        }
    ]
},
"word-search":{
    "id": "79",
    "name": "word-search",
    "pre": [
        {
            "text": "回溯",
            "link": null,
            "color": "green"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/79.word-search.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/79.word-search.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class LC79WordSearch {\n  public boolean exist(char[][] board, String word) {\n    if (board == null || word == null) return false;\n    if (word.length() == 0) return true;\n    if (board.length == 0) return false;\n    int rows = board.length;\n    int cols = board[0].length;\n    for (int r = 0; r < rows; r++) {\n      for (int c = 0; c < cols; c++) {\n        // scan board, start with word first character\n        if (board[r][c] == word.charAt(0)) {\n          if (helper(board, word, r, c, 0)) {\n            return true;\n          }\n        }\n      }\n    }\n    return false;\n  }\n\n  private boolean helper(char[][] board, String word, int r, int c, int start) {\n    // already match word all characters, return true\n    if (start == word.length()) return true;\n    if (!isValid(board, r, c) ||\n        board[r][c] != word.charAt(start)) return false;\n    // mark visited\n    board[r][c] = '*';\n    boolean res = helper(board, word, r - 1, c, start + 1) // 上\n        ||  helper(board, word, r + 1, c, start + 1)       // 下\n        ||  helper(board, word, r, c - 1, start + 1)       // 左\n        ||  helper(board, word, r, c + 1, start + 1);      // 右\n    // backtracking to start position\n    board[r][c] = word.charAt(start);\n    return res;\n  }\n\n  private boolean isValid(char[][] board, int r, int c) {\n    return r >= 0 && r < board.length && c >= 0 && c < board[0].length;\n  }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=79 lang=javascript\n *\n * [79] Word Search\n */\nfunction DFS(board, row, col, rows, cols, word, cur) {\n  // 边界检查\n  if (row >= rows || row < 0) return false;\n  if (col >= cols || col < 0) return false;\n\n  const item = board[row][col];\n\n  if (item !== word[cur]) return false;\n\n  if (cur + 1 === word.length) return true;\n\n  // 如果你用hashmap记录访问的字母， 那么你需要每次backtrack的时候手动清除hashmap，并且需要额外的空间\n  // 这里我们使用一个little trick\n\n  board[row][col] = null;\n\n  // 上下左右\n  const res =\n    DFS(board, row + 1, col, rows, cols, word, cur + 1) ||\n    DFS(board, row - 1, col, rows, cols, word, cur + 1) ||\n    DFS(board, row, col - 1, rows, cols, word, cur + 1) ||\n    DFS(board, row, col + 1, rows, cols, word, cur + 1);\n\n  board[row][col] = item;\n\n  return res;\n}\n/**\n * @param {character[][]} board\n * @param {string} word\n * @return {boolean}\n */\nvar exist = function (board, word) {\n  if (word.length === 0) return true;\n  if (board.length === 0) return false;\n\n  const rows = board.length;\n  const cols = board[0].length;\n\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      const hit = DFS(board, i, j, rows, cols, word, 0);\n      if (hit) return true;\n    }\n  }\n  return false;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        m = len(board)\n        n = len(board[0])\n\n        def dfs(board, r, c, word, index):\n            if index == len(word):\n                return True\n            if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[index]:\n                return False\n            board[r][c] = '*'\n            res = dfs(board, r - 1, c, word, index + 1) or dfs(board, r + 1, c, word, index + 1) or dfs(board, r, c - 1, word, index + 1) or dfs(board, r, c + 1, word, index + 1)\n            board[r][c] = word[index]\n            return res\n\n        for r in range(m):\n            for c in range(n):\n                if board[r][c] == word[0]:\n                    if dfs(board, r, c, word, 0):\n                        return True\n        return False\n"
        }
    ]
},
"remove-duplicates-from-sorted-array-ii":{
    "id": "80",
    "name": "remove-duplicates-from-sorted-array-ii",
    "pre": [
        {
            "text": "双指针",
            "link": null,
            "color": "green"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/80.remove-duplicates-from-sorted-array-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/80.remove-duplicates-from-sorted-array-ii.md",
    "code": [
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        int i = 0;\n        int k = 2;\n        for (int num : nums) {\n            if (i < k || num != nums[i - k]) {\n                nums[i] = num;\n                i++;\n            }\n        }\n        return i;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        # 写指针\n        i = 0\n        K = 2\n        for num in nums:\n            if i < K or num != nums[i-K]:\n                nums[i] = num\n                i += 1\n        return i\n"
        }
    ]
},
"largest-rectangle-in-histogram":{
    "id": "84",
    "name": "largest-rectangle-in-histogram",
    "pre": [
        {
            "text": "单调栈",
            "link": null,
            "color": "purple"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/84.largest-rectangle-in-histogram.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/84.largest-rectangle-in-histogram.md",
    "code": [
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int largestRectangleArea(vector<int>& A) {\n        A.push_back(0);\n        int N = A.size(), ans = 0;\n        stack<int> s;\n        for (int i = 0; i < N; ++i) {\n            while (s.size() && A[s.top()] >= A[i]) {\n                int h = A[s.top()];\n                s.pop();\n                int j = s.size() ? s.top() : -1;\n                ans = max(ans, h * (i - j - 1));\n            }\n            s.push(i);\n        }\n        return ans;\n    }\n};\n"
        },
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
            "text": "\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n, heights, st, ans = len(heights),[0] + heights + [0], [], 0\n        for i in range(n + 2):\n            while st and heights[st[-1]] > heights[i]:\n                a = heights[st[-1]]\n                st.pop()\n                # 如果没有前面的哨兵，这里的 st[-1] 可能会越界。\n                ans = max(ans, a * (i - 1 - st[-1]))\n            st.append(i)\n        return ans\n"
        }
    ]
},
"maximal-rectangle":{
    "id": "85",
    "name": "maximal-rectangle",
    "pre": [
        {
            "text": "单调栈",
            "link": null,
            "color": "purple"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/85.maximal-rectangle.md",
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
    "pre": [
        {
            "text": "链表",
            "link": null,
            "color": "magenta"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/86.partition-list.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/86.partition-list.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {ListNode} head\n * @param {number} x\n * @return {ListNode}\n */\nvar partition = function (head, x) {\n  const dummyHead1 = {\n    next: null,\n  };\n  const dummyHead2 = {\n    next: null,\n  };\n\n  let current = {\n    next: head,\n  };\n  let currentL1 = dummyHead1;\n  let currentL2 = dummyHead2;\n  while (current.next) {\n    current = current.next;\n    if (current.val < x) {\n      currentL1.next = current;\n      currentL1 = current;\n    } else {\n      currentL2.next = current;\n      currentL2 = current;\n    }\n  }\n\n  currentL2.next = null;\n\n  currentL1.next = dummyHead2.next;\n\n  return dummyHead1.next;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    ListNode* partition(ListNode* head, int x) {\n        ListNode dummy, geHead, *ltTail = &dummy, *geTail = &geHead;\n        while (head) {\n            auto p = head;\n            head = head->next;\n            if (p->val < x) {\n                ltTail->next = p;\n                ltTail = p;\n            } else {\n                geTail->next = p;\n                geTail = p;\n            }\n        }\n        ltTail->next = geHead.next;\n        geTail->next = NULL;\n        return dummy.next;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def partition(self, head: ListNode, x: int) -> ListNode:\n        \"\"\"在原链表操作，思路基本一致，只是通过指针进行区分而已\"\"\"\n        # 在链表最前面设定一个初始node作为锚点，方便返回最后的结果\n        first_node = ListNode(0)\n        first_node.next = head\n        # 设计三个指针，一个指向小于x的最后一个节点，即前后分离点\n        # 一个指向当前遍历节点的前一个节点\n        # 一个指向当前遍历的节点\n        sep_node = first_node\n        pre_node = first_node\n        current_node = head\n\n        while current_node is not None:\n            if current_node.val < x:\n                # 注意有可能出现前一个节点就是分离节点的情况\n                if pre_node is sep_node:\n                    pre_node = current_node\n                    sep_node = current_node\n                    current_node = current_node.next\n                else:\n                    # 这段次序比较烧脑\n                    pre_node.next = current_node.next\n                    current_node.next = sep_node.next\n                    sep_node.next = current_node\n                    sep_node = current_node\n                    current_node = pre_node.next\n            else:\n                pre_node = current_node\n                current_node = pre_node.next\n\n        return first_node.next\n"
        }
    ]
},
"scramble-string":{
    "id": "87",
    "name": "scramble-string",
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
            "text": "将其抽象为树的对比问题",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/87.scramble-string.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/87.scramble-string.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def flipEquiv(self, root1: TreeNode, root2: TreeNode) -> bool:\n        if not root1 or not root2:\n            return not root1 and not root2\n        if root1.val != root2.val:\n            return False\n        # 不翻转\n        if self.flipEquiv(root1.left, root2.left) and self.flipEquiv(root1.right, root2.right):\n            return True\n        # 翻转\n        if self.flipEquiv(root1.left, root2.right) and self.flipEquiv(root1.right, root2.left):\n            return True\n        # 不管翻转还是不翻转都不行，直接返回 False\n        return False\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    @lru_cache(None)\n    def isScramble(self, s1: str, s2: str) -> bool:\n        if s1 == s2:\n            return True\n        # 剪枝\n        if collections.Counter(s1) != collections.Counter(s2):\n            return False\n        # 枚举所有可能的根节点\n        for i in range(1, len(s1)):\n            # ----|-\n            # -|----\n            # 不进行翻转\n            if self.isScramble(s1[:i], s2[:i]) and self.isScramble(s1[i:], s2[i:]):\n                return True\n            # 进行翻转\n            if self.isScramble(s1[i:], s2[:-i]) and self.isScramble(s1[:i], s2[-i:]):\n                return True\n        # 不管翻转还是不翻转都不行，直接返回 False\n        return False\n\n\n"
        }
    ]
},
"merge-sorted-array":{
    "id": "88",
    "name": "merge-sorted-array",
    "pre": [
        {
            "text": "归并排序",
            "link": null,
            "color": "cyan"
        }
    ],
    "keyPoints": [
        {
            "text": "从后往前比较，并从后往前插入，这样可避免写指针影响，同时将空间复杂度降低到$O(1)$",
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
            "name": "loomberg"
        },
        {
            "name": "facebook"
        },
        {
            "name": "microsoft"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/88.merge-sorted-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/88.merge-sorted-array.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        int i=m-1, j=n-1, k=m+n-1;\n        // 合并\n        while(i>=0 && j>=0)\n        {\n            if(nums1[i] > nums2[j])\n            {\n                nums1[k--] = nums1[i--];\n            }\n            else\n            {\n                nums1[k--] = nums2[j--];\n            }\n        }\n        // 合并剩余的nums2\n        while(j>=0)\n        {\n            nums1[k--] = nums2[j--];\n        }\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n// 这种解法连m都用不到\n// 这显然不是出题人的意思\nif (n === 0) return;\nlet current2 = 0;\nfor (let i = nums1.length - 1; i >= nums1.length - n; i--) {\n  nums1[i] = nums2[current2++];\n}\nnums1.sort((a, b) => a - b); // 当然你可以自己写排序，这里懒得写了，因为已经偏离了题目本身\n"
        },
        {
            "language": "js",
            "text": "\n// 将nums1 和 nums2 合并\nfunction merge(nums1, nums2) {\n  let ret = [];\n  let i = (j = 0);\n  while (i < nums1.length || j < nums2.length) {\n    if (i === nums1.length) {\n      ret.push(nums2[j]);\n      j++;\n      continue;\n    }\n\n    if (j === nums2.length) {\n      ret.push(nums1[i]);\n      i++;\n      continue;\n    }\n    const a = nums1[i];\n    const b = nums2[j];\n    if (a > b) {\n      ret.push(nums2[j]);\n      j++;\n    } else {\n      ret.push(nums1[i]);\n      i++;\n    }\n  }\n  return ret;\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar merge = function (nums1, m, nums2, n) {\n  // 设置一个指针，指针初始化指向nums1的末尾（根据#62，应该是index为 m+n-1 的位置，因为nums1的长度有可能更长）\n  // 然后不断左移指针更新元素\n  let current = m + n - 1;\n\n  while (current >= 0) {\n    // 没必要继续了\n    if (n === 0) return;\n\n    // 为了方便大家理解，这里代码有点赘余\n    if (m < 1) {\n      nums1[current--] = nums2[--n];\n      continue;\n    }\n\n    if (n < 1) {\n      nums1[current--] = nums1[--m];\n      continue;\n    }\n    // 取大的填充 nums1的末尾\n    // 然后更新 m 或者 n\n    if (nums1[m - 1] > nums2[n - 1]) {\n      nums1[current--] = nums1[--m];\n    } else {\n      nums1[current--] = nums2[--n];\n    }\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        \"\"\"\n        Do not return anything, modify nums1 in-place instead.\n        \"\"\"\n        pos = m + n - 1\n        while m > 0 and n > 0:\n            if nums1[m - 1] < nums2[n - 1]:\n                nums1[pos] = nums2[n - 1]\n                n -= 1\n            else:\n                nums1[pos] = nums1[m - 1]\n                m -= 1\n            pos -= 1\n        while n > 0:\n            nums1[pos] = nums2[n - 1]\n            n -= 1\n            pos -= 1\n\n"
        }
    ]
},
"subsets-ii":{
    "id": "90",
    "name": "subsets-ii",
    "pre": [
        {
            "text": "回溯",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/backtrack.md",
            "color": "green"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/90.subsets-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/90.subsets-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\nfunction backtrack(list, tempList, nums, start) {\n  list.push([...tempList]);\n  for (let i = start; i < nums.length; i++) {\n    // 和78.subsets的区别在于这道题nums可以有重复\n    // 因此需要过滤这种情况\n    if (i > start && nums[i] === nums[i - 1]) continue;\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums, i + 1);\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsetsWithDup = function (nums) {\n  const list = [];\n  backtrack(\n    list,\n    [],\n    nums.sort((a, b) => a - b),\n    0,\n    []\n  );\n  return list;\n};\n"
        }
    ]
},
"decode-ways":{
    "id": "91",
    "name": "decode-ways",
    "pre": [
        {
            "text": "爬楼梯问题",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "动态规划",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/91.decode-ways.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/91.decode-ways.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {string} s\n * @return {number}\n */\nvar numDecodings = function (s) {\n  if (s == null || s.length == 0) {\n    return 0;\n  }\n  const dp = Array(s.length + 1).fill(0);\n  dp[0] = 1;\n  dp[1] = s[0] !== \"0\" ? 1 : 0;\n  for (let i = 2; i < s.length + 1; i++) {\n    const one = +s.slice(i - 1, i);\n    const two = +s.slice(i - 2, i);\n\n    if (two >= 10 && two <= 26) {\n      dp[i] = dp[i - 2];\n    }\n\n    if (one >= 1 && one <= 9) {\n      dp[i] += dp[i - 1];\n    }\n  }\n\n  return dp[dp.length - 1];\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n  int numDecodings(string s) {\n    int pre2 = 0, pre1 = 1;\n    for (int i = 0; i < s.size() && pre1; ++i) {\n      int cur = 0;\n      if (s[i] != '0') cur += pre1;\n      if (i != 0 && s[i - 1] != '0' && (s[i - 1] - '0') * 10 + s[i] - '0' <= 26)\n        cur += pre2;\n      pre2 = pre1;\n      pre1 = cur;\n    }\n    return pre1;\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def numDecodings(self, s: str) -> int:\n        @lru_cache(None)\n        def dp(start):\n            if start == len(s):\n                return 1\n            if start > len(s):\n                return 0\n            if s[start] != \"0\":\n                if s[start : start + 2] <= \"26\":\n                    return dp(start + 1) + dp(start + 2)\n                return dp(start + 1)\n            return 0\n\n        return dp(0)\n"
        }
    ]
},
"reverse-linked-list-ii":{
    "id": "92",
    "name": "reverse-linked-list-ii",
    "pre": [
        {
            "text": "链表",
            "link": null,
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "四点法",
            "link": null,
            "color": "blue"
        },
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/92.reverse-linked-list-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/92.reverse-linked-list-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=92 lang=javascript\n *\n * [92] Reverse Linked List II\n *\n * https://leetcode.com/problems/reverse-linked-list-ii/description/\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} m\n * @param {number} n\n * @return {ListNode}\n */\nvar reverseBetween = function (head, m, n) {\n  // 虚拟节点，简化操作\n  const dummyHead = {\n    next: head,\n  };\n\n  let cur = dummyHead.next; // 当前遍历的节点\n  let pre = cur; // 因为要反转，因此我们需要记住前一个节点\n  let index = 0; // 链表索引，用来判断是否是特殊位置（头尾位置）\n\n  // 上面提到的四个特殊节点\n  let p1 = (p2 = p3 = p4 = null);\n\n  while (cur) {\n    const next = cur.next;\n    index++;\n\n    // 对 (m - n) 范围内的节点进行反转\n    if (index > m && index <= n) {\n      cur.next = pre;\n    }\n\n    // 下面四个if都是边界, 用于更新四个特殊节点的值\n    if (index === m - 1) {\n      p1 = cur;\n    }\n    if (index === m) {\n      p2 = cur;\n    }\n\n    if (index === n) {\n      p3 = cur;\n    }\n\n    if (index === n + 1) {\n      p4 = cur;\n    }\n\n    pre = cur;\n\n    cur = next;\n  }\n\n  // 两个链表合并起来\n  (p1 || dummyHead).next = p3; // 特殊情况需要考虑\n  p2.next = p4;\n\n  return dummyHead.next;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:\n        pre = None\n        cur = head\n        i = 0\n        p1 = p2 = p3 = p4 = None\n        # 一坨逻辑\n        if p1:\n            p1.next = p3\n        else:\n            dummy.next = p3\n        if p2:\n            p2.next = p4\n        return head\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n   def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:\n       pre = None\n       cur = head\n       i = 0\n       p1 = p2 = p3 = p4 = None\n       dummy = ListNode(0)\n       dummy.next = head\n       # 一坨逻辑\n       if p1:\n           p1.next = p3\n       else:\n           dummy.next = p3\n       if p2:\n           p2.next = p4\n\n       return dummy.next\n"
        },
        {
            "language": "py",
            "text": "\n    while cur:\n           i += 1\n           if i == m - 1:\n               p1 = cur\n           next = cur.next\n           if m < i <= n:\n               cur.next = pre\n\n           if i == m:\n               p2 = cur\n               p2.next = None\n\n           if i == n:\n               p3 = cur\n\n           if i == n + 1:\n               p4 = cur\n\n           pre = cur\n           cur = next\n"
        }
    ]
},
"binary-tree-inorder-traversal":{
    "id": "94",
    "name": "binary-tree-inorder-traversal",
    "pre": [
        {
            "text": "二叉树",
            "link": null,
            "color": "geekblue"
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
            "text": "递归的问题需要注意两点，一个是终止条件，一个如何缩小规模1.终止条件，自然是当前这个元素是null（链表也是一样）2.由于二叉树本身就是一个递归结构，每次处理一个子树其实就是缩小了规模，难点在于如何合并结果，这里的合并结果其实就是`left.concat(mid).concat(right)`,mid是一个具体的节点，left和right`递归求出即可`",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/94.binary-tree-inorder-traversal.md",
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
            "text": "\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar inorderTraversal = function (root) {\n  // 1. Recursive solution\n  // if (!root) return [];\n  // const left = root.left ? inorderTraversal(root.left) : [];\n  // const right = root.right ? inorderTraversal(root.right) : [];\n  // return left.concat([root.val]).concat(right);\n\n  // 2. iterative solutuon\n  if (!root) return [];\n  const stack = [root];\n  const ret = [];\n  let left = root.left;\n\n  let item = null; // stack 中弹出的当前项\n\n  while (left) {\n    stack.push(left);\n    left = left.left;\n  }\n\n  while ((item = stack.pop())) {\n    ret.push(item.val);\n    let t = item.right;\n\n    while (t) {\n      stack.push(t);\n      t = t.left;\n    }\n  }\n\n  return ret;\n};\n"
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
    "pre": [
        {
            "text": "二叉搜索树",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "分治",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "分治法",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/95.unique-binary-search-trees-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/95.unique-binary-search-trees-ii.md",
    "code": [
        {
            "language": "cpp",
            "text": "\nclass Solution {\nprivate:\n    vector<TreeNode*> generateTrees(int first, int last) {\n        if (first > last) return { NULL };\n        vector<TreeNode*> v;\n        for (int i = first; i <= last; ++i) {\n            auto lefts = generateTrees(first, i - 1);\n            auto rights = generateTrees(i + 1, last);\n            for (auto left : lefts) {\n                for (auto right : rights) {\n                    v.push_back(new TreeNode(i));\n                    v.back()->left = left;\n                    v.back()->right = right;\n                }\n            }\n        }\n        return v;\n    }\npublic:\n    vector<TreeNode*> generateTrees(int n) {\n        if (n <= 0) return {};\n        return generateTrees(1, n);\n    }\n};\n"
        }
    ]
},
"unique-binary-search-trees":{
    "id": "96",
    "name": "unique-binary-search-trees",
    "pre": [
        {
            "text": "二叉搜索树",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "分治",
            "link": null,
            "color": "gold"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/96.unique-binary-search-trees.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/96.unique-binary-search-trees.md",
    "code": [
        {
            "language": "cpp",
            "text": "\nclass Solution {\n    vector<int> visited;\n    int dp(int n) {\n        if (visited[n]) return visited[n];\n        int ans = 0;\n        for (int i = 0; i < n; ++i) ans += dp(i) * dp(n - i - 1);\n        return visited[n] = ans;\n    }\npublic:\n    int numTrees(int n) {\n        visited.assign(n + 1, 0);\n        visited[0] = 1;\n        return dp(n);\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def numTrees(self, n: int) -> int:\n        if n <= 1:\n            return 1\n        res = 0\n        for i in range(1, n + 1):\n            res += self.numTrees(i - 1) * self.numTrees(n - i)\n        return res\n"
        }
    ]
},
"validate-binary-search-tree":{
    "id": "98",
    "name": "validate-binary-search-tree",
    "pre": [
        {
            "text": "中序遍历",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/98.validate-binary-search-tree.md",
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
            "text": "\nclass Solution:\n    def longestConsecutive(self, A: List[int]) -> int:\n        seen = set(A)\n        ans = 0\n        for a in A:\n            t = a\n            #  if 的作用是剪枝\n            if t + 1 not in seen:\n                while t - 1 in seen:\n                    t -= 1\n            ans = max(ans, a - t + 1)\n        return ans\n"
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
            "language": "js",
            "text": "\n// 只有下个节点不是要删除的节点才更新 current\nif (!next || next.val !== val) {\n  current = next;\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {ListNode} head\n * @param {number} val\n * @return {ListNode}\n */\nvar removeElements = function (head, val) {\n  const dummy = {\n    next: head,\n  };\n  let current = dummy;\n\n  while (current && current.next) {\n    let next = current.next;\n    if (next.val === val) {\n      current.next = next.next;\n      next = next.next;\n    }\n\n    if (!next || next.val !== val) {\n      current = next;\n    }\n  }\n\n  return dummy.next;\n};\n"
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
            "text": "\nclass Solution {\npublic:\n    bool containsNearbyAlmostDuplicate(vector<int>& nums, int k, int t) {\n        if(t<0) return false;\n        //t+1可能会溢出，所以要+ 1LL\n        long long mod = t + 1LL;\n        unordered_map<long long,long long> buck;\n        for(int i=0;i<nums.size();i++)\n        {\n            long long nth = nums[i] / mod;\n            //可能nums[i]为负数，比如-4 / 5 以及 -4 / 5都等于0，所以负数要向下移动一位\n            if(nums[i] < 0) nth--;\n            //这里要用find 不能直接[],因为可能本身存储的数字就为0\n            if(buck.find(nth)!=buck.end())\n                return true;\n            else if(buck.find(nth-1)!=buck.end() && abs(nums[i] - buck[nth-1]) <= t)\n                return true;\n            else if(buck.find(nth+1)!=buck.end() && abs(nums[i] - buck[nth+1]) <= t)\n                return true;\n            buck[nth] = nums[i];\n            if(i >= k)\n            {\n                buck.erase(nums[i - k] / mod);\n            }\n        }\n        return false;\n    }\n};\n"
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
    "pre": [
        {
            "text": "数学",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "因数分解",
            "link": null,
            "color": "lime"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/263.ugly-number.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/263.ugly-number.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public boolean isUgly(int num) {\n        int [] ugly = {2,3,5};\n        for(int u : ugly)\n        {\n            while(num%u==0 && num%u < num)\n            {\n                num/=u;\n            }\n        }\n        return num == 1;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\nwhile (num % 2 === 0) num = num / 2;\nwhile (num % 3 === 0) num = num / 3;\nwhile (num % 5 === 0) num = num / 5;\n\nreturn num === 1;\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=263 lang=javascript\n *\n * [263] Ugly Number\n */\n/**\n * @param {number} num\n * @return {boolean}\n */\nvar isUgly = function (num) {\n  // TAG: 数论\n  if (num <= 0) return false;\n  if (num === 1) return true;\n\n  const list = [2, 3, 5];\n\n  if (list.includes(num)) return true;\n\n  for (let i of list) {\n    if (num % i === 0) return isUgly(Math.floor(num / i));\n  }\n  return false;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    bool isUgly(int num) {\n        int ugly[] = {2,3,5};\n        for(int u : ugly)\n        {\n            while(num%u==0 && num%u < num)\n            {\n                num/=u;\n            }\n        }\n        return num == 1;\n    }\n};\n"
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
    "pre": [
        {
            "text": "递归",
            "link": null,
            "color": "orange"
        },
        {
            "text": "动态规划",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/279.perfect-squares.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/279.perfect-squares.md",
    "code": [
        {
            "language": "js",
            "text": "\nconst mapper = {};\n\nfunction d(n, level) {\n  if (n === 0) return level;\n\n  let i = 1;\n  const arr = [];\n\n  while (n - i * i >= 0) {\n    const hit = mapper[n - i * i];\n    if (hit) {\n      arr.push(hit + level);\n    } else {\n      const depth = d(n - i * i, level + 1) - level;\n      mapper[n - i * i] = depth;\n      arr.push(depth + level);\n    }\n    i++;\n  }\n\n  return Math.min(...arr);\n}\n/**\n * @param {number} n\n * @return {number}\n */\nvar numSquares = function (n) {\n  return d(n, 0);\n};\n"
        },
        {
            "language": "js",
            "text": "\nfor (let i = 1; i <= n; i++) {\n  for (let j = 1; j * j <= i; j++) {\n    // 不选（dp[i]） 还是  选（dp[i - j * j]）\n    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);\n  }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number} n\n * @return {number}\n */\nvar numSquares = function (n) {\n  if (n <= 0) {\n    return 0;\n  }\n\n  const dp = Array(n + 1).fill(Number.MAX_VALUE);\n  dp[0] = 0;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 1; j * j <= i; j++) {\n      // 不选（dp[i]） 还是  选（dp[i - j * j]）\n      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);\n    }\n  }\n\n  return dp[n];\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int numSquares(int n) {\n        static vector<int> dp{0};\n        while (dp.size() <= n) {\n            int m = dp.size(), minVal = INT_MAX;\n            for (int i = 1; i * i <= m; ++i) minVal = min(minVal, 1 + dp[m - i * i]);\n            dp.push_back(minVal);\n        }\n        return dp[n];\n    }\n};\n"
        }
    ]
},
"move-zeroes":{
    "id": "283",
    "name": "move-zeroes",
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
            "text": "读写双指针",
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
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/283.move-zeroes.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/283.move-zeroes.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public void moveZeroes(int[] nums) {\n        // 双指针\n        int i = 0;\n        for(int j=0; j<nums.length; j++)\n        {\n            // 不为0，前移\n            if(nums[j] != 0)\n            {\n                int temp = nums[i];\n                nums[i] = nums[j];\n                nums[j] = temp;\n                i++;\n            }\n        }\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar moveZeroes = function (nums) {\n  let index = 0;\n  for (let i = 0; i < nums.length; i++) {\n    const num = nums[i];\n    if (num !== 0) {\n      nums[index++] = num;\n    }\n  }\n\n  for (let i = index; i < nums.length; i++) {\n    nums[index++] = 0;\n  }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        \"\"\"\n        slow = fast = 0\n        while fast < len(nums):\n            if nums[fast] != 0:\n                nums[fast], nums[slow] = nums[slow], nums[fast]\n                slow += 1\n            fast += 1\n"
        }
    ]
},
"find-median-from-data-stream":{
    "id": "295",
    "name": "find-median-from-data-stream",
    "pre": [
        {
            "text": "堆",
            "link": null,
            "color": "green"
        },
        {
            "text": "队列",
            "link": null,
            "color": "volcano"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/295.find-median-from-data-stream.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/295.find-median-from-data-stream.md",
    "code": [
        {
            "language": "js",
            "text": "\nfunction findMedian(a) {\n  return a.length % 2 === 0\n    ? (a[a.length >> 1] + a[a.length >> (1 + 1)]) / 2\n    : a[a.length >> 1];\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * initialize your data structure here.\n */\nvar MedianFinder = function () {\n  this.maxHeap = [];\n  this.minHeap = [];\n};\n\nfunction minHeapify() {\n  this.minHeap.unshift(null);\n  const a = this.minHeap;\n\n  // 为了方便大家理解，这里选用了粗暴的实现\n  // 时间复杂度为O(n)\n  // 其实可以降到O(logn)， 具体细节我不想在这里讲解和实现\n  for (let i = a.length - 1; i >> 1 > 0; i--) {\n    // 自下往上堆化\n    if (a[i] < a[i >> 1]) {\n      // 如果子元素更小，则交换位置\n      const temp = a[i];\n      this.minHeap[i] = a[i >> 1];\n      this.minHeap[i >> 1] = temp;\n    }\n  }\n  this.minHeap.shift(null);\n}\n\nfunction maxHeapify() {\n  this.maxHeap.unshift(null);\n  const a = this.maxHeap;\n\n  // 为了方便大家理解，这里选用了粗暴的实现\n  // 时间复杂度为O(n)\n  // 其实可以降到O(logn)， 具体细节我不想在这里讲解和实现\n  for (let i = a.length - 1; i >> 1 > 0; i--) {\n    // 自下往上堆化\n    if (a[i] > a[i >> 1]) {\n      // 如果子元素更大，则交换位置\n      const temp = a[i];\n      this.maxHeap[i] = a[i >> 1];\n      this.maxHeap[i >> 1] = temp;\n    }\n  }\n  this.maxHeap.shift(null);\n}\n\n/**\n * @param {number} num\n * @return {void}\n */\nMedianFinder.prototype.addNum = function (num) {\n  // 为了大家容易理解，这部分代码写的比较冗余\n\n  // 插入\n  if (num >= (this.minHeap[0] || Number.MIN_VALUE)) {\n    this.minHeap.push(num);\n  } else {\n    this.maxHeap.push(num);\n  }\n  // 调整两个堆的节点数量平衡\n  // 使得大顶堆的数量最多大于小顶堆一个， 且一定不小于小顶堆数量\n  if (this.maxHeap.length > this.minHeap.length + 1) {\n    // 大顶堆的堆顶元素移动到小顶堆\n    this.minHeap.push(this.maxHeap.shift());\n  }\n\n  if (this.minHeap.length > this.maxHeap.length) {\n    // 小顶堆的堆顶元素移动到大顶堆\n    this.maxHeap.push(this.minHeap.shift());\n  }\n\n  // 调整堆顶元素\n  if (this.maxHeap[0] > this.minHeap[0]) {\n    const temp = this.maxHeap[0];\n    this.maxHeap[0] = this.minHeap[0];\n    this.minHeap[0] = temp;\n  }\n\n  // 堆化\n  maxHeapify.call(this);\n  minHeapify.call(this);\n};\n\n/**\n * @return {number}\n */\nMedianFinder.prototype.findMedian = function () {\n  if ((this.maxHeap.length + this.minHeap.length) % 2 === 0) {\n    return (this.minHeap[0] + this.maxHeap[0]) / 2;\n  } else {\n    return this.maxHeap[0];\n  }\n};\n\n/**\n * Your MedianFinder object will be instantiated and called as such:\n * var obj = new MedianFinder()\n * obj.addNum(num)\n * var param_2 = obj.findMedian()\n */\n"
        },
        {
            "language": "js",
            "text": "\nthis.heap.unshift(null);\n// ....\nthis.heap.shift(null);\n"
        },
        {
            "language": "js",
            "text": "\nvar MedianFinder = function () {\n  this.maxHeap = new PriorityQueue((a, b) => a - b);\n  this.minHeap = new PriorityQueue((a, b) => b - a);\n};\n\n/**\n * @param {number} num\n * @return {void}\n */\nMedianFinder.prototype.addNum = function (num) {\n  // 我们的目标就是建立两个堆，一个大顶堆，一个小顶堆\n  // 结合中位数的特点\n  // 这两个堆需要满足:\n  // 1. 大顶堆元素都比小顶堆小（由于堆的特点其实只要比较堆顶即可）\n  // 2. 大顶堆元素不小于小顶堆，且最多比小顶堆多一个元素\n\n  // 满足上面两个条件的话，如果想要找到中位数，就比较简单了\n  // 如果两个堆数量相等（本质是总数为偶数）, 就两个堆顶元素的平均数\n  // 如果两个堆数量不相等（本质是总数为奇数）， 就取大顶堆的堆顶元素\n\n  // 问题如果保证满足上述两个特点\n\n  // 1. 保证第一点\n  this.maxHeap.enq(num);\n  // 由于小顶堆的所有数都来自大顶堆的堆顶元素（最大值）\n  // 因此可以保证第一点\n  this.minHeap.enq(this.maxHeap.deq());\n\n  // 2. 保证第二点\n  if (this.maxHeap.size() < this.minHeap.size()) {\n    this.maxHeap.enq(this.minHeap.deq());\n  }\n};\n\n/**\n * @return {number}\n */\nMedianFinder.prototype.findMedian = function () {\n  if (this.maxHeap.size() == this.minHeap.size())\n    return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;\n  else return this.maxHeap.peek();\n};\n\n/**\n * Your MedianFinder object will be instantiated and called as such:\n * var obj = new MedianFinder()\n * obj.addNum(num)\n * var param_2 = obj.findMedian()\n */\n"
        },
        {
            "language": "cpp",
            "text": "\nclass MedianFinder {\npublic:\n    /** initialize your data structure here. */\n    MedianFinder() {\n\n    }\n\n    void addNum(int num) {\n        if (big_queue.empty()) {\n            big_queue.push(num);\n            return;\n        }\n        if (big_queue.size() == small_queue.size()) {\n            if (num <= big_queue.top()) {\n                big_queue.push(num);\n            } else {\n                small_queue.push(num);\n            }\n        } else if (big_queue.size() > small_queue.size()) {\n            if (big_queue.top() > num) {\n                small_queue.push(big_queue.top());\n                big_queue.pop();\n                big_queue.push(num);\n            } else {\n                small_queue.push(num);\n            }\n        } else if (big_queue.size() < small_queue.size()) {\n            if (small_queue.top() > num) {\n                big_queue.push(num);\n            } else {\n                big_queue.push(small_queue.top());\n                small_queue.pop();\n                small_queue.push(num);\n            }\n        }\n    }\n\n    double findMedian() {\n        if (big_queue.size() == small_queue.size()) {\n            return (big_queue.top() + small_queue.top()) * 0.5;\n        }\n        if (big_queue.size() < small_queue.size()) {\n            return small_queue.top();\n        }\n        return big_queue.top();\n    }\n\nprivate:\n    std::priority_queue<int, std::vector<int>, std::greater<int>> small_queue;  // 最小堆\n    std::priority_queue<int> big_queue; // 最大堆\n};\n"
        }
    ]
},
"serialize-and-deserialize-binary-tree":{
    "id": "297",
    "name": "serialize-and-deserialize-binary-tree",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/297.serialize-and-deserialize-binary-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/297.serialize-and-deserialize-binary-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\nconst serialize = (root) => {\n  const queue = [root];\n  let res = [];\n  while (queue.length) {\n    const node = queue.shift();\n    if (node) {\n      res.push(node.val);\n      queue.push(node.left);\n      queue.push(node.right);\n    } else {\n      res.push(\"#\");\n    }\n  }\n  return res.join(\",\");\n};\n\nconst deserialize = (data) => {\n  if (data == \"#\") return null;\n\n  const list = data.split(\",\");\n\n  const root = new TreeNode(list[0]);\n  const queue = [root];\n  let cursor = 1;\n\n  while (cursor < list.length) {\n    const node = queue.shift();\n\n    const leftVal = list[cursor];\n    const rightVal = list[cursor + 1];\n\n    if (leftVal != \"#\") {\n      const leftNode = new TreeNode(leftVal);\n      node.left = leftNode;\n      queue.push(leftNode);\n    }\n    if (rightVal != \"#\") {\n      const rightNode = new TreeNode(rightVal);\n      node.right = rightNode;\n      queue.push(rightNode);\n    }\n    cursor += 2;\n  }\n  return root;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Codec:\n\n    def serialize(self, root):\n        q = collections.deque([root])\n        ans = ''\n        while q:\n            cur = q.popleft()\n            if cur:\n                ans += str(cur.val) + ','\n                q.append(cur.left)\n                q.append(cur.right)\n            else:\n                # 除了这里不一样，其他和普通的不记录层的 BFS 没区别\n                ans += 'null,'\n        # 末尾会多一个逗号，我们去掉它。\n        return ans[:-1]\n"
        },
        {
            "language": "py",
            "text": "\n    def deserialize(self, data):\n        if data == 'null': return None\n        nodes = data.split(',')\n        root = TreeNode(nodes[0])\n        # 从一号开始编号，编号信息一起入队\n        q = collections.deque([(root, 1)])\n        while q:\n            cur, i = q.popleft()\n            # 2 * i 是左节点，而 2 * i 编号对应的其实是索引为 2 * i - 1 的元素， 右节点同理。\n            if 2 * i - 1 < len(nodes): lv = nodes[2 * i - 1]\n            if 2 * i < len(nodes): rv = nodes[2 * i]\n            if lv != 'null':\n                l = TreeNode(lv)\n                # 将左节点和 它的编号 2 * i 入队\n                q.append((l, 2 * i))\n                cur.left = l\n            if rv != 'null':\n                r = TreeNode(rv)\n                # 将右节点和 它的编号 2 * i + 1 入队\n                q.append((r, 2 * i + 1))\n                cur.right = r\n\n        return root\n"
        },
        {
            "language": "py",
            "text": "\ndef deserialize(self, data):\n    if data == 'null': return None\n    nodes = data.split(',')\n    root = TreeNode(nodes[0])\n    q = collections.deque([root])\n    i = 0\n    while q and i < len(nodes) - 2:\n        cur = q.popleft()\n        lv = nodes[i + 1]\n        rv = nodes[i + 2]\n        i += 2\n        if lv != 'null':\n            l = TreeNode(lv)\n            q.append(l)\n            cur.left = l\n        if rv != 'null':\n            r = TreeNode(rv)\n            q.append(r)\n            cur.right = r\n\n    return root\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for a binary tree node.\n# class TreeNode(object):\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Codec:\n    def serialize(self, root):\n        ans = ''\n        queue = [root]\n        while queue:\n            node = queue.pop(0)\n            if node:\n                ans += str(node.val) + ','\n                queue.append(node.left)\n                queue.append(node.right)\n            else:\n                ans += '#,'\n        print(ans[:-1])\n        return ans[:-1]\n\n\n\n    def deserialize(self, data: str):\n        if data == '#': return None\n        nodes = data.split(',')\n        if not nodes: return None\n        root = TreeNode(nodes[0])\n        queue = [root]\n        # 已经有 root 了，因此从 1 开始\n        i = 1\n\n        while i < len(nodes) - 1:\n            node = queue.pop(0)\n            lv = nodes[i]\n            rv = nodes[i + 1]\n            i += 2\n            if lv != '#':\n                l = TreeNode(lv)\n                node.left = l\n                queue.append(l)\n\n            if rv != '#':\n                r = TreeNode(rv)\n                node.right = r\n                queue.append(r)\n        return root\n\n"
        }
    ]
},
"remove-invalid-parentheses":{
    "id": "301",
    "name": "remove-invalid-parentheses",
    "pre": [
        {
            "text": "BFS",
            "link": null,
            "color": "purple"
        },
        {
            "text": "队列",
            "link": null,
            "color": "volcano"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/301.remove-invalid-parentheses.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/301.remove-invalid-parentheses.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar isValid = function(s) {\n  let openParenthes = 0;\n  for(let i = 0; i < s.length; i++) {\n    if (s[i] === '(') {\n      openParenthes++;\n    } else if (s[i] === ')') {\n      if (openParenthes === 0) return false;\n      openParenthes--;\n    }\n  }\n  return openParenthes === 0;\n};\n/**\n * @param {string} s\n * @return {string[]}\n */\nvar removeInvalidParentheses = function(s) {\n  if (!s || s.length === 0) return [\"\"];\n  const ret = [];\n  const queue = [s];\n  const visited = {};\n  let current = null;\n  let removedParentheses = 0; // 只记录最小改动\n\n  while ((current = queue.shift())) {\n    let hit = isValid(current);\n    if (hit) {\n      if (!removedParentheses) {\n       removedParentheses =  s.length - current.length\n      }\n      if (s.length - current.length > removedParentheses) return ret.length === 0 ? [\"\"] : ret;;\n      ret.unshift(current);\n      continue;\n    }\n    for (let i = 0; i < current.length; i++) {\n      if (current[i] !== ')' && current[i] !== '(') continue;\n      const subString = current.slice(0, i).concat(current.slice(i + 1));\n      if (visited[subString]) continue;\n      visited[subString] = true;\n      queue.push(subString);\n    }\n  }\n\n  return ret.length === 0 ? [\"\"] : ret;\n};\n"
        }
    ]
},
"best-time-to-buy-and-sell-stock-with-cooldown":{
    "id": "309",
    "name": "best-time-to-buy-and-sell-stock-with-cooldown",
    "pre": [
        {
            "text": "记忆化递归",
            "link": null,
            "color": "blue"
        },
        {
            "text": "动态规划",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/309.best-time-to-buy-and-sell-stock-with-cooldown.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/309.best-time-to-buy-and-sell-stock-with-cooldown.md",
    "code": [
        {
            "language": "js",
            "text": "\nbuy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);\nsell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=309 lang=javascript\n *\n * [309] Best Time to Buy and Sell Stock with Cooldown\n *\n */\n/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function (prices) {\n  if (prices == null || prices.length <= 1) return 0;\n\n  // 定义状态变量\n  const buy = [];\n  const sell = [];\n  // 寻常\n  buy[0] = -prices[0];\n  buy[1] = Math.max(-prices[0], -prices[1]);\n  sell[0] = 0;\n  sell[1] = Math.max(0, prices[1] - prices[0]);\n  for (let i = 2; i < prices.length; i++) {\n    // 状态转移方程\n    // 第i天只能是买或者cooldown\n    // 如果买利润就是sell[i - 2] - prices[i], 注意这里是i - 2，不是 i-1 ，因为有cooldown的限制\n    // cooldown就是buy[i -1]\n    buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);\n    // 第i天只能是卖或者cooldown\n    // 如果卖利润就是buy[i  -1] + prices[i]\n    // cooldown就是sell[i -1]\n    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);\n  }\n\n  return Math.max(buy[prices.length - 1], sell[prices.length - 1], 0);\n};\n"
        },
        {
            "language": "py",
            "text": "\nmax(f(i+1, 0), f(i+1, 1) - prices[i])\n"
        },
        {
            "language": "py",
            "text": "\nmax(f(i+1, 1), f(i+1, -1) + prices[i])\n"
        },
        {
            "language": "py",
            "text": "\nf(i+1, 0)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxProfit(self, prices):\n        if not prices:\n            return 0\n        n = len(prices)\n\n        @lru_cache(None)\n        def f(i, state):\n            if i == n - 1:\n                return prices[i] if state == 1 else 0\n\n            if state == -1:\n                return f(i + 1, 0)\n            if state == 0:\n                return max(f(i + 1, 0), -prices[i] + f(i + 1, 1))\n            if state == 1:\n                return max(prices[i] + f(i + 1, -1), f(i + 1, 1))\n\n        return f(0, 0)\n\n"
        }
    ]
},
"burst-balloons":{
    "id": "312",
    "name": "burst-balloons",
    "pre": [
        {
            "text": "回溯法",
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
            "text": "区间DP",
            "link": null,
            "color": "blue"
        },
        {
            "text": "反向思考。不是戳气球，而是添加气球。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "遍历方向的确定",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/312.burst-balloons.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/312.burst-balloons.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar maxCoins = function (nums) {\n  let res = Number.MIN_VALUE;\n  backtrack(nums, 0);\n  return res;\n  // 回溯法，状态树很大\n  function backtrack(nums, score) {\n    if (nums.length == 0) {\n      res = Math.max(res, score);\n      return;\n    }\n    for (let i = 0, n = nums.length; i < n; i++) {\n      let point =\n        (i - 1 < 0 ? 1 : nums[i - 1]) *\n        nums[i] *\n        (i + 1 >= n ? 1 : nums[i + 1]);\n      let tempNums = [].concat(nums);\n      // 做选择 在 nums 中删除元素 nums[i]\n      nums.splice(i, 1);\n      // 递归回溯\n      backtrack(nums, score + point);\n      // 撤销选择\n      nums = [...tempNums];\n    }\n  }\n};\n"
        },
        {
            "language": "js",
            "text": "\nvar maxCoins = function (nums) {\n  let n = nums.length;\n  // 添加两侧的虚拟气球\n  let points = [1, ...nums, 1];\n  let dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0));\n  // 最后一行开始遍历,从下往上\n  for (let i = n; i >= 0; i--) {\n    // 从左往右\n    for (let j = i + 1; j < n + 2; j++) {\n      for (let k = i + 1; k < j; k++) {\n        dp[i][j] = Math.max(\n          dp[i][j],\n          points[j] * points[k] * points[i] + dp[i][k] + dp[k][j]\n        );\n      }\n    }\n  }\n  return dp[0][n + 1];\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxCoins(self, nums: List[int]) -> int:\n        n = len(nums)\n        points = [1] + nums + [1]\n        dp = [[0] * (n + 2) for _ in range(n + 2)]\n\n        for i in range(n, -1, -1):\n            for j in range(i + 1, n + 2):\n                for k in range(i + 1, j):\n                    dp[i][j] = max(dp[i][j], dp[i][k] + dp[k][j] + points[i] * points[k] * points[j])\n        return dp[0][-1]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxCoins(self, nums: List[int]) -> int:\n        n = len(nums)\n        nums = [1] + nums + [1]\n\n        @lru_cache(None)\n        def dp(left, right):\n            if left + 1 == right:\n                return 0\n            if left + 2 == right:\n                return nums[left] * nums[left + 1] * nums[left + 2]\n            ans = 0\n            for i in range(left + 1, right):\n                ans = max(ans, nums[i] * nums[left] * nums[right] + dp(left, i) + dp(i, right))\n            return ans\n\n        return dp(0, len(nums) - 1)\n\n"
        }
    ]
},
"coin-change":{
    "id": "322",
    "name": "coin-change",
    "pre": [
        {
            "text": "贪心算法",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "动态规划",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "分析出是典型的完全背包问题",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
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
            "name": "阿里巴巴（盒马生鲜）"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/322.coin-change.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/322.coin-change.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar coinChange = function (coins, amount) {\n  if (amount === 0) {\n    return 0;\n  }\n  const dp = Array(amount + 1).fill(Number.MAX_VALUE);\n  dp[0] = 0;\n  for (let i = 1; i < dp.length; i++) {\n    for (let j = 0; j < coins.length; j++) {\n      if (i - coins[j] >= 0) {\n        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);\n      }\n    }\n  }\n\n  return dp[dp.length - 1] === Number.MAX_VALUE ? -1 : dp[dp.length - 1];\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        if amount < 0:\n            return - 1\n        dp = [[amount + 1 for _ in range(len(coins) + 1)]\n              for _ in range(amount + 1)]\n\n        # 初始化第一行为0，其他为最大值（也就是amount + 1）\n        for j in range(len(coins) + 1):\n            dp[0][j] = 0\n\n        for i in range(1, amount + 1):\n            for j in range(1, len(coins) + 1):\n                # 注意：dp[i - coins[j - 1]][j] 含义是硬币无限取， dp[i - coins[j - 1]][j - 1] 的含义就变成了硬币最多取一次\n                if i - coins[j - 1] >= 0:\n                    dp[i][j] = min(\n                        dp[i][j - 1], dp[i - coins[j - 1]][j] + 1)\n                else:\n                    dp[i][j] = dp[i][j - 1]\n\n        return -1 if dp[-1][-1] == amount + 1 else dp[-1][-1]\n"
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
    "pre": [
        {
            "text": "链表",
            "link": null,
            "color": "magenta"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/328.odd-even-linked-list.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/328.odd-even-linked-list.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=328 lang=javascript\n *\n * [328] Odd Even Linked List\n *\n *\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar oddEvenList = function (head) {\n  if (!head || !head.next) return head;\n\n  const dummyHead1 = {\n    next: head,\n  };\n  const dummyHead2 = {\n    next: head.next,\n  };\n\n  let odd = dummyHead1.next;\n  let even = dummyHead2.next;\n\n  while (odd && odd.next && even && even.next) {\n    const oddNext = odd.next.next;\n    const evenNext = even.next.next;\n\n    odd.next = oddNext;\n    even.next = evenNext;\n\n    odd = oddNext;\n    even = evenNext;\n  }\n\n  odd.next = dummyHead2.next;\n\n  return dummyHead1.next;\n};\n"
        }
    ]
},
"patching-array":{
    "id": "330",
    "name": "patching-array",
    "pre": [
        {
            "text": "贪心",
            "link": null,
            "color": "purple"
        },
        {
            "text": "前缀和",
            "link": null,
            "color": "cyan"
        }
    ],
    "keyPoints": [
        {
            "text": "维护端点信息，并用前缀和更新区间",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/330.patching-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/330.patching-array.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minPatches(self, nums: List[int], n: int) -> int:\n        furthest = i = ans = 0\n        while furthest < n:\n            # 可覆盖到，直接用前缀和更新区间\n            if i < len(nums) and nums[i] <= furthest + 1:\n                furthest += nums[i] #  [1, furthest] -> [1, furthest + nums[i]]\n                i += 1\n            else:\n                # 不可覆盖到，增加一个数 furthest + 1，并用前缀和更新区间\n                # 如果 nums[i] > furthest + 1，说明我们必须添加一个数 x，其中 1 <= x <= furthest + 1，从贪心的角度我们应该选择  furthest + 1，这在前面已经讲过\n                furthest = 2 * furthest + 1 # [1, furthest] -> [1, furthest + furthest + 1]\n                ans += 1\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minPatches(self, nums: List[int], n: int) -> int:\n        furthest, i, ans = 1, 0, 0\n        # 结束条件也要相应改变\n        while furthest <= n:\n            if i < len(nums) and nums[i] <= furthest:\n                furthest += nums[i] #  [1, furthest) -> [1, furthest + nums[i])\n                i += 1\n            else:\n                furthest = 2 * furthest # [1, furthest) -> [1, furthest + furthest)\n                ans += 1\n        return ans\n"
        }
    ]
},
"verify-preorder-serialization-of-a-binary-tree":{
    "id": "331",
    "name": "verify-preorder-serialization-of-a-binary-tree",
    "pre": [
        {
            "text": "图论",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "从入度和出度的角度思考",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/331.verify-preorder-serialization-of-a-binary-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/331.verify-preorder-serialization-of-a-binary-tree.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def isValidSerialization(self, preorder: str) -> bool:\n        diff = 0\n\n        for node in preorder.split(\",\"):\n            diff -= 1\n            if diff < -1:\n                return False\n            if node != \"#\":\n                diff += 2\n        return diff == -1\n\n"
        }
    ]
},
"increasing-triplet-subsequence":{
    "id": "334",
    "name": "increasing-triplet-subsequence",
    "pre": [
        {
            "text": "双指针",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "维护两个变量，分别记录最小值，第二小值。只要我们能够填满这三个变量就返回true，否则返回false",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/334.increasing-triplet-subsequence.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/334.increasing-triplet-subsequence.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar increasingTriplet = function (nums) {\n  if (nums.length < 3) return false;\n  let n1 = Number.MAX_VALUE;\n  let n2 = Number.MAX_VALUE;\n\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] <= n1) {\n      n1 = nums[i];\n    } else if (nums[i] <= n2) {\n      n2 = nums[i];\n    } else {\n      return true;\n    }\n  }\n\n  return false;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def increasingTriplet(self, A: List[int]) -> bool:\n        a1 = a2 = float(\"inf\")\n\n        for a in A:\n            if a > a2:\n                return True\n            elif a > a1:\n                a2 = a\n            else:\n                a1 = a\n        return False\n"
        }
    ]
},
"self-crossing":{
    "id": "335",
    "name": "self-crossing",
    "pre": [
        {
            "text": "滚动数组",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "一定要画图辅助",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对于这种$O(1)$空间复杂度有固定的套路。常见的有：1.直接修改原数组2.滚动数组（当前状态并不是和之前所有状态有关，而是仅和某几个有关）。我们采用的是滚动数组。如果你了解动态规划的滚动数组优化的话应该理解我的意思。但是难点就在于我们怎么知道当前状态和哪几个有关。对于这道题来说，画图或许可以帮助你打开思路。另外面试的时候说出$O(B)$的思路也不失为一个帮助你冷静分析问题的手段。感谢[@saberjiang",
            "link": null,
            "color": "blue"
        },
        {
            "text": "b](https://leetcode",
            "link": null,
            "color": "blue"
        },
        {
            "text": "cn.com/u/saberjiang",
            "link": null,
            "color": "blue"
        },
        {
            "text": "b/)指出的代码重复判断问题",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/335.self-crossing.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/335.self-crossing.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def isSelfCrossing(self, x: List[int]) -> bool:\n        n = len(x)\n        if n < 4:\n            return False\n        for i in range(3, n):\n            if x[i] >= x[i - 2] and x[i - 1] <= x[i - 3]:\n                return True\n            if i > 3 and x[i - 1] == x[i - 3] and x[i] + x[i - 4] == x[i - 2]:\n                return True\n            if i > 4 and x[i] + x[i - 4] >= x[i - 2] and x[i - 1] >= x[i - 3] - x[i - 5] \\\n                    and x[i - 1] <= x[i - 3] and x[i - 2] >= x[i - 4] and x[i - 3] >= x[i - 5]:\n                return True\n        return False\n"
        }
    ]
},
"house-robber-iii":{
    "id": "337",
    "name": "house-robber-iii",
    "pre": [
        {
            "text": "二叉树",
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
            "text": "对每一个节点都分析，是抢还是不抢",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/337.house-robber-iii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/337.house-robber-iii.md",
    "code": [
        {
            "language": "java",
            "text": "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public int rob(TreeNode root) {\n        int[] res = dfs(root);\n        return Math.max(res[0], res[1]);\n    }\n\n    public int[] dp(TreeNode root)\n    {\n        int[] res = new int[2];\n        if(root == null)\n        {\n            return res;\n        }\n\n        int[] left = dfs(root.left);\n        int[] right = dfs(root.right);\n        // 0 代表不偷，1 代表偷\n        res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);\n        res[1] = left[0] + right[0] + root.val;\n        return res;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction helper(root) {\n  if (root === null) return [0, 0];\n  // 0: rob 1: notRob\n  const l = helper(root.left);\n  const r = helper(root.right);\n\n  const robed = root.val + l[1] + r[1];\n  const notRobed = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);\n\n  return [robed, notRobed];\n}\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar rob = function (root) {\n  const [robed, notRobed] = helper(root);\n  return Math.max(robed, notRobed);\n};\n"
        },
        {
            "language": "cpp",
            "text": "\n/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    int rob(TreeNode* root) {\n        pair<int, int> res = dfs(root);\n        return max(res.first, res.second);\n    }\n\n    pair<int, int> dfs(TreeNode* root)\n    {\n        pair<int, int> res = {0, 0};\n        if(root == NULL)\n        {\n            return res;\n        }\n\n        pair<int, int> left = dfs(root->left);\n        pair<int, int> right = dfs(root->right);\n        // 0 代表不偷，1 代表偷\n        res.first = max(left.first, left.second) + max(right.first, right.second);\n        res.second = left.first + right.first + root->val;\n        return res;\n    }\n\n};\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def rob(self, root: TreeNode) -> int:\n        def dfs(node):\n            if not node:\n                return [0, 0]\n            [l_rob, l_not_rob] = dfs(node.left)\n            [r_rob, r_not_rob] = dfs(node.right)\n            return [node.val + l_not_rob + r_not_rob, max([l_rob, l_not_rob]) +  max([r_rob, r_not_rob])]\n        return max(dfs(root))\n\n\n# @lc code=end\n\n"
        }
    ]
},
"power-of-four":{
    "id": "342",
    "name": "power-of-four",
    "pre": [
        {
            "text": "数论",
            "link": null,
            "color": "green"
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
    "companies": [
        {
            "name": "百度"
        },
        {
            "name": "twosigma"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/342.power-of-four.md",
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
            "text": "\n/*\n * @lc app=leetcode id=342 lang=javascript\n *\n * [342] Power of Four\n */\n/**\n * @param {number} num\n * @return {boolean}\n */\nvar isPowerOfFour = function (num) {\n  // tag: 数论\n\n  if (num === 1) return true;\n  if (num < 4) return false;\n\n  if ((num & (num - 1)) !== 0) return false;\n\n  return (num & 0x55555555) === num;\n};\n"
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
    "pre": [
        {
            "text": "递归",
            "link": null,
            "color": "orange"
        },
        {
            "text": "动态规划",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/343.integer-break.md",
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
    "pre": [
        {
            "text": "hashtable",
            "link": null,
            "color": "lime"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/349.intersection-of-two-arrays.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/349.intersection-of-two-arrays.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number[]}\n */\nvar intersection = function (nums1, nums2) {\n  const visited = {};\n  const ret = [];\n  for (let i = 0; i < nums1.length; i++) {\n    const num = nums1[i];\n\n    visited[num] = num;\n  }\n\n  for (let i = 0; i < nums2.length; i++) {\n    const num = nums2[i];\n\n    if (visited[num] !== undefined) {\n      ret.push(num);\n      visited[num] = undefined;\n    }\n  }\n\n  return ret;\n};\n"
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
    "pre": [
        {
            "text": "BFS",
            "link": null,
            "color": "purple"
        },
        {
            "text": "最大公约数",
            "link": null,
            "color": "magenta"
        }
    ],
    "keyPoints": [],
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/365.water-and-jug-problem.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/365.water-and-jug-problem.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number} x\n * @param {number} y\n * @param {number} z\n * @return {boolean}\n */\nvar canMeasureWater = function (x, y, z) {\n  if (x + y < z) return false;\n\n  if (z === 0) return true;\n\n  if (x === 0) return y === z;\n\n  if (y === 0) return x === z;\n\n  function GCD(a, b) {\n    let min = Math.min(a, b);\n    while (min) {\n      if (a % min === 0 && b % min === 0) return min;\n      min--;\n    }\n    return 1;\n  }\n\n  return z % GCD(x, y) === 0;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def canMeasureWater(self, x: int, y: int, z: int) -> bool:\n        if x + y < z:\n            return False\n        queue = [(0, 0)]\n        seen = set((0, 0))\n\n        while(len(queue) > 0):\n            a, b = queue.pop(0)\n            if a ==z or b == z or a + b == z:\n                return True\n            states = set()\n\n            states.add((x, b))\n            states.add((a, y))\n            states.add((0, b))\n            states.add((a, 0))\n            states.add((min(x, b + a), 0 if b < x - a else b - (x - a)))\n            states.add((0 if a + b < y else a - (y - b), min(b + a, y)))\n            for state in states:\n                if state in seen:\n                    continue;\n                queue.append(state)\n                seen.add(state)\n        return False\n"
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
    "pre": [
        {
            "text": "位运算",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/bit.md",
            "color": "blue"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/371.sum-of-two-integers.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/371.sum-of-two-integers.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int getSum(int a, int b) {\n        if(a==0) return b;\n        if(b==0) return a;\n\n        while(b!=0)\n        {\n            int carry = a&b;\n            // 计算无进位的结果\n            a = a^b;\n            //将存在进位的位置置1\n            b =carry<<1;\n        }\n        return a;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=371 lang=javascript\n *\n * [371] Sum of Two Integers\n */\n/**\n * @param {number} a\n * @param {number} b\n * @return {number}\n */\nvar getSum = function (a, b) {\n  if (a === 0) return b;\n\n  if (b === 0) return a;\n\n  return getSum(a ^ b, (a & b) << 1);\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int getSum(int a, int b) {\n        if(a==0) return b;\n        if(b==0) return a;\n\n        while(b!=0)\n        {\n            // 防止 AddressSanitizer 对有符号左移的溢出保护处理\n            auto carry = ((unsigned int ) (a & b))<<1;\n            // 计算无进位的结果\n            a = a^b;\n            //将存在进位的位置置1\n            b =carry;\n        }\n        return a;\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\n# python整数类型为Unifying Long Integers, 即无限长整数类型.\n# 模拟 32bit 有符号整型加法\nclass Solution:\n    def getSum(self, a: int, b: int) -> int:\n        a &= 0xFFFFFFFF\n        b &= 0xFFFFFFFF\n        while b:\n            carry = a & b\n            a ^= b\n            b = ((carry) << 1) & 0xFFFFFFFF\n            # print((a, b))\n        return a if a < 0x80000000 else ~(a^0xFFFFFFFF)\n"
        }
    ]
},
"kth-smallest-element-in-a-sorted-matrix":{
    "id": "378",
    "name": "kth-smallest-element-in-a-sorted-matrix",
    "pre": [
        {
            "text": "二分查找",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "堆",
            "link": null,
            "color": "green"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/378.kth-smallest-element-in-a-sorted-matrix.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/378.kth-smallest-element-in-a-sorted-matrix.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=378 lang=javascript\n *\n * [378] Kth Smallest Element in a Sorted Matrix\n */\nfunction notGreaterCount(matrix, target) {\n  // 等价于在matrix 中搜索mid，搜索的过程中利用有序的性质记录比mid小的元素个数\n\n  // 我们选择左下角，作为开始元素\n  let curRow = 0;\n  // 多少列\n  const COL_COUNT = matrix[0].length;\n  // 最后一列的索引\n  const LAST_COL = COL_COUNT - 1;\n  let res = 0;\n\n  while (curRow < matrix.length) {\n    // 比较最后一列的数据和target的大小\n    if (matrix[curRow][LAST_COL] < target) {\n      res += COL_COUNT;\n    } else {\n      let i = COL_COUNT - 1;\n      while (i < COL_COUNT && matrix[curRow][i] > target) {\n        i--;\n      }\n      // 注意这里要加1\n      res += i + 1;\n    }\n    curRow++;\n  }\n\n  return res;\n}\n/**\n * @param {number[][]} matrix\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function (matrix, k) {\n  if (matrix.length < 1) return null;\n  let start = matrix[0][0];\n  let end = matrix[matrix.length - 1][matrix[0].length - 1];\n  while (start < end) {\n    const mid = start + ((end - start) >> 1);\n    const count = notGreaterCount(matrix, mid);\n    if (count < k) start = mid + 1;\n    else end = mid;\n  }\n  // 返回start,mid, end 都一样\n  return start;\n};\n"
        }
    ]
},
"insert-delete-getrandom-o1":{
    "id": "380",
    "name": "insert-delete-getrandom-o1",
    "pre": [],
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
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/380.insert-delete-getrandom-o1.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/380.insert-delete-getrandom-o1.md",
    "code": [
        {
            "language": "py",
            "text": "\nfrom random import random\n\n\nclass RandomizedSet:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.data = dict()\n        self.arr = []\n        self.n = 0\n\n    def insert(self, val: int) -> bool:\n        \"\"\"\n        Inserts a value to the set. Returns true if the set did not already contain the specified element.\n        \"\"\"\n        if val in self.data:\n            return False\n        self.data[val] = self.n\n        self.arr.append(val)\n        self.n += 1\n\n        return True\n\n    def remove(self, val: int) -> bool:\n        \"\"\"\n        Removes a value from the set. Returns true if the set contained the specified element.\n        \"\"\"\n        if val not in self.data:\n            return False\n        i = self.data[val]\n        # 更新data\n        self.data[self.arr[-1]] = i\n        self.data.pop(val)\n        # 更新arr\n        self.arr[i] = self.arr[-1]\n        # 删除最后一项\n        self.arr.pop()\n        self.n -= 1\n\n        return True\n\n    def getRandom(self) -> int:\n        \"\"\"\n        Get a random element from the set.\n        \"\"\"\n\n        return self.arr[int(random() * self.n)]\n\n\n# Your RandomizedSet object will be instantiated and called as such:\n# obj = RandomizedSet()\n# param_1 = obj.insert(val)\n# param_2 = obj.remove(val)\n# param_3 = obj.getRandom()\n"
        }
    ]
},
"mini-parser":{
    "id": "385",
    "name": "mini-parser",
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
            "text": "栈+递归。遇到[开启新的递归，遇到]返回",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/385.mini-parser.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/385.mini-parser.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def deserialize(self, s: str) -> NestedInteger:\n        def dfs(cur):\n            if type(cur) == int:\n                return NestedInteger(cur)\n            ans = NestedInteger()\n            for nxt in cur:\n                ans.add(dfs(nxt))\n            return ans\n\n        return dfs(eval(s))\n"
        },
        {
            "language": "py",
            "text": "\n\n# \"\"\"\n# This is the interface that allows for creating nested lists.\n# You should not implement it, or speculate about its implementation\n# \"\"\"\n#class NestedInteger:\n#    def __init__(self, value=None):\n#        \"\"\"\n#        If value is not specified, initializes an empty list.\n#        Otherwise initializes a single integer equal to value.\n#        \"\"\"\n#\n#    def isInteger(self):\n#        \"\"\"\n#        @return True if this NestedInteger holds a single integer, rather than a nested list.\n#        :rtype bool\n#        \"\"\"\n#\n#    def add(self, elem):\n#        \"\"\"\n#        Set this NestedInteger to hold a nested list and adds a nested integer elem to it.\n#        :rtype void\n#        \"\"\"\n#\n#    def setInteger(self, value):\n#        \"\"\"\n#        Set this NestedInteger to hold a single integer equal to value.\n#        :rtype void\n#        \"\"\"\n#\n#    def getInteger(self):\n#        \"\"\"\n#        @return the single integer that this NestedInteger holds, if it holds a single integer\n#        Return None if this NestedInteger holds a nested list\n#        :rtype int\n#        \"\"\"\n#\n#    def getList(self):\n#        \"\"\"\n#        @return the nested list that this NestedInteger holds, if it holds a nested list\n#        Return None if this NestedInteger holds a single integer\n#        :rtype List[NestedInteger]\n#        \"\"\"\nclass Solution:\n    def deserialize(self, s: str) -> NestedInteger:\n        def dfs(cur):\n            if type(cur) == int:\n                return NestedInteger(cur)\n            ans = NestedInteger()\n            for nxt in cur:\n                ans.add(dfs(nxt))\n            return ans\n        def to_array(i):\n            stack = []\n            num = ''\n            while i < len(s):\n                if s[i] == ' ':\n                    i += 1\n                    continue\n                elif s[i] == ',':\n                    if num:\n                        stack.append(int(num or '0'))\n                        num = ''\n                elif s[i] == '[':\n                    j, t = to_array(i+1)\n                    stack.append(t)\n                    i = j\n                elif s[i] == ']':\n                    break\n                else:\n                    num += s[i]\n                i += 1\n            if num:\n                stack.append(int(num))\n            return i, stack\n        return dfs(to_array(0)[1][0])\n\n"
        }
    ]
},
"decode-string":{
    "id": "394",
    "name": "decode-string",
    "pre": [
        {
            "text": "栈",
            "link": null,
            "color": "red"
        },
        {
            "text": "括号匹配",
            "link": null,
            "color": "cyan"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/394.decode-string.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/394.decode-string.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def decodeString(self, s: str) -> str:\n        stack = []\n        for c in s:\n            if c == ']':\n                repeatStr = ''\n                repeatCount = ''\n                while stack and stack[-1] != '[':\n                    repeatStr = stack.pop() + repeatStr\n                # pop 掉 \"[\"\n                stack.pop()\n                while stack and stack[-1].isnumeric():\n                    repeatCount = stack.pop() + repeatCount\n                stack.append(repeatStr * int(repeatCount))\n            else:\n                stack.append(c)\n        return \"\".join(stack)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n\n    def decodeString(self, s: str) -> str:\n        def dfs(start):\n            repeat_str = repeat_count = ''\n            while start < len(s):\n                if s[start].isnumeric():\n                    repeat_count += s[start]\n                elif s[start] == '[':\n                    # 更新指针\n                    start, t_str = dfs(start + 1)\n                    # repeat_count 仅作用于 t_str，而不作用于当前的 repeat_str\n                    repeat_str = repeat_str + t_str * int(repeat_count)\n                    repeat_count = ''\n                elif s[start] == ']':\n                    return start, repeat_str\n                else:\n                    repeat_str += s[start]\n                start += 1\n            return repeat_str\n        return dfs(0)\n"
        }
    ]
},
"binary-watch":{
    "id": "401",
    "name": "binary-watch",
    "pre": [
        {
            "text": "笛卡尔积",
            "link": null,
            "color": "red"
        },
        {
            "text": "回溯",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/backtrack.md",
            "color": "green"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/401.binary-watch.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/401.binary-watch.md",
    "code": [
        {
            "language": "py",
            "text": "\n# 枚举小时\nfor a in possible_number(i):\n    # 小时确定了，分就是 num - i\n    for b in possible_number(num - i, True):\n        ans.add(str(a) + \":\" + str(b).rjust(2, '0'))\n"
        },
        {
            "language": "py",
            "text": "\nfor i in range(min(4, num + 1)):\n    for a in possible_number(i):\n        for b in possible_number(num - i, True):\n            ans.add(str(a) + \":\" + str(b).rjust(2, '0'))\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def readBinaryWatch(self, num: int) -> List[str]:\n        def possible_number(count, minute=False):\n            if count == 0: return [0]\n            if minute:\n                return filter(lambda a: a < 60, map(sum, combinations([1, 2, 4, 8, 16, 32], count)))\n            return filter(lambda a: a < 12, map(sum, combinations([1, 2, 4, 8], count)))\n        ans = set()\n        for i in range(min(4, num + 1)):\n            for a in possible_number(i):\n                for b in possible_number(num - i, True):\n                    ans.add(str(a) + \":\" + str(b).rjust(2, '0'))\n        return list(ans)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def readBinaryWatch(self, num: int) -> List[str]:\n        return [str(a) + \":\" + str(b).rjust(2, '0') for a in range(12) for b in range(60) if (bin(a)+bin(b)).count('1') == num]\n"
        }
    ]
},
"partition-equal-subset-sum":{
    "id": "416",
    "name": "partition-equal-subset-sum",
    "pre": [
        {
            "text": "DFS",
            "link": null,
            "color": "red"
        },
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/416.partition-equal-subset-sum.md",
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
"longest-repeating-character-replacement":{
    "id": "424",
    "name": "longest-repeating-character-replacement",
    "pre": [],
    "keyPoints": [
        {
            "text": "最长连续1模型",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/424.longest-repeating-character-replacement.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/424.longest-repeating-character-replacement.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        def fix(c, k):\n            ans = i = 0\n            for j in range(len(s)):\n                k -= s[j] != c\n                while i < j and k < 0:\n                    k += s[i] != c\n                    i += 1\n                ans = max(ans, j - i + 1)\n            return ans\n \n        ans = 0\n        for i in range(26):\n            ans = max(ans, fix(chr(ord(\"A\") + i), k))\n        return ans\n \n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        if not s: return 0\n        counts = [0] * 26\n        i = most_fraq = 0\n        for j in range(len(s)):\n            counts[ord(s[j]) - ord(\"A\")] += 1\n            most_fraq = max(most_fraq, counts[ord(s[j]) - ord(\"A\")])\n            if i < j and j - i + 1 - most_fraq > k:\n                counts[ord(s[i]) - ord(\"A\")] -= 1\n                i += 1\n        return j - i + 1\n"
        }
    ]
},
"path-sum-iii":{
    "id": "437",
    "name": "path-sum-iii",
    "pre": [
        {
            "text": "hashmap",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "通过hashmap，以空间换时间",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/437.path-sum-iii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/437.path-sum-iii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n// the number of the paths starting from self\nfunction helper(root, sum) {\n  if (root === null) return 0;\n  const l = helper(root.left, sum - root.val);\n  const r = helper(root.right, sum - root.val);\n\n  return l + r + (root.val === sum ? 1 : 0);\n}\n/**\n * @param {TreeNode} root\n * @param {number} sum\n * @return {number}\n */\nvar pathSum = function (root, sum) {\n  // 空间复杂度O(n) 时间复杂度介于O(nlogn) 和 O(n^2)\n  // tag: dfs tree\n  if (root === null) return 0;\n  // the number of the paths starting from self\n  const self = helper(root, sum);\n  // we don't know the answer, so we just pass it down\n  const l = pathSum(root.left, sum);\n  // we don't know the answer, so we just pass it down\n  const r = pathSum(root.right, sum);\n\n  return self + l + r;\n};\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=437 lang=javascript\n *\n * [437] Path Sum III\n */\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\nfunction helper(root, acc, target, hashmap) {\n  // see also : https://leetcode.com/problems/subarray-sum-equals-k/\n\n  if (root === null) return 0;\n  let count = 0;\n  acc += root.val;\n  if (acc === target) count++;\n  if (hashmap[acc - target] !== void 0) {\n    count += hashmap[acc - target];\n  }\n  if (hashmap[acc] === void 0) {\n    hashmap[acc] = 1;\n  } else {\n    hashmap[acc] += 1;\n  }\n  const res =\n    count +\n    helper(root.left, acc, target, hashmap) +\n    helper(root.right, acc, target, hashmap);\n\n  // 这里要注意别忘记了\n  hashmap[acc] = hashmap[acc] - 1;\n\n  return res;\n}\n\nvar pathSum = function (root, sum) {\n  const hashmap = {};\n  return helper(root, 0, sum, hashmap);\n};\n"
        }
    ]
},
"find-all-anagrams-in-a-string":{
    "id": "438",
    "name": "find-all-anagrams-in-a-string",
    "pre": [
        {
            "text": "Sliding Window",
            "link": null,
            "color": "orange"
        },
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/438.find-all-anagrams-in-a-string.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/438.find-all-anagrams-in-a-string.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic List<Integer> findAnagrams(String s, String p) {\n\n    List<Integer> res = new LinkedList<>();\n    if (s == null || p == null || s.length() < p.length())\n        return res;\n\n    int[] ch = new int[26];\n    //统计p串字符个数\n    for (char c : p.toCharArray())\n        ch[c - 'a']++;\n    //把窗口扩成p串的长度\n    int start = 0, end = 0, rest = p.length();\n    for (; end < p.length(); end++) {\n        char temp = s.charAt(end);\n        ch[temp - 'a']--;\n        if (ch[temp - 'a'] >= 0)\n            rest--;\n    }\n\n    if (rest == 0)\n        res.add(0);\n    //开始一步一步向右移动窗口。\n    while (end < s.length()) {\n        //左边的拿出来一个并更新状态\n        char temp = s.charAt(start);\n        if (ch[temp - 'a'] >= 0)\n            rest++;\n        ch[temp - 'a']++;\n        start++;\n        //右边的拿进来一个并更新状态\n        temp = s.charAt(end);\n        ch[temp - 'a']--;\n        if (ch[temp - 'a'] >= 0)\n            rest--;\n        end++;\n        // 状态合法就存到结果集合\n        if (rest == 0)\n            res.add(start);\n    }\n\n    return res;\n}\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findAnagrams(self, s: str, p: str) -> List[int]:\n        target = collections.Counter(p)\n        ans = []\n        for i in range(len(s)):\n            if i >= len(p):\n                target[s[i - len(p)]] += 1\n                if target[s[i - len(p)]] == 0:\n                    del target[s[i - len(p)]]\n            target[s[i]] -= 1\n            if target[s[i]] == 0:\n                del target[s[i]]\n            if len(target) == 0:\n                ans.append(i - len(p) + 1)\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass FrequencyDict:\n   def __init__(self, s):\n       self.d = collections.Counter()\n       for char in s:\n           self.increment(char)\n\n   def _del_if_zero(self, char):\n       if self.d[char] == 0:\n           del self.d[char]\n\n   def is_empty(self):\n       return not self.d\n\n   def decrement(self, char):\n       self.d[char] -= 1\n       self._del_if_zero(char)\n\n   def increment(self, char):\n       self.d[char] += 1\n       self._del_if_zero(char)\n\n\nclass Solution:\n   def findAnagrams(self, s: str, p: str) -> List[int]:\n       ans = []\n\n       freq = FrequencyDict(p)\n\n       for char in s[:len(p)]:\n           freq.decrement(char)\n\n       if freq.is_empty():\n           ans.append(0)\n\n       for i in range(len(p), len(s)):\n           start, end = s[i - len(p)], s[i]\n           freq.increment(start)\n           freq.decrement(end)\n           if freq.is_empty():\n               ans.append(i - len(p) + 1)\n\n       return ans\n"
        }
    ]
},
"add-two-numbers-ii":{
    "id": "445",
    "name": "add-two-numbers-ii",
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
    "companies": [
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/445.add-two-numbers-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/445.add-two-numbers-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=445 lang=javascript\n *\n * [445] Add Two Numbers II\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function (l1, l2) {\n  const stack1 = [];\n  const stack2 = [];\n  const stack = [];\n\n  let cur1 = l1;\n  let cur2 = l2;\n  let curried = 0;\n\n  while (cur1) {\n    stack1.push(cur1.val);\n    cur1 = cur1.next;\n  }\n\n  while (cur2) {\n    stack2.push(cur2.val);\n    cur2 = cur2.next;\n  }\n\n  let a = null;\n  let b = null;\n\n  while (stack1.length > 0 || stack2.length > 0) {\n    a = Number(stack1.pop()) || 0;\n    b = Number(stack2.pop()) || 0;\n\n    stack.push((a + b + curried) % 10);\n\n    if (a + b + curried >= 10) {\n      curried = 1;\n    } else {\n      curried = 0;\n    }\n  }\n\n  if (curried === 1) {\n    stack.push(1);\n  }\n\n  const dummy = {};\n\n  let current = dummy;\n\n  while (stack.length > 0) {\n    current.next = {\n      val: stack.pop(),\n      next: null,\n    };\n\n    current = current.next;\n  }\n\n  return dummy.next;\n};\n"
        },
        {
            "language": "py",
            "text": "\n# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:\n        def listToStack(l: ListNode) -> list:\n            stack, c = [], l\n            while c:\n                stack.append(c.val)\n                c = c.next\n            return stack\n\n        # transfer l1 and l2 into stacks\n        stack1, stack2 = listToStack(l1), listToStack(l2)\n\n        # add stack1 and stack2\n        diff = abs(len(stack1) - len(stack2))\n        stack1 = ([0]*diff + stack1 if len(stack1) < len(stack2) else stack1)\n        stack2 = ([0]*diff + stack2 if len(stack2) < len(stack1) else stack2)\n        stack3 = [x + y for x, y in zip(stack1, stack2)]\n\n        # calculate carry for each item in stack3 and add one to the item before it\n        carry = 0\n        for i, val in enumerate(stack3[::-1]):\n            index = len(stack3) - i - 1\n            carry, stack3[index] = divmod(val + carry, 10)\n            if carry and index == 0:\n                stack3 = [1] + stack3\n            elif carry:\n                stack3[index - 1] += 1\n\n        # transfer stack3 to a linkedList\n        result = ListNode(0)\n        c = result\n        for item in stack3:\n            c.next = ListNode(item)\n            c = c.next\n\n        return result.next\n"
        }
    ]
},
"4-sum-ii":{
    "id": "454",
    "name": "4-sum-ii",
    "pre": [
        {
            "text": "hashTable",
            "link": null,
            "color": "green"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/454.4-sum-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/454.4-sum-ii.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=454 lang=javascript\n *\n * [454] 4Sum II\n *\n * https://leetcode.com/problems/4sum-ii/description/\n/**\n * @param {number[]} A\n * @param {number[]} B\n * @param {number[]} C\n * @param {number[]} D\n * @return {number}\n */\nvar fourSumCount = function (A, B, C, D) {\n  const sumMapper = {};\n  let res = 0;\n  for (let i = 0; i < A.length; i++) {\n    for (let j = 0; j < B.length; j++) {\n      sumMapper[A[i] + B[j]] = (sumMapper[A[i] + B[j]] || 0) + 1;\n    }\n  }\n\n  for (let i = 0; i < C.length; i++) {\n    for (let j = 0; j < D.length; j++) {\n      res += sumMapper[-(C[i] + D[j])] || 0;\n    }\n  }\n\n  return res;\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:\n        mapper = {}\n        res = 0\n        for i in A:\n            for j in B:\n                mapper[i + j] = mapper.get(i + j, 0) + 1\n\n        for i in C:\n            for j in D:\n                res += mapper.get(-1 * (i + j), 0)\n        return res\n"
        }
    ]
},
"AssignCookies":{
    "id": "455",
    "name": "AssignCookies",
    "pre": [
        {
            "text": "贪心算法",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/greedy.md",
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
            "text": "先排序再贪心",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/455.AssignCookies.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/455.AssignCookies.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} g\n * @param {number[]} s\n * @return {number}\n */\nconst findContentChildren = function (g, s) {\n    g = g.sort((a, b) => a - b);\n    s = s.sort((a, b) => a - b);\n    let gi = 0; // 胃口值\n    let sj = 0; // 饼干尺寸\n    let res = 0;\n    while (gi < g.length && sj < s.length) {\n        // 当饼干 sj >= 胃口 gi 时，饼干满足胃口，更新满足的孩子数并移动指针\n        if (s[sj] >= g[gi]) {\n            gi++;\n            sj++;\n            res++;\n        } else {\n            // 当饼干 sj < 胃口 gi 时，饼干不能满足胃口，需要换大的\n            sj++;\n        }\n    }\n    return res;\n};\n"
        }
    ]
},
"132-pattern":{
    "id": "456",
    "name": "132-pattern",
    "pre": [
        {
            "text": "单调栈",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/monotone-stack.md",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "先找到32模式，再找132模式。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "固定2,从右往左遍历,使用单调栈获取最大的小于当前数的2，并将当前数作为3。",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/456.132-pattern.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/456.132-pattern.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def find132pattern(self, A: List[int]) -> bool:\n        stack = []\n        p2 = float(\"-inf\")\n        for a in A[::-1]:\n            # p2 不为初始值意味着我们已经找到了 32 模式，因此 a < p2 时候，我们就找到了 132 模式\n            if a < p2:\n                return True\n            while stack and a > stack[-1]:\n                p2 = stack.pop()\n            stack.append(a)\n\n        return False\n"
        }
    ]
},
"circular-array-loop":{
    "id": "457",
    "name": "circular-array-loop",
    "pre": [
        {
            "text": "图",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/457.circular-array-loop.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/457.circular-array-loop.md",
    "code": [
        {
            "language": "py",
            "text": "\nfor i in range(n):\n    if can(i): return True\nreturn False\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def circularArrayLoop(self, nums: List[int]) -> bool:\n        def can(cur, start, steps):\n            if nums[cur] ^ nums[start] < 0: return False\n            if cur == start and steps != 0: return steps > 1\n            if cur in visited: return False\n            visited.add(cur)\n            return can(((cur + nums[cur]) % n + n ) % n, start, steps + 1)\n        n = len(nums)\n        visited = None\n        for i in range(n):\n            visited = set()\n            if can(i, i, 0): return True\n        return False\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def circularArrayLoop(self, nums: List[int]) -> bool:\n        def can(cur, start, steps):\n            if nums[cur] ^ nums[start] < 0: return False\n            if cur == start and steps != 0: return steps > 1\n            if steps > n: return False\n            return can(((cur + nums[cur]) % n + n ) % n, start, steps + 1)\n        n = len(nums)\n        for i in range(n):\n            if can(i, i, 0): return True\n        return False\n\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def circularArrayLoop(self, nums: List[int]) -> bool:\n        def can(cur, start, start_v):\n            if nums[cur] >= 5000: return nums[cur] - 5000 == start\n            if nums[cur] ^ start_v < 0: return False\n            nxt = ((cur + nums[cur]) % n + n ) % n\n            if nxt == cur: return False\n            nums[cur] = start + 5000\n            return can(nxt, start, start_v)\n        n = len(nums)\n        for i in range(n):\n            if can(i, i, nums[i]): return True\n        return False\n\n"
        }
    ]
},
"lfu-cache":{
    "id": "460",
    "name": "lfu-cache",
    "pre": [
        {
            "text": "链表",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "HashMap",
            "link": null,
            "color": "orange"
        }
    ],
    "keyPoints": [
        {
            "text": "分析用两个`Map`分别保存`nodeMap{key,node}`和`freqMap{frequent,DoublyLinkedList}`。实现`get`和`put`操作都是`O(1)`的时间复杂度。可以用Java自带的一些数据结构，比如HashLinkedHashSet，这样就不需要自己自建Node，DoublelyLinkedList。可以很大程度的缩减代码量。",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/460.lfu-cache.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/460.lfu-cache.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class LC460LFUCache {\n  class Node {\n    int key, val, freq;\n    Node prev, next;\n\n    Node(int key, int val) {\n      this.key = key;\n      this.val = val;\n      freq = 1;\n    }\n  }\n\n  class DoubleLinkedList {\n    private Node head;\n    private Node tail;\n    private int size;\n\n    DoubleLinkedList() {\n      head = new Node(0, 0);\n      tail = new Node(0, 0);\n      head.next = tail;\n      tail.prev = head;\n    }\n\n    void add(Node node) {\n      head.next.prev = node;\n      node.next = head.next;\n      node.prev = head;\n      head.next = node;\n      size++;\n    }\n\n    void remove(Node node) {\n      node.prev.next = node.next;\n      node.next.prev = node.prev;\n      size--;\n    }\n\n    // always remove last node if last node exists\n    Node removeLast() {\n      if (size > 0) {\n        Node node = tail.prev;\n        remove(node);\n        return node;\n      } else return null;\n    }\n  }\n\n  // cache capacity\n  private int capacity;\n  // min frequent\n  private int minFreq;\n  Map<Integer, Node> nodeMap;\n  Map<Integer, DoubleLinkedList> freqMap;\n  public LC460LFUCache(int capacity) {\n    this.minFreq = 0;\n    this.capacity = capacity;\n    nodeMap = new HashMap<>();\n    freqMap = new HashMap<>();\n  }\n\n  public int get(int key) {\n    Node node = nodeMap.get(key);\n    if (node == null) return -1;\n    update(node);\n    return node.val;\n  }\n\n  public void put(int key, int value) {\n    if (capacity == 0) return;\n    Node node;\n    if (nodeMap.containsKey(key)) {\n      node = nodeMap.get(key);\n      node.val = value;\n      update(node);\n    } else {\n      node = new Node(key, value);\n      nodeMap.put(key, node);\n      if (nodeMap.size() == capacity) {\n        DoubleLinkedList lastList = freqMap.get(minFreq);\n        nodeMap.remove(lastList.removeLast().key);\n      }\n      minFreq = 1;\n      DoubleLinkedList newList = freqMap.getOrDefault(node.freq, new DoubleLinkedList());\n      newList.add(node);\n      freqMap.put(node.freq, newList);\n    }\n  }\n\n  private void update(Node node) {\n    DoubleLinkedList oldList = freqMap.get(node.freq);\n    oldList.remove(node);\n    if (node.freq == minFreq && oldList.size == 0) minFreq++;\n    node.freq++;\n    DoubleLinkedList newList = freqMap.getOrDefault(node.freq, new DoubleLinkedList());\n    newList.add(node);\n    freqMap.put(node.freq, newList);\n  }\n }\n"
        }
    ]
},
"can-i-win":{
    "id": "464",
    "name": "can-i-win",
    "pre": [
        {
            "text": "动态规划",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md \"动态规划\"",
            "color": "red"
        },
        {
            "text": "回溯",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/backtrack.md",
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "分析",
            "link": null,
            "color": "blue"
        },
        {
            "text": "回溯",
            "link": null,
            "color": "blue"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "blue"
        },
        {
            "text": "状态压缩",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "linkedin"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/464.can-i-win.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/464.can-i-win.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic class Solution {\n    public boolean canIWin(int maxChoosableInteger, int desiredTotal) {\n\n        if (maxChoosableInteger >= desiredTotal) return true;\n        if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) return false;\n\n        Boolean[] dp = new Boolean[(1 << maxChoosableInteger) - 1];\n        return dfs(maxChoosableInteger, desiredTotal, 0, dp);\n    }\n\n    private boolean dfs(int maxChoosableInteger, int desiredTotal, int state, Boolean[] dp) {\n        if (dp[state] != null)\n            return dp[state];\n        for (int i = 1; i <= maxChoosableInteger; i++){\n            int tmp = (1 << (i - 1));\n            if ((tmp & state) == 0){\n                if (desiredTotal - i <= 0 || !dfs(maxChoosableInteger, desiredTotal - i, tmp|state, dp)) {\n                    dp[state] = true;\n                    return true;\n                }\n            }\n        }\n        dp[state] = false;\n        return false;\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar canIWin = function (maxChoosableInteger, desiredTotal) {\n  // 直接获胜\n  if (maxChoosableInteger >= desiredTotal) return true;\n\n  // 全部拿完也无法到达\n  var sum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;\n  if (desiredTotal > sum) return false;\n\n  // 记忆化\n  var dp = {};\n\n  /**\n   * @param {number} total 剩余的数量\n   * @param {number} state 使用二进制位表示抽过的状态\n   */\n  function f(total, state) {\n    // 有缓存\n    if (dp[state] !== undefined) return dp[state];\n\n    for (var i = 1; i <= maxChoosableInteger; i++) {\n      var curr = 1 << i;\n      // 已经抽过这个数\n      if (curr & state) continue;\n      // 直接获胜\n      if (i >= total) return (dp[state] = true);\n      // 可以让对方输\n      if (!f(total - i, state | curr)) return (dp[state] = true);\n    }\n\n    // 没有任何让对方输的方法\n    return (dp[state] = false);\n  }\n\n  return f(desiredTotal, 0);\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    bool canIWin(int maxChoosableInteger, int desiredTotal) {\n        int sum = (1+maxChoosableInteger)*maxChoosableInteger/2;\n        if(sum < desiredTotal){\n            return false;\n        }\n        unordered_map<int,int> d;\n        return dfs(maxChoosableInteger,0,desiredTotal,0,d);\n    }\n\n    bool dfs(int n,int s,int t,int S,unordered_map<int,int>& d){\n        if(d[S]) return  d[S];\n        int& ans = d[S];\n\n        if(s >= t){\n            return ans = true;\n        }\n        if(S == (((1 << n)-1) << 1)){\n            return ans = false;\n        }\n\n        for(int m = 1;m <=n;++m){\n            if(S & (1 << m)){\n                continue;\n            }\n            int nextS = S|(1 << m);\n            if(s+m >= t){\n                return ans = true;\n            }\n            bool r1 = dfs(n,s+m,t,nextS,d);\n            if(!r1){\n                return ans = true;\n            }\n        }\n        return ans = false;\n    }\n};\n\n"
        },
        {
            "language": "py",
            "text": "\ndef canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:\n        # acc 表示当前累计的数字和\n        def dfs(acc):\n            if acc >= desiredTotal:\n                return False\n            for n in range(1, maxChoosableInteger + 1):\n                # 对方有一种情况赢不了，我就选这个数字就能赢了，返回 true，代表可以赢。\n                if not dfs(acc + n):\n                    return True\n            return False\n\n        # 初始化集合，用于保存当前已经选择过的数。\n        return dfs(0)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:\n        if desiredTotal <= maxChoosableInteger:\n            return True\n        if sum(range(maxChoosableInteger + 1)) < desiredTotal:\n            return False\n        # picked 用于保存当前已经选择过的数。\n        # acc 表示当前累计的数字和\n        def backtrack(picked, acc):\n            if acc >= desiredTotal:\n                return False\n            if len(picked) == maxChoosableInteger:\n                # 说明全部都被选了，没得选了，返回 False， 代表输了。\n                return False\n            for n in range(1, maxChoosableInteger + 1):\n                if n not in picked:\n                    picked.add(n)\n                    # 对方有一种情况赢不了，我就选这个数字就能赢了，返回 true，代表可以赢。\n                    if not backtrack(picked, acc + n):\n                        picked.remove(n)\n                        return True\n                    picked.remove(n)\n            return False\n\n        # 初始化集合，用于保存当前已经选择过的数。\n        return backtrack(set(), 0)\n"
        },
        {
            "language": "py",
            "text": "\n1 << a\n"
        },
        {
            "language": "py",
            "text": "\na | b\n"
        },
        {
            "language": "py",
            "text": "\nseen = 0b0000000\na = 0b0000001\nb = ob0000010\n\nseen |= a 后，  seen 为 0b0000001\nseen |= b 后，  seen 为 0b0000011\n"
        },
        {
            "language": "py",
            "text": "\na & b\n"
        },
        {
            "language": "py",
            "text": "\nmask = 0b0000010\na & mask == 1 说明 a 在第二位（从低到高）是 1\na & mask == 0 说明 a 在第二位（从低到高）是 0\n"
        },
        {
            "language": "py",
            "text": "\npicked == (1 << (maxChoosableInteger + 1)) - 1\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:\n        if desiredTotal <= maxChoosableInteger:\n            return True\n        if sum(range(maxChoosableInteger + 1)) < desiredTotal:\n            return False\n\n        @lru_cache(None)\n        def dp(picked, acc):\n            if acc >= desiredTotal:\n                return False\n            if picked == (1 << (maxChoosableInteger + 1)) - 1:\n                return False\n            for n in range(1, maxChoosableInteger + 1):\n                if picked & 1 << n == 0:\n                    if not dp(picked | 1 << n, acc + n):\n                        return True\n            return False\n\n        return dp(0, 0)\n"
        }
    ]
},
"implement-rand10-using-rand7":{
    "id": "470",
    "name": "implement-rand10-using-rand7",
    "pre": [
        {
            "text": "概率",
            "link": null,
            "color": "red"
        },
        {
            "text": "拒绝采样",
            "link": null,
            "color": "orange"
        }
    ],
    "keyPoints": [
        {
            "text": "选择等概率的十个数即可实现rand10",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/470.implement-rand10-using-rand7.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/470.implement-rand10-using-rand7.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def rand10(self):\n        while True:\n            row = rand7()\n            col = rand7()\n            idx = col + (row - 1) * 7\n            if idx <= 40:\n                break\n\n        return 1 + (idx - 1)%10\n\n"
        }
    ]
},
"concatenated-words":{
    "id": "472",
    "name": "concatenated-words",
    "pre": [
        {
            "text": "前缀树",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/trie.md",
            "color": "purple"
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
    "companies": [
        {
            "name": "阿里巴巴"
        },
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/472.concatenated-words.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/472.concatenated-words.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Trie:\n\n    def __init__(self):\n        self.Trie = {}\n        self.visited = {}\n\n    def insert(self, word):\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                curr[w] = {}\n            curr = curr[w]\n        curr['#'] = 1\n\n    def cntWords(self, word):\n        if not word:\n            return 0\n        if word in self.visited:\n            return self.visited[word]\n        curr = self.Trie\n        res = float('-inf')\n\n        for i, w in enumerate(word):\n            if w not in curr:\n                return res\n            curr = curr[w]\n            if '#' in curr:\n                res = max(res, 1 + self.cntWords(word[i + 1:]))\n        self.visited[word] = res\n        return res\n\n\nclass Solution:\n    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:\n        self.trie = Trie()\n        res = []\n\n        for word in words:\n            self.trie.insert(word)\n        for word in words:\n            if self.trie.cntWords(word) >= 2:\n                res.append(word)\n        return res\n"
        }
    ]
},
"matchsticks-to-square":{
    "id": "473",
    "name": "matchsticks-to-square",
    "pre": [
        {
            "text": "回溯",
            "link": null,
            "color": "green"
        },
        {
            "text": "剪枝",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "如果火柴和不是4的倍数，需要剪枝。",
            "link": null,
            "color": "blue"
        },
        {
            "text": "降序排序，优先选择权值大的可以介绍搜索树的规模。这是放置型回溯的常见的固定套路之一。",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/473.matchsticks-to-square.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/473.matchsticks-to-square.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def makesquare(self, matchsticks: List[int]) -> bool:\n        side = sum(matchsticks) // 4\n        sides = [0] * 4\n        # 剪枝处理\n        if side * 4 != sum(matchsticks):\n            return False\n\n        matchsticks.sort(reverse=True)\n        #  带权值的放置型回溯，有一个剪枝套路就是进行一次降序排序。\n        # 由于:\n        # 1. 性能瓶颈不在排序，并且先放大的可以有效减少极端情况下的执行次数，因此剪枝效果很棒。\n        # 2. 既然都回溯了，那么顺序也是无所谓的，因此打乱顺序无所谓。 而如果真的顺序有所谓，我们也可以排序后记录下排序前的索引也帮不难。\n        # 3. 优先选择大的，这样可选择变少了，可以有效减少递归树节点的个数，进而使得搜索时间大大降低。\n        def backtrack(i):\n            if i == len(matchsticks):\n                return sides[0] == sides[1] == sides[2] == sides[3] == side\n            for j in range(4):\n                if sides[j] + matchsticks[i] <= side:\n                    sides[j] += matchsticks[i]\n                    if backtrack(i + 1):\n                        return True\n                    sides[j] -= matchsticks[i]\n            return False\n\n        return backtrack(0)\n\n\n"
        }
    ]
},
"sliding-window-median":{
    "id": "480",
    "name": "sliding-window-median",
    "pre": [
        {
            "text": "二分查找",
            "link": "https://github.com/azl397985856/leetcode/blob/master/91/binary-search.md",
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "滑动窗口+二分",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/480.sliding-window-median.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/480.sliding-window-median.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def medianSlidingWindow(self, A: List[int], k: int) -> List[float]:\n        ans = []\n        win = []\n\n        for i, a in enumerate(A):\n            bisect.insort(win, a)\n            if i >= k:\n                win.pop(bisect.bisect_left(win, A[i - k]))\n            if i >= k - 1:\n                if k & 1:\n                    median = win[k // 2]\n                else:\n                    median = (win[k // 2] + win[k // 2 - 1]) / 2\n                ans.append(median)\n        return ans\n\n\n"
        }
    ]
},
"smallest-good-base":{
    "id": "483",
    "name": "smallest-good-base",
    "pre": [
        {
            "text": "二分法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "进制转换",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "利用等比数列求和公式可降低时间复杂度",
            "link": null,
            "color": "blue"
        },
        {
            "text": "从进制转换入手发现单调性，从而使用二分解决",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/483.smallest-good-base.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/483.smallest-good-base.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def smallestGoodBase(self, n: str) -> str:\n        n = int(n)\n        # 上面提到的 base 进制转十进制公式。\n        # 使用等比数列求和公式可简化时间复杂度\n        def sum_with(base, N):\n            return (1 - base ** N) // (1 - base)\n            # return sum(1 * base ** i for i in range(N))\n        # bin(n) 会计算出 n 的二进制表示， 其会返回形如 '0b10111' 的字符串，因此需要减去 2。\n        for N in range(len(bin(n)) - 2, 0, -1):\n            l = 2\n            r = n - 1\n            while l <= r:\n                mid = (l + r) // 2\n                v = sum_with(mid, N)\n\n                if v < n:\n                    l = mid + 1\n                elif v > n:\n                    r = mid - 1\n                else:\n                    return str(mid)\n\n"
        }
    ]
},
"zuma-game":{
    "id": "488",
    "name": "zuma-game",
    "pre": [
        {
            "text": "回溯",
            "link": null,
            "color": "green"
        },
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        },
        {
            "text": "双指针",
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
            "text": "双指针写法",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "百度"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/488.zuma-game.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/488.zuma-game.md",
    "code": [
        {
            "language": "py",
            "text": "\ni = 0\nwhile i < len(board):\n    j = i + 1\n    while j < len(board) and board[i] == board[j]: j += 1\n    # 其他逻辑\n\n    # 更新左指针\n    i = j\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findMinStep(self, board: str, hand: str) -> int:\n        def backtrack(board):\n            if not board: return 0\n            i = 0\n            ans = 6\n            while i < len(board):\n                j = i + 1\n                while j < len(board) and board[i] == board[j]: j += 1\n                balls = 3 - (j - i)\n                if counter[board[i]] >= balls:\n                    balls = max(0, balls)\n                    counter[board[i]] -= balls\n                    ans = min(ans, balls + backtrack(board[:i] + board[j:]))\n                    counter[board[i]] += balls\n                i = j\n            return ans\n\n        counter = collections.Counter(hand)\n        ans = backtrack(board)\n        return -1 if ans > 5 else ans\n\n"
        }
    ]
},
"reverse-pairs":{
    "id": "493",
    "name": "reverse-pairs",
    "pre": [
        {
            "text": "归并排序",
            "link": null,
            "color": "cyan"
        },
        {
            "text": "逆序数",
            "link": null,
            "color": "volcano"
        },
        {
            "text": "分治",
            "link": null,
            "color": "gold"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/493.reverse-pairs.md",
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
    "pre": [
        {
            "text": "动态规划",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/494.target-sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/494.target-sum.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=494 lang=javascript\n *\n * [494] Target Sum\n *\n */\n// 这个是我们熟悉的问题了\n// 我们这里需要求解的是nums里面有多少种可以组成target的方式\nvar sumCount = function (nums, target) {\n  // 这里通过观察，我们没必要使用二维数组去存储这些计算结果\n  // 使用一维数组可以有效节省空间\n  const dp = Array(target + 1).fill(0);\n  dp[0] = 1;\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = target; j >= nums[i]; j--) {\n      dp[j] += dp[j - nums[i]];\n    }\n  }\n  return dp[target];\n};\nconst add = (nums) => nums.reduce((a, b) => (a += b), 0);\n/**\n * @param {number[]} nums\n * @param {number} S\n * @return {number}\n */\nvar findTargetSumWays = function (nums, S) {\n  const sum = add(nums);\n  if (sum < S) return 0;\n  if ((S + sum) % 2 === 1) return 0;\n  return sumCount(nums, (S + sum) >> 1);\n};\n"
        }
    ]
},
"base-7":{
    "id": "504",
    "name": "base-7",
    "pre": [],
    "keyPoints": [
        {
            "text": "除x取余，并逆序输出",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/504.base-7.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/504.base-7.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def convertToBase7(self, num: int) -> str:\n        if num < 0:\n            return \"-\" + self.convertToBase7(-num)\n        if num < 7:\n            return str(num)\n        return self.convertToBase7(num // 7) + str(num % 7)\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def convertToBase7(self, num: int) -> str:\n        if num == 0:\n            return 0\n        ans = []\n        is_negative = num < 0\n        num = abs(num)\n        while num > 0:\n            num, remain = num // 7, num % 7\n            ans.append(str(remain))\n\n        return \"-\" + \"\".join(ans[::-1]) if is_negative else \"\".join(ans[::-1])\n\n"
        }
    ]
},
"find-bottom-left-tree-value":{
    "id": "513",
    "name": "find-bottom-left-tree-value",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/513.find-bottom-left-tree-value.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/513.find-bottom-left-tree-value.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    Map<Integer,Integer> map = new HashMap<>();\n    int maxLevel = 0;\n    public int findBottomLeftValue(TreeNode root) {\n        if (root == null) return 0;\n        LinkedList<TreeNode> deque = new LinkedList<>();\n        deque.add(root);\n        int res = 0;\n        while(!deque.isEmpty()) {\n            int size = deque.size();\n            for (int i = 0; i < size; i++) {\n                TreeNode node = deque.pollFirst();\n                if (i == 0) {\n                    res = node.val;\n                }\n                if (node.left != null)deque.addLast(node.left);\n                if (node.right != null)deque.addLast(node.right);\n            }\n        }\n        return res;\n    }\n}\n"
        },
        {
            "language": "java",
            "text": "\nclass Solution {\n    int max = 0;\n    Map<Integer,Integer> map = new HashMap<>();\n    public int findBottomLeftValue(TreeNode root) {\n        if (root == null) return 0;\n        dfs(root,0);\n        return map.get(max);\n    }\n\n    void dfs (TreeNode node,int level){\n        if (node == null){\n            return;\n        }\n        int curLevel = level+1;\n        dfs(node.left,curLevel);\n        if (curLevel > max && !map.containsKey(curLevel)){\n            map.put(curLevel,node.val);\n            max = curLevel;\n        }\n        dfs(node.right,curLevel);\n    }\n\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar findBottomLeftValue = function (root) {\n  let curLevel = [root];\n  let res = root.val;\n  while (curLevel.length) {\n    let nextLevel = [];\n    for (let i = 0; i < curLevel.length; i++) {\n      curLevel[i].left && nextLevel.push(curLevel[i].left);\n      curLevel[i].right && nextLevel.push(curLevel[i].right);\n    }\n    res = curLevel[0].val;\n    curLevel = nextLevel;\n  }\n  return res;\n};\n"
        },
        {
            "language": "js",
            "text": "\nfunction findBottomLeftValue(root) {\n  let maxDepth = 0;\n  let res = root.val;\n\n  dfs(root.left, 0);\n  dfs(root.right, 0);\n\n  return res;\n\n  function dfs(cur, depth) {\n    if (!cur) {\n      return;\n    }\n    const curDepth = depth + 1;\n    if (curDepth > maxDepth) {\n      maxDepth = curDepth;\n      res = cur.val;\n    }\n    dfs(cur.left, curDepth);\n    dfs(cur.right, curDepth);\n  }\n}\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int findBottomLeftValue_bfs(TreeNode* root) {\n        queue<TreeNode*> q;\n        TreeNode* ans = NULL;\n        q.push(root);\n        while (!q.empty()) {\n            ans = q.front();\n            int size = q.size();\n            while (size--) {\n                TreeNode* cur = q.front();\n                q.pop();\n                if (cur->left )\n                    q.push(cur->left);\n                if (cur->right)\n                    q.push(cur->right);\n            }\n        }\n        return ans->val;\n    }\n}\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int res;\n    int max_depth = 0;\n    void findBottomLeftValue_core(TreeNode* root, int depth) {\n        if (root->left || root->right) {\n            if (root->left)\n                findBottomLeftValue_core(root->left, depth + 1);\n            if (root->right)\n                findBottomLeftValue_core(root->right, depth + 1);\n        } else {\n            if (depth > max_depth) {\n                res = root->val;\n                max_depth = depth;\n            }\n        }\n    }\n    int findBottomLeftValue(TreeNode* root) {\n        findBottomLeftValue_core(root, 1);\n        return res;\n    }\n};\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    def findBottomLeftValue(self, root):\n        queue = collections.deque()\n        queue.append(root)\n        while queue:\n            length = len(queue)\n            res = queue[0].val\n            for _ in range(length):\n                cur = queue.popleft()\n                if cur.left:\n                    queue.append(cur.left)\n                if cur.right:\n                    queue.append(cur.right)\n        return res\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution(object):\n\n    def __init__(self):\n        self.res = 0\n        self.max_level = 0\n\n    def findBottomLeftValue(self, root):\n        self.res = root.val\n        def dfs(root, level):\n            if not root:\n                return\n            if level > self.max_level:\n                self.res = root.val\n                self.max_level = level\n            dfs(root.left, level + 1)\n            dfs(root.right, level + 1)\n        dfs(root, 0)\n\n        return self.res\n"
        }
    ]
},
"longest-palindromic-subsequence":{
    "id": "516",
    "name": "longest-palindromic-subsequence",
    "pre": [
        {
            "text": "动态规划",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/516.longest-palindromic-subsequence.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/516.longest-palindromic-subsequence.md",
    "code": [
        {
            "language": "js",
            "text": "\nif (s[i] === s[j]) {\n  dp[i][j] = dp[i + 1][j - 1] + 2;\n} else {\n  dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);\n}\n"
        },
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=516 lang=javascript\n *\n * [516] Longest Palindromic Subsequence\n */\n/**\n * @param {string} s\n * @return {number}\n */\nvar longestPalindromeSubseq = function (s) {\n  // bbbab 返回4\n  // tag : dp\n  const dp = [];\n\n  for (let i = s.length - 1; i >= 0; i--) {\n    dp[i] = Array(s.length).fill(0);\n    for (let j = i; j < s.length; j++) {\n      if (i - j === 0) dp[i][j] = 1;\n      else if (s[i] === s[j]) {\n        dp[i][j] = dp[i + 1][j - 1] + 2;\n      } else {\n        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);\n      }\n    }\n  }\n\n  return dp[0][s.length - 1];\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def longestPalindromeSubseq(self, s: str) -> int:\n        @cache\n        def dp(l,r):\n            if l >= r: return int(l == r)\n            if s[l] == s[r]: \n                return 2 + dp(l+1,r-1)\n            return max(dp(l+1, r), dp(l, r-1))\n        return dp(0, len(s)-1)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def longestPalindromeSubseq(self, s: str) -> int:\n        n = len(s)\n        dp = [[0]*n for _ in range(n)]\n\n        for i in range(n-1, -1, -1):\n            for j in range(i, n):\n                if i == j:\n                    dp[i][j] = 1\n                elif s[i] == s[j]:\n                    dp[i][j] = dp[i+1][j-1]+2\n                else:\n                    dp[i][j] = max(dp[i+1][j], dp[i][j-1])\n        return dp[0][-1]\n        \n "
        }
    ]
},
"coin-change-2":{
    "id": "518",
    "name": "coin-change-2",
    "pre": [
        {
            "text": "动态规划",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
            "color": "red"
        },
        {
            "text": "背包问题",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "动态规划",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/518.coin-change-2.md",
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
            "text": "\n/*\n * @lc app=leetcode id=518 lang=javascript\n *\n * [518] Coin Change 2\n *\n */\n/**\n * @param {number} amount\n * @param {number[]} coins\n * @return {number}\n */\nvar change = function (amount, coins) {\n  if (amount === 0) return 1;\n\n  const dp = [1].concat(Array(amount).fill(0));\n\n  for (let j = 0; j < coins.length; j++) {\n    for (let i = 1; i < amount + 1; i++) {\n      if (i - coins[j] >= 0) {\n        dp[i] = dp[i] + dp[i - coins[j]];\n      }\n    }\n  }\n\n  return dp[dp.length - 1];\n};\n"
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
"contiguous-array":{
    "id": "525",
    "name": "contiguous-array",
    "pre": [
        {
            "text": "前缀和",
            "link": null,
            "color": "cyan"
        }
    ],
    "keyPoints": [
        {
            "text": "将0/1数组转化为",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1/1数组",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/525.contiguous-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/525.contiguous-array.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findMaxLength(self, A: List[int]) -> int:\n        A = [1 if a == 0 else -1 for a in A]\n        ans = acc = 0\n        mapper = {0: -1}\n        for i in range(len(A)):\n            acc += A[i]\n            if acc not in mapper:\n                mapper[acc] = i\n            else:\n                ans = max(ans, i - mapper[acc])\n        return ans\n"
        }
    ]
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
"subarray-sum-equals-k":{
    "id": "560",
    "name": "subarray-sum-equals-k",
    "pre": [
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
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
            "text": "可以利用hashmap记录和的累加值来避免重复计算",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/560.subarray-sum-equals-k.md",
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
    "pre": [
        {
            "text": "数组",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md",
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "这是一道逻辑题目，因此如果逻辑分析清楚了，代码是自然而然的",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/575.distribute-candies.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/575.distribute-candies.md",
    "code": [
        {
            "language": "js",
            "text": "\n/*\n * @lc app=leetcode id=575 lang=javascript\n *\n * [575] Distribute Candies\n */\n/**\n * @param {number[]} candies\n * @return {number}\n */\nvar distributeCandies = function (candies) {\n  const count = new Set(candies);\n  return Math.min(count.size, candies.length >> 1);\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def distributeCandies(self, candies: List[int]) -> int:\n        return min(len(set(candies)), len(candies) >> 1)\n"
        }
    ]
},
"find-duplicate-file-in-system":{
    "id": "609",
    "name": "find-duplicate-file-in-system",
    "pre": [
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "hashtable",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/609.find-duplicate-file-in-system.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/609.find-duplicate-file-in-system.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {string[]} paths\n * @return {string[][]}\n */\nvar findDuplicate = function(paths) {\n  const hashmap = {};\n\n  for (let path of paths) {\n    const [folder, ...files] = path.split(\" \");\n    for (let file of files) {\n      const lpi = file.indexOf(\"(\");\n      const rpi = file.lastIndexOf(\")\");\n      const filename = file.slice(0, lpi);\n      const content = file.slice(lpi, rpi);\n      const fullname = `${folder}/${filename}`;\n      if (!hashmap[content]) hashmap[content] = [];\n      hashmap[content].push(fullname);\n    }\n  }\n\n  return Object.values(hashmap).filter(q => q.length >= 2);\n};\n"
        }
    ]
},
"valid-triangle-number":{
    "id": "611",
    "name": "valid-triangle-number",
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
            "text": "二分法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "三角形边的关系",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "三角形边的关系",
            "link": null,
            "color": "blue"
        },
        {
            "text": "三层循环确定三个线段",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/611.valid-triangle-number.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/611.valid-triangle-number.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def is_triangle(self, a, b, c):\n        if a == 0 or b == 0 or c == 0: return False\n        if a + b > c and a + c > b and b + c > a: return True\n        return False\n    def triangleNumber(self, nums: List[int]) -> int:\n        n = len(nums)\n        ans = 0\n        for i in range(n - 2):\n            for j in range(i + 1, n - 1):\n                for k in range(j + 1, n):\n                    if self.is_triangle(nums[i], nums[j], nums[k]): ans += 1\n\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n    def is_triangle(self, a, b, c):\n        if a == 0 or b == 0 or c == 0: return False\n        # a + c > b 和  b + c > a 是无效的判断，因为恒成立\n        if a + b > c and a + c > b and b + c > a: return True\n        return False\n"
        },
        {
            "language": "py",
            "text": "\nfor i in range(n - 2):\n    for j in range(i + 1, n - 1):\n        k = j + 1\n        while k < n and num[i] + nums[j] > nums[k]:\n            k += 1\n        ans += k - j - 1\n"
        },
        {
            "language": "py",
            "text": "\nfor i in range(n - 2):\n    k = i + 2\n    for j in range(i + 1, n - 1):\n        while k < n and nums[i] + nums[j] > nums[k]:\n            k += 1\n        ans += k - j - 1\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def triangleNumber(self, nums: List[int]) -> int:\n        n = len(nums)\n        ans = 0\n        nums.sort()\n        for i in range(n - 2):\n            if nums[i] == 0: continue\n            k = i + 2\n            for j in range(i + 1, n - 1):\n                while k < n and nums[i] + nums[j] > nums[k]:\n                    k += 1\n                ans += k - j - 1\n        return ans\n"
        }
    ]
},
"strange-printer":{
    "id": "664",
    "name": "strange-printer",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        },
        {
            "text": "区间 DP",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/664.strange-printer.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/664.strange-printer.md",
    "code": [
        {
            "language": "py",
            "text": "\ndef dp(l, r):\n    # ...\n    # 将 分别处理 A 和 部分\n    for i in range(l, r):\n        ans = min(ans, dp(l, i) + dp(i + 1, r))\n    # ...\ndp(0, len(s) - 1)\n"
        },
        {
            "language": "py",
            "text": "\ndef dp(l, r):\n    # ...\n    if s[l] == s[r]:\n        return dp(l, r - 1)\n    # ...\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def strangePrinter(self, s: str) -> int:\n        @lru_cache(None)\n        def dp(l, r):\n            if l >= r:\n                return int(l == r)\n            if s[l] == s[r]:\n                return dp(l, r - 1)\n            ans = len(s)\n            #  枚举分割点\n            for i in range(l, r):\n                ans = min(ans, dp(l, i) + dp(i + 1, r))\n            return ans\n\n        return dp(0, len(s) - 1)\n\n\n"
        }
    ]
},
"non-decreasing-array":{
    "id": "665",
    "name": "non-decreasing-array",
    "pre": [
        {
            "text": "数组",
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
            "text": "考虑各种边界情况，贪心改变数组的值",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/665.non-decreasing-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/665.non-decreasing-array.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def checkPossibility(self, A: List[int]) -> bool:\n        count = 0\n        for i in range(1, len(A)):\n            if A[i] < A[i - 1]:\n                if count == 1: return False\n                count += 1\n        return True\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution(object):\n    def checkPossibility(self, A):\n        N = len(A)\n        count = 0\n        for i in range(1, N):\n            if A[i] < A[i - 1]:\n                count += 1\n                if count > 1:\n                    return False\n                # [4,2,3]  [4,2,1]   [1,2,1,2]  [1,1,1,] []\n                if i >= 2 and A[i] < A[i - 2]:\n                    A[i] = A[i - 1]\n\n        return True\n\n"
        }
    ]
},
"number-of-longest-increasing-subsequence":{
    "id": "673",
    "name": "number-of-longest-increasing-subsequence",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "[最长上升子序列问题](https://lucifer.ren/blog/2020/06/20/LIS/)",
            "link": null,
            "color": "blue"
        },
        {
            "text": "dp[j][1]=dp[i][1]容易忘记",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/673.number-of-longest-increasing-subsequence.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/673.number-of-longest-increasing-subsequence.md",
    "code": [
        {
            "language": "py",
            "text": "\nfor i in range(n):\n    for j in range(i + 1, n):\n        if nums[j] > nums[i]:\n            # ...\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findNumberOfLIS(self, nums: List[int]) -> int:\n        n = len(nums)\n        # dp[i][0] ->  LIS\n        # dp[i][1] -> NumberOfLIS\n        dp = [[1, 1] for _ in range(n)]\n        longest = 1\n        for i in range(n):\n            for j in range(i + 1, n):\n                if nums[j] > nums[i]:\n                    if dp[i][0] + 1 > dp[j][0]:\n                        dp[j][0] = dp[i][0] + 1\n                        # 下面这行代码容易忘记，导致出错\n                        dp[j][1] = dp[i][1]\n                        longest = max(longest, dp[j][0])\n                    elif dp[i][0] + 1 == dp[j][0]:\n                        dp[j][1] += dp[i][1]\n        return sum(dp[i][1] for i in range(n) if dp[i][0] == longest)\n\n"
        }
    ]
},
"24-game":{
    "id": "679",
    "name": "24-game",
    "pre": [
        {
            "text": "回溯",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/backtrack.md \"回溯\"",
            "color": "green"
        },
        {
            "text": "数字精度问题",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "分治",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "使用递归将问题分解成规模更小的同样问题",
            "link": null,
            "color": "blue"
        },
        {
            "text": "精度控制，即如果误差不超过某一个较小的数字就认为二者是相等的",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/679.24-game.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/679.24-game.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def judgePoint24(self, nums: List[int]) -> bool:\n        if len(nums) == 1:\n            return math.isclose(nums[0], 24)\n        return any(self.judgePoint24([x] + rest) for a, b, *rest in permutations(nums) \nfor x in [a+b, a-b, a*b, b and a/b])\n\n"
        }
    ]
},
"repeated-string-match":{
    "id": "686",
    "name": "repeated-string-match",
    "pre": [
        {
            "text": "set",
            "link": null,
            "color": "volcano"
        }
    ],
    "keyPoints": [
        {
            "text": "答案是有限的，搞清楚解空间是关键",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/686.repeated-string-match.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/686.repeated-string-match.md",
    "code": [
        {
            "language": "py",
            "text": "\ncnt = 1\nwhile True:\n    if b in a * cnt:\n        return cnt\n    cnt += 1\nreturn -1\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def repeatedStringMatch(self, a: str, b: str) -> int:\n        if not set(b).issubset(set(a)):\n            return -1\n        cnt = 1\n        while len(a * cnt) < 2 * len(a) + len(b):\n            if b in a * cnt:\n                return cnt\n            cnt += 1\n        return -1\n"
        }
    ]
},
"best-time-to-buy-and-sell-stock-with-transaction-fee":{
    "id": "714",
    "name": "best-time-to-buy-and-sell-stock-with-transaction-fee",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "记忆化递归",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/714.best-time-to-buy-and-sell-stock-with-transaction-fee.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/714.best-time-to-buy-and-sell-stock-with-transaction-fee.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maxProfit(self, prices: List[int], fee: int) -> int:\n        def dp(i):\n            if i == 0:\n                return 0, -prices[0] - fee\n            sell, buy = dp(i - 1)\n            return max(sell, buy + prices[i]), max(buy, sell - prices[i] - fee)\n\n        return dp(len(prices) - 1)[0]\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxProfit(self, prices: List[int], fee: int) -> int:\n        @lru_cache(None)\n        def dp(i, state):\n            if i == len(prices) - 1:\n                return prices[i] - fee if state == 1 else 0\n            if state == 1:\n                return max(dp(i + 1, 1), dp(i + 1, 0) + prices[i] - fee)\n            return max(dp(i + 1, 0), dp(i + 1, 1) - prices[i])\n\n        return dp(0, 0)\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def maxProfit(self, prices: List[int], fee: int) -> int:\n        n = len(prices)\n        dp = [[0 for i in range(2)]] * n\n        for i in range(n):\n            if i == 0:\n                dp[i][0] = 0\n                dp[i][1] = -1 * prices[i]\n            else:\n                dp[i][0] = max(dp[i - 1][1] + prices[i] - fee, dp[i - 1][0])\n                dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i])\n\n        return dp[-1][0]\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxProfit(self, prices: List[int], fee: int) -> int:\n        n = len(prices)\n        # [手里没股票, 手里有股票]\n        dp = [0, 0]\n        for i in range(n):\n            if i == 0:\n                dp[0] = 0\n                dp[1] = -1 * prices[i] - fee\n            else:\n                dp[0] = max(dp[0], dp[1] + prices[i])\n                dp[1] = max(dp[1], dp[0] - prices[i] - fee)\n\n        return dp[0]\n"
        }
    ]
},
"range-module":{
    "id": "715",
    "name": "range-module",
    "pre": [
        {
            "text": "区间查找问题",
            "link": null,
            "color": "gold"
        },
        {
            "text": "二分查找",
            "link": "https://github.com/azl397985856/leetcode/blob/master/91/binary-search.md \"二分查找\"",
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "二分查找的灵活使用（最左插入和最右插入）",
            "link": null,
            "color": "blue"
        },
        {
            "text": "将区间一维化处理",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/715.range-module.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/715.range-module.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass RangeModule(object):\n    def __init__(self):\n        # [(1,2),(3,6),(8,12)]\n        self.ranges = []\n    def overlap(self, left, right):\n        i, j = 0, len(self.ranges) - 1\n        while i < len(self.ranges) and self.ranges[i][1] < left:\n            i += 1\n        while j >= 0 and self.ranges[j][0] > right:\n            j -= 1\n        return i, j\n\n    def addRange(self, left, right):\n        i, j = self.overlap(left, right)\n        if i <= j:\n            left = min(left, self.ranges[i][0])\n            right = max(right, self.ranges[j][1])\n        self.ranges[i:j+1] = [(left, right)]\n    def queryRange(self, left, right):\n        i = bisect.bisect_right(self.ranges, (left, float('inf'))) - 1\n        return self.ranges and self.ranges[i][0] <= left and right <= self.ranges[i][1]\n\n    def removeRange(self, left, right):\n        i, j = self.overlap(left, right)\n        merge = []\n        for k in xrange(i, j+1):\n            if self.ranges[k][0] < left:\n                merge.append((self.ranges[k][0], left))\n            if right < self.ranges[k][1]:\n                merge.append((right, self.ranges[k][1]))\n        self.ranges[i:j+1] = merge\n"
        },
        {
            "language": "py",
            "text": "\nclass RangeModule(object):\n    def __init__(self):\n        # [1,2,3,5,8,12]\n        self.ranges = []\n\n    def overlap(self, left, right, is_odd):\n        i = bisect_left(self.ranges, left)\n        j = bisect_right(self.ranges, right)\n        merge = []\n        if i & 1 == int(is_odd):\n            merge.append(left)\n        if j & 1 == int(is_odd):\n            merge.append(right)\n        # 修改 ranges 的 [i:j-1] 部分\n        self.ranges[i:j] = merge\n\n    def addRange(self, left, right):\n        # [1,2,3,5,8,12]， 代入 left = 3, right = 5，此时需要保持不变， 就不难知道应该用 bisect_left 还是 bisect_right\n        return self.overlap(left, right, False)\n\n    def removeRange(self, left, right):\n        # [1,2,3,5,8,12]， 代入 left = 3, right = 5，此时需要为 [1,2,8,12]， 就不难知道应该用 bisect_left 还是 bisect_right\n        return self.overlap(left, right, True)\n\n    def queryRange(self, left, right):\n        # [1,2,3,5,8,12]， 代入 left = 3, right = 5，此时需要返回 true， 就不难知道应该用 bisect_left 还是 bisect_right\n        i = bisect_right(self.ranges, left)\n        j = bisect_left(self.ranges, right)\n        return i & 1 == 1 and i == j  # 都在一个区间内\n\n"
        }
    ]
},
"maximum-length-of-repeated-subarray":{
    "id": "718",
    "name": "maximum-length-of-repeated-subarray",
    "pre": [
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        },
        {
            "text": "数组",
            "link": null,
            "color": "purple"
        },
        {
            "text": "二分查找",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "dp建模套路",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/718.maximum-length-of-repeated-subarray.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/718.maximum-length-of-repeated-subarray.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findLength(self, A, B):\n        m, n = len(A), len(B)\n        ans = 0\n        dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                if A[i - 1] == B[j - 1]:\n                    dp[i][j] = dp[i - 1][j - 1] + 1\n                    ans = max(ans, dp[i][j])\n        return ans\n"
        }
    ]
},
"accounts-merge":{
    "id": "721",
    "name": "accounts-merge",
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
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/721.accounts-merge.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/721.accounts-merge.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass UF:\n    def __init__(self):\n        self.parent = {}\n\n    def find(self, x):\n        self.parent.setdefault(x, x)\n        while x != self.parent[x]:\n            x = self.parent[x]\n        return x\n    def union(self, p, q):\n        self.parent[self.find(p)] = self.find(q)\n\n\nclass Solution:\n    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:\n        uf = UF()\n        email_to_name = {}\n        res = collections.defaultdict(list)\n        for account in accounts:\n            for i in range(1, len(account)):\n                email_to_name[account[i]] = account[0]\n                if i < len(account) - 1:uf.union(account[i], account[i + 1])\n        for email in email_to_name:\n            res[uf.find(email)].append(email)\n\n        return [[email_to_name[value[0]]] + sorted(value) for value in res.values()]\n"
        }
    ]
},
"number-of-atoms":{
    "id": "726",
    "name": "number-of-atoms",
    "pre": [
        {
            "text": "栈",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "从后往前遍历",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/726.number-of-atoms.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/726.number-of-atoms.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def countOfAtoms(self, s: str) -> str:\n        stack = [1]\n        i = len(s) - 1\n        dic = collections.defaultdict(int)\n        lower = count = ''\n        while i > -1:\n            if '0' <= s[i] <= '9':\n                count = s[i] + count\n            elif 'a' <= s[i] <= 'z':\n                lower = s[i] + lower\n            elif s[i] == ')':\n                stack.append(stack[-1] * int(count or '1'))\n                count = ''\n            elif s[i] == '(':\n                stack.pop()\n            elif 'A' <= s[i] <= 'Z':\n                dic[s[i] + lower] += stack[-1] * int(count or '1')\n                count = ''\n                lower = ''\n            i -= 1\n        ans = ''\n        for k, v in sorted(dic.items()):\n            if v == 1:\n                ans += k\n            else:\n                ans += k + str(v)\n        return ans\n\n\n"
        }
    ]
},
"asteroid-collision":{
    "id": "735",
    "name": "asteroid-collision",
    "pre": [
        {
            "text": "栈",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "whilebreakifelse的灵活使用",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/735.asteroid-collision.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/735.asteroid-collision.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def asteroidCollision(self, asteroids):\n        stack = []\n        for asteroid in asteroids:\n            if not stack or asteroid > 0:\n                stack.append(asteroid)\n            else:\n                while stack and stack[-1] > 0:\n                    if stack[-1] + asteroid > 0:\n                        break\n                    elif stack[-1] + asteroid < 0:\n                        # 这种情况需要继续和前前星球继续判断是否碰撞\n                        stack.pop()\n                    else:\n                        stack.pop()\n                        break\n                else:\n                    stack.append(asteroid)\n\n        return stack\n\n\n"
        }
    ]
},
"reach-a-number":{
    "id": "754",
    "name": "reach-a-number",
    "pre": [
        {
            "text": "数学",
            "link": null,
            "color": "geekblue"
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
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/754.reach-a-number.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/754.reach-a-number.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    def reachNumber(self, target):\n        target = abs(target)\n        steps = 0\n        while target > 0:\n            steps += 1\n            target -= steps\n        if target & 1 == 0: return steps\n        steps += 1\n        if (target - steps) & 1 == 0: return steps\n        return steps + 1\n\n\n"
        }
    ]
},
"max-chunks-to-make-sorted-ii":{
    "id": "768",
    "name": "max-chunks-to-make-sorted-ii",
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
            "text": "计数",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/768.max-chunks-to-make-sorted-ii.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/768.max-chunks-to-make-sorted-ii.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int maxChunksToSorted(int[] arr) {\n        LinkedList<Integer> stack = new LinkedList<Integer>();\n        for (int num : arr) {\n            // 遇到一个比栈顶小的元素，而前面的块不应该有比 a 小的\n            // 而栈中每一个元素都是一个块，并且栈的存的是块的最大值，因此栈中比 a 小的值都需要 pop 出来\n            if (!stack.isEmpty() && num < stack.getLast()) {\n                // 我们需要将融合后的区块的最大值重新放回栈\n                // 而 stack 是递增的，因此 stack[-1] 是最大的\n                int cur = stack.removeLast();\n                // 维持栈的单调递增\n                while (!stack.isEmpty() && num < stack.getLast()) {\n                    stack.removeLast();\n                }\n                stack.addLast(cur);\n            } else {\n                stack.addLast(num);\n            }\n        }\n        // 栈存的是块信息，因此栈的大小就是块的数量\n        return stack.size();\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\nvar maxChunksToSorted = function (arr) {\n  const stack = [];\n\n  for (let i = 0; i < arr.length; i++) {\n    a = arr[i];\n    if (stack.length > 0 && stack[stack.length - 1] > a) {\n      const cur = stack[stack.length - 1];\n      while (stack && stack[stack.length - 1] > a) stack.pop();\n      stack.push(cur);\n    } else {\n      stack.push(a);\n    }\n  }\n  return stack.length;\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    int maxChunksToSorted(vector<int>& arr) {\n        stack<int> stack;\n        for(int i =0;i<arr.size();i++){\n            // 遇到一个比栈顶小的元素，而前面的块不应该有比 a 小的\n            // 而栈中每一个元素都是一个块，并且栈的存的是块的最大值，因此栈中比 a 小的值都需要 pop 出来\n            if(!stack.empty()&&stack.top()>arr[i]){\n                // 我们需要将融合后的区块的最大值重新放回栈\n                // 而 stack 是递增的，因此 stack[-1] 是最大的\n                int cur = stack.top();\n                // 维持栈的单调递增\n                while(!stack.empty()&&stack.top()>arr[i]){\n                    sstackta.pop();\n                }\n\n                stack.push(cur);\n            }else{\n\n                stack.push(arr[i]);\n            }\n        }\n        // 栈存的是块信息，因此栈的大小就是块的数量\n        return stack.size();\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    def maxChunksToSorted(self, arr):\n        count_a = collections.defaultdict(int)\n        count_b = collections.defaultdict(int)\n        ans = 0\n\n        for a, b in zip(arr, sorted(arr)):\n            count_a[a] += 1\n            count_b[b] += 1\n            if count_a == count_b: ans += 1\n\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    class Solution(object):\n    def maxChunksToSorted(self, arr):\n        count = collections.defaultdict(int)\n        non_zero_cnt = 0\n        ans = 0\n\n        for a, b in zip(arr, sorted(arr)):\n            if count[a] == -1: non_zero_cnt -= 1\n            if count[a] == 0: non_zero_cnt += 1\n            count[a] += 1\n            if count[b] == 1: non_zero_cnt -= 1\n            if count[b] == 0: non_zero_cnt += 1\n            count[b] -= 1\n            if non_zero_cnt == 0: ans += 1\n\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxChunksToSorted(self, A: [int]) -> int:\n        stack = []\n        for a in A:\n            # 遇到一个比栈顶小的元素，而前面的块不应该有比 a 小的\n            # 而栈中每一个元素都是一个块，并且栈的存的是块的最大值，因此栈中比 a 小的值都需要 pop 出来\n            if stack and stack[-1] > a:\n                # 我们需要将融合后的区块的最大值重新放回栈\n                # 而 stack 是递增的，因此 stack[-1] 是最大的\n                cur = stack[-1]\n                # 维持栈的单调递增\n                while stack and stack[-1] > a: stack.pop()\n                stack.append(cur)\n            else:\n                stack.append(a)\n        # 栈存的是块信息，因此栈的大小就是块的数量\n        return len(stack)\n\n\n"
        }
    ]
},
"is-graph-bipartite":{
    "id": "785",
    "name": "is-graph-bipartite",
    "pre": [
        {
            "text": "图的遍历",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "DFS",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "图的建立和遍历",
            "link": null,
            "color": "blue"
        },
        {
            "text": "colors数组",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/785.is-graph-bipartite.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/785.is-graph-bipartite.md",
    "code": [
        {
            "language": "java",
            "text": "\n// weighted quick-union with path compression\nclass Solution {\n    class UF {\n\t    int numOfUnions; // number of unions\n\t    int[] parent;\n\t    int[] size; \n\t\n\t    UF(int numOfElements) {\n\t\t    numOfUnions = numOfElements;\n\t\t    parent = new int[numOfElements];\n\t\t    size = new int[numOfElements];\n\t\t    for (int i = 0; i < numOfElements; i++) {\n\t\t\t    parent[i] = i;\n\t\t\t    size[i] = 1;\n\t\t    }\n\t    }\n\n\t    // find the head/representative of x\n\t    int find(int x) {\n\t\t    while (x != parent[x]) {\n\t\t\t    parent[x] = parent[parent[x]]; \n\t\t\t    x = parent[x]; \t\n\t\t    }\n\t\t    return x;\n\t    }\n\n\t    void union(int p, int q) {\n\t\t    int headOfP = find(p);\n\t\t    int headOfQ = find(q);\n\t\t    if (headOfP == headOfQ) {\n\t\t\t    return;\n\t\t    }\n\t\t    // connect the small tree to the larger tree\n\t\t    if (size[headOfP] < size[headOfQ]) {\n\t\t\t    parent[headOfP] = headOfQ; // set headOfP's parent to be headOfQ \n\t\t\t    size[headOfQ] += size[headOfP];\n\t\t    } else {\n\t\t\t    parent[headOfQ] = headOfP;\n\t\t\t    size[headOfP] += size[headOfQ];\n\t\t    }\n\t\t    numOfUnions -= 1;\n\t    }\n\n\t    boolean connected(int p, int q) {\n\t\t    return find(p) == find(q);\n\t    }\n    }\n\n    public boolean isBipartite(int[][] graph) {\n        int n = graph.length;\n        UF unionfind = new UF(n);\n        // i is what node each adjacent list is for\n        for (int i = 0; i < n; i++) {\n            // i's neighbors\n            for (int neighbor : graph[i]) {\n                // i should not be in the union of its neighbors\n                if (unionfind.connected(i, neighbor)) {\n                    return false;\n                }\n                // add into unions\n                unionfind.union(graph[i][0], neighbor);\n            }\n        }\n        \n        return true;\n    }\n    \n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def dfs(self, grid, colors, i, color, N):\n        colors[i] = color\n        for j in range(N):\n            if grid[i][j] == 1:\n                if colors[j] == color:\n                    return False\n                if colors[j] == 0 and not self.dfs(grid, colors, j, -1 * color, N):\n                    return False\n        return True\n\n    def isBipartite(self, graph: List[List[int]]) -> bool:\n        N = len(graph)\n        grid = [[0] * N for _ in range(N)]\n        colors = [0] * N\n        for i in range(N):\n            for j in graph[i]:\n                grid[i][j] = 1\n        for i in range(N):\n            if colors[i] == 0 and not self.dfs(grid, colors, i, 1, N):\n                return False\n        return True\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def isBipartite(self, graph: List[List[int]]) -> bool:\n        n = len(graph)\n        colors = [0] * n\n        def dfs(i, color):\n            colors[i] = color\n            for neibor in graph[i]:\n                if colors[neibor] == color: return False\n                if colors[neibor] == 0 and not dfs(neibor,-1*color): return False\n            return True\n        for i in range(n):\n            if colors[i] == 0 and not dfs(i,1): return False\n        return True\n "
        },
        {
            "language": "py",
            "text": "\nclass UF:\n    def __init__(self, n):\n        self.parent = {}\n        for i in range(n):\n            self.parent[i] = i\n    def union(self, i,j):\n        self.parent[self.find(i)] = self.find(j)\n    def find(self, i):\n        if i == self.parent[i]: return i\n        self.parent[i] = self.find(self.parent[i])\n        return self.parent[i]\n    def is_connected(self, i,j):\n        return self.find(i) == self.find(j)\n\nclass Solution:\n    def isBipartite(self, graph: List[List[int]]) -> bool:\n        n = len(graph)\n        uf = UF(n)\n        for i in range(n):\n            for neibor in graph[i]:\n                if uf.is_connected(i, neibor): return False\n                uf.union(graph[i][0], neibor)\n        return True\n"
        }
    ]
},
"domino-and-tromino-tiling":{
    "id": "790",
    "name": "domino-and-tromino-tiling",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "识别最优子结构",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对一块瓷砖能拼成的图形进行分解，并对每一种情况进行讨论",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/790.domino-and-tromino-tiling.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/790.domino-and-tromino-tiling.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def numTilings(self, N: int) -> int:\n        dp = [0] * (N + 3)\n        # f(3) = 2 * f(2) + f(0) = 2 + f(0) = 1 -> f(0) = -1\n        # f(4) = 2 * f(3) + f(1) = 2 + f(1) = 2 -> f(1) = 0\n        dp[0] = -1\n        dp[1] = 0\n        dp[2] = 1\n        # f(n) = f(n-1) + f(n-2) + 2 * T(n-1)\n        # 2 * T(n-1) = 2 * f(n-3) + 2 * T(n-2)\n        # f(n) = f(n-1) + 2 * f(n-3) + f(n-2) + 2T(n-2) = f(n-1) + f(n-3) + f(n-3) + f(n-2) + 2T(n-2) = f(n-1) + f(n-3) + f(n-1) = 2 * f(n-1) + f(n-3)\n        for i in range(3, N + 3):\n            dp[i] = 2 * dp[i-1] + dp[i-3]\n        return dp[-1] % (10 ** 9 + 7)\n\n"
        }
    ]
},
"champagne-tower":{
    "id": "799",
    "name": "champagne-tower",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        },
        {
            "text": "杨辉三角",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "不必模拟多步，而是只模拟一次即可",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/799.champagne-tower.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/799.champagne-tower.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def champagneTower(self, poured, R, C):\n        # 这种初始化方式有一半空间是浪费的\n        A = [[0] * (R+1) for _ in range(R+1)]\n        A[0][0] = poured\n        # 从上到下，从左到右模拟每一行每一列\n        for i in range(R + 1):\n            for j in range(i+1):\n                overflow = (A[i][j] - 1.0) / 2.0\n                # 不必模拟多步，而是只模拟一次即可。也就是说我们无需溢出到下一层之后，下一层的杯子容量大于 1，因为我们后面处理即可，这和直觉上或许有所不一样。体现在代码上只需要 if 即可，无需 while\n                if overflow > 0 and i < R and j <= C:\n                    A[i+1][j] += overflow\n                    if j+1<=C: A[i+1][j+1] += overflow\n\n        return min(1, A[R][C]) # 最后的结果如果大于 1，说明流到地板上了，需要和 1 取最小值。\n\n"
        }
    ]
},
"minimum-swaps-to-make-sequences-increasing":{
    "id": "801",
    "name": "minimum-swaps-to-make-sequences-increasing",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "一：无需考虑全部整体，而只需要考虑相邻两个数字即可这其实也是可以使用动态规划解决问题的关键条件。对于这道题来说，**最小**的子问题就是当前项和前一项组成的局部，**无法**再小了，**没有必要**再大了。为什么只关心两个数字即可？因为要使得整个数组递增，**假设**前面的i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "2项已经满足递增了，那么现在**采取某种方式**使得满足A[i]>A[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]即可(B也是同理)。>因为A[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]>A[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "2]已经成立，因此如果A[i]>A[i",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1]，那么整体就递增了。这提示我们可以使用动态规划来完成。如果上面的这些没有听懂，则很有可能对动态规划不熟悉，建议先看下基础知识。",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/801.minimum-swaps-to-make-sequences-increasing.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/801.minimum-swaps-to-make-sequences-increasing.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def minSwap(self, A: List[int], B: List[int]) -> int:\n        n = len(A)\n        swap = [n] * n\n        no_swap = [n] * n\n        swap[0] = 1\n        no_swap[0] = 0\n\n        for i in range(1, len(A)):\n            q1 = A[i-1] < A[i] and B[i-1] < B[i]\n            q2 = A[i-1] < B[i] and B[i-1] < A[i]\n            if q1 and q2:\n                no_swap[i] = min(swap[i-1], no_swap[i-1]) # 都不换或者换i-1\n                swap[i] = min(swap[i-1], no_swap[i-1]) + 1 # 都换 或者 换 i\n            if q1 and not q2:\n                swap[i] = swap[i-1] + 1 # 都换\n                no_swap[i] = no_swap[i-1] # 都不换\n            if not q1 and q2:\n                swap[i] = no_swap[i-1] + 1 # 换 i\n                no_swap[i] = swap[i-1] # 换 i - 1\n\n        return min(swap[n-1], no_swap[n-1])\n"
        },
        {
            "language": "py",
            "text": "\nif q1:\n    no_swap[i] = no_swap[i-1] # 都不换\n    swap[i] = swap[i-1] + 1 # 都换\nif q2:\n    swap[i] = min(swap[i], no_swap[i-1] + 1) # 换 i\n    no_swap[i] =  min(no_swap[i], swap[i-1]) # 换 i - 1\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minSwap(self, A: List[int], B: List[int]) -> int:\n        n = len(A)\n        swap = [n] * n\n        no_swap = [n] * n\n        swap[0] = 1\n        no_swap[0] = 0\n\n        for i in range(1, len(A)):\n            # 如果交换之前有序，则可以不交换\n            if A[i-1] < A[i] and B[i-1] < B[i]:\n                no_swap[i] = no_swap[i-1]\n                swap[i] = swap[i-1] + 1\n            # 否则至少需要交换一次（交换当前项或者前一项）\n            if A[i-1] < B[i] and B[i-1] < A[i]:\n                swap[i] = min(swap[i], no_swap[i-1] + 1) # i 换\n                no_swap[i] =  min(no_swap[i], swap[i-1]) # i - 1 换\n\n        return min(swap[n-1], no_swap[n-1])\n"
        }
    ]
},
"split-array-with-same-average":{
    "id": "805",
    "name": "split-array-with-same-average",
    "pre": [
        {
            "text": "回溯",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/backtrack.md",
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "回溯解题模板",
            "link": null,
            "color": "blue"
        },
        {
            "text": "两个剪枝",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/805.split-array-with-same-average.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/805.split-array-with-same-average.md",
    "code": [
        {
            "language": "py",
            "text": "\ndef splitArraySameAverage(self, A: List[int]) -> bool:\n        n = len(A)\n        avg = sum(A) / n\n\n        for i in range(1, n // 2 + 1):\n            for combination in combinations(A, i):\n                if abs(sum(combination) - avg * i) < 1e-6:\n                    return True\n        return False\n"
        },
        {
            "language": "py",
            "text": "\ndef splitArraySameAverage(self, A: List[int]) -> bool:\n        n = len(A)\n        avg = sum(A) / n\n\n        for i in range(1, n // 2 + 1):\n            for s in combinationSum(A, i):\n                if abs(s - avg * i) < 1e-6:\n                    return True\n        return False\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def combinationSum(self, candidates: List[int], count: int) -> List[List[int]]:\n        size = len(candidates)\n        if size == 0:\n            return []\n \n        # 还是先排序，主要是方便去重\n        candidates.sort()\n \n        ans = []\n        self._find_path(candidates, ans, 0, count, 0, size)\n        return ans\n \n    def _find_path(self, candidates, ans, path_sum, count, begin, size):\n        if count == 0:\n            ans.append(path_sum)\n            return\n        else:\n            for i in range(begin, size):\n                # 剪枝一。 注意这里的 i > begin 这个条件\n                if i > begin and candidates[i] == candidates[i - 1]:\n                    continue\n                self._find_path(candidates, ans, path_sum + candidates[i], count - 1, i + 1, size)\n \n    def splitArraySameAverage(self, A: List[int]) -> bool:\n        n = len(A)\n        avg = sum(A) / n\n \n        for i in range(1, n // 2 + 1):\n            # 剪枝二\n            if abs(i * avg - int(i * avg)) > 1e-6:\n                continue\n            for s in self.combinationSum(A, i):\n                if abs(s - avg * i) < 1e-6:\n                    return True\n        return False\n\n"
        }
    ]
},
"ambiguous-coordinates":{
    "id": "816",
    "name": "ambiguous-coordinates",
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
            "text": "笛卡尔积优化",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/816.ambiguous-coordinates.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/816.ambiguous-coordinates.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n\n    def subset(self, s: str):\n        ans = []\n        for i in range(1, len(s)):\n            ans.append(s[:i] + \".\" + s[i:])\n        ans.append(s)\n        return ans\n\n    def ambiguousCoordinates(self, s: str) -> List[str]:\n        ans = []\n        s = s[1:-1]\n        for i in range(1, len(s)):\n            x = self.subset(s[:i])\n            y = self.subset(s[i:])\n            for i in x:\n                for j in y:\n                    ans.append('(' + i + ', ' + j + ')')\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    # \"123\" => [\"1.23\", \"12.3\", \"123\"]\n    def subset(self, s: str):\n        ans = []\n\n        #  带小数点的\n        for i in range(1, len(s)):\n            # 不允许 00.111， 0.0，01.1，1.0\n            if s[0] == '0' and i > 1:\n                continue\n            if s[-1] == '0':\n                continue\n            ans.append(s[:i] + \".\" + s[i:])\n        # 不带小数点的（不允许 001）\n        if s == '0' or not s.startswith('0'):\n            ans.append(s)\n        return ans\n\n    def ambiguousCoordinates(self, s: str) -> List[str]:\n        ans = []\n        s = s[1:-1]\n        for i in range(1, len(s)):\n            x = self.subset(s[:i])\n            y = self.subset(s[i:])\n            for i in x:\n                for j in y:\n                    ans.append('(' + i + ', ' + j + ')')\n        return ans\n\n"
        }
    ]
},
"short-encoding-of-words":{
    "id": "820",
    "name": "short-encoding-of-words",
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
        },
        {
            "text": "去重",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/820.short-encoding-of-words.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/820.short-encoding-of-words.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Trie:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n        self.Trie = {}\n\n    def insert(self, word):\n        \"\"\"\n        Inserts a word into the trie.\n        :type word: str\n        :rtype: void\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            if w not in curr:\n                curr[w] = {}\n            curr = curr[w]\n        curr['#'] = 1\n\n    def search(self, word):\n        \"\"\"\n        Returns if the word is in the trie.\n        :type word: str\n        :rtype: bool\n        \"\"\"\n        curr = self.Trie\n        for w in word:\n            curr = curr[w]\n        # len(curr) == 1 means we meet '#'\n        # when we search 'em'(which reversed from 'me')\n        # the result is len(curr) > 1\n        # cause the curr look like { '#': 1, i: {...}}\n        return len(curr) == 1\nclass Solution:\n    def minimumLengthEncoding(self, words: List[str]) -> int:\n        trie = Trie()\n        cnt = 0\n        words = set(words)\n        for word in words:\n            trie.insert(word[::-1])\n        for word in words:\n            if trie.search(word[::-1]):\n                cnt += len(word) + 1\n        return cnt\n\n"
        }
    ]
},
"shortest-distance-to-a-character":{
    "id": "821",
    "name": "shortest-distance-to-a-character",
    "pre": [
        {
            "text": "数组的遍历(正向遍历和反向遍历)",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/821.shortest-distance-to-a-character.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/821.shortest-distance-to-a-character.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int[] shortestToChar(String S, char C) {\n        int N = S.length();\n        int[] ans = new int[N];\n        int prev = -10000;\n\n        for (int i = 0; i < N; ++i) {\n            if (S.charAt(i) == C) prev = i;\n            ans[i] = i - prev;\n        }\n\n        prev = 20000;\n        for (int i = N-1; i >= 0; --i) {\n            if (S.charAt(i) == C) prev = i;\n            ans[i] = Math.min(ans[i], prev - i);\n        }\n\n        return ans;\n    }\n}\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n   vector<int> shortestToChar(string S, char C) {\n       vector<int> ans(S.size(), 0);\n       int prev = -10000;\n       for(int i = 0; i < S.size(); i ++){\n           if(S[i] == C) prev = i;\n           ans[i] = i - prev;\n       }\n       prev = 20000;\n       for(int i = S.size() - 1; i >= 0; i --){\n           if(S[i] == C) prev = i;\n           ans[i] = min(ans[i], prev - i);\n       }\n       return ans;\n   }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def shortestToChar(self, S: str, C: str) -> List[int]:\n        ans = []\n\n        for i in range(len(S)):\n            # 从 i 向左向右扩展\n            l = r = i\n            # 向左找到第一个 C\n            while l > -1:\n                if S[l] == C: break\n                l -= 1\n            # 向左找到第一个 C\n            while r < len(S):\n                if S[r] == C: break\n                r += 1\n            # 如果至死没有找到，则赋值一个无限大的数字，由于题目的数据范围是 [1, 10000]，因此 -10000 或者  10000就够了。\n            if l == -1: l = -10000\n            if r == len(S): r = 10000\n            # 选较近的即可\n            ans.append(min(r - i, i - l))\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def shortestToChar(self, S: str, C: str) -> List[int]:\n        ans = [10000] * len(S)\n        stack = []\n        for i in range(len(S)):\n            while stack and S[i] == C:\n                ans[stack.pop()] = i - stack[-1]\n            if S[i] != C:stack.append(i)\n            else: ans[i] = 0\n        for i in range(len(S) - 1, -1, -1):\n            while stack and S[i] == C:\n                ans[stack.pop()] = min(ans[stack[-1]], stack[-1] - i)\n            if S[i] != C:stack.append(i)\n            else: ans[i] = 0\n\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def shortestToChar(self, S: str, C: str) -> List[int]:\n        pre = -10000\n        ans = []\n\n        for i in range(len(S)):\n            if S[i] == C: pre = i\n            ans.append(i - pre)\n        pre = 20000\n        for i in range(len(S) - 1, -1, -1):\n            if S[i] == C: pre = i\n            ans[i] = min(ans[i], pre - i)\n        return ans\n"
        }
    ]
},
"push-dominoes":{
    "id": "838",
    "name": "push-dominoes",
    "pre": [
        {
            "text": "双指针",
            "link": null,
            "color": "green"
        },
        {
            "text": "哨兵",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [
        {
            "text": "只有相邻的受力dominoes才会相互影响",
            "link": null,
            "color": "blue"
        },
        {
            "text": "使用哨兵简化操作",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/838.push-dominoes.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/838.push-dominoes.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def pushDominoes(self, dominoes: str) -> str:\n        dominoes = 'L' + dominoes + 'R'\n        i = 0\n        j = i + 1\n        ans = ''\n        while j < len(dominoes):\n            if dominoes[j] == '.':\n                j += 1\n                continue\n            count = (j - i - 1)\n            if i != 0 :ans += dominoes[i]\n            if dominoes[i] == 'L' and dominoes[j] == 'R':\n                ans += '.' * count\n            elif dominoes[i] == 'L' and dominoes[j] == 'L':\n                ans += 'L' * count\n            elif dominoes[i] == 'R' and dominoes[j] == 'R':\n                ans += 'R' * count\n            elif dominoes[i] == 'R' and dominoes[j] == 'L':\n                ans += 'R' * (count//2) + '.'*(count%2) + 'L' * (count//2)\n            i = j\n            j += 1\n        return ans\n\n\n\n"
        }
    ]
},
"similar-string-groups":{
    "id": "839",
    "name": "similar-string-groups",
    "pre": [
        {
            "text": "并查集",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/union-find.md",
            "color": "volcano"
        }
    ],
    "keyPoints": [
        {
            "text": "判断两个字符串是否相似的函数is_similar没有必须真实交换并判断，而是判断不相等字符是否等于2",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/839.similar-string-groups.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/839.similar-string-groups.md",
    "code": [
        {
            "language": "py",
            "text": "\nuf = UF(n)\nfor i in range(n):\n      for j in range(i + 1, n):\n           if strs[i] == strs[j] or is_similar(list(strs[i]), list(strs[j])):\n              uf.union(i, j)\nreturn uf.cnt\n"
        },
        {
            "language": "py",
            "text": "\ndef is_similar(A, B):\n    n = len(A)\n    for i in range(n):\n        for j in range(i + 1, n):\n            A[i], A[j] = A[j], A[i]\n            if A == B: return True\n            A[i], A[j] = A[j], A[i]\n    return False\n"
        },
        {
            "language": "py",
            "text": "\n\n\nclass UF:\n  def __init__(self, M):\n      self.parent = {}\n      self.cnt = 0\n      # 初始化 parent，size 和 cnt\n      for i in range(M):\n          self.parent[i] = i\n          self.cnt += 1\n\n  def find(self, x):\n      if x != self.parent[x]:\n          self.parent[x] = self.find(self.parent[x])\n          return self.parent[x]\n      return x\n  def union(self, p, q):\n      if self.connected(p, q): return\n      leader_p = self.find(p)\n      leader_q = self.find(q)\n      self.parent[leader_p] = leader_q\n      self.cnt -= 1\n  def connected(self, p, q):\n      return self.find(p) == self.find(q)\n\nclass Solution:\n    def numSimilarGroups(self, strs: List[str]) -> int:\n        n = len(strs)\n        uf = UF(n)\n        def is_similar(A, B):\n            n = len(A)\n            diff = 0\n            for i in range(n):\n                if A[i] != B[i]: diff += 1\n            return diff == 2\n\n        for i in range(n):\n            for j in range(i + 1, n):\n                if strs[i] == strs[j] or is_similar(list(strs[i]), list(strs[j])):\n                    uf.union(i, j)\n        return uf.cnt\n\n"
        }
    ]
},
"length-of-longest-fibonacci-subsequence":{
    "id": "873",
    "name": "length-of-longest-fibonacci-subsequence",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "使用集合存储数组中的所有数，然后枚举数组中的两两组合并，去集合中不断延伸斐波那契数列",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/873.length-of-longest-fibonacci-subsequence.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/873.length-of-longest-fibonacci-subsequence.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def lenLongestFibSubseq(self, A: List[int]) -> int:\n        s = set(A)\n        ans = 0\n        for i in range(len(A)):\n            for j in range(i + 1, len(A)):\n                a, b = A[j], A[i] + A[j]\n                t = 2\n                while b in s:\n                    a, b = b, a + b\n                    t += 1\n                ans = max(ans, t)\n        return 0 if ans < 3 else ans\n\n"
        }
    ]
},
"walking-robot-simulation":{
    "id": "874",
    "name": "walking-robot-simulation",
    "pre": [
        {
            "text": "hashtable",
            "link": null,
            "color": "lime"
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
            "text": "空间换时间",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/874.walking-robot-simulation.md",
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
    "pre": [
        {
            "text": "二分查找",
            "link": "../91/binary-search.md",
            "color": "magenta"
        }
    ],
    "keyPoints": [
        {
            "text": "二分查找模板",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [
        {
            "name": "字节跳动"
        }
    ],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/875.koko-eating-bananas.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/875.koko-eating-bananas.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic int binarySearch(int[] nums, int target) {\n    // 左右都闭合的区间 [l, r]\n    int left = 0;\n    int right = nums.length - 1;\n\n    while(left <= right) {\n        int mid = left + (right - left) / 2;\n        if(nums[mid] == target)\n            return mid;\n        else if (nums[mid] < target)\n\t\t\t// 搜索区间变为 [mid+1, right]\n            left = mid + 1;\n        else if (nums[mid] > target)\n            // 搜索区间变为 [left, mid - 1]\n            right = mid - 1;\n    }\n    return -1;\n}\n"
        },
        {
            "language": "java",
            "text": "\npublic int binarySearchLeft(int[] nums, int target) {\n\t// 搜索区间为 [left, right]\n    int left = 0;\n    int right = nums.length - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] < target) {\n            // 搜索区间变为 [mid+1, right]\n            left = mid + 1;\n        } else if (nums[mid] > target) {\n            // 搜索区间变为 [left, mid-1]\n            right = mid - 1;\n        } else if (nums[mid] == target) {\n            // 收缩右边界\n            right = mid - 1;\n        }\n    }\n    // 检查是否越界\n    if (left >= nums.length || nums[left] != target)\n        return -1;\n    return left;\n}\n"
        },
        {
            "language": "java",
            "text": "\npublic int binarySearchRight(int[] nums, int target) {\n\t// 搜索区间为 [left, right]\n    int left = 0\n    int right = nums.length - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] < target) {\n\t\t\t// 搜索区间变为 [mid+1, right]\n            left = mid + 1;\n        } else if (nums[mid] > target) {\n\t\t\t// 搜索区间变为 [left, mid-1]\n            right = mid - 1;\n        } else if (nums[mid] == target) {\n            // 收缩左边界\n            left = mid + 1;\n        }\n    }\n    // 检查是否越界\n    if (right < 0 || nums[right] != target)\n        return -1;\n    return right;\n}\n"
        },
        {
            "language": "js",
            "text": "\nfunction canEatAllBananas(piles, H, mid) {\n  let h = 0;\n  for (let pile of piles) {\n    h += Math.ceil(pile / mid);\n  }\n\n  return h <= H;\n}\n/**\n * @param {number[]} piles\n * @param {number} H\n * @return {number}\n */\nvar minEatingSpeed = function (piles, H) {\n  let lo = 1,\n    hi = Math.max(...piles);\n  // [l, r) ， 左闭右开的好处是如果能找到，那么返回 l 和 r 都是一样的，因为最终 l 等于 r。\n  while (lo <= hi) {\n    let mid = lo + ((hi - lo) >> 1);\n    if (canEatAllBananas(piles, H, mid)) {\n      hi = mid - 1;\n    } else {\n      lo = mid + 1;\n    }\n  }\n\n  return lo; //  不能选择hi\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, piles, k):\n        def possible(mid):\n            t = 0\n            for pile in piles:\n                t += (pile + mid - 1) // mid\n            return t <= k\n\n        l, r = 1, max(piles)\n\n        while l <= r:\n            mid = (l + r) // 2\n            if possible(mid):\n                r = mid - 1\n            else:\n                l = mid + 1\n        return l\n\n"
        }
    ]
},
"stone-game":{
    "id": "877",
    "name": "stone-game",
    "pre": [
        {
            "text": "动态规划",
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
            "text": "可以从数学的角度去分析",
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/877.stone-game.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/877.stone-game.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} piles\n * @return {boolean}\n */\nvar stoneGame = function(piles) {\n  return true;\n};\n"
        }
    ]
},
"possible-bipartition":{
    "id": "886",
    "name": "possible-bipartition",
    "pre": [
        {
            "text": "图的遍历",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "DFS",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "二分图",
            "link": null,
            "color": "blue"
        },
        {
            "text": "染色法",
            "link": null,
            "color": "blue"
        },
        {
            "text": "图的建立和遍历",
            "link": null,
            "color": "blue"
        },
        {
            "text": "colors数组",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/886.possible-bipartition.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/886.possible-bipartition.md",
    "code": [
        {
            "language": "py",
            "text": "\n        graph = [[0] * N for i in range(N)]\n        for a, b in dislikes:\n            graph[a - 1][b - 1] = 1\n            graph[b - 1][a - 1] = 1\n"
        },
        {
            "language": "py",
            "text": "\n# 其中j 表示当前是第几个人，N表示总人数。 dfs的功能就是根据colors和graph分配组，true表示可以分，false表示不可以，具体代码见代码区。\nif colors[j] == 0 and not self.dfs(graph, colors, j, -1 * color, N)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def dfs(self, graph, colors, i, color, N):\n        colors[i] = color\n        for j in range(N):\n            # dislike eachother\n            if graph[i][j] == 1:\n                if colors[j] == color:\n                    return False\n                if colors[j] == 0 and not self.dfs(graph, colors, j, -1 * color, N):\n                    return False\n        return True\n\n    def possibleBipartition(self, N: int, dislikes: List[List[int]]) -> bool:\n        graph = [[0] * N for i in range(N)]\n        colors = [0] * N\n        for a, b in dislikes:\n            graph[a - 1][b - 1] = 1\n            graph[b - 1][a - 1] = 1\n        for i in range(N):\n            if colors[i] == 0 and not self.dfs(graph, colors, i, 1, N):\n                return False\n        return True\n\n"
        }
    ]
},
"super-egg-drop":{
    "id": "887",
    "name": "super-egg-drop",
    "pre": [
        {
            "text": "递归",
            "link": null,
            "color": "orange"
        },
        {
            "text": "动态规划",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md \"动态规划\"",
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/887.super-egg-drop.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/887.super-egg-drop.md",
    "code": [
        {
            "language": "js",
            "text": "\nvar superEggDrop = function (K, N) {\n  // 不选择dp[K][M]的原因是dp[M][K]可以简化操作\n  const dp = Array(N + 1)\n    .fill(0)\n    .map((_) => Array(K + 1).fill(0));\n\n  let m = 0;\n  while (dp[m][K] < N) {\n    m++;\n    for (let k = 1; k <= K; ++k) dp[m][k] = dp[m - 1][k - 1] + 1 + dp[m - 1][k];\n  }\n  return m;\n};\n"
        },
        {
            "language": "py",
            "text": "\ndef superEggDrop(K, N):\n    ans = N\n    # 暴力枚举从第 i 层开始扔\n    for i in range(1, N + 1):\n        ans = min(ans, max(self.superEggDrop(K - 1, i - 1) + 1, self.superEggDrop(K,  N - i) + 1))\n    return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def superEggDrop(self, K: int, N: int) -> int:\n        if K == 1: return N\n        if N == 0 or N == 1: return N\n        ans = N\n        # 暴力枚举从第 i 层开始扔\n        for i in range(1, N + 1):\n            ans = min(ans, max(self.superEggDrop(K - 1, i - 1) + 1, self.superEggDrop(K,  N - i) + 1))\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    @lru_cache()\n    def superEggDrop(self, K: int, N: int) -> int:\n        if K == 1: return N\n        if N == 0 or N == 1: return N\n        ans = N\n        # 暴力枚举从第 i 层开始扔\n        for i in range(1, N + 1):\n            ans = min(ans, max(self.superEggDrop(K - 1, i - 1) + 1, self.superEggDrop(K,  N - i) + 1))\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def superEggDrop(self, K: int, N: int) -> int:\n        for i in range(K + 1):\n            for j in range(N + 1):\n                if i == 1:\n                    dp[i][j] = j\n                if j == 1 or j == 0:\n                    dp[i][j] == j\n                dp[i][j] = j\n                for k in range(1, j + 1):\n                    dp[i][j] = min(dp[i][j], max(dp[i - 1][k - 1] + 1, dp[i][j - k] + 1))\n        return dp[K][N]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def superEggDrop(self, K: int, N: int) -> int:\n        dp = [[0] * (K + 1) for _ in range(N + 1)]\n\n        for i in range(N + 1):\n            for j in range( K + 1):\n                if j == 1:\n                    dp[i][j] = i\n                if i == 1 or i == 0:\n                    dp[i][j] == i\n                dp[i][j] = i\n                for k in range(1, i + 1):\n                    dp[i][j] = min(dp[i][j], max(dp[k - 1][j - 1] + 1, dp[i - k][j] + 1))\n        return dp[N][K]\n        dp = [[0] * (N + 1) for _ in range(K + 1)]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def superEggDrop(self, K: int, N: int) -> int:\n        def f(m, k):\n            if k == 0 or m == 0: return 0\n            return f(m - 1, k - 1) + 1 +  f(m - 1, k)\n        m = 0\n        while f(m, K) < N:\n            m += 1\n        return m\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def superEggDrop(self, K: int, N: int) -> int:\n        dp = [[0] * (K + 1) for _ in range(N + 1)]\n        m = 0\n        while dp[m][K] < N:\n            m += 1\n            for i in range(1, K + 1):\n                dp[m][i] = dp[m - 1][i - 1] + 1 + dp[m - 1][i]\n        return m\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def superEggDrop(self, K: int, N: int) -> int:\n        dp = [[0] * (K + 1) for _ in range(N + 1)]\n        m = 0\n        while dp[m][K] < N:\n            m += 1\n            for i in range(1, K + 1):\n                dp[m][i] = dp[m - 1][i - 1] + 1 + dp[m - 1][i]\n        return m\n"
        }
    ]
},
"maximum-frequency-stack":{
    "id": "895",
    "name": "maximum-frequency-stack",
    "pre": [
        {
            "text": "设计题",
            "link": null,
            "color": "magenta"
        },
        {
            "text": "栈",
            "link": null,
            "color": "red"
        },
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
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
            "text": "fraq_stack的设计。fraq_stack中当前频率的栈要保存所有大于等于其频率的数字",
            "link": null,
            "color": "blue"
        },
        {
            "text": "push和pop的时候同时更新fraq，max_fraq和fraq_stack。",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/895.maximum-frequency-stack.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/895.maximum-frequency-stack.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass FreqStack:\n\n    def __init__(self):\n        self.fraq = collections.defaultdict(lambda: 0)\n        self.fraq_stack = collections.defaultdict(list)\n        self.max_fraq = 0\n\n    def push(self, x: int) -> None:\n        self.fraq[x] += 1\n        if self.fraq[x] > self.max_fraq:\n            self.max_fraq = self.fraq[x]\n        self.fraq_stack[self.fraq[x]].append(x)\n\n    def pop(self) -> int:\n        ans = self.fraq_stack[self.max_fraq].pop()\n        self.fraq[ans] -= 1\n        if not self.fraq_stack[self.max_fraq]:\n            self.max_fraq -= 1\n        return ans\n\n# Your FreqStack object will be instantiated and called as such:\n# obj = FreqStack()\n# obj.push(x)\n# param_2 = obj.pop()\n"
        }
    ]
},
"bitwise-ors-of-subarrays":{
    "id": "898",
    "name": "bitwise-ors-of-subarrays",
    "pre": [
        {
            "text": "【西法带你学算法】一次搞定前缀和",
            "link": "https://lucifer.ren/blog/2020/09/27/atMostK/",
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "子数组是连续的，有很多性质可以利用",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/898.bitwise-ors-of-subarrays.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/898.bitwise-ors-of-subarrays.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution(object):\n    def subarrayBitwiseORs(self, A):\n        pres = set([0])\n        ans = set()\n        for a in A:\n            nxt = set()\n            for pre in pres:\n                nxt.add(a | pre)\n                nxt.add(a)\n            pres = nxt\n            ans |= nxt\n        return len(ans)\n\n\n"
        }
    ]
},
"rle-iterator":{
    "id": "900",
    "name": "rle-iterator",
    "pre": [
        {
            "text": "哈夫曼编码和游程编码",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/900.rle-iterator.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/900.rle-iterator.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} A\n */\nvar RLEIterator = function(A) {\n    this.A = A;\n    this.current = 0;\n};\n\n\n/** \n * @param {number} n\n * @return {number}\n */\nRLEIterator.prototype.next = function(n) {\n    const A = this.A;\n    while(this.current < A.length && A[this.current] < n){\n        n = n - A[this.current];\n        this.current += 2;\n    }\n    \n    if(this.current >= A.length){\n        return -1;\n    }\n    \n    A[this.current] = A[this.current] - n; // 更新Count\n    return A[this.current + 1]; // 返回element\n};\n\n/** \n * Your RLEIterator object will be instantiated and called as such:\n * var obj = new RLEIterator(A)\n * var param_1 = obj.next(n)\n */\n"
        }
    ]
},
"snakes-and-ladders":{
    "id": "909",
    "name": "snakes-and-ladders",
    "pre": [
        {
            "text": "广度优先遍历",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "根据矩阵编号如何算出其都在的行号和列号。这里其实用到了number=(row",
            "link": null,
            "color": "blue"
        },
        {
            "text": "1)\\*n+col这样的一个公式，后面的所有公式都是基于它产生的。",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/909.snakes-and-ladders.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/909.snakes-and-ladders.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def snakesAndLadders(self, board: List[List[int]]) -> int:\n        q = collections.deque([(1, 0)])\n        n = len(board)\n        visited = set()\n\n        def get_pos(pos):\n            row = (n - 1) - (pos - 1) // n\n            col = (n - 1) - ((pos - 1) % n) if row & 1 == n & 1 else (pos - 1) % n\n            return row, col\n\n        while q:\n            for _ in range(len(q)):\n                cur, steps = q.popleft()\n                if cur in visited:\n                    continue\n                visited.add(cur)\n                if cur == n ** 2:\n                    return steps\n                for nxt in range(cur + 1, min(cur + 6, n * n) + 1):\n                    row, col = get_pos(nxt)\n                    if board[row][col] == -1:\n                        q.append((nxt, steps + 1))\n                    else:\n                        q.append((board[row][col], steps + 1))\n        return -1\n\n"
        }
    ]
},
"online-election":{
    "id": "911",
    "name": "online-election",
    "pre": [
        {
            "text": "二分查找",
            "link": "https://github.com/azl397985856/leetcode/blob/master/91/binary-search.md \"二分查找\"",
            "color": "magenta"
        },
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "使用哈希表记录times中每一个时刻的优胜信息",
            "link": null,
            "color": "blue"
        },
        {
            "text": "最左插入模板",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/911.online-election.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/911.online-election.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass TopVotedCandidate:\n\n    def __init__(self, persons: List[int], times: List[int]):\n        vote_count = collections.defaultdict(int) # 哈希表统计每个人的票数信息\n        max_voted_person = -1\n        max_voted_count = 0\n        winner = []\n        # zip([1,2,3], [4,5,6]) 会返回 [[1,4], [2,5], [3,6]]\n        for p, t in zip(persons, times):\n            vote_count[p] += 1\n            if vote_count[p] >= max_voted_count:\n                max_voted_count = vote_count[p]\n                max_voted_person = p\n            # 更新 winner\n            winner.append(max_voted_person)\n"
        },
        {
            "language": "py",
            "text": "\nq(int t) -> int\n"
        },
        {
            "language": "py",
            "text": "\ntimes =  [2,4,5,6]\nwinner = [1,2,1,1]\n"
        },
        {
            "language": "py",
            "text": "\nclass TopVotedCandidate:\n\n    def __init__(self, persons: List[int], times: List[int]):\n        vote_count = collections.defaultdict(int)\n        max_voted_person = -1\n        max_voted_count = 0\n        winner = []\n        for p, t in zip(persons, times):\n            vote_count[p] += 1\n            if vote_count[p] >= max_voted_count:\n                max_voted_count = vote_count[p]\n                max_voted_person = p\n            winner.append(max_voted_person)\n        self.winner = winner\n        self.times = times\n\n    def q(self, t: int) -> int:\n        winner = self.winner\n        # times 是不重复的，也就是严格递增的，类似 [2,4,5,6]，这是关键\n        # eg:\n        # times  [2,4,5,6]\n        # winner [1,2,1,1]\n        i = bisect.bisect_left(self.times, t)\n        if i != len(self.times) and self.times[i] == t:\n            return winner[i]\n        return winner[i - 1]\n"
        }
    ]
},
"sort-an-array":{
    "id": "912",
    "name": "sort-an-array",
    "pre": [
        {
            "text": "数组",
            "link": null,
            "color": "purple"
        },
        {
            "text": "排序",
            "link": null,
            "color": "purple"
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
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/912.sort-an-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/912.sort-an-array.md",
    "code": [
        {
            "language": "js",
            "text": "\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar sortArray = function (nums) {\n  const counts = Array(50000 * 2 + 1).fill(0);\n  const res = [];\n  for (const num of nums) counts[50000 + num] += 1;\n  for (let i in counts) {\n    while (counts[i]--) {\n      res.push(i - 50000);\n    }\n  }\n  return res;\n};\n"
        },
        {
            "language": "js",
            "text": "\nfunction swap(nums, a, b) {\n  const temp = nums[a];\n  nums[a] = nums[b];\n  nums[b] = temp;\n}\n\nfunction helper(nums, start, end) {\n  if (start >= end) return;\n  const pivotIndex = start + ((end - start) >>> 1);\n  const pivot = nums[pivotIndex];\n  let i = start;\n  let j = end;\n  while (i <= j) {\n    while (nums[i] < pivot) i++;\n    while (nums[j] > pivot) j--;\n    if (i <= j) {\n      swap(nums, i, j);\n      i++;\n      j--;\n    }\n  }\n  helper(nums, start, j);\n  helper(nums, i, end);\n}\n\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar sortArray = function (nums) {\n  helper(nums, 0, nums.length - 1);\n  return nums;\n};\n"
        }
    ]
},
"beautiful-array":{
    "id": "932",
    "name": "beautiful-array",
    "pre": [
        {
            "text": "分治",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "利用性质**奇数+偶数=奇数**",
            "link": null,
            "color": "blue"
        },
        {
            "text": "对问题进行分解",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/932.beautiful-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/932.beautiful-array.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def beautifulArray(self, N: int) -> List[int]:\n        @lru_cache(None)\n        def dp(n):\n            if n == 1:\n                return [1]\n            ans = []\n            # [1,n] 中奇数比偶数多1或一样\n            for a in dp(n - n // 2):\n                ans += [a * 2 - 1]\n            for b in dp(n // 2):\n                ans += [b * 2]\n            return ans\n\n        return dp(N)\n\n"
        }
    ]
},
"knight-dialer":{
    "id": "935",
    "name": "knight-dialer",
    "pre": [
        {
            "text": "DFS",
            "link": null,
            "color": "red"
        },
        {
            "text": "记忆化搜索",
            "link": null,
            "color": "lime"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/935.knight-dialer.md",
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
"most-stones-removed-with-same-row-or-column":{
    "id": "947",
    "name": "most-stones-removed-with-same-row-or-column",
    "pre": [
        {
            "text": "并查集",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/union-find.md",
            "color": "volcano"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/947.most-stones-removed-with-same-row-or-column.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/947.most-stones-removed-with-same-row-or-column.md",
    "code": [
        {
            "language": "java",
            "text": "\npublic int removeStones(int[][] stones) {\n        Set visit = new HashSet();\n        int count = 0;\n        int offset = 10000;\n        HashMap <Integer,List<int []>>map = new HashMap();\n\n        // 构造图 每一项是一个节点\n        for (int i = 0; i < stones.length; i++) {\n            int [] node = stones[i];\n            List<int []> list =   map.getOrDefault(node[0]-offset,new ArrayList<>());\n            list.add(node);\n            map.put(node[0]-offset,list);\n\n            List<int []> list1 = map.getOrDefault(node[1],new ArrayList<>());\n            list1.add(node);\n            map.put(node[1],list1);\n        }\n        // 寻找联通分量\n        for (int i = 0; i < stones.length; i++) {\n            int [] node = stones[i];\n            if (!visit.contains((node))){\n                visit.add((node));\n                dfs(node,visit,map);\n                count++;\n            }\n        }\n        return stones.length-count;\n    }\n\n    // 遍历节点\n    public void dfs(int[]node, Set set,HashMap <Integer,List<int []>>map){\n        int offset = 10000;\n        List<int []> list =   map.getOrDefault(node[0]-offset,new ArrayList<>());\n        for (int i = 0; i < list.size(); i++) {\n            int[] item = list.get(i);\n            if (!set.contains((item))){\n                set.add((item));\n                dfs(item,set,map);\n            }\n        }\n        List<int []> list2 =   map.getOrDefault(node[1],new ArrayList<>());\n        for (int i = 0; i < list2.size(); i++) {\n            int[] item = list2.get(i);\n            if (!set.contains((item))){\n                set.add((item));\n                dfs(item,set,map);\n            }\n        }\n    }\n"
        },
        {
            "language": "py",
            "text": "\nn = len(stones)\n# 标准并查集模板\nuf = UF(n)\n# 两个 for 循环作用是将所有石子两两合并\nfor i in range(n):\n    for j in range(i + 1, n):\n        # 如果行或者列相同，将其联通成一个子图\n        if stones[i][0] == stones[j][0] or stones[i][1] == stones[j][1]: uf.union(i, j)\nreturn n - uf.cnt\n"
        },
        {
            "language": "py",
            "text": "\nn = len(stones)\nuf = UF(0)\nfor i in range(n):\n    uf.union(stones[i][0] + 10001, stones[i][1])\nreturn n - uf.cnt\n"
        },
        {
            "language": "py",
            "text": "\nclass UF:\n    def __init__(self, M):\n        self.parent = {}\n        self.cnt = 0\n        # 初始化 parent，size 和 cnt\n        for i in range(M):\n            self.parent[i] = i\n            self.cnt += 1\n\n    def find(self, x):\n        if x != self.parent[x]:\n            self.parent[x] = self.find(self.parent[x])\n            return self.parent[x]\n        return x\n    def union(self, p, q):\n        if self.connected(p, q): return\n        leader_p = self.find(p)\n        leader_q = self.find(q)\n        self.parent[leader_p] = leader_q\n        self.cnt -= 1\n    def connected(self, p, q):\n        return self.find(p) == self.find(q)\n\nclass Solution:\n    def removeStones(self, stones: List[List[int]]) -> int:\n        n = len(stones)\n        uf = UF(n)\n        for i in range(n):\n            for j in range(i + 1, n):\n                if stones[i][0] == stones[j][0] or stones[i][1] == stones[j][1]: uf.union(i, j)\n        return n - uf.cnt\n\n"
        },
        {
            "language": "py",
            "text": "\nclass UF:\n    def __init__(self, M):\n        self.parent = {}\n        self.cnt = 0\n\n    def find(self, x):\n        if x not in self.parent:\n            self.cnt += 1\n            self.parent[x] = x\n        if x != self.parent[x]:\n            self.parent[x] = self.find(self.parent[x])\n            return self.parent[x]\n        return x\n    def union(self, p, q):\n        if self.connected(p, q): return\n        leader_p = self.find(p)\n        leader_q = self.find(q)\n        self.parent[leader_p] = leader_q\n        self.cnt -= 1\n    def connected(self, p, q):\n        return self.find(p) == self.find(q)\n\nclass Solution:\n    def removeStones(self, stones: List[List[int]]) -> int:\n        n = len(stones)\n        uf = UF(0)\n        for i in range(n):\n            uf.union(stones[i][0] + 10001, stones[i][1])\n        return n - uf.cnt\n"
        }
    ]
},
"regions-cut-by-slashes":{
    "id": "959",
    "name": "regions-cut-by-slashes",
    "pre": [
        {
            "text": "BFS",
            "link": null,
            "color": "purple"
        },
        {
            "text": "DFS",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/DFS.md \"DFS\"",
            "color": "red"
        },
        {
            "text": "并查集",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/union-find.md \"并查集\"",
            "color": "volcano"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/959.regions-cut-by-slashes.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/959.regions-cut-by-slashes.md",
    "code": [
        {
            "language": "py",
            "text": "\n\ndef get_pos(row, col):\n    return row * n + col\n"
        },
        {
            "language": "py",
            "text": "\n\ndef get_pos(row, col, i):\n    return row * n + col + i\n"
        },
        {
            "language": "py",
            "text": "\n\n\nclass UF:\n  def __init__(self, M):\n      self.parent = {}\n      self.cnt = 0\n      # 初始化 parent，size 和 cnt\n      for i in range(M):\n          self.parent[i] = i\n          self.cnt += 1\n\n  def find(self, x):\n      if x != self.parent[x]:\n          self.parent[x] = self.find(self.parent[x])\n          return self.parent[x]\n      return x\n  def union(self, p, q):\n      if self.connected(p, q): return\n      leader_p = self.find(p)\n      leader_q = self.find(q)\n      self.parent[leader_p] = leader_q\n      self.cnt -= 1\n  def connected(self, p, q):\n      return self.find(p) == self.find(q)\n\nclass Solution:\n    def regionsBySlashes(self, grid):\n        n = len(grid)\n        N = n * n * 4\n        uf = UF(N)\n        def get_pos(row, col, i):\n            return (row * n + col) * 4 + i\n        for row in range(n):\n            for col in range(n):\n                v = grid[row][col]\n                if row > 0:\n                    uf.union(get_pos(row - 1, col, 2), get_pos(row, col, 1))\n                if col > 0:\n                    uf.union(get_pos(row, col - 1, 3), get_pos(row, col, 0))\n                if v == '/':\n                    uf.union(get_pos(row, col, 0), get_pos(row, col, 1))\n                    uf.union(get_pos(row, col, 2), get_pos(row, col, 3))\n                if v == '\\\\':\n                    uf.union(get_pos(row, col, 1), get_pos(row, col, 3))\n                    uf.union(get_pos(row, col, 0), get_pos(row, col, 2))\n                if v == ' ':\n                    uf.union(get_pos(row, col, 0), get_pos(row, col, 1))\n                    uf.union(get_pos(row, col, 1), get_pos(row, col, 2))\n                    uf.union(get_pos(row, col, 2), get_pos(row, col, 3))\n\n        return uf.cnt\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def regionsBySlashes(self, grid: List[str]) -> int:\n        m, n = len(grid), len(grid[0])\n        new_grid = [[0 for _ in range(3 * n)] for _ in range(3 * m)]\n        ans = 0\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == '/':\n                    new_grid[3 * i][3 * j + 2] = 1\n                    new_grid[3 * i + 1][3 * j + 1] = 1\n                    new_grid[3 * i + 2][3 * j] = 1\n                if grid[i][j] == '\\\\':\n                    new_grid[3 * i][3 * j] = 1\n                    new_grid[3 * i + 1][3 * j + 1] = 1\n                    new_grid[3 * i + 2][3 * j + 2] = 1\n        def dfs(i, j):\n            if 0 <= i < 3 * m and 0 <= j < 3 * n and new_grid[i][j] == 0:\n                new_grid[i][j] = 1\n                dfs(i + 1, j)\n                dfs(i - 1, j)\n                dfs(i, j + 1)\n                dfs(i, j - 1)\n        for i in range(3 * m):\n            for j in range(3 * n):\n                if new_grid[i][j] == 0:\n                    ans += 1\n                    dfs(i, j)\n        return ans\n"
        }
    ]
},
"odd-even-jump":{
    "id": "975",
    "name": "odd-even-jump",
    "pre": [
        {
            "text": "单调栈",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/monotone-stack.md",
            "color": "purple"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/975.odd-even-jump.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/975.odd-even-jump.md",
    "code": [
        {
            "language": "py",
            "text": "\nn = len(A)\nnext_higher, next_lower = [-1] * n, [-1] * n\n\nstack = []\nfor i, a in enumerate(A):\n    while stack and A[stack[-1]] <= A[i]:\n        next_higher[stack.pop()] = i\n    stack.append(i)\nstack = []\nfor i, a in enumerate(A):\n    while stack and A[stack[-1]] >= A[i]:\n        next_lower[stack.pop()] = i\n    stack.append(i)\n"
        },
        {
            "language": "py",
            "text": "\nA = sorted([a, i] for i, a in enumerate(A))\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def oddEvenJumps(self, A):\n        n = len(A)\n        next_higher, next_lower = [0] * n, [0] * n\n        A = sorted([a, i] for i, a in enumerate(A))\n\n        stack = []\n        for _, i in A:\n            # it means stack[-1]'s next bigger(or equal) is i\n            while stack and stack[-1] < i:\n                next_higher[stack.pop()] = i\n            stack.append(i)\n\n        stack = []\n        for _, i in A[::-1]:\n            # it means stack[-1]'s next smaller(or equal) is i\n            while stack and stack[-1] < i:\n                next_lower[stack.pop()] = i\n            stack.append(i)\n\n        # ...\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def oddEvenJumps(self, A):\n        n = len(A)\n        next_higher, next_lower = [0] * n, [0] * n\n\n        stack = []\n        for _, i in sorted([a, i] for i, a in enumerate(A)):\n            # it means stack[-1]'s next bigger(or equal) is i\n            while stack and stack[-1] < i:\n                next_higher[stack.pop()] = i\n            stack.append(i)\n\n        stack = []\n        for _, i in sorted([-a, i] for i, a in enumerate(A)):\n            # it means stack[-1]'s next smaller(or equal) is i\n            while stack and stack[-1] < i:\n                next_lower[stack.pop()] = i\n            stack.append(i)\n\n        higher, lower = [False] * n, [False] * n\n        higher[-1] = lower[-1] = True\n        ans = 1\n        for i in range(n - 2, -1, -1):\n            higher[i] = lower[next_higher[i]]\n            lower[i] = higher[next_lower[i]]\n            ans += higher[i]\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nans = 1\nfor i in range(n - 2, -1, -1):\n    higher[i] = lower[next_higher[i]]\n    lower[i] = higher[next_lower[i]]\n    ans += higher[i] or lower[i]\nreturn ans\n"
        }
    ]
},
"longest-turbulent-subarray":{
    "id": "978",
    "name": "longest-turbulent-subarray",
    "pre": [
        {
            "text": "滑动窗口",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md",
            "color": "purple"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/978.longest-turbulent-subarray.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/978.longest-turbulent-subarray.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maxTurbulenceSize(self, A: List[int]) -> int:\n        ans = 1\n        i = 0\n        for j in range(2, len(A)):\n            if (A[j] == A[j - 1]):\n                i = j\n            elif (A[j] - A[j - 1]) ^ (A[j - 1] - A[j - 2]) >= 0:\n                i = j - 1\n            ans = max(ans, j - i + 1)\n        return ans\n\n"
        }
    ]
},
"vertical-order-traversal-of-a-binary-tree":{
    "id": "987",
    "name": "vertical-order-traversal-of-a-binary-tree",
    "pre": [
        {
            "text": "DFS",
            "link": null,
            "color": "red"
        },
        {
            "text": "排序",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/987.vertical-order-traversal-of-a-binary-tree.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/987.vertical-order-traversal-of-a-binary-tree.md",
    "code": [
        {
            "language": "js",
            "text": "\n{\n    1: [1,3,4]\n    -1: [5]\n}\n\n"
        },
        {
            "language": "js",
            "text": "\n{\n    1: {\n        -2,[1,3,4]\n        -3,[5]\n\n    },\n    -1: {\n        -3: [6]\n    }\n}\n"
        },
        {
            "language": "js",
            "text": "\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar verticalTraversal = function (root) {\n  if (!root) return [];\n\n  // 坐标集合以 x 坐标分组\n  const pos = {};\n  // dfs 遍历节点并记录每个节点的坐标\n  dfs(root, 0, 0);\n\n  // 得到所有节点坐标后，先按 x 坐标升序排序\n  let sorted = Object.keys(pos)\n    .sort((a, b) => +a - +b)\n    .map((key) => pos[key]);\n\n  // 再给 x 坐标相同的每组节点坐标分别排序\n  sorted = sorted.map((g) => {\n    g.sort((a, b) => {\n      // y 坐标相同的，按节点值升序排\n      if (a[0] === b[0]) return a[1] - b[1];\n      // 否则，按 y 坐标降序排\n      else return b[0] - a[0];\n    });\n    // 把 y 坐标去掉，返回节点值\n    return g.map((el) => el[1]);\n  });\n\n  return sorted;\n\n  // *********************************\n  function dfs(root, x, y) {\n    if (!root) return;\n\n    x in pos || (pos[x] = []);\n    // 保存坐标数据，格式是: [y, val]\n    pos[x].push([y, root.val]);\n\n    dfs(root.left, x - 1, y - 1);\n    dfs(root.right, x + 1, y - 1);\n  }\n};\n"
        },
        {
            "language": "cpp",
            "text": "\nclass Solution {\npublic:\n    struct node\n    {\n        int val;\n        int x;\n        int y;\n        node(int v,int X,int Y):val(v),x(X),y(Y){};\n    };\n    static bool cmp(node a,node b)\n    {\n        if(a.x^b.x)\n            return a.x<b.x;\n        if(a.y^b.y)\n            return a.y<b.y;\n        return a.val<b.val;\n    }\n    vector<node> a;\n    int minx=1000,maxx=-1000;\n    vector<vector<int>> verticalTraversal(TreeNode* root) {\n        dfs(root,0,0);\n        sort(a.begin(),a.end(),cmp);\n        vector<vector<int>>ans(maxx-minx+1);\n        for(auto xx:a)\n        {\n            ans[xx.x-minx].push_back(xx.val);\n        }\n        return ans;\n    }\n    void dfs(TreeNode* root,int x,int y)\n    {\n        if(root==nullptr)\n            return;\n        if(x<minx)\n            minx=x;\n        if(x>maxx)\n            maxx=x;\n        a.push_back(node(root->val,x,y));\n        dfs(root->left,x-1,y+1);\n        dfs(root->right,x+1,y+1);\n    }\n};\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution(object):\n    def verticalTraversal(self, root):\n        seen = collections.defaultdict(\n            lambda: collections.defaultdict(list))\n\n        def dfs(root, x=0, y=0):\n            if not root:\n                return\n            seen[x][y].append(root.val)\n            dfs(root.left, x-1, y+1)\n            dfs(root.right, x+1, y+1)\n\n        dfs(root)\n        ans = []\n        # x 排序、\n        for x in sorted(seen):\n            level = []\n            # y 排序\n            for y in sorted(seen[x]):\n                # 值排序\n                level += sorted(v for v in seen[x][y])\n            ans.append(level)\n\n        return ans\n"
        }
    ]
},
"minimum-number-of-k-consecutive-bit-flips":{
    "id": "995",
    "name": "minimum-number-of-k-consecutive-bit-flips",
    "pre": [
        {
            "text": "连续子数组优化",
            "link": null,
            "color": "lime"
        }
    ],
    "keyPoints": [
        {
            "text": "连续子数组优化技巧",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/995.minimum-number-of-k-consecutive-bit-flips.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/995.minimum-number-of-k-consecutive-bit-flips.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minKBitFlips(self, A, K):\n        N = len(A)\n        ans = 0\n        for i in range(N - K + 1):\n            if A[i] == 1:\n                continue\n            for j in range(K):\n                A[i + j] ^= 1\n            ans += 1\n        for i in range(N):\n            if A[i] == 0:\n                return -1\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def minKBitFlips(self, A: List[int], K: int) -> int:\n        n = len(A)\n        diff = [0] * (n + 1)\n        ans, cur = 0, 0\n        for i in range(n):\n            cur += diff[i]\n            if cur % 2 == A[i]:\n                if i + K > n:\n                    return -1\n                ans += 1\n                cur += 1\n                diff[i + K] -= 1\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minKBitFlips(self, A, K):\n        N = len(A)\n        q = collections.deque()\n        ans = 0\n        for i in range(N):\n            if q and i >= q[0] + K:\n                q.popleft()\n            if len(q) % 2 == A[i]:\n                if i + K > N:\n                    return -1\n                q.append(i)\n                ans += 1\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def minKBitFlips(self, A, K):\n        flips = ans = 0\n        for i in range(len(A)):\n            if i >= K and A[i - K] - 2 == 0:\n                flips -= 1\n            if (flips % 2) == A[i]:\n                if i + K > len(A):\n                    return -1\n                A[i] = 2\n                flips += 1\n                ans += 1\n        return ans\n\n"
        }
    ]
},
"find-the-town-judge":{
    "id": "997",
    "name": "find-the-town-judge",
    "pre": [
        {
            "text": "图",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [
        {
            "text": "将问题抽象为图，问题转为求图的入度和出度",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/997.find-the-town-judge.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/997.find-the-town-judge.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n     def findJudge(self, N, trust):\n        in_degree = [0] * (N + 1)\n        out_degree = [0] * (N + 1)\n        for a, b in trust:\n            in_degree[b] += 1\n            out_degree[a] += 1\n        for i in range(1, N + 1):\n            if in_degree[i] == N - 1 and out_degree[i] == 0:\n                return i\n        return -1\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n     def findJudge(self, N, trust):\n        count = [0] * (N + 1)\n        for i, j in trust:\n            count[i] -= 1\n            count[j] += 1\n        for i in range(1, N + 1):\n            if count[i] == N - 1:\n                return i\n        return -1\n"
        }
    ]
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
            "text": "\n#\n# @lc app=leetcode.cn id=1015 lang=python3\n#\n# [1015] 可被 K 整除的最小整数\n#\n\n# @lc code=start\n\n\nclass Solution:\n    def smallestRepunitDivByK(self, K: int) -> int:\n        if K % 10 in [2, 4, 5, 6, 8]:\n            return - 1\n        seen = set()\n        mod = 0\n        for i in range(1, K + 1):\n            mod = (mod * 10 + 1) % K\n            if mod in seen:\n                return -1\n            if mod == 0:\n                return ix\n            seen.add(mod)\n"
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
            "text": "\ndp[i | sub] = min(dp[i | sub], dp[i] + 1)\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def minNumberOfSemesters(self, n: int, dependencies: List[List[int]], k: int) -> int:\n        neighbors = collections.defaultdict(int)\n        dp = [n] * (1 << n)\n\n        for fr, to in dependencies:\n            neighbors[to - 1] |= 1 << (fr - 1)\n        dp[0] = 0  # 启动 dp\n        for i in range(1 << n):\n            can = 0\n            for j in range(n):\n                if (i & neighbors[j]) == neighbors[j]:\n                    can |= 1 << j\n            # 已经学过的不能学\n            can &= ~i\n            sub = can\n            while sub:\n                if bin(sub).count(\"1\") <= k:\n                    dp[i | sub] = min(dp[i | sub], dp[i] + 1)\n                sub = (sub - 1) & can\n        return dp[(1 << n) - 1]\n\n\n"
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
    "pre": [
        {
            "text": "差分与前缀和",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "逆向思考",
            "link": null,
            "color": "blue"
        },
        {
            "text": "使用差分减少时间复杂度",
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
            "text": "\nclass Solution:\n    def minNumberOperations(self, A: List[int]) -> int:\n        d = [A[0]]\n        ans = 0\n\n        for i in range(1, len(A)):\n            d.append(A[i] - A[i-1])\n        for a in d:\n            ans += max(0, a)\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def minNumberOperations(self, A: List[int]) -> int:\n        ans = A[0]\n        for i in range(1, len(A)):\n            ans += max(0, A[i] - A[i-1])\n        return ans\n"
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
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/2009.minimum-number-of-operations-to-make-array-continuous.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/2009.minimum-number-of-operations-to-make-array-continuous.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nimport bisect\n\n\nclass Solution:\n    def minOperations(self, nums: List[int]) -> int:\n        ans = on = len(nums)\n        nums = list(set(nums))\n        nums.sort()\n        n = len(nums)\n        for i, v in enumerate(nums):\n            r = bisect.bisect_right(nums, v + on - 1)\n            l = bisect.bisect_left(nums, v - on + 1)\n            ans = min(ans, n - (r - i), n - (i - l + 1))\n        return ans + (on - n)\n\n"
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
"maximum-xor-with-an-element-from-array":{
    "id": "5640",
    "name": "maximum-xor-with-an-element-from-array",
    "pre": [
        {
            "text": "异或",
            "link": null,
            "color": "geekblue"
        },
        {
            "text": "位运算",
            "link": null,
            "color": "blue"
        },
        {
            "text": "剪枝",
            "link": null,
            "color": "gold"
        },
        {
            "text": "双指针",
            "link": null,
            "color": "green"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/5640.maximum-xor-with-an-element-from-array.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5640.maximum-xor-with-an-element-from-array.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def maximizeXor(self, nums: List[int], queries: List[List[int]]) -> List[int]:\n        def solve(x, m, s, e):\n            if nums[0] > m: return -1\n            max_v = 0\n            for i in range(31, -1, -1):\n                if nums[s] & (1<<i) == nums[e] & (1<<i):\n                    max_v += nums[s] & (1<<i)\n                elif nums[dp[i][e]] <= m and x ^ nums[s] < x ^ nums[e]:\n                    max_v += nums[e] & (1<<i)\n                    # 直接移动较小指针（s）到 dp[i][e]，其他不可能是答案\n                    s = dp[i][e]\n                else:\n                    max_v += nums[s] & (1<<i)\n                    # 直接移动较小指针（e）到 dp[i][e] - 1，其他不可能是答案\n                    e = dp[i][e] - 1\n\n            return max_v ^ x\n\n        nums.sort()\n        n = len(nums)\n        #  dp[i][j] 是和 nums[j] 第 i 位相等的最小的数组下标\n        dp = [[0 for _ in range(n)] for _ in range(32)]\n        for i in range(32):\n            for j in range(n):\n                if j == 0 or (nums[j] & (1<<i)) != (nums[j-1] & (1<<i)): dp[i][j] = j\n                else: dp[i][j] = dp[i][j-1]\n        return [solve(x, m, 0, n-1) for x,m in queries]\n"
        }
    ]
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
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "预处理出数组l和r",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/5935.find-good-days-to-rob-the-bank.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5935.find-good-days-to-rob-the-bank.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def goodDaysToRobBank(self, security: List[int], time: int) -> List[int]:\n        n = len(security)\n        l, r = [0]*n, [0]*n\n        ans = []\n\n        for i in range(1, n):\n            if security[i] <= security[i-1]:\n                l[i] += l[i-1] + 1\n        for i in range(n-2,-1,-1):\n            if security[i] <= security[i+1]:\n                r[i] += r[i+1] + 1\n\n        for i in range(n):\n            if l[i] >= time and r[i] >= time:\n                ans.append(i)\n        return ans\n\n"
        }
    ]
},
"detonate-the-maximum-bombs":{
    "id": "5936",
    "name": "detonate-the-maximum-bombs",
    "pre": [
        {
            "text": "BFS",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "BFS",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/5936.detonate-the-maximum-bombs.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/5936.detonate-the-maximum-bombs.md",
    "code": [
        {
            "language": "py",
            "text": "\n\n\n\nclass Solution:\n    def maximumDetonation(self, bombs: List[List[int]]) -> int:\n        n = len(bombs)\n        d = collections.defaultdict(list)\n        def overlap(i, j):\n            x1, y1, r1 = bombs[i]\n            x2, y2, r2 = bombs[j]\n            return (x1 - x2) ** 2 + (y1 - y2) ** 2 <= r1 ** 2\n        for i in range(n):\n            for j in range(i+1, n):\n                if overlap(i, j):\n                    d[i].append(j)\n                if overlap(j, i):\n                    d[j].append(i)\n        ans = 1\n        for i in range(n):\n            q = collections.deque([i])\n            vis = set()\n            count = 0\n            while q:\n                cur = q.popleft()\n                if cur in vis: continue\n                vis.add(cur)\n                count += 1\n                for neibor in d[cur]:\n                    q.append(neibor)\n            ans = max(ans, count)\n        return ans\n\n\n\n\n"
        }
    ]
},
"md":{
    "id": "Bus-Fare",
    "name": "md",
    "pre": [
        {
            "text": "递归树",
            "link": null,
            "color": "volcano"
        },
        {
            "text": "多指针",
            "link": null,
            "color": "magenta"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Bus-Fare.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Bus-Fare.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, days):\n        n = len(days)\n        prices = [2, 7, 25]\n        durations = [1, 7, 30]\n        dp = [float(\"inf\")] * (n + 1)\n        dp[0] = 0\n\n        for i in range(1, n + 1):\n            for j in range(i, n + 1):\n                # 如何第 i + 1天到第 j 天的天数小于等于 2，那么我们就试一下在 i + 1 天买一张 2 天的票，看会不会是最优解。\n                # 7 和 25 的逻辑也是一样\n        return dp[-1]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, days):\n        n = len(days)\n        prices = [2, 7, 25]\n        durations = [1, 7, 30]\n        dp = [float(\"inf\")] * (n + 1)\n        # dp[i] 表示截止第 i + 1 天（包括）需要多少钱，因此答案就是 dp[n]，其中 n 为 max(days)，由于 day 是升序的，因此就是 day 最后一项。\n        dp[0] = 0\n\n        for i in range(1, n + 1):\n            for j in range(i, n + 1):\n                for price, duration in zip(prices, durations):\n                    if days[j - 1] - days[i - 1] + 1 <= duration:\n                        dp[j] = min(dp[j], dp[i - 1] + price)\n        return dp[-1]\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, days):\n        prices = [2, 7, 25]\n        durations = [1, 7, 30]\n        n = len(days)\n        m = len(prices)\n        dp = [float(\"inf\")] * (n + 1)\n        dp[0] = 0\n        pointers = [0] * m\n        for i in range(1, n + 1):\n            for j in range(m):\n                while days[i - 1] - days[pointers[j]] >= durations[j]:\n                    pointers[j] += 1\n                dp[i] = min(dp[i], dp[pointers[j]] + prices[j])\n        return dp[-1]\n"
        }
    ]
},
"md":{
    "id": "Connected-Road-to-Destination",
    "name": "md",
    "pre": [
        {
            "text": "二分",
            "link": null,
            "color": "purple"
        },
        {
            "text": "并查集",
            "link": null,
            "color": "volcano"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Connected-Road-to-Destination.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Connected-Road-to-Destination.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, sx, sy, ex, ey, roads):\n        def possible(mid):\n            dic = set([(sx, sy), (ex, ey)])\n            visited = set()\n            q = collections.deque([(sx, sy)])\n            for x, y in roads[:mid]:\n                dic.add((x, y))\n            while q:\n                x, y = q.popleft()\n                if (x, y) in visited: continue\n                visited.add((x, y))\n                if (x, y) == (ex, ey): return True\n                for dx, dy in [(1,0),(-1,0), (0,1), (0,-1)]:\n                    if (x + dx, y + dy) in dic:\n                        q.append((x + dx, y + dy))\n            return False\n        l, r = 0, len(roads)\n\n        while l <= r:\n            mid = (l + r) // 2\n            if possible(mid):\n                r = mid - 1\n            else:\n                l = mid + 1\n        return -1 if l > len(roads) else l\n"
        },
        {
            "language": "py",
            "text": "\n\nclass UF:\n  def __init__(self):\n      self.parent = {}\n      self.cnt = 0\n  def add(self, i):\n      self.parent[i] = i\n      self.cnt += 1\n\n  def find(self, x):\n      if x != self.parent[x]:\n          self.parent[x] = self.find(self.parent[x])\n          return self.parent[x]\n      return x\n  def union(self, p, q):\n      if p not in self.parent or q not in self.parent: return\n      if self.connected(p, q): return\n      leader_p = self.find(p)\n      leader_q = self.find(q)\n      self.parent[leader_p] = leader_q\n      self.cnt -= 1\n  def connected(self, p, q):\n      return self.find(p) == self.find(q)\n\nclass Solution:\n    def solve(self, sx, sy, ex, ey, roads):\n        start = (sx, sy)\n        end = (ex, ey)\n        # 注意特判\n        for dx, dy in [(0, 0), (1,0), (-1,0), (0,1), (0,-1)]:\n            x = sx + dx\n            y = sy + dy\n            if (x, y) == (ex, ey): return 0\n\n        uf = UF()\n        uf.add(start)\n        uf.add(end)\n\n        for i, road in enumerate(map(tuple, roads)):\n            uf.add(road)\n            for dx, dy in [(1,0), (-1,0), (0,1), (0,-1)]:\n                x = road[0] + dx\n                y = road[1] + dy\n                uf.union(road, (x, y))\n                if uf.connected(start, end):\n                    return i + 1\n\n        return -1\n"
        }
    ]
},
"md":{
    "id": "Increasing-Digits",
    "name": "md",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "数位DP",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Increasing-Digits.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Increasing-Digits.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, n):\n        dp = [[0] * 10 for _ in range(n)]\n        dp[0] = [0] + [1] * 9\n\n        for i in range(1, n):\n            for j in range(1, 10):\n                for k in range(j):\n                    dp[i][j] += dp[i - 1][k]\n        return sum(dp[-1])\n\n"
        }
    ]
},
"md":{
    "id": "Kth-Pair-Distance",
    "name": "md",
    "pre": [
        {
            "text": "排序",
            "link": null,
            "color": "purple"
        },
        {
            "text": "二分法",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Kth-Pair-Distance.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Kth-Pair-Distance.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, A, k):\n        A.sort()\n        h = [(A[i] - A[i-1], i-1,i) for i in range(1, len(A))]\n        heapq.heapify(h)\n\n        while True:\n            top, i, j = heapq.heappop(h)\n            if not k: return top\n            k -= 1\n            if j + 1 < len(A): heapq.heappush(h, (A[j+1] - A[i], i, j + 1))\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, A, k):\n        A.sort()\n        def count_not_greater(diff):\n            i = ans = 0\n            for j in range(1, len(A)):\n                while A[j] - A[i] > diff:\n                    i += 1\n                ans += j - i\n            return ans\n        l, r = 0, A[-1] - A[0]\n\n        while l <= r:\n            mid = (l + r) // 2\n            if count_not_greater(mid) > k:\n                r = mid - 1\n            else:\n                l = mid + 1\n        return l\n"
        }
    ]
},
"md":{
    "id": "Largest-Equivalent-Set-of-Pairs",
    "name": "md",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Largest-Equivalent-Set-of-Pairs.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Largest-Equivalent-Set-of-Pairs.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, nums):\n        n = len(nums)\n\n        @lru_cache(None)\n        def dp(i, diff):\n            if i == n:\n                return 0 if diff == 0 else float(\"-inf\")\n            return max(\n                dp(i + 1, diff),\n                dp(i + 1, diff - nums[i]),\n                dp(i + 1, diff + nums[i]) + nums[i],\n            )\n\n        return dp(0, 0)\n"
        }
    ]
},
"md":{
    "id": "Longest-Contiguously-Strictly-Increasing-Sublist-After-Deletion",
    "name": "md",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "连续性DP",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Longest-Contiguously-Strictly-Increasing-Sublist-After-Deletion.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Longest-Contiguously-Strictly-Increasing-Sublist-After-Deletion.md",
    "code": [
        {
            "language": "py",
            "text": "\ndp[i][0] = dp[i-1][0] + 1\ndp[i][1] = dp[i-1][1] + 1\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, nums):\n        n = len(nums)\n        if not n: return 0\n        dp = [[1, 0] for _ in range(n)]\n        ans = 1\n\n        for i in range(1,n):\n            if nums[i] > nums[i-1]:\n                dp[i][0] = dp[i-1][0] + 1\n                dp[i][1] = dp[i-1][1] + 1\n            else:\n                dp[i][0] = 1\n                dp[i][1] = 1\n            if i > 1 and nums[i] > nums[i-2]:\n                dp[i][1] = max(dp[i][1], 1 + dp[i-2][0])\n            ans = max(ans, dp[i][0], dp[i][1])\n\n        return ans\n\n"
        }
    ]
},
"md":{
    "id": "Longest-Matrix-Path-Length",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Longest-Matrix-Path-Length.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Longest-Matrix-Path-Length.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, matrix):\n        m, n = len(matrix), len(matrix[0])\n        visited = set()\n        def dp(i, j):\n            if (i, j) in visited: return float('-inf')\n            if j < 0 or j >= n: return float('-inf')\n            if i >= m: return 0\n            if matrix[i][j] == 1: return float('-inf')\n            visited.add((i, j))\n            ans = 1 + max(dp(i+1, j), dp(i,j+1), dp(i, j-1))\n            visited.remove((i, j))\n            return ans\n        ans = max([dp(0, j) for j in range(n)])\n        return 0 if ans == float('-inf') else ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, matrix):\n        m, n = len(matrix), len(matrix[0])\n\n        @lru_cache(None)\n        def dp(i, j, d):\n            if j < 0 or j >= n: return float('-inf')\n            if i >= m: return 0\n            if matrix[i][j] == 1: return float('-inf')\n            ans = 1 + max(dp(i+1, j, 0), float('-inf') if d == -1 else dp(i,j+1, 1), float('-inf') if d == 1 else dp(i, j-1, -1))\n            return ans\n        ans = max([dp(0, j, 0) for j in range(n)])\n        return 0 if ans == float('-inf') else ans\n"
        }
    ]
},
"md":{
    "id": "Minimum-Dropping-Path-Sum",
    "name": "md",
    "pre": [
        {
            "text": "动态规划",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md \"动态规划\"",
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Minimum-Dropping-Path-Sum.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Minimum-Dropping-Path-Sum.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, matrix):\n        dp = [(0, -1)]\n        m, n = len(matrix), len(matrix[0])\n        for i in range(m):\n            next_dp = [(float(\"inf\"), -1), (float(\"inf\"), -1)]# (smallest, 2nd smallest)\n            for j in range(n):\n                for v, k in dp:\n                    if k == j:\n                        continue\n                    nxt = matrix[i][j] + v\n                    if nxt < next_dp[0][0]:\n                        next_dp = [(nxt, j), next_dp[0]]\n                    elif nxt < next_dp[1][0]:\n                        next_dp[1] = (nxt, j)\n                    break\n            dp = next_dp # rolling array\n        return dp[0][0]\n\n"
        }
    ]
},
"md":{
    "id": "Minimum-Light-Radius",
    "name": "md",
    "pre": [
        {
            "text": "排序",
            "link": null,
            "color": "purple"
        },
        {
            "text": "二分法",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Minimum-Light-Radius.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Minimum-Light-Radius.md",
    "code": [
        {
            "language": "py",
            "text": "\ndef possible(diameter):\n    start = nums[0]\n    end = start + diameter\n    for i in range(LIGHTS):\n        idx = bisect_right(nums, end)\n        if idx >= N:\n            return True\n        start = nums[idx]\n        end = start + diameter\n    return False\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, nums):\n        nums.sort()\n        N = len(nums)\n        if N <= 3:\n            return 0\n        LIGHTS = 3\n        # 这里使用的是直径，因此最终返回需要除以 2\n        def possible(diameter):\n            start = nums[0]\n            end = start + diameter\n            for i in range(LIGHTS):\n                idx = bisect_right(nums, end)\n                if idx >= N:\n                    return True\n                start = nums[idx]\n                end = start + diameter\n            return False\n\n        l, r = 0, nums[-1] - nums[0]\n        while l <= r:\n            mid = (l + r) // 2\n            if possible(mid):\n                r = mid - 1\n            else:\n                l = mid + 1\n        return l / 2\n"
        }
    ]
},
"md":{
    "id": "Number-Stream-to-Intervals",
    "name": "md",
    "pre": [
        {
            "text": "哈希表",
            "link": null,
            "color": "gold"
        },
        {
            "text": "有序哈希表",
            "link": null,
            "color": "purple"
        },
        {
            "text": "二分法",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Number-Stream-to-Intervals.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Number-Stream-to-Intervals.md",
    "code": [
        {
            "language": "py",
            "text": "\ns.add(1)\ns.add(3)\ns.add(2)\ns.add(9)\n\n"
        },
        {
            "language": "py",
            "text": "\ns.add(1) # [ [1,1] ]\ns.add(3) # [ [1,1], [3,3] ]\ns.add(2) # [ [1,1], [2,2], [3,3] ] 可合并为 [ [1,3] ]\ns.add(9) # [ [1,3], [9,9] ]\n"
        },
        {
            "language": "py",
            "text": "\nfrom sortedcontainers import SortedDict\n\n\nclass StreamSummary:\n    def __init__(self):\n        self.start = SortedDict()\n        self.end = SortedDict()\n\n    def add(self, val):\n        if val - 1 in self.end and val + 1 in self.start:\n            # [a, val-1] + [val,val] + [val+1, b] -> [a, b]\n            self.end[self.start[val + 1]] = self.end[val - 1]\n            self.start[self.end[val - 1]] = self.start[val + 1]\n            del self.start[val + 1]\n            del self.end[val - 1]\n        elif val - 1 in self.end:\n            # [a, val -1] + [val, val] -> [a, val]\n            self.end[val] = self.end[val - 1]\n            self.start[self.end[val]] = val\n            del self.end[val - 1]\n        elif val + 1 in self.start:\n            # [val,val] + [val+1, b] -> [val, b]\n            self.start[val] = self.start[val + 1]\n            self.end[self.start[val]] = val\n            del self.start[val + 1]\n        else:\n            self.start[val] = val\n            self.end[val] = val\n\n    def get(self):\n        # iterate start or end get same correct answer\n        ans = []\n        for s, e in self.start.items():\n            ans.append([s, e])\n        return ans\n\n"
        }
    ]
},
"md":{
    "id": "Number-of-Substrings-with-Single-Character-Difference",
    "name": "md",
    "pre": [
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "建立前后缀dp数组，将问题转化为前后缀的笛卡尔积",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Number-of-Substrings-with-Single-Character-Difference.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Number-of-Substrings-with-Single-Character-Difference.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, s, t):\n        ans = 0\n        for i in range(len(s)):\n            for j in range(len(t)):\n                mismatches = 0\n                for k in range(min(len(s) - i, len(t) - j)):\n                    mismatches += s[i + k] != t[j + k]\n                    if mismatches == 1:\n                        ans += 1\n                    elif mismatches > 1:\n                        break\n        return ans\n\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def solve(self, s, t):\n        m, n = len(s), len(t)\n        prefix = [[0] * (n + 1) for _ in range(m + 1)]\n        suffix = [[0] * (n + 1) for _ in range(m + 1)]\n\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                if s[i - 1] == t[j - 1]:\n                    prefix[i][j] = prefix[i - 1][j - 1] + 1\n\n        for i in range(m - 1, -1, -1):\n            for j in range(n - 1, -1, -1):\n                if s[i] == t[j]:\n                    suffix[i][j] = suffix[i + 1][j + 1] + 1\n\n        ans = 0\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                if s[i - 1] != t[j - 1]:\n                    ans += (prefix[i - 1][j - 1] + 1) * (suffix[i][j] + 1)\n        return ans\n\n"
        }
    ]
},
"md":{
    "id": "Sort-String-by-Flipping",
    "name": "md",
    "pre": [
        {
            "text": "无",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Sort-String-by-Flipping.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Sort-String-by-Flipping.md",
    "code": [
        {
            "language": "py",
            "text": "\nans = n\nfor i in range(n):\n    # 如果 i 是分界点，那么此时需要翻转多少次？假设我们求出来是需要翻转 x 次\n    ans = min(ans, x)\nreturn ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, s):\n        x_count = y_count = 0\n        ans = len(s)\n        for c in s:\n            x_count += c == 'x'\n        for c in s:\n            x_count -= c == 'x'\n            ans = min(ans, x_count + y_count)\n            y_count += c == 'y'\n        return ans\n\n"
        }
    ]
},
"md":{
    "id": "Ticket-Order",
    "name": "md",
    "pre": [],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Ticket-Order.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Ticket-Order.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, tickets):\n        q = collections.deque([(i, ticket) for i, ticket in enumerate(tickets)])\n        ans = [0] * len(tickets)\n        time = 0\n        while q:\n            i, cur = q.popleft()\n            time += 1\n            if cur > 1:\n                q.append((i, cur - 1))\n            else:\n                ans[i] = time\n\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, a):\n        n = len(a)\n        answer = [0 for i in range(n)]\n        sl = SortedList()\n        ps = 0\n        for j, (ai, i) in enumerate(sorted((ai, i) for i, ai in enumerate(a))):\n            answer[i] = ps + (n - j) * (ai - 1) + (i + 1 - sl.bisect_left(i))\n            sl.add(i)\n            ps += ai\n        return answer\n"
        }
    ]
},
"md":{
    "id": "Triple-Inversion",
    "name": "md",
    "pre": [
        {
            "text": "二分法",
            "link": null,
            "color": "blue"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/Triple-Inversion.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/Triple-Inversion.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, A):\n        ans = 0\n        for i in range(len(A)):\n            for j in range(i+1,len(A)):\n                if A[i] > A[j] * 3: ans += 1\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\nd = []\nfor a in A:\n    bisect.insort(d, a)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, A):\n        d = []\n        ans = 0\n\n        for a in A:\n            i = bisect.bisect_right(d, a * 3)\n            ans += len(d) - i\n            bisect.insort(d, a)\n\n"
        },
        {
            "language": "py",
            "text": "\nfrom sortedcontainers import SortedList\nclass Solution:\n    def solve(self, A):\n        d = SortedList()\n        ans = 0\n\n        for a in A:\n            i = d.bisect_right(a * 3)\n            ans += len(d) - i\n            d.add(a)\n        return ans\n"
        },
        {
            "language": "py",
            "text": "\n\ndef mergeTwo(nums1, nums2):\n    res = []\n    i = j = 0\n    while i < len(nums1) and j < len(nums2):\n        if nums1[i] < nums[j]:\n            res.append(nums[i])\n            i += 1\n        else:\n            res.append(nums[j])\n            j += 1\n    while i < len(nums1) :\n        res.append(num[i])\n        i += 1\n    while j < len(nums1) :\n        res.append(num[j])\n        j += 1\n    return res\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, nums: List[int]) -> int:\n        self.cnt = 0\n        def merge(nums, start, mid, end):\n            i, j, temp = start, mid + 1, []\n            while i <= mid and j <= end:\n                if nums[i] <= nums[j]:\n                    temp.append(nums[i])\n                    i += 1\n                else:\n                    self.cnt += mid - i + 1\n                    temp.append(nums[j])\n                    j += 1\n            while i <= mid:\n                temp.append(nums[i])\n                i += 1\n            while j <= end:\n                temp.append(nums[j])\n                j += 1\n\n            for i in range(len(temp)):\n                nums[start + i] = temp[i]\n\n\n        def mergeSort(nums, start, end):\n            if start >= end: return\n            mid = (start + end) >> 1\n            mergeSort(nums, start, mid)\n            mergeSort(nums, mid + 1, end)\n            merge(nums, start, mid,  end)\n        mergeSort(nums, 0, len(nums) - 1)\n        return self.cnt\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, nums) -> int:\n        self.cnt = 0\n        def merge(nums, start, mid, end, temp):\n            i, j = start, mid + 1\n            while i <= mid and j <= end:\n                if nums[i] <=  nums[j]:\n                    temp.append(nums[i])\n                    i += 1\n                else:\n                    temp.append(nums[j])\n                    j += 1\n            # 防住\n            # 这里代码开始\n            ti, tj = start, mid + 1\n            while ti <= mid and tj <= end:\n                if nums[ti] <=  3 * nums[tj]:\n                    ti += 1\n                else:\n                    self.cnt += mid - ti + 1\n                    tj += 1\n            # 这里代码结束\n            while i <= mid:\n                temp.append(nums[i])\n                i += 1\n            while j <= end:\n                temp.append(nums[j])\n                j += 1\n            for i in range(len(temp)):\n                nums[start + i] = temp[i]\n            temp.clear()\n\n\n        def mergeSort(nums, start, end, temp):\n            if start >= end: return\n            mid = (start + end) >> 1\n            mergeSort(nums, start, mid, temp)\n            mergeSort(nums, mid + 1, end, temp)\n            merge(nums, start, mid,  end, temp)\n        mergeSort(nums, 0, len(nums) - 1, [])\n        return self.cnt\n"
        }
    ]
},
"md":{
    "id": "binode-lcci",
    "name": "md",
    "pre": [
        {
            "text": "二叉查找树",
            "link": null,
            "color": "purple"
        },
        {
            "text": "递归",
            "link": null,
            "color": "orange"
        },
        {
            "text": "二叉树的遍历",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/binary-tree-traversal.md",
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "指针操作",
            "link": null,
            "color": "blue"
        },
        {
            "text": "返回值的处理",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/binode-lcci.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/binode-lcci.md",
    "code": [
        {
            "language": "py",
            "text": "\ncur.left = None\npre.right = cur\npre = cur\n"
        },
        {
            "language": "py",
            "text": "\nself.pre = None\ndef dfs(root):\n    dfs(root.left)\n    # 上面的指针改变逻辑写到这里\n    self.pre = root\n    dfs(root.right)\n\n"
        },
        {
            "language": "py",
            "text": "\n\n    self.pre = self.ans = None\n    def dfs(root):\n        if not root: return\n        dfs(root.left)\n        root.left = None\n        if self.pre: self.pre.right = root\n        # 当第一次执行到下面这一行代码，恰好是在最左下角，此时 self.pre = None，其他任何时候 self.pre 都不是 None。\n        if self.pre is None: self.ans = root\n        self.pre = root\n        dfs(root.right)\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def convertBiNode(self, root: TreeNode) -> TreeNode:\n        self.pre = self.ans = None\n        def dfs(root):\n            if not root: return\n            dfs(root.left)\n            root.left = None\n            if self.pre: self.pre.right = root\n            if self.pre is None: self.ans = root\n            self.pre = root\n\n            dfs(root.right)\n        dfs(root)\n        return self.ans\n"
        }
    ]
},
"md":{
    "id": "consecutive-wins",
    "name": "md",
    "pre": [
        {
            "text": "递归树",
            "link": null,
            "color": "volcano"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/consecutive-wins.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/consecutive-wins.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def solve(self, n, k):\n        @lru_cache(None)\n        def dp(i, cnt):\n            if i == n:\n                return 1\n            ans = dp(i + 1, 0)  # place L\n            if cnt < k:\n                ans += dp(i + 1, cnt + 1)  # place W if I can\n            return ans\n\n        return dp(0, 0) % (10 ** 9 + 7)\n"
        }
    ]
},
"md":{
    "id": "get-kth-magic-number-lcci",
    "name": "md",
    "pre": [
        {
            "text": "堆",
            "link": null,
            "color": "green"
        },
        {
            "text": "状态机",
            "link": null,
            "color": "orange"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "去重",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/get-kth-magic-number-lcci.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/get-kth-magic-number-lcci.md",
    "code": [
        {
            "language": "py",
            "text": "\nfrom heapq import heappop, heappush\nclass Solution:\n    def getKthMagicNumber(self, k: int) -> int:\n        heap = [1]\n        numbers = set()\n        # 每次从小顶堆取一个， 取 k 次即可\n        while k:\n            cur = heappop(heap)\n            if cur not in numbers:\n                k -= 1\n                heappush(heap, cur * 3)\n                heappush(heap, cur * 5)\n                heappush(heap, cur * 7)\n            numbers.add(cur)\n        return cur\n\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def getKthMagicNumber(self, k: int) -> int:\n        p3 = p5 = p7 = 0\n        state = [1] + [0] * (k - 1)\n\n        for i in range(1, k):\n            state[i] = min(state[p3] * 3, state[p5] * 5, state[p7] * 7)\n            if 3 * state[p3] == state[i]: p3 += 1\n            if 5 * state[p5] == state[i]: p5 += 1\n            if 7 * state[p7] == state[i]: p7 += 1\n        return state[-1]\n"
        }
    ]
},
"meChtZ":{
    "id": "lcp20",
    "name": "meChtZ",
    "pre": [
        {
            "text": "递归",
            "link": null,
            "color": "orange"
        },
        {
            "text": "回溯",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/backtrack.md",
            "color": "green"
        },
        {
            "text": "动态规划",
            "link": null,
            "color": "red"
        }
    ],
    "keyPoints": [
        {
            "text": "逆向思维",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/lcp20.meChtZ.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/lcp20.meChtZ.md",
    "code": [
        {
            "language": "py",
            "text": "\ndef dfs(pos):\n if pos === target: return 0\n if pos > target: return float('inf')\n ans = (target - pos) * inc\n for jump in jumps:\n      ans = min(ans, 乘坐本次公交的花费)\n  return ans\ndfs(0)\n"
        },
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def busRapidTransit(self, target: int, inc: int, dec: int, jumps: List[int], cost: List[int]) -> int:\n        @lru_cache(None)\n        def dfs(pos):\n            if pos == 0: return 0\n            if pos == 1: return inc\n            ans = pos * inc\n            for i, jump in enumerate(jumps):\n                pre_pos, left = pos // jump, pos % jump\n                if left == 0: ans = min(ans, cost[i] + dfs(pre_pos))\n                else: ans = min(ans, cost[i] + dfs(pre_pos) + inc * left, cost[i] + dfs(pre_pos + 1) + dec * (jump - left))\n            return ans\n        return dfs(target) % 1000000007\n\n"
        }
    ]
},
"Za25hA":{
    "id": "lcp21",
    "name": "Za25hA",
    "pre": [
        {
            "text": "BFS",
            "link": null,
            "color": "purple"
        },
        {
            "text": "DFS",
            "link": null,
            "color": "red"
        },
        {
            "text": "图论",
            "link": null,
            "color": "gold"
        }
    ],
    "keyPoints": [
        {
            "text": "明确这道题中有且仅有一个环",
            "link": null,
            "color": "blue"
        },
        {
            "text": "当且仅当环的长度大于3，A到环入口的距离大于B到环入口的距离+1才永远追不上",
            "link": null,
            "color": "blue"
        },
        {
            "text": "如何检测环，如果计算单点到图中所有点的距离",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/lcp21.Za25hA.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/lcp21.Za25hA.md",
    "code": [
        {
            "language": "py",
            "text": "\nclass Solution:\n    def chaseGame(self, edges: List[List[int]], startA: int, startB: int) -> int:\n        n = len(edges)\n        graph = collections.defaultdict(list)\n        for fr, to in edges:\n            graph[fr].append(to)\n            graph[to].append(fr)\n\n        def bfs(fr, find_entry=False):\n            dist = collections.defaultdict(lambda: float(\"inf\"))\n            q = collections.deque([fr])\n            steps = 0\n            nonlocal entry\n            while q:\n                for i in range(len(q)):\n                    cur = q.popleft()\n                    if cur in dist:\n                        continue\n                    if find_entry and cur in circle:\n                        entry = cur\n                        return\n                    dist[cur] = steps\n                    for neibor in graph[cur]:\n                        q.append(neibor)\n                steps += 1\n            return dist\n\n        parent = {}\n        depth = collections.defaultdict(int)  # 可以被用作 visited\n        circle = set()\n        entry = 0  # 环的入口\n\n        def cal_circle(node, p):\n            parent[node] = p\n            depth[node] = depth[p] + 1\n            for neibor in graph[node]:\n                if neibor == p:\n                    continue\n                if neibor not in depth:\n                    cal_circle(neibor, node)\n                elif depth[neibor] < depth[node]:\n                    # 检测到了环\n                    cur = node\n                    while cur != neibor:\n                        circle.add(cur)\n                        cur = parent[cur]\n                    circle.add(neibor)\n\n        cal_circle(1, 0)\n\n        d1, d2 = bfs(startA), bfs(startB)\n        bfs(startB, True)\n\n        if len(circle) > 3:\n            if d1[entry] > d2[entry] + 1:\n                return -1\n        if d1[startA] == 1:\n            return 1\n        ans = 1\n        for i in range(1, n + 1):\n            if d1[i] - d2[i] > 1:\n                ans = max(ans, d1[i])\n        return ans\n\n"
        }
    ]
},
"md":{
    "id": "max-black-square-lcci",
    "name": "md",
    "pre": [
        {
            "text": "动态规划",
            "link": "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md \"动态规划\"",
            "color": "red"
        }
    ],
    "keyPoints": [],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/max-black-square-lcci.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/max-black-square-lcci.md",
    "code": [
        {
            "language": "java",
            "text": "\nclass Solution {\n    public int[] findSquare(int[][] matrix) {\n        int [] res = new int [0];\n        int [][][] dp = new int [2][matrix.length+1][matrix[0].length+1];\n        int max = 0\n        for(int i=1;i<=matrix.length;i++){\n            for(int j=1;j<=matrix[0].length;j++){\n                if(matrix[i-1][j-1]==0){\n                    dp[0][i][j] = dp[0][i-1][j]+1;\n                    dp[1][i][j] = dp[1][i][j-1]+1;\n                    int bound = Math.min(dp[0][i][j], dp[1][i][j]);\n                    for(int k=0;k<bound;k++){\n                        if(dp[1][i-k][j]>=k+1&&dp[0][i][j-k]>=k+1){\n                            if(k+1>max){\n                                res = new int [3];\n                                max = k+1;\n                                res[0] = i-k-1;\n                                res[1] = j-k-1;\n                                res[2] = max;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n        return res;\n    }\n}\n"
        },
        {
            "language": "py",
            "text": "\nclass Solution:\n    def findSquare(self, matrix: List[List[int]]) -> List[int]:\n        n = len(matrix)\n        dp = [[[0, 0] for _ in range(n + 1)] for _ in range(n + 1)]\n        ans = []\n        for i in range(1, n + 1):\n            for j in range(1, n + 1):\n                if matrix[i - 1][j - 1] == 0:\n                    dp[i][j][0] = dp[i-1][j][0] + 1\n                    dp[i][j][1] = dp[i][j-1][1] + 1\n                    upper = min(dp[i][j][0], dp[i][j][1])\n                    for k in range(upper):\n                        if min(dp[i-k][j][1], dp[i][j-k][0]) >= k + 1:\n                            if not ans or k + 1 > ans[2]:\n                                ans = [i-k-1, j-k-1, k + 1]\n\n        return ans\n"
        }
    ]
},
"md":{
    "id": "sub-sort-lcci",
    "name": "md",
    "pre": [
        {
            "text": "无",
            "link": null,
            "color": "purple"
        }
    ],
    "keyPoints": [
        {
            "text": "两次遍历",
            "link": null,
            "color": "blue"
        }
    ],
    "companies": [],
    "giteeSolution": "https://gitee.com/golong/leetcode/blob/master/problems/sub-sort-lcci.md",
    "solution": "https://github.com/azl397985856/leetcode/blob/master/problems/sub-sort-lcci.md",
    "code": [
        {
            "language": "py",
            "text": "\n\nclass Solution:\n    def subSort(self, A: List[int]) -> List[int]:\n        max_v, min_v = float('-inf'), float('inf')\n        right = left = -1\n        for i in range(len(A)):\n            if A[i] < max_v:\n                right = i\n            max_v = max(max_v, A[i])\n        for i in range(len(A) - 1, -1, -1):\n            if A[i] > min_v:\n                left = i\n            min_v = min(min_v, A[i])\n        return [-1,-1] if right - left == len(A) - 1 else [left, right]\n\n\n"
        }
    ]
},

     }
   
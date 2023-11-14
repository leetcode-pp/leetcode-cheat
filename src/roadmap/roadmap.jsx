import React, { useState } from "react";
import { Radio, Image } from "antd";

import Codes from "../components/codes";
import TagOrLink from "../components/TagOrLink";
import { t } from "../locales"
const dpSingleCode = `
  dp = [0] * (n + 1)
  for i in range(1, n + 1):
    for j in range(i + 1, n + 1):
      if 一定条件:dp[j] = 选择(dp[i], dp[j])
      else: dp[i] = dp[i - 1]
`;
const dpDoubleCode = `
        dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if Certain conditions:
                  dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                  dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
`;

const dpRangeCode = `
class Solution:
    def solve(self, s):
        n = len(s)
        dp = [[0] * n for _ in range(n)]
        # Traverse in reverse order from the right boundary
        for i in range(n - 1, -1, -1):
            # Traverse in forward order from the left boundary
            for j in range(i + 1, n):
                # do something
        return  dp[0][m-1] # Typically, this interval is used as the answer.
`;
const dpRangeCodeRecur = `
class Solution:
    def solve(self, s):
        @lru_cache(None)
        def helper(l, r):
            if l >= r:
                return 0
            if s[l] == s[r]:
                return helper(l + 1, r - 1)
            return 1 + min(helper(l + 1, r), helper(l, r - 1))
        return helper(0, len(s) - 1)
`;

const roadmaps = {
  "binary-search": {
    desc: t("Locale.learningRoute.binarySearchDesc"),
    items: [
      {
        title: t("Locale.learningRoute.binarySearch_item1"),
        pic: void 0,
        problems: [
          {
            link: "https://leetcode-cn.com/problems/sqrtx",
            text: t("Locale.problem.69"),
          },
          {
            link: "https://leetcode-cn.com/problems/first-bad-version/",
            text: t("Locale.problem.278"),
            desc: t("Locale.problem.278_desc"),
          },
        ],
        code: {
          language: "py",
          text: t("Locale.learningRoute.binarySearch_item1_text"),
        },
        keys: [
          t("Locale.learningRoute.binarySearch_item1_keys"),
        ],
      },
      {
        title: t("Locale.learningRoute.binarySearch_item2"),
        pic: void 0,
        problems: [
          {
            link: "https://binarysearch.com/problems/Minimum-Light-Radius",
            text: t("Locale.problem.minimumLightRadius"),
            desc: t("Locale.problem.minimumLightRadius_desc"),
          },
          {
            link: "https://leetcode-cn.com/problems/swim-in-rising-water",
            text: t("Locale.problem.778"),
            desc: t("Locale.problem.778_desc"),
          },
        ],
        code: {
          language: "py",
          text: `
def ability_test_bs(nums):
  def possible(mid):
    pass
  l, r = 0, len(A) - 1
  while l <= r:
      mid = (l + r) // 2
      # The only difference is here and in the leftmost binary search.
      if possible(mid): l = mid + 1
      else: r = mid - 1
  return l
          `,
        },
        keys: [
      //     `定义函数 possible 参数是 mid，返回值是布尔值。外层根据返回值调整"解空间"。示例代码是以最左二分为例的。
          // `,
          t("Locale.learningRoute.binarySearch_item2_keys")
        ],
      },
      {
        title: t("Locale.learningRoute.binarySearch_item3"),
        pic: void 0,
        problems: [
          {
            link: "https://leetcode-cn.com/problems/count-of-range-sum/",
            text: t("Locale.problem.327"),
          },
        ],

        keys: [
      //     `
      // 如果数组是非负的，那么前缀和就是一个单调不递减数组，我们有时候可以基于它来做二分。
          // `,
          t("Locale.learningRoute.binarySearch_item3_keys"),
          
        ],
      },
      {
        title: t("Locale.learningRoute.binarySearch_item4"),
        pic: void 0,
        problems: [
          {
            link: "https://leetcode-cn.com/problems/reverse-pairs",
            text: t("Locale.problem.493"),
          },
          {
            link:
              "https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof",
            // text: "剑指 Offer 51. 数组中的逆序对",
            text:t("Locale.problem.JZ51")
          },
          {
            link: "https://lucifer.ren/blog/2020/06/20/LIS/",
            // text: "最长上升子序列系列",
            text: t("Locale.problem.longestIncreasingSubsequence"),
            desc: t("Locale.problem.longestIncreasingSubsequence_desc"),
          },
        ],
        code: {
          language: "py",
          text: `
  d = []
  for a in A:
      i = bisect.bisect_left(d, a)
      if d and i < len(d):
          d[i] = a
      else:
          d.append(a)`,
        },
        keys: [
      //     `
      // 不断插入并维护序列有序，进而利用有序做一些事情。
          // `,
          t("Locale.learningRoute.binarySearch_item4_keys")
        ],
      },
      {
        // title: "计数二分",
        title: t("Locale.learningRoute.binarySearch_item5"),
        pic: void 0,
        problems: [
          {
            link: "https://binarysearch.com/problems/Kth-Pair-Distance",
            // text: "第k小的距离对",
            text: t("Locale.problem.kthPairDistance"),
            desc:t("Locale.problem.kthPairDistance_desc"),
          },
        ],
        code: {
          language: "py",
          text: `
def count_bs(nums, k):
  def count_not_greater(mid):
    pass
  l, r = 0, len(A) - 1
  while l <= r:
      mid = (l + r) // 2
      # Only this is different from the leftmost binary
      if count_not_greater(mid) > k: r = mid - 1
      else: l = mid + 1
  return l
          `,
        },
        keys: [
      //     `本质也是能力检测，因此和能力检测框架基本一致，大家对比理解一下。
          // `,
          t("Locale.learningRoute.binarySearch_item5_keys")
        ],
      },
    ],
  },
  dp: {
    desc: t("Locale.learningRoute.dp_desc"),
    items: [
      {
        title: t("Locale.learningRoute.dp_item1"),
        pic:
          "https://p.ipic.vip/575fs3.jpg",
        problems: [
          {
            link: "https://leetcode-cn.com/problems/re-space-lcci/",
            // text: "面试题 17.13. 恢复空格",
            text: t("Locale.problem.interview17_13"),
            desc:
            // "细节怎么练？+1？ -1? 怎么初始化？大家可以通过这道题学习一下~",
            t("Locale.problem.interview17_13__desc")
          },
          {
            link: "https://lucifer.ren/blog/2020/06/20/LIS/",
            text: t("Locale.problem.longestIncreasingSubsequence")  ,
            desc: t("Locale.problem.longestIncreasingSubsequence_desc"),
          },
        ],
        code: {
          language: "py",
          text: dpSingleCode,
        },
        keys: [
//           `
// 状态：1. dp[i] 表示以 s[i] 结尾的 xxxx
//      2. dp[i] 表示到 s[i] 为止的 xxxx
          //         `,
          t("Locale.learningRoute.dp_item1_keys1"),
          // "枚举： 通常都是两层循环，一层循环固定左端点，另一层循环固定右端点进行枚举",
          t("Locale.learningRoute.dp_item1_keys2"),
          // "转移方程：根据题目选择是否和 s[j] 结合，取最大，最小或计数即可",
          t("Locale.learningRoute.dp_item1_keys3")
        ],
      },

      {
        title: t("Locale.learningRoute.dp_item2"),
        pic:
          "https://p.ipic.vip/f5uljj.jpg",
        problems: [
          {
            link: "https://lucifer.ren/blog/2020/07/01/LCS/",
            text: t("Locale.problem.longestIncreasingSubsequence")  ,
            desc: t("Locale.problem.longestIncreasingSubsequence_desc"),
          },
          {
            link: "https://leetcode-cn.com/problems/edit-distance/",
            text: t("Locale.problem.72"),
          },
          {
            link:
              "https://leetcode-cn.com/problems/regular-expression-matching/solution/chao-jian-dan-de-ji-yi-hua-di-gui-ji-bai-9010-zhen/",
            text: t("Locale.problem.10"),
          },
          {
            link:
              "https://leetcode-cn.com/problems/wildcard-matching/solution/chao-ji-xiang-xi-ji-yi-hua-di-gui-tu-jie-dai-ni-yi/",
            text: t("Locale.problem.44"),
          },
        ],
        code: {
          language: "py",
          text: dpDoubleCode,
        },
        keys: [
//           `
// 状态：1. dp[i][j] 表示以 s1[i],s2[j] 结尾的 xxxx
//      2. dp[i][j] 表示到 s1[i],s2[j] 为止的 xxxx
          //         `,
          t("Locale.learningRoute.dp_item2_keys1"),
          // "枚举：通常都是两层循环，一层循环固定 s1 的右端点，另一层循环固定 s2 的右端点进行枚举",
          t("Locale.learningRoute.dp_item2_keys2"),
          // "状态转移：根据题目以及 s[i]， s[j] 的关系，取最大，最小或计数即可",
          t("Locale.learningRoute.dp_item2_keys3")
        ],
      },
      {
        title: t("Locale.learningRoute.dp_item3"),
        pic:
          "https://p.ipic.vip/gr1c58.jpg",
        problems: [
          {
            text: t("Locale.problem.70"),
            link: "https://leetcode-cn.com/problems/climbing-stairs/",
          },
          {
            text: t("Locale.problem.198"),
            link:
              "https://github.com/azl397985856/leetcode/blob/master/problems/198.house-robber.md",
          },
          {
            text: t("Locale.problem.337"),
            link:
              "https://github.com/azl397985856/leetcode/blob/master/problems/337.house-robber-iii.md",
          },
          {
            text: t("Locale.problem.62"),
            link:
              "https://github.com/azl397985856/leetcode/blob/master/problems/62.unique-paths.md",
          },
          {
            text: t("Locale.problem.63"),
            link:
              "https://github.com/azl397985856/leetcode/blob/master/problems/63.unique-paths-ii.md",
          },
          {
            text: t("Locale.problem.64"),
            link: "https://leetcode-cn.com/problems/minimum-path-sum/",
          },
          {
            text: t("Locale.problem.174"),
            link: "https://leetcode-cn.com/problems/dungeon-game/",
          },
          {
            text: t("Locale.problem.576"),
            link: "https://leetcode-cn.com/problems/out-of-boundary-paths/",
          },
          {
            text: t("Locale.problem.935"),
            link:
              "https://github.com/azl397985856/leetcode/blob/master/problems/935.knight-dialer.md",
          },
          {
            text: t("Locale.problem.littleRabbitsChessboard"),
            link: "https://github.com/azl397985856/leetcode/issues/429",
          },
          {
            text: t("Locale.problem.shopeesOffice"),
            link:
              "https://www.nowcoder.com/questionTerminal/a71f3bd890734201986cd1e171807d30?commentTags=Python",
          },
        ],
        code: {
          language: "py",
          text: `
      # one-dimensional
      for i in range(2, n):
        cur, prev = max(prev + nums[i], cur), cur
      # two-dimensional.
      def uniquePaths(self, m: int, n: int) -> int:
          dp = [1] * n
          for _ in range(1, m):
              for j in range(1, n):
                  dp[j] += dp[j - 1]
        `,
        },
        keys: [
//           `
// 状态： 1. 一维通常是 dp[i] 表示以 nums[i] 结尾的 xxxx
//       2. 二维通常是 dp[i][j] 表示以 grid[i][j] 结尾的 xxxx
          //       `,
          t("Locale.learningRoute.dp_item3_keys1"),
          // "枚举：一维就是一层循环枚举所有的 nums，二维就是两层循环枚举所有的 grid",
          t("Locale.learningRoute.dp_item3_keys2"),
//           `
// 状态转移：1. 一维通常是当前格子和前面的两个格子的关系，可能是最大最小或计数。 
//         dp[i] = dp[i - 1] + dp[i - 2]，这也叫递推式，因为不涉及决策。
//         2. 二维通常是当前格子和上方以及左方的两个格子的关系，可能是最大最小或计数。
//         dp[i][j] = dp[i - 1][j] + dp[i][j-1]，这也叫递推式，因为不涉及决策。
//         3. 根转移方程不难看出， 这种题目通常都可以滚动数组优化
          //         `,
          t("Locale.learningRoute.dp_item3_keys3")
        ],
      },
      {
        title: t("Locale.learningRoute.dp_item4"),
        pic: "",
        problems: [
          {
            text: t("Locale.problem.416"),
            link:
              "https://github.com/azl397985856/leetcode/blob/master/problems/416.partition-equal-subset-sum.md",
          },
          {
            text: t("Locale.problem.322"),
            link:
              "https://github.com/azl397985856/leetcode/blob/master/problems/322.coin-change.md",
          },
          {
            text: t("Locale.problem.518"),
            link:
              "https://github.com/azl397985856/leetcode/blob/master/problems/518.coin-change-2.md",
          },
        ],
        code: void 0,
        keys: [],
      },
      {
        title: t("Locale.learningRoute.dp_item5"),
        pic: "",
        problems: [
          {
            text: t("Locale.problem.233"),
            link: "https://leetcode-cn.com/problems/number-of-digit-one/",
          },
          {
            text: t("Locale.problem.357"),
            link:
              "https://leetcode-cn.com/problems/count-numbers-with-unique-digits/",
          },
          {
            text: t("Locale.problem.902"),
            link:
              "https://leetcode-cn.com/problems/numbers-at-most-n-given-digit-set/",
          },
          {
            text: t("Locale.problem.1015"),
            link:
              "https://github.com/azl397985856/leetcode/blob/master/problems/1015.smallest-integer-divisible-by-k.md",
          },
          {
            text: t("Locale.problem.increasingDigits"),
            link: "https://binarysearch.com/problems/Increasing-Digits",
          },
        ],
        code: void 0,
        keys: [
          // "常见的 dp 定义为 dp[i][j] 其中 i 为数字的长度， j 为最后一位的数。比如 dp[3][2] 表示这个数一共三位，最后一位是 2 的情况",
          t("Locale.learningRoute.dp_item5_keys1")
        ],
      },
      {
        title: t("Locale.learningRoute.dp_item6"),
        pic: "",
        problems: [
          {
            text: t("Locale.problem.808"),
            link: "https://leetcode-cn.com/problems/soup-servings/",
          },
          {
            text: t("Locale.problem.837"),
            link: "https://leetcode-cn.com/problems/new-21-game/",
          },
        ],
        code: void 0,
        keys: [],
      },
      {
        title: t("Locale.learningRoute.dp_item7"),
        pic: "",
        problems: [
          {
            text: t("Locale.problem.292"),
            link: "https://leetcode-cn.com/problems/nim-game/",
          },
          {
            text: t("Locale.problem.877"),
            link:
              "https://github.com/azl397985856/leetcode/blob/master/problems/877.stone-game.md",
          },
          {
            text: t("Locale.problem.1140"),
            link: "https://leetcode-cn.com/problems/stone-game-ii/",
          },
          {
            text: t("Locale.problem.1406"),
            link: "https://leetcode-cn.com/problems/stone-game-iii/",
          },
          {
            text: t("Locale.problem.1510"),
            link: "https://leetcode-cn.com/problems/stone-game-iv/",
          },
          {
            text: t("Locale.problem.1563"),
            link: "https://leetcode-cn.com/problems/stone-game-v/",
          },
          {
            text: t("Locale.problem.1686"),
            desc: t("Locale.problem.1686_desc"),
            link: "https://leetcode-cn.com/problems/stone-game-vi/",
          },
          {
            text: t("Locale.problem.1690"),
            link: "https://leetcode-cn.com/problems/stone-game-vii/",
          },
        ],
        code: void 0,
        keys: [],
      },
      {
        title: t("Locale.learningRoute.dp_item8"),
        // pic:
        //   "https://p.ipic.vip/575fs3.jpg",
        problems: [
          {
            link:
              "https://binarysearch.com/problems/Make-a-Palindrome-by-Inserting-Characters",
            text: t("Locale.problem.palindromicInsertions"),
            desc:
            // "区间 dp 需要从序列两头同时进行，而不是从序列的某一端到另一端",
            t("Locale.problem.palindromicInsertions_desc")
          },
        ],
        code: {
          language: "py",
          text: `
          
${dpRangeCode}
# ${
  // 使用记忆化可能会更好书写，比如上面的 dp 代码改成记忆化递归就是：
t("Locale.learningRoute.dp_item8_text_comment")}
${dpRangeCodeRecur}`,
        },
        keys: [
//           `
// 右边界倒序遍历，左边界正序遍历
          //         `,
          t("Locale.learningRoute.dp_item8_keys1"),
          // "通常都是返回 dp[0][n]，而不是其他常见的 dp[-1][-1]",
          t("Locale.learningRoute.dp_item8_keys2")
        ],
      },
      {
        title: t("Locale.learningRoute.dp_item9"),
        pic: "",
        problems: [
          {
            text: t("Locale.problem.464"),
            link: "https://leetcode-cn.com/problems/can-i-win/",
          },
          {
            text: t("Locale.problem.698"),
            link:
              "https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets/",
          },
          {
            text: t("Locale.problem.1681"),
            link: "https://leetcode-cn.com/problems/minimum-incompatibility/",
          },
        ],
        code: void 0,
        keys: [],
      },
    ],
  },
};

export default function RoadMap() {
  const [topic, setTopic] = useState("dp");
  return (
    <>
      <Radio.Group
        onChange={(e) => setTopic(e.target.value)}
        value={topic}
        buttonStyle="solid"
      >
        <Radio.Button value="dp">{t("Locale.learningRoute.dp")}</Radio.Button>
        <Radio.Button value="binary-search">{t("Locale.learningRoute.binarySearch")}</Radio.Button>
        <Radio.Button value="tree" disabled>
          {t("Locale.learningRoute.tree")}
        </Radio.Button>
        <Radio.Button value="linked-list" disabled>
          {t("Locale.learningRoute.linkedList")}
        </Radio.Button>
      </Radio.Group>
      <div>
        <pre>{roadmaps[topic].desc}</pre>
        {roadmaps[topic].items.map((item) => {
          return (
            <div key={item.title}>
              <h1>{item.title}</h1>
              <div>
                {item.keys.map((key) => (
                  <pre key={key}>{key}</pre>
                ))}
              </div>
              {item.pic && (
                <>
                  <Image src={item.pic} width={400} height={200} />
                  ({t("Locale.learningRoute.clickToEnlarge")})
                </>
              )}
              {item.code && <Codes codes={[item.code]}></Codes>}
              { t("Locale.learningRoute.recommendedProblems")}：
              <ul>
                {item.problems.map(({ link, text, desc }) => {
                  return (
                    <li key={text}>
                      <TagOrLink link={link} text={text} />
                      {desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

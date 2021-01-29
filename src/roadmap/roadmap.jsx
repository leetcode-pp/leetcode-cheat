import React from "react";
import { Radio, Image } from "antd";

import Codes from "../components/codes";
import TagOrLink from "../components/TagOrLink";

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
                if 一定条件:
                  dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                  dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
`;
const items = [
  {
    title: "单字符串型",
    pic: "https://tva1.sinaimg.cn/large/0081Kckwly1glpjptuor0j31n00u0q8y.jpg",
    problems: [
      {
        link: "https://leetcode-cn.com/problems/re-space-lcci/",
        text: "面试题 17.13. 恢复空格",
        desc: "细节怎么练？+1？ -1? 怎么初始化？大家可以通过这道题学习一下~",
      },
      {
        link: "https://lucifer.ren/blog/2020/06/20/LIS/",
        text: "最长上升子序列系列",
        desc: "系列经典题目，值得一做",
      },
    ],
    code: {
      language: "py",
      text: dpSingleCode,
    },
    keys: [
      `
      1. dp[i] 表示以 s[i] 结尾的 xxxx
      2. dp[i] 表示到 s[i] 为止的 xxxx
      `,
      "通常都是两层循环，一层循环固定左端点，另一层循环固定右端点进行枚举",
      "根据题目选择是否和 s[j] 结合，取最大，最小或计数即可",
    ],
  },

  {
    title: "双字符串型",
    pic: "https://tva1.sinaimg.cn/large/0081Kckwly1glpnd8ne27j31970u0gss.jpg",
    problems: [
      {
        link: "https://lucifer.ren/blog/2020/07/01/LCS/",
        text: "最长公共子序列系列",
        desc: "系列经典题目，值得一做",
      },
      {
        link: "https://leetcode-cn.com/problems/edit-distance/",
        text: "72. 编辑距离",
      },
      {
        link:
          "https://leetcode-cn.com/problems/regular-expression-matching/solution/chao-jian-dan-de-ji-yi-hua-di-gui-ji-bai-9010-zhen/",
        text: "10. 正则表达式匹配",
      },
      {
        link:
          "https://leetcode-cn.com/problems/wildcard-matching/solution/chao-ji-xiang-xi-ji-yi-hua-di-gui-tu-jie-dai-ni-yi/",
        text: "44. 通配符匹配",
      },
    ],
    code: {
      language: "py",
      text: dpDoubleCode,
    },
    keys: [
      `
      1. dp[i][j] 表示以 s1[i],s2[j] 结尾的 xxxx
      2. dp[i][j] 表示到 s1[i],s2[j] 为止的 xxxx
      `,
      "通常都是两层循环，一层循环固定 s1 的右端点，另一层循环固定 s2 的右端点进行枚举",
      "根据题目以及 s[i]， s[j] 的关系，取最大，最小或计数即可",
    ],
  },
  {
    title: "爬楼梯型",
    pic: "https://tva1.sinaimg.cn/large/0081Kckwly1glpom6u30yj30u00v1n61.jpg",
    problems: [
      {
        text: "70. 爬楼梯",
        link: "https://leetcode-cn.com/problems/climbing-stairs/",
      },
      {
        text: "198. 打家劫舍",
        link:
          "https://github.com/azl397985856/leetcode/blob/master/problems/198.house-robber.md",
      },
      {
        text: "337. 打家劫舍 III",
        link:
          "https://github.com/azl397985856/leetcode/blob/master/problems/337.house-robber-iii.md",
      },
      {
        text: "62. 不同路径",
        link:
          "https://github.com/azl397985856/leetcode/blob/master/problems/62.unique-paths.md",
      },
      {
        text: "63. 不同路径 II",
        link:
          "https://github.com/azl397985856/leetcode/blob/master/problems/63.unique-paths-ii.md",
      },
      {
        text: "64. 最小路径和",
        link: "https://leetcode-cn.com/problems/minimum-path-sum/",
      },
      {
        text: "174. 地下城游戏",
        link: "https://leetcode-cn.com/problems/dungeon-game/",
      },
      {
        text: "576. 出界的路径数(只能选两个方向变成了只能选四个方向而已)",
        link: "https://leetcode-cn.com/problems/out-of-boundary-paths/",
      },
      {
        text: "935. 骑士拨号器(只能选两个方向变成了只能选八个方向而已)",
        link:
          "https://github.com/azl397985856/leetcode/blob/master/problems/935.knight-dialer.md",
      },
      {
        text: "小兔的棋盘",
        link: "https://github.com/azl397985856/leetcode/issues/429",
      },
      {
        text: "Shopee的办公室",
        link:
          "https://www.nowcoder.com/questionTerminal/a71f3bd890734201986cd1e171807d30?commentTags=Python",
      },
    ],
    code: {
      language: "py",
      text: `
    # 一维
    for i in range(2, n):
      cur, prev = max(prev + nums[i], cur), cur
    # 二维
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [1] * n
        for _ in range(1, m):
            for j in range(1, n):
                dp[j] += dp[j - 1]
      `,
    },
    keys: [
      `
    1. 一维通常是 dp[i] 表示以 nums[i] 结尾的 xxxx
    2. 二维通常是 dp[i][j] 表示以 grid[i][j] 结尾的 xxxx
    `,
      "一维就是一层循环枚举所有的 nums，二维就是两层循环枚举所有的 grid",
      `
      1. 一维通常是当前格子和前面的两个格子的关系，可能是最大最小或计数。 
      dp[i] = dp[i - 1] + dp[i - 2]，这也叫递推式，因为不涉及决策。
      2. 二维通常是当前格子和上方以及左方的两个格子的关系，可能是最大最小或计数。
      dp[i][j] = dp[i - 1][j] + dp[i][j-1]，这也叫递推式，因为不涉及决策。
      3. 根转移方程不难看出， 这种题目通常都可以滚动数组优化
      `,
    ],
  },
  {
    title: "背包型（仅列举题目）",
    pic: "",
    problems: [
      {
        text: "416. 分割等和子集",
        link:
          "https://github.com/azl397985856/leetcode/blob/master/problems/416.partition-equal-subset-sum.md",
      },
      {
        text: "322. 零钱兑换",
        link:
          "https://github.com/azl397985856/leetcode/blob/master/problems/322.coin-change.md",
      },
      {
        text: "518. 零钱兑换 II",
        link:
          "https://github.com/azl397985856/leetcode/blob/master/problems/518.coin-change-2.md",
      },
    ],
    code: void 0,
    keys: [],
  },
  {
    title: "数位型（仅列举题目）",
    pic: "",
    problems: [
      {
        text: "233. 数字 1 的个数",
        link: "https://leetcode-cn.com/problems/number-of-digit-one/",
      },
      {
        text: "357. 计算各个位数不同的数字个数",
        link:
          "https://leetcode-cn.com/problems/count-numbers-with-unique-digits/",
      },
      {
        text: "902. 最大为 N 的数字组合",
        link:
          "https://leetcode-cn.com/problems/numbers-at-most-n-given-digit-set/",
      },
      {
        text: "1015. 可被 K 整除的最小整数",
        link:
          "https://github.com/azl397985856/leetcode/blob/master/problems/1015.smallest-integer-divisible-by-k.md",
      },
    ],
    code: void 0,
    keys: [],
  },
  {
    title: "概率型（仅列举题目）",
    pic: "",
    problems: [
      {
        text: "808. 分汤",
        link: "https://leetcode-cn.com/problems/soup-servings/",
      },
      {
        text: "837. 新21点",
        link: "https://leetcode-cn.com/problems/new-21-game/",
      },
    ],
    code: void 0,
    keys: [],
  },
  {
    title: "博弈型（仅列举题目）",
    pic: "",
    problems: [
      {
        text: "292. Nim 游戏",
        link: "https://leetcode-cn.com/problems/nim-game/",
      },
      {
        text: "877. 石子游戏",
        link:
          "https://github.com/azl397985856/leetcode/blob/master/problems/877.stone-game.md",
      },
      {
        text: "1140. 石子游戏 II",
        link: "https://leetcode-cn.com/problems/stone-game-ii/",
      },
      {
        text: "1406. 石子游戏 III",
        link: "https://leetcode-cn.com/problems/stone-game-iii/",
      },
      {
        text: "1510. 石子游戏 IV",
        link: "https://leetcode-cn.com/problems/stone-game-iv/",
      },
      {
        text: "1563. 石子游戏 V",
        link: "https://leetcode-cn.com/problems/stone-game-v/",
      },
      {
        text: "1686. 石子游戏 VI",
        desc: "除了这个，其他《石子游戏》思路基本都一样",
        link: "https://leetcode-cn.com/problems/stone-game-vi/",
      },
      {
        text: "1690. 石子游戏 VII",
        link: "https://leetcode-cn.com/problems/stone-game-vii/",
      },
    ],
    code: void 0,
    keys: [],
  },
  {
    title: "状态压缩型（仅列举题目）",
    pic: "",
    problems: [
      {
        text: "464. 我能赢吗",
        link: "https://leetcode-cn.com/problems/can-i-win/",
      },
      {
        text: "698. 划分为k个相等的子集",
        link:
          "https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets/",
      },
      {
        text: "1681. 最小不兼容性",
        link: "https://leetcode-cn.com/problems/minimum-incompatibility/",
      },
    ],
    code: void 0,
    keys: [],
  },
];

const desc = `
同一类型的不同题目框架基本一致，但细节略有不同，模板代码仅以某一种为例进行讲述，大家根据实际情况微调。

动态规划三把斧：状态，枚举，转移方程（选择）。对于每一种题目，我都尽量按照这三点给大家提示。

当然这个学习路线是给有一些基础的人看的，如果你还没有基础，可以看下相关文章，之后我也会写一篇硬核套路文。
`;

export default function RoadMap({ problemId }) {
  return (
    <>
      <Radio.Group defaultValue="dp" buttonStyle="solid">
        <Radio.Button value="dp">动态规划</Radio.Button>
        <Radio.Button value="tree" disabled>
          树
        </Radio.Button>
        <Radio.Button value="linked-list" disabled>
          链表
        </Radio.Button>
        <Radio.Button value="binary-search" disabled>
          二分
        </Radio.Button>
      </Radio.Group>
      <div>
        <pre>{desc}</pre>
        {items.map((item) => {
          return (
            <div key={item.title}>
              <h1>{item.title}</h1>
              <div>
                <pre>状态：{item.keys[0] || "暂无"}</pre>
                <pre>枚举：{item.keys[1] || "暂无"}</pre>
                <pre>状态转移：{item.keys[2] || "暂无"}</pre>
              </div>
              {item.pic && (
                <>
                  <Image src={item.pic} width={400} height={200} />
                  (单击可放大)
                </>
              )}
              {item.code && <Codes codes={[item.code]}></Codes>}
              推荐题目：
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

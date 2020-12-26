module.exports = {
  logo: require("../imgs/backtrack.svg"),
  title: "回溯",
  list: [
    {
      text: "标准回溯（伪代码）",
      problems: [
        {
          id: "combination-sum",
          title: "39. 组合总和",
        },
        {
          title: "40. 组合总和 II",
          id: "combination-sum-ii",
        },
        {
          title: "46. 全排列",
          id: "permutations",
        },
        {
          title: "47. 全排列 II",
          id: "permutations-ii",
        },
        {
          id: "N-Queens-II",
          title: "52. N 皇后 II",
        },
        {
          id: "subsets",
          title: "78. 子集",
        },
        {
          id: "subsets-ii",
          title: "90. 子集 II",
        },
        {
          id: "path-sum-ii",
          title: "113. 路径总和 II",
        },
        {
          id: "palindrome-partitioning",
          title: "131. 分割回文串",
        },
        {
          id: "maximum-score-words-formed-by-letters",
          title: "1255. 得分最高的单词集合",
        },
      ],
      codes: [
        {
          language: "js",
          text: `
          const visited = {}
          function backtrack(i) {
              if (满足特定条件）{
                  // 返回结果 or 退出搜索空间
              }
          
              visited[i] = true // 将当前状态标为已搜索
              dosomething(i) // 对i做一些操作
              for (根据i能到达的下个状态j) {
                  if (!visited[j]) { // 如果状态j没有被搜索过
                      dfs(j)
                  }
              }
              undo(i) // 恢复i
          }
          backtrack(0)
          `,
        },
      ],
    },
    {
      text: "笛卡尔积优化",
      problems: [
        {
          id: "word-break-ii",
          title: "140. 单词拆分 II",
        },
        {
          id: "ambiguous-coordinates",
          title: "816. 模糊坐标",
        },
      ],
      codes: [
        {
          language: "py",
          text: `
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        n = len(s)
        @lru_cache(None)
        def backtrack(start):
            ans = []
            if start == n:
                ans.append('')
            for i in range(start, n):
                if s[start:i + 1] in wordDict:
                    if start == 0: temp = s[start:i + 1]
                    else: temp = " " + s[start:i + 1]
                    ps = backtrack(i + 1)
                    for p in ps:
                        ans.append(temp + p)
            return ans
        return backtrack(0)`,
        },
      ],
    },
  ],
  link:
    "https://github.com/azl397985856/leetcode/blob/master/thinkings/backtrack.md",
};

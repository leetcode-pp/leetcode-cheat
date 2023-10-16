const pyCode = `
MAXN = int(1e5)
flag = [True] * (MAXN + 10) # if flag[i] is true, then i is prime
flag[0], flag[1] = False, False
for i in range(2, int(MAXN ** 0.5) + 1):
    if flag[i]:
        for j in range(i * 2, MAXN + 1, i):
            flag[j] = False
`

module.exports = {
    title: "求质数",
    // logo: require("../imgs/preSum.svg"),
    list: [
      {
        text: "质数筛选法",
        problems: [
          {
            title: "2867. 统计树中的合法路径数目",
            id: "count-valid-paths-in-a-tree",
          },
        ],
        codes: [
          {
            language: "py",
            text: pyCode,
          },
        ],
      },
    ]
  };
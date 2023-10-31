// import { t } from "../locales";
const { t } = require("../locales");
const pre1dJSCode = `
  // 建立
  const pre = [0]
  for(const num of nums) {
      pre.push(pre[pre.length-1] + num)
  }
  // 使用，等价于 nums[i] + nums[i + 1] + ... + nums[j]
  pre[j+1] - pre[i]
`;

const pre1dPythonCode = `
  # 建立
  pre = []
  for num in nums:
      pre.append(pre[-1] + num)
  #  使用，等价于 nums[i] + nums[i + 1] + ... + nums[j]
  pre[j+1] - pre[i] 
`;

const pre2dPythonCode = `
  m,n = len(matrix), len(matrix[0])
  # 建立
  pre = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
  for i in range(1, m+1):
      for j in range(1, n +1):
          pre[i][j] = pre[i-1][j]+ pre[i][j-1] - pre[i-1][j-1] + matrix[i-1][j-1]

  # 使用，等价于以(x1,y1)为矩阵左上角以(x2,y2)为矩阵右下角的所有格子的和
  pre[x2+1][y2+1] + pre[x1][y1] - pre[x1][y2+1] - pre[x2+1][y1]
`;

const diff1dPythonCode = `
        # 差分数组一般是对一个数组的若干区间进行若干次加减操作，求最终更新后的数组。
        d = [0] * n # 差分数组
        ans = [0] * n # 经过若干次操作后的最终数组
        for start, end, inc in updates: # updates 就是一系列操作，start 是开始坐标，end 是结束坐标，inc 是增加的值（可为负数）。
            d[start] += seats
            if end+1 < n: d[end+1] -= inc
        return list(accumulate(d))
`;

const diff2dPythonCode = `
        matrix = [[0] * n for _ in range(n)] # 经过若干次操作后的最终数组
        diff = [[0] * (n+1) for _ in range(n+1)] # 差分数组
        for r1, c1, r2, c2, inc in updates: # updates r1,c1 是左上角坐标，r2, c2 是右下角坐标，inc 是增加的值（可为负数）。
            diff[r1][c1] += inc
            diff[r1][c2+1] -= inc
            diff[r2+1][c1] -= inc
            diff[r2+1][c2+1] += inc # 别忘记了，由于我们在两个地方对减去 1， 因此在右下角会多减去一个，加上去即可。
        for i in range(n):
            for j in range(n):
                matrix[i][j] = diff[i][j]
        
        for i in range(1,n):
            for j in range(n):
                matrix[i][j] += matrix[i-1][j]
        
        for i in range(n):
            for j in range(1,n):
                matrix[i][j] += matrix[i][j-1]
        
        return matrix

`;

module.exports = () => ({
  title: t("Locale.codeTemplate.perSum.title"),
  logo: require("../imgs/preSum.svg"),
  list: [
    {
      text: t("Locale.codeTemplate.perSum.item1"),
      problems: [
        {
          title: t("Locale.problem.1480"),
          id: "running-sum-of-1d-array",
        },
      ],
      codes: [
        {
          language: "js",
          text: pre1dJSCode,
        },
        {
          language: "py",
          text: pre1dPythonCode,
        },
      ],
    },
    {
      text: t("Locale.codeTemplate.perSum.item2"),
      problems: [
        {
          title: t("Locale.problem.1314"),
          id: "matrix-block-sum",
        },
      ],
      codes: [
        {
          language: "py",
          text: pre2dPythonCode,
        },
      ],
    },
    {
      text: t("Locale.codeTemplate.perSum.item3"),
      problems: [
        {
          title: t("Locale.problem.1109"),
          id: "corporate-flight-bookings",
        },
      ],
      codes: [
        {
          language: "py",
          text: diff1dPythonCode,
        },
      ],
    },
    {
      text: t("Locale.codeTemplate.perSum.item4"),
      problems: [
        {
          title: t("Locale.problem.2536"),
          id: "increment-submatrices-by-one",
        },
      ],
      codes: [
        {
          language: "py",
          text: diff2dPythonCode,
        },
      ],
    },
  ],
  link: "https://lucifer.ren/blog/2020/09/27/atMostK/",
});

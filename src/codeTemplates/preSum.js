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
        pre[i][j] = pre[i-1][j]+ pre[i][j-1] - dp[i-1][j-1] + matrix[i][j]

# 使用，等价于以(x1,y1)为矩阵左上角以(x2,y2)为矩阵右下角的所有格子的和
pre[x2][y2] + pre[x1-1][y1-1] - pre[x1-1][y2] - pre[x2][y2-1]
`;

module.exports = {
  title: "前缀和",
  list: [
    {
      text: "一维前缀和",
      problems: [],
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
      text: "二维前缀和",
      problems: [],
      codes: [
        {
          language: "py",
          text: pre2dPythonCode,
        },
      ],
    },
  ],
  link: "",
};

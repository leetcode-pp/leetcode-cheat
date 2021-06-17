module.exports = {
  title: "矩阵旋转",
  logo: require("../imgs/rotate.svg"),
  list: [
    {
      text: "顺时针 90° 旋转二维矩阵",
      problems: [
        {
          id: "determine-whether-matrix-can-be-obtained-by-rotation",
          title: "1886.判断矩阵经轮转后是否一致",
        },
      ],
      codes: [
        {
          language: "cpp",
          text: `
vector<vector<int>> rotate(vector<vector<int>> &mat) {
  int m = mat.size();
  int n = mat[0].size()
  vector<vector<int>> ans(n, vector<int>(m));
  for (int i = 0; i < m; ++i)
      for (int j = 0; j < n; ++j)
          ans[j][m - 1 - i] = mat[i][j];
  return ans;
}         
`,
        },
        {
          language: "py",
          text: `
def rotate(mat):
  m, n = len(mat), len(mat[0])
  ans = [[0] * m for _ in range(n)]
  for i in range(m):
      for j in range(n):
          ans[j][m - i - 1] = mat[i][j]
  return ans
          `,
        },
      ],
    },
  ],
  link: "",
};

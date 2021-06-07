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
  int n = mat.size();
  vector<vector<int>> ans(n, vector<int>(n));
  for (int i = 0; i < n; ++i)
      for (int j = 0; j < n; ++j)
          ans[j][n - 1 - i] = mat[i][j];
  return ans;
}         
`,
        },
        {
          language: "py",
          text: `
def rotate(mat):
  n = len(mat)
  ans = [[0] * n for _ in range(n)]
  for i in range(n):
      for j in range(n):
          ans[j][n - i - 1] = mat[i][j]
  return ans
          `,
        },
      ],
    },
  ],
  link: "",
};

import ufLogo from "../imgs/uf.svg";

export default {
  title: "并查集",
  logo: ufLogo,
  list: [
    {
      text: "乞丐版",
      problems: [
        {
          title: "547. 朋友圈",
          id: "friend-circles",
        },
        {
          title: "721. 账户合并",
          id: "accounts-merge",
        },
        {
          title: "990. 等式方程的可满足性",
          id: "satisfiability-of-equality-equations",
        },
        {
          title: "1202. 交换字符串中的元素",
          id: "smallest-string-with-swaps",
        },
      ],
      codes: [
        {
          language: "py",
          text: `
class UF:
    parent = {}
    cnt = 0
    def __init__(self, M):
        # 初始化 parent，size 和 cnt
        for i in range(M):
            self.parent[i] = i
            self.cnt += 1

    def find(self, x):
        while x != self.parent[x]:
            x = self.parent[x]
        return x
    def union(self, p, q):
        if self.connected(p, q): return
        self.parent[self.find(p)] = self.find(q)
        self.cnt -= 1
    def connected(self, p, q):
        return self.find(p) == self.find(q)
            `,
        },
      ],
    },
    {
      text: "带路径压缩（递归）",
      problems: [
        {
          title: "547. 朋友圈",
          id: "friend-circles",
        },
        {
          title: "721. 账户合并",
          id: "accounts-merge",
        },
        {
          title: "990. 等式方程的可满足性",
          id: "satisfiability-of-equality-equations",
        },
        {
          title: "1202. 交换字符串中的元素",
          id: "smallest-string-with-swaps",
        },
      ],
      codes: [
        {
          language: "py",
          text: `
class UF:
    parent = {}
    size = {}
    cnt = 0
    def __init__(self, M):
        # 初始化 parent，size 和 cnt
        for i in range(M):
            self.parent[i] = i
            self.size[i] = 1
            self.cnt += 1
    def find(self, x):
      while x != self.parent[x]:
          # 路径压缩
          self.parent[x] = self.parent[self.parent[x]];
          x = self.parent[x]
      return x
    def union(self, p, q):
        if self.connected(p, q): return
        self.parent[self.find(p)] = self.find(q)
    def connected(self, p, q):
        return self.find(p) == self.find(q)`,
        },
      ],
    },
  ],
  link:
    "https://github.com/azl397985856/leetcode/blob/master/thinkings/union-find.md",
};

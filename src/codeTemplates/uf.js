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
        # 初始化 parent 和 cnt

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
      text: "带路径压缩（迭代）",
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

    def find(self, x):
        while x != self.parent[x]:
            x = self.parent[x]
            # 路径压缩
            self.parent[x] = self.parent[self.parent[x]];
        return x
    def union(self, p, q):
        if self.connected(p, q): return
        # 小的树挂到大的树上， 使树尽量平衡
        leader_p = self.find(p)
        leader_q = self.find(q)
        if self.size[leader_p] < self.size[leader_q]:
            self.parent[leader_p] = leader_q
            self.size[leader_p] += self.size[leader_q]
        else:
            self.parent[leader_q] = leader_p
            self.size[leader_q] += self.size[leader_p]
        self.cnt -= 1
    def connected(self, p, q):
        return self.find(p) == self.find(q)`,
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
    def __init__(self, equations):
        # 做一些初始化操作

    def find(self, x):
        # 根节点
        r = x
        while r != parent[r]:
            r = parent[r]
        k = x
        while k != r:
            # 暂存parent[k]的父节点
            j = parent[k]
            parent[k] = r
            k = j
        return r
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

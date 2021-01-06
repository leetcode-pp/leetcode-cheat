import ufLogo from "../imgs/uf.svg";

export default {
  title: "并查集",
  logo: ufLogo,
  list: [
    {
      text: "不带权并查集",
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
            def __init__(self, M):
                self.parent = {}
                self.cnt = 0
                # 初始化 parent，size 和 cnt
                for i in range(M):
                    self.parent[i] = i
                    self.cnt += 1
        
            def find(self, x):
                if x != self.parent[x]:
                    self.parent[x] = self.find(self.parent[x])
                    return self.parent[x]
                return x
            def union(self, p, q):
                if self.connected(p, q): return
                leader_p = self.find(p)
                leader_q = self.find(q)
                self.parent[leader_p] = leader_q
                self.cnt -= 1
            def connected(self, p, q):
                return self.find(p) == self.find(q)
        `,
        },
      ],
    },
    {
      text: "带权并查集",
      problems: [
        {
          title: "399. 除法求值",
          id: "evaluate-division",
        },
      ],
      codes: [
        {
          language: "py",
          text: `
        class UF:
          def __init__(self, M):
              # 初始化 parent，weight
              self.parent = {}
              self.weight = {}
              for i in range(M):
                  self.parent[i] = i
                  self.weight[i] = 0
      
          def find(self, x):
              if self.parent[x] != x:
                  ancestor, w = self.find(self.parent[x])
                  self.parent[x] = ancestor
                  self.weight[x] += w
              return self.parent[x], self.weight[x]
          def union(self, p, q, dist):
              if self.connected(p, q): return
              leader_p, w_p = self.find(p)
              leader_q, w_q = self.find(q)
              self.parent[leader_p] = leader_q
              self.weight[leader_p] = dist + w_q - w_p
          def connected(self, p, q):
              return self.find(p)[0] == self.find(q)[0]
        `,
        },
      ],
    },
  ],
  link:
    "https://github.com/azl397985856/leetcode/blob/master/thinkings/union-find.md",
};

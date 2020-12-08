import bfsLogo from "../imgs/bfs.svg";

export default {
  title: "BFS",
  logo: bfsLogo,
  list: [
    {
      text: "带层信息",
      problems: [
        {
          title: "513.找树左下角的值",
          id: "find-bottom-left-tree-value",
        },
        {
          title: "662. 二叉树最大宽度",
          id: "maximum-width-of-binary-tree",
        },
        {
          title: "863. 二叉树中所有距离为 K 的结点",
          id: "all-nodes-distance-k-in-binary-tree",
        },
      ],
      codes: [
        {
          language: "py",
          text: `
        class Solution:
          def bfs(k):
              # 使用双端队列，而不是数组。因为数组从头部删除元素的时间复杂度为 N，双端队列的底层实现其实是链表。
              queue = collections.deque([root])
              # 记录层数
              steps = 0
              # 需要返回的节点
              ans = []
              # 队列不空，生命不止！
              while queue:
                  size = len(queue)
                  # 遍历当前层的所有节点
                  for _ in range(size):
                      node = queue.popleft()
                      if (step == k) ans.append(node)
                      if node.right:
                          queue.append(node.right)
                      if node.left:
                          queue.append(node.left)
                  # 遍历完当前层所有的节点后 steps + 1
                  steps += 1
              return ans
              `,
        },
      ],
    },
    {
      text: "不带层信息",
      problems: [
        {
          title: "116. 填充每个节点的下一个右侧节点指针",
          id: "populating-next-right-pointers-in-each-node",
        },
      ],
      codes: [
        {
          language: "py",
          text: `
        class Solution:
          def bfs(k):
              # 使用双端队列，而不是数组。因为数组从头部删除元素的时间复杂度为 N，双端队列的底层实现其实是链表。
              queue = collections.deque([root])
              # 队列不空，生命不止！
              while queue:
                  node = queue.popleft()
                  # 由于没有记录 steps，因此我们肯定是不需要根据层的信息去判断的。否则就用带层的模板了。
                  if (node 是我们要找到的) return node
                  if node.right:
                      queue.append(node.right)
                  if node.left:
                      queue.append(node.left)
              return -1
          `,
        },
      ],
    },
  ],
  link:
    "https://github.com/azl397985856/leetcode/blob/master/thinkings/tree.md",
};

import bfsLogo from "../imgs/bfs.svg";
const { t } = require("../locales");

export default () => ({
  title: "BFS",
  logo: bfsLogo,
  list: [
    {
      // text: "带层信息",
      text: t("Locale.codeTemplate.BFS.item1"),
      problems: [
        {
          // title: "513.找树左下角的值",
          title: t("Locale.problem.513"),
          id: "find-bottom-left-tree-value",
        },
        {
          // title: "662. 二叉树最大宽度",
          title: t("Locale.problem.662"),
          id: "maximum-width-of-binary-tree",
        },
        {
          // title: "863. 二叉树中所有距离为 K 的结点",
          title: t("Locale.problem.863"),
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
              # Utilize a double-ended queue instead of an array, as the time complexity for removing elements from the head of an array is O(N), whereas a double-ended queue, implemented as a linked list, offers a more efficient alternative.
              queue = collections.deque([root])
              # 记录层数
              # Record the level or depth.
              steps = 0
              # 需要返回的节点
              # The nodes to return.
              ans = []
              # 队列不空，生命不止！
              # While the queue is not empty, we continue.
              while queue:
                  size = len(queue)
                  # 遍历当前层的所有节点
                  # Traverse all the nodes in the current level.
                  for _ in range(size):
                      node = queue.popleft()
                      if (steps == k) ans.append(node)
                      if node.right:
                          queue.append(node.right)
                      if node.left:
                          queue.append(node.left)
                  # 遍历完当前层所有的节点后 steps + 1
                  # After traversing all the nodes in the current level, steps + 1.
                  steps += 1
              return ans
              `,
        },
      ],
    },
    {
      // text: "不带层信息",
      text: t("Locale.codeTemplate.BFS.item2"),
      problems: [
        {
          // title: "116. 填充每个节点的下一个右侧节点指针",
          title: t("Locale.problem.116"),
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
              # Utilize a double-ended queue instead of an array, as the time complexity for removing elements from the head of an array is O(N), whereas a double-ended queue, implemented as a linked list, offers a more efficient alternative.
              queue = collections.deque([root])
              # 队列不空，生命不止！
              # While the queue is not empty, we continue.
              while queue:
                  node = queue.popleft()
                  # 由于没有记录 steps，因此我们肯定是不需要根据层的信息去判断的。否则就用带层的模板了。
                  # Since we don't record steps, we don't need to judge based on the level information. Otherwise, we would use the template with level information.
                  if (node is what we are looking for) return node
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
  link: "https://github.com/azl397985856/leetcode/blob/master/thinkings/tree.md",
});

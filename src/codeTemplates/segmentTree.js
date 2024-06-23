import segmentLogo from "../imgs/segment.svg";
import { t } from "../locales";

const binaryIndexTreePyCode = `
class BinaryIndexTree:
    __slots__ = 'nums', 'tree'

    def __init__(self, nums: List[int]):
        n = len(nums)
        self.nums = [0] * n
        self.tree = [0] * (n + 1) # n + 1 只是方便计算前缀和，前面加了一个 0，所以总长度就是 n + 1
        for i, x in enumerate(nums):
            self.update(i, x)

    def update(self, index: int, val: int) -> None:
        delta = val - self.nums[index]
        self.nums[index] = val
        i = index + 1 # + 1 的原因同上，也是前面多加了一个 0，导致所有索引都偏移了一位
        while i < len(self.tree):
            self.tree[i] += delta
            i += i & -i

    def prefixSum(self, i: int) -> int:
        s = 0
        while i:
            s += self.tree[i]
            i -= i & -i
        return s
    def querySum(self, l: int, r: int) -> int:
        if r < l: return 0
        return self.prefixSum(r+1) - self.prefixSum(l)
`;
const segmentTreePyCode = `
class SegmentTree:
    def __init__(self, data:List[int]): 
        '''
        data:传入的数组

        --- en ---
        data: the array to be passed in
        '''
        self.data = data
        self.n = len(data)
        #  申请4倍data长度的空间来存线段树节点
        # Allocate 4 times the length of data to store the segment tree node
        # 索引i的左孩子索引为2i+1，右孩子为2i+2
        # The index of the left child of index i is 2i+1, and the right child is 2i+2
        self.tree = [None] * (4 * self.n) 
        if self.n:
            self.build(0, 0, self.n-1)
    # 本质就是一个自底向上的更新过程
    # 因此可以使用后序遍历，即在函数返回的时候更新父节点。
    # It is essentially a bottom-up renewal process
    # Therefore, post-order traversal can be used, that is, update the parent node when the function returns.
    def update(self, tree_index, l, r, index):
        '''
        tree_index:某个根节点索引
        l, r : 此根节点代表区间的左右边界
        index : 更新的值的索引

        --- en ---
        tree_index: the index of a root node
        l, r : the left and right boundaries of the interval represented by this root node
        index : the index of the value to be updated
        '''
        if l == r==index :
            self.tree[tree_index] = self.data[index]
            return
        mid = (l+r)//2
        left, right = 2 * tree_index + 1, 2 * tree_index + 2
        if index > mid:
            # 要更新的区间在右子树
            # The interval to be updated is in the right subtree
            self.update(right, mid+1, r, index)
        else:
            # 要更新的区间在左子树index<=mid
            # The interval to be updated is in the left subtree index<=mid
            self.update(left, l, mid, index)
        # 查询区间一部分在左子树一部分在右子树
        # 区间和使用加法即可，如果不是区间和要改下面这行代码
        # Part of the query interval is in the left subtree and part is in the right subtree
        # The interval sum can be used for addition, if it is not the interval sum, the following line of code needs to be changed
        self.tree[tree_index] = self.tree[left] + self.tree[right]
        
    def updateSum(self,index:int,value:int):
        self.data[index] = value
        self.update(0, 0, self.n-1, index)
    def query(self, tree_index:int, l:int, r:int, ql:int, qr:int) -> int:
        '''
        递归查询区间[ql,..,qr]的值
        tree_index : 某个根节点的索引
        l, r : 该节点表示的区间的左右边界
        ql, qr: 待查询区间的左右边界

        --- en ---
        Recursively query the value of the interval [ql,..,qr]
        tree_index : the index of a root node
        l, r : the left and right boundaries of the interval represented by this root node
        ql, qr: the left and right boundaries of the interval to be queried
        '''
        if l == ql and r == qr:
            return self.tree[tree_index]
    
        # 区间中点,对应左孩子区间结束,右孩子区间开头
        # Interval midpoint, corresponding to the end of the left child interval, the beginning of the right child interval
        mid = (l+r) // 2 
        left, right = tree_index * 2 + 1, tree_index * 2 + 2
        if qr <= mid:
            # 查询区间全在左子树
            # The query interval is all in the left subtree
            return self.query(left, l, mid, ql, qr)
        elif ql > mid:
            # 查询区间全在右子树
            # The query interval is all in the right subtree
            return self.query(right, mid+1, r, ql, qr)
    
        # 查询区间一部分在左子树一部分在右子树
        # 区间和使用加法即可，如果不是区间和要改下面这行代码
        # Part of the query interval is in the left subtree and part is in the right subtree
        # The interval sum can be used for addition, if it is not the interval sum, the following line of code needs to be changed
        return self.query(left, l, mid, ql, mid) + self.query(right, mid+1, r, mid+1, qr)

    def querySum(self, ql:int, qr:int) -> int:
        '''
        返回区间[ql,..,qr]的和

        --- en ---
        Returns the sum of the interval [ql,..,qr]
        '''
        return self.query(0, 0, self.n-1, ql, qr)

    def build(self, tree_index:int, l:int, r:int):
        '''
        递归创建线段树
        tree_index : 线段树节点在数组中位置
        l, r : 该节点表示的区间的左,右边界

        --- en ---
        Recursively create a segment tree
        tree_index : the position of the segment tree node in the array
        l, r : the left and right boundaries of the interval represented by this node
        '''
        if l == r:
            self.tree[tree_index] = self.data[l]
            return
        # 区间中点,对应左孩子区间结束,右孩子区间开头
        # Interval midpoint, corresponding to the end of the left child interval, the beginning of the right child interval
        mid = (l+r) // 2
        # tree_index的左右子树索引
        # The left and right subtree indexes of tree_index
        left, right = 2 * tree_index + 1, 2 * tree_index + 2 
        self.build(left, l, mid)
        self.build(right, mid+1, r)
        # 区间和使用加法即可，如果不是区间和要改下面这行代码
        # The interval sum can be used for addition, if it is not the interval sum, the following line of code needs to be changed
        self.tree[tree_index] = self.tree[left] + self.tree[right]
`;

export default () => ({
  // title: "线段树",
  title: t("Locale.codeTemplate.segmentTree.title"),
  logo: segmentLogo,
  link: "https://oi-wiki.org/ds/seg/",
  list: [
    {
        text: t("Locale.codeTemplate.segmentTree.item5"),
        problems: [
          {
            id: "range-sum-query-mutable",
            // title: "303. 区域和检索 - 数组不可变（使用一维前缀和会更简单）",
            title: t("Locale.problem.303"),
          },
          {
            id: "range-sum-query-mutable",
            // title: "307. 区域和检索 - 数组可修改",
            title: t("Locale.problem.307"),
          },
          {
            id: "peaks-in-array",
            // title: "3187. 数组中的峰值",
            title: t("Locale.problem.3187"),
          },
        ],
        codes: [
          {
            language: "py",
            text: binaryIndexTreePyCode,
          },
        ],
      },
    {
      // text: "区间和线段树",
      text: t("Locale.codeTemplate.segmentTree.item1"),
      problems: [
        {
          id: "range-sum-query-immutable",
          // title: "303. 区域和检索 - 数组不可变（使用一维前缀和会更简单）",
          title: t("Locale.problem.303"),
        },
        {
          id: "range-sum-query-mutable",
          // title: "307. 区域和检索 - 数组可修改",
          title: t("Locale.problem.307"),
        },
      ],
      codes: [
        {
          language: "py",
          text: segmentTreePyCode,
        },
      ],
    },
    {
      // text: "区间和懒更新（区间更新）线段树",
      text: t("Locale.codeTemplate.segmentTree.item2"),
      problems: [
        {
          id: "handling-sum-queries-after-update",
          // title: "2569. 更新数组后处理求和查询",
          title: t("Locale.problem.2569"),
        },
      ],
      codes: [
        {
          language: "py",
          text: `
        class LazySegmentTree:
          def __init__(self, data):
              '''
              data:传入的数组

              --- en ---
              data: the array to be passed in
              '''
              self.data = data
              self.n = len(data)
              # 申请4倍data长度的空间来存线段树节点
              # Allocate 4 times the length of data to store the segment tree node
              # 索引i的左孩子索引为2i+1，右孩子为2i+2
              # The index of the left child of index i is 2i+1, and the right child is 2i+2
              self.tree = [0] * (4 * self.n) 
              # 要点 1 开始
              # point 1 start
              # 索引i的左孩子索引为2i+1，右孩子为2i+2
              # The index of the left child of index i is 2i+1, and the right child is 2i+2
              self.dirty = [True] * (4 * self.n) 
              # 要点 1 结束
              # point 1 end
              if self.n:
                  self.build(0, 0, self.n-1)
      
          def build(self, tree_index, l, r):
              if l == r:
                  self.tree[tree_index] = self.data[l]
                  return
              left, right = 2 * tree_index + 1, 2 * tree_index + 2
              mid = (l + r) // 2
              self.build(left, l, mid)
              self.build(right, mid+1, r)
              self.tree[tree_index] = self.tree[left] + self.tree[right]
      
          def updateSum(self, ql, qr, val):
              self.update(0, 0, self.n-1, ql, qr, val)
      
          def update(self, tree_index, l, r, ql, qr, val):
              if l == ql and r == qr:
                  # 要点 2 开始
                  # point 2 start
                  self.dirty[tree_index] = not self.dirty[tree_index]
                  self.tree[tree_index] = (r - l + 1) * val
                  # 要点 2 结束
                  # point 2 end
                  return
              left, right = 2 * tree_index + 1, 2 * tree_index + 2
              mid = (l + r) // 2
              # 要点 3 开始
              # point 3 start
              # 如果有标记就处理
              # If there is a mark, process it
              if not self.dirty[tree_index]: 
                  self.update(left, l, mid, l, mid, val)
                  self.update(right, mid+1, r, mid+1, r, val)
                  # 重置回去
                  # Reset back
                  self.dirty[tree_index] = True 
              # 要点 3 结束
              # point 3 end
              if qr <= mid: self.update(left, l, mid, ql, qr, val)
              elif ql > mid: self.update(right, mid+1, r, ql, qr, val)
              else:
                  self.update(left, l, mid, ql, mid, val)
                  self.update(right, mid+1, r, mid+1, qr, val)
              self.tree[tree_index] = self.tree[left] + self.tree[right]
      
          def querySum(self, ql, qr):
              return self.query(0, 0, self.n-1, ql, qr)
      
          def query(self, tree_index, l, r, ql, qr):
              if l == ql and r == qr:
                  return self.tree[tree_index]
              left, right = 2 * tree_index + 1, 2 * tree_index + 2
              mid = (l + r) // 2
              # 要点 3 开始
              # point 3 start
              # 如果有标记就处理
              # If there is a mark, process it
              if not self.dirty[tree_index]: 
                  self.update(left, l, mid, l, mid)
                  self.update(right, mid+1, r, mid+1, r)
                  # 重置回去
                  # Reset back
                  self.dirty[tree_index] = True 
              # 要点 3 结束
              # point 3 end
              if qr <= mid: return self.query(left, l, mid, ql, qr)
              if ql > mid: return self.query(right, mid+1, r, ql, qr)
              return self.query(left, l, mid, ql, mid) + self.query(right, mid+1, r, mid+1, qr)
          `,
        },
      ],
    },
    {
      // text: "计数线段树",
      text: t("Locale.codeTemplate.segmentTree.item3"),
      problems: [
        {
          id: "create-sorted-array-through-instructions",
          // title: "1649. 通过指令创建有序数组",
          title: t("Locale.problem.1649"),
        },
      ],
      codes: [
        {
          language: "py",
          text: `
class SegmentTree:
  def __init__(self, upper, lower):
      """
      data:传入的数组

      --- en ---
      data: the array to be passed in
      """
      self.lower = lower
      self.upper = upper
      #  申请4倍data长度的空间来存线段树节点
      # Allocate 4 times the length of data to store the segment tree node
      # 索引i的左孩子索引为2i+1，右孩子为2i+2
      # The index of the left child of index i is 2i+1, and the right child is 2i+2
      self.tree = [0] * (4 * (upper - lower + 1))  

  # 本质就是一个自底向上的更新过程
  # 因此可以使用后序遍历，即在函数返回的时候更新父节点。
  # It is essentially a bottom-up renewal process
  # Therefore, post-order traversal can be used, that is, update the parent node when the function returns.
  def update(self, tree_index, l, r, index):
      """
      tree_index:某个根节点索引
      l, r : 此根节点代表区间的左右边界
      index : 更新的值的索引

      --- en ---
      tree_index: the index of a root node
      l, r : the left and right boundaries of the interval represented by this root node
      index : the index of the value to be updated
      """
      if l > index or r < index:
          return
      self.tree[tree_index] += 1
      if l == r:
          return
      mid = (l + r) // 2
      left, right = tree_index * 2 + 1, tree_index * 2 + 2
      self.update(left, l, mid, index)
      self.update(right, mid + 1, r, index)

  def updateCount(self, index: int):
      self.update(0, self.lower, self.upper, index)

  def query(self, tree_index: int, l: int, r: int, ql: int, qr: int) -> int:
      """
      递归查询区间[ql,..,qr]的值
      tree_index : 某个根节点的索引
      l, r : 该节点表示的区间的左右边界
      ql, qr: 待查询区间的左右边界

      --- en ---
      Recursively query the value of the interval [ql,..,qr]
      tree_index : the index of a root node
      l, r : the left and right boundaries of the interval represented by this root node
      ql, qr: the left and right boundaries of the interval to be queried
      """
      if qr < l or ql > r:
          return 0
      # l 和 r 在 [ql, qr] 内
      # l and r are within [ql, qr]
      if ql <= l and qr >= r:
          return self.tree[tree_index]
      mid = (l + r) // 2
      left, right = tree_index * 2 + 1, tree_index * 2 + 2
      return self.query(left, l, mid, ql, qr) + self.query(right, mid + 1, r, ql, qr)

  def queryCount(self, ql: int, qr: int) -> int:
      """
      返回区间[ql,..,qr]的计数信息

      --- en ---
      Returns the count information of the interval [ql,..,qr]
      """
      return self.query(0, self.lower, self.upper, ql, qr)
          `,
        },
      ],
    },
    {
      // text: "动态开点线段树",
      text: t("Locale.codeTemplate.segmentTree.item4"),
      problems: [
        {
          id: "maximum-sum-queries",
          // title: "2736. 最大和查询",
          title: t("Locale.problem.2736"),
        },
      ],
      codes: [
        {
          language: "py",
          text: `
class Node:
    def __init__(self, l, r):
        # 左孩子的指针
        # The pointer to the left child
        self.left = None
        # 右孩子的指针
        # The pointer to the right child
        self.right = None
        # 区间左端点
        # Interval left endpoint
        self.l = l
        # 区间右端点
        # Interval right endpoint
        self.r = r
        # 中点
        # Midpoint
        self.m = (l + r) >> 1
        # 当前值
        # Current value
        self.v = 0
        # 懒标记
        # Lazy tag
        self.add = 0   

class SegmentTree:
    def __init__(self,n):
        # 默认就一个根节点，不 build 出整个树，节省空间
        # There is only one root node by default, and the entire tree is not built to save space
        self.root = Node(0,n-1)  # Root Node

    def update(self, l, r, v, node):
        if l > node.r or r < node.l:
            return
        if l <= node.l and node.r <= r:
            node.v = (node.r - node.l + 1) * v
            #   做了一个标记
            #   Made a mark
            node.add = v 
            return
        # 动态开点。为子节点赋值，这个值就从 add 传递过来
        # Dynamic opening. Assign values to child nodes, and this value is passed from add
        if l <= node.m:
            self.update(l, r, v, node.left)
        if r > node.m:
            self.update(l, r, v, node.right) 
        # 动态开点结束后，修复当前节点的值
        # After the dynamic opening is completed, repair the value of the current node
        self.__pushup(node)

    def query(self, l, r,node):
        if l > node.r or r < node.l:
            return 0
        if l <= node.l and node.r <= r:
            return node.v
        # 动态开点。为子节点赋值，这个值就从 add 传递过来
        # Dynamic opening. Assign values to child nodes, and this value is passed from add
        self.__pushdown(node)
        ans = 0
        if l <= node.m:
            ans += self.query(l, r, node.left)
        if r > node.m:
            ans += self.query(l, r, node.right)
        return ans

    def __pushdown(self,node):
        if node.left is None:
            node.left = Node(node.l, node.m)
        if node.right is None:
            node.right = Node(node.m + 1, node.r)
        if node.add > 0:
            node.left.v = (node.left.r - node.left.l + 1) * node.add
            node.right.v = (node.right.r - node.right.l + 1) * node.add
            node.left.add = node.add
            node.right.add = node.add
            node.add = 0

    def __pushup(self,node):
        node.v = node.left.v + node.right.v

    def updateSum(self,index,val):
        self.update(index,index,val,self.root)

    def querySum(self,left,right):
        return self.query(left,right,self.root)
        `,
        },
      ],
    },
  ],
});

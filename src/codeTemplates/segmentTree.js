import segmentLogo from "../imgs/segment.svg";

const pyCode = `
class SegmentTree:
    def __init__(self, data:List[int]): 
        '''
        data:传入的数组
        '''
        self.data = data
        self.n = len(data)
        #  申请4倍data长度的空间来存线段树节点
        self.tree = [None] * (4 * self.n) # 索引i的左孩子索引为2i+1，右孩子为2i+2
        if self.n:
            self.build(0, 0, self.n-1)
    # 本质就是一个自底向上的更新过程
    # 因此可以使用后序遍历，即在函数返回的时候更新父节点。
    def update(self, tree_index, l, r, index):
        '''
        tree_index:某个根节点索引
        l, r : 此根节点代表区间的左右边界
        index : 更新的值的索引
        '''
        if l == r==index :
            self.tree[tree_index] = self.data[index]
            return
        mid = (l+r)//2
        left, right = 2 * tree_index + 1, 2 * tree_index + 2
        if index > mid:
            # 要更新的区间在右子树
            self.update(right, mid+1, r, index)
        else:
            # 要更新的区间在左子树index<=mid
            self.update(left, l, mid, index)
        # 查询区间一部分在左子树一部分在右子树
        # 区间和使用加法即可，如果不是区间和要改下面这行代码
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
        '''
        if l == ql and r == qr:
            return self.tree[tree_index]
    
        # 区间中点,对应左孩子区间结束,右孩子区间开头
        mid = (l+r) // 2 
        left, right = tree_index * 2 + 1, tree_index * 2 + 2
        if qr <= mid:
            # 查询区间全在左子树
            return self.query(left, l, mid, ql, qr)
        elif ql > mid:
            # 查询区间全在右子树
            return self.query(right, mid+1, r, ql, qr)
    
        # 查询区间一部分在左子树一部分在右子树
        # 区间和使用加法即可，如果不是区间和要改下面这行代码
        return self.query(left, l, mid, ql, mid) + self.query(right, mid+1, r, mid+1, qr)

    def querySum(self, ql:int, qr:int) -> int:
        '''
        返回区间[ql,..,qr]的和
        '''
        return self.query(0, 0, self.n-1, ql, qr)

    def build(self, tree_index:int, l:int, r:int):
        '''
        递归创建线段树
        tree_index : 线段树节点在数组中位置
        l, r : 该节点表示的区间的左,右边界
        '''
        if l == r:
            self.tree[tree_index] = self.data[l]
            return
        mid = (l+r) // 2 # 区间中点,对应左孩子区间结束,右孩子区间开头
        left, right = 2 * tree_index + 1, 2 * tree_index + 2 # tree_index的左右子树索引
        self.build(left, l, mid)
        self.build(right, mid+1, r)
        # 区间和使用加法即可，如果不是区间和要改下面这行代码
        self.tree[tree_index] = self.tree[left] + self.tree[right]
`;

export default {
  title: "线段树",
  logo: segmentLogo,
  link: "https://oi-wiki.org/ds/seg/",
  list: [
    {
      text: "区间和线段树",
      problems: [
        {
          id: "range-sum-query-immutable",
          title: "303. 区域和检索 - 数组不可变（使用一维前缀和会更简单）",
        },
        {
          id: "range-sum-query-mutable",
          title: "307. 区域和检索 - 数组可修改",
        },
      ],
      codes: [
        {
          language: "py",
          text: pyCode,
        },
      ],
    },
    {
      text: "区间和懒更新（区间更新）线段树",
      problems: [
        {
          id: "handling-sum-queries-after-update",
          title: "2569. 更新数组后处理求和查询"
        }
      ],
      codes: [
        {
          language: "py",
          text: `
        class LazySegmentTree:
          def __init__(self, data):
              '''
              data:传入的数组
              '''
              self.data = data
              self.n = len(data)
              #  申请4倍data长度的空间来存线段树节点
              self.tree = [0] * (4 * self.n) # 索引i的左孩子索引为2i+1，右孩子为2i+2
              # 要点 1 开始
              self.dirty = [True] * (4 * self.n) # 索引i的左孩子索引为2i+1，右孩子为2i+2
              # 要点 1 结束
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
                  self.dirty[tree_index] = not self.dirty[tree_index]
                  self.tree[tree_index] = (r - l + 1) * val
                  # 要点 2 结束
                  return
              left, right = 2 * tree_index + 1, 2 * tree_index + 2
              mid = (l + r) // 2
              # 要点 3 开始
              if not self.dirty[tree_index]: # 如果有标记就处理
                  self.update(left, l, mid, l, mid, val)
                  self.update(right, mid+1, r, mid+1, r, val)
                  self.dirty[tree_index] = True # 重置回去
              # 要点 3 结束
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
              if not self.dirty[tree_index]: # 如果有标记就处理
                  self.update(left, l, mid, l, mid)
                  self.update(right, mid+1, r, mid+1, r)
                  self.dirty[tree_index] = True # 重置回去
              # 要点 3 结束
              if qr <= mid: return self.query(left, l, mid, ql, qr)
              if ql > mid: return self.query(right, mid+1, r, ql, qr)
              return self.query(left, l, mid, ql, mid) + self.query(right, mid+1, r, mid+1, qr)
          `
        }
      ]
    },
    {
      text: "计数线段树",
      problems: [
        {
          id: "create-sorted-array-through-instructions",
          title: "1649. 通过指令创建有序数组",
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
      """
      self.lower = lower
      self.upper = upper
      #  申请4倍data长度的空间来存线段树节点
      self.tree = [0] * (4 * (upper - lower + 1))  # 索引i的左孩子索引为2i+1，右孩子为2i+2

  # 本质就是一个自底向上的更新过程
  # 因此可以使用后序遍历，即在函数返回的时候更新父节点。
  def update(self, tree_index, l, r, index):
      """
      tree_index:某个根节点索引
      l, r : 此根节点代表区间的左右边界
      index : 更新的值的索引
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
      """
      if qr < l or ql > r:
          return 0
      # l 和 r 在 [ql, qr] 内
      if ql <= l and qr >= r:
          return self.tree[tree_index]
      mid = (l + r) // 2
      left, right = tree_index * 2 + 1, tree_index * 2 + 2
      return self.query(left, l, mid, ql, qr) + self.query(right, mid + 1, r, ql, qr)

  def queryCount(self, ql: int, qr: int) -> int:
      """
      返回区间[ql,..,qr]的计数信息
      """
      return self.query(0, self.lower, self.upper, ql, qr)
          `,
        },
      ],
    },
    {
      text: '动态开点',
      problems: [{
        id: 'maximum-sum-queries',
        title: '2736. 最大和查询'
      }],
      codes: [{
        language: 'py',
        text: `
class Node:
    def __init__(self, l, r):
        self.left = None # 左孩子的指针
        self.right = None # 右孩子的指针
        self.l = l # 区间左端点
        self.r = r # 区间右端点
        self.m = (l + r) >> 1 # 中点
        self.v = 0 # 当前值
        self.add = 0   # 懒标记

class SegmentTree:
    def __init__(self,n):
        # 默认就一个根节点，不 build 出整个树，节省空间
        self.root = Node(0,n-1)  # 根节点

    def update(self, l, r, v, node):
        if l > node.r or r < node.l:
            return
        if l <= node.l and node.r <= r:
            node.v = (node.r - node.l + 1) * v
            node.add = v #   做了一个标记
            return
        self.__pushdown(node) # 动态开点。为子节点赋值，这个值就从 add 传递过来
        self.update(l, r, v, node.left)
        self.update(l, r, v, node.right) 
        self.__pushup(node) # 动态开点结束后，修复当前节点的值

    def query(self, l, r,node):
        if l > node.r or r < node.l:
            return 0
        if l <= node.l and node.r <= r:
            return node.v
        self.__pushdown(node) # 动态开点。为子节点赋值，这个值就从 add 传递过来
        return self.query(l, r, node.left) + self.query(l, r, node.right)

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
        `
      }]
    }
  ],
};

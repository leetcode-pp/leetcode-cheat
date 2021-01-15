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
  ],
};

# 可视化调试

## 做什么

根据代码直接生成对应的动画。

伪代码描述就是：

```ts
Type Code = JS | Python | Java | C++ | ....
Code -> List[Picture]
```

## 核心原理

Code:

```py
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        n = len(nums)
        diff = float("inf")
        res = None

        for i in range(n):
            left = i + 1
            right = n - 1
            while left < right:
                s = nums[left] + nums[right] + nums[i]
                if abs(s - target) < diff:
                    diff = abs(s - target)
                    res = s
                if s > target:
                    right -= 1
                elif s < target:
                    left += 1
                else:
                    return target
        return res
```

Will turn to：

```py
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        # 1. 在函数内部插入一行
        drawGraph({}, nums, target)
        # 2. 在 nums.sort() 下插入一行
        nums.sort()
        drawGraph({}, nums, target)
        n = len(nums)
        diff = float("inf")
        res = None

        for i in range(n):
            # @pointer(nums)
            # 3. 看到上面的注解会插入一行
            left = i + 1
            drawGraph({ pointer: {
                nums: left
            }}, nums, target)
            # @pointer(nums)
            # 4. 看到上面的注解会插入一行
            right = n - 1
            drawGraph({ pointer: {
                nums: right
            }}, nums, target)
            while left < right:
                s = nums[left] + nums[right] + nums[i]
                if abs(s - target) < diff:
                    diff = abs(s - target)
                    res = s
                if s > target:
                    right -= 1
                elif s < target:
                    left += 1
                else:
                    return target
        return res
```

第一步之后大概会生成这样的图：

![](https://p.ipic.vip/7cr2tv.jpg)

第二步之后大概会生成这样的图：

![](https://p.ipic.vip/kat9z5.jpg)

第三步之后大概会生成这样的图：

![](https://p.ipic.vip/l0p2e7.jpg)

第四步之后大概会生成这样的图：

![](https://p.ipic.vip/5hjf66.jpg)

之后每次当 left 和 right 发生变化的时候更新图片（指针变化）即可。

drawGraph 的伪代码：

```py
def makeObseravle(any, cb):
    if changed(any): cb
def draw(options, shape):
    if is_array(shape) {
        pointer = options.pointer[shape.getName()]
        if :
            pointTo(shape, pointer)
            makeObseravle(pointer, draw)
    }
    if ...
def drawGraph(options, ...shapes):
    for shape in shapes:
        draw(options, shape)

```

## 架构图

### 节点类

- Array
- Tree
- HashMap
- 。。。

### 如何控制节点关系

设计一种语法，类似：

```
digraph MyGraph {
  a -> b [dir=both,arrowhead=open,arrowtail=inv]
  a -> c [dir=both,arrowhead=dot,arrowtail=invdot]
  a -> d [dir=both,arrowhead=odot,arrowtail=invodot]
  a -> e [dir=both,arrowhead=tee,arrowtail=empty]
  a -> f [dir=both,arrowhead=halfopen,arrowtail=crow]
  a -> g [dir=both,arrowhead=diamond,arrowtail=box]
}

```

生成：

![](https://p.ipic.vip/tf30t2.jpg)

## 详细流程

- 分析代码，在合适位置插入语句
- 这些插入的语句是我们预先定义好的代码。 比如 ：

```js
list = [];
function draw_array(inputs, pointers, value, label = "target") {
  list.push(`<Layout flex={[1, 1]}>
        <Array inputs={${inputs}} pointers={${pointers}} />
        <SingleValue label="${label}" value="${value}" />
      </Layout>`);
}
```

- 当代码提交运行的时候， 会不断调用 draw_array, 每个 draw_array 都对应生成一个图片，这样用户就能看到一张张连续的图片了。

> 这个 list 数组保存的一个个 DSL， 其会被最终渲染为图片。

## list 如何转换为图片序列

```js
function parse(list) {
  for (const snapshoot of list) {
    const jsx = JSXParser(snapshoot);
    const type = jsx.type;
    const props = jsx.props;
    const children = jsx.children || [];
    parse(children);
  }
}
```

- [JSXParser](https://github.com/RubyLouvre/jsx-parser)

然后就可以使用 React 自定义组件来完成了，具体的组件定义在[index.js](./index.js) 中。

## 更新（2020-09-22）

由于有了一个功能很好的 VSCODE 插件， 因此考虑直接集成。 https://hediet.github.io/visualization/

以树的可视化调试为例：

```

{
    "kind": { "graph": true },
    "nodes": [
        { "id": "1", "label": "1" },
        { "id": "2", "label": "2", "color": "orange" },
        { "id": "3", "label": "3" }
    ],
    "edges": [
        { "from": "1", "to": "2", "color": "red" },
        { "from": "1", "to": "3" }
    ]
}
```

will render:

![](https://p.ipic.vip/f7a9ji.jpg)

因此我们的目标就是:

1. 将 LeetCode 的测试用例， 比如 [1,2, null, 3, 4] 转化为树结构，树的定义：

```py
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
```
2.  将树转化为形如：

```js
{
    "kind": { "graph": true },
    "nodes": [
        { "id": "1", "label": "1" },
        { "id": "2", "label": "2", "color": "orange" },
        { "id": "3", "label": "3" }
    ],
    "edges": [
        { "from": "1", "to": "2", "color": "red" },
        { "from": "1", "to": "3" }
    ]
}
```

的数据结构

3. 在用户代码前后加预处理代码，比如：

```py
# this class below
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if (root.val - p.val) * (root.val - q.val) <= 0:
            return root
        if p.val < root.val:
            return self.lowestCommonAncestor(root.left, p, q)
        return self.lowestCommonAncestor(root.right, p, q)
        
# this line below，其中这三个参数应该是从测试用例转化过来的
Solution().lowestCommonAncestor(root, p,q)
```
4. 用户输入自定义的用例，也可以完成转化并执行
## 扩展

- 支持用户手写表达式，类似力扣的“树的可视化”
- 支持自定义样式扩展，类似 markdown-nice

## 参考

- [ncona](https://ncona.com/2020/06/create-diagrams-with-code-using-graphviz/)
- [gdbgui](https://github.com/cs01/gdbgui)
- [traceId-spanId 全链路追踪](https://gist.github.com/azl397985856/2f5bf2c8fb6640d37eec1319faf3b5ec)
- [vscode debug visualization](https://hediet.github.io/visualization/)

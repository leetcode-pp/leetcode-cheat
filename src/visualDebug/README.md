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

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfu805nd4mj30ol07taag.jpg)

第二步之后大概会生成这样的图：

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfu7zjlxbfj30lr056wes.jpg)

第三步之后大概会生成这样的图：

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfu813p4tij30m208d74s.jpg)

第四步之后大概会生成这样的图：

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfu81iyc9rj30qh0an750.jpg)

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

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfu7oww70dj30fn04bt91.jpg)

## 参考

- [ncona](https://ncona.com/2020/06/create-diagrams-with-code-using-graphviz/)

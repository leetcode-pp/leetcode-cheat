const { t } = require("../locales");

const minHeapJSCode = `
function minHeap(A = []) {
    this.heapify(A);
  }
  
  minHeap.prototype._shiftUp = function(i) {
    let parent_i = (i / 2) >>> 0;
    while (parent_i > 0) {
      if (this.h[i] < this.h[parent_i]) {
        [this.h[i], this.h[parent_i]] = [this.h[parent_i], this.h[i]];
      }
      parent_i = (parent_i / 2) >>> 0;
    }
  };
  
  minHeap.prototype._shiftDown = function(i) {
    while (i * 2 <= this.h.length - 1) {
      const mc = this._minChild(i);
      if (this.h[i] > this.h[mc]) {
        [this.h[i], this.h[mc]] = [this.h[mc], this.h[i]];
      }
      i = mc;
    }
  };
  
  minHeap.prototype._minChild = function(i) {
    if (i * 2 + 1 > this.h.length - 1) return i * 2;
    if (this.h[i * 2] < this.h[i * 2 + 1]) return i * 2;
    return i * 2 + 1;
  };
  
  minHeap.prototype.pop = function() {
    if (this.h.length === 1) throw new Error('空了就别弹了吧？');
    const ans = this.h[1];
    this.h[1] = this.h[this.h.length - 1];
    this.h.pop();
    this._shiftDown(1);
    return ans;
  };
  
  minHeap.prototype.push = function(a) {
    this.h.push(a);
    this._shiftUp(this.h.length - 1);
    console.log(this.h);
  };
  
  minHeap.prototype.heapify = function(A) {
    this.h = [0].concat(A);
    i = 1;
    while (i < this.h.length) {
      this._shiftDown(i);
      i++;
    }
  };
  
  // test:
  h = new minHeap([1, 2, 3]);
  h.push(4);
  h.push(5);
  h.pop();
  h.pop();
  console.log(h.h); // inspect internal value
}
`;

const minHeapPythonCode = `
class min_heap:
    def __init__(self, A=[]):
        self.heapify(A)

    def shift_up(self, i):
        while i // 2 > 0:
            if self.h[i] < self.h[i // 2]:
                self.h[i], self.h[i//2] = self.h[i//2], self.h[i]
            i = i // 2

    def shift_down(self, i):
        while (i * 2) <= len(self.h)-1:
            mc = self.minChild(i)
            if self.h[i] > self.h[mc]:
                self.h[i], self.h[mc] = self.h[mc], self.h[i]
            i = mc

    def minChild(self, i):
        if i * 2 + 1 > len(self.h)-1:
            return i * 2
        if self.h[i*2] < self.h[i*2+1]:
            return i * 2
        else:
            return i * 2 + 1

    def heappop(self):
        if len(self.h) == 1:
            return None
        ans = self.h[1]
        self.h[1] = self.h[len(self.h)-1]
        self.h.pop()
        self.shift_down(1)
        return ans

    def heappush(self, a):
        self.h.append(a)
        self.shift_up(len(self.h)-1)

    def heapify(self, A):
        self.h = [0] + A
        i = 1
        while (i < len(self.h)):
            self.shift_down(i)
            i = i + 1

# 使用：

h = min_heap([5, 6, 2, 3])

h.heappush(1)
h.heappop() # 1
h.heappop() # 2
h.heappush(1)
h.heappop() # 1
h.heappop() # 3
`;

const minHeapJavaCode = `
// by @CaptainZ
import java.util.Arrays;
import java.util.Comparator;

/**
 * 用完全二叉树来构建 堆
 * 前置条件 起点为 1
 * 那么 子节点为  i <<1 和 i<<1 + 1
 * 核心方法为
 * shiftdown 交换下沉
 * shiftup 交换上浮
 * <p>
 * build 构建堆
 */

public class MinHeap {

    int size = 0;
    int queue[];

    public Heap(int initialCapacity) {
        if (initialCapacity < 1)
            throw new IllegalArgumentException();
        this.queue = new int[initialCapacity];
    }

    public Heap(int[] arr) {
        size = arr.length;
        queue = new int[arr.length + 1];
        int i = 1;
        for (int val : arr) {
            queue[i++] = val;
        }
    }

    public void shiftDown(int i) {

        int temp = queue[i];

        while ((i << 1) <= size) {
            int child = i << 1;
            // child!=size 判断当前元素是否包含右节点
            if (child != size && queue[child + 1] < queue[child]) {
                child++;
            }
            if (temp > queue[child]) {
                queue[i] = queue[child];
                i = child;
            } else {
                break;
            }
        }
        queue[i] = temp;
    }


    public void shiftUp(int i) {
        int temp = queue[i];
        while ((i >> 1) > 0) {
            if (temp < queue[i >> 1]) {
                queue[i] = queue[i >> 1];
                i >>= 1;
            } else {
                break;
            }
        }
        queue[i] = temp;
    }

    public int peek() {

        int res = queue[1];
        return res;
    }

    public int pop() {

        int res = queue[1];

        queue[1] = queue[size--];
        shiftDown(1);
        return res;
    }

    public void push(int val) {
        if (size == queue.length - 1) {
            queue = Arrays.copyOf(queue, size << 1+1);
        }
        queue[++size] = val;
        shiftUp(size);
    }

    public void buildHeap() {
        for (int i = size >> 1; i >= 0; i--) {
            shiftDown(i);
        }
    }

    public static void main(String[] args) {
        int arr[] = new int[]{2,7,4,1,8,1};
        Heap heap = new Heap(arr);
        heap.buildHeap();
        System.out.println(heap.peek());
        heap.push(5);
        while (heap.size > 0) {
            int num = heap.pop();
            System.out.printf(num + "");
        }
    }
}


`;
module.exports = () => ({
  logo: require("../imgs/heap.svg"),
  // title: "堆",
  title: t("Locale.codeTemplate.heap.title"),
  list: [
    {
      // text: "小顶堆",
      text: t("Locale.codeTemplate.heap.item1"),
      problems: [
        {
          // title: "1046. 最后一块石头的重量(这道题需要用大顶堆，不过都差不多)",
          title: t("Locale.problem.1046"),
          id: "last-stone-weight",
        },
      ],
      codes: [
        {
          language: "js",
          text: minHeapJSCode,
        },
        {
          language: "py",
          text: minHeapPythonCode,
        },
        {
          language: "java",
          text: minHeapJavaCode,
        },
      ],
    },
  ],
  link: "https://leetcode-solution.cn/solutionDetail?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fazl397985856%2Fleetcode%2Fcontents%2Fthinkings%2Fheap.md&type=1",
});

const minHeapJSCode = `
class MinHeap {

    constructor () {
        /* Initialing the array heap and adding a dummy element at index 0 */
        this.heap = [null]
    }

    peek() {
        /* Accessing the min element at index 1 in the heap array */
        return this.heap[1]
    }
    
    push (node) {

        /* Inserting the new node at the end of the heap array */
        this.heap.push(node)

        /* Finding the correct position for the new node */

        if (this.heap.length > 1) {
            let current = this.heap.length - 1

            /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
            while (current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {

                /* Swapping the two nodes by using the ES6 destructuring syntax*/
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }
    
    pop() {
        /* Smallest element is at the index 1 in the heap array */
        let smallest = this.heap[1]

        /* When there are more than two elements in the array, we put the right most element at the first position
            and start comparing nodes with the child nodes
        */
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length-1]
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest
            }

            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1

            while (this.heap[leftChildIndex] &&
                    this.heap[rightChildIndex] &&
                    (this.heap[current] > this.heap[leftChildIndex] ||
                        this.heap[current] > this.heap[rightChildIndex])) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                    current = rightChildIndex
                }

                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
        }

        /* If there are only two elements in the array, we directly splice out the first element */

        else if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else {
            return null
        }

        return smallest
    }
    /**
     * Your MinHeap object will be instantiated and called as such:
     * var obj = new MinHeap()
     * obj.push(1)
     * obj.push(2)
     * obj.peek() // will return 1
     * obj.pop() // remove 1
     * obj.peek() // will return 2
     */ 
}
`;

const minHeapPythonCode = `
class min_heap:
    def __init__(self):
        self.h = [0]

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

    def build_heap(self, A):
        self.h = [0] + A
        i = 1
        while (i < len(self.h)):
            self.shift_down(i)
            i = i + 1

# 使用：

h = min_heap()
h.build_heap([5, 6, 2, 3])

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
module.exports = {
  title: "堆",
  list: [
    {
      text: "小顶堆",
      problems: [],
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
  link: "",
};

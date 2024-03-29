const { t } = require("../locales");

module.exports = () => ({
  logo: require("../imgs/hand-writing.svg"),
  //   title: "手撕算法",
  title: t("Locale.codeTemplate.handWriting.title"),
  list: [
    {
      //   text: "数组排序",
      text: t("Locale.codeTemplate.handWriting.item1"),
      problems: [
        {
          id: "sort-an-array",
          //   title: "912. 排序数组",
          title: t("Locale.problem.912"),
        },
      ],
      codes: [
        {
          language: "py",
          text: `
# 1. 归并排序（推荐！其他排序方法都不推荐在竞赛中使用）
# 1. Merge sort (recommended! None of the other ranking methods are recommended for use in contests)
# 归并排序乞丐版
# Merge sort beggar version
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def mergeSort(l, r):
            if l >= r:
                return
            mid = (l + r) // 2
            mergeSort(l, mid)
            mergeSort(mid + 1, r)
            temp = []
            i, j = l, mid + 1
            while i <= mid and j <= r:
                if nums[i] < nums[j]:
                    temp.append(nums[i])
                    i += 1
                else:
                    temp.append(nums[j])
                    j += 1
            while i <= mid:
                temp.append(nums[i])
                i += 1
            while j <= r:
                temp.append(nums[j])
                j += 1
            nums[l : r + 1] = temp

        mergeSort(0, len(nums) - 1)
        return nums
# 归并排序优化版
# Merge sort optimization version
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        temp = [0] * len(nums)

        def mergeSort(l, r):
            if l >= r:
                return
            mid = (l + r) // 2
            mergeSort(l, mid)
            mergeSort(mid + 1, r)
            i, j = l, mid + 1
            k = 0
            while i <= mid and j <= r:
                if nums[i] < nums[j]:
                    temp[k] = nums[i]
                    i += 1
                else:
                    temp[k] = nums[j]
                    j += 1
                k += 1
            while i <= mid:
                temp[k] = nums[i]
                i += 1
                k += 1
            while j <= r:
                temp[k] = nums[j]
                j += 1
                k += 1
            nums[l : r + 1] = temp[: r - l + 1]

        mergeSort(0, len(nums) - 1)
        return nums

# 2. 快速排序
# 2. Quick sort
# 快速排序乞丐版
# Quick sort beggar version
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        temp = [0] * len(nums)

        def quickSort(nums):
            if not nums: return []
            pivot = nums[0]
            nums = nums[1:]
            l = quickSort([num for num in nums if num <= pivot])
            r = quickSort([num for num in nums if num > pivot])
            return l + [pivot] + r

        return quickSort(nums)
# 快速排序优化版
# Quick sort optimization version
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        temp = [0] * len(nums)

        def partition(l, r):
            pivot = nums[l]

            while l < r:
                while l < r and nums[r] >= pivot:
                    r -= 1
                nums[l] = nums[r]
                while l < r and nums[l] <= pivot:
                    l += 1
                nums[r] = nums[l]
            nums[l] = pivot
            return l

        def quickSort(l, r):
            if l >= r:
                return
            pivot = partition(l, r)
            quickSort(l, pivot - 1)
            quickSort(pivot + 1, r)

        quickSort(0, len(nums) - 1)
        return nums

# 3. 插入排序
# 3. Insertion sort
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        for i in range(1, n):
            t = nums[i]
            j = i - 1
            while j > -1 and nums[j] > t:
                nums[j + 1] = nums[j]
                j -= 1
            nums[j + 1] = t
        return nums

# 4. 选择排序
# 4. Selection sort
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        for i in range(n - 1):
            k = i
            for j in range(i + 1, n):
                if nums[j] < nums[k]:
                    k = j
            nums[i], nums[k] = nums[k], nums[i]
        return nums

# 5. 冒泡排序
# 5. Bubble sort
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[j] < nums[i]:
                    nums[i], nums[j] = nums[j], nums[i]
        return nums

            `,
        },
      ],
    },
    {
      //   text: "链表排序",
      text: t("Locale.codeTemplate.handWriting.item2"),
      problems: [
        {
          id: "sort-list",
          //   title: "148. 排序链表",
          title: t("Locale.problem.148"),
        },
      ],
      codes: [
        {
          language: "py",
          text: `
# 1. 归并排序（推荐！其他排序方法都不推荐在竞赛中使用）
# 1. Merge sort (recommended! None of the other ranking methods are recommended for use in contests)
class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        def mergeSort(head: ListNode) -> ListNode:
            if not head or not head.next:
                return head
            dummyHead = ListNode(-1)
            dummyHead.next = head
            slow, fast = dummyHead, head
            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next
            nxt = slow.next
            slow.next = None
            return merge(mergeSort(head), mergeSort(nxt))

        def merge(head1: ListNode, head2: ListNode) -> ListNode:
            dummyHead = ListNode(-1)
            temp, l1, l2 = dummyHead, head1, head2
            while l1 and l2:
                if l1.val <= l2.val:
                    temp.next = l1
                    l1 = l1.next
                else:
                    temp.next = l2
                    l2 = l2.next
                temp = temp.next
            if l1:
                temp.next = l1
            elif l2:
                temp.next = l2
            return dummyHead.next

        return mergeSort(head)
# 2. 快速排序
# 2. Quick sort
class Solution:
    def sortList(self, head):
        # 最坏情况也是 n ^ 2 ，因此面试或者竞赛不建议使用
        # The worst case is also n ^ 2, so it is not recommended to use it in interviews or competitions
        def quickSort(head, end):
     
        if head != end:
                pivot = partition(head, end)
                quickSort(head, pivot)
                quickSort(pivot.next, end)

        def partition(head, end):
            # p1是写指针，p2是读指针
            # 最终 p1 是大的链表的头， head 是小的链表的头
            # p1 is the write pointer, p2 is the read pointer
            # Finally, p1 is the head of the larger linked list, and head is the head of the smaller linked list
            pivot_val = head.val
            p1, p2 = head, head.next

            while p2 != end:
                if p2.val < pivot_val:
                    # 相当于数组的 append 方法
                    # Equivalent to the append method of an array
                    p1 = p1.next
                    p1.val, p2.val = p2.val, p1.val
                p2 = p2.next
            head.val, p1.val = p1.val, pivot_val
            return p1

        quickSort(head, None)
        return head
# 3. 插入排序
# 3. Insertion sort
class Solution:
    def sortList(self, head):
        if head == None or head.next == None:
            return head

        dummy = ListNode(-1)
        dummy.next = head
        pre = dummy
        cur = head
        while cur:
            # 准备将 last 插入到合适位置
            # Prepare to insert last into the appropriate position
            last = cur.next
            if last and last.val < cur.val:
                # 从 dummy 到 cur 线性遍历找第一个满足条件的位置并插入
                # Linearly traverse from dummy to cur to find the first position that meets the conditions and insert
                while pre.next and pre.next.val < last.val:
                    pre = pre.next
                tmp = pre.next
                pre.next = last
                # 别忘了这个，否则成环
                # Don't forget this, otherwise it will become a ring
                cur.next = last.next  
                last.next = tmp
                pre = dummy
            else:
                cur = last

        return dummy.next
# 4. 选择排序
# 4. Selection sort
class Solution:
    def sortList(self, head):
        temp = head

        while temp:
            min_node = temp
            r = temp.next
            while r:
                if min_node.val > r.val:
                    min_node = r
                r = r.next
            temp.val, min_node.val = min_node.val, temp.val
            temp = temp.next
        return head
# 5. 冒泡排序
# 5. Bubble sort
class Solution:
    def sortList(self, head):
        if not head:
            return None
        swaped = True
        while swaped:
            swaped = False
            temp = head
            while temp.next:
                if temp.val > temp.next.val:
                    swaped = True
                    temp.val, temp.next.val = temp.next.val, temp.val
                temp = temp.next
        return head

  `,
        },
      ],
    },
  ],
  //   link: "",
});

export default ({ tags, company }) => ({
  id: "232",
  name: "implement-queue-using-stacks",
  tags: [tags.design, tags.queue, tags.stack],
  company: [company.alibaba],
  pre: [tags.queue, tags.stack],
  keyPoints: [
    {
      text: "辅助栈",
      link: null,
    },
  ],
  solution:
    "https://github.com/azl397985856/leetcode/blob/master/problems/232.implement-queue-using-stacks.md",
  code: [
    {
      text: `/*
        * @lc app=leetcode id=232 lang=javascript
        *
        * [232] Implement Queue using Stacks
        */
       /**
        * Initialize your data structure here.
        */
       var MyQueue = function() {
         // tag: queue stack array
         this.stack = [];
         this.helperStack = [];
       };
       
       /**
        * Push element x to the back of queue.
        * @param {number} x
        * @return {void}
        */
       MyQueue.prototype.push = function(x) {
         let cur = null;
         while ((cur = this.stack.pop())) {
           this.helperStack.push(cur);
         }
         this.helperStack.push(x);
       
         while ((cur = this.helperStack.pop())) {
           this.stack.push(cur);
         }
       };
       
       /**
        * Removes the element from in front of queue and returns that element.
        * @return {number}
        */
       MyQueue.prototype.pop = function() {
         return this.stack.pop();
       };
       
       /**
        * Get the front element.
        * @return {number}
        */
       MyQueue.prototype.peek = function() {
         return this.stack[this.stack.length - 1];
       };
       
       /**
        * Returns whether the queue is empty.
        * @return {boolean}
        */
       MyQueue.prototype.empty = function() {
         return this.stack.length === 0;
       };
       
       /**
        * Your MyQueue object will be instantiated and called as such:
        * var obj = new MyQueue()
        * obj.push(x)
        * var param_2 = obj.pop()
        * var param_3 = obj.peek()
        * var param_4 = obj.empty()
        */`,
      language: "JS",
    },
    {
      language: "Python",
      text: `class MyQueue:

        def __init__(self):
            """
            Initialize your data structure here.
            """
            self.stack = []
            self.help_stack = []
    
        def push(self, x: int) -> None:
            """
            Push element x to the back of queue.
            """
            while self.stack:
                self.help_stack.append(self.stack.pop())
            self.help_stack.append(x)
            while self.help_stack:
                self.stack.append(self.help_stack.pop())
    
        def pop(self) -> int:
            """
            Removes the element from in front of queue and returns that element.
            """
            return self.stack.pop()
    
        def peek(self) -> int:
            """
            Get the front element.
            """
            return self.stack[-1]
    
        def empty(self) -> bool:
            """
            Returns whether the queue is empty.
            """
            return not bool(self.stack)
    
    
    # Your MyQueue object will be instantiated and called as such:
    # obj = MyQueue()
    # obj.push(x)
    # param_2 = obj.pop()
    # param_3 = obj.peek()
    # param_4 = obj.empty()`,
    },
    {
      language: "Java",
      text: `class MyQueue {
        Stack<Integer> pushStack = new Stack<> ();
        Stack<Integer> popStack = new Stack<> ();
    
        /** Initialize your data structure here. */
        public MyQueue() {
    
        }
        
        /** Push element x to the back of queue. */
        public void push(int x) {
            while (!popStack.isEmpty()) {
                pushStack.push(popStack.pop());
            }
            pushStack.push(x);
        }
        
        /** Removes the element from in front of queue and returns that element. */
        public int pop() {
            while (!pushStack.isEmpty()) {
                popStack.push(pushStack.pop());
            }
            return popStack.pop();
        }
        
        /** Get the front element. */
        public int peek() {
            while (!pushStack.isEmpty()) {
                popStack.push(pushStack.pop());
            }
            return popStack.peek();
        }
        
        /** Returns whether the queue is empty. */
        public boolean empty() {
            return pushStack.isEmpty() && popStack.isEmpty();
        }
    }
    
    /**
     * Your MyQueue object will be instantiated and called as such:
     * MyQueue obj = new MyQueue();
     * obj.push(x);
     * int param_2 = obj.pop();
     * int param_3 = obj.peek();
     * boolean param_4 = obj.empty();
     */`,
    },
  ],
});

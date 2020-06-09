// import decodeWays from "./91.decode-ways";
// import implementQueueUsingStacks from "./232.implement-queue-using-stacks";
import { db_collection } from './root.db'

const tags = {
  dp: {
    id: "dp",
    text: "动态规划",
    color: "cyan",
    link:
      "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
  },
  recursion: {
    id: "recursion",
    text: "递归",
    link: null,
  },
  queue: {
    id: "queue",
    text: "队列",
    link: null,
  },

  stack: {
    id: "stack",
    text: "栈",
    link: null,
  },
  design: {
    id: "design",
    text: "设计题",
    link: null,
  },
};

const company = {
  alibaba: {
    name: "阿里巴巴",
  },
};


export default {
  problems: db_collection,
  tags,
  company,
};

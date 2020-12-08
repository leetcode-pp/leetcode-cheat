import { db_collection } from "./root.db";

// const tags = {
//   dp: {
//     id: "dp",
//     text: "动态规划",
//     color: "cyan",
//     link:
//       "https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md",
//   },
//   recursion: {
//     id: "recursion",
//     text: "递归",
//     color: "#f50",
//     link: null,
//   },
//   queue: {
//     id: "queue",
//     text: "队列",
//     color: "#108ee9",
//     link: null,
//   },

//   stack: {
//     id: "stack",
//     color: "#87d068",
//     text: "栈",
//     link: null,
//   },
//   design: {
//     id: "design",
//     color: "#2db7f5",
//     text: "设计题",
//     link: null,
//   },
// };

const company = {};
const selected = {
  "remove-duplicate-letters": {
    id: 316,
    name: "remove-duplicate-letters",
    title: "一招吃遍力扣四道题，妈妈再也不用担心我被套路啦～",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/a-deleted.md",
  },
  "create-maximum-number": {
    id: 321,
    name: "create-maximum-number",
    title: "一招吃遍力扣四道题，妈妈再也不用担心我被套路啦～",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/a-deleted.md",
  },
  "remove-k-digits": {
    id: 402,
    name: "remove-k-digits",
    title: "一招吃遍力扣四道题，妈妈再也不用担心我被套路啦～",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/a-deleted.md",
  },
  "smallest-subsequence-of-distinct-characters": {
    id: 1081,
    name: "smallest-subsequence-of-distinct-characters",
    title: "一招吃遍力扣四道题，妈妈再也不用担心我被套路啦～",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/a-deleted.md",
  },
  "unique-substrings-in-wraparound-string": {
    id: 467,
    name: "unique-substrings-in-wraparound-string",
    title: "【西法的刷题秘籍】一次搞定前缀和",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/atMostK.md",
  },
  "number-of-subarrays-with-bounded-maximum": {
    id: 795,
    name: "number-of-subarrays-with-bounded-maximum",
    title: "【西法的刷题秘籍】一次搞定前缀和",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/atMostK.md",
  },
  "fruit-into-baskets": {
    id: 904,
    name: "fruit-into-baskets",
    title: "【西法的刷题秘籍】一次搞定前缀和",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/atMostK.md",
  },
  "subarrays-with-k-different-integers": {
    id: 992,
    name: "subarrays-with-k-different-integers",
    title: "【西法的刷题秘籍】一次搞定前缀和",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/atMostK.md",
  },
  "corporate-flight-bookings": {
    id: 1109,
    name: "corporate-flight-bookings",
    title: "【西法的刷题秘籍】一次搞定前缀和",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/atMostK.md",
  },
  "serialize-and-deserialize-bst": {
    id: 449,
    name: "serialize-and-deserialize-bst",
    title: "一文带你看懂二叉树的序列化",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/serialize.md",
  },
  "serialize-and-deserialize-binary-tree": {
    id: 297,
    name: "serialize-and-deserialize-binary-tree",
    title: "一文带你看懂二叉树的序列化",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/serialize.md",
  },

  "longest-increasing-subsequence": {
    id: 300,
    name: "longest-increasing-subsequence",
    title: "穿上衣服我就不认识你了？来聊聊最长上升子序列",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/serialize.md",
  },
  "non-overlapping-intervals": {
    id: 435,
    name: "non-overlapping-intervals",
    title: "穿上衣服我就不认识你了？来聊聊最长上升子序列",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/serialize.md",
  },
  "maximum-length-of-pair-chain": {
    id: 646,
    name: "maximum-length-of-pair-chain",
    title: "穿上衣服我就不认识你了？来聊聊最长上升子序列",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/serialize.md",
  },
  "minimum-number-of-arrows-to-burst-balloons": {
    id: 452,
    name: "minimum-number-of-arrows-to-burst-balloons",
    title: "穿上衣服我就不认识你了？来聊聊最长上升子序列",
    url:
      "https://github.com/azl397985856/leetcode/blob/master/selected/serialize.md",
  },

  "maximum-length-of-repeated-subarray": {
    id: 718,
    name: "maximum-length-of-repeated-subarray",
    title: "你的衣服我扒了 - 《最长公共子序列》",
    url: "https://github.com/azl397985856/leetcode/blob/master/selected/LCS.md",
  },
  "longest-common-subsequence": {
    id: 1143,
    name: "longest-common-subsequence",
    title: "你的衣服我扒了 - 《最长公共子序列》",
    url: "https://github.com/azl397985856/leetcode/blob/master/selected/LCS.md",
  },
  "uncrossed-lines": {
    id: 1035,
    name: "uncrossed-lines",
    title: "你的衣服我扒了 - 《最长公共子序列》",
    url: "https://github.com/azl397985856/leetcode/blob/master/selected/LCS.md",
  },
  "maximum-subarray": {
    id: 53,
    name: "maximum-subarray",
    title: "一文看懂《最大子序列和问题》",
    url: "https://github.com/azl397985856/leetcode/blob/master/selected/LSS.md",
  },
};

const in91 = {};
Object.values(db_collection).forEach((problem) => {
  problem.companies.forEach((c) => {
    if (company[c.name] === void 0) company[c.name] = [];
    company[c.name].push(problem.name);
  });
});

export default {
  problems: db_collection,
  // tags,
  company,
  selected,
};

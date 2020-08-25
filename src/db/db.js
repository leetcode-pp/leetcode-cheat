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
};

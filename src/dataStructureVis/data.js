import treeLevel2 from "../db/dataStructureVis/tree-level-2";
import treeLevel3 from "../db/dataStructureVis/tree-level-3";
import treeLevel4 from "../db/dataStructureVis/tree-level-4";
import trigeminal from "../db/dataStructureVis/trigeminal";
import graph1 from "../db/dataStructureVis/graph-1";
import recurTree1 from "../db/dataStructureVis/recur-tree-1.js";
import array1 from "../db/dataStructureVis/array-1.js";
import board1 from "../db/dataStructureVis/board-1.js";
import official from "../db/dataStructureVis/leetcode-official";
import calm from "../db/dataStructureVis/calm";

export const initialDataSource = {
    presets: [
      {
        title: "力扣官方",
        data: official,
        desc: "力扣官方题解主题（持续更新）",
        type: "leetcode-official",
        typeName: "力扣官方",
      },
      {
        title: "calm",
        data: calm,
        desc: "稳重色系（目前只完成了树，后续更新其他数据结构）",
        type: "theme",
        typeName: "色系",
      },
      {
        title: "二层二叉树",
        data: treeLevel2,
        desc: "",
        cover: "",
        type: "tree",
        typeName: "树",
      },
      {
        title: "三层二叉树",
        data: treeLevel3,
        desc: "",
        cover: "",
        type: "tree",
        typeName: "树",
      },
      {
        title: "四层二叉树",
        data: treeLevel4,
        desc: "",
        cover: "",
        type: "tree",
        typeName: "树",
      },
      {
        title: "三叉树",
        data: trigeminal,
        desc: "",
        cover: "",
        type: "tree",
        typeName: "树",
      },
      {
        title: "递归树",
        data: recurTree1,
        desc: "",
        cover: "",
        type: "tree",
        typeName: "树",
      },
      {
        title: "简单数组",
        data: array1,
        desc: "",
        cover: "",
        type: "array",
        typeName: "数组",
      },
      {
        title: "简单二维矩阵",
        data: board1,
        desc: "",
        cover: "",
        type: "board",
        typeName: "二维矩阵（或邻接矩阵）",
      },
      {
        title: "简单图",
        data: graph1,
        desc: "",
        cover: "",
        type: "graph",
        typeName: "图",
      },
    ],
    custom: [],
  };
  
  export  const initialDataSourceEn = {
    presets: [
      {
        title: "LeetCode Official",
        data: official,
        desc: "Official LeetCode solution topics (continuously updated)",
        type: "leetcode-official",
        typeName: "LeetCode Official",
      },
      {
        title: "Calm",
        data: calm,
        desc: "Serene color scheme (currently only completed for trees, more data structures to be updated)",
        type: "theme",
        typeName: "Color Scheme",
      },
      {
        title: "Binary Tree - Level 2",
        data: treeLevel2,
        desc: "",
        cover: "",
        type: "tree",
        typeName: "Tree",
      },
      {
        title: "Binary Tree - Level 3",
        data: treeLevel3,
        desc: "",
        cover: "",
        type: "tree",
        typeName: "Tree",
      },
      {
        title: "Binary Tree - Level 4",
        data: treeLevel4,
        desc: "",
        cover: "",
        type: "tree",
        typeName: "Tree",
      },
      {
        title: "Ternary Tree",
        data: trigeminal,
        desc: "",
        cover: "",
        type: "tree",
        typeName: "Tree",
      },
      {
        title: "Recursive Tree",
        data: recurTree1,
        desc: "",
        cover: "",
        type: "tree",
        typeName: "Tree",
      },
      {
        title: "Simple Array",
        data: array1,
        desc: "",
        cover: "",
        type: "array",
        typeName: "Array",
      },
      {
        title: "Simple 2D Matrix",
        data: board1,
        desc: "",
        cover: "",
        type: "board",
        typeName: "2D Matrix (or Adjacency Matrix)",
      },
      {
        title: "Simple Graph",
        data: graph1,
        desc: "",
        cover: "",
        type: "graph",
        typeName: "Graph",
      },
    ],
    custom: [],
  };
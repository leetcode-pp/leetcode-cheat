import React from "react";
import { Button, Table } from "antd";

import "./index.less";

// | 数据规模 | 算法可接受时间复杂度 |
// | -------- | -------------------- |
// | <= 10    | $O(n!)$              |
// | <=20     | $O(2^n)$             |
// | <=100    | $O(n^4)$             |
// | <=500    | $O(n^3)$             |
// | <=2500   | $O(n^2)$             |
// | <=10^6   | $O(n * logn)$        |
// | <=10^7   | $O(n)$               |
// | <=10^14  | $O(\sqrt{n})$        |
// | -        | $O(logn)$            |

const columns = [
  {
    key: "size",
    dataIndex: "size",
    title: "数据规模",
    align: "center",
  },
  {
    key: "complexity",
    dataIndex: "complexity",
    title: "算法可接受时间复杂度",
    align: "center",
    render: (t) => {
      if (t === "O(sqrt(n))")
        return <img alt="O(sqrt(n))" src={require("../imgs/sqrt.svg")} />;
      return t;
    },
  },
];

const data = [
  {
    size: "<= 10",
    complexity: "O(n!)",
  },
  {
    size: "<= 20",
    complexity: "O(2^n)",
  },
  {
    size: "<= 100",
    complexity: "O(n^4)",
  },
  {
    size: "<= 500",
    complexity: "O(n^3)",
  },
  {
    size: "<= 2500",
    complexity: "O(n^2)",
  },
  {
    size: "<= 10^6",
    complexity: "O(nlogn)",
  },
  {
    size: "<= 10^7",
    complexity: "n",
  },
  {
    size: "<= 10^14",
    complexity: "O(sqrt(n))",
  },
  {
    size: "-",
    complexity: "O(logn)",
  },
];

export default function ComplexityRating() {
  return (
    <div>
      <Button
        type="link"
        href="https://lucifer.ren/blog/2020/12/21/shuati-silu3/"
        target="_blank"
      >
        不懂为什么？点这里
      </Button>

      <div>
        <img
          alt="2^n"
          src="https://tva1.sinaimg.cn/large/0081Kckwly1gm6x8pzqotj30ad03q3ye.jpg"
        />
      </div>

      <Table columns={columns} dataSource={data} />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Input, Button, Select, message, Checkbox, InputNumber } from "antd";
import {
  buildRandomTree,
  serialise_bfs,
  copyToClipboard,
  getRandom,
  getRandomUnique,
} from "./utils";

const { Option } = Select;

/*global chrome*/

// TODO referrence 支持 ， 比如 k 是在数组大小范围内动态的

function isNull(c) {
  return c === "null";
}

function isTree(A) {
  return A.length > 0 && A.some(isNull);
}

function isBinary(c) {
  return c === "1" || c === "0" || c === 1 || c === 0;
}

function isBinaryArray(A) {
  return A.every(isBinary);
}

const zip = (rows) =>
  rows[0].map((_, c) => rows.map((row) => row[c]).join("\r\n"));

// 支持 数组，链表，树。
// 值只支持数字，不支持字符串
// 支持自动识别二值和普通
function handleGenerate({
  input,
  amount = 10,
  lower = 0,
  upper = 10001,
  maxLength = 10,
  isUnique,
  type,
}) {
  // 多行测试用例，parts 就是每一行
  const parts = input.split(" ");
  if (parts.length > 1) {
    return zip(
      parts.map((part) =>
        handleGenerate({
          input: part,
          amount,
          upper,
          maxLength,
          type,
          isUnique,
        })
      )
    );
  }
  const finalType = !["multi", ""].includes(type) ? type : gussType(input);

  if (finalType === "tree") {
    const ans = [];
    for (let i = 0; i < maxLength; i++) {
      const nodes = serialise_bfs(
        buildRandomTree({ lower, amount, upper, isUnique })
      );
      ans.push(nodes);
    }
    return ans;
  } else if (finalType === "array" || finalType === "linked-list") {
    const ans = [];
    const items = input.slice(1, -1).split(",");

    if (isBinaryArray(items)) {
      upper = 1;
      lower = 0;
    }

    for (let i = 0; i < maxLength; i++) {
      let r = [];
      if (isUnique) {
        r = getRandomUnique(lower, upper, amount);
      } else {
        for (let i = 0; i < amount; i++) {
          r.push(getRandom(lower, upper));
        }
      }

      ans.push("[" + r.toString() + "]");
    }
    return ans;
  } else if (finalType === "single") {
    // 单一值
    const ans = [];
    for (let i = 0; i < maxLength; i++) {
      ans.push(getRandom(lower, upper));
    }
    return ans;
  } else {
    return [];
  }
}

function gussType(input) {
  if (!input) return "";
  const parts = input.split(" ");
  if (parts.length > 1) return "multi";
  if (input.length > 1 && input[0] == "[" && input[input.length - 1] == "]") {
    if (input[1] == "[") return "";
    const v = input.slice(1, -1);
    if (isNaN(v[0])) return "";
    const items = v.split(",");
    // 数组，链表或者树
    if (isTree(items)) return "tree";
    if (Array.isArray(items)) {
      if (Array.isArray(items[0])) return "";
      return "array";
    }
  }

  if (isNaN(input)) return "";

  return "single";
}

function t() {
  return new Promise((r) => {
    chrome.tabs.query({ active: true }, function (tabs) {
      var tab = tabs[0];

      chrome.tabs.executeScript(
        tab.id,
        {
          code: 'document.getElementsByTagName("pre")',
        },
        r
      );
    });
  });
}

function getProviedTestCases(pres) {
  const ans = [];
  for (var i = 0; i < pres.length; ++i) {
    if (pres[i].innerText.includes("输入：")) {
      const testcase = pres[i].innerText.match(/输入：(.*)/)[1];
      ans.push(testcase);
    }
  }
  return ans;
}

// desc 是力扣的官方描述，需要转换为标准测试用例
// eg: "nums = [1,2,3,3], quantity = [2]" => "[1,2,3,3]\n[2]"

function normalize(testCase) {
  const parts = testCase.split(", ");
  return parts.map((q) => q.match(/=(.*)$/)[1]).join("\n");
}

export default function TestCase() {
  // [1,2,null]
  const [input, setInput] = useState("");
  const [testCases, setTestCases] = useState([]);
  const [type, setType] = useState("");
  const [isUnique, setIsUnique] = useState(false);

  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(10001);
  const [amount, setAmount] = useState(10);

  useEffect(() => {
    const t = Array.isArray(testCases) && testCases.join("\r\n");
    if (t) {
      if (copyToClipboard(t)) message.success("复制成功");
    }
  }, [testCases]);

  return (
    <>
      <div style={{ display: "none" }}>
        <div>
          测试用例类型：
          <Select value={type} style={{ width: 120 }} onChange={setType}>
            <Option value="array">数组(或链表)</Option>
            <Option value="tree">树</Option>
            <Option value="single">单一值</Option>
            <Option value="multi" disabled>
              多个参数
            </Option>
          </Select>
          <div>选项</div>
          <Checkbox
            style={type === "single" ? { display: "none" } : {}}
            checked={upper - lower + 1 < amount ? false : isUnique}
            disabled={upper - lower + 1 < amount}
            onChange={() => setIsUnique(!isUnique)}
          >
            是否唯一
          </Checkbox>
          数据值范围：
          <InputNumber value={lower} onChange={setLower} /> -
          <InputNumber value={upper} onChange={setUpper} />
          <span style={type === "single" ? { display: "none" } : {}}>
            长度限制：
            <InputNumber value={amount} onChange={setAmount} />
          </span>
        </div>

        <pre>
          {Array.isArray(testCases) && testCases.length == 0
            ? "不支持的数据格式。目前只支持：单个值,数组，链表，树。"
            : testCases.join("\r\n")}
        </pre>

        <Input
          style={{ width: 320, marginRight: 20 }}
          placeholder="粘贴题目默认的测试用例"
          value={input}
          onChange={(e) => {
            const v = e.target.value;
            setInput(v);
            setType(gussType(v));
          }}
        />

        <Button
          type="primary"
          onClick={() => {
            setTestCases(
              handleGenerate({
                input,
                type,
                lower,
                upper,
                amount,
                isUnique: upper - lower + 1 < amount ? false : isUnique,
              })
            );
          }}
        >
          生成十个随机测试用例
        </Button>
      </div>

      <Button
        type="primary"
        onClick={() => {
          t().then((elements) => {
            alert(JSON.stringify(elements));
            const cases = getProviedTestCases(elements);
            const ans = cases.map(normalize).join("\n");
            console.log(cases, ans);
            alert(elements);
            if (ans) {
              if (copyToClipboard(ans)) message.success("复制成功");
            }
          });
        }}
      >
        获取所有测试用例
      </Button>
    </>
  );
}

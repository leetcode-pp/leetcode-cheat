import React, { useState } from "react";
import { Radio, Row, Col, Input, Select, message, Button } from "antd";
import ReactMarkdown from "react-markdown";
import Tex from "@matejmazur/react-katex";
import RemarkMathPlugin from "remark-math";

import { copyToClipboard, isInExtension, getUrlParameter } from "../utils.js";

import "katex/dist/katex.min.css";
import CodeBlock from "../CodeBlock";

const { TextArea } = Input;
const { Option } = Select;

function displayLanguage(language) {
  const m = {
    python: "Python",
    java: "Java",
    cpp: "CPP",
    javascript: "JavaScript",
    go: "Go",
  };
  return m[language] || "Python";
}

function getTemplate({
  title = "",
  link = "",
  desc = "",
  pre = "",
  company = "",
  language = "Python3",
  keyword = "",
  time,
  space,
  isLucifer = false,
}) {
  return `
## 题目地址(${title})

${link}

## 题目描述

\`\`\`
${desc}
\`\`\`

## 前置知识

- ${pre}

## 公司

- ${company}

## 思路

## 关键点

- ${keyword} 

## 代码

- 语言支持：${displayLanguage(language)}

${displayLanguage(language)} Code:

\`\`\`${language}

\`\`\`


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(${time})$
- 空间复杂度：$O(${space})$

${
  isLucifer
    ? `
更多题解可以访问我的 LeetCode 题解仓库：https://github.com/azl397985856/leetcode 。 目前已经 40K star 啦。

关注公众号力扣加加，努力用清晰直白的语言还原解题思路，并且有大量图解，手把手教你识别套路，高效刷题。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfcuzagjalj30p00dwabs.jpg)`
    : ""
}
`;
}
function Template({ onChange, template }) {
  return <TextArea value={template} autoSize onChange={onChange}></TextArea>;
}

function Complexities({ value, onChange }) {
  return (
    <Radio.Group value={value} onChange={onChange}>
      <Radio.Button value="1">O(1)</Radio.Button>
      <Radio.Button value="\\sqrt n">O(\sqrt n)</Radio.Button>
      <Radio.Button value="logn">O(logn)</Radio.Button>
      <Radio.Button value="n">O(n)</Radio.Button>
      <Radio.Button value="nlogn">O(nlogn)</Radio.Button>
      <Radio.Button value="2^n">O(2^n)</Radio.Button>
      <Radio.Button value="n!">O(n!)</Radio.Button>
    </Radio.Group>
  );
}

const MarkdownRender = (props) => {
  const newProps = {
    ...props,
    escapeHtml: false,
    plugins: [RemarkMathPlugin],
    renderers: {
      ...props.renderers,
      inlineMath: ({ value }) => <Tex math={value} />,
      math: ({ value }) => <Tex block math={value} />,
      code: (_props) => <CodeBlock {..._props}></CodeBlock>,
    },
  };
  return <ReactMarkdown {...newProps} />;
};

const formulas = [
  {
    formula: "$sum_{i=1}^{n}{a_i}$",
    name: "求和",
    logo: require("../imgs/formula/sum.svg"),
  },
  {
    formula: "$a\\times b$",
    name: "乘法",
    logo: require("../imgs/formula/times.svg"),
  },
  {
    formula: "$a\\div b$",
    name: "除法",
    logo: require("../imgs/formula/div.svg"),
  },
  {
    formula: "$\\frac{a}{b}$",
    name: "分数",
    logo: require("../imgs/formula/frac.svg"),
  },
  {
    formula: "$a\\approx b$",
    name: "约等于",
    logo: require("../imgs/formula/approx.svg"),
  },
  {
    formula: "$\\sqrt a$",
    name: "根号",
    logo: require("../imgs/formula/sqrt.svg"),
  },
];
const link = getUrlParameter("link");
const title = getUrlParameter("title");

export default function SolutionTemplate() {
  const [language, setLanguage] = useState("python");
  const [time, setTime] = useState("n");
  const [space, setSpace] = useState("n");
  const [template, setTemplate] = useState(
    getTemplate({
      time,
      space,
      language,
      link,
      title,
    })
  );

  return (
    <>
      {!isInExtension() ? (
        <>
          <ul>
            <li>
              后续考虑支持直接根据 LeetCode
              网站内容自动填充题目信息，代码等，无需用户再次手动输入。
            </li>
            <li>后续考虑支持更多主题，以及用户自定义主题功能~</li>
          </ul>
          <div className="line">
            编程语言：
            <Select
              value={language}
              style={{ width: 120 }}
              onChange={(v) => {
                setLanguage(v);
                setTemplate(
                  template
                    .replace(new RegExp(`\`\`\`.+`, "mg"), `\`\`\`${v}`)
                    .replace(
                      new RegExp(`语言支持：.+`, "mg"),
                      `语言支持：${displayLanguage(v)}`
                    )
                    .replace(
                      new RegExp(`.+ Code:`, "mg"),
                      `${displayLanguage(v)} Code:`
                    )
                );
              }}
            >
              <Option value="python">Python</Option>
              <Option value="javascript">JavaScript</Option>
              <Option value="cpp">CPP</Option>
              <Option value="java">Java</Option>
              <Option value="go">Go</Option>
            </Select>
          </div>
          <div className="line">
            常用公式（点击可复制）：
            {formulas.map(({ formula, name, logo }) => {
              return (
                <img
                  onClick={() => {
                    copyToClipboard(formula);
                    message.success({
                      content: "复制成功~",
                    });
                  }}
                  alt={name}
                  style={{ margin: "0 0 0 20px" }}
                  src={logo}
                  className="problem-icon"
                />
              );
            })}
          </div>
          <div className="line">
            时间复杂度：
            <Complexities
              value={time}
              onChange={(e) => {
                const v = e.target.value;
                setTime(v);
                setTemplate(
                  template.replace(
                    new RegExp(`时间复杂度：.+`, "mg"),
                    `时间复杂度：$O(${v})$`
                  )
                );
              }}
            />
          </div>
          <div style={{ margin: "10px 0" }}>
            空间复杂度：
            <Complexities
              value={space}
              onChange={(e) => {
                const v = e.target.value;
                setSpace(v);
                setTemplate(
                  template.replace(
                    new RegExp(`空间复杂度：.+`, "mg"),
                    `空间复杂度：$O(${v})$`
                  )
                );
              }}
            />
          </div>
          <Row>
            <Col span="12">
              <div>
                Markdown:
                <Button
                  style={{ margin: "10px" }}
                  type="primary"
                  onClick={() => {
                    copyToClipboard(template);
                    message.success({
                      content: "复制成功~",
                    });
                  }}
                >
                  点击复制 MarkDown 原文
                </Button>
              </div>
              <Template
                template={template}
                onChange={(e) => setTemplate(e.target.value)}
              />
            </Col>
            <Col span="12">
              <div>预览:</div>
              <MarkdownRender source={template}></MarkdownRender>
            </Col>
          </Row>
        </>
      ) : (
        <Button
          type="link"
          target="_blank"
          href="https://leetcode-pp.github.io/leetcode-cheat/"
        >
          去网站使用
        </Button>
      )}
    </>
  );
}

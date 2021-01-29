import React, { useState, useEffect } from "react";
import {
  Radio,
  Row,
  Col,
  Input,
  Select,
  message,
  Button,
  Checkbox,
} from "antd";
import ReactMarkdown from "react-markdown";
import Tex from "@matejmazur/react-katex";
import RemarkMathPlugin from "remark-math";

import {
  copyToClipboard,
  isInExtension,
  getUrlParameter,
  getStorage,
  setStorage,
  debounce,
  getCloundStorage,
} from "../utils.js";

import "katex/dist/katex.min.css";
import CodeBlock from "../components/CodeBlock";
// import AccessToken from "../components/AccessToken";

const { TextArea } = Input;
const { Option } = Select;

const slogan = `
更多题解可以访问我的 LeetCode 题解仓库：https://github.com/azl397985856/leetcode 。 目前已经 40K star 啦。

关注公众号力扣加加，努力用清晰直白的语言还原解题思路，并且有大量图解，手把手教你识别套路，高效刷题。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfcuzagjalj30p00dwabs.jpg)`;

function displayLanguage(language) {
  const m = {
    python: "Python",
    python3: "Python3",
    java: "Java",
    cpp: "CPP",
    javascript: "JavaScript",
    go: "Go",
    c: "C",
    "c#": "C#",
    ruby: "Ruby",
    swift: "Swift",
    scala: "Scala",
    kotlin: "Kotlin",
    rust: "Rust",
    php: "PHP",
    typescript: "TypeScript",
  };
  return m[language] || "Python3";
}

function getTemplate({
  title = "",
  link = "",
  desc = "",
  pre = "",
  company = "",
  language = "python3",
  code = "",
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

\`\`\`${language === "python3" ? "python" : language}

${code}

\`\`\`


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(${time})$
- 空间复杂度：$O(${space})$

${isLucifer ? slogan : ""}
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

const saveDraft = debounce(
  (v) =>
    setStorage("solution-backup", {
      raw: v,
    }),
  5000
);

const link = getUrlParameter("link") || "";
const title = getUrlParameter("title") || "";
const initialLanguage = getUrlParameter("language")?.toLowerCase() || "python3";

export default function SolutionTemplate() {
  const [language, setLanguage] = useState(initialLanguage);
  const [time, setTime] = useState("n");
  const [space, setSpace] = useState("n");
  const [isLucifer, setIsLucifer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [template, setTemplate] = useState(
    getTemplate({
      link,
      title,
      time,
      space,
      language,
    })
  );
  useEffect(() => {
    getStorage("leetcode-cheatsheet-token")
      .then((res) => res.result.value)
      .then((res) => {
        if (!res.raw) throw new Error("whatever");
        return res;
      })
      .catch(() => ({
        raw: "e574bf60b50d8d2d2db2320ee83aba3cd29cecf2",
      }))
      .then((res) => {
        const t = res.raw;

        getCloundStorage(getUrlParameter("issue_number"), {
          token: t,
        }).then((res) => {
          const { link, title, code, language, desc } = res;
          setLanguage(language?.toLowerCase());
          setTemplate(
            getTemplate({
              desc,
              time,
              space,
              language: language?.toLowerCase(),
              link,
              title,
              code,
            })
          );
        });
      });
  });

  return (
    <>
      {/* <AccessToken
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      /> */}
      {!isInExtension() ? (
        <>
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
              <Option value="python3">Python3</Option>
              <Option value="python">Python</Option>
              <Option value="javascript">JavaScript</Option>
              <Option value="cpp">CPP</Option>
              <Option value="java">Java</Option>
              <Option value="go">Go</Option>
              <Option value="c">C</Option>
              <Option value="c#">C#</Option>
              <Option value="ruby">Ruby</Option>
              <Option value="swift">Swift</Option>
              <Option value="scala">Scala</Option>
              <Option value="kotlin">Kotlin</Option>
              <Option value="rust">Rust</Option>
              <Option value="php">PHP</Option>
              <Option value="typescript">TypeScript</Option>
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
          <div className="line">
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
          <div className="line">
            lucifer 专属：
            <Checkbox
              checked={isLucifer}
              onChange={(e) => {
                const v = e.target.checked;
                setIsLucifer(v);
                if (v) {
                  if (template.includes(slogan)) return;
                  setTemplate(template + slogan);
                } else {
                  if (!template.includes(slogan)) return;
                  setTemplate(template.replace(slogan, ""));
                }
              }}
            >
              是否是 lucifer
            </Checkbox>
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
                <Button
                  style={{ margin: "10px" }}
                  onClick={() => {
                    getStorage("solution-backup")
                      .then((res) => res.result.value)
                      .then((res) => {
                        const raw = res.raw;
                        setTemplate(raw);
                      })
                      .catch(() =>
                        message.error({
                          content: "没有找到任何备份文件",
                        })
                      );
                  }}
                >
                  恢复上次编辑内容
                </Button>
              </div>
              <Template
                template={template}
                onChange={(e) => {
                  saveDraft(e.target.value);
                  setTemplate(e.target.value);
                }}
              />
            </Col>
            <Col span="2"></Col>
            <Col span="10" style={{ marginTop: "20px" }}>
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
          去网站使
        </Button>
      )}
      <ul>
        <li>
          题解每五秒备份一次，如果你不小心刷新了浏览器可以点击下方的恢复按钮还原。由于是覆盖式备份，因此仅会保存最后一次编辑的内容。
        </li>
        {/* <li>
          自动带入功能使用了 Github API，如果题目信息没有自动带入可能是 Github
          API 调用次数限制，大家可以通过
          <Button type="link" onClick={() => setModalVisible(true)}>
            填写 Access Token
          </Button>
          解决(注意此网站和力扣数据是隔离，因此填写 token
          也是独立，互不影响的)。后期考虑搞个服务器给大家存放。
        </li> */}
        <li>目前公式无法预览，原因暂时不明，不过后期会支持。</li>
        <li>后续考虑提供更多题解模板。</li>
        <li>后续考虑支持更多主题，以及用户自定义主题。</li>
      </ul>
    </>
  );
}

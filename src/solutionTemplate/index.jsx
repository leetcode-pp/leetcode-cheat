import React, { PureComponent } from "react";
import {
  Radio,
  Row,
  Col,
  Input,
  Select,
  message,
  Button,
  Checkbox,
  Spin,
} from "antd";

import {
  copyToClipboard,
  isInExtension,
  getUrlParameter,
  getStorage,
  setStorage,
  debounce,
  getCloundStorage,
} from "../utils.js";
import { t, lang } from "../locales";

import MarkdownRender from "../components/MarkdownRender";
// import AccessToken from "../components/AccessToken";

const { TextArea } = Input;
const { Option } = Select;

const slogan = `

> 此题解由 [力扣刷题插件](https://leetcode-pp.github.io/leetcode-cheat/?tab=solution-template) 自动生成。 

力扣的小伙伴可以[关注我](https://leetcode-cn.com/u/fe-lucifer/)，这样就会第一时间收到我的动态啦~

以上就是本文的全部内容了。大家对此有何看法，欢迎给我留言，我有时间都会一一查看回答。更多算法套路可以访问我的 LeetCode 题解仓库：https://github.com/azl397985856/leetcode 。 目前已经 54K star 啦。大家也可以关注我的公众号《力扣加加》带你啃下算法这块硬骨头。

关注公众号力扣加加，努力用清晰直白的语言还原解题思路，并且有大量图解，手把手教你识别套路，高效刷题。

![](https://p.ipic.vip/h9nm77.jpg)`;

const sloganEn = `

> This solution template is generated by the [LeetCode Solution Template](https://leetcode-pp.github.io/leetcode-cheat/?tab=solution-template) plugin. 

LeetCode friends can [follow me](https://leetcode-cn.com/u/fe-lucifer/) to receive my updates in real-time~ 

That's all for the content of this article. If you have any thoughts or comments, feel free to leave a message, and I will check and respond to them when I have time. For more algorithm techniques, you can visit my LeetCode solution repository: https://github.com/azl397985856/leetcode. It has already gained 54K stars. You can also follow my WeChat official account "LeetCode Plus Plus" to tackle the hard bone of algorithms with clear and straightforward explanations, abundant illustrations, and step-by-step guidance.

Follow the WeChat official account "LeetCode Plus Plus" and strive to present the solution approach in a clear and concise language, along with numerous illustrations, to help you recognize patterns and efficiently solve problems.

![](https://p.ipic.vip/h9nm77.jpg)`;

const getSlogan = () => {
  return lang === "en" ? sloganEn : slogan;
};

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
  // 如果不在里面，说明给的就是类似 Java 的直接显示的字符串
  return m[language] || language;
}

function getTemplate({
  title = "",
  link = "",
  desc = "",
  pre = "",
  company = t("app.notYet"),
  language = "python3",
  code = "",
  keyword = "",
  time = "n",
  space = "n",
  isLucifer = false,
}) {
  return `
## ${t("Locale.explanationTemplate.problemAddress")}(${title})

${link}

## ${t("Locale.explanationTemplate.problemDesc")}

${desc}

## ${t("Locale.explanationTemplate.preKnowledge")}

- ${pre}

## ${t("Locale.explanationTemplate.company")}

- ${company}

## ${t("Locale.explanationTemplate.thinking")}

## ${t("Locale.explanationTemplate.keyPoints")}

- ${keyword} 

## ${t("Locale.explanationTemplate.code")}

- ${t("Locale.explanationTemplate.languageSupport")}：${displayLanguage(
    language
  )}

${displayLanguage(language)} Code:

\`\`\`${
    language.toLocaleLowerCase() === "python3"
      ? "python"
      : language.toLocaleLowerCase()
  }

${code}

\`\`\`


**${t("Locale.explanationTemplate.complexityAnalysis")}**

${t("Locale.explanationTemplate.complexityDeclare")}

- ${t("Locale.explanationTemplate.timeComplexity")}：$O(${time})$
- ${t("Locale.explanationTemplate.spaceComplexity")}：$O(${space})$

${isLucifer ? getSlogan() : ""}
`;
}
function Template({ onChange, template }) {
  return (
    <TextArea
      ref={textAreaRef}
      value={template}
      autoSize
      onChange={onChange}
    ></TextArea>
  );
}

function Complexities({ value, onChange }) {
  return (
    <Radio.Group value={value} onChange={onChange}>
      <Radio.Button value="1">O(1)</Radio.Button>
      <Radio.Button value="\\sqrt n">O(\sqrt n)</Radio.Button>
      <Radio.Button value="logn">O(logn)</Radio.Button>
      <Radio.Button value="n">O(n)</Radio.Button>
      <Radio.Button value="nlogn">O(nlogn)</Radio.Button>
      <Radio.Button value="n^2">O(n^2)</Radio.Button>
      <Radio.Button value="2^n">O(2^n)</Radio.Button>
      <Radio.Button value="n!">O(n!)</Radio.Button>
    </Radio.Group>
  );
}

const getFormulas = (lang) => [
  {
    formula: "$sum_{i=1}^{n}{a_i}$",
    name: lang === "zh" ? "求和" : "sum",
    logo: require("../imgs/formula/sum.svg"),
  },
  {
    formula: "$a\\times b$",
    name: lang === "zh" ? "乘法" : "times",
    logo: require("../imgs/formula/times.svg"),
  },
  {
    formula: "$a\\div b$",
    name: lang === "zh" ? "除法" : "div",
    logo: require("../imgs/formula/div.svg"),
  },
  {
    formula: "$\\frac{a}{b}$",
    name: lang === "zh" ? "分数" : "frac",

    logo: require("../imgs/formula/frac.svg"),
  },
  {
    formula: "$a\\approx b$",
    name: lang === "zh" ? "约等于" : "approx",
    logo: require("../imgs/formula/approx.svg"),
  },
  {
    formula: "$\\sqrt a$",
    name: lang === "zh" ? "根号" : "sqrt",
    logo: require("../imgs/formula/sqrt.svg"),
  },
  {
    formula: String.raw`
$$
  negative[i]=\left\{
  \begin{aligned}
  negative[i-1] + 1 &  & negative[i-1] > 0 \\
  0 & & negative[i-1] = 0 \\
  \end{aligned}
  \right.
$$
    `,
    name: lang === "zh" ? "动态规划选择方程" : "Dynamic programming selection equation",
    logo: require("../imgs/formula/choice.svg"),
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
const textAreaRef = React.createRef();
export default class SolutionTemplate extends PureComponent {
  constructor(props) {
    super(props);
    // const [language, setLanguage] = useState(initialLanguage);
    // const [time, setTime] = useState("n");
    // const [space, setSpace] = useState("n");
    // const [isLucifer, setIsLucifer] = useState(false);
    // // const [modalVisible, setModalVisible] = useState(false);
    // const [template, setTemplate] = useState(
    //   getTemplate({
    //     link,
    //     title,
    //     time,
    //     space,
    //     language,
    //   })
    // );
    this.state = {
      language: initialLanguage,
      time: "n",
      space: "n",
      isLucifer: false,
      template: "",
      isloading: false,
    };
    this.setLanguage = (v) =>
      this.setState({
        language: v,
      });
    this.setTime = (v) =>
      this.setState({
        time: v,
      });
    this.setSpace = (v) =>
      this.setState({
        space: v,
      });
    this.setIsLucifer = (v) =>
      this.setState({
        isLucifer: v,
      });
    this.setTemplate = (v) => {
      this.setState({
        template: v,
      });
      // textAreaRef.current.value = v;
    };
  }

  componentDidMount() {
    this.setTemplate(
      getTemplate({
        language: initialLanguage,
        link,
        title,
      })
    );

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
        if (getUrlParameter("issue_number")) {
          this.setState({
            isloading: true,
          });
          getCloundStorage(getUrlParameter("issue_number"), {
            token: t,
          })
            .then((res) => {
              const { link, title, code, language, desc } = res;

              this.setLanguage(language);
              this.setTemplate(
                getTemplate({
                  desc,
                  language,
                  link,
                  title,
                  code,
                })
              );
              this.setState({
                isloading: false,
              });
            })
            .catch(() =>
              this.setState({
                isloading: false,
              })
            );
        }
      });
  }
  render() {
    const { language, time, space, isLucifer, template, isloading } =
      this.state;
    return (
      <>
        {/* <AccessToken
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      /> */}
        <Button
          type="link"
          href="https://mp.weixin.qq.com/s/mcRFKVWXKmlXaBow6TIwug"
        >
          {t("Locale.explanationTemplate.howToUse")}
        </Button>
        {!isInExtension() ? (
          <>
            <div className="line">
              {t("Locale.explanationTemplate.programmingLanguage")}：
              <Select
                value={language}
                style={{ width: 120 }}
                onChange={(v) => {
                  this.setLanguage(v);
                  this.setTemplate(
                    template
                      .replace(new RegExp("```.+", "mg"), `\`\`\`${v}`)
                      .replace(
                        new RegExp(
                          `${t(
                            "Locale.explanationTemplate.languageSupport.+"
                          )}：.+`,
                          "mg"
                        ),
                        `${t(
                          "Locale.explanationTemplate.languageSupport.+"
                        )}：${displayLanguage(v)}`
                      )
                      .replace(
                        new RegExp(".+ Code:", "mg"),
                        `${displayLanguage(v)} Code:`
                      )
                  );
                }}
              >
                <Option value="Python3">Python3</Option>
                <Option value="Python">Python</Option>
                <Option value="JavaScript">JavaScript</Option>
                <Option value="C++">CPP</Option>
                <Option value="Java">Java</Option>
                <Option value="GO">Go</Option>
                <Option value="C">C</Option>
                <Option value="C#">C#</Option>
                <Option value="Ruby">Ruby</Option>
                <Option value="Swift">Swift</Option>
                <Option value="Scala">Scala</Option>
                <Option value="Kotlin">Kotlin</Option>
                <Option value="Rust">Rust</Option>
                <Option value="PHP">PHP</Option>
                <Option value="TypeScript">TypeScript</Option>
              </Select>
            </div>
            <div className="line">
              {t("Locale.explanationTemplate.commonFormulas")}
              {getFormulas(lang).map(({ formula, name, logo }) => {
                return (
                  <img
                    onClick={() => {
                      copyToClipboard(formula);
                      message.success({
                        content: t("app.copySuccess"),
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
              {t("Locale.explanationTemplate.timeComplexity")}：
              <Complexities
                value={time}
                onChange={(e) => {
                  const v = e.target.value;
                  this.setTime(v);
                  this.setTemplate(
                    template.replace(
                      new RegExp(
                        `${t("Locale.explanationTemplate.timeComplexity")}：.+`,
                        "mg"
                      ),
                      `${t(
                        "Locale.explanationTemplate.timeComplexity"
                      )}：$O(${v})$`
                    )
                  );
                }}
              />
            </div>
            <div className="line">
              {t("Locale.explanationTemplate.spaceComplexity")}：
              <Complexities
                value={space}
                onChange={(e) => {
                  const v = e.target.value;
                  this.setSpace(v);
                  this.setTemplate(
                    template.replace(
                      new RegExp(
                        `${t(
                          "Locale.explanationTemplate.spaceComplexity"
                        )}：.+`,
                        "mg"
                      ),
                      `${t(
                        "Locale.explanationTemplate.spaceComplexity"
                      )}：$O(${v})$`
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
                  this.setIsLucifer(v);
                  if (v) {
                    if (template.includes(getSlogan())) return;
                    this.setTemplate(template + getSlogan());
                  } else {
                    if (!template.includes(getSlogan())) return;
                    this.setTemplate(template.replace(getSlogan(), ""));
                  }
                }}
              >
                is lucifer
              </Checkbox>
            </div>

            <Spin spinning={isloading} delay={300}>
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
                          content: t("app.copySuccess"),
                        });
                      }}
                    >
                      {t("app.copyMdOrigin")}
                    </Button>
                    <Button
                      style={{ margin: "10px" }}
                      onClick={() => {
                        getStorage("solution-backup")
                          .then((res) => res.result.value)
                          .then((res) => {
                            const raw = res.raw;
                            this.setTemplate(raw);
                          })
                          .catch(() =>
                            message.error({
                              content: t("Locale.explanationTemplate.noBackup"),
                            })
                          );
                      }}
                    >
                      {t("Locale.explanationTemplate.restore")}
                    </Button>
                  </div>
                  <Template
                    template={template}
                    onChange={(e) => {
                      saveDraft(e.target.value);
                      this.setTemplate(e.target.value);
                    }}
                  />
                </Col>
                <Col span="1"></Col>
                <Col span="11" style={{ marginTop: "20px" }}>
                  <div>{t("app.preview")}:</div>
                  <MarkdownRender source={template}></MarkdownRender>
                </Col>
              </Row>{" "}
            </Spin>
          </>
        ) : (
          <Button
            type="link"
            target="_blank"
            href="https://leetcode-pp.github.io/leetcode-cheat/"
          >
            {t("Locale.explanationTemplate.goToTheWebsiteToUse")}
          </Button>
        )}
        <ul>
          <li>{t("Locale.explanationTemplate.backupTips")}</li>
          {/* <li>
          自动带入功能使用了 Github API，如果题目信息没有自动带入可能是 Github
          API 调用次数限制，大家可以通过
          <Button type="link" onClick={() => setModalVisible(true)}>
            填写 Access Token
          </Button>
          解决(注意此网站和力扣数据是隔离，因此填写 token
          也是独立，互不影响的)。后期考虑搞个服务器给大家存放。
        </li> */}
          <li>{t("Locale.explanationTemplate.afterUpdateTemplateTips")}</li>
          <li>{t("Locale.explanationTemplate.afterUpdateThemeTips")}</li>
        </ul>
      </>
    );
  }
}

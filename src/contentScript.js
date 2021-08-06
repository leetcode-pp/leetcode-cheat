// import "./content.css";
// import { message } from "antd";
// import React from "react";
// import ReactDOM from "react-dom";
// import { Menu, Dropdown, Button } from "antd";
// import { DownOutlined, UserOutlined } from "@ant-design/icons";
import {
  copyToClipboard,
  bjwd,
  getStorage,
  setCloundStorage,
  addStyle,
} from "./utils";
import zenAble from "./zen/zenMode";

// WTF!  ant message didn't go well with chrome extension?
const message = {
  success({ content }) {
    //
  },
  warn({ content }) {
    window.alert(content);
  },
  loading(content) {
    //
    return () => null;
  },
};

// import AccessToken from "./components/AccessToken";

// class SolutionButton extends PureComponent {
//   static propTypes = {};

//   static defaultProps = {};
//   constructor() {
//     super();
//     this.state = {
//       modalVisible: false,
//     };
//   }

//   render() {
//     return (
//       <>
//         <AccessToken
//           visible={this.state.modalVisible}
//           onOk={() =>
//             this.setState({
//               modalVisible: false,
//             })
//           }
//           onCancel={() =>
//             this.setState({
//               modalVisible: false,
//             })
//           }
//         />
//         <Dropdown
//           style={{ marginLeft: "10px" }}
//           type="link"
//           onClick={() => {
//             //
//           }}
//           overlay={
//             <Menu onClick={() => this.setState({ modalVisible: true })}>
//               <Menu.Item key="1">填入 access token</Menu.Item>
//             </Menu>
//           }
//         >
//           <Button>写题解</Button>
//         </Dropdown>
//       </>
//     );
//   }
// }

// if (testCase[i] === '"') {
//   while (i < testCase.length && testCase[i] !== '"') {
//     stack.push(testCase[i]);
//   }
//   stack.push("\n");
// } else

// testcase eg: `bottom = "BCD", allowed = ["BCG", "CDE", "GEA", "FFF"], c = [1,2,3], d = 2`
function normalize(testCase, includeArray = true) {
  testCase = testCase.trim().replace(/\n/g, "").replace("&nbsp;", "");

  // 单一参数
  // console.log(testCase);
  if (!testCase.includes("=")) {
    // 数组直接返回
    // eslint-disable-next-line
    if (testCase.includes("[") || testCase.includes('"')) {
      return testCase;
    } else {
      // 输入: 3, 2, 0, 0
      // 输入: 0.0625

      const parts = testCase.split(",");
      if (parts.length === 0) return parts.join("");
      return parts.join("\n");
    }
  }
  let stack = [];
  let i = 0;
  while (i < testCase.length) {
    while (i < testCase.length && testCase[i] !== "=") {
      i += 1;
    }
    // skip =
    i += 1;

    while (i < testCase.length && testCase[i] !== "[" && testCase[i] !== ",") {
      stack.push(testCase[i]);
      i += 1;
    }
    if (testCase[i] === ",") {
      // skip ,
      i += 1;
      stack.push("\n");
    } else if (includeArray) {
      // 解析为数组
      // cnt 左括号[ 与 右括号] 个数的差值
      let cnt = 0;
      while (i < testCase.length) {
        stack.push(testCase[i]);
        cnt += testCase[i] === "[";
        cnt -= testCase[i] === "]";
        i += 1;
        if (cnt === 0) {
          if (i !== testCase.length) {
            stack.push("\n");
          }

          break;
        }
      }
    } else {
      while (i < testCase.length) {
        stack.push(testCase[i]);
        i += 1;
      }
    }
  }
  const ans = stack.join("");
  if (includeArray && ans[ans.length - 1] !== testCase[testCase.length - 1]) {
    return normalize(testCase, false);
  }
  return stack.join("");
}

function extractTestCase(text, prefix) {
  const possiblePrefixs = [
    "输出",
    "返回",
    "Output",
    "output",
    "Return",
    "return",
    "",
  ];
  for (let tag of possiblePrefixs) {
    const testCase = text.match(new RegExp(`${prefix}(.*)${tag}`, "s"));
    if (testCase && testCase.length > 1) {
      return testCase;
    }
  }
  return [];
}

function getProviedTestCases(includeArray = true) {
  const possibleTags = ["pre", "p"];
  const possiblePrefixs = ["输入：", "输入:", "Input:", "input:"];
  const ans = [];
  for (let tag of possibleTags) {
    const pres = document.querySelectorAll(tag);

    for (let prefix of possiblePrefixs) {
      for (var i = 0; i < pres.length; ++i) {
        if (pres[i].innerText.includes(prefix)) {
          const testcase = extractTestCase(pres[i].innerText, prefix);
          if (!testcase || testcase.length <= 1) {
            bjwd();
            return [];
          }
          ans.push(normalize(testcase[1], includeArray));
        }
      }
      if (ans.length > 0) return ans;
    }
  }
  return ans;
}
// const menu = (
//   <Menu onClick={() => handleTestCaseClick(false)}>
//     <Menu.Item key="1" icon={<UserOutlined />}>
//       测试用例不包含数组选这个
//     </Menu.Item>
//   </Menu>
// );

// function handleTestCaseClick(includeArray) {
//   const cases = getProviedTestCases(includeArray);
//   if (cases.filter(Boolean).length === 0) return bjwd();
//   copyToClipboard(cases.join("\n"));
//   message.success({
//     content: "复制成功~",
//   });
// }
function insertButton() {
  const buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; ++i) {
    if (buttons[i].innerText.includes("执行代码")) {
      // const container = document.createElement("div");

      // buttons[i].parentElement.prepend(container);
      // ReactDOM.render(
      //   <Dropdown overlay={menu} style={{ marginLeft: "10px" }}>
      //     <Button onClick={() => handleTestCaseClick(true)}>
      //       复制所有内置用例 <DownOutlined />
      //     </Button>
      //   </Dropdown>,
      //   container
      // );

      // const writeSolutionButton = document.createElement("div");
      const copyButton = buttons[i].cloneNode(true);
      copyButton.innerText = "复制所有内置用例";
      copyButton.style["margin-left"] = "10px";
      copyButton.onclick = () => {
        const cases = getProviedTestCases();
        if (cases.filter(Boolean).length === 0) return bjwd();
        copyToClipboard(cases.join("\n"));
        message.success({
          content: "复制成功~",
        });
      };
      buttons[i].parentElement.prepend(copyButton);
      const writeSolutionButton = document.createElement("a");
      writeSolutionButton.innerText = "去写题解";
      writeSolutionButton.style["margin-right"] = "20px";
      writeSolutionButton.style["line-height"] = "32px";

      writeSolutionButton.onclick = () => {
        // d: "<a href="/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/">1579. 保证图可完全遍历</a>"

        const ele = document.querySelector(`[data-cypress="QuestionTitle"]`);

        if (!ele) {
          return message.warn({
            content: "获取题目描述失败，请先切换到题目描述标签",
          });
        }
        const d = ele.innerHTML;
        const title = d.match(/(\d+.+)(?=<)/)[1];
        const link = window.location.origin + d.match(/href="(.*?)"/)[1];
        const language = document.querySelector("#lang-select").innerText;
        // let code = document.querySelector(
        //   ".monaco-scrollable-element,.editor-scrollable"
        // ).innerText;
        const code = window?.monaco?.editor?.getModels()[0]?.getValue();

        const desc = document.querySelector("#question-detail-main-tabs")
          ?.children[1]?.children[0]?.children[1]?.innerText;
        if (!desc) {
          return message.warn({
            content: "获取题目描述失败，请先切换到题目描述标签",
          });
        }
        const hide = message.loading("正在存储题目信息，请稍后~", 0);
        writeSolutionButton.setAttribute("disabled", true);
        // Dismiss manually and asynchronously
        setTimeout(() => {
          hide();
          writeSolutionButton.removeAttribute("disabled");
        }, 30000); // 超时 30s 都没好，那就别转了
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
            setCloundStorage(
              {
                title,
                link,
                language,
                code,
                desc,
              },

              {
                token: t,
              }
            )
              .then((res) => {
                hide();
                writeSolutionButton.removeAttribute("disabled");
                if (res.id) {
                  window.open(
                    `https://leetcode-pp.github.io/leetcode-cheat/?issue_number=${res.id}&tab=solution-template`
                  );
                } else {
                  message.warn({
                    content:
                      "使用 Github API 失败，已为您切换为普通模式，普通模式仅可自动带入题目名称，题目地址以及题解语言。",
                  });
                  setTimeout(() => {
                    window.open(
                      `https://leetcode-pp.github.io/leetcode-cheat/?title=${title}&link=${link}&language=${language}&tab=solution-template`
                    );
                  }, 2000);
                }
              })
              .catch(() => {
                hide();
                writeSolutionButton.removeAttribute("disabled");
              });
          });
      };

      // ReactDOM.render(<SolutionButton />, writeSolutionButton);

      buttons[i].parentElement.prepend(writeSolutionButton);
      // ele.appendChild(writeSolutionButton);
      return true;
    }
  }
  return false;
}
let inserted = false;
let retried = 0;
const MAX_TRY = 10;

// 去除智能提示
// addStyle(`
// .monaco-editor .editor-widget {
//   display: none !important;
//   visibility: hidden !important;
// }
// `);
const timerId = setInterval(() => {
  if (inserted) return clearInterval(timerId);
  if (retried > MAX_TRY) {
    clearInterval(timerId);
    return console.error("初始化 chrome 插件 content script 失败");
  }
  if (insertButton()) {
    window.location.title = "";
    inserted = true;
    // 可进入禅定模式
    zenAble();
  }
  retried++;
}, 1000);

// class Main extends React.Component {
//   render() {
//     return (
//       <div className={"my-extension"}>
//         <h1 onClick={t}>Hello world - My first Extension</h1>
//       </div>
//     );
//   }
// }

// const app = document.createElement("div");
// app.id = "my-extension-root";
// document.body.appendChild(app);

// ReactDOM.render(<Main />, app);

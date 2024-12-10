// import "./content.css";
// import { message } from "antd";
// import React from "react";
// import ReactDOM from "react-dom";
// import { Menu, Dropdown, Button } from "antd";
// import { DownOutlined, UserOutlined } from "@ant-design/icons";
import {
  // bjwd,
  getStorage,
  setCloundStorage,
  // addStyle,
} from "./utils";
// import zenAble from "./zen/zenMode";
import hideFailCases from "./submission/hideFailCases";
import { t as tt } from "./locales";
let documentLang = document.documentElement.lang;
const t = (keypath, slotText) => tt(keypath, slotText, documentLang);

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
// function normalize(testCase, includeArray = true) {
//   testCase = testCase.trim().replace(/\n/g, "").replace("&nbsp;", "");

//   // 单一参数
//   // console.log(testCase);
//   if (!testCase.includes("=")) {
//     // 数组直接返回
//     // eslint-disable-next-line
//     if (testCase.includes("[") || testCase.includes('"')) {
//       return testCase;
//     } else {
//       // 输入: 3, 2, 0, 0
//       // 输入: 0.0625

//       const parts = testCase.split(",");
//       if (parts.length === 0) return parts.join("");
//       return parts.join("\n");
//     }
//   }
//   let stack = [];
//   let i = 0;
//   while (i < testCase.length) {
//     while (i < testCase.length && testCase[i] !== "=") {
//       i += 1;
//     }
//     // skip =
//     i += 1;

//     while (i < testCase.length && testCase[i] !== "[" && testCase[i] !== ",") {
//       stack.push(testCase[i]);
//       i += 1;
//     }
//     if (testCase[i] === ",") {
//       // skip ,
//       i += 1;
//       stack.push("\n");
//     } else if (includeArray) {
//       // 解析为数组
//       // cnt 左括号[ 与 右括号] 个数的差值
//       let cnt = 0;
//       while (i < testCase.length) {
//         stack.push(testCase[i]);
//         cnt += testCase[i] === "[";
//         cnt -= testCase[i] === "]";
//         i += 1;
//         if (cnt === 0) {
//           if (i !== testCase.length) {
//             stack.push("\n");
//           }

//           break;
//         }
//       }
//     } else {
//       while (i < testCase.length) {
//         stack.push(testCase[i]);
//         i += 1;
//       }
//     }
//   }
//   const ans = stack.join("");
//   if (includeArray && ans[ans.length - 1] !== testCase[testCase.length - 1]) {
//     return normalize(testCase, false);
//   }
//   return stack.join("");
// }

// function extractTestCase(text, prefix) {
//   const possiblePrefixs = [
//     "输出",
//     "返回",
//     "Output",
//     "output",
//     "Return",
//     "return",
//     "",
//   ];
//   for (let tag of possiblePrefixs) {
//     const testCase = text.match(new RegExp(`${prefix}(.*)${tag}`, "s"));
//     if (testCase && testCase.length > 1) {
//       return testCase;
//     }
//   }
//   return [];
// }

// function getProviedTestCases(includeArray = true) {
//   const possibleTags = ["pre", "p"];
//   const possiblePrefixs = ["输入：", "输入:", "Input:", "input:"];
//   const ans = [];
//   for (let tag of possibleTags) {
//     const pres = document.querySelectorAll(tag);

//     for (let prefix of possiblePrefixs) {
//       for (var i = 0; i < pres.length; ++i) {
//         if (pres[i].innerText.includes(prefix)) {
//           const testcase = extractTestCase(pres[i].innerText, prefix);
//           if (!testcase || testcase.length <= 1) {
//             bjwd();
//             return [];
//           }
//           ans.push(normalize(testcase[1], includeArray));
//         }
//       }
//       if (ans.length > 0) return ans;
//     }
//   }
//   return ans;
// }
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

function goToVisDebug() {
  const language = getCodeLanguage();
  const supportedLanguages = ["Python3", "JavaScript", "C++"];
  const languageMap = {
    Python3: "3",
    Java: "java",
    JavaScript: "js",
    "C++": "cpp_g%2B%2B9.3.0",
    C: "c_gcc9.3.0",
  };
  const prefixMap = {
    Python3: `
  # ${t("app.linkedListCommnet")}
  # eg：head = ListNodes([4,2,1,3]).head
  # class ListNodes:
  #     def __init__(self, vals)->ListNode:
  #         cur = dummy = ListNode() 
  #         for val in vals:
  #             nxt = ListNode(val)
  #             cur.next = nxt
  #             cur = nxt
  #         self.head = dummy.next
`,
    JavaScript: `
// ${t("app.linkedListCommnet")}
// eg：head = ListNodes([4,2,1,3]).head
//   function ListNodes(vals) {
//       let cur = new ListNode()
//       let dummy = cur
//       for(const val of vals) {
//           const nxt = new ListNode(val)
//           cur.next = nxt
//           cur = nxt
//       }
//       return dummy.next
//   }    
`,
    java: "",
    "C++": `
#include <algorithm>
#include <bitset>
#include <complex>
#include <deque>
#include <exception>
#include <fstream>
#include <functional>
#include <iomanip>
#include <ios>
#include <iosfwd>
#include <iostream>
#include <istream>
#include <iterator>
#include <limits>
#include <list>
#include <locale>
#include <map>
#include <memory>
#include <new>
#include <numeric>
#include <ostream>
#include <queue>
#include <set>
#include <sstream>
#include <stack>
#include <stdexcept>
#include <streambuf>
#include <string>
#include <typeinfo>
#include <utility>
#include <valarray>
#include <vector>

#if __cplusplus >= 201103L
#include <array>
#include <atomic>
#include <chrono>
#include <condition_variable>
#include <forward_list>
#include <future>
#include <initializer_list>
#include <mutex>
#include <random>
#include <ratio>
#include <regex>
#include <scoped_allocator>
#include <system_error>
#include <thread>
#include <tuple>
#include <typeindex>
#include <type_traits>
#include <unordered_map>
#include <unordered_set>
#endif

using namespace std;    
`,
    C: "",
  };
  const suffixMap = {
    Python3: `
# ${t("app.visualDebugComment")}
Solution().xxx(yyy)
`,
    JavaScript: `
// ${t("app.visualDebugComment")}
xxx(yyy)
`,
    "C++": `
int main()
{
  Solution s;
  // ${t("app.visualDebugComment")}
  s.xxx(yyy);
  return 0;
}
`,
    C: "",
    Java: "",
  };
  if (!supportedLanguages.includes(language))
    return message.warn({
      content: `${t("app.visualDebugSupport")} ${supportedLanguages.join(",")}`,
    });
  const code =
    (prefixMap[language] || "") +
    window?.monaco?.editor?.getModels()[0]?.getValue() +
    (suffixMap[language] || "");
  window.open(
    `https://pythontutor.com/visualize.html#code=${encodeURIComponent(
      code
    )}&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=${
      languageMap[language]
    }&rawInputLstJSON=%5B%5D&textReferences=false`
  );
}

function getCodeLanguage() {
  const langMap = {
    cpp: "C++",
    python3: "Python3",
    java: "Java",
    c: "C",
    javascript: "JavaScript",
  };
  const l =
    window?.monaco?.editor?.getModels()[0]?.getLanguageId() ||
    localStorage.getItem("global_lang");

  return langMap[l.toLowerCase()];
}
function insertButton() {
  const customBtnStyle = {
    "line-height": "1",
    cursor: "pointer",
    "vertical-align": "text-top",
  };
  const buttons = document.querySelectorAll("button");

  for (var i = 0; i < buttons.length; ++i) {
    if (buttons[i].innerText.includes(t("Locale.app.run"))) {
      
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
      // const copyButton = buttons[i].cloneNode(true);
      // copyButton.innerText = "复制用例";
      // copyButton.style["margin-left"] = "10px";
      // copyButton.onclick = () => {
      //   const cases = getProviedTestCases();
      //   if (cases.filter(Boolean).length === 0) return bjwd();
      //   copyToClipboard(cases.join("\n"));
      //   message.success({
      //     content: "复制成功~",
      //   });
      // };
      // buttons[i].parentElement.prepend(copyButton);
      const writeSolutionButton = document.createElement("a");
      writeSolutionButton.innerText = t("Locale.app.wirteSolution");
      Object.assign(writeSolutionButton.style, customBtnStyle);
      writeSolutionButton.className = buttons[i].className;

      writeSolutionButton.onclick = () => {
        console.log("writeSolutionButton");
        // d: "<a href="/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/">1579. 保证图可完全遍历</a>"

        const desc = document.querySelector(
          '[data-track-load="description_content"]'
        ).innerHTML;

        if (!desc) {
          return message.warn({
            content: t("app.getProblemError"),
          });
        }

        const title = document.title;
        const link = window.location.href;
        const language = getCodeLanguage();
        // let code = document.querySelector(
        //   ".monaco-scrollable-element,.editor-scrollable"
        // ).innerText;
        const code = window?.monaco?.editor?.getModels()[0]?.getValue();

        // const desc = document.querySelector("#question-detail-main-tabs")?.children[1]?.children[0]?.children[1]?.innerText;

        const hide = message.loading(t("app.savingProblem"), 0);

        console.log("writeSolutionButton", title, link, language, code, desc);
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
            const token = res.raw;
            console.log("getStorage", token);
            setCloundStorage(
              {
                title,
                link,
                language,
                code,
                desc,
              },

              {
                token: token,
              }
            )
              .then((res) => {
                console.log("setCloundStorage", res);
                hide();
                writeSolutionButton.removeAttribute("disabled");
                if (res.id) {
                  window.open(
                    `https://leetcode-pp.github.io/leetcode-cheat/?issue_number=${res.id}&tab=solution-template`
                  );
                } else {
                  message.warn({
                    content: t("app.githubAPIError"),
                  });
                  setTimeout(() => {
                    const url = `https://leetcode-pp.github.io/leetcode-cheat/?title=${title}&link=${link}&language=${language}&tab=solution-template`;
                    console.log("window.open", url);
                    window.open(url);
                  }, 1000);
                }
              })
              .catch(() => {
                console.log("setCloundStorage", "catch");
                hide();
                writeSolutionButton.removeAttribute("disabled");
                message.warn({
                  content: t("app.githubAPIError"),
                });
                setTimeout(() => {
                  window.open(
                    `https://leetcode-pp.github.io/leetcode-cheat/?title=${title}&link=${link}&language=${language}&tab=solution-template`
                  );
                }, 1000);
              });
          });
      };

      // ReactDOM.render(<SolutionButton />, writeSolutionButton);
      // ele.appendChild(writeSolutionButton);

      const visDebugButton = document.createElement("a");
      visDebugButton.innerText = t("Locale.app.visualizationDebug");
      Object.assign(visDebugButton.style, customBtnStyle);
      visDebugButton.className = buttons[i].className;

      visDebugButton.onclick = goToVisDebug;
      if (documentLang === "en") {
        buttons[i].parentElement.prepend(visDebugButton);
        buttons[i].parentElement.prepend(writeSolutionButton);
      } else {
        buttons[i].parentElement.parentElement.prepend(writeSolutionButton);

        buttons[i].parentElement.parentElement.prepend(visDebugButton);
      }
      inserted = true;
    } else if (buttons[i].innerText.includes(t("app.submit"))) {
      const click = buttons[i].onclick;
      const originalFn = buttons[i];
      buttons[i].onclick = (...args) => {
        click.call(originalFn, ...args);

        // try to hide failed test cases
        let tries = 0;
        const hideFailCasesJob = setInterval(() => {
          if (hideFailCases()) {
            clearInterval(hideFailCasesJob);
          }
          // 300 times means 30s
          if (tries > 300) return;
          tries++;
        }, 100);
      };

      submitProxied = true;
    }
  }
  return false;
}
let inserted = false;
let retried = 0;
let submitProxied = false;
const MAX_TRY = 10;

// 去除智能提示
// addStyle(`
// .monaco-editor .editor-widget {
//   display: none !important;
//   visibility: hidden !important;
// }
// `);

const timerId = setInterval(() => {
  if (inserted && submitProxied) return clearInterval(timerId);
  if (retried > MAX_TRY) {
    clearInterval(timerId);
    return console.error(t("app.initializeContentScriptFailed"));
  }

  // 防止 insertButton 在本插件应用中执行，会匹配到题目中包含 "Run" 的情况,例如：“1480. Running Sum of 1d Array”
  if (document.title.includes("力扣加加")) return;

  insertButton();

  // if (inserted && submitProxied) {
  //   window.location.title = "";
  //   // 可进入禅定模式
  //   zenAble();
  // }
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

// history.pushState = (f => function pushState() {
//   var ret = f.apply(this, arguments);
//   window.dispatchEvent(new Event('pushstate'));
//   window.dispatchEvent(new Event('locationchange'));
//   return ret;
// })(history.pushState);

// history.replaceState = (f => function replaceState() {
//   var ret = f.apply(this, arguments);
//   window.dispatchEvent(new Event('replacestate'));
//   window.dispatchEvent(new Event('locationchange'));
//   return ret;
// })(history.replaceState);

// window.addEventListener('popstate', () => {
//   window.dispatchEvent(new Event('locationchange'))
// });

// window.addEventListener('locationchange', function (e) {
//   const url = e.target.location.href;
//   console.log('hideFailCases')
//   if (url.endsWith("submissions/")) {

//   }
// })

import { message } from "antd";
// import "./content.css";
import { copyToClipboard, 不讲武德 } from "./utils";
import zenAble from "./zen/zenMode";

// if (testCase[i] === '"') {
//   while (i < testCase.length && testCase[i] !== '"') {
//     stack.push(testCase[i]);
//   }
//   stack.push("\n");
// } else

// testcase eg: `bottom = "BCD", allowed = ["BCG", "CDE", "GEA", "FFF"], c = [1,2,3], d = 2`
function normalize(testCase) {
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
    } else {
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
    }
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

function getProviedTestCases() {
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
            不讲武德();
            return [];
          }
          ans.push(normalize(testcase[1]));
        }
      }
      if (ans.length > 0) return ans;
    }
  }
  return ans;
}

function insertButton() {
  const buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; ++i) {
    if (buttons[i].innerText.includes("执行代码")) {
      const copyButton = buttons[i].cloneNode(true);
      copyButton.innerText = "复制所有内置用例";
      copyButton.style["margin-left"] = "10px";
      copyButton.onclick = () => {
        const cases = getProviedTestCases();
        if (cases.filter(Boolean).length === 0) return 不讲武德();
        copyToClipboard(cases.join("\n"));
        message.success({
          content: "复制成功~",
        });
      };
      buttons[i].parentElement.prepend(copyButton);
      const writeSolutionButton = buttons[i].cloneNode(true);
      writeSolutionButton.innerText = "写题解";
      writeSolutionButton.style["margin-left"] = "10px";
      writeSolutionButton.onclick = () => {
        // d: "<a href="/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/">1579. 保证图可完全遍历</a>"
        const d = document.querySelector(`[data-cypress="QuestionTitle"]`)
          .innerHTML;
        const title = d.match(/(\d+\. .+)(?=<)/)[1];
        const link = "https://leetcode-cn.com" + d.match(/href="(.*?)"/)[1];
        window.open(
          `https://leetcode-pp.github.io/leetcode-cheat/?link=${link}&title=${title}`
        );
      };
      console.log(writeSolutionButton);
      buttons[i].parentElement.prepend(writeSolutionButton);
      return true;
    }
  }
  return false;
}
let inserted = false;
const timerId = setInterval(() => {
  if (inserted) return clearInterval(timerId);
  if (insertButton()) {
    window.location.title = "";
    inserted = true;
    // 可进入禅定模式
    zenAble();
  }
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

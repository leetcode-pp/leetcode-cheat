const leetCodePPLogo =
  "https://tva1.sinaimg.cn/large/0081Kckwly1glmdoxibgdj303k03kt8z.jpg";

const leetCodeLogo =
  "https://static.leetcode-cn.com/cn-mono-assets/production/main/assets/favicon-notification-32x32.3f045777.png";

function findHeader() {
  const tag = document.querySelector("#new-ft");
  return tag.parentElement.parentElement;
}

function findSider() {
  const tag = document.querySelector("#question-detail-main-tabs");
  return tag.parentElement.parentElement.parentElement;
}

function findConsole() {
  for (const button of document.querySelectorAll("button")) {
    if (button.innerText.includes("控制台")) {
      return button.parentElement.parentElement;
    }
  }
}

function findBlackWordSpans() {
  const blackWords = ["面试", "力扣", "LeetCode"];
  const ans = [];
  for (const span of document.querySelectorAll("span")) {
    if (blackWords.some((word) => span.innerText.includes(word)))
      ans.push(span);
  }
  return ans;
}

function inserSwitchButton() {
  const switchZen = setupSwitchZen();
  for (const button of document.querySelectorAll("button")) {
    if (button.innerText.includes("智能模式")) {
      const copyButton = button.cloneNode(true);
      copyButton.innerText = "进入禅定模式";
      copyButton.style["margin-left"] = "10px";
      copyButton.onclick = () => {
        const zen = switchZen();
        if (zen) {
          copyButton.innerText = "返回";
        } else {
          copyButton.innerText = "进入禅定模式";
        }
      };
      button.parentElement.appendChild(copyButton);
    }
  }
}

function setupSwitchConsole() {
  const cl = findConsole();
  const oldover = cl.onmouseover;
  const oldout = cl.onmouseout;

  return (zen) => {
    if (zen) {
      cl.style.opacity = 1;
      cl.onmouseover = oldover;
      cl.onmouseout = oldout;
    } else {
      cl.style.opacity = 0;
      cl.onmouseover = () => (cl.style.opacity = 1);
      cl.onmouseout = () => (cl.style.opacity = 0);
    }
  };
}

function setUpSwitchBrowerTab() {
  const originalTitle = document.title;

  function changeFavicon(src) {
    const link = document.createElement("link");

    for (const oldLink of document.querySelectorAll("link[rel~='icon']")) {
      document.head.removeChild(oldLink);
    }
    link.id = "dynamic-favicon";
    link.rel = "shortcut icon";
    link.href = src;
    document.head.appendChild(link);
  }

  return (zen) => {
    if (zen) {
      changeFavicon(leetCodeLogo);
      document.title = originalTitle;
    } else {
      changeFavicon(leetCodePPLogo);
      document.title = "lucifer";
    }
  };
}

function setUpSwicthHeader() {
  const header = findHeader();
  return (zen) => {
    if (zen) {
      header.style.display = "";
    } else {
      header.style.display = "none";
    }
  };
}

function setUpSwitchSider() {
  const sider = findSider();
  return (zen) => {
    if (zen) {
      sider.style.display = "";
    } else {
      sider.style.display = "none";
    }
  };
}
function setUpSwitchBlackSpans() {
  const spans = findBlackWordSpans();
  spans.forEach((span) => (span.originalText = span.innerText));
  return (zen) => {
    if (zen) {
      spans.forEach((span) => (span.innerText = span.originalText));
    } else {
      spans.forEach((span) => (span.innerText = ""));
    }
  };
}

function setupSwitchZen() {
  let zen = false;
  const swicthHeader = setUpSwicthHeader();
  const switchSider = setUpSwitchSider();
  const switchBrowerTab = setUpSwitchBrowerTab();
  const switchBlackSpans = setUpSwitchBlackSpans();
  const swichConsole = setupSwitchConsole();
  return () => {
    swicthHeader(zen);
    switchSider(zen);
    switchBlackSpans(zen);
    switchBrowerTab(zen);
    swichConsole(zen);
    zen = !zen;
    return zen;
  };
}

export default function run() {
  inserSwitchButton();
}

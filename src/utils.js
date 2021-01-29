import React from "react";
import { Button, message } from "antd";
import { ISSUES_URL } from "./constant/index";

function TreeNode(value) {
  return {
    left: null,
    right: null,
    value,
  };
}
const seen = {};
export function getRandomUnique(lower, upper, amount) {
  console.log(seen);
  // [10, 20]10
  const start = getRandom(0, upper - lower - amount);
  if (`${lower}-${upper}` in seen)
    return seen[`${lower}-${upper}`].slice(start, start + amount + 1);

  const condidates = Array.from(Array(upper - lower + 1), (_, i) => i + lower);

  const n = condidates.length;
  for (let i = n - 1; i >= 0; i--) {
    const temp = condidates[i];
    const number = (Math.random() * n) >>> 0;
    condidates[i] = condidates[number];
    condidates[number] = temp;
  }
  seen[`${lower}-${upper}`] = condidates;
  return condidates.slice(start, start + amount + 1);
}

export function getRandom(n, m) {
  return Math.round(Math.random() * (m - n) + n);
}
export function copyToClipboard(str) {
  try {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    return true;
  } catch (err) {
    return false;
  }
}
export function serialise_bfs(root) {
  let ans = "[";
  const q = [root];
  let cur = null;

  while (q.length > 0) {
    cur = q.shift();
    if (cur) {
      q.push(cur.left);
      q.push(cur.right);
      ans += cur.value + ",";
    } else {
      ans += "null,";
    }
  }

  return ans.slice(0, -1) + "]";
}
export function isInExtension() {
  return process.env.REACT_APP_BUILD_TARGET === "extension";
}
export function buildRandomTree({
  amount = 10,
  upper = 10,
  lower = 0,
  isUnique,
}) {
  let remain = amount;
  let condidates = [];
  if (isUnique) {
    condidates = getRandomUnique(lower, upper, amount);
  }

  function dfs({ upper, lower }) {
    if (remain <= 0) return null;
    remain -= 1;

    const root = TreeNode(
      !isUnique ? getRandom(lower, upper) : condidates[remain]
    );

    if (Math.random() > 0.5) {
      root.left = dfs({ upper, lower });
    }
    if (Math.random() > 0.5) {
      root.right = dfs({ upper, lower });
    }
    return root;
  }
  return dfs({ upper, lower });
}

export function 不讲武德() {
  return message.error({
    content: (
      <>
        力扣不讲武德，不按套路出牌。不过没关系啊，你
        <Button type="link" href={ISSUES_URL} target="_blank">
          反馈
        </Button>
        给我，下次一定全部防出去！
      </>
    ),
  });
}
export function getUrlParameter(key) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(key);
}

export function uuidv4() {
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function deserialise_bfs(nodes) {
  if (nodes.length === 0 || nodes[0] === "null") return null;
  const root = TreeNode(nodes[0]);
  const q = [root];
  let i = 0;

  while (q.length > 0 && i < nodes.length - 1) {
    const cur = q.shift();

    const l = TreeNode(nodes[i + 1]);
    if (l.value !== "null") {
      q.push(l);
      cur.left = l;
    }

    if (i < nodes.length - 2) {
      const r = TreeNode(nodes[i + 2]);

      if (r.value !== "null") {
        q.push(r);
        cur.right = r;
      }
    }

    i += 2;
  }

  return {
    root,
  };
}
export function copy(text, cb) {
  //Create a textbox field where we can insert text to.
  var copyFrom = document.createElement("textarea");

  //Set the text content to be the text you wished to copy.
  copyFrom.textContent = text;

  //Append the textbox field into the body as a child.
  //"execCommand()" only works when there exists selected text, and the text is inside
  //document.body (meaning the text is part of a valid rendered HTML element).
  document.body.appendChild(copyFrom);

  //Select all the text!
  copyFrom.select();

  //Execute command
  document.execCommand("copy");

  //(Optional) De-select the text using blur().
  copyFrom.blur();

  //Remove the textbox field from the document.body, so no other JavaScript nor
  //other elements can get access to this.
  document.body.removeChild(copyFrom);

  if (cb instanceof Function) cb();
}

export function getStorage(k) {
  return new Promise((resolve, reject) => {
    try {
      // eslint-disable-next-line
      if (chrome.storage) {
        // eslint-disable-next-line
        chrome.storage.get([k], resolve);
      } else if (localStorage) {
        resolve({
          result: {
            value: JSON.parse(localStorage.getItem(k)),
          },
        });
      } else {
        reject("未知错误");
      }
    } catch (err) {
      reject(err);
    }
  });
}

export function setStorage(k, v) {
  return new Promise((resolve, reject) => {
    try {
      // eslint-disable-next-line
      if (chrome.storage) {
        // eslint-disable-next-line
        chrome.storage.sync.set(
          {
            [k]: v,
          },
          resolve
        );
      } else if (localStorage) {
        localStorage.setItem(k, JSON.stringify(v));
        resolve();
      } else {
        reject("您可能禁用了存储功能~");
      }
    } catch (err) {
      console.log(err, k, v);
      reject("当前没有存储权限，或者存储已达到上限~");
    }
  });
}

export function setCloundStorage(content, { token }) {
  // return fetch("https://api.github.com/repos/azl397985856/stash/issues", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `token ${token}`,
  //   },
  //   body: JSON.stringify(content),
  // })
  //   .then((res) => res.json())
  //   .then((res) => {
  //     return {
  //       ...res,
  //       id: res.number,
  //     };
  //   });
  return fetch("https://my-store2.p.rapidapi.com/order/new", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-key": "8be902d767mshf5d232d6b781084p166217jsn382abe83434f",
      "x-rapidapi-host": "my-store2.p.rapidapi.com",
    },
    body: JSON.stringify({
      customer: JSON.stringify({
        body: content,
      }),
      address: "",
    }),
  }).then((res) => res.json());
}

export function getCloundStorage(id, { token }) {
  // return fetch(
  //   `https://api.github.com/repos/azl397985856/stash/issues/${id}`,
  //   {
  //     headers: {
  //       accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: `token ${token}`,
  //     },
  //   }
  // )
  //   .then((res) => res.json())
  //   .then((res) => JSON.parse(res.body));
  return fetch(`https://my-store2.p.rapidapi.com/order/${id}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7ff25b0080msh1ceb86e07b1e8dap16725fjsn940e2fa29e24",
      "x-rapidapi-host": "my-store2.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      return JSON.parse(response.order.customer).body;
    });
}

export function debounceComponent(component, wait) {
  let timerId = null;
  return (props) => {
    clearTimeout(timerId);
    component(props);
  };
}
export function debounce(fn, wait) {
  let callback = fn;
  let timerId = null;

  function debounced() {
    // 保存作用域
    let context = this;
    // 保存参数，例如 event 对象
    let args = arguments;

    clearTimeout(timerId);
    timerId = setTimeout(function () {
      callback.apply(context, args);
    }, wait);
  }

  // 返回一个闭包
  return debounced;
}
const COLORS = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

export function getColor(text) {
  let ans = 0;
  for (const c of text) ans += c.charCodeAt();
  return COLORS[ans % COLORS.length];
}

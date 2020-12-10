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

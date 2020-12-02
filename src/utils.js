function TreeNode(value) {
  return {
    left: null,
    right: null,
    value,
  };
}

export function bfs(nodes) {
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
  console.log(root);
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

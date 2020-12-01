import parser from "@babel/parser";
import babel from "@babel/core";
import traverse from "@babel/traverse";
import t from "@babel/types";

globalThis.leetcode_cheat = {
  version: "0.0.1",
  author: "lucifer",
  email: "azl397985856@gmail.com",
  公众号: "力扣加加",
  unstable: {
    draw(...args) {
      const handler = {
        get(target, prop, receiver) {
          return target[prop];
        },
        set(target, prop, val, receiver) {
          target[prop] = val;
          if (target instanceof Array && prop !== "length") {
            console.log(target);
          }
          return true; // accept the change
        },
      };
      console.log(args);

      return new Proxy(args, handler);
    },
  },
};

const code = `const nums = [1, 2, 3, 4];

function sum(nums, cur) {
  if (cur === -1) return 0;
  return nums[cur] + sum(nums, cur - 1);
}

const ans = sum(nums, nums.length - 1);
setTimeout(() => nums.push(5), 1000)
console.log(ans)`;

const ast = parser.parse(code, {
  sourceType: "module",
});

traverse.default(ast, {
  enter(path) {},
  ArrayExpression: function (path) {
    path.replaceWith(
      t.callExpression(
        t.memberExpression(
          t.identifier("globalThis.leetcode_cheat.unstable"),
          t.identifier("draw")
        ),
        path.node.elements
      )
    );
  },
});

babel.transformFromAst(
  ast,
  code,
  { parserOpts: { allowReturnOutsideFunction: true } },
  function (err, result) {
    if (err) return console.error("语法不正确", err);
    const { code } = result;
    console.log(code);
    eval(code);
  }
);

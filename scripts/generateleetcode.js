const Utils = require("./utils");
const commonUtils = require("../src/utils.js");
const Logger = require("./logger");
const {
  SUPPORT_LANGUAGE,
  DB_JSON_OUTPUT_DIR,
  RAW_MARKDOWN_OUTPUT_DIR,
  CRAWL_IGNORE_SUFFIX,
} = require("./constants");

const genertateLeetcodeToJson = () => {
  console.time("genertateLeetcodeToJson");

  const rawMarkdowns = Utils.getDirsFileNameSync(
    RAW_MARKDOWN_OUTPUT_DIR
  ).filter(
    (name) => !CRAWL_IGNORE_SUFFIX.some((suffix) => name.endsWith(suffix))
  );

  rawMarkdowns.forEach((filename) => {
    const languageResloved = [];
    const preKnowledge = [];
    let companies = [];
    let keyPoints = [];
    let markdown;

    try {
      Logger.success(`开始读取${filename}`);

      markdown = Utils.readFileSync(RAW_MARKDOWN_OUTPUT_DIR, filename);

      Logger.success(`读取${filename}完毕`);
    } catch (error) {
      Logger.error(`读取${filename}失败`, error);
    }

    /**
     *  以下替换是为了统一markdown语言标识
     */
    markdown = markdown.replace(/```javascript/g, "```js");
    markdown = markdown.replace(/```python/g, "```py");
    markdown = markdown.replace(/```c\+\+/g, "```cpp");

    SUPPORT_LANGUAGE.forEach((lang) => {
      markdown.replace(Utils.genCodeRegByLang(lang), (noUseMatch, $1) => {
        languageResloved.push({
          language: lang,
          text: $1,
        });
      });
    });

    // 解析前置知识
    markdown.replace(Utils.getSatelliteDataReg().pre, (noUseMatch, $1) => {
      $1.replace(/^-/gm, "")
        .split("\n")
        .map((tag) => tag.trim())
        .filter(Boolean)
        .forEach((preTagName) => {
          // 形式1： [滑动窗口](https://github.com/azl397985856/leetcode/blob/master/thinkings/slidewindow.md)
          // 形式2: 滑动窗口
          const match = /\[(.+)\]\((.+)\)/.exec(preTagName);
          if (match) {
            // 形式1

            preKnowledge.push({
              text: match[1],
              link: match[2],
              color: commonUtils.geColor(match[1]),
            });
          } else {
            // 形式 2
            preKnowledge.push({
              text: preTagName,
              link: null,
              color: commonUtils.geColor(preTagName),
            });
          }
        });
    });
    // 解析公司
    markdown.replace(Utils.getSatelliteDataReg().company, (noUseMatch, $1) => {
      $1.replace(/^-/gm, "")
        .split("\n")
        .map((company) => company.trim())
        .filter(Boolean)
        .forEach((company) => {
          // 形式1： 百度，阿里
          // 形式2: 百度
          const match = /、/.exec(company);
          if (match) {
            // 形式1

            companies = companies.concat(
              company.split("、").map((c) => ({ name: c }))
            );
          } else {
            // 形式 2
            companies.push({
              name: company,
            });
          }
        });
    });
    // 解析关键点
    markdown.replace(
      Utils.getSatelliteDataReg().keyPoints,
      (noUseMatch, $1) => {
        keyPoints = $1
          .replace(/\s/g, "")
          .split("-")
          .filter((s) => s && s !== "解析")
          .map((s) => ({ text: s, link: null, color: "blue" }));
      }
    );

    /**
     *  TODO 这边解析字段不全
     */

    const [questionID, name] = filename.split(".");

    let oCustomStruct = {
      id: questionID,
      name,
      company: [],
      pre: preKnowledge,
      keyPoints,
      companies,
      giteeSolution: `https://gitee.com/golong/leetcode/blob/master/problems/${filename}`,
      solution: `https://github.com/azl397985856/leetcode/blob/master/problems/${filename}`,
      code: languageResloved,
    };

    console.log(oCustomStruct);

    Logger.success(`开始生成 "${filename}"`);

    Utils.writeFileSync(
      "spider/yield-db-json",
      `${filename}.json`,
      JSON.stringify(oCustomStruct, null, 2)
    );

    Logger.success(`生成 "${filename}" 完毕`);
  });
  console.timeEnd("genertateLeetcodeToJson");
};

const generateCollectionIndexFile = () => {
  Logger.success("开始生产index文件");
  console.time("generateCollectionIndexFile");
  const jsonsName = Utils.getDirsFileNameSync(DB_JSON_OUTPUT_DIR).sort(
    (a, b) => {
      const numberA = a.split(".")[0]; // 题号
      const numberB = b.split(".")[0]; // 题号

      return Number(numberA) - Number(numberB);
    }
  );

  let rootContent = `
    export const db_collection = {
       ${jsonsName.reduce((acc, next) => {
         return (
           acc +
           ('"' +
             next.split(".")[1] +
             '":' +
             JSON.stringify(
               require("../spider/yield-db-json/" + next),
               null,
               4
             ) +
             ",\n")
         );
       }, "")}
     }
   `;

  Utils.writeFileSync("src/db", "root.db.js", rootContent);
  Logger.success("index文件生成完毕");
  console.timeEnd("generateCollectionIndexFile");
};

Utils.mkdirSync(DB_JSON_OUTPUT_DIR);

genertateLeetcodeToJson();
generateCollectionIndexFile();

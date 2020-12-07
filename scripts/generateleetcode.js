const Utils = require("./utils");
const Logger = require("./logger");
const {
  SUPPORT_LANGUAGE,
  DB_JSON_OUTPUT_DIR,
  RAW_MARKDOWN_OUTPUT_DIR,
  CRAWL_IGNORE_SUFFIX,
} = require("./constants");

const COMPANY_MAPPER = {
  阿里: "阿里巴巴",
  字节: "字节跳动",
};

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
            // 有可能有相对定位的文件（比如 ../thinkings），需要特别处理
            preKnowledge.push({
              text: match[1],
              link: match[2].replace(
                "../thinkings/",
                "https://github.com/azl397985856/leetcode/blob/master/thinkings/"
              ),
              color: Utils.getColor(match[1]),
            });
          } else {
            // 形式 2
            preKnowledge.push({
              text: preTagName,
              link: null,
              color: Utils.getColor(preTagName),
            });
          }
        });
    });
    // 解析公司
    markdown.replace(
      Utils.getSatelliteDataReg().companies,
      (noUseMatch, $1) => {
        $1.replace(/^-/gm, "")
          .split("\n")
          .map((company) => company.trim())
          .filter(Boolean)
          .filter((company) => company !== "暂无")
          .map((company) => {
            // 统一公司名字
            if (company in COMPANY_MAPPER) return COMPANY_MAPPER[company];
            return company;
          })
          .forEach((company) => {
            // 形式1： 百度，阿里
            // 形式2: 百度
            const match = /u3001/.exec(company);
            if (match) {
              // 形式1
              companies = companies.concat(
                company.split("\u3001").map((c) => ({ name: c }))
              );
            } else {
              // 形式 2
              companies.push({
                name: company,
              });
            }
          });
      }
    );
    // 解析关键点
    markdown.replace(
      Utils.getSatelliteDataReg().keyPoints,
      (noUseMatch, $1) => {
        keyPoints = $1
          .replace(/\s/g, "")
          .split("-")
          .filter((s) => s && s !== "\u89e3\u6790")
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
  Logger.success("\u5f00\u59cb\u751f\u4ea7index\u6587\u4ef6");
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
  Logger.success("index\u6587\u4ef6\u751f\u6210\u5b8c\u6bd5");
  console.timeEnd("generateCollectionIndexFile");
};

Utils.mkdirSync(DB_JSON_OUTPUT_DIR);

genertateLeetcodeToJson();
generateCollectionIndexFile();

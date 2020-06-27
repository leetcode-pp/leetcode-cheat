const Iconv = require("iconv-lite");
const cheerio = require("cheerio");

const Logger = require("./logger");
const Utils = require("./utils");
const {
  PROBLEMS_URL,
  QUESTION_DOM_SELECTOR,
  BASE_MARKDWON_DOWNLOAD_URL,
  ENGLISH_MARKDOWN_SIGN,
} = require("./constants");

module.exports = LeetCodeProvider = {
  getProblemsTitle() {
    return Utils.httpGet(PROBLEMS_URL)
      .then((body) => {
        let titles = [];
        let sHtml = Iconv.decode(body, "utf-8").toString();
        cheerio
          .load(sHtml)(QUESTION_DOM_SELECTOR)
          .each((idx, ele) => titles.push(ele.attribs["title"]));
        Logger.success("获取问题列表成功");
        return titles.filter(Boolean).filter((name) => !name.endsWith(ENGLISH_MARKDOWN_SIGN));
      })
      .catch((error) => {
        Logger.error("获取问题列表失败", error);
      });
  },

  getProblemDetail(problemNameWithExt) {
    return Utils.httpGet(`${BASE_MARKDWON_DOWNLOAD_URL}${problemNameWithExt}`)
      .then((body) => {
        let markdown = Iconv.decode(body, "utf-8").toString();
        Logger.success(`抓取问题 "${problemNameWithExt}" 成功！`);
        return markdown;
      })
      .catch((error) => {
        Logger.error(`抓取问题 "${problemNameWithExt}" 失败`, error);
      });
  },
};

LeetCodeProvider.getProblemsTitle()

const Iconv = require("iconv-lite");
const cheerio = require("cheerio");

const Logger = require("./logger");
const Utils = require("./utils");
const {
	PROBLEMS_URL,
	QUESTION_DOM_SELECTOR,
	BASE_MARKDWON_DOWNLOAD_URL,
	CRAWL_IGNORE_SUFFIX,
} = require("./constants");

module.exports = LeetCodeProvider = {
	getProblemsTitle() {
		Logger.success(
			"\u5f00\u59cb\u6293\u53d6\u95ee\u9898\u5217\u8868\u3002\u3002\u3002\u3002",
		);
		return Utils.httpGet(PROBLEMS_URL).then((body) => {
			let titles = [];
			let sHtml = Iconv.decode(body, "utf-8").toString();
			cheerio.load(sHtml)(QUESTION_DOM_SELECTOR).each((idx, ele) =>
				titles.push(ele.attribs["title"])
			);
			Logger.success("\u83b7\u53d6\u95ee\u9898\u5217\u8868\u6210\u529f");
			/**
         *  由于QUESTION_DOM_SELECTOR 所选择的结构包含非问题标签，获取title会是undefined，在此需将其过滤掉
         */

			return titles.filter(Boolean).filter((name) =>
				!CRAWL_IGNORE_SUFFIX.some((suffix) => name.endsWith(suffix))
			);
		}).catch((error) => {
			Logger.error("\u83b7\u53d6\u95ee\u9898\u5217\u8868\u5931\u8d25", error);
		});
	},

	getProblemDetail(problemNameWithExt) {
		return Utils.httpGet(`${BASE_MARKDWON_DOWNLOAD_URL}${problemNameWithExt}`).then((
			body,
		) => {
			let markdown = Iconv.decode(body, "utf-8").toString();
			Logger.success(`抓取问题 "${problemNameWithExt}" 成功！`);
			return markdown;
		}).catch((error) => {
			Logger.error(`抓取问题 "${problemNameWithExt}" 失败`, error);
		});
	},
};

LeetCodeProvider.getProblemsTitle();

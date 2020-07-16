
const CRAWL_SITE = "gitee"

module.exports = {
  
  /**
   *  爬取的数据源站点 github | gitee
   */
  
  CRAWL_SITE,

  /**
   *  需解析的语言类型
   */
  SUPPORT_LANGUAGE: ["java", "js", "cpp", "py"],

  /**
   *  是否启用强制更新
   *  如开启，会跳过读取本地缓存，拉取最新文件
   */
  IS_FORCE_UPDATE_MODE: true,

  /**
   * 请求处理频率 ms
   */
  REQUEST_RATE: 300,

  /**
   * markdown输出目录
   */
  RAW_MARKDOWN_OUTPUT_DIR: "spider/raw-markdown",

  /**
   *  转化后的json输出目录
   */
  DB_JSON_OUTPUT_DIR: "spider/yield-db-json",

  /**
   *  获取问题列表地址
   */
  PROBLEMS_URL: CRAWL_SITE === "gitee" ? "https://gitee.com/golong/leetcode/tree/master/problems" : "https://github.com/azl397985856/leetcode/tree/master/problems",

  /**
   *  抓取页面问题内容的dom元素选择器
   */
  QUESTION_DOM_SELECTOR: CRAWL_SITE === "gitee" ? ".tree-item-file-name.tree-list-item a" :  ".position-relative.js-navigation-item .js-navigation-open",


  /**
   *  markdwon下载地址
   */
  BASE_MARKDWON_DOWNLOAD_URL: CRAWL_SITE === "gitee" ? "https://gitee.com/golong/leetcode/raw/master/problems/" : "https://raw.githubusercontent.com/azl397985856/leetcode/master/problems/",


  /**
   * 过滤英文文档末尾标识
   */
  ENGLISH_MARKDOWN_SIGN: ".en.md",

  /**
   * 爬虫抓取同一文件时的最大失败次数(多为网络原因导致, 切换到gitee源)
   */
  MAX_CRAWL_RETRY_NUMBER : 100
};

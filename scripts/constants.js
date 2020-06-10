


module.exports = {

    /**
     *  需解析的语言类型
     */
    SUPPORT_LANGUAGE: [
        'java',
        'js',
        'cpp',
        'py'
    ],

    /**
     *  是否启用强制更新
     *  如开启，会跳过读取本地缓存，拉取最新文件
     */
    IS_FORCE_UPDATE_MODE: false,
    
    /**
     * 请求处理频率 ms
     */
    REQUEST_RATE: 300,
    
    /**
     * markdown输出目录
     */
    RAW_MARKDOWN_OUTPUT_DIR: 'spider/raw-markdown',

    /**
     *  转化后的json输出目录
     */
    DB_JSON_OUTPUT_DIR: 'spider/yield-db-json',

    /**
     *  获取问题列表地址
     */
    PROBLEMS_URL: 'https://github.com/azl397985856/leetcode/tree/master/problems',

    /**
     *  抓取页面问题内容的dom元素选择器
     */
    QUESTION_DOM_SELECTOR: '.js-navigation-item .content .js-navigation-open',

    /**
    *  markdwon下载地址
    */
    BASE_MARKDWON_DOWNLOAD_URL: 'https://raw.githubusercontent.com/azl397985856/leetcode/master/problems/',

    /** 
     * 过滤英文文档末尾标识
    */
    ENGLISH_MARKDOWN_SIGN: '.en.md'

}
const LeetCodeProvider = require("./leetcodeprovider");

const Logger = require("./logger");

const Utils = require("./utils");

const {
  RAW_MARKDOWN_OUTPUT_DIR,
  REQUEST_RATE,
  IS_FORCE_UPDATE_MODE,
  MAX_CRAWL_RETRY_NUMBER
} = require("./constants");

/**
 * 当前请求问题索引
 */
let requsetNumber = 0;
let retryCounter = 0;

Utils.mkdirSync(RAW_MARKDOWN_OUTPUT_DIR);

const getProblemDetail = (questionsName, requsetNumber) => {

  const cachedFilesName = Utils.getDirsFileNameSync(RAW_MARKDOWN_OUTPUT_DIR);

  if (
    !IS_FORCE_UPDATE_MODE &&
    cachedFilesName.includes(questionsName[requsetNumber])
  ) {
    Logger.success(`${questionsName[requsetNumber]}命中缓存， 跳过。。。`);

    requsetNumber++;

    getProblemDetail(questionsName, requsetNumber);
  } else {
    Logger.success(`开始抓取${questionsName[requsetNumber]}`)
    questionsName[requsetNumber] &&
      LeetCodeProvider.getProblemDetail(questionsName[requsetNumber])
        .then(markDown => {
          if (markDown) {
            retryCounter = 0;
            Logger.success(
              `问题: "${
                questionsName[requsetNumber]
              }" | 结果： ${JSON.stringify(markDown).slice(100)}...`
            );

            Utils.writeFileSync(
              RAW_MARKDOWN_OUTPUT_DIR,
              questionsName[requsetNumber],
              markDown
            );

            requsetNumber++;
          } else {
            retryCounter++;
            Logger.error(`获取${questionsName[requsetNumber]} markdown 第${retryCounter}次 失败!`);
          }
        })
        .catch(Logger.error)
        .then(() => {
          if (retryCounter >= MAX_CRAWL_RETRY_NUMBER) {
            Logger.error(
              `抓去问题 "${questionsName[requsetNumber]}" 失败次数已达上限, 请调整抓取速率 [REQUEST_RATE] 或稍后再试`
            );
            process.exit(0);
          } else {
            setTimeout(() => {
              questionsName[requsetNumber] &&
                getProblemDetail(questionsName, requsetNumber);
            }, REQUEST_RATE);
          }
        });
  }
};

LeetCodeProvider.getProblemsTitle().then(questionsName => {
  getProblemDetail(questionsName, requsetNumber);
});

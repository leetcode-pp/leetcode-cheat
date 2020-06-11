const LeetCodeProvider = require('./leetcodeprovider')

const Logger = require('./logger')

const Utils = require('./utils')


const { RAW_MARKDOWN_OUTPUT_DIR, REQUEST_RATE, IS_FORCE_UPDATE_MODE } = require('./constants')


/**
 * 当前请求问题索引
 */
let requsetNumber = 0


Utils.mkdirSync(RAW_MARKDOWN_OUTPUT_DIR)

const getProblemDetail = (questionsName, requsetNumber) => {

    const cachedFilesName = Utils.getDirsFileName(RAW_MARKDOWN_OUTPUT_DIR)

    if (!IS_FORCE_UPDATE_MODE && cachedFilesName.includes(questionsName[requsetNumber])) {

        Logger.success(`${questionsName[requsetNumber]}命中缓存， 跳过。。。`)

        requsetNumber++


            getProblemDetail(questionsName, requsetNumber)

    }
    else {

        questionsName[requsetNumber] && LeetCodeProvider.getProblemDetail(questionsName[requsetNumber]).then(markDown => {
            if (markDown) {

                Logger.success(`问题: "${questionsName[requsetNumber]}" | 结果： ${JSON.stringify(markDown)}`)
                
                Utils.writeFileSync(RAW_MARKDOWN_OUTPUT_DIR, questionsName[requsetNumber], markDown)
                
                requsetNumber++
            } else {
                Logger.error(`获取${questionsName[requsetNumber]} markdown 失败!`)
            }

        }).catch(Logger.error).then(() => {

            setTimeout(() => {

                questionsName[requsetNumber] && getProblemDetail(questionsName, requsetNumber)

            }, REQUEST_RATE)
        })
    }

}


LeetCodeProvider.getProblemsTitle().then(questionsName => {

    getProblemDetail(questionsName, requsetNumber)

})





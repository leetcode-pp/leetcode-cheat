const LeetCodeProvider = require('./LeetCodeProvider')

const Logger = require('./Logger')

const Utils = require('./utils')

const { RAW_MARKDOWN_OUTPUT_DIR } = require('./constants')

/**
 *  是否启用强制更新
 *  如开启，会跳过读取本地缓存，拉取最新文件
 */

let isForceUpdateMode = false



/**
 * 请求处理频率 ms
 */
const REQUEST_RATE = 300 


/**
 * 当前请求问题索引
 */
let requsetNumber = 0


Utils.mkdirSync(RAW_MARKDOWN_OUTPUT_DIR)

const getProblemDetail = (questionsName, requsetNumber) => {
    
const cachedFilesName = Utils.getDirsFileName(RAW_MARKDOWN_OUTPUT_DIR)
  
if (!isForceUpdateMode && cachedFilesName.includes(questionsName[requsetNumber]) ) {

    Logger.success(`${questionsName[requsetNumber]}命中缓存， 跳过。。。`)

    requsetNumber++

    setTimeout(() => {
             
        getProblemDetail(questionsName, requsetNumber)
        
    }, REQUEST_RATE)
}
 else {

    questionsName[requsetNumber] && LeetCodeProvider.getInstance().getProblemDetail(questionsName[requsetNumber]).then(markDown => {
       
        Logger.success(`问题: "${questionsName[requsetNumber]}" | 结果： ${JSON.stringify(markDown)}`)
         
        Utils.writeFileSync(RAW_MARKDOWN_OUTPUT_DIR,questionsName[requsetNumber],markDown)

        requsetNumber++

    }).catch( Logger.error ).then( () => {
      
         setTimeout(() => {
             
             questionsName[requsetNumber] && getProblemDetail(questionsName, requsetNumber)

         }, REQUEST_RATE)
    })
 }

}


LeetCodeProvider.getInstance().getProblemsTitle().then( questionsName => {

    getProblemDetail(questionsName, requsetNumber)
    
})





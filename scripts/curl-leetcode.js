const LeetCodeProvider = require('./LeetCodeProvider')

const Logger = require('./Logger')

const Utils = require('./utils')

/**
 * 请求处理频率 ms
 */
const requestRate = 300 

/**
 * 当前请求问题索引
 */
let requsetNumber = 0


const getProblemDetail = (questionsName, requsetNumber) => {
    
const cachedFilesName = Utils.getDirsFileName('spider/row-markdown')
  
if ( cachedFilesName.includes(questionsName[requsetNumber]) ) {

    Logger.success(`${questionsName[requsetNumber]}命中缓存， 跳过。。。`)

    requsetNumber++

    setTimeout(() => {
             
        getProblemDetail(questionsName, requsetNumber)
        
    }, requestRate)
}
 else {

    questionsName[requsetNumber] && LeetCodeProvider.getInstance().getProblemDetail(questionsName[requsetNumber]).then(markDown => {
       
        Logger.success(`问题: "${questionsName[requsetNumber]}" | 结果： ${JSON.stringify(markDown)}`)
         
        Utils.writeFileSync('spider/row-markdown/',questionsName[requsetNumber],markDown)

        requsetNumber++
    }).catch(Logger.error).then(() => {
      
         setTimeout(() => {
             
             questionsName[requsetNumber] && getProblemDetail(questionsName, requsetNumber)

         }, requestRate)
    })
 }

}


LeetCodeProvider.getInstance().getProblemsTitle().then(questionsName => {

    getProblemDetail(questionsName, requsetNumber)
    
})





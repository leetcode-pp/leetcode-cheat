const Utils = require('./utils')
const Logger = require('./Logger')
const { support_language } = require('./constants')




const genertateLeetcodeToJson = () => {
const rowMarkdowns = Utils.getDirsFileName('spider/row-markdown')
  
rowMarkdowns.forEach(filename => {
 
  let languageResloved = []
  let markdown
 
  try {

   Logger.success(`开始读取${filename}`)

   markdown = Utils.readFileSync(`spider/row-markdown/`,filename)

   Logger.success(`读取${filename}完毕`)

  }
  catch (error) {

    Logger.error(`读取${filename}失败`,error)
  }
   
  
  /**
   *  此替换是为了解决正则匹配java时出现的问题
   */

   markdown = markdown.replace(/```javascript/g, '```js')
    
   support_language.forEach(lang => {
       
    markdown.replace(Utils.genRegByLang(lang), (noUseMatch, $1) => {

        languageResloved.push({
            lang,
            code: $1
        })

    })
     

    let oCustomStruct = {
      question: filename.slice(0,-3),
      companys: ['TODO'],
      tags: ['TODO'],
      reslove: languageResloved
    }

    

    Logger.success(`开始生成 "${filename}"`)
    
    Utils.writeFileSync('spider/yield-db-json',`${filename.slice(0,-3)}.json`, JSON.stringify(oCustomStruct, null, 2))
    
    Logger.success(`生成 "${filename}" 完毕`)

   })
   



 })


}

genertateLeetcodeToJson()
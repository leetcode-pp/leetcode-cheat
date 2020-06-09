const Utils = require('./utils')
const Logger = require('./Logger')
const { SUPPORT_LANGUAGE, DB_JSON_OUTPUT_DIR, RAW_MARKDOWN_OUTPUT_DIR } = require('./constants')




const genertateLeetcodeToJson = () => {

const rowMarkdowns = Utils.getDirsFileName(RAW_MARKDOWN_OUTPUT_DIR).filter(name => !name.endsWith('.en.md'))
  
rowMarkdowns.forEach(filename => {
 
  let languageResloved = []
  let markdown
 
  try {

   Logger.success(`开始读取${filename}`)

   markdown = Utils.readFileSync(RAW_MARKDOWN_OUTPUT_DIR,filename)

   Logger.success(`读取${filename}完毕`)

  }
  catch (error) {

    Logger.error(`读取${filename}失败`,error)
  }
   
  
  /**
   *  此替换是为了解决正则匹配java时出现的问题
   */

   markdown = markdown.replace(/```javascript/g, '```js')
    
   SUPPORT_LANGUAGE.forEach(lang => {
       
    markdown.replace(Utils.genRegByLang(lang), (noUseMatch, $1) => {

        languageResloved.push({
            language:lang,
            text:$1,
        })

    })

    
    /**
     *  TODO 这边解析字段不全 
     */
     
     const [ questionID, name, ] = filename.split('.')

    let oCustomStruct = {
      id: questionID,
      name,
      company: [
        {
          name: "阿里巴巴",
        }
      ],
      // todo
      tags: [
        {
          id: "recursion",
          text: "递归",
          link: null,
        }
      ],
      pre: [
        {
          text: "辅助栈",
          link: null,
        }
      ],
      keyPoints: [
        {
          text: "辅助栈",
          link: null,
        },
      ],
      solution: `https://github.com/azl397985856/leetcode/blob/master/problems/${filename}`,
      code: languageResloved,
    }

    

    Logger.success(`开始生成 "${filename}"`)
    
    Utils.writeFileSync('spider/yield-db-json',`${filename.slice(0,-3)}.json`, JSON.stringify(oCustomStruct, null, 2))

    Logger.success(`生成 "${filename}" 完毕`)

   })

 })

}


const generateCollectionIndexFile = () => {
   Logger.success('开始生产index文件')
   const jsonsName = Utils.getDirsFileName(DB_JSON_OUTPUT_DIR)

   let sRootContent = `
    export const db_collection = {
       ${ jsonsName.reduce((acc, next) => {
         return acc + ('"' + next.split('.')[1] + '":' + JSON.stringify(require('../spider/yield-db-json/' + next), null ,4) + ',\n')
        },'') }
     }
   `
    
    Utils.writeFileSync('src/db','root.db.js',sRootContent)
    Logger.success('index文件生成完毕')

}



Utils.mkdirSync(DB_JSON_OUTPUT_DIR)

genertateLeetcodeToJson()
generateCollectionIndexFile()

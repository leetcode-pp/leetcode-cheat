const fs = require('fs')
const { resolve : pathResolve } = require('path')

 const { support_language } = require('./constants')


class Utils  {
  

    /**
     * 获取不同语言的正则表达式
     *
     * @static
     * @param {*} lang
     * @returns
     * @memberof Utils
     */
    static genRegByLang(lang) {
        return new RegExp( `(?:\`\`\`${lang})((.|[\r\n])*?)(?:\`\`\`)`,'g')
    }


    static readFileSync(relativePath,filename) {
       return fs.readFileSync(pathResolve(__dirname, '../',relativePath,filename),{encoding:'utf8'}) 
    }

    static getDirsFileName(dir) {
       return fs.readdirSync(pathResolve(__dirname, '../', dir), {encoding:'utf8'})
    }



    static writeFileSync(dir,name,content) {
       fs.writeFileSync(pathResolve(__dirname, '../', dir ,name),content)
    }



}






module.exports  = Utils
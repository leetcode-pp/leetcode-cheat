const fs = require('fs')
const { resolve : pathResolve } = require('path')
const mkdirp = require('mkdirp')

const PROJECT_ROOT = pathResolve(__dirname, '../')

class Utils  {
  

    /**
     * 获取不同语言的正则表达式
     *
     * @static
     * @param {*} lang
     * @returns  Regexp
     * @memberof Utils
     */
    static genRegByLang(lang) {
        return new RegExp( `(?:\`\`\`${lang})((.|[\r\n])*?)(?:\`\`\`)`,'g')
    }

    /**
     *  递归创建目录
     *
     * @static
     * @param {*} path
     * @memberof Utils
     */
    static mkdirSync(path) {
      mkdirp.sync(pathResolve(PROJECT_ROOT,path))
    }


    /**
     *  关键点匹配 TODO
     *
     * @static
     * @returns
     * @memberof Utils
     */
    static getKeyMatterReg() {
       return /(?:# 关键点)([.|[\r\n]]*?)(?:#)/g
    }


    /**
     *  读取文件内容
     *
     * @static
     * @param {*} relativePath
     * @param {*} filename
     * @returns
     * @memberof Utils
     */
    static readFileSync(relativePath,filename) {
       return fs.readFileSync(pathResolve(PROJECT_ROOT,relativePath,filename),{encoding:'utf8'}) 
    }

    /**
     * 获取文件下所有文件的名称
     *
     * @static
     * @param {*} dir
     * @returns Array<string>
     * @memberof Utils
     */
    static getDirsFileName(dir) {
       return fs.readdirSync(pathResolve(PROJECT_ROOT, dir), {encoding:'utf8'})
    }



    /**
     * 写入文件
     *
     * @static
     * @param {*} dir
     * @param {*} name
     * @param {*} content
     * @memberof Utils
     */
    static writeFileSync(dir,name,content) {
       fs.writeFileSync(pathResolve(PROJECT_ROOT, dir,name),content)
    }



}





module.exports  = Utils
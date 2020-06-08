

const request = require('request')
const Iconv = require('iconv-lite')
const cheerio = require('cheerio')
const Logger = require('./Logger')



class LeetCodeProvider {
    

    static getInstance() {
        return this.oInstance || (this.oInstance = new LeetCodeProvider)
    }

    getProblemsTitle() {
        return new Promise((ok,unExpect) => {

            Logger.success('正在获取问题列表...')

            request({
                method:'GET',
                url:'https://github.com/azl397985856/leetcode/tree/master/problems',
                encoding:null},
                (error,response,body) => {
                 if(error) {
                    unExpect(Logger.error('获取问题列表失败',error) && error)
                 } else {
                    let aProblemTitles =[]
                    let sHtml = Iconv.decode(body, 'utf-8').toString()
                    cheerio.load(sHtml)('.js-navigation-item .content .js-navigation-open ').each((idx,ele)=> aProblemTitles.push(ele.attribs['title']) )
                     Logger.success('获取问题列表成功')
                     ok(aProblemTitles)
                 }
            })

        })
    } 

    getProblemDetail(problemNameWithExt) {
        return new Promise((ok, unExpect) => {

        Logger.success('正在抓取问题:', problemNameWithExt)

        request({
          method:'GET',
          url:`https://raw.githubusercontent.com/azl397985856/leetcode/master/problems/${problemNameWithExt}`,
            encoding:null
        },
        (error,response,body) => {
        if (error) {
            unExpect(Logger.error(`抓取问题 "${problemNameWithExt}" 失败`,error) && error)
        } else {
            let markdown = Iconv.decode(body, 'utf-8').toString()
            Logger.success(`抓取问题 "${problemNameWithExt}" 成功！`)
            ok(markdown)
        }
        
    })
})
}

}

module.exports = LeetCodeProvider
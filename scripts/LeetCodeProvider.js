

const request = require('request')
const Iconv = require('iconv-lite')
const cheerio = require('cheerio')

const Logger = require('./logger')
const { PROBLEMS_URL, QUESTION_DOM_SELECTOR, BASE_MARKDWON_DOWNLOAD_URL, ENGLISH_MARKDOWN_SIGN } = require('./constants')

const LeetCodeProvider =  {




    getProblemsTitle() {
        return new Promise((ok, unExpect) => {

            Logger.success('正在获取问题列表...')

            request({
                method: 'GET',
                url: PROBLEMS_URL,
                encoding: null
            },
                (error, response, body) => {
                    if (error) {

                        unExpect(Logger.error('获取问题列表失败', error) && error)

                    } else {

                        let aProblemTitles = []

                        let sHtml = Iconv.decode(body, 'utf-8').toString()

                        cheerio.load(sHtml)(QUESTION_DOM_SELECTOR).each((idx, ele) => aProblemTitles.push(ele.attribs['title']))

                        Logger.success('获取问题列表成功')

                        ok(aProblemTitles.filter(name => !name.endsWith(ENGLISH_MARKDOWN_SIGN)))
                    }
                })

        })
    },

    getProblemDetail(problemNameWithExt) {

        return new Promise((ok, unExpect) => {

            Logger.success('正在抓取问题:', problemNameWithExt)

            request({
                method: 'GET',
                url: `${BASE_MARKDWON_DOWNLOAD_URL}${problemNameWithExt}`,
                encoding: null
            },
                (error, response, body) => {
                    if (error) {

                        unExpect(Logger.error(`抓取问题 "${problemNameWithExt}" 失败`, error) && error)

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
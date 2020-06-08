
const log4js = require("log4js");

const logger = log4js.getLogger()

logger.level = 'debug'

logger.category = 'LeetCode'

class Logger {



    static success(...args) {
      logger.info(...args)
    } 

    static error(...args) {
        logger.error(...args)
    }

}

module.exports = Logger
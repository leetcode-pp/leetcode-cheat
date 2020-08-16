const log4js = require("log4js");

const logger = log4js.getLogger();

logger.level = "debug";

logger.category = "LeetCode";

const Logger = {
	success(...args) {
		logger.info(...args);
	},
	error(...args) {
		logger.error(...args);
	},
};

module.exports = Logger;

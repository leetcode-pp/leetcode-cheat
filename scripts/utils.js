const fs = require("fs");
const request = require("request");
const { resolve: pathResolve } = require("path");
const mkdirp = require("mkdirp");

const PROJECT_ROOT = pathResolve(__dirname, "../");

const isFun = (input) => typeof input === "function";

const Utils = {
  /**
   * 获取不同语言的正则表达式
   *
   * @static
   * @param {*} lang
   * @returns  Regexp
   * @memberof Utils
   */
  genCodeRegByLang(lang) {
    return new RegExp(`(?:\`\`\`${lang})((.|[\r\n])*?)(?:\`\`\`)`, "g");
  },

  httpGet(url, { beforeRequest, onSuccess, onError } = {}) {
    return new Promise((resolve, reject) => {
      isFun(beforeRequest) && beforeRequest();
      beforeRequest;
      request(
        {
          method: "GET",
          url,
          encoding: null,
        },
        (error, _, body) => {
          if (error) {
            reject(error);
            isFun(onError) && onError();
          } else {
            isFun(onSuccess) && onSuccess();
            resolve(body);
          }
        }
      );
    });
  },

  getSatelliteDataReg() {
    return {
      pre: /(?<=## 前置知识)([\s\S]*?)(?=##)/g,
      keyPoints: /(?<=## 关键点)([\s\S]*?)(?=##)/,
      company: /(?<=## 公司)([\s\S]*?)(?=##)/,
    };
  },

  /**
   *  递归创建目录
   *
   * @static
   * @param {*} path
   * @memberof Utils
   */
  mkdirSync(path) {
    mkdirp.sync(pathResolve(PROJECT_ROOT, path));
  },

  /**
   *  关键点匹配 TODO
   *
   * @static
   * @returns
   * @memberof Utils
   */
  getKeyMatterReg() {
    return /(?<=关键点)([.|[\r\n]]*?)(?:#)/g;
  },

  /**
   *  读取文件内容
   *
   * @static
   * @param {*} relativePath
   * @param {*} filename
   * @returns
   * @memberof Utils
   */
  readFileSync(relativePath, filename) {
    return fs.readFileSync(pathResolve(PROJECT_ROOT, relativePath, filename), {
      encoding: "utf8",
    });
  },

  /**
   * 获取文件下所有文件的名称
   *
   * @static
   * @param {*} dir
   * @returns Array<string>
   * @memberof Utils
   */
  getDirsFileNameSync(dir) {
    return fs.readdirSync(pathResolve(PROJECT_ROOT, dir), { encoding: "utf8" });
  },

  /**
   * 写入文件
   *
   * @static
   * @param {*} dir
   * @param {*} name
   * @param {*} content
   * @memberof Utils
   */
  writeFileSync(dir, name, content) {
    fs.writeFileSync(pathResolve(PROJECT_ROOT, dir, name), content);
  },
};

module.exports = Utils;

import { getUrlParams, getForPath } from "../utils";
import { LEETCODE_CN_URL, LEETCODE_URL } from "../constant";
import zh from "./zh";
import en from "./en";

const DEV_URL_LANG =
  process.env.NODE_ENV === "development"
    ? getUrlParams(window.location.href)?.lang
    : undefined;

// 支持在 url 中传入 lang 参数，否则本地开发刷新页面后会恢复为默认语言
const DEFAULT_LANG = DEV_URL_LANG || "zh";

let isInit = false;

export let lang = DEFAULT_LANG;

const ALL_LANGS = {
  zh,
  en,
};

// export const ALL_LANG_OPTIONS = {
//   zh: "简体中文",
//   en: "English",
// };

export const setLang = (_lang) => {
  lang = _lang || DEFAULT_LANG;
};

export const initLang = async (currentUrl) => {
  if (isInit) return;

  const isCnHref = currentUrl.includes(LEETCODE_CN_URL);
  setLang(isCnHref ? "zh" : "en");
  isInit = true;
};

export const getLeetcodeUrlForLang = () => {
  return lang === "zh" ? LEETCODE_CN_URL : LEETCODE_URL;
};

/**
 * @param {string} keypath
 * @param {string | string[]} slotText
 * @param {string} l lang
 * @returns {string}
 */
export const t = (keypath, slotText, l) => {
  const langData = { Locale: ALL_LANGS[l || lang] };
  if (!keypath) return "";
  if (!keypath.includes("Locale")) {
    keypath = "Locale." + keypath;
  }
  let content = getForPath(langData, keypath);
  if (slotText) {
    if (Array.isArray(slotText)) {
      slotText.forEach((item, idx) => {
        content = content.replace(`{${idx}}`, item);
      });
    } else {
      content = content.replace("{slotText}", slotText);
    }
  }
  return content;
};

export default ALL_LANGS[lang];

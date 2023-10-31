import zh from "./zh";
import en from "./en";
// import { getStorage, setStorage } from "../utils";
// const STORAGE_LANG_KEY = "LEETCODE_CHEAT_LANG";
const LEETCODE_URL_CN = "https://leetcode.cn";
const LEETCODE_URL_EN = "https://leetcode.com";
const DEFAULT_LANG = "zh";

export let lang = DEFAULT_LANG;

const ALL_LANGS = {
  zh,
  en,
};

export const ALL_LANG_OPTIONS = {
  zh: "简体中文",
  en: "English",
};

export const AllLangs = Object.keys(ALL_LANGS);

export const initLang = async (currentUrl) => {
  const isCnHref = currentUrl.includes(LEETCODE_URL_CN);
  setLang(isCnHref ? "zh" : "en");
};

export const setLang = (_lang) => {
  lang = _lang || DEFAULT_LANG;
};

const getForPath = (obj, path) => {
  const pathArr = path.split(".");
  let result = obj;
  for (const key of pathArr) {
    result = result[key];
  }
  return result;
};

export const t = (keypath, slotText,l) => {
  const langData ={ Locale: ALL_LANGS[l||lang] }
  if (!keypath) return "";
  if (!keypath.includes("Locale")) { 
    keypath = "Locale." + keypath
  }
  let content = getForPath(langData, keypath);
  if (slotText) {
    if (Array.isArray(slotText)) {
      slotText.forEach((item, idx) => {
        content = content.replace(`{${idx}}`, item);
      })
    } else {
      content = content.replace("{slotText}", slotText);
    }
  }
  return content;
};

export default ALL_LANGS[lang];

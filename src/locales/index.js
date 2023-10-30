import cn from "./cn";
import en from "./en";
// import { getStorage, setStorage } from "../utils";
// const STORAGE_LANG_KEY = "LEETCODE_CHEAT_LANG";
const LEETCODE_URL_CN = "https://leetcode.cn";
const LEETCODE_URL_EN = "https://leetcode.com";
const DEFAULT_LANG = "cn";

let lang = DEFAULT_LANG;

const ALL_LANGS = {
  cn,
  en,
};

export const ALL_LANG_OPTIONS = {
  cn: "简体中文",
  en: "English",
};

export const AllLangs = Object.keys(ALL_LANGS);

export const initLang = async (currentUrl) => {
  const isCnHref = currentUrl.includes(LEETCODE_URL_CN);
  setLang(isCnHref ? "cn" : "en");
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

export const t = (keypath, slotText) => {
  const langData ={ Locale: ALL_LANGS[lang] }
  if (!keypath) return "";
  let content = getForPath(langData, keypath);
  if (slotText) {
    if (Array.isArray(slotText)) {
      slotText.map((item, idx) => {
        content = content.replace(`{${idx}}`, item);
      })
    } else {
      content = content.replace("{slotText}", slotText);
    }
  }
  return content;
};

export default ALL_LANGS[lang];

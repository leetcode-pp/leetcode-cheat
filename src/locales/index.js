import cn from "./cn";
import en from "./en";
import { getStorage, setStorage } from "../utils";
const STORAGE_LANG_KEY = "LEETCODE_CHEAT_LANG";
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

export const initLang = async () => {
  lang = (await getStorage(STORAGE_LANG_KEY)) || DEFAULT_LANG;
  setLang(lang);
};

export const setLang = (_lang) => {
  const isCnHref = window.location.href.includes(LEETCODE_URL_CN);
  lang = _lang || (isCnHref ? "cn" : "en");
  setStorage(STORAGE_LANG_KEY, lang);
};

// const getForPath = (obj, path) => {
//   const pathArr = path.split(".");
//   let result = obj;
//   for (const key of pathArr) {
//       result = result[key];
//   }
//   return result;
// }


// window.t = (keypath) => {
//   return getForPath({Locale:ALL_LANGS[lang]}, keypath)
// }
export default ALL_LANGS[lang];

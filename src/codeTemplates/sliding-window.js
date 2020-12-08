import windowLogo from "../imgs/window.svg";
export default {
  title: "滑动窗口",
  logo: windowLogo,
  list: [
    {
      text: "固定窗口（伪代码）",
      problems: [
        {
          title: "438. 找到字符串中所有字母异位词",
          id: "find-all-anagrams-in-a-string",
        },
      ],
      codes: [
        {
          language: "py",
          text: `
            初始化前后指针 = 0
            初始化 ans

            for 前指针 in 可迭代集合
                更新窗口内信息（前指针进窗口，后指针出窗口）
                后指针移动
            更新答案
            返回 ans
                `,
        },
      ],
    },
    {
      text: "可变窗口（伪代码）",
      problems: [
        {
          id: "longest-substring-without-repeating-characters",
          title: "3. 无重复字符的最长子串",
        },
        {
          title: "76. 最小覆盖子串",
          id: "minimum-window-substring",
        },
        {
          title: "209. 长度最小的子数组",
          id: "minimum-size-subarray-sum",
        },
        {
          id: "fruit-into-baskets",
          title: "904. 水果成篮",
        },
        {
          title: "930. 和相同的二元子数组",
          id: "binary-subarrays-with-sum",
        },
        {
          title: "992. K 个不同整数的子数组",
          id: "subarrays-with-k-different-integers",
        },

        {
          title: "1004. 最大连续 1 的个数 III",
          id: "max-consecutive-ones-iii",
        },
        {
          title: "1234. 替换子串得到平衡字符串",
          id: "replace-the-substring-for-balanced-string",
        },
        {
          title: "1248. 统计「优美子数组」",
          id: "count-number-of-nice-subarrays",
        },
      ],
      codes: [
        {
          language: "py",
          text: `
        初始化慢指针 = 0
        初始化 ans

        for 快指针 in 可迭代集合
            更新窗口内信息
            while 窗口内不符合题意
                扩展或者收缩窗口
                慢指针移动
            更新答案
        返回 ans
            `,
        },
      ],
    },
  ],
  link:
    "https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md",
};

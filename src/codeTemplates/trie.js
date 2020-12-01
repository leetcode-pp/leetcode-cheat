module.exports = {
  title: "前缀树",
  list: [
    {
      text: "标准前缀树",
      problems: [
        {
          title: "208.实现 Trie (前缀树)",
          id: "implement-trie-prefix-tree",
        },
        {
          title: "211.添加与搜索单词 - 数据结构设计",
          id: "add-and-search-word-data-structure-design",
        },
        {
          id: "word-search-ii",
          title: "212.单词搜索 II",
        },
        {
          id: "concatenated-words",
          title: "472.连接词",
        },
        {
          title: "648. 单词替换",
          id: "replace-words",
        },
        {
          id: "short-encoding-of-words",
          title: "820.单词的压缩编码",
        },
        {
          title: "1032.字符流",
          id: "stream-of-characters",
        },
      ],
      codes: [
        {
          language: "py",
          text: `
class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.Trie = {}

    def insert(self, word):
        """
        Inserts a word into the trie.
        :type word: str
        :rtype: void
        """
        curr = self.Trie
        for w in word:
            if w not in curr:
                curr[w] = {}
            curr = curr[w]
        curr['#'] = 1

    def search(self, word):
        """
        Returns if the word is in the trie.
        :type word: str
        :rtype: bool
        """
        curr = self.Trie
        for i, w in enumerate(word):
            if w == '.':
                wizards = []
                for k in curr.keys():
                    if k == '#':
                        continue
                    wizards.append(self.search(word[:i] + k + word[i + 1:]))
                return any(wizards)
            if w not in curr:
                return False
            curr = curr[w]
        return "#" in curr
            `,
        },
        {
          language: "js",
          text: `
          function TrieNode(val) {
            this.val = val;
            this.children = [];
            this.isWord = false;
          }
          
          function computeIndex(c) {
            return c.charCodeAt(0) - "a".charCodeAt(0);
          }
          /**
           * Initialize your data structure here.
           */
          var Trie = function() {
            this.root = new TrieNode(null);
          };
          
          /**
           * Inserts a word into the trie.
           * @param {string} word
           * @return {void}
           */
          Trie.prototype.insert = function(word) {
            let ws = this.root;
            for (let i = 0; i < word.length; i++) {
              const c = word[i];
              const current = computeIndex(c);
              if (!ws.children[current]) {
                ws.children[current] = new TrieNode(c);
              }
              ws = ws.children[current];
            }
            ws.isWord = true;
          };
          
          /**
           * Returns if the word is in the trie.
           * @param {string} word
           * @return {boolean}
           */
          Trie.prototype.search = function(word) {
            let ws = this.root;
            for (let i = 0; i < word.length; i++) {
              const c = word[i];
              const current = computeIndex(c);
              if (!ws.children[current]) return false;
              ws = ws.children[current];
            }
            return ws.isWord;
          };
          
          /**
           * Returns if there is any word in the trie that starts with the given prefix.
           * @param {string} prefix
           * @return {boolean}
           */
          Trie.prototype.startsWith = function(prefix) {
            let ws = this.root;
            for (let i = 0; i < prefix.length; i++) {
              const c = prefix[i];
              const current = computeIndex(c);
              if (!ws.children[current]) return false;
              ws = ws.children[current];
            }
            return true;
          };
          
          /**
           * Your Trie object will be instantiated and called as such:
           * var obj = new Trie()
           * obj.insert(word)
           * var param_2 = obj.search(word)
           * var param_3 = obj.startsWith(prefix)
           */
                  `,
        },
      ],
    },
  ],
  link:
    "https://github.com/azl397985856/leetcode/blob/master/thinkings/trie.md",
};

import treeLogo from "../imgs/tree.svg";

const cppCode = `
struct TrieNode {
  TrieNode *children[26];
  bool isEnd;
  TrieNode(bool end=false) {
      isEnd = end;
      memset(children, 0, sizeof(children));
  }
};

class Trie {
private:
  TrieNode *root;
  
  TrieNode* findString(string word) {
      TrieNode *p = root;
      for (size_t i=0; i<word.size(); i++) {
          int index = word[i] - 'a';
          if(p->children[index] == nullptr)
              return nullptr;
          p = p->children[index];
      }
      return p;
  }
  
  void clear(TrieNode *root) {
      for (size_t i = 0; i < 26; i ++) 
          if (root->children[i])
              clear(root->children[i]);
      delete root;
  }
public:
  /** Initialize your data structure here. */
  Trie() {
      root = new TrieNode();
  }
  
  ~Trie() {
      clear(root);
  }
  
  /** Inserts a word into the trie. */
  void insert(string word) {
      TrieNode *p = root;
      for(size_t i=0; i<word.size(); i++) {
          int index = word[i] - 'a';
          if (!p->children[index])
              p->children[index] = new TrieNode();
          p = p->children[index];
      }
      p->isEnd = true;
  }
  
  /** Returns if the word is in the trie. */
  bool search(string word) {
      TrieNode *p = findString(word);
      return p != nullptr && p->isEnd;
  }
  
  /** Returns if there is any word in the trie that starts with the given prefix. */
  bool startsWith(string prefix) {
      TrieNode *p = findString(prefix);
      return p != nullptr;
  }
};

/**
* Your Trie object will be instantiated and called as such:
* Trie* obj = new Trie();
* obj->insert(word);
* bool param_2 = obj->search(word);
* bool param_3 = obj->startsWith(prefix);
*/
`;
const goCode = `
type Node struct {
	isWord bool
	next map[byte]*Node
}

func NewNode(isWord bool) *Node {
	return &Node{isWord: isWord, next: make(map[byte]*Node)}
}

type Trie struct {
	root *Node
}

//func NewTrie() *Trie {
//	return &Trie{root: NewNode(false)}
//}

/** Initialize your data structure here. */
func Constructor() Trie {
	return Trie{root: NewNode(false)}
}


/** Inserts a word into the trie. */
func (t *Trie) Insert(word string)  {
	cur := t.root
	for i := 0; i < len(word); i++ {
		c := word[i]
		_, ok := cur.next[c]
		if !ok { // 
			cur.next[c] = NewNode(false)
		} 
		cur = cur.next[c]
	}
	if !cur.isWord { // 标记为单词
		cur.isWord = true
	}
}


/** Returns if the word is in the trie. */
func (t *Trie) Search(word string) bool {
	cur := t.root
	for i := 0; i < len(word); i++ {
		c := word[i]
		v, ok := cur.next[c]
		if !ok {
			return false
		}
		cur = v
	}
	return cur.isWord
}


/** Returns if there is any word in the trie that starts with the given prefix. */
func (t *Trie) StartsWith(prefix string) bool {
	cur := t.root
	for i := 0; i < len(prefix); i++ {
		c := prefix[i]
		v,ok := cur.next[c]
		if !ok {
			return false
		}
		cur = v
	}
	return true
}
`;

const javaCode = `
class Trie {

  class TireNode {
      boolean isEnd = false;
      TireNode[] next = new TireNode[26];
      TireNode() {} 
  }

  private TireNode root;

  /** Initialize your data structure here. */
  public Trie() {
      root = new TireNode();
  }
  
  /** Inserts a word into the trie. */
  public void insert(String word) {
      TireNode node = root;
      for (char ch : word.toCharArray()) {
          if (node.next[ch-'a'] == null) {
              node.next[ch-'a'] = new TireNode();
          }
          node = node.next[ch-'a'];
      }
      node.isEnd = true;
  }
  
  /** Returns if the word is in the trie. */
  public boolean search(String word) {
      TireNode node = root;
      for (char ch : word.toCharArray()) {
          if (node.next[ch-'a'] == null) return false;
          node = node.next[ch-'a'];
      }
      return node.isEnd;
  }
  
  /** Returns if there is any word in the trie that starts with the given prefix. */
  public boolean startsWith(String prefix) {
      TireNode node = root;
      for (char ch : prefix.toCharArray()) {
          if (node.next[ch-'a'] == null) return false;
          node = node.next[ch-'a'];
      }
      return true;
  }
}

/**
* Your Trie object will be instantiated and called as such:
* Trie obj = new Trie();
* obj.insert(word);
* boolean param_2 = obj.search(word);
* boolean param_3 = obj.startsWith(prefix);
*/
`;
export default {
  title: "前缀树",
  logo: treeLogo,
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
        {
          language: "cpp",
          text: cppCode,
        },
        {
          language: "go",
          text: goCode,
        },
        {
          language: "java",
          text: javaCode,
        },
      ],
    },
  ],
  link:
    "https://github.com/azl397985856/leetcode/blob/master/thinkings/trie.md",
};

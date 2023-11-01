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

  TrieNode root;

  public Trie() {

      root = new TrieNode();
  }

  public void insert(String word) {

      TrieNode node = root;

      for (int i = 0; i < word.length(); i++) {

          if (node.children[word.charAt(i) - 'a'] == null)
              node.children[word.charAt(i) - 'a'] = new TrieNode();

          node = node.children[word.charAt(i) - 'a'];
          node.preCount++;
      }

      node.count++;
  }

  public boolean search(String word) {

      TrieNode node = root;

      for (int i = 0; i < word.length(); i++) {

          if (node.children[word.charAt(i) - 'a'] == null)
              return false;

          node = node.children[word.charAt(i) - 'a'];
      }

      return node.count > 0;
  }

  public boolean startsWith(String prefix) {

      TrieNode node = root;

      for (int i = 0; i < prefix.length(); i++) {

          if (node.children[prefix.charAt(i) - 'a'] == null)
              return false;
          node = node.children[prefix.charAt(i) - 'a'];
      }

      return node.preCount > 0;
  }

  private class TrieNode {

      int count; //表示以该处节点构成的串的个数
      int preCount; //表示以该处节点构成的前缀的字串的个数
      TrieNode[] children;

      TrieNode() {

          children = new TrieNode[26];
          count = 0;
          preCount = 0;
      }
  }
}
`;
export default () => ({
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
class TrieNode:
    def __init__(self):
        self.count = 0 # 表示以该处节点构成的串的个数
        self.preCount = 0 # 表示以该处节点构成的前缀的字串的个数
        self.children = {}

class Trie:

    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
            node.preCount += 1
        node.count += 1

    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.count > 0

    def startsWith(self, prefix):
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.preCount > 0
            `,
        },
        {
          language: "js",
          text: `
  var Trie = function() {
    this.children = {};
    this.count = 0 //表示以该处节点构成的串的个数
    this.preCount = 0 // 表示以该处节点构成的前缀的字串的个数
  };
  
  Trie.prototype.insert = function(word) {
    let node = this.children;
    for(let char of word){
      if(!node[char]) node[char] = {}
      node = node[char]
      node.preCount += 1
    }
    node.count += 1
  };
  
  Trie.prototype.search = function(word) {
    let node = this.children;
    for(let char of word){
      if(!node[char]) return false
      node = node[char]
    }
    return node.count > 0
  };
  
  Trie.prototype.startsWith = function(prefix) {
    let node = this.children;
    for(let char of prefix){
      if(!node[char]) return false
      node = node[char]
    }
    return node.preCount > 0
  };
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
  link: "https://github.com/azl397985856/leetcode/blob/master/thinkings/trie.md",
});

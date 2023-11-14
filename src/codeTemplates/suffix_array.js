import { t } from "../locales";

export default () => ({
  //   title: "后缀树组",
  title: t("Locale.codeTemplate.suffixArray.title"),
  logo: "",
  list: [
    {
      //   text: "标准版",
      text: t("Locale.codeTemplate.suffixArray.item1"),
      problems: [],
      codes: [
        {
          language: "cpp",
          text: `
          vector<int> sortCharacters(const string & text) {
            int n = text.size();
            vector<int> count(128), order(n);
            for (auto c : text) {
                count[c]++;
            }    
            for (int i = 1; i < 128; i++) {
                count[i] += count[i - 1];
            }
            for (int i = n - 1; i >= 0; i--) {
                count[text[i]]--;
                order[count[text[i]]] = i;
            }
            return order;
        }
        
        vector<int> computeCharClasses(const string & text, vector<int> & order) {
            int n = text.size();
            vector<int> res(n, 0);
            res[order[0]] = 0;
            for (int i = 1; i < n; i++) {
                if (text[order[i]] != text[order[i - 1]]) {
                    res[order[i]] = res[order[i - 1]] + 1;
                } else {
                    res[order[i]] = res[order[i - 1]];
                }
            }
            return res;
        }
        
        vector<int> sortDoubled(const string & text, int len, vector<int> & order, vector<int> & classfiy) {
            int n = text.size();
            vector<int> count(n), newOrder(n);
            for (int i = 0; i < n; i++) {
                count[classfiy[i]]++;
            }
            for (int i = 1; i < n; i++) {
                count[i] += count[i - 1];
            }
            for (int i = n - 1; i >= 0; i--) {
                int start = (order[i] - len + n) % n;
                int cl = classfiy[start];
                count[cl]--;
                newOrder[count[cl]] = start;
            }
            return newOrder;
        }
        
        vector<int> updateClasses(vector<int> & newOrder, vector<int> & classfiy, int len) {
            int n = newOrder.size();
            vector<int> newClassfiy(n, 0);
            newClassfiy[newOrder[0]] = 0;
            for (int i = 1; i < n; i++) {
                int curr = newOrder[i];
                int prev = newOrder[i - 1];
                int mid = curr + len;
                int midPrev = (prev + len) % n;
                if (classfiy[curr] != classfiy[prev] || classfiy[mid] != classfiy[midPrev]) {
                     newClassfiy[curr] = newClassfiy[prev] + 1;
                } else {
                     newClassfiy[curr] = newClassfiy[prev];
                }
            }
            return newClassfiy;
        }
        
        vector<int> buildSuffixArray(const string& text) {
            vector<int> order = sortCharacters(text);
            vector<int> classfiy = computeCharClasses(text, order);
            int len = 1;
            int n = text.size();
            for (int i = 1; i < n; i <<= 1) {
                order = sortDoubled(text, i, order, classfiy);
                classfiy = updateClasses(order, classfiy, i);
            }
            return order;
        }
        
        class Solution {
        public:
            string largestMerge(string word1, string word2) {
                int m = word1.size(), n = word2.size();
                string str = word1 + "@" + word2 + "*";
                vector<int> suffixArray = buildSuffixArray(str); 
                vector<int> rank(m + n + 2);
                for (int i = 0; i < m + n + 2; i++) {
                    rank[suffixArray[i]] = i;
                }
        
                string merge;
                int i = 0, j = 0;
                while (i < m || j < n) {
                    if (i < m && rank[i] > rank[m + 1 + j]) {
                        merge.push_back(word1[i++]);
                    } else {
                        merge.push_back(word2[j++]);
                    }
                }
                return merge;
            }
        };
              `,
        },
      ],
    },
  ],
  link: "",
});

class TrieNode {
    constructor () {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for (const c of word) {
            const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!curr.children[idx]) {
                curr.children[idx] = new TrieNode();
            }
            curr = curr.children[idx];
        }

        curr.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word, idx = 0, root = this.root) {
        let curr = root;
        for (let i = idx; i < word.length; ++i) {
            const c = word[i];
            if (c === ".") {
                for (const child of curr.children) {
                    if (child && this.search(word, i + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                const indx = c.charCodeAt(0) - 'a'.charCodeAt(0);
                if (!curr.children[indx]) {
                    return false;
                }
                curr = curr.children[indx];
            }
        }

        return curr.isEnd;
    }
}

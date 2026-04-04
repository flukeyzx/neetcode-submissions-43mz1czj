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

    getIndex (char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord (word) {
        let curr = this.root;

        for (const c of word) {
            const idx = this.getIndex(c);
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
    search (word) {
        return this.dfs(word, 0, this.root);
    }

    dfs (word, idx, root) {
        let curr = root;

        for (let i = idx; i < word.length; ++i) {
            const c = word[i];
            if (c === ".") {
                for (const child of curr.children) {
                    if (child && this.dfs(word, i + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                const indx = this.getIndex(c);
                if (!curr.children[indx]) {
                    return false;
                }
                curr = curr.children[indx];
            }
        }

        return curr.isEnd === true;
    }
}

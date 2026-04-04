class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for (const w of word) {
            const idx = w.charCodeAt(0) - 'a'.charCodeAt(0);
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
    search(word) {
        let curr = this.root;
        for (const w of word) {
            const idx = w.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!curr.children[idx]) {
                return false;
            }
            curr = curr.children[idx];
        }

        return curr.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
         let curr = this.root;
        for (const w of prefix) {
            const idx = w.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!curr.children[idx]) {
                return false;
            }
            curr = curr.children[idx];
        }

        return true;
    }
}

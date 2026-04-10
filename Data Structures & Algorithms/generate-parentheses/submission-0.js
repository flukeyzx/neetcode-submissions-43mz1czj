class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];
        this.backtrack(n, 0, 0, "", result);
        return result; 
    }

    backtrack (n, open, close, path, result) {
        if (n === open && n === close) {
            result.push(path);
            return;
        }

        if (open < n) {
            this.backtrack(n, open + 1, close, path + "(", result);
        }

        if (close < open) {
            this.backtrack(n, open, close + 1, path + ")", result);
        }
    }
}

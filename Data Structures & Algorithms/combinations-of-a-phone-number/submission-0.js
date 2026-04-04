class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const map = new Map();
        const combs = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j", "k", "l"], ["m", "n", "o"],
                        ["p", "q", "r", "s"], ["t", "u", "v"], ["w", "x", "y", "z"]];

        for (let i = 2; i <= 9; ++i) {
            map.set(i, combs[i - 2]);
        }

        const res = [];

        if (digits.length === 0) {
            return res;
        }
        
        this.dfs(digits, 0, "", map, res);
        return res;
    }

    dfs (digits, idx, path, map, res) {
        if (idx === digits.length) {
            res.push(path);
            return;
        }


        for (let i = 0; i < map.get(Number(digits[idx])).length; ++i) {
            const letter = map.get(Number(digits[idx]))[i];
            this.dfs(digits, idx + 1, path + letter, map, res);
        }
    }
}

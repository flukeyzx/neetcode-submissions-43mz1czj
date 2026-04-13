class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return [];
        const map = {
            "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"]
        };
        const result = [];
        this.backtrack(digits, map, "", 0, result);
        return result;
    }

    backtrack (digits, map, path, idx, result) {
        if (digits.length === path.length) {
            result.push(path);
            return;
        }


        const choices = map[digits[idx]]
        for (let i = 0; i < choices.length; ++i) {
            this.backtrack(digits, map, path + choices[i], idx + 1, result);
        }
    }
}

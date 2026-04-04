class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const state = [];
        this.dfs(s, 0, res, state);
        return res;
    }

    dfs (s, idx, res, state) {
        if (idx === s.length) {
            res.push([...state]);
            return;
        }

        for (let i = idx; i < s.length; ++i) {
            let substring = s.slice(idx, i + 1);
            if (this.isPalindrome(substring)) {
                state.push(substring);
                this.dfs(s, i + 1, res, state);

                state.pop();
            }
        }
    }

    isPalindrome (s) {
        let l = 0;
        let r = s.length - 1;

        while (l <= r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}

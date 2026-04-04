class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition (s) {
        const res = [];
        this.dfs(s, 0, [], res);
        return res;
    }

    dfs (s, start, path, res) {
        if (start === s.length) {
            res.push([...path]);
            return;
        }

        for (let end = start; end < s.length; ++end) {
            const substr = s.slice(start, end + 1);
            if (this.isPalindrome(substr)) {
                path.push(substr);
                this.dfs(s, end + 1, path, res);

                path.pop();
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

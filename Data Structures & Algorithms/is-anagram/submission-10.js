class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const map1 = new Map();
        const map2 = new Map();

        for (let i = 0; i < s.length; ++i) {
            const c1 = map1.get(s[i]) || 0;
            const c2 = map2.get(t[i]) || 0;
            map1.set(s[i], c1 + 1);
            map2.set(t[i], c2 + 1);
        }

        for (const [k, v] of map1) {
            if (map2.get(k) !== v) {
                return false;
            }
        }

        return true;
    }
}

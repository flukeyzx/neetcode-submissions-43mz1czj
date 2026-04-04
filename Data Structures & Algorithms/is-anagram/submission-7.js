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

        const map = new Map();

        for (let i = 0; i < s.length; ++i) {
            const count = map.get(s[i]) || 0;
            map.set(s[i], count + 1);
        }

        for (let i = 0; i < t.length; ++i) {
            if (!map.has(t[i])) {
                return false;
            }

            const count = map.get(t[i]);
            if (count === 1) {
                map.delete(t[i]);
            } else {
                map.set(t[i], count - 1);
            }

        }

        return map.size === 0;
    }
}

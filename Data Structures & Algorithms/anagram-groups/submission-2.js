class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const res = [];

        for (let i = 0; i < strs.length; ++i) {
            const count = new Array(26).fill(0);
            for (let j = 0; j < strs[i].length; ++j) {
                count[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = count.join("#");
            if (map.has(key)) {
                map.set(key, [...(map.get(key) || []), strs[i]]);
            } else {
                map.set(key, [strs[i]]);
            }
        }

        for (let [k, v] of map) {
            res.push(v);
        }

        return res;
    }
}

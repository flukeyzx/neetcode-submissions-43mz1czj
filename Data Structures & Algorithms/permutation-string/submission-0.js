class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const mapS1 = new Map();
        for (let i = 0; i < s1.length; ++i) {
            mapS1.set(s1[i], (mapS1.get(s1[i]) || 0) + 1);
        }

        const mapS2 = new Map();
        let left = 0;
        for (let right = 0; right < s2.length; ++right) {
            mapS2.set(s2[right], (mapS2.get(s2[right]) || 0) + 1);

            if (right - left + 1 > s1.length) {
                let val = mapS2.get(s2[left]);
                if (val === 1) {
                    mapS2.delete(s2[left]);
                } else {
                    mapS2.set(s2[left], mapS2.get(s2[left]) - 1);
                }
                left++;
            }

            if (right - left + 1 === s1.length && this.areMapsEqual(mapS1, mapS2)) {
                return true;
            }
        }

        return false;
    }

    areMapsEqual(map1, map2) {
        if (map1.size !== map2.size) {
            return false;
        }

        for (let [key, val] of map1) {
            if (map2.get(key) !== val) {
                return false;
            }
        }

        return true;
    }
}

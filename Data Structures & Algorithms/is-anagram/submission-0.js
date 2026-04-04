class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map()

        if(s.length !== t.length) return false 

        for(let w in s) {
            const count = map.get(s[w]) || 0
            map.set(s[w], count + 1)
        }

        for(let i = 0; i < t.length; i++) {
            if(map.has(t[i])) {
                const count = map.get(t[i])
                if(count === 1) {
                    map.delete(t[i])
                }else {
                    map.set(t[i], count - 1)
                }
                if(map.size === 0) return true
            } else {
                return false
            }
        }
    }
}

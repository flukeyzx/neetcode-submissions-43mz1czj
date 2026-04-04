class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false

        const map = new Map()
        
        for(let i = 0; i < t.length; i++) {
            const count = map.get(t[i]) || 0
            map.set(t[i], count + 1)
        }

        for(let i = 0; i < s.length; i++) {
            if(!map.has(s[i])) {
                return false
            }
            const count = map.get(s[i])
            if(count === 1) {
                map.delete(s[i])
            } else {
                map.set(s[i], count - 1)
            }
        }

        if(map.size === 0) return true
    }
}

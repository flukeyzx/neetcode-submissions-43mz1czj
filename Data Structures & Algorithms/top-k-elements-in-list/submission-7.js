class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        const freq = Array(nums.length + 1).fill(null).map(() => [])
        for(let elem of nums) {
            const count = map.get(elem) || 0
            map.set(elem, count + 1)
        }

        const result = []
        for(let [key, value] of map) {
            freq[value].push(key)
        }
        
        for(let i = freq.length - 1; i >= 0; i--) {
            if(result.length === k) return result
            if(freq[i].length) {
                result.push(...freq[i])
            }
        }
    }
}

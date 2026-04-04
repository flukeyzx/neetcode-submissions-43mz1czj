class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map()
        for(let i in nums) {
            if(map.has(nums[i])) {
                return true
            }
            map.set(nums[i], 1)
        }
        return false
    }
}

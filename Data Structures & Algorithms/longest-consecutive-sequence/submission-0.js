class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let longest = 0

        for(let num of set) {
            if(!set.has(num - 1)) {
                let length = 0
                while(set.has(num + length)) {
                    length++
                }
                longest = Math.max(length, longest)
            }
        }

        return longest
    }
}

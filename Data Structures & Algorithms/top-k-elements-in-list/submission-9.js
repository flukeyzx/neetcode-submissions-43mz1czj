class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        const res = [];

        for (let i = 0; i < nums.length; ++i) {
            const count = map.get(nums[i]) || 0;
            map.set(nums[i], count + 1);
        }

        for (let [key, val] of map) {
            bucket[val].push(key);
        }

        for (let i = bucket.length - 1; i >= 0; --i) {
            if (res.length === k) {
                return res;
            }

            if (bucket[i].length) {
                res.push(...bucket[i]);
            }
        }
    }
}

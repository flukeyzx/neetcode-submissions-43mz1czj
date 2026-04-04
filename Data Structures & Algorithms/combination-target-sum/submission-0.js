class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const combinations = []
        let sum = 0;
        this.backtrack(nums, 0, sum, combinations, res, target);
        return res;
    }

    backtrack(nums, idx, sum, combinations, res, target) {
        if (sum === target) {
            res.push([...combinations]);
            return;
        }

        if (sum > target) {
            return;
        }

        for (let i = idx; i < nums.length; ++i) {
            combinations.push(nums[i]);
            this.backtrack(nums, i, sum + nums[i], combinations, res, target);

            combinations.pop();
        }
    }
}

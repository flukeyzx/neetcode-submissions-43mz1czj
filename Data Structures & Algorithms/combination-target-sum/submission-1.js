class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        this.backtrack(nums, target, [], res, 0, 0);
        return res;
    }

    backtrack (nums, target, state, res, i, remaining) {
        if (remaining === target) {
            res.push([...state]);
            return;
        } 

        if (remaining > target) {
            return;
        }

        if (i >= nums.length) {
            return;
        }

        // we do not a loop as we can have multiple same numbers
        state.push(nums[i]);
        this.backtrack(nums, target, state, res, i, remaining + nums[i]);

        state.pop();
        this.backtrack(nums, target, state, res, i + 1, remaining);
    }
}

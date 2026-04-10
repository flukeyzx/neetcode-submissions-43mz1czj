class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum (nums, target) {
        const result = [];
        this.backtrack(nums, target, [], 0, 0, result);
        return result;
    }

    backtrack (nums, target, path, i, sum, result) {
        if (sum === target) {
            result.push([...path]);
            return;
        }

        if (sum > target) {
            return;
        }

        if (i >= nums.length) {
            return;
        }

        path.push(nums[i]);
        this.backtrack(nums, target, path, i, sum + nums[i], result);

        path.pop();
        this.backtrack(nums, target, path, i + 1, sum, result);
    }
}

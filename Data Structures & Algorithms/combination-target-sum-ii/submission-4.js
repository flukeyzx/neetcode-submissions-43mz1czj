class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const result = [];
        this.backtrack(candidates, target, [], 0, 0, result);
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
        this.backtrack(nums, target, path, i + 1, sum + nums[i], result);

        path.pop();
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }

        this.backtrack(nums, target, path, i + 1, sum, result);
    }
}

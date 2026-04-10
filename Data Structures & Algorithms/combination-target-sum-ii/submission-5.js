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

        for (let j = i; j < nums.length; ++j) {
            path.push(nums[j]);
            this.backtrack(nums, target, path, j + 1, sum + nums[j], result);

            path.pop();
            while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
                j++;
            }
        }
    }
}

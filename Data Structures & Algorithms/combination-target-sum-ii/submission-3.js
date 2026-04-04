class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        candidates.sort((a, b) => a - b);
        this.backtrack(candidates, target, res, 0, 0, []);
        return res;
    }

    backtrack (nums, target, res, idx, sum, combinations) {
        if (sum === target) {
            res.push([...combinations]);
            return;
        }

        if (idx >= nums.length || sum > target) {
            return;
        }

        combinations.push(nums[idx]);
        this.backtrack(nums, target, res, idx + 1, sum + nums[idx], combinations);

        combinations.pop();
        while (idx + 1 < nums.length && nums[idx] === nums[idx + 1]) {
            idx++;
        }
        this.backtrack(nums, target, res, idx + 1, sum, combinations);
    }
}

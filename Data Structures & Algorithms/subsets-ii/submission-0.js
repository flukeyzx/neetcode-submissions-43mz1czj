class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];
        const subset = [];
        nums.sort((a, b) => a - b);
        this.dfs(nums, 0, subset, res);
        return res;
    }

    dfs(nums, i, subset, res) {
        if (i === nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        this.dfs(nums, i + 1, subset, res);
        subset.pop();

        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }
        this.dfs(nums, i + 1, subset, res);
    }
}

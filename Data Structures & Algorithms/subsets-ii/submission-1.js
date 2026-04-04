class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const subsets = [];
        this.backtrack(nums, subsets, [], 0);
        return subsets;
    }

    backtrack (nums, subsets, path, i) {
        if (i >= nums.length) {
            subsets.push([...path]);
            return;
        }

        path.push(nums[i]);
        this.backtrack(nums, subsets, path, i + 1);

        path.pop();
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }

        this.backtrack(nums, subsets, path, i + 1);
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        this.backtrack(nums, [], 0, res);
        return res;
    }

    backtrack (nums, state, i, res) {
        if (i >= nums.length) {
            res.push([...state]);
            return;
        }
        
        state.push(nums[i]);
        this.backtrack(nums, state, i + 1, res);

        state.pop();
        this.backtrack(nums, state, i + 1, res);
    }
}

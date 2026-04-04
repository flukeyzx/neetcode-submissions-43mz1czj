class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const area = (r - l) * Math.min(heights[l], heights[r]);
            res = Math.max(res, area);

            if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return res;
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let max = 0;

        for (let r = 1; r < prices.length; ++r) {
            max = Math.max(prices[r] - prices[l], max);
            while (prices[l] > prices[r]) {
                l++;
            }
        }

        return max;
    }
}

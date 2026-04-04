class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let max = 0;

        for (let right = 1; right < prices.length; ++right) {
            while (prices[right] < prices[left]) {
               left++; 
            }

            max = Math.max(max, prices[right] - prices[left]);
        }

        return max;
    }
}

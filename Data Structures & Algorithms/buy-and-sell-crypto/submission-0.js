class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let right = 1
        let maxProfit = 0

        while(right < prices.length) {
            if(prices[left] < prices[right]) {
                const profit = prices[right] - prices[left]
                maxProfit = Math.max(profit, maxProfit)
            } else {
                left = right
            }
            right++
        }
        return maxProfit
    }
}

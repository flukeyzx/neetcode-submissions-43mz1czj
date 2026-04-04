class Solution:
    def maxArea(self, heights: List[int]) -> int:
        i = 0
        j = len(heights) - 1
        maxHeight = 0

        while i < j:
            height = (j - i) * min(heights[i], heights[j])
            maxHeight = max(maxHeight, height)
            if heights[i] < heights[j]:
                i += 1
            else:
                j -= 1
        
        return maxHeight
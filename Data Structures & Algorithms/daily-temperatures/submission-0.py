class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = []

        for i in range(len(temperatures)):
            total = 1
            j = i + 1
            while j < len(temperatures):
                if temperatures[j] > temperatures[i]:
                    break
                total += 1
                j += 1

            if j == len(temperatures):
                total = 0
            
            res.append(total)

        return res
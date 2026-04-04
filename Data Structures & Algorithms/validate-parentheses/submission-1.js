class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const map = new Map([
            ["]", "["],
            ["}", "{"],
            [")", "("],
        ]);

        for(let i = 0; i < s.length; i++) {
            const isBracketInMap = map.has(s[i])

            if(!isBracketInMap) {
                stack.push(s[i])
                continue
            }

            const isEqual = stack[stack.length - 1] === map.get(s[i])

            if(isEqual) {
                stack.pop()
                continue
            }

            return false
        }

        return stack.length === 0
    }
}

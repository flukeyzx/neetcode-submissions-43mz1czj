class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        for(let i = 0; i < tokens.length; i++) {
            if(tokens[i] === "+") {
                stack.push(stack.pop() + stack.pop()) 
            } else if(tokens[i] === "-") {
                let second = stack.pop()
                let first = stack.pop()
                stack.push(first - second)
            } else if(tokens[i] === "*") {
                stack.push(stack.pop() * stack.pop())
            } else if(tokens[i] === "/") {
                let second = stack.pop()
                let first = stack.pop()
                stack.push(Math.trunc(first / second))
            } else {
                stack.push(parseInt(tokens[i]))
            }
        }

        return stack.pop()
    }
}

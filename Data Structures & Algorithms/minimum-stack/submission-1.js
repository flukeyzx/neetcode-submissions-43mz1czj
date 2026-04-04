class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.topIndex = -1; 
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        val = Math.min(val, this.minStack.length === 0 ? val : this.minStack[this.topIndex]);
        this.minStack.push(val);
        this.topIndex++;
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
        this.topIndex--;
    }

    /**
     * @return {number}
     */
    top() { 
        return this.stack[this.topIndex];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.topIndex];
    }
}

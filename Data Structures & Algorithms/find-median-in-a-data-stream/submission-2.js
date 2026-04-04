class MedianFinder {
    constructor() {
        this.smallest = new PriorityQueue((a, b) => b - a);
        this.largest = new PriorityQueue((a, b) => a - b); 
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.largest.isEmpty() || num > this.largest.front()) {
            this.largest.enqueue(num);
        } else {
            this.smallest.enqueue(num);
        }

        if (this.smallest.size() + 1 < this.largest.size()) {
            this.smallest.enqueue(this.largest.dequeue());
        } else if (this.largest.size() + 1 < this.smallest.size()) {
            this.largest.enqueue(this.smallest.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.largest.size() === this.smallest.size()) {
            return (this.largest.front() + this.smallest.front()) / 2.0;
        } else {
            return this.smallest.size() > this.largest.size() 
            ? this.smallest.front() : this.largest.front(); 
        }
    }
}

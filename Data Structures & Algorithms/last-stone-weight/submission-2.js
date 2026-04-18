class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxPriorityQueue();
        for (const s of stones) {
            heap.enqueue(s);
        }

        return this.recurse(heap);
    }

    recurse (heap) {
        if (heap.size() === 0) {
            return 0;
        }

        if (heap.size() === 1) {
            return heap.front();
        }

        const diff = heap.dequeue() - heap.dequeue();

        if (diff > 0) {
            heap.enqueue(diff);
        }

        return this.recurse(heap)
    }
}

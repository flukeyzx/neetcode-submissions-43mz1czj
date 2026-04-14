class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const result = [];
        this.backtrack(n, [], result);
        return result;
    }

    backtrack (n, cols, result) {
        if (n === cols.length) {
            const board = this.convertBoard(cols, n);
            result.push(board);
            return;
        }

        for (let i = 0; i < n; ++i) {
            if (this.isValid(cols, i)) {
                cols.push(i);
                this.backtrack(n, cols, result);

                cols.pop();
            }
        }
    }

    isValid (cols, i) {
        for (let r2 = 0; r2 < cols.length; ++r2) {
            const c2 = cols[r2];
            if (i === c2 || Math.abs(cols.length - r2) === Math.abs(i - c2)) {
                return false;
            }
        }

        return true;
    }

    convertBoard (cols, n) {
        const board = [];
        for (let i = 0; i < cols.length; ++i) {
            board.push(".".repeat(cols[i]) + "Q" + ".".repeat(n - cols[i] - 1));
        }

        return board;
    }
}

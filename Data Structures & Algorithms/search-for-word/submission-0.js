class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist (board, word) {
         const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];
        const visited = Array.from({ length: board.length }, () => 
            Array(board[0].length).fill(false)
        );

        for (let i = 0; i < board.length; ++i) {
            for (let j = 0; j < board[i].length; ++j) {
                if (this.dfs(board, word, i, j, visited, 0, directions)) {
                    return true;
                };
            }
        }

        return false;
    }

    dfs (board, word, x, y, visited, idx, dir) {
        if (idx === word.length) {
            return true;
        }

        if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) {
            return false;
        }

        if (visited[x][y]) {
            return false;
        }

        if (board[x][y] !== word[idx]) {
            return false;
        }

        visited[x][y] = true;
        for (let [dx, dy] of dir) {
            if (this.dfs(board, word, x + dx, y + dy, visited, idx + 1, dir)) {
                return true
            }
        }

        visited[x][y] = false;
        return false;
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const dirs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];
        for (let r = 0; r < grid.length; ++r) {
            for (let c = 0; c < grid[0].length; ++c) {
                if (grid[r][c] === 0) {
                    this.bfs(grid, dirs, r, c);
                }
            }
        }

        return grid;
    }

    bfs (grid, dirs, r, c) {
        const q = new Queue();
        q.push([r, c]);
        let distance = 1;

        while (!q.isEmpty()) {
            const n = q.size();
            for (let i = 0; i < n; ++i) {
                const [row, col] = q.pop();
                for (const [dr, dc] of dirs) {
                    const nr = dr + row;
                    const nc = dc + col;

                    if (nr >= 0 && nr < grid.length && 
                        nc >= 0 && nc < grid[0].length &&
                        ![-1, 0].includes(grid[nr][nc]) && 
                        grid[nr][nc] > distance) {
                            q.push([nr, nc]);
                            grid[nr][nc] = distance;
                        }
                }
            }
            distance++;
        }
    }
}

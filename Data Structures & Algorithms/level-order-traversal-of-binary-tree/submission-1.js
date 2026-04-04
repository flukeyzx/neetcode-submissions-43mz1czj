/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) {
            return [];
        }

        const q = [root];
        const res = [];
        while (q.length) {
            const n = q.length;
            const lvl = [];
            for (let i = 0; i < n; ++i) {
                lvl.push(q[0].val);
                const curr = q.shift();
                if (curr.left) q.push(curr.left);
                if (curr.right) q.push(curr.right);
            }
            res.push(lvl);
        }

        return res;
    }
}

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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        this.max = 0;
        this.dfs(root);
        return this.max;
    }

    dfs (root) {
        if (!root) {
            return 0;
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);
        this.max = Math.max(this.max, left + right);

        return 1 + Math.max(left, right);
    }
}

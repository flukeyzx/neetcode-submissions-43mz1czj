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
     * @return {boolean}
     */
    isValidBST(root) {
        return this._dfs(root, -Infinity, Infinity);
    }

    _dfs (root, min, max) {
        if (!root) return true;

        if (min >= root.val || max <= root.val) {
            return false;
        }

        return this._dfs(root.left, min, root.val) &&
            this._dfs(root.right, root.val, max);
    }
}

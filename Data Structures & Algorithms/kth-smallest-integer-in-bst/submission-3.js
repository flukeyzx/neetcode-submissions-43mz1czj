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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = k;
        let res = root.val;

        const dfs = (root) => {
            if (!root) return;

            dfs(root.left);
            count--;
            if (count === 0) {
                res = root.val;
                return;
            }
            dfs(root.right);
        }   

        dfs(root);
        return res;
    }
}

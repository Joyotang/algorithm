/**
 * 109. 有序链表转换二叉搜索树
 * https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    var makeTree = function(head, tail) {
        if (head === tail) return null
        var p1 = head, p2 = head;
        // 快慢指针
        while(p2 !== tail) {
            p2 = p2.next;
            if (p2 !== tail) {
                p1 = p1.next;
                p2 = p2.next
            }
        }
        var treeNode = new TreeNode(p1.val);
        treeNode.left = makeTree(head, p1);
        treeNode.right = makeTree(p1.next, tail);
        return treeNode
    }
    return makeTree(head, null)
};
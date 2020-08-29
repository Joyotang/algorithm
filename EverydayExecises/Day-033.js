/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < moves.length; i++) {
        let move = moves[i];
        if (move === 'U') {
            y++;
        } else if (move === 'D') {
            y--;
        } else if (move === 'L') {
            x--;
        } else if (move === 'R') {
            x++;
        }
    }
    return x === 0 && y === 0;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 21. 合并两个有序链表
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 
 * 其实递归就是程序内部维护了一个栈。
 * 这个题就是每次都把最小值压入栈，最后出栈的时候，将所有数连在一起就可以了。
 * 说白了，就是用一个栈维护了顺序。
 * 最后的连接，当然是小的连小的，所以l1 小，就连到 l1; l2 小就连到 l2，最后先返回的，就是最小的头结点。
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

/* -----------------------------------The next day coding.------------------------------------- */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
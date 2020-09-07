/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let currNode = head;
    while (currNode != null) {
        let nextNode = currNode.next;
        console.log('currNode:', currNode);
        console.log('nextNode:', nextNode);

        currNode.next = prev;
        prev = currNode;
        console.log('prev:', prev);
        currNode = nextNode;
    }
    return prev;
};

let linked = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}

console.log(reverseList(linked))



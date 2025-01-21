/**
 * Definition for singly-linked list.
 */
export class ListNode<NodeValue = number> {
    val: NodeValue;
    next: ListNode<NodeValue> | null;

    constructor(val: NodeValue, next?: ListNode<NodeValue> | null) {
        this.val = val;
        this.next = next === undefined ? null : next;
    }

    print(): ListNode<NodeValue>["val"][] {
        const result: ListNode<NodeValue>["val"][] = [];

        const virtualHead = new ListNode<NodeValue>(
            this.val, // 占位
            this,
        );
        let current = virtualHead;
        while (current.next) {
            current = current.next;
            result.push(current.val);
        }

        return result;
    }

    static from<NodeValue>(rawList: NodeValue[]): ListNode<NodeValue>["next"] {
        const virtualHead = new ListNode<NodeValue>(
            rawList[0], // 占位
        );

        let current = virtualHead;
        rawList.forEach((value) => {
            const node = new ListNode(value);
            current.next = node;
            current = node;
        });

        return virtualHead.next;
    }
}

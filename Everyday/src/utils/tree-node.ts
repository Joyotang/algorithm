function isNil(value: any): value is null | undefined {
    return value == null;
}

/**
 * Definition for a binary tree node.
 */
export class TreeNode<Value = number> {
    val: Value;
    left: TreeNode<Value> | null;
    right: TreeNode<Value> | null;

    constructor(val: Value, left?: TreeNode<Value> | null, right?: TreeNode<Value> | null) {
        this.val = val;
        this.left = left ?? null;
        this.right = right ?? null;
    }

    /**
     * 获取子节点（仅当子节点 value 互不相同）
     */
    getChildNode(val: Value): TreeNode<Value> | null {
        const stack: TreeNode<Value>[] = [this];

        while (stack.length > 0) {
            const stackTop = stack.pop()!;

            if (stackTop.val === val) {
                return stackTop;
            }

            if (stackTop.left) {
                stack.push(stackTop.left);
            }
            if (stackTop.right) {
                stack.push(stackTop.right);
            }
        }

        return null;
    }

    /**
     * @param rawList 层序遍历存储的 node value
     */
    static from<Value>(rawList: (Value | null)[]): TreeNode<Value>["left" | "right"] {
        if (rawList.length === 0) {
            return null;
        }

        const root = new TreeNode(rawList.shift()!);

        const queue: TreeNode<Value>[] = [root];
        while (rawList.length > 0) {
            const currentNode = queue.shift();

            const leftValue = rawList.shift();
            const rightValue = rawList.shift();

            const leftNode = !isNil(leftValue) ? new TreeNode<Value>(leftValue) : null;
            const rightNode = !isNil(rightValue) ? new TreeNode<Value>(rightValue) : null;

            if (currentNode) {
                currentNode.left = leftNode;
                currentNode.right = rightNode;
            }

            if (leftNode) {
                queue.push(leftNode);
            }
            if (rightNode) {
                queue.push(rightNode);
            }
        }

        return root;
    }
}

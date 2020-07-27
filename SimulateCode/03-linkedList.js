class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    // 查找
    find(value) {
        let currentNode = this.head;
        while(currentNode.data !== value) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    // 查找上一个节点
    findPre(value) {
        let currentNode = this.head;
        while(currentNode.next !== null && currentNode.next.data !== value) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    // 插入节点
    insert(newValue, value) {
        const newNode = new Node(newValue);
        const currentNode = this.find(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode.next;
    }
    // 删除节点
    delete(value) {
        const preNode = this.findPre(value);
        const currentNode = preNode.next;
        preNode.next = preNode.next.next;
        return currentNode;
    }
}
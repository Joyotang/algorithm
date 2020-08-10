/**
 * JS模拟实现：堆（二叉堆）
 */
class BinaryHeap {
    constructor(compare) {
        this.d = 2;
        this.heap = [];
        this.compare = compare;
    }
    insert(insertValue) {
        this.heapifyUp(this.heap.length, insertValue);
    }
    delete(index) {
        if (this.isEmpty()) throw new Error('Heap is empty, No element to delete.');
        let value = this.heap[index];

        this.heapifyDown(index);
        return value;
    }
    heapifyUp(i, insertValue) {
        this.heap[i] = insertValue;

        while (i > 0 && this.compare(insertValue, this.heap[this.parent(i)]) < 0) {
            this.heap[i] = this.heap[this.parent(i)];
            this.heap[this.parent(i)] = insertValue;
            i = this.parent(i);
        }
    }
    heapifyDown(i) {
        while (i < this.heap.length) {
            let leftIndex = this.kthChild(i, 1);
            let rightIndex = this.kthChild(i, 2);

            // 没有左子节点
            if (leftIndex >= this.heap.length) break;

            // 没有右子节点
            if (rightIndex >= this.heap.length) {
                this.heap[i] = this.heap[leftIndex];
                i = leftIndex;
                break;
            }

            // 比较左右节点的大小，更大的换到父节点
            if (this.compare(this.heap[leftIndex], this.heap[rightIndex]) < 0) {
                this.heap[i] = this.heap[leftIndex];
                i = leftIndex;
            } else {
                this.heap[i] = this.heap[rightIndex];
                i = rightIndex;
            }
        }
        // 查看最后的空位是不是最后的叶子节点
        if (i < this.heap.length - 1) {
            this.heapifyUp(i, this.heap.pop());
        } else {
            this.heap.pop();
        }
    }
    top() {
        if (this.isEmpty()) throw new Error('Heap is empty.');
        return this.heap[0];
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    parent(i) {
        let { d } = this;
        return Math.floor((i - 1) / d);
    }
    kthChild(i, k) {
        return this.d * i + k;
    }
    maxChild(i) {
        let leftChild = this.kthChild(i, 1);
        let rightChild = this.kthChild(i, 2);
        return this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
    }
    printHeap() {
        console.log('heap:', this.heap);
    }
}



let maxHeap = new BinaryHeap((a, b) => b - a);
maxHeap.insert(10);
maxHeap.insert(4);
maxHeap.insert(9);
maxHeap.insert(1);
maxHeap.insert(7);
maxHeap.insert(5);
maxHeap.insert(3);

maxHeap.printHeap();
maxHeap.delete(5);
maxHeap.printHeap();
maxHeap.delete(2);
maxHeap.printHeap();





/**
 * 堆的实现（二叉堆-大顶堆）
 */
//  待完善，删除有bug
class BinaryMaxHeap {
    constructor(arr = []) {
        this.d = 2;
        this.heap = [];
        // 初始化堆
        if (Array.isArray(arr)) {
            arr.forEach(this.insert.bind(this));
        }
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    delete(index) {
        if (this.isEmpty()) throw new Error('Heap is empty, No element to delete.');

        let maxElement = this.heap[index];
        this.heap[index] = this.heap.pop();
        this.heapifyDown(index);
        return maxElement;
    }
    top() {
        if (this.isEmpty()) throw new Error('Heap is empty.');
        return this.heap[0];
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    parent(i) {
        return Math.floor((i - 1) / this.d);
    }
    kthChild(i, k) {
        return this.d * i + k;
    }
    heapifyUp(i) {
        let insertValue = this.heap[i];
        while (i > 0 && insertValue > this.heap[this.parent(i)]) {
            this.heap[i] = this.heap[this.parent(i)];
            i = this.parent(i);
        }
        this.heap[i] = insertValue;
    }
    heapifyDown(i) {
        let child = null;
        let temp = this.heap[i];
        while (this.kthChild(i, 1) < this.heap.length) {
            child = this.maxChild(i);
            if (temp >= this.heap[child]) break;
            
            this.heap[i] = this.heap[child];
            i = child;
        }
        this.heap[i] = temp;
    }
    maxChild(i) {
        let leftChild = this.kthChild(i, 1);
        let rightChild = this.kthChild(i, 2);
        return this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
    }
}

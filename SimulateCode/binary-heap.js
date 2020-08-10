class BinaryHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }
    insert(value) {
        this.insertAt(this.heap.length, value);
    }
    insertAt(index, value) {
        this.heap[index] = value;
        // 对比【当前节点】与父级节点，如果【父级节点】更小就交换他们
        while (index > 0 && this.compare(value, this.heap[this.parent(index)]) < 0) {
            this.heap[index] = this.heap[this.parent(index)];
            this.heap[this.parent(index)] = value;
            index = this.parent(index);
        }
    }
    delete(index) {
        if (this.heap.length === 0) return false;

        let value = this.heap[index];
        let i = index;

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
            this.insertAt(i, this.heap.pop());
        } else {
            this.heap.pop();
        }
        return value;
    }
    top() {
        return this.heap[0];
    }
    parent(index) {
        return Math.floor((index - 1) / 2);
    }
    kthChild(i, d) {
        return i * 2 + d;
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
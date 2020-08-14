/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    arr.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < k; i++) {
        res.push(arr[i]);
    }
    return res;
};



function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

class MaxHeap {
    constructor(arr = []) {
        this.heap = [];
        if (Array.isArray(arr)) {
            arr.forEach(this.insert.bind(this));
        }
    }
    insert(data) {
        const { heap } = this;
        heap.push(data);

        let index = heap.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (heap[index] <= heap[parent]) break;

            swap(heap, index, parent);
            index = parent;
        }
        return true;
    }
    extract() {
        const { heap } = this;
        if (!heap.length) return null;

        // 首先拿顶部的开刀，和最后一个交换
        swap(heap, 0, heap.length - 1);
        let res = heap.pop();   // 紧接着把最后一个拿掉（就是之前顶部的那个）

        // 之前最后一个比较小的置换到了顶部，然后重建堆
        let length = heap.length - 1;
        let index = 0;
        let exchange = index * 2 + 1;   // 左节点索引是基数
        let right = index * 2 + 2;      // 右节点索引是偶数

        while (exchange < length) {
            if (right < length && heap[right] > heap[exchange]) {
                exchange = right;
            }
            if (heap[exchange] <= heap[index]) break;
            swap(heap, index, exchange);
            index = exchange;
            exchange = index * 2 + 1;
        }
        return res;
    }
    top() {
        const { heap } = this;
        if (heap.length) return heap[0];
        return null;
    }
}


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
        console.log('insertValue', insertValue);
        while (i > 0 && insertValue > this.heap[this.parent(i)]) {
            this.heap[i] = this.heap[this.parent(i)];
            i = this.parent(i);
        }
        console.log('i', i);
        this.heap[i] = insertValue;
    }
    heapifyDown(i) {
        let childIndex;
        let temp = this.heap[i];
        while (this.kthChild(i, 1) < this.heapSize) {
            childIndex = this.maxChild(i);
            this.heap[i] = this.heap[this.parent(i)];
            if (temp >= this.heap[childIndex]) break;

            this.heap[i] = this.heap[childIndex];
            i = childIndex;
        }
        this.heap[i] = temp;
    }
    maxChild(i) {
        let leftChild = this.kthChild(i, 1);
        let rightChild = this.kthChild(i, 2);
        return this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
    }
}

const maxHeap = new BinaryMaxHeap([0,1,1,2,4,4,1,3,3,2]);
console.log('maxHeap:', maxHeap);



var getLeastNumbers = function(arr, k) {
    if (k >= arr.length) return arr;

    let list = [];
    for (let i = 0; i < k; i++) {
        list.push(arr[i]);
    }

    let maxHeap = new BinaryMaxHeap(list);

    for (let i = k; i < arr.length; ++i) {
        if (maxHeap.top() > arr[i]) {
            maxHeap.extract();
            maxHeap.insert(arr[i]);
        }
    }
    return maxHeap.heap;
};

/* -----------------------------------The next day coding.------------------------------------- */
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

/**
 * 最小的 k 个数
 * @param {*} arr 
 * @param {*} k 
 */
var getLeastNumbers = function(arr, k) {
    if (k >= arr.length) return arr;

    let maxHeap = new BinaryHeap((a, b) => b - a);

    for (let i = 0; i < k; i++) {
        maxHeap.insert(arr[i]);
    }

    for (let i = k; k < arr.length; i++) {
        if (maxHeap.top() > arr[i]) {
            maxHeap.insert(arr[i]);
            maxHeap.delete(0);
        }
    }
    return maxHeap.heap;
};



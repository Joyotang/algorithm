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




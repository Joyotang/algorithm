/**
 * 堆的实现（二叉堆-大顶堆）
 */

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


class BinaryHeap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    insert(value) {
        this.insertAt(this.data.length, value);
    }

    insertAt(index, value) {
        this.data[index] = value;
        // 对比当前节点与其父节点，如果当前节点更小就交换它们
        while (index > 0 && this.compare(value, this.data[Math.floor((index - 1) / 2)]) < 0) {
            this.data[index] = this.data[Math.floor((index - 1) / 2)];
            this.data[Math.floor((index - 1) / 2)] = value;
            index = Math.floor((index - 1) / 2);
        }
    }

    delete(index) {
        if (this.data.length === 0) return;

        let value = this.data[index];
        let i = index;
        // fix heap
        while (i < this.data.length) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            // 没有左子节点
            if (left >= this.data.length) break;
            // 没有右子节点
            if (right >= this.data.length) {
                this.data[i] = this.data[left];
                i = left;
                break;
            }
            // 比较左右子节点的大小，更小的补到父节点
            if (this.compare(this.data[left], this.data[right]) < 0) {
                this.data[i] = this.data[left];
                i = left;
            } else {
                this.data[i] = this.data[right];
                i = right;
            }
        }
        // 查看最后的空位是不是最后的叶子节点
        if (i < this.data.length - 1) {
            this.insertAt(i, this.data.pop());
        } else {
            this.data.pop();
        }
        return value;
    }

    printHeap() {
        console.log("nHeap = ");
        console.log(this.data);
    }
}



/**
 * 大顶堆
 */
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

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
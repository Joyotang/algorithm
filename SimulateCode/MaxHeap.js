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
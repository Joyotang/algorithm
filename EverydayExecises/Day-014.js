// JavaScript二叉堆
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

// 小顶堆
function MinHeap(capacity, compartor) {
    this.capacity = capacity;
    this.compartor = compartor;
    this.heap = [];
}

MinHeap.prototype.insert = function (value) {
    if (this.heap.length < this.capacity) {
        this.heap.push(value);
        this.swim(this.heap.length - 1);
    } else {
        if (this.compartor(value, this.heap[0]) > 0) {
            this.heap[0] = value;
            this.sink(0);
        }
    }
};

// 上浮下标为 index 的节点
MinHeap.prototype.swim = function (index) {
    if (index >= this.heap.length) return;
    const parentIndex = parseInt((index - 1) / 2);
    if (this.compartor(this.heap[index], this.heap[parentIndex]) >= 0) return;
    this.exchange(index, parentIndex);
    this.swim(parentIndex);
};

// 下沉下标为 index 的节点
MinHeap.prototype.sink = function (index) {
    if (index * 2 + 1 >= this.heap.length) return;
    let next = index * 2 + 1;
    if (next + 1 < this.heap.length && this.compartor(this.heap[next], this.heap[next + 1]) > 0) {
        next = next + 1;
    }
    if (this.compartor(this.heap[index], this.heap[next]) <= 0) return;
    this.exchange(index, next);
    this.sink(next);
};

MinHeap.prototype.exchange = function (idx1, idx2) {
    const temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            let val = hash.get(nums[i]);
            hash.set(nums[i], val + 1);
        } else {
            hash.set(nums[i], 1);
        }
    }

    let minHeap = new MinHeap(k, (a, b) => a.value - b.value);
    
    for (const [key, value] of hash.entries()) {
        console.log('[key, value]:', [key, value]);
        minHeap.insert({ key, value })
    }
    console.log('minHeap:', minHeap);

    return minHeap.heap.map(item => item.key);
};

console.log(topKFrequent([1,1,1,2,2,3], 2))



/* -----------------------------------The next day coding.------------------------------------- */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            let val = hash.get(nums[i])
            hash.set(nums[i], val + 1);
        } else {
            hash.set(nums[i], 1);
        }
    }

    let minHeap = new MinHeap(k, (a, b) => a.value - b.value);

    for (const [key, value] in hash.entries()) {
        minHeap.insert({key, value});
    }
    return minHeap.heap.map(item => item.key);
};





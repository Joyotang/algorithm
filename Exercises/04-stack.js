// 数组模拟实现栈
class Stack {
    constructor(size) {
        this.list = [];
        this.size = size;
        this.count = 0;
    }
    // 入栈
    push(item) {
        if (this.count === this.size) return false;

        this.list[this.count] = item;
        this.count++;
        return true;
    }
    // 出栈
    pop() {
        if (this.count === 0) return null;

        const temp = this.list[this.count - 1];
        this.count--;
        return temp;
    }
    // 是否为空
    isEmpty() {
        return this.count === 0;
    }
    // 栈中数据的数量
    size() {
        return this.count;
    }
    // 返回栈中最近添加的元素而不删除它
    peek() {
        const n = this.count;
        return this.list[n - 1];
    }
}
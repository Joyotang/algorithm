## 预习与准备

## 如何高效学习算法训练营课程？

### 职业训练
* 拆分知识点；
* 刻意练习（五遍刷题法）；
* 反馈；

### 五遍刷题法（五毒神掌）
* 第一遍：
    - 5分钟：读题 + 思考；
    - 直接看题解：注意！多解法、比较解法优劣；
    - 背诵、默写好的解法；

* 第二遍：
    - 马上自己写 => LeetCode提交；
    - 多种解法比较、体会 => 优化；

* 第三遍（一天后）：
    - 过了一天后：再重复做题；
    - 不同解法的熟练程度 => 专项练习；  

* 第四遍（一周后）：
    - 反复练习相同题目；

* 第五遍（面试前一周）：
    - 恢复性训练；

## 数据结构与算法总览

### 数据结构
* 一维：
    - 基础：数组(array/string)、链表(linked list)等；
    - 高级：栈(stack)、队列(queue)、双端队列(deque)、集合(set)、映射(map or hash)等；

* 二维：
    - 基础：树(tree)、图(graph)；
    - 高级：二叉搜索树(binray search tree / red-black tree / AVL)、堆(heap)、并查集(disjoint set)、字典树(Trie)等；

* 特殊：
    - 位运算(Bitwise)、布隆过滤器(Bloom Fliter)
    - LRU Cache

### 算法
* if/else、switch => 分支(Branch)
* for、while loop => 迭代(Iteration)
* 递归(Recursion);
* 搜索(Search)：深度优先搜索(DFS)、广度优先搜索(BFS)；
* 动态规划(Dynamic Programming)；
* 二分查找(Binray Search)；
* 贪心(Greedy)；
* 数学(Math)；
* 几何(Geometry)；

## 时间复杂度与空间复杂度（复杂度分析）
Big O notation

* O(1) - 常数复杂度(Contant Complexity)
* O(log n) - 对数复杂度(Logarithmic Complexity)
* O(n) - 线性时间复杂度(Linear Complexity)
* O(n^2) - 平方复杂度(N Square Complexity)
* O(n^3) - 立方复杂度(N cubic Complexity)
* O(2^n) - 指数复杂度(Exponential Complexity)
* O(!n) - 阶乘(Factorial Complexity)

### 时间复杂度

#### 简单理解方式
* 分析代码的执行次数，一段语句只执行一次，那就是O(1)；
* 一个循环为O(n)，2个嵌套的循环为O(n^2)，3个嵌套的循环为O(n^3)，并列的两个循环还是O(n)；
* 递归的复杂度是指数级的

#### 主定理
* 二分查找：O(log n)
* 二叉树遍历：O(n)
* 最优排序矩阵搜索：O(n)
* 归并排序：O(n)

### 空间复杂度
* 1. 数组的长度（一维数组为：O(n)，二维数组为：O(n^2)）
* 2. 递归的深度（以最深的深度，复杂度为：O(n)）

> 如果既有数组，又是递归，那么**两者取最大**。


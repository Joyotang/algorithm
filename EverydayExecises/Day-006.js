/**
 * 189. 旋转数组
 * https://leetcode-cn.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;

    // 第一次：反转整个数组 （0 ~ length-1）
    reverse(0, n - 1);

    // 第二次：反转数组 0 ~ k-1 的范围
    reverse(0, k - 1);

    // 第三次：反转数组 k ~ n-1 的范围
    reverse(k, n - 1);

    function reverse(start, end) {
        let temp = 0;
        while (start < end) {
            temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    return nums;
};


/**
 * 88. 合并两个有序数组
 * https://leetcode-cn.com/problems/merge-sorted-array/submissions/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while((p1 >= 0) && (p2 >= 0)) {
        
        // if (nums1[p1] < nums2[p2]) {
        //     nums1[p] = nums2[p2];
        //     p2--;
        // } else {
        //     nums1[p] = nums1[p1];
        //     p1--;
        // }
        // p--;

        nums1[p--] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--];
    }
    console.log('nums1:', nums1);
    console.log('nums2:', nums2);
    
    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
    }
    // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为p2+1
    arrayCopy(nums2, 0, nums1, 0, p2 + 1);
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));


var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while((p1 >= 0) && (p2 >= 0)) {
        console.log('--------(p1 >= 0) && (p2 >= 0)--------');
        nums1[p--] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--];
    }
    console.log('nums1:', nums1);
    console.log('nums2:', nums2);

    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        let copyNums2 = src.slice(srcIndex, srcIndex + length);
        console.log('srcIndex:', srcIndex);
        console.log('srcIndex + length:', srcIndex + length);
        console.log('copyNums2:', copyNums2);
        dest.splice(destIndex, length, ...copyNums2);
    }
    console.log('p2:', p2);
    // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为p2+1
    arrayCopy(nums2, 0, nums1, 0, p2 + 1);
    return nums1;
};


// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([0], 0, [1], 1));
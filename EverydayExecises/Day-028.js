/**
 * 153. 寻找旋转排序数组中的最小值
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let n = nums.length;
    if (!n) return -1;
    if (n === 1) return nums[0];

    let left = 0;
    let right = n - 1;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] < nums[right]) {
            // mid 可能是最小值
            right = mid;
        } else {
            // mid 肯定不是最小值
            left = mid + 1;
        }
    }
    return nums[left];
};


/**
 * 使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序开始的位置
 * @param {*} nums 
 */
function findUnordered(nums) {
    let n = nums.length;
    if (!n || n <= 1) return -1;
    let left = 0;
    let right = n - 1;
    
    while (left < right) {
        let mid = (left + right) >> 1;
        if (nums[left] < nums[mid]) {
            // 说明无序的地方在mid位置后面
            console.log(`nums[left] < nums[mid]: left:${left}, mid:${mid}, right:${right}`);
            left = mid;
        } else if (nums[left] >= nums[mid]) {
            // 说明无序的地方在mid位置的前面
            console.log(`nums[left] > nums[mid]: left:${left}, mid:${mid}, right:${right}`);
            right = mid;
        }
    }
    return right;
}

console.log(findUnordered([4, 5, 6, 7, 0, 1, 2]))
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index = 0;
    let index1 = 0;
    let index2 = 0;
    let arr: number[] = [];

    while (index1 < m && index2 < n) {
        if (nums1[index1] < nums2[index2]) {
            arr[index++] = nums1[index1++];
        } else {
            arr[index++] = nums2[index2++];
        }
    }

    while (index1 < m) {
        arr[index++] = nums1[index1++];
    }

    while (index2 < n) {
        arr[index++] = nums2[index2++];
    }

    for (let i = 0; i < arr.length; i++) {
        nums1[i] = arr[i];
    }
};

merge(nums1, m, nums2, n);
console.log(nums1);

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    let mid = (left + right) >> 1; // 相当于：mid = Math.floor(array.length / 2);

    while (left <= right) {
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}
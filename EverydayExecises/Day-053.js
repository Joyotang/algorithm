/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];
    if (!intervals || !intervals.length) return res;

    intervals.sort((a, b) => a[0] - b[0]);
    res = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= res[res.length - 1][1]) {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
        } else {
            res.push(intervals[i]);
        }
    }
    return res;
};
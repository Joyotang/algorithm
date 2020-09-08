var getPermutation = function(n, k) {
    let used = new Set();
    let groupNums = 1;
    for (let i = 1; i <= n; i++) {
        groupNums = groupNums * i;
    }
    
    function backtrack(path) {
        let progress = path.length;
        if (progress === n) {
            return path.join('');
        }

        groupNums = groupNums / (n - progress);
        
        for (let i = 1; i <= n; i++) {
            if (used.has(i)) continue;
            if (k > groupNums) {
                k = k - groupNums;
                continue;
            }
            path.push(i);
            used.add(i);

            return backtrack(path);
        }
    }
    return backtrack([]);
};


console.log(getPermutation(3, 3))
/**
 * 1.递归
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N <= 1) return N;
    return fib(N - 1) + fib(N - 2);
};



/**
 * 2.递归添加缓存优化
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N <= 1) return N;
    let cache = [];
    cache[0] = 0;
    cache[1] = 1;

    function memoize(N) {
        if (cache[N] != null) return cache[N];

        cache[N] = memoize(N - 1) + memoize(N - 2);
        return memoize(N);
    }

    return memoize(N);
};


/**
 * 3.循环
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N <= 1) return N;
    let cache = [];
    cache[0] = 0;
    cache[1] = 1;
    
    for (let i = 2; i <= N; i++) {
        console.log('i:',i);
        cache[i] = cache[i - 1] + cache[i - 2];
        console.log(`cache[${i}]:`, cache[i]);
    }
    return cache[N];
};


console.log(fib(10))




// O(1)
let n = 100;
console.log('Hey, your input is:', n);

// O(1)
let n = 100;
console.log('Hey, your input is:', n);
console.log('log:', n);
console.log('And more:', n);

// O(N)
let n = 100;
for (let i = 0; i < n; i++) {
    console.log("Hey, I'm busy looking at:", i);
}


// O(N^2)
let n = 100;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log("Hey, I'm busy looking at: " + i + " and " + j);
    }
}


// O(logN)
let n = 100;
for (let i = 0; i < n; i = i * 2) {
    console.log("Hey, I'm busy looking at:", i);
}


// O(K^N)
let n = 100;
function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}
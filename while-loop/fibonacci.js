
// 1. Print the Fibonacci series up to n terms
// (Each term = sum of previous two terms)

let n = 10;

let firstTerm = 0;
let secondTerm = 1;

let count = 1;

console.log(firstTerm);
console.log(secondTerm);

while (count <= n - 2) {

    // next term is sum of previous two terms
    let nextTerm = firstTerm + secondTerm;
    console.log(nextTerm);

    // shift values for next iteration
    firstTerm = secondTerm;
    secondTerm = nextTerm;

    count++;
}


// 2. Find and print the sum of Fibonacci series up to n terms

let terms = 10;

let a = 0;
let b = 1;

let fibonacciSum = a + b;

let i = 1;

while (i <= terms - 2) {

    let next = a + b;
    fibonacciSum += next;

    a = b;
    b = next;

    i++;
}

console.log(fibonacciSum);
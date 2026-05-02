
// 1. Print all factors of a given number

let n = 12;          // number whose factors we want
let i = 1;           // start from 1

while (i <= n) {

    // if i divides n completely, it's a factor
    if (n % i === 0) {
        console.log(i);   // print factor
    }

    i++;  // move to next number
}


// 2. Find and print the sum of all factors of a number

let number = 12;
let j = 1;
let factorSum = 0;

while (j <= number) {

    if (number % j === 0) {
        factorSum = factorSum + j;
    }

    j++;
}

console.log(factorSum);   // Output: 28


// 3. Calculate factorial of a given number

let num = 5;
let factorial = 1;
let k = 1;

while (k <= num) {
    factorial = factorial * k;
    k++;
}

console.log(factorial);   // Output: 120


// 4. Check whether a number is a Perfect number
// (Sum of proper factors = number, excluding the number itself)

let perfectNum = 28;
let l = 1;
let sumOfFactors = 0;

while (l < perfectNum) {   // exclude the number itself

    if (perfectNum % l === 0) {
        sumOfFactors = sumOfFactors + l;
    }

    l++;
}

if (sumOfFactors === perfectNum) {
    console.log("Perfect Number");
} else {
    console.log("Not a Perfect Number");
}
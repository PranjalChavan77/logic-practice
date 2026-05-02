
// 1. Check whether a number is prime

let number = 7;              // number to check
let i = 2;                   // start checking from 2
let isPrime = true;          // assume number is prime

// loop from 2 to number/2
while (i <= Math.floor(number / 2)) {

    // if divisible by any number → not prime
    if (number % i === 0) {
        isPrime = false;
        break;
    }

    i++;
}

// final result
if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}


// 2. Print all prime numbers between 1 and 100

let num = 2;   // start from first prime candidate

while (num <= 100) {

    let divisor = 2;
    let isPrime = true;

    // check if num has any divisor
    while (divisor <= Math.floor(num / 2)) {

        if (num % divisor === 0) {
            isPrime = false;
            break;
        }

        divisor++;
    }

    // print number if it is prime
    if (isPrime) {
        console.log(num);
    }

    num++;
}
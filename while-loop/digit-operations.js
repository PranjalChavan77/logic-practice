
// 1. Product of digits of a number

let num = 123;
let product = 1;

while (num > 0) {
    let digit = num % 10;      // extract last digit
    product *= digit;          // multiply with result
    num = Math.floor(num / 10);
}

console.log(product);


// 2. Count digits of a number

let number = 12345;
let count = 0;

while (number > 0) {
    count++;                   // increment count
    number = Math.floor(number / 10);
}

console.log(count);


// 3. Reverse a number

let originalNum = 987654321;
let reversed = 0;

while (originalNum > 0) {
    let digit = originalNum % 10;
    reversed = reversed * 10 + digit;
    originalNum = Math.floor(originalNum / 10);
}

console.log(reversed);


// 4. Sum of digits

let numForSum = 7777;
let sum = 0;

while (numForSum > 0) {
    let digit = numForSum % 10;
    sum += digit;
    numForSum = Math.floor(numForSum / 10);
}

console.log(sum);


// 5. Check palindrome

let palindromeNum = 181;
let temp = palindromeNum;
let rev = 0;

while (temp > 0) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
}

if (palindromeNum === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


// 6. Smallest digit

let numSmall = 4729;
let smallest = 9;

while (numSmall > 0) {
    let digit = numSmall % 10;

    if (digit < smallest) {
        smallest = digit;
    }

    numSmall = Math.floor(numSmall / 10);
}

console.log(smallest);


// 7. Largest digit

let numLarge = 9971;
let largest = 0;

while (numLarge > 0) {
    let digit = numLarge % 10;

    if (digit > largest) {
        largest = digit;
    }

    numLarge = Math.floor(numLarge / 10);
}

console.log(largest);
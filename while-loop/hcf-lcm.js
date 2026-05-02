
// 1. Find the HCF (Highest Common Factor) of two numbers
// HCF = greatest number that divides both numbers exactly

let a = 12;
let b = 18;

let i = 1;
let hcf = 1;

// loop till the smaller number
let limit = a < b ? a : b;

while (i <= limit) {

    // if i divides both numbers, it's a common factor
    if (a % i === 0 && b % i === 0) {
        hcf = i;   // keep updating to get the highest one
    }

    i++;
}

console.log("HCF =", hcf);


// 2. Find the LCM (Least Common Multiple) of two numbers
// LCM = smallest number that is divisible by both numbers

// Formula: LCM = (a * b) / HCF

let lcm = (a * b) / hcf;

console.log("LCM =", lcm);
// Armstrong number is sum of each digit raised to the power of number of digits = original number

// 1. Take the number
let num = 153;

// 2. Store original number (we need it for final comparison)
let original = num;

// 3. STEP 1: Count number of digits
let temp = num;
let digits = 0;

while (temp > 0) {
    digits++;                      // increase digit count
    temp = Math.floor(temp / 10); // remove last digit
}

// 4. STEP 2: Calculate Armstrong sum
temp = num;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;   // extract last digit

    // raise digit to power of total digits and add to sum
    sum = sum + Math.pow(digit, digits);

    temp = Math.floor(temp / 10); // remove last digit
}

// 5. STEP 3: Compare result
if (sum === original) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}
// 1.  Find and print the product of all digits of a given number

let num = 123;
let product = 1;

while (num > 0) {
    let digit = num % 10;          // get last digit
    product = product * digit;     
    num = Math.floor(num / 10);  //Math.floor() removes the decimal part and gives the smallest integer
}

console.log(product);

// 2. Count and print the total number of digits in a given number

let number =12345;
let count = 0;

while (number > 0) {
  count++;
  number = Math.floor (number/ 10);   //Remove digits one by one
}

console.log(count);

// 3. Reverse the given number and print the reversed value

let numbers = 987654321;
let reverse = 0;

while (numbers > 0) {
    let digit = numbers % 10;        //Extract the last digit of the number
    reverse = reverse * 10 + digit;     // Multiply existing reverse by 10 to shift digits left, then add the new digit at the end
    numbers = Math.floor ( numbers / 10 );   //Remove the last digit from the original number
}

console.log(reverse);

// 4. Find and print the sum of digits of the given number ( add each digit)

let nums = 7777;
let sum = 0;

while (nums > 0) {
    let digit = nums % 10;
    sum = sum + digit;
    nums = Math.floor (nums / 10);
}

console.log(sum);

// 5. Check whether the given number is a palindrome

let no = 181;
let original = no;
let rev = 0;

while (no > 0) {
    let digit = no % 10;
    rev = rev * 10 + digit;
    no = Math.floor (no / 10);
}
if (original === rev) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

// 6. Find the smallest digit in the given number ( compare each digit keep smallest)

let num1= 4729;
let smallest = 9;   // assume max possible digit

while (num1 > 0) {
    let digit = num1 % 10;

    if (digit < smallest) {
    smallest = digit;
  }
    num1 = Math.floor (num1 /10);
  
}

console.log(smallest);

// 7.Find the largest digit in the given number

let num2 = 9971;
let largest = 0;

while (num2 > 0) {
    let digit = num2 % 10;

    if (digit > largest) {
        largest = digit;
    }

    num2 = Math.floor (num2 / 10);
}

console.log(largest);


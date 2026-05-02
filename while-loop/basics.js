
// 1. Print numbers from 1 to 10

let num = 1;

while (num <= 10) {
    console.log(num);
    num++;
}


// 2. Print numbers from 10 to 1 (reverse order)

let reverseNum = 10;

while (reverseNum >= 1) {
    console.log(reverseNum);
    reverseNum--;
}


// 3. Print even numbers between 1 and 100

let even = 2;

while (even <= 100) {
    console.log(even);
    even += 2;
}


// 4. Print odd numbers between 1 and 100

let odd = 1;

while (odd <= 100) {
    console.log(odd);
    odd += 2;
}


// 5. Print square of numbers from 1 to n

let n = 10;
let i = 1;

while (i <= n) {
    console.log(i * i);
    i++;
}


// 6. Print cube of numbers from 1 to n

let m = 5;
let j = 1;

while (j <= m) {
    console.log(j * j * j);
    j++;
}


// 7. Print numbers divisible by 7 between 1 and 100

let start = 1;
let end = 100;

while (start <= end) {
    if (start % 7 === 0) {
        console.log(start);
    }
    start++;
}
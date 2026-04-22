// 1. Print all numbers from 1 to 10 using a loop

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// 2. Print numbers from 10 down to 1 in reverse order

let a = 10;

while (a >= 1) {
  console.log(a);
  a--;
}

// 3. Print all even numbers between 1 and 100 ( even number = divisible by 2 )

let b = 2;

while (b <= 100) {
    console.log(b);
    b += 2;               // keeps adding 2
}

// 4. Print all odd numbers between 1 and 100

let c = 1;

while (c <= 100) {
    console.log(c);
    c += 2;
}

// 5. Print the square of each number from 1 to n

let d = 10;
let e = 1;

while (e <= d) {
  console.log(e * e);
  e++;
}

// 6.  Print the cube of each number from 1 to n

let f = 5;
let g = 1;

while (g <= f) {
    console.log(g * g * g);
    g++;
}

// 7. Print all numbers between h and j that are divisible by 7

let h = 1, j = 100;
let k = h;

while (k <= j){
  if (k% 7 === 0) console.log(k)
  k++;
}

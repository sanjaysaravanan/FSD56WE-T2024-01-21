// Given a number, print its factorial

// I/P
// 5

// O/P
// 120

// I/P
// 6

// O/P
// 720

const userInput = ["5"];

const num = parseInt(userInput[0]);

let fact = 1;

let i = num;

while (i > 0) {
  fact = fact * i;
  i--;
}

console.log(fact);

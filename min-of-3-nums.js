// Given three integers, find the minimum value

// I/P
// 18 19 10

// O/P
// 10

// I/P
// 17 19 21

// O/P
// 17

const userInput = ["18 19 10"];

// userInput[0] --> "18 19 10"

// split the above line1 into an array
const arr = userInput[0].split(" "); // arr = ['18', '19', '10'];

const num1 = parseInt(arr[0]);
const num2 = parseInt(arr[1]);
const num3 = parseInt(arr[2]);

// decide which is lesser with first two numbers
// if (num1 < num2 && num1 < num3) {
//   console.log(num1);
// } else if (num2 < num1 && num2 < num3) {
//   console.log(num2);
// } else {
//   console.log(num3);
// }

console.log(Math.min(num1, num2, num3));

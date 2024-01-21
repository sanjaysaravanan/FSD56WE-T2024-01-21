// Given an age, print Major if the age is greater than or equal to 18
// else print Minor if the age is less than 18

// I/P
// 18

// O/P
// Major

// I/P
// 17

// O/P
// Minor

const userInput = ["18"];

// string age --> number age
const age = parseInt(userInput[0]); // parseInt("18")

// console.log(typeof age);

// Condition check for Major
if (day >= 18) {
  console.log("Major");
} else {
  console.log("Minor");
}

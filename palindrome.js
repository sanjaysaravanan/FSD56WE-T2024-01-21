// Check for palindrome for a given string

// I/P
// MOM

// O/P
// True, MOM is palindrome

// I/P
// CAR

// O/P
// False, CAR is not palindrome

const userInput = ["MOM"];

const str = userInput[0];

let i = str.length - 1;
let result = "";
while (i >= 0) {
  result = result + str[i];
  i--;
}

// palindrome
if (result === str) {
  console.log("True", str, "is a palindrome");
} else {
  console.log("False", str, "is not a palindrome");
}

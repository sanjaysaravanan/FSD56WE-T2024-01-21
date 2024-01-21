// Given a string print the reverse of it
// guvigeek
// keegivug

const str = "guvigeek";

// i 0 -----> 7 ( str.length - 1 )
let i = 0;
while (i < str.length) {
  console.log(str[i]);
  i++;
}
// i 7 ---> 0
//
let i = str.length - 1;
let result = "";
while (i >= 0) {
  //console.log(str[i]);
  result = result + str[i];
  i--;
}

// palindrome
console.log(result);

// array reverse method
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = str.length - 1;
let resArr = [];
while (i >= 0) {
  resArr.push(arr[i]);
  i--;
}

arr.reverse();

console.log(arr);

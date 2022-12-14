// Requirements

// Define and code the functions below.

// Define the functions using the approach as specified (either as a function expression or declaration).

// Be sure to number each function with a comment above it.

// After each function, call it at least once and console.log the results.

// 1. (Completed Example)
//  a. Define a function, as a function declaration /maxOfTwoNumbers/
//  b. That takes two numbers as arguments and returns the largest of them.
//  c. If they are the same, return that number. Use the if-else construct or a ternary expression - (the Math.max method is not allowed).
//
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9)); // output: 9
//
//
// 2.
//  a. Define a function, as a function expression, maxOfThree
//  b. That takes three numbers as arguments
//  c. Returns the largest of them. Again, the (Math.max method is not allowed).
//
// First Attempt:
// const maxOfThree = (a, b, c) => {
//   if (a >= c) {
//     return a;
//   } else if (b >= c) {
//     return b;
//   } else {
//     return c;
//   }
// };
//
//
// console.log(maxOfThree(4, 17, 27));

// Second Attempt:
// const maxOfThree = (a, b, c) => {
//   if (a >= c) return a;
//   if (b >= c) return b;
//   else return c;
// };

// console.log(maxOfThree(4, 17, 27));

//Using Ternary Operator
const maxOfThree = (a, b, c) => (a >= c ? a : c, b >= c ? b : c, c ? c : c);

console.log(maxOfThree(4, 17, 27)); // output: 27
//
//
// 3.
//  a. Define a function, as a function declaration, isCharAVowel
//  b. Takes a character as an argument
//  c. returns true if it is a vowel
//  d. false otherwise.
//
function isCharAVowel(arg) {
  const vowel = "a, e, i, o, u";
  for (let i = 0; i < vowel.length; i++) {
    if (arg === vowel[i]) {
      console.log("True");
      return true;
    }
  }
  console.log("False");
  return false;
}

isCharAVowel("e"); // output: True
isCharAVowel("z"); // output: False
//
//
// 4.
//  a. Define a function, as a function expression, sumArray
//  b. That takes an array of numbers and returns the sum of those numbers. (For example, sumArray([2, 4, 5]);would return 11.)
//
// notes: reduce() method executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.

const sumArray = [49, 78, 84].reduce(
  (firstSum, totalSum) => (firstSum += totalSum)
);
console.log(sumArray); // output: 211
//
//
// 5.
//  a. Define a function, as a function declaration, multiplyArray
//  b. That takes an array of numbers and returns the product of those numbers. (For example, multiplyArray([2, 4, 5]);would return 40.)
const arr = [49, 78, 84].reduce(multiplyArray);

function multiplyArray(arrSum, sumProduct) {
  return arrSum * sumProduct;
}
console.log(arr); // output: 321048
//
//
// 6.
//  a. Define a function, as a function expression, numArgs
//  b. That returns the number of arguments passed to the function when called.
const numArgs = (...args) => {
  return args.length;
};
console.log(numArgs(49, 78, 84, 90, 207, 2038)); // output: 6

//
// 7.
//  a. Define a function, as a function declaration, reverseString
//  b. That takes a string, reverses the characters, and returns it.
//     (For example, reverseString('rockstar');would return the string "ratskcor".)
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("rockstar")); // output: ratskcor
//
//
// 8.
//  a. Define a function, as a function expression, longestStringInArray
//  b. That takes an array of strings as an argument and returns the length of the longest string.
let array = ["Pumpkin", "Apple", "Peach", "Plum"];
const longestStringInArray = array.reduce((a, b, c, d) =>
  a.length > b.length
    ? a
    : b || b.length > c.length
    ? b
    : c || c.length > d.length
    ? c
    : d || d.length
    ? d
    : d
);
console.log(longestStringInArray); // output: Pumpkin
// 9.
//  a.  Define a function, as a function declaration, stringsLongerThan
//  b.  That takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in.
//      (For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].)
const arrayStrings = ["say", "hello", "in", "the", "morning"];

function stringsLongerThan(strArr, a) {
  let longestString = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > a) {
      longestString.push(strArr[i]);
    }
  }
  return longestString;
}

console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));

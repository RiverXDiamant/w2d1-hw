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

console.log(maxOfTwoNumbers(3, 9));

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

console.log(maxOfThree(4, 17, 27));

// 3.
//  a. Define a function, as a function declaration, isCharAVowel
//  b. Takes a character as an argument
//  c. returns true if it is a vowel
//  d. false otherwise.
//
function isCharAVowel(arg) {
  const vowel = "a, e, i, o, u";
  for (var i = 0; i < vowel.length; i++) {
    if (arg === vowel[i]) {
      console.log("True");
      return true;
    }
  }
  console.log("False");
  return false;
}

isCharAVowel("e");
isCharAVowel("z");

// 4.
//  a. Define a function, as a function expression, sumArray
//  b. That takes an array of numbers and returns the sum of those numbers. (For example, sumArray([2, 4, 5]);would return 11.)

// 5.
//  a. Define a function, as a function declaration, multiplyArray
//  b. That takes an array of numbers and returns the product of those numbers. (For example, multiplyArray([2, 4, 5]);would return 40.)

// 6.
//  a. Define a function, as a function expression, numArgs
//  b. That returns the number of arguments passed to the function when called.

// 7.
//  a. Define a function, as a function declaration, reverseString
//  b. That takes a string, reverses the characters, and returns it.
//     (For example, reverseString('rockstar');would return the string "ratskcor".)

// 8.
//  a. Define a function, as a function expression, longestStringInArray
//  b. That takes an array of strings as an argument and returns the length of the longest string.

// 9.
//  a.  Define a function, as a function declaration, stringsLongerThan
//  b.  That takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in.
//      (For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].)

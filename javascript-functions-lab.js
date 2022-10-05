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

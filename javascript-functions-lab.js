// Requirements
// Define and code the functions below.

// Define the functions using the approach as specified (either as a function expression or declaration).

// Be sure to number each function with a comment above it.

// After each function, call it at least once and console.log the results.

// 1. (Completed Example)
//  a. Define a function, as a function declaration /maxOfTwoNumbers/
//  b. That takes two numbers as arguments and returns the largest of them.
//  c. If they are the same, return that number. Use the if-else construct or a ternary expression - (the Math.max method is not allowed.)
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

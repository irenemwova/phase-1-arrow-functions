// In index.js

// Define a function expression called divide
const divide = function(num1, num2) {
    return num1 / num2;
  };
  
  // Define an arrow function called square
  const square = (num) => num * num;
  
  // Define an arrow function called add
  const add = (num1, num2) => num1 + num2;
  
  // Export the functions so they can be tested
  module.exports = {
    divide,
    square,
    add
  };
  
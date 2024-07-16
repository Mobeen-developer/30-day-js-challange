// Tasks/Activities:
// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.

let num1 = 50
let num2 = 25
let result = num1 + num2
console.log(result);

//Task 2: Write a program to subtract two numbers and log the result to the console.


let num3 = 100
let num4 = 95
let result2 = num3 - num4
console.log(result2);

//Task 3: Write a program to multiply two numbers and log the result to the console.

let num5 = 5
let num6 = 5
let result3 = num5 * num6
console.log(result3);

//Task 4: Write a program to divide two numbers and log the result to the console.

let num7 = 15
let num8 = 3
let result4 = num7/num8
console.log(result4);

//Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let num9 = 20
let num10 = 3
let result5 = num9%num10
console.log(result5);

// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let number1 = 5;
number1 = number1 + 95;
console.log(number1);

//Task 7: Use the operator to subtract a number from a variable and log the result to the console.

let number2 = 60
number2 = number2 - 30
console.log(number2);

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let number3 = 80
let number4 = 40
let result6 = number3 > number4
console.log(result6);

// Task 9: Write a program to compare two numbers using >= and  <= and log the result to the console

let number5 = 45;
let number6 = 45;
let result7 = number5 >= number6;
console.log(result7);

// Task 10: Write a program to compare two numbers using ==  and === and log the result to the console.


let firstValue = 20
let secondValue = "20"
console.log(firstValue == secondValue );
console.log(firstValue === secondValue);


// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

if(num1>num2 && num3>num2) {
    console.log("num2 is smaller than both");
}
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

if(num2===num3 || num1===num3) {
    console.log("They are Equal");
}
// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

if(num1!==num2) {
    console.log("true");
}

// Activity 5: Ternary Operator
// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
const num16 = -3;
console.log(num16 >= 0 ? "The number is positive." : "The number is negative.");

// Feature Request:
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
    // Arithmetic Operations Script
const c = 10;
const d = 5;

console.log("Addition:", c + d);
console.log("Subtraction:", c - d);
console.log("Multiplication:", c * d);
console.log("Division:", c / d);
console.log("Remainder:", c % d);


// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions
// using logical operators, logging the results.

// Comparison and Logical Operators Script
const x = 15;
const y = 10;

console.log("x > y:", x > y);
console.log("x <= y:", x <= y);
console.log("x == y:", x == y);
console.log("x != y:", x != y);

console.log("x > 10 && x < 20:", x > 10 && x < 20);
console.log("x < 10 || x > 5:", x < 10 || x > 5);

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

// Ternary Operator Script
const number = -7;
console.log(number >= 0 ? "The number is positive." : "The number is negative.");


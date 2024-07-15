/*
Activity 1: Variable Declaration
• Task 1: Declare a variable using var, assign it a number, and log the value to the console. 
• Task 2: Declare a variable using let, assign it a string, and log the value to the console.
*/
var number = 55
console.log(number);
/*It is prefer to not use var due to functional scope error*/

let word = ("I'm here to accept the challenge to learn javascript as a beginner and IN SHA Allah i will master in it in 30 days")
console.log(word);
// Activity 2: Constant Declaration
const userName = ("Mobeen_Ashraf")
console.log(userName);

/* Task 3: Declare a variable using const, assign it a boolean value, 
and log the value to the console.*/

const loggedIn = true;
console.log(loggedIn);

/*Activity 3: Data Types

Task 4: Create variables of different data types (number, string, boolean, object, array) and 
log each variable's type using the typoof operator.   */

let nameOfCoder = "My name is Mobeen";
let age = 23;
let student =true;
let disability ={skills:"web-developer",email:"mobeenashraf0011@gmail.com"};
let array = [1,2,3,4];
console.log(typeof(nameOfCoder));
console.log(typeof(age));
console.log(typeof(student));
console.log(typeof(disability));
console.log(typeof(array));

/*Activity 4: Reassigning variables
Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console. */
let someNumber = 55
let reAssignNumber = String(someNumber)
console.log(typeof(reAssignNumber));


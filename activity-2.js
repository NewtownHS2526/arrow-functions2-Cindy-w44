// Activity 2: Functions with Single Parameter to Arrow Functions
// Convert each function below to an arrow function

// Problem 1
function greet(name) {
    return "Hello, " + name + "!";
}
// Convert to arrow function:
const greet2 = (name) => "Hello, " + name + "!";
console.log(greet2);

// Problem 2
function square(number) {
    return number * number;
}
// Convert to arrow function:
const square2 = (number) => number * number;
console.log(square2);

// Problem 3
function double(value) {
    return value * 2;
}
// Convert to arrow function:
const double2 = (value) => value * 2;
console.log(double2);

// Problem 4
function isEven(num) {
    return num % 2 === 0;
}
// Convert to arrow function:
const isEven2 = (num) => num % 2 === 0;
console.log(isEven2);

// Problem 5
function capitalize(str) {
    return str.toUpperCase();
}
// Convert to arrow function:
const capitalize2 = (str) => str.toUpperCase();
console.log(capitalize2);

// Problem 6
function getLength(text) {
    return text.length;
}
// Convert to arrow function:
const getLength2 = (text) => text.length;
console.log(getLength2);

// Problem 7
function addOne(x) {
    return x + 1;
}
// Convert to arrow function:
const addOne2 = (x) => x + 1;
console.log(addOne2);

// Problem 8
function isPositive(n) {
    return n > 0;
}
// Convert to arrow function:
const isPositive2 = (n) => n > 0;
console.log(isPositive2);

// Problem 9
function reverseString(s) {
    return s.split("").reverse().join("");
}
// Convert to arrow function:
const reverseString2 = (s) => s.split("").reverse().join("");
console.log(reverseString2);

// Problem 10
function getType(value) {
    return typeof value;
}
// Convert to arrow function:
const getType2 = (value) => typeof value;
console.log(getType2);

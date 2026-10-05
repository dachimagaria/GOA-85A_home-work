// if enemy can defeat you defeat your self so the enemy cant defeat you words by
// master wu

// 1
function sayHello() {
  return "Hello, student!";
}

let greeting = sayHello;
console.log(greeting());

// 2
function add(a, b) {
  return a + b;
}

let calculate = add;
console.log(calculate(5, 3));

// 3
function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

let operation = multiply;

console.log(operation(5, 4));

operation = subtract;

console.log(operation(5, 4));

// 4
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

let operation2;

operation2 = add;
console.log(operation2(20, 5));

operation2 = multiply;
console.log(operation2(20, 5));

operation2 = subtract;
console.log(operation2(20, 5));

// 5
function addNumbers(a, b) {
  return a + b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function calculateNumbers(a, b, operation) {
  return operation(a, b);
}

console.log(calculateNumbers(5, 3, addNumbers));
console.log(calculateNumbers(5, 3, multiplyNumbers));

// 6
function double(number) {
  return number * 2;
}

function square(number) {
  return number * number;
}

function negative(number) {
  return -number;
}

function processNumber(number, operation) {
  return operation(number);
}

console.log(processNumber(5, double));
console.log(processNumber(5, square));
console.log(processNumber(5, negative));

// 7
function passed(score) {
  return "Student passed";
}

function failed(score) {
  return "Student failed";
}

function showResult(score, resultFunction) {
  return resultFunction(score);
}

console.log(showResult(90, passed));
console.log(showResult(40, failed));

// 8
let price = 200;

function discount(price) {
  return price - 20;
}

function tax(price) {
  return price + 18;
}

function shipping(price) {
  return price + 30;
}
  
function processPrice(price, operation) {
  return operation(price);
}

console.log(processPrice(price, discount));
console.log(processPrice(price, tax));
console.log(processPrice(price, shipping));

// 9
function doubleNumber(number) {
  return number * 2;
}
 
function squareNumber(number) {
  return number * number;
}

function addTen(number) {
  return number + 10;
}

 

function half(number) {
  return number / 2;
}

function transform(number, operation) {
  return operation(number);   
}

console.log(transform(20, doubleNumber));
console.log(transform(20, squareNumber));
console.log(transform(20, addTen));
console.log(transform(20, half));
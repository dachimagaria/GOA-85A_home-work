function processNumber(number, operation) {
    return operation(number);
}

function double(number) {
    return number * 2;
}

function triple(number) {
    return number * 3;
}

function square(number) {
    return number * number;
}

console.log(processNumber(5, double));
console.log(processNumber(5, triple));
console.log(processNumber(5, square));
//////////////////////////////////////////
function processText(text, action) {
    return action(text);
}

function makeUpperCase(text) {
    return text.toUpperCase();
}

function makeLowerCase(text) {  
    return text.toLowerCase();
}

function getLength(text) {
    return text.length;
}

console.log(processText("JavaScript", makeUpperCase));
console.log(processText("JavaScript", makeLowerCase));
console.log(processText("JavaScript", getLength));
//////////////////////////////////////////
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
//////////////////////////////////////////
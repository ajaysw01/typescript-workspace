"use strict";
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(2, 2));
const divide = function (x, y) {
    return x / y;
};
console.log(divide(8, 2));
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(8, 2));
function greet(username, greeting) {
    return greeting ? `${greeting} ${username}` : `${username}`;
}
console.log(greet("Ajay"));
function greet1(username, greeting = 'hi') {
    return `${greeting} ${username}`;
}
console.log(greet1("ajay"));
function getLength(value) {
    return value.length;
}
console.log(getLength("ajay"));
console.log(getLength([1, 3, 2, 1, 3, 12, 12]));
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(12, 32, 23, 23, 23));
function msg(msg, ...names) {
    names.forEach((name) => {
        console.log(`${msg}, ${name}`);
    });
}
console.log(msg("hello", 'ajay', 'sham', 'gopal', 'raju'));
//# sourceMappingURL=functionDemo.js.map
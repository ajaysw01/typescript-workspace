"use strict";
let a1 = 1;
a1 = 10;
function add(a, b) {
    return a + b;
}
const y = add(1, 2);
console.log(y);
let num = 1234234324;
let num1 = 2342344352342454324543352n;
console.log(num);
console.log(num1);
let text = "My name is ajay wankhade";
let isAvailable = true;
let nums = [1, 5, 23, 435, 2];
let charArray = ['as', 'asdb', 'adfa'];
let val = null;
let user;
console.log(user);
let obj = {
    name: 'Ajay',
    age: 20
};
obj = { ...obj, age: 44, name: "Wankhade" };
console.log(obj);
let value;
value = 10;
value = 'a';
function testAnyType(txt) {
    console.log(txt);
}
let numArray = [23, 34, 23, 2, 2, 23];
let chArray = ['a', 's'];
let tup = [1, 'a'];
let coordinates = [10, 20, 30];
let reponse = [201, "Success"];
var Color;
(function (Color) {
    Color["RED"] = "red";
    Color["GREEN"] = "green";
    Color["BLUE"] = "blue";
})(Color || (Color = {}));
console.log(Color.BLUE);
let size = 2;
console.log(size);
let notSure = 'a';
if (typeof (notSure) === 'number') {
    notSure.toFixed(2);
}
else if (typeof (notSure) === 'string') {
    notSure.length;
}
function infiniteLoop() {
    while (true) {
        console.log(1);
    }
}
function throwError(message) {
    throw new Error(message);
}
function logMessage(message) {
    console.log(message);
}
logMessage("Lets Nacho");
let username = 'Nikhil';
let someVal = 'Ajju Bhai ';
let strLength = someVal.length;
console.log(strLength);
let id;
id = 'abc';
id = 123;
function printId(id) {
    console.log('id : ${ id }');
}
printId('xyz');
printId('4543');
function printIdfn(id) {
    if (typeof (id) === 'string') {
        console.log('id is a string : ', id.toUpperCase);
    }
    else {
        console.log('id is a number : ${ id } ');
    }
}
printIdfn('ajjub bhai ');
let person = {
    name: 'ajay',
    age: 24,
    greet: function () {
        console.log("Function not implemented.");
    }
};
person.greet();
const add1 = (x, y) => x + y;
const subtract = (x, y) => x - y;
console.log(subtract(5, 4));
console.log(add1(5, 4));
let userId = 'abc';
let person1 = {
    name: 'abc',
    age: 12
};
let userId1 = 'abc';
let orderId = 101;
let myCustomer = {
    address: "ngp",
    name: "xyz",
    phoen: 1231431
};
let myCar = {
    name: 'maruti',
    modelNo: 800,
    isElectric: true
};
//# sourceMappingURL=index.js.map
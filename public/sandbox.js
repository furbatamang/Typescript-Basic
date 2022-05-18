"use strict";
const nam = "sandesh";
const age = 10;
const isMale = true;
console.log(`${nam} is ${age} years old and he is ${isMale}`);
const fullName = (firstName, lastName) => {
    return `My name is ${firstName} ${lastName}`;
};
console.log(fullName("Sandesh", "Tamang"));
// explicit types
let character;
let num;
let isAuth;
// Arrays
let users = []; //Arrays of string, initialized to use push method
// union type it can be used in other variable types too
let mixed = []; //we can use string or number
mixed.push("Ram");
mixed.push(50);
// console.log(mixed);
let uid;
uid = "ram";
uid = 10;
uid = true;
// Objects
let student;
student = {
    name: "Ramesh",
    age: 50,
    address: "Chitwan",
    isAdmitted: false
};
// any type can be chaneged
// let something: any
// something = "ram";
// console.log(something)
// something = 9
// console.log(something)
// function type
let greet;
greet = () => {
    console.log("Hello world");
};
const add = (num1, num2, num3) => {
    return num1 + num2;
};
console.log(add(3, 4));
const userDetail = (user) => {
    console.table(user);
};
const user = {
    username: "Sandesh",
    address: "bharatpur-9",
    age: 24,
    roll: 90,
    premium: true
};
userDetail(user);
// functin signature
let test;
test = (name, age) => {
    console.log(`Hi my name is ${name} and iam ${age} years old`);
};
test("Sandesh", 24);
// DOM

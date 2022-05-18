const nam: string = "sandesh";
const age: number = 10;
const isMale: boolean = true;

console.log(`${nam} is ${age} years old and he is ${isMale}`);

const fullName = (firstName: string, lastName: string) => {
  return `My name is ${firstName} ${lastName}`;
};

console.log(fullName("Sandesh", "Tamang"));

// explicit types

let character: string;
let num: number;
let isAuth: boolean;

// Arrays
let users: string[] = []; //Arrays of string, initialized to use push method

// union type it can be used in other variable types too
let mixed: (string | number)[] = []; //we can use string or number

mixed.push("Ram");
mixed.push(50);
// console.log(mixed);

let uid: string | number | boolean;

uid = "ram";
uid = 10;
uid = true;

// Objects

let student:{
    name:string,
    age:number,
    address:string,
    isAdmitted:boolean
}


student = {
    name:"Ramesh",
    age:50,
    address:"Chitwan",
    isAdmitted:false
}


// any type can be chaneged


// let something: any
// something = "ram";
// console.log(something)
// something = 9
// console.log(something)

// function type

let greet : Function;

greet = (): void => {
  console.log("Hello world")
}


const add = (num1:number, num2:number, num3?:number|string):number => {
  return num1+num2
}

console.log(add(3,4))

// Alias
type stringOrNum = string|number; 
type userObj = {username:string, address:string, age:stringOrNum}
const userDetail = (user:userObj) => {
  console.table(user)
}


const user={
  username:"Sandesh",
  address:"bharatpur-9",
  age:24,
  roll:90,
  premium:true
}


userDetail(user)



// functin signature

let test: (a:string, b:number) => void;

 test = (name:string, age:number) => {
  console.log(`Hi my name is ${name} and iam ${age} years old`)
}


test("Sandesh", 24);


// DOM


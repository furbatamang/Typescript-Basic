import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("Sachin","working on project",100);
const invTwo = new Invoice("Ramseh","for lying", 400);


let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.format())
})
const anchor = document.querySelector("a")!

const form = <HTMLFormElement> document.querySelector(".new-item-form");

// type casting
const type = <HTMLSelectElement> document.querySelector("#type");
const tofrom = <HTMLInputElement> document.querySelector("#tofrom");
const details = <HTMLInputElement> document.querySelector("#details");
const amount = <HTMLInputElement> document.querySelector("#amount")


form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
})

//Interfaces

interface isStudent{
    name:string,
    roll:number,
    age:number,
    address:string,
    study(faculty:string):void,
    home(time:number):number
}

import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("Sachin", "working on project", 100);
const invTwo = new Invoice("Ramseh", "for lying", 400);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.format());
});
const anchor = document.querySelector("a");
const form = document.querySelector(".new-item-form");
// type casting
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// classes

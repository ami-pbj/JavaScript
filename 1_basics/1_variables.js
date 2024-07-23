const customerId = 45362;
let customerEmail = "customer@example.com";
var customerPassword = "password";

// showing output on console
console.log(customerId);

// showing multiple outputs on console
console.log(customerId, customerEmail, customerPassword);

// showing multiple outputs on console => Array Format
console.log([customerId, customerEmail, customerPassword]);

// showing outputs on console in table format
// Console Table will accept data only in Array format
console.table([customerId, customerEmail, customerPassword]);



// Let vs Var in JavaScript
/*
Let : always prefer Let rather than Var
Var : Prefer not to use var because of issue in block scope and functional scope
*/


// Overwrite same variables
// Let can be overwrite
customerEmail = "overwrite@example.com"
console.log(customerEmail);
console.log(typeof customerEmail);

// Var can be overwrite
customerPassword = "overwritePassword"
console.log(customerPassword);
console.log(typeof customerPassword);

// Const can't be overwritten
// customerId = 27;
// console.log(customerAge);
// console.log(typeof customerAge);

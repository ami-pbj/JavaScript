// date and time

let myDate = new Date();

// date => Object type
console.log(typeof myDate);


// print Day, Date and Time in Coordinated Universal Time (UTC) => Thu Jul 25 2024 05:13:24 GMT+0000
console.log(myDate.toString());

// print Day and Date => Thu Jul 25 2024
console.log(myDate.toDateString());

// print Time in Coordinated Universal Time (UTC) => 05:13:24 GMT+0000
console.log(myDate.toTimeString());

// print only date => 7/25/2024
console.log(myDate.toLocaleDateString());

// print only time => 5:11:07 AM
console.log(myDate.toLocaleTimeString());

// print Date with Time => 7/25/2024, 5:11:07 AM
console.log(myDate.toLocaleString());
// date and time


// Create a new Date object to Print the Current Date and Time
let myDate = new Date();

// date => Object type
console.log(typeof myDate);

// Output => Current Date and Time
// Format => 2024-07-25T05:29:13.428Z
console.log(myDate);

// To display day of the week
// Format => 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday, 7 - Sunday
console.log(myDate.getDay());

// To display the date of the month => 25 for 25th
console.log(myDate.getDate());

// To get Month => (6 + 1) = 7 for July
// Since the Month is starting from 0 so we need to add 1 to get the current month
console.log(myDate.getMonth() + 1);

// To get Year => 2024
console.log(myDate.getFullYear());

// Output => Day, Date and Time in Coordinated Universal Time (UTC)
// Format => Thu Jul 25 2024 05:13:24 GMT+0000
console.log(myDate.toString());

// Output => Day and Date
// Format => Thu Jul 25 2024
console.log(myDate.toDateString());

// Output => Time in Coordinated Universal Time (UTC)
// Format => 05:13:24 GMT+0000
console.log(myDate.toTimeString());

// Output => only date
// Format => 7/25/2024
console.log(myDate.toLocaleDateString());

// Output => only time
// Format=> 5:11:07 AM
console.log(myDate.toLocaleTimeString());

// Output => Date with Time
// Format => 7/25/2024, 5:11:07 AM
console.log(myDate.toLocaleString());


// Create own Date and Time
// Since it's a Array format so the Month starts from 0 and range 0-11
// Month in Array format => 0 stands for January, 11 stands for December
let myCustomDateTime = new Date(2024, 0, 25, 5, 11, 7);
// Output => Custom Date and Time
// Format => 2024-01-25T05:11:07.000Z
console.log(myCustomDateTime);

// Create own Date
// It will take Time in T00:00:00.000Z by Default
let myCustomDate = new Date(2024, 11, 25);
// Output => Custom Date
// Format => 2024-12-25T00:00:00.000Z
console.log(myCustomDate);

// In String Type Date => Month starts from 1, January.
// Not like Array type Date where month starts from 0, January.
// Date Format => MM-DD-YYYY or YYYY-MM-DD
let myCustomDateString = new Date("12-25-2024");
// Output => Custom Date
// Format => MM-DD-YYYY => 12/25/2024
console.log(myCustomDateString.toLocaleDateString());

// Output is in Milliseconds 
let myTimeStamp = Date.now();

// Get the Time in Milliseconds from current time
console.log(myTimeStamp);

// Convert Time in Milliseconds to Date Object
console.log(myCustomDateString.getTime());


// Get the Number of Seconds from current time
console.log(Date.now()/1000);

// Used Math.round to Round off to the nearest integer
console.log(Math.round(Date.now()/1000));

// Used Math.floor to get the number of seconds and leave the decimal point
console.log(Math.floor(Date.now()/1000));



// STRING INTERPOLATION = `${}`
// `${myDate.getDay()} and the Time`


// Date Formatting
// To Customize the Date and Time
myDate.toLocaleString('default',{
    weekday: 'long',
    // timeZone: ''
})
//javascript function
//functions are blocks of codes that are designed to perform a specific test
//1. inbuilt functions
//2.user defined functions

// function firstFunction () {
//     console.log("my first function");
// }

// firstFunction()

// function secondFunction (x,y) {
//     console.log(x*y);
//     console.log(x+y);
// }
// secondFunction(2,5)
// secondFunction(8,9)
// secondFunction(9,2)

//create a function that convert fareheit to celsius

// function toCelsius(fareheit) {
//     console.log((fareheit - 32) * (5/9))
// }

// toCelsius(77)

//create a function that convert naira to dollar

// function toDollar(naira) {
//     console.log(naira / 850)

// }

// toDollar(5)

// // create a function that convert dollar to naira
// function toNaira(dollar) {
//     console.log(dollar*5)
// }
// toNaira(880)





//return function
// function addition (a,b) {
//     console.log(a + b);
//     return
//     console.log("hello")
// }

// addition(3, 5)

//using promptfunction collect a number and display the square of 
// the number in the console panel //you must use a function
// let square = prompt("enter a number")
// function toDisplay(square){
//     console.log(square*square)
// }
// toDisplay(square)

//arrow functions
// const addition = (a, b) => {
//     console.log(a + b);
// }
// addition(2, 4);


//arrays these are special variable that holds more than one value.
const cars = ["mazda","toyota", "benz", "bmw","camry","volvo"];
console.log(cars[0])
console.log(cars);
cars[0]="honda" //to replace the value
console.log(cars[cars.length-1]);


//adding a value to an array using the push method

cars.push("range rover")
console.log(cars);

//to remove last value of an array pop() method
cars.pop();
console.log(cars);
//using  promopt, collect three input from a user.put the input in an 
//array and display themin the console panel
// const input1 = prompt("enter a number");
// const input2 = prompt("enter a second number");
// const input3 = prompt("enter the last number");
// const funct=[];
//     funct.push(input1);
//     funct.push(input2);
//     funct.push(input3);
//     console.log(funct);
// //OR
// const test = [];
// test.push(input1);
// test.push(input2);
// test.push(input3);
// console.log(test)





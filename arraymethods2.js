//array methods
//()=>{}callback fn

// const names ="bad man,good man" //split string method

// const resultNames =names.split(",");
// console.log(resultNames);

//array method example

const newArr = ["astron",22,true];
const arrResult = newArr.push("money");
console.log("New length",arrResult);
console.log(newArr);

//poparray method example
const Arraypop = [1,2,3,4,5];
const popArray = newArr.pop();
console.log("Arraypopped",popArray);
console.log(Arraypop);

//unshift array method
let unshift = [1,3,5,7];
let unshiftResult = unshiftArr.unshift(0);
console.log(unshiftResult);
console.log(unshiftArr);

//shift array method
let shiftArr =  [4,6,8];
let shiftArrResult = shiftArr.shift();
console.log(shiftArrResult);
console.log(shiftArr);

//reverse array method
let company = [1,2,3,4,5,6,7];
let reversedArr = names.reverse();
console.log(reversedArr);

//activity 
// write a js code that a string that reverses "hello"to be "olleh"

const word = "hello"
const output = "olleh"
console.log(output);
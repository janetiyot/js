// document.getElementById("text").innerHTML="new text";



// // document.getElementById("good").innerHTML="howdy";
// //OR
// let testvariable = document.getElementById("good");
// testvariable.innerHTML = "howdy";
// testvariable.style.color="green"


// //event in javascript this is a way that you can wait for user interaction

// const btn = document.getElementById("btn");
// //click event
// const colorchange = () =>  {
//     testvariable.style.color = "red";
// }

// //using the doubleclick method

// btn.addEventListener("click",colorchange)

// //class work
// //when you hover on the button change the text to it works
// testvariable.innerHTML ="it works!!"
// testvariable.style.color="blue"
// btn.addEventListener("mouseover",()=>{
//     testvariable.style.color="red"
// });{

// }






// //style a text element with js,
// // give it padding, border, background,color,fontsize, and color.
// let element = document.getElementById("js");
// element.innerHTML = "JAVASCRIPT";
// element.style.Padding="70px"
// element.style.border="solid 20px black"
// element.style.backgroundColor="purple"
// element.style.fontSize="20px"
// element.style.color="white"

// let input = document.querySelector("#input");
// let btn = document.querySelector("#btn");
// let text = document.querySelector("#text");

// btn.addEventListener("click", () =>{
//     text.innerHTML = input.value;

// });

let input = document.querySelector("#input");
let btn = document.getElementsByClassName("btn");

 

//THIS IS FOR MULITIPLE BUTTONS
      // input.value = btn[i].innerHTML; //only for a single digit

   for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {

        input.value += btn[i].innerHTML;
   });
}

//OR THIS IS FOR A PARTICULAR BUTTON
// btn[2].addEventListener("click", () => {
//     input.value = btn[2].innerHTML;

// });

//how to convert to array
// let num = "12345"
// let array = num.split("")

// array.pop
// pop() 


// adding modulus and decimals to caculator


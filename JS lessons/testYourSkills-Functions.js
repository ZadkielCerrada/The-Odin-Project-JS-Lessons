// Functions 1

// For the 1str task, you have to create a simple function -- 'chooseName() -- that prints a random name from the provided array ( names ) to the provided paragraph ( para ), and the run it once.

// const names = [
//     "Chris",
//     "Li Kang",
//     "Anne",
//     "Francesca",
//     "Mustafa",
//     "Tina",
//     "Bert",
//     "Jada",
// ];
// const para = document.createElement("p");

// // Add your code here

// const chooseName = names[Math.floor(Math.random() * names.length)];
// para.innerHTML = chooseName;

// // Don't edit the code below here!

// section.innerHTML = "";
// section.appendChild(para);

// -------------------------------------------------------------------------------------------------------------------------

// Functions 2

// For our 2nd functions-related task, you need to create a function that draws a rectangle on the provided <canvas> (reference variable canvas, context available in ctx), based on the five provided input variables:

// * x -- the x coordinate of the rectangle.
// * y -- the y coordinate of the rectangle.
// * width -- the width of the rectangle.
// * height -- the height of the rectangle.
// * color -- the color of the rectangle.

// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// const x = 50;
// const y = 60;
// const width = 100;
// const height = 75;
// const color = "blue";

// // Add your code here

// function drawRectangle() {
//     if (!canvas.getContext) {
//         return;
//     }

//     ctx.fillStyle = "blue";
//     ctx.fillRect(50, 60, 100, 75);
// }

// drawRectangle();

// -------------------------------------------------------------------------------------------------------------------------

// Functions 3

// In this task, you return to the problem posed in Task 1, with the aim of improving it. The 3 improvements we want you to make are:

// 1. Refactor the code that generates the random number into a separate function called 'random()', which takes as parameters 2 generic bounds that the random number should be between, and returns the result.

// 2. Update the 'chooseName()' function so that it makes use of the random number function, takes the array to choose from as a parameter (making it more flexible), and returns the result.

// 3. Print the returned result into the paragraph ( para )'s 'textContent'.

// const names = [
//     "Chris",
//     "Li Kang",
//     "Anne",
//     "Francesca",
//     "Mustafa",
//     "Tina",
//     "Bert",
//     "Jada",
// ];
// const para = document.createElement("p");

// // Add your code here

// function random(names) {
//     let result = Math.floor(Math.random() * names.length);
//     return result;
// }

// const chooseName = random()

// //  Don't edit the code below here!

// section.innerHTML = "";
// section.appendChild(para); <----.
//                                 |
// Not done _______________________|

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm("Did parents allow you?");
//     }
// }

// function checkAge(age) {
//     return age > 18 ? true : confirm"Did your parents allow you?";
// }

// function checkAge(age) {
//     return age > 18 || confirm("Did your parents allow you?");
// }

//

// function min(a, b) {
//     if (a > b) {
//         alert(b);
//     } else {
//         alert(a);
//     }
// }

// min(2, 1);

// function pow(x, n) {
//     alert(x ** n);
// }

// pow(2, 21);

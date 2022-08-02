// || 'OR' and && 'AND' operators
// * Evaluates operands from left to right.

// ----------------------------------------------------------------------------------------------------------------------------

// Title: Check the range between

// Write and 'if' condition to check that 'age' is between '14' and '90' inclusively.

// Using 'if' statement

// let age = prompt("Enter age.");

// if (age >= 14 && age <= 90) {
//     alert("Right!");
// } else {
//     alert("Wrong.");
// }

// alert(result);

// Using '?' conditional operator

// let age = prompt("Enter age.");

// age >= 14 && age <= 90 ? alert("Right!") : alert("Wrong!");

// alert(age);

// ----------------------------------------------------------------------------------------------------------------------------

// Title: Check the range outside.

// Write an 'if' condition to check that 'age' is NOT between '14' and '90' inclusively. Create 2 variants: the 1st one using ! 'NOT', the 2nd one - without it.

// Using 'if' statement:
// 1st one: (my answer)
// let age = prompt("Enter age.");

// if (age >= 14 && age <= 90) {
//     alert("In Between");
// } else if (age != 14 || age != 90) {
//     alert("Not in between");
// }

// alert(age);

// or (javascript.info/logical-operators answer)

// let age = prompt("Enter age.");

// if (!(age >= 14 && age <= 90)) {
//     alert("Not in between");
// } else {
//     alert("In between");
// }

// alert(age);

// 2nd one (w/o using '!' NOT):
// let age = prompt("Enter age.");

// if (age < 14 || age > 90) {
//     alert("Not in between");
// } else {
//     alert("In between");
// }

// alert(age);

// Using '?' conditional operator:
// 1st one: (using ! 'NOT')

// let age = prompt("Enter age.");

// !(age >= 14 && age <= 90) ? alert("Not in between") : alert("In between");

// alert(age);

// 2nd one:

// let age = prompt("Enter age.");

// age < 14 || age > 90 ? alert("Not in between") : alert("In between");

// alert(age);

// ----------------------------------------------------------------------------------------------------------------------------

// Title: Check the login

// Using 'if' statement.

// let login = prompt("Who's there?");

// if (login == "Admin") {
//     let password = prompt("Password?");
//     if (password == "TheMaster") {
//         alert("Welcome!");
//     } else if (!password) {
//         alert("Cancelled");
//     } else if (password !== "TheMaster") {
//         alert("Wrong password");
//     }
// } else if (!login) {
//     alert("Canceled");
// } else if (login !== "Admin") {
//     alert("I don't know you");
// }

// Using '?' conditional operator:

// let question = prompt("Who's there?");

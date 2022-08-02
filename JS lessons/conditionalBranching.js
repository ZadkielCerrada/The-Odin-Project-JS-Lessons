// let login = prompt("Who's there?");

// if (login === "Admin") {
//     let login = prompt("Password?");

// if (password === "TheMaster") {
//     let password = alert("Welcome!");
// }
// else if (login === null) {
//     alert ("Cancelled")
// } else {
//     alert ("Wrong Password")
// }

// else if (login === !"Admin") {

// }
// }

// document.querySelector

// let age = prompt("age?", 18);

// let message =
//     age < 3
//         ? "Hi, baby!"
//         : age < 18
//         ? "Hello!"
//         : age < 100
//         ? "Greetings!"
//         : "What an unusual age!";

// alert(message);

// let company = prompt("Which company created Javascript?", "");

// company == "Netscape" ? alert("Right!") : alert("Wrong.");
// alert(company);

// ----------------------------------------------------------------------------------------------------------------------------

// if ("0") {
//     alert("Hello");
// }

// ----------------------------------------------------------------------------------------------------------------------------

// Using the conditional operator '?':

// let officialName = prompt('What is the "official" name of JavaScript?');

// officialName == "ECMAScript" ? alert("Right!") : alert("Wrong!");
// alert(officialName);

// Using the if else statement:

// let officialName = prompt('What is the "official" name of JavaScript?');

// if (officialName == "ECMAScript") {
//     alert("Right!");
// } else {
//     alert("Wrong!");
// }

// ----------------------------------------------------------------------------------------------------------------------------

// Title = Show the sign

// Using the conditional operator '?':

// let input = prompt("Enter any number.");

// let value = input < 0 ? "-1" : input > 0 ? "1" : "0";

// alert(value);

// Using the if else statement:

// let input = prompt("Enter any number.");

// if (input < 0) {
//     alert("-1");
// } else if (input == 0) {
//     alert("0");
// } else {
//     alert("1");
// }

// ----------------------------------------------------------------------------------------------------------------------------

// Title = Rewrite 'if' statement into '?' conditional operator.

// let a = prompt("Enter 1st number.");
// let b = prompt("Enter 2nd number.");
// let result;

// if (a + b < 4) {
//     result = "Below";
// } else {
//     result = "Over";
// }
// alert(result);

// becomes:

// let a = prompt("Enter 1st number.");
// let b = prompt("Enter 2nd number.");

// let result = a + b < 4 ? "Below" : "Over";

// alert(result);

// ----------------------------------------------------------------------------------------------------------------------------

// Title = Rewrite 'if..else' statement into '?' conditional operator.

// let login = prompt("Login");
// let message;

// if (login == "Employee") {
//     message = "Hello";
// } else if (login == "Director") {
//     message = "Greetings";
// } else if (login == "") {
//     message = "No login";
// } else {
//     message = "";
// }

// alert(message);

// becomes:

// let login = prompt("Login");

// let message =
//     login == "Employee"
//         ? "Hello"
//         : login == "Director"
//         ? "Greetings"
//         : (login = "")
//         ? "No login"
//         : "";

// alert(message);

// ----------------------------------------------------------------------------------------------------------------------------

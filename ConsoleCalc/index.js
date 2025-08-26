const prompt = require("prompt-sync")();


// while(true){
//     number1 = parseFloat(prompt("Please enter the first number: ")); // parseFloat cast a string pra float
//     if(isNaN(number1)) {
//         console.log("Invalid input")
//     } else {
//         break;
//     }
// }

// while(true){
//     number2 = parseFloat(prompt("Please enter the second number: ")); // parseFloat cast a string pra float
//     if(isNaN(number2)) {
//         console.log("Invalid input")
//     } else {
//         break;
//     }
// }

function validateNumbers(numberString) {
    while(true){
        const number = parseFloat(prompt("Enter " + numberString + " number: " )); // parseFloat cast a string pra float
        if(isNaN(number)) {
            console.log("Invalid input")
        } else {
            return number;
        }
    }
}

const number1 = validateNumbers("first");
const number2 = validateNumbers("second");

//const number2 = parseFloat(prompt("Please enter the second number: "));
const operator = prompt("Please enter the operator: ");

let result;
let valid = true;
switch (operator){
    case '+':
        result = number1 + number2;
        break;
    case '-': 
        result = number1 - number2;
        break;
    case '*': 
        result = number1 * number2;
        break;
    case '/': 
        result = number1 / number2;
        break;
    default:
        console.log("Invalid Operator");
        valid = false;
        break;
}

if (valid) console.log(number1, operator, number2, "=", result);




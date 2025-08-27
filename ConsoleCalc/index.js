const prompt = require("prompt-sync")();

function validateNumbers(numberString) {
    while(true){
        const number = parseFloat(prompt("Enter " + numberString + " number: " )); // parseFloat cast a string pra float
        if(isNaN(number)) {
            console.log("Invalid input");
        } else {
            return number;
        }
    }
}

function validateOperator() {
    while(true) {
        const operator = prompt("Enter the operator: ");
        const operators = ["*", "/", "+", "-"];
        if (!operators.includes(operator)) {
            console.log("Invalid operator");
        } else {
            return operator;
        }
    }
}

const number1 = validateNumbers("first");
const number2 = validateNumbers("second");

const operator = validateOperator();

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




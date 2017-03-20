var readlineSync = require("readline-sync");

function add(num1, num2) {
	return parseInt(num1) + parseInt(num2);
}

function multiply(num1, num2) {
	return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
	return parseInt(num1) / parseInt(num2);
}

function subtract(num1, num2) {
	return parseInt(num1) - parseInt(num2);
}

var num1 = readlineSync.question("Select the first number: ");

var num2 = readlineSync.question("Select the second number: ");

var functions = ["add", "multiply", "divide", "subtract"];

var newFunction = readlineSync.keyInSelect(functions, "Please select an operation");

if (newFunction === 0) {

	console.log(add(num1, num2));

} else if (newFunction === 1) {

	console.log(multiply(num1, num2));

} else if (newFunction === 2) {

	console.log(divide(num1, num2));

} else {

	console.log(add(num1, num2));

}
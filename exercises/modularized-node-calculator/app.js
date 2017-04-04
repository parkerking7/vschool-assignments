var readlineSync = require("readline-sync");

var operations = ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation"]

var numOne = readlineSync.question("Can I grab a first number from you? ");

var numTwo = readlineSync.question("Can I grab a second number from you? ");

var type = readlineSync.keyInSelect(operations, "Which operation would you like to use?");

var addition = require("./addition");
var subtraction = require("./subtraction");
var multiplication = require("./multiplication");
var dividing = require("./division");
var division = new dividing();
var exponentiation = require("./exponentiation");

numOne = parseInt(numOne);
numTwo = parseInt(numTwo);

function find(type) {
	if (type === 0) {
		addition(numOne, numTwo);
	} else if (type === 1) {
		subtraction.subtract(numOne, numTwo);
	} else if (type === 2) {
		multiplication.multiplyFunc(numOne,numTwo)
	} else if (type === 3) {
		division.divide(numOne, numTwo);
	} else if (type === 4) {
		exponentiation.exponent(numOne, numTwo);
	}
}

find(type);
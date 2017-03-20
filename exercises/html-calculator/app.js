var addButton = document.getElementById("addButton");
var subtractButton = document.getElementById("subtractButton");
var multiplyButton = document.getElementById("multiplyButton");

function addition(num1, num2) {
	var num1 = document.getElementById("num1");
	var num2 = document.getElementById("num2");
	return parseInt(num1.value) + parseInt(num2.value);
}

function subtraction(num3, num4) {
	var num3 = document.getElementById("num3");
	var num4 = document.getElementById("num4");
	return parseInt(num3.value) - parseInt(num4.value);
}

function multiplication(num5, num6) {
	var num5 = document.getElementById("num5");
	var num6 = document.getElementById("num6");
	return parseInt(num5.value) * parseInt(num6.value);
}

addButton.addEventListener("click", function () {
	document.getElementById("additionAnswer").textContent = addition(num1, num2);
});
subtractButton.addEventListener("click", function () {
	document.getElementById("subtractionAnswer").textContent = subtraction(num3, num4);
});
multiplyButton.addEventListener("click", function () {
	document.getElementById("multiplicationAnswer").textContent = multiplication(num5, num6);
});
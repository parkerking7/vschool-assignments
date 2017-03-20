function sum(num1, num2) {
	return num1 + num2;
}

console.log(sum(7, 10));

function largestNum(num1, num2, num3) {
	return Math.max(num1, num2, num3);
}

console.log(largestNum(200, 7, 1));

function oddOrEven(num) {
	if (num % 2 === 0) {
		return ("even");
	} else {
		return ("odd");
	}
}
console.log(oddOrEven(7));

var str = "Cat's are definitely the worst animals in existence";

function strLength(str) {
	if (str.length <= 20) {
		return str + str;
	} else {
		return str.slice(0, (str.length / 2));
	}
}
console.log(strLength(str));

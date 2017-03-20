var newCount = []

function fizzBuzz() {
	for (var i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			newCount.push("FizzBuzz");
		} else if (i % 3 === 0) {
			newCount.push("Fizz");
		} else if (i % 5 === 0) {
			newCount.push("Buzz");
		} else {
			newCount.push(i);
		}
	}
}

fizzBuzz();

console.log(newCount);

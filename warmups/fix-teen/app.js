function noTeenSum(a, b, c) {
	if (fixTeen(a) !== true) {
		a = 0;
	} else if (fixTeen(b) !== true) {
		b = 0;
	} else if (fixTeen(c) !== true) {
		c = 0;
	}
	console.log(a + b + c);
}

function fixTeen(n) {
	if (n === 15 || n === 16) {
		return true;
	} else if (n <= 19 && n >= 13) {
		return false;
	} else {
		return true;
	}
}

noTeenSum(1, 2, 3);
noTeenSum(2, 13, 1);
noTeenSum(2, 1, 14);
noTeenSum(2, 15, 14);
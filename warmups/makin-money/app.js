function formatMoney(num) {
	num += "";
	num = (num.split('').reverse());
	for (var i = 0; i < num.length; i++) {
		if (i === 2) {
			num[i] += '.';
		} else if ([i - 2] % 3 === 0) {
			num[i] += ",";
		}
	}
	num.push("$")
	num = (num.reverse().join(''));
	console.log(num)
}
formatMoney(123456789);

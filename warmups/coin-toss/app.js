function coverValue(arr, coinType) {
	var arrVal = [];
	var finalVal = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === "penny") {
			arrVal.push(1);
		} else if (arr[i] === "nickel") {
			arrVal.push(5);
		} else if (arr[i] === "dime") {
			arrVal.push(10);
		} else if (arr[i] === "quarter") {
			arrVal.push(25);
		}
		finalVal += arrVal[i]
	}
	if (coinType === "penny") {
		coinType = 1;
	} else if (coinType === "nickel") {
		coinType = 5;
	} else if (coinType === "dime") {
		coinType = 10;
	} else if (coinType === "quarter") {
		coinType = 25;
	}
	finalVal = Math.floor(finalVal / coinType) + 1;
	console.log(finalVal)
}


coverValue(["penny", "nickel", "dime"], "quarter") // -> 1`
coverValue(["penny", "nickel", "dime"], "nickel") // -> 4`
coverValue(["penny", "nickel", "dime", "dime", "quarter"], "dime") // -> 6`

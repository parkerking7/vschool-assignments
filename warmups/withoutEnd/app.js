function withoutEnd2(str) {
	var newStr = str;
	var sliceAmount = newStr.length - 1
	newStr = newStr.slice(1, sliceAmount);
	console.log(newStr);
}

withoutEnd2("hel")





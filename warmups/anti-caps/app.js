var newStr = "";
var str = "bAnAnA"
function antiCaps(str) {
	for (var i = 0; i < str.length; i++) {
		if (isCaps(str[i])) {
			newStr += (str[i].toLowerCase());
		} else {
			newStr += (str[i].toUpperCase());
		}
	}
	console.log(newStr);
}
function isCaps(letter) {
	return letter === letter.toUpperCase();
}

antiCaps(str);
function firstRepeat(str) {
	str = str.toLowerCase()
	var newChar = str[0];
	for (var i = 0; i < str.length; i++) {
		if (str[i] === newChar || str[i] == str[i - 1] || str[i] === str[i + 1]) {
			continue;
		} else {
			return str[i];
		}
	}
}

console.log(firstRepeat("ggggggggbbxxxkkllkkkkjfvlsjkfg"));



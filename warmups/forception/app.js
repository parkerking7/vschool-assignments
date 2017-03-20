var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var result = [];

function nameAlphabet(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		result.push(arr1[i] + ":");
		for (var j = 0; j < arr2.length; j++) {
			result.push(arr2[j].toUpperCase());
		}
	}
	console.log(result.join());
}
nameAlphabet(people, alphabet);
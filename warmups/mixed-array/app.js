var mixedArr = ["cat", [1, 2, 3], "dog", 1, 4, {
	name: "john"
}, ["pie", "cake"]];

var combinedObj = {
	strings: [],
	arrays: [],
	objects: [],
	numbers: []
}

function fixedArr(arr) {

	for (var i = 0; i < arr.length; i++) {
		var newArr = arr[i];
		if (arr[i] instanceof Array) {
			combinedObj.arrays.push(newArr);
		} else if (typeof arr[i] === "string") {
			combinedObj.strings.push(arr[i]);
		} else if (typeof arr[i] === "object") {
			combinedObj.objects.push(arr[i]);
		} else if (typeof arr[i] === "number") {
			combinedObj.numbers.push(arr[i]);
		}
	}

	console.log(combinedObj);
}

fixedArr(mixedArr);

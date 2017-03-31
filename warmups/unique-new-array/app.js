function findUniques(arrOne, arrTwo) {
	var returnedArr = [];
	var newArr = arrOne.concat(arrTwo);
	newArr.sort(function (a, b) {
		return a - b;
	})
	for (var i = 0; i < newArr.length; i++) {
		if (newArr[i] === newArr[i + 1] || newArr[i] === newArr[i - 1]) {
		} else { 
			returnedArr.push(newArr[i]);
		}
	}
	return returnedArr;
}


console.log(findUniques([1, 2, 5], [1, 2, 8, 9, 10]));



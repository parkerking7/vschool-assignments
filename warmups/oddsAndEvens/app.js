//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.

var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.

function oddsAndEvens(arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] % 2 == 0) {
			evens.push(arr[i]);
		} else {
			odds.push(arr[i]);
		}
	}
		
}

oddsAndEvens([17,27,6,5,4,22,13]);
console.log(evens);
console.log(odds);
